



let indexslide = 0;

slideShow()

function slideShow(){
  let o;
  let slide = document.getElementsByClassName("mySlides");
  for (o = 0; o < slide.length; o++) {
    slide[o].style.display = "none";
  }

  indexslide++;
  if (indexslide > slide.length){indexslide = 1}
  slide[indexslide-1].style.display = "block";
  setTimeout(slideShow, 7000);
}