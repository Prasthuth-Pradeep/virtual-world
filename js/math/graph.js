// Simple class of Graph.
class Graph {
    // Setting constructor with paramenters points and segments.
    constructor(points = [], segments = []) {
        // Storing the parameters as attributes.
        this.points = points;
        this.segments = segments;
    }

    addSegment(seg) {
        this.segments.push(seg);
    }

    tryAddSegment(seg) {
        if (!this.containsSegment(seg) && !seg.p1.equals(seg.p2)) {
            this.addSegment(seg);
            return true
        }
        return false;
    }

    containsSegment(seg) {
        return this.segments.find((s) => s.equals(seg))
    }

    removeSegment(seg) {
        this.segments.splice(this.segments.indexOf(seg), 1)
    }

    getSegmentWithPoint(point) {
        const segs = [];
        for (const seg of this.segments) {
            console.log(seg)
            if (Object.values(seg).includes(point)) {
                segs.push(seg);
            }
        }
        return segs;
    }

    // Function to add random points on the graph/canvas
    addPoint(point) {
        this.points.push(point);
    }

    containsPoint(point) {
        return this.points.find((p) => p.equals(point))
    }

    tryAddPoint(point) {
        if (!this.containsPoint(point)) {
            this.addPoint(point);
            return true
        }
        return false;
    }

    removePoint(point) {
        const segs = this.getSegmentWithPoint(point);
        for (const seg of segs) {
            this.removeSegment(seg);
        }
        this.points.splice(this.points.indexOf(point), 1)
    }

    dispose(){
        this.points.length = 0;
        this.segments.length = 0;
    }

    // Implements the draw method, it takes context as the input parameter.
    draw(ctx) {
        // Looping through all of the segmets we have.
        for (const seg of this.segments) {
            // tell each of those segments to draw themself on the canvas.
            seg.draw(ctx);
        }
        // Doing the same with points as well.
        for (const point of this.points) {
            point.draw(ctx);
        }
    }
}