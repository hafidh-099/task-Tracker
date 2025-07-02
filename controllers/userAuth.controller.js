const { render } = require("ejs")
const db = require('../utils/database');


exports.signUp=(req,res)=>{
    const mycookie = req.cookies
    res.render('signup.ejs',{mycookie})
}
exports.postSignUpData =async (req,res)=>{
    const {username,password} = req.body;
    await db.execute('insert into userAuth(username,password) values (?,?)',[username,password])
    res.redirect('/login')
}
exports.renderLogin = async(req,res)=>{
    const mycookie = req.cookies
    res.render('login.ejs',{mycookie});
}
exports.postAndValidateUser=async(req,res)=>{
    const {username,password} = req.body;
    const [userCredential] = await db.execute('select * from userAuth where username=?',[username]);
    const data = userCredential[0];
    if(data){
        if(data.password===password){
            res.cookie('isLoggedIn','true',{httpOnly:true});
            res.redirect('/');
        }else{
            res.cookie('isLoggedIn','false');
            res.redirect('/login')
        }
    }else{
        res.cookie('isLoggedIn','invalid username');
        res.redirect('/login')
    }
}
exports.Logout=(req,res)=>{
    res.cookie("isLoggedIn","false");
    res.redirect('/')
}