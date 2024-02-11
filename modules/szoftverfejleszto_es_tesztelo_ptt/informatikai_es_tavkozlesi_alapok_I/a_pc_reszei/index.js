let i = 1;
let aktiv = '1. óra';

let adatok = [
    {
        anyag: [
            ['h1', `${i++}. Kártya`],
            ['h2', 'A tanulási terület tartalmi összefoglalója'],
            [
                'img',
                '../../informatikai_es_tavkozlesi_alapok_I/images/kep_003.jpg',
            ],
            [
                'p',
                'Ismeri a számítógép általános felépítését, a számítógépházak, tápegységek, alaplapok, processzortípusok, foglalatok jellemzőit, tulajdonságait.',
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
            ['h2', 'Mi a személyi számítógép (Personal Computer - PC)?'],
            [
                'img',
                '../informatikai_es_tavkozlesi_alapok_I/images/kep_004.jpg',
            ],
            [
                'p',
                'A <span class="kiemel">számítógép</span> információ feldolgozására, tárolására és megjelenítésére szolgáló eszköz.',
            ],
            [
                'p',
                'A <span class="kiemel">számítógép</span> olyan gép, amely képes információkat tárolni és feldolgozni . A legtöbb számítógép bináris rendszerre támaszkodik , amely két változót, a 0-t és az 1-et használja az olyan feladatok elvégzésére, mint az adatok tárolása, az algoritmusok kiszámítása és az információk megjelenítése. A számítógépek sokféle formában és méretben kaphatók, a kézi okostelefonoktól a 300 tonnánál nagyobb tömegű szuperszámítógépekig .',
            ],
            [
                'a',
                'https://www.britannica.com/technology/computer',
                'Britannica',
            ],
            [
                'p',
                'A <span class="kiemel">személyi számítógép</span> (angolul: personal computer, PC) olyan számítógép, amely nem egy központi számítógép terminálja (munkaállomása), hanem önálló, egyetlen személy (az ún. végfelhasználó) által kezelt, kisebb méretű gép saját billentyűzettel, processzorral, operatív memóriával és monitorral.',
            ],
            [
                'a',
                'https://hu.wikipedia.org/wiki/Szem%C3%A9lyi_sz%C3%A1m%C3%ADt%C3%B3g%C3%A9p',
                'Wikipedia',
            ],
        ],
    },
    {
        anyag: [
            ['h1', `${i++}. Kártya`],
            ['h2', 'A számítógép részei'],
            [
                'img',
                '../informatikai_es_tavkozlesi_alapok_I/images/kep_005.png',
            ],
            ['h3', 'Fontosabb részek:'],
            [
                'ul',
                [
                    'Számítógépház - Computer Case',
                    'Alaplap - Motherboard',
                    'Processzor - Central Processing Unit (CPU)',
                    'Elsődleges Memória (Véletlen Elérési Memória) - Random Access Memory (RAM)',
                    'Másodlagos Memória (Merevlemez) - Hard Disc Drive (HDD), Solid State Drive (SSD)',
                    'Tápegység - Power Supply Unit (PSU)',
                    'Hűtők, ventillátorok - Coolers, Fans',
                    'Csatlakozók - Connectors, Ports (VGA, HDMI, Display, USB, Ethernet, Audio Jack)',
                    'Kábelek - Cabels',
                    'Billentyűzet - Keybord',
                    'Monitor',
                    'Egér - Mouse',
                    'Videókártya - Graphics Processing Unit (GPU)',
                    'Hangkártya - Sound Card',
                    'Hálózati kártya - Network Interface Card',
                ],
            ],
            ['h3', 'Kevésbé fontos részek:'],
            [
                'ul',
                [
                    'Optikai meghajtók - Optical Drive (CD, DVD, Blu-Ray)',
                    'Külső memória, meghajtók - External Drive',
                    'Kamera - Webcam',
                    'Hangszórók - Speakers',
                    'Mikrofon - Microfone',
                ],
            ],
            ['a', 'https://englishan.com/parts-of-computer-names', 'Englishan'],
        ],
    },
    {
        anyag: [
            ['h1', `${i++}. Kártya`],
            ['h2', 'A számítógép ház'],
            [
                'img',
                '../informatikai_es_tavkozlesi_alapok_I/images/kep_006.jpg',
            ],
            [
                'p',
                ' A PC ház ad otthont a számítógép összes fontos alkatrészének, beleértve az alaplapot, a tápegységet, adattárolókat és más komponenseket. Számos különböző PC ház méret és szabvány közül lehet választani, mindegyiknek megvannak a maga előnyei és hátrányai. ',
            ],
            ['h3', 'Small Form Factor (SFF)'],
            [
                'p',
                'Az SFF (Small Form Factor) házakat úgy tervezték, hogy kis méretűek és könnyen mozgathatók legyenek. Legfőképp azok számára ajánljuk, akik olyan PC-t szeretnének, amely kis helyen elfér, vagy amelyet könnyen áthelyezhetnek egyik helyről a másikra. Az SFF házak mérete kb. 35x35x10 centiméter körül mozog. Ennek a formátumnak az egyik hátránya, hogy nem biztos, hogy elegendő hellyel rendelkeznek a csúcskategóriás grafikus kártyák vagy több meghajtó számára, ezért a hardcore játékosoknak nem ajánljuk. Kis méretű kialakításuk miatt korlátozott bővítési lehetőségekkel rendelkeznek, azonban a legtöbb esetben a memória és a tárhely könnyedén bővíthető.',
            ],
            ['h3', 'Ultra Small Form Factor (USFF), Mini PC'],
            [
                'p',
                'Az Ultra Small Form Factor (USFF) házak még az SFF formátumú házaknál is kisebbek, méretük jellemzően 20 cm x 10 cm x 20 cm vagy annál kisebb méretű. Az USFF házak mérete és alakja azonban a gyártótól és az adott modelltől függően változó. Általában olyan helyeken használják ezeket a kis méretű PC-ket, ahol a hely szűkös. Ilyenek például az értékesítési pontok, kisebb irodák vagy műhelyek. Kis méretük miatt az USFF házak korlátozott bővítési lehetőségekkel rendelkeznek, rendszerint a RAM és a tárhely bővítésére van lehetőségünk. Nagy előnyük, hogy ezek a gépek általában energiatakarékosabbak, mint a nagyobb méretű testvéreik.',
            ],
            ['h3', 'Desktop (DT)'],
            [
                'p',
                'A desktop vagy asztali torony egy olyan szabványos PC ház formátum, amelyet úgy terveztek, hogy függőlegesen álljon az asztalon, és elegendő helyet biztosítson az alkatrészek számára. Az egyik legelterjedtebb PC ház típus. Az asztali torony (DT) házak jellemzően 40-60 cm magasak, 18-25 cm szélesek és 40-50 cm mélyek, és nagyszerű választás azoknak, akik olyan PC-t szeretnének, amely lehetőséget kínál a bővítéshez és testreszabáshoz. Fontos megjegyezni, hogy a pontos méretek az adott modelltől és gyártótól függően változhatnak. Az alkatrészekhez könnyen hozzáférhetünk, mivel a legtöbb modell fedlapja szerszámok nélkül is eltávolítható. A DT méretű házakban elegendő helyet találunk nagyobb teljesítményű hűtőrendszernek és videókártyának is, ezért akár gamer PC-nek is ideális választás lehet.',
            ],
            ['h3', 'Small Desktop (SD vagy SDT)'],
            [
                'p',
                'A Small Desktop a Desktop (DT) formátum kisebb változata, amely alapszintű otthoni vagy irodai PC-nek is alkalmas. Az SD ház átlagos mérete jellemzően 250-350 milliméter magas, 100-250 milliméter széles és 300-400 milliméter mély. Ezek a kis asztali számítógép házak nagyszerű választás azoknak, akik olyan alap PC-t szeretnének, amely nem foglal sok helyet. A modern small desktop PC-k rendszerint elegáns, letisztult külsővel rendelkeznek.',
            ],
            ['h3', 'Ultra-Slim Desktop (USDT)'],
            [
                'p',
                'Az ultravékony vagy ultra slim desktop (USDT) házakat úgy tervezték, hogy a lehető legvékonyabbak legyenek, magasságuk gyakran 6 centiméternél is alacsonyabb. Általában olyan környezetben használják, ahol a hely korlátozott, például irodai íróasztalokon vagy dolgozó fülkékben. Az USDT formátumú házak gyakran korlátozott bővítési lehetőségekkel rendelkeznek, de nagyszerű választás lehetnek azok számára, akik olyan irodai PC-t szeretnének, amely nem foglal sok helyet az íróasztalon.',
            ],
            ['h3', 'Mini tower (MT)'],
            [
                'p',
                'A mini torony (MT) házak valamivel nagyobbak, mint az SFF házak. Méretük kb. 36 cm (magasság) x 17 cm (szélesség) x 35 cm (mélység). Jó választás azoknak, akik kis méretű PC-t szeretnének, amelybe még mindig elférnek a csúcskategóriás komponensek, például grafikus kártyák vagy több tároló meghajtó. Az MT tokokat gyakran használják játék- vagy házimozi PC-kben.',
            ],
            ['h3', 'Convertible Mini Tower (CMT)'],
            [
                'p',
                'Az átalakítható, avagy convertible mini tower (CMT) házak hasonlóak az MT házakhoz, de egyedi kialakításuk lehetővé teszi, álló vagy fekvő helyzetben is használhatók. Számtalan bővítési lehetőséggel rendelkeznek, több meghajtó és egyéb komponens is elfér bennük. Kialakításuk miatt a belső alkatrészek szerszámok nélkül is könnyen hozzáférhetők. A CMT házakban nagyobb teljesítményű ventilátorok, kiegészítő kártyák is elférnek, ezért alkalmasak munkaállomásnak (workstation pc) vagy gamer pc-nek is. Ami az átlagos méretet illeti, a CMT-k jellemzően 35-45 cm magasak, 17-25 cm szélesek és 35-45 cm mélyek.',
            ],
            ['h3', 'Midi Tower'],
            [
                'p',
                'A midi towerek az asztali PC gépházak leggyakoribb típusai. A miditorony PC házak átlagos mérete változó, de jellemzően a 45-55 cm magasság, 20-25 cm szélesség és 45-55 cm mélység tartományba esik, ami elég nagy a legtöbb alkatrész elhelyezéséhez. A mid tower házak jó választás azok számára, akik olyan PC-t szeretnének, amely elég helyet biztosít a bővítéshez. Gyakran használják őket játék-, házimozi vagy munkaállomás PC-kben. Normál méretű ATX formátumú alaplapokkal is kompatibilis és változatos konfigurációk összeszerelésére ad lehetőséget.',
            ],
            ['h3', 'Full Tower'],
            [
                'p',
                'A full tower házak az asztali PC-k legnagyobb formátumú gépházai, amelyeket nagy teljesítményű játék-PC-khez és több alkatrészt és helyet igénylő munkaállomásokhoz vagy szervereknek terveztek. Ezek általában 70x70x30 mérettel rendelkeznek, és a legnagyobb komponensek, köztük több grafikus kártya és hűtőrendszer elhelyezésére is alkalmasak. A full tower házak jó választásnak bizonyulnak azok számára, akik a lehető legerősebb és leginkább testre szabható PC-t szeretnék. Komponensek tekintetében a Full Towerek E-ATX és HPTX alaplapokat is támogatnak.',
            ],
            [
                'a',
                'https://www.furbify.hu/blog/hasznos-tudnivalok/a-szamitogep-hazak-tipusai',
                'furbify',
            ],
        ],
    },
];
