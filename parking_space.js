const range = require('lodash/range');
const map = require('lodash/map');
const flatMap = require('lodash/flatMap');
const intersectionWith = require('lodash/intersectionWith');
const isEqual = require('lodash/isEqual');
const uniqWith = require('lodash/uniqWith');

// type IUnit = [number, number]

// export interface IParkingSpace {
//   x1: number,
//   y1: number,
//   x2: number,
//   y2: number,
//   costPerUnit: number,
//   allUnits: IUnit[],
// }

class ParkingSpace {
  // will break with floats
  static allParkingUnitsUnderArea(x1, y1, x2, y2) {
    const rows = (y2 - y1) + 1;
    const cols = (x2 - x1) + 1;
    return flatMap(map(range(rows), (r) => {
      return map(range(cols), (c) => {
        return [x1+c, y1+r];
      })
    }))
  }

  static findOverlappingUnitsForParkingSpace(parkingSpace, allParkingSpace) {
    const allOverlappings = flatMap(map(allParkingSpace, (ps) => {
      if(isEqual(ps, parkingSpace)) return [];
      return intersectionWith(parkingSpace.allUnits, ps.allUnits, isEqual);
    }));
    return uniqWith(allOverlappings, isEqual);
  }

  // takes string of 5 numbers
  // returns IParkingSpace
  static toParkingSpace(str) {
    const [_x1, _y1, _x2, _y2, _costPerUnit] = str.split(' '); // for some reason \s is not working :( temporary using ' '
    const x1 = parseFloat(_x1),
      y1 = parseFloat(_y1),
      x2 = parseFloat(_x2),
      y2 = parseFloat(_y2),
      costPerUnit = parseFloat(_costPerUnit);
    return {
      x1, y1, x2, y2, allUnits: ParkingSpace.allParkingUnitsUnderArea(x1, y1, x2, y2), costPerUnit,
    }
  }
}

module.exports = { ParkingSpace };
