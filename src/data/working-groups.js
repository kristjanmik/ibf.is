const kristjanmik = {
  name: "Kristján Mikaelsson",
  image: "https://assets.ibf.is/kristjan.jpg",
  title: "Managing Director",
  email: "kristjan@ibf.is",
};

const einar = {
  name: "Einar Alexander Eymundsson",
  image: "https://assets.ibf.is/einar.jpg",
  title: "Software Specialist",
  email: "noreply@ibf.is",
}

const gisli = {
  name: "Gísli Kristjánsson",
  image: "https://assets.ibf.is/gisli.jpg",
  title: "Managing Director",
  email: "noreply@ibf.is",
}

const atli = {
  name: "Atli Óðinsson",
  image: "https://assets.ibf.is/atli.jpg",
  title: "Managing Director",
  email: "noreply@ibf.is",
}

const daniel = {
  name: "Daniel F. Jonsson",
  image: "https://assets.ibf.is/daniel.jpg",
  title: "Managing Director",
  email: "noreply@ibf.is",
}

const petur = {
  name: "Pétur Árnason",
  image: "https://assets.ibf.is/petur.jpg",
  title: "Managing Director",
  email: "noreply@ibf.is",
}

const hlynur = {
  name: "Hlynur Þór Björnsson",
  image: "https://assets.ibf.is/hlynur.jpg",
  title: "Managing Director",
  email: "noreply@ibf.is",
}

const hermann = {
  name: "Hermann Ingi Finnbjörnsson",
  image: "https://assets.ibf.is/hermann.jpg",
  title: "Managing Director",
  email: "noreply@ibf.is",
}

const chris = {
  name: "Chris McClure",
  image: "https://assets.ibf.is/chris.jpg",
  title: "Managing Director",
  email: "noreply@ibf.is",
}

const brian = {
  name: "Brian Goldberg",
  image: "https://assets.ibf.is/brian.jpg",
  title: "Managing Director",
  email: "noreply@ibf.is",
}

const jason = {
  name: "Jason",
  image: "https://assets.ibf.is/jason.jpg",
  title: "Managing Director",
  email: "noreply@ibf.is",
}

const erna = {
  name: "Erna Sigurðardóttir",
  image: "https://assets.ibf.is/erna.jpg",
  title: "Managing Director",
  email: "noreply@ibf.is",
}

const mikki = {
  name: "Mikjáll Hannes Zuntag",
  image: "https://assets.ibf.is/mikki.jpg",
  title: "Managing Director",
  email: "noreply@ibf.is",
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
      brian,
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
