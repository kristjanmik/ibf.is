const kristjanmik = {
  name: "Kristján Ingi Mikaelsson",
  image: "https://assets.ibf.is/kristjan.jpg",
  title: "Managing Director, IBF",
  email: "kristjan@ibf.is",
};

const einar = {
  name: "Einar Alexander Eymundsson",
  image: "https://assets.ibf.is/einar.jpg",
  title: "Software Specialist",
  email: "einaralex@gmail.com",
}

const gisli = {
  name: "Gísli Kristjánsson",
  image: "https://assets.ibf.is/gisli.jpg",
  title: "Board Member, IBF",
  email: "",
}

const atli = {
  name: "Atli Óðinsson",
  image: "https://assets.ibf.is/atli.jpg",
  title: "",
  email: "atlipetur@gmail.com",
}

const daniel = {
  name: "Daniel F. Jonsson",
  image: "https://assets.ibf.is/daniel.jpg",
  title: "",
  email: "",
}

const petur = {
  name: "Pétur Árnason",
  image: "https://assets.ibf.is/petur.jpg",
  title: "Board Member, IBF",
  email: "petur@ibf.is",
}

const hlynur = {
  name: "Hlynur Þór Björnsson",
  image: "https://assets.ibf.is/hlynur.jpg",
  title: "Chairman, IBF",
  email: "hlynur@ibf.is",
}

const hermann = {
  name: "Hermann Ingi Finnbjörnsson",
  image: "https://assets.ibf.is/hermann.jpg",
  title: "Board Member, IBF",
  email: "",
}

const chris = {
  name: "Chris McClure",
  image: "https://assets.ibf.is/chris.jpg",
  title: "Board Member, IBF",
  email: "",
}

const brian = {
  name: "Brian Goldberg",
  image: "https://assets.ibf.is/brian.jpg",
  title: "",
  email: "briandgoldberg@gmail.com",
}

const jason = {
  name: "Jason",
  image: "https://assets.ibf.is/jason.jpg",
  title: "",
  email: "",
}

const erna = {
  name: "Erna Sigurðardóttir",
  image: "https://assets.ibf.is/erna.jpg",
  title: "",
  email: "",
}

const mikki = {
  name: "Mikjáll Hannes Zuntag",
  image: "https://assets.ibf.is/mikki.jpg",
  title: "",
  email: "",
}

export const workingGroups = [
  {
    name: "Developer",
    slug: 'developer',
    leader: "Einar Eymundsson",
    description:
      "The developer group hosts regular meetups on blockchain implementations, cryptography and other related topics",
    color: "#70D8CA",
    members: [
      einar,
      gisli,
      kristjanmik,
    ],
  },
  {
    name: "Mining",
    slug: 'mining',
    leader: "Atli Óðinsson",
    description:
      "The mining group works on educating people on how to set up their mining equipment. Meets up every two months.",
    color: "#FF7816",
    members: [
      atli,
      daniel,
      petur
    ],
  },
  {
    name: "Legislation",
    slug: 'legislation',
    leader: "Kristján Ingi Mikaelsson",
    color: "#FFD800",
    description:
      "The legislation groups discusses various legal challenges and proposes new bills to be implemented.",
    members: [
      kristjanmik,
      hlynur,
      hermann,
      gisli
    ],
  },
  {
    name: "PR and Social",
    slug: "pr-and-social",
    leader: "Einar Eymundsson",
    color: "#B8D85E",
    description:
      "Oversees outreach, public relations and social media for the Foundation.",
    members: [
      chris,
      kristjanmik
    ],
  },
  {
    name: "Bitcoin",
    slug: 'bitcoin',
    leader: "Jason",
    color: "#FFD800",
    description:
      "The Bitcoin community in Iceland. Hosts a monthly meetup on the second Monday of every month.",
    members: [
      jason,
      gisli,
      chris,
      atli,
      kristjanmik,
    ],
  },
  {
    name: "Auroracoin",
    slug: 'auroracoin',
    leader: "Mikki",
    color: "#FF7816",
    description:
      "The Auroracoin working group",
    members: [
      mikki,
      petur,
      hlynur
    ],
  },
  {
    name: "Education",
    slug: 'education',
    leader: "Erna Sigurðardóttir",
    color: "#FF6272",
    description:
      "The developer group hosts regular meetups on blockchain implementations, cryptography and other related topics",
    members: [
      erna,
      kristjanmik,
      gisli,
      einar
    ],
  },
  {
    name: "Community Engagement",
    slug: 'community-engagement',
    leader: "Brian Goldberg",
    color: "#7E8AEE",
    description:
      "A group around adoption and the playful aspects of cryptocurrencies.",
    members: [
      brian,
      kristjanmik,
      chris
    ],
  }
];
