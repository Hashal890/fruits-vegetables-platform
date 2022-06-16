let prd=JSON.parse(localStorage.getItem("product"));
console.log(prd);
let bimg=document.createElement("img");
bimg.src=prd.img;
bimg.setAttribute("id","bimg")
document.querySelector("#RBimg").append(bimg);
let det=document.createElement("h2");
det.innerText=prd.det;
det.setAttribute("id","det");
let ml=document.createElement("button");
ml.innerText=prd.ml+"ml";
ml.setAttribute("id","ml")
let price=document.createElement("div");
price.setAttribute("id","price");
let mprice=document.createElement("h1");
mprice.innerText="Rs: "+prd.Mprice;
mprice.setAttribute("id","mprice");
let dprice=document.createElement("h1");
dprice.innerText="Rs: "+prd.Dprice;
dprice.setAttribute("id","dprice");
price.append(mprice,dprice);
let tax=document.createElement("p");
tax.innerText="Inclusive of All Taxes";
tax.setAttribute("id","tax");
let quant=document.createElement("p");
quant.innerText="Quantity";
quant.setAttribute("id","quant")
document.querySelector("#RSbox").append(det,ml,price,tax,quant);

//Button quantity
document.querySelector("#Rquantity>div:nth-child(3)").addEventListener("click",addFun)
document.querySelector("#Rquantity>div:nth-child(1)").addEventListener("click",subFun)
var q = 1;
function addFun(){
    document.querySelector("#Rquantity>div:nth-child(2)").innerText = q
    q++
}

function subFun(){
    document.querySelector("#Rquantity>div:nth-child(2)").innerText = q
    q--
     
}
var x = document.querySelector("#Rquantity>div:nth-child(2)").innerText;
let ins=document.createElement("p");
ins.innerText=prd.ins;
ins.setAttribute("id","ins")
document.querySelector("#Rins").append(ins)

//small images
let simg1=document.createElement("img");
simg1.src=prd.img;
simg1.setAttribute("id","simg1")
document.querySelector("#RSimg>div:nth-child(1)").append(simg1)
let simg2=document.createElement("img");
simg2.src=prd.simg2;
simg2.setAttribute("id","simg2")
document.querySelector("#RSimg>div:nth-child(2)").append(simg2)
let simg3=document.createElement("img");
simg3.src=prd.simg3;
simg3.setAttribute("id","simg3")
document.querySelector("#RSimg>div:nth-child(3)").append(simg3)
let simg4=document.createElement("img");
simg4.src=prd.simg4;
simg4.setAttribute("id","simg4")
document.querySelector("#RSimg>div:nth-child(4)").append(simg4)
let simg5=document.createElement("img");
simg5.src=prd.simg5;
simg5.setAttribute("id","simg5")
document.querySelector("#RSimg>div:nth-child(5)").append(simg5)
let simg6=document.createElement("img");
simg6.src=prd.simg6;
simg6.setAttribute("id","simg6")
document.querySelector("#RSimg>div:nth-child(6)").append(simg6)
let limg=document.createElement("img");
limg.src=prd.Limg;
limg.setAttribute("id","limg")
document.querySelector("#RBGimg").append(limg);

