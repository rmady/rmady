window.onload = function() {
    const purplemode = document.getElementById('purplemode');
    purplemode.onclick = function() {
        const body = document.querySelector("body");
        body.classList.toggle("purple-mode");
    }
}