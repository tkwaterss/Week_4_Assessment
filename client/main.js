const userForm = document.querySelector("#nameCard");
const userName = document.querySelector("#name")
const userNameLabel = document.querySelector("#userName");
const randomCompliment = document.querySelector("#compliment");
const randomFortune = document.querySelector("#fortune");
const showEditBtn = document.querySelector('#showEdit');
const footer = document.querySelector('footer');
const addForm = document.querySelector('#addForm');
const newItem = document.querySelector('#newItem');

let baseURL = "http://localhost:4000/api/fortunes";

const fortuneCallback = ({ data : fortuneObj }) => displayYourFortune(fortuneObj);
const allFortunesCallback = ({ data : fortuneObj }) => displayAllFortunes(fortuneObj);
const errCallback = err => console.log(err);


const getYourFortune = () => axios.get(baseURL + `/yourFortune`).then(fortuneCallback).catch(errCallback);
const getAllFortunes = () => axios.get(baseURL + `/allFortunes`).then(allFortunesCallback).catch(errCallback);
const addFortune = (type, content) => axios.post(baseURL + `/${type}`, {content}).then(allFortunesCallback).catch(errCallback);
const deleteListItem = (index, type) => axios.delete(baseURL + `?index=${index}&type=${type}`).then(allFortunesCallback).catch(errCallback);
const editListItem = (index, type, newContent) => axios.put(baseURL + `?index=${index}&type=${type}`, {newContent}).then(allFortunesCallback).catch(errCallback);

const fortuneEventHandler = event => {
    event.preventDefault();
    getYourFortune();
}

const newFortuneSubmitHandler = event => {
    event.preventDefault();
    let type;
    let options = document.getElementsByName('checkbox')
    for(let i = 0; i < options.length; i++) {
        if (options[i].checked) {
            type = options[i].value;
        }
    }
    let content = newItem.value;

    addFortune(type,content);

    options[0].checked = false;
    options[1].checked = false;
    newItem.value = "";
}

const displayYourFortune = (fortuneObj) => {
    console.log(fortuneObj);
    userNameLabel.textContent = userName.value;
    randomCompliment.textContent = fortuneObj.fortune[0];
    randomFortune.textContent = fortuneObj.fortune[1];
    userName.value = "";
}

const editCompSubmitHandler = (event, index, type) => {
    event.preventDefault();
    let newCompliment = document.querySelector(`#editComplimentInput${index}`).value;
    editListItem(index, type, newCompliment);
}

const editFortSubmitHandler = (event, index, type) => {
    event.preventDefault();
    let newFortune = document.querySelector(`#editFortuneInput${index}`).value;
    editListItem(index, type, newFortune);
}

const showEditCompForm = (index) => {
    let activateEdit = document.querySelector(`#compEditForm${index}`)
    let editCompBtn = document.querySelector(`#editCompBtn${index}`)
    activateEdit.style.display = 'inline';
    editCompBtn.style.display = 'none';
}

const showEditFortForm = (index) => {
    let activateEdit = document.querySelector(`#fortEditForm${index}`)
    let editFortBtn = document.querySelector(`#editFortBtn${index}`)
    activateEdit.style.display = 'inline';
    editFortBtn.style.display = 'none';
}

const displayAllFortunes = (fortuneObj) => {
    let {fortunes, compliments} = fortuneObj;
    const complimentsList = document.querySelector('#compliments');
    const fortunesList = document.querySelector('#fortunes');
    complimentsList.innerHTML = "";
    fortunesList.innerHTML = "";

    compliments.forEach((item, index) => {
        let newItem = document.createElement('li');
        newItem.innerHTML = `
        <button onclick="deleteListItem(${index}, 'compliment')">X</button>
        <button id="editCompBtn${index}" onClick="showEditCompForm(${index})">Edit</button>
        <form class="editForm" id="compEditForm${index}">
        <input type="text" class="editInput" id="editComplimentInput${index}">
        <button id="compEditSubmit" onclick="editCompSubmitHandler(event, ${index}, 'compliment')">Submit</button>
        </form>
        <span>${item}</span>
        `
        complimentsList.appendChild(newItem);
    })
    fortunes.forEach((item, index) => {
        let newItem = document.createElement('li');
        newItem.innerHTML = `
        <button onclick="deleteListItem(${index}, 'fortune')">X</button>
        <button id="editFortBtn${index}" onClick="showEditFortForm(${index})">Edit</button>
        <form class="editForm" id="fortEditForm${index}">
        <input type="text" class="editInput" id="editFortuneInput${index}">
        <button id="fortEditSubmit" onclick="editFortSubmitHandler(event, ${index}, 'fortune')">Submit</button>
        </form>
        <span>${item}</span>
        `
        fortunesList.appendChild(newItem);
    })
}

const toggleEditBtn = event => {
    if (showEditBtn.textContent === "Show Edit Section") {
        showEditBtn.textContent = "Hide Edit Section";
        footer.style.display = "flex";

    } else {
        showEditBtn.textContent = "Show Edit Section";
        footer.style.display = "none";
    }
}

getAllFortunes();

userForm.addEventListener('submit', fortuneEventHandler);
showEditBtn.addEventListener('click', toggleEditBtn)
addForm.addEventListener('submit', newFortuneSubmitHandler);