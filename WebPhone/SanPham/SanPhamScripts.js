var HeaderData, CongTyData, SanPhamData;

const apiURL = 'http://localhost:3001'
const serverURL = 'http://localhost:3000'

// function numberWithDots(x) {
//     return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
// }

document.addEventListener("DOMContentLoaded", function () {

    const productList = document.getElementById("product-list");
    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevBtn");
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");

    let startIndex = 0; // Chỉ số của sản phẩm đầu tiên được hiển thị
    let filteredSanPhamData = []; // Mảng để lưu trữ sản phẩm sau khi lọc

    // Hàm để hiển thị danh sách sản phẩm từ chỉ số startIndex
    async function renderProductList(dataToRender) {
        productList.innerHTML = ''; // Xóa danh sách sản phẩm hiện tại

        // Lấy dữ liệu sản phẩm nếu chưa có
        if (!dataToRender) {
            await fetch(apiURL + '/api/getSanPhamData', { mode: 'cors' })
                .then(response => response.json())
                .then(data => {
                    SanPhamData = data;
                    filteredSanPhamData = SanPhamData; // Ban đầu hiển thị toàn bộ sản phẩm
                    return filteredSanPhamData;
                });
        }

        // Dữ liệu để hiển thị là `filteredSanPhamData`
        const dataToDisplay = dataToRender || filteredSanPhamData;

        // Hiển thị sản phẩm từ `startIndex` đến `startIndex + 9`
        for (let i = startIndex; i < Math.min(startIndex + 9, dataToDisplay.length); i++) {
            const product = dataToDisplay[i];

            // Tạo phần tử sản phẩm (tương tự như bạn đã làm)
            const productCard = document.createElement("div");
            productCard.classList.add("card", "mb-2");
            productCard.style.width = "345px";
            productCard.style.borderRadius = "10px";
            productCard.style.border = "2px solid #000";
            
            const cardBody = document.createElement("div");
            cardBody.classList.add("card-body");

            const productImage = document.createElement("img");
            productImage.src = product.hinhAnh;
            productImage.alt = product.ten;
            productImage.classList.add("img-fluid", "rounded-start");
            productImage.style.width = "100%";

            const productName = document.createElement("h5");
            productName.classList.add("card-title", "mb-0");
            productName.style.color = "#009DCE";
            productName.textContent = product.ten;

            const productPrice = document.createElement("p");
            productPrice.classList.add("card-text", "mb-0");
            productPrice.style.color = "red";
            productPrice.style.fontWeight = "bold";
            productPrice.textContent = "Giá: Liên hệ";

            cardBody.appendChild(productImage);
            cardBody.appendChild(productName);
            cardBody.appendChild(productPrice);
            productCard.appendChild(cardBody);
            productList.appendChild(productCard);
            productList.style.marginTop = "27px";

        }

        updatePaginationButtons();
    }

    // Hàm tìm kiếm sản phẩm theo từ khóa
    function searchProducts() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        
        // Lọc danh sách sản phẩm dựa trên từ khóa tìm kiếm
        filteredSanPhamData = SanPhamData.filter(product => product.ten.toLowerCase().includes(searchTerm));
        
        // Đặt lại chỉ số bắt đầu và hiển thị sản phẩm sau khi tìm kiếm
        startIndex = 0;
        renderProductList(filteredSanPhamData);
        updatePaginationButtons();
    }

    // Thêm sự kiện "click" vào nút tìm kiếm
    searchButton.onclick = function() {
        searchProducts();
    }

    // Thêm sự kiện "keydown" để tìm kiếm khi nhấn Enter trong ô input
    searchInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            searchProducts();
        }
    });

    // Hàm để cập nhật trạng thái của nút phân trang
    async function updatePaginationButtons() {
        if (startIndex <= 0) {
            prevBtn.disabled = true;
        } else {
            prevBtn.disabled = false;
        }

        if (startIndex + 9 >= filteredSanPhamData.length) {
            nextBtn.disabled = true;
        } else {
            nextBtn.disabled = false;
        }
    }

    const makeAPICall = async () => {
        await fetch(apiURL + '/api/getHeaderData', { mode: 'cors' })
            .then(response => response.json())
            .then(data => {
                HeaderData = data
                return HeaderData
            })
            .then(() => {
                document.getElementById("title").src = serverURL + HeaderData[0].hinhAnh
                document.getElementById("scrollpane").src = serverURL + HeaderData[1].hinhAnh
            })
            .catch(error => console.error('Error when fetching Header Data:' + error));
    }

    const fecthCongTyData = async () => {
        await fetch(apiURL + '/api/getCongTyData', { mode: 'cors' })
            .then(response => response.json())
            .then(data => {
                CongTyData = data;
                return CongTyData
            })
            .then(() => {
                document.getElementById("footerTitle").innerText = CongTyData[0].ten
                document.getElementById("infoDisplay").innerHTML += "<li>Trụ sở: " + CongTyData[0].diaChi;
                document.getElementById("infoDisplay").innerHTML += "<li>Chi nhánh: " + CongTyData[0].chiNhanh;
                document.getElementById("infoDisplay").innerHTML += "<li>Tel: " + CongTyData[0].sdt1 + " - " + CongTyData[0].sdt2 + " Hotline: " + CongTyData[0].hotline;
                document.getElementById("infoDisplay").innerHTML += "<li>Giấy phép kinh doanh số: " + CongTyData[0].giayPhepKinhDoanh;
                document.getElementById("infoDisplay").innerHTML += "<li>Copyright 2018 © Bản quyền thuộc về Công ty"
            })
            .catch(error => console.error('Error when fetching Cong ty Data: ' + error));
    }

    makeAPICall()
    fecthCongTyData()

    // Hàm để xử lý khi nhấn nút "Next"
    nextBtn.onclick = function () {
        startIndex += 9; // Tăng chỉ số bắt đầu lên 9
        renderProductList(); // Hiển thị danh sách sản phẩm mới
        updatePaginationButtons(); // Cập nhật trạng thái của nút "Prev" và "Next"
    }

    // Hàm để xử lý khi nhấn nút "Prev"
    prevBtn.onclick = function () {
        startIndex -= 9; // Giảm chỉ số bắt đầu xuống 9
        renderProductList(); // Hiển thị danh sách sản phẩm mới
        updatePaginationButtons(); // Cập nhật trạng thái của nút "Prev" và "Next"
    }

    // Hàm để cập nhật trạng thái của nút "Prev" và "Next"
    async function updatePaginationButtons() {
        if (startIndex <= 0) {
            prevBtn.disabled = true; // Vô hiệu hóa nút "Prev" nếu không có sản phẩm trước đó
        } else {
            prevBtn.disabled = false;
        }

        await fetch(apiURL + '/api/getSanPhamData', { mode: 'cors' })
            .then(response => response.json())
            .then(data => {
                SanPhamData = data
                return SanPhamData
            })
            .then(SanPhamData => {
                if (startIndex + 9 >= SanPhamData.length) {
                    nextBtn.disabled = true; // Vô hiệu hóa nút "Next" nếu không còn sản phẩm nào để hiển thị
                } else {
                    nextBtn.disabled = false;
                }
            })
    }

    // Hiển thị danh sách sản phẩm khi trang web được tải lần đầu
    renderProductList();
    updatePaginationButtons();
});



