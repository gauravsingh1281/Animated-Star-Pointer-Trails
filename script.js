const bodyElement = document.querySelector("body");
bodyElement.addEventListener("mousemove", (event) => {
  const xAxisPosition = event.offsetX;
  const yAxisPosition = event.offsetY;
  const spanElement = document.createElement("span");
  spanElement.style.left = xAxisPosition + "px";
  spanElement.style.top = yAxisPosition + "px";
  let heartSize = Math.random() * 100;
  spanElement.style.width = heartSize + "px";
  spanElement.style.height = heartSize + "px";
  bodyElement.appendChild(spanElement);
  setTimeout(() => {
    spanElement.remove();
  }, 3000);
});
