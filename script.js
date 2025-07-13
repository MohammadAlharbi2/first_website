document.getElementById("colorBtn").addEventListener("click", () => {
  const colors = ["#ff5e57", "#1e90ff", "#28a745", "#ffc107"];
  const textColors = ["#ffffff", "#000000"];
  
  const randomBg = colors[Math.floor(Math.random() * colors.length)];
  const randomText = textColors[Math.floor(Math.random() * textColors.length)];
  
  document.body.style.backgroundColor = randomBg;
  document.body.style.color = randomText;
});
