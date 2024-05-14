const buttonChangeImgAndColor = document.getElementById("button-change-img");

//Making the variable to change the color, using the querySelector("") to get all the tags called <body> and the tags inside the tag <body> classified in CSS in the classes, if you want use class in this part, write ".{classname}"

//EX: const logo = document.querySelector(".logo");
//logo.addEventListener("click", () => {
//    alert("hiiiii!")
//})

const body = document.querySelector("body");


buttonChangeImgAndColor.addEventListener("click", () => {
  const darkModeOn = body.classList.contains("dark-mode"); //this const say if the tag in HTML <body> contains one class called "dark-mode" it's gonna turn ON another commands using this const

  body.classList.toggle("dark-mode"); //this make one class show in your TAG

  if (darkModeOn) {
    buttonChangeImgAndColor.setAttribute("src", "./src/imgandvideo/sunmode.png"); //how put IMG using JS
  } else {
    buttonChangeImgAndColor.setAttribute("src", "./src/imgandvideo/moonmodeworking.png"); // how put IMG using JS
  }

  //this example I'm gonna try to explain.
  // "if () {}" the const (darkModeOn) it's not working because you not informed is working, gonna be the img SUN, but if the darkModeOn is true, the "else{}" gonna be actived and turning the img into one MOON.

  // RESUMIDLY! because we not say or explained in "if" the const it's true, making using the first command, but when the constant it's true, the command "else" turn on.
});