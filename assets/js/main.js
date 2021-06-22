function getdiv1(){
    return  document.getElementById("div1-value").innerText;
}
function printdiv1(num){
    document.getElementById("div1-value").innerText=num;
}
function getdiv2(){
    return document.getElementById("div2-value").innerText;
}
function printdiv2(num){
    if (num==""){
        document.getElementById("div2-value").innerText=num;
    }
    else{
        document.getElementById("div2-value").innerText=getFormattedNumber(num);
    }
}
function getFormattedNumber(num){
    if(num=="-"){
        return "";
    }
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}
function reverseNumberFormat(num){
    return Number(num.replace(/,/g,''));
}
var symbols = document.getElementsByClassName("symbols");
for(var i = 0;i<symbols.length;i++){
    symbols[i].addEventListener('click',function(){
        if(this.id=="ce"){
            printdiv1("");
            printdiv2("");
        }
        else if(this.id=="c"){
            var div2=reverseNumberFormat(getdiv2()).toLocaleString();
            if (div2){
                div2=div2.substr(0,div2.length-1);
                printdiv2(div2);
            }
        }
        else {
            var div2=getdiv2();
            var div1=getdiv1();
            if(div2==""&&div1!=""){
                if(isNaN(div1[div1.length-1])){
                    div1=div1.substr(0,div1.length-1);
                }
            }
            if (div2!="" || div1!=""){
                div2=div2==""?
                div2:reverseNumberFormat(div2);
                div1=div1+div2;
                if(this.id=="="){
                    var main=eval(div1);
                    printdiv2(main);
                    printdiv1("");
                }
                else{
                    div1=div1+this.id;
                    printdiv1(div1);
                    printdiv2("");
                }
            }
        }
    });
}
var number = document.getElementsByClassName("number");
for(var i = 0;i<number.length;i++){
    number[i].addEventListener('click',function(){
        var div2=reverseNumberFormat(getdiv2());
        if (div2!=NaN){
            div2=div2+this.id;
            printdiv2(div2);
        }
    });
}