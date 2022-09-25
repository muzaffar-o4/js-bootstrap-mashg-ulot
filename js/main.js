import newDataBase from "./users.js";

let data = newDataBase;
const body = document.body;

const card = body.querySelector('#card');

if (data.length > 0) {
    render(data)
}





function render(data) {
    card.textContent = "";

    for (let i = 0; i < 8; i++) {

        let cardEl = document.createElement('div');
        cardEl.setAttribute('class', 'card__wrap');

        let divEl = document.createElement('div');
        divEl.setAttribute('class', 'card__wrap--user');

        let taskImg = document.createElement('img');
        taskImg.className = 'user__profile--img user__img'
        taskImg.setAttribute('src', data[i].ava);
        let taskImgDiv = document.createElement('div');
        taskImgDiv.className = 'user__img'

        // email text
        let taskEmail = document.createElement('h3');
        taskEmail.className = 'user--title user__email--title'
        let taskEmailSub = document.createElement('p');
        taskEmailSub.className = 'header_bottom user__email--subtitle';
        taskEmailSub.textContent = 'Updated 1 day ago';
        taskEmail.textContent = data[i].email;
        let taskEmailDiv = document.createElement('div');
        taskEmailDiv.className = 'user__email user__card'

        // user name
        let taskUserName = document.createElement('h3');
        taskUserName.className = 'user--title user__name--title';
        taskUserName.textContent = data[i].name;
        let taskUserDate = document.createElement('p');
        taskUserDate.className = 'header_bottom user__name--date';
        taskUserDate.textContent = 'on 24.05.2019';
        let taskUserDiv = document.createElement('div');
        taskUserDiv.className = 'user__name user__card';

        // user time
        let taskUserFullTime = document.createElement('h3');
        taskUserFullTime.className = 'user--title user__time--title';
        taskUserFullTime.textContent = data[i].date_of_register;
        let taskUserTime = document.createElement('p');
        taskUserTime.className = 'header_bottom user__time--subtitle';
        taskUserTime.textContent = data[i].time;
        let taskUserTimeDiv = document.createElement('div');
        taskUserTimeDiv.className = 'user__time user__card';

        // user button
        let userButton = document.createElement('button');
        userButton.setAttribute('z-index', '10')
        let userButtonBtn = document.createElement('div');
        userButtonBtn.className = 'user__user--btn';
        userButton.className = data[i].priority;
        userButton.textContent = data[i].priority;
        let userButtonIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        let userButtonIconPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        userButtonIconPath.setAttribute('d', 'M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z');
        userButtonIcon.setAttribute('width', '16')
        userButtonIcon.setAttribute('height', '16')
        userButtonIcon.setAttribute('id', 'dropDown__open')
        userButtonIcon.setAttribute('fill', 'currentColor')
        userButtonIcon.classList.add('bi', 'bi-three-dots-vertical', 'bi_svg');
        userButtonIcon.setAttribute('viewBox', '0 0 16 16')
        userButtonIcon.append(userButtonIconPath)


        let userButtonMore = document.createElement('a');
        userButtonMore.className = 'btn_a';
        userButtonMore.append(userButtonIcon);

        userButtonBtn.append(userButton)

        // dropdown
        // dropdown high button
        let dropHigh = document.createElement('a');
        dropHigh.className = 'btn btn-danger';
        dropHigh.textContent = 'high';
        // dropdown normal button
        let dropMedium = document.createElement('a');
        dropMedium.className = 'btn btn-primary';
        dropMedium.textContent = 'normal';
        // dropdown high button
        let dropLow = document.createElement('a');
        dropLow.className = 'btn btn-warning';
        dropLow.textContent = 'low';
        // dropdown delete button
        let dropDel = document.createElement('a');
        dropDel.className = 'btn btn-outline-danger';
        dropDel.textContent = 'delete';

        let dropdownMenu = document.createElement('div');
        dropdownMenu.className = 'dropdown__menu visually-hidden';
        dropdownMenu.setAttribute('id', 'dropdown');
        dropdownMenu.append(dropHigh, dropMedium, dropLow, dropDel)

        userButtonIcon.addEventListener('click', () => {
            dropdownMenu.classList.toggle('visually-hidden')
        });

        dropdownMenu.addEventListener('click', (event) => {
            let dynamicBtn = event.target.textContent;
            dropdownMenu.classList.add('visually-hidden')
            if (event.target === dropdownMenu) return;
            if (!event.target) dropdownMenu.classList.add('visually-hidden');

            if (data[i].priority = dynamicBtn) userButton.textContent = data[i].priority;

            if (dynamicBtn === 'delete') cardEl.remove()

            if (dynamicBtn === 'high') userButton.className = 'btn btn-danger';
            if (dynamicBtn === 'normal') userButton.className = 'btn btn-primary';
            if (dynamicBtn === 'low') userButton.className = 'btn btn-warning';

        });



        // if buttons
        if (data[i].priority === 'high') userButton.className = 'btn btn-danger';
        if (data[i].priority === 'normal') userButton.className = 'btn btn-primary';
        if (data[i].priority === 'low') userButton.className = 'btn btn-warning';
        let userBtn = document.createElement('div');
        userBtn.className = 'user__button';



        // divs
        taskImgDiv.append(taskImg);
        taskEmailDiv.append(taskEmail, taskEmailSub);
        taskUserDiv.append(taskUserName, taskUserDate);
        taskUserTimeDiv.append(taskUserFullTime, taskUserTime);
        userBtn.append(userButtonBtn, userButtonMore);


        divEl.append(taskImgDiv, taskEmailDiv, taskUserDiv, taskUserTimeDiv, userBtn, dropdownMenu);

        cardEl.append(divEl);

        card.append(cardEl);

    }



}

