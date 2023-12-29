class Point {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    // Method for finding same point exist or not.
    equals(point){
        return this.x == point.x && this.y == point.y;
    }

    /* Setting draw method on the given context and two more parameters for styling.
    Size of 18px and color of black */
    draw(ctx, {size = 18, color = "black", outline = false} = {}){
        /*  Drawing the points as circles.
            Circles need radious
        */
       const radious = size/2; // Radious is half of what ever the size is.
       ctx.beginPath();
       ctx.fillStyle = color;
        // Calling arc method of the drawing context.
        // Drawing at this.x and this.y then radious.
        // Next parametrs are for telling we need a full circle
        // 0 degrees and ending at 360 degrees (Math.PI * 2);
       ctx.arc(this.x, this.y, radious, 0, Math.PI * 2);
       ctx.fill();
       if(outline){
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.strokeStyle = "yellow";
        ctx.arc(this.x, this.y, radious * 0.6, 0 ,Math.PI * 2);
        ctx.stroke();
       }
    }
}