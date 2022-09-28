let btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    let BillAmount = document.getElementById('Bill_amount').value;
    let TipPercentile = document.getElementById('Tip_Percentile').value;

    let TipAmount = document.getElementById('Tip_Amount').value = BillAmount / TipPercentile;
    document.getElementById('Total_Billed').value = parseFloat(BillAmount) + parseFloat(TipAmount);

})
