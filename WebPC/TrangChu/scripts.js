var HeaderData, CongTyData, ChungNhanData;

const apiURL = 'http://localhost:3001'
const serverURL = 'http://localhost:3000'

const makeAPICall = async() => {
    await fetch(apiURL + '/api/getHeaderData', {mode: 'cors'})
        .then(response => response.json())
        .then(data => {
            HeaderData = data
            return HeaderData
        })
        .then (() => {
            document.getElementById("title").src = serverURL + HeaderData[0].hinhAnh
            document.getElementById("scrollpane").src = serverURL + HeaderData[1].hinhAnh
        })
        .catch(error => console.error('Error when fetching Header Data:' + error));                                                                                             
}

const fecthCongTyData = async() => {
    await fetch(apiURL + '/api/getCongTyData', {mode: 'cors'})
        .then(response => response.json())
        .then(data => {
            CongTyData = data;
            return CongTyData
        })
        .then (() => {
            document.getElementById("footerTitle").innerText = CongTyData[0].ten
            document.getElementById("infoDisplay").innerHTML += "<li style='font-size: 10;'>Trụ sở: " + CongTyData[0].diaChi;
            document.getElementById("infoDisplay").innerHTML += "<li style='font-size: 10;'>Chi nhánh: " + CongTyData[0].chiNhanh;
            document.getElementById("infoDisplay").innerHTML += "<li style='font-size: 10;'>Tel: " + CongTyData[0].sdt1 + " - " + CongTyData[0].sdt2 + " Hotline: " + CongTyData[0].hotline;
            document.getElementById("infoDisplay").innerHTML += "<li style='font-size: 10;'>Giấy phép kinh doanh số: " + CongTyData[0].giayPhepKinhDoanh;
            document.getElementById("infoDisplay").innerHTML += "<li style='font-size: 10;'>Copyright 2018 © Bản quyền thuộc về Công ty"
        })
        .catch(error => console.error('Error when fetching Cong ty Data: ' + error));
}

const fetchChungNhanData = async() => {
    await fetch(apiURL + '/api/getChungNhanData', {mode: 'cors'})
        .then(response => response.json())
        .then(data => {
            ChungNhanData = data;
            return ChungNhanData;
        })
        .then (() => {
            document.getElementById('firstCer').src = ChungNhanData[0].hinhAnh;
            document.getElementById('secondCer').src = ChungNhanData[1].hinhAnh;
        })
        .catch(error => console.error("Error when fetching Chung Nhan: " + error))
}

makeAPICall()
fecthCongTyData()
fetchChungNhanData()

var TrangChu = document.getElementById('first')
var SanPham = document.getElementById('sanPham')
var ChungNhan = document.getElementById('chungNhan')
var BaoHanh = document.getElementById('baoHanh')
var HuongDanSuDung = document.getElementById('huongDanSuDung')
var CongTrinhTieuBieu = document.getElementById('congTrinhTieuBieu')
var TinTuc = document.getElementById('last')
var LienHe = document.getElementById('chatbox')

TrangChu.onclick = function() {
    window.location = '/'
}

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