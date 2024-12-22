let sum="0";
let sumall=0;
let op="&";
let vis=0;
let eqbutton=0;
let dotCount=0;

document.querySelector("body").addEventListener('keydown',(e) => {
  
    if(e.key==='1'){b1();document.getElementById('b1').classList.add('pressed');}
    else if(e.key==='2'){b2();document.getElementById('b2').classList.add('pressed');}
    else if(e.key==='3'){b3();document.getElementById('b3').classList.add('pressed');}
    else if(e.key==='4'){b4();document.getElementById('b4').classList.add('pressed');}
    else if(e.key==='5'){b5();document.getElementById('b5').classList.add('pressed');}
    else if(e.key==='6'){b6();document.getElementById('b6').classList.add('pressed');}
    else if(e.key==='7'){b7();document.getElementById('b7').classList.add('pressed');}
    else if(e.key==='8'){b8();document.getElementById('b8').classList.add('pressed');}
    else if(e.key==='9'){b9();document.getElementById('b9').classList.add('pressed');}
    else if(e.key==='0'){b0();document.getElementById('b0').classList.add('pressed');}
    else if(e.key==='+'){bplus();document.getElementById('bplus').classList.add('pressed');}
    else if(e.key==='-'){bminus();document.getElementById('bminus').classList.add('pressed');}
    else if(e.key==='*'){bmul();document.getElementById('bmul').classList.add('pressed');}
    else if(e.key==='/'){bdiv();document.getElementById('bdiv').classList.add('pressed');}
    else if(e.key==='.'){bdot();document.getElementById('bdot').classList.add('pressed');}
    else if(e.key==='='){beq();document.getElementById('beq').classList.add('pressed');}
    else if(e.key==='Enter'){beq();document.getElementById('beq').classList.add('pressed');}
    else if(e.key==='Backspace'){bDEL();document.getElementById('bDEL').classList.add('pressed');}
    else if(e.key==='Delete'){bRESET();document.getElementById('bRESET').classList.add('pressed');}
    

});
document.querySelector("body").addEventListener('keyup',(e) => {
    if(e.key==='1'){document.getElementById('b1').classList.remove('pressed');}
    else if(e.key==='2'){document.getElementById('b2').classList.remove('pressed');}
    else if(e.key==='3'){document.getElementById('b3').classList.remove('pressed');}
    else if(e.key==='4'){document.getElementById('b4').classList.remove('pressed');}
    else if(e.key==='5'){document.getElementById('b5').classList.remove('pressed');}
    else if(e.key==='6'){document.getElementById('b6').classList.remove('pressed');}
    else if(e.key==='7'){document.getElementById('b7').classList.remove('pressed');}
    else if(e.key==='8'){document.getElementById('b8').classList.remove('pressed');}
    else if(e.key==='9'){document.getElementById('b9').classList.remove('pressed');}
    else if(e.key==='0'){document.getElementById('b0').classList.remove('pressed');}
    else if(e.key==='+'){document.getElementById('bplus').classList.remove('pressed');}
    else if(e.key==='-'){document.getElementById('bminus').classList.remove('pressed');}
    else if(e.key==='*'){document.getElementById('bmul').classList.remove('pressed');}
    else if(e.key==='/'){document.getElementById('bdiv').classList.remove('pressed');}
    else if(e.key==='.'){document.getElementById('bdot').classList.remove('pressed');}
    else if(e.key==='='){document.getElementById('beq').classList.remove('pressed');}
    else if(e.key==='Enter'){document.getElementById('beq').classList.remove('pressed');}
    else if(e.key==='Backspace'){document.getElementById('bDEL').classList.remove('pressed');}
    else if(e.key==='Delete'){document.getElementById('bRESET').classList.remove('pressed');}
    

});

