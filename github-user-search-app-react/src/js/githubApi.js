const mockUserData = {
  jakubsob: {
    username: "Jakub Sobolewski",
    user: "@jakubsob",
    joined: "11 Jul 2015",
    bio: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.",
    repos: 10,
    followers: 1,
    following: 1000,
    location: "Warsaw",
    twitter: "",
    website: "https://jakubsob.github.io",
    company: "@appsilon",
  },
  octocat: {
    username: "The Octocat",
    user: "@octocat",
    joined: "25 Jan 2011",
    bio: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.",
    repos: 8,
    followers: 3938,
    following: 9,
    location: "San Francisco",
    twitter: "",
    website: "https://github.blog",
    company: "@github",
  },
};

class User {
  constructor(username) {
    this.userData = this.getUser(username);
  }

  getUser(username) {
    return mockUserData[username] === undefined
      ? mockUserData["octocat"]
      : mockUserData[username];
  }

  get userInfo() {
    return {
      username: this.userData.username,
      user: this.userData.user,
      joined: this.userData.joined,
      bio: this.userData.bio,
      img: this.userData.img,
    };
  }

  get stats() {
    return {
      repos: this.userData.repos,
      followers: this.userData.followers,
      following: this.userData.following,
    };
  }

  get contact() {
    return {
      location: this.userData.location,
      twitter: this.userData.twitter,
      website: this.userData.website,
      company: this.userData.company,
    };
  }
}

export default User;
