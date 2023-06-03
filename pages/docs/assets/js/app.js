let diContBxNames = document.getElementsByClassName("di__cont__bx__name");

// Variable to keep track of the currently active element
let activeElement = null;

// Add a click event listener to each di__cont__bx__name element
Array.from(diContBxNames).forEach(function (diContBxName) {
    diContBxName.addEventListener("click", function () {
        // Get the parent container
        let container = this.parentNode;

        // Get the corresponding docs__cont__opt element
        let docsContOpt = container.querySelector(".docs__cont__opt");

        // Check if the docs__cont__opt element exists
        if (docsContOpt) {
            // Check if the clicked element is already active
            if (container === activeElement) {
                // Remove the "active" class from the current active element
                docsContOpt.classList.remove("active");
                activeElement = null;
            } else {
                // Remove the "active" class from the previously active element
                if (activeElement) {
                    activeElement.querySelector(".docs__cont__opt").classList.remove("active");
                }

                // Add the "active" class to the clicked element
                docsContOpt.classList.add("active");
                activeElement = container;
            }
        }
    });
});



// Get all the obh__h_bx elements
let obhHBx = document.getElementsByClassName("obh__h_bx");

// Get all the obh_c_bx elements
let obhCBx = document.getElementsByClassName("obh_c_bx");

// Add a click event listener to each obh__h_bx element
Array.from(obhHBx).forEach(function (obhHBox, index) {
    obhHBox.addEventListener("click", function () {
        // Remove the "active" class from all obh__h_bx elements
        Array.from(obhHBx).forEach(function (element) {
            element.classList.remove("active");
        });

        // Add the "active" class to the clicked obh__h_bx element
        this.classList.add("active");

        // Hide all obh_c_bx elements
        Array.from(obhCBx).forEach(function (element) {
            element.style.display = "none";
        });

        // Show the corresponding obh_c_bx element
        obhCBx[index].style.display = "block";
    });
});


let hamburger = document.querySelector('.hamburger')
let sideBar = document.querySelector('.sidebar__container')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    sideBar.classList.toggle('active')
})