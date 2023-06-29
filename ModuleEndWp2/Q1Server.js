var exp=require('express')
var bp=require('body-parser')


var app=exp()


app.use(bp.urlencoded({extended:true}))
app.listen(9000,function(){
    console.log("Server Started at 9000")
});
app.get('/getform',function(req,res)
{
    res.sendFile(__dirname+"/Q1.html")
   
})
console.log("HEllo in form")

app.post('/getDataTable',function(req,res){
    var uname=req.body.uname;
    var bdate=req.body.bdate;
    var emailid=req.body.emailid;
    var qualification=req.body.qualification;

    console.log(uname+" : "+bdate+" : " +emailid+" : "+qualification);
    str=""
    str+="<table>"
    str+="<tr>"
    str+="<td>"+uname+"</td>"
    str+="</tr>"
    str+="<tr>"
    str+="<td>"+bdate+"</td>"
    str+="</tr>"
    str+="<tr>"
    str+="<td>"+emailid+"</td>"
    str+="</tr>"
    str+="<tr>"
    str+="<td>"+qualification+"</td>"
    str+="</tr>"
    str+="</table>"

    res.send(str);
})
