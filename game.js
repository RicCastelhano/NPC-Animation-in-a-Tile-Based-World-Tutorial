// Reference to `canvas` tag and set proper 2D context
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

// tile dimensions
const tileSize = 128;

/**
 * Game Area Dimensions
 * The entire canvas dimensions are dynamic,
 * being a calculation between the size of the tile and the number of tiles per row and column.
 */
canvas.width = levelMap[0].length * tileSize;
canvas.height = levelMap.length * tileSize;


// Create Background Sprite
let backgroundAsset = './assets/BG.png';
const background = new Sprite({
    position: {
        x: 0,
        y: 0,
    },
    imageSrc: backgroundAsset,
});


/**
 * Create Tile Sprites
 * We will go through the levelMap array, by column and row.
 * We will create a new Sprite whenever the value of the levelMap[i][j] is different from 0 (zero).
 * The tileSprite position is calculated using the array position times the tile size.
 */
const tileSprites = [];
for (let i = 0; i < levelMap.length; i++){
    for (let j = 0; j < levelMap[i].length; j++){
        if(levelMap[i][j] != 0){
            tileSprites.push(
                new Sprite({
                    position: {
                        x: j * tileSize,
                        y: i * tileSize,
                    },
                    imageSrc: './assets/Tiles/Tile_'+levelMap[i][j]+'.png'
                })
            )
        }   
    }
}


/**
 * Create Decorative Objects Sprites
 * This iteration, different from the previous one, we are iterating through an Object.
 */
const objectAssets = [];
for (const item in levelObjects){
    objectAssets.push(
        new Sprite({
            position: {
                x: levelObjects[item].x,
                y: levelObjects[item].y,
            },
            imageSrc: './assets/Objects/'+levelObjects[item].imageSrc+'.png'
        })
    )
}

/**
 * Create Zombies Baddies
 */
const zombies = [];
for (let i = 0; i < baddiesMap.length; i++){
    for (let j = 0; j < baddiesMap[i].length; j++){
        if(baddiesMap[i][j] != 0){
            zombies.push(
                new Baddie({
                    position: {
                        x: j * tileSize,
                        y: i * tileSize,
                    }
                })
            )
        }   
    }
}

// start the sprite animation for each baddie
zombies.forEach((zombie) => {
    zombie.animate();
})



/**
 * The Game Loop
 * This animate function will be triggered continuously,
 * with the most common refresh rate of 60hz, (60 cycles/frames per second).
 */
function animate(){
    //The window.requestAnimationFrame() method tells the browser you wish to perform an animation
    window.requestAnimationFrame(animate);

    // Per each refresh cycle, we will "clean" the entire canvas, painting it with white.
    c.fillStyle = 'white';
    c.fillRect(0, 0, canvas.width, canvas.height);

    //Time to update assets and redraw everything again
    
    //render background
    background.update();

    //render tile map
    tileSprites.forEach((tileSprite) => {
        tileSprite.update()
    })

    //render game decorative objects
    objectAssets.forEach((objectAsset) => {
        objectAsset.update()
    })

    //render baddies
    zombies.forEach((zombie) => {
        zombie.update()
    })
}

animate();