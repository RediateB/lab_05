const zero=document.querySelector("#zero");
const one=document.querySelector("#one");
const two=document.querySelector("#two");
const three=document.querySelector("#three");
const four=document.querySelector("#four");
const five=document.querySelector("#five");
const six=document.querySelector("#six");
const seven=document.querySelector("#seven");
const eight=document.querySelector("#eight");
const nine=document.querySelector("#nine");
const display=document.querySelector("#display");
const add=document.querySelector("#add");
const minus=document.querySelector("#minus");
const multiply=document.querySelector("#multiply");
const divide=document.querySelector("#divide");
const equal=document.querySelector("#equal");
const res=document.querySelector('#result');
const input=document.querySelector('#display');
const cancel=document.querySelector('#clear');
const point=document.querySelector('#point');


var storeStringValue="";
var mathResult;

function c() {
    storeStringValue='';
    input.value='';
    mathResult='';
    res.innerHTML=mathResult;
    
}
function sev() {
    storeStringValue += seven.innerHTML;
    display.value=storeStringValue;
}
function eig() {
    storeStringValue += eight.innerHTML;
    display.value=storeStringValue;
}
function nin() {
    storeStringValue += nine.innerHTML;
    display.value=storeStringValue;
}
function division() {
    storeStringValue += divide.innerHTML;
    display.value=storeStringValue;
}
function fo() {
    storeStringValue += four.innerHTML;
    display.value=storeStringValue;
}
function fiv() {
    storeStringValue += five.innerHTML;
    display.value=storeStringValue;
}
function si() {
    storeStringValue += six.innerHTML;
    display.value=storeStringValue;
}
function multiplication() {
    storeStringValue += multiply.innerHTML;
    display.value=storeStringValue;
}
function on() {
    storeStringValue += one.innerHTML;
    display.value=storeStringValue;
}
function tw() {
    storeStringValue += two.innerHTML;
    display.value=storeStringValue;
}
function thr() {
    storeStringValue += three.innerHTML;
    display.value=storeStringValue;
}
function min() {
    storeStringValue += minus.innerHTML;
    display.value=storeStringValue;
}
function zer() {
    storeStringValue += zero.innerHTML;
    display.value=storeStringValue;
}
function po() {
    storeStringValue += point.innerHTML;
    display.value=storeStringValue;
}
function plus() {
    storeStringValue += add.innerHTML;
    display.value=storeStringValue;
}

function eq() {
    for (const char of storeStringValue){
        if (char=='x') {
            op=storeStringValue.indexOf(char);
            var num1=storeStringValue.slice(0,op);
            var num2=storeStringValue.slice(op+1,storeStringValue.length);
            mathResult=(parseFloat(num1)*parseFloat(num2)).toFixed(1);
        }
        if (char=='/') {
            op=storeStringValue.indexOf(char);
            var num1=storeStringValue.slice(0,op);
            var num2=storeStringValue.slice(op+1,storeStringValue.length);
            if (num2==0) {
                mathResult ="Invalid"
            }
            mathResult =(parseFloat(num1)/parseFloat(num2)).toFixed(1);
        }
        if (char=='+') {
            op=storeStringValue.indexOf(char);
            var num1=storeStringValue.slice(0,op);
            var num2=storeStringValue.slice(op+1,storeStringValue.length);
            mathResult=(parseFloat(num1)+parseFloat(num2)).toFixed(1);
        }
        if (char=='-') {
            op=storeStringValue.indexOf(char);
            var num1=storeStringValue.slice(0,op);
            var num2=storeStringValue.slice(op+1,storeStringValue.length);
            mathResult=(parseFloat(num1)-parseFloat(num2)).toFixed(1);
        }
      
    }
    res.innerHTML=mathResult;
    input.value='';
    storeStringValue='';
}


one.addEventListener('click',on)
two.addEventListener('click',tw)
three.addEventListener('click',thr)
four.addEventListener('click',fo)
five.addEventListener('click',fiv)
six.addEventListener('click',si)
seven.addEventListener('click',sev)
eight.addEventListener('click',eig)
nine.addEventListener('click',nin)
zero.addEventListener('click',zer)
multiply.addEventListener('click',multiplication)
divide.addEventListener('click',division)
add.addEventListener('click',plus)
minus.addEventListener('click',min)
equal.addEventListener('click',eq)
cancel.addEventListener('click',c)
point.addEventListener('click',po)