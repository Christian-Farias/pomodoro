var timer = new Timer('#pomodoro-time', 25)

var startBtn = document.querySelector('.pomodoro-control-start')
var stopBtn = document.querySelector('.pomodoro-control-stop')
var pauseBtn = document.querySelector('.pomodoro-control-pause')

startBtn.addEventListener('click', () => {
  if (!timer.isRunning) timer.start()
})
stopBtn.addEventListener('click', () => timer.stop())
pauseBtn.addEventListener('click', () => timer.pause())
