kaboom({
    global: true,
    fullscreen: true,
    scale: 1,
    debug: true,
    clearColor: [0, 0, 0, 1],

})

loadSprite('coin', 'Mario\Images\coin.png')
loadSprite('evil-shroom', 'Mario\Images\evil-shroom.png')
loadSprite('brick', 'Mario\Images\brick.png')
loadSprite('block', 'Mario\Images\block.png')
loadSprite('mario', 'Mario\Images\mario.png')
loadSprite('mushroom', 'Mario\Images\mushroom.png')
loadSprite('surprise', 'Mario\Images\surprise.png')
loadSprite('unboxed', 'Mario\Images\laInnombrable.png') //es unboxed pero no se le puede poner así por una palabra reservada
loadSprite('pipe-top-left', 'Mario\Images\pipe-top-left.png')
loadSprite('pipe-top-right', 'Mario\Images\pipe-top-right.png')
loadSprite('pipe-bottom-left', 'Mario\Images\pipe-bottom-left.png')
loadSprite('pipe-bottom-right', 'Mario\Images\mushroom.png')

screen("game", () => {
    layers(['bg', 'obj', 'ui'], 'obj')
})

start("game")