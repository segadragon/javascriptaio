const stateButton = document.getElementById("oregonButton");
stateButton.addEventListener("click", () =>
  import("./listing011203.js").then((OregonInfo) => {
    alert(`${OregonInfo.stateName}'s state bird is ${OregonInfo.stateBird}.`);
  })
);
