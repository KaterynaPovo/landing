const copyButton = document.getElementById("copy");
copyButton.addEventListener("click", (event) => {
  const content = document.getElementById("to-copy").textContent;
  navigator.clipboard.writeText(content);
});
