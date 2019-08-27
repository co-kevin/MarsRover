export default class MarsRover {
  /**
   * @param {*String} initial {x y direction}
   */
  constructor(initial) {
    const status = initial.split(' ')
    this.x = Number(status[0])
    this.y = Number(status[1])
    this.direction = status[2]
  }

  status () {
    return `${this.x} ${this.y} ${this.direction}`
  }

  run (cmd) {
    if ('F' === cmd.toUpperCase()) {
      switch (this.direction) {
        case 'N':
          this.y++
          break
        case 'S':
          this.y--
          break
        case 'E':
          this.x++
          break
        case 'W':
          this.x--
          break
      }
    }

    if ('B' === cmd.toUpperCase()) {
      switch (this.direction) {
        case 'N':
          this.y--
          break
        case 'S':
          this.y++
          break
        case 'E':
          this.x--
          break
        case 'W':
          this.x++
          break
      }
    }

    if ('R' === cmd.toUpperCase()) {
      switch (this.direction) {
        case 'N':
          this.direction = 'E'
          break
        case 'S':
          this.direction = 'W'
          break
        case 'E':
          this.direction = 'S'
          break
        case 'W':
          this.direction = 'N'
          break
      }
    }

    if ('L' === cmd.toUpperCase()) {
      switch (this.direction) {
        case 'N':
          this.direction = 'W'
          break
        case 'S':
          this.direction = 'E'
          break
        case 'E':
          this.direction = 'N'
          break
        case 'W':
          this.direction = 'S'
          break
      }
    }
  }
}
