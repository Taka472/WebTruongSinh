let HeaderData

const serverURL = 'http://localhost:3000'
const apiURL = 'http://localhost:3001'
const publicFile = 'D/WebTruongSinh/Data_(DO_NOT_DELETE)/pubilc/Image'

const makeAPICall = async() => {
    await fetch(apiURL + '/api/getHeaderData', {mode: 'cors'})
        .then(response => response.json())
        .then(data => {
            HeaderData = data;
            return HeaderData
        })
        .then(() => {
            for (let i = 0; i < HeaderData.length; i++) {
                if (HeaderData[i].headerType === "header" && HeaderData[i].selected === 'true') {
                    document.getElementById('title').src = serverURL + HeaderData[0].hinhAnh
                }
                else if (HeaderData[i].headerType === "scroll" && HeaderData[i].selected === 'true') {
                    document.getElementById('scrollpane').src = serverURL + HeaderData[1].hinhAnh
                }
            }
        })
        
}

const fetchHeaderData = async() => {
    await fetch(apiURL + '/api/getHeaderData', {mode: 'cors'})
        .then(response => response.json())
        .then(data => {
            HeaderData = data;
            return HeaderData;
        })
        .then(() => {
            HeaderTable = document.getElementById('headerTable')
            ScrollTable = document.getElementById('scrollTable')
            HeaderData.forEach((item) => {
                if (item.headerType === 'header') {
                    if (item.selected === 'true') {
                        HeaderTable.innerHTML += '<tr><td><img id="cellImage" src="' + (serverURL + item.hinhAnh) + '"></td><td><input type="radio" name="header" checked="checked"></td><td><button id="delete">Xóa</button></td></tr>'
                    }
                    else {
                        HeaderTable.innerHTML += '<tr><td><img id="cellImage" src="' + (serverURL + item.hinhAnh) + '"></td><td><input type="radio" name="header"></td><td><button id="delete">Xóa</button></td></tr>'
                    }
                }
                if (item.headerType === 'scroll') {
                    if (item.selected === 'true') {
                        ScrollTable.innerHTML += '<tr><td><img id="cellImage" src="' + (serverURL + item.hinhAnh) + '"></td><td><input type="radio" name="scroll" checked="checked"></td><td><button id="delete">Xóa</button></td></tr>'
                    }
                    else {
                        ScrollTable.innerHTML += '<tr><td><img id="cellImage" src="' + (serverURL + item.hinhAnh) + '"></td><td><input type="radio" name="scroll"></td><td><button id="delete">Xóa</button></td></tr>'
                    }
                }
            })
        })
}

let HeaderSubmit = document.getElementById('headerSubmit')
let ScrollSubmit = document.getElementById('scrollSubmit')

let imageFileName, filePath;

document.getElementById('headerInput').onchange = function() {
    filePath = this.value;
    f = this.value;
    f = f.replace(/.*[\/\\]/, '');
    imageFileName = f;
}

if (HeaderSubmit != null) {
    HeaderSubmit.onclick = async function() {
        data = {
            hinhAnh: imageFileName,
            filePath: filePath
        }
        await fetch(apiURL + '/api/insertHeaderData', {
            method: 'PUT',
            mode: 'cors',
            header: {
                "Content-type": "application/"
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => console.log(data))
    }
}

makeAPICall()
fetchHeaderData()

// var HinhAnhTieuDe = document.getElementById('first')
// var SanPham = document.getElementById('sanPham')
// var ChungNhan = document.getElementById('chungNhan')
// var BaoHanh = document.getElementById('baoHanh')
// var HuongDanSuDung = document.getElementById('huongDanSuDung')
// var CongTrinhTieuBieu = document.getElementById('congTrinhTieuBieu')
// var TinTuc = document.getElementById('last')
// var LienHe = document.getElementById('chatbox')
// var mainBox = document.getElementById('mainBox')

// HinhAnhTieuDe.onclick = function() {
    
// }

// SanPham.onclick = function() {
//     window.location = '/SanPham'
// }

// BaoHanh.onclick = function() {
//     window.location = '/BaoHanh'
// }

// ChungNhan.onclick = function() {
//     window.location = '/ChungNhan'
// }

// HuongDanSuDung.onclick = function() {
//     window.location = '/HuongDanSuDung'
// }

// CongTrinhTieuBieu.onclick = function() {
//     window.location = '/CongTrinhTieuBieu'
// }

// TinTuc.onclick = function() {
//     window.location = '/TinTuc'
// }

// LienHe.onclick = function() {
//     window.location = '/LienHe'
// }