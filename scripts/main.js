// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";

// let myVariable;
// myVariable = "bob";
// myVariable;


// myVariable = "Steve";

// // commment

// /* also
// comment */

// let iceCream = "vanilla";

// if(iceCream == "vanilla"){
//     alert("ooooo vanilla");
// } else{
//     alert("allinav ooooo");
// }

// function mults(num1, num2){
//     let result = num1 * num2;
//     return result;
// }



// document.querySelector("html").addEventListener("click", () => {
//     alert("click");
// });

// -------------------------------------------------------------------------


const myImage = document.querySelector("img");

const customImage = document.getElementById("file");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/apple.jpg");
  } else {
    myImage.setAttribute("src", "images/sauce.jpg");
  }
});





    


customImage.addEventListener("change", () => {      //when file changes
        const file = event.target.files[0];         //reads the first file
        if (file) {                                 //if something is there
            const reader = new FileReader();        //reads files
            reader.onload = function(e) {           //looks through the file
                myImage.src = e.target.result;      //src is equal to result of file
            };
            reader.readAsDataURL(file);             //reads the data as a file
        }
        myImage.style.width = "256px";              //changes to desired length
        myImage.style.height = "256px";
    });




let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");



function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Mozilla is cool, ${myName}`;
    }

    if (!localStorage.getItem("name")) {
        setUserName();
    } else {
        const storedName = localStorage.getItem("name");
        myHeading.textContent = `Mozilla is cool, ${storedName}`;
    }
}
  
  




  

myButton.addEventListener("click", () => {
    setUserName();
});
  