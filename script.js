// Smooth scrolling for navigation
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector(link.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Open GitHub link on project click
document.querySelectorAll(".project").forEach((project) => {
  project.addEventListener("click", () => {
    const githubLink = project.getAttribute("data-github");
    if (githubLink) {
      window.open(githubLink, "_blank"); // Open the GitHub link in a new tab
    }
  });
});
