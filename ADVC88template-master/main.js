
var canvas = new fabric.Canvas("myCanvas");

ball_x = 10;
ball_y = 10;
hole_x = 800;
hole_y = 400;


block_image_width = 10;
block_image_height = 10;

function load_img(){
	fabric.Image.fromURL("hole.png", function (Img1) {

		hole_obj = Img1;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
			top:hole_y,
			left:hole_x
		});
		canvas.add(hole_obj);
	});
	new_image();
	}
	


function new_image() {
	fabric.Image.fromURL("ball.png" , function (Img1) {

		ball_obj = Img1;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeight(50);
		ball_obj.set({
top:ball_y,
left:ball_x
		});
		canvas.add(ball_obj);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ball_x == hole_x) && (ball_y == hole_y)){
canvas.remove(ball_obj);
document.getElementById("hd3").innerHTML="you have scored a hole in one!!";
document.getElementById("myCanvas").style.borderColor="red";
	}
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(ball_y > 5){

			ball_y = ball_y - block_image_height
			console.log("block image height = " + block_image_height)
			console.log("when up arrow key is pressed ball x = " + ball_x +"ball y = " + ball_y);
			canvas.remove(ball_obj)
			new_image();
	}
	}

	function down()
	{
		 if(ball_y <= 450){

			ball_y = ball_y + block_image_height
			console.log("block image height = " + block_image_height)
			console.log("when down arrow key is pressed ball x = " + ball_x +"ball y = " + ball_y);
			canvas.remove(ball_obj)
			new_image();
	}
}


	function left()
	{
		if(ball_x >5)
		{
			

				ball_x = ball_x - block_image_height
				console.log("block image height = " + block_image_height)
				console.log("when left arrow key is pressed ball x = " + ball_x +"ball y = " + ball_y);
				canvas.remove(ball_obj)
				new_image();
		}
		}
	

	function right()
	{
		if(ball_x <=1050)
		{
			ball_x = ball_x + block_image_height
				console.log("block image height = " + block_image_height)
				console.log("when right arrow key is pressed ball x = " + ball_x +"ball y = " + ball_y);
				canvas.remove(ball_obj)
				new_image();
		}
	}
	
}

