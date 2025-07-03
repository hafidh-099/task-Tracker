const { render } = require("ejs")
const db = require('../utils/database');


exports.signUp=(req,res)=>{
    // const mycookie = req.cookies
   const mycookie = req.session.isLoggedIn='false'
    res.render('signup.ejs',{mycookie})
}
exports.postSignUpData =async (req,res)=>{
    const {username,password} = req.body;
    await db.execute('insert into userAuth(username,password) values (?,?)',[username,password])
    res.redirect('/login')
}
exports.renderLogin = async(req,res)=>{
    // const mycookie = req.cookies
    const mycookie = req.session.isLoggedIn='false'
    res.render('login.ejs',{mycookie});
}
exports.postAndValidateUser=async(req,res)=>{
    const {username,password} = req.body;
    const [userCredential] = await db.execute('select * from userAuth where username=?',[username]);
    const data = userCredential[0];
    if(data){
        if(data.password===password){
            req.session.isLoggedIn='true'
            // res.cookie('isLoggedIn','true',{httpOnly:true});
            res.redirect('/');
        }else{
            // res.cookie('isLoggedIn','false');
            req.session.isLoggedIn='false'
            res.redirect('/login')
        }
    }else{
        // res.cookie('isLoggedIn','invalid username');
        req.session.isLoggedIn='invalid username'
        res.redirect('/login')
    }
}
exports.Logout=(req,res)=>{
    const x =req.session.isLoggedIn='false'
    req.session.destroy(req.session.id);
    console.log(x)
    
    res.redirect('/')
}