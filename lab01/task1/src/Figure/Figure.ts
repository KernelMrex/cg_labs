import Color from "../Color";
import ICanvas from "../ICanvas";
import IDrawable from "../IDrawable";
import Point from "../Point"

type Frame = {
    leftTop: Point;
    width: number;
    height: number;
    angle: number;
}

abstract class Figure implements IDrawable
{
    private frame: Frame;
    private fillColor: Color;

    constructor(frame: Frame)
    {
        this.frame = frame;
        this.fillColor = { r: 0, g: 0, b: 0 };
    }

    public abstract Move(x: number, y: number): void;

    public abstract Draw(canvas: ICanvas): void;

    public abstract Rotate(angle: number): void;

    public GetFrame(): Frame
    {
        return { ...this.frame, leftTop: { ...this.frame.leftTop } }
    }

    protected SetFrame(frame: Frame): void
    {
        this.frame = frame;
    }

    public SetFillColor(color: Color): void
    {
        this.fillColor = color;
    }

    public GetFillColor(): Color
    {
        return this.fillColor;
    }
}

export default Figure;