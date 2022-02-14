document.getElementById('deposit-button').addEventListener('click',function(){
    let depositInput = document.getElementById('deposit-input');
    let  depositInputValue = parseFloat( depositInput.value); 
    

    let depositTotal = document.getElementById('deposit-total');
    let depositTotalValue = parseFloat(depositTotal.innerText) ;



   let all = depositInputValue + depositTotalValue;
   depositTotal.innerText = (all);
   depositInput.value='';



   let balanceTotal = document.getElementById('balance-total');
   let  totalValue  =  parseFloat (balanceTotal.innerText);


   let fullDeposit = depositInputValue +totalValue;
   balanceTotal.innerText = fullDeposit;




    


    


})







// console.log(depositInputValue);




document.getElementById('withdraw-button').addEventListener('click',function(){
    let withdrawInput = document.getElementById('withdraw-input');
    let withdrawValue = parseFloat(withdrawInput.value);
    

    let withdrawTotal = document.getElementById('withdraw-total');
    let totalValue = parseFloat(withdrawTotal.innerText) ;


    let total = totalValue+withdrawValue; 
    withdrawTotal.innerText= (total) ;
    withdrawInput.value = '';


    let totalInput = document.getElementById('balance-total');
    let totalvalue = parseFloat(totalInput.innerText) ;
    let got =  totalvalue - withdrawValue;
    totalInput.innerText = (got);




})

