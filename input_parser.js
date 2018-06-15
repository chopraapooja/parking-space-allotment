const map = require('lodash/map');
const take = require('lodash/take');
const {ParkingSpace} = require('./parking_space');

class InputParser {

  // takes string (file input)
  // returns {
  //   totalParkingSpaces: number,
  //   parkingSpaces: IParkingSpace[],
  // }
  static parse(input) {
    const [totalParkingSpaces, rows, cols, ...rest] = input.split('\n');
    const parkingSpaces = map(take(rest, totalParkingSpaces), ParkingSpace.toParkingSpace);
    return {
      totalParkingSpaces: parseInt(totalParkingSpaces),
      parkingSpaces,
    }
  }
}

module.exports = { InputParser }