var HeaderData, CongTyData, SanPhamData;

const serverURL = 'http://localhost:3000'
const apiURL = 'http://localhost:3001'

const makeAPICall = async () => {
    await fetch(apiURL + '/api/getHeaderData', { mode: 'cors' })
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

// Hiển thị sản phẩm
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
        if (!SanPhamData) {
            await fetch(apiURL + '/api/getSanPhamData', { mode: 'cors' })
                .then(response => response.json())
                .then(data => {
                    SanPhamData = data;
                    filteredSanPhamData = SanPhamData; // Ban đầu hiển thị toàn bộ sản phẩm
                })
                .catch(err => console.error('Error when fetching SanPham Data:', err));
        }

        // Sử dụng dữ liệu sản phẩm để hiển thị (nếu đã được truyền)
        const dataToDisplay = dataToRender || filteredSanPhamData;

        // Hiển thị sản phẩm từ `startIndex` đến `startIndex + 6`
        for (let i = startIndex; i < Math.min(startIndex + 6, dataToDisplay.length); i++) {
            const product = dataToDisplay[i];

            // Tạo phần tử sản phẩm
            const productCard = document.createElement("div");
            productCard.classList.add("card", "mb-2");
            productCard.style.width = "40%"; // Mỗi sản phẩm chiếm 45% chiều rộng để có khoảng trống giữa các sản phẩm
            productCard.style.margin = "10px"; // Thêm khoảng cách giữa các sản phẩm
            productCard.style.borderRadius = "10px";
            productCard.style.border = "2px solid #000";

            const cardBody = document.createElement("div");
            cardBody.classList.add("card-body");

            // Sử dụng flexbox để căn giữa toàn bộ nội dung theo chiều ngang và dọc
            cardBody.style.display = "flex";
            cardBody.style.flexDirection = "column"; // Sắp xếp theo chiều dọc
            cardBody.style.alignItems = "center"; // Căn giữa theo chiều ngang

            const productImage = document.createElement("img");
            productImage.src = product.hinhAnh;
            productImage.alt = product.ten;
            productImage.classList.add("img-fluid", "rounded-start");
            productImage.style.marginTop = "10px"
            productImage.style.width = "90%"; // Đảm bảo hình ảnh sản phẩm rộng 90% trên các thiết bị nhỏ

            const productName = document.createElement("h4");
            productName.classList.add("card-title", "mb-0");
            productName.style.marginTop = "10px";
            productName.style.marginBottom = "10px";
            productName.style.color = "#009DCE";
            productName.style.textAlign = "center"; // Căn giữa tên sản phẩm theo chiều ngang
            productName.textContent = product.ten;

            const productPrice = document.createElement("p");
            productPrice.classList.add("card-text", "mb-0");
            productPrice.style.color = "red";
            productPrice.style.marginTop = "10px";
            productPrice.style.marginTop = "10px";
            productPrice.style.fontWeight = "bold";
            productPrice.style.textAlign = "center"; // Căn giữa giá sản phẩm theo chiều ngang
            productPrice.textContent = "Giá: Liên hệ";

            cardBody.appendChild(productImage);
            cardBody.appendChild(productName);
            cardBody.appendChild(productPrice);
            productCard.appendChild(cardBody);
            productList.appendChild(productCard);
        }

        // Cập nhật kiểu của productList để hiển thị sản phẩm theo hàng ngang
        productList.style.display = "flex";
        productList.style.flexWrap = "wrap"; // Cho phép gói (wrap) các sản phẩm thành nhiều hàng
        //productList.style.marginLeft = "20px"
        productList.style.justifyContent = "center";
        productList.style.marginTop = "10px";

        // Cập nhật trạng thái nút phân trang
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
    }

    // Thêm sự kiện "click" vào nút tìm kiếm
    searchButton.onclick = function () {
        searchProducts();
    };

    // Thêm sự kiện "keydown" để tìm kiếm khi nhấn Enter trong ô input
    searchInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            searchProducts();
        }
    });

    // Hàm để cập nhật trạng thái của nút phân trang
    function updatePaginationButtons() {
        prevBtn.disabled = startIndex <= 0;
        nextBtn.disabled = startIndex + 6 >= filteredSanPhamData.length;
    }

    // Hàm để xử lý khi nhấn nút "Next"
    nextBtn.onclick = function () {
        startIndex += 6; // Hiển thị 6 sản phẩm tiếp theo
        renderProductList();
    };

    // Hàm để xử lý khi nhấn nút "Prev"
    prevBtn.onclick = function () {
        startIndex -= 6; // Hiển thị 6 sản phẩm trước đó
        renderProductList();
    };

    // Hiển thị danh sách sản phẩm khi trang web được tải lần đầu
    renderProductList();
});



const fetchCongTyData = async () => {
    await fetch(apiURL + '/api/getCongTyData', { mode: 'cors' })
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

var sideMenu = document.getElementById('sideMenu')
var menu = document.getElementById('menu')
var close = document.getElementById('closeSideMenu')

menu.onclick = function () {
    sideMenu.style.width = '45%'
    sideMenu.style.padding = '20px';
}

close.onclick = function () {
    sideMenu.style.width = '0%'
}

// MENU ẩn

// Mở hoặc đóng menu khi nhấn vào nút menu
document.getElementById("menu").addEventListener("click", function(event) {
    event.stopPropagation(); // Ngăn sự kiện click lan ra ngoài
    var sideMenu = document.getElementById("sideMenu");
    
    // Kiểm tra trạng thái của menu
    if (sideMenu.classList.contains("open")) {
        sideMenu.classList.remove("open"); // Đóng menu nếu nó đang mở
    } else {
        sideMenu.classList.add("open"); // Mở menu khi nhấn vào
    }
});

// Đóng menu nếu nhấn bên ngoài menu
document.addEventListener("click", function(event) {
    var sideMenu = document.getElementById("sideMenu");
    var menuIcon = document.getElementById("menu");
    
    // Kiểm tra nếu nhấn không phải trong menu hoặc menuIcon, thì đóng menu
    if (!sideMenu.contains(event.target) && !menuIcon.contains(event.target)) {
        sideMenu.classList.remove("open");
    }
});


