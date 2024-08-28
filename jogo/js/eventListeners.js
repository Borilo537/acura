let slow = false
let speed = false

let portalEnable = true
let FullJump = false
let jumpFrame = false
let jumpon = false
let jump = 0
let delay = 90
let deelay = 400
let trapdelay = 600
let bigdelay = 1500
let gigadelay = 5000
let dash = true
let unlockJump = false

let nicText = 0

let nicholasText
nicholasText = [  
    new Sprite({
        position: {
            x: -5650,
            y: -5000
        },
        imageSrc: '../Sprites/nicholasTextMove.png',
    }),
]
window.addEventListener('keydown', (event) => {

    

    if (player.preventInput) return
    console.log(player.position.y)
    console.log(canvas.height)
    switch (event.key) {
        
        case 'w':  
            for(let i = 0; i < data.length; i++) {
                const dat = data[i]

                if ((player.position.x <= dat.position.x + dat.width && 
                    player.position.x + player.width >= dat.position.x &&
                    player.position.y + player.height >= dat.position.y &&
                    player.position.y <= dat.position.y + dat.height) 
                    ) {
                    player.gravity = 0
                    player.velocity.x = 0
                    player.velocity.y = 0
                    player.preventInput = true
                    player.switchSprite('playerData')
                    dat.play()
                    return
                }
            } 

            for(let i = 0; i < nicholas.length; i++) {
                const nic = nicholas[i]
                
                if ((level === 3 && player.position.x <= nic.position.x + nic.width && 
                    player.position.x + player.width >= nic.position.x &&
                    player.position.y + player.height >= nic.position.y &&
                    player.position.y <= nic.position.y + nic.height) && nicText === 0
                    ) { 
                        nicText = 1

                        player.velocity.x = 0
                        player.velocity.y = 0


                        setTimeout(function(){
                            nicholasText = [  
                                new Sprite({
                                    position: {
                                        x: 0,
                                        y: 0
                                    },
                                    imageSrc: '../Sprites/nicholasTextMove.png',
                                    frameRate: 4,
                                    frameBuffer: 5/2,
                                    loop: false,
                                }),
                            ]
                        }, deelay)
                    return 
                }

            }
            for(let i = 0; i < nicholas.length; i++) {
                const nic = nicholas[i]

                if ((level === 6 && player.position.x <= nic.position.x + nic.width && 
                    player.position.x + player.width >= nic.position.x &&
                    player.position.y + player.height >= nic.position.y &&
                    player.position.y <= nic.position.y + nic.height) && nicText === 0
                    ) { 
                        nicText = 1

                        player.velocity.x = 0
                        player.velocity.y = 0


                        setTimeout(function(){
                            nicholasText = [  
                                new Sprite({
                                    position: {
                                        x: 0,
                                        y: 0
                                    },
                                    imageSrc: '../Sprites/octaneTextMove.png',
                                    frameRate: 4,
                                    frameBuffer: 3/2,
                                    loop: false,
                                }),
                            ]
                        }, deelay)
                    return
                    
                }
            }
            for(let i = 0; i < nicholas.length; i++) {
                const nic = nicholas[i]
                
                if ((level === 9 && player.position.x <= nic.position.x + nic.width && 
                    player.position.x + player.width >= nic.position.x &&
                    player.position.y + player.height >= nic.position.y &&
                    player.position.y <= nic.position.y + nic.height) && nicText === 0
                    ) { 
                        nicText = 1

                        player.velocity.x = 0
                        player.velocity.y = 0


                        setTimeout(function(){
                            nicholasText = [  
                                new Sprite({
                                    position: {
                                        x: 0,
                                        y: 0
                                    },
                                    imageSrc: '../Sprites/oblivionTextMove.png',
                                    frameRate: 8,
                                    frameBuffer: 5/2,
                                    loop: false,
                                }),
                            ]
                        }, deelay)
                    return 
                }

            }
            break

        case 'W':  
        for(let i = 0; i < data.length; i++) {
            const dat = data[i]

            if ((player.position.x <= dat.position.x + dat.width && 
                player.position.x + player.width >= dat.position.x &&
                player.position.y + player.height >= dat.position.y &&
                player.position.y <= dat.position.y + dat.height) 
                ) {
                player.gravity = 0
                player.velocity.x = 0
                player.velocity.y = 0
                player.preventInput = true
                player.switchSprite('playerData')
                dat.play()
                return
            }
        } 

        for(let i = 0; i < nicholas.length; i++) {
            const nic = nicholas[i]

                if ((level === 3 && player.position.x <= nic.position.x + nic.width && 
                    player.position.x + player.width >= nic.position.x &&
                    player.position.y + player.height >= nic.position.y &&
                    player.position.y <= nic.position.y + nic.height) && nicText === 0
                    ) { 
                        nicText = 1

                        player.velocity.x = 0
                        player.velocity.y = 0


                        setTimeout(function(){
                            nicholasText = [  
                                new Sprite({
                                    position: {
                                        x: 0,
                                        y: 0
                                    },
                                    imageSrc: '../Sprites/nicholasTextMove.png',
                                    frameRate: 4,
                                    frameBuffer: 5/2,
                                    loop: false,
                                }),
                            ]
                        }, deelay)
                    return 
                }


        

            if ((level === 6 && player.position.x <= nic.position.x + nic.width && 
                player.position.x + player.width >= nic.position.x &&
                player.position.y + player.height >= nic.position.y &&
                player.position.y <= nic.position.y + nic.height) && nicText === 0
                ) { 
                    nicText = 1

                    player.velocity.x = 0
                    player.velocity.y = 0


                    setTimeout(function(){
                        nicholasText = [  
                            new Sprite({
                                position: {
                                    x: 0,
                                    y: 0
                                },
                                imageSrc: '../Sprites/octaneTextMove.png',
                                frameRate: 4,
                                frameBuffer: 3/2,
                                loop: false,
                            }),
                        ]
                    }, deelay)
                return
                
            }
        }
        for(let i = 0; i < nicholas.length; i++) {
            const nic = nicholas[i]
            
            if ((level === 9 && player.position.x <= nic.position.x + nic.width && 
                player.position.x + player.width >= nic.position.x &&
                player.position.y + player.height >= nic.position.y &&
                player.position.y <= nic.position.y + nic.height) && nicText === 0
                ) { 
                    nicText = 1

                    player.velocity.x = 0
                    player.velocity.y = 0


                    setTimeout(function(){
                        nicholasText = [  
                            new Sprite({
                                position: {
                                    x: 0,
                                    y: 0
                                },
                                imageSrc: '../Sprites/oblivionTextMove.png',
                                frameRate: 8,
                                frameBuffer: 5/2,
                                loop: false,
                            }),
                        ]
                    }, deelay)
                return 
            }

        }
        break
        
        case 'Enter':
        if (level === 9 && nicText === 1) {

            nicholasText = [  
                new Sprite({
                    position: {
                        x: 0,
                        y: 0
                    },
                    imageSrc: '../Sprites/oblivionText1.png',
                    frameRate: 2,
                    frameBuffer: 2,
                    loop: false,
                }),
            ]
            setTimeout(function(){nicText = 2},delay)
        }
        if (level === 9 && nicText === 2) {

            nicholasText = [  
                new Sprite({
                    position: {
                        x: 0,
                        y: 0
                    },
                    imageSrc: '../Sprites/oblivionText2.png',
                    frameRate: 2,
                    frameBuffer: 2,
                    loop: false,
                }),
            ]
            setTimeout(function(){nicText = 3},delay)
        }
        if (level === 9 && nicText === 3) {

            nicholasText = [  
                new Sprite({
                    position: {
                        x: 0,
                        y: 0
                    },
                    imageSrc: '../Sprites/oblivionText3.png',
                    frameRate: 2,
                    frameBuffer: 2,
                    loop: false,
                }),
            ]
            setTimeout(function(){nicText = 4},delay)
        }
        if (level === 9 && nicText === 4) {

            nicholasText = [  
                new Sprite({
                    position: {
                        x: 0,
                        y: 0
                    },
                    imageSrc: '../Sprites/oblivionText4.png',
                    frameRate: 2,
                    frameBuffer: 2,
                    loop: false,
                }),
            ]
            setTimeout(function(){nicText = 5},delay)
        }
        if (level === 9 && nicText === 5) {

            nicholasText = [  
                new Sprite({
                    position: {
                        x: 0,
                        y: 0
                    },
                    imageSrc: '../Sprites/oblivionText5.png',
                    frameRate: 2,
                    frameBuffer: 2,
                    loop: false,
                }),
            ]
            setTimeout(function(){nicText = 6},delay)
        }
        if (level === 9 && nicText === 6) {

            nicholasText = [  
                new Sprite({
                    position: {
                        x: 0,
                        y: 0
                    },
                    imageSrc: '../Sprites/oblivionText6.png',
                    frameRate: 2,
                    frameBuffer: 2,
                    loop: false,
                }),
            ]
            setTimeout(function(){nicText = 7},delay)
        }
        if (level === 9 && nicText === 7) {

            nicholasText = [  
                new Sprite({
                    position: {
                        x: 0,
                        y: 0
                    },
                    imageSrc: '../Sprites/oblivionText7.png',
                    frameRate: 2,
                    frameBuffer: 2,
                    loop: false,
                }),
            ]
            setTimeout(function(){nicText = 8},delay)
        }
        if (level === 9 && nicText === 8) {

            nicholasText = [  
                new Sprite({
                    position: {
                        x: 0,
                        y: 0
                    },
                    imageSrc: '../Sprites/oblivionText8.png',
                    frameRate: 2,
                    frameBuffer: 2,
                    loop: false,
                }),
            ]
            setTimeout(function(){nicText = 9},delay)
        }
        if (level === 9 && nicText === 9) {

            nicholasText = [  
                new Sprite({
                    position: {
                        x: 0,
                        y: 0
                    },
                    imageSrc: '../Sprites/oblivionText9.png',
                    frameRate: 2,
                    frameBuffer: 2,
                    loop: false,
                }),
            ]
            setTimeout(function(){nicText = 10},delay)
        }
        if (level === 9 && nicText === 10) {

            nicholasText = [  
                new Sprite({
                    position: {
                        x: 0,
                        y: 0
                    },
                    imageSrc: '../Sprites/oblivionText10.png',
                    frameRate: 2,
                    frameBuffer: 2,
                    loop: false,
                }),
            ]
            setTimeout(function(){nicText = 11},delay)
        }
        if (level === 9 && nicText === 11) {

            nicholasText = [  
                new Sprite({
                    position: {
                        x: 0,
                        y: 0
                    },
                    imageSrc: '../Sprites/oblivionText12.png',
                    frameRate: 2,
                    frameBuffer: 2,
                    loop: false,
                }),
            ]
            setTimeout(function(){nicText = 12},delay)
        }
        if (level === 9 && nicText === 12) {

            nicholasText = [  
                new Sprite({
                    position: {
                        x: 0,
                        y: 0
                    },
                    imageSrc: '../Sprites/oblivionTextChoice.png',
                    frameRate: 2,
                    frameBuffer: 2,
                    loop: false,
                }),
            ]
            setTimeout(function(){nicText = 13},delay)
        }

         if (level === 6 && nicText === 1) {

            nicholasText = [  
                new Sprite({
                    position: {
                        x: 0,
                        y: 0
                    },
                    imageSrc: '../Sprites/octaneText.png',
                    frameRate: 2,
                    frameBuffer: 2,
                    loop: false,
                }),
            ]
            setTimeout(function(){nicText = 2},delay)
        }
        if (level === 6 && nicText === 2) {

            nicholasText = [  
                new Sprite({
                    position: {
                        x: 0,
                        y: 0
                    },
                    imageSrc: '../Sprites/octaneTextChoice.png',
                    frameRate: 2,
                    frameBuffer: 2,
                    loop: false,
                }),
            ]
            setTimeout(function(){nicText = 3},delay)
        }



            if (level === 3 && nicText === 1) {

            nicholasText = [  
                new Sprite({
                    position: {
                        x: 0,
                        y: 0
                    },
                    imageSrc: '../Sprites/nicholasText.png',
                    frameRate: 2,
                    frameBuffer: 6/2,
                    loop: false,
                }),
            ]
            setTimeout(function(){nicText = 2},delay)
        }
        if (level === 3 && nicText === 2) {

            nicholasText = [  
                new Sprite({
                    position: {
                        x: 0,
                        y: 0
                    },
                    imageSrc: '../Sprites/nicholasTextChoice.png',
                    frameRate: 2,
                    frameBuffer: 6/2,
                    loop: false,
                }),
            ]
            setTimeout(function(){nicText = 3},delay)
        }
        break

        case 'z':
            if (level === 9 && nicText === 13){
                setTimeout(function(){nicText = 0},delay)
                Mercenario +=1
                nicholasText = [  
                    new Sprite({
                        position: {
                            x: 0,
                            y: 0
                        },
                        imageSrc: '../Sprites/oblivionTextChoiceZ.png',
                        frameRate: 2,
                        frameBuffer: 6/2,
                        loop: false,
                    }),
                ]
                    
                    player.gravity = 0
                    player.velocity.x = 0
                    player.velocity.y = 0
                    player.preventInput = true
                    player.switchSprite('playerData')
                    dat.play()
                    nicText = 0
                    Mercenario +=1
                    return
            }
            if (level === 6 && nicText === 3){
                setTimeout(function(){nicText = 0},delay)
                Mercenario +=1
                nicholasText = [  
                    new Sprite({
                        position: {
                            x: 0,
                            y: 0
                        },
                        imageSrc: '../Sprites/octaneTextChoiceZ.png',
                        frameRate: 2,
                        frameBuffer: 6/2,
                        loop: false,
                    }),
                ]
                    
                    player.gravity = 0
                    player.velocity.x = 0
                    player.velocity.y = 0
                    player.preventInput = true
                    player.switchSprite('playerData')
                    dat.play()
                    nicText = 0
                    Mercenario +=1
                    return
            }
            if (level === 3 && nicText === 3){
                setTimeout(function(){nicText = 0},delay)
                Policial+=1
                nicholasText = [  
                    new Sprite({
                        position: {
                            x: 0,
                            y: 0
                        },
                        imageSrc: '../Sprites/nicholasTextChoiceZ.png',
                        frameRate: 2,
                        frameBuffer: 6/2,
                        loop: false,
                    }),
                ]
                    
                    player.gravity = 0
                    player.velocity.x = 0
                    player.velocity.y = 0
                    player.preventInput = true
                    player.switchSprite('playerData')
                    dat.play()
                    nicText = 0
                    Policial+=1
                    return
            }
        
        case 'Z':
            if (level === 9 && nicText === 13){
                setTimeout(function(){nicText = 0},delay)
                Mercenario +=1
                nicholasText = [  
                    new Sprite({
                        position: {
                            x: 0,
                            y: 0
                        },
                        imageSrc: '../Sprites/oblivionTextChoiceZ.png',
                        frameRate: 2,
                        frameBuffer: 6/2,
                        loop: false,
                    }),
                ]
                    
                    player.gravity = 0
                    player.velocity.x = 0
                    player.velocity.y = 0
                    player.preventInput = true
                    player.switchSprite('playerData')
                    dat.play()
                    nicText = 0
                    Mercenario +=1
                    return
            }
            if (level === 6 && nicText === 3){
                setTimeout(function(){nicText = 0},delay)
                Mercenario +=1
                nicholasText = [  
                    new Sprite({
                        position: {
                            x: 0,
                            y: 0
                        },
                        imageSrc: '../Sprites/octaneTextChoiceZ.png',
                        frameRate: 2,
                        frameBuffer: 6/2,
                        loop: false,
                    }),
                ]
                    
                    player.gravity = 0
                    player.velocity.x = 0
                    player.velocity.y = 0
                    player.preventInput = true
                    player.switchSprite('playerData')
                    dat.play()
                    nicText = 0
                    Mercenario +=1
                    return
            }
            if (level === 3 && nicText === 3){
                setTimeout(function(){nicText = 0},delay)
                Policial+=1
                nicholasText = [  
                    new Sprite({
                        position: {
                            x: 0,
                            y: 0
                        },
                        imageSrc: '../Sprites/nicholasTextChoiceZ.png',
                        frameRate: 2,
                        frameBuffer: 6/2,
                        loop: false,
                    }),
                ]
                    
                    player.gravity = 0
                    player.velocity.x = 0
                    player.velocity.y = 0
                    player.preventInput = true
                    player.switchSprite('playerData')
                    dat.play()
                    nicText = 0
                    Policial+=1
                    return
            }
        
        case 'x':
            if (level === 9 && nicText === 13){
                setTimeout(function(){nicText = 0},delay)
                Policial+=1
                nicholasText = [  
                    new Sprite({
                        position: {
                            x: 0,
                            y: 0
                        },
                        imageSrc: '../Sprites/oblivionTextChoiceX.png',
                        frameRate: 2,
                        frameBuffer: 6/2,
                        loop: false,
                    }),
                ]
                    
                    player.gravity = 0
                    player.velocity.x = 0
                    player.velocity.y = 0
                    player.preventInput = true
                    player.switchSprite('playerData')
                    dat.play()
                    nicText = 0
                    Policial+=1
                    return
            }
            if (level === 6 && nicText === 3){
                setTimeout(function(){nicText = 0},delay)
                Policial+=1
                nicholasText = [  
                    new Sprite({
                        position: {
                            x: 0,
                            y: 0
                        },
                        imageSrc: '../Sprites/octaneTextChoiceX.png',
                        frameRate: 2,
                        frameBuffer: 6/2,
                        loop: false,
                    }),
                ]
                    
                    player.gravity = 0
                    player.velocity.x = 0
                    player.velocity.y = 0
                    player.preventInput = true
                    player.switchSprite('playerData')
                    dat.play()
                    nicText = 0
                    Policial+=1
                    return
            }
            if (level === 3 && nicText === 3){
                setTimeout(function(){nicText = 0},delay)
                Mercenario +=1
                nicholasText = [  
                    new Sprite({
                        position: {
                            x: 0,
                            y: 0
                        },
                        imageSrc: '../Sprites/nicholasTextChoiceX.png',
                        frameRate: 2,
                        frameBuffer: 6/2,
                        loop: false,
                    }),
                ]
                    
                    player.gravity = 0
                    player.velocity.x = 0
                    player.velocity.y = 0
                    player.preventInput = true
                    player.switchSprite('playerData')
                    dat.play()
                    nicText = 0
                    Mercenario +=1
                    return
            }

        case 'X':
            if (level === 9 && nicText === 13){
                setTimeout(function(){nicText = 0},delay)
                Policial+=1
                nicholasText = [  
                    new Sprite({
                        position: {
                            x: 0,
                            y: 0
                        },
                        imageSrc: '../Sprites/oblivionTextChoiceX.png',
                        frameRate: 2,
                        frameBuffer: 6/2,
                        loop: false,
                    }),
                ]
                    
                    player.gravity = 0
                    player.velocity.x = 0
                    player.velocity.y = 0
                    player.preventInput = true
                    player.switchSprite('playerData')
                    dat.play()
                    nicText = 0
                    Policial+=1
                    return
            }
            if (level === 6 && nicText === 3){
                setTimeout(function(){nicText = 0},delay)
                Policial+=1
                nicholasText = [  
                    new Sprite({
                        position: {
                            x: 0,
                            y: 0
                        },
                        imageSrc: '../Sprites/octaneTextChoiceX.png',
                        frameRate: 2,
                        frameBuffer: 6/2,
                        loop: false,
                    }),
                ]
                    
                    player.gravity = 0
                    player.velocity.x = 0
                    player.velocity.y = 0
                    player.preventInput = true
                    player.switchSprite('playerData')
                    dat.play()
                    nicText = 0
                    Policial+=1
                    return
            }
            if (level === 3 && nicText === 3){
                setTimeout(function(){nicText = 0},delay)
                Mercenario +=1
                nicholasText = [  
                    new Sprite({
                        position: {
                            x: 0,
                            y: 0
                        },
                        imageSrc: '../Sprites/nicholasTextChoiceX.png',
                        frameRate: 2,
                        frameBuffer: 6/2,
                        loop: false,
                    }),
                ]
                    
                    player.gravity = 0
                    player.velocity.x = 0
                    player.velocity.y = 0
                    player.preventInput = true
                    player.switchSprite('playerData')
                    nicText = 0
                    return
    
       }


        case ' ':
            console.log('jump',jump)
            console.log('full', FullJump)
            jumpFrame = true
            if (jumpon == true && player.velocity.y == 0){
                jump++
            }
            if (player.velocity.y === 0 && keys.s.pressed == false) player.velocity.y = -15 -23
            if (jump >= 60) {
                FullJump = true,
                jumpFrame = false
            }

            break
        case 's':
            if (unlockJump === true){
            jumpon = true
            if (keys.a.pressed == false && keys.d.pressed == false && player.velocity.y === 0) {
            keys.s.pressed = true}}
            break
        case 'S':
            if (unlockJump === true){
            jumpon = true
            if (keys.a.pressed == false && keys.d.pressed == false && player.velocity.y === 0) {
            keys.s.pressed = true}}
            break
        case 'a':
            jump = 0

            keys.a.pressed = true
            keys.s.pressed = false
            break
        case 'd':
            jump = 0
            keys.d.pressed = true
            keys.s.pressed = false
            break
        case 'A':
            jump = 0
            keys.a.pressed = true
            keys.s.pressed = false
            break
        case 'D':
            jump = 0
            keys.d.pressed = true
            keys.s.pressed = false
            break
        case 'Shift':
            if (level >= 2){
            
            if (player.lastDirection == 'left' && dash == true) { keys.ShiftL.pressed = true, background.position.x = 15,
                setTimeout(function() {
                keys.ShiftL.pressed = false, dash = false, background.position.x = 0}, delay),
                setTimeout(function() {
                dash = true}, bigdelay)}

            else if (player.lastDirection == 'right' && dash == true) {keys.ShiftR.pressed = true, background.position.x = -15,
                setTimeout(function() {
                keys.ShiftR.pressed = false, dash = false, background.position.x = 0}, delay),
                setTimeout(function() {
                dash = true}, bigdelay)}}

                break
            }
            

    })


