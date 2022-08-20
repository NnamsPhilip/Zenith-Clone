
/*--------------popup--------------*/
const popup = document.getElementById("popup");
const closePopup = document.getElementById("close-popup");
const popupTop = document.querySelector(".popup-top");
const popupButtom = document.querySelector(".popup-buttom");
const textarea = document.querySelector("textarea")

textarea.addEventListener("keyup", e => {
    textarea.style.height = "20px";
    let autoHeight = e.target.scrollHeight;
    textarea.style.height = `${autoHeight}px`;
})

closePopup.addEventListener("click", function () {
    popupTop.style.display = "none";
    popupButtom.style.display = "none";
})

setTimeout(() => {
    popup.style.display = "block";
}, 3000)


/*---------------------CHATBOX------------------------*/
const chat = document.querySelector(".chat");
const chatBox = document.querySelector(".chat-box");
const chatBoxClose = document.querySelector(".span-2");

chat.addEventListener("click", function(){
    popupTop.style.display = "block";
    popupButtom.style.display = "block";
    if(chatBox.style.display == "none"){
        chatBox.style.display = "flex";
        chatBox.style.zIndex = "120"
    }else{
        chatBox.style.display = "none";  
    }
})

chatBoxClose.addEventListener("click", function (){
    chatBox.style.display = "none";
})


/*--------------sticky-icons--------------*/
const Icons = document.querySelector(".sticky-icons")
const stickyIcons = document.querySelector(".icons");
const closeIcon = document.querySelector(".sticky-7");

setTimeout(() => {
    Icons.style.display = "flex";
}, 2000)

closeIcon.addEventListener("click", function () {
    if (stickyIcons.style.visibility === "visible") {
        stickyIcons.style.visibility = "hidden";
    } else {
        stickyIcons.style.visibility = "visible";
    }
    changeStickyIcon()
});

function changeStickyIcon() {
    const faTimes = document.getElementById("fa-times");
    const faShare = document.getElementById("fa-share-alt");

    if (faShare.style.display === "none") {
        faShare.style.display = "block"
        faTimes.style.display = "none"
    }
    else {
        faTimes.style.display = "block"
        faShare.style.display = "none"
    }
}


/*---------------------SearchBox------------------------*/
const body = document.body
const searchBox = document.querySelector(".search");
const searchText = document.querySelector(".search-text");
const searchBackground = document.querySelector(".darkBackground");

searchBox.addEventListener("click", function () {
    const faSearch = document.getElementsByClassName("fa-search")[0];
    const faTimes = document.getElementsByClassName("fa-times")[0];

    if (searchText.innerHTML === "SEARCH", faTimes.style.display === "none") {
        searchText.textContent = "Close";
        faTimes.style.display = "block";
        faSearch.style.display = "none";
        searchBackground.style.display = "flex"

    } else {
        searchText.textContent = "SEARCH";
        faSearch.style.display = "block";
        faTimes.style.display = "none";
        searchBackground.style.display = "none"
    }
});
