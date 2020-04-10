let lfcLogo = document.querySelector('img');

lfcLogo.onclick = function() {
    let imgSrc = lfcLogo.getAttribute('src');
    if (imgSrc === 'images/liverpool-logo.jpg') {
        lfcLogo.setAttribute('src', 'images/another-logo.png');
    } else {
        lfcLogo.setAttribute('src', 'images/liverpool-logo.jpg');
    }
}

let changeButton = document.querySelector('button');
let siteHeading = document.querySelector('h1');

function setUserName() {
    let userName = prompt('Please enter your name.');
    if (!userName || userName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', userName);
        siteHeading.textContent = 'I knew that you are walking with us, ' + userName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let userName = localStorage.getItem('name');
    siteHeading.textContent = 'I knew that you are walking with us, ' + userName;
}

changeButton.onclick = function() {
    setUserName();
}
