let HeaderData, ChungNhanData, CongTyData;

const serverURL = 'http://localhost:3000'
const apiURL = 'http://localhost:3001'

const makeAPICall = async() => {
    await fetch(apiURL + '/api/getHeaderData', {mode: 'cors'})
        .then(response => response.json())
        .then(data => {
            HeaderData = data;
            return HeaderData;
        })
        .then(() => {
            document.getElementById('title').src = serverURL + HeaderData[0].hinhAnh
            document.getElementById('scrollpane').src = serverURL + HeaderData[1].hinhAnh
        })
        .catch(err => console.error('Error when fetching Header Data:' + err))
}

const fetchChungNhanData = async() => {
    await fetch(apiURL + '/api/getChungNhanData', {mode: 'cors'})
        .then(response => response.json())
        .then(data => {
            ChungNhanData = data;
            return ChungNhanData;
        })
        .then(() => {
            document.getElementById('firstCer').src = ChungNhanData[0].hinhAnh
            document.getElementById('secondCer').src = ChungNhanData[1].hinhAnh
        })
        .catch(err => console.log('Error when fetching Chung Nhan Data: ' + err))
}

const fetchCongTyData = async() => {
    await fetch(apiURL + '/api/getCongTyData', {mode: 'cors'})
        .then(response => response.json())
        .then(data => {
            CongTyData = data;
            return CongTyData;
        })
        .then(() => {
            document.getElementById("footerTitle").innerText = CongTyData[0].ten
            document.getElementById("infoDisplay").innerHTML += "<li>Trụ sở: " + CongTyData[0].diaChi;
            document.getElementById("infoDisplay").innerHTML += "<li>Chi nhánh: " + CongTyData[0].chiNhanh;
            document.getElementById("infoDisplay").innerHTML += "<li>Tel: " + CongTyData[0].sdt1 + " - " + CongTyData[0].sdt2 + " Hotline: " + CongTyData[0].hotline;
            document.getElementById("infoDisplay").innerHTML += "<li>Giấy phép kinh doanh số: " + CongTyData[0].giayPhepKinhDoanh;
            document.getElementById("infoDisplay").innerHTML += "<li>Copyright 2018 © Bản quyền thuộc về Công ty"
        })
        .catch(err => console.log('Error when fetching Cong Ty Data: ' + err))
}

makeAPICall()
fetchChungNhanData()
fetchCongTyData()

var sideMenu = document.getElementById('sideMenu')
var menu = document.getElementById('menu')
var close = document.getElementById('closeSideMenu')

menu.onclick = function() {
    sideMenu.style.width = '45%'
    sideMenu.style.padding = '20px';
}

close.onclick = function() {
    sideMenu.style.width = '0%'
}