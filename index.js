const app = document.querySelector('.app')
const input = document.createElement('input')
app.appendChild(input)
// console.log(app);
input.addEventListener('keyup', searchRep.bind(this))

async function searchRep() {
    return await fetch(`https://api.github.com/search/repositories?q=${input.value}`).then(
        (res) => {
            res.json().then(res => {
                console.log(res);
            })
        }
    )
}

function createRep(repData) {
    
}