let item = 0
basic.showIcon(IconNames.Happy)
Tinybit.RGB_Car_Big(Tinybit.enColor.OFF)
Tinybit.RGB_Car_Program().clear()
Tinybit.RGB_Car_Program().show()
basic.forever(function () {
    item = Tinybit.Voice_Sensor()
    if (item > 40 && item < 70) {
        Tinybit.RGB_Car_Big2(50, 50, 0)
        Tinybit.RGB_Car_Program().setBrightness(150)
        Tinybit.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.Red))
        Tinybit.RGB_Car_Program().show()
        basic.showLeds(`
            # # # # #
            # # # # #
            . . # . .
            # # # # #
            # # # # #
            `)
    }
    if (item >= 70 && item < 110) {
        Tinybit.RGB_Car_Big2(0, 100, 0)
        Tinybit.RGB_Car_Program().setBrightness(255)
        Tinybit.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.Red))
        Tinybit.RGB_Car_Program().show()
        basic.showLeds(`
            # # # # #
            . . # . .
            . # . # .
            . . # . .
            # # # # #
            `)
    }
    if (item >= 160 && item < 170) {
        Tinybit.RGB_Car_Big2(180, 180, 0)
        Tinybit.RGB_Car_Program().setBrightness(180)
        Tinybit.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.Orange))
        Tinybit.RGB_Car_Program().show()
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    if (item >= 170 && item < 200) {
        Tinybit.RGB_Car_Big2(0, 200, 0)
        Tinybit.RGB_Car_Program().setBrightness(200)
        Tinybit.RGB_Car_Program().showColor(neopixel.colors(NeoPixelColors.White))
        Tinybit.RGB_Car_Program().show()
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
