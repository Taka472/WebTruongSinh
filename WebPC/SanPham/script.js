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

    // Lặp qua từng sản phẩm và tạo HTML để hiển thị
    SanPhamData.forEach(SanPhamData => {
        // Tạo phần tử sản phẩm
        const productCard = document.createElement("div");
        productCard.classList.add("card", "mb-2");
        productCard.style.width = "345px";

        // Tạo phần tử dòng trong card
        const cardRow = document.createElement("div");
        cardRow.classList.add("row", "g-0");

        // Tạo phần tử cột cho hình ảnh
        const imageCol = document.createElement("div");
        imageCol.classList.add("col-md-6");

        // Tạo thẻ img cho hình ảnh sản phẩm
        const productImage = document.createElement("img");
        productImage.src = SanPhamData.hinhAnh;
        productImage.alt = SanPhamData.ten;
        productImage.classList.add("img-fluid", "rounded-start");
        productImage.style.width = "100%";

        // Chèn hình ảnh vào cột hình ảnh
        imageCol.appendChild(productImage);

        // Tạo phần tử cột cho thông tin sản phẩm
        const infoCol = document.createElement("div");
        infoCol.classList.add("col-md-6");

        // Tạo phần tử card-body
        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        // Tạo phần tử tiêu đề sản phẩm
        const productName = document.createElement("h5");
        productName.classList.add("card-title", "mb-0");
        // Đặt màu cho tiêu đề sản phẩm
        productName.style.color = "#009DCE"; // Đặt màu xanh ngọc
        productName.textContent = SanPhamData.ten;


        // Tạo phần tử giá sản phẩm
        const productPrice = document.createElement("p");
        productPrice.classList.add("card-text", "mb-0");
        // Định dạng màu và in đậm cho giá sản phẩm
        productPrice.style.color = "red"; // Đặt màu đỏ
        productPrice.style.fontWeight = "bold"; // Đặt in đậm
        // Thêm ký tự đơn vị đồng và định dạng số tiền
        const formattedPrice = SanPhamData.gia.toLocaleString('vi-VN') + "₫"; // Định dạng số tiền và thêm ký tự đơn vị
        productPrice.textContent = "Giá: " + formattedPrice;


        // Tạo nút Thêm vào giỏ hàng
        const addButton = document.createElement("button");
        addButton.id = "addButtonBasket";
        addButton.textContent = "Thêm vào giỏ";

        // Thêm class cho nút
        addButton.classList.add("add-to-cart-button");


        // Chèn tiêu đề, giá và nút vào card-body
        cardBody.appendChild(productName);
        cardBody.appendChild(productPrice);
        cardBody.appendChild(addButton);

        // Chèn card-body vào cột thông tin sản phẩm
        infoCol.appendChild(cardBody);

        // Chèn cột hình ảnh và cột thông tin vào dòng card
        cardRow.appendChild(imageCol);
        cardRow.appendChild(infoCol);

        // Chèn dòng card vào card
        productCard.appendChild(cardRow);

        // Chèn card vào danh sách sản phẩm
        productList.appendChild(productCard);
    });
});


