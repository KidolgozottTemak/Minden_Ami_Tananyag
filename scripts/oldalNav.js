let oldalNavMasodik = document.getElementById('oldal-nav');
let felsoNavMasodik = document.getElementById('felso-nav');

let tartalomOldal = '';

oldalNavElemek.forEach((elem) => {
    if (elem.type === 'h4') {
        tartalomOldal += `<h4>${elem.cim}</h4>`;
    } else if (elem.type === 'a') {
        if (aktiv === elem.cim) {
            tartalomOldal += `<li class="nav-elem active"><a href="${elem.link}">${elem.cim}</a></li>`;
        } else {
            tartalomOldal += `<li><a href="${elem.link}">${elem.cim}</a></li>`;
        }
    }
});

oldalNavMasodik.innerHTML = tartalomOldal;

let tartalomFelso = '';

felsoNavElemek.forEach((elem) => {
    if (aktivFelso === elem.cim) {
        tartalomFelso += `<li class="active"><a href="${elem.link}">${elem.cim}</a></li>`;
    } else {
        tartalomFelso += `<li><a href="${elem.link}">${elem.cim}</a></li>`;
    }
});

felsoNavMasodik.innerHTML += tartalomFelso;
