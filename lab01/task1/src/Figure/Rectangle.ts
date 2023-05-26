import ICanvas from "../ICanvas";
import Figure from "./Figure";

class Rectangle extends Figure
{
    public constructor(x: number, y: number, width: number, height: number, angle: number = 0)
    {
        super({
            leftTop: { x: x, y: y },
            height: height,
            width: width,
            angle: angle,
        })
    }

    public Move(x: number, y: number): void
    {
        this.SetFrame({ ...this.GetFrame(), leftTop: { x: x, y: y } })
    }

    public Draw(canvas: ICanvas): void
    {
        const frame = this.GetFrame();
        canvas.SetFillColor(this.GetFillColor());
        canvas.DrawRect(frame.leftTop, frame.width, frame.height, frame.angle);
    }

    public Rotate(angle: number): void
    {
        this.SetFrame({ ...this.GetFrame(), angle: angle});
    }
};

export default Rectangle;