basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showString("" + (input.temperature()))
    }
    if (input.buttonIsPressed(Button.B)) {
        music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once)
    }
})
