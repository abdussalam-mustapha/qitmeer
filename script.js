let btn = document.querySelector(".reflink")
let submitBtn = document.querySelector(".btn")
let ref = document.querySelector(".links-container-main")
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




// AKfycbwoNcQUX9K8fjb2Czj2HkDPVZx9kcDPeeroVccmJv1zplsE97M2vHF-1WXyL2A7UNjD