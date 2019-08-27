import Toward from './toward'

export default class MarsRover {
  constructor(initial) {
    const status = initial.split(' ')
    this.x = Number(status[0])
    this.y = Number(status[1])
    this.direction = status[2]
  }

  /**
   * 重置火星车坐标与朝向
   * 
   * @param {*Number} x 
   * @param {*Number} y 
   * @param {*Toward} toward 
   */
  reset (x, y, toward) {
    this.x = x
    this.y = y
    this.toward = toward
  }

  goForward (distance) {
    switch (this.toward) {
      case Toward.N:
        this.y += distance
        break
      case Toward.S:
        this.y -= distance
        break
      case Toward.E:
        this.x += distance
        break
      case Toward.W:
        this.x -= distance
        break
    }
  }

  backUp (distance) {
    switch (this.toward) {
      case Toward.N:
        this.y -= distance
        break
      case Toward.S:
        this.y += distance
        break
      case Toward.E:
        this.x -= distance
        break
      case Toward.W:
        this.x += distance
        break
    }
  }

  turnLeft90Degrees () {
    switch (this.toward) {
      case Toward.N:
        this.toward = Toward.W
        break
      case Toward.S:
        this.toward = Toward.E
        break
      case Toward.E:
        this.toward = Toward.N
        break
      case Toward.W:
        this.toward = Toward.S
        break
    }
  }

  turnRight90Degrees () {
    switch (this.toward) {
      case Toward.N:
        this.toward = Toward.E
        break
      case Toward.S:
        this.toward = Toward.W
        break
      case Toward.E:
        this.toward = Toward.S
        break
      case Toward.W:
        this.toward = Toward.N
        break
    }
  }
}
