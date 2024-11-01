const submit = document.getElementById('createset')
const addTerm = document.getElementById('addterm')
const termDiv = document.getElementById('t-d')
const setBody = document.getElementById("bodypart")
var termNums = 1
const flashcardContainer = document.getElementById('cardcontainer')
const prev = document.getElementById('prev')
const tBody = document.getElementById("tbody")
const setTitle = document.getElementById('setTitle')
const writeModal = document.getElementById("writeModal")
const wmodalx = document.getElementById("writeModalx")
const wordSearchModal = document.getElementById("wordSearchModal")

if (submit) {
    submit.addEventListener("click", createSet)
}
if (addTerm) {
    addTerm.addEventListener("click", addTD)
}
 


function createSet() {
   // const value = document.getElementsByClassName('definition')[0].value
    
    //terms
    var terms = document.querySelectorAll('.term')
    let termsArr = Array.prototype.map.call(terms, function(e) {
        return e.value
    })

    localStorage.setItem("terms", JSON.stringify(termsArr))
// definitions
    var defs = document.querySelectorAll('.definition')
    let defsArr = Array.prototype.map.call(defs, function(e) {
        return e.value
    })
   // console.log(defsArr)
    localStorage.setItem("definitions", JSON.stringify(defsArr))
    //window.onload = importSets()
    var title = document.querySelectorAll('.title')
   // console.log(title.value)
    let titleArr = Array.prototype.map.call(title, function(e) {
        return e.value
    })

    localStorage.setItem("title", JSON.stringify(titleArr))
    


}



function addTD() {
    termNums += 1
    var tempDiv = document.createElement('div')
    tempDiv.setAttribute('class', 'individualTerm')
    var term = document.createElement('input')
    var definition = document.createElement('input')
    term.setAttribute('type', 'text')
    term.setAttribute('placeholder', 'Term')
    term.setAttribute('id', 'term'+termNums)
    term.setAttribute('class', 'term')
    definition.setAttribute('type', 'text')
    definition.setAttribute('placeholder', 'Definition')
    definition.setAttribute('id', 'definition'+ termNums)
    definition.setAttribute('class', 'definition')
    termDiv.append(tempDiv)
    tempDiv.append(term)
    tempDiv.append(definition)
   // console.log(terms)
}

// flashcard page imports

function importSets(term, def, title) {
  //  const cardContainer = document.createElement('div')
    setTitle.innerHTML = title
    const cardFade = document.createElement('div')
    const front = document.createElement('div')
    const back = document.createElement('div')
    const termText = document.createElement('h2')
    const definitionText = document.createElement('h2')
  //  cardContainer.setAttribute('class', 'cardcontainer')
    cardFade.setAttribute('class', 'card fade')
    front.setAttribute('class', 'front')
    back.setAttribute('class', 'back')
    termText.setAttribute('class', 'termText')
    definitionText.setAttribute('class', 'definitionText')
    termText.innerHTML = term
    definitionText.setAttribute('value', 'definition')
    definitionText.innerHTML = def
   // console.log(definitionText.innerHTML)
   //flashcardContainer.insertBefore(cardContainer, prev)
   flashcardContainer.append(cardFade)
  //  console.log("its in")
   // cardContainer.append(cardFade)
    cardFade.append(front)
    cardFade.append(back)
    front.append(termText)
    back.append(definitionText)
  cardFade.style.display = 'none'
    const titleForSets = document.getElementById("setTitle")
    titleForSets.innerHTML = title
}
function termsAndDef(term, def) {
    const cardRow = document.createElement('tr');
    const termBlock = document.createElement('td');
    const defBlock = document.createElement('td');
  //  const termBlockText = document.createElement('h2');
  //  const defBlockText = document.createElement('h2');
  termBlock.innerHTML = term
  defBlock.innerHTML = def
  cardRow.setAttribute('id', 'cardRow');
  tBody.append(cardRow);
  cardRow.append(termBlock);
  cardRow.append(defBlock);
}

function writeMode() {
    writeModal.style.display = "block"
}
function closeWriteMode() {
    writeModal.style.display = "none"
  //  console.log("closed")
    
}
function wordSearchMode() {
    wordSearchModal.style.display = "block"
    console.log("word search")
    runWordSearch();
}
function closeWordSearchMode() {
    wordSearchModal.style.display = "none"
  //  console.log("closed")
    
}
   
 
