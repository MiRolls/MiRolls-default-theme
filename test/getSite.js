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
//     res.status(200)
})
// app.use((req, res) => {
//     res.status(200).json(json.parse(`{
//   "message": "success",
//   "name": "米卷",
//   "link": "https://localhost:3000/",
//   "logo": "/favicon.png",
//   "mainColor": "rgb(21, 127, 248)",
//   "icp": "A nice questionnaire system",
//   "lang": "zh",
//   "needIcp": 0
// }`));
// });


app.listen(3001,()=>{
    console.log(`Example app listening on port :3031`)
})

// const Koa = require("koa");
// const app = new Koa();
//
// app.use(async (ctx, next) => {
//     if (ctx.request.path.startsWith("/api")) {
//         ctx.response.type = "json";
//         ctx.response.body = {
//             message: `{
//   "message": "success",
//   "name": "米卷",
//   "link": "https://localhost:3000/",
//   "logo": "/favicon.png",
//   "mainColor": "rgb(21, 127, 248)",
//   "icp": "A nice questionnaire system",
//   "lang": "zh",
//   "needIcp": 0
// }`,
//         };
//     } else {
//         await next();
//     }
// });
//
// app.listen(3001, () => {
//     console.log("Backend server is running at http://localhost:3001");
// });