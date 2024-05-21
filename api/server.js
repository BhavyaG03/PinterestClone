const express=require('express')
const app = express()
const connectDB=require("./db/dbConnection")
connectDB()
const cors=require('cors')
app.use(cors())
const multer=require('multer')
app.use('/uploads',express.static(__dirname+'/uploads'))
app.use(express.json())
const uploadMiddleware = multer({ dest: 'uploads/' });
const Post=require('./db/models/postSchema')
const fs=require('fs')

app.post("/post",uploadMiddleware.single('file'),async(req,res)=>{
    const { originalname, path } = req.file;
    const parts = originalname.split('.');
    const ext = parts[parts.length - 1];
    const newPath = path + '.' + ext;
    fs.renameSync(path, newPath);

    const{title,summary}=req.body
   const postDoc=await Post.create({
    title,
    summary,
    cover:newPath
   })
res.json(postDoc)
})
app.get("/post",async(req,res)=>{
    res.json(await Post.find())
})

app.listen(4000,()=>{
  console.log('server running on port 4000')
})