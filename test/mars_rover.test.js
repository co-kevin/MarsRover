import assert from 'assert'

import MarsRover from '../src/mars_rover'
import WorkArea from '../src/work_area'
import Toward from '../src/toward'

const rover = new MarsRover(new WorkArea('100 200'), 100, 100, Toward.N)
describe('MarsRover', function () {
  it('should return MarsRover Object', function () {
    assert.ok(rover instanceof MarsRover)
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
