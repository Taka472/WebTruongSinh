let loginButton = document.getElementById('loginButton')

const apiURL = 'http://localhost:3001'
const serverURL = 'http://localhost:3000'

const Login = async() => {
    data = {
        username: document.getElementById('usernameTxt').value,
        password: document.getElementById('passwordTxt').value
    }
    await fetch(apiURL + '/api/Login', {
        method: 'POST',
        mode: 'cors',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            window.location = '/Admin/Dashboard'
        }
    })
    .catch(err => {console.log(err)})
}

loginButton.onclick = Login