var TrangChu = document.getElementById('trangChu')
var ChungNhan = document.getElementById('chungNhan')
var BaoHanh = document.getElementById('baoHanh')
var HuongDanSuDung = document.getElementById('huongDanSuDung')
var CongTrinhTieuBieu = document.getElementById('congTrinhTieuBieu')
var TinTuc = document.getElementById('last')
var LienHe = document.getElementById('chatbox')

// Các mục trong menu Tra cứu
var navSanPham = document.getElementById('navSanPham');
var navChungNhan = document.getElementById('navChungNhan');
var navBaoHanh = document.getElementById('navBaoHanh');
var navHuongDanSuDung = document.getElementById('navHuongDanSuDung');
var navCongTrinhTieuBieu = document.getElementById('navCongTrinhTieuBieu');
var navLienHe = document.getElementById('navLienHe');

TrangChu.onclick = function () {
    window.location = '/Home'
}

BaoHanh.onclick = function () {
    window.location = '/BaoHanh'
}

ChungNhan.onclick = function () {
    window.location = '/ChungNhan'
}

HuongDanSuDung.onclick = function () {
    window.location = '/HuongDanSuDung'
}

CongTrinhTieuBieu.onclick = function () {
    window.location = '/CongTrinhTieuBieu'
}

TinTuc.onclick = function () {
    window.location = '/TinTuc'
}

LienHe.onclick = function() {
    window.location = '/LienHe'
}

// Điều hướng từ menu "Tra cứu"
navSanPham.onclick = function() {
    window.location = '/SanPham';
}

navChungNhan.onclick = function() {
    window.location = '/ChungNhan';
}

navBaoHanh.onclick = function() {
    window.location = '/BaoHanh';
}

navHuongDanSuDung.onclick = function() {
    window.location = '/HuongDanSuDung';
}

navCongTrinhTieuBieu.onclick = function() {
    window.location = '/CongTrinhTieuBieu';
}

navLienHe.onclick = function() {
    window.location = '/LienHe';
}