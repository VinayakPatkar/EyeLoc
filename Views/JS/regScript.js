function submitRegForm(e){
    console.log('hello');
    let name = document.getElementById('regFirstName').value +" "+ document.getElementById('regLastName').value;
    let email = document.getElementById('regEmail').value;
    let password = document.getElementById('regPass').value;
    let color = document.getElementById('colors').value;
    console.log(name)
    console.log(email)
    console.log(color)
    console.log(password)

}