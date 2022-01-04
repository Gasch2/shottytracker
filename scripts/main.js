// image switcher code

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/shotty-tracker-title.png') {
      myImage.setAttribute('src','images/shottytracker2.png');
    } else {
      myImage.setAttribute('src','images/shotty-tracker-title.png');
    }
}

// personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName ) {
        setUserName();
    } else {
        localStorage.setItem('name' , myName);
        myHeading.innerHTML = 'Shotty Tracker Never Forgets, ' + myHeading;
    }
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Shotty Tracker Never Forgets, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }