function convertDollars(){
    var dollars = document.getElementById("dollars").value
    var result = document.getElementById("result")
    if (isNaN(dollars)){
        result.innerHTML = 'but number plz'
    }else if(dollars < 0){
        result.innerHTML = 'but number bigger than 0'
    }else if(dollars == 0){
        result.innerHTML = 'but number bigger than 0'
    }else {
        result.innerHTML = dollars * 47 + 'L.E'
    }
    return false
}