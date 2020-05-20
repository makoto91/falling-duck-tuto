
scene.setBackgroundColor(7)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . b 5 b . . .
    . . . . . . . . . b 5 b . . . .
    . . . . . . b b b b b b . . . .
    . . . . . b b 5 5 5 5 5 b . . .
    . b b b b b 5 5 5 5 5 5 5 b . .
    . b d 5 b 5 5 5 5 5 5 5 5 b . .
    . . b 5 5 b 5 d 1 f 5 d 4 f . .
    . . b d 5 5 b 1 f f 5 4 4 c . .
    b b d b 5 5 5 d f b 4 4 4 4 4 b
    b d d c d 5 5 b 5 4 4 4 4 4 b .
    c d d d c c b 5 5 5 5 5 5 5 b .
    c b d d d d d 5 5 5 5 5 5 5 b .
    . c d d d d d d 5 5 5 5 5 d b .
    . . c b d d d d d 5 5 5 b b . .
    . . . c c c c c c c c b b . . .
`, SpriteKind.Player)

// const flipped = mySprite.image.clone();
// flipped.flipX()
// mySprite.setImage(flipped)
mySprite.x = 20
mySprite.ay = 200

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy = -100
})

sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, 
function (sprite: Sprite, otherSprite: Sprite) {
    game.over()
})

game.onUpdate(function () {
    if(mySprite.top < 0 || mySprite.bottom > 120){
        game.over();
    }
})

game.onUpdateInterval(1000, function () {
    let projectile = sprites.createProjectileFromSide(img`
        3 3 3 3 3 3 3 3
        3 3 3 3 3 3 3 3
        3 3 3 3 3 3 3 3
        3 3 3 3 3 3 3 3
    `, -100, 0);
    projectile.y = 60;
})