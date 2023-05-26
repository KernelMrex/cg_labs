import Color from "../Color";
import ICanvas from "../ICanvas";
import Figure from "./Figure";

class Group extends Figure
{
    private figures: Figure[];

    public constructor()
    {
        super({
            leftTop: { x: 0, y: 0 },
            height: 0,
            width: 0,
            angle: 0
        });
        this.figures = [];
    }

    public Add(figure: Figure): void
    {
        this.figures.push(figure);
    }

    public Move(x: number, y: number): void
    {
        const frame = this.GetFrame();

        const deltaX = frame.leftTop.x - x;
        const deltaY = frame.leftTop.y - y;

        this.figures.forEach(element => element.Move(
            element.GetFrame().leftTop.x - deltaX,
            element.GetFrame().leftTop.y - deltaY,
        ));
    }

    public Draw(canvas: ICanvas): void
    {
        this.figures.forEach(figure => figure.Draw(canvas));
    }

    public Rotate(angle: number): void
    {
        throw new Error("Method not implemented.");
    }

    public SetFillColor(color: Color): void
    {
        this.figures.forEach(figure => figure.SetFillColor(color));
    }
}

export default Group;