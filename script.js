let doorImage1 = document.getElementById('door1')
let doorImage2 = document.getElementById('door2')
let doorImage3 = document.getElementById('door3')
let startButton = document.getElementById('start');

const botDoorPath = "https://content.codecademy.com/projects/chore-door/images/robot.svg";
const beachDoorPath = "https://content.codecademy.com/projects/chore-door/images/beach.svg";
const spaceDoorPath = "https://content.codecademy.com/projects/chore-door/images/space.svg";
const closedDoorPath = "https://content.codecademy.com/projects/chore-door/images/closed_door.svg";
let numClosedDoors = 3;
let openDoor1 ;
let openDoor2 ;
let openDoor3 ;
let currentlyPlaying = true;


const isBot = (door) => {
  if(door.src === botDoorPath){
    return true;
  }else{
    return false;
  }
};

const isClicked = (door) => {
 if(door.src === closedDoorPath){
   return false;
 }else{
   return true;
 }
};

const playDoor = (door) => {
  numClosedDoors--;
  if (numClosedDoors === 0) {
    gameOver('win');
    }else if(isBot(door)){
    gameOver('lost');
    }
 };


const randomChoreDoorGenerator = () => {
 let choreDoor = Math.floor(Math.random() *  numClosedDoors);
 if(choreDoor===0){
   openDoor1 = botDoorPath;
   openDoor2 = beachDoorPath;
   openDoor3 = spaceDoorPath;
  }else if(choreDoor===1){
    openDoor2 = botDoorPath;
    openDoor1 = beachDoorPath;
    openDoor3 = spaceDoorPath ;
  }else{ (choreDoor===2)
    openDoor3 = botDoorPath;
    openDoor1 = beachDoorPath;
    openDoor2 = spaceDoorPath ;
    }
  };


door1.onclick = () => {
if(currentlyPlaying && !isClicked(doorImage1)){
 doorImage1.src = openDoor1;
 playDoor(door1);
 }
};

door2.onclick = () => {
if(currentlyPlaying && !isClicked(doorImage2)){
doorImage2.src = openDoor2;
playDoor(door2);
}
};

door3.onclick = () => {
if(currentlyPlaying && !isClicked(doorImage3)){
doorImage3.src = openDoor3;
playDoor(door3);
}
};

startButton.onclick = () => {
  if(currentlyPlaying === false){
  startRound();
  }
};

const startRound = () => {
  numClosedDoors = 3;
  door1.src = closedDoorPath;
  door2.src = closedDoorPath;
  door3.src = closedDoorPath;
  startButton.innerHTML = 'Good luck!';
  currentlyPlaying = true;

  randomChoreDoorGenerator();
};


const gameOver = (status) => {
  if(status==='win'){
  startButton.innerHTML = 'You win! Play again?';
  }else{
startButton.innerHTML = 'Game over! Play again?';
  }
  currentlyPlaying = false;
};

startRound();
