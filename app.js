
function updateProductNumber(product, price, isIncreasing){
    const ProductInput = document.getElementById(product + '-number');
    let productNumber = ProductInput.value;
    if(isIncreasing == true){
        productNumber = parseInt(productNumber) + 1; 
    }
    else if(productNumber > 0){
        productNumber = parseInt(productNumber) - 1;
    }
    ProductInput.value = productNumber;
    //update total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
}
// phone increase decrease events
document.getElementById('phone-plus').addEventListener('click',
 function(){
    updateProductNumber('phone', 1219, true);
});
document.getElementById('phone-minus').addEventListener('click',
 function(){
    updateProductNumber('phone', 1219, false);
})


// button handler for case quantity increse and decrease with price
document.getElementById('case-plus').addEventListener('click', function(){
    updateProductNumber('case', 59, true);
});
document.getElementById('case-minus').addEventListener('click', function(){
    updateProductNumber('case', 59, false);
});