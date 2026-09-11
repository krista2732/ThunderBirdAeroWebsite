const scrollPrompt = document.getElementById("scrollPrompt");
const nextSection = document.getElementById("goal");

scrollPrompt.addEventListener("click", () => {
    nextSection.scrollIntoView({
        behavior: "smooth"
    });
});


window.addEventListener("scroll", () => {
    const nextTop = nextSection.getBoundingClientRect().top;

    if (nextTop <= window.innerHeight) {
        scrollPrompt.classList.add("hidden");
    } else {
        scrollPrompt.classList.remove("hidden");
    }
});
