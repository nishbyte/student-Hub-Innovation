function showMessage() {

    document.getElementById("result").innerHTML =
    "Welcome to Student Hub Innovation";

}

function filterProjects(category) {

    let projects =
    document.getElementsByClassName("project");

    for (let i = 0; i < projects.length; i++) {

        if (category == "all" ||
            projects[i].classList.contains(category)) {

            projects[i].style.display = "block";

        }

        else {

            projects[i].style.display = "none";

        }

    }

}

function sendMessage() {

    let name =
    document.getElementById("name").value;

    document.getElementById("result").innerHTML =
    "Thank You " + name + "! Message Submitted";

}