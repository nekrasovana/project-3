const inputElement=document.getElementById("inputElement");
const button=document.getElementById("button");
const list=document.getElementById("list");

function createTask(){
    
   
   let newLi=document.createElement('Li');
   newLi.textContent= inputElement.value;;
   newLi.addEventListener('click', function (event) {
      checkTask(event)
      
   
    })
   list.append(newLi);
   inputElement.value='';
      
}
function checkTask(event){
   const element = event.target;
   element.classList.toggle('check');
}


button.addEventListener('click', function (event) {
   createTask()
   

 })
