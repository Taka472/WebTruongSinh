document.getElementById("title").src = HeaderData[0].hinhAnh
document.getElementById("scrollpane").src = HeaderData[1].hinhAnh

document.getElementById("firstCer").src = ChungNhanData[0].hinhAnh
document.getElementById("secondCer").src = ChungNhanData[1].hinhAnh

document.getElementById("footerTitle").innerText = CongTyData.ten
document.getElementById("infoDisplay").innerHTML += "<li>Trụ sở: " + CongTyData.diaChi;
document.getElementById("infoDisplay").innerHTML += "<li>Chi nhánh: " + CongTyData.chiNhanh;
document.getElementById("infoDisplay").innerHTML += "<li>Tel: " + CongTyData.sdt[0] + " - " + CongTyData.sdt[1] + " Hotline: " + CongTyData.hotline;
document.getElementById("infoDisplay").innerHTML += "<li>Giấy phép kinh doanh số: " + CongTyData.giayPhepKinhDoanh;
document.getElementById("infoDisplay").innerHTML += "<li>Copyright 2018 © Bản quyền thuộc về Công ty"