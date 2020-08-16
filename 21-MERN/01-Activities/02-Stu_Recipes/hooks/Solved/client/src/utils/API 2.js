import axios from "axios";

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for

// export default {
//   getRecipes: function(query) {
//     return axios.get("/api/recipes", { params: { q: query } });
//   }
// };

export default {
  googlebooks: function (title) {
    return axios.get("/api/googlebooks/" + title)
  }
}


/// get recipe, get results component, copy results component, change the name data 