// columnCards.addEventListener('click', function (e) {
//     console.log(e.target);
//     while (e.target == num) {
//         num++
//     }
// })


// sorted function

// function sorted(str) {
//     let arrSort = str.sort((a, b) => {
//         if (a.name.toLowerCase() < b.name.toLowerCase())
//             return -1;
//         if (a.name.toLowerCase() > b.name.toLowerCase())
//             return 1;
//         return 0;
//         - 1;
//     })
//     return arrSort;
// }


// render(data)


// sort
const sortAz = body.querySelector('#sortAz');

sortAz.addEventListener("change", (e) => {
    const sortingType = e.target.value;
    let newData;
    if (sortingType == 'a-z') {
        console.log('A->Z');
        newData = [...data].sort((a, b) => {
            if (a.name.toLowerCase() < b.name.toLowerCase())
                return -1;
            if (a.name.toLowerCase() > b.name.toLowerCase())
                return 1;
            return 0;
        })
    } else if (sortingType == 'z-a') {
        console.log('Z->A');
        newData = [...data].sort((b, a) => {
            if (a.name.toLowerCase() < b.name.toLowerCase())
                return -1;
            if (a.name.toLowerCase() > b.name.toLowerCase())
                return 1;
            return 0;
        })
    } else {
        newData = data;
    }

    render(newData)
})

// filter
const filterLevel = body.querySelector('#filterLevel');

filterLevel.addEventListener("change", (e) => {
    const filterType = e.target.value;
    let newData;
    if (filterType === 'high') {
        newData = [...data].filter((el) => {
            return el.priority === 'high';
        })
    }
    else if (filterType === 'normal') {
        newData = [...data].filter((el) => {
            return el.priority === 'normal';
        })
    }
    else if (filterType === 'low') {
        newData = [...data].filter((el) => {
            return el.priority === 'low';
        })
    }
    else {
        newData = data;
    }

    render(newData)
})


const searchInput = body.querySelector('#search');

searchInput.addEventListener('input', (e) => {
    const searchType = e.target.value.trim().toLowerCase();

    let newData;

    newData = [...data].filter((el) => {
        if (el.name.toLowerCase().includes(searchType)) return el;
    })

    render(newData)
})



