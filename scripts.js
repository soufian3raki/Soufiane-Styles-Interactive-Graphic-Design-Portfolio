// Modal functionality
const modal = document.getElementById("modal");
const closeBtn = document.querySelector(".close");
const projects = document.querySelectorAll(".project");

projects.forEach(project => {
    project.addEventListener("click", () => {
        modal.style.display = "block";
    });
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target == modal) {
        modal.style.display = "none";
    }
});
