// back to top
let backToTopBtn = document.querySelector('.back-to-top')

window.onscroll = () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopBtn.style.display = 'flex'
    } else {
        backToTopBtn.style.display = 'none'
    }
}

// top menu

let menuItem = document.getElementsByClassName('menu-item')

Array.from(menuItem).forEach((item, index) => {
    item.onclick = (e) => {
        let currMenu = document.querySelector('.menu-item.active')
        currMenu.classList.remove('.active')
        item.classList.add('.active')
    }
})

// food cat

let foodMenuList = document.querySelector('.food-item-wrap')

let foodCat = document.querySelector('.food-category')

let categories = foodCat.querySelectorAll('button')

Array.from(categories).forEach((item, index) => {
    item.onclick = (e) => {
        let currCat = foodCat.querySelector('button.active')
        currCat.classList.remove('active')
        e.target.classList.add('active')
        foodMenuList.classList = 'food-item-wrap ' + e.target.getAttribute('data-food-type')
    }
})