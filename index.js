function main(){
    const checkInterval = setInterval(() => {
        const assignment = document.querySelector(".member-assignment-list-container")
        const incompleteAssignmentsButton = document.querySelector("html.js.no-touch.svg.inlinesvg.svgclippaths.no-ie8compat body div#content-container div#content-area.content-wrap.row.no-padding div#app div div#group-container-main-wp div#group-assignments.groups-container.row.collapse div#group-details-container.large-9.small-12.columns.js-large-edit div#group-assignment-container.row.collapse.group-assignment-container div.small-12.large-12.columns.member-assignment-wrapper div.row.collapse.member-assignment-header.hide-for-small div.change-assignment-viewed.active-view.change-assignment-viewed-button")
        if (assignment && incompleteAssignmentsButton) {
            clearInterval(checkInterval)
            console.log(`Assignment found`, assignment, incompleteAssignmentsButton)
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
                const redoInterval = setInterval(() => {
                    main()
                    clearInterval(redoInterval)
                }, 3000)
            })
        }
        else {
            console.log(`Assignments not found yet`)
        }
    }, 500)
}
main()