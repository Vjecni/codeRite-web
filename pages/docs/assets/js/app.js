// Get all the di__cont__bx__name elements
let diContBxNames = document.getElementsByClassName("di__cont__bx__name");

// Add a click event listener to each di__cont__bx__name element
Array.from(diContBxNames).forEach(function (diContBxName) {
    diContBxName.addEventListener("click", function () {
        // Get the parent container
        let container = this.parentNode;

        // Get the corresponding docs__cont__opt element
        let docsContOpt = container.querySelector(".docs__cont__opt");

        // Toggle the "active" class on the docs__cont__opt element
        docsContOpt.classList.toggle("active");
    });
});