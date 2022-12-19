const marsrover = require("../src/marsrover");

it("verify initial parameters", () => {
  expect(marsrover.getMarsRover()).toEqual({x:0, y:0, direction: 'N'});
});

it("verify parameters after initialization", () => {
  marsrover.initialize({x: 2, y:2, direction: 'W'});
  expect(marsrover.getMarsRover()).toEqual({x:2, y:2, direction: 'W'});
});

it("verify parameters after sending command f pointing N", () => {
  marsrover.initialize({x: 0, y:0, direction: 'N'});
  marsrover.sendCommand('f');
  expect(marsrover.getMarsRover()).toEqual({x:0, y:1, direction: 'N'});
});

it("verify parameters after sending command f pointing S", () => {
  marsrover.initialize({x: 0, y:0, direction: 'S'});
  marsrover.sendCommand('f');
  expect(marsrover.getMarsRover()).toEqual({x:0, y:-1, direction: 'S'});
});

it("verify parameters after sending command f pointing E", () => {
  marsrover.initialize({x: 0, y:0, direction: 'E'});
  marsrover.sendCommand('f');
  expect(marsrover.getMarsRover()).toEqual({x:1, y:0, direction: 'E'});
});

it("verify parameters after sending command f pointing W", () => {
  marsrover.initialize({x: 0, y:0, direction: 'W'});
  marsrover.sendCommand('f');
  expect(marsrover.getMarsRover()).toEqual({x:-1, y:0, direction: 'W'});
});

it("verify parameters after sending command b", () => {
  marsrover.initialize({x: 0, y:0, direction: 'N'});
  marsrover.sendCommand('b');
  expect(marsrover.getMarsRover()).toEqual({x:0, y:-1, direction: 'N'});
});

it("verify parameters after sending command b pointing S", () => {
  marsrover.initialize({x: 0, y:0, direction: 'S'});
  marsrover.sendCommand('b');
  expect(marsrover.getMarsRover()).toEqual({x:0, y:1, direction: 'S'});
});

it("verify parameters after sending command b pointing E", () => {
  marsrover.initialize({x: 0, y:0, direction: 'E'});
  marsrover.sendCommand('b');
  expect(marsrover.getMarsRover()).toEqual({x:-1, y:0, direction: 'E'});
});

it("verify parameters after sending command b pointing W", () => {
  marsrover.initialize({x: 0, y:0, direction: 'W'});
  marsrover.sendCommand('b');
  expect(marsrover.getMarsRover()).toEqual({x:1, y:0, direction: 'W'});
});

it("verify parameters after sending command l pointing N", () => {
  marsrover.initialize({x: 0, y:0, direction: 'N'});
  marsrover.sendCommand('l');
  expect(marsrover.getMarsRover()).toEqual({x:0, y:0, direction: 'W'});
});

it("verify parameters after sending command l pointing S", () => {
  marsrover.initialize({x: 0, y:0, direction: 'S'});
  marsrover.sendCommand('l');
  expect(marsrover.getMarsRover()).toEqual({x:0, y:0, direction: 'E'});
});

it("verify parameters after sending command l pointing E", () => {
  marsrover.initialize({x: 0, y:0, direction: 'E'});
  marsrover.sendCommand('l');
  expect(marsrover.getMarsRover()).toEqual({x:0, y:0, direction: 'N'});
});

it("verify parameters after sending command l pointing W", () => {
  marsrover.initialize({x: 0, y:0, direction: 'W'});
  marsrover.sendCommand('l');
  expect(marsrover.getMarsRover()).toEqual({x:0, y:0, direction: 'S'});
});

it("verify parameters after sending command r pointing N", () => {
  marsrover.initialize({x: 0, y:0, direction: 'N'});
  marsrover.sendCommand('r');
  expect(marsrover.getMarsRover()).toEqual({x:0, y:0, direction: 'E'});
});

it("verify parameters after sending command r pointing S", () => {
  marsrover.initialize({x: 0, y:0, direction: 'S'});
  marsrover.sendCommand('r');
  expect(marsrover.getMarsRover()).toEqual({x:0, y:0, direction: 'W'});
});

it("verify parameters after sending command r pointing E", () => {
  marsrover.initialize({x: 0, y:0, direction: 'E'});
  marsrover.sendCommand('r');
  expect(marsrover.getMarsRover()).toEqual({x:0, y:0, direction: 'S'});
});

it("verify parameters after sending command r pointing W", () => {
  marsrover.initialize({x: 0, y:0, direction: 'W'});
  marsrover.sendCommand('r');
  expect(marsrover.getMarsRover()).toEqual({x:0, y:0, direction: 'N'});
});

it("verify parameters after sending command f not in default position", () => {
  marsrover.initialize({x: 10, y: -4, direction: 'W'});
  marsrover.sendCommand('f');
  expect(marsrover.getMarsRover()).toEqual({x: 9, y: -4, direction: 'W'});
});

it("verify parameters after sending command f not in default position", () => {
  marsrover.initialize({x: -13, y: 7, direction: 'S'});
  marsrover.sendCommand('r');
  expect(marsrover.getMarsRover()).toEqual({x: -13, y: 7, direction: 'W'});
});

it("verify parameters after sending command ffr", () => {
  marsrover.initialize({x: 0, y:0, direction: 'N'});
  marsrover.sendCommand('ffr');
  expect(marsrover.getMarsRover()).toEqual({x:0, y:2, direction: 'E'});
});
