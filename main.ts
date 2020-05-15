input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    random_number = randint(0, 4)
    if (random_number == 2) {
        basic.showString("YES")
    } else if (random_number == 1) {
        basic.showString("NO")
    } else if (random_number == 0) {
        basic.showString("I DON'T KNOW")
    } else {
        basic.showString("TRY AGAIN")
    }
})
let random_number = 0
basic.showString("Ask a Question!")
basic.showNumber(8)
