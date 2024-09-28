let HeaderData, CongTyData;

const apiURL = 'http://localhost:3001';
const serverURL = 'http://localhost:3000';

// Hàm lấy và hiển thị dữ liệu header
const makeAPICall = async () => {
    await fetch(apiURL + '/api/getHeaderData', { mode: 'cors' })
        .then(response => response.json())
        .then(data => {
            HeaderData = data;
            return HeaderData;
        })
        .then(() => {
            document.getElementById('title').src = serverURL + HeaderData[0].hinhAnh;
            document.getElementById('scrollpane').src = serverURL + HeaderData[1].hinhAnh;
        })
        .catch(err => console.error('Error when fetching Header Data: ' + err));
};

// Hàm lấy và hiển thị dữ liệu footer
const fetchCongTyData = async () => {
    await fetch(apiURL + '/api/getCongTyData', { mode: 'cors' })
        .then(response => response.json())
        .then(data => {
            CongTyData = data;
            return CongTyData;
        })
        .then(() => {
            document.getElementById("footerTitle").innerText = CongTyData[0].ten;
            document.getElementById("infoDisplay").innerHTML += "<li>Trụ sở: " + CongTyData[0].diaChi;
            document.getElementById("infoDisplay").innerHTML += "<li>Chi nhánh: " + CongTyData[0].chiNhanh;
            document.getElementById("infoDisplay").innerHTML += "<li>Tel: " + CongTyData[0].sdt1 + " - " + CongTyData[0].sdt2 + " Hotline: " + CongTyData[0].hotline;
            document.getElementById("infoDisplay").innerHTML += "<li>Giấy phép kinh doanh số: " + CongTyData[0].giayPhepKinhDoanh;
            document.getElementById("infoDisplay").innerHTML += "<li>Copyright 2018 © Bản quyền thuộc về Công ty";
        })
        .catch(err => console.log('Error when fetching Cong Ty Data: ' + err));
};

// Gọi hàm lấy dữ liệu header và footer khi tải trang
makeAPICall();
fetchCongTyData();