class Player extends Sprite{
    constructor({collisionBlocks = [], imageSrc, frameRate, animations, loop }) {
        super({imageSrc, frameRate, animations, loop })
        this.position = {
            x: 0,
            y: 0
        }

        this.velocity = {
            x: 0,
            y: 0,
        }

        this.width = 61
        this.height = 500
        this.sides = {
            bottom: this.position.y + this.height
        }
        this.gravity = 0.5 +2.5
        
        this.collisionBlocks = collisionBlocks
        
    }



    update() {
        console.log('mer',Mercenario)
        if (level === 10 && Policial > Mercenario){
            setTimeout(function(){ 
                document.location.href = '../final/final.html';},100)
        }
        else if (level === 10 && Mercenario >= Policial){
            setTimeout(function(){ 
                document.location.href = '../final/finalmer.html';},100)
        }


        if (level === 9 && this.position.x < 1221 && this.position.x > 403 && this.position.y < 350 && this.position.y > 250) {
            slow = true
        }
        else {
            slow = false
        }

        if (level === 9 && this.position.x < 850 && this.position.x > 387 && this.position.y < 542 && this.position.y > 510) {
            speed = true
        }
        else {
            speed = false
        }


        if (level === 2){
            if (this.position.x >= 1445){
                
                unlockJump = true
            }
        }
        if (level > 2){unlockJump = true}

        nicholasText.forEach((nicholasText) => {
            nicholasText.draw()
        })
    
    
        
        this.position.x += this.velocity.x


        this.checkForHorizontalCollisions()
        this.applyGravity()

        this.checkForVerticalCollisions()
        this.checkForDeath()
        this.checkForPortal()

    }

    handleInput(keys){
        if (this.preventInput) return
        this.velocity.x = 0
        
        if (keys.d.pressed){
            if (slow) {
                this.switchSprite('walkRight')
                this.velocity.x = 1
                this.lastDirection = 'right'
            }
            else if (speed) {
                this.switchSprite('walkRight')
                this.velocity.x = 3.8 *(14.3)
                this.lastDirection = 'right'
            }
            else {
            this.switchSprite('walkRight')
            this.velocity.x = 3.8 *(2.3)
            this.lastDirection = 'right'
            }
            

            if (slow === false && speed === false){
            if (keys.ShiftR.pressed){
                this.switchSprite('dashRight')
                this.velocity.x = 23 *(2.3+0.2)
                
            }
            else if (keys.ShiftL.pressed){
                this.switchSprite('dashLeft')
                this.velocity.x = -23 *(2.3+0.2)
            }
        }
        }   
        else if (keys.a.pressed) {
            
            if (slow) {
                this.switchSprite('walkLeft')
                this.velocity.x = -1
                this.lastDirection = 'left'
            }
            else if (speed) {
                this.switchSprite('walkLeft')
                this.velocity.x = -3.8 *(14.3)
                this.lastDirection = 'left'
            }
            else {
            this.switchSprite('walkLeft')
            this.velocity.x = -3.8 *(2.3)
            this.lastDirection = 'left'
            }
            
            if (slow === false && speed === false){
            if (keys.ShiftR.pressed){
                this.switchSprite('dashRight')
                this.velocity.x = 23 *(2.3+0.2)
            }
            else if (keys.ShiftL.pressed){
                this.switchSprite('dashLeft')
                this.velocity.x = -23 *(2.3+0.2)
            }
        }
        }   
    
        else if (jumpFrame == true && keys.s.pressed && this.lastDirection === 'right'){
            this.switchSprite('jumpRight')
        }
        else if (jumpFrame == true && keys.s.pressed && this.lastDirection === 'left'){
            this.switchSprite('jumpLeft')
        }
        else if (FullJump == true && keys.s.pressed && this.lastDirection === 'right'){
            this.switchSprite('jumpFullRight')
        }
        else if (FullJump == true && keys.s.pressed && this.lastDirection === 'left'){
            this.switchSprite('jumpFullLeft')
        }
    
        else if (keys.s.pressed){
     
            if(this.lastDirection === 'left' && this.velocity.y == 0){
                this.switchSprite('crouchLeft') 
    
            }
            
            else if(this.lastDirection === 'right' && this.velocity.y == 0){
                this.switchSprite('crouchRight')
            }
        }
    
        else {
            if (this.lastDirection === 'left')this.switchSprite('idleLeft')
            else this.switchSprite('idleRight')
        }
    }


    switchSprite(name) {
        if (this.image === this.animations[name].image) return
        this.currentFrame = 0
        this.image = this.animations[name].image
        this.frameRate = this.animations[name].frameRate
        this.frameBuffer = this.animations[name].frameBuffer
        this.loop = this.animations[name].loop
        this.currentAnimation = this.animations[name]
    }

