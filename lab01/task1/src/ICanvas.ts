import Point from "./Point";

interface ICanvas
{
    DrawRect(leftTop: Point, height: number, width: number, angle: number): void;
}

export default ICanvas;