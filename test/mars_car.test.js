import assert from 'assert'

import MarsCar from '../src/mars_car'
import WorkArea from '../src/work_area'
import Toward from '../src/toward'

const car = new MarsCar(new WorkArea(1000, 1000), 100, 100, Toward.N)
describe('MarsCar', function () {
  it('should return MarsCar Object', function () {
    assert.ok(car instanceof MarsCar)
  })
  it('should move car forward 100 and return correct coordinates 100,200', function () {
    car.forward(100)
    assert.ok(car.landingPadX === 100)
    assert.ok(car.landingPadY === 200)
  })
})
