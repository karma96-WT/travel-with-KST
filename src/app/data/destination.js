export const destinations = [
  {
    id: 1,
    title: "Tiger's Nest (Paro Taktsang)",
    text: 'A monastery clinging to a cliff high above Paro valley. The hike up through pine forest is the most famous walk in Bhutan.',
    image: '/images/Taktshang-photo.jpg',
    location: 'Paro',
    duration: '1 day (4–5 hour round trip hike)',
    bestTime: 'March–May, September–November',
    altitude: 'About 3,120 m',
    difficulty: 'Moderate',
    description:
      "Perched on a cliff roughly 900 m above the Paro valley floor, Taktsang is Bhutan's best-known landmark. The trail climbs through blue pine forest and prayer flags, with a tea stop halfway where the monastery first comes into view.",
    highlights: [
      'Halfway cafeteria with a view of the monastery',
      'Prayer flags and a waterfall on the final stretch',
      'Guided temple visit (cameras are not allowed inside)',
    ],
  },
  {
    id: 2,
    title: 'Punakha Dzong',
    text: 'A grand fortress built where the Pho Chhu and Mo Chhu rivers meet, best seen in spring when the jacaranda trees bloom.',
    image: '/images/Punakha dzong.jpg',
    location: 'Punakha',
    duration: 'Half day',
    bestTime: 'March–May, September–November',
    altitude: 'About 1,250 m',
    difficulty: 'Easy',
    description:
      'Built in the 17th century, Punakha Dzong sits at the meeting point of two rivers and served as the seat of government for many years. Its courtyards, carved wooden balconies and the long cantilever bridge over the river are all part of the visit.',
    highlights: [
      'Wooden suspension bridge across the Pho Chhu',
      'Jacaranda blossoms in spring',
      'Inner courtyards and the main assembly hall',
    ],
  },
  {
    id: 3,
    title: 'Dochula Pass',
    text: 'A mountain pass at 3,100 m with 108 memorial chortens and wide Himalayan views on clear mornings.',
    image: '/images/dochula.webp',
    location: 'Between Thimphu and Punakha',
    duration: '1–2 hours stop',
    bestTime: 'October–March (clearest mountain views)',
    altitude: 'About 3,100 m',
    difficulty: 'Easy',
    description:
      'The pass is covered in prayer flags and marked by 108 memorial chortens. On clear mornings you can see a long line of Himalayan peaks, and there is a small temple and cafe at the top.',
    highlights: [
      '108 memorial chortens (Druk Wangyal Chortens)',
      'Panoramic Himalayan views on clear days',
      'Hot tea and snacks at the pass cafe',
    ],
  },
  {
    id: 4,
    title: 'Phobjikha Valley',
    text: 'A wide glacial valley and the winter home of the black-necked cranes, with easy nature trails and quiet villages.',
    image: '/images/phobjikha valley.jpeg',
    location: 'Wangdue Phodrang',
    duration: '1–2 days',
    bestTime: 'November–February (cranes), April–May (flowers)',
    altitude: 'About 3,000 m',
    difficulty: 'Easy',
    description:
      'This broad U-shaped valley is a protected area and the winter home of black-necked cranes that migrate from the Tibetan plateau. The Gangtey Nature Trail crosses meadows and small villages, ending near Gangtey Monastery.',
    highlights: [
      'Black-necked cranes in winter',
      'Gangtey Nature Trail',
      'Gangtey Monastery overlooking the valley',
    ],
  },
  {
    id: 5,
    title: 'Haa Valley',
    text: 'A remote valley close to the border, known for traditional farmhouses, local festivals and the Chele La pass.',
    image: '/images/haa-valley-guide.webp',
    location: 'Haa',
    duration: '1–2 days',
    bestTime: 'April–October',
    altitude: 'About 2,700 m (Chele La pass is near 4,000 m)',
    difficulty: 'Easy to moderate',
    description:
      'Haa was closed to most visitors for decades and still feels quiet. Visitors come for traditional farmhouse stays, the drive over Chele La pass, and the summer festival that celebrates local food and culture.',
    highlights: [
      'Drive over Chele La pass',
      'Farmhouse homestays',
      'Haa Summer Festival (July)',
    ],
  },
  {
    id: 6,
    title: 'Bumthang Valleys',
    text: 'The spiritual heartland of Bhutan, home to some of its oldest temples, including Jambay Lhakhang.',
    image: '/images/Bumthang.jpg',
    location: 'Bumthang',
    duration: '2–3 days',
    bestTime: 'March–May, September–November',
    altitude: 'About 2,600–2,800 m',
    difficulty: 'Easy',
    description:
      'Bumthang is made up of four valleys and holds many of the oldest temples and monasteries in the country. Visitors can also try local buckwheat pancakes, cheese and honey, and walk between villages.',
    highlights: [
      'Jambay Lhakhang, one of the oldest temples in Bhutan',
      'Burning Lake (Membartsho) pilgrimage site',
      'Local cheese, honey and buckwheat dishes',
    ],
  },
  {
    id: 7,
    title: 'Trongsa Dzong',
    text: 'The largest fortress in Bhutan, set on a ridge above a deep gorge and central to the history of the royal family.',
    image: '/images/Trongsa-Dzong.jpg',
    location: 'Trongsa',
    duration: 'Half day',
    bestTime: 'March–May, September–November',
    altitude: 'About 2,200 m',
    difficulty: 'Easy',
    description:
      'The fortress stretches along a ridge above the Mangde Chhu gorge. It has long been tied to the royal family, and the nearby Ta Dzong watchtower houses a museum about the dzong and the monarchy.',
    highlights: [
      'Long winding approach road with gorge views',
      'Ta Dzong watchtower museum',
      'Many levels, courtyards and passages to explore',
    ],
  },
  {
    id: 8,
    title: 'Jomolhari Trek',
    text: 'A multi-day trek beneath the sacred peak of Jomolhari, passing yak herder camps and high alpine lakes.',
    image: '/images/jhomolhari.jpeg',
    location: 'Paro (Jigme Dorji National Park)',
    duration: 'About 8 days',
    bestTime: 'April–May, September–October',
    altitude: 'Up to about 4,800 m',
    difficulty: 'Challenging',
    description:
      'The trek follows the Paro Chhu river upward through forest and yak pastures to the base of Jomolhari (7,326 m). It crosses high passes and is a good choice for experienced walkers who want to see remote Himalayan scenery.',
    highlights: [
      'Camp at Jangothang beneath Jomolhari',
      'Yak herder camps and high alpine lakes',
      'High passes with wide mountain views',
    ],
  },
]

export const getDestination = (id) =>
  destinations.find((d) => String(d.id) === String(id))