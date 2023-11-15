document.addEventListener("DOMContentLoaded", function () {
  const cursor = document.createElement("div");
  cursor.classList.add("custom-cursor");
  document.body.appendChild(cursor);

  document.addEventListener("mousemove", function (e) {
    cursor.style.left = e.pageX - cursor.offsetWidth / 2 + "px";
    cursor.style.top = e.pageY - cursor.offsetHeight / 2 + "px";
  });
});
