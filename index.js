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
                console.log(res);
                console.log(res.items);
                const fragment = document.createDocumentFragment()
                const reps = [res.items[0], res.items[1], res.items[2],res.items[3], res.items[4]]
                reps.forEach(rep =>{
                        const item = document.createElement('li')
                        item.innerHTML = `<p>${rep.name}</p>`
                        app.appendChild(item)
                    })
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