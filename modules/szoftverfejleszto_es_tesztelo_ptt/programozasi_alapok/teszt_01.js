let i = 1;
let aktiv = 'Teszt 1';

let adatok = [
    {
        anyag: [
            ['h1', `${i}. Kérdés`],
            ['h2', 'Mi a HTML?'],
            ['img', '../programozasi_alapok/images/kep_001.jpg'],
            ['h3', 'Lehetséges válaszok:'],
            [
                'radio',
                `${i}_kerdes`,
                [
                    [`${i}_elso`, 'Hypertext Markup Language'],
                    [`${i}_masodik`, 'Hypertitle Markup Language'],
                    [`${i}_harmadik`, 'Hypertext Maxi Language'],
                ],
            ],
            [
                'button',
                'Kiértékel',
                'radio',
                `${i}_kerdes`,
                'Hypertext Markup Language',
            ],
        ],
    },
    {
        anyag: [
            ['h1', `${++i}. Kérdés`],
            ['h2', 'Mi a HTML?'],
            ['img', '../programozasi_alapok/images/kep_001.jpg'],
            ['h3', 'Lehetséges válaszok:'],
            [
                'checkbox',
                `${i}_kerdes`,
                [
                    [`${i}_elso`, 'Hypertext Markup Language'],
                    [`${i}_masodik`, 'Hypertitle Markup Language'],
                    [`${i}_harmadik`, 'Hypertext Maxi Language'],
                ],
                'Hypertext Markup Language',
            ],
            [
                'button',
                'Kiértékel',
                'checkbox',
                `${i}_kerdes`,
                'Hypertext Markup Language' + '~' + 'Hypertext Maxi Language',
            ],
        ],
    },
];
