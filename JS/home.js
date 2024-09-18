//add money to the account

//step:::1 add an event handler to the add money button inside the form
document.getElementById('btn-add-money').addEventListener('click',function(event){
    //prevent page reload after from submit
    event.preventDefault();
    //step::: 2 get money to be added to the account
    const addMoneyInput1 = document.getElementById('input-add-money');
    const pinNumberInput1 = document.getElementById('input-pin-number');
    const addMoneyInput = addMoneyInput1.value;
    const pinNumberInput = pinNumberInput1.value;
    console.log(addMoneyInput,pinNumberInput);

    //step:::3 verify pin number
    //wrong way to validate pin number

    if(pinNumberInput === '1234'){

        //step:::4 get the current balance
        const currentB = document.getElementById('current-balance');

        //step:::5 add addMoneyInput with Balance
        let currentBalance = Number(currentB.innerText);
        console.log(currentBalance);
        const addMoneyValue = Number(addMoneyInput);
        currentBalance += addMoneyValue;

        //step:::6 update the balance in the UI/Dom
        currentB.innerText=currentBalance;

        //step:::7 empty the value
        addMoneyInput1.value = '';
        pinNumberInput1.value = '';

    }
    else{
        alert("Wrong Pin")
    }
})