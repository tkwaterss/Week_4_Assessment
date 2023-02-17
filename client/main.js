const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton");
const ol = document.querySelector('ol');
const newFortune = document.querySelector('#newFortuneForm');
const input = document.querySelector('#fortune');
const deleteBtn = document.querySelector('#deleteButton');
const editFortune = document.querySelector('#editFortuneForm');
const edit = document.querySelector('#edit');
const id = document.querySelector('#id');

let baseURL = "http://localhost:4000";

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
const getFortune = () => {
    axios.get(baseURL + "/api/fortune/")
        .then(response => {
            alert(response.data);
        })
        .catch(err => console.log(err))
}
const getAllFortunes = () => {
    axios.get(baseURL + "/api/fortunes/")
        .then(response => {
            displayFortunes(response.data)
        })
}
const addFortune = (event) => {
    event.preventDefault();
    axios.post(baseURL + `/api/fortune/${input.value}`)
        .then(response => {
            displayFortunes(response.data)
        })
        .catch(err => console.log(err))
    input.value = ""
}
const deleteFortune = (event) => {
    axios.delete(baseURL + `/api/fortune/`)
        .then(response => {
            displayFortunes(response.data)
        })
        .catch(err => console.log(err))
}
const changeFortune = (event) => {
    event.preventDefault();
    axios.put(baseURL + `/api/fortune/${id.value}, ${edit.value}`)
        .then(response => {
            displayFortunes(response.data)
        })
        .catch(err => console.log(err))
    edit.value = ""
    id.value = ""
}


const createFortune = string => {
    const newFortune = document.createElement('li')
    newFortune.textContent = string;

    ol.appendChild(newFortune)
}

const displayFortunes = (array) => {
    ol.innerHTML = "";
    for (let i = 0; i < array.length; i++) {
        createFortune(array[i]);
    }
}


getAllFortunes();

newFortune.addEventListener('submit', addFortune)
complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
deleteBtn.addEventListener('click', deleteFortune)
editFortune.addEventListener('submit', changeFortune)