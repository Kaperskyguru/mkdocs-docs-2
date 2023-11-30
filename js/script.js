document.querySelectorAll("article pre").forEach((element) => {
  const wrapper = document.createElement("div");

  const header = document.createElement("div");
  const red = document.createElement("div");
  const yellow = document.createElement("div");
  const green = document.createElement("div");

  // Adding CSS classes
  wrapper.classList.add("custom-highlighter-wrapper");
  header.classList.add("custom-highlighter-header");
  green.classList.add("custom-highlighter-green");
  red.classList.add("custom-highlighter-red");
  yellow.classList.add("custom-highlighter-yellow");

  element.insertAdjacentElement("beforebegin", wrapper);

  // Appending
  header.appendChild(red);
  header.appendChild(yellow);
  header.appendChild(green);

  wrapper.appendChild(header);
  wrapper.appendChild(element);
});
