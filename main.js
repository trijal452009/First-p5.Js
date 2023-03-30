function setup() {
    canvas = createCanvas(400, 300);
    canvas.center();
    background("background.jpg");
    video= createCapture(VIDEO);
    video.size(300, 300);
    video.center();
   

    
}
function take_snapshot(){
    save('trijal.png');
}