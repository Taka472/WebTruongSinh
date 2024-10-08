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
            // document.getElementById('title').src = serverURL + HeaderData[0].hinhAnh
            document.getElementById('scrollpane').src = serverURL + HeaderData[1].hinhAnh
        })
        .catch(err => console.error('Error when fetching Header Data:' + err))
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
fetchCongTyData()

// document.addEventListener('DOMContentLoaded', function () {
//     var sideMenu = document.getElementById('sideMenu');
//     var menu = document.getElementById('menu');
//     var close = document.getElementById('closeSideMenu');

//     menu.onclick = () => {
//         sideMenu.style.width = '45%';
//         sideMenu.style.padding = '20px';
//     };

//     close.onclick = () => {
//         sideMenu.style.width = '0%';
//     };
// });

function toggleMenu() {
    var sideMenu = document.getElementById("sideMenu");
    var computedStyle = window.getComputedStyle(sideMenu);
    var leftValue = computedStyle.left;

    if (leftValue === "-250px" || leftValue === "") {
        sideMenu.style.left = "0";
    } else {
        sideMenu.style.left = "-250px";
    }
}

var SanPham = document.getElementById('sanPham')
var TrangChu = document.getElementById('trangChu')
var ChungNhan = document.getElementById('chungNhan')
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

const fetchBaoHanhData = async () => {
    try {
        const response = await fetch(apiURL + '/api/getBaoHanhData', { mode: 'cors' });
        
        const SanPhamData = await response.json();
        
        populateTable(SanPhamData);
        
    } catch (error) {
        console.error('Error when fetching BaoHanh Data: ' + error);
    }
};

function extractBaseName(productName) {
    // Loại bỏ các từ khóa như "Nội Thất", "Ngoại Thất" và khoảng trắng thừa
    return productName.replace(/( Nội Thất| Ngoại Thất)/i, '').trim();
}

function populateTable(sanPhamData) {
    const tableBody = document.getElementById('product-table-body');
    const productNames = [];

    sanPhamData.forEach(sp => {
        // Lấy phần tên gốc (loại bỏ Nội Thất, Ngoại Thất)
        const baseName = extractBaseName(sp.ten);

        // Nếu phần tên gốc chưa có trong productNames, thêm vào
        if (!productNames.includes(baseName)) {
            productNames.push(baseName);
        }
    });

    // Duyệt qua các tên sản phẩm đã được lọc
    productNames.forEach(productName => {
        // Tạo hàng mới cho sản phẩm
        const row = document.createElement('tr');

        // Cột tên sản phẩm
        const nameCell = document.createElement('td');
        nameCell.innerText = productName;
        row.appendChild(nameCell);

        // Cột Nội thất
        const noiThatCell = document.createElement('td');
        const noiThatProduct = sanPhamData.find(item => extractBaseName(item.ten) === productName && item.ten.includes('Nội Thất'));
        noiThatCell.innerText = noiThatProduct ? noiThatProduct.baoHanh : 'N/A';
        row.appendChild(noiThatCell);

        // Cột Ngoại thất
        const ngoaiThatCell = document.createElement('td');
        const ngoaiThatProduct = sanPhamData.find(item => extractBaseName(item.ten) === productName && item.ten.includes('Ngoại Thất'));
        ngoaiThatCell.innerText = ngoaiThatProduct ? ngoaiThatProduct.baoHanh : 'N/A';
        row.appendChild(ngoaiThatCell);

        // Thêm hàng vào body của bảng
        tableBody.appendChild(row);
    });
}

fetchBaoHanhData();
