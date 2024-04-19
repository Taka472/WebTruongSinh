let thisPage = 1;
let limit = 6;

let TinTucData;

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

    // Lặp qua mỗi thông tin tuyển dụng trong mảng TinTucData
    TinTucData.forEach(function(tinTuyenDung) {
        // Tạo một phần tử div để chứa thông tin tuyển dụng
        var tinTuyenDungElement = document.createElement('div');
        tinTuyenDungElement.classList.add('tin-tuyen-dung');

        // Tạo các phần tử HTML để hiển thị thông tin tuyển dụng
        var hinhAnhElement = document.createElement('img');
        hinhAnhElement.src = tinTuyenDung.hinhAnh;
        tinTuyenDungElement.appendChild(hinhAnhElement);

        var tieuDeElement = document.createElement('h2');
        tieuDeElement.textContent = tinTuyenDung.tieuDe;
        tinTuyenDungElement.appendChild(tieuDeElement);

        var nhanDeElement = document.createElement('p');
        nhanDeElement.textContent = tinTuyenDung.nhanDe;
        tinTuyenDungElement.appendChild(nhanDeElement);

        // Thêm phần tử tinTuyenDungElement vào vùng chứa danh sách thông tin tuyển dụng
        document.getElementById('tuyenDungList').appendChild(tinTuyenDungElement);
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