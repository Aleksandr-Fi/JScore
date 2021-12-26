const app = document.querySelector('.app')
const input = document.createElement('input')
app.appendChild(input)
// console.log(app);
input.addEventListener('keyup', searchRep.bind(this))

function createElem(elTag, elClass) {
    const el = document.createElement(elTag)
    el.classList.toggle(elClass)
    return el
}

async function searchRep() {
    return await fetch(`https://api.github.com/search/repositories?q=${input.value}`).then(
        (res) => {
            res.json().then(res => {
                console.log(res.items);
                // res.items.forEach(item =>{
                //     const item = document.createElement('li')
                //     item.innerHTML = `<p>${res.items[i]}</p>`
                //     // console.log(item);
                //     app.appendChild(item)
                // }) 
            })
        }
    )
}

// function createRepList(repData) {
//     const repElement = this.createElem('li', 'rep')
//     repElement.innerHTML = `<p>${repData.name}</p>`
//     return repElement
// }