// initalizing the variable slideNumber to 0
var slideNumber = 0;
// calling the function showslides()
sliding_images();
// Creating the function showSlides() for slider
function sliding_images() {
  var i;
//   Storing the images by classname in slides variable
  var slides = document.getElementsByClassName("slides");
//   Creating loop to display the images display property to none
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideNumber++;
// if statement is used here to assign the value of slideNumber to 1 because the slideNumber++ increase the slideNumber value and it can exceed the array length i.e. slides.length
  if (slideNumber > slides.length) {
    slideNumber = 1;
  }
//   setting the value of slides/images to block to display the slider images 
  slides[slideNumber - 1].style.display = "block";
//   setting the timeout to slide the images in 2000 miliseconds

  setTimeout(sliding_images, 2000);
}

// function to show date in navbar top
function date(){
  // date is stored in time variable 
  var time = new Date();
  // date is converted to String
  var date = time.toDateString();
  // Hours is stored in hours variable
  var hours = time.getHours();
  // minutes is stored in minutes variable
  var minutes = time.getMinutes();
  // seconds is stored in seconds variable
  var seconds = time.getSeconds();
 var times = document.getElementById("date").innerHTML = date + " / " + hours + " : " + minutes + " : " + seconds;
 
 
 

}
date();
