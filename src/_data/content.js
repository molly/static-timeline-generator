const header = 'Welcome to this wonderful example timeline.';
const footer = 'A footer goes here.';
const entries = [
  {
    id: 'hives-at-lcr',
    color: 'green',
    faicon: 'icons',
    datetime: '2024-04-10 19:30',
    title: 'The Hives',
    image: {
      src: 'img/gigs/the-hives-at-lcr.jpg',
      alt: 'The Death of Randy Fitzsimmons Tour 2024',
      caption: 'The Death of Randy Fitzsimmons Tour 2024',
    },
    body: "The Hives… on a creative hiatus… surely not? Yet, while it has been over ten years since the Swedish band’s last album, 2012’s Lex Hives, anyone fearing they have fallen into the ageing rock cliche of an act touring on past glories can rest easy. Yes, The Death Of Randy Fitzsimmons is The Hives first full album in over a decade, but as its macabre title hints, the reason for the band’s absence from the studio has been uniquely and suitably The Hives. There was a problem… the increasingly long absence of The Hives’ founder, mentor and songwriter, the limelight-shunning Randy Fitzsimmons. Now, returning for their final act since his mysterious disappearance, the band have delivered a record that is not just worthy of their legacy, but one that adds fresh lustre to The Hives. The Death Of Randy Fitzsimmons is a true renaissance.",
    links: [
      {
        href: 'https://www.thehives.com/',
        linkText: 'The Hives',
      },
      {
        href: 'https://badnerves.co.uk/',
        linkText: 'Bad Nerves (support)',
      },
    ],
  },
  {
    id: 'livewire-at-waterfront',
    color: 'green',
    faicon: 'icons',
    datetime: '2024-04-20 18:30',
    title: 'Livewire',
    image: {
      src: 'img/gigs/livewire-at-waterfront.jpg',
      alt: 'Livewire the AC/DC Show',
      caption: 'Livewire the AC/DC Show',
    },
    body: 'AC/DC, arguably the greatest rock band of all time, are brought to life by Live/Wire with the true passion you would expect from professional musicians who share your love of this legendary live act. They deliver a critically acclaimed High Voltage two hour rock ’n’ roll set with not only cannons and a full bank of Marshall amps but a journey that takes fans from one of the best-selling albums of all time ‘Back in Black’ through to the 2020 release ‘PWR UP’, with a healthy dose of the classics from the Bon Scott era.<br><br>The Live/Wire show combines the vocal power of Podge Blacksmith as Brian Johnson, the virtuoso talent of Simon Davies as Angus Young and rhythmic accuracy of Dan Mosley as Malcolm Young. The line-up is completed by Eddie Clark as bassist Cliff Williams and Paul Alwin combining the groove of Phil Rudd and thunderous energy of Chris Slade on drums.<br><br>With over 20 years of touring under their belt, Live/Wire put the audience right in the middle of a live experience comparable to that only AC/DC themselves produce. We invite AC/DC fans to join us, sing with us and relive some of those classic AC/DC concerts of the past on our very own Highway to Hell.',
    links: [
      {
        href: 'https://www.livewireacdcshow.com/',
        linkText: 'Livewire',
      },
    ],
  },
];

// Page details
const pageTitle = 'Static timeline generator'; // The title of the page that shows in the browser tab
const pageDescription = 'A super fancy timeline'; // The description of the page for search engines
const pageAuthor = 'Richard Sistern'; // Your name

// DON'T EDIT BELOW THIS LINE! --------------------------------------------------------------------
const getFilters = (entries) => {
  const filters = new Set();
  for (var i = 0; i < entries.length; i++) {
    var entry = entries[i];
    if (Object.prototype.hasOwnProperty.call(entry, 'categories')) {
      for (var j = 0; j < entry.categories.length; j++) {
        filters.add(entry.categories[j]);
      }
    }
  }
  var filtersArray = [...filters];
  filtersArray.sort();
  return filtersArray;
};

const addCategoriesStringsToEntries = (entries) => {
  for (const entry of entries) {
    if (Object.prototype.hasOwnProperty.call(entry, 'categories')) {
      entry.categoriesString = entry.categories.join(',');
    }
  }
  return entries;
};

module.exports = {
  header,
  footer,
  entries: addCategoriesStringsToEntries(entries),
  filters: getFilters(entries),
  head: {
    title: pageTitle,
    description: pageDescription,
    author: pageAuthor,
  },
};
