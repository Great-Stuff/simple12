function checkInterval(){ setInterval(() => {
    const assignment = document.querySelector(".member-assignment-list-container")
    const button = document.querySelector(".change-assignment-viewed-button")
    button.onclick(checkInterval())
    if (assignment) {
        console.log("Assignments found:", assignment)
        clearInterval(checkInterval);
        const assignments = document.querySelectorAll(".member-assignment-list-container")
        for (let i = 0; i < assignments.length; i++) {
            assignments[i].style.width = "200%"
            if (
            String(assignments[i].innerHTML).includes("mild") ||
            String(assignments[i].innerHTML).includes("Mild") ||
            String(assignments[i].innerHTML).includes("espanol")
            ){
                assignments[i].style.display = "none"
            }
        }
    }
    else {
        console.log("Assignments not found yet")
    }
}, 500);}

checkInterval()