const express=require("express");
const bodyparser=require("body-parser");

const db=require('./db');

const app=express();

app.use(bodyparser.json());

//테이블 생성하기 
db.pool.query(`CREATE TABLE lists(
    id INTEGER AUTO INCREMENT,
    vlaue TEXT,
    PRIMARY KEY(id)
)`,(err,results,fileds)=>{
    console.log("results",results)
})

//DB lists 테이블에 있는 모든 데이터를 프론트 서버에 보내주기
app.get('/api/values',function(req,res){
    //데이터베이스에서 모든 정보 가져오기 
    db.pool.query("SELECT * FROM lists;",
    (err,results,fileds)=>{
        if(err)
            return res.status(600).send(err)
        else
            return res.json(results)
    })
})

//클라이언트에서 입력한 값을 데이터베이스 lists 테이블에 넣어주기
app.post('/api/values',function(req,res){
    //데이터베이스에 값 넣어주기
    db.pool.query(`INSERT INTO lists (value) VALUES("${req.body.value}")`,
    (err,results,fileds)=>{
        if(err)
            return res.status(600).send(err)
        else
            return res.json({success:true,value:req.body.value})
    })
})



app.listen(5000,()=>{
    console.log("어플리케이션이 서버 5000번 포트에서 되었습니다")
})