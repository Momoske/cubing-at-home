import { getUserResults } from '../logic/wca-api'

export const createNewUser = async (firebase, user) => {
	let user_results = null
	if (user.wca_id !== null && user.wca_id !== undefined) {
		user_results = await getUserResults(user)
	}
	const db = firebase.firestore()
	return new Promise((resolve, reject) => {
		const docData = {
			wca: {
				avatar: user.avatar,
				country_iso2: user.country_iso2,
				email: user.email,
				gender: user.gender,
				id: user.id,
				name: user.name,
				wca_id: user.wca_id ? user.wca_id : null,
				last_updated: new Date(),
				personal_records: user_results
					? user_results.personal_records
					: {},
				isDelegate:
					user_results && user_results.delegate_status ? true : false,
			},
			data: {
				competitions: [],
				results: [],
			},
		}
		db.collection('Users')
			.doc(user.id.toString())
			.set(docData)
			.then(resolve(docData))
			.catch((err) => reject(err))
	})
}

export const createNewCompetition = async (
	firebase,
	competition,
	eventInfo
) => {
	const db = firebase.firestore()
	return db
		.collection(competition.id)
		.doc('info')
		.set(competition)
		.then(() => {
			db.collection(competition.id)
				.doc('events')
				.set({ eventInfo: eventInfo })
				.then(() => {
					db.collection('Competitions').doc(competition.id).set({
						id: competition.id,
						name: competition.name,
						start: competition.start,
						end: competition.end,
					})
				})
		})
}

export const registerCompetitor = async (firebase, userId, competitionId) => {
	const db = firebase.firestore()
	return new Promise((resolve, reject) => {
		db.collection('Users')
			.doc(userId)
			.update({
				'data.competitions': firebase.firestore.FieldValue.arrayUnion(
					competitionId
				),
			})
			.then(
				db
					.collection(competitionId)
					.doc('info')
					.update({
						competitors: firebase.firestore.FieldValue.arrayUnion(
							userId
						),
					})
					.then(() => {
						db.collection(competitionId)
							.doc(userId)
							.set({})
							.then(() => resolve())
							.catch((err) => reject(err))
					})
			)
	})
}

export const cancelCompetitor = async (firebase, userId, competitionId) => {
	const db = firebase.firestore()
	return db
		.collection('Users')
		.doc(userId)
		.update({
			'data.competitions': firebase.firestore.FieldValue.arrayRemove(
				competitionId
			),
		})
		.then(
			db
				.collection(competitionId)
				.doc('info')
				.update({
					competitors: firebase.firestore.FieldValue.arrayRemove(
						userId
					),
				})
				.then(() => db.collection(competitionId).doc(userId).delete())
		)
}