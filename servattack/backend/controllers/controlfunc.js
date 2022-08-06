import {kot, MainPage, Passwords,kis} from "./Jeysons.js";

export const getAuth=async (res,req,next)=> {
    const Data = res.query
    let yunam=Data.name

    if ( Passwords.a.User==Data.name&Passwords.a.Password==Data.id) {
        //req.json(kis)
        req.redirect("/middleautorization?id=L&?name=K")
    } else if (Passwords.b.User==Data.name&Passwords.b.Password==Data.id) {
        //req.json(kot)
        req.redirect("/middleautorization?id=T&?name=K")
    }

next()
}

export const getHome =async (res,req,next) => {
        req.status(200).json(MainPage)
        next()
    }

export const PostAuth=async (res,req,next)=>{
    console.log(res.body)
        res.send(res.body)
        next()
    }

export const getMobile =async (res,req,next) => {
        req.send("hi")
    next()
    }

