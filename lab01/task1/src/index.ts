import HTMLCanvas from './HTMLCanvas';

window.onload = () => {
    const canvasElement = document.getElementById('canvas') as HTMLCanvasElement;
    
    const canvas = new HTMLCanvas(canvasElement);
    canvas.DrawRect({x: 200, y: 200}, 40, 50, 0);
    canvas.DrawRect({x: 200, y: 200}, 40, 50, 45);
}