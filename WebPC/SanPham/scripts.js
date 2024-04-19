document.getElementById("title").src = HeaderData[0].hinhAnh
document.getElementById("scrollpane").src = HeaderData[1].hinhAnh

document.getElementById("footerTitle").innerText = CongTyData.ten
document.getElementById("infoDisplay").innerHTML += "<li>Trụ sở: " + CongTyData.diaChi;
document.getElementById("infoDisplay").innerHTML += "<li>Chi nhánh: " + CongTyData.chiNhanh;
document.getElementById("infoDisplay").innerHTML += "<li>Tel: " + CongTyData.sdt[0] + " - " + CongTyData.sdt[1] + " Hotline: " + CongTyData.hotline;
document.getElementById("infoDisplay").innerHTML += "<li>Giấy phép kinh doanh số: " + CongTyData.giayPhepKinhDoanh;
document.getElementById("infoDisplay").innerHTML += "<li>Copyright 2018 © Bản quyền thuộc về Công ty"

document.addEventListener("DOMContentLoaded", function() {
    
    const productList = document.getElementById("product-list");
    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevBtn");

    let startIndex = 0; // Chỉ số của sản phẩm đầu tiên được hiển thị

    // Hàm để hiển thị danh sách sản phẩm từ chỉ số startIndex
    function renderProductList() {
        productList.innerHTML = ''; // Xóa danh sách sản phẩm hiện tại

        // Lặp qua từng sản phẩm từ chỉ số startIndex
        for (let i = startIndex; i < Math.min(startIndex + 9, SanPhamData.length); i++) {
            const product = SanPhamData[i];

            // Tạo phần tử sản phẩm
            const productCard = document.createElement("div");
            productCard.classList.add("card", "mb-2");
            productCard.style.width = "345px";
            productCard.style.borderRadius = "10px"; // Thiết lập border-radius thành 10px
            productCard.style.border = "2px solid #000"; // Thiết lập viền đậm hơn

            // Tạo phần tử card-body
            const cardBody = document.createElement("div");
            cardBody.classList.add("card-body");

            // Tạo phần tử hình ảnh sản phẩm
            const productImage = document.createElement("img");
            productImage.src = product.hinhAnh;
            productImage.alt = product.ten;
            productImage.classList.add("img-fluid", "rounded-start");
            productImage.style.width = "100%";

            // Tạo phần tử tiêu đề sản phẩm
            const productName = document.createElement("h5");
            productName.classList.add("card-title", "mb-0");
            // Đặt màu cho tiêu đề sản phẩm
            productName.style.color = "#009DCE"; // Đặt màu xanh ngọc
            productName.textContent = product.ten;

            // Tạo phần tử giá sản phẩm
            const productPrice = document.createElement("p");
            productPrice.classList.add("card-text", "mb-0");
            // Định dạng màu và in đậm cho giá sản phẩm
            productPrice.style.color = "red"; // Đặt màu đỏ
            productPrice.style.fontWeight = "bold"; // Đặt in đậm
            // Thêm ký tự đơn vị đồng và định dạng số tiền
            const formattedPrice = product.gia.toLocaleString('vi-VN') + "₫"; // Định dạng số tiền và thêm ký tự đơn vị
            productPrice.textContent = "Giá: " + formattedPrice;

            // Tạo phần tử dòng chứa nút Thêm vào giỏ hàng
            const buttonRow = document.createElement("div");
            buttonRow.classList.add("row", "g-0", "justify-content-center");

            // Tạo phần tử cột cho nút Thêm vào giỏ hàng
            const buttonCol = document.createElement("div");
            buttonCol.classList.add("col-md-12", "text-center");

            // Tạo nút Thêm vào giỏ hàng
            const addButton = document.createElement("button");
            addButton.id = "addButtonBasket";
            addButton.textContent = "Thêm vào giỏ";
            addButton.classList.add("add-to-cart-button");

            // Chèn hình ảnh vào card-body
            cardBody.appendChild(productImage);

            // Chèn tiêu đề và giá vào card-body
            cardBody.appendChild(productName);
            cardBody.appendChild(productPrice);

            // Chèn nút vào cột nút
            buttonCol.appendChild(addButton);

            // Chèn cột nút vào dòng nút
            buttonRow.appendChild(buttonCol);

            // Chèn card-body, dòng nút vào card
            productCard.appendChild(cardBody);
            productCard.appendChild(buttonRow);

            // Chèn card vào danh sách sản phẩm
            productList.appendChild(productCard);
        }
}

    // Hàm để xử lý khi nhấn nút "Next"
    nextBtn.onclick = function() {
        startIndex += 9; // Tăng chỉ số bắt đầu lên 9
        renderProductList(); // Hiển thị danh sách sản phẩm mới
        updatePaginationButtons(); // Cập nhật trạng thái của nút "Prev" và "Next"
    }

    // Hàm để xử lý khi nhấn nút "Prev"
    prevBtn.onclick = function() {
        startIndex -= 9; // Giảm chỉ số bắt đầu xuống 9
        renderProductList(); // Hiển thị danh sách sản phẩm mới
        updatePaginationButtons(); // Cập nhật trạng thái của nút "Prev" và "Next"
    }

    // Hàm để cập nhật trạng thái của nút "Prev" và "Next"
    function updatePaginationButtons() {
        if (startIndex <= 0) {
            prevBtn.disabled = true; // Vô hiệu hóa nút "Prev" nếu không có sản phẩm trước đó
        } else {
            prevBtn.disabled = false;
        }

        if (startIndex + 9 >= SanPhamData.length) {
            nextBtn.disabled = true; // Vô hiệu hóa nút "Next" nếu không còn sản phẩm nào để hiển thị
        } else {
            nextBtn.disabled = false;
        }
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

TrangChu.onclick = function() {
    window.location = '/WebPC/TrangChu/main.html'
}

BaoHanh.onclick = function() {
    window.location = '/WebPC/BaoHanh/main.html'
}

ChungNhan.onclick = function() {
    window.location = '/WebPC/ChungNhan/main.html'
}

HuongDanSuDung.onclick = function() {
    window.location = '/WebPC/HuongDanSuDung/main.html'
}

CongTrinhTieuBieu.onclick = function() {
    window.location = '/WebPC/CongTrinhTieuBieu/main.html'
}

TinTuc.onclick = function() {
    window.location = '/WebPC/TinTuc/main.html'
}

LienHe.onclick = function() {
    window.location = '/LienHe/main.html'
}

