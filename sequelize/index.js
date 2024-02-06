
const express = require("express");
const app = express();
const Log = require("./Model Baseics")
const {logging} = require("./db.config")
app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); // 允许所有源
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");

    // 处理预检请求
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }

    next();
});



app.post("/add", (req, res) => {
    
    const { date, desc, count, logtype } = req.body
    console.log(req.body);

    const addLogEntry = async () => {
        try {
            await Log.create({
                logtype: logtype,
                date: date,
                desc: desc,
                count: count,
            });

            logging(`New log entry created:日志类型 ${logtype} , 日期：${date} ,内容: ${desc} , 时长: ${count}`)
        } catch (error) {
            console.error('Error while creating a new log entry:', error);
        }


    };

    addLogEntry().then(() => {
        res.send({
            status: "200",
            data: "添加成功"
        })
    })



})



app.get("/list", (req, res) => {

    ; (async () => {
        try {
            const logs = await Log.findAll({
                attributes: { exclude: ['createdAt', 'updatedAt'] }
            })

            res.json({
                status: "200",
                data: logs
            })
        }
        catch (error) {
            console.log(error);
        }
    })();
})


// 删除log中的删除logging 会直接返回日志记录无需使用logging函数来记录数据库的更新数据
app.delete("/:id", (req, res) => {
    const id = req.params.id
    async function deleteData(id) {
        try {
            await Log.destroy({
                where: {
                    id: id
                }
            });
        } catch (error) {
            console.log(error);
        }
    }

    deleteData(id).then(() => {
        res.json({
            status: "200",
            data: "删除成功"
        })
    })



})







app.listen(2000, () => {
    console.log("http://127.0.0.1:2000");
})