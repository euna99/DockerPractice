const express=require("express");
const bodyparser=require("body-parser");

const db=require('./db');

const app=express();

app.use(bodyparser.json());

//DB lists 테이블에 있는 모든 데이터를 프론트 서버에 보내주기
app.get('/api/values',function(req,res){
    //데이터베이스에서 모든 정보 가져오기 
})

app.listen(5000,()=>{
    console.log("어플리케이션이 서버 5000번 포트에서 되었습니다")
})