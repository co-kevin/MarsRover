import assert from 'assert'

import MarsCar from '../src/mars_car'
import WorkArea from '../src/work_area'
import Toward from '../src/toward'

const car = new MarsCar(new WorkArea(1000, 1000), 100, 100, Toward.N)
describe('MarsCar', function () {
  it('should_return_MarsCar_Object', function () {
    assert.ok(car instanceof MarsCar)
  })
})
