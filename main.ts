music.setVolume(23)
basic.forever(function () {
    if (WSTouchPiano.TP_Press(TP_PIANO.C)) {
        music.playMelody("C - - - - - - - ", 120)
    } else if (WSTouchPiano.TP_Press(TP_PIANO.D)) {
        music.playMelody("- D - - - - - - ", 120)
    } else if (WSTouchPiano.TP_Press(TP_PIANO.E)) {
        music.playMelody("- - E - - - - - ", 120)
    } else if (WSTouchPiano.TP_Press(TP_PIANO.F)) {
        music.playMelody("- - - F - - - - ", 120)
    } else if (WSTouchPiano.TP_Press(TP_PIANO.G)) {
        music.playMelody("- - - - G - - - ", 120)
    } else if (WSTouchPiano.TP_Press(TP_PIANO.A)) {
        music.playMelody("- - - - - A - - ", 120)
    } else if (WSTouchPiano.TP_Press(TP_PIANO.B)) {
        music.playMelody("- - - - - - B - ", 120)
    } else if (WSTouchPiano.TP_Press(TP_PIANO.C1)) {
        music.playMelody("- - - - - - - C5 ", 120)
    }
})
