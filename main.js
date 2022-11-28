var canvas = new fabric.Canvas('myCanvas')
// Create canvas variable
 blockY=1;
 blockX=1;

blockImageWidth = 350;
blockImageHeight = 430;

var blockImageObject= "";

function newImage(get_image)
{
	fabric.Image.fromURL(get_image, function(Img){
		

		blockImageObject = Img
		blockImageObject.scaleToWidth(blockImageWidth)
		blockImageObject.scaleToHeight(blockImageHeight)
		blockImageObject.set({
			top:blockY,
			left:blockX
		})
		canvas.add(blockImageObject)
	})
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') // adicione os códigos adequados às teclas
	{
		newImage('rr1.png')
	}
	if(keyPressed == '86')
	{
		blockX = 200;
		// enviar ranger verde
		newImage('gr.png')
	}
	
	if(keyPressed == '65')
	{
		blockX =350;
		newImage('yr.png')
		// enviar ranger amarelo
	}
	if(keyPressed == '82')
	{
		blockX = 600;
		newImage('pr.png')
		// enviar ranger rosa
	}
	if(keyPressed == '73')
	{
		blockX = 700;
		newImage('br.png')
	// enviar ranger índigo
	}
	
}

