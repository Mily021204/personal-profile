form.addEventListener("submit", async (e)=>{

    e.preventDefault();

    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const message=document.getElementById("message").value;

    try{

        await addDoc(collection(db,"messages"),{

            name:name,
            email:email,
            message:message,
            date:new Date()

        });

        document.getElementById("status").innerHTML="✅ Message Sent Successfully!";

        form.reset();

    }catch(error){

        document.getElementById("status").innerHTML="❌ Failed to Send.";

        console.log(error);

    }

});


const projects = {

    Studylib: {
        title: "StudyLib",
        image: "./StudyLib.png",
        description: "A web-based platform that helps students organize study materials."
    },

  

};

window.openModal = function(project){

    document.getElementById("projectModal").style.display="block";

    document.getElementById("modalTitle").innerHTML =
        projects[project].title;

    document.getElementById("modalImage").src =
        projects[project].image;

    document.getElementById("modalDescription").innerHTML =
        projects[project].description;

}

window.closeModal = function(){

    document.getElementById("projectModal").style.display="none";

}
