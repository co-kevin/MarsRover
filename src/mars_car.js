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

  goForward(unit) {
    switch(this.toward) {
      case Toward.N:
        this.y += unit
        break
      case Toward.S:
        this.y -= unit
        break
      case Toward.E:
        this.x += unit
        break
      case Toward.W:
        this.x -= unit
        break
    }
  }
}
