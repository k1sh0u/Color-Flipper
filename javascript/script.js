const redButton = document.getElementById("red");
const blueButton = document.getElementById("blue");
const yellowButton = document.getElementById("yellow");
const greenButton = document.getElementById("green");
const purpleButton = document.getElementById("purple");
const orangeButton = document.getElementById("orange");



const changBackGroundToRed = () => {
    document.getElementById("main").style.backgroundColor = "red";
}

const changBackGroundToBlue = () => {
    document.getElementById("main").style.backgroundColor = "blue";
}

const changBackGroundToYellow = () => {
    document.getElementById("main").style.backgroundColor = "yellow";
}

const changBackGroundToGreen = () => {
    document.getElementById("main").style.backgroundColor = "green";
}

const changBackGroundToPurple = () => {
    document.getElementById("main").style.backgroundColor = "purple";
}

const changBackGroundToOrange = () => {
    document.getElementById("main").style.backgroundColor = "orange";
}


redButton.addEventListener("click",changBackGroundToRed)


blueButton.addEventListener("click",changBackGroundToBlue)


yellowButton.addEventListener("click",changBackGroundToYellow)


greenButton.addEventListener("click",changBackGroundToGreen)


purpleButton.addEventListener("click",changBackGroundToPurple)


orangeButton.addEventListener("click",changBackGroundToOrange)
