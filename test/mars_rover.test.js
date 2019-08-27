import assert from 'assert'

import MarsRover from '../src/mars_rover'
import Workspace from '../src/workspace'

const rover = new MarsRover('1 2 N')
describe('MarsRover', function () {
  it('should create mars rover', function () {
    assert.ok(rover.status(), '1 2 N')
  })
  it('should set mars rover workspace', function () {
    rover.setWorkspace(new Workspace('100 100'))
    assert.ok(rover.workspace.x === 100)
    assert.ok(rover.workspace.y === 100)
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
