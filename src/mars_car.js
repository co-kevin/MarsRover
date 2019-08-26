import Toward from './toward'

export default class MarsCar {
  /**
   * @param {*WorkArea} workArea 探索区域
   * @param {*} landingPadX 初始降落点 X
   * @param {*} landingPadY 初始降落点 Y
   * @param {*} Toward 朝向 N, S, E, W
   */
  constructor(workArea, landingPadX, landingPadY, toward) {
    this.workArea = workArea
    this.x = landingPadX
    this.y = landingPadY
    this.toward = toward
  }

  /**
   * 重置火星车坐标与朝向
   * 
   * @param {*Number} x 
   * @param {*Number} y 
   * @param {*Toward} toward 
   */
  reset(x, y, toward) {
    this.x = x
    this.y = y
    this.toward = toward
  }
 
  goForward(distance) {
    switch(this.toward) {
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

  backUp(distance) {
    switch(this.toward) {
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
}
