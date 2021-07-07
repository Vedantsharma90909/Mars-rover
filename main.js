canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=90;
rover_x=10;
rover_y=100;
nasaimage=["mars.jpg","mars1.jpg","mars2.jpg","mars3.jpg","mars4.jpg"];
randomnumber=Math.floor(Math.random()*4);
background_image=nasaimage[randomnumber];
rover_image="rover.png";
function add(){
    background_image_tag=new Image();
    background_image_tag.onload=uplaodbackground;
    background_image_tag.src=background_image;
    rover_image_tag=new Image();
    rover_image_tag.onload=uplaodrover;
    rover_image_tag.src=rover_image;
}
function uplaodbackground(){
    ctx.drawImage(background_image_tag,0,0,canvas.width,canvas.height);
}
function uplaodrover(){
    ctx.drawImage(rover_image_tag,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",mykeydown);
function mykeydown(e){
    keypressed=e.keyCode;
    if(keypressed=="38"){
        up();
    }
    if(keypressed=="40"){
        down();
    }
    if(keypressed=="37"){
        left();
    }
    if(keypressed=="39"){
        right();
    }
}
function up(){
 if(rover_y>0){
     rover_y-=10;
    uplaodbackground();
    uplaodrover(); 
 }
}
function down(){
    if(rover_y<500){
        rover_y+=10;
       uplaodbackground();
       uplaodrover(); 
    }
   }
   function right(){
    if(rover_x<700){
        rover_x+=10;
       uplaodbackground();
       uplaodrover(); 
    }
   }
   function left(){
    if(rover_x>0){
        rover_x-=10;
       uplaodbackground();
       uplaodrover(); 
    }
   }