    checkForHorizontalCollisions() {
        for (let i = 0; i < this.collisionBlocks.length; i++) {
            const collisionBlock = this.collisionBlocks[i]

            // if collision exists
            if (this.position.x <= collisionBlock.position.x + collisionBlock.width && 
                this.position.x + this.width >= collisionBlock.position.x &&
                this.position.y + this.height >= collisionBlock.position.y &&
                this.position.y <= collisionBlock.position.y + collisionBlock.height) {     
                    // collission on x going to the left 
                    if (this.velocity.x < -0) {               
                        this.position.x = collisionBlock.position.x + collisionBlock.width + 0.01
                        break
                    } 
                    if (this.velocity.x > 0) {
                        this.position.x = collisionBlock.position.x - this.width - 0.01
                        break
                    } 
            }
        }
    }
  
    checkForVerticalCollisions() {
        for (let i = 0; i < this.collisionBlocks.length; i++) {
            const collisionBlock = this.collisionBlocks[i]

            // if collision exists
            if (this.position.x <= collisionBlock.position.x + collisionBlock.width && 
                this.position.x + this.width >= collisionBlock.position.x &&
                this.position.y + this.height >= collisionBlock.position.y &&
                this.position.y <= collisionBlock.position.y + collisionBlock.height) {     
 
                    if (this.velocity.y < 0) {
                        this.velocity.y = 0
                        this.position.y = collisionBlock.position.y + collisionBlock.height + 0.01
                        break
                    } 
                    if (this.velocity.y > 0) {
                        this.velocity.y = 0
                        this.position.y = collisionBlock.position.y - this.height - 0.01
                        break
                    } 
            }
        }
    }
    
