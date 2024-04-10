document.getElementById("title").src = HeaderData[0].hinhAnh
document.getElementById("scrollpane").src = HeaderData[1].hinhAnh

document.getElementById("footerTitle").innerText = CongTyData.ten
document.getElementById("infoDisplay").innerHTML += "<li>Trụ sở: " + CongTyData.diaChi;
document.getElementById("infoDisplay").innerHTML += "<li>Chi nhánh: " + CongTyData.chiNhanh;
document.getElementById("infoDisplay").innerHTML += "<li>Tel: " + CongTyData.sdt[0] + " - " + CongTyData.sdt[1] + " Hotline: " + CongTyData.hotline;
document.getElementById("infoDisplay").innerHTML += "<li>Giấy phép kinh doanh số: " + CongTyData.giayPhepKinhDoanh;
document.getElementById("infoDisplay").innerHTML += "<li>Copyright 2018 © Bản quyền thuộc về Công ty"

// Định nghĩa một class Product
class Product {
    constructor(id, ten,  gia, baoHanh, loai, hinhAnh) {
        this.id = id;
        this.ten = ten;
        this.gia = gia;
        this.baoHanh = baoHanh;
        this.loai = loai;
        this.hinhAnh = hinhAnh;
    }
}
// Tạo một số sản phẩm
const products = [
    new Product(1 ,'Big One'                , 50000, '', 'bot tret tuong', '../../Data_(DO_NOT_DELETE)/Image/BigOne.png'),
    new Product(2 ,'Kenee'                  , 50000, '', 'bot tret tuong', '../../Data_(DO_NOT_DELETE)/Image/Kenee.png'),
    new Product(3 ,'Lucky'                  , 50000, '', 'bot tret tuong', '../../Data_(DO_NOT_DELETE)/Image/Lucky.png'),
    new Product(4 ,'Master Lite'            , 50000, '', 'bot tret tuong', '../../Data_(DO_NOT_DELETE)/Image/MasterLite.png'),
    new Product(5 ,'Ruby'                   , 50000, '', 'bot tret tuong', '../../Data_(DO_NOT_DELETE)/Image/Ruby.png'),
    new Product(6 ,'Vigen Lite'             , 50000, '', 'bot tret tuong', '../../Data_(DO_NOT_DELETE)/Image/VigenLite.png'),
    new Product(7 ,'Viogen'                 , 50000, '', 'bot tret tuong', '../../Data_(DO_NOT_DELETE)/Image/Viogen.png'),
    new Product(8 ,'Viogen Nội Thất'        , 50000, '6 năm', 'bot tret tuong', '../../Data_(DO_NOT_DELETE)/Image/ViogenNộiThất.png'),
    new Product(9 ,'Viogen Ngoại Thất'      , 50000, '4 năm', 'bot tret tuong', '../../Data_(DO_NOT_DELETE)/Image/ViogenNgoạiThất.png'),
    new Product(10 ,'Ruby Nội Thất'         , 50000, '', 'bot tret tuong', '../../Data_(DO_NOT_DELETE)/Image/RubyNộiThất.png'),
    new Product(11 ,'Ruby Ngoại Thất'       , 50000, '', 'bot tret tuong', '../../Data_(DO_NOT_DELETE)/Image/RubyNgoạiThất.png'),
    new Product(12 ,'Big One Nội Thất'      , 50000, '', 'bot tret tuong', '../../Data_(DO_NOT_DELETE)/Image/BigOneNộiThất.png'),
    new Product(13 ,'Big One Ngoại Thất'    , 50000, '', 'bot tret tuong', '../../Data_(DO_NOT_DELETE)/Image/BigOneNgoạiThất.png'),
    new Product(14 ,'Vigen Lite Nội Thất'   , 50000, '', 'bot tret tuong', '../../Data_(DO_NOT_DELETE)/Image/VigenLiteNộiThất.png'),
    new Product(15 ,'Vigen Lite Ngoại Thất' , 50000, '', 'bot tret tuong', '../../Data_(DO_NOT_DELETE)/Image/VigenLiteNgoạiThất.png'),
    new Product(16 ,'Master Lite Nội Thất', 50000, '', 'bot tret tuong', '../../Data_(DO_NOT_DELETE)/Image/MasterLiteNộiThất.png'),
    new Product(17 ,'Master Lite Ngoại Thất', 50000, '', 'bot tret tuong', '../../Data_(DO_NOT_DELETE)/Image/MasterLiteNgoạiThất.png'),
    new Product(18 ,'Kenee Nội Thất', 50000, '', 'bot tret tuong', '../../Data_(DO_NOT_DELETE)/Image/KeneeNộiThất.png'),
    new Product(19 ,'Kenee Ngoại Thất', 50000, '', 'bot tret tuong', '../../Data_(DO_NOT_DELETE)/Image/KeneeNgoạiThất.png'),
    new Product(20 ,'Lucky Nội Thất', 50000, '5 năm', 'bot tret tuong', '../../Data_(DO_NOT_DELETE)/Image/LuckyNộiThất.png'),
    new Product(21 ,'Lucky Ngoại Thất', 50000, '3 năm', 'bot tret tuong', '../../Data_(DO_NOT_DELETE)/Image/LuckyNgoạiThất.png'),
    new Product(22 ,'Gold Nội Thất', 50000, '4 năm', 'bot tret tuong', '../../Data_(DO_NOT_DELETE)/Image/GoldNộiThất.png'),
    new Product(23 ,'Gold Ngoại Thất', 50000, '2 năm', 'bot tret tuong', '../../Data_(DO_NOT_DELETE)/Image/GoldNgoạiThất.png'),
    new Product(24 ,'Simon Nội Thất', 50000, '4 năm', 'bot tret tuong', '../../Data_(DO_NOT_DELETE)/Image/SimonNộiThất.png'),
    new Product(25 ,'Simon Ngoại Thất', 50000, '2 năm', 'bot tret tuong', '../../Data_(DO_NOT_DELETE)/Image/SimonNgoạiThất.png'),
    new Product(26 ,'Ogen Nội Thất', 50000, '4 năm', 'bot tret tuong', '../../Data_(DO_NOT_DELETE)/Image/OgenNộiThất.png'),
    new Product(27 ,'Ogen Ngoại Thất', 50000, '2 năm', 'bot tret tuong', '../../Data_(DO_NOT_DELETE)/Image/OgenNgoạiThất.png'),
    new Product(28 ,'Danton Nội Thất', 50000, '4 năm', 'bot tret tuong', '../../Data_(DO_NOT_DELETE)/Image/DantonNộiThất.png'),
    new Product(29 ,'Danton Ngoại Thất', 50000, '2 năm', 'bot tret tuong', '../../Data_(DO_NOT_DELETE)/Image/DantonNgoạiThất.png'),
    new Product(30 ,'Nanofa Nội Thất', 50000, '', 'bot tret tuong', '../../Data_(DO_NOT_DELETE)/Image/NanofaNộiThất.png'),
    new Product(31 ,'Nanofa Ngoại Thất', 50000, '', 'bot tret tuong', '../../Data_(DO_NOT_DELETE)/Image/NanofaNgoạiThất.png'),
    new Product(32 ,'Fostar Nội Thất', 50000, '', 'bot tret tuong', '../../Data_(DO_NOT_DELETE)/Image/FostarNộiThất.png'),
    new Product(33 ,'Fostar Ngoại Thất', 50000, '', 'bot tret tuong', '../../Data_(DO_NOT_DELETE)/Image/FostarNgoạiThất.png'),
    new Product(34 ,'Master Nội Thất', 50000, '4 năm', 'bot tret tuong', '../../Data_(DO_NOT_DELETE)/Image/MasterNộiThất.png'),
    new Product(35 ,'Master Ngoại Thất', 50000, '2 năm', 'bot tret tuong', '../../Data_(DO_NOT_DELETE)/Image/MasterNgoạiThất.png'),
    new Product(36 ,'Valtex Nội Thất', 50000, '4 năm', 'bot tret tuong', '../../Data_(DO_NOT_DELETE)/Image/ValtexNộiThất.png'),
    new Product(37 ,'Valtex Ngoại Thất', 50000, '2 năm', 'bot tret tuong', '../../Data_(DO_NOT_DELETE)/Image/ValtexNgoạiThất.png'),
    new Product(38 ,'Vigen Nội Thất', 50000, '4 năm', 'bot tret tuong', '../../Data_(DO_NOT_DELETE)/Image/VigenNộiThất.png'),
    new Product(39 ,'Vigen Ngoại Thất', 50000, '2 năm', 'bot tret tuong', '../../Data_(DO_NOT_DELETE)/Image/VigenNgoạiThất.png'),
    // Các sản phẩm còn lại
    new Product(40 ,'Emperor Nội Thất', '', '7 năm', '', ''),
    new Product(41 ,'Emperor Ngoại Thất', '', '5 năm', '', ''),
];


// đọc data
document.addEventListener("DOMContentLoaded", function() {
    const products = [ /* Danh sách sản phẩm */ ];

    const productList = document.getElementById("product-list");

    // Lặp qua từng sản phẩm và tạo HTML để hiển thị
    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        const productImage = document.createElement("img");
        productImage.src = product.hinhAnh;
        productImage.alt = product.ten;

        const productName = document.createElement("h3");
        productName.textContent = product.ten;

        const productPrice = document.createElement("p");
        productPrice.textContent = "Giá: " + product.gia;

        const productWarranty = document.createElement("p");
        productWarranty.textContent = "Bảo hành: " + product.baoHanh;

        // Thêm các phần tử vào sản phẩm
        productCard.appendChild(productImage);
        productCard.appendChild(productName);
        productCard.appendChild(productPrice);
        productCard.appendChild(productWarranty);

        // Thêm sản phẩm vào danh sách
        productList.appendChild(productCard);
    });
});
