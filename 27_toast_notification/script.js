const button = document.getElementById("button");
const toasts = document.getElementById("toasts");
const errorData = document.getElementById("error-data").innerHTML;

const messages = [
  "Admin data updated successfully", // 0
  "Message 2", // 1
  "Message 3", // 2
  "Message 4", // 3
  "Message 5", // 4
  "Message 6", // 5
];
const types = ["info", "success", "error"];
// console.log(button.value);
// console.log(messages[button.value]);

// button.addEventListener("click", () => createNotification());
button.addEventListener("click", () =>
  createNotification(errorData ? errorData : messages[button.value], types[2])
);

function createNotification(message = null, type = null) {
  // console.log("123");
  const notif = document.createElement("div");
  notif.classList.add("toast");
  notif.classList.add(type ? type : getRandomtypes());

  // notif.innerText = getRandomMessage();
  // notif.innerText = messages[button.value];
  notif.innerText = message ? message : messages[button.value];
  // notif.innerText = message ? message : getRandomMessage();

  toasts.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 3000);
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}

function getRandomtypes() {
  return types[Math.floor(Math.random() * types.length)];
}