    checkForDeath() {

        for(let i = 0; i < trap1.length; i++) {
            const TRAP1 = trap1[i]

            if ((this.position.x <= TRAP1.position.x + TRAP1.width && 
                this.position.x + this.width >= TRAP1.position.x &&
                this.position.y + this.height >= TRAP1.position.y &&
                this.position.y <= TRAP1.position.y + TRAP1.height && vivo === true) ){
                    vivo = false
                    c.save()
                    c.globalAlpha = overlay.opacity
                    c.fillStyle = 'red'
                    c.fillRect(0,0, canvas.width, canvas.height)
                    c.restore()
                    player.velocity.x = 0
                    player.velocity.y = 0
                    gsap.to(overlay, {
                        opacity: 1,})
                    player.velocity.x = 0
                    player.velocity.y = 0
                    player.preventInput = true
                    setTimeout(function(){ gsap.to(overlay, {opacity: 0,}),player.position.x = playerPositionX,
                    player.position.y = playerPositionY, player.preventInput = false, mortes += 1, vivo = true
                    if (hardcore2 === true && normal2 === false) {
                    level -=1
                    levels[level].init()
                    }
                }, trapdelay)}
        }
        for(let i = 0; i < trap2.length; i++) {
            const TRAP2 = trap2[i]

            if ((this.position.x <= TRAP2.position.x + TRAP2.width && 
                this.position.x + this.width >= TRAP2.position.x &&
                this.position.y + this.height >= TRAP2.position.y &&
                this.position.y <= TRAP2.position.y + TRAP2.height && vivo === true) ){
                    vivo = false
                    c.save()
                    c.globalAlpha = overlay.opacity
                    c.fillStyle = 'red'
                    c.fillRect(0,0, canvas.width, canvas.height)
                    c.restore()
                    player.velocity.x = 0
                    player.velocity.y = 0
                    gsap.to(overlay, {
                        opacity: 1,})
                    player.velocity.x = 0
                    player.velocity.y = 0
                    player.preventInput = true
                    setTimeout(function(){ gsap.to(overlay, {opacity: 0,}),player.position.x = playerPositionX,
                    player.position.y = playerPositionY, player.preventInput = false, mortes += 1, vivo = true
                    if (hardcore2 === true && normal2 === false) {
                    level -=1
                    levels[level].init()
                    }
                }, trapdelay)}
        }
        for(let i = 0; i < trap3.length; i++) {
            const TRAP3 = trap3[i]

            if ((this.position.x <= TRAP3.position.x + TRAP3.width && 
                this.position.x + this.width >= TRAP3.position.x &&
                this.position.y + this.height >= TRAP3.position.y &&
                this.position.y <= TRAP3.position.y + TRAP3.height && vivo === true) ){
                    vivo = false
                    c.save()
                    c.globalAlpha = overlay.opacity
                    c.fillStyle = 'red'
                    c.fillRect(0,0, canvas.width, canvas.height)
                    c.restore()
                    player.velocity.x = 0
                    player.velocity.y = 0
                    gsap.to(overlay, {
                        opacity: 1,})
                    player.velocity.x = 0
                    player.velocity.y = 0
                    player.preventInput = true
                    setTimeout(function(){ gsap.to(overlay, {opacity: 0,}),player.position.x = playerPositionX,
                    player.position.y = playerPositionY, player.preventInput = false, mortes += 1, vivo = true
                    if (hardcore2 === true && normal2 === false) {
                    level -=1
                    levels[level].init()
                    }
                }, trapdelay)}
        }
        for(let i = 0; i < trap4.length; i++) {
            const TRAP4 = trap4[i]

            if ((this.position.x <= TRAP4.position.x + TRAP4.width && 
                this.position.x + this.width >= TRAP4.position.x &&
                this.position.y + this.height >= TRAP4.position.y &&
                this.position.y <= TRAP4.position.y + TRAP4.height && vivo === true) ){
                    vivo = false
                    c.save()
                    c.globalAlpha = overlay.opacity
                    c.fillStyle = 'red'
                    c.fillRect(0,0, canvas.width, canvas.height)
                    c.restore()
                    player.velocity.x = 0
                    player.velocity.y = 0
                    gsap.to(overlay, {
                        opacity: 1,})
                    player.velocity.x = 0
                    player.velocity.y = 0
                    player.preventInput = true
                    setTimeout(function(){ gsap.to(overlay, {opacity: 0,}),player.position.x = playerPositionX,
                    player.position.y = playerPositionY, player.preventInput = false, mortes += 1, vivo = true
                    if (hardcore2 === true && normal2 === false) {
                    level -=1
                    levels[level].init()
                    }
                }, trapdelay)}
        }
        for(let i = 0; i < trap5.length; i++) {
            const TRAP5 = trap5[i]

            if ((this.position.x <= TRAP5.position.x + TRAP5.width && 
                this.position.x + this.width >= TRAP5.position.x &&
                this.position.y + this.height >= TRAP5.position.y &&
                this.position.y <= TRAP5.position.y + TRAP5.height && vivo === true) ){
                    vivo = false
                    c.save()
                    c.globalAlpha = overlay.opacity
                    c.fillStyle = 'red'
                    c.fillRect(0,0, canvas.width, canvas.height)
                    c.restore()
                    player.velocity.x = 0
                    player.velocity.y = 0
                    gsap.to(overlay, {
                        opacity: 1,})
                    player.velocity.x = 0
                    player.velocity.y = 0
                    player.preventInput = true
                    setTimeout(function(){ gsap.to(overlay, {opacity: 0,}),player.position.x = playerPositionX,
                    player.position.y = playerPositionY, player.preventInput = false, mortes += 1, vivo = true
                    if (hardcore2 === true && normal2 === false) {
                    level -=1
                    levels[level].init()
                    }
                }, trapdelay)}
        }
        for(let i = 0; i < trap6.length; i++) {
            const TRAP6 = trap6[i]

            if ((this.position.x <= TRAP6.position.x + TRAP6.width && 
                this.position.x + this.width >= TRAP6.position.x &&
                this.position.y + this.height >= TRAP6.position.y &&
                this.position.y <= TRAP6.position.y + TRAP6.height && vivo === true) ){
                    vivo = false
                    c.save()
                    c.globalAlpha = overlay.opacity
                    c.fillStyle = 'red'
                    c.fillRect(0,0, canvas.width, canvas.height)
                    c.restore()
                    player.velocity.x = 0
                    player.velocity.y = 0
                    gsap.to(overlay, {
                        opacity: 1,})
                    player.velocity.x = 0
                    player.velocity.y = 0
                    player.preventInput = true
                    setTimeout(function(){ gsap.to(overlay, {opacity: 0,}),player.position.x = playerPositionX,
                    player.position.y = playerPositionY, player.preventInput = false, mortes += 1, vivo = true
                    if (hardcore2 === true && normal2 === false) {
                    level -=1
                    levels[level].init()
                    }
                }, trapdelay)}
        }
    }

