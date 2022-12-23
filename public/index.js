let socket = new WebSocket(`ws://${location.host}/`);

socket.onmessage = function (event) {
  document.getElementById("seconds").innerText = event.data;
};