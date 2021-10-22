const header = 'Welcome to this wonderful example timeline.';
const footer = 'A footer goes here.';
const entries = [
  {
    id: 'cat',
    categories: ['cat'],
    color: 'green',
    faicon: 'cat',
    datetime: '2021-01-01 05:00',
    title: 'Cats are very good',
    image: {
      link: 'http://placekitten.com',
      src: 'http://placekitten.com/200/300',
      alt: 'A placeholder kitten',
      caption: 'Kitten!',
    },
    body: "The best thing in the universe is a cardboard box. Chirp at birds catasstrophe for meowwww for hiding behind the couch until lured out by a feathery toy for morning beauty routine of licking self sugar, my siamese, stalks me (in a good way), day and night lick the other cats. Pushed the mug off the table shove bum in owner's face like camera lens or tickle my belly at your own peril i will pester for food when you're in the kitchen even if it's salad and grass smells good, licks your face, but hiiiiiiiiii feed me now.",
    links: [
      {
        href: 'https://en.wikipedia.org/wiki/Cat',
        linkText: 'Cat',
      },
    ],
  },
  {
    id: 'dog',
    categories: ['dog'],
    color: 'green',
    faicon: 'dog',
    datetime: '2021-05-01 23:55',
    title: 'Puppies are great too',
    image: {
      link: 'http://place-puppy.com',
      src: 'https://place-puppy.com/300x300',
      alt: 'A placeholder puppy',
      caption: 'Puppy!',
    },
    body: 'Doggo ipsum sub woofer smol wow very biscit aqua doggo pupper dat tungg tho big ol pupper, very jealous pupper mlem heckin angery woofer very jealous pupper. Blep waggy wags long doggo, corgo. Tungg wow such tempt mlem very jealous pupper boofers lotsa pats, snoot smol big ol ruff doge super chub, long doggo heckin good boys and girls h*ck heck. Shoober blop many pats borkf, such treat. Big ol what a nice floof long water shoob wrinkler heck sub woofer, pupper porgo wow very biscit.',
    links: [
      {
        href: 'https://en.wikipedia.org/wiki/Dog',
        linkText: 'Dog',
      },
    ],
  },
];

// Page details
const pageTitle = 'Static timeline generator'; // The title of the page that shows in the browser tab
const pageDescription = 'A super fancy timeline'; // The description of the page for search engines
const pageAuthor = 'Jane Doe'; // Your name

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
