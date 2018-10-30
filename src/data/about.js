import { workingGroups } from './working-groups'

export const aboutIBF = {
  main: {
    title: "Icelandic Blockchain Foundation",
    subtitle: null,
    text: " The Foundation was created on the 29th of March 2015 (originally Auraráð). The Foundation was established by a collective of individuals with a shared vision of the positive impact that cryptocurrencies and blockchain technology can have on the Icelandic economy.",
  },
  aside: [
    {
      title: "Serve",
      text:
        "The Foundation serves as a self-governed council for cryptocurrencies and blockchain entities in Iceland.",
    },
    {
      title: "Educate",
      text:
        "The Foundation educates the public, industry, and government on the benefits of the cryptocurrency and blockchain technology. We organize outreach and marketing efforts, support and promote Icelandic companies and attract foreign companies and talent to come to Iceland.",
    },
    {
      title: "Advocate",
      text:
        "We advocate for parliament and government agencies to pass fair and clear laws on cryptocurrencies and blockchain technology, as a means of attracting consumers, businesses, and industry to Iceland.",
    },
  ],
};

export const aboutDevelopersGroup = {
  main: {
    title: "Developer",
    subtitle: "Working Group",
    text: workingGroups.filter(g => g.slug === 'developer')[0].description,
  },
  aside: [
    {
      title: "Join the group!",
      text:
        "This group is open for new members. Reach out to the group leader to learn more.",
    },
    {
      title: "Meetups",
      text:
        "You can see the planned meetups by this group on the frontpage.",
    }
  ],
};

export const aboutCommunityGroup = {
  main: {
    title: "Community Engagement",
    subtitle: "Working Group",
    text: workingGroups.filter(g => g.slug === 'community-engagement')[0].description
  },
  aside: [
    {
      title: "Join the group!",
      text:
        "This group is open for new members. Reach out to the group leader to learn more.",
    },
    {
      title: "Meetups",
      text:
        "You can see the planned meetups by this group on the frontpage.",
    }
  ],
};

export const aboutEducationGroup = {
  main: {
    title: "Education",
    subtitle: "Working Group",
    text: workingGroups.filter(g => g.slug === 'education')[0].description
  },
  aside: [
    {
      title: "Join the group!",
      text:
        "This group is open for new members. Reach out to the group leader to learn more.",
    },
    {
      title: "Meetups",
      text:
        "You can see the planned meetups by this group on the frontpage.",
    }
  ],
};

export const aboutLegislationGroup = {
  main: {
    title: "Legislation",
    subtitle: "Working Group",
    text: workingGroups.filter(g => g.slug === 'legislation')[0].description
  },
  aside: [
    {
      title: "Join the group!",
      text:
        "This group is open for new members. Reach out to the group leader to learn more.",
    },
    {
      title: "Meetups",
      text:
        "You can see the planned meetups by this group on the frontpage.",
    }
  ],
};

export const aboutMiningGroup = {
  main: {
    title: "Mining",
    subtitle: "Working Group",
    text: workingGroups.filter(g => g.slug === 'mining')[0].description
  },
  aside: [
    {
      title: "Join the group!",
      text:
        "This group is open for new members. Reach out to the group leader to learn more.",
    },
    {
      title: "Meetups",
      text:
        "You can see the planned meetups by this group on the frontpage.",
    }
  ],
};

export const aboutPRSocialGroup = {
  main: {
    title: "PR and Social",
    subtitle: "Working Group",
    text: workingGroups.filter(g => g.slug === 'pr-and-social')[0].description
  },
  aside: [
    {
      title: "Join the group!",
      text:
        "This group is open for new members. Reach out to the group leader to learn more.",
    },
    {
      title: "Meetups",
      text:
        "You can see the planned meetups by this group on the frontpage.",
    }
  ],
};

export const aboutBitcoinGroup = {
  main: {
    title: "Bitcoin",
    subtitle: "Working Group",
    text: workingGroups.filter(g => g.slug === 'bitcoin')[0].description
  },
  aside: [
    {
      title: "Join the group!",
      text:
        "This group is open for new members. Reach out to the group leader to learn more.",
    },
    {
      title: "Meetups",
      text:
        "You can see the planned meetups by this group on the frontpage.",
    }
  ],
};


export const aboutAuroracoinGroup = {
  main: {
    title: "Auroracoin",
    subtitle: "Working Group",
    text: workingGroups.filter(g => g.slug === 'auroracoin')[0].description
  },
  aside: [
    {
      title: "Join the group!",
      text:
        "This group is open for new members. Reach out to the group leader to learn more.",
    },
    {
      title: "Meetups",
      text:
        "You can see the planned meetups by this group on the frontpage.",
    }
  ],
};
