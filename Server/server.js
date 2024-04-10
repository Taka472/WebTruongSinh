const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const dir_name = "D:/WebTruongSinh";

app.get('/', (req, res) => {
    app.use(express.static(path.join(dir_name, "/Data_(DO_NOT_DELETE)/public")))
    app.use('/Image', express.static("Image"))
    app.use(express.static(path.join(dir_name, "/WebPC/TrangChu")))
    res.sendFile(dir_name + "/WebPC/TrangChu/main.html");
})

app.get('/SanPham', (req, res) => {
    app.use(express.static(path.join(dir_name, "/Data_(DO_NOT_DELETE)/public")))
    app.use('/Image', express.static("Image"))
    app.use(express.static(path.join(dir_name, "/WebPC/SanPham")))
    res.sendFile(dir_name + "/WebPC/SanPham/main.html")
})

app.get('/TinTuc', (req, res) => {
    app.use(express.static(path.join(dir_name, "/Data_(DO_NOT_DELETE)/public")))
    app.use('/Image', express.static("Image"))
    app.use(express.static(path.join(dir_name, "/WebPC/TinTuc")))
    res.sendFile(dir_name + "/WebPc/TinTuc/main.html")
})

app.get('/BaoHanh', (req, res) => {
    app.use(express.static(path.join(dir_name, "/Data_(DO_NOT_DELETE)/public")))
    app.use('/Image', express.static("Image"))
    app.use(express.static(path.join(dir_name, "/WebPC/BaoHanh")))
    res.sendFile(dir_name + "/WebPC/BaoHanh/main.html")
})

app.get('/ChungNhan', (req, res) => {
    app.use(express.static(path.join(dir_name, "/Data_(DO_NOT_DELETE)/public")))
    app.use('/Image', express.static("Image"))
    app.use(express.static(path.join(dir_name, "/WebPC/ChungNhan")))
    res.sendFile(dir_name + "/WebPC/ChungNhan/main.html")
})

app.get('/CongTrinhTieuBieu', (req, res) => {
    app.use(express.static(path.join(dir_name, "/Data_(DO_NOT_DELETE)/public")))
    app.use('/Image', express.static("Image"))
    app.use(express.static(path.join(dir_name, "/WebPC/CongTrinhTieuBieu")))
    res.sendFile(dir_name + "/WebPC/CongTrinhTieuBieu/main.html")
})

app.get('/HuongDanSuDung', (req, res) => {
    app.use(express.static(path.join(dir_name, "/Data_(DO_NOT_DELETE)/public")))
    app.use('/Image', express.static("Image"))
    app.use(express.static(path.join(dir_name, "/WebPC/HuongDanSuDung")))
    res.sendFile(dir_name + "/WebPC/HuongDanSuDung/main.html")
})

app.get('/LienHe', (req, res) => {
    app.use(express.static(path.join(dir_name, "/Data_(DO_NOT_DELETE)/public")))
    app.use('/Image', express.static("Image"))
    app.use(express.static(path.join(dir_name, "/WebPC/LienHe")))
    res.sendFile(dir_name + "/WebPC/LienHe/main.html")
})

app.listen(port, () => {
    console.log('App listening at port ' + port);
})