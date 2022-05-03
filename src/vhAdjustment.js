function vhAdjustment() {
  document
    .getElementById("container")
    .style.setProperty("height", window.innerHeight + "px");

  window.addEventListener("resize", () => {
    document
      .getElementById("container")
      .style.setProperty("height", window.innerHeight + "px");
  });
}

export default vhAdjustment;
