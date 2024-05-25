const button = document.getElementById("button");
const flex = document.getElementById("flex");

button.onclick = () => {
  const newBlock = document.createElement('div')
  newBlock.className = "block"
  flex.appendChild(newBlock)
};
