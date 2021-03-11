
var product_total_amt=document.getElementById('product_total_amt');
var shipping_charge=document.getElementById('shipping_charge');
var total_cart_amt=document.getElementById('total_cart_amt');
var discountCode=document.getElementById('discountcode1');


const decreaseNumber=(incdec,itemprice)=>
{
    var itemVal=document.getElementById(incdec);
    var itemprice=document.getElementById(itemprice);
    console.log(itemprice.innerHTML)
    if(itemVal.value<=0)
    {
        itemVal.value=0;
        alert('0 quantity is not allowed')
    }
    else
    {
        itemVal.value=parseInt(itemVal.value)-1;
        itemVal.style.background='#fff';
        itemVal.style.color="#000";
        itemprice.innerHTML=parseInt(itemprice.innerHTML)  -15;
        product_total_amt.innerHTML=parseInt(product_total_amt.innerHTML)  -15;
        total_cart_amt.innerHTML=parseInt(product_total_amt.innerHTML)  +parseInt(shipping_charge.innerHTML);


    }
}
const increaseNumber=(incdec,itemprice)=>
{
    var itemVal=document.getElementById(incdec);
    var itemprice=document.getElementById(itemprice);
    if(itemVal.value>=5)
    {
        itemVal.value=5;
        alert("max 5 items are allowed");
        itemVal.style.background='red';
        itemVal.style.color="#fff";
    }
    else
    {
        itemVal.value=parseInt(itemVal.value)+1;
        itemprice.innerHTML=parseInt(itemprice.innerHTML) +15;
        product_total_amt.innerHTML=parseInt(product_total_amt.innerHTML)  +15;
        total_cart_amt.innerHTML=parseInt(product_total_amt.innerHTML)  +parseInt(shipping_charge.innerHTML);
    }
}

const discount_code=()=>
{
    let totalamcurr=parseInt(total_cart_amt.innerHTML);
    let error_trw=document.getElementById('error_trw');
    if(discountCode.value==='subrata')
    {
        let newtotatal=totalamcurr-15;
        total_cart_amt.innerHTML=newtotatal;
        error_trw.innerHTML="Your Code is Applied";
    }
    else
    {
        error_trw.innerHTML="Invalid Code !! Try again";
    }
}