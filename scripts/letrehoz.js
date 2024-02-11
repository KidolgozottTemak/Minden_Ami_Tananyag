function letrehoz(adatTomb) {
    let alternativa = adatTomb[0];
    let letrehozott = '';

    switch (alternativa) {
        case 'h1': {
            letrehozott = `<h1>${adatTomb[1]}</h1>`;
            break;
        }
        case 'h2': {
            letrehozott = `<h2>${adatTomb[1]}</h2>`;
            break;
        }
        case 'h3': {
            letrehozott = `<h3>${adatTomb[1]}</h3>`;
            break;
        }
        case 'h4': {
            letrehozott = `<h4>${adatTomb[1]}</h4>`;
            break;
        }
        case 'h5': {
            letrehozott = `<h5>${adatTomb[1]}</h5>`;
            break;
        }
        case 'h6': {
            letrehozott = `<h6>${adatTomb[1]}</h6>`;
            break;
        }
        case 'ul': {
            letrehozott = '<ul>';
            for (let i = 0; i < adatTomb[1].length; i++) {
                letrehozott += `<li>${adatTomb[1][i]}</li>`;
            }
            letrehozott += '</ul>';
            break;
        }
        case 'img': {
            letrehozott = `<img src="${adatTomb[1]}" />`;
            break;
        }
        case 'p': {
            letrehozott = `<p>${adatTomb[1]}</p>`;
            break;
        }
        case 'a': {
            if (adatTomb[2] === 'Tananyag') {
                letrehozott = `<p>Forrás: <a href="${adatTomb[1]}">${adatTomb[2]}</a></p>`;
            } else {
                letrehozott = `<p>Forrás: <a href="${adatTomb[1]}" target="_blank">${adatTomb[2]}</a></p>`;
            }
            break;
        }
        case 'radio': {
            for (let i = 0; i < adatTomb[2].length; i++) {
                letrehozott += `<input type="radio" id="${adatTomb[2][i][0]}" name="${adatTomb[1]}" value="${adatTomb[2][i][1]}" />`;
                letrehozott += `<label for="${adatTomb[2][i][0]}">${adatTomb[2][i][1]}</label>`;
                letrehozott += '<br />';
            }
            break;
        }
        case 'checkbox': {
            for (let i = 0; i < adatTomb[2].length; i++) {
                letrehozott += `<input type="checkbox" id="${adatTomb[2][i][0]}" name="${adatTomb[1]}" value="${adatTomb[2][i][1]}" />`;
                letrehozott += `<label for="${adatTomb[2][i][0]}">${adatTomb[2][i][1]}</label>`;
                letrehozott += '<br />';
            }
            break;
        }
        case 'button': {
            letrehozott = `<button onclick="kiertekel(event, '${adatTomb[2]}', '${adatTomb[3]}', '${adatTomb[4]}')">${adatTomb[1]}</button>`;
            break;
        }
    }

    return letrehozott;
}
