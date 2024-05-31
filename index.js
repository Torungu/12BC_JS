//Case 1
document.querySelector('#button1').onclick=function(){
    const wage = 50;
    let day=document.querySelector('#day').value*1;
    let payment = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });   
    document.querySelector('#result1').value=payment.format(day*wage)
}

// Case 2
document.querySelector('#button2').onclick=function(){
    let num1=eval(document.querySelector('#num1').value)*1
    let num2=eval(document.querySelector('#num2').value)*1
    let num3=eval(document.querySelector('#num3').value)*1
    let num4=eval(document.querySelector('#num4').value)*1
    let num5=eval(document.querySelector('#num5').value)*1
    let avg = Math.round((num1+num2+num3+num4+num5)/5*100)/100
    document.querySelector('#result2').value=avg
}

//Case 3
document.querySelector('#button3').onclick=function(){
    const vnd = 23500
    let usd=parseFloat(document.querySelector('#usd').value)
    let change =usd*vnd
    document.querySelector('#result3').value=change.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})
}

//Case 4
document.querySelector('#button4').onclick=function(){
    let canhA=parseFloat(document.querySelector('#canhA').value)
    let canhB=parseFloat(document.querySelector('#canhB').value)
    if(canhA===canhB){
        document.querySelector('#result4').classList.add('text-danger')
        document.querySelector('#result4').classList.remove('text-success')
        document.querySelector('#result4').value='Đó là Hình Vuông'
    }
    else{
        document.querySelector('#result4').classList.remove('text-danger')
        document.querySelector('#result4').classList.add('text-success')
        let chuVi=Math.round((canhA+canhB)*2*100)/100
        let dienTich=Math.round((canhA*canhB)*100)/100
        document.querySelector('#result4').value=`Chu vi: ${chuVi} và Diện tích: ${dienTich}`
    }
}

//Case 5
document.querySelector('#button5').onclick=function(){
    let haiChuSo=document.querySelector('#haiChuSo').value*1
    let soDonVi=haiChuSo%10
    let soHangChuc=Math.floor(haiChuSo/10)
    console.log(soDonVi);
    console.log(soHangChuc)
    let tong = soDonVi + soHangChuc
    if(haiChuSo>=100){
        document.querySelector('#result5').classList.add('text-danger')
        document.querySelector('#result5').classList.remove('text-success')
        document.querySelector('#result5').value='Xin nhập số 2 chữ số'
    }
    else{
        document.querySelector('#result5').classList.remove('text-danger')
        document.querySelector('#result5').classList.add('text-success')
        document.querySelector('#result5').value=`Tổng 2 ký số của ${haiChuSo} là ${tong}`
    }
}   