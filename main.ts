scene.setBackgroundColor(9)
let mySprite = sprites.create(img`
    . . . . . . . . 2 2 2 2 . . . .
    . . . . . . . . . . 2 2 2 . . .
    . . . . . . . . . . 1 1 1 . . .
    . . . . . . . . . . 1 4 1 1 . .
    . . . . . . . . . . 1 1 1 5 5 .
    . . . . . . . . . 1 1 1 . . . .
    . 1 1 1 . . . . 1 1 1 1 1 . . .
    1 1 d 1 1 . 1 1 d d 1 1 1 . . .
    1 1 d d 1 1 1 d d 1 1 1 1 . . .
    1 1 1 d d d d d 1 1 1 1 1 . . .
    . 1 1 1 1 1 1 1 1 1 1 1 1 . . .
    . . 1 1 1 1 1 1 1 1 1 1 . . . .
    . . . . . . 1 1 1 1 1 . . . . .
    . . . . . . 1 1 1 1 . . . . . .
    . . . . . . . 4 . 4 4 4 . . . .
    . . . . . . . 4 4 . . . . . . .
`, SpriteKind.Player)
mySprite.x = 20
mySprite.ay = 300 // vertical acceleration

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -100
})


sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile,
function (sprite: Sprite, otherSprite: Sprite) {
    game.over()
})

game.onUpdate(function () {
    if (mySprite.top < 0 || mySprite.bottom > 120)
        game.over()
    info.changeScoreBy(1)
})

game.onUpdateInterval(1000, function () {
    let projectile = sprites
        .createProjectileFromSide(img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c a c c c c c c c c c c c
            c c c c a a c c c c c c c c c c
            c c c c c a a a c c c c c c c c
            c c c c c c c c c a c c c c c c
            c c c c c c c c c c a c c c c c
            c c c c c c c c c c c a c c c c
            c c c c c c c c c c c a c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c a c c c c c c c
            c c c c c a a a a a a c c c c c
            c c c c c c a a c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c 7 c c c c c c c c c c c c c
            c c 7 c c c c c c c c c c c 7 c
            c 7 c 7 7 c c c c c c c c c c 7
            c 7 c 7 7 7 7 7 7 c c c c c c 7
            c 7 7 7 c c c c c 7 7 7 7 7 7 7
            c e e c c e e e e 7 7 7 e e e e
            e e e e e e . e e e e e e e . e
            . e . . . . . e e e . . e . . .
            . . . . . . . . . e . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            e e . . . . . . . e e . . . . .
            e e e e e e e e e e e e e e e e
            e e e e e e e e e e 7 7 e e e e
            c c e 7 7 e c e e c e e e e e 7
            c c e 7 7 7 c e e e 7 c c c 7 7
            c c 7 7 c c 7 7 7 7 c 7 7 7 7 7
            c c c c c c c c c c c c 7 7 c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            c c c c c c c c c c c c c c c c
            . . . . . . . . . . . . . . . .
        `, -100, 0)
    projectile.y = Math.randomRange(50, 70)
})


















