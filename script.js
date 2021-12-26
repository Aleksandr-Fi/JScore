const searchForm = document.querySelector('.body__search');

const debounce = (fn, debounceTime) => {
    let timer;

    return function () {
        const func = () => {
            fn.apply(this, arguments);
        }

        clearTimeout(timer);
        timer = setTimeout(func, debounceTime);
    }
};

const removeSearchList = () => {
    document.querySelectorAll('.search-list__item').forEach(a => a.remove());
    arrResSer = [];
}

const cons = function () {
    if (!searchForm.value) {
        removeSearchList();
        return
    }
    removeSearchList();
    search(searchForm.value)
}

searchForm.addEventListener('input', debounce(cons, 500))

function search(name) {
    fetch(`https://api.github.com/search/repositories?q=${name}`)
        .then(response => response.json())
        .then(commits => commits.items.slice(0, 5)).then(i => {
            i.forEach(a => {
                createSearchItem(a.name)
                searchObj(a.name, a.owner.login, a.stargazers_count);
            })
            addGit();
        })
}

const createSearchItem = function (name) {

    let searchItem = createElem('div', 'search-list__item')

    console.log(searchItem)

    let itemName = document.createElement('p');
    itemName.textContent = name;
    itemName.style.margin = 0;
    itemName.style.fontSize = '30px'

    searchItem.append(itemName)

    let list = document.querySelector('.search__list')
    list.append(searchItem)
}

let addGit = function () {
    document.querySelectorAll('.search-list__item').forEach(i => {
        i.addEventListener("click", () => {

            let itemInfo = arrResSer.find(a => a.repName == i.textContent)
            let listItem = createElem('div', 'list__item')

            let info = createElem('p', 'list__info')
            info.textContent = `Name: ${itemInfo.repName} \nOwner: ${itemInfo.ownerName} \nStars: ${itemInfo.stars}`

            let closeButton = createElem('button', 'close-btn')

            listItem.appendChild(info)
            listItem.appendChild(closeButton)

            document.querySelector('.git-list').prepend(listItem)
            searchForm.value = '';
            removeSearchList();
            removeItem(closeButton)
        })
    })
}

const createElem = function (tag, className) {
    let item = document.createElement(tag);
    item.classList.add(className);
    return item;
}

let arrResSer = [];

const searchObj = function (name, owner, stars) {
    let obj = {
        repName: name,
        ownerName: owner,
        raiting: stars
    };
    arrResSer.push(obj)
}

const removeItem = function (elem) {
    elem.addEventListener('click', (e) => {
        elem.parentNode.remove();
    })
}