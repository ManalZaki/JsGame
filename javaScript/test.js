      egg1=document.getElementById("egg1");


     eggposition1=egg1.offsetTop;
 timer=setInterval(moveDown1,20);
      
      function moveDown1(){   


        count+=5;
     y=(innerHeight-(eggposition1)+100);
     if(count<y){    
     egg1.classList.add("showegg");
     egg1.style.top=count + "px";
     }
     else{
     egg1.classList.add("hidegg");
     clearInterval(timer);
     count=0;
     timer=setInterval(moveDown1,20);
         }

         t=setInterval(touch,20);


var thebasket=document.getElementById("basketId");

         function touch(){
            if(egg1.style.left!=thebasket.style.left)
            {
                egg1.src="images/4.png";
                

            }
            else{
                egg1.src="images/eggw.png";
            }
         }

