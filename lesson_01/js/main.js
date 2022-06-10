'use strict';

const items = document.querySelector('.items');

console.log(items);

const itemOne = document.querySelector('.item.item_one');
const itemTwo = document.querySelector('.item.item_two');
const itemThree = document.querySelector('.item.item_three');
const itemfour = document.querySelector('.item.item_four');
const itemFive = document.querySelector('.item.item_five');
const itemSix = document.querySelector('.item.item_six');

const ProsItemFour = itemTwo.querySelector('.props__item_four');
// console.log('ProsItemFour: ', ProsItemFour);


const propsListTwo = itemTwo.querySelectorAll('.props__item.props__item_two');
console.log('propsListTwo: ', propsListTwo);
const propsListFour = itemfour.querySelectorAll('.props__item_four');


const propsListThree = itemFive.querySelector('.props__list');
console.log('propsListThree: ', propsListThree);
const propsListFive = itemThree.querySelector('.props__list');
console.log('propsListFive: ', propsListFive);

const contentThere = itemThree.querySelector('.content');
const contentFive = itemFive.querySelector('.content');
console.log('contentThere: ', contentThere);


const ProsItemsTwo = itemSix.querySelectorAll('.props__item_two');


items.prepend(itemOne);

itemOne.after(itemTwo, itemThree);

propsListFour[2].after(ProsItemFour);

contentFive.append(propsListFive);
contentThere.append(propsListThree);


propsListTwo[7].after(ProsItemsTwo[0], ProsItemsTwo[1]);
