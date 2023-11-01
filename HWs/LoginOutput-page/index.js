function displayInfo() {
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    document.getElementById("data").innerHTML = name + ' ' + surname + '!';
}