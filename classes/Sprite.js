class Sprite{
    /**
     * 
     * @param {position, imageSrc} Object with the the rendering position and the imageSource
     * This approach is not mandatory for this tutorial, but it is a good practice for further features like scrolling-cameras and spritesheets
     */
    constructor( {position, imageSrc} ){
        this.position = position;
        this.imageSrc = imageSrc;

        this.image = new Image();
        this.image.onload = () => {
            this.width = this.image.width;
            this.height = this.image.height;
        }
        this.image.src = imageSrc;
    }
  
    draw(){
        // Prevent the rendering function to throw an error while trying to draw an image that does not exist yet
        if(!this.image) return;

        //c.drawImage(image: CanvasImageSource, dx: Number, dy: Number)
        c.drawImage(this.image, this.position.x, this.position.y);
    }
  
    update(){
        this.draw();
    }
}