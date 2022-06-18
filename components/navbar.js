function navbar(){
    return `<div id="inside_navbar">
    <div id="left_side">
<div class="dropdown">
  <button onclick="dropdownFunction()" class="dropbtn"><i class="fa-solid fa-align-left left_i"></i></button>
  <div id="myDropdown" class="dropdown-content">
    <a href="./products.html">WHAT'S NEW?</a>
    <a href="./products.html">PARTY TOP PICKS</a>
    <a href="./products.html">BEST SELLERS</a>
    <a href="./products.html">SHOP BY INGREDIENTS</a>
    <a href="./products.html">SHOP BY CONCERN</a>
    <a href="./products.html">SHOP ALL PRODUCTS</a>
    <a href="./products.html">HAIR CARE</a>
    <a href="./products.html">BODY CARE</a>
    <a href="./products.html">IKWI NUTRITION</a>
  </div>
</div>
</div>
<div id="dot_keylogo">
    <a href="./index.html"><img src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/unnamed_250x_200x_2x_260x_24408e11-6e3a-4a0c-8327-74d0455f7696_260x.jpg?v=1646547348" alt=""></a>
</div>
<div id="right_side">
    <input id="right_input" type="text" placeholder="Search">
    <a href="./cart.html"><i class="fa-solid fa-cart-plus right_i"></i></a>
    <a href="#"><i class="fa-solid fa-location-dot right_i"></i></a>
    <a href="./signup.html"><i class="fa-solid fa-user right_i"></i></a>
</div>
</div>
<hr>`
}
function footer(){
    return `<hr>
    <div id="footer">
        <div>
            <ul><h3>GET TO KNOW US</h3>
                <li><a href="">ABOUT US</a> </li>
                <li><a href=""> CONTACT US</a></li>
                <li><a href=""> EARTHCARE</a></li>
                <li><a href="">AFFILIATE PROGRAM</a></li>
                <li><a href="">TERMS & CONDITION</a></li>
                <li><a href="">REFUND & CANCELLATION</a></li>
                <li><a href="">PRIVACY POLICY</a></li>
                <li><a href="">ORDER & SHIPPING</a></li>
                <li><a href="">PAYMENT TERMS</a></li>
                <li><a href="">TERMS OF SERVICE</a></li>
                <li><a href="">REFUND POLICY</a></li>
            </ul>
        </div>
        <div>
            <ul>
                <h3>ALSO AVAILABLE ON</h3>
                <li><a href="">NYKAA</a></li>
                <li><a href="">AMAZON</a></li>
                <li><a href="">FLIPKART</a></li>
                <li><a href="">MYNTRA</a></li>
                   
            </ul>
        </div>
        <div>
            <ul><h3>STAY UPDATED</h3>
            <div id="input">
                <input id="inp" type="text" placeholder="Your Email Address">
                <button>SUBMIT</button>

            </div>
            <div id="follow_us">
                <span>FOLLOW US</span>
                <div id="follow_us-div">
                <ul>
                    <li><a href="https://www.facebook.com/"><i class="fa-brands fa-facebook-f"></i></a></li>
                    <li><a href="https://www.instagram.com/"><i class="fa-brands fa-instagram"></i></a></li>
                    <li><a href="https://www.youtube.com/"><i class="fa-brands fa-youtube"></i></a></li>
                </ul>
            </div>
            </div>

            <li>© 2022 Dot & Key</li>
        </ul>
        </div>
    </div>`
}
export { navbar,footer }