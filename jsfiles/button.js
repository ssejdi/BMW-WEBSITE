let btn = document.getElementById('kalsa');
let div = document.getElementById('image'); 

btn.addEventListener('click', ()=>{
    if(div.style.display === 'block'){
        div.style.display = 'none';
    }else {
        div.style.display='block';
    }
    if(btn.innerHTML==='Show More'){
        btn.innerHTML ='Show Less';
        btn.style.backgroundColor ="transparent";
        btn.style.boxShadow = "1px 1px 8px red"
        btn.style.color = "red";
    }else {
        btn.innerHTML= 'Show More';
        btn.style.backgroundColor ="transparent";
        btn.style.boxShadow = "1px 1px 8px rgba(168, 204, 215, 0.712)";
        btn.style.color = "white";
    }
})