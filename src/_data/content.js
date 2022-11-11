const header =
  "<h1>Twitter is going great!</h1><p>... and definitely does not develop features primarily to stroke Elon Musk's delicate ego";
const footer =
  '<p class="tagline">Documenting the busiest period of Twitter updates since 2007.</p><p><a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/80x15.png" /></a> This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.</p>';
const entries = [
  {
    id: '1',
    categories: ['Twitter Blue'],
    color: 'blue',
    faicon: 'dog',
    datetime: '2022-11-09T14:41:00',
    title: 'Verified accounts: now featuring Ambiguity!',
    image: {
      link: 'https://twitter.com/TylerGlaiel/status/1590474705504718848',
      src: 'https://pbs.twimg.com/media/FhKAKSLUYAEcwwI?format=png&name=900x900',
      alt: "Valve software's Twitter profile with the blue checkmark highlighted, with information about the Verified account provided as 'this account is verified because it's subscribed to Twitter Blue.' with a link to learn more, pointing to the link used by this timeline entry.",
      caption: 'Screenshot credit: Tyler Glaiel',
    },
    body: "Content designers at Twitter are crying while updating the microcopy to help you understand whether a blue checkmark means an account is verified because it's paying Elon Musk money for Twitter Blue, or because their identity has actually been verified. The tech writers at Twitter joined them in sadness while struggling to explain what the blue checkmark means.",
    links: [
      {
        href: 'https://help.twitter.com/en/managing-your-account/about-twitter-verified-accounts',
        linkText: 'What does the blue checkmark mean? on the Twitter documentation site',
      },
    ],
  },
  {
    id: '2',
    categories: ['Robot Uprising'],
    color: 'blue',
    faicon: 'robot',
    datetime: '2022-11-09T21:46:00',
    title: 'Verified accounts: now featuring Ambiguity!',
    image: {
      link: 'https://twitter.com/mmasnick/status/1590581600072667136',
      src: 'https://tweet2image.vercel.app/1590581600072667136.jpg?lang=en&tz=-5',
      alt: "Screenshot of Elon tweet admitting that some proportion of users are bots",
      caption: '',
    },
    body: "Elon Musk admits that his count of Twitter users includes bots.",
    links: [
      {
        href: 'https://twitter.com/mmasnick/status/1590581600072667136',
        linkText: 'Source Tweet by Mike Masnick',
      },
    ],
  },
  {
    id: '3',
    categories: ['No one minding the store'],
    color: 'blue',
    faicon: 'dog',
    datetime: '2022-11-10T06:41:00',
    title: 'CISO Resigns',
    image: {
      link: 'https://twitter.com/LeaKissner/status/1590706305102381058',
      src: 'https://tweet2image.vercel.app/1590706305102381058.jpg?lang=en&tz=-5',
      alt: "Screenshot of tweet from Lea Kissner announcing her resignation.",
      caption: '',
    },
    body: "In a tweet, Chief Information Security Officer Lea Kissner announces she is quitting Twitter.",
    links: [
      {
        href: 'https://twitter.com/LeaKissner/status/1590706305102381058',
        linkText: 'Source Tweet by Lea Kissner',
      },
    ],
  },
  {
    id: '4',
    categories: ['No one minding the store'],
    color: 'blue',
    faicon: 'dog',
    datetime: '2022-11-10T07:13:00',
    title: 'Legal Compliance Who?',
    image: {
      link: '',
      src: 'https://tweet2image.vercel.app/1590724257608134657.jpg?lang=en&tz=-8',
      alt: '"According to messages shared in Twitter Slack, Twitter’s CISO, chief privacy office, and chief compliance officer all resigned last night. An employee says it will be up to engineers to “self-certify compliance with FTC requirements and other laws.”"',
      caption: '',
    },
    body: "Casey Newton: According to messages shared in Twitter Slack, Twitter\u2019s CISO, chief privacy officer, and chief compliance officer all resigned last night.\n\nAn employee says it will be up to engineers to \u201cself-certify compliance with FTC requirements and other laws.\u201d",
    links: [
      {
        href: 'https://twitter.com/CaseyNewton/status/1590724257608134657',
        linkText: 'Source Tweet by Casey Newton',
      },
    ],
  },
  {
    id: '6',
    categories: ['No one minding the store'],
    color: 'blue',
    faicon: 'dog',
    datetime: '2022-11-10T08:52:00',
    title: 'Mutual Non-Compliance Pact',
    image: {
      link: '',
      src: '',
      alt: '',
      caption: '',
    },
    body: "Faced with the impossibility of complying with the FTC data privacy agreement, Twitter's compliance executives quit.",
    links: [
      {
        href: 'https://www.theverge.com/2022/11/10/23451198/twitter-ftc-elon-musk-lawyer-changes-fine-warning',
        linkText: 'Elon Musk is putting Twitter at risk of billions in fines, warns company lawyer',
      },
    ],
  },
  {
    id: '7',
    categories: ['Twitter Blue'],
    color: 'blue',
    faicon: 'dog',
    datetime: '2022-11-09T18:29:00',
    title: '@elon__rnusk announces Twitter Gold',
    image: {
      link: '',
      src: 'https://tweet2image.vercel.app/1590532150792974336.jpg?lang=en&tz=-8',
      alt: 'Screenshot of a tweet reading "I take it all back. this new verification scheme is flawless" with a screenshot attached of an Elon Musk parody account reading "Starting today we\'ll begin offering Twitter Gold: a free subscription that gets you yearly family vacations and nightly dinners with me. If your name is Grimes. Please come back. I love you.',
      caption: '',
    },
    body: "A blue-check Elon Musk parody account announces \"Twitter Gold\" to win Grimes back.",
    links: [
      {
        href: 'https://twitter.com/joshuaphilll/status/1590532150792974336?',
        linkText: 'Source Tweet by @JoshuaPHilll',
      },
    ],
  },
  {
    id: '8',
    categories: ['Twitter Blue'],
    color: 'blue',
    faicon: 'dog',
    datetime: '2022-11-10T07:13:00',
    title: 'Like a train crash filled with glitter',
    image: {
      link: '',
      src: 'https://tweet2image.vercel.app/1590632287544438784.jpg?lang=en&tz=-8',
      alt: 'Tweet saying "Twitter Blue is going about as well as everyone predicted, and it is an amazing spectacle to watch. Like a train crash filled with glitter."',
      caption: '',
    },
    body: 'Verified Tony Blair commiserates with Verified George Bush about how they miss killing Iraqis.',
    links: [
      {
        href: 'https://twitter.com/misterratt/status/1590632287544438784',
        linkText: 'Source Tweet by matt ratt',
      },
    ],
  },
  {
    id: '9',
    categories: ['Twitter Blue'],
    color: 'blue',
    faicon: 'dog',
    datetime: '2022-11-10 7:29',
    title: 'Musk chortles at Twitter Blue disasters',
    image: {
      link: '',
      src: 'https://tweet2image.vercel.app/1590728262623563777.png?lang=en&tz=-8',
      alt: 'Screenshot of a tweet reply to Casey Newton, saying Meanwhile with a screenshot attached of a twitter response described in this timeline entry.',
      caption: '',
    },
    body: 'Elon takes the time to tweet emoji laughter in response to a Tweet that says "A verified Mario gave everyone the middle finger and President Biden is talking about sucking his own penis."',
    links: [
      {
        href: 'https://twitter.com/HelenKennedy/status/1590728262623563777?',
        linkText: 'Source Tweet by Helen Kennedy',
      },
    ],
  },
  {
    id: '10',
    categories: ['Twitter Blue'],
    color: 'blue',
    faicon: 'dog',
    datetime: '2022-11-09T10:45:00',
    title: 'Double Trouble',
    image: {
      link: '',
      src: 'https://tweet2image.vercel.app/1590415250205323264.png?lang=en&tz=-8',
      alt: 'Screenshot of a tweet reading There are two Twitter Blues, one more expensive than the other, itself with a screenshot of the Twitter UI advertising Twitter Blue for $4.99 and Twitter Blue for $7.99 monthly.',
      caption: '',
    },
    body: 'There are two Twitter Blues, one more expensive than the other.',
    links: [
      {
        href: 'https://twitter.com/wongmjane/status/1590415250205323264',
        linkText: 'Source Tweet by Jane Manchun Wong',
      },
    ],
  },
  {
    id: '11',
    categories: ['Twitter Blue'],
    color: 'blue',
    faicon: 'dog',
    datetime: '2022-11-10T14:20:00',
    title: 'Banana Republic!',
    image: {
      link: '',
      src: '',
      alt: '',
      caption: '',
    },
    body: 'A pair of verified Chiquita accounts discuss overthrowing South American governments. As one does.',
    links: [
      {
        href: 'https://twitter.com/dieworkwear/status/1590831852658790400',
        linkText: 'Source Tweet by derek guy',
      },
    ],
  },
  {
    id: '12',
    categories: ['Twitter Blue'],
    color: 'blue',
    faicon: 'dog',
    datetime: '2022-11-10T15:45:00',
    title: 'Tesla Fake stays up for several hours',
    image: {
      link: '',
      src: 'https://tweet2image.vercel.app/1590853204346306560.jpg?lang=en&tz=5',
      alt: 'A screenshot of a tweet from @teslareal asking how long do u think we have left as a company be honest',
      caption: '',
    },
    body: 'A fake yet verified Tesla Twitter account tweeted "how long do u think we have left as a company be honest".',
    links: [
      {
        href: 'https://twitter.com/TesIaReal/status/1590853204346306560',
        linkText: 'Source Tweet by @TeslaReal',
      },
    ],
  },
  {
    id: '13',
    categories: ['Twitter Blue'],
    color: 'blue',
    faicon: 'dog',
    datetime: '2022-11-10T20:51:00',
    title: 'Parody accounts now need to say parody in their name',
    image: {
      link: '',
      src: 'https://tweet2image.vercel.app/1590884973535711232.png?lang=en&tz=-8',
      alt: 'Tweet from Elon Musk stating Going forward,accounts engaged in parody must include "parody" in their name, not just in bio',
      caption: '',
    },
    body: "Elon, making yet another product decision by tweeting through it, may at some point figure this out. But will it be before Twitter goes bankrupt?",
    links: [
      {
        href: 'https://twitter.com/elonmusk/status/1590884973535711232',
        linkText: 'Source Tweet by Elon himself',
      },
    ],
  },
  {
    id: '14',
    categories: ['Bye-Bye'],
    color: 'blue',
    faicon: 'dog',
    datetime: '2022-11-09T15:48:00',
    title: 'Captain Sully is leaving',
    image: {
      link: '',
      src: 'https://tweet2image.vercel.app/1590446178881392640.png?lang=en&tz=-8',
      alt: 'Tweet screenshot from Sully Sullenberger stating To my friends on Twitter, I will be taking a step back from the platform for now. Connect with me on Facebook, LinkedIn, or Instagram to stay informed and hear my latest personal and professional updates.',
      caption: '',
    },
    body: 'Sometimes it sinks. Captain Sully tweeted out that he is taking a step back from Twitter for now.',
    links: [
      {
        href: 'https://twitter.com/Captsully/status/1590446178881392640',
        linkText: 'Source Tweet by Sully Sullenberger',
      },
    ],
  },
  {
    id: '15',
    categories: ['Robot Uprising', 'Twitter Blue'],
    color: 'blue',
    faicon: 'robot',
    datetime: '2022-11-10T15:31:00',
    title: 'GANs take over',
    image: {
      link: '',
      src: 'https://pbs.twimg.com/media/FhPTWHdXgAAGYZO?format=jpg&name=medium',
      alt: 'collage of the profiles of 13 Twitter accounts with GAN-generated faces and blue checkmarks',
      caption: '',
    },
    body: 'When you want your bots to be somewhat more legitimate than eggs, you generate them faces!',
    links: [
      {
        href: 'https://twitter.com/conspirator0/status/1590849672574558208?s=20&t=zVLQTBUlmPgMvJqX6TkH_g',
        linkText: 'Source Tweet by Conspirador Norteño',
      },
    ],
  },
];

// Page details
const pageTitle = 'Twitter is Going Great!'; // The title of the page that shows in the browser tab
const pageDescription = 'Every day in every way, Twitter is getting better and better.'; // The description of the page for search engines
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
