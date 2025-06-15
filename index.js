const form = document.getElementById("guest-form");
const input = document.getElementById("guest-input")
const guestList = document.getElementById("guest-list");

form.addEventListener("submit", function (event){
    event.preventDefault();  //prevent the page from reloading

   const guestName = input.value.trim(); 
   if(guestName === "")return; //Don't allow empty input

   // ensure the list has already 10 entries
   if(guestList.children.length >= 10){
    alert("You've reached the maximum number of guests(10)");
    return;
   }

   const listOfGuest = document.createElement("li");
   listOfGuest.textContent = `${guestName}`;

// RSVP toggle button
   const rsvpButton = document.createElement("button");
   rsvpButton.textContent = "Attending";
   rsvpButton.className = "toggle";
   rsvpButton.addEventListener("click", () => {
   rsvpButton.textContent = rsvpButton.textContent === "Attending" ? "Not Attending" : "Attending";
  });

//remove button
const removeButton = document.createElement("button");
removeButton.textContent = "Remove";
removeButton.className = "remove";
removeButton.addEventListener("click", () => {
listOfGuest.remove();
});
// edit button
const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.className = "edit";
  editButton.addEventListener("click", () => {
    const editName = prompt("Edit Name:", guestName);
    if(editName){
      listOfGuest.firstChild.textContent = editName;
        }
  });

  // timestamp showing when the guest was added
 const timestamp = document.createElement("small");
  const now = new Date().toLocaleTimeString();
  timestamp.textContent = `Added at ${now}`;
  
// add all elemnts
listOfGuest.append(timestamp, rsvpButton, editButton, removeButton);
guestList.appendChild(listOfGuest);

input.value = "";

});



  
  
 