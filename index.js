const projects = {

    portfolio: {
        title: "Personal Portfolio Website",
        image: "portfolio.png",
        description: "A responsive portfolio built using HTML, CSS, and JavaScript."
    },

    studylib: {
        title: "StudyLib",
        image: "studylib.png",
        description: "A web-based platform that helps students organize study materials."
    },

    ccsphere: {
        title: "CCSphere",
        image: "ccsphere.png",
        description: "A social platform for Computer Science students."
    },

    library: {
        title: "Student Library System",
        image: "library.png",
        description: "A system for managing books and borrowing records."
    }

};

function openModal(project){

    document.getElementById("projectModal").style.display = "block";

    document.getElementById("modalTitle").innerText =
        projects[project].title;

    document.getElementById("modalImage").src =
        projects[project].image;

    document.getElementById("modalDescription").innerText =
        projects[project].description;

}

function closeModal(){

    document.getElementById("projectModal").style.display = "none";

}

// Make these functions available to onclick in HTML
window.openModal = openModal;
window.closeModal = closeModal;
