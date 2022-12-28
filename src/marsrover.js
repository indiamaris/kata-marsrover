// ¿Tenemos que mantener un patrón de nombres para var y const?

const marsrover = {
  x: 0,
  y: 0,
  direction: 'N'
};

const initialize = (params) => {
  marsrover.x = params.x;
  marsrover.y = params.y;
  marsrover.direction = params.direction;
};

const getMarsRover = () => marsrover;

const sendCommand = command => {

  for (var i = 0; i < command.length; i++) {
    processStep(command.charAt(i));
  }

}

const processStep = step => {
  
  switch (step) {
    case 'f':
      move(1);
      break;

    case 'b':
      move(-1);
      break;

    case 'l':
      rotateLeft();
      break;

    case 'r':
      rotateRight();
      break;

  }

}

function rotateRight() {

  switch (marsrover.direction) {
    case 'N':
      marsrover.direction = 'E';
      break;
    case 'S':
      marsrover.direction = 'W';
      break;
    case 'E':
      marsrover.direction = 'S';
      break;
    case 'W':
      marsrover.direction = 'N';
      break;
  }

}

function rotateLeft() {
 
  switch (marsrover.direction) {
    case 'N':
      marsrover.direction = 'W';
      break;
    case 'S':
      marsrover.direction = 'E';
      break;
    case 'E':
      marsrover.direction = 'N';
      break;
    case 'W':
      marsrover.direction = 'S';
      break;
  }
  
}

function move(inc) {
  switch (marsrover.direction) {
    case 'N':
      marsrover.y += inc;
      break;
    case 'S':
      marsrover.y -= inc;
      break;
    case 'E':
      marsrover.x += inc;
      break;
    case 'W':
      marsrover.x -= inc;
      break;
  }
}

module.exports = {
  initialize,
  getMarsRover,
  sendCommand
};
