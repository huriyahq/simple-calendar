// DECLARE VARIABLES
const select = document.querySelector("select");
const list = document.querySelector("ul");
const h1 = document.querySelector("h1");

// EVENT HANDLER TO DETECT WHEN VALUE IN DROPDOWN IS CHANGED
select.addEventListener("change", () => {
// Save selected month in choice variable
    const choice = select.value;
    // Start of with the days variable holding 31 days as default
    let days = 31;
    // CONDITIONAL STATEMENT
    if (choice === "February") {
        // If the user chooses February, change value in days variable to 28
        days = 28;
    } else if (choice === "April" || choice === "June" || choice === "September" || choice === "November") {
        days = 30;
        // If the user chooses April, June, September or November, change the value in days variable to 30
    }
    // Now call the createCalendar function with the stored values in days and choice passed in as params
    createCalendar(days, choice);
});


// FUNCTION TO DRAW THE CALENDAR AND DISPLAY SELECTED MONTH IN H1
// It takes two params: days and choice
function createCalendar(days, choice) {
    list.innerHTML = "";
    // h1 to display the user's chosen month
    h1.textContent = choice;
    // For loop sets calendar start date as 1
    // The max number of days is determined by the value in the days variable
    // Increment by one until it reaches the max number of days in days variable
    for (let i = 1; i <= days; i++) {
        // Create an li for each number the loop generates for each day. Save this to a listItem variable
        const listItem = document.createElement("li");
        // The text content for the list item will be the day the loop generates
        listItem.textContent = i;
        // Append the listItem value to list (which is the ul that was declared in global scope)
        list.appendChild(listItem);
    }
}

// run function with the default view as January with 31 days
createCalendar(31, "January");