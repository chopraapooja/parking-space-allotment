const reduce = require('lodash/reduce');
const {ParkingSpace} = require('./parking_space');

class CostCalculator {
  static calculateTotalCompensationMoney(parkingSpaces) {
    return reduce(parkingSpaces, (total, ps) => {
      return total + ParkingSpace.findOverlappingUnitsForParkingSpace(ps, parkingSpaces).length * ps.costPerUnit;
    }, 0)
  }
}

module.exports = { CostCalculator };
