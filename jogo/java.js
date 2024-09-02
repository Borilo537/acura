const morteTexto = document.querySelector('.morteTexto')

var modo = localStorage['mode'];

if (modo == 'normal') {
    normal2 = true
    hardcore2 = false
} else {
    normal2 = false
    hardcore2 = true
}

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 64 * 30
canvas.height = 64 * 15
let vivo = true

let parsedCollisions
let collisionBlocks
let background

let level1Text
level1Text = [
    new Sprite({
        position: {
            x: -1650,
            y: 0
        },
        imageSrc: '../Sprites/fase1Text.png',

    }),
]
let wText
wText = [
    new Sprite({
        position: {
            x: -50650,
            y: 0
        },
        imageSrc: '../Sprites/wText.png',

    }),
]
let data
data = [
    new Sprite({
        position: {
            x: -1650,
            y: 0
        },
        imageSrc: '../Sprites/data.png',

    }),
]
let shiftText
shiftText = [
    new Sprite({
        position: {
            x: -1650,
            y: 0
        },
        imageSrc: '../Sprites/data.png',

    }),
]
let jumpText
jumpText = [
    new Sprite({
        position: {
            x: -1650,
            y: 0
        },
        imageSrc: '../Sprites/data.png',

    }),
]
// OBSTACULOS
let portalFlick
portalFlick = [
    new Sprite({
        position: {
            x: -10650,
            y: 0
        },
        imageSrc: '../Sprites/portalF.png',

    }),
]
let plat
plat = [
    new Sprite({
        position: {
            x: -10650,
            y: 0
        },
        imageSrc: '../Sprites/chuva.png',

    }),
]
let chuva
chuva = [
    new Sprite({
        position: {
            x: -10650,
            y: 0
        },
        imageSrc: '../Sprites/chuva.png',

    }),
]
let trap1
trap1 = [
    new Sprite({
        position: {
            x: -1650,
            y: 0
        },
        imageSrc: '../Sprites/fogo.png',

    }),
]
let trap2
trap2 = [
    new Sprite({
        position: {
            x: -1650,
            y: 0
        },
        imageSrc: '../Sprites/veneno.png',
    }),
]
let trap3
trap3 = [
    new Sprite({
        position: {
            x: -1650,
            y: 0
        },
        imageSrc: '../Sprites/veneno.png',
    }),
]
let trap4
trap4 = [
    new Sprite({
        position: {
            x: -1650,
            y: 0
        },
        imageSrc: '../Sprites/veneno.png',
    }),
]
let trap5
trap5 = [
    new Sprite({
        position: {
            x: -1650,
            y: 0
        },
        imageSrc: '../Sprites/veneno.png',
    }),
]
let trap6
trap6 = [
    new Sprite({
        position: {
            x: -1650,
            y: 0
        },
        imageSrc: '../Sprites/veneno.png',
    }),
]
// NPC
let nicholas
nicholas = [
    new Sprite({
        position: {
            x: -1650,
            y: 0
        },
        imageSrc: '../Sprites/nicholas.png',
    }),
]


