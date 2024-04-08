let HeaderData, CongTyData;

var SanPham = document.getElementById('sanPham')
var ChungNhan = document.getElementById('chungNhan')
var BaoHanh = document.getElementById('baoHanh')
var HuongDanSuDung = document.getElementById('huongDanSuDung')
var CongTrinhTieuBieu = document.getElementById('congTrinhTieuBieu')
var TinTuc = document.getElementById('last')
var LienHe = document.getElementById('chatbox')

const makeAPICall = async() => {
    try {
        await fetch('http://localhost:3001/TrangChu/getData', {mode: 'cors'})
        .then(response => response.json())
        .then(data => {
            HeaderData = data
            return HeaderData
        })
        // .then(() => {
        //     HeaderData[0].hinhAnh = Buffer.from(HeaderData[0].hinhAnh, 'base64')
        //     return HeaderData
        // })
        .then (() => {
            document.getElementById("title").src = HeaderData[0].hinhAnh
        })
        .catch(error => console.error('Error:', error));

    } catch (e) {
        console.log(e);
    }
}

const fecthCongTyData = async() => {
    try {
        await fetch('http://localhost:3001/getCongTyData', {mode: 'cors'})
        .then(response => response.json())
        .then(data => {
            CongTyData = data;
            return CongTyData
        })
        .then (() => {
            document.getElementById("footerTitle").innerText = CongTyData[0].ten
            document.getElementById("infoDisplay").innerHTML += "<li>Trụ sở: " + CongTyData[0].diaChi;
            document.getElementById("infoDisplay").innerHTML += "<li>Chi nhánh: " + CongTyData[0].chiNhanh;
            document.getElementById("infoDisplay").innerHTML += "<li>Tel: " + CongTyData[0].sdt1 + " - " + CongTyData[0].sdt2 + " Hotline: " + CongTyData[0].hotline;
            document.getElementById("infoDisplay").innerHTML += "<li>Giấy phép kinh doanh số: " + CongTyData[0].giayPhepKinhDoanh;
            document.getElementById("infoDisplay").innerHTML += "<li>Copyright 2018 © Bản quyền thuộc về Công ty"
        })
        .catch(error => console.error('Error:', error));
    } catch(e) {
        console.log(e);
    }
}

makeAPICall()
fecthCongTyData()

SanPham.onclick = function() {
    window.location = '/SanPham'
}

BaoHanh.onclick = function() {
    window.location = '/BaoHanh'
}

ChungNhan.onclick = function() {
    window.location = '/ChungNhan'
}

HuongDanSuDung.onclick = function() {
    window.location = '/HuongDanSuDung'
}

CongTrinhTieuBieu.onclick = function() {
    window.location = '/CongTrinhTieuBieu'
}

TinTuc.onclick = function() {
    window.location = '/TinTuc'
}

LienHe.onclick = function() {
    window.location = '/LienHe'
}

//document.getElementById("firstCer").src = ChungNhanData[0].hinhAnh
//document.getElementById("secondCer").src = ChungNhanData[1].hinhAnh