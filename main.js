mustacheX = 0;
MustacheY = 0;

function preload(){
    mustache = loadImage('https://i.postimg.cc/vHghkJyG/mustache.png');
}

function setup(){
    canvas = createCanvas(350, 350);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(350,350);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('poseNet is established');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        mustacheX = results[0].pose.nose.x - 15;
        MustacheY = results[0].pose.nose.y;
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}

function draw(){
    image(video, 0, 0, 350, 350);
    image(mustache, mustacheX, MustacheY, 30, 30);

}

function take_snapshot(){
    save('myfilter.png');
}

