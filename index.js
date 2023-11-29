let form = document.forms.form
let formName = form.name;
let formEmail = form.email;

form.addEventListener('submit', e => {
  e.preventDefault()
})
get_users.addEventListener('click', async _ => {
  let res = await fetch('/api').then(data => data.json())
  for (let { name, age, email } of res) {
    list_of_users.innerHTML += `<li> ${name}:
                                  <li> Age: ${age}</li>
                                  <li> Email: ${email}</li>
                                </li>`
  }
})

