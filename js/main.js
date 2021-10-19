
/* গরীবের ক্যালকুলেটর শুরু */
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

/* গরীবের ক্যালকুলেটর শেষ*/ 







/* মধ্যবিত্তের ক্যালকুলেটর শুরু*/
/* ADD() function start*/ 
function ADD(){
    var mainText = document.getElementById('mainText').value;
    // document.getElementById('finalOutput').innerHTML = mainText;
    for(var i=0;i<mainText.length ;i++){
        if(mainText[i]=='+' || mainText[i] == '.'){
            continue;
        }else if(isNaN(mainText[i])){
            var track = '1';
            break;
        }
    }
    if(track == '1'){
        document.getElementById('finalOutput').innerHTML = "Syntax Error!";
    }else if(mainText==''){
        document.getElementById('finalOutput').innerHTML = "No Input!";
    }else {
        var sum=0;
        var tempText = "";
        for(var i=0;i<mainText.length ;i++){
            tempText = tempText.concat(mainText[i]);
            if(mainText[i]=='.'){
                continue;
            }else if(isNaN(mainText[i]) || i==(mainText.length-1)){
                tempText = parseFloat(tempText);
                sum = sum + tempText;
                tempText = "";
           }
        }
        document.getElementById('finalOutput').innerHTML =mainText +"="+ sum;
   }
    
}

/* ADD() function END*/ 

/* SUB() function start*/ 
function SUB(){
    var mainText = document.getElementById('mainText').value;
    for(var i=0;i<mainText.length ;i++){
        if(mainText[i]=='-' || mainText[i] == '.'){
            continue;
        }else if(isNaN(mainText[i])){
            var track = '1';
            break;
        }
    }
    if(track == '1'){
        document.getElementById('finalOutput').innerHTML = "Syntax Error!";
    }else if(mainText==''){
        document.getElementById('finalOutput').innerHTML = "No Input!";
    }else{
        var temp = "";
        var temp2 = "";
        for(i=0; ;i++){
            if(mainText[i]!='-'){
                temp = temp.concat(mainText[i]);
            }else{
                for(var j=i+1;j<mainText.length;j++){
                    temp2 = temp2.concat(mainText[j]);
                }
                break;
            }
        }
        var subResult = temp - temp2;
        document.getElementById('finalOutput').innerHTML =mainText +"="+ subResult;
    }
}

/* SUB() function END*/ 

/* MULT() function start*/ 
function MULT(){
    var mainText = document.getElementById('mainText').value;
    for(var i=0;i<mainText.length ;i++){
        if(mainText[i]=='*' || mainText[i] == '.'){
            continue;
        }else if(isNaN(mainText[i])){
            var track = '1';
            break;
        }
    }
    if(track == '1'){
        document.getElementById('finalOutput').innerHTML = "Syntax Error!";
    }else if(mainText==''){
        document.getElementById('finalOutput').innerHTML = "No Input!";
    }else {
        var mult=1;
        var tempText = "";
        for(var i=0;i<mainText.length ;i++){
            tempText = tempText.concat(mainText[i]);
            if(mainText[i]=='.'){
                continue;
            }else if(isNaN(mainText[i]) || i==(mainText.length-1)){
                tempText = parseFloat(tempText);
                mult = mult * tempText;
                tempText = "";
           }
            
        }
        document.getElementById('finalOutput').innerHTML =mainText +"="+ mult;
   }
    
}
/* MULT() function END*/


/* DIV() function start*/ 
function DIV(){
    var mainText = document.getElementById('mainText').value;
    for(var i=0;i<mainText.length ;i++){
        if(mainText[i]=='/' || mainText[i] == '.'){
            continue;
        }else if(isNaN(mainText[i])){
            var track = '1';
            break;
        }
    }
    if(track == '1'){
        document.getElementById('finalOutput').innerHTML = "Syntax Error!";
    }else if(mainText==''){
        document.getElementById('finalOutput').innerHTML = "No Input!";
    }else{
        var temp = "";
        var temp2 = "";
        for(i=0; ;i++){
            if(mainText[i]!='/'){
                temp = temp.concat(mainText[i]);
            }else{
                for(var j=i+1;j<mainText.length;j++){
                    temp2 = temp2.concat(mainText[j]);
                }
                break;
            }
        }
        var divResult = temp / temp2;
        document.getElementById('finalOutput').innerHTML =mainText +"="+ divResult;
    }
}

/* DIV() function END*/


/* REM() function start*/ 
function REM(){
    var mainText = document.getElementById('mainText').value;
    for(var i=0;i<mainText.length ;i++){
        if(mainText[i]=='%' || mainText[i] == '.'){
            continue;
        }else if(isNaN(mainText[i])){
            var track = '1';
            break;
        }
    }
    if(track == '1'){
        document.getElementById('finalOutput').innerHTML = "Syntax Error!";
    }else if(mainText==''){
        document.getElementById('finalOutput').innerHTML = "No Input!";
    }else{
        var temp = "";
        var temp2 = "";
        for(i=0; ;i++){
            if(mainText[i]!='%'){
                temp = temp.concat(mainText[i]);
            }else{
                for(var j=i+1;j<mainText.length;j++){
                    temp2 = temp2.concat(mainText[j]);
                }
                break;
            }
        }
        var divResult = temp % temp2;
        document.getElementById('finalOutput').innerHTML =temp +"%"+ temp2 +"="+ divResult;
    }
}

/* DIV() function END*/


function clearOutput(){
        document.getElementById('mainText').value = '';
        document.getElementById('finalOutput').innerHTML='';
    }

/* মধ্যবিত্তের ক্যালকুলেটর শেষ*/