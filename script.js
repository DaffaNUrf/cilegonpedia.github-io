const product =[...document.querySelectorAll('.product')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

product.forEach((item, i) => {
    let containerDimension = item.getBoundingClientRect();
    let containerwidth = containerDimension.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerwidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerwidth;
    })
})
