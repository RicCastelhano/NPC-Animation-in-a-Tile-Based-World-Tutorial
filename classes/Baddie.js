class Baddie {
    constructor({ position }){

        
        this.frame = 0;
        this.lastDirection = 'right';
        this.state = 'walk';
        this.speed = 1;
        let timer;

        let hit = false;
        this.type = Math.round( Math.random() * 1 ); //will define male or female baddie
        
        this.position = position;

        this.imageSrc;
        
        /**
         * The spritesheet has multiple animations
         * Each animation is in a separate row (tile)
         * Each animation has its own frame count (frameRate) 
         * And the "die" animations have different sizings (sx)
         */
        this.animations = {
            idle: {
                tile: 0,
                frameRate: 14,
                sx: 110.5,
            },
            idleLeft: {
                tile: 1,
                frameRate: 14,
                sx: 110.5,
            },
            walk: {
                tile: 2,
                frameRate: 9,
                sx: 110.5,
            },
            walkLeft: {
                tile: 3,
                frameRate: 9,
                sx: 110.5,
            },
            attack: {
                tile: 4,
                frameRate: 7,
                sx: 110.5,
            },
            attackLeft: {
                tile: 5,
                frameRate: 7,
                sx: 110.5,
            },
            die: {
                tile: 6,
                frameRate: 11,
                sx: 160,
            },
            dieLeft: {
                tile: 7,
                frameRate: 11,
                sx: 160,
            },
        };
        
        //Depending of the type variable, we will import two different spritesheets
        if( this.type == 0 ) {
            this.imageSrc = './assets/zombiesprites/spritesheet_male.png';
        } else {
            this.imageSrc = './assets/zombiesprites/spritesheet_female.png';
        }

        this.image = new Image();
        this.image.onload = () => {
            this.width = this.image.width;
            this.height = this.image.height;
        }
        this.image.src = this.imageSrc;
        
        // Define a smaller area on top of the sprite-frame to function has the hitArea
        this.hitArea = {
            x: 5,
            y: 0,
            w: 90,
            h:140,
        }
    }

    draw(){
        if(!this.image) return;

        // Properties for the sprite animation will depend on the variables "state" and "frame"
        this.sx = this.animations[this.state].sx * this.frame;
        this.sy = 135 * this.animations[this.state].tile;
        this.sWidth = this.animations[this.state].sx;
        this.sHeight = 140
        this.dx = this.position.x;
        this.dy = this.position.y;
        this.dWidth = 110.5;
        this.dHeight = 140;
        
        //hitArea
        this.hitArea.x = this.dx+10;
        this.hitArea.y = this.dy;
        this.hitArea.w = 90;
        this.hitArea.h = this.dHeight;
        // render the hitArea for debugging purposes
        // c.fillRect(this.hitArea.x, this.hitArea.y, this.hitArea.w, this.hitArea.h);
        
        c.drawImage(this.image, this.sx, this.sy, this.sWidth, this.sHeight, this.dx, this.dy, this.dWidth, this.dHeight);
    }

    update(){
        // Before any sprite update, detect collision
        if(this.collisionDetection()){
            // in case of collision, switch walking animation
            if(this.lastDirection == 'right') {
                this.lastDirection = 'left';
                this.state = 'walkLeft';
            }
            else {
                this.lastDirection = 'right';
                this.state = 'walk';
            }
            //and switch speed motion
            this.speed *= -1;
        } 
        
        this.position.x += this.speed;
        
        this.draw();
    }

    /**
     * For a slower sprite animation, we will not count on the frame render event
     * Instead, we will have a specific timeout interval
     */
    animate(){
        this.timer = setTimeout(()=>{
            if(this.frame < this.animations[this.state].frameRate) this.frame++;
            else this.frame = 0;

            this.animate();
        }, 100);
    }

    /**
     * We will use the tile-map collision detection technique:
     * For every frame-render we will determine:
     *  if the tile next to our baddie is NOT walkable OR
     *  if the floor tile next to our baddie DO NOT exists
     * return hit TRUE
     * otherwise hit FALSE
     * 
     * @returns true/false
     */
    collisionDetection(){
        let tempX1 = Math.floor(this.hitArea.x / tileSize);
        let tempX2 = Math.floor((this.hitArea.x + this.hitArea.w) / tileSize);
        let tempY = Math.floor(this.hitArea.y / tileSize);
        let hit = false;

        if ( 
            levelMap[tempY][tempX2] != 0 || 
            levelMap[tempY][tempX1] != 0 || 
            
            levelMap[tempY + 1][tempX1] == 0 ||
            levelMap[tempY + 1][tempX2] == 0 ||

            this.hitArea.x + this.hitArea.w >= canvas.width ||
            this.hitArea.x <= 0
            ) hit = true;

        return hit;
    }
}