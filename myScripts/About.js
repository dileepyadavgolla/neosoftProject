let iT1Node

let iT2Node
let iT3Node
let iT4Node

let array1=["/home/neosoft/Desktop/Project/facebook.png","/home/neosoft/Desktop/Project/linkedin.png","/home/neosoft/Desktop/Project/insta.jpeg"
,"/home/neosoft/Desktop/Project/twitter.jpeg"
]
iT1Node=$("#iT1")

$(()=>{
   setInterval(()=>{
       
           $('#iT1').fadeOut(2000)
           $('#iT1').fadeIn(2000)
           $('#iT2').slideUp(2000)
           $('#iT2').slideDown(2000)
           $('#iT3').delay(2000).slideUp(2000)
           $('#iT3').slideDown(2000)
           $('#iT4').delay(2000).fadeOut(2000)
           $('#iT4').fadeIn(2000)
       
   })


let skillsNode=$("skillsDiv")
let ImgEle=$("#skillImg")

let imgArray=["/home/neosoft/Desktop/Project/CSS.png","/home/neosoft/Desktop/Project/Jquery.png","/home/neosoft/Desktop/Project/jsLogo.png"]

             
           var i = 0;
           setInterval(function () {
 
               i = (i + 1) % imgArray.length;
               ImgEle.fadeOut(1000, function () {
                   $(this).attr("src", imgArray[i]);
                   $(this).fadeIn(1000);
               });
           }, 4000);

           
        
        
   
})

