
//console.log(numb_1);

function addition(){
    var numb_1 =document.getElementById('number-1').value;
    var numb_2 =document.getElementById('number-2').value;
    if(isNaN(numb_1) || isNaN(numb_2) || numb_1==''|| numb_2==''){
        document.getElementById('output').innerHTML = "Please Enter valid Input!";
    }else{
        var x = parseFloat(numb_1);
        var y = parseFloat(numb_2);
        var result = x + y;
        document.getElementById('output').innerHTML = x +"+"+y+"="+result;
    }
    
}

function subtraction(){
    var numb_1 =document.getElementById('number-1').value;
    var numb_2 =document.getElementById('number-2').value;
    if(isNaN(numb_1) || isNaN(numb_2) || numb_1==''|| numb_2==''){
        document.getElementById('output').innerHTML = "Please Enter valid Input!";
    }else{
        var x = parseFloat(numb_1);
        var y = parseFloat(numb_2);
        var result = x - y;
        document.getElementById('output').innerHTML = x +"-"+y+"="+result;
    }
    
}

function multiplication(){
    var numb_1 =document.getElementById('number-1').value;
    var numb_2 =document.getElementById('number-2').value;
    if(isNaN(numb_1) || isNaN(numb_2) || numb_1==''|| numb_2==''){
        document.getElementById('output').innerHTML = "Please Enter valid Input!";
    }else{
        var x = parseFloat(numb_1);
        var y = parseFloat(numb_2);
        var result = x * y;
        document.getElementById('output').innerHTML = x + "*" +y+ "=" +result;
    }
}

function division(){
    var numb_1 =document.getElementById('number-1').value;
    var numb_2 =document.getElementById('number-2').value;
    if(isNaN(numb_1) || isNaN(numb_2) || numb_1==''|| numb_2==''){
        document.getElementById('output').innerHTML = "Please Enter valid Input!";
    }else{
        var x = parseFloat(numb_1);
        var y = parseFloat(numb_2);
        var result = x / y;
        document.getElementById('output').innerHTML = x + "/" +y+ "=" +result;
    }
}

function reminder(){
    var numb_1 =document.getElementById('number-1').value;
    var numb_2 =document.getElementById('number-2').value;
    if(isNaN(numb_1) || isNaN(numb_2) || numb_1==''|| numb_2==''){
        document.getElementById('output').innerHTML = "Please Enter valid Input!";
    }else{
        var x = parseFloat(numb_1);
        var y = parseFloat(numb_2);
        var result = x % y;
        document.getElementById('output').innerHTML = x + "%" +y+ "=" +result;
    }
}

function clearScr(){
    document.getElementById('output').innerHTML = '';
    document.getElementById('number-1').value='';
    document.getElementById('number-2').value='';
}