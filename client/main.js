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

//.then always takes a response object. We can destructure this inline in a callback function parameter.
//look at discord with Lukas for more info.
const fortuneCallback = ({ data : fortuneObj }) => displayYourFortune(fortuneObj);
const allFortunesCallback = ({ data : fortuneObj }) => displayAllFortunes(fortuneObj);
const errCallback = err => console.log(err);


const getYourFortune = () => axios.get(baseURL + `/yourFortune`).then(fortuneCallback).catch(errCallback);
const getAllFortunes = () => axios.get(baseURL + `/allFortunes`).then(allFortunesCallback).catch(errCallback);
const addFortune = (type, content) => axios.post(baseURL + `/${type}`, {content}).then(allFortunesCallback).catch(errCallback);
const deleteListItem = (index) => axios.delete(baseURL + `/${index}`).then(allFortunesCallback).catch(errCallback);
const editListItem = (index, newContent) => axios.put(baseURL + `/${index}`, {newContent}).then(allFortunesCallback).catch(errCallback);

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
    console.log(type)
    let content = newItem.value;
    console.log(typeof content);

    addFortune(type,content);

    newItem.value = "";
}

const displayYourFortune = (fortuneObj) => {
    console.log(fortuneObj);
    userNameLabel.textContent = userName.value;
    randomCompliment.textContent = fortuneObj.fortune[0];
    randomFortune.textContent = fortuneObj.fortune[1];
    userName.value = "";
}

const displayAllFortunes = (fortuneObj) => {
    let {fortunes, compliments} = fortuneObj;
    const complimentsList = document.querySelector('#compliments');
    const fortunesList = document.querySelector('#fortunes');
    complimentsList.innerHTML = "";
    fortunesList.innerHTML = "";

    const type = {
        id: 1,
        value: "compliment"
    }

    compliments.forEach((item, index) => {
        console.log(index, item);
        let newItem = document.createElement('li');
        newItem.innerHTML = `
        <span>${item}</span>
        <button onclick="deleteListItem(${index})">X</button>
        <button onClick="")
        `
        /*
        Thoughts: I need a way to send an idenifier for the DB through the delete function
        How to make edit button show a text input and submit button, likely through class and 
        inline js-html
        
        */
        //Trying to figure out how to get the type to come trhough to server, index is working.
        //Idea to use class as the type identifier, need to figure out how to sent it through to the server...
        complimentsList.appendChild(newItem);
    })
    fortunes.forEach((item, index) => {
        let newItem = document.createElement('li');
        newItem.innerHTML = `
        <span>${item}</span>
        <button onclick="deleteListItem(${index})">X</button>
        `
        fortunesList.appendChild(newItem);
    })
}

const createEditBtn = () => {
    let editBtn = document.createElement('button');
    editBtn.textContent = "Edit";
    return editBtn;
}

const createDeleteBtn = () => {
    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = "X";
    deleteBtn.classList.add = "deleteBtn"
    return deleteBtn;
}

const toggleEditBtn = event => {
    if (showEditBtn.textContent === "Show Edit Section") {
        showEditBtn.textContent = "Hide Edit Section";
        footer.style.display = "block";

    } else {
        showEditBtn.textContent = "Show Edit Section";
        footer.style.display = "none";
    }
}




getAllFortunes();


userForm.addEventListener('submit', fortuneEventHandler);
showEditBtn.addEventListener('click', toggleEditBtn)
addForm.addEventListener('submit', newFortuneSubmitHandler);






// const complimentBtn = document.getElementById("complimentButton")
// const fortuneBtn = document.getElementById("fortuneButton");
// const ol = document.querySelector('ol');
// const newFortune = document.querySelector('#newFortuneForm');
// const input = document.querySelector('#fortune');
// const deleteBtn = document.querySelector('#deleteButton');
// const editFortune = document.querySelector('#editFortuneForm');
// const edit = document.querySelector('#edit');
// const id = document.querySelector('#id');

// let baseURL = "http://localhost:4000";

// const getCompliment = () => {
//     axios.get("http://localhost:4000/api/compliment/")
//         .then(res => {
//             const data = res.data;
//             alert(data);
//     });
// };
// const getFortune = () => {
//     axios.get(baseURL + "/api/fortune/")
//         .then(response => {
//             alert(response.data);
//         })
//         .catch(err => console.log(err))
// }
// const getAllFortunes = () => {
//     axios.get(baseURL + "/api/fortunes/")
//         .then(response => {
//             displayFortunes(response.data)
//         })
// }
// const addFortune = (event) => {
//     event.preventDefault();
//     axios.post(baseURL + `/api/fortune/${input.value}`)
//         .then(response => {
//             displayFortunes(response.data)
//         })
//         .catch(err => console.log(err))
//     input.value = ""
// }
// const deleteFortune = (event) => {
//     axios.delete(baseURL + `/api/fortune/`)
//         .then(response => {
//             displayFortunes(response.data)
//         })
//         .catch(err => console.log(err))
// }
// const changeFortune = (event) => {
//     event.preventDefault();
//     axios.put(baseURL + `/api/fortune/${id.value}, ${edit.value}`)
//         .then(response => {
//             displayFortunes(response.data)
//         })
//         .catch(err => console.log(err))
//     edit.value = ""
//     id.value = ""
// }


// const createFortune = string => {
//     const newFortune = document.createElement('li')
//     newFortune.textContent = string;

//     ol.appendChild(newFortune)
// }

// const displayFortunes = (array) => {
//     ol.innerHTML = "";
//     for (let i = 0; i < array.length; i++) {
//         createFortune(array[i]);
//     }
// }


// getAllFortunes();

// newFortune.addEventListener('submit', addFortune)
// complimentBtn.addEventListener('click', getCompliment)
// fortuneBtn.addEventListener('click', getFortune)
// deleteBtn.addEventListener('click', deleteFortune)
// editFortune.addEventListener('submit', changeFortune)