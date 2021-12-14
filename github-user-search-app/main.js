const { Octokit } = require("@octokit/core");

const octokit = new Octokit({ auth: GH_PAT });

async function searchUser(user) {
  return  await octokit.request("GET /user", {
    name: user
  });
}

const searchResult = searchUser("jakubsob");
searchResult.then(value => console.log(value.data));
