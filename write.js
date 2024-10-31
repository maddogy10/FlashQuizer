// next: work on the bars on the write w fractions
const termBox = document.getElementById("writegiven")
const writeInput = document.getElementById("writeInput")
const userWrote = document.getElementById("userwrote")
const correctAns = document.getElementById("correctAns")
const rightWrongWrite = document.getElementById("rightWrongWrite")
const contButton = document.getElementById("contButton")
const remLeft = document.getElementById("remleft")
const incLeft = document.getElementById("incleft")
const corLeft = document.getElementById("corleft")
const rightOrNot = document.getElementById('rightornot')
let termArrNum = [];
let defArrNum = [];
let numTerms;
let remainingNum = document.getElementById("remainingNum")
let incorrectNum = document.getElementById("incorrectNum")
let correctNum = document.getElementById("correctNum")
//original term and definition storage
let termArr = []
let defArr = []
let x;
let remNum;
let incNum = 0;
let corrNum = 0;
let remBar;
let incBar;
let corrBar;
let remBarCover = document.getElementById("remleft")
let incBarCover = document.getElementById("incleft")
let corrBarCover = document.getElementById("corleft")

// number of term/def for write order
let ogTermArr = []
let ogDefArr = []
function termWrite() {
  contButton.innerHTML = "Continue"
    x = 0;
  numTerms = 100 / retrieved.length
  numTerms= retrieved.length
  console.log(retrieved)
  console.log(numTerms);
  remNum = numTerms;
  
  remainingNum.innerHTML = remNum;
  remBar = 100;
  remBarCover.style.width = remBar + "%";
  corrBar = 0;
  incBar = 0;
  //do the bars
  
  for(i =0; i < retrieved.length; i++) {
    termArr[i] = i;
    defArr[i] = i;
   
  }
  let j = 0;
  //decides order
  while (termArr.length !=0) {
  
  
  let randTerm = Math.floor(Math.random()*retrieved.length)
    if (termArr.includes(randTerm)) {
      termArrNum[j] = retrieved[randTerm]
      defArrNum[j] = gotDefs[randTerm]
    
     for (i=0; i < termArr.length; i++) {
      if(termArr[i] == randTerm) {
        termArr.splice(i, 1)
        console.log("I spliced " + i)
    
      }
     }
      j++
    }
   
   
  

 // defArr = termArr
  
  //find array value where rand num is drawn and remove from array
  }
  //make def array
  //implement array into html
  for (let i=0; i < termArrNum.length; i++) {
    ogTermArr[i] = termArrNum[i];
    ogDefArr[i] = defArrNum[i];
    console.log(ogTermArr)
    console.log(ogDefArr)
  }
 /*  ogTermArr = termArrNum
    ogDefArr = defArrNum*/
  termBox.innerHTML = termArrNum[x];
  }



function checkWrite() {
  console.log("enter")
  console.log(x)
  console.log(termArr.length)
  console.log(defArrNum[x])
  //if correct and inside array length
 if (writeInput.value == defArrNum[x] && x <= termArrNum.length) {
    corrNum += 1;
    correctNum.innerHTML = corrNum;
    remNum -=1;
    remainingNum.innerHTML = remNum;
    console.log(numTerms);
    remBar -= (100* 1 / numTerms)
    if (remBar < 0) {
      remBar = 0;
    }
    remBarCover.style.width = remBar + "%";
    corrBar += 100*1/numTerms;
    corrBarCover.style.width = corrBar +"%";
    rightWrongWrite.style.display = "block"
    userWrote.style.display = "block"
    userWrote.innerHTML = writeInput.value
    userWrote.style.color = "green"
  rightOrNot.innerHTML = "Correct!"
    correctAns.innerHTML = defArrNum[x];
    correctAns.style.color = "green"
     // pop last element of the array
    if (ogTermArr.length > 0) {
      if (x < ogTermArr.length - 1) {
        ogTermArr.splice(x,1)
      ogDefArr.splice(x,1)
      console.log("spliced")
      } else if (x >= ogTermArr.length -1) {
        ogTermArr.pop()
        ogDefArr.pop()
    } else {
      ogTermArr[0] = null
      ogDefArr[0] = null
    }
  }
    console.log(ogTermArr)
    console.log(ogDefArr)
    console.log(defArrNum)
   // remLeft.style.width -= numTerms
   
    x+=1;
    //do it with numbers instead of copying array
    termBox.innerHTML = termArrNum[x];
    writeInput.value = ""
// if wrong
  } else if (writeInput.value != defArrNum[x]  && x < termArrNum.length) {
    incNum += 1;
    incorrectNum.innerHTML = incNum;
    remNum -=1;
    remainingNum.innerHTML = remNum;
    remBar -= (100* 1 / numTerms)
    if (remBar < 0) {
      remBar = 0;
      console.log("less")
    }
    remBarCover.style.width = remBar + "%";
    incBar += 100*1/numTerms;
    incBarCover.style.width = incBar +"%";
    console.log("no")
    rightWrongWrite.style.display = "block"
    userWrote.innerHTML = writeInput.value
    userWrote.style.color = "red"
    rightOrNot.innerHTML = "Incorrect :("
    correctAns.innerHTML = defArrNum[x];
    correctAns.style.color = "green"
    x+=1;
    termBox.innerHTML = termArrNum[x];
    writeInput.value = ""
 }
 
}
function closeCorrWrite() {
//make sure this functions correctly
  if (x <= termArrNum.length -1) {
  rightWrongWrite.style.display = "none"
  console.log("close")
  } else if (x > termArrNum.length - 1) {
    
    if (ogTermArr.length == 0) {
      // rightWrongWrite.style.display = "block"
    //userWrote.style.display = "none"
    //change continue button to restart round
      contButton.innerText = "Restart"
      console.log(contButton.innerText)
      corrNum = 0;
      //termArrNum = ogTermArr
    //  defArrNum = ogDefArr
      termWrite()
    } else {
     
      for (let i = 0; i < termArrNum.length; i++) {
        /*
        if (!ogTermArr.includes(i)) {
          console.log(termArrNum[i])
          termArrNum.splice(i,1)
          defArrNum.splice(i,1)
        }
       
*/
        termArrNum = ogTermArr
        defArrNum = ogDefArr
        console.log(termArrNum)
        console.log(defArrNum)
        contButton.innerText = "Restart"
        contButton.addEventListener('click', () => {
          x=0;
          termBox.innerHTML = termArrNum[x]
          writeInput.value = ''
          rightWrongWrite.style.display = "none"
        })
        // figure out where to put these
        
        console.log(numTerms);
    remNum = numTerms;
    remBar = 100;
    remBarCover.style.width = remBar + "%";
    incBar = 0;
    incNum = 0;
    incBarCover.style.width = incBar + "%";
      }
    }
   // let x > termArrNum.length - 1 && ogTermArr[0] == null
   // allow it to restart
   }
}


