import Point from "./Point";

class HTMLCanvas
{
    private context: CanvasRenderingContext2D;

    constructor(canvas: HTMLCanvasElement)
    {
        this.context = canvas.getContext("2d");
    }

    DrawRect(leftTop: Point, width: number, height: number, angle: number)
    {
        const ctx = this.context;
        ctx.beginPath();
        ctx.translate(leftTop.x + width / 2, leftTop.y + height / 2);
        ctx.rotate(angle*Math.PI/180);
        ctx.translate(-(leftTop.x + width / 2), -(leftTop.y + height / 2));
        ctx.rect(leftTop.x, leftTop.y, width, height);
        ctx.stroke();
        ctx.resetTransform();
    }
}

export default HTMLCanvas;