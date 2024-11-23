const container = document.getElementById("container"); 
const mydate = document.getElementById("date"); 
const   getdate = document.getElementById("getdate"); 

 getdate.addEventListener('click',function() {
      const  mydate =  new Date(); 
      const  response = mydate.toLocaleDateString(); 
     console.log(response)
     container.textContent = response;
     
     
 })