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
        if(arrSo[i]>0){
            result+=arrSo[i]
        }
    }
    document.querySelector('#result1').value=result
}

//case2
document.querySelector('#button2').onclick=()=>{
    let count=0
    for(i=0;i<arrSo.length;i++){
        if(arrSo[i]>0){
            count++
        }
    }
    document.querySelector('#result2').value=count
}

//case3
document.querySelector('#button3').onclick=()=>{
    let result=arrSo[0];
    for(i=1;i<arrSo.length;i++){
        if(result>arrSo[i]){
            result=arrSo[i]
        }
    }
    document.querySelector('#result3').value=result
}

//case4
document.querySelector('#button4').onclick=()=>{
    let newArrSo=[]
    for(i=0;i<arrSo.length;i++){
        if(arrSo[i]>0){
            newArrSo.push(arrSo[i])
        }
    }
    if(newArrSo){
        let result=newArrSo[0];
        for(i=1;i<newArrSo.length;i++){
            if(result>newArrSo[i]){
                result=newArrSo[i]
            }
        }
        document.querySelector('#result4').value=result
    }    
}