class Viewport {
    constructor(canvas) {
        this.canvas = canvas;

        this.zoom = 1;

        this.#addEventListeners();
    }

    getMouse(evt){
        return new Point(
            evt.offsetX * this.zoom,
            evt.offsetY * this.zoom
        )
    }

    #addEventListeners() { 
        this.canvas.addEventListener("mousewheel", this.#handleMouseWheel.bind(this))
    }

    #handleMouseWheel(evt){
        // console.log(evt.deltaY);
        const dir = Math.sign(evt.deltaY);
        const step = 0.1;
        this.zoom += dir * step;
        this.zoom = Math.max(1, Math.min(5, this.zoom))
        // console.log(this.zoom)
    }
}