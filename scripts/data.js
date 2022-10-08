let Data = JSON.parse(localStorage.getItem("productData")) || [];

let form = document.querySelector("form");
form.addEventListener("submit", () => {
  event.preventDefault();
  let obj = {
    img: form["img"].value,
    det: form["det"].value,
    Mprice: form["Mprice"].value,
    Dprice: form["Dprice"].value,
    Limg: form["Limg"].value,
    ml: form["ml"].value,
    ins: form["ins"].value,
    simg2: form["simg2"].value,
    simg3: form["simg3"].value,
    simg4: form["simg4"].value,
    simg5: form["simg5"].value,
    simg6: form["simg6"].value,
    filter: form["filter"].value,
    sort: form["sort"].value,
  };

  Data.push(obj);
  localStorage.setItem("productData", JSON.stringify(Data));

  location.reload();
});
