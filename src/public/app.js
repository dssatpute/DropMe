const showLink=document.querySelector(".show-link")
const drop=document.querySelector(".file-upload .cabinet-img")
const downloadLink=document.querySelector(".show-link .download-url")
const fileinput=document.querySelector(".fileinput")
const downloadBtn=document.querySelector(".downloadBtn")
const chooseFile=document.querySelector(".chooseFile")
const URL=document.querySelector(".URL")



drop.addEventListener("dragover",(e)=>
{
    e.preventDefault()
    if(!drop.classList.contains('dragged'))
    {
        drop.classList.add('dragged')
    }
   
})

drop.addEventListener("dragleave",()=>
{
    drop.classList.remove('dragged')
})
fileinput.addEventListener("change",()=>
{
    showLink.classList.add("show")
    upload()
})
drop.addEventListener("drop",(e)=>
{
    
    e.preventDefault()
    drop.classList.remove('dragged')
    const file=e.dataTransfer.files
    console.log(e.dataTransfer.files);
    if(file.length)
    {
        console.log(file)
        fileinput.files=file
        upload()
    }
    showLink.classList.add("show")
    
    
})

chooseFile.addEventListener("click",()=>
{
    fileinput.click()
})

function upload()
{
    const file=fileinput.files[0]
    const formdata=new FormData()
    formdata.append("myfile",file)
    const xhr=new XMLHttpRequest()
    xhr.onreadystatechange=()=>
    {
        if(xhr.readyState===xhr.DONE)
        {
            downloadLink.value=xhr.response
            // URL.href=xhr.response
            console.log(xhr.response);
        }
        
    }
    xhr.open("POST",`/api/files`)
    xhr.send(formdata)
}