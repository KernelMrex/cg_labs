import Color from "./Color";
import ICanvas from "./ICanvas";
import Point from "./Point";

class HTMLCanvas implements ICanvas
{
    private canvas: HTMLCanvasElement;
    private context: CanvasRenderingContext2D;
    private fillColor: Color;

    constructor(canvas: HTMLCanvasElement)
    {
        this.canvas = canvas;
        this.context = canvas.getContext("2d");
        this.fillColor = { r: 0, g: 0, b: 0 };
    }

    DrawRect(leftTop: Point, width: number, height: number, angle: number)
    {
        const ctx = this.context;
        ctx.beginPath();
        ctx.fillStyle = `rgb(${this.fillColor.r}, ${this.fillColor.g}, ${this.fillColor.b})`
        ctx.translate(leftTop.x + width / 2, leftTop.y + height / 2);
        ctx.rotate(angle*Math.PI/180);
        ctx.translate(-(leftTop.x + width / 2), -(leftTop.y + height / 2));
        ctx.fillRect(leftTop.x, leftTop.y, width, height);
        ctx.resetTransform();
    }

    SetFillColor(color: Color): void
    {
        this.fillColor = color;
    }

    Clear(): void
    {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

export default HTMLCanvas;