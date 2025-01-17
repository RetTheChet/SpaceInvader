// THE REASON BOTH ALIEN AND LASER STUFF IS TOGETHER IS BECAUSE I NEED THE INFO BETWEEN THE TWO X AND Y POS FOR OBJECT COLLISION


// LASER STUFF

// Reference to Canvas
var laser = document.getElementById("laser").getContext("2d");

// Laser Creation Function
function createLaser(y) {
    // Makes the end of the lines round
    laser.lineJoin = "round";
    // Sets the color of the laser
    laser.strokeStyle = "#ECA93C";
    // Sets the width of the laser
    laser.lineWidth = 5;
    // Laser
    laser.beginPath();
    laser.moveTo(320, y);
    laser.lineTo(320, y - 40);
    laser.lineTo(320, y);
    laser.stroke();
}
// Laser Properties
var laserY = 390;
// If true, shoot the laser
var isClick = false;
// Shoots and moves the laser when left-click
function moveLaser() {
    
    // If the mouse was left clicked, shoot the laser
    if (isClick) {
        laser.clearRect(0, 0, 640, 480);
    
        createLaser(laserY);

        laserY -= 3;

        laserYPos = laserY; // Gets laserY dynamic info outside of this function
    } 
}
// Every 15 MS, call moveLaser function
setInterval(moveLaser, 15)

// If we click our mouse down, isClick will become true
document.addEventListener("mousedown", () => {
    isClick = true;
});







// ALIEN STUFF

// Reference to Canvas
var alien = document.getElementById("alien").getContext("2d");

// Function to make Alien Spaceship
function createAlien(x, y) {
    
    alien.lineJoin = "round";

    // Body
    alien.strokeStyle = "white";
    alien.fillStyle = "#23bb2e";
    alien.lineWidth = 3;

    alien.beginPath();
    alien.moveTo(x - 60,y);
    alien.quadraticCurveTo(x, y + 50, x + 60, y);
    alien.quadraticCurveTo(x, y - 50, x - 60, y);
    alien.closePath();
    alien.stroke();
    alien.fill();

    // Window 
    alien.fillStyle = "#105115";

    alien.beginPath();
    alien.moveTo(x-25, y - 5);
    alien.lineTo(x + 25, y - 5);
    alien.lineTo(x + 20, y - 50)
    alien.quadraticCurveTo(x, y - 80, x-20, y - 50);
    alien.closePath();
    alien.stroke();
    alien.fill();

    // Window Glint
    alien.fillStyle = "#042707";
    alien.beginPath();
    alien.moveTo(x-20, y - 10);
    alien.lineTo(x + 20, y - 10);
    alien.lineTo(x + 15, y - 45)
    alien.quadraticCurveTo(x, y - 75, x-15, y - 45);
    alien.closePath();

    alien.fill();

    // Lights
    alien.fillStyle = "#d5d822"
    alien.lineWidth = 1;

    alien.beginPath();
    alien.arc(x, y + 14, 7, 0, 2*Math.PI);
    alien.fill();
    alien.stroke();

    alien.beginPath();
    alien.arc(x + 30, y + 8, 7, 0, 2*Math.PI);
    alien.fill();
    alien.stroke()

    alien.beginPath();
    alien.arc(x - 30, y + 8, 7, 0, 2*Math.PI);
    alien.fill();
    alien.stroke()

    // Hitbox, uncomment if you want to see hitbox
    //alien.fillStyle = "rgba(255, 255, 255, 0.5)" 
    //alien.fillRect(x - 60, 40, 120, 85);
}

// Alien Animation Properties
var alienX = 320;
var speed = 5;
// Moves Alien ship left and right
function moveAlien() {
    alien.clearRect(0, 0, 640, 480);

    createAlien(alienX, 100);

    alienX += speed;

    alienXPos = alienX; // Extends the aliens X-pos information to outside of the variable

    // If X-Pos reaches 540, make it go backwards till 100, and than goes back to 540 and does the same thing again
    if (alienX < 100 || alienX > 540) {
        speed = -speed;
    }
}
// Every 20 MS, call moveAlien function
setInterval(moveAlien, 20);





// COLLISION STUFF

// Laser Hitbox Properties
var laserYPos = laserY; 
var laserXPos = 320;
var laserHeight = 40;



// Alien Hitbox Properties
var alienXPos = alienX - 60; 
var alienYPos = 40;
var alienHeight = 85;
var alienWidth = 120;

// Checks if there is collision
function checkCollision() {
    if (alienYPos + alienHeight >= laserYPos - laserHeight // Collision for the Bottom Y-Pos for Alien
        && alienXPos + alienWidth >= laserXPos // Collision for the Right side X-Pos for Alien
        && alienXPos <= laserXPos // Collision for the Left side X-Pos for Alien
        && alienYPos <= laserYPos // Collision for the Top Y-Pos for Alien
        ) { 
            // If you made the shot:
        alert("You shot it! Good aim!\nTo try again, click reload and OK");
    }

    if(laserYPos <= -50) {
            // If you missed
        alert("You missed! Reload and click OK to try again!");
    }
}

setInterval(checkCollision, 20);


