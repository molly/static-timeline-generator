const header = '<h1>Twitter is going great!</h1><p>... and definitely does not develop features primarily to stroke Elon Musk\'s delicate ego';
const footer = '<p class="tagline">Documenting the busiest period of Twitter updates since 2007.</p><p><a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/80x15.png" /></a> This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.</p>';
const entries = [
  {
    id: 'verified1',
    categories: ['actual deliverables'],
    color: 'blue',
    faicon: 'dog',
    datetime: '2022-11-09 14:41',
    title: 'Verified accounts: now featuring Ambiguity!',
    image: {
      link: 'https://twitter.com/TylerGlaiel/status/1590474705504718848',
      src: 'https://pbs.twimg.com/media/FhKAKSLUYAEcwwI?format=png&name=900x900',
      alt: "Valve software's Twitter profile with the blue checkmark highlighted, with information about the Verified account provided as 'this account is verified because it's subscribed to Twitter Blue.' with a link to learn more, pointing to the link used by this timeline entry.",
      caption: 'Screenshot credit: Tyler Glaiel',
    },
    body: "Content designers at Twitter are crying while updating the microcopy to help you understand whether a blue checkmark means an account is verified because it's paying Elon Musk money for Twitter Blue, or because their identity has actually been verified. The tech writers at Twitter joined them in sadness while struggling to explain what the blue checkmark means. Despite persistent efforts to use 'now' in technical documentation, they are now forced to describe that 'Until now, Twitter used the blue checkmark to indicate active, notable, and authentic accounts of public interest that Twitter had independently verified based on certain requirements.' and that going forward, 'the blue checkmark may mean two different things: either that an account was verified under the previous verification criteria (active, notable, and authentic), or that the account has an active subscription to Twitter's new Twitter Blue subscription service, which was made available on iOS in the US, Canada, Australia New Zealand and the UK on November 9, 2022. Accounts that receive the blue checkmark as part of a Twitter Blue subscription will not undergo review to confirm that they meet the active, notable and authentic criteria that was used in the previous process'. But of course.",
    links: [
      {
        href: 'https://help.twitter.com/en/managing-your-account/about-twitter-verified-accounts',
        linkText: 'What does the blue checkmark mean?',
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
const pageTitle = 'Twitter is Going Great!'; // The title of the page that shows in the browser tab
const pageDescription = ' Every day in every way, Twitter is getting better and better.'; // The description of the page for search engines
const pageAuthor = 'Volunteers from the Today in Tabs Discord'; // Your name

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
