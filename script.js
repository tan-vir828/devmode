document.addEventListener("DOMContentLoaded", function () {
    // Set the current date in the navbar
    const currentDateElement = document.getElementById("current-date");
    const today = new Date();
    currentDateElement.textContent = today.toLocaleDateString();

    // Task completion logic
    const completeButtons = document.querySelectorAll(".complete-btn");
    const historyList = document.getElementById("history-list");

    completeButtons.forEach(button => {
        button.addEventListener("click", function () {
            const taskCard = this.closest("section");
            const taskName = taskCard.querySelector("h2").textContent;
            
            const historyItem = document.createElement("li");
            historyItem.textContent = `${taskName}  Completed on ${new Date().toLocaleDateString()}`;
            historyList.appendChild(historyItem);

            this.disabled = true;
            this.classList.add("bg-gray-400", "cursor-not-allowed");
            this.classList.remove("bg-blue-500", "hover:bg-blue-700");
        });
    });
});
