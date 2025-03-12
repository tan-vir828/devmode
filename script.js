document.addEventListener("DOMContentLoaded", function () {
    const completeButtons = document.querySelectorAll(".complete-btn");
    const uncompletedCountElement = document.getElementById("uncompleted-count");
    const historyList = document.getElementById("history-list");
    let uncompletedCount = completeButtons.length;

    function updateUncompletedCount() {
        uncompletedCountElement.textContent = uncompletedCount;
    }

    completeButtons.forEach(button => {
        button.addEventListener("click", function () {
            const taskCard = this.closest("section");
            const taskName = taskCard.querySelector("h2").textContent;
            const taskDeadline = taskCard.querySelector("span.text-black").textContent;
            
            // Move task to history
            const historyItem = document.createElement("li");
            historyItem.textContent = `${taskName} - Completed on ${new Date().toLocaleDateString()}`;
            historyList.appendChild(historyItem);

            // Disable button
            this.disabled = true;
            this.classList.add("bg-gray-400", "cursor-not-allowed");
            this.classList.remove("bg-blue-500", "hover:bg-blue-700");

            // Update counter
            uncompletedCount--;
            updateUncompletedCount();
        });
    });

    // Initialize count
    updateUncompletedCount();
});
