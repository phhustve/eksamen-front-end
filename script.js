let table = document.querySelector('#friendList')

fetch('lists.json')
.then(response => response.json())
 .then (data => {
    document.querySelector('input#BIGEOMAT').addEventListener('click', function(){
        ul.innerHTML="";
        data.filter(data=>data.forkortelse==="BIGEOMAT").forEach(element => {
            let li = document.createElement('li')
            li.innerHTML = `
            <p class='name'> ${element.fornavn} ${element.etternavn}</p>
            <p class='studyprogram'> ${element.studieprogram} ${element.forkortelse}</p>
            `
            ul.appendChild(li)
        });
    })