const Cal = () => {
    let totalBill = document.querySelector('#totalBill').value;
    let tipPercent = document.querySelector('#tipPercent').value;
    let split = document.querySelector('#split').value;

    if(totalBill === '' || tipPercent == 0 || split == 0){
        alert('Please enter values');
      return
    }
    
    let total = (totalBill*(tipPercent/100))/split;
    total = total.toFixed(2);

  
    
    document.getElementById('tip').innerHTML = total;    


    
}  