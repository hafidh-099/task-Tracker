const { render } = require('ejs');
const db = require('../utils/database');


exports.getAllTask=async(req,res)=>{
    // const mycookie = req.cookies
    const mycookie = req.session
    const[task]=await db.execute('select * from tasks');
    res.render('index.ejs',{task,mycookie});
}

exports.getAddform =async(req,res)=>{
    // const mycookie = req.cookies
    const mycookie = req.session
    res.render('add.ejs',{mycookie})
}
exports.postAddData=async(req,res)=>{
    const {task,status}=req.body;
    await db.execute('insert into tasks(title,status) values (?,?)',[task,status]);
    res.redirect('/')
}
exports.editData=async(req,res)=>{
    // const mycookie = req.cookies
    const mycookie = req.session
    const id = req.params.id;
    const [data] =await db.execute('select * from tasks where id=?',[id]);
    res.render('edit.ejs',{info:data[0],mycookie})
}
exports.postUpdateData=async(req,res)=>{
    const{id,task,status}=req.body;
    await db.execute('update tasks set title=?,status=? where id=?',[task,status,id]);
    res.redirect('/');
}
exports.deleteTask=async(req,res)=>{
    const id = req.params.id;
    await db.execute('delete from tasks where id=?',[id]);
    res.redirect('/')
}