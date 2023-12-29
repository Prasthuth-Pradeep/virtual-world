class Viewport {
    constructor(canvas) {
        this.canvas = canvas;

        this.zoom = 1;
        this.offset = new Point(0, 0);

        this.drag = {
            start: new Point(0, 0),
            end: new Point(0, 0),
            offset: new Point(0, 0),
            active: false
        }

        this.#addEventListeners();
    }

    getMouse(evt) {
        return new Point(
            evt.offsetX * this.zoom,
            evt.offsetY * this.zoom
        )
    }

    getOffset(){
        return add(this.offset, this.drag.offset);
    }

    #addEventListeners() {
        this.canvas.addEventListener("mousewheel", this.#handleMouseWheel.bind(this))

        this.canvas.addEventListener("mousedown", this.#handleMouseDown.bind(this))
        this.canvas.addEventListener("mousemove", this.#handleMouseMove.bind(this))
        this.canvas.addEventListener("mouseup", this.#handleMouseUp.bind(this))
    }

    #handleMouseWheel(evt) {
        // console.log(evt.deltaY);
        const dir = Math.sign(evt.deltaY);
        const step = 0.1;
        this.zoom += dir * step;
        this.zoom = Math.max(1, Math.min(5, this.zoom))
        // console.log(this.zoom)
    }

    #handleMouseDown(evt) {
        if (evt.button == 1){
            this.drag.start = this.getMouse(evt);
            this.drag.active = true;
        }
    }

    #handleMouseMove(evt){
        if(this.drag.active == true){
            this.drag.end = this.getMouse(evt);
            this.drag.offset = subtract(this.drag.end, this.drag.start);
        }
    }

    #handleMouseUp(evt){
        if(this.drag.active == true){
            this.offset = add(this.offset, this.drag.offset);
            this.drag = {
                start: new Point(0, 0),
                end: new Point(0, 0),
                offset: new Point(0, 0),
                active: false
            }
        }
    }
}