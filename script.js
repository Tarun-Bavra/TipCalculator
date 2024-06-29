let inp = document.querySelector("input");
let output = document.querySelector(".tip");
let btn = document.querySelector("button");
btn.addEventListener("click", calculateTip);
function calculateTip() {
  let bill = inp.value;
  let tip = bill * 0.02;
  output.innerHTML = `<p>Your Tip should be Rupees ${tip}</p>`;
}
