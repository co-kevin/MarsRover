export default class MarsCar {
  /**
   * @param {*WorkArea} workArea 探索区域
   * @param {*} landingPadX 初始降落点 X
   * @param {*} landingPadY 初始降落点 Y
   * @param {*} Toward 朝向 N, S, E, W
   */
  constructor(workArea, landingPadX, landingPadY, toward) {
    this.workArea = workArea
    this.landingPadX = landingPadX
    this.landingPadY = landingPadY
    this.toward = toward
  }
}
