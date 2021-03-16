Webcam.set({
 width: 350,
 height: 350,
 imageformat: 'png',
 png_quality: 90
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function takesnapshot()
{
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML = '<img id="capture_image" src="'+data_uri+'"/>;';
    });

}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json', modelloaded);

function modelloaded()
{
    console.log('model loaded');
}

function check()
{
    img = document.getElementById("capture_image");
    classifier.classify(img, gotResult);
}

function gotResult(error, results)
{
    if( error )
    {
        console.log("error");
    }
    else
    {
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
        

    }
}