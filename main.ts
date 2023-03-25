scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.gameOver(false)
    game.setGameOverEffect(false, effects.melt)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.gameOver(true)
    game.setGameOverEffect(true, effects.confetti)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (hops.vy == 0) {
        hops.vy = -155
    }
})
let hops: Sprite = null
scene.setBackgroundColor(9)
hops = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . f . . . . . . . . f . f . . . 
    . f . . . . . . . . . f 5 . . . 
    . f f f f f f f f f f f f f . . 
    . . . f f f f f f f f f . . . . 
    . . . f . f . . . f . f . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(hops, 100, 0)
tiles.setCurrentTilemap(tilemap`level1`)
hops.ay = 350
scene.cameraFollowSprite(hops)
