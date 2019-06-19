{/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
// Arrays for the changing colors and flipping through images
var wheel = 0
var colorWheel = [$('#colorChanger').css('color','red'),$('#colorChanger').css('color','orange'),$('#colorChanger').css('color','yellow'),$('#colorChanger').css('color','green'),$('#colorChanger').css('color','blue'),$('#colorChanger').css('color','indigo'),$('#colorChanger').css('color','violet')]
// looping through the color changing css to keep the div font color changing
for (let colorWheel = 0; colorWheel < array.length; colorWheel++) {
    
    
} */}
// array to store all the pictures to loop through
var timer;
var counter = 0
    var pictureWheel = [ 
    ['explore!','explore.jpg'],
    ['roll the bones!','rolldice.jpg'],
    ['strategize!','strategize.jpg'],
    ['survive!','survive.jpg'],
    ['team up!','teamup.jpg'],
    ['Colin the coder!','colin.jpg']
    ]
// loops through all the images and repeats
var img = document.querySelector('img');

function changePic() {
    counter = counter + 1;
    reCount = counter % 5;
    img.src = pictureWheel[reCount][1];
    img.alt = pictureWheel[reCount][0];
}

window.onload = function() {
    changePic();
    timer = setInterval(changePic, 5000);
}
