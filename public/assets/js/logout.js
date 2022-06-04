async function logout() {
    const response = await fetch('https://blooming-escarpment-07246.herokuapp.com/api/users/logout', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' }
    });
    console.log(response);  
    if (response.ok) {
        
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('#logout').addEventListener('click', logout);