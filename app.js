let btn = document.querySelector('#btn');

btn.addEventListener('click', function(){

    let input = document.querySelector('#input').value;
    let show_text = document.querySelector('#show_text');
    
    show_text.innerHTML = input;
    show_text.style.color = 'blue';
    console.log(show_text);
});

let btn2 = document.querySelector('#btn2');

btn2.addEventListener('click', function(){

    let input2 = document.querySelector('#input2').value;
    let show_text2 = document.querySelector('#show_text2');
    
    show_text2.innerHTML = input2;
    show_text2.style.color = 'blue';
    console.log(show_text2);
});

let btn3 = document.querySelector('#btn3');

btn3.addEventListener('click', function(){

    let input3 = document.querySelector('#input3').value;
    let show_text3 = document.querySelector('#show_text3');
    
    show_text3.innerHTML = input3;
    show_text3.style.color = 'blue';
    console.log(show_text3);
});