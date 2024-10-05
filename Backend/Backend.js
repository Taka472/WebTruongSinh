const express = require('express');
const app = express();
const sql = require('mssql');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const secretKey = 'f8cdb04495ded47615258f9dc6a3f4707fd2405434fefc3cbf4ef4e6';
const bcrypt = require('bcrypt')
const verifyToken = require('./Middleware/jwtVerify')

const mysql = require('mysql2')
const connection = require('./Database/Sql.config')

var config = require('./Database/Sql.config')
var rateLimitConfig = require('./Rate Limit/Server_Rate_Limit.config');

const port = 3001;

app.use(cors())
app.use(express.json())

// connection.connect((err) => {
//     if (err) {
//         console.error("Connection error " + err.stack)
//         return
//     }
//     console.log("Connection to MySQL " + connection.threadId)
// })

app.get('/api/getHeaderData', (req, res) => {
    sql.connect(config, function(err) {
        if (err) console.log(err);
        else {
            new sql.Request().query("select * from HeaderData", (err, result) => {
                if (err) {
                    res.status(500).send(err);
                }
                else {
                    res.status(200).send(result.recordset);
                }
            })
        }
    })
    // connection.query("select * from HeaderData", (errors, results, fields) => {
    //     if (errors) {
    //         console.error('Error executing query:', errors);
    //         res.status(500).send('Error fetching data');
    //         return;
    //     }
    //     res.status(200).json(results);
    // })
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
    // connection.query("select * from CongTyData", (errors, results, fields) => {
    //     if (errors) {
    //         console.error('Error executing query:', errors);
    //         res.status(500).send('Error fetching data');
    //         return;
    //     }
    //     res.status(200).json(results);
    // })
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
    // connection.query("select * from ChungNhanData", (errors, results, fields) => {
    //     if (errors) {
    //         console.error('Error executing query:', errors);
    //         res.status(500).send('Error fetching data');
    //         return;
    //     }
    //     res.status(200).json(results);
    // })
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
    // connection.query("select * from CongTrinhTieuBieu", (errors, results, fields) => {
    //     if (errors) {
    //         console.error('Error executing query:', errors);
    //         res.status(500).send('Error fetching data');
    //         return;
    //     }
    //     res.status(200).json(results);
    // })
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
    // connection.query("select * from SanPhamData", (errors, results, fields) => {
    //     if (errors) {
    //         console.error('Error executing query:', errors);
    //         res.status(500).send('Error fetching data');
    //         return;
    //     }
    //     res.status(200).json(results);
    // })
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
    // connection.query("select * from TinTucData", (errors, results, fields) => {
    //     if (errors) {
    //         console.error('Error executing query:', errors);
    //         res.status(500).send('Error fetching data');
    //         return;
    //     }
    //     res.status(200).json(results);
    // })
})

app.put('/api/putForm', rateLimitConfig, (req, res) => {
    sql.connect(config, function(err) {
        if (err) console.log(err)
        else {
            request = new sql.Request();
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

// app.post('/api/Login', (req, res) => {
//     let haveSent = false;
//     sql.connect(config, function(err) {
//         if (err) console.log(err)
//         else {
//             new sql.Request().query('select * from TaiKhoan', (err, result) => {
//                 if (err) console.log(err)
//                 else {
//                     for (let i = 0; i < result.recordset.length; i++) {
//                         if (result.recordset[i].username === req.body.username) {
//                             bcrypt.compare(req.body.password, result.recordset[i].password, function(err, result) {
//                                 if (result) {
//                                     try {
//                                         token = jwt.sign({
//                                             user: req.body.username
//                                         }, secretKey)
//                                     } catch (err) {
//                                         console.log(err)
//                                     }
//                                     res.status(200).json({
//                                         success: true,
//                                         username: req.body.username,
//                                         data: token
//                                     })
//                                     haveSent = true;
//                                 }
//                             })
//                         }
//                         if (haveSent) break;
//                     }
//                 }
//             })
//         }
//     })
// })

app.post('/api/Login', (req, res) => {
    haveSent = false
    sql.connect(config, function(err) {
        if (err) console.log(err)
        else {
            new sql.Request().query("select * from TaiKhoan", (err, result) => {
                if (err) console.log(err)
                else {
                    for (let i = 0; i < result.recordset.length; i++) {
                        if (result.recordset[i].username == req.body.username) {
                            bcrypt.compare(req.body.password, result.recordset[i].password, function(err, result) {
                                if (result) {
                                    res.status(200).json({
                                        success: true,
                                        user: req.body.username
                                    })
                                    haveSent = true;
                                }
                                if (err) console.log(err)
                            })
                        }
                        if (haveSent) break
                    }
                }
            })
        }
    })
})

app.put('/api/insertHeaderData', (req, res) => {
    console.log(req.body)
    sql.connect(config, function(err) {
        if (err) console.log(err)
        // else {
        //     new sql.Request().query("insert into HeaderData values (null, N'" + req.body.hinhAnh + "', 'header', 'false')", (err, result) => {
        //         if (err) {
        //             console.log(err);
        //             res.status(500).send({ message: 'insert fail' })
        //         }
        //         else if (result) {
        //             console.log('Success')
        //             res.status(200).send({ message: 'insert success' })
        //         }
        //     })
        // }
    })
})

app.get('/api/getBaoHanhData', (req, res) => {
    sql.connect(config, function(err) {
        if (err) console.log(err)
        else {
            new sql.Request().query('select ten, baoHanh from SanPhamData where baoHanh is not null', (err, result) => {
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

app.listen(port, () => {
    console.log('App listening at port ' + port);
})