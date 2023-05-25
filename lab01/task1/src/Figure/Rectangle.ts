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
        // TODO: implement
    }

    public Rotate(angle: number): void
    {
        // TODO: implement
    }
};

export default Rectangle;