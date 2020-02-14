/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/


const carousel = document.getElementsByClassName("carousel-container")[0];

carousel.append(createCarousel());

function createCarousel() {
    //declaration
    const carousel = document.createElement("div");
    const img = document.createElement("img");
    const lbtn = document.createElement("button");
    const rbtn = document.createElement("button");

    let index = 0;
    let allImg = [
            "../../assets/carousel/computer.jpeg",
            "../../assets/carousel/mountains.jpeg",
            "../../assets/carousel/trees.jpeg",
            "../../assets/carousel/turntable.jpeg"
        ]
        //class assignation
    carousel.classList.add("carousel");
    lbtn.classList.add("left-button");
    rbtn.classList.add("right-button");

    //appending
    carousel.append(lbtn, img, rbtn);

    //data assignation

    img.src = allImg[index];
    lbtn.addEventListener("click", () => {

        if (index > 0) {
            index--;
        } else {
            index = 4;
        }

        img.src = allImg[index];

    })
    rbtn.addEventListener("click", () => {
        if (index < allImg.length - 1) {
            index++;
        } else {
            index = 0;
        }
        img.src = allImg[index];

    })







    return carousel;
}