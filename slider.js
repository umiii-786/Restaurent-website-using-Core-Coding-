let slideimg=document.querySelectorAll(".eachcustomer")
slideimg.forEach((img,indx)=>{
    img.style.left=`${indx*100}%`
})

let count=0;
setInterval(()=>{
    slidenext()
},3000)

setInterval(()=>{
    slideprev()
},6000)

function slidenext(){
    if(count==2){
        count=0;
    }
    else{
        count++
    }
   slidecusimg()
}

function slideprev(){
    if(count==0){
        count=2;
    }
    else{
        count--;
    }
   slidecusimg()
}

function slidecusimg(){
   slideimg.forEach((img)=>{
           img.style.transform=`translateX(-${count*100}%)`
   })
}