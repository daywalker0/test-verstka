const hamb = document.querySelector(".hamb");
const sidebar = document.querySelector(".sidebar");
const body = document.body;

hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
  if (this.classList.contains("hamb")) {
    sidebar.classList.toggle("active");
  }
}
