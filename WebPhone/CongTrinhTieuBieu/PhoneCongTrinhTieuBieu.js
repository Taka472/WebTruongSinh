let thisPage = 1;
let limit = 6;

let HeaderData, CongTyData ,CongTrinhData;

const apiURL = 'http://localhost:3001'
const serverURL = 'http://localhost:3000'

function loadItem(){
    let list = document.querySelectorAll('.list .item'); // Update list here
    let beginGet = limit * (thisPage - 1);
    let endGet = limit * thisPage - 1;
    list.forEach((item, key)=>{
        if(key >= beginGet && key <= endGet){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    });
    listPage();
}

function listPage(){
    let list = document.querySelectorAll('.list .item'); // Update list here
    let count = Math.ceil(list.length / limit);
    document.querySelector('.listPage').innerHTML = '';

    if(thisPage != 1){
        let prev = document.createElement('li');
        prev.innerText = '<<';
        prev.setAttribute('onclick', "changePage(" + (thisPage - 1) + ")");
        document.querySelector('.listPage').appendChild(prev);
    }

    for(i = 1; i <= count; i++){
        let newPage = document.createElement('li');
        newPage.innerText = i;
        if(i == thisPage){
            newPage.classList.add('active');
        }
        newPage.setAttribute('onclick', "changePage(" + i + ")");
        document.querySelector('.listPage').appendChild(newPage);
    }

    if(thisPage != count){
        let next = document.createElement('li');
        next.innerText = '>>';
        next.setAttribute('onclick', "changePage(" + (thisPage + 1) + ")");
        document.querySelector('.listPage').appendChild(next);
    }
}

function changePage(i){
    thisPage = i;
    loadItem();
}

function displayCongTrinhTieuBieu(CongTrinhTieuBieu) {
    var gallery = document.getElementById('gallery');
    console.log(document.getElementById('gallery'))

    CongTrinhTieuBieu.forEach(congTrinh => {
        var itemDiv = document.createElement('div');
        itemDiv.className = 'item';

        var imgElement = document.createElement('img');
        imgElement.src = congTrinh.hinhAnh;
        imgElement.alt = 'Công trình tiêu biểu'; 
        imgElement.className = 'img-thumbnail';

        itemDiv.appendChild(imgElement); // Thêm img vào div.item
        gallery.appendChild(itemDiv); // Thêm div.item vào div#gallery
    });
    loadItem();
}

const fetchCongTrinhTieuBieu = async() => {
    await fetch(apiURL + '/api/getCongTrinhTieuBieu', {mode: 'cors'})
        .then(response => response.json())
        .then(data => {
            CongTrinhTieuBieu = data;
            return CongTrinhTieuBieu
        })
        .then(() => displayCongTrinhTieuBieu(CongTrinhTieuBieu))
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


fetchCongTrinhTieuBieu()
makeAPICall()
fetchCongTyData()
//displayCongTrinhTieuBieu();


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

// document.getElementById("title").src = HeaderData[0].hinhAnh
// document.getElementById("scrollpane").src = HeaderData[1].hinhAnh

// document.getElementById("footerTitle").innerText = CongTyData.ten
// document.getElementById("infoDisplay").innerHTML += "<li>Trụ sở: " + CongTyData.diaChi;
// document.getElementById("infoDisplay").innerHTML += "<li>Chi nhánh: " + CongTyData.chiNhanh;
// document.getElementById("infoDisplay").innerHTML += "<li>Tel: " + CongTyData.sdt[0] + " - " + CongTyData.sdt[1] + " Hotline: " + CongTyData.hotline;
// document.getElementById("infoDisplay").innerHTML += "<li>Giấy phép kinh doanh số: " + CongTyData.giayPhepKinhDoanh;
// document.getElementById("infoDisplay").innerHTML += "<li>Copyright 2018 © Bản quyền thuộc về Công ty"