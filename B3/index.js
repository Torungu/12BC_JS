let arrSo=[]
document.querySelector('#buttonAdd').onclick=()=>{
    let addSo=document.querySelector('#addSo').value*1
    arrSo.push(addSo)
    document.querySelector('#result').value=`[${arrSo}]`
}

//case1
document.querySelector('#button1').onclick=()=>{
    let result=0
    for(i=0;i<arrSo.length;i++){
        if(eval(arrSo[i])>0){
            result+=eval(arrSo[i])
        }
    }
    if(Number.isInteger(result)){
        result
    }
    else{
        result=result.toFixed(2)
    }
    document.querySelector('#result1').value=result
}

//case2
document.querySelector('#button2').onclick=()=>{
    let count=0
    for(i=0;i<arrSo.length;i++){
        if(eval(arrSo[i])>0){
            count++
        }
    }
    document.querySelector('#result2').value=count
}

//case3
document.querySelector('#button3').onclick=()=>{
    let result=eval(arrSo[0]);
    for(i=1;i<arrSo.length;i++){
        if(result>eval(arrSo[i])){
            result=eval(arrSo[i])
        }
    }
    if(Number.isInteger(result)){
        result
    }
    else{
        result=result.toFixed(2)
        
    }
    document.querySelector('#result3').value=result
}

//case4
document.querySelector('#button4').onclick=()=>{
    let newArrSo=[]
    for(i=0;i<arrSo.length;i++){
        if(eval(arrSo[i])>0){
            newArrSo.push(arrSo[i])
        }
    }
    if(newArrSo){
        let result=eval(newArrSo[0]);
        for(i=1;i<newArrSo.length;i++){
            if(result>eval(newArrSo[i])){
                result=eval(newArrSo[i])
            }
        }
        if(Number.isInteger(result)){
            result
        }
        else{
            result=result.toFixed(2)
        }
        document.querySelector('#result4').value=result
    }    
}

//case5
document.querySelector('#button5').onclick=()=>{
    let result=0;
    if(arrSo){
        for(i=(arrSo.length-1);i>=0;i--){
            if(arrSo[i]%2===0){
                result=arrSo[i]; 
                break;
            }
            else{
                result=-1
            }
        }    
    }
    document.querySelector('#result5').value=result
}

//case6
document.querySelector('#button6').onclick=()=>{
    let viTri1=document.querySelector('#viTri1').value*1
    let viTri2=document.querySelector('#viTri2').value*1
    if(arrSo){
        let a=arrSo[viTri1]
        let b=arrSo[viTri2]
        arrSo[viTri1]=b
        arrSo[viTri2]=a
    }
    document.querySelector('#result6').value=`[${arrSo}]`
}

//case7
document.querySelector('#button7').onclick=()=>{
    let newArrSo=[]
    for(i=0;i<arrSo.length;i++){
        if(Number.isInteger(arrSo[i])){
            newArrSo.push(arrSo[i])
        }
        else{
            newArrSo.push(eval(arrSo[i]).toFixed(2))
        }
    }
    if(newArrSo){
        newArrSo.sort((a, b) => a - b)
        document.querySelector('#result7').value=`[${newArrSo}]`
    }
}

//case8
let isPrimeNumber=(a)=>{
    if(a<=1){
        return false
    }
    if(a<=3){
        return true
    }
    else{
        for(i=2;i<a;i++){
            if(a%i==0){
                return false
            }
        }
        return true
    }
}

document.querySelector('#button8').onclick=()=>{
    if(arrSo){
        let result=-1
        for(i of arrSo){
            if(isPrimeNumber(i)){
                result=i
                break
            }
        }
        document.querySelector('#result8').value=result
    }
}

//case9
document.querySelector('#buttonAdd1').onclick=()=>{
    let soThuc=document.querySelector('#soThuc').value
    arrSo.push(soThuc)
    document.querySelector('#result').value=`[${arrSo}]`
}

document.querySelector('#button9').onclick=()=>{
    let count=0
    if(arrSo){
        for(i=0;i<arrSo.length;i++){
            if(Number.isInteger(eval(arrSo[i]))){
                count++
            }
        }
        document.querySelector('#result9').value=`Có ${count} số nguyên trong mảng`
    }
}

//case10
document.querySelector('#button10').onclick=()=>{
    let result=''
    if(arrSo){
        let a=0
        let b=0
        for(i=0;i<arrSo.length;i++){
            if(eval(arrSo[i])>0){
                a++
            }
            else if(eval(arrSo[i])<0){
                b++
            }
        }
        if(a==0 && b>0){
            result='Không có Số dương trong mảng'
        }
        else if(b==0 && a>0){
            result='Không có Số âm trong mảng'
        }
        else if(a>b){
            result=`Số dương nhiều hơn Số âm ${a-b} số`
        }
        else if(b>a){
            result=`Số dương ít hơn Số âm ${b-a} số`
        }
        else if(a==b){
            result='Số lượng Số âm và Số dương bằng nhau'
        }
        document.querySelector('#result10').value=result
    }
}