var database = firebase.database();

database.ref("slots").on("value", function(snapshot) {
  var slots = snapshot.val();
  var freeCount = 0;
  var total = 0;

  for (var slot in slots) {
    total++;

    var element = document.getElementById(slot);
    element.classList.remove("free", "occupied");

    if (slots[slot] === "free") {
      element.classList.add("free");
      freeCount++;
    } else {
      element.classList.add("occupied");
    }
  }

  document.getElementById("totalSlots").innerText = total;
  document.getElementById("freeSlots").innerText = freeCount;
});
