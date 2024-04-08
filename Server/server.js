const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const dir_name = "D:/WebTruongSinh";

app.use(express.static(path.join(dir_name + "/WebPC/TrangChu")));

app.get('/', (req, res) => {
    res.sendFile(dir_name + "/WebPC/TrangChu/main.html");
})

app.listen(port, () => {
    console.log('App listening at port ' + port);
})