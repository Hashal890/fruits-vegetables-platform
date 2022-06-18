function dropdownFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

function cartData(){
  let data = JSON.parse(localStorage.getItem("cartproduct"));
  // console.log(data);
  let cart_qty = document.getElementById('cart-item-qty');
  let congrats_minis = document.getElementById("free-prod-msg");
  let free_minis = document.getElementById("free-minis");
  let cart_total_amount = document.getElementById("subtotal");
  let mm_container = document.getElementById("cart-product");
  cart_item(data,cart_qty);
  minis_msg(data,congrats_minis,free_minis);
  subtotal(data,cart_total_amount);
  cart_products(data,mm_container,cart_total_amount);
  // let cart_cont = document.getElementById("cart-cont");
  // document.getElementById("cart-close").addEventListener("click", mm_remove_cart(cart_cont));
}

function cart_item(data,cart_qty) {
  cart_qty.innerText = data.length;
};

function minis_msg(data,congrats_minis,free_minis){
  if (data.length === 1) {
   
    congrats_minis.innerHTML = "Buy 1 more item to get 2 free minis";
  } else if (data.length >= 2) {
    congrats_minis.innerHTML =
      "Congratulations! You Get 2 D&K MINI Products For FREE";
    free_minis.innerText = "PLEASE SELECT YOUR FREE MINIS";
  }
};

function subtotal(data,cart_total_amount){
  if (data.length !== 0) {
    let sum = 0;
    data.forEach(function (el) {
      sum += Number(el.Dprice) * Number(el.qty);
    });
    cart_total_amount.innerText = `Rs : ${sum}`;
  }
};

function cart_products(data,mm_container,cart_total_amount){
  if (data.length === 0) {
    empty_cart(mm_container);
  } else {
    data.forEach(function (el, index) {
      let div1 = document.createElement("div");
      let div2 = document.createElement("div");
      div2.setAttribute("id", "bag-product");
      div2.addEventListener("click", function () {
        mm_show_prod();
      });
      let div3 = document.createElement("div");
      div3.setAttribute("id", "prod-pr-qty");
      let div4_qty = document.createElement("div");
      div4_qty.setAttribute("id", "prod-qty");
      let div5 = document.createElement("div");
      div5.setAttribute("id", "mm-subtract-qty");
      let div6 = document.createElement("div");
      let div7 = document.createElement("div");
      div7.setAttribute("id", "mm-add-qty");
      let img = document.createElement("img");
      img.src = el.simg2;
      let content = document.createElement("div");
      content.setAttribute("id", "mm-xyz");
      content.innerText = el.det;
      let ml = document.createElement("p");
      ml.innerText = `${el.ml}ml`;
      let cancel = document.createElement("p");
      cancel.innerText = "X";
      cancel.setAttribute("id", "mm-remove");
      cancel.addEventListener("click", function () {
        remove_prod(index,data);
      });
      div5.innerHTML = "-";
      div6.innerHTML = el.qty;
      div7.innerHTML = "+";
      let price = document.createElement("p");
      price.setAttribute("id", "mm-price");
      price.innerText = `Rs : ${Number(el.Dprice)}`;
      div5.addEventListener("click", function () {
        reduce(data,el, div6,cart_total_amount);
      });
      div7.addEventListener("click", function () {
        add(data,el, div6,cart_total_amount);
      });
      div2.append(img, content, ml, cancel);
      div4_qty.append(div5, div6, div7);
      div3.append(div4_qty, price);
      div1.append(div2, div3);
      mm_container.append(div1);
    });
  }
};

function empty_cart(mm_container) {
  mm_container.innerHTML = "YOUR CART IS EMPTY. LET'S FILL IT UP";
}

function remove_prod(index,data) {
  event.preventDefault();
  data.splice(index, 1);
  localStorage.setItem("cartproduct", JSON.stringify(data));
  window.location.reload();
}

function reduce(data, el, div6,cart_total_amount) {
  if (div6.innerHTML >= 2) {
    div6.innerHTML--;
    el.qty = div6.innerHTML;
    subtotal(data,cart_total_amount);
    localStorage.setItem("cartproduct", JSON.stringify(data));
  }
}

function add(data,el, div6,cart_total_amount) {
  div6.innerHTML++;
  el.qty = div6.innerHTML;
  subtotal(data,cart_total_amount);
  localStorage.setItem("cartproduct", JSON.stringify(data));
}

function mm_remove_cart(cart_cont) {
  event.preventDefault();
  cart_cont.remove();
}