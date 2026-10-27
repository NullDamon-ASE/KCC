document.addEventListener("DOMContentLoaded", () => {
        const slide_btn = document.querySelector(".menu_bar_btn");
        const close_btn = document.querySelector(".cancel_btn");
        const optn = document.querySelectorAll(".optn");
        const expend = document.querySelector(".navigationbar");
        const toggle_screen = document.querySelector(".toggle_screen");

        slide_btn.addEventListener("click", () => {
                expend.classList.toggle("expend");
                toggle_screen.classList.add("hidden");
                close_btn.classList.remove("hide")
                slide_btn.classList.add("hide")
        });
        close_btn.addEventListener("click", () => {
                expend.classList.toggle("expend");
                toggle_screen.classList.remove("hidden");
                close_btn.classList.add("hide")
                slide_btn.classList.remove("hide")
        });
        optn.forEach(function (optn) {
                optn.addEventListener("click", () => {
                        expend.classList.remove("expend");
                        toggle_screen.classList.remove("hidden");
                        close_btn.classList.add("hide")
                        slide_btn.classList.remove("hide")
                });
                // optn.addEventListener("mouseleave", () => {
                //         expend.classList.remove("expend");
                // });
        });
        toggle_screen.addEventListener("click", () => {
                expend.classList.toggle("expend");
                toggle_screen.classList.remove("hidden");
                close_btn.classList.add("hide")
                slide_btn.classList.remove("hide")
        });

});