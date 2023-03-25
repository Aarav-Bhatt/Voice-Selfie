var voicerecognition=window.webkitSpeechRecognition;

var recognition=new voicerecognition();



 function start() {
document.getElementById ("textb1").innerHTML='';
recognition.start();
 }

 recognition.onresult=function (event) {
    console.log(event)
    var content = event.results[0][0].transcript;

    document.getElementById ("textb1").value=content;

    if(content=="take my selfie"){
        speak()
    }
    
}

function speak() {
    synth= window.speechSynthesis;
    speak_data="Taking your selfie in 5 4 3 2 1";
    utterthis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis)

    Webcam.attach(camera)

    setTimeout(function(){
        takesnapshot();
        save()
    },5000)
    synth= window.speechSynthesis;
    speak_data="Taking your next selfie in 5 4 3 2 1";
    utterthis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis)

    Webcam.attach(camera)

    setTimeout(function(){
        takesnapshot();
        save()
    },5000)
    synth= window.speechSynthesis;
    speak_data="Taking your next selfie in 5 4 3 2 1";
    utterthis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis)

    Webcam.attach(camera)

    setTimeout(function(){
        takesnapshot();
        save()
    },5000)
    

}

   




function takesnapshot(){
Webcam.snap(function(data_uri){
    document.getElementById("emptydiv2").innerHTML='<img id="img100" src="'+data_uri+'">'

})
}

function save(){
    link=document.getElementById("link");
    image=document.getElementById("img100").src;
    link.href=image;
    link.click(); 

}


camera= document.getElementById("emptydiv");
Webcam.set({
    width:360,
    height:250,
    image_format:'jpeg',
    jpeg_quality:100            
})

 

 