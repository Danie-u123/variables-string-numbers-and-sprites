input.onButtonPressed(Button.A, function () {
    num_ += 9
    basic.showNumber(num_)
})
input.onGesture(Gesture.TiltLeft, function () {
    pic.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    num_ += 1
    basic.showNumber(num_)
})
input.onGesture(Gesture.TiltRight, function () {
    pic.change(LedSpriteProperty.X, 1)
})
let pic: game.LedSprite = null
let num_ = 0
basic.showIcon(IconNames.Ghost)
num_ = 9
basic.showNumber(num_)
pic = game.createSprite(2, 2)
basic.forever(function () {
	
})
