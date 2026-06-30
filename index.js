emailjs.init({
    publicKey: "YlCh202vwnqpBqVWF"
});


// ================= CONTACT FORM =================

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    emailjs.send(
        "service_293tzk8",
        "template_97yg4tr",
        {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value
        }
    )
    .then(function(){

        document.getElementById("status").innerHTML =
            "✅ Message sent successfully!";

        form.reset();

    })
    .catch(function(error){

    console.error("EmailJS Error:", error);

    alert("Status: " + error.status + "\nText: " + error.text);

    document.getElementById("status").innerHTML =
        "❌ Failed to send message.";

});

});

// ================= PROJECTS =================

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

// ================= PROJECT MODAL =================

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

// ================= CERTIFICATE MODAL =================

function openCertificate(image){

    document.getElementById("certificateModal").style.display = "block";

    document.getElementById("certificateImage").src = image;

}

function closeCertificate(){

    document.getElementById("certificateModal").style.display = "none";

}

window.openCertificate = openCertificate;
window.closeCertificate = closeCertificate;
