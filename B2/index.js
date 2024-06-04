// Case1
document.querySelector('#button1').onclick=()=>{
    let diemChuan=document.querySelector('#diemChuan').value*1
    let diemToan=document.querySelector('#diemToan').value*1
    let diemVan=document.querySelector('#diemVan').value*1
    let diemAnh=document.querySelector('#diemAnh').value*1
    let khuVuc=document.querySelector('#khuVuc').value*1
    let doiTuong=document.querySelector('#doiTuong').value*1
    let result = Math.round((diemToan+diemVan+diemAnh+khuVuc+doiTuong)*10)/10
    let renderTextResult=document.querySelector('.case1_result > textarea')
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
    document.querySelector('.case1_result').classList.add('show')
}

//Case2
let tienDien=(soKw)=>{
    let result=0
    soKw<=50 ? result=soKw*500 : soKw<=100 ? result=50*500+(soKw-50)*650 : soKw<=200 ? result=50*500+50*650+(soKw-100)*850 : soKw<=350 ? result=50*500+50*650+100*850+(soKw-200)*1100 : result=50*500+50*650+100*850+150*1100+(soKw-350)*1300
    return result
}
document.querySelector('#button2').onclick=()=>{
    let hoTen=document.querySelector('#tenKhachHang').value
    let soKw=document.querySelector('#soKw').value*1
    document.querySelector('#result2').value=`Ông/Bà ${hoTen} đã dùng ${soKw} Kw\n Số tiền cần trả ${tienDien(soKw).toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}`
    document.querySelector('.case2_result').classList.add('show')
}

//Case3
let tienChiuThue=(result)=>{
    result<=60 ? result=result*0.05 : result<=120 ? result=60*0.05+(result-60)*0.1 : result<=210 ? result=60*0.05+60*0.1+(result-120)*0.15 : result<=384 ? result=60*0.05+60*0.1+90*0.15+(result-210)*0.2 : result<=624 ? result=60*0.05+60*0.1+90*0.15+174*0.2+(result-384)*0.25 : result<=960 ? result=60*0.05+60*0.1+90*0.15+174*0.2+240*0.25+(result-624)*0.3 : result=60*0.05+60*0.1+90*0.15+174*0.2+240*0.25+336*0.3+(result-960)*0.35
    return result
}
document.querySelector('#button3').onclick=()=>{
    let hoTen=document.querySelector('#nguoiChiuThue').value
    let thuNhap=document.querySelector('#thuNhap').value*1
    let nguoiPhuThuoc=document.querySelector('#nguoiPhuThuoc').value*1
    let chiuThue=(thuNhap-4000000-nguoiPhuThuoc*1600000)/1000000
    let result= tienChiuThue(chiuThue)*1000000
    let renderTextResult=document.querySelector('.case3_result > textarea')
    if(result>0){
        renderTextResult.classList.add('text-danger')
        renderTextResult.classList.remove('text-success')
        document.querySelector('#result3').value=`Ông/Bà ${hoTen} với thu nhập ${thuNhap.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}\n Số tiền thuế cần đóng là ${result.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}`
    }
    else{
        renderTextResult.classList.add('text-success')
        renderTextResult.classList.remove('text-danger')
        document.querySelector('#result3').value=`Ông/Bà ${hoTen} với thu nhập ${thuNhap.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}\nĐược miễn thuế`
    }
    document.querySelector('.case3_result').classList.add('show')
}

//Case4
let displayKenh=()=>{
    let check=document.querySelector('#tepKhach').value
    check==="doanhNghiep"? document.querySelector('#renderKenh').style.visibility='visible': document.querySelector('#renderKenh').style.visibility='hidden'
}
document.querySelector('#button4').onclick=()=>{
    let maKhach=document.querySelector('#maKhach').value;
    let kCC=document.querySelector('#kenhCaoCap').value*1;
    let kCB=document.querySelector('#kenhCoBan').value*1;
    let tepKhach=document.querySelector('#tepKhach').value;
    let renderTextResult=document.querySelector('.case4_result > textarea')
    if(tepKhach=='none'){
        renderTextResult.classList.add('text-danger')
        document.querySelector('#result4').value=`Xin chọn tệp khách hàng`
    }
    else if(tepKhach=='nhaDan'){
        renderTextResult.classList.add('text-success')
        renderTextResult.classList.remove('text-danger')
        document.querySelector('#result4').value=`Mã khách: ${maKhach} cần đóng ${(25+7.5*kCC).toLocaleString('en-US', {style: 'currency',currency:'USD'})}`  
    }
    else if(tepKhach=='doanhNghiep'){
        renderTextResult.classList.add('text-success')
        renderTextResult.classList.remove('text-danger')
        kCB<=10? kCB=75:kCB=75+(kCB-10)*5
        document.querySelector('#result4').value=`Mã khách: ${maKhach} cần đóng ${(15+kCB+50*kCC).toLocaleString('en-US', {style: 'currency',currency:'USD'})}`
    }
    document.querySelector('.case4_result').classList.add('show')
}