const player = new Player({
    collisionBlocks,
    imageSrc: '../Sprites/p_idle.png',
    frameRate: 12,
    animations: {
        idleRight: {
            frameRate: 12,
            frameBuffer: 5.5 / 2,
            loop: true,
            imageSrc: '../Sprites/p_idle.png',
        },
        idleLeft: {
            frameRate: 12,
            frameBuffer: 5.5 / 2,
            loop: true,
            imageSrc: "../Sprites/p_idleLeft.png",
        },
        walkRight: {
            frameRate: 12,
            frameBuffer: 2 / 2,
            loop: true,
            imageSrc: "../Sprites/p_walk.png",
        },
        walkLeft: {
            frameRate: 12,
            frameBuffer: 2 / 2,
            loop: true,
            imageSrc: "../Sprites/p_walkLeft.png",
        },
        dashRight: {
            frameRate: 3,
            frameBuffer: 4 / 2,
            loop: true,
            imageSrc: "../Sprites/p_dash.png",
        },
        dashLeft: {
            frameRate: 3,
            frameBuffer: 4 / 2,
            loop: true,
            imageSrc: "../Sprites/p_dashLeft.png",
        },
        crouchRight: {
            frameRate: 2,
            frameBuffer: 20 / 2,
            loop: true,
            imageSrc: '../Sprites/p_crch.png'
        },
        crouchLeft: {
            frameRate: 2,
            frameBuffer: 2 / 2,
            loop: true,
            imageSrc: '../Sprites/p_crchLeft.png'
        },
        jumpRight: {
            frameRate: 36,
            frameBuffer: 2,
            loop: false,
            imageSrc: '../Sprites/jumprocess.png'
        },
        jumpLeft: {
            frameRate: 36,
            frameBuffer: 2,
            loop: false,
            imageSrc: '../Sprites/jumprocessLeft.png'
        },
        jumpFullRight: {
            frameRate: 12,
            frameBuffer: 5 / 2,
            loop: true,
            imageSrc: '../Sprites/jumpFull.png'
        },
        jumpFullLeft: {
            frameRate: 12,
            frameBuffer: 5 / 2,
            loop: true,
            imageSrc: '../Sprites/jumpFullLeft.png'
        },
        playerData: {
            frameRate: 12,
            frameBuffer: 7 / 2,
            loop: false,
            imageSrc: '../Sprites/p_data.png',
            onComplete: () => {
                gsap.to(overlay, {
                    opacity: 1,
                    onComplete: () => {
                        player.gravity = 0.5 + 2.5
                        level++
                        levels[level].init()
                        player.switchSprite('idleRight')
                        player.preventInput = false
                        gsap.to(overlay, {
                            opacity: 0,
                        })
                    }
                })
            }

        },

    },
})




