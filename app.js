// const display = document.getElementById('display');
// document.getElementById('1').addEventListener('click', function(){
//    display.innerText = document.getElementById('1').innerText 
// })
// document.getElementById('2').addEventListener('click', function(){
//     display.innerText = document.getElementById('2').innerText 
//  })
//  document.getElementById('3').addEventListener('click', function(){
//     display.innerText = document.getElementById('3').innerText 
//  })

const display = document.getElementById('display');
for(let i=1; i<4; i++ ){
    document.getElementById(i).addEventListener('click', function(){
        display.src = document.getElementById(i).src;
    })
}

function displayText(id){
    const displayInfo = document.getElementById('display-info');
    displayInfo.innerHTML = id.innerHTML 
}