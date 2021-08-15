// Add your code here


function submitData(name, email){
    const formData = {
        name: name,
        email: email
    };
    
    const configObj = {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };
    
    return fetch("http://localhost:3000/users", configObj)
        .then(function(response) {
        return response.json();
        })
        .then(object => append(object.id))
        .catch(error => {
            append(error)
          });
}

function append(content){
    let div = document.createElement('div')
    div.innerHTML = content
    document.querySelector('div.ids').appendChild(div)
}