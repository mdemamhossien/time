<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>javaScripates</title>
    
</head>
<body>

<div id="myTime"></div>
<script src="program.js" type="text/javaScript">
setInterval(displayclock, 500);
function displayclock (){
    var time = new Date();
    var hrs = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    var en = 'PM';

    if ( hrs > 12){
        en = 'AM';
    }

    if (hrs > 12){
        hrs = hrs - 12;
    }

    if (hrs == 0){
        hrs = 12;
    }
    if (hrs < 10){
        hrs = '0' + hrs;
    }
    if (min < 10){
        min = '0' + min;
    }
    if (sec < 10){
        sec = '0' + sec;
    }

    document.querySelector("#myTime").innerHTML = hrs + ':' + min + ':' +sec + ' ' + en;

}

</script>
</body>
</html> 
