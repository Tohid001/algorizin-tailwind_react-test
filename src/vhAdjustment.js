function vhAdjustment() {
  document
    .getElementById("container")
    .style.setProperty("height", window.innerHeight + "px");

  window.addEventListener("resize", () => {
    console.log(window.innerHeight + "px");
    document
      .getElementById("container")
      .style.setProperty("height", window.innerHeight + "px");
  });
}

export default vhAdjustment;
