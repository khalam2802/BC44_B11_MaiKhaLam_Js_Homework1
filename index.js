// Tính diện tích, chu vi hình chữ nhật

function tinh(){
    // input
    var dai=document.getElementById('chieudai').value;
    var rong=document.getElementById('chieurong').value;

    //output
    var chuVi =0;
    var dienTich = 0;

    //progress
    chuVi=2* (parseInt(dai)+parseInt(rong));
    dienTich = dai * rong ;
    document.getElementById('chuVi').innerHTML = chuVi;
    document.getElementById('dienTich').innerHTML = dienTich;
}


// tính tiền lương nhân viên
function TinhTienLuong(){
    // input
    var ngaylam=document.getElementById('ngaylam').value;
    var luong1ngay=document.getElementById('luong1ngay').value;
    // output 
    var TongTienLuong= 0;

    // progress
    TongTienLuong = ngaylam * luong1ngay;
    document.getElementById('TienLuong').innerHTML = TongTienLuong;
}
// <!-- tính giá trị trung bình -->
function TinhGiaTri(){
    // input
    var n1=document.getElementById('num1').value;
    var n2=document.getElementById('num2').value;
    var n3=document.getElementById('num3').value;
    var n4=document.getElementById('num4').value;
    var n5=document.getElementById('num5').value;
    // output
    var GiaTriTrungBinh=0
    // progress
    GiaTriTrungBinh = (parseInt(n1) + parseInt(n2) + parseInt(n3) + parseInt(n4) + parseInt(n5) ) /5;
    document.getElementById('GiaTriTrungBinh').innerHTML =GiaTriTrungBinh;
}

// tính tổng 2 ký số
function Tong2KySo(){
    //input
    var kyso=document.getElementById('2kyso').value;
    // out put
    var Tong=0;
    // progress
    var hangchuc =Math.floor (kyso /10);
    var donvi = Math.floor (kyso % 10);
    Tong = hangchuc+donvi;
    document.getElementById('Tong2KySoo').innerHTML = Tong;
}

//quy đổi tiền
function ChuyenTien(){
    // input
    var usd=document.getElementById('usd').value;
    var vnd=document.getElementById('vnd').value;
    console.log(usd);
    console.log(vnd);

    // output
    var QuyDoi = 0;
    // progress
     QuyDoi = usd * vnd;
    document.getElementById('QuyDoi').innerHTML= QuyDoi;
    

}








