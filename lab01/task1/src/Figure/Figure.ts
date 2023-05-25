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

    constructor(frame: Frame)
    {
        this.frame = frame;
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
}

export default Figure;