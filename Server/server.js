const express = require('express');
const path = require('path');
const useragent = require('express-useragent')
const app = express();
const port = 3000;
const verifyToken = require('./Middleware/jwtVerify')

// const dir_name = "D:/HuongTra/Web TS";
const dir_name = "D:/WebTruongSinh";

app.use(useragent.express())

app.get('/', (req, res) => {
    if (req.useragent.isDesktop) {
        app.use(express.static(path.join(dir_name, "/Data_(DO_NOT_DELETE)/public")))
        app.use('/Image', express.static("Image"))
        app.use(express.static(path.join(dir_name, "/WebPC/TrangChu")))
        res.sendFile(dir_name + "/WebPC/TrangChu/main.html");
    }
    else if (req.useragent.isMobile || req.useragent.isTablet) {
        app.use(express.static(path.join(dir_name, "/Data_(DO_NOT_DELETE)/public")))
        app.use('/Image', express.static("Image"))
        app.use(express.static(path.join(dir_name, "/WebPhone/TrangChu")))
        res.sendFile(dir_name + "/WebPhone/TrangChu/main.html");
    }
})

app.get('/SanPham', (req, res) => {
    if (req.useragent.isDesktop) {
        app.use(express.static(path.join(dir_name, "/Data_(DO_NOT_DELETE)/public")))
        app.use('/Image', express.static("Image"))
        app.use(express.static(path.join(dir_name, "/WebPC/SanPham")))
        res.sendFile(dir_name + "/WebPC/SanPham/main.html")
    }
    else if (req.useragent.isMobile || req.useragent.isTablet) {
        app.use(express.static(path.join(dir_name, "/Data_(DO_NOT_DELETE)/public")))
        app.use('/Image', express.static("Image"))
        app.use(express.static(path.join(dir_name, "/WebPhone/SanPham")))
        res.sendFile(dir_name + "/WebPhone/SanPham/main.html");
    }
})

app.get('/TinTuc', (req, res) => {
    if (req.useragent.isDesktop) {
        app.use(express.static(path.join(dir_name, "/Data_(DO_NOT_DELETE)/public")))
        app.use('/Image', express.static("Image"))
        app.use(express.static(path.join(dir_name, "/WebPC/TinTuc")))
        res.sendFile(dir_name + "/WebPc/TinTuc/main.html")
    }
    else if (req.useragent.isMobile || req.useragent.isTablet) {
        app.use(express.static(path.join(dir_name, "/Data_(DO_NOT_DELETE)/public")))
        app.use('/Image', express.static("Image"))
        app.use(express.static(path.join(dir_name, "/WebPhone/TinTuc")))
        res.sendFile(dir_name + "/WebPhone/TinTuc/main.html")
    }
})

app.get('/BaoHanh', (req, res) => {
    if (req.useragent.isDesktop) {
        app.use(express.static(path.join(dir_name, "/Data_(DO_NOT_DELETE)/public")))
        app.use('/Image', express.static("Image"))
        app.use(express.static(path.join(dir_name, "/WebPC/BaoHanh")))
        res.sendFile(dir_name + "/WebPC/BaoHanh/main.html")
    }
    else if (req.useragent.isMobile || req.useragent.isTablet) {
        app.use(express.static(path.join(dir_name, "/Data_(DO_NOT_DELETE)/public")))
        app.use('/Image', express.static("Image"))
        app.use(express.static(path.join(dir_name, "/WebPhone/BaoHanh")))
        res.sendFile(dir_name + "/WebPhone/BaoHanh/main.html")
    }
})

