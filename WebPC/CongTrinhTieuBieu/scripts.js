let thisPage = 1;
let limit = 6;

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

function displayCongTrinhTieuBieu() {
    var gallery = document.getElementById('gallery');

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

displayCongTrinhTieuBieu();


// var SanPham = document.getElementById('sanPham')
// var ChungNhan = document.getElementById('chungNhan')
// var BaoHanh = document.getElementById('baoHanh')
// var HuongDanSuDung = document.getElementById('huongDanSuDung')
// var CongTrinhTieuBieu = document.getElementById('congTrinhTieuBieu')
// var TinTuc = document.getElementById('last')
// var LienHe = document.getElementById('chatbox')

// SanPham.onclick = function() {
//     window.location = '/SanPham'
// }

// BaoHanh.onclick = function() {
//     window.location = '/BaoHanh'
// }

// ChungNhan.onclick = function() {
//     window.location = '/ChungNhan'
// }

// HuongDanSuDung.onclick = function() {
//     window.location = '/HuongDanSuDung'
// }

// CongTrinhTieuBieu.onclick = function() {
//     window.location = '/CongTrinhTieuBieu'
// }

// TinTuc.onclick = function() {
//     window.location = '/TinTuc'
// }

// LienHe.onclick = function() {
//     window.location = '/LienHe'
// }

document.getElementById("title").src = HeaderData[0].hinhAnh
document.getElementById("scrollpane").src = HeaderData[1].hinhAnh

document.getElementById("footerTitle").innerText = CongTyData.ten
document.getElementById("infoDisplay").innerHTML += "<li>Trụ sở: " + CongTyData.diaChi;
document.getElementById("infoDisplay").innerHTML += "<li>Chi nhánh: " + CongTyData.chiNhanh;
document.getElementById("infoDisplay").innerHTML += "<li>Tel: " + CongTyData.sdt[0] + " - " + CongTyData.sdt[1] + " Hotline: " + CongTyData.hotline;
document.getElementById("infoDisplay").innerHTML += "<li>Giấy phép kinh doanh số: " + CongTyData.giayPhepKinhDoanh;
document.getElementById("infoDisplay").innerHTML += "<li>Copyright 2018 © Bản quyền thuộc về Công ty"