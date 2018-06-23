var gameBullet=[];
var levelButtons=[];
var imgArray=[];
var enemy=[];
var myScore;
var points=0;
var health=100;
var bosshealth=10000;
var i=0;//for bullets or enemies
var j=0;//for bullets or enemies
var k=0;//enemy bullets only
var m=0;//for enemies;
var p=0;//for enemies from the last level
var c=0;//works like a switch to delete only the enemies from the last level when transitioning to a new level
var poz=0;//moves boss to the initial position
var pheal=0;
var stopg=0;
var gamePaused=false;
var Laser=[];
var okbutton=0;
var l1=0;
var interval;
//Starts game(creates player ,score and health)
function startGame() {
    myGameArea.start();
    imgArray[0] = new Image();
    imgArray[0].src = 'stalin.png';
    imgArray[1] = new Image();
    imgArray[1].src = 'stalin2.png';
    imgArray[2] = new Image();
    imgArray[2].src = 'stalin3.png';
    imgArray[3] = new Image();
    imgArray[3].src = 'stalin4.png';
    imgArray[4] = new Image();
    imgArray[4].src = 'porky.png';
    imgArray[5] = new Image();
    imgArray[5].src = 'boss1.png';
    imgArray[6] = new Image();
    imgArray[6].src = 'boss2.png';
    imgArray[7] = new Image();
    imgArray[7].src = 'boss3.png';
    imgArray[8] = new Image();
    imgArray[8].src = 'boss4.png';
    imgArray[9] = new Image();
    imgArray[9].src = 'boss5.png';
    myGamePiece= new component(30,40,"red",10,120,"player");
    myScore = new component("30px", "Consolas", "black", 280, 40, "text");
    myHealth= new component("30px", "Consolas", "black", 280, 400, "text");
    myGameBoss=new component(120, 130, "green", myGameArea.canvas.width, myGameArea.canvas.height*2/6-30,"boss");
    myGameBoss.done=true;
}

function restart(){
  gameBullet=[];
  levelButtons=[];
  imgArray=[];
  enemy=[];
  myScore;
  points=0;
  health=100;
  bosshealth=10000;
  i=0;
  j=0;
  k=0;
  m=0;
  p=0;
  c=0;
  Laser=[];
  //myGameArea.keys=[];
  poz=0;
  pheal=0;
  stopg=0;
  gamePaused=false;
  okbutton=0;
  l1=0;

  startGame();
}
window.addEventListener('keydown', function (e) {


  if(e.keyCode==80)
    pause();
  else
  if(stopg==1)
    if(e.keyCode==82)
    restart();
});

function pause(){

  if (!gamePaused) {
    gamePaused = true;
    interval = clearTimeout(interval);

    //  myMusic.stop();

  }
  else if (gamePaused) {
    //myMusic.play();
    gamePaused = false;
    interval = setInterval(updateGameArea, 5);

  }

}
//Creates canvas , events and how many times per sec should the object redraw

var myGameArea = {
    canvas : document.getElementById("myCanvas"),
    start : function() {

        this.canvas.width = 800;
        this.canvas.height = 400;
        this.context = this.canvas.getContext("2d");
        button1=new button(120, 60, this.canvas.width/2-60, this.canvas.height/2-30);
        button1.update();
        button2=new levelbutton(100, 50, this.canvas.width/2+200, this.canvas.height/2-190,2,"LEVEL 2");
        button2.update();
        button3=new levelbutton(100, 50, this.canvas.width/2+200, this.canvas.height/2-150,3,"LEVEL 3");
        button3.update();
        button4=new levelbutton(100, 50, this.canvas.width/2+200, this.canvas.height/2-110,4,"LEVEL 4");
        button4.update();
        button5=new levelbutton(100, 50, this.canvas.width/2+200, this.canvas.height/2-70,5,"LEVEL 5");
        button5.update();
        button6=new levelbutton(100, 50, this.canvas.width/2+200, this.canvas.height/2-30,6,"LEVEL 6");
        button6.update();
        button7=new levelbutton(100, 50, this.canvas.width/2+200, this.canvas.height/2+10,7,"LEVEL 7");
        button7.update();
        button8=new levelbutton(100, 50, this.canvas.width/2+200, this.canvas.height/2+50,8,"LEVEL 8");
        button8.update();
        button9=new levelbutton(100, 50, this.canvas.width/2+200, this.canvas.height/2+90,9,"LEVEL 9");
        button9.update();
        button10=new levelbutton(100, 50, this.canvas.width/2+200, this.canvas.height/2+130,10,"LEVEL 10");
        button10.update();
        button11=new levelbutton(100, 50, this.canvas.width/2+200, this.canvas.height/2+170,11,"LEVEL 11");
        button11.update();
        button12=new levelbutton(120, 60, this.canvas.width/2+300, this.canvas.height/2-30,12,"BOSS");
        button12.update();

        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        //How many times per sec should the object redraw
        this.frameNo = 0;


        //Events for key pressing
        window.addEventListener('keydown', function (e) {
          myGameArea.keys = (myGameArea.keys || []);
          myGameArea.keys[e.keyCode] = (e.type == "keydown");
        })
        window.addEventListener('mousedown', function (e) {
          if(e.pageY>button1.y&&e.pageY<button1.height+button1.y&&e.pageX>button1.x&&e.pageX<button1.width+button1.x)
              {
                 points=0;
                 interval = setInterval(updateGameArea, 5);
            		 button1=0;
            		 button2=0;
            		 button3=0;
            		 button4=0;
            		 button5=0;
            		 button6=0;
            		 button7=0;
            		 button8=0;
            		 button9=0;
            		 button10=0;
            		 button11=0;
            		 button12=0;

              }
          else
          if(e.pageY>button2.y&&e.pageY<button2.height+button2.y&&e.pageX>button2.x&&e.pageX<button2.width+button2.x)
              {
                 points=1000;
                 interval = setInterval(updateGameArea, 5);
                 button1=0;
            		 button2=0;
            		 button3=0;
            		 button4=0;
            		 button5=0;
            		 button6=0;
            		 button7=0;
            		 button8=0;
            		 button9=0;
            		 button10=0;
            		 button11=0;
            		 button12=0;
              }
          else
          if(e.pageY>button3.y&&e.pageY<button3.height+button3.y&&e.pageX>button3.x&&e.pageX<button3.width+button3.x)
              {
                 points=7000;
                 interval = setInterval(updateGameArea, 5);
                 button1=0;
            		 button2=0;
            		 button3=0;
            		 button4=0;
            		 button5=0;
            		 button6=0;
            		 button7=0;
            		 button8=0;
            		 button9=0;
            		 button10=0;
            		 button11=0;
            		 button12=0;
              }
          else
          if(e.pageY>button4.y&&e.pageY<button4.height+button4.y&&e.pageX>button4.x&&e.pageX<button4.width+button4.x)
              {
                 points=25000;
                 interval = setInterval(updateGameArea, 5);
                 button1=0;
            		 button2=0;
            		 button3=0;
            		 button4=0;
            		 button5=0;
            		 button6=0;
            		 button7=0;
            		 button8=0;
            		 button9=0;
            		 button10=0;
            		 button11=0;
            		 button12=0;
              }
          else
          if(e.pageY>button5.y&&e.pageY<button5.height+button5.y&&e.pageX>button5.x&&e.pageX<button5.width+button5.x)
              {
                 points=50000;
                 interval = setInterval(updateGameArea, 5);
                 button1=0;
            		 button2=0;
            		 button3=0;
            		 button4=0;
            		 button5=0;
            		 button6=0;
            		 button7=0;
            		 button8=0;
            		 button9=0;
            		 button10=0;
            		 button11=0;
            		 button12=0;
              }
          else
          if(e.pageY>button6.y&&e.pageY<button6.height+button6.y&&e.pageX>button6.x&&e.pageX<button6.width+button6.x)
              {
                 points=75000;
                 interval = setInterval(updateGameArea, 5);
                 button1=0;
            		 button2=0;
            		 button3=0;
            		 button4=0;
            		 button5=0;
            		 button6=0;
            		 button7=0;
            		 button8=0;
            		 button9=0;
            		 button10=0;
            		 button11=0;
            		 button12=0;
              }
          else
          if(e.pageY>button7.y&&e.pageY<button7.height+button7.y&&e.pageX>button7.x&&e.pageX<button7.width+button7.x)
              {
                 points=100000;
                 interval = setInterval(updateGameArea, 5);
                 button1=0;
            		 button2=0;
            		 button3=0;
            		 button4=0;
            		 button5=0;
            		 button6=0;
            		 button7=0;
            		 button8=0;
            		 button9=0;
            		 button10=0;
            		 button11=0;
            		 button12=0;
              }
          else
          if(e.pageY>button8.y&&e.pageY<button1.height+button8.y&&e.pageX>button8.x&&e.pageX<button8.width+button8.x)
              {
                 points=125000;
                 interval = setInterval(updateGameArea, 5);
                 button1=0;
            		 button2=0;
            		 button3=0;
            		 button4=0;
            		 button5=0;
            		 button6=0;
            		 button7=0;
            		 button8=0;
            		 button9=0;
            		 button10=0;
            		 button11=0;
            		 button12=0;
              }
          else
          if(e.pageY>button9.y&&e.pageY<button1.height+button9.y&&e.pageX>button9.x&&e.pageX<button9.width+button9.x)
              {
                 points=150000;
                 interval = setInterval(updateGameArea, 5);
                 button1=0;
            		 button2=0;
            		 button3=0;
            		 button4=0;
            		 button5=0;
            		 button6=0;
            		 button7=0;
            		 button8=0;
            		 button9=0;
            		 button10=0;
            		 button11=0;
            		 button12=0;
              }
          else
          if(e.pageY>button10.y&&e.pageY<button1.height+button10.y&&e.pageX>button10.x&&e.pageX<button10.width+button10.x)
              {
                 points=175000;
                 interval = setInterval(updateGameArea, 5);
                 button1=0;
            		 button2=0;
            		 button3=0;
            		 button4=0;
            		 button5=0;
            		 button6=0;
            		 button7=0;
            		 button8=0;
            		 button9=0;
            		 button10=0;
            		 button11=0;
            		 button12=0;
              }
          else
          if(e.pageY>button11.y&&e.pageY<button1.height+button11.y&&e.pageX>button11.x&&e.pageX<button11.width+button11.x)
              {
                 points=200000;
                 interval = setInterval(updateGameArea, 5);
                 button1=0;
            		 button2=0;
            		 button3=0;
            		 button4=0;
            		 button5=0;
            		 button6=0;
            		 button7=0;
            		 button8=0;
            		 button9=0;
            		 button10=0;
            		 button11=0;
            		 button12=0;
              }
          else
          if(e.pageY>button12.y&&e.pageY<button1.height+button12.y&&e.pageX>button12.x&&e.pageX<button12.width+button12.x)
              {
                 points=250000;
                 interval = setInterval(updateGameArea, 5);
                 button1=0;
            		 button2=0;
            		 button3=0;
            		 button4=0;
            		 button5=0;
            		 button6=0;
            		 button7=0;
            		 button8=0;
            		 button9=0;
            		 button10=0;
            		 button11=0;
            		 button12=0;
              }
        })

        window.addEventListener('keyup', function (e) {

            myGameArea.keys[e.keyCode] = (e.type == "keydown");

        })

    },


    //Clears the canvas
	  clear: function(){
	     this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
    },
        //Stops game
    stop : function() {

      //myMusic.stop();
        clearInterval(interval);
          stopg=1;
    }
}

