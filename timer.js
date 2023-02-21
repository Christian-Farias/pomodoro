class Timer {
  constructor(elementSelector, limitInMinutes) {
    this.elementSelector = elementSelector
    this.limitInMinutes = limitInMinutes
    this.minutes = 0
    this.secondes = 0
    this.millisecondes = 0
    this.intervalId = null
    this.isRunning = false

    this.element = document.querySelector(this.elementSelector)
  }

  _formatTime() {
    const formattedSecondes = String(this.secondes).padStart(2, '0')
    const formattedMinutes = String(this.minutes).padStart(2, '0')
    return `${formattedMinutes}:${formattedSecondes}`
  }

  _updateDisplay() {
    this.element.innerText = this._formatTime()
  }

  _tick() {
    this.millisecondes++

    if (this.millisecondes == 60) {
      this.secondes++
      this.millisecondes = 0
    }

    if (this.secondes == 60) {
      this.minutes++
      this.secondes = 0
    }

    if (this.minutes == this.limitInMinutes) {
      this.stop()
    }

    this._updateDisplay()
  }

  toString() {
    return this._formatTime()
  }

  start() {
    if (this.isRunning) {
      return
    }

    this.intervalId = setInterval(() => this._tick(), 10)
    this.isRunning = true
  }

  pause() {
    if (!this.isRunning) {
      return
    }

    clearInterval(this.intervalId)
    this.isRunning = false
    this.intervalId = null
  }

  stop() {
    this.pause()

    this.millisecondes = 0
    this.secondes = 0
    this.minutes = 0

    this._updateDisplay()
  }
}
