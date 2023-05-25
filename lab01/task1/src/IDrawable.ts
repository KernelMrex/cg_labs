import ICanvas from "./ICanvas";

interface IDrawable
{
    Draw(canvas: ICanvas): void;
}

export default IDrawable