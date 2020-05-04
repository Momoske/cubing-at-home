export const text = {}

export const rounds = [
	{
		id: 'twitch',
		name: 'Twitch Solves',
		start: '12:00',
		end: '13:00',
		qualification: '',
	},
	{
		id: '',
		name: 'Welcome',
		start: '13:00',
		end: '13:10',
		qualification: '',
	},
	{
		id: 'minx',
		name: 'Megaminx Final',
		start: '13:10',
		end: '13:35',
		qualification: '',
	},
	{
		id: '555',
		name: '5x5 Final',
		start: '13:35',
		end: '14:00',
		qualification: '',
	},
	{
		id: '333',
		name: '3x3 Round 1',
		start: '14:00',
		end: '14:20',
		qualification: '',
	},
	{
		id: '234567relay',
		name: 'Relay Exhibition',
		start: '14:20',
		end: '14:30',
		qualification: '',
	},
	{
		id: '2345relay',
		name: '2x2 - 5x5 Relay',
		start: '14:30',
		end: '14:45',
		qualification: '',
	},
	{
		id: '333',
		name: '3x3 Round 2',
		start: '14:45',
		end: '15:00',
		qualification: 'Top 50%',
	},
	{
		id: 'sq1',
		name: 'Square-1 Final',
		start: '15:00',
		end: '15:15',
		qualification: '',
	},
	{
		id: 'pyram',
		name: 'Pyraminx Final',
		start: '15:15',
		end: '15:30',
		qualification: '',
	},
	{
		id: '333oh',
		name: '3x3 One-Handed Final',
		start: '15:30',
		end: '15:45',
		qualification: '',
	},
	{
		id: '333',
		name: '3x3 Final',
		start: '15:45',
		end: '17:00',
		qualification: 'Top 8',
	},
	{
		id: '',
		name: 'Awards',
		start: '17:15',
		end: '17:20',
		qualification: '',
	},
]

export const faq = {
	title: 'Frequently asked Questions',
	rows: [
		{
			title:
				'Is this competition official? Will the results be on my WCA Account?',
			content:
				'Cubing At Home is not an official WCA Competition. All results are unofficial and are not tracked or recognized by the WCA',
		},
		{
			title: 'Can I listen to music? Do I have to follow X WCA Regulation?',
			content:
				'We recommend that you follow WCA Regulations as close as possible. This means that you may not listen to music while solving.',
		},
		{
			title:
				'Am I registered for everything? Do I need to register for a specific event?',
			content:
				' You are registered for all events, if you plan on not competing in an event then just dont enter results for it',
		},
		{
			title: 'Do I need to film all my solves?',
			content:
				"You only need to film to claim a prize for podiuming or making it into Finals (Top 8)! If you don't think you will podium or make finals then there is no need to film",
		},
		{
			title: 'How am I supposed to time my solves? Keep track of inspection?',
			content:
				' We recommend using a stackmat to time solves but you can feel free to use any website or app to keep track of time. To keep track of inspection you can use built in app or timer features on your timer or alternatively you can go to https://cubing.net/inspection/',
		},
		{
			title: "Can I still compete if I don't know how to scramble?",
			content:
				"We require competitors to know how to scramble events they compete in. If you do not know how to scramble an event, please make sure to learn it. <a href='https://www.youtube.com/watch?v=QZ3jOJ6VKdw'>Here </a> is a good resource for learning notation and scrambling for most events.",
		},

		{
			title: 'Where will I submit my times?',
			content:
				"You will submit your times using a google form which can be found on the <a href='/scrambles'>scrambles</a> page",
		},
		{
			title: 'Where do I submit videos if I podium?',
			content:
				"We will reach out to you to get videos. Please make sure to be active on the <a href='/cubing-at-home-I/discord'>discord </a>",
		},
	],
}

export const admins = [
	'2008SAMP01',
	'2014NIEL03',
	'2016BAIR01',
	'2014GROV01',
	'2012ELLI01',
	'2016GRIT01',
	'2017RICH02',
	'2014SHIE03',
	'2017MILL04',
	'2019KELL11',
	'2015MCKE02',
	'2018SAMP01',
]

export const activityKey = {
	'222': '2x2x2',
	'333': '3x3x3',
	'444': '4x4x4',
	'555': '5x5x5',
	'666': '6x6x6',
	'777': '7x7x7',
	pyram: 'Pyraminx',
	'333oh': '3x3x3 One-Handed',
	'333bf': '3x3x3 Blindfolded',
	'444bf': '4x4x4 Blindfolded',
	skewb: 'Skewb',
	clock: 'Clock',
	'333ft': '3x3x3 with Feet',
	'333mbf': '3x3x3 Multiple Blindfolded',
	'333fm': 'Fewest Moves',
	sq1: 'Square 1',
	minx: 'Megaminx',
	'234567relay': '2x2 - 7x7 Relay',
	'2345relay': '2x2 - 5x5 Relay',
	kilominx: 'unofficial-kilominx',
	mpyram: 'unoffical-mpyram',
	redi: 'unofficial-redi',
	'666bf': 'unofficial-666bf',
	'777bf': 'unofficial-777bf',
	miniguild: 'unofficial-miniguild',
}
