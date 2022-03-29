const originalContainer = document.querySelector(".original-container")
const copyContainer = document.querySelector(".copy-container")

function onOriginalClick(event) {
    if (event.target !== originalContainer) {
        const closestDiv = event.target.closest("div")
        const clone = closestDiv.cloneNode(true)
        copyContainer.insertAdjacentElement("afterbegin", clone)
    }
}

originalContainer.addEventListener("click", onOriginalClick)