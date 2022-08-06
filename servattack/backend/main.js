import express from 'express'
import serverroats from "./routes/router.js"
import * as path from "path";
import session from 'express-session'
const app=express()

const __dir=path.resolve()


app.use(serverroats)
app.use(session({
    secret:"Yes",
    resave: false,
    saveUninitialized:false}))
app.use(express.static(__dir+ '/ejs'))

app.set('view engine','ejs')
app.set("views",path.join(__dir,"ejs"))

app.get("/middleautorization?",async( req, res, next)=>{
    console.log(req.query)
    let statuse=req.query.id
    req.session.statuse=statuse
    res.redirect("/")


})

app.get('/auth',async (req,res,next)=> {
    let c = 0
    req.session.c+=1
    res.render('auth.ejs', {
        usname: req.session.statuse
    })
})

app.get("/",async ( req, res, next)=> {
    res.render('da', {nameofholder:"Hi "+ req.session.statuse })
    next()
})


app.listen(3000,"192.168.1.5",()=> {
    console.log('Server started sdad')

})
