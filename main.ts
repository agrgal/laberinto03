function algunaParada () {
    maqueen.motorStop(maqueen.Motors.All)
    basic.pause(tempo)
}
function lado (para: number) {
    if (para == 0) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, vRot)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, vRot)
    } else {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, vRot)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, vRot)
    }
}
let vRot = 0
let tempo = 0
basic.pause(1000)
tempo = 20
let paraquelado = 1
let mideA = 0
let mideB = 0
let mideC = 0
let distCORTE = 6
vRot = 18
let fAVA = 22
basic.showIcon(IconNames.Angry)
basic.pause(500)
music.playTone(262, music.beat(BeatFraction.Whole))
basic.forever(function () {
    while (maqueen.Ultrasonic(PingUnit.Centimeters) > distCORTE) {
        basic.showIcon(IconNames.Triangle)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, fAVA)
        basic.pause(tempo)
    }
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, fAVA)
    basic.pause(tempo)
    // Giro uno para el lado contrario
    // 
    lado(Math.abs(paraquelado - 1))
    basic.pause(tempo)
    mideA = maqueen.Ultrasonic(PingUnit.Centimeters)
    basic.pause(tempo)
    // Giro uno para el lado contrario
    // 
    lado(paraquelado)
    basic.pause(tempo)
    mideB = maqueen.Ultrasonic(PingUnit.Centimeters)
    basic.pause(tempo)
    // Giro uno para el lado contrario
    // 
    lado(paraquelado)
    basic.pause(tempo)
    mideC = maqueen.Ultrasonic(PingUnit.Centimeters)
    basic.pause(tempo)
    basic.showString("C")
    if (mideA == mideB && mideA == mideC) {
        paraquelado = Math.abs(paraquelado - 1)
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, fAVA)
        basic.pause(10 * tempo)
    }
    if (mideA > mideB && mideB >= mideC) {
        for (let index = 0; index < 2; index++) {
            lado(Math.abs(paraquelado - 1))
            basic.pause(tempo)
        }
        basic.showString("A")
    }
    if (mideB >= mideA && mideB > mideC) {
        lado(Math.abs(paraquelado - 1))
        basic.pause(tempo)
        basic.showString("B")
    }
})
