var database = firebase.database();

database.ref("slots").on("value", function(snapshot) {
  var slots = snapshot.val();
  var freeCount = 0;
  var total = 0;

  for (var slot in slots) {
    total++;

    var slotDiv = document.getElementById(slot);
    var statusDiv = slotDiv.querySelector(".slot-status");

    slotDiv.classList.remove("free", "occupied");

    if (slots[slot] === "free") {
      slotDiv.classList.add("free");
      statusDiv.innerText = "FREE";
      freeCount++;
    } else {
      slotDiv.classList.add("occupied");
      statusDiv.innerText = "OCCUPIED";
    }
  }

  document.getElementById("totalSlots").innerText = total;
  document.getElementById("freeSlots").innerText = freeCount;
});