document.getElementById('b1').addEventListener('click',b1);
document.getElementById('b2').addEventListener('click',b2);
document.getElementById('b3').addEventListener('click',b3);
document.getElementById('b4').addEventListener('click',b4);
document.getElementById('b5').addEventListener('click',b5);
document.getElementById('b6').addEventListener('click',b6);
document.getElementById('b7').addEventListener('click',b7);
document.getElementById('b8').addEventListener('click',b8);
document.getElementById('b9').addEventListener('click',b9);
document.getElementById('b0').addEventListener('click',b0);
document.getElementById('bplus').addEventListener('click',bplus);
document.getElementById('bminus').addEventListener('click',bminus);
document.getElementById('bmul').addEventListener('click',bmul);
document.getElementById('bdiv').addEventListener('click',bdiv);
document.getElementById('bRESET').addEventListener('click',bRESET);
document.getElementById('beq').addEventListener('click',beq);
document.getElementById('bDEL').addEventListener('click',bDEL);
document.getElementById('bdot').addEventListener('click',bdot);
document.getElementById('test').addEventListener('click',changeTheme);



function numberWithCommas(x) {
    let w= x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
    let decimalIndex = w.indexOf('.');
    
    // If there is a decimal point, remove commas after it
    if (decimalIndex !== -1) {
        let integerPart = w.slice(0, decimalIndex); // Part before the decimal
        let decimalPart = w.slice(decimalIndex); // Part after the decimal
        // Remove commas from the decimal part
        decimalPart = decimalPart.replace(/,/g, "");
        // Rebuild the string
        w = integerPart + decimalPart;
    }
    if(w[0]==='0'&&w.length>1&&w[1]!='.'){
        let first=w.slice(0,1);
        let sec=w.slice(1);
        w=sec;
        first=sum.slice(0,1);
        sec=sum.slice(1);
        sum=sec;
    }
    
    return w;
}

 function b1() {
    if(document.getElementById('sum').textContent.length>=31)return;
    eqbutton=0;
    let x='1';
    sum+=x;
    document.getElementById('sum').textContent=numberWithCommas(sum);
    
};
function b2() {
    if(document.getElementById('sum').textContent.length>=31)return;
    eqbutton=0;
    let x='2';
    sum+=x;
    document.getElementById('sum').textContent=numberWithCommas(sum);
    
};
function b3() {
    if(document.getElementById('sum').textContent.length>=31)return;
    eqbutton=0;
    let x='3';  
    sum+=x;
    document.getElementById('sum').textContent=numberWithCommas(sum);
};
    