let playerPositionX = 0
let playerPositionY = 0           /////////////////////////////////////////////////////////////////////////////////////////////////////////////
let level = 1  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let levels = {                      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    1: {
        init: () => {
            player.resetAll()
            parsedCollisions = collisionsLevel1.parse2D()
            collisionBlocks = parsedCollisions.createObjectsFrom2D()
            player.collisionBlocks = collisionBlocks
            playerPositionX = 490,
                playerPositionY = 550
            player.position.x = playerPositionX
            player.position.y = playerPositionY
            if (player.currentAnimation) player.currentAnimation.isActive = false

            level1Text = [
                new Sprite({
                    position: {
                        x: 0,
                        y: 0,
                    },
                    imageSrc: '../Sprites/fase1Text.png',
                    frameRate: 11,
                    frameBuffer: 10 / 2,
                    loop: false
                })]
            setTimeout(function () {
                level1Text = [
                    new Sprite({
                        position: {
                            x: 0,
                            y: 0,
                        },
                        imageSrc: '../Sprites/fase1TextOut.png',
                        frameRate: 6,
                        frameBuffer: 7 / 2,
                        loop: false
                    })]
            }, gigadelay)


            wText = [
                new Sprite({
                    position: {
                        x: 0,
                        y: 0,
                    },
                    imageSrc: '../Sprites/wText.png',
                    frameRate: 6,
                    frameBuffer: 10 / 2,
                    loop: false
                })]


            background = new Sprite({
                position: {
                    x: 0,
                    y: 0
                },
                imageSrc: '../Sprites/fase1.png'
            })
            data = [
                new Sprite({
                    position: {
                        x: 1500,
                        y: 300,
                    },
                    imageSrc: '../Sprites/data.png',
                    frameRate: 11,
                    frameBuffer: 10 / 2,
                    loop: false,
                    autoplay: false,

                }),
            ]


        },
    },



    2: {
        init: () => {
            player.resetAll()
            parsedCollisions = collisionsLevel2.parse2D()
            collisionBlocks = parsedCollisions.createObjectsFrom2D()
            player.collisionBlocks = collisionBlocks
            playerPositionX = 190,
                playerPositionY = 550
            player.position.x = playerPositionX
            player.position.y = playerPositionY

            if (player.currentAnimation) player.currentAnimation.isActive = false


            background = new Sprite({
                position: {
                    x: 0,
                    y: 0
                },
                imageSrc: '../Sprites/fase2.png',
            })
            data = [
                new Sprite({
                    position: {
                        x: 1650,
                        y: 0
                    },
                    imageSrc: '../Sprites/data.png',
                    frameRate: 11,
                    frameBuffer: 10 / 2,
                    loop: false,
                    autoplay: false,

                }),
            ]
            shiftText = [
                new Sprite({
                    position: {
                        x: 0,
                        y: 0,
                    },
                    imageSrc: '../Sprites/shift.png',
                    frameRate: 6,
                    frameBuffer: 10 / 2,
                    loop: false
                })]
            setTimeout(function () {
                shiftText = [
                    new Sprite({
                        position: {
                            x: 0,
                            y: 0,
                        },
                        imageSrc: '../Sprites/shiftOut.png',
                        frameRate: 6,
                        frameBuffer: 7 / 2,
                        loop: false
                    })]
            }, gigadelay)

            jumpText = [
                new Sprite({
                    position: {
                        x: 0,
                        y: 0,
                    },
                    imageSrc: '../Sprites/jumpText.png',
                    frameRate: 6,
                    frameBuffer: 10 / 2,
                    loop: false
                })]

        },
    },


    3: {
        init: () => {
            player.resetAll()
            parsedCollisions = collisionsLevel3.parse2D()
            collisionBlocks = parsedCollisions.createObjectsFrom2D()
            player.collisionBlocks = collisionBlocks
            playerPositionX = 1728,
                playerPositionY = 692
            player.position.x = playerPositionX
            player.position.y = playerPositionY

            if (player.currentAnimation) player.currentAnimation.isActive = false

            background = new Sprite({
                position: {
                    x: 0,
                    y: 0
                },
                imageSrc: '../Sprites/fase3.png',
                frameRate: 2,
                frameBuffer: 100 / 2,
                loop: true,
            })

            nicholas = [
                new Sprite({
                    position: {
                        x: 1700,
                        y: 415
                    },
                    imageSrc: '../Sprites/nicholas.png',
                    frameRate: 12,
                    frameBuffer: 5.5 / 2,
                    loop: true,

                }),
            ]
            trap1 = [
                new Sprite({
                    position: {
                        x: 680,
                        y: 667,
                    },
                    imageSrc: '../Sprites/fogo.png',
                    frameRate: 4,
                    frameBuffer: 10 / 2,
                    loop: true,


                }),
            ]
            trap2 = [
                new Sprite({
                    position: {
                        x: 1093,
                        y: 471,
                    },
                    imageSrc: '../Sprites/veneno.png',
                    frameRate: 1,
                    frameBuffer: 3 / 2,
                    loop: true,


                }),
            ]


        },
    },

    4: {
        init: () => {
            player.resetAll()
            parsedCollisions = collisionsLevel4.parse2D()
            collisionBlocks = parsedCollisions.createObjectsFrom2D()
            player.collisionBlocks = collisionBlocks
            playerPositionX = 1790,
                playerPositionY = 10
            player.position.x = playerPositionX
            player.position.y = playerPositionY

            if (player.currentAnimation) player.currentAnimation.isActive = false


            background = new Sprite({
                position: {
                    x: 0,
                    y: 0
                },
                imageSrc: '../Sprites/fase4.png',
            })
            data = [
                new Sprite({
                    position: {
                        x: 220,
                        y: 800
                    },
                    imageSrc: '../Sprites/dataDark.png',
                    frameRate: 11,
                    frameBuffer: 10 / 2,
                    loop: false,
                    autoplay: false,

                }),
            ]
            chuva = [
                new Sprite({
                    position: {
                        x: 0,
                        y: 0,
                    },
                    imageSrc: '../Sprites/chuva.png',
                    frameRate: 4,
                    frameBuffer: 6 / 2,
                    loop: true,


                }),
            ]
            trap1 = [
                new Sprite({
                    position: {
                        x: 704,
                        y: 534,
                    },
                    imageSrc: '../Sprites/fogoMenor.png',
                    frameRate: 4,
                    frameBuffer: 10 / 2,
                    loop: true,


                }),
            ]
            trap2 = [
                new Sprite({
                    position: {
                        x: 645,
                        y: 597,
                    },
                    imageSrc: '../Sprites/fogoMenor.png',
                    frameRate: 4,
                    frameBuffer: 10 / 2,
                    loop: true,


                }),
            ]
            trap3 = [
                new Sprite({
                    position: {
                        x: 787,
                        y: 153,
                    },
                    imageSrc: '../Sprites/fogo.png',
                    frameRate: 4,
                    frameBuffer: 10 / 2,
                    loop: true,


                }),
            ]
        },

    },
    5: {
        init: () => {
            player.resetAll()
            parsedCollisions = collisionsLevel5.parse2D()
            collisionBlocks = parsedCollisions.createObjectsFrom2D()
            player.collisionBlocks = collisionBlocks
            playerPositionX = 160,
                playerPositionY = 550
            player.position.x = playerPositionX
            player.position.y = playerPositionY
            if (player.currentAnimation) player.currentAnimation.isActive = false


            background = new Sprite({
                position: {
                    x: 0,
                    y: 0
                },
                imageSrc: '../Sprites/fase5red.png',
            })
            data = [
                new Sprite({
                    position: {
                        x: 1810,
                        y: 740,
                    },
                    imageSrc: '../Sprites/data.png',
                    frameRate: 11,
                    frameBuffer: 10 / 2,
                    loop: false,
                    autoplay: false,

                }),
            ]
            trap1 = [
                new Sprite({
                    position: {
                        x: 470,
                        y: 200,
                    },
                    imageSrc: '../Sprites/raioGrandeY.png',
                    frameRate: 12,
                    frameBuffer: 7 / 2,
                    loop: true,


                }),
            ]
            trap2 = [
                new Sprite({
                    position: {
                        x: 320,
                        y: -18,
                    },
                    imageSrc: '../Sprites/raioGrandeYL.png',
                    frameRate: 12,
                    frameBuffer: 7 / 2,
                    loop: true,


                }),
            ]
            trap3 = [
                new Sprite({
                    position: {
                        x: 580,
                        y: 848,
                    },
                    imageSrc: '../Sprites/raio.png',
                    frameRate: 10,
                    frameBuffer: 7 / 2,
                    loop: true,


                }),
            ]
            trap4 = [
                new Sprite({
                    position: {
                        x: 910,
                        y: 402,
                    },
                    imageSrc: '../Sprites/raioPequeno.png',
                    frameRate: 10,
                    frameBuffer: 7 / 2,
                    loop: true,


                }),
            ]
            trap5 = [
                new Sprite({
                    position: {
                        x: 1088,
                        y: 852,
                    },
                    imageSrc: '../Sprites/raioGrandeX.png',
                    frameRate: 10,
                    frameBuffer: 7 / 2,
                    loop: true,


                }),
            ]
            trap6 = [
                new Sprite({
                    position: {
                        x: 808,
                        y: -1000,
                    },
                    imageSrc: '../Sprites/skyTrap.png',
                    frameRate: 1,
                    frameBuffer: 7 / 2,
                    loop: true,


                }),
            ]

        },
    },
    6: {
        init: () => {
            player.resetAll()
            parsedCollisions = collisionsLevel6.parse2D()
            collisionBlocks = parsedCollisions.createObjectsFrom2D()
            player.collisionBlocks = collisionBlocks
            playerPositionX = 40,
                playerPositionY = 0
            player.position.x = playerPositionX
            player.position.y = playerPositionY
            if (player.currentAnimation) player.currentAnimation.isActive = false


            background = new Sprite({
                position: {
                    x: 0,
                    y: 0
                },
                imageSrc: '../Sprites/fase6.png',
                frameRate: 10,
                frameBuffer: 1200 / 2,
                loop: false,
            })
            plat = [
                new Sprite({
                    position: {
                        x: 0,
                        y: 0,
                    },
                    imageSrc: '../Sprites/grama.png',
                    frameRate: 1,
                    frameBuffer: 2 / 2,
                    loop: true,

                }),
            ]
            trap4 = [
                new Sprite({
                    position: {
                        x: 870,
                        y: 260,
                    },
                    imageSrc: '../Sprites/raio2.png',
                    frameRate: 10,
                    frameBuffer: 7 / 2,
                    loop: true,


                }),
            ]
            nicholas = [
                new Sprite({
                    position: {
                        x: 673,
                        y: 780
                    },
                    imageSrc: '../Sprites/octane.png',
                    frameRate: 12,
                    frameBuffer: 5.5 / 2,
                    loop: true,

                }),
            ]


        },
    },
    7: {
        init: () => {
            player.resetAll()
            parsedCollisions = collisionsLevel7.parse2D()
            collisionBlocks = parsedCollisions.createObjectsFrom2D()
            player.collisionBlocks = collisionBlocks
            playerPositionX = 200,
                playerPositionY = 795
            player.position.x = playerPositionX
            player.position.y = playerPositionY
            if (player.currentAnimation) player.currentAnimation.isActive = false


            background = new Sprite({
                position: {
                    x: 0,
                    y: 0
                },
                imageSrc: '../Sprites/fase7.png',
            })
            data = [
                new Sprite({
                    position: {
                        x: 1672,
                        y: 740,
                    },
                    imageSrc: '../Sprites/dataDark.png',
                    frameRate: 11,
                    frameBuffer: 10 / 2,
                    loop: false,
                    autoplay: false,

                }),
            ]
            plat = [
                new Sprite({
                    position: {
                        x: 63,
                        y: 118,
                    },
                    imageSrc: '../Sprites/orange.png',

                }),
            ]
            chuva = [
                new Sprite({
                    position: {
                        x: 1092,
                        y: 319,
                    },
                    imageSrc: '../Sprites/blue.png',

                }),
            ]
        },
    },
    8: {
        init: () => {
            player.resetAll()
            parsedCollisions = collisionsLevel8.parse2D()
            collisionBlocks = parsedCollisions.createObjectsFrom2D()
            player.collisionBlocks = collisionBlocks
            playerPositionX = 1700, //1700
                playerPositionY = 30 //30
            player.position.x = playerPositionX
            player.position.y = playerPositionY
            if (player.currentAnimation) player.currentAnimation.isActive = false


            background = new Sprite({
                position: {
                    x: 0,
                    y: 0
                },
                imageSrc: '../Sprites/fase8.png',
            })
            data = [
                new Sprite({
                    position: {
                        x: 230,
                        y: 735,
                    },
                    imageSrc: '../Sprites/data.png',
                    frameRate: 11,
                    frameBuffer: 10 / 2,
                    loop: false,
                    autoplay: false,

                }),
            ]
            plat = [
                new Sprite({
                    position: {
                        x: 0,
                        y: 0,
                    },
                    imageSrc: '../Sprites/fase8plat.png',
                    frameRate: 30,
                    frameBuffer: 6 / 2,
                    loop: true,

                }),
            ]
            trap1 = [
                new Sprite({
                    position: {
                        x: 381,
                        y: -10,
                    },
                    imageSrc: '../Sprites/trapin.png',
                    frameRate: 30,
                    frameBuffer: 6 / 2,
                    loop: true,


                }),
            ]
            trap2 = [
                new Sprite({
                    position: {
                        x: 453,
                        y: -10,
                    },
                    imageSrc: '../Sprites/trapin2.png',
                    frameRate: 30,
                    frameBuffer: 6 / 2,
                    loop: true,


                }),
            ]
            trap3 = [
                new Sprite({
                    position: {
                        x: 1360,
                        y: -10,
                    },
                    imageSrc: '../Sprites/trapin3.png',
                    frameRate: 30,
                    frameBuffer: 6 / 2,
                    loop: true,


                }),
            ]

        },
    },
    9: {
        init: () => {
            player.resetAll()
            parsedCollisions = collisionsLevel9.parse2D()
            collisionBlocks = parsedCollisions.createObjectsFrom2D()
            player.collisionBlocks = collisionBlocks
            playerPositionX = 1800, //1800
                playerPositionY = 210  //210
            player.position.x = playerPositionX
            player.position.y = playerPositionY
            if (player.currentAnimation) player.currentAnimation.isActive = false


            background = new Sprite({
                position: {
                    x: 0,
                    y: 0
                },
                imageSrc: '../Sprites/fase9.png',
            })
            nicholas = [
                new Sprite({
                    position: {
                        x: 303,
                        y: 732
                    },
                    imageSrc: '../Sprites/oblivion.png',
                    frameRate: 1,
                    frameBuffer: 5.5 / 2,
                    loop: true,

                }),
            ]
            trap1 = [
                new Sprite({
                    position: {
                        x: 997,
                        y: 595,
                    },
                    imageSrc: '../Sprites/fogoMenor.png',
                    frameRate: 4,
                    frameBuffer: 10 / 2,
                    loop: true,


                }),
            ]
            trap2 = [
                new Sprite({
                    position: {
                        x: 1416,
                        y: 787,
                    },
                    imageSrc: '../Sprites/fogoMenor.png',
                    frameRate: 4,
                    frameBuffer: 10 / 2,
                    loop: true,


                }),
            ]
            plat = [
                new Sprite({
                    position: {
                        x: 64,
                        y: 831,
                    },
                    imageSrc: '../Sprites/orange2.png',

                }),
            ]
            chuva = [
                new Sprite({
                    position: {
                        x: 1728,
                        y: 831,
                    },
                    imageSrc: '../Sprites/blue2.png',

                }),
            ]
        }
    },
    10: {
        init: () => {
            player.resetAll()
            parsedCollisions = collisionsLevel9.parse2D()
            collisionBlocks = parsedCollisions.createObjectsFrom2D()
            player.collisionBlocks = collisionBlocks
            playerPositionX = 303, //1800
                playerPositionY = 732  //210
            player.position.x = playerPositionX
            player.position.y = playerPositionY
            if (player.currentAnimation) player.currentAnimation.isActive = false


            background = new Sprite({
                position: {
                    x: 0,
                    y: 0
                },
                imageSrc: '../Sprites/fase9.png',
            })

        }
    },

}

const keys = {


    space: {
        pressed: false
    },
    a: {
        pressed: false
    },
    d: {
        pressed: false
    },
    ShiftR: {
        pressed: false
    },
    ShiftL: {
        pressed: false
    },
    s: {
        pressed: false
    }

}

const overlay = {
    opacity: 0
}



function animate() {
    console.log('deat', mortes)

    window.requestAnimationFrame(animate)

    background.draw()
    collisionBlocks.forEach(collisionBlock => {
        collisionBlock.draw()
    })

    data.forEach((dat) => {
        dat.draw()
    })

    // DICAS
    if (level === 1) {
        level1Text.forEach((dica1) => {
            dica1.draw()
        })
    }
    if (player.position.x >= 1450 && player.position.y > 280 && level === 1) {
        wText.forEach((wt) => {
            wt.draw()
        })
    }
    if (level === 2) {
        shiftText.forEach((shift) => {
            shift.draw()
        })
    }
    if (player.position.x >= 1445 && level === 2) {
        jumpText.forEach((jt) => {
            jt.draw()
        })
    }

    // OBSTACULOS
    if (portalEnable === false) {
        portalFlick.forEach((pF) => {
            pF.draw()
        })
    }
    if (portalEnable === true) {
        plat.forEach((p) => {
            p.draw()
        })
    }
    if (portalEnable === true) {
        chuva.forEach((CHUVA) => {
            CHUVA.draw()
        })
    }
    trap1.forEach((TRAP1) => {
        TRAP1.draw()
    })
    trap2.forEach((TRAP2) => {
        TRAP2.draw()
    })
    trap3.forEach((TRAP3) => {
        TRAP3.draw()
    })
    trap4.forEach((TRAP4) => {
        TRAP4.draw()
    })
    trap5.forEach((TRAP5) => {
        TRAP5.draw()
    })
    trap6.forEach((TRAP6) => {
        TRAP6.draw()
    })

    // NPC
    nicholas.forEach((nic) => {
        nic.draw()
    })




    player.handleInput(keys)
    player.draw()
    player.update()

    c.save()
    c.globalAlpha = overlay.opacity
    c.fillStyle = 'white'
    c.fillRect(0, 0, canvas.width, canvas.height)
    c.restore()


    if (player.position.y > canvas.height + 50 && vivo === true) {
        vivo = false
        c.save()
        c.globalAlpha = overlay.opacity
        c.fillStyle = 'red'
        c.fillRect(0, 0, canvas.width, canvas.height)
        c.restore()

        gsap.to(overlay, {
            opacity: 1,
        })

        setTimeout(function () {
            gsap.to(overlay, { opacity: 0, }), player.position.x = playerPositionX,
                player.position.y = playerPositionY, mortes += 1, vivo = true
            morteTexto.innerHTML = `MORTES: ${mortes}`
        }, deelay)


        if (hardcore2 === true && normal2 === false) {
            if (level != 1) {
                setTimeout(function () {
                    gsap.to(overlay, { opacity: 0, }), player.position.x = playerPositionX,
                        player.position.y = playerPositionY, mortes += 1, vivo = true, level -= 1
                    levels[level].init()
                    morteTexto.innerHTML = `MORTES: ${mortes}`
                }, deelay)
            }
        }
    }

}


levels[level].init()

animate()

