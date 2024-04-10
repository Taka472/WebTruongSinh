const express = require('express');
const app = express();
const sql = require('mssql');
const cors = require('cors')

var config = require('./Database/Sql.config')

const port = 3001;

app.use(cors())

app.get('/TrangChu/getHeaderData', (req, res) => {
    sql.connect(config, function(err) {
        if (err) console.log(err);
        else {
            new sql.Request().query('select * from HeaderData', (err, result) => {
                if (err) console.log(err);
                else {
                    res.send(result.recordset);
                }
            })
        }
    })
})

app.get('/getCongTyData', (req, res) => {
    sql.connect(config, function(err) {
        if (err) console.log(err);
        else {
            new sql.Request().query('select * from CongTyData', (err, result) => {
                if (err) console.log(err);
                else {
                    res.send(result.recordset);
                }
            })
        }
    })
})

app.get('/getChungNhanData', (req, res) => {
    sql.connect(config, function(err) {
        if (err) console.log(err);
        else {
            new sql.Request().query('select * from ChungNhanData', (err, result) => {
                if (err) console.log(err);
                else {
                    res.send(result.recordset);
                }
            })
        }
    })
}) 

app.listen(port, () => {
    console.log('App listening at port ' + port);
})