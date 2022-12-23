let socket = new WebSocket("ws://192.168.31.62:3000/");

socket.onmessage = function (event) {
  document.getElementById("seconds").innerText = event.data;
};