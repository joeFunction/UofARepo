//We define our API Object

const api = {
    //We define our getUser async function to take a github username and repository name (We also include axios)
    async getUser(username, reponame) {
      const axios = require("axios");
  
      //We call our get function, with the inputted username and reponame plugged into the call
      const { data } = await axios.get(
        `https://api.github.com/search/repositories?q=${reponame}+user:${username}`
      );
      //Error handling in case username or reponame is wrong/not found
      if (data.total_count === 0) return false;
  
      //Populate our data object with data from Github Repo
      return {
        name: data.items[0].owner.login,
        avatar: data.items[0].owner.avatar_url,
        email: "hidden",
        path: data.items[0].full_name,
        desc: data.items[0].description,
        license: data.items[0].license,
      };
    },
  };
  
  module.exports = api;
  