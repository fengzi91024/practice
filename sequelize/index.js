
const express = require("express");
const app = express();
const Log = require("./Model Baseics")

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
            const newLog = await Log.create({
                logtype: logtype,
                date: date,
                desc: desc,
                count: count,
            });
            console.log('New log entry created:', newLog);
            return newLog
        } catch (error) {
            console.error('Error while creating a new log entry:', error);
        }


    };

    addLogEntry().then(newLog => {
        res.send({
            status: "200",
            data: newLog
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

app.delete("/:id", (req, res) => {
    const id = req.params.id
    async function deleteData(id) {
        try {
            await Log.destroy({
                where: {
                    id: id
                }
            });
            return result;
        } catch (error) {
            console.log(error);
        }
    }

    deleteData(id).then(() => {
        res.json({
            status: "200",
            data: id
        })
    })



})







app.listen(2000, () => {
    console.log("http://127.0.0.1:2000");
})