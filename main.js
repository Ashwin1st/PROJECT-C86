const { fabric } = require("./fabric");

var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	fabric.Image.fromURL("BirthdayImage.jpg", function(Img){
        background_image=Img
        background_image.scaleToWidth(700)
        background_image.scaleToHeight(510)
        background_image.set({
            top:10,
            left:60
        })
canvas.add(background_image)
    })
	
}

function playSound(){
	x.play()
}
