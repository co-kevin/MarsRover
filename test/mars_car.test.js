import assert from 'assert'

import MarsCar from '../src/mars_car'
import WorkArea from '../src/work_area'
import Toward from '../src/toward'

const car = new MarsCar(new WorkArea('100 200'), 100, 100, Toward.N)
describe('MarsCar', function () {
  it('should return MarsCar Object', function () {
    assert.ok(car instanceof MarsCar)
  })
  it('should move car go forward 100 and return correct coordinates 100,200', function () {
    car.reset(100, 100, Toward.N)
    car.goForward(100)
    assert.ok(car.x === 100)
    assert.ok(car.y === 200)
  })
  it('should move car back up 100 and return correct coordinates 100,0', function () {
    car.reset(100, 100, Toward.N)
    car.backUp(100)
    assert.ok(car.x === 100)
    assert.ok(car.y === 0)
  })
  it('should turn left 90 degree the car current toward is W', function () {
    car.reset(100, 100, Toward.N)
    car.turnLeft90Degrees()
    assert.ok(car.toward === Toward.W)
  })
  it('should turn right 90 degree the car current toward is E', function () {
    car.reset(100, 100, Toward.N)
    car.turnRight90Degrees()
    assert.ok(car.toward === Toward.E)
  })
})