app.get('/ChungNhan', (req, res) => {
    if (req.useragent.isDesktop) {
        app.use(express.static(path.join(dir_name, "/Data_(DO_NOT_DELETE)/public")))
        app.use('/Image', express.static("Image"))
        app.use(express.static(path.join(dir_name, "/WebPC/ChungNhan")))
        res.sendFile(dir_name + "/WebPC/ChungNhan/main.html")
    }
    else if (req.useragent.isMobile || req.useragent.isTablet) {
        app.use(express.static(path.join(dir_name, "/Data_(DO_NOT_DELETE)/public")))
        app.use('/Image', express.static("Image"))
        app.use(express.static(path.join(dir_name, "/WebPhone/ChungNhan")))
        res.sendFile(dir_name + "/WebPhone/ChungNhan/main.html")
    }
})

app.get('/CongTrinhTieuBieu', (req, res) => {
    if (req.useragent.isDesktop) {
        app.use(express.static(path.join(dir_name, "/Data_(DO_NOT_DELETE)/public")))
        app.use('/Image', express.static("Image"))
        app.use(express.static(path.join(dir_name, "/WebPC/CongTrinhTieuBieu")))
        res.sendFile(dir_name + "/WebPC/CongTrinhTieuBieu/main.html")
    }
    else if (req.useragent.isMobile || req.useragent.isTablet) {
        app.use(express.static(path.join(dir_name, "/Data_(DO_NOT_DELETE)/public")))
        app.use('/Image', express.static("Image"))
        app.use(express.static(path.join(dir_name, "/WebPhone/CongTrinhTieuBieu")))
        res.sendFile(dir_name + "/WebPhone/CongTrinhTieuBieu/main.html")
    }
})

app.get('/HuongDanSuDung', (req, res) => {
    if (req.useragent.isDesktop) {
        app.use(express.static(path.join(dir_name, "/Data_(DO_NOT_DELETE)/public")))
        app.use('/Image', express.static("Image"))
        app.use(express.static(path.join(dir_name, "/WebPC/HuongDanSuDung")))
        res.sendFile(dir_name + "/WebPC/HuongDanSuDung/main.html")
    }
    else if (req.useragent.isMobile || req.useragent.isTablet) {
        app.use(express.static(path.join(dir_name, "/Data_(DO_NOT_DELETE)/public")))
        app.use('/Image', express.static("Image"))
        app.use(express.static(path.join(dir_name, "/WebPhone/HuongDanSuDung")))
        res.sendFile(dir_name + "/WebPhone/HuongDanSuDung/main.html")
    }
})

app.get('/LienHe', (req, res) => {
    if (req.useragent.isDesktop) {
        app.use(express.static(path.join(dir_name, "/Data_(DO_NOT_DELETE)/public")))
        app.use('/Image', express.static("Image"))
        app.use(express.static(path.join(dir_name, "/WebPC/LienHe")))
        res.sendFile(dir_name + "/WebPC/LienHe/main.html")
    }
    else if (req.useragent.isMobile || req.useragent.isTablet) {
        app.use(express.static(path.join(dir_name, "/Data_(DO_NOT_DELETE)/public")))
        app.use('/Image', express.static("Image"))
        app.use(express.static(path.join(dir_name, "/WebPhone/LienHe")))
        res.sendFile(dir_name + "/WebPhone/LienHe/main.html")
    }
})

app.get('/Admin', (req, res) => {
    app.use(express.static(path.join(dir_name, "/Data_(DO_NOT_DELETE)/public")))
    app.use('/Image', express.static("Image"))
    app.use(express.static(path.join(dir_name, "/WebPC/Admin")))
    res.sendFile(dir_name + "/WebPC/Admin/Login.html")
})

app.get('/Dashboard', (req, res) => {
    if (!req.useragent.isDesktop) res.status(404).send({ message: 'Not available for phone' });
    else {
        app.use(express.static(path.join(dir_name, "/Data_(DO_NOT_DELETE)/public")))
        app.use('/Image', express.static("Image"))
        app.use(express.static(path.join(dir_name, "/WebPC/Dashboard")))
        res.sendFile(dir_name + "/WebPC/Dashboard/main.html")
    }
})

app.listen(port, () => {
    console.log('App listening at port ' + port);
})