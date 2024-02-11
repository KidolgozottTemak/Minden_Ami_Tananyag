let tartalom = document.getElementById('belso-tartalom');
let bal = document.getElementById('bal');
let jobb = document.getElementById('jobb');
let elrejtett = document.getElementById('elrejtett');
let oldalNav = document.getElementById('oldal-nav');
let root = document.getElementById('root');

let index = 0;

if (adatok.length === 1) {
    jobb.setAttribute('disabled', 'true');
}

let beszur = '';

for (let j = 0; j < adatok[0].anyag.length; j++) {
    beszur += letrehoz(adatok[0].anyag[j]);
}

tartalom.innerHTML = beszur;

bal.addEventListener('click', () => {
    index--;
    let beszur = '';

    for (let j = 0; j < adatok[index].anyag.length; j++) {
        beszur += letrehoz(adatok[index].anyag[j]);
    }

    if (index === 0) {
        bal.setAttribute('disabled', 'true');
        jobb.removeAttribute('disabled');
    } else {
        bal.removeAttribute('disabled');
        jobb.removeAttribute('disabled');
    }

    tartalom.innerHTML = beszur;
});

jobb.addEventListener('click', () => {
    index++;
    bal.removeAttribute('disabled');
    let beszur = '';

    for (let j = 0; j < adatok[index].anyag.length; j++) {
        beszur += letrehoz(adatok[index].anyag[j]);
    }

    if (index === adatok.length - 1) {
        jobb.setAttribute('disabled', 'true');
    }

    tartalom.innerHTML = beszur;
});

let rejtve = true;

elrejtett.addEventListener('click', () => {
    if (rejtve) {
        oldalNav.style.display = 'block';
        root.style.paddingLeft = '0px';
    } else {
        oldalNav.style.display = 'none';
    }

    rejtve = !rejtve;
});

function kiertekel(e, tipus, name, jo) {
    e.preventDefault();

    if (tipus === 'radio') {
        const valaszok = document.getElementsByName(name);
        let valasz = '';

        valaszok.forEach((elem) => {
            if (elem.checked) {
                valasz = elem.value;
            }
        });

        if (jo === valasz) {
            window.alert('Ügyes vagy!');
        } else {
            window.alert(`Nem talált!\nHelyes válasz:\n${jo}`);
        }
    } else if (tipus === 'checkbox') {
        const kijeloltek = document.querySelectorAll(
            `input[name="${name}"]:checked`
        );

        let valaszok = [];

        kijeloltek.forEach((elem) => {
            valaszok.push(elem.value);
        });

        const joValaszok = jo.split('~');

        if (arrayEquals(joValaszok, valaszok)) {
            window.alert('Ügyes vagy!');
        } else {
            let szoveg = 'Nem talált!\nHelyes válasz(ok):';

            joValaszok.forEach((elem) => {
                szoveg += `\n${elem}`;
            });
            window.alert(szoveg);
        }
    }
}

function arrayEquals(a, b) {
    return (
        Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index])
    );
}
