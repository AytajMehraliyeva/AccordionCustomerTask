const headBtns = document.querySelectorAll(".accordion_header");
const accBodies = document.querySelectorAll(".accordion_body");

for (let i = 0; i < headBtns.length; i++) {
    headBtns[i].addEventListener("click", function() {
        for (let j = 0; j < accBodies.length; j++) {
            if (i !== j) {
                accBodies[j].classList.remove('active');
            }
        }

        accBodies[i].classList.toggle('active');
        const icon = headBtns[i].querySelector('i');
        icon.classList.toggle('rotate-360', accBodies[i].classList.contains('active'));
    });
}