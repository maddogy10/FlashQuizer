//const setPageBody = document.getElementById("bodypart")

const cardContainer = document.getElementById('cardcontainer')
const prevButton = document.getElementById("prev")
const nextButton = document.getElementById("next")
var retrieveTerms = localStorage.getItem("terms")
var retrieved = JSON.parse(retrieveTerms)
var retrieveDefs = localStorage.getItem("definitions")
var gotDefs = JSON.parse(retrieveDefs)
var retrieveTitle = localStorage.getItem("title")
var gotTitle = JSON.parse(retrieveTitle)

   
retrieved.forEach(term => {
       /* term.addEventListener('click', () > {
            i.classList.toggle('flipCard')    
        })*/
        /*gotDefs.forEach(def => {
            gotTitle.forEach( title => {
              importSets(term, def, title)
              termsAndDef(term, def);
            })
            
        })*/
        let i = retrieved.indexOf(term)
        let def = gotDefs[i];
        gotTitle.forEach(title => {
          importSets(term, def, title)
          termsAndDef(term, def);
        })

})



//const cards = document.querySelectorAll(".card");
const cards = cardContainer.childNodes
//console.log(cardContainer.children)
 // console.log(cards)
cards.forEach((e) => {
    e.addEventListener("click", () => {
      e.classList.toggle("flipCard");
    });
});
  /*const containerChildren = cardContainer.children
  for (var i = 0; i < containerChildren.length; i++) {
    
    containerChildren[i].addEventListener("click", () => {
      containerChildren[i].classList.toggle("flipCard")
      console.log("clicked")
    })
  }*/

let slideIndex = 1;
  showSlides(slideIndex);
  
function plusSlides(n) {
    showSlides(slideIndex += n);
}
  
function currentSlide(n) {
    showSlides(slideIndex = n)
}
  
function showSlides(n) {
    let i;
 

    let slides = document.getElementsByClassName("card");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
  }


  
/*for (let i = 0; i < card.length; i++) {
  addEventListener("click", (card) => {
    card.classList.toggle("flipCard");
    console.log("clicked");
  });
}
*/


  //*/
 /*

*/
/*const setBody = document.getElementById("bodypart")
setBody.onload = function() {
  setBody.addEventListener('click', () => {    
var retrieveTerms = localStorage.getItem("terms")
var retrieved = JSON.parse(retrieveTerms)
console.log(retrieved)
retrieved.forEach(term => {
    importSets(term)
    console.log(term)
    term.addEventListener("click", () => {
      term.classList.toggle("flipCard")
    })
})
})

/*retrieved.forEach((e) => {
    e.addEventListener("click", () => {
    e.classList.toggle("flipCard");
    });
});*/
/* for (let i = 0; i < retrieved.length; i++) {
    retrieved[i].addEventListener('click', () => {
        i.classList.toggle('flipCard')
    })
}*/
//flip cards


//const cardContainer = document.querySelectorAll('.cardcontainer')

/*for (let i = 0; i < cards.length; i++) {
addEventListener("click", (card) => {
card.classList.toggle("flipCard");
console.log("clicked");
});
}*/
/*
cardContainer.addEventListener("click", flip())

function flip() {





let slideIndex = 1;
showSlides(slideIndex);

document.getElementById('prev').addEventListener("click", plusSlides(-1))
document.getElementById('next').addEventListener("click", plusSlides(+1))

function plusSlides(n) {
    showSlides(slideIndex += n);
}


function showSlides(n) {
    let i;
    
    let slides = document.getElementsByClassName("card");
    console.log(slides)
    if (n > slides.length || n < slides.length) {
    slideIndex = 1;
    }
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

console.log(slideIndex)
}







*/