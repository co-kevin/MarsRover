import WorkArea from '../src/work_area'
import assert from 'assert'

describe('WorkArea', function () {
  it('should initial work area', function () {
    const workArea = new WorkArea('100 200')
    assert.ok(workArea.x === 100)
    assert.ok(workArea.y === 200)
  })
})
