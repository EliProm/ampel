basic.showString("Druecke Taste A")
basic.pause(708)
while (true) {
    if (input.buttonIsPressed(Button.A)) {
        basic.showLeds(`
            . # . # .
            # # # # .
            . # . # .
            # # # # #
            . # . # .
            `)
        basic.pause(607)
        basic.clearScreen()
        break;
    }
}
basic.showString("Druecke Taste B")
while (true) {
    if (input.buttonIsPressed(Button.B)) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . # . #
            # . . . #
            # # # # #
            `)
        basic.pause(607)
        basic.clearScreen()
        break;
    }
}
