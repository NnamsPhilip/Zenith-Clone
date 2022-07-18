const closeIcon = document.getElementById("close-icon");
const stickyIcons = document.getElementById("sticky-icons");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("close-popup");
const searchBox = document.querySelector(".search");

closeIcon.addEventListener("click", function () {
    if (stickyIcons.style.visibility === "visible") {
        stickyIcons.style.visibility = "hidden"
    } else {
        stickyIcons.style.visibility = "visible"
    }
});

setTimeout(() => {
    popup.style.display = "grid"
    popup.style.display = "justify-content-center";
}, 1000
)


closePopup.addEventListener("click", function () {
    popup.style.visibility = "hidden";
})

function autoGrow(Element) {
    Element.style.height = (Element.scrollHeight) + "px"
}

searchBox.addEventListener("click", function () {
    const searchIcon = document.getElementsByClassName('fa-search');
    console.log(searchIcon)
    const searchText = this.querySelector('span');
    console.log(searchText)

    if (searchIcon.namedItem === 'fa fa-search' ) {
        alert('yoo')
        // searchText.innerHTML = "SEARCH"
        // searchIcon.classList.remove('fa-search');
        // searchIcon.classList.add('fa-times');
    } else {
        alert('noo')
        // searchText.innerHTML = "Close"
        // searchIcon.classList.remove('fa-times');
        // searchIcon.classList.add('fa-search');
    };
});
