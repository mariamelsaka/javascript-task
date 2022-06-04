
 var PostCounter=1;

 function Post(content ){
     this.content=content
     this.dateTime=new Date().toLocaleString()
     
 }

 Post.prototype.GenerateHtml=function(html){

          var html='<div id="post-'+PostCounter+'" class="card shadow shadow-lg border mt-3">'
          +'<div class="card-body">'+
              '<!-- float-end ykon el buttion 3ayem -->'+
            '<button id ="postDeleteBtn-'+PostCounter+'" class="btn btn-danger btn=sm float-end">Delete</button>'+
            '<p class="text-start m-0 card-text">'+this.content+'</p>'+'<hr>'+
            '<!-- small make the text smaller and text-muted make the text gray -->'+
           ' <p class="text-muted m-0 small fat-ltalic">'+this.dateTime+' </p>'+'</div></div>'
          return html

}

 var postbtn =document.getElementById("postbtn")

 postbtn.addEventListener("click" ,function(e){
     e.preventDefault() 
     var postelement=document.getElementById("post")
     var postcontet=postelement.value.trim();

     if(postcontet.length<=0){
         return 
     }

     var newPost =new Post(postcontet)
     var GenerateHTML=newPost.GenerateHtml()
     
     var PostsContainer =document.getElementById("postscontainer")
     PostsContainer.insertAdjacentHTML("afterbegin",GenerateHTML)



     var deleteBtn=document.getElementById("postDeleteBtn-" + PostCounter)
     
     deleteBtn.addEventListener("click",function(e){
        e.preventDefault() 
      
    var postId="post-"+e.target.id.split("-")[1] 
    var check =confirm("are you sure?") 
    if(check==0) return false 
    document.getElementById(postId).remove()

       


        })

        //************************* */

     postelement.value="" 

     PostCounter++;
 })

