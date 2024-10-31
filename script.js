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


  
