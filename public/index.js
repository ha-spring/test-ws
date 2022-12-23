let socket = new WebSocket(`wss://${location.host}/`);

socket.onmessage = function (event) {
  document.getElementById("seconds").innerText = event.data;
};