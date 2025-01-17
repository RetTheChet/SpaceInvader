// Reference to Canvas
var spaceShip = document.getElementById("spaceship").getContext("2d");


// Spaceship design
function drawSpaceShip(x, y) {
    // Line Color
    spaceShip.strokeStyle = "black";

    // Wing Right
    spaceShip.fillStyle = "#DE6566";

    spaceShip.beginPath();
    spaceShip.moveTo(x, y);
    spaceShip.lineTo(x + 50, y + 10);
    spaceShip.lineTo(x + 60, y + 70);
    spaceShip.quadraticCurveTo(x + 40, y + 30, x + 30, y + 50);
    spaceShip.stroke();
    spaceShip.fill();

    // Wing Left
    spaceShip.beginPath();
    spaceShip.moveTo(x, y);
    spaceShip.lineTo(x - 49, y + 10);
    spaceShip.lineTo(x - 60, y + 70);
    spaceShip.quadraticCurveTo(x - 40, y + 30, x - 30, y + 50);
    spaceShip.stroke();
    spaceShip.fill();

    // Engine Fire
    spaceShip.fillStyle = "#ff2d00";
    spaceShip.strokeStyle = "#ff8065"
    spaceShip.lineWidth = "5";

    spaceShip.beginPath();
    spaceShip.moveTo(x - 30, y + 65);
    spaceShip.lineTo(x - 25, y + 85);
    spaceShip.lineTo(x - 10, y + 65);
    spaceShip.lineTo(x - 5, y + 80);
    spaceShip.lineTo(x, y + 65);
    spaceShip.lineTo(x + 10, y + 80);
    spaceShip.lineTo(x + 10, y + 65);
    spaceShip.lineTo(x + 25, y + 85);
    spaceShip.lineTo(x + 30, y + 65);
    spaceShip.fill();
    spaceShip.stroke();

    // Rocket Engine
    spaceShip.fillStyle = "#566E8B"
    spaceShip.strokeStyle = "black";
    spaceShip.lineWidth = "3";

    spaceShip.beginPath();
    spaceShip.moveTo(x + 30, y + 50);
    spaceShip.lineTo(x + 40, y + 60);
    spaceShip.lineTo(x + 40, y + 65);
    spaceShip.lineTo(x - 40, y + 65);
    spaceShip.lineTo(x - 40, y + 60);
    spaceShip.lineTo(x - 30, y + 50);
    spaceShip.stroke();
    spaceShip.fill();

    // Body
    spaceShip.fillStyle = "#c8d2e1";
    spaceShip.lineWidth = 5;

    spaceShip.beginPath();
    spaceShip.moveTo(x + 30, y + 50);
    spaceShip.lineTo(x - 30, y + 50)
    spaceShip.quadraticCurveTo(x - 40, y, x , y - 50);
    spaceShip.quadraticCurveTo(x + 40, y, x + 30, y + 50);
    spaceShip.stroke();
    spaceShip.fill();

    // Window
    spaceShip.fillStyle = "#025EA0";

    spaceShip.beginPath();
    spaceShip.arc(x, y, 15, 0, Math.PI*2);
    spaceShip.stroke();
    spaceShip.fill();
 
}
// Draws the ship
drawSpaceShip(320, 390);


