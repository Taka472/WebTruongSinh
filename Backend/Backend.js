const express = require('express');
const app = express();
const sql = require('mssql');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const secretKey = 'f8cdb04495ded47615258f9dc6a3f4707fd2405434fefc3cbf4ef4e6';

var config = require('./Database/Sql.config')

const port = 3001;

app.use(cors())
app.use(express.json())

const authenticateJWT = (req, res, next) => {
    const token = req.header('x-auth-token');
    if (!token) return res.status(401).json({ message: 'Authenticate failed'});

    try {
        const decode = jwt.verify(token, secretKey);
        req.user = decode;
        next();
    } catch (err) {
        res.status(400).json({ message: 'Invalid token' });
    }
}

app.get('/api/getHeaderData', (req, res) => {
    sql.connect(config, function(err) {
        if (err) console.log(err);
        else {
            new sql.Request().query('select * from HeaderData', (err, result) => {
                if (err) {
                    res.status(500).send(err);
                }
                else {
                    res.status(200).send(result.recordset);
                }
            })
        }
    })
})

app.get('/api/getCongTyData', (req, res) => {
    sql.connect(config, function(err) {
        if (err) console.log(err);
        else {
            new sql.Request().query('select * from CongTyData', (err, result) => {
                if (err) {
                    res.status(500).send(err);
                }
                else {
                    res.status(200).send(result.recordset);
                }
            })
        }
    })
})

app.get('/api/getChungNhanData', (req, res) => {
    sql.connect(config, function(err) {
        if (err) console.log(err);
        else {
            new sql.Request().query('select * from ChungNhanData', (err, result) => {
                if (err) {
                    res.status(500).send(err);
                }
                else {
                    res.status(200).send(result.recordset);
                }
            })
        }
    })
})

app.get('/api/getCongTrinhTieuBieu', (req, res) => {
    sql.connect(config, function(err) {
        if (err) console.log(err)
        else {
            new sql.Request().query('select * from CongTrinhTieuBieu', (err, result) => {
                if (err) {
                    res.status(500).send(err);
                }
                else {
                    res.status(200).send(result.recordset)
                }
            })
        }
    })
})

app.get('/api/getSanPhamData', (req, res) => {
    sql.connect(config, function(err) {
        if (err) console.log(err)
        else {
            new sql.Request().query('select * from SanPhamData', (err, result) => {
                if (err) {
                    res.status(500).send(err);
                }
                else {
                    res.status(200).send(result.recordset)
                }
            })
        }
    })
})

app.get('/api/getTinTucData', (req, res) => {
    sql.connect(config, function(err) {
        if (err) console.log(err)
        else {
            new sql.Request().query('select * from TinTucData', (err, result) => {
                if (err) {
                    res.status(500).send(err);
                }
                else {
                    res.status(200).send(result.recordset)
                }
            })
        }
    })
})

app.put('/api/putForm', (req, res) => {
    sql.connect(config, function(err) {
        if (err) console.log(err)
        else {
            request = new sql.Request();
            // request.input('name', sql.NVarChar(40), req.body.hoTen)
            // request.input('diaChi', sql.NVarChar(100), req.body.diaChi)
            // request.input('sdt', sql.VarChar(10), req.body.sdt)
            // request.input('email', sql.VarChar(30), req.body.email)
            // request.input('chuDe', sql.NVarChar(30), req.body.chuDe)
            // request.input('noiDung', sql.NVarChar(200), req.body.noiDung)
            request.query("insert into FormCuaNguoiDung (hoTen, diaChi, sdt, email, chuDe, noiDung) values (N'" + req.body.hoTen + "', N'" + req.body.diaChi + "', '" + req.body.sdt + "', '" + req.body.email + "', N'" + req.body.chuDe + "', N'" + req.body.noiDung + "')", (err) => {
                if (err) {
                    console.log(err)
                    res.status(500).send(err)
                }
                else {
                    console.log("Success")
                    res.status(200).send({ message: 'insert success' })
                }
            })
        }
    })
})

app.listen(port, () => {
    console.log('App listening at port ' + port);
})