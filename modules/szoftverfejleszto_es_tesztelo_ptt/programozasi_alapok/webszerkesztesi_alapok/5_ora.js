let i = 1;
let aktiv = '5. óra';

let adatok = [
    {
        anyag: [
            ['h1', `${i++}. Kártya`],
            ['h2', 'A tanulási terület tartalmi összefoglalója'],
            ['img', '../../programozasi_alapok/images/kep_014.png'],
            [
                'p',
                'Ismeri a HTML-oldalak alapvető elemeit, képes új HTML-oldal létrehozására ezeknek a szerepeltetésével (!DOCTYPE, html, head, body).',
            ],
            [
                'a',
                'https://api.ikk.hu/storage/uploads/files/ptt_informatika_szoftverfejleszto_es_-tesztelo_2020pdf-1599123461507.pdf',
                'PTT - Programtanterv',
            ],
        ],
    },
    {
        anyag: [
            ['h1', `${i++}. Kártya`],
            ['h2', 'Mi az a HTML?'],
            ['img', '../../programozasi_alapok/images/kep_014.png'],
            [
                'p',
                'A HTML a Hypertext Markup Language (Hiperszöveg Jelölőnyelv) rövidítése.',
            ],
            [
                'p',
                'Hiperszöveg, mert sima szöveg, más erőforrásokra (pl. másik oldal, szerver stb.) mutató hivatkozásokkal.',
            ],
            [
                'p',
                'Jelölőnyelv, mert az oldal tartalmát címkék (tag) közé, elemekbe (element) csomagolja.',
            ],
            [
                'p',
                'A HTML megmondja, hogy az oldal milyen elemekből milyen sorrendben épüljön fel.',
            ],
            ['p', 'De a stílusról nem mond el semmit!'],
        ],
    },
    {
        anyag: [
            ['h1', `${i++}. Kártya`],
            ['h2', 'Az első index.html oldal létrehozása'],
            ['img', '../../programozasi_alapok/images/kep_014.png'],
            ['p', 'Hozzunk létre egy html_gyakorlas nevű mappát.'],
            [
                'p',
                'Ebben a mappában alkossuk meg az első index.html állományunkat.',
            ],
            [
                'p',
                'Nyissuk meg szerkesztésre a Visual Studio Code szerkesztővel.',
            ],
            ['p', 'Most az egyszer dolgozzunk az emmet használata nélkül.'],
        ],
    },
    {
        anyag: [
            ['h1', `${i++}. Kártya`],
            ['h2', 'Az első index.html oldal szerkesztése'],
            ['img', '../../programozasi_alapok/images/kep_034.png', 'kod'],
            [
                'p',
                'Ezzel az elemmel (1. sor) jelöljük, hogy az állomány a HTML 5-ös kódolást fogja követni.',
            ],
            ['p', 'Mindig az első elemnek kell lennie!'],
            [
                'p',
                'Kis-, nagybetűre nem érzékeny, de javasolt a fenti módon írni.',
            ],
        ],
    },
    {
        anyag: [
            ['h1', `${i++}. Kártya`],
            ['h2', 'Az első index.html oldal szerkesztése'],
            ['img', '../../programozasi_alapok/images/kep_035.png', 'kod'],
            [
                'p',
                'A következő elem (2. sor) fogja tartalmazni a többi elemet. Ezt nevezik még root (gyökér) elemnek is.',
            ],
            [
                'p',
                'Kis-, nagybetűre nem érzékeny, de javasolt a fenti módon írni.',
            ],
        ],
    },
    {
        anyag: [
            ['h1', `${i++}. Kártya`],
            ['h2', 'Az első index.html oldal szerkesztése'],
            ['img', '../../programozasi_alapok/images/kep_036.png', 'kod'],
            [
                'p',
                'A következő elem (3. sor) fogja tartalmazni a meta elemeket. Ezek olyan elemek, amelyek plusz információkat szolgáltatnak az oldalról.',
            ],
            ['p', 'A tartalma nem fog megjelenni az oldalon!'],
            [
                'p',
                'Kis-, nagybetűre nem érzékeny, de javasolt a fenti módon írni.',
            ],
        ],
    },
    {
        anyag: [
            ['h1', `${i++}. Kártya`],
            ['h2', 'Az első index.html oldal szerkesztése'],
            ['img', '../../programozasi_alapok/images/kep_037.png', 'kod'],
            [
                'p',
                'A következő elem (4. sor) fogja tartalmazni az oldalon ténylegesen megjelenő elemeket. ',
            ],
            [
                'p',
                'Kis-, nagybetűre nem érzékeny, de javasolt a fenti módon írni.',
            ],
        ],
    },
];
