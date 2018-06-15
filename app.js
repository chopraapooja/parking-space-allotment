const { InputParser } = require('./input_parser')
const { CostCalculator } = require('./cost_calculator');

const app = (input) => {
  const { parkingSpaces } = InputParser.parse(input);
  return CostCalculator.calculateTotalCompensationMoney(parkingSpaces);
}

module.exports = { app }