    checkForPortal() {
        for(let i = 0; i < plat.length; i++) {
            const p = plat[i]

            if ((level === 7 && this.position.x <= p.position.x + p.width && 
                this.position.x + this.width >= p.position.x &&
                this.position.y + this.height >= p.position.y &&
                this.position.y <= p.position.y + p.height && vivo === true && portalEnable === true) ){
                    portalFlick = [  
                        new Sprite({
                            position: {
                                x: 0,
                                y: 0,
                            },
                            imageSrc: '../Sprites/portalF2.png',
                            frameRate: 3,
                            frameBuffer: 5/2,
                            loop: false,
                        }),
                    ]
                    portalEnable = false
                    setTimeout( function(){
                        portalEnable = true
                    }, deelay)
                    this.position.x = 1092
                    this.position.y = 200
                    if (this.velocity.y === 0) {
                        player.velocity.y = -15 -17.4
                    }
                    
                    
                }
        }
        for(let i = 0; i < chuva.length; i++) {
            const CHUVA = chuva[i]

            if ((level === 7 && this.position.x <= CHUVA.position.x + CHUVA.width && 
                this.position.x + this.width >= CHUVA.position.x &&
                this.position.y + this.height >= CHUVA.position.y &&
                this.position.y <= CHUVA.position.y + CHUVA.height && vivo === true && portalEnable === true) ){
                    portalFlick = [  
                        new Sprite({
                            position: {
                                x: 0,
                                y: 0,
                            },
                            imageSrc: '../Sprites/portalF.png',
                            frameRate: 3,
                            frameBuffer: 5/2,
                            loop: false,
                        }),
                    ]
                    portalEnable = false
                    setTimeout( function(){
                        portalEnable = true
                    }, deelay)
                    this.position.x = 70
                    this.position.y = 118
                }
    }



    for(let i = 0; i < plat.length; i++) {
        const p = plat[i]

        if ((level === 9 && this.position.x <= p.position.x + p.width && 
            this.position.x + this.width >= p.position.x &&
            this.position.y + this.height >= p.position.y &&
            this.position.y <= p.position.y + p.height && vivo === true && portalEnable === true) ){
                portalFlick = [  
                    new Sprite({
                        position: {
                            x: 0,
                            y: 0,
                        },
                        imageSrc: '../Sprites/portalF3.png',
                        frameRate: 3,
                        frameBuffer: 5/2,
                        loop: false,
                    }),
                ]

                portalEnable = false
                setTimeout( function(){
                    portalEnable = true
                }, deelay)
                this.position.x = 1760
                this.position.y = 730
                if (this.velocity.y === 0) {
                    player.velocity.y = -15 -35.4
                }
                
                
                
            }
    }
    for(let i = 0; i < chuva.length; i++) {
        const CHUVA = chuva[i]

        if ((level === 9 && this.position.x <= CHUVA.position.x + CHUVA.width && 
            this.position.x + this.width >= CHUVA.position.x &&
            this.position.y + this.height >= CHUVA.position.y &&
            this.position.y <= CHUVA.position.y + CHUVA.height && vivo === true && portalEnable === true) ){
                portalFlick = [  
                    new Sprite({
                        position: {
                            x: 0,
                            y: 0,
                        },
                        imageSrc: '../Sprites/portalF3.png',
                        frameRate: 3,
                        frameBuffer: 5/2,
                        loop: false,
                    }),
                ]

                portalEnable = false
                setTimeout( function(){
                    portalEnable = true
                }, deelay)
                this.position.x = 90
                this.position.y = 730
                if (this.velocity.y === 0) {
                    player.velocity.y = -15 -35.4
                }
                
            }
}
}


    resetAll() {
        plat = [  
            new Sprite({
                position: {
                    x: -10650,
                    y: 0
                },
                imageSrc: '../Sprites/chuva.png',

            }),
        ]
        chuva = [  
            new Sprite({
                position: {
                    x: -10650,
                    y: 0
                },
                imageSrc: '../Sprites/chuva.png',

            }),
        ]
        data = [  
            new Sprite({
                position: {
                    x: -1650,
                    y: 0
                },
                imageSrc: '../Sprites/data.png',

            }),
        ]
        // OBSTACULOS
        trap1 = [  
            new Sprite({
                position: {
                    x: -1650,
                    y: 0
                },
                imageSrc: '../Sprites/fogo.png',

            }),
        ]
        trap2 = [  
            new Sprite({
                position: {
                    x: -1650,
                    y: 0
                },
                imageSrc: '../Sprites/veneno.png',
            }),
        ]
        trap3 = [  
            new Sprite({
                position: {
                    x: -1650,
                    y: 0
                },
                imageSrc: '../Sprites/veneno.png',
            }),
        ]
        trap4 = [  
            new Sprite({
                position: {
                    x: -1650,
                    y: 0
                },
                imageSrc: '../Sprites/veneno.png',
            }),
        ]
        trap5 = [  
            new Sprite({
                position: {
                    x: -1650,
                    y: 0
                },
                imageSrc: '../Sprites/veneno.png',
            }),
        ]
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

        nicholas = [  
            new Sprite({
                position: {
                    x: -1650,
                    y: 0
                },
                imageSrc: '../Sprites/nicholas.png',
            }),
        ]
        nicholasText = [  
            new Sprite({
                position: {
                    x: -10000,
                    y: 0
                },
                imageSrc: '../Sprites/nicholasTextMove.png',
                frameRate: 4,
                frameBuffer: 5,
                loop: false,
            }),
        ]
    }

    applyGravity() {
        this.velocity.y += this.gravity
        this.position.y += this.velocity.y
    }
}
