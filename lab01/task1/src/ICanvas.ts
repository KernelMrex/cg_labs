import Color from "./Color";
import Point from "./Point";

interface ICanvas
{
    DrawRect(leftTop: Point, height: number, width: number, angle: number): void;
    SetFillColor(color: Color): void;
}

export default ICanvas;