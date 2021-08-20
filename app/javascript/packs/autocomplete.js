// The API for autocomplete
const url = "https://wagon-dictionary.herokuapp.com/autocomplete/";

// Select the unordered list and create functions to add/remove li's
const ul = document.getElementById("results");
const deleteAll = elements => elements.forEach(element => element.remove());
const addChildren = (parent, children) => children.forEach(child => parent.insertAdjacentHTML("beforeend", `<li><a href="#">${child}</a></li>`));

// This method adds the autocomplete for each keyUp
const addSearchLetter = (event) => {
  const searchTerm = event.currentTarget.value;
  const lis = document.querySelectorAll("li");
  if (searchTerm) {
    const results = [];
    fetch(url + searchTerm)
      .then(response => response.json())
      .then((data) => {
        data.words.slice(0, 5).forEach(word => results.push(word));
        console.log(results);
        deleteAll(lis);
        addChildren(ul, results);
      });
  } else {
    deleteAll(lis);
  }
};

// Select the input box and bind the keys to add a letter to search
const input = document.getElementById("search_query");
const bindKeyUp = element => element.addEventListener("keyup", addSearchLetter);
bindKeyUp(input);
