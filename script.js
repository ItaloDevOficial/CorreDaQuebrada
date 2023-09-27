let imgContainer = document.querySelector(".img-container");

setInterval(() => {
    let last = imgContainer.firstElementChild;
    last.remove();
    imgContainer.appendChild(last);
}, 2500);

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
    cursor.style.setProperty("--x", e.clientX);
    cursor.style.setProperty("--y", e.clientY);
});