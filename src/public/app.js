const buttons = document.querySelector(".buttons");
const showLink = document.querySelector(".show-link");
const drop = document.querySelector(".drop");
const fileimage = document.querySelector(".file-upload .cabinet-img");
const downloadLink = document.querySelector(".show-link .download-url");
const fileinput = document.querySelector(".fileinput");
const downloadBtn = document.querySelector(".downloadBtn");
const chooseFile = document.querySelector(".chooseFile");
const URL = document.querySelector(".URL");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".copy-button");
const toast = document.querySelector(".toast");

drop.addEventListener("dragover", (e) => {
  e.preventDefault();
  if (!drop.classList.contains("dragged")) {
    fileimage.classList.add("dragged");
  }
});

drop.addEventListener("dragleave", () => {
  fileimage.classList.remove("dragged");
});
fileinput.addEventListener("change", () => {
  showLink.classList.add("show");
  upload();
});

drop.addEventListener("drop", (e) => {
  e.preventDefault();
  const files = e.dataTransfer.files;
  if (files.length===1) {
    fileinput.files = files;
    upload();
  }
  drop.classList.remove("dragged");
  showLink.classList.add("show");
});
btn2.addEventListener("click", () => {
  downloadLink.select();
  document.execCommand("copy");
  showToast("Copied to clipboard");
});

chooseFile.addEventListener("click", () => {
  fileinput.click();
});

function upload() {
  const file = fileinput.files[0];
  const formdata = new FormData();
  formdata.append("myfile", file);
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === xhr.DONE) {
      const string = xhr.response;
      downloadLink.value = string;
      btn1.href = string;
    }
  };
  xhr.open("post", `/api/files`);
  xhr.send(formdata);
}

const showToast = (msg) => {
  toast.innerText = msg;
  toast.classList.add("shows");
  setTimeout(() => {
    toast.classList.remove("shows");
  }, 2000);
};
