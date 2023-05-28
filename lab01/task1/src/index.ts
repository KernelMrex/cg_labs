import Group from './Figure/Group';
import Rectangle from './Figure/Rectangle';
import HTMLCanvas from './HTMLCanvas';

window.onload = () => {
    const canvasElement = document.getElementById('canvas') as HTMLCanvasElement;
    
    const canvas = new HTMLCanvas(canvasElement);

    const letterI = new Group();
    letterI.Add(new Rectangle(0, 0, 15, 60, 0));
    letterI.Add(new Rectangle(20, 0, 15, 60, 45));
    letterI.Add(new Rectangle(40, 0, 15, 60, 0));
    letterI.SetFillColor({r: 32, g: 111, b: 223});
    letterI.Draw(canvas);

    const letterA = new Group();
    letterA.Add(new Rectangle(15, 0, 15, 60, 30));
    letterA.Add(new Rectangle(40, 0, 15, 60, -30));
    letterA.Add(new Rectangle(15, 35, 40, 10, 0));
    letterA.SetFillColor({r: 223, g: 32, b: 111});
    letterA.Move(64, 0);
    letterA.Draw(canvas);

    const letterSH = new Group();
    letterSH.Add(new Rectangle(0, 0, 15, 60, 0));
    letterSH.Add(new Rectangle(25, 0, 15, 60, 0));
    letterSH.Add(new Rectangle(50, 0, 15, 60, 0));
    letterSH.Add(new Rectangle(0, 45, 65, 15, 0));
    letterSH.SetFillColor({r: 111, g: 223, b: 32});
    letterSH.Move(140, 0);
    letterSH.Draw(canvas);
}