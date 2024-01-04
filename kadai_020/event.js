const btn = document.getElementById('btn');
const body = document.getElementById('text');

btn.addEventListener('click',()=>{
    const text = document.getElementById('text');
     text.textContent = "ボタンがクリックしました";
});

