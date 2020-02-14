// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


const cardsContainer = document.getElementsByClassName("cards-container")[0];

let dataArray = [];


axios.get("https://lambda-times-backend.herokuapp.com/articles").then(response => {
    Object.values(response.data.articles).forEach(topic => {
        topic.forEach(article => {
            cardsContainer.append(createArticle(article))
        })
    })
})


function createArticle(topic) {
    //declaration
    const card = document.createElement("div");
    const headline = document.createElement("div");
    const author = document.createElement("div");
    const imgcontainer = document.createElement("div");
    const img = document.createElement("img");
    const authorName = document.createElement("span");
    //class assignation
    card.classList.add("card");
    headline.classList.add("headline");
    author.classList.add("author");
    imgcontainer.classList.add("img-container");
    //appending
    imgcontainer.append(img);
    author.append(imgcontainer, authorName);
    card.append(headline, author);
    //data assignation
    headline.textContent = topic.headline;
    img.src = topic.authorPhoto;
    authorName.textContent = topic.authorName;

    return card;
}