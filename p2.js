const btn = document.querySelector('.btn')
const body = document.body

btn.addEventListener('click', change)


function change(){
     if(btn.textContent.includes('day')){
        body.className ='day'
        btn.textContent = 'night'
        btn.src = "dark.svg"
          
    }
    else{
        body.className ='night'
        btn.textContent = 'day' 
        btn.src = "light.svg"
       
   
    }
}

//Add an event listner on hamburger
document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".navbar").style.left = "0"
})

//Add an event listner on close button
document.querySelector(".close").addEventListener("click", () => {
    document.querySelector(".navbar").style.left = "-120%"
})


document.querySelector(".ham").addEventListener("click", () => {
    document.querySelector(".navbar").style.left = "-120%"
})