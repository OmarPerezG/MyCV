function showAlert() {
    document.getElementById("alert").style.display = "flex";
}

function closeAlert() {
    document.getElementById("alert").style.display = "none";
}

function toggleLanguage() {
    const currentLang = document.querySelector(".language-toggle").textContent;
    if (currentLang === "ES") {
        document.querySelector(".language-toggle").textContent = "EN";
        document.querySelector("h1").textContent = "Omar Pérez Gutiérrez";
        document.querySelector("p").textContent = "Software Development and Management Engineer.";
        document.querySelector("#acerca-de-mi p").textContent = "I am a passionate software developer with experience in creating innovative and efficient technological solutions.";
        document.querySelector("#educacion h2").textContent = "Education";
        document.querySelector("#educacion ul li").innerHTML = "<strong>Technological University of Manzanillo</strong> - Bachelor's Degree in Software Development and Management";
        document.querySelector("#experiencia h2").textContent = "Work Experience";
        document.querySelector("#experiencia ul li strong").textContent = "Nexon Automation - Controls Engineer";
        document.querySelector("#hobbies h2").textContent = "Hobbies";
    } else {
        document.querySelector(".language-toggle").textContent = "ES";
        document.querySelector("h1").textContent = "Omar Pérez Gutiérrez";
        document.querySelector("p").textContent = "Ing. en Desarrollo y Gestión de Software.";
        document.querySelector("#acerca-de-mi p").textContent = "Soy un apasionado desarrollador de software con experiencia en la creación de soluciones tecnológicas innovadoras y eficientes.";
        document.querySelector("#educacion h2").textContent = "Educación";
        document.querySelector("#educacion ul li").innerHTML = "<strong>Universidad Tecnológica de Manzanillo</strong> - Licenciatura en Desarrollo y Gestión de Software";
        document.querySelector("#experiencia h2").textContent = "Experiencia Laboral";
        document.querySelector("#experiencia ul li strong").textContent = "Nexon Automation - Ingeniero de Controles";
        document.querySelector("#hobbies h2").textContent = "Hobbies";
    }
}
