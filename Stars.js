// Reference to Canvas'
var background = document.getElementById("background").getContext("2d");
var stars = document.getElementById("stars").getContext("2d");

// Background
background.fillStyle = "#111A21";
background.fillRect(0, 0, 640, 480);

// Create Star Function
function createStar(x, y, size) { // ADD color, starSize
    stars.beginPath();
    stars.fillStyle = "white";
    stars.arc(x, y, size, 0, 2*Math.PI); 
    stars.fill();
}
// Star Property Variables
var starX = [];
var starY = [];
var starSize = [];
// Asks user how many stars they'd like
var starNum = Number(prompt("How many star's would you like? (50-100 is usually good)"));
// Gives each star their own unique properties
for (var a = 1; a <= starNum; a++) {
    starX[a] = randomX();
    starY[a] = randomY();
    starSize[a] = Math.floor(Math.random() * 2) + 1;
} 
// Star Animation Method
function movingStars() {

    stars.clearRect(0, 0, 640, 480);

    for (var a = 1; a <= starNum; a++) {
            
        createStar(starX[a], starY[a], starSize[a]);

        starY[a] += 1;
                
        // push the stars back up to the top, and find a new X-cord
        if (starY[a] > 500) {
            starY[a] = 0;
            starX[a] = randomX();
        }
    }
}
// Every 15 ms, call movingStars function
setInterval(movingStars, 10)

// Random X-Cord Generator
function randomX() {
    return Math.floor(Math.random() * (640));
}
// Random Y-Cord Generator
function randomY() {
    return Math.floor(Math.random() * (480 + 1));
}