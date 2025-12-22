function message() {
    alert("Not Implemented!");
}

document.getElementById("scrollBtn").addEventListener("click", function() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
});