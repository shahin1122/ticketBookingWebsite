var firstClassPrice = 0;
var economyClassPrice = 0; 
var subTotalPrice = 0;


const firstClassPlusBtn = document.getElementById('F-plus');

firstClassPlusBtn.addEventListener('click' , function (event) {
    const firstClassInputField = document.getElementById('firstClass-input').value;
    const firstClassInputNumber = parseInt(firstClassInputField);
    const updateField = firstClassInputNumber +1 ;
    document.getElementById('firstClass-input').value = updateField;
    firstClassPrice = (updateField * 150);
    updatePrice();
});


const firstClassMinusBtn = document.getElementById('F-minus');

firstClassMinusBtn.addEventListener('click' , function (event) {
    const firstClassInputField = document.getElementById('firstClass-input').value;
    const firstClassInputNumber = parseInt(firstClassInputField);
    const updateField = firstClassInputNumber -1 ;
    if(updateField > -1){
        document.getElementById('firstClass-input').value = updateField; 
        firstClassPrice = (updateField * 150);
        updatePrice();
    }
});



const economyClassPlusBtn = document.getElementById('E-plus');

    economyClassPlusBtn.addEventListener('click' , function (event) {
    const firstClassInputField = document.getElementById('economyClass-input').value;
    const firstClassInputNumber = parseInt(firstClassInputField);
    const updateField = firstClassInputNumber +1 ;
    document.getElementById('economyClass-input').value = updateField;
    economyClassPrice = (updateField * 100);
    updatePrice();
});



const economyClassMinusBtn = document.getElementById('E-minus');

    economyClassMinusBtn.addEventListener('click' , function (event) {
    const firstClassInputField = document.getElementById('economyClass-input').value;
    const firstClassInputNumber = parseInt(firstClassInputField);
    const updateField = firstClassInputNumber -1 ;
    if(updateField > -1){
        document.getElementById('economyClass-input').value = updateField; 
        economyClassPrice = (updateField * 100);
        updatePrice();

    }
    
});

//function for updating price
function updatePrice() {
    subTotalPrice = firstClassPrice + economyClassPrice ; 
    document.getElementById('subTotalPrice').innerText = '$ ' + subTotalPrice ;
    const taxAmount = subTotalPrice * 0.1 ;
    document.getElementById('tax-amount').innerText = '$ ' + taxAmount ; 
    const totalAmount = subTotalPrice + taxAmount ;
    document.getElementById('total-amount').innerText = '$ ' +totalAmount ;

}

//Alert slider for booking button
const bookingBtn = document.getElementById('book-now');
bookingBtn.addEventListener('click' , function () {
   
    alert('Thanks For Booking !!');
    
});









