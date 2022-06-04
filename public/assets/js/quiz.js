
///////////////////////////////////////////////////

// empty arrays for possible countries to visit
const arrUSA = []

const arrItaly = []

const arrJapan = []

const arrMexico = []

/////////////////////////////////////////////////////////////////////////////////////////////


// select each posisble option 
const option1 = document.querySelector('[data-option-id="1"]');
const option2 = document.querySelector('[data-option-id="2"]');
const option3 = document.querySelector('[data-option-id="3"]');
const option4 = document.querySelector('[data-option-id="4"]');
const option5 = document.querySelector('[data-option-id="5"]');
const option6 = document.querySelector('[data-option-id="6"]');
const option7 = document.querySelector('[data-option-id="7"]');
const option8 = document.querySelector('[data-option-id="8"]');
const option9 = document.querySelector('[data-option-id="9"]');
const option10 = document.querySelector('[data-option-id="10"]');
const option11 = document.querySelector('[data-option-id="11"]');
const option12 = document.querySelector('[data-option-id="12"]');
const option13 = document.querySelector('[data-option-id="13"]');
const option14 = document.querySelector('[data-option-id="14"]');
const option15 = document.querySelector('[data-option-id="15"]');
const option16 = document.querySelector('[data-option-id="16"]');
const option17 = document.querySelector('[data-option-id="17"]');
const option18 = document.querySelector('[data-option-id="18"]');
const option19 = document.querySelector('[data-option-id="19"]');
const option20 = document.querySelector('[data-option-id="20"]');
const option21 = document.querySelector('[data-option-id="21"]');

const optionBtn = document.querySelector('.option-btn')
///////////////////////////////////////////////////////////////////////////////////////////////


// add pics to quiz questions
const pic1 = document.querySelector('[data-pic-id="1"]').src="/assets/images/food.jpeg";

const pic2 = document.querySelector('[data-pic-id="2"]').src="/assets/images/weather.png";

const pic3 = document.querySelector('[data-pic-id="3"]').src="/assets/images/sights.jpg";

const pic4 = document.querySelector('[data-pic-id="4"]').src="/assets/images/accomodations.jpeg";

const pic5 = document.querySelector('[data-pic-id="5"]').src="/assets/images/drinks.jpg";



///////////////////////////////////////////////////////////////////

// functions to add points 
const mexicoPush = function() {
    arrMexico.push('x')
    console.log('point for Mexico')
    this.style.background = "white";
}

const japanPush = function() {
    arrJapan.push('x')
    console.log('point for Japan')
    this.style.background = "white";
}

const italyPush = function() {
    arrItaly.push('x')
    console.log('point for Italy')
    this.style.background = "white";
}

const usaPush = function() {
    arrUSA.push('x')
    console.log('point for USA')
    this.style.background = "white";
}

const noPush = function() {
    console.log('no point pushed');
    this.style.background = "white";
}


const clearOption = function() {
    if (optionBtn.style.background = "white") {
        optionBtn.removeAttribute('style');
    }
}

const clearArray1 = function() {
    arrLengths = arrMexico.length + arrItaly.length + arrJapan.length + arrUSA.length;
    if (arrLengths > 1) {
        arrMexico.pop();
        arrItaly.pop();
        arrJapan.pop();
        arrUSA.pop();
        console.log('reset points');
    }
}


/////////////////////////////////////////////////////////

// event listeners for options

//question 1
option1.addEventListener('click', clearOption);
option1.addEventListener('click', clearArray1, {once: true});
option1.addEventListener('click', mexicoPush, {once: true} );


option2.addEventListener('click', japanPush, {once: true} )


option3.addEventListener('click', italyPush, {once: true} )


option4.addEventListener('click', usaPush, {once: true} )

//question 2
option5.addEventListener('click', italyPush, {once: true} )


option6.addEventListener('click', usaPush, {once: true} )


option7.addEventListener('click', mexicoPush, {once: true} )


option8.addEventListener('click', japanPush, {once: true} )

//question 3
option9.addEventListener('click', usaPush, {once: true} )


option10.addEventListener('click', japanPush, {once: true} )


option11.addEventListener('click', italyPush, {once: true} )


option12.addEventListener('click', mexicoPush, {once: true} )

//question 4
option13.addEventListener('click', mexicoPush, {once: true} )


option14.addEventListener('click', japanPush, {once: true} )


option15.addEventListener('click', italyPush, {once: true} )


option16.addEventListener('click', usaPush, {once: true} )


//question 5
option17.addEventListener('click', mexicoPush, {once: true} )


option18.addEventListener('click', italyPush, {once: true} )


option19.addEventListener('click', usaPush, {once: true} )


option20.addEventListener('click', japanPush, {once: true} )


option21.addEventListener('click', noPush, {once: true} )



///////////////////////////////////////////////////////////////////////////////////

const resultsBtn = document.querySelector(".resultsBtn");

var displayErrorModal = function () {
    // When the user clicks on the button, open the modal
    // mainDiv.classList.remove("has-background-dark");

    // Get the modal
    var modal = document.querySelector("#myModal");

    // Get the <span> element that closes the modal
    var span = document.querySelector(".close");

    modal.style.display = "flex";

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
        modal.style.display = "none";
        }
    }
}

var displayErrorModal2 = function () {
    // When the user clicks on the button, open the modal
    // mainDiv.classList.remove("has-background-dark");

    // Get the modal
    var modal2 = document.querySelector("#myModal2");

    // Get the <span> element that closes the modal
    var span2 = document.querySelector(".close2");

    modal2.style.display = "flex";

    // When the user clicks on <span> (x), close the modal
    span2.onclick = function() {
        modal2.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal2) {
        modal2.style.display = "none";
        }
    }
}

const compareArrays = function() {

    arrLengths = arrMexico.length + arrItaly.length + arrJapan.length + arrUSA.length; 
    
    if (arrLengths === 0) {
        displayErrorModal();
    }
    else if ( arrLengths < 4 ) {
        displayErrorModal2();
        
    }
    else if (arrUSA.length > arrItaly.length && arrUSA.length > arrJapan.length && arrUSA.length > arrMexico.length ) {
        
        console.log('USA has most points')
        resultsBtn.href='/results1'
        
    }
    else if (arrItaly.length > arrUSA.length && arrItaly.length > arrJapan.length && arrItaly.length > arrMexico.length ) {
        
        console.log('Italy has most points')
        resultsBtn.href='/results2'

    }
    else if (arrJapan.length > arrItaly.length && arrJapan.length > arrUSA.length && arrJapan.length > arrMexico.length ) {
        
        console.log('Japan has most points')
        resultsBtn.href='/results3'

    }
    
    else if (arrMexico.length > arrItaly.length && arrMexico.length > arrJapan.length && arrMexico.length > arrUSA.length ) {
        
        console.log('Mexico has most points')
        resultsBtn.href='/results4'


    }

    else {
        resultsBtn.href='/results'
    }
    

    
    
}


/////////////////////////////////////////////////////////////////



resultsBtn.addEventListener("click", compareArrays);