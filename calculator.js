
const input=document.getElementById("input")
const btnadd=document.getElementById("event")
const list=document.getElementById("list")
btnadd.addEventListener("click" , function(){
    if(input.value==="")
    {
        alert("type somthing");
    }
      else{
          
    const taskinput=input.value
    const li=document.createElement("li")
    li.innerHTML=`<div class="task-contain d-flex justify-content-between m-2">
    <input type="checkbox" class=" "  />
    <div class="new-task ">${taskinput}</div>
    <button class="editEvent">✏️</button>
<button class="deleteEvent">✖</button>     </div>`
     
        list.appendChild(li)

    input.value=""
     const btndelete=li.querySelector(".deleteEvent")
     btndelete.addEventListener("click" , function(){li.remove()
      })
         const btnedit=li.querySelector(".editEvent")
          btnedit.addEventListener("click", function () {
         input.value = li.querySelector(".new-task").innerText;
          input.focus();
           

           })
}}
)