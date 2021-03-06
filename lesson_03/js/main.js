'use strict';

const list = document.querySelector('.main__list');



const creatElem = (tag, attr) => { 
    const elem = document.createElement(tag);
    return Object.assign(elem, {...attr})
}

const clear = () => {
    const ulList = document.querySelectorAll('.list__item').forEach((li) => {
        li.remove();
    });
}

const del = () => {
    list.lastElementChild.remove();
}


 function setString(){
    
    const str = prompt('Напишите текст!', 'такст');
    if(str === null || str.toLowerCase() === 'exit' ) return;

    const lowString = str.toLowerCase();
    
    if(lowString === "del") {
        del();
        return setString();        
    }

    if(lowString === "clear") {
       clear();
        return setString();
    }

    if(!lowString.trim()) {
        return setString();
    } 

    const liElem = creatElem('li', {
        className: 'list__item',
        textContent: str,
    })
     
    list.append(liElem);
    return setString();
};

setString();

