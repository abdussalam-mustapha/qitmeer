let btn = document.querySelector(".reflink")
let submitBtn = document.querySelector(".btn")
let ref = document.querySelector(".links-container")
let val = document.querySelector(".textVal")


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

submitBtn.onclick = (e) => {
    const userInputs = {
        tkn : val.value
    }
    
    localStorage.setItem("user", JSON.stringify(userInputs))
    e.preventDefault()

}

