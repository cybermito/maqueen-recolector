radio.onReceivedString(function (receivedString) {
    if (receivedString == "up") {
        angulo = 5
        maqueen.servoRun(maqueen.Servos.S1, angulo)
    } else if (receivedString == "down") {
        angulo = 85
        maqueen.servoRun(maqueen.Servos.S1, angulo)
    } else if (receivedString == "center") {
        angulo = 45
        maqueen.servoRun(maqueen.Servos.S1, angulo)
    } else if (receivedString == "stop") {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
radio.onReceivedValue(function (name, value) {
    if (name == "F") {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, Math.map(value, 550, 1024, 10, 255))
    } else if (name == "B") {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, Math.map(value, 1, 450, 255, 10))
    } else if (name == "R") {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, Math.map(value, 1, 450, 255, 40))
    } else if (name == "L") {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, Math.map(value, 550, 1024, 40, 255))
    }
})
let angulo = 0
basic.showIcon(IconNames.Happy)
radio.setGroup(10)
let orden = ""
angulo = 45
maqueen.servoRun(maqueen.Servos.S1, angulo)
basic.forever(function () {
	
})
