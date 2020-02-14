// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


const topics = document.getElementsByClassName("topics")[0];

//loop through all the topics and add each topic
axios.get("https://lambda-times-backend.herokuapp.com/topics").then(response => {
    response.data.topics.forEach(topic => {
        topics.append(createTab(topic));
    })
}).catch(err => { console.log(`${err}`) });

function createTab(topic) {
    const tab = document.createElement("div"); //declaration
    tab.classList.add("tab"); //Class assig
    tab.textContent = topic;

    return tab;
}