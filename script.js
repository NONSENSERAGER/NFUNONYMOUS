document.getElementById("messageForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  let msg = document.getElementById("message").value;
  if (msg.trim() === "") return;

  let container = document.getElementById("messages");
  let p = document.createElement("p");
  p.textContent = "🕵️‍♂️ Anonymous: " + msg;
  container.prepend(p);
  
  document.getElementById("message").value = "";
});
