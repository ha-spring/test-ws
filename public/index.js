let socket = new WebSocket("ws://10.217.9.57:10000/");

socket.onmessage = function (event) {
  document.getElementById("seconds").innerText = event.data;
};