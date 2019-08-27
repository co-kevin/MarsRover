import assert from 'assert'

import MarsRover from '../src/mars_rover'
import Toward from '../src/toward'

const rover = new MarsRover('10 15 N')
describe('MarsRover', function () {
  it('should create mars rover', function () {
    assert.ok(rover.x === 10)
    assert.ok(rover.y === 15)
    assert.ok(rover.direction === 'N')
  })
  it('should move rover go forward 100 and return correct coordinates 100,200', function () {
    rover.reset(100, 100, Toward.N)
    rover.goForward(100)
    assert.ok(rover.x === 100)
    assert.ok(rover.y === 200)
  })
  it('should move rover back up 100 and return correct coordinates 100,0', function () {
    rover.reset(100, 100, Toward.N)
    rover.backUp(100)
    assert.ok(rover.x === 100)
    assert.ok(rover.y === 0)
  })
  it('should turn left 90 degree the rover current toward is W', function () {
    rover.reset(100, 100, Toward.N)
    rover.turnLeft90Degrees()
    assert.ok(rover.toward === Toward.W)
  })
  it('should turn right 90 degree the rover current toward is E', function () {
    rover.reset(100, 100, Toward.N)
    rover.turnRight90Degrees()
    assert.ok(rover.toward === Toward.E)
  })
})
