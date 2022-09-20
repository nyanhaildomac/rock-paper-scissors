radio.onReceivedNumber(function (receivedNumber) {
	
})
input.onGesture(Gesture.Shake, function () {
    picshape()
})
function picshape () {
    hand = randint(1, 3)
    if (hand == rockindex) {
        rock_image.showImage(0)
    }
    if (hand == paperinde) {
        paper_image.showImage(0)
    }
    if (hand == scissorsindex) {
        scissors_image.showImage(0)
    }
}
let hand = 0
let scissors_image: Image = null
let paper_image: Image = null
let rock_image: Image = null
let scissorsindex = 0
let paperinde = 0
let rockindex = 0
basic.showIcon(IconNames.Heart)
rockindex = 1
paperinde = 2
scissorsindex = 3
rock_image = images.createImage(`
    . . . . .
    . # # # .
    # # # # #
    # # # # #
    . . . . .
    `)
paper_image = images.createImage(`
    # # # # #
    # . . . #
    # . . . #
    # . . . #
    # # # # #
    `)
scissors_image = images.createImage(`
    # # . . #
    # # . # .
    . . # . .
    # # # # .
    # # . . #
    `)
radio.setGroup(25)
