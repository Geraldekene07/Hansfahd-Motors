document.addEventListener("click", function (e) {
    if (e.target.classList.contains("gallery-img")) {
        const src = e.target.getAttribute("src");
        document.querySelector(".modal-img").src = src;
        const myModal = new bootstrap.Modal(document.getElementById("gallery-modal"));
        myModal.show();
    }
});


const result = document.querySelectorAll(".notif-icon-badge");

const myOrders = document.querySelector(".addItem");

myOrders.addEventListener("click", (initialValue) => {
    initialValue = 0;
  result.innerHTML = initialValue ++;
});


