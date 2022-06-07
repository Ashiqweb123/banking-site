document.getElementById('deposit-btn').addEventListener('click',function(){
    const depositInput=document.getElementById('user-deposit')
    const depositAmount=depositInput.value
    
    const depositTotal=document.getElementById('deposit-total')
    const previousDepositAmount=depositTotal.innerText
    const newDepositAmount=parseFloat(
    depositAmount)+ parseFloat(previousDepositAmount)
 
    depositTotal.innerText=newDepositAmount;
//balace update
 const balanceTotal=document.getElementById('balance-total')
 const balanceTotalText=balanceTotal.innerText
 const balanceTotalAmount=parseFloat(balanceTotalText)
 const newBalanceTotal=newDepositAmount+balanceTotalAmount
 balanceTotal.innerText=newBalanceTotal

    depositInput.value= ''
});

//handlw withdraw 
document.getElementById('withdraw-btn').addEventListener('click',function(){
    const withdrawInput=document.getElementById('user-withdraw')
    
    const withdrawInputText=withdrawInput.value;
    const withdrawInputAmount=parseFloat(withdrawInputText)

    const withdrwaTotal=document.getElementById('withdraw-total')
    const withdrwaTotalText=withdrwaTotal.innerText
    const withdrwaTotalTextAmount=parseFloat(withdrwaTotalText)
    const totalWithDraw=withdrawInputAmount+withdrwaTotalTextAmount
    withdrwaTotal.innerText=totalWithDraw
    withdrawInput.value=''

    // update-balance

    const balanceTotal=document.getElementById('balance-total')
    const balanceTotalText=balanceTotal.innerText
    const balanceTotalAmount=parseFloat(balanceTotalText)
    const newwithdrawBalance=balanceTotalAmount-totalWithDraw
    balanceTotal.innerText=newwithdrawBalance
    

})
