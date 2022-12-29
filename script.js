let btn = document.querySelector(".reflink")
let ref = document.querySelector(".links-container")


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