function b4() {
    if(document.getElementById('sum').textContent.length>=31)return;
    eqbutton=0;
    let x='4';
    sum+=x;
    document.getElementById('sum').textContent=numberWithCommas(sum);
    
};
function b5() {
    if(document.getElementById('sum').textContent.length>=31)return;
    eqbutton=0;
    let x='5';
    sum+=x;
    document.getElementById('sum').textContent=numberWithCommas(sum);
    
};
function b6() {
    if(document.getElementById('sum').textContent.length>=31)return;
    eqbutton=0;
    let x='6';
    sum+=x;
    document.getElementById('sum').textContent=numberWithCommas(sum);
    
};
function b7()  {
    if(document.getElementById('sum').textContent.length>=31)return;
    eqbutton=0;
    let x='7';
    sum+=x;
    document.getElementById('sum').textContent=numberWithCommas(sum);
    
};
function b8() {
    if(document.getElementById('sum').textContent.length>=31)return;
    eqbutton=0;
    let x='8';
    sum+=x;
    document.getElementById('sum').textContent=numberWithCommas(sum);
    
};
function b9() {
    if(document.getElementById('sum').textContent.length>=31)return;
    eqbutton=0;
    let x='9';
    sum+=x;
    
    document.getElementById('sum').textContent=numberWithCommas(sum);
    
};
function b0() {
    if(document.getElementById('sum').textContent.length>=31||sum==='0')return;
    eqbutton=0;
    let x='0';
    sum+=x;
    document.getElementById('sum').textContent=numberWithCommas(sum);
    
};
function bdot() {
    if(document.getElementById('sum').textContent.length>=31||dotCount!=0)return;
    eqbutton=0;
    let x='.';
    sum+=x;
    document.getElementById('sum').textContent=numberWithCommas(sum);
    dotCount=1;
    
};
function bplus() {
    eqbutton=0;
    let q=parseFloat(sum);
    if(vis==0){sumall=q;}
    else{
        if(op=='+'){sumall+=q;}
        else if(op=='-'){sumall-=q;}
        else if(op=='*'){sumall*=q;}
        else if(op=='/'){sumall/=q;}
    }
    op='+';
    sum="";
    document.getElementById('sum').textContent=op;
    vis=1;
};
function bminus() {
    eqbutton=0;
    let q=parseFloat(sum);
    if(vis==0){sumall=q;}
    else{
        if(op=='+'){sumall+=q;}
        else if(op=='-'){sumall-=q;}
        else if(op=='*'){sumall*=q;}
        else if(op=='/'){sumall/=q;}
    }
    op='-';
    sum="";
    document.getElementById('sum').textContent=op;
    vis=1;
};
function bmul() {
    eqbutton=0;
    let q=parseFloat(sum);
    if(vis==0){sumall=q;}
    else{
        if(op=='+'){sumall+=q;}
        else if(op=='-'){sumall-=q;}
        else if(op=='*'){sumall*=q;}
        else if(op=='/'){sumall/=q;}
    }
    op='*';
    sum="";
    document.getElementById('sum').textContent=op;
    vis=1;
};
function bdiv() {
    eqbutton=0;
    let q=parseFloat(sum);
    if(vis==0){sumall=q;}
    else{
        if(op=='+'){sumall+=q;}
        else if(op=='-'){sumall-=q;}
        else if(op=='*'){sumall*=q;}
        else if(op=='/'){sumall/=q;}
    }
    op='/';
    sum="";
    document.getElementById('sum').textContent=op;
    vis=1;
};
function beq() {
    eqbutton=1;
    let q=parseFloat(sum);
    if(op=='&'){sumall=q;}
    else{
        if(op=='+'){sumall+=q;}
        else if(op=='-'){sumall-=q;}
        else if(op=='*'){sumall*=q;}
        else if(op=='/'){sumall/=q;}
    }
    sum="0";
    let w=numberWithCommas(sumall);
    if(w=="NaN"){w="Error";alert("check your equations and reset the calculator");}
    document.getElementById('sum').textContent=w;
    op='&';
};
function bRESET() {
    eqbutton=0;
    sum="0";
    sumall=0;
    op='&';
    document.getElementById('sum').textContent='0';
    vis=0;
    eqbutton=0;
    dotCount=0;
};
function bDEL(){
    if(eqbutton){ bRESET();return;} 
    eqbutton=0;
    let shownResult=document.getElementById('sum').textContent;
    
    shownResult=shownResult.slice(0,(shownResult.length)-1);
    sum=sum.slice(0,sum.length-1);
    let n=shownResult.length;
    if(shownResult[n-1]==','){shownResult=shownResult.slice(0,(shownResult.length)-1);}
    if(shownResult.length==0){shownResult="0";}
    shownResult=shownResult.replace(/,/g,"");
    document.getElementById('sum').textContent=numberWithCommas(shownResult);

}   
function changeTheme(){
    swap('--pri-eq-color','--sec-eq-color');
    swap('--pri-del-color','--sec-del-color');
    swap('--pri-butt-color','--sec-butt-color');
    swap('--pri-buttons-color','--sec-buttons-color');
    swap('--pri-result-color','--sec-result-color');
    swap('--pri-html-color','--sec-html-color');
    swap('--pri-sum-color','--sec-sum-color');
    swap('--pri-name-color','--sec-name-color');
    
   

   
    
}
function swap (a, b ){
    let docStyle=getComputedStyle(document.getElementById('test'));
    let root=document.querySelector(':root');
    let w=docStyle.getPropertyValue(a);
    let s=docStyle.getPropertyValue(b);  
    root.style.setProperty(a, s);
    root.style.setProperty(b, w);
}



