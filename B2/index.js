// Case1
document.querySelector('#button1').onclick=function(){
    let diemChuan=document.querySelector('#diemChuan').value*1
    let diemToan=document.querySelector('#diemToan').value*1
    let diemVan=document.querySelector('#diemVan').value*1
    let diemAnh=document.querySelector('#diemAnh').value*1
    let khuVuc=document.querySelector('#khuVuc').value*1
    let doiTuong=document.querySelector('#doiTuong').value*1
    let result = Math.round((diemToan+diemVan+diemAnh+khuVuc+doiTuong)*10)/10
    let renderTextResult=document.querySelector('.case_result > textarea')
    let textResult=document.querySelector('#result1')
    if(diemToan === 0 || diemVan === 0 ||diemAnh === 0){
        renderTextResult.classList.add('text-danger')
        renderTextResult.classList.remove('text-success')
        textResult.value=`Xin chia buồn bạn đã RỚT\nDo có môn bị liệt`
    }
    else{
        if(result>=diemChuan){
            renderTextResult.classList.add('text-success')
            renderTextResult.classList.remove('text-danger')
            textResult.value=`Điểm thi: ${result} và Điểm chuẩn: ${diemChuan}\nXin chúc mừng bạn đã ĐẬU`       
        }
        else{
            renderTextResult.classList.add('text-danger')
            renderTextResult.classList.remove('text-success')
            textResult.value=`Điểm thi: ${result} và Điểm chuẩn ${diemChuan}\nXin chia buồn bạn đã RỚT`
        }
    }
    document.querySelector('.case_result').classList.add('show')
}

//Case2
document.querySelector('#button2').onclick=function(){
    let hoTen=document.querySelector('#tenKhachHang').value
    let soKw=document.querySelector('#soKw').value*1
}