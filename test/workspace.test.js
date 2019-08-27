import Workspace from '../src/workspace'
import assert from 'assert'

describe('Workspace', function () {
  it('should initial work area', function () {
    const workspace = new Workspace('100 200')
    assert.ok(workspace.x === 100)
    assert.ok(workspace.y === 200)
  })
})
