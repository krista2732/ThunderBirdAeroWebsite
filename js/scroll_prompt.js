const scrollPrompt = document.getElementById("scrollPrompt");
const contactSection = document.getElementById("contact");

scrollPrompt.addEventListener("click", () => {
    contactSection.scrollIntoView({
        behavior: "smooth"
    });
});


window.addEventListener("scroll", () => {
    const contactTop = contactSection.getBoundingClientRect().top;

    if (contactTop <= window.innerHeight) {
        scrollPrompt.classList.add("hidden");
    } else {
        scrollPrompt.classList.remove("hidden");
    }
});
