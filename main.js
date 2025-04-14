
function searchFunction() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let items = document.querySelectorAll(".software-item");
    
    items.forEach(item => {
        let text = item.textContent.toLowerCase();
        if (text.includes(input)) {
            item.classList.remove("hidden");
        } else {
            item.classList.add("hidden");
        }
    });
}
function goToMenu() {
    window.location.href = "index.html"; // Thay bằng trang menu chính của bạn
}

