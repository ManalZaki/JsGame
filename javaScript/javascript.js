$("#chik1").hide();
$("#chik2").hide();
$("#chik3").hide();
$(".startbtn").on("click", function () {

    
    score = 0;
    count = 0;
    // prompt dialog
    alertify.prompt("Enter Your Name", function (e, str) {
        if (e) {
            // user clicked "ok"
            user = str.toUpperCase();
            alertify.set({
                labels: {
                    ok: "Easy",
                    cancel: "Normal"
                }
            }); //easy & normal btn

            /* alertify.confirm("Choose The Level :"); */
            alertify.confirm("Choose The Level :", function (e) {

                if (e) {
                    //Easy Mode
                    imageUrl = "images/bg.jpg";
                    $("body").css('background-image', 'url(' + imageUrl + ')');
                    $("body").css({
                        'background-repeat': 'no-repeat',
                        'background-size': '100%',

                    });

                    $(".startbtn").hide();
                    $(".basket").show();
                    document.getElementById("username").innerText = "Hello  " + user;
                    $(".time").show().css("display", "inline-block");
                    $(".timeValue").show();
                    $(".score").show().css("display", "inline-block");
                    $(".scoreValue").show();
                    $(".start").show();
                    $("#chik1").show();
                    $("#chik2").show();
                    $("#chik3").show();
                    var flag = 0;
                    $(".start").on("click", function () {

                        var counter = 60;
                        if (counter != 0) {
                            this.disabled = true;
                        }

                        function updatetime() {
                            if (counter == 1) {
                                clearInterval(timer);
                                alertify.set({
                                    labels: {
                                        ok: "Play again",
                                        cancel: "Exit"
                                    },
                                    imageUrl: "laugh.gif"
                                }); //dialog after timer end
                                if(score>10){
                                alertify.confirm("You Won !!", function (e) {
                                    if (e) {
                                        counter = 6;
                                        $(".timeValue").text((counter) + ' Second');
                                        window.location.reload();
                                    } else {
                                        //exit
                                        window.close();
                                    }
                                });
                            }
                            else{
                                alertify.confirm("You Lose !!", function (e) {
                                    if (e) {
                                        counter = 6;
                                        $(".timeValue").text((counter) + ' Second');
                                        window.location.reload();
                                    } else {
                                        //exit
                                        window.close();
                                    }
                                });
                            }
                            }
                            $(".timeValue").text((counter -= 1) + ' Second'); //timer
                        } //update time

                         timer = setInterval(updatetime, 1000);

                        /*                              Code Here !!!!!!                    */
                        

                        Pause=document.createElement("input");
                        Pause.type="button";
                        Pause.value="pause";
                        Pause.style.margin="5px";
                        Pause.style.color="white";              
                        Pause.style.backgroundColor="#003300";
                        Pause.style.border="2px #003300";
                        Pause.style.fontSize="15px";
                        Pause.style.borderRadius="30%";
                        Pause.style.height="50px";
                        document.body.appendChild(Pause);
                        Pause.onclick=function()
                        {
                            clearInterval(timer);
                            clearInterval(timerId);
                            clearInterval(timerId2);
                            clearInterval(timerId3);
                            clearInterval(timer1);
                            clearInterval(timer2);
                            clearInterval(timer3);


                        }

                        Contin=document.createElement("input");
                        Contin.type="button";
                        Contin.value="continue";
                        Contin.style.margin="5px";
                        Contin.style.color="white";              
                        Contin.style.backgroundColor="#003300";
                        Contin.style.fontSize="15px";
                        Contin.style.borderRadius="30%";
                        Contin.style.border="2px #f1c65b";
                        Contin.style.height="50px";
                        document.body.appendChild(Contin);
                        Contin.onclick=function()
                        {
                            timer = setInterval(updatetime, 1000);  
                            timerId = setInterval(moveRight, 50);
                            timerId2 = setInterval(moveLeft2, 50);
                            timerId3 = setInterval(moveRight3, 50);
                            timer1 = setInterval(CreatEgg,3000);
                            timer2 = setInterval(MoveEggs, 50);
                            timer3 = setInterval(Score, 500);
                        }
                        
                        //birds
                        bird1 = document.getElementById("chik2");
                         timerId = setInterval(moveRight, 50);
                        imageLeft = 0;
                        function moveRight() {
                            imageLeft += 10;

                            x = innerWidth - ((bird1.width) + 250);
                            if (imageLeft < x) {
                                bird1.style.left = imageLeft + "px";
                            } else {
                                bird1.classList.add("flipClass");
                                clearInterval(timerId);
                                timerId = setInterval(moveLeft, 50);
                            }
                        }


                        function moveLeft() {
                            imageLeft -= 10;
                            if (imageLeft > 0) {
                                bird1.style.left = imageLeft + "px";
                            } else {
                                bird1.classList.remove("flipClass");
                                clearInterval(timerId);
                                timerId = setInterval(moveRight, 50);
                            }
                        }


                        //bird 2
                        bird2 = document.getElementById("chik1");
                         timerId2 = setInterval(moveLeft2, 50);

                        imageLeft2 = 0;

                        function moveRight2() {
                            imageLeft2 += 20;

                            x = innerWidth - ((bird2.width) + 250);
                            if (imageLeft2 < x) {
                                bird2.style.left = imageLeft2 + "px";
                            } else {
                                bird2.classList.remove("flipClass");
                                clearInterval(timerId2);
                                timerId2 = setInterval(moveLeft2, 50);
                            }
                        }


                        function moveLeft2() {
                            imageLeft2 -= 20;
                            if (imageLeft2 > 0) {
                                bird2.style.left = imageLeft2 + "px";
                            } else {
                                bird2.classList.add("flipClass");
                                clearInterval(timerId2);
                                timerId2 = setInterval(moveRight2, 50);
                            }
                        }


                        //bird 3
                        bird3 = document.getElementById("chik3");
                         timerId3 = setInterval(moveRight3, 50);

                        imageLeft3 = 0;

                        function moveRight3() {
                            imageLeft3 += 15;

                            x = innerWidth - ((bird3.width) + 250);
                            if (imageLeft3 < x) {
                                bird3.style.left = imageLeft3 + "px";
                            } else {
                                bird3.classList.add("flipClass");
                                clearInterval(timerId3);
                                timerId3 = setInterval(moveLeft3, 50);
                            }
                        }


                        function moveLeft3() {
                            imageLeft3 -= 15;
                            if (imageLeft3 > 0) {
                                bird3.style.left = imageLeft3 + "px";
                            } else {
                                bird3.classList.remove("flipClass");
                                clearInterval(timerId3);
                                timerId3 = setInterval(moveRight3, 50);
                            }
                        }
                        //#endregion
                        /******************Basket****************************/
                        parentPosition = 0;
                        xPosition = 0;
                        thebasket = document.getElementById("basketId");

                        var container = document.getElementById("basketcontainer");
                        container.addEventListener("mousemove", getClickPosition, false);

                        function getClickPosition(e) {

                            var parentPosition = getPosition(e.currentTarget);
                            var xPosition = e.clientX - parentPosition.x - (thebasket.clientWidth / 2);
                            thebasket.style.left = xPosition + "px";


                        }

                        // Helper function to get an element's exact position
                        function getPosition(el) {
                            var xPos = 0;
                            el = el.offsetParent;
                            return {
                                x: xPos
                            }

                        }

                        //Eggs
                        arrBirds = [bird1, bird2, bird3];
                        timer1 = setInterval(CreatEgg,3000);
                        timer2 = setInterval(MoveEggs, 50);
                        timer3 = setInterval(Score, 500);

                        eggs = [];

                        function CreatEgg() {
                            r = Math.floor(Math.random() * 3);

                            egg = document.createElement("img");
                            document.body.appendChild(egg);
                            egg.src = "images/eggw.png";
                            egg.width = 50;
                            egg.height = 50;
                            egg.style.setProperty('position', 'absolute');
                            egg.style.top = parseInt(arrBirds[r].offsetTop) + 110 + 'px';
                            egg.style.left = parseInt(arrBirds[r].offsetLeft) + 50 + 'px';
                            eggs.push(egg);
                        }

                        function MoveEggs() {

                            for (var i in eggs) {
                                if (eggs[i].offsetTop >= 0 && eggs[i].offsetTop < window.innerHeight - 55) {
                                    eggs[i].style.top = parseInt(eggs[i].offsetTop) + 5 + 'px';
                                } else {

                                    Score();
                                    eggs[i].remove();

                                }
                            }

                        }


                        var eggcounters = 0;

                        function Score() {
                            for (var i in eggs) {

                                // Edite 1
                               
                                
                                 if (eggs[i].offsetLeft - 50 < thebasket.offsetLeft + 50 && eggs[i].offsetLeft + 50 > thebasket.offsetLeft + 50 && eggs[i].offsetTop > 480 &&  eggs[i].offsetTop < 540 ) {


                                    eggcounters++;
                                    score++;
                                    document.getElementsByClassName("score")[0].innerText="Score "+score;
                                    eggs[i].style.display = "none";
                                    eggs[i].remove();

                                } else if (eggs[i].offsetTop > 510 && eggs[i].offsetTop < 550)

                                {
                                    eggs[i].src = "images/4.png";
                                } else  if (eggs[i].offsetTop > 625) {
                                    eggs[i].remove();
                                }
                            }
                        }
                    });






                    //Strat Game           

                } else {
                    //Normal Mode
                    imageUrl = "images/modebackground.png";
                    $("body").css('background-image', 'url(' + imageUrl + ')');
                    $("body").css({
                        'background-repeat': 'no-repeat',
                        'background-size': '100%'
                    });
                    $(".startbtn").hide();
                    $(".title").hide();
                    $(".basket").show();
                    document.getElementById("username").innerText = "Hello  " + user;
                    document.getElementById("username").style.color = "white";
                    $(".time").show().css("display", "inline-block");
                    $(".timeValue").show();
                    $(".score").show().css("display", "inline-block");
                    $(".scoreValue").show();
                    $(".start").show();
                    $("#egg1").show();
                    $("#egg2").show();
                    $("#egg3").show();
                    $("#egg4").show();
                    $("#egg5").show();
                    $("#chik1").show();
                    $("#chik2").show();
                    $("#chik3").show();

                    $(".start").on("click", function () {

                        var counter = 60;
                        if (counter != 0) {
                            this.disabled = true;
                        }

                        function updatetime() {
                            if (counter == 1) {
                                clearInterval(timer);
                                alertify.set({
                                    labels: {
                                        ok: "Play again",
                                        cancel: "Exit"
                                    },
                                    imageUrl: "laugh.gif"
                                }); //dialog after timer end
                                if(score>20){
                                    alertify.confirm("You Won !!", function (e) {
                                        if (e) {
                                            counter = 6;
                                            $(".timeValue").text((counter) + ' Second');
                                            window.location.reload();
                                        } else {
                                            //exit
                                            window.close();
                                        }
                                    });
                                }
                                else{
                                    alertify.confirm("You Lose !!", function (e) {
                                        if (e) {
                                            counter = 6;
                                            $(".timeValue").text((counter) + ' Second');
                                            window.location.reload();
                                        } else {
                                            //exit
                                            window.close();
                                        }
                                    });
                                }
                            }
                            $(".timeValue").text((counter -= 1) + ' Second'); //timer
                        } //update time

                         timer = setInterval(updatetime, 1000);

                
                        Pause=document.createElement("input");
                        Pause.type="button";
                        Pause.value="pause";
                        Pause.style.margin="5px";
                        Pause.style.color="white";              
                        Pause.style.backgroundColor="#003300";
                        Pause.style.border="2px #003300";
                        Pause.style.fontSize="15px";
                        Pause.style.borderRadius="30%";
                        Pause.style.height="50px";
                        document.body.appendChild(Pause);
                        Pause.onclick=function()
                        {
                            clearInterval(timer);
                            clearInterval(timerId);
                            clearInterval(timerId2);
                            clearInterval(timerId3);
                            clearInterval(timer1);
                            clearInterval(timer2);
                            clearInterval(timer3);
                            clearInterval(timer4);
                            clearInterval(timer5);
                            clearInterval(timer6);
                            clearInterval(timer7);
                            clearInterval(timer8);
                            clearInterval(timer9);
                        }

                        Contin=document.createElement("input");
                        Contin.type="button";
                        Contin.value="continue";
                        Contin.style.margin="5px";
                        Contin.style.color="white";              
                        Contin.style.backgroundColor="#003300";
                        Contin.style.fontSize="15px";
                        Contin.style.borderRadius="30%";
                        Contin.style.border="2px #f1c65b";
                        Contin.style.height="50px";
                        document.body.appendChild(Contin);
                        Contin.onclick=function()
                        {
                            timer = setInterval(updatetime, 1000);  
                            timerId = setInterval(moveRight, 50);
                            timerId2 = setInterval(moveLeft2, 50);
                            timerId3 = setInterval(moveRight3, 50);
                            timer1 = setInterval(CreatEgg,3000);
                            timer2 = setInterval(MoveEggs, 50);
                            timer3 = setInterval(Score, 500);
                            timer4 = setInterval(GoldEgg,2000);
                            timer5 = setInterval(MoveGold, 50);
                            timer6 = setInterval(GoldScore, 50);
                            timer7 = setInterval(BlackEgg,3000);
                            timer8 = setInterval(MoveBlack, 50);
                            timer9 = setInterval(BlackScore, 50);
                        }
                        //bird 1

                        bird1 = document.getElementById("chik2");
                         timerId = setInterval(moveRight, 50);

                        imageLeft = 0;

                        function moveRight() {
                            imageLeft += 10;

                            x = innerWidth - ((bird1.width) + 250);
                            if (imageLeft < x) {
                                bird1.style.left = imageLeft + "px";
                            } else {
                                bird1.classList.add("flipClass");
                                clearInterval(timerId);
                                timerId = setInterval(moveLeft, 50);
                            }
                        }


                        function moveLeft() {
                            imageLeft -= 10;
                            if (imageLeft > 0) {
                                bird1.style.left = imageLeft + "px";
                            } else {
                                bird1.classList.remove("flipClass");
                                clearInterval(timerId);
                                timerId = setInterval(moveRight, 50);
                            }
                        }


                        //bird 2
                        bird2 = document.getElementById("chik1");
                         timerId2 = setInterval(moveLeft2, 50);

                        imageLeft2 = 0;

                        function moveRight2() {
                            imageLeft2 += 20;

                            x = innerWidth - ((bird2.width) + 250);
                            if (imageLeft2 < x) {
                                bird2.style.left = imageLeft2 + "px";
                            } else {
                                bird2.classList.remove("flipClass");
                                clearInterval(timerId2);
                                timerId2 = setInterval(moveLeft2, 50);
                            }
                        }


                        function moveLeft2() {
                            imageLeft2 -= 20;
                            if (imageLeft2 > 0) {
                                bird2.style.left = imageLeft2 + "px";
                            } else {
                                bird2.classList.add("flipClass");
                                clearInterval(timerId2);
                                timerId2 = setInterval(moveRight2, 50);
                            }
                        }


                        //bird 3
                        bird3 = document.getElementById("chik3");
                        timerId3 = setInterval(moveRight3, 50);

                        imageLeft3 = 0;

                        function moveRight3() {
                            imageLeft3 += 15;

                            x = innerWidth - ((bird3.width) + 250);
                            if (imageLeft3 < x) {
                                bird3.style.left = imageLeft3 + "px";
                            } else {
                                bird3.classList.add("flipClass");
                                clearInterval(timerId3);
                                timerId3 = setInterval(moveLeft3, 50);
                            }
                        }


                        function moveLeft3() {
                            imageLeft3 -= 15;
                            if (imageLeft3 > 0) {
                                bird3.style.left = imageLeft3 + "px";
                            } else {
                                bird3.classList.remove("flipClass");
                                clearInterval(timerId3);
                                timerId3 = setInterval(moveRight3, 50);
                            }
                        }
                        //#endregion

                        //#region ////basket

                        var thebasket = document.getElementById("basketId");
                        var container = document.getElementById("basketcontainer");
                        container.addEventListener("mousemove", getClickPosition, false);

                        function getClickPosition(e) {
                            var parentPosition = getPosition(e.currentTarget);
                            var xPosition = e.clientX - parentPosition.x - (thebasket.clientWidth / 2);
                            thebasket.style.left = xPosition + "px";


                        }

                        // Helper function to get an element's exact position
                        function getPosition(el) {
                            var xPos = 0;
                            el = el.offsetParent;
                            return {
                                x: xPos
                            };

                        }
                       
                        var arrBirds = [bird1, bird2, bird3];
                        timer1 = setInterval(CreatEgg,1000);
                        timer2 = setInterval(MoveEggs, 50);
                        timer3 = setInterval(Score, 500);

                        eggs = [];
                        score=0;
                        function CreatEgg() {
                            r = Math.floor(Math.random() * 3);

                            egg = document.createElement("img");
                            document.body.appendChild(egg);
                            egg.src = "images/eggw.png";
                            egg.width = 50;
                            egg.height = 50;
                            egg.style.setProperty('position', 'absolute');
                            egg.style.top = parseInt(arrBirds[r].offsetTop) + 110 + 'px';
                            egg.style.left = parseInt(arrBirds[r].offsetLeft) + 50 + 'px';
                            eggs.push(egg);
                        }

                        function MoveEggs() {

                            for (var i in eggs) {
                                if (eggs[i].offsetTop >= 0 && eggs[i].offsetTop < window.innerHeight - 55) {
                                    eggs[i].style.top = parseInt(eggs[i].offsetTop) + 5 + 'px';
                                } else {

                                    Score();
                                    eggs[i].remove();

                                }
                            }

                        }


                        var eggcounters = 0;

                        function Score() {
                            for (var i in eggs) {

                                // Edite 1
                               
                                
                                 if (eggs[i].offsetLeft - 50 < thebasket.offsetLeft + 50 && eggs[i].offsetLeft + 50 > thebasket.offsetLeft + 50 && eggs[i].offsetTop > 480 &&  eggs[i].offsetTop < 540 ) {


                                    eggcounters++;
                                    score++;
                                    document.getElementsByClassName("score")[0].innerText="Score "+score;
                                    eggs[i].style.display = "none";
                                    eggs[i].remove();

                                } else if (eggs[i].offsetTop > 510 && eggs[i].offsetTop < 550)

                                {
                                    eggs[i].src = "images/4.png";
                                } else  if (eggs[i].offsetTop > 625) {
                                    eggs[i].remove();
                                }
                            }
                        }


                        timer4 = setInterval(GoldEgg,2000);
                        timer5 = setInterval(MoveGold, 50);
                        timer6 = setInterval(GoldScore, 50);
                        Goldarr=[];
                        //Gold egg
                        function GoldEgg() {
                            r = Math.floor(Math.random() * 3);

                            Gold = document.createElement("img");
                            document.body.appendChild(Gold);
                            Gold.src = "images/3.png";
                            Gold.width = 50;
                            Gold.height = 50;
                            Gold.style.setProperty('position', 'absolute');
                            Gold.style.top = parseInt(arrBirds[r].offsetTop) + 110 + 'px';
                            Gold.style.left = parseInt(arrBirds[r].offsetLeft) + 50 + 'px';
                            Goldarr.push(Gold);
                        }

                        //move gold egg
                        function MoveGold() {

                            for (var i in Goldarr) {
                                if (Goldarr[i].offsetTop >= 0 && Goldarr[i].offsetTop < window.innerHeight - 55) {
                                    Goldarr[i].style.top = parseInt(Goldarr[i].offsetTop) + 5 + 'px';
                                } else {

                                    GoldScore();
                                    Goldarr[i].remove();

                                }
                            }

                        }

                        //Score for gold
                        
                        function GoldScore() {
                            for (var i in Goldarr) {

                                 if (Goldarr[i].offsetLeft - 50 < thebasket.offsetLeft + 50 && Goldarr[i].offsetLeft + 50 > thebasket.offsetLeft + 50 && Goldarr[i].offsetTop > 480 &&  Goldarr[i].offsetTop < 540 ) {


                                    eggcounters++;
                                    //alert(window.innerHeight, "ffffff", eggcounters)
                                    score+= 3;
                                    document.getElementsByClassName("score")[0].innerText="Score "+score;
                                    Goldarr[i].style.display = "none";
                                    Goldarr[i].remove();

                                } else if (Goldarr[i].offsetTop > 510 && Goldarr[i].offsetTop < 550)

                                {
                                    Goldarr[i].src = "images/4.png";
                                } else  if (Goldarr[i].offsetTop > 625) {
                                    Goldarr[i].remove();
                                }
                            }
                        }

                        timer7 = setInterval(BlackEgg,3000);
                        timer8 = setInterval(MoveBlack, 50);
                        timer9 = setInterval(BlackScore, 50);
                        //Black egg
                        BlackArr=[];
                        function BlackEgg() {
                            r = Math.floor(Math.random() * 3);

                            BlackEgg = document.createElement("img");
                            document.body.appendChild(BlackEgg);
                            BlackEgg.src = "images/2.png";
                            BlackEgg.width = 50;
                            BlackEgg.height = 50;
                            BlackEgg.style.setProperty('position', 'absolute');
                            BlackEgg.style.top = parseInt(arrBirds[r].offsetTop) + 110 + 'px';
                            BlackEgg.style.left = parseInt(arrBirds[r].offsetLeft) + 50 + 'px';
                            BlackArr.push(BlackEgg);
                        }

                        //move gold egg
                        function MoveBlack() {

                            for (var i in BlackArr) {
                                if (BlackArr[i].offsetTop >= 0 && BlackArr[i].offsetTop < window.innerHeight - 55) {
                                    BlackArr[i].style.top = parseInt(BlackArr[i].offsetTop) + 5 + 'px';
                                } else {

                                    BlackScore();
                                    BlackArr[i].remove();

                                }
                            }

                        }

                        //Score for gold
                        
                        function BlackScore() {
                            for (var i in BlackArr) {

                                 if (BlackArr[i].offsetLeft - 50 < thebasket.offsetLeft + 50 && BlackArr[i].offsetLeft + 50 > thebasket.offsetLeft + 50 && BlackArr[i].offsetTop > 480 &&  BlackArr[i].offsetTop < 540 ) {


                                    eggcounters++;
                                    if(score>10)
                                    {score-= 10;}
                                    else{score=0;}
                                    document.getElementsByClassName("score")[0].innerText="Score "+score;
                                    BlackArr[i].style.display = "none";
                                    BlackArr[i].remove();

                                } else if (BlackArr[i].offsetTop > 510 && BlackArr[i].offsetTop < 550)

                                {
                                    BlackArr[i].src = "images/4.png";
                                } else  if (BlackArr[i].offsetTop > 625) {
                                    BlackArr[i].remove();
                                }
                            }
                        }

                    });



                }
            }); //dialog(choose level)
        } else {
            // user clicked "cancel"
            window.close();
        }
    }, "Default Value");
}); //Start btn