
  // Personalized welcome message code
  let myButton = document.querySelector('button');
  let myHeading = document.querySelector('h1');

  function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      if (myHeading) {
        myHeading.innerHTML = 'Hi, ' + myName;
      }
    }
  }

  if (!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    if (myHeading) {
      myHeading.textContent = 'Hi, ' + (storedName || 'Arielle');
    }
  }

  if (myButton) {
    myButton.onclick = function() {
      setUserName();
    };
  }

  // Event listeners for navigation buttons
  let navButton = document.getElementById('nav');
  if (navButton) {
    navButton.addEventListener('click', function() {
      console.log('Next Page button clicked');
      window.location.href = "pageTwo.html";
    });
  }

  let navButton2 = document.getElementById('previous');
  if (navButton2) {
    navButton2.addEventListener('click', function() {
      console.log('Previous button clicked');
      window.location.href = "index.html";
    });
  };
