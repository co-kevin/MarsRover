import assert from 'assert'

import MarsRover from '../src/mars_rover'

const rover = new MarsRover('1 2 N')
describe('MarsRover', function () {
  it('should create mars rover', function () {
    assert.ok(rover.status(), '1 2 N')
  })
  it('should move farward/back up and turn left/right rover', function () {
    rover.run('F')
    assert.ok(rover.status(), '1 3 N')
    rover.run('R')
    assert.ok(rover.status(), '1 3 W')
    rover.run('L')
    assert.ok(rover.status(), '1 3 N')
    rover.run('B')
    assert.ok(rover.status(), '1 2 N')
  })
  it('should batch run cmd', function () {
    const status = rover.batch(['F', 'F', 'R', 'L', 'B', 'B', 'F'])
    assert.ok(status, '1 3 N')
  })
})
