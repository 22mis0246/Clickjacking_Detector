window.addEventListener("load", () => {
  const iframes = document.getElementsByTagName("iframe");
  let risky = false;

  for (let iframe of iframes) {
    const style = window.getComputedStyle(iframe);

    // Check for hidden iframe (clickjacking sign)
    if (
      style.opacity === "0" ||
      style.visibility === "hidden" ||
      iframe.width < 50 ||
      iframe.height < 50
    ) {
      risky = true;
      break;
    }
  }

  if (risky) {
    const warning = document.createElement("div");
    warning.innerText = "⚠ Possible Clickjacking Detected (Hidden iframe)";

    warning.style.position = "fixed";
    warning.style.top = "0";
    warning.style.left = "0";
    warning.style.width = "100%";
    warning.style.backgroundColor = "red";
    warning.style.color = "white";
    warning.style.padding = "10px";
    warning.style.zIndex = "9999";
    warning.style.textAlign = "center";

    document.body.appendChild(warning);
  }
});