let userNode
let passNode
let span1Node
let span2Node
let lFormNode
let checkNodeL
let validBorder="solid 2px green"
let invalidBorder="solid 2px red"

$(function(){

    userNode=$('#userName')
    userNode.blur(()=>{
        ValidateName()
    })
    passNode=$('#pswd')
    passNode.blur(()=>{
        ValidatePassword()
    })
   
    $('#checkL1').change(()=>{

        
        if ($('#checkL1').prop('checked')){
            $("#pswd").attr('type','text')
           
        }
        else{
            $("#pswd").attr('type','password')
            
        }

    })

    lFormNode=$('lForm')
    passNode.click(()=>validateLForm())

})


function ValidateName(){
    let userValue=userNode.val()
    span1Node=$('#span1')
    if(userValue===""){
        userNode.css({border:invalidBorder})
    
       span1Node.text("*Username Required")
       return false
    }
   
    else if(userValue==="Dileep"){
        span1Node.text('')
        userNode.css({border:validBorder})
        return true
    }
    else{
        span1Node.text("Enter Valid Username")
        userNode.css({border:invalidBorder})
        return false
    }
}
function ValidatePassword(){
    let passValue=passNode.val()
    span2Node=$('#span2')
    if(passValue===""){
        passNode.css({border:invalidBorder})
    
       span2Node.text("*Password Required")
       return false
    }
    
    else if(passValue==="Dileep@12"){
        span2Node.text('')
        passNode.css({border:validBorder})
        return true
    }
    else{
        span2Node.text("Enter Valid Password")
        passNode.css({border:invalidBorder})
        return false
    }
}

function validateLForm(){
    let field1=ValidateName()
    let field2=ValidatePassword()
    
    let formRes=(field1 && field2)
    
    return formRes
}