//Bullet constructor
function bullet(width,height,color,x,y,type){
  this.gamearea=myGameArea;
  this.type=type;
  this.width=width;
  this.height=height;
  this.speedX;
  this.speedY;
  this.x=x;
  this.y=y;
  this.done=false;//if it is true ,the object won't be drawed anymore
  this.z=0;
  this.update=function(){
      ctx=myGameArea.context;
      ctx.fillStyle = color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
      }
  this.newPos= function(){
      this.x+=this.speedX;
      this.y+=this.speedY;
	    this.hitBorder();
	     }
  this.hitBorder = function() {
	    var right = myGameArea.canvas.width - this.width;

      if (this.x > right){
        this.done=true;
      }

      }
  this.crashWith = function(otherobj) {
      var myleft = this.x;
      var myright = this.x + (this.width);
      var mytop = this.y;
      var mybottom = this.y + (this.height);
      var otherleft = otherobj.x;
      var otherright = otherobj.x + (otherobj.width);
      var othertop = otherobj.y;
      var otherbottom = otherobj.y + (otherobj.height);
      var crash = true;
        if ((mybottom < othertop) ||
               (mytop > otherbottom) ||
               (myright < otherleft) ||
               (myleft > otherright)) {
           crash = false;
        }

      return crash;
    }
}
//Object constructor
function component(width,height,color,x,y,type,line){

    this.gamearea=myGameArea;
    this.c1=0;//works like a switch for change of diractione when the enemy is rotating
    this.type=type;
    this.width=width;
    this.height=height;
    this.speedX=0;
    this.speedY=0;
    this.x=x;
    this.y=y;
    this.done=false;//if it is true ,the object won't be drawed anymore
    this.line=line;
    this.color=color;
    this.update= function(){
	      ctx=myGameArea.context;

         if (this.type == "text") {
           ctx.font = this.width + " " + this.height;
           ctx.fillStyle = this.color;
           ctx.fillText(this.text, this.x, this.y);
         }
         else {

            if(type=="player")
              {
                if(health>=80)
                  ctx.drawImage(imgArray[0],this.x,this.y, this.width, this.height);
                else
                if(health<80&&health>=50)
                  ctx.drawImage(imgArray[1],this.x,this.y, this.width, this.height);
                else
                if(health<50&&health>=20)
                  ctx.drawImage(imgArray[2],this.x,this.y, this.width, this.height);
                else
                if(health<25)
                  ctx.drawImage(imgArray[3],this.x,this.y, this.width, this.height);

              }
            else
            if(type=="enemy")
              ctx.drawImage(imgArray[4],this.x,this.y, this.width, this.height);
            else
            if(type=="boss")
              {
                if(bosshealth>=8000)
                  ctx.drawImage(imgArray[5],this.x,this.y, this.width, this.height);
                else
                if(bosshealth<8000&&bosshealth>=5000)
                  ctx.drawImage(imgArray[6],this.x,this.y, this.width, this.height);
                else
                if(bosshealth<5000&&bosshealth>=2500)
                  ctx.drawImage(imgArray[7],this.x,this.y, this.width, this.height);
                else
                if(bosshealth<2500&&bosshealth>=1000)
                ctx.drawImage(imgArray[8],this.x,this.y, this.width, this.height);
                  else
                if(bosshealth<1000)
                  ctx.drawImage(imgArray[9],this.x,this.y, this.width, this.height);
              }
              else{

                ctx.fillStyle = color;
                ctx.fillRect(this.x, this.y, this.width, this.height);
              }


        }






      }
    this.newPos= function(){
	     this.x+=this.speedX;
	     this.y+=this.speedY;
	     this.hitBorder();
	  }
    this.hitBorder = function() {
       var down = myGameArea.canvas.height - this.height;
          if (this.y > down) {
            this.y = down;
	        }
          if (this.y < 0) {
            this.y = 0;
	        }
	     var right = myGameArea.canvas.width - this.width;
          if (this.x > right) {
            this.x = right;
	        }
          if (this.x < 0) {
            this.x = 0;
          }
    }
    this.crashWith = function(otherobj) {
       var myleft = this.x;
       var myright = this.x + (this.width);
       var mytop = this.y;
       var mybottom = this.y + (this.height);
       var otherleft = otherobj.x;
       var otherright = otherobj.x + (otherobj.width);
       var othertop = otherobj.y;
       var otherbottom = otherobj.y + (otherobj.height);
       var crash = true;
          if ((mybottom -1< othertop+7) ||
               (mytop > otherbottom-10) ||
               (myright -10< otherleft+7) ||
               (myleft+5 > otherright-1)) {
                 crash = false;
               }

        return crash;
    }
}
function button(width,height,x,y){

    this.gamearea=myGameArea;
    this.height=height;
    this.width=width;
    this.x=x;
    this.y=y;
    this.update= function(){
	         ctx=myGameArea.context;
           ctx.font = "30px Arial";
           ctx.fillStyle = "#ff1135";
           ctx.fillRect(this.x, this.y, this.width-25, this.height-25);
           ctx.fillStyle = "black";
           ctx.fillText("START", this.x, this.y+30);

        }
}
function levelbutton(width,height,x,y,level,text){

    this.gamearea=myGameArea;
    this.height=height;
    this.width=width;
    this.x=x;
    this.y=y;
    this.text=text;
    this.level=level;
    this.update= function(){
	         ctx=myGameArea.context;
           if(level==12)
           {
             ctx.font = "30px Arial";
             ctx.fillStyle = "#ff1135";
             ctx.fillRect(this.x, this.y, this.width-25, this.height-25);
             ctx.fillStyle = "black";
             ctx.fillText(text, this.x, this.y+30);
           }
           else {
             ctx.font = "17px Arial";
             ctx.fillStyle = "#ff1135";
             ctx.fillRect(this.x, this.y, this.width-25, this.height-25);
             ctx.fillStyle = "black";
             ctx.fillText(text, this.x, this.y+20);
           }


        }
}
ok=0;
//Updates game
function updateGameArea() {
    var x,y;
    myGamePiece.speedX = 0;
    myGamePiece.speedY = 0;
    //Events that occur when certain keys are pressed
    if (myGameArea.keys && myGameArea.keys[37]) {myGamePiece.speedX = -4; }
    if (myGameArea.keys && myGameArea.keys[39]) {myGamePiece.speedX = 4; }
    if (myGameArea.keys && myGameArea.keys[38]) {myGamePiece.speedY = -4; }
    if (myGameArea.keys && myGameArea.keys[40]) {myGamePiece.speedY = 4; }
    if (myGameArea.keys && myGameArea.keys[90]){
       //If 'z' is pressed it will create bullets
          if (myGameArea.frameNo == 1 || everyinterval(30)){
          //  //Laser[l1]=new sound("laser.mp3"); Laser[l1].play(); l1++;
            gameBullet[i]=new bullet(5,5,"red",myGamePiece.x+15,myGamePiece.y+14,"player");
            gameBullet[i].speedX=5;
            gameBullet[i].speedY=0;
            i=i+1;
            k=i;
          }
    }

    
    //Checks if player crashed with the enemy
    for (i = 0; i < enemy.length; i += 1) {
       if(enemy[i]!=undefined&&enemy[i].done==false)
          if (myGamePiece.crashWith(enemy[i])) {
            enemy[i].done=true;
            health-=10;
              ok=0;
          }


    }
    //Clears canvas in order to be redrawn
    myGameArea.clear();
    //Clears bullet array from bullets that are undefined or thhose who have "done" property set on true
    for(var k=0;k<gameBullet.length;k++)
     if(gameBullet[k]==undefined||gameBullet[k].done==true)
     {
       gameBullet.splice(k,1);
     }
    //Clears enemy array from enemys that are undefined or those who have "done" property set on true
    for(var k=0;k<enemy.length;k++)
     if(enemy[k]==undefined||enemy[k].done==true)
     {
       enemy.splice(k,1);

     }

    //Levels and enemy generator
    if(points<1000){
     myGameArea.frameNo += 1;
      if (myGameArea.frameNo == 1 || everyinterval(Math.floor((Math.random() * 150) + 100)))
      {
          x = myGameArea.canvas.width;
          y = Math.floor((Math.random() * (myGameArea.canvas.height-60)) + 40); ;
          enemy[m]=new component(30, 30, "green", x, y,"enemy",1); m++;
      }

     for (i = 0; i <enemy.length; i += 1) {
          if(enemy[i]!=undefined&&enemy[i].done!=true)
            if(enemy[i].x>-70)
            {

              enemy[i].x+=-5;
              enemy[i].update();
            }

     }

    }
    else
    if(points>=1000&&points <7000){
      //delete only the enemies from the last level when transitioning to a new level
        if(c==0)
       {
         p=i;
         for (i=0; i <p; i += 1)
            enemy[i].done=true;

         c=1; m=0; enemy=[]; gameBullet=[]; k=0; Laser=[]; myGameArea.keys=[];
       }
      myGameArea.frameNo += 1;
       if (myGameArea.frameNo == 1 || everyinterval(600))
       {
         if(ok==0)
         {
           if(health<100)
           health+=30;
           x = myGameArea.canvas.width;
           var b;
           for(b=1;b<=6;b++)
           {
              y = myGameArea.canvas.height*b/7-17;
              enemy[m]=new component(30, 30, "green", x, y,"enemy",1); m++;
           }
           x = myGameArea.canvas.width+60;
           for(b=1;b<=5;b++)
           {
              y = myGameArea.canvas.height*b/7+12;
              enemy[m]=new component(30, 30, "green", x, y,"enemy",2); m++;
           }
           x = myGameArea.canvas.width+120;
           for(b=1;b<=6;b++)
           {
              y = myGameArea.canvas.height*b/7-17;
              enemy[m]=new component(30, 30, "green", x, y,"enemy",3); m++;
           }

         }
       }

      for (i = 0; i <enemy.length; i += 1) {
         if(enemy[i]!=undefined&&enemy[i].done!=true)
            if(enemy[i].x>-70)
           {
               if(enemy[i].line==1&&enemy[i].x<myGameArea.canvas.width*3/4)
               {
                  if (myGameArea.frameNo == 1 ||
                    everyinterval(Math.floor((Math.random() * 600) + 300)))
                  {
                    //Laser[l1]=new sound("laser.mp3"); Laser[l1].play(); l1++;
                    gameBullet[k]=new bullet(5,5,"blue",enemy[i].x-5,enemy[i].y+10,"enemy");
                    var deltaX=enemy[i].x-5-myGamePiece.x;
                    var deltaY=enemy[i].y+10-myGamePiece.y;
                    var rad = Math.atan2(deltaY, deltaX);
                    gameBullet[k].speedX=-5*Math.cos(rad);
                    gameBullet[k].speedY=-5*Math.sin(rad);
                    k=k+1;
                  }

                ok=1;
              }
              else
              if(enemy[i].line==2&&enemy[i].x<myGameArea.canvas.width*3/4+60)
              {
                 if (myGameArea.frameNo == 1 ||
                   everyinterval(Math.floor((Math.random() * 600) + 300)))
                 {
                   //Laser[l1]=new sound("laser.mp3"); Laser[l1].play(); l1++;
                   gameBullet[k]=new bullet(5,5,"blue",enemy[i].x-5,enemy[i].y+10,"enemy");
                   var deltaX=enemy[i].x-5-myGamePiece.x;
                   var deltaY=enemy[i].y+10-myGamePiece.y;
                   var rad = Math.atan2(deltaY, deltaX);
                   gameBullet[k].speedX=-5*Math.cos(rad);
                   gameBullet[k].speedY=-5*Math.sin(rad);
                   k=k+1;
                 }

               ok=1;
             }
             else
             if(enemy[i].line==3&&enemy[i].x<myGameArea.canvas.width*3/4+120)
             {
                if (myGameArea.frameNo == 1 ||
                  everyinterval(Math.floor((Math.random() * 600) + 300)))
                {
                  //Laser[l1]=new sound("laser.mp3"); Laser[l1].play(); l1++;
                  gameBullet[k]=new bullet(5,5,"blue",enemy[i].x-5,enemy[i].y+10,"enemy");
                  var deltaX=enemy[i].x-5-myGamePiece.x;
                  var deltaY=enemy[i].y+10-myGamePiece.y;
                  var rad = Math.atan2(deltaY, deltaX);
                  gameBullet[k].speedX=-5*Math.cos(rad);
                  gameBullet[k].speedY=-5*Math.sin(rad);
                  k=k+1;
                }

              ok=1;
            }
             else
               enemy[i].x+=-4;

             enemy[i].update();
           }
        }

    }
    else
    if(points>=7000&&points<25000){
      if(c==1)
     {
       p=i;
       for (i=0; i <p; i += 1)
          enemy[i].done=true;

       c=0; m=0; enemy=[]; gameBullet=[]; k=0; Laser=[]; myGameArea.keys=[];
     }
    myGameArea.frameNo += 1;
     if (myGameArea.frameNo == 1 || everyinterval(600))
     {
       if(ok==0)
       {
         if(health<100)
         health+=30;
         x = myGameArea.canvas.width;
         var b;
         for(b=1;b<=6;b++)
         {
            y = myGameArea.canvas.height*b/7-17;
            enemy[m]=new component(30, 30, "green", x, y,"enemy",1); m++;
         }
         x = myGameArea.canvas.width+60;
         for(b=1;b<=5;b++)
         {
            y = myGameArea.canvas.height*b/7+12;
            enemy[m]=new component(30, 30, "green", x, y,"enemy",2); m++;
         }
         x = myGameArea.canvas.width+120;
         for(b=1;b<=6;b++)
         {
            y = myGameArea.canvas.height*b/7-17;
          enemy[m]=new component(30, 30, "green", x, y,"enemy",3); m++;
         }


       }
     }

    for (i = 0; i <enemy.length; i += 1) {
       if(enemy[i]!=undefined&&enemy[i].done!=true)
          if(enemy[i].x>-70)
         {
             if(enemy[i].line==1&&enemy[i].x<myGameArea.canvas.width*3/4)
             {
                if (myGameArea.frameNo == 1 ||
                  everyinterval(Math.floor((Math.random() * 500) + 300)))
                {
                  //Laser[l1]=new sound("laser.mp3"); Laser[l1].play(); l1++;
                  gameBullet[k]=new bullet(5,5,"blue",enemy[i].x-5,enemy[i].y+10,"enemy");
                  var deltaX=enemy[i].x-5-myGamePiece.x;
                  var deltaY=enemy[i].y+10-myGamePiece.y;
                  var rad = Math.atan2(deltaY, deltaX);
                  gameBullet[k].speedX=-5*Math.cos(rad);
                  gameBullet[k].speedY=-5*Math.sin(rad);
                  k=k+1;
                }
                if(everyinterval(60))
                {
                  if( enemy[i].c1==0)
                  {
                    enemy[i].speedX=0;
                    enemy[i].speedY=0.75;
                    enemy[i].c1=1;
                  }
                  else
                  if( enemy[i].c1==1)
                  {
                    enemy[i].speedX=0;
                    enemy[i].speedY=-0.75;
                    enemy[i].c1=0;
                  }
                }
              enemy[i].newPos();
              ok=1;
            }
            else
            if(enemy[i].line==2&&enemy[i].x<myGameArea.canvas.width*3/4+60)
            {
               if (myGameArea.frameNo == 1 ||
                 everyinterval(Math.floor((Math.random() * 500) + 300)))
               {
                 //Laser[l1]=new sound("laser.mp3"); Laser[l1].play(); l1++;
                 gameBullet[k]=new bullet(5,5,"blue",enemy[i].x-5,enemy[i].y+10,"enemy");
                 var deltaX=enemy[i].x-5-myGamePiece.x;
                 var deltaY=enemy[i].y+10-myGamePiece.y;
                 var rad = Math.atan2(deltaY, deltaX);
                 gameBullet[k].speedX=-5*Math.cos(rad);
                 gameBullet[k].speedY=-5*Math.sin(rad);
                 k=k+1;
               }
               if(everyinterval(60))
               {
                 if( enemy[i].c1==0)
                 {
                   enemy[i].speedX=0;
                   enemy[i].speedY=0.75;
                   enemy[i].c1=1;
                 }
                 else
                 if( enemy[i].c1==1)
                 {
                   enemy[i].speedX=0;
                   enemy[i].speedY=-0.75;
                   enemy[i].c1=0;
                 }
               }
             enemy[i].newPos();
             ok=1;
           }
           else
           if(enemy[i].line==3&&enemy[i].x<myGameArea.canvas.width*3/4+120)
           {
              if (myGameArea.frameNo == 1 ||
                everyinterval(Math.floor((Math.random() * 500) + 300)))
              {
                //Laser[l1]=new sound("laser.mp3"); Laser[l1].play(); l1++;
                gameBullet[k]=new bullet(5,5,"blue",enemy[i].x-5,enemy[i].y+10,"enemy");
                var deltaX=enemy[i].x-5-myGamePiece.x;
                var deltaY=enemy[i].y+10-myGamePiece.y;
                var rad = Math.atan2(deltaY, deltaX);
                gameBullet[k].speedX=-5*Math.cos(rad);
                gameBullet[k].speedY=-5*Math.sin(rad);
                k=k+1;
              }
              if(everyinterval(60))
              {
                if( enemy[i].c1==0)
                {
                  enemy[i].speedX=0;
                  enemy[i].speedY=0.75;
                  enemy[i].c1=1;
                }
                else
                if( enemy[i].c1==1)
                {
                  enemy[i].speedX=0;
                  enemy[i].speedY=-0.75;
                  enemy[i].c1=0;
                }
              }
            enemy[i].newPos();
            ok=1;
          }
           else
             enemy[i].x+=-4;

           enemy[i].update();
         }
      }
    }
    else
    if(points>=25000&&points<50000){
      if(c==0)
     {
       p=i;
       for (i=0; i <p; i += 1)
          enemy[i].done=true;
       c=1; m=0; enemy=[]; gameBullet=[]; k=0; Laser=[]; myGameArea.keys=[];
     }
    myGameArea.frameNo += 1;
     if (myGameArea.frameNo == 1 || everyinterval(600))
     {
       if(ok==0)
       {
         if(health<100)
         health+=30;
         x = myGameArea.canvas.width;
         var b;
         for(b=1;b<=6;b++)
         {
            y = myGameArea.canvas.height*b/7-17;
            enemy[m]=new component(30, 30, "green", x, y,"enemy",1); m++;
         }
         x = myGameArea.canvas.width+60;
         for(b=1;b<=5;b++)
         {
            y = myGameArea.canvas.height*b/7+12;
            enemy[m]=new component(30, 30, "green", x, y,"enemy",2); m++;
         }
         x = myGameArea.canvas.width+120;
         for(b=1;b<=6;b++)
         {
            y = myGameArea.canvas.height*b/7-17;
          enemy[m]=new component(30, 30, "green", x, y,"enemy",3); m++;
         }


       }
     }

    for (i = 0; i <enemy.length; i += 1) {
       if(enemy[i]!=undefined&&enemy[i].done!=true)
          if(enemy[i].x>-70)
         {
             if(enemy[i].line==1&&enemy[i].x<myGameArea.canvas.width*3/4)
             {
                if (myGameArea.frameNo == 1 ||
                  everyinterval(Math.floor((Math.random() * 100) + 50)))
                {
                  if(myGamePiece.y<enemy[i].y+30&&myGamePiece.y>enemy[i].y-30)
                  {
                    //Laser[l1]=new sound("laser.mp3"); Laser[l1].play(); l1++;
                    gameBullet[k]=new bullet(5,5,"blue",enemy[i].x-5,enemy[i].y+10,"enemy");
                    gameBullet[k].speedX=-5;
                    gameBullet[k].speedY=-0.25;
                    k=k+1;
                    gameBullet[k]=new bullet(5,5,"blue",enemy[i].x-5,enemy[i].y+10,"enemy");
                    gameBullet[k].speedX=-5;
                    gameBullet[k].speedY=0;
                    k=k+1;
                    gameBullet[k]=new bullet(5,5,"blue",enemy[i].x-5,enemy[i].y+10,"enemy");
                    gameBullet[k].speedX=-5;
                    gameBullet[k].speedY=0.25;
                    k=k+1;
                  }

                }
                if(everyinterval(50))
                {
                  if( enemy[i].c1==0)
                  {
                    enemy[i].speedX=0;
                    enemy[i].speedY=1;
                    enemy[i].c1=1;
                  }
                  else
                  if( enemy[i].c1==1)
                  {
                    enemy[i].speedX=0;
                    enemy[i].speedY=-1;
                    enemy[i].c1=0;
                  }
                }

              enemy[i].newPos();
              ok=1;
            }
            else
            if(enemy[i].line==2&&enemy[i].x<myGameArea.canvas.width*3/4+60)
            {
               if (myGameArea.frameNo == 1 ||
                 everyinterval(Math.floor((Math.random() * 100) + 50)))
               {
                 if(myGamePiece.y<enemy[i].y+30&&myGamePiece.y>enemy[i].y-30)
                 {
                   //Laser[l1]=new sound("laser.mp3"); Laser[l1].play(); l1++;
                   gameBullet[k]=new bullet(5,5,"blue",enemy[i].x-5,enemy[i].y+10,"enemy");
                   gameBullet[k].speedX=-5;
                   gameBullet[k].speedY=-0.25;
                   k=k+1;
                   gameBullet[k]=new bullet(5,5,"blue",enemy[i].x-5,enemy[i].y+10,"enemy");
                   gameBullet[k].speedX=-5;
                   gameBullet[k].speedY=0;
                   k=k+1;
                   gameBullet[k]=new bullet(5,5,"blue",enemy[i].x-5,enemy[i].y+10,"enemy");
                   gameBullet[k].speedX=-5;
                   gameBullet[k].speedY=0.25;
                   k=k+1;
                 }
               }
               if(everyinterval(50))
               {
                 if( enemy[i].c1==0)
                 {
                   enemy[i].speedX=0;
                   enemy[i].speedY=1;
                   enemy[i].c1=1;
                 }
                 else
                 if( enemy[i].c1==1)
                 {
                   enemy[i].speedX=0;
                   enemy[i].speedY=-1;
                   enemy[i].c1=0;
                 }
               }

             enemy[i].newPos();
             ok=1;
           }
           else
           if(enemy[i].line==3&&enemy[i].x<myGameArea.canvas.width*3/4+120)
           {
              if (myGameArea.frameNo == 1 ||
                everyinterval(Math.floor((Math.random() * 100) + 50)))
              {
                if(myGamePiece.y<enemy[i].y+30&&myGamePiece.y>enemy[i].y-30)
                {
                  //Laser[l1]=new sound("laser.mp3"); Laser[l1].play(); l1++;
                  gameBullet[k]=new bullet(5,5,"blue",enemy[i].x-5,enemy[i].y+10,"enemy");
                  gameBullet[k].speedX=-5;
                  gameBullet[k].speedY=-0.25;
                  k=k+1;
                  gameBullet[k]=new bullet(5,5,"blue",enemy[i].x-5,enemy[i].y+10,"enemy");
                  gameBullet[k].speedX=-5;
                  gameBullet[k].speedY=0;
                  k=k+1;
                  gameBullet[k]=new bullet(5,5,"blue",enemy[i].x-5,enemy[i].y+10,"enemy");
                  gameBullet[k].speedX=-5;
                  gameBullet[k].speedY=0.25;
                  k=k+1;
                }
              }
              if(everyinterval(50))
              {
                if( enemy[i].c1==0)
                {
                  enemy[i].speedX=0;
                  enemy[i].speedY=1;
                  enemy[i].c1=1;
                }
                else
                if( enemy[i].c1==1)
                {
                  enemy[i].speedX=0;
                  enemy[i].speedY=-1;
                  enemy[i].c1=0;
                }
              }

            enemy[i].newPos();
            ok=1;
          }
           else
             enemy[i].x+=-4;

           enemy[i].update();
         }
      }
    }
    else
    if(points>=50000&&points<75000){
      if(c==1)
     {
       p=i;
       for (i=0; i <p; i += 1)
          enemy[i].done=true;

       c=0; m=0; enemy=[]; gameBullet=[]; k=0; Laser=[]; myGameArea.keys=[];
     }
      myGameArea.frameNo += 1;
     if (myGameArea.frameNo == 1 || everyinterval(600))
     {
       if(ok==0)
       {
         if(health<100)
         health+=30;
         x = myGameArea.canvas.width;
         var b;
         for(b=1;b<=6;b++)
         {
            y = myGameArea.canvas.height*b/7-17;
            enemy[m]=new component(30, 30, "green", x, y,"enemy",1); m++;
         }
         x = myGameArea.canvas.width+60;
         for(b=1;b<=5;b++)
         {
            y = myGameArea.canvas.height*b/7+12;
            enemy[m]=new component(30, 30, "green", x, y,"enemy",2); m++;
         }
         x = myGameArea.canvas.width+120;
         for(b=1;b<=6;b++)
         {
            y = myGameArea.canvas.height*b/7-17;
          enemy[m]=new component(30, 30, "green", x, y,"enemy",3); m++;
         }


       }
     }

    for (i = 0; i <enemy.length; i += 1) {
       if(enemy[i]!=undefined&&enemy[i].done!=true)
          if(enemy[i].x>-70)
         {
             if(enemy[i].line==1&&enemy[i].x<myGameArea.canvas.width*3/4)
             {
                if (myGameArea.frameNo == 1 ||
                  everyinterval(Math.floor((Math.random() * 500) + 300)))
                {
                  //Laser[l1]=new sound("laser.mp3"); Laser[l1].play(); l1++;
                  gameBullet[k]=new bullet(5,5,"blue",enemy[i].x-5,enemy[i].y+10,"enemy");
                  var deltaX=enemy[i].x-5-myGamePiece.x;
                  var deltaY=enemy[i].y+10-myGamePiece.y;
                  var rad = Math.atan2(deltaY, deltaX);
                  gameBullet[k].speedX=-5*Math.cos(rad);
                  gameBullet[k].speedY=-5*Math.sin(rad);
                  k=k+1;
                }
                  if(everyinterval(75))
                  {
                    if( enemy[i].c1==0)
                    {
                      enemy[i].speedX=-0.5;
                      enemy[i].speedY=0.5;
                      enemy[i].c1=1;
                    }
                    else
                    if( enemy[i].c1==1)
                    {
                      enemy[i].speedX=-0.5;
                      enemy[i].speedY=-0.5;
                      enemy[i].c1=2;
                    }
                    else
                    if( enemy[i].c1==2)
                    {
                           enemy[i].speedX=0.5;
                           enemy[i].speedY=-0.5;

                        enemy[i].c1=3;
                    }
                      else
                    if( enemy[i].c1==3)
                    {
                      enemy[i].speedX=0.5;
                      enemy[i].speedY=0.5;
                      enemy[i].c1=0;
                    }
                  }


              enemy[i].newPos();
              ok=1;
            }
            else
            if(enemy[i].line==2&&enemy[i].x<myGameArea.canvas.width*3/4+60)
            {
               if (myGameArea.frameNo == 1 ||
                 everyinterval(Math.floor((Math.random() * 500) + 300)))
               {
                 //Laser[l1]=new sound("laser.mp3"); Laser[l1].play(); l1++;
                 gameBullet[k]=new bullet(5,5,"blue",enemy[i].x-5,enemy[i].y+10,"enemy");
                 var deltaX=enemy[i].x-5-myGamePiece.x;
                 var deltaY=enemy[i].y+10-myGamePiece.y;
                 var rad = Math.atan2(deltaY, deltaX);
                 gameBullet[k].speedX=-5*Math.cos(rad);
                 gameBullet[k].speedY=-5*Math.sin(rad);
                 k=k+1;
               }
                 if(everyinterval(75))
                 {
                   if( enemy[i].c1==0)
                   {
                     enemy[i].speedX=-0.5;
                     enemy[i].speedY=0.5;
                     enemy[i].c1=1;
                   }
                   else
                   if( enemy[i].c1==1)
                   {
                     enemy[i].speedX=-0.5;
                     enemy[i].speedY=-0.5;
                     enemy[i].c1=2;
                   }
                   else
                   if( enemy[i].c1==2)
                   {
                          enemy[i].speedX=0.5;
                          enemy[i].speedY=-0.5;

                       enemy[i].c1=3;
                   }
                     else
                   if( enemy[i].c1==3)
                   {
                     enemy[i].speedX=0.5;
                     enemy[i].speedY=0.5;
                     enemy[i].c1=0;
                   }
                 }


             enemy[i].newPos();
             ok=1;
           }
           else
           if(enemy[i].line==3&&enemy[i].x<myGameArea.canvas.width*3/4+120)
           {
              if (myGameArea.frameNo == 1 ||
                everyinterval(Math.floor((Math.random() * 500) + 300)))
              {
                //Laser[l1]=new sound("laser.mp3"); Laser[l1].play(); l1++;
                gameBullet[k]=new bullet(5,5,"blue",enemy[i].x-5,enemy[i].y+10,"enemy");
                var deltaX=enemy[i].x-5-myGamePiece.x;
                var deltaY=enemy[i].y+10-myGamePiece.y;
                var rad = Math.atan2(deltaY, deltaX);
                gameBullet[k].speedX=-5*Math.cos(rad);
                gameBullet[k].speedY=-5*Math.sin(rad);
                k=k+1;
              }
                if(everyinterval(75))
                {
                  if( enemy[i].c1==0)
                  {
                    enemy[i].speedX=-0.5;
                    enemy[i].speedY=0.5;
                    enemy[i].c1=1;
                  }
                  else
                  if( enemy[i].c1==1)
                  {
                    enemy[i].speedX=-0.5;
                    enemy[i].speedY=-0.5;
                    enemy[i].c1=2;
                  }
                  else
                  if( enemy[i].c1==2)
                  {
                         enemy[i].speedX=0.5;
                         enemy[i].speedY=-0.5;

                      enemy[i].c1=3;
                  }
                    else
                  if( enemy[i].c1==3)
                  {
                    enemy[i].speedX=0.5;
                    enemy[i].speedY=0.5;
                    enemy[i].c1=0;
                  }
                }


            enemy[i].newPos();
            ok=1;
          }
           else
             enemy[i].x+=-4;
           enemy[i].update();
         }

      }

    }
    else
    if(points>=75000&&points<100000){
      if(c==0)
     {
       p=i;
       for (i=0; i <p; i += 1)
          enemy[i].done=true;
       c=1; m=0; enemy=[]; gameBullet=[]; k=0; Laser=[]; myGameArea.keys=[];
     }
    myGameArea.frameNo += 1;
     if (myGameArea.frameNo == 1 || everyinterval(600))
     {
       if(ok==0)
       {
         if(health<100)
         health+=40;
         x = myGameArea.canvas.width;
         var b;
         for(b=1;b<=6;b++)
         {
            y = myGameArea.canvas.height*b/7-17;
            enemy[m]=new component(30, 30, "green", x, y,"enemy",1); m++;
         }
         x = myGameArea.canvas.width+60;
         for(b=1;b<=5;b++)
         {
            y = myGameArea.canvas.height*b/7+12;
            enemy[m]=new component(30, 30, "green", x, y,"enemy",2); m++;
         }
         x = myGameArea.canvas.width+120;
         for(b=1;b<=6;b++)
         {
            y = myGameArea.canvas.height*b/7-17;
          enemy[m]=new component(30, 30, "green", x, y,"enemy",3); m++;
         }


       }
     }

    for (i = 0; i <enemy.length; i += 1) {
       if(enemy[i]!=undefined&&enemy[i].done!=true)
          if(enemy[i].x>-70)
         {
             if(enemy[i].line==1&&enemy[i].x<myGameArea.canvas.width*3/4)
             {
                if (myGameArea.frameNo == 1 ||
                  everyinterval(Math.floor((Math.random() * 800) + 300)))
                {
                  //Laser[l1]=new sound("laser.mp3"); Laser[l1].play(); l1++;
                  gameBullet[k]=new bullet(5,5,"blue",enemy[i].x-5,enemy[i].y+10,"enemy");
                  var deltaX=enemy[i].x-5-myGamePiece.x;
                  var deltaY=enemy[i].y+10-myGamePiece.y;
                  var rad = Math.atan2(deltaY, deltaX);
                  gameBullet[k].speedX=-5*Math.cos(rad);
                  gameBullet[k].speedY=-5*Math.sin(rad)-0.25;
                  k=k+1;
                  gameBullet[k]=new bullet(5,5,"blue",enemy[i].x-5,enemy[i].y+10,"enemy");
                  var deltaX=enemy[i].x-5-myGamePiece.x;
                  var deltaY=enemy[i].y+10-myGamePiece.y;
                  var rad = Math.atan2(deltaY, deltaX);
                  gameBullet[k].speedX=-5*Math.cos(rad);
                  gameBullet[k].speedY=-5*Math.sin(rad);
                  k=k+1;
                  gameBullet[k]=new bullet(5,5,"blue",enemy[i].x-5,enemy[i].y+10,"enemy");
                  var deltaX=enemy[i].x-5-myGamePiece.x;
                  var deltaY=enemy[i].y+10-myGamePiece.y;
                  var rad = Math.atan2(deltaY, deltaX);
                  gameBullet[k].speedX=-5*Math.cos(rad);
                  gameBullet[k].speedY=-5*Math.sin(rad)+0.25;
                  k=k+1;

                }
                if(everyinterval(45))
                {
                  if( enemy[i].c1==0)
                  {
                    enemy[i].speedX=0;
                    enemy[i].speedY=1;
                    enemy[i].c1=1;
                  }
                  else
                  if( enemy[i].c1==1)
                  {
                    enemy[i].speedX=0;
                    enemy[i].speedY=-1;
                    enemy[i].c1=0;
                  }
                }

              enemy[i].newPos();
              ok=1;
            }
            else
            if(enemy[i].line==2&&enemy[i].x<myGameArea.canvas.width*3/4+60)
            {
               if (myGameArea.frameNo == 1 ||
                 everyinterval(Math.floor((Math.random() * 800) + 300)))
               {
                 //Laser[l1]=new sound("laser.mp3"); Laser[l1].play(); l1++;
                 gameBullet[k]=new bullet(5,5,"blue",enemy[i].x-5,enemy[i].y+10,"enemy");
                 var deltaX=enemy[i].x-5-myGamePiece.x;
                 var deltaY=enemy[i].y+10-myGamePiece.y;
                 var rad = Math.atan2(deltaY, deltaX);
                 gameBullet[k].speedX=-5*Math.cos(rad);
                 gameBullet[k].speedY=-5*Math.sin(rad)-0.25;
                 k=k+1;
                 gameBullet[k]=new bullet(5,5,"blue",enemy[i].x-5,enemy[i].y+10,"enemy");
                 var deltaX=enemy[i].x-5-myGamePiece.x;
                 var deltaY=enemy[i].y+10-myGamePiece.y;
                 var rad = Math.atan2(deltaY, deltaX);
                 gameBullet[k].speedX=-5*Math.cos(rad);
                 gameBullet[k].speedY=-5*Math.sin(rad);
                 k=k+1;
                 gameBullet[k]=new bullet(5,5,"blue",enemy[i].x-5,enemy[i].y+10,"enemy");
                 var deltaX=enemy[i].x-5-myGamePiece.x;
                 var deltaY=enemy[i].y+10-myGamePiece.y;
                 var rad = Math.atan2(deltaY, deltaX);
                 gameBullet[k].speedX=-5*Math.cos(rad);
                 gameBullet[k].speedY=-5*Math.sin(rad)+0.25;
                 k=k+1;

               }
               if(everyinterval(45))
               {
                 if( enemy[i].c1==0)
                 {
                   enemy[i].speedX=0;
                   enemy[i].speedY=1;
                   enemy[i].c1=1;
                 }
                 else
                 if( enemy[i].c1==1)
                 {
                   enemy[i].speedX=0;
                   enemy[i].speedY=-1;
                   enemy[i].c1=0;
                 }
               }

             enemy[i].newPos();
             ok=1;
           }
           else
           if(enemy[i].line==3&&enemy[i].x<myGameArea.canvas.width*3/4+120)
           {
              if (myGameArea.frameNo == 1 ||
                everyinterval(Math.floor((Math.random() * 800) + 300)))
              {
                //Laser[l1]=new sound("laser.mp3"); Laser[l1].play(); l1++;
                gameBullet[k]=new bullet(5,5,"blue",enemy[i].x-5,enemy[i].y+10,"enemy");
                var deltaX=enemy[i].x-5-myGamePiece.x;
                var deltaY=enemy[i].y+10-myGamePiece.y;
                var rad = Math.atan2(deltaY, deltaX);
                gameBullet[k].speedX=-5*Math.cos(rad);
                gameBullet[k].speedY=-5*Math.sin(rad)-0.25;
                k=k+1;
                gameBullet[k]=new bullet(5,5,"blue",enemy[i].x-5,enemy[i].y+10,"enemy");
                var deltaX=enemy[i].x-5-myGamePiece.x;
                var deltaY=enemy[i].y+10-myGamePiece.y;
                var rad = Math.atan2(deltaY, deltaX);
                gameBullet[k].speedX=-5*Math.cos(rad);
                gameBullet[k].speedY=-5*Math.sin(rad);
                k=k+1;
                gameBullet[k]=new bullet(5,5,"blue",enemy[i].x-5,enemy[i].y+10,"enemy");
                var deltaX=enemy[i].x-5-myGamePiece.x;
                var deltaY=enemy[i].y+10-myGamePiece.y;
                var rad = Math.atan2(deltaY, deltaX);
                gameBullet[k].speedX=-5*Math.cos(rad);
                gameBullet[k].speedY=-5*Math.sin(rad)+0.25;
                k=k+1;

              }
              if(everyinterval(45))
              {
                if( enemy[i].c1==0)
                {
                  enemy[i].speedX=0;
                  enemy[i].speedY=1;
                  enemy[i].c1=1;
                }
                else
                if( enemy[i].c1==1)
                {
                  enemy[i].speedX=0;
                  enemy[i].speedY=-1;
                  enemy[i].c1=0;
                }
              }

            enemy[i].newPos();
            ok=1;
          }
           else
             enemy[i].x+=-4;

           enemy[i].update();
         }
      }
    }
    else
    if(points>=100000&&points<125000){
      if(c==1)
     {
       p=i;
       for (i=0; i <p; i += 1)
          enemy[i].done=true;
       c=0; m=0; enemy=[]; gameBullet=[]; k=0; Laser=[]; myGameArea.keys=[];
     }
    myGameArea.frameNo += 1;
     if (myGameArea.frameNo == 1 || everyinterval(600))
     {
       if(ok==0)
       {
         if(health<100)
         health+=40;
         x = myGameArea.canvas.width;
         var b;
         for(b=1;b<=6;b++)
         {
            y = myGameArea.canvas.height*b/7-17;
            enemy[m]=new component(30, 30, "green", x, y,"enemy",1); m++;
         }
         x = myGameArea.canvas.width+60;
         for(b=1;b<=5;b++)
         {
            y = myGameArea.canvas.height*b/7+12;
            enemy[m]=new component(30, 30, "green", x, y,"enemy",2); m++;
         }
         x = myGameArea.canvas.width+120;
         for(b=1;b<=6;b++)
         {
            y = myGameArea.canvas.height*b/7-17;
          enemy[m]=new component(30, 30, "green", x, y,"enemy",3); m++;
         }


       }
     }

    for (i = 0; i <enemy.length; i += 1) {
       if(enemy[i]!=undefined&&enemy[i].done!=true)
          if(enemy[i].x>-70)
         {
             if(enemy[i].line==1&&enemy[i].x<myGameArea.canvas.width*3/4)
             {
                if (myGameArea.frameNo == 1 ||
                  everyinterval(Math.floor((Math.random() * 800) + 300)))
                {
                  //Laser[l1]=new sound("laser.mp3"); Laser[l1].play(); l1++;
                  gameBullet[k]=new bullet(5,5,"blue",enemy[i].x-5,enemy[i].y+10,"enemy");
                  var deltaX=enemy[i].x-5-myGamePiece.x;
                  var deltaY=enemy[i].y+10-myGamePiece.y;
                  var rad = Math.atan2(deltaY, deltaX);
                  gameBullet[k].speedX=-5*Math.cos(rad);
                  gameBullet[k].speedY=-5*Math.sin(rad)-0.25;
                  k=k+1;
                  gameBullet[k]=new bullet(5,5,"blue",enemy[i].x-5,enemy[i].y+10,"enemy");
                  var deltaX=enemy[i].x-5-myGamePiece.x;
                  var deltaY=enemy[i].y+10-myGamePiece.y;
                  var rad = Math.atan2(deltaY, deltaX);
                  gameBullet[k].speedX=-5*Math.cos(rad);
                  gameBullet[k].speedY=-5*Math.sin(rad);
                  k=k+1;
                  gameBullet[k]=new bullet(5,5,"blue",enemy[i].x-5,enemy[i].y+10,"enemy");
                  var deltaX=enemy[i].x-5-myGamePiece.x;
                  var deltaY=enemy[i].y+10-myGamePiece.y;
                  var rad = Math.atan2(deltaY, deltaX);
                  gameBullet[k].speedX=-5*Math.cos(rad);
                  gameBullet[k].speedY=-5*Math.sin(rad)+0.25;
                  k=k+1;
                }
                if(everyinterval(75))
                {
                  if( enemy[i].c1==0)
                  {
                    enemy[i].speedX=-0.5;
                    enemy[i].speedY=0.5;
                    enemy[i].c1=1;
                  }
                  else
                  if( enemy[i].c1==1)
                  {
                    enemy[i].speedX=-0.5;
                    enemy[i].speedY=-0.5;
                    enemy[i].c1=2;
                  }
                  else
                  if( enemy[i].c1==2)
                  {
                         enemy[i].speedX=0.5;
                         enemy[i].speedY=-0.5;

                      enemy[i].c1=3;
                  }
                    else
                  if( enemy[i].c1==3)
                  {
                    enemy[i].speedX=0.5;
                    enemy[i].speedY=0.5;
                    enemy[i].c1=0;
                  }
                }

              enemy[i].newPos();
              ok=1;
            }
            else
            if(enemy[i].line==2&&enemy[i].x<myGameArea.canvas.width*3/4+60)
            {
               if (myGameArea.frameNo == 1 ||
                 everyinterval(Math.floor((Math.random() * 800) + 300)))
               {
                 //Laser[l1]=new sound("laser.mp3"); Laser[l1].play(); l1++;
                 gameBullet[k]=new bullet(5,5,"blue",enemy[i].x-5,enemy[i].y+10,"enemy");
                 var deltaX=enemy[i].x-5-myGamePiece.x;
                 var deltaY=enemy[i].y+10-myGamePiece.y;
                 var rad = Math.atan2(deltaY, deltaX);
                 gameBullet[k].speedX=-5*Math.cos(rad);
                 gameBullet[k].speedY=-5*Math.sin(rad)-0.25;
                 k=k+1;
                 gameBullet[k]=new bullet(5,5,"blue",enemy[i].x-5,enemy[i].y+10,"enemy");
                 var deltaX=enemy[i].x-5-myGamePiece.x;
                 var deltaY=enemy[i].y+10-myGamePiece.y;
                 var rad = Math.atan2(deltaY, deltaX);
                 gameBullet[k].speedX=-5*Math.cos(rad);
                 gameBullet[k].speedY=-5*Math.sin(rad);
                 k=k+1;
                 gameBullet[k]=new bullet(5,5,"blue",enemy[i].x-5,enemy[i].y+10,"enemy");
                 var deltaX=enemy[i].x-5-myGamePiece.x;
                 var deltaY=enemy[i].y+10-myGamePiece.y;
                 var rad = Math.atan2(deltaY, deltaX);
                 gameBullet[k].speedX=-5*Math.cos(rad);
                 gameBullet[k].speedY=-5*Math.sin(rad)+0.25;
                 k=k+1;
               }
               if(everyinterval(75))
               {
                 if( enemy[i].c1==0)
                 {
                   enemy[i].speedX=-0.5;
                   enemy[i].speedY=0.5;
                   enemy[i].c1=1;
                 }
                 else
                 if( enemy[i].c1==1)
                 {
                   enemy[i].speedX=-0.5;
                   enemy[i].speedY=-0.5;
                   enemy[i].c1=2;
                 }
                 else
                 if( enemy[i].c1==2)
                 {
                        enemy[i].speedX=0.5;
                        enemy[i].speedY=-0.5;

                     enemy[i].c1=3;
                 }
                   else
                 if( enemy[i].c1==3)
                 {
                   enemy[i].speedX=0.5;
                   enemy[i].speedY=0.5;
                   enemy[i].c1=0;
                 }
               }

             enemy[i].newPos();
             ok=1;
           }
           else
           if(enemy[i].line==3&&enemy[i].x<myGameArea.canvas.width*3/4+120)
           {
              if (myGameArea.frameNo == 1 ||
                everyinterval(Math.floor((Math.random() * 800) + 300)))
              {
                //Laser[l1]=new sound("laser.mp3"); Laser[l1].play(); l1++;
                gameBullet[k]=new bullet(5,5,"blue",enemy[i].x-5,enemy[i].y+10,"enemy");
                var deltaX=enemy[i].x-5-myGamePiece.x;
                var deltaY=enemy[i].y+10-myGamePiece.y;
                var rad = Math.atan2(deltaY, deltaX);
                gameBullet[k].speedX=-5*Math.cos(rad);
                gameBullet[k].speedY=-5*Math.sin(rad)-0.25;
                k=k+1;
                gameBullet[k]=new bullet(5,5,"blue",enemy[i].x-5,enemy[i].y+10,"enemy");
                var deltaX=enemy[i].x-5-myGamePiece.x;
                var deltaY=enemy[i].y+10-myGamePiece.y;
                var rad = Math.atan2(deltaY, deltaX);
                gameBullet[k].speedX=-5*Math.cos(rad);
                gameBullet[k].speedY=-5*Math.sin(rad);
                k=k+1;
                gameBullet[k]=new bullet(5,5,"blue",enemy[i].x-5,enemy[i].y+10,"enemy");
                var deltaX=enemy[i].x-5-myGamePiece.x;
                var deltaY=enemy[i].y+10-myGamePiece.y;
                var rad = Math.atan2(deltaY, deltaX);
                gameBullet[k].speedX=-5*Math.cos(rad);
                gameBullet[k].speedY=-5*Math.sin(rad)+0.25;
                k=k+1;
              }
              if(everyinterval(75))
              {
                if( enemy[i].c1==0)
                {
                  enemy[i].speedX=-0.5;
                  enemy[i].speedY=0.5;
                  enemy[i].c1=1;
                }
                else
                if( enemy[i].c1==1)
                {
                  enemy[i].speedX=-0.5;
                  enemy[i].speedY=-0.5;
                  enemy[i].c1=2;
                }
                else
                if( enemy[i].c1==2)
                {
                       enemy[i].speedX=0.5;
                       enemy[i].speedY=-0.5;

                    enemy[i].c1=3;
                }
                  else
                if( enemy[i].c1==3)
                {
                  enemy[i].speedX=0.5;
                  enemy[i].speedY=0.5;
                  enemy[i].c1=0;
                }
              }

            enemy[i].newPos();
            ok=1;
          }
           else
             enemy[i].x+=-4;

           enemy[i].update();
         }
      }

    }
    else
    if(points>=125000&&points<150000){
      if(c==0)
     {
       p=i;
       for (i=0; i <p; i += 1)
          enemy[i].done=true;
       c=1; m=0; enemy=[]; gameBullet=[]; k=0; Laser=[]; myGameArea.keys=[];
     }
    myGameArea.frameNo += 1;
     if (myGameArea.frameNo == 1 || everyinterval(600))
     {
       if(ok==0)
       {
         if(health<100)
         health+=40;
         x = myGameArea.canvas.width;
         var b;
         for(b=1;b<=6;b++)
         {
            y = myGameArea.canvas.height*b/7-17;
            enemy[m]=new component(30, 30, "green", x, y,"enemy",1); m++;
         }
         x = myGameArea.canvas.width+60;
         for(b=1;b<=5;b++)
         {
            y = myGameArea.canvas.height*b/7+12;
            enemy[m]=new component(30, 30, "green", x, y,"enemy",2); m++;
         }
         x = myGameArea.canvas.width+120;
         for(b=1;b<=6;b++)
         {
            y = myGameArea.canvas.height*b/7-17;
          enemy[m]=new component(30, 30, "green", x, y,"enemy",3); m++;
         }


       }
     }

    for (i = 0; i <enemy.length; i += 1) {
       if(enemy[i]!=undefined&&enemy[i].done!=true)
          if(enemy[i].x>-70)
         {
            if(enemy[i].line==1&&enemy[i].x<myGameArea.canvas.width*3/4)
             {
                if (myGameArea.frameNo == 1 ||
                  everyinterval(Math.floor((Math.random() * 1500) + 400)))
                {
                  //Laser[l1]=new sound("laser.mp3"); Laser[l1].play(); l1++;
                  gameBullet[k]=new bullet(10,10,"blue",enemy[i].x-5,enemy[i].y+10,"enemy");
                  gameBullet[k].speedX=-2;
                  gameBullet[k].speedY=0;
                    gameBullet[k].z=1;
                  k=k+1;

                }

                if(everyinterval(45))
                {
                  if( enemy[i].c1==0)
                  {
                    enemy[i].speedX=0;
                    enemy[i].speedY=1;
                    enemy[i].c1=1;
                  }
                  else
                  if( enemy[i].c1==1)
                  {
                    enemy[i].speedX=0;
                    enemy[i].speedY=-1;
                    enemy[i].c1=0;
                  }
                }

              enemy[i].newPos();
              ok=1;
            }
            else
            if(enemy[i].line==2&&enemy[i].x<myGameArea.canvas.width*3/4+60)
            {
               if (myGameArea.frameNo == 1 ||
                 everyinterval(Math.floor((Math.random() * 1500) + 400)))
               {
                 //Laser[l1]=new sound("laser.mp3"); Laser[l1].play(); l1++;
                 gameBullet[k]=new bullet(10,10,"blue",enemy[i].x-5,enemy[i].y+10,"enemy");
                 gameBullet[k].speedX=-2;
                 gameBullet[k].speedY=0;
                   gameBullet[k].z=1;
                 k=k+1;

               }

               if(everyinterval(45))
               {
                 if( enemy[i].c1==0)
                 {
                   enemy[i].speedX=0;
                   enemy[i].speedY=1;
                   enemy[i].c1=1;
                 }
                 else
                 if( enemy[i].c1==1)
                 {
                   enemy[i].speedX=0;
                   enemy[i].speedY=-1;
                   enemy[i].c1=0;
                 }
               }

             enemy[i].newPos();
             ok=1;
           }
           else
           if(enemy[i].line==3&&enemy[i].x<myGameArea.canvas.width*3/4+120)
           {
              if (myGameArea.frameNo == 1 ||
                everyinterval(Math.floor((Math.random() * 1500) + 400)))
              {
                //Laser[l1]=new sound("laser.mp3"); Laser[l1].play(); l1++;
                gameBullet[k]=new bullet(10,10,"blue",enemy[i].x-5,enemy[i].y+10,"enemy");
                gameBullet[k].speedX=-2;
                gameBullet[k].speedY=0;
                  gameBullet[k].z=1;
                k=k+1;

              }

              if(everyinterval(45))
              {
                if( enemy[i].c1==0)
                {
                  enemy[i].speedX=0;
                  enemy[i].speedY=1;
                  enemy[i].c1=1;
                }
                else
                if( enemy[i].c1==1)
                {
                  enemy[i].speedX=0;
                  enemy[i].speedY=-1;
                  enemy[i].c1=0;
                }
              }

            enemy[i].newPos();
            ok=1;
          }
           else
             enemy[i].x+=-4;

           enemy[i].update();
         }
      }
    }
    else
    if(points>=150000&&points<175000){
      if(c==1)
      {
       p=i;
       for (i=0; i <p; i += 1)
          enemy[i].done=true;
       c=0; m=0; enemy=[]; gameBullet=[]; k=0; Laser=[]; myGameArea.keys=[];
      }
      myGameArea.frameNo += 1;
      if (myGameArea.frameNo == 1 || everyinterval(600))
      {
       if(ok==0)
       {
         if(health<100)
         health+=40;
         x = myGameArea.canvas.width;
         var b;
         for(b=1;b<=6;b++)
         {
            y = myGameArea.canvas.height*b/7-17;
            enemy[m]=new component(30, 30, "green", x, y,"enemy",1); m++;
         }
         x = myGameArea.canvas.width+60;
         for(b=1;b<=5;b++)
         {
            y = myGameArea.canvas.height*b/7+12;
            enemy[m]=new component(30, 30, "green", x, y,"enemy",2); m++;
         }
         x = myGameArea.canvas.width+120;
         for(b=1;b<=6;b++)
         {
            y = myGameArea.canvas.height*b/7-17;
          enemy[m]=new component(30, 30, "green", x, y,"enemy",3); m++;
         }

       }
      }

      for (i = 0; i <enemy.length; i += 1) {
       if(enemy[i]!=undefined&&enemy[i].done!=true)
          if(enemy[i].x>-70)
         {
             if(enemy[i].line==1&&enemy[i].x<myGameArea.canvas.width*3/4)
             {
                if (myGameArea.frameNo == 1 ||
                  everyinterval(Math.floor((Math.random() * 1500) + 400)))
                {
                  //Laser[l1]=new sound("laser.mp3"); Laser[l1].play(); l1++;
                  gameBullet[k]=new bullet(10,10,"blue",enemy[i].x-5,enemy[i].y+10,"enemy");
                  gameBullet[k].speedX=-2;
                  gameBullet[k].speedY=0;
                    gameBullet[k].z=2;
                  k=k+1;

                }

                if(everyinterval(45))
                {
                  if( enemy[i].c1==0)
                  {
                    enemy[i].speedX=0;
                    enemy[i].speedY=1;
                    enemy[i].c1=1;
                  }
                  else
                  if( enemy[i].c1==1)
                  {
                    enemy[i].speedX=0;
                    enemy[i].speedY=-1;
                    enemy[i].c1=0;
                  }
                }

              enemy[i].newPos();
              ok=1;
            }
            else
            if(enemy[i].line==2&&enemy[i].x<myGameArea.canvas.width*3/4+60)
            {
               if (myGameArea.frameNo == 1 ||
                 everyinterval(Math.floor((Math.random() * 1500) + 400)))
               {
                 //Laser[l1]=new sound("laser.mp3"); Laser[l1].play(); l1++;
                 gameBullet[k]=new bullet(10,10,"blue",enemy[i].x-5,enemy[i].y+10,"enemy");
                 gameBullet[k].speedX=-2;
                 gameBullet[k].speedY=0;
                   gameBullet[k].z=2;
                 k=k+1;

               }

               if(everyinterval(45))
               {
                 if( enemy[i].c1==0)
                 {
                   enemy[i].speedX=0;
                   enemy[i].speedY=1;
                   enemy[i].c1=1;
                 }
                 else
                 if( enemy[i].c1==1)
                 {
                   enemy[i].speedX=0;
                   enemy[i].speedY=-1;
                   enemy[i].c1=0;
                 }
               }

             enemy[i].newPos();
             ok=1;
           }
           else
           if(enemy[i].line==3&&enemy[i].x<myGameArea.canvas.width*3/4+120)
           {
              if (myGameArea.frameNo == 1 ||
                everyinterval(Math.floor((Math.random() * 1500) + 400)))
              {
                //Laser[l1]=new sound("laser.mp3"); Laser[l1].play(); l1++;
                gameBullet[k]=new bullet(10,10,"blue",enemy[i].x-5,enemy[i].y+10,"enemy");
                gameBullet[k].speedX=-2;
                gameBullet[k].speedY=0;
                  gameBullet[k].z=2;
                k=k+1;

              }

              if(everyinterval(45))
              {
                if( enemy[i].c1==0)
                {
                  enemy[i].speedX=0;
                  enemy[i].speedY=1;
                  enemy[i].c1=1;
                }
                else
                if( enemy[i].c1==1)
                {
                  enemy[i].speedX=0;
                  enemy[i].speedY=-1;
                  enemy[i].c1=0;
                }
              }

            enemy[i].newPos();
            ok=1;
          }
           else
             enemy[i].x+=-4;

           enemy[i].update();
         }
      }
    }
    else
    if(points>=175000&&points<200000){
      if(c==0)
      {
       p=i;
       for (i=0; i <p; i += 1)
          enemy[i].done=true;
       c=1; m=0; enemy=[]; gameBullet=[]; k=0; Laser=[]; myGameArea.keys=[];
      }
      myGameArea.frameNo += 1;
      if (myGameArea.frameNo == 1 || everyinterval(600))
      {
       if(ok==0)
       {
         if(health<100)
         health+=50;
         x = myGameArea.canvas.width;
         var b;
         for(b=1;b<=6;b++)
         {
            y = myGameArea.canvas.height*b/7-17;
            enemy[m]=new component(30, 30, "green", x, y,"enemy",1); m++;
         }
         x = myGameArea.canvas.width+60;
         for(b=1;b<=5;b++)
         {
            y = myGameArea.canvas.height*b/7+12;
            enemy[m]=new component(30, 30, "green", x, y,"enemy",2); m++;
         }
         x = myGameArea.canvas.width+120;
         for(b=1;b<=6;b++)
         {
            y = myGameArea.canvas.height*b/7-17;
          enemy[m]=new component(30, 30, "green", x, y,"enemy",3); m++;
         }


       }
      }

      for (i = 0; i <enemy.length; i += 1) {
       if(enemy[i]!=undefined&&enemy[i].done!=true)
          if(enemy[i].x>-70)
         {
             if(enemy[i].line==1&&enemy[i].x<myGameArea.canvas.width*3/4)
             {
                if (myGameArea.frameNo == 1 ||
                  everyinterval(Math.floor((Math.random() * 1500) + 400)))
                {
                  //Laser[l1]=new sound("laser.mp3"); Laser[l1].play(); l1++;
                  gameBullet[k]=new bullet(10,10,"blue",enemy[i].x-5,enemy[i].y+10,"enemy");
                  var deltaX=enemy[i].x-5-myGamePiece.x;
                  var deltaY=enemy[i].y+10-myGamePiece.y;
                  var rad = Math.atan2(deltaY, deltaX);
                  gameBullet[k].speedX=-2*Math.cos(rad);
                  gameBullet[k].speedY=-2*Math.sin(rad);
                  gameBullet[k].z=1;
                  k=k+1;



                }

                if(everyinterval(45))
                {
                  if( enemy[i].c1==0)
                  {
                    enemy[i].speedX=0;
                    enemy[i].speedY=1;
                    enemy[i].c1=1;
                  }
                  else
                  if( enemy[i].c1==1)
                  {
                    enemy[i].speedX=0;
                    enemy[i].speedY=-1;
                    enemy[i].c1=0;
                  }
                }

              enemy[i].newPos();
              ok=1;
            }
           else
           if(enemy[i].line==2&&enemy[i].x<myGameArea.canvas.width*3/4+60)
           {
              if (myGameArea.frameNo == 1 ||
                everyinterval(Math.floor((Math.random() * 1500) + 400)))
              {
                //Laser[l1]=new sound("laser.mp3"); Laser[l1].play(); l1++;
                gameBullet[k]=new bullet(10,10,"blue",enemy[i].x-5,enemy[i].y+10,"enemy");
                var deltaX=enemy[i].x-5-myGamePiece.x;
                var deltaY=enemy[i].y+10-myGamePiece.y;
                var rad = Math.atan2(deltaY, deltaX);
                gameBullet[k].speedX=-2*Math.cos(rad);
                gameBullet[k].speedY=-2*Math.sin(rad);
                gameBullet[k].z=1;
                k=k+1;



              }

              if(everyinterval(45))
              {
                if( enemy[i].c1==0)
                {
                  enemy[i].speedX=0;
                  enemy[i].speedY=1;
                  enemy[i].c1=1;
                }
                else
                if( enemy[i].c1==1)
                {
                  enemy[i].speedX=0;
                  enemy[i].speedY=-1;
                  enemy[i].c1=0;
                }
              }

            enemy[i].newPos();
            ok=1;
          }
         else
         if(enemy[i].line==3&&enemy[i].x<myGameArea.canvas.width*3/4+120)
         {
            if (myGameArea.frameNo == 1 ||
              everyinterval(Math.floor((Math.random() * 1500) + 400)))
            {
              //Laser[l1]=new sound("laser.mp3"); Laser[l1].play(); l1++;
              gameBullet[k]=new bullet(10,10,"blue",enemy[i].x-5,enemy[i].y+10,"enemy");
              var deltaX=enemy[i].x-5-myGamePiece.x;
              var deltaY=enemy[i].y+10-myGamePiece.y;
              var rad = Math.atan2(deltaY, deltaX);
              gameBullet[k].speedX=-2*Math.cos(rad);
              gameBullet[k].speedY=-2*Math.sin(rad);
              gameBullet[k].z=1;
              k=k+1;



            }

            if(everyinterval(45))
            {
              if( enemy[i].c1==0)
              {
                enemy[i].speedX=0;
                enemy[i].speedY=1;
                enemy[i].c1=1;
              }
              else
              if( enemy[i].c1==1)
              {
                enemy[i].speedX=0;
                enemy[i].speedY=-1;
                enemy[i].c1=0;
              }
            }

          enemy[i].newPos();
          ok=1;
        }
       else
        enemy[i].x+=-4;

           enemy[i].update();
         }
      }
    }
    else
    if(points>=200000&&points<250000){
      if(c==1)
      {
       p=i;
       for (i=0; i <p; i += 1)
          enemy[i].done=true;
       c=0; m=0; enemy=[]; gameBullet=[]; k=0; Laser=[]; myGameArea.keys=[];
      }
      myGameArea.frameNo += 1;
      if (myGameArea.frameNo == 1 || everyinterval(600))
      {
       if(ok==0)
       {
         if(health<100)
         health+=50;
         x = myGameArea.canvas.width;
         var b;
         for(b=1;b<=6;b++)
         {
            y = myGameArea.canvas.height*b/7-17;
            enemy[m]=new component(30, 30, "green", x, y,"enemy",1); m++;
         }
         x = myGameArea.canvas.width+60;
         for(b=1;b<=5;b++)
         {
            y = myGameArea.canvas.height*b/7+12;
            enemy[m]=new component(30, 30, "green", x, y,"enemy",2); m++;
         }
         x = myGameArea.canvas.width+120;
         for(b=1;b<=6;b++)
         {
            y = myGameArea.canvas.height*b/7-17;
          enemy[m]=new component(30, 30, "green", x, y,"enemy",3); m++;
         }


       }
      }

      for (i = 0; i <enemy.length; i += 1) {
       if(enemy[i]!=undefined&&enemy[i].done!=true)
          if(enemy[i].x>-70)
         {
             if(enemy[i].line==1&&enemy[i].x<myGameArea.canvas.width*3/4)
             {
                if (myGameArea.frameNo == 1 ||
                  everyinterval(Math.floor((Math.random() * 1500) + 400)))
                {
                  //Laser[l1]=new sound("laser.mp3"); Laser[l1].play(); l1++;
                  gameBullet[k]=new bullet(10,10,"blue",enemy[i].x-5,enemy[i].y+10,"enemy");
                  var deltaX=enemy[i].x-5-myGamePiece.x;
                  var deltaY=enemy[i].y+10-myGamePiece.y;
                  var rad = Math.atan2(deltaY, deltaX);
                  gameBullet[k].speedX=-2*Math.cos(rad);
                  gameBullet[k].speedY=-2*Math.sin(rad);
                  gameBullet[k].z=2;
                  k=k+1;



                }

                if(everyinterval(45))
                {
                  if( enemy[i].c1==0)
                  {
                    enemy[i].speedX=0;
                    enemy[i].speedY=1;
                    enemy[i].c1=1;
                  }
                  else
                  if( enemy[i].c1==1)
                  {
                    enemy[i].speedX=0;
                    enemy[i].speedY=-1;
                    enemy[i].c1=0;
                  }
                }

              enemy[i].newPos();
              ok=1;
            }
           else
           if(enemy[i].line==2&&enemy[i].x<myGameArea.canvas.width*3/4+60)
           {
              if (myGameArea.frameNo == 1 ||
                everyinterval(Math.floor((Math.random() * 1500) + 400)))
              {
                //Laser[l1]=new sound("laser.mp3"); Laser[l1].play(); l1++;
                gameBullet[k]=new bullet(10,10,"blue",enemy[i].x-5,enemy[i].y+10,"enemy");
                var deltaX=enemy[i].x-5-myGamePiece.x;
                var deltaY=enemy[i].y+10-myGamePiece.y;
                var rad = Math.atan2(deltaY, deltaX);
                gameBullet[k].speedX=-2*Math.cos(rad);
                gameBullet[k].speedY=-2*Math.sin(rad);
                gameBullet[k].z=2;
                k=k+1;



              }

              if(everyinterval(45))
              {
                if( enemy[i].c1==0)
                {
                  enemy[i].speedX=0;
                  enemy[i].speedY=1;
                  enemy[i].c1=1;
                }
                else
                if( enemy[i].c1==1)
                {
                  enemy[i].speedX=0;
                  enemy[i].speedY=-1;
                  enemy[i].c1=0;
                }
              }

            enemy[i].newPos();
            ok=1;
          }
         else
         if(enemy[i].line==3&&enemy[i].x<myGameArea.canvas.width*3/4+120)
         {
            if (myGameArea.frameNo == 1 ||
              everyinterval(Math.floor((Math.random() * 1500) + 400)))
            {
              //Laser[l1]=new sound("laser.mp3"); Laser[l1].play(); l1++;
              gameBullet[k]=new bullet(10,10,"blue",enemy[i].x-5,enemy[i].y+10,"enemy");
              var deltaX=enemy[i].x-5-myGamePiece.x;
              var deltaY=enemy[i].y+10-myGamePiece.y;
              var rad = Math.atan2(deltaY, deltaX);
              gameBullet[k].speedX=-2*Math.cos(rad);
              gameBullet[k].speedY=-2*Math.sin(rad);
              gameBullet[k].z=2;
              k=k+1;



            }

            if(everyinterval(45))
            {
              if( enemy[i].c1==0)
              {
                enemy[i].speedX=0;
                enemy[i].speedY=1;
                enemy[i].c1=1;
              }
              else
              if( enemy[i].c1==1)
              {
                enemy[i].speedX=0;
                enemy[i].speedY=-1;
                enemy[i].c1=0;
              }
            }

          enemy[i].newPos();
          ok=1;
        }
       else
          enemy[i].x+=-4;

           enemy[i].update();
         }
      }
    }
    else
    if(points>=250000){
      if(c==0)
      {
       p=i;
       for (i=0; i <p; i += 1)
          enemy[i].done=true;
       c=1; m=0; enemy=[]; gameBullet=[]; k=0; Laser=[]; myGameArea.keys=[];
      }
      myGameBoss.done=false;
      myBossHealth= new component("15px", "Consolas", "red", myGameBoss.x, myGameBoss.y, "text");
      myBossHealth.text="HEALTH: " + bosshealth;
      myGameArea.frameNo += 3;
      if(myGameBoss.x>-70){
        if(myGameBoss.x<myGameArea.canvas.width*3/4)
         {
           if(bosshealth<=10000&&bosshealth>9000){
            if(pheal==0)
            {
              if(health<100)
              health+=50;
              pheal=1;
            }
             if (myGameArea.frameNo == 1 ||
               everyinterval(Math.floor((Math.random() * 90) + 50)))
             {
               //Laser[l1]=new sound("laser.mp3"); Laser[l1].play(); l1++;
               gameBullet[k]=new bullet(10,10,"blue",myGameBoss.x+10,myGameBoss.y+70,"boss");
               var deltaX=myGameBoss.x+10-myGamePiece.x;
               var deltaY=myGameBoss.y+70-myGamePiece.y;
               var rad = Math.atan2(deltaY, deltaX);
               gameBullet[k].speedX=-6*Math.cos(rad);
               gameBullet[k].speedY=-6*Math.sin(rad);
               k=k+1;
             }

             myGameBoss.newPos();
           }
           else
           if(bosshealth<=9000&&bosshealth>8000){
             if(pheal==1)
             {
               if(health<100)
               health+=30;
               pheal=0;
             }
             if (myGameArea.frameNo == 1 ||
               everyinterval(Math.floor((Math.random() * 90) + 50)))
             {
               //Laser[l1]=new sound("laser.mp3"); Laser[l1].play(); l1++;
               gameBullet[k]=new bullet(10,10,"blue",myGameBoss.x+10,myGameBoss.y+70,"boss");
               var deltaX=myGameBoss.x+10-myGamePiece.x;
               var deltaY=myGameBoss.y+70-myGamePiece.y;
               var rad = Math.atan2(deltaY, deltaX);
               gameBullet[k].speedX=-6*Math.cos(rad);
               gameBullet[k].speedY=-6*Math.sin(rad);
               k=k+1;
             }
             if(everyinterval(70))
             {
               if( myGameBoss.c1==0)
               {
                 myGameBoss.speedX=0;
                 myGameBoss.speedY=5;
                 myGameBoss.c1=1;
               }
               else
               if( myGameBoss.c1==1)
               {
                myGameBoss.speedX=0;
                 myGameBoss.speedY=-5;
                 myGameBoss.c1=0;
               }
             }
              myGameBoss.newPos();
           }
           else
           if(bosshealth<=8000&&bosshealth>7000){
             if(pheal==0)
             {
               if(health<100)
               health+=50;
               pheal=1;
             }
             if (myGameArea.frameNo == 1 ||
               everyinterval(Math.floor((Math.random() * 150) + 100)))
             {
               //Laser[l1]=new sound("laser.mp3"); Laser[l1].play(); l1++;
               gameBullet[k]=new bullet(5,5,"blue",myGameBoss.x+10,myGameBoss.y+70,"boss");
               gameBullet[k].speedX=-6;
               gameBullet[k].speedY=-0.25;
               k=k+1;
               gameBullet[k]=new bullet(5,5,"blue",myGameBoss.x+10,myGameBoss.y+70,"boss");
               gameBullet[k].speedX=-6;
               gameBullet[k].speedY=0;
               k=k+1;
               gameBullet[k]=new bullet(5,5,"blue",myGameBoss.x+10,myGameBoss.y+70,"boss");
               gameBullet[k].speedX=-6;
               gameBullet[k].speedY=0.25;
               k=k+1;
             }
             if(everyinterval(70))
             {
               if( myGameBoss.c1==0)
               {
                 myGameBoss.speedX=0;
                 myGameBoss.speedY=5;
                 myGameBoss.c1=1;
               }
               else
               if( myGameBoss.c1==1)
               {
                myGameBoss.speedX=0;
                 myGameBoss.speedY=-5;
                 myGameBoss.c1=0;
               }
             }
              myGameBoss.newPos();
           }
           else
           if(bosshealth<=7000&&bosshealth>6000){
             if(pheal==1)
             {
               if(health<100)
               health+=50;
               pheal=0;
             }
             if(poz==0)
             {
               myGameBoss.x=  myGameArea.canvas.width*3/4;
               myGameBoss.y=myGameArea.canvas.height*2/6-30;
               poz=1;
             }


             if (myGameArea.frameNo == 1 ||
               everyinterval(Math.floor((Math.random() * 90) + 50)))
             {
               //Laser[l1]=new sound("laser.mp3"); Laser[l1].play(); l1++;
               gameBullet[k]=new bullet(10,10,"blue",myGameBoss.x+10,myGameBoss.y+70,"boss");
               var deltaX=myGameBoss.x+10-myGamePiece.x;
               var deltaY=myGameBoss.y+70-myGamePiece.y;
               var rad = Math.atan2(deltaY, deltaX);
               gameBullet[k].speedX=-6*Math.cos(rad);
               gameBullet[k].speedY=-6*Math.sin(rad);
               k=k+1;
             }

             if(everyinterval(75))
             {
               if( myGameBoss.c1==0)
               {
                 myGameBoss.speedX=-1.5;
                 myGameBoss.speedY=1.5;
                 myGameBoss.c1=1;
               }
               else
               if(myGameBoss.c1==1)
               {
                 myGameBoss.speedX=-1.5;
                 myGameBoss.speedY=-1.5;
                 myGameBoss.c1=2;
               }
               else
               if( myGameBoss.c1==2)
               {
                  myGameBoss.speedX=1.5;
                  myGameBoss.speedY=-1.5;
                  myGameBoss.c1=3;
               }
                 else
               if( myGameBoss.c1==3)
               {
                 myGameBoss.speedX=1.5;
                 myGameBoss.speedY=1.5;
                 myGameBoss.c1=0;
               }
             }
              myGameBoss.newPos();
           }
           else
           if(bosshealth<=6000&&bosshealth>5000){
             if(pheal==0)
             {
               if(health<100)
               health+=30;
               pheal=1;
             }
             if(poz==1)
             {
               myGameBoss.x=  myGameArea.canvas.width*3/4;
               myGameBoss.y=myGameArea.canvas.height*2/6-30;
               poz=0;
             }
             if (myGameArea.frameNo == 1 ||
               everyinterval(Math.floor((Math.random() * 150) + 100)))
             {
              //Laser[l1]=new sound("laser.mp3"); Laser[l1].play(); l1++;
               gameBullet[k]=new bullet(5,5,"blue",myGameBoss.x+10,myGameBoss.y+70,"boss");
               var deltaX=myGameBoss.x+10-myGamePiece.x;
               var deltaY=myGameBoss.y+70-myGamePiece.y;
               var rad = Math.atan2(deltaY, deltaX);
               gameBullet[k].speedX=-6*Math.cos(rad);
               gameBullet[k].speedY=-6*Math.sin(rad)-0.25;
               k=k+1;
               gameBullet[k]=new bullet(5,5,"blue",myGameBoss.x+10,myGameBoss.y+70,"boss");
               var deltaX=myGameBoss.x+10-myGamePiece.x;
               var deltaY=myGameBoss.y+70-myGamePiece.y;
               var rad = Math.atan2(deltaY, deltaX);
               gameBullet[k].speedX=-6*Math.cos(rad);
               gameBullet[k].speedY=-6*Math.sin(rad);
               k=k+1;
               gameBullet[k]=new bullet(5,5,"blue",myGameBoss.x+10,myGameBoss.y+70,"boss");
               var deltaX=myGameBoss.x+10-myGamePiece.x;
               var deltaY=myGameBoss.y+70-myGamePiece.y;
               var rad = Math.atan2(deltaY, deltaX);
               gameBullet[k].speedX=-6*Math.cos(rad);
               gameBullet[k].speedY=-6*Math.sin(rad)+0.25;
               k=k+1;

             }
             if(everyinterval(75))
             {
               if( myGameBoss.c1==0)
               {
                 myGameBoss.speedX=-1.5;
                 myGameBoss.speedY=1.5;
                 myGameBoss.c1=1;
               }
               else
               if(myGameBoss.c1==1)
               {
                 myGameBoss.speedX=-1.5;
                 myGameBoss.speedY=-1.5;
                 myGameBoss.c1=2;
               }
               else
               if( myGameBoss.c1==2)
               {
                  myGameBoss.speedX=1.5;
                  myGameBoss.speedY=-1.5;
                  myGameBoss.c1=3;
               }
                 else
               if( myGameBoss.c1==3)
               {
                 myGameBoss.speedX=1.5;
                 myGameBoss.speedY=1.5;
                 myGameBoss.c1=0;
               }
             }
              myGameBoss.newPos();

           }
           else
           if(bosshealth<=5000&&bosshealth>4000){
             if(pheal==1)
             {
               if(health<100)
               health+=30;
               pheal=0;
             }
             if(poz==0)
             {
               myGameBoss.x=  myGameArea.canvas.width*3/4;
               myGameBoss.y=myGameArea.canvas.height*2/6-30;
               poz=1;
             }
             if (myGameArea.frameNo == 1 ||
               everyinterval(Math.floor((Math.random() * 150) + 100)))
             {
               //Laser[l1]=new sound("laser.mp3"); Laser[l1].play(); l1++;
               gameBullet[k]=new bullet(10,10,"blue",myGameBoss.x+10,myGameBoss.y+70,"boss");
               gameBullet[k].speedX=-2;
               gameBullet[k].speedY=0;
                 gameBullet[k].z=1;
               k=k+1;

             }
             if(everyinterval(75))
             {
               if( myGameBoss.c1==0)
               {
                 myGameBoss.speedX=-1.5;
                 myGameBoss.speedY=1.5;
                 myGameBoss.c1=1;
               }
               else
               if(myGameBoss.c1==1)
               {
                 myGameBoss.speedX=-1.5;
                 myGameBoss.speedY=-1.5;
                 myGameBoss.c1=2;
               }
               else
               if( myGameBoss.c1==2)
               {
                  myGameBoss.speedX=1.5;
                  myGameBoss.speedY=-1.5;
                  myGameBoss.c1=3;
               }
                 else
               if( myGameBoss.c1==3)
               {
                 myGameBoss.speedX=1.5;
                 myGameBoss.speedY=1.5;
                 myGameBoss.c1=0;
               }
             }
              myGameBoss.newPos();
           }
           else
           if(bosshealth<=4000&&bosshealth>3000){
             if(pheal==0)
             {
               if(health<100)
               health+=30;
               pheal=1;
             }
             if(poz==1)
             {
               myGameBoss.x=  myGameArea.canvas.width*3/4;
               myGameBoss.y=myGameArea.canvas.height*2/6-30;
               poz=0;
             }
             if (myGameArea.frameNo == 1 ||
               everyinterval(Math.floor((Math.random() * 150) + 90)))
             {
               //Laser[l1]=new sound("laser.mp3"); Laser[l1].play(); l1++;
               gameBullet[k]=new bullet(10,10,"blue",myGameBoss.x+10,myGameBoss.y+70,"boss");
               gameBullet[k].speedX=-2;
               gameBullet[k].speedY=0;
                 gameBullet[k].z=2;
               k=k+1;

             }
             if(everyinterval(75))
             {
               if( myGameBoss.c1==0)
               {
                 myGameBoss.speedX=-1.5;
                 myGameBoss.speedY=1.5;
                 myGameBoss.c1=1;
               }
               else
               if(myGameBoss.c1==1)
               {
                 myGameBoss.speedX=-1.5;
                 myGameBoss.speedY=-1.5;
                 myGameBoss.c1=2;
               }
               else
               if( myGameBoss.c1==2)
               {
                  myGameBoss.speedX=1.5;
                  myGameBoss.speedY=-1.5;
                  myGameBoss.c1=3;
               }
                 else
               if( myGameBoss.c1==3)
               {
                 myGameBoss.speedX=1.5;
                 myGameBoss.speedY=1.5;
                 myGameBoss.c1=0;
               }
             }
              myGameBoss.newPos();
           }
           else
           if(bosshealth<=3000&&bosshealth>2000){
             if(pheal==1)
             {
               if(health<100)
               health+=30;
               pheal=0;
             }
             if(poz==0)
             {
               myGameBoss.x=  myGameArea.canvas.width*3/4;
               myGameBoss.y=myGameArea.canvas.height*2/6-30;
               poz=1;
             }
             if (myGameArea.frameNo == 1 ||
               everyinterval(Math.floor((Math.random() *  150) + 100)))
             {
               //Laser[l1]=new sound("laser.mp3"); Laser[l1].play(); l1++;
               gameBullet[k]=new bullet(10,10,"blue",myGameBoss.x+10,myGameBoss.y+70,"boss");
               var deltaX=myGameBoss.x+10-myGamePiece.x;
               var deltaY=myGameBoss.y+70-myGamePiece.y;
               var rad = Math.atan2(deltaY, deltaX);
               gameBullet[k].speedX=-2*Math.cos(rad);
               gameBullet[k].speedY=-2*Math.sin(rad);
               gameBullet[k].z=1;
               k=k+1;


             }
             if(everyinterval(75))
             {
               if( myGameBoss.c1==0)
               {
                 myGameBoss.speedX=-1.5;
                 myGameBoss.speedY=1.5;
                 myGameBoss.c1=1;
               }
               else
               if(myGameBoss.c1==1)
               {
                 myGameBoss.speedX=-1.5;
                 myGameBoss.speedY=-1.5;
                 myGameBoss.c1=2;
               }
               else
               if( myGameBoss.c1==2)
               {
                  myGameBoss.speedX=1.5;
                  myGameBoss.speedY=-1.5;
                  myGameBoss.c1=3;
               }
                 else
               if( myGameBoss.c1==3)
               {
                 myGameBoss.speedX=1.5;
                 myGameBoss.speedY=1.5;
                 myGameBoss.c1=0;
               }
             }
              myGameBoss.newPos();
           }
           else
           if(bosshealth<=2000&&bosshealth>1000){
             if(pheal==0)
             {
               if(health<100)
               health+=30;
               pheal=1;
             }
             if(poz==1)
             {
               myGameBoss.x=  myGameArea.canvas.width*3/4;
               myGameBoss.y=myGameArea.canvas.height*2/6-30;
               poz=0;
             }
             if (myGameArea.frameNo == 1 ||
               everyinterval(Math.floor((Math.random() * 200) + 100)))
             {
               //Laser[l1]=new sound("laser.mp3"); Laser[l1].play(); l1++;
               gameBullet[k]=new bullet(10,10,"blue",myGameBoss.x+10,myGameBoss.y+70,"boss");
               var deltaX=myGameBoss.x+10-myGamePiece.x;
               var deltaY=myGameBoss.y+70-myGamePiece.y;
               var rad = Math.atan2(deltaY, deltaX);
               gameBullet[k].speedX=-2*Math.cos(rad);
               gameBullet[k].speedY=-2*Math.sin(rad);
               gameBullet[k].z=2;
               k=k+1;


             }
             if(everyinterval(75))
             {
               if( myGameBoss.c1==0)
               {
                 myGameBoss.speedX=-1.5;
                 myGameBoss.speedY=1.5;
                 myGameBoss.c1=1;
               }
               else
               if(myGameBoss.c1==1)
               {
                 myGameBoss.speedX=-1.5;
                 myGameBoss.speedY=-1.5;
                 myGameBoss.c1=2;
               }
               else
               if( myGameBoss.c1==2)
               {
                  myGameBoss.speedX=1.5;
                  myGameBoss.speedY=-1.5;
                  myGameBoss.c1=3;
               }
                 else
               if( myGameBoss.c1==3)
               {
                 myGameBoss.speedX=1.5;
                 myGameBoss.speedY=1.5;
                 myGameBoss.c1=0;
               }
             }
              myGameBoss.newPos();
           }
           else
           if(bosshealth<=1000){
             if(pheal==1)
             {
               if(health<100)
               health+=30;
               pheal=0;
             }
             if(poz==0)
             {
               myGameBoss.x=  myGameArea.canvas.width*3/4;
               myGameBoss.y=myGameArea.canvas.height*2/6-30;
               poz=1;
             }
             if (myGameArea.frameNo == 1 ||
               everyinterval(Math.floor((Math.random() * 150) + 70)))
             {
               var rand=Math.floor((Math.random() * 5) + 1);
               if(rand==1)
               {
                 //Laser[l1]=new sound("laser.mp3"); Laser[l1].play(); l1++;
                 gameBullet[k]=new bullet(10,10,"blue",myGameBoss.x+10,myGameBoss.y+70,"boss");
                 var deltaX=myGameBoss.x+10-myGamePiece.x;
                 var deltaY=myGameBoss.y+70-myGamePiece.y;
                 var rad = Math.atan2(deltaY, deltaX);
                 gameBullet[k].speedX=-2*Math.cos(rad);
                 gameBullet[k].speedY=-2*Math.sin(rad);
                 gameBullet[k].z=2;
                 k=k+1;
               }
               else
               if(rand==2)
               {
                 //Laser[l1]=new sound("laser.mp3"); Laser[l1].play(); l1++;
                 gameBullet[k]=new bullet(5,5,"blue",myGameBoss.x+10,myGameBoss.y+70,"boss");
                 var deltaX=myGameBoss.x+10-myGamePiece.x;
                 var deltaY=myGameBoss.y+70-myGamePiece.y;
                 var rad = Math.atan2(deltaY, deltaX);
                 gameBullet[k].speedX=-6*Math.cos(rad);
                 gameBullet[k].speedY=-6*Math.sin(rad)-0.25;
                 k=k+1;
                 gameBullet[k]=new bullet(5,5,"blue",myGameBoss.x+10,myGameBoss.y+70,"boss");
                 var deltaX=myGameBoss.x+10-myGamePiece.x;
                 var deltaY=myGameBoss.y+70-myGamePiece.y;
                 var rad = Math.atan2(deltaY, deltaX);
                 gameBullet[k].speedX=-6*Math.cos(rad);
                 gameBullet[k].speedY=-6*Math.sin(rad);
                 k=k+1;
                 gameBullet[k]=new bullet(5,5,"blue",myGameBoss.x+10,myGameBoss.y+70,"boss");
                 var deltaX=myGameBoss.x+10-myGamePiece.x;
                 var deltaY=myGameBoss.y+70-myGamePiece.y;
                 var rad = Math.atan2(deltaY, deltaX);
                 gameBullet[k].speedX=-6*Math.cos(rad);
                 gameBullet[k].speedY=-6*Math.sin(rad)+0.25;
                 k=k+1;
               }
               else
               if(rand==3)
               {
                 //Laser[l1]=new sound("laser.mp3"); Laser[l1].play(); l1++;
                 gameBullet[k]=new bullet(10,10,"blue",myGameBoss.x+10,myGameBoss.y+70,"boss");
                 var deltaX=myGameBoss.x+10-myGamePiece.x;
                 var deltaY=myGameBoss.y+70-myGamePiece.y;
                 var rad = Math.atan2(deltaY, deltaX);
                 gameBullet[k].speedX=-2*Math.cos(rad);
                 gameBullet[k].speedY=-2*Math.sin(rad);
                 gameBullet[k].z=1;
                 k=k+1;
               }
               else
               if(rand==4)
               {
                 //Laser[l1]=new sound("laser.mp3"); Laser[l1].play(); l1++;
                 gameBullet[k]=new bullet(10,10,"blue",myGameBoss.x+10,myGameBoss.y+70,"boss");
                 gameBullet[k].speedX=-2;
                 gameBullet[k].speedY=0;
                   gameBullet[k].z=1;
                 k=k+1;
               }
               else
               if(rand==5)
               {
                 //Laser[l1]=new sound("laser.mp3"); Laser[l1].play(); l1++;
                 gameBullet[k]=new bullet(10,10,"blue",myGameBoss.x+10,myGameBoss.y+70,"boss");
                 gameBullet[k].speedX=-2;
                 gameBullet[k].speedY=0;
                   gameBullet[k].z=2;
                 k=k+1;
               }



             }

             if(everyinterval(75))
             {
               if( myGameBoss.c1==0)
               {
                 myGameBoss.speedX=-1.5;
                 myGameBoss.speedY=1.5;
                 myGameBoss.c1=1;
               }
               else
               if(myGameBoss.c1==1)
               {
                 myGameBoss.speedX=-1.5;
                 myGameBoss.speedY=-1.5;
                 myGameBoss.c1=2;
               }
               else
               if( myGameBoss.c1==2)
               {
                  myGameBoss.speedX=1.5;
                  myGameBoss.speedY=-1.5;
                  myGameBoss.c1=3;
               }
                 else
               if( myGameBoss.c1==3)
               {
                 myGameBoss.speedX=1.5;
                 myGameBoss.speedY=1.5;
                 myGameBoss.c1=0;
               }
             }
              myGameBoss.newPos();
           }
        }
        else
          myGameBoss.x+=-4;

        myBossHealth.update();
        myGameBoss.update();
      }

      if (myGamePiece.crashWith(myGameBoss)) {
          health-=20;
          ok=0;
          myGamePiece.x=40;
          myGamePiece.y=120;
      }

    }

    myGamePiece.newPos();
    myGamePiece.update();

    //Bomb bullets
    for( i=0;i<gameBullet.length;i+=1)
      if(gameBullet[i]!=undefined){
        if (myGameArea.frameNo == 1 ||
          everyinterval(100))
          if(gameBullet[i].type=="enemy"&&gameBullet[i].z==1&&gameBullet[i].x<Math.floor((Math.random() * 350) + 100)&&gameBullet[i].done==false)
            {
              //Laser[l1]=new sound("bomb.mp3"); Laser[l1].play(); l1++;
              gameBullet[k]=new bullet(5,5,"blue",gameBullet[i].x,gameBullet[i].y,"enemy");
              gameBullet[k].speedX=-1;
              gameBullet[k].speedY=0;
              k=k+1;
              gameBullet[k]=new bullet(5,5,"blue",gameBullet[i].x,gameBullet[i].y,"enemy");
              gameBullet[k].speedX=1;
              gameBullet[k].speedY=0;
              k=k+1;
              gameBullet[k]=new bullet(5,5,"blue",gameBullet[i].x,gameBullet[i].y,"enemy");
              gameBullet[k].speedX=0;
              gameBullet[k].speedY=1;
              k=k+1;
              gameBullet[k]=new bullet(5,5,"blue",gameBullet[i].x,gameBullet[i].y,"enemy");
              gameBullet[k].speedX=0;
              gameBullet[k].speedY=-1;
              k=k+1;
              gameBullet[k]=new bullet(5,5,"blue",gameBullet[i].x,gameBullet[i].y,"enemy");
              gameBullet[k].speedX=-1;
              gameBullet[k].speedY=-1;
              k=k+1;
              gameBullet[k]=new bullet(5,5,"blue",gameBullet[i].x,gameBullet[i].y,"enemy");
              gameBullet[k].speedX=-1;
              gameBullet[k].speedY=1;
              k=k+1;
              gameBullet[k]=new bullet(5,5,"blue",gameBullet[i].x,gameBullet[i].y,"enemy");
              gameBullet[k].speedX=1;
              gameBullet[k].speedY=-1;
              k=k+1;
              gameBullet[k]=new bullet(5,5,"blue",gameBullet[i].x,gameBullet[i].y,"enemy");
              gameBullet[k].speedX=1;
              gameBullet[k].speedY=1;
              k=k+1;
              gameBullet[i].done=true;
            }
          else
          if(gameBullet[i].type=="enemy"&&gameBullet[i].z==2&&gameBullet[i].x<Math.floor((Math.random() * 350) + 100)&&gameBullet[i].done==false)
             {
               //Laser[l1]=new sound("laser.mp3"); Laser[l1].play(); l1++;
               gameBullet[k]=new bullet(5,5,"blue",gameBullet[i].x,gameBullet[i].y,"enemy");
               var deltaX=gameBullet[i].x-myGamePiece.x;
               var deltaY=gameBullet[i].y-myGamePiece.y;
               var rad = Math.atan2(deltaY, deltaX);
               gameBullet[k].speedX=-4*Math.cos(rad);
               gameBullet[k].speedY=-4*Math.sin(rad)-0.25;
               k=k+1;
               gameBullet[k]=new bullet(5,5,"blue",gameBullet[i].x,gameBullet[i].y,"enemy");
               var deltaX=gameBullet[i].x-myGamePiece.x;
               var deltaY=gameBullet[i].y-myGamePiece.y;
               var rad = Math.atan2(deltaY, deltaX);
               gameBullet[k].speedX=-4*Math.cos(rad);
               gameBullet[k].speedY=-4*Math.sin(rad);
               k=k+1;
               gameBullet[k]=new bullet(5,5,"blue",gameBullet[i].x,gameBullet[i].y,"enemy");
               var deltaX=gameBullet[i].x-myGamePiece.x;
               var deltaY=gameBullet[i].y-myGamePiece.y;
               var rad = Math.atan2(deltaY, deltaX);
               gameBullet[k].speedX=-4*Math.cos(rad);
               gameBullet[k].speedY=-4*Math.sin(rad)+0.25;
               k=k+1;
               gameBullet[i].done=true;
            }
          else
          if(gameBullet[i].type=="boss"&&gameBullet[i].z==1&&gameBullet[i].x<Math.floor((Math.random() * 350) + 100)&&gameBullet[i].done==false)
              {
                //Laser[l1]=new sound("bomb.mp3"); Laser[l1].play(); l1++;
                gameBullet[k]=new bullet(5,5,"blue",gameBullet[i].x,gameBullet[i].y,"boss");
                gameBullet[k].speedX=-1;
                gameBullet[k].speedY=0;
                k=k+1;
                gameBullet[k]=new bullet(5,5,"blue",gameBullet[i].x,gameBullet[i].y,"boss");
                gameBullet[k].speedX=1;
                gameBullet[k].speedY=0;
                k=k+1;
                gameBullet[k]=new bullet(5,5,"blue",gameBullet[i].x,gameBullet[i].y,"boss");
                gameBullet[k].speedX=0;
                gameBullet[k].speedY=1;
                k=k+1;
                gameBullet[k]=new bullet(5,5,"blue",gameBullet[i].x,gameBullet[i].y,"boss");
                gameBullet[k].speedX=0;
                gameBullet[k].speedY=-1;
                k=k+1;
                gameBullet[k]=new bullet(5,5,"blue",gameBullet[i].x,gameBullet[i].y,"boss");
                gameBullet[k].speedX=-1;
                gameBullet[k].speedY=-1;
                k=k+1;
                gameBullet[k]=new bullet(5,5,"blue",gameBullet[i].x,gameBullet[i].y,"boss");
                gameBullet[k].speedX=-1;
                gameBullet[k].speedY=1;
                k=k+1;
                gameBullet[k]=new bullet(5,5,"blue",gameBullet[i].x,gameBullet[i].y,"boss");
                gameBullet[k].speedX=1;
                gameBullet[k].speedY=-1;
                k=k+1;
                gameBullet[k]=new bullet(5,5,"blue",gameBullet[i].x,gameBullet[i].y,"boss");
                gameBullet[k].speedX=1;
                gameBullet[k].speedY=1;
                k=k+1;
                gameBullet[i].done=true;
              }
          else
          if(gameBullet[i].type=="boss"&&gameBullet[i].z==2&&gameBullet[i].x<Math.floor((Math.random() * 350) + 100)&&gameBullet[i].done==false)
               {
                 //Laser[l1]=new sound("laser.mp3"); Laser[l1].play(); l1++;
                 gameBullet[k]=new bullet(5,5,"blue",gameBullet[i].x,gameBullet[i].y,"boss");
                 var deltaX=gameBullet[i].x-myGamePiece.x;
                 var deltaY=gameBullet[i].y-myGamePiece.y;
                 var rad = Math.atan2(deltaY, deltaX);
                 gameBullet[k].speedX=-4*Math.cos(rad);
                 gameBullet[k].speedY=-4*Math.sin(rad)-0.25;
                 k=k+1;
                 gameBullet[k]=new bullet(5,5,"blue",gameBullet[i].x,gameBullet[i].y,"boss");
                 var deltaX=gameBullet[i].x-myGamePiece.x;
                 var deltaY=gameBullet[i].y-myGamePiece.y;
                 var rad = Math.atan2(deltaY, deltaX);
                 gameBullet[k].speedX=-4*Math.cos(rad);
                 gameBullet[k].speedY=-4*Math.sin(rad);
                 k=k+1;
                 gameBullet[k]=new bullet(5,5,"blue",gameBullet[i].x,gameBullet[i].y,"boss");
                 var deltaX=gameBullet[i].x-myGamePiece.x;
                 var deltaY=gameBullet[i].y-myGamePiece.y;
                 var rad = Math.atan2(deltaY, deltaX);
                 gameBullet[k].speedX=-4*Math.cos(rad);
                 gameBullet[k].speedY=-4*Math.sin(rad)+0.25;
                 k=k+1;
                 gameBullet[i].done=true;
              }
      }

    //Clears enemy array from enemys that are undefined or thhose who have "done" property set on true
    for(var k=0;k<enemy.length;k++)
      if(enemy[k]==undefined||enemy[k].done==true)
      {

        enemy.splice(k,1);

      }
    //checks if bullets crashed with enemy or player
    for( i=0;i<gameBullet.length;i+=1)
      if(gameBullet[i]!=undefined){
        if(gameBullet[i].x<-5||gameBullet[i].x>myGameArea.canvas.width+5||gameBullet[i].y<-5||gameBullet[i].y>myGameArea.canvas.height+5)
          gameBullet[i].done=true;

        if(gameBullet[i].done==false)
          if(myGameBoss.done==false)
            if(gameBullet[i].crashWith(myGameBoss)&&gameBullet[i].type=="player"){
              gameBullet[i].done=true;
              bosshealth-=50;
            }
            else
            if(gameBullet[i].crashWith(myGamePiece)&&gameBullet[i].type=="boss"){
              gameBullet[i].done=true;
              health-=30;
            }

        for (j = 0; j < enemy.length; j += 1) {
          if(gameBullet[i].done==false)
            if(enemy[j]!=undefined&&enemy[j].done==false)
              if(gameBullet[i].crashWith(enemy[j])&&gameBullet[i].type=="player") {
                gameBullet[i].done=true;
                enemy[j].done=true;
                points+=100;
                ok=0;
              }
            else
              if(gameBullet[i].type=="enemy"&&gameBullet[i].crashWith(myGamePiece)){
                gameBullet[i].done=true;
                health-=10;
              }
        }

        if(gameBullet[i].done!=true){
          gameBullet[i].newPos();
          gameBullet[i].update();
        }
      }

    if(health<=0||bosshealth<=0)
      myGameArea.stop();
    if(health>100)
      myHealth.color="green";
    else
      myHealth.color="black";



    myScore.text="SCORE: " + points;
    myHealth.text="HEALTH: " + health;
    myScore.update();
    myHealth.update();
    document.getElementById("bullets").innerHTML = "Bullets:" + gameBullet.length;
    document.getElementById("enemys").innerHTML = "Enemys:" + enemy.length;

}
//Every time n miliseconds pass
function everyinterval(n) {
    if ((myGameArea.frameNo / n) % 1 == 0)
      return true;

    return false;
}
startGame();
