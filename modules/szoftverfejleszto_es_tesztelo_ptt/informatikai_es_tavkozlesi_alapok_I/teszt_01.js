let i = 1;
let aktiv = 'Teszt 1';

let adatok = [
    {
        anyag: [
            ['h1', `${i}. Kérdés`],
            ['h2', 'Mi az elektronika?'],
            [
                'img',
                '../informatikai_es_tavkozlesi_alapok_I/images/kep_002.jpg',
            ],
            ['h3', 'Lehetséges válaszok:'],
            [
                'radio',
                `${i}_kerdes`,
                [
                    [`${i}_elso`, 'Valami érdekes.'],
                    [`${i}_masodik`, 'Valami nem érdekes.'],
                ],
            ],
            [
                'button',
                'Kiértékel',
                'radio',
                `${i}_kerdes`,
                'Valami nem érdekes.',
            ],
        ],
    },
    {
        anyag: [
            ['h1', `${++i}. Kérdés`],
            ['h2', 'Mi az elektronika?'],
            [
                'img',
                '../informatikai_es_tavkozlesi_alapok_I/images/kep_002.jpg',
            ],
            ['h3', 'Lehetséges válaszok:'],
            [
                'checkbox',
                `${i}_kerdes`,
                [
                    [`${i}_elso`, 'Valami érdekes.'],
                    [`${i}_masodik`, 'Valami nem érdekes.'],
                ],
                'Hypertext Markup Language',
            ],
            [
                'button',
                'Kiértékel',
                'checkbox',
                `${i}_kerdes`,
                'Valami érdekes.' + '~' + 'Hypertext Maxi Language',
            ],
        ],
    },
];
