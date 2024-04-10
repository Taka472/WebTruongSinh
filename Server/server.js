const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const dir_name = "D:/WebTruongSinh";

app.get('/', (req, res) => {
    res.sendFile(dir_name + "/WebPC/TrangChu/main.html");
})

app.get('/SanPham', (req, res) => {
    res.sendFile(dir_name + "/WebPC/SanPham/main.html")
})

app.get('/TinTuc', (req, res) => {
    res.sendFile(dir_name + "/WebPc/TinTuc/main.html")
})

app.get('/BaoHanh', (req, res) => {
    res.sendFile(dir_name + "/WebPC/BaoHanh/main.html")
})

app.get('/ChungNhan', (req, res) => {
    res.sendFile(dir_name + "/WebPC/ChungNhan/main.html")
})

app.get('/CongTrinhTieuBieu', (req, res) => {
    res.sendFile(dir_name + "/WebPC/CongTrinhTieuBieu/main.html")
})

app.get('/HuongDanSuDung', (req, res) => {
    res.sendFile(dir_name + "/WebPC/HuongDanSuDung/main.html")
})

app.get('/LienHe', (req, res) => {
    res.sendFile(dir_name + "/WebPC/LienHe/main.html")
})

app.listen(port, () => {
    console.log('App listening at port ' + port);
})