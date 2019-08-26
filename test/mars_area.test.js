import MarsArea from '../src/mars_area'
import assert from 'assert'

describe('MarsArea', function () {
  it('should_return_MarsArea_Object', function () {
    const marsArea = new MarsArea(1000, 1000)
    assert.ok(marsArea instanceof MarsArea)
  })
})
