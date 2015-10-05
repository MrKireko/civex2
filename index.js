$(document).ready(function(){  
    var done = [];
    var bg1 = true;
    var bg2 = false;
    
    function getImg() {
        var number = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
        if (bg1) {
            $("#bg2").css("background-image", "url(img/" + number + ".png");
            $("#bg1").css("opacity", "0");
            bg2 = true;
            bg1 = false;
            done.push(number);
            console.log("Showing bg", number);
            console.log("Done:", done);
        }else{
            $("#bg1").css("background-image", "url(img/" + number + ".png");
            $("#bg1").css("opacity", "1");
            bg2 = false;
            bg1 = true;
            done.push(number);
            console.log("Showing bg", number);
            console.log("Done:", done);
        }
    }
    
    getImg();    
    setInterval(function(){getImg()}, 7000);
});