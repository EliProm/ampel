basic.showString("Druecke Taste A")
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
