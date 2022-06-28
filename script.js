console.log("page loaded...");
let example = document.querySelector("#requestAmount")
let yourConnections = document.querySelector("#yourConnections")
function hide(element) {
    element.innerText = "Elijah Haley";
}



function declineConnectionRequest(element){
    element.remove()
    requestAmount.innerText--
    example.innerText = requests
}


function acceptConnectionRequest(element){
    element.remove()
    requestAmount.innerText--
    yourConnections.innerText++
    example.innerText = requests
}


