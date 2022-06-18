//let data = JSON.parse(localStorage.getItem("productData")) || []; //***  Needs to be changed

let data = JSON.parse(localStorage.getItem("cartproduct"));

console.log(data);

localStorage.setItem("mm_cart_prod", JSON.stringify(data));
console.log(data);
let cart_qty = document.getElementById("cart-item-qty");

let congrats_minis = document.getElementById("free-prod-msg");

let free_minis = document.getElementById("free-minis");

let cart_total_amount = document.getElementById("subtotal");

let cart_item = () => {
  cart_qty.innerText = `(${data.length})`; //***

  console.log(data);
};

let minis_msg = () => {
  if (data.length === 1) {
    //***
    congrats_minis.innerHTML = "Buy 1 more item to get 2 free minis";
  } else if (data.length >= 2) {
    //***
    congrats_minis.innerHTML =
      "Congratulations! You Get 2 D&K MINI Products For FREE";
    free_minis.innerText = "PLEASE SELECT YOUR FREE MINIS";
  }
};

let subtotal = () => {
  if (data.length !== 0) {
    //***
    let sum = 0;

    data.forEach(function (el) {
      //***

      sum += el.Dprice * el.qty;
    });

    cart_total_amount.innerText = `Rs : ${sum}`;
  }
};

let cart_products = () => {
  let mm_container = document.getElementById("cart-product");

  if (data.length === 0) {
    //***
    empty_cart(mm_container);
  } else {
    data.forEach(function (el, index) {
      //***

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
        remove_prod(index);
      });

      div5.innerHTML = "-";

      div6.innerHTML = el.qty;

      div7.innerHTML = "+";

      let price = document.createElement("p");
      price.setAttribute("id", "mm-price");
      price.innerText = `Rs : ${Number(el.Dprice)}`;

      div5.addEventListener("click", function () {
        reduce(el, div6, price);
      });

      div7.addEventListener("click", function () {
        add(el, div6, price);
      });

      div2.append(img, content, ml, cancel);

      div4_qty.append(div5, div6, div7);

      div3.append(div4_qty, price);

      div1.append(div2, div3);

      mm_container.append(div1);
    });
  }
};

function mm_show_prod() {
  console.log("working"); // ******************Modification required*************************
}

function empty_cart(mm_container) {
  mm_container.innerHTML = "YOUR CART IS EMPTY. LET'S FILL IT UP";
}

function remove_prod(index) {
  event.preventDefault();

  data.splice(index, 1); //***

  localStorage.setItem("cartproduct", JSON.stringify(data)); //***
  //   window.location.reload();
}

function reduce(el, div6) {
  if (div6.innerHTML >= 2) {
    div6.innerHTML--;
    el.qty = div6.innerHTML;
    subtotal();
    localStorage.setItem("cartproduct", JSON.stringify(data));
  }
}

function add(el, div6) {
  div6.innerHTML++;
  el.qty = div6.innerHTML;
  subtotal();
  localStorage.setItem("cartproduct", JSON.stringify(data)); //***
}

export { cart_item, minis_msg, subtotal, cart_products };
