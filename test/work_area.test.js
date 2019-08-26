import WorkArea from '../src/work_area'
import assert from 'assert'

describe('WorkArea', function () {
  it('should_return_WorkArea_Object', function () {
    const workArea = new WorkArea(1000, 1000)
    assert.ok(workArea instanceof WorkArea)
  })
})
