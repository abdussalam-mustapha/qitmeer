let btn = document.querySelector(".reflink")
let submitBtn = document.querySelector(".btn")
let ref = document.querySelector(".links-container")
let val = document.querySelector(".form-data")


const refLink = document.createElement("p")

function createRef(baseUrl, referralId) {
    refLink.innerText = `${baseUrl}?ref=${referralId}`;
    ref.appendChild(refLink)
}

let referralId = ("" + Math.random()).substring(2, 8);
let baseUrl = "https://qitmeer.vercel.app/"

btn.onclick = (e) => {
    createRef(baseUrl, referralId)
    e.preventDefault()
}

// submitBtn.onclick = (e) => {
//     const userInputs = {
//         tkn : val.value
//     }
    
//     localStorage.setItem("user", JSON.stringify(userInputs))
//     e.preventDefault()

// }

// function send_data(){
//     var form_data = document.getElementsByClassName("form-data"); //retrieve filled form data
//     var i;
//     var data = [];
//     for(i=0; i<form_data.length; i++){
//       data.push(form_data[i].value);
//     }
//     google.script.run.saveData(data); // send to google app script
//     document.getElementById("form").style.display = "none"; // make form invisible
//     document.getElementById("completion-msg").style.display = "block"; // Optional if you want to give a completion feedback!
//   }

//   function doGet() {
//     return HtmlService.createHtmlOutputFromFile('index');
//   }
  
//   // App Script function to save data to sheet
//   function saveData(data) {
//     var sheet = SpreadsheetApp.getActiveSheet();
//     sheet.appendRow(data);
//   }

//  AKfycbxOC7ajGig8teTKoQmzmeO2sNyOvtfyNUfouNW4dzAV8R-gKHBlHgcokQK9Er6hgjZZfA
//   https://script.google.com/macros/s/AKfycbxOC7ajGig8teTKoQmzmeO2sNyOvtfyNUfouNW4dzAV8R-gKHBlHgcokQK9Er6hgjZZfA/exec