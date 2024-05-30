export const changeActiveButton = (button) => {
  const buttonGraduation = document.getElementById("graduation");
  const buttonMaster = document.getElementById("master");
  const buttonDev = document.getElementById("dev");
  const buttonPos = document.getElementById("pos");

  const divGraduation = document.getElementById("graduation-div");
  const divMaster = document.getElementById("master-div");
  const divDev = document.getElementById("dev-div");
  const divPos = document.getElementById("pos-div");

  if (button === 1) {
    buttonGraduation.classList.add("active-button");
    buttonMaster.classList.remove("active-button");
    buttonDev.classList.remove("active-button");
    buttonPos.classList.remove("active-button")

    divGraduation.classList.remove("hidden");
    divMaster.classList.add("hidden");
    divDev.classList.add("hidden");
    divPos.classList.add("hidden");

    divGraduation.classList.add("animate__fadeInDown");
    divMaster.classList.remove("animate__fadeInDown");
    divDev.classList.remove("animate__fadeInDown")
    divPos.classList.remove("animate__fadeInDown")
  }
  if (button === 2) {
    buttonGraduation.classList.remove("active-button");
    buttonPos.classList.add("active-button");
    buttonMaster.classList.remove("active-button");
    buttonDev.classList.remove("active-button");

    divGraduation.classList.add("hidden");
    divPos.classList.remove("hidden");
    divMaster.classList.add("hidden");
    divDev.classList.add("hidden");

    divGraduation.classList.remove("animate__fadeInDown");
    divPos.classList.add("animate__fadeInDown");
    divMaster.classList.remove("animate__fadeInDown");
    divDev.classList.remove("animate__fadeInDown")
  }

  if (button === 3) {
    buttonGraduation.classList.remove("active-button");
    buttonPos.classList.remove("active-button")
    buttonMaster.classList.add("active-button");
    buttonDev.classList.remove("active-button");

    divGraduation.classList.add("hidden");
    divPos.classList.add("hidden");
    divMaster.classList.remove("hidden");
    divDev.classList.add("hidden");

    divGraduation.classList.remove("animate__fadeInDown");
    divPos.classList.remove("animate__fadeInDown")
    divMaster.classList.add("animate__fadeInDown");
    divDev.classList.remove("animate__fadeInDown")
  }

  if (button === 4) {
    buttonGraduation.classList.remove("active-button");
    buttonPos.classList.remove("active-button")
    buttonMaster.classList.remove("active-button");
    buttonDev.classList.add("active-button");

    divGraduation.classList.add("hidden");
    divPos.classList.add("hidden");
    divMaster.classList.add("hidden");
    divDev.classList.remove("hidden");

    divGraduation.classList.remove("animate__fadeInDown");
    divPos.classList.remove("animate__fadeInDown")
    divMaster.classList.remove("animate__fadeInDown");
    divDev.classList.add("animate__fadeInDown")
  }

}