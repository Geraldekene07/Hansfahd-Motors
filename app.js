document.addEventListener("click", function (e) {
    if (e.target.classList.contains("gallery-img")) {
        const src = e.target.getAttribute("src");
        document.querySelector(".modal-img").src = src;
        const myModal = new bootstrap.Modal(document.getElementById("gallery-modal"));
        myModal.show();
    }
});


let result = document.querySelectorAll("notif-icon-badge");
const addItems = document.getElementById("BOTTON").addEventListener('click', orderedItems);



// let orderedItems = (function () {
//     let itemNum = 0;
//     return function () {
//          itemNum += 1;
//         return itemNum
//     }
// })();

function orderedItems() {
        let itemNum = 0;
        return (console.log((itemNum += 1)));
    // console.log(e);

}
