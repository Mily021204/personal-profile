const projects = {

    portfolio: {
        title: "Personal Portfolio Website",
        image: "portfolio.png",
        description: "A responsive portfolio built using HTML, CSS, and JavaScript."
    },

    StudyLib: {
        title: "StudyLib",
        image: "StudyLib.png",
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

// ---------- PROJECT MODAL ----------

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

window.openModal = openModal;
window.closeModal = closeModal;


// ---------- CERTIFICATE MODAL ----------

function openCertificate(image){

    document.getElementById("certificateModal").style.display = "block";

    document.getElementById("certificateImage").src = image;

}

function closeCertificate(){

    document.getElementById("certificateModal").style.display = "none";

}

window.openCertificate = openCertificate;
window.closeCertificate = closeCertificate;
