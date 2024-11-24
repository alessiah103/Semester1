// MAKE THE MAGIC HAPPEN

/*
Extra functions:
- Sun
- Rotating apples
- Worm
- Flowers under watering can
*/

$(document).ready(function () {
    // ============= Watering can + droplets - Attila =================
    let angle = 0;
    let isRotated = false; 
    
    $(".waterdrop").hide(); // Hiding the waterdrops at the start
    $(".flower").hide(); // Hiding the flowers at the start

    $("#wateringcan").on("click", function () { // When the watering can is clicked, it rotates the angle
        if (isRotated) {
            angle = 0;
        } else {
            angle = -45;
        }

        $(this).css("transform", "rotate(" + angle + "deg)"); // Rotating by x angle

        if (!isRotated) {
            let wateringCanPosition = $(this).position();
            let wateringCanWidth = $(this).width();
            let wateringCanHeight = $(this).height();

            // Waterdrop animation
            $(".waterdrop").each(function (index) {
                let startX = wateringCanPosition.left + wateringCanWidth - 180 + (index * 3); // Waterdrop starting position X
                let startY = wateringCanPosition.top + 120 + (index * 3); // Waterdrop starting position Y

                // Setting starting positions
                $(this).css({
                    left: startX + "px",
                    top: startY + "px",
                    position: "absolute"
                });

                $(this).show();

                // Settings the waterdrops random position
                let randomOffsetX = Math.random() * 20 - 10; // Random horizontal offset
                let randomDuration = Math.random() * 500 + 700; // Random animation speed (duration)

                function animateDrop() { 
                    $(this).animate(
                        { top: "100%", left: `+=${randomOffsetX}px` }, // The waterdrop falls down
                        randomDuration, // Random duration
                        "linear", // Linear movements
                        function () {
                            // After the animation is over, the waterdrop is reset to the starting position
                            let resetX = wateringCanPosition.left + wateringCanWidth - 180 + (index * 3);
                            $(this).css({ top: startY + "px", left: resetX + randomOffsetX + "px" }).animate({
                                top: startY + "px", left: resetX + "px"
                            }, 0, function () {
                                // After the reset, the waterdrop is animated again
                                animateDrop.call(this);
                            });
                        }
                    );
                }
                animateDrop.call(this);
            });

            // Flower animation
            $(".flower").each(function (index) {
                let flowerX = wateringCanPosition.left + wateringCanWidth / 2 - 140 + (index*45) // Adjust X position
                let flowerY = wateringCanPosition.top + wateringCanHeight + 50; // Below the watering can

                $(this).css({
                    left: flowerX + "px",
                    top: flowerY + "px",
                    position: "absolute"
                });
            });

            // Show the flowers with fade-in effect after a short delay
            setTimeout(() => {
                $(".flower").fadeIn(1000);
            }, 1000); // Delay to simulate water absorption
        } else {
            // Hide waterdrops and flowers when the can is reset
            $(".waterdrop").hide();
            $(".flower").fadeOut(500);
        }
        isRotated = !isRotated;
    });
    // ============= Watering can - Attila End ==========

    // ============= Butterfly - Sándor =================
    var flySpeed = 1500;
    $("#cloud").offset({top: -50, left: -1000}); //positioning the cloud outside the window
    $("#sun").offset({top: 0, left: 400}); //positioning the sun
    $("#sun_sad").offset({top: 0, left: 400}); //positioning the sad sun


    function moveButterfly() {
        // Readying the window size to set our boundaries
        const windowWidth = $(window).width();
        
        const windowHeight = $(window).height();
        
        // Random pos calculation
        var newLeft = Math.floor(Math.random() * (windowWidth - $("#butterfly").width()));
        var newTop = Math.floor(Math.random() * (windowHeight - $("#butterfly").height()));

        // Animating the butterfly
        $("#butterfly").animate({
            left: newLeft,
            top: newTop
        }, flySpeed, function() {
            // After reaching the destination, we loop
            moveButterfly();
        });
    }

    function let_there_be_light () {
        $("#cloud").animate({left: -1000}, 3000);
        setTimeout(function() { $("#sun").fadeIn() }, 1000);
        setTimeout(function() { $("#dark-overlay").fadeOut() }, 700);
    }

    // Check mouse
    $("#butterfly").hover(
        function() {
            $(this).stop();
            flySpeed = 200;  // Increase speed when hovered
            moveButterfly();
        },
        function() {
            flySpeed = 1500; // Return to normal speed when hover ends
        }
    )

    $("#butterfly").on("click", function() {
        alert("Great catch!");
    })

    $("#sun").on("click", function() {
        //alert("test");
        $(this).fadeOut();
        $("#cloud").animate({left: 300}, 3000);
        setTimeout(function () { $("#dark-overlay").fadeIn() }, 2500);
        setTimeout(function () { let_there_be_light() }, 8000);
    })

    // Start the animation loop
    moveButterfly();
    // ============= Butterfly end - Sándor ==============

    // ============= Net + Worm - Alessia =================
    
    
    $(window).on("keydown", function(event) {
        var wormLeft = $("#worm").offset().left; //left position
        var wormWidth = $("#worm").outerWidth(); //get worm total width(incl.padding and borders)
        var windowWidth = $(window).width(); //current window width
        
        if(event.keyCode == 39) { // right arrow key
            wormLeft += 5; //moves 5px to the right
            $("#worm").css("transform", "scaleX(-1)"); //mirrors the worm to face right
            //limit worm to move on the visible window area(right)
            if(wormLeft + wormWidth > windowWidth) { //checks whether worm exceeds window width(right)
                wormLeft = windowWidth - wormWidth; //if so, make worm stop at the edge of the screen 
            }
        }
        if(event.keyCode == 37) { // left arrow key
            wormLeft -= 5;
            $("#worm").css("transform", "scaleX(1)"); //mirrors the worm to face left
            //limit worm to move on the visible window area(left)
            if(wormLeft < 0) {
                wormLeft = 0;
            }
        }
        //update worm position based on the new coordinates
        $("#worm").offset({left : wormLeft});
    });


    let lastX = 0 //position of mouse
    $(document).on('mousemove', function(event){
        let movementX = event.pageX - lastX;//calculate mousemove
        
        if(movementX > 0) {
            $("#net").css("transform", "scaleX(-1)"); //mouse right - net face right
        } else {
            $("#net").css("transform", "scaleX(1)"); //mouse left - net face left
        }
        
        $("#net").css({ //make the net follow the mouse
           left: event.pageX, 
           top: event.pageY,
        });
        lastX = event.pageX; 
    });

    // ============= Net + Worm end - Alessia =================

    // ============== Apples - Daniel ==================
    var arrayofpossX = [];
    var arrayofpossY=[];
    const maxloop=100; //to avoid lag site || Daniel

    function randompossofappleseveryload(apple){
        //Here I get treee position || Daniel
        var xmaxoftree = $("#tree").width()*2;
        var xminoftree = $("#tree").width()+(1/3*$("#tree").width()); //here I was cheking which part of value is wopring the best for min ||Daniel
        var ymaxoftree = $("#tree").height() / 2-(1/3*$("#tree").height()); //same here like for xmin || Daniel
        var yminoftree = $("#tree").height() / 2;
          
        var validPosition,loop=0;
           
        do {
            //About this multipliers and deviders I was just checking at site:) but height is /2 because I do not want to have apples on wood part || Daniel
            randomX = Math.floor(Math.random() * (xmaxoftree - xminoftree)) + xminoftree;
            randomY = Math.floor(Math.random() * (ymaxoftree - yminoftree)) + yminoftree;

            validPosition = true; 

            for (let i = 0; i < arrayofpossX.length; i++) {
                if (Math.abs(arrayofpossX[i] - randomX) < 100 && Math.abs(arrayofpossY[i] - randomY) < 100) { //checking distance between apples || Daniel
                    validPosition = false; // Too close to another apple ||  Daniel
                    break;
                }
            }
            loop++;
            if (loop > maxloop) {
                break; // Break if max loop went more than 100 times ||  Daniel
            }
        } while (!validPosition); // Retry until valid position is found ||  Daniel
        //push its literally add to array ||  Daniel
            arrayofpossX.push(randomX); 
            arrayofpossY.push(randomY);
                
                $(apple).css({ //here for every apple changes css for random generated poss || Daniel
                    "left": randomX + "px",
                    "top": randomY + "px"
                });
                $(apple).on("click", function(){
                    var basketPosition= $("#basketfront").position();
                    var randomXapplebasket,randomYapplebasket;
                    randomXapplebasket = Math.floor(Math.random()*130);//random to prevent same location of apples ||Daniel
                    randomYapplebasket = Math.floor(Math.random() *20);//random to prevent same location of apples ||Daniel
                    spinningmachine=0;
                    function spin(){
                        spinningmachine+=10;
                        $(apple).css("transform", `rotate(${spinningmachine}deg)`);
                    }

                    $(apple).animate({
                        left: basketPosition.left + randomXapplebasket + "px", // Adjust to center inside basket ||Daniel
                        top: basketPosition.top + randomYapplebasket + "px"  // Adjust for vertical centering ||Daniel
                    }, {
                        duration: 1000,
                        step: spin, // Call spin function during animation ||Daniel
                        complete: function() {
                    $(apple).css("z-index", 2);//makes apples insade of backet because z index of apple is lower than baskets one ||Daniel
                    $("#basketfront").css("z-index", 3);
                    $(apple).css("transform", ""); // Reset rotation after animation ||Daniel
                }
            });
        });    
    }
    arrayOfPosX=[];
    arrayOfPosY=[];
    //function takes id from html as argument || Daniel
    randompossofappleseveryload("#apple1");
    randompossofappleseveryload("#apple2");
    randompossofappleseveryload("#apple3");
    //================ Daniel end of code =========================>
});

/*
Extra functions:
- Sun
- Rotating apples
- Worm
- Flowers under watering can
*/