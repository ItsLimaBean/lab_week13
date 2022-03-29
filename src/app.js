const originalContainer = document.querySelector(".original-container")
const copyContainer = document.querySelector(".copy-container")
const deleteBtn = document.querySelector(".copies > button")


function onOriginalClick(event) {
    if (event.target !== originalContainer) {
        const closestDiv = event.target.closest("div")
        const clone = closestDiv.cloneNode(true)
        copyContainer.insertAdjacentElement("afterbegin", clone)
    }
}

function onClearBtnClick(event) {
    while (copyContainer.hasChildNodes()) {
        copyContainer.firstChild.remove()
    }
}

originalContainer.addEventListener("click", onOriginalClick)
deleteBtn.addEventListener("click", onClearBtnClick)