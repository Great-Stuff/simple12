const mutationObserver = new MutationObserver(() => {
    main()
})

function getElementByXpath(path) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
}

const italic = "font-style: italic;"

function main(){
    const checkInterval = setInterval(() => {
        const assignment = document.querySelector(".member-assignment-list-container")
        const incompleteAssignmentsButton = getElementByXpath("/html/body/div[5]/div[2]/div[1]/div/div/div[1]/div[4]/div[4]/div/div[1]/div[1]")
        const completeAssignmentsButton = getElementByXpath("/html/body/div[5]/div[2]/div[1]/div/div/div[1]/div[4]/div[4]/div/div[1]/div[2]")
        const newChange = document.querySelector("#newChange")
        if (assignment && incompleteAssignmentsButton && completeAssignmentsButton) {
            clearInterval(checkInterval)
            console.log("%c Assignments found", `${italic} color: lightgreen`)
            const assignments = document.querySelectorAll(".member-assignment-list-container")
            for (let i = 0; i < assignments.length; i++) {
                if (
                    String(assignments[i].innerHTML).includes("mild") ||
                    String(assignments[i].innerHTML).includes("Mild") ||
                    String(assignments[i].innerHTML).includes("espanol")
                ) {
                    assignments[i].style.display = "none"
                }
            }
            incompleteAssignmentsButton.addEventListener("click", () => {
                mutationObserver.observe(newChange, {childList: true})
            })
            completeAssignmentsButton.addEventListener("click", () => {
                mutationObserver.disconnect()
                console.log("%c Mutation Observer Disconnected", `${italic} color: #5681c4`)
            })
        }
        else {
            console.log("%c Searching for assignments", `${italic} color: yellow`)
        }
    }, 500)
}

main()