window.addEventListener('keyup', (event) => {
    console.log(event.key)
    switch (event.key) {

        case ' ':


            setTimeout(function() {
                jumpFrame = false, FullJump = false}, delay)

            if (player.velocity.y === 0 && jump > 0 && jump < 20) {player.velocity.y = -12 -22,
            setTimeout(function() {
                jump = 0}, delay)}
                

            else if (player.velocity.y === 0 && jump > 20 && jump < 50) {player.velocity.y = -17.5 -25,
                setTimeout(function() {
                    jump = 0}, delay) }

            else if (player.velocity.y === 0 && jump > 50) {player.velocity.y = -27.5 -41, background.position.x = 30
                setTimeout(function() {
                    jump = 0, background.position.x = -15, setTimeout(function() {background.position.x = 0},delay)}, delay)
            }
            break
            


        case 'a':
            keys.a.pressed = false
            break
        case 'd':
            keys.d.pressed = false
            break
        case 'A':
            keys.a.pressed = false
            break
        case 'D':
            keys.d.pressed = false
            break
        case 's':
            if (jump > 0) {
                setTimeout(function() {keys.s.pressed = false
                    jumpon = false}, deelay)
            }
            else
            {keys.s.pressed = false
            jumpon = false}
            setTimeout(function() {
                jump = 0}, deelay)
            break
        case 'S':
            if (jump > 0) {
                setTimeout(function() {keys.s.pressed = false
                    jumpon = false}, deelay)
            }
            else
            {keys.s.pressed = false
            jumpon = false}
            setTimeout(function() {
                jump = 0}, deelay)
            
            break
    }
})
