// import express from "express"
const express = require("express")

const app = express()

app.post("/get/site",(req, res) => {
    res.send(`{
  "message": "success",
  "name": "米卷",
  "link": "https://localhost:3000/",
  "logo": "/favicon.png",
  "mainColor": "rgb(21, 127, 248)",
  "icp": "A nice questionnaire system",
  "lang": "zh",
  "needIcp": 0
}`)
})

app.listen(3001,()=>{
    console.log(`Example app listening on port :3031`)
})