export type SentencePair = { native: string; target: string };
export type WordPair = { native: string; target: string; id: string };
export type TextItem = { id: string; title: string; title_native: string; title_target: string; sentences: SentencePair[]; words: WordPair[] };
export type Section = { id: string; title_native: string; title_target: string; texts: TextItem[] };


export type Library = {
    learningLang: "en" | "pt" | "es"; // что учим (пример: en)
    sections: Section[];
};


export const demoLibraryEN: Library = {
    learningLang: "en",
    sections: [
        {
            id: "daily",
            title_native: "Повседневность",
            title_target: "Daily life",
            texts: [
                {
                    id: "coffee",
                    title: "Утро и кофе",
                    title_native: "Утро и кофе",
                    title_target: "Morning and coffee",
                    sentences: [
                        { native: "Каждое утро я встаю рано.", target: "Every morning I wake up early." },
                        { native: "Я делаю кофе и слушаю музыку.", target: "I make coffee and listen to music." },
                        { native: "Потом я пишу пару писем и выхожу.", target: "Then I write a couple of emails and head out." },
                    ],
                    // 20 слов, id одинаков для пары — это нужно для точной проверки в тренажёре
                    words: [
                        { id: "w1", native: "утро", target: "morning" },
                        { id: "w2", native: "кофе", target: "coffee" },
                        { id: "w3", native: "музыка", target: "music" },
                        { id: "w4", native: "писать", target: "to write" },
                        { id: "w5", native: "выходить", target: "to go out" },
                        { id: "w6", native: "рано", target: "early" },
                        { id: "w7", native: "вставать", target: "to wake up" },
                        { id: "w8", native: "делать", target: "to make" },
                        { id: "w9", native: "слушать", target: "to listen" },
                        { id: "w10", native: "письмо", target: "email" },
                        { id: "w11", native: "голова", target: "head" },
                        { id: "w12", native: "книга", target: "book" },
                        { id: "w13", native: "вода", target: "water" },
                        { id: "w14", native: "дом", target: "home" },
                        { id: "w15", native: "работа", target: "work" },
                        { id: "w16", native: "идти", target: "to go" },
                        { id: "w17", native: "пить", target: "to drink" },
                        { id: "w18", native: "слышать", target: "to hear" },
                        { id: "w19", native: "быстрый", target: "fast" },
                        { id: "w20", native: "на улице", target: "outside" },
                    ],
                },
            ],

        },
    ],
};

export const demoLibraryPT: Library = {
    learningLang: "pt",
    sections: [
        {
            id: "vida",
            title_native: "А2",
            title_target: "A2",
            texts: [
                {
                    id: "laura",
                    title: "Тренировка спряжений глаголов ser ter ver fazer",
                    title_native: ":Жизнь Лауры",
                    title_target: "A vida de Laura",
                    sentences: [
                        {
                            native: "Я — преподаватель музыки, и моё имя — Лаура.",
                            target: "Eu sou professora de música e o meu nome é Laura.",
                        },
                        {
                            native: "Моя жизнь простая, но полная звуков и эмоций.",
                            target: "A minha vida é simples, mas cheia de sons e emoções.",
                        },
                        {
                            native: "Каждое утро, когда восходит солнце, я имею привычку:",
                            target: "Todas as manhãs, quando o sol está a nascer, eu tenho um hábito:",
                        },
                        {
                            native: "Делаю крепкий кофе и смотрю на небо через окно.",
                            target: "Faço um café forte e vejo o céu pela janela.",
                        },
                        {
                            native: "Иногда небо голубое, иногда серое — зависит от настроения дня.",
                            target: "Às vezes o céu é azul, às vezes é cinzento — depende do humor do dia.",
                        },
                        {
                            native: "Мой муж художник.",
                            target: "O meu marido é pintor.",
                        },
                        {
                            native: "Он делает картины каждый день и говорит, что искусство — его дыхание.",
                            target: "Ele faz quadros todos os dias, e sempre diz que a arte é a sua respiração.",
                        },
                        {
                            native: "У нас есть маленький дом у моря, и когда есть время, мы гуляем по пляжу.",
                            target: "Nós temos uma pequena casa perto do mar, e quando temos tempo, fazemos caminhadas na praia.",
                        },
                        {
                            native: "Там мы видим чаек и волны, которые играют.",
                            target: "Lá nós vemos as gaivotas e as ondas a brincar.",
                        },
                        {
                            native: "Я вижу всё как песню, он видит как картину.",
                            target: "Eu vejo tudo como uma canção, ele vê como uma pintura.",
                        },
                        {
                            native: "Мои ученики разные: некоторые застенчивые, другие разговорчивые.",
                            target: "Os meus alunos são diferentes: alguns são tímidos, outros são muito faladores.",
                        },
                        {
                            native: "Все любят музыку, и это делает мою работу стоящей.",
                            target: "Todos têm amor pela música, e isso faz o meu trabalho valer a pena.",
                        },
                        {
                            native: "Когда я веду урок, я всегда чувствую новую энергию.",
                            target: "Quando eu faço uma aula, tenho sempre uma energia nova.",
                        },
                        {
                            native: "Они видят во мне подругу, а я вижу в них будущее.",
                            target: "Eles veem em mim uma amiga, e eu vejo neles o futuro.",
                        },
                        {
                            native: "В полдень моя маленькая дочь дома.",
                            target: "Ao meio-dia, a minha filha pequena está em casa.",
                        },
                        {
                            native: "Ей пять лет, и она очень любопытная.",
                            target: "Ela tem cinco anos e é muito curiosa.",
                        },
                        {
                            native: "Каждый день она задаёт тысячу вопросов: «Мама, почему море голубое?»",
                            target: "Todos os dias ela faz mil perguntas: “Mamã, por que o mar é azul?”",
                        },
                        {
                            native: "Я отвечаю: «Потому что небо — его зеркало.»",
                            target: "Eu respondo: “Porque o céu é o espelho dele.”",
                        },
                        {
                            native: "Она видит мир как волшебное место, и мне везёт учиться с ней.",
                            target: "Ela vê o mundo como um lugar mágico, e eu tenho sorte de aprender com ela.",
                        },
                        {
                            native: "Вечером, когда солнце садится, мы готовим ужин вместе.",
                            target: "À noite, quando o sol se põe, nós fazemos o jantar juntos.",
                        },
                        {
                            native: "Мой муж готовит суп, я делаю рис, а дочь рисует, пока ждёт.",
                            target: "O meu marido faz a sopa, eu faço o arroz, e a nossa filha faz desenhos enquanto espera.",
                        },
                        {
                            native: "После ужина мы смотрим фильм — иногда мультфильм, иногда документальный.",
                            target: "Depois nós vemos um filme — às vezes um desenho animado, às vezes um documentário.",
                        },
                        {
                            native: "В конце дня я всегда чувствую одно и то же: жизнь проста, но с любовью всё совершенно.",
                            target: "No fim do dia, eu tenho sempre a mesma certeza: a vida é simples, mas quando a gente vê, tem e faz com amor, tudo é perfeito.",
                        },
                    ],
                    words: [
                        { id: "w1", native: "sou", target: "я есть (глагол ser)" },
                        { id: "w2", native: "a professora", target: "преподавательница" },
                        { id: "w3", native: "a música", target: "музыка" },
                        { id: "w4", native: "a vida", target: "жизнь" },
                        { id: "w5", native: "simples", target: "простой" },
                        { id: "w6", native: "os sons", target: "звуки" },
                        { id: "w7", native: "as emoções", target: "эмоции" },
                        { id: "w8", native: "as manhãs", target: "утра" },
                        { id: "w9", native: "o sol", target: "солнце" },
                        { id: "w10", native: "nascer", target: "восходить" },
                        { id: "w11", native: "o hábito", target: "привычка" },
                        { id: "w12", native: "o café", target: "кофе" },
                        { id: "w13", native: "forte", target: "крепкий" },
                        { id: "w14", native: "o céu", target: "небо" },
                        { id: "w15", native: "a janela", target: "окно" },
                        { id: "w16", native: "azul", target: "голубой" },
                        { id: "w17", native: "cinzento", target: "серый" },
                        { id: "w18", native: "o humor", target: "настроение" },
                        { id: "w19", native: "o dia", target: "день" },
                        { id: "w20", native: "o marido", target: "муж" },
                        { id: "w21", native: "o pintor", target: "художник" },
                        { id: "w22", native: "a arte", target: "искусство" },
                        { id: "w23", native: "a respiração", target: "дыхание" },
                        { id: "w24", native: "a casa", target: "дом" },
                        { id: "w25", native: "o mar", target: "море" },
                        { id: "w26", native: "a praia", target: "пляж" },
                        { id: "w27", native: "as gaivotas", target: "чайки" },
                        { id: "w28", native: "as ondas", target: "волны" },
                        { id: "w29", native: "brincar", target: "играть" },
                        { id: "w30", native: "a canção", target: "песня" },
                        { id: "w31", native: "a pintura", target: "картина" },
                        { id: "w32", native: "os alunos", target: "ученики" },
                        { id: "w33", native: "tímidos", target: "застенчивые" },
                        { id: "w34", native: "faladores", target: "разговорчивые" },
                        { id: "w35", native: "o trabalho", target: "работа" },
                        { id: "w36", native: "a aula", target: "урок" },
                        { id: "w37", native: "a energia", target: "энергия" },
                        { id: "w38", native: "o futuro", target: "будущее" },
                        { id: "w39", native: "a filha", target: "дочь" },
                        { id: "w40", native: "curiosa", target: "любопытная" },
                        { id: "w41", native: "o espelho", target: "зеркало" },
                        { id: "w42", native: "mágico", target: "волшебный" },
                        { id: "w43", native: "a noite", target: "ночь" },
                        { id: "w44", native: "o jantar", target: "ужин" },
                        { id: "w45", native: "a sopa", target: "суп" },
                        { id: "w46", native: "o arroz", target: "рис" },
                        { id: "w47", native: "os desenhos", target: "рисунки" },
                        { id: "w48", native: "o filme", target: "фильм" },
                        { id: "w49", native: "o documentário", target: "документальный фильм" },
                        { id: "w50", native: "perfeito", target: "совершенный" },
                    ],

                },
                {
                    id: "cores_lisboa",
                    title: "Тренировка прилагательных по окончаниям",
                    title_native: "Цветной день в Лиссабоне",
                    title_target: "Um dia colorido na cidade",
                    sentences: [
                        {
                            native: "Лиссабон — молодой и счастливый город.",
                            target: "Lisboa é uma cidade jovem e feliz.",
                        },
                        {
                            native: "Люди там молодые, энергичные и разговорчивые.",
                            target: "As pessoas são jovens, cheias de energia e muito faladoras.",
                        },
                        {
                            native: "Утром небо синее, а улицы простые, но полные жизни.",
                            target: "De manhã, o céu está azul e as ruas são simples, mas cheias de vida.",
                        },
                        {
                            native: "В кафе на углу португалец пьёт чёрный кофе.",
                            target: "No café da esquina, um homem português bebe o seu café preto.",
                        },
                        {
                            native: "Он разговаривает с португалкой в зелёном платье.",
                            target: "Ele conversa com uma mulher portuguesa que usa um vestido verde.",
                        },
                        {
                            native: "Они счастливы, потому что суббота.",
                            target: "Eles estão felizes porque é sábado.",
                        },
                        {
                            native: "Рядом туристы-французы фотографируют цветные дома.",
                            target: "Perto dali, turistas franceses tiram fotos das casas coloridas.",
                        },
                        {
                            native: "Окна синие, двери зелёные, стены белые.",
                            target: "As janelas são azuis, as portas verdes e as paredes brancas.",
                        },
                        {
                            native: "Молодые дети бегают по улице с красными мячами.",
                            target: "As crianças jovens correm pela rua com bolas vermelhas.",
                        },
                        {
                            native: "Атмосфера простая, но красивая.",
                            target: "O ambiente é simples, mas bonito.",
                        },
                        {
                            native: "На площади бразильские музыканты играют весёлые песни.",
                            target: "Na praça central, músicos brasileiros tocam canções alegres.",
                        },
                        {
                            native: "Голоса сильные, звуки мягкие, и все улыбаются.",
                            target: "As vozes são fortes, os sons são doces e todos sorriem.",
                        },
                        {
                            native: "Старая женщина продаёт розовые и синие цветы.",
                            target: "Uma senhora velha vende flores rosas e azuis.",
                        },
                        {
                            native: "Счастливый парень покупает простой букет для своей подруги.",
                            target: "Um rapaz feliz compra um buquê simples para a sua amiga portuguesa.",
                        },
                        {
                            native: "Позже солнце яркое, а река становится синей как небо.",
                            target: "Mais tarde, o sol brilha forte e o rio Tejo fica azul como o céu.",
                        },
                        {
                            native: "Маленькие лодки плывут медленно, а молодые моряки машут туристам.",
                            target: "Os barcos pequenos navegam devagar e os marinheiros jovens acenam para os turistas.",
                        },
                        {
                            native: "Португальская семья делает пикник у реки.",
                            target: "Uma família portuguesa faz um piquenique junto ao rio.",
                        },
                        {
                            native: "Отец ест белый хлеб, мать пьёт красное вино.",
                            target: "O pai come pão branco e a mãe bebe vinho tinto.",
                        },
                        {
                            native: "Дети едят зелёные яблоки и смеются.",
                            target: "As crianças comem maçãs verdes e riem.",
                        },
                        {
                            native: "Вечером огни города становятся золотыми и мягкими.",
                            target: "Ao entardecer, as luzes da cidade ficam douradas e suaves.",
                        },
                        {
                            native: "Простые улицы становятся волшебными.",
                            target: "As ruas simples tornam-se mágicas.",
                        },
                        {
                            native: "Счастливые друзья идут вместе и разговаривают тихими голосами.",
                            target: "Os amigos felizes caminham juntos e conversam em vozes suaves.",
                        },
                        {
                            native: "Молодой парень играет на гитаре у синей стены.",
                            target: "Um rapaz jovem toca guitarra perto de um muro azul.",
                        },
                        {
                            native: "Лиссабон кажется ещё красивее, простым и счастливым.",
                            target: "Lisboa parece ainda mais bonita, simples e feliz.",
                        },
                        {
                            native: "Это португальский, но международный город.",
                            target: "É uma cidade portuguesa, mas também internacional.",
                        },
                        {
                            native: "Он полон красок, звуков и молодых сердец.",
                            target: "Está cheia de cores, sons e corações jovens.",
                        },
                    ],
                    words: [
                        { id: "w1", native: "jovem", target: "молодой" },
                        { id: "w2", native: "feliz", target: "счастливый" },
                        { id: "w3", native: "português", target: "португалец, португальский" },
                        { id: "w4", native: "portuguesa", target: "португалка" },
                        { id: "w5", native: "simples", target: "простой" },
                        { id: "w6", native: "preto", target: "чёрный" },
                        { id: "w7", native: "verde", target: "зелёный" },
                        { id: "w8", native: "azul", target: "синий" },
                        { id: "w9", native: "felizes", target: "счастливые" },
                        { id: "w10", native: "jovens", target: "молодые" },
                        { id: "w11", native: "as cores", target: "цвета" },
                        { id: "w12", native: "as ruas", target: "улицы" },
                        { id: "w13", native: "a cidade", target: "город" },
                        { id: "w14", native: "o café", target: "кофе" },
                        { id: "w15", native: "o homem", target: "мужчина" },
                        { id: "w16", native: "a mulher", target: "женщина" },
                        { id: "w17", native: "o vestido", target: "платье" },
                        { id: "w18", native: "a casa", target: "дом" },
                        { id: "w19", native: "colorido", target: "цветной" },
                        { id: "w20", native: "azuis", target: "синие (мн.ч.)" },
                        { id: "w21", native: "brancas", target: "белые (ж.р.)" },
                        { id: "w22", native: "verdes", target: "зелёные (мн.ч.)" },
                        { id: "w23", native: "vermelhas", target: "красные (ж.р.)" },
                        { id: "w24", native: "amarelos", target: "жёлтые (м.р.)" },
                        { id: "w25", native: "bonito", target: "красивый" },
                        { id: "w26", native: "brasileiros", target: "бразильцы" },
                        { id: "w27", native: "alegres", target: "весёлые" },
                        { id: "w28", native: "fortes", target: "сильные" },
                        { id: "w29", native: "doces", target: "мягкие, сладкие" },
                        { id: "w30", native: "velha", target: "старая" },
                        { id: "w31", native: "rosas", target: "розовые" },
                        { id: "w32", native: "pequenos", target: "маленькие" },
                        { id: "w33", native: "devagar", target: "медленно" },
                        { id: "w34", native: "os marinheiros", target: "моряки" },
                        { id: "w35", native: "a família", target: "семья" },
                        { id: "w36", native: "o pão", target: "хлеб" },
                        { id: "w37", native: "branco", target: "белый" },
                        { id: "w38", native: "tinto", target: "красный (о вине)" },
                        { id: "w39", native: "as maçãs", target: "яблоки" },
                        { id: "w40", native: "douradas", target: "золотые" },
                        { id: "w41", native: "suaves", target: "мягкие" },
                        { id: "w42", native: "mágicas", target: "волшебные" },
                        { id: "w43", native: "internacional", target: "международный" },
                        { id: "w44", native: "bonita", target: "красивая" },
                        { id: "w45", native: "corações", target: "сердца" },
                        { id: "w46", native: "cheio", target: "полный" },
                        { id: "w47", native: "o rio", target: "река" },
                        { id: "w48", native: "o sol", target: "солнце" },
                        { id: "w49", native: "o muro", target: "стена" },
                        { id: "w50", native: "o amigo", target: "друг" },
                    ],
                },
                {
                    id: "alguem_nenhum",
                    title: "Тренировка местоимений algum / nenhum / alguém / ninguém",
                    title_native: "Обычный день Анны",
                    title_target: "Um dia normal da Ana",
                    sentences: [
                        {
                            native: "Анна живёт в Порту и работает в библиотеке.",
                            target: "A Ana mora no Porto e trabalha numa biblioteca.",
                        },
                        {
                            native: "Каждое утро она ищет какую-то книгу, которую кто-то оставил на столе.",
                            target: "Todas as manhãs ela procura algum livro que alguém deixou na mesa.",
                        },
                        {
                            native: "Иногда она находит что-то интересное — старое письмо или закладку.",
                            target: "Às vezes ela encontra algo interessante — uma carta velha ou um marcador.",
                        },
                        {
                            native: "В библиотеке всегда есть кто-то, кто читает в тишине.",
                            target: "Na biblioteca há sempre alguém que lê em silêncio.",
                        },
                        {
                            native: "Анна любит этот спокойный момент, когда слышно только переворачивание страниц.",
                            target: "A Ana gosta desse momento calmo, quando só se ouve o som das páginas a virar.",
                        },
                        {
                            native: "Иногда она помогает какому-то студенту найти нужную книгу.",
                            target: "Às vezes ela ajuda algum estudante a encontrar o livro certo.",
                        },
                        {
                            native: "Сегодня никто не приходит утром — странно.",
                            target: "Hoje ninguém vem de manhã — é estranho.",
                        },
                        {
                            native: "Она проверяет зал и не видит ни одного человека.",
                            target: "Ela olha a sala e não vê nenhuma pessoa.",
                        },
                        {
                            native: "Но на столе кто-то оставил открытую тетрадь и какой-то карандаш.",
                            target: "Mas na mesa alguém deixou um caderno aberto e algum lápis.",
                        },
                        {
                            native: "Анна улыбается и думает: «Наверное, кто-то вернётся позже».",
                            target: "A Ana sorri e pensa: “Talvez alguém volte mais tarde.”",
                        },
                        {
                            native: "Она делает кофе и ест какой-то маленький пирог.",
                            target: "Ela faz um café e come algum bolo pequeno.",
                        },
                        {
                            native: "В это время в библиотеку заходит какой-то мужчина.",
                            target: "Nesse momento entra algum homem na biblioteca.",
                        },
                        {
                            native: "Он ищет одну старую газету, но Анна не находит ни одной.",
                            target: "Ele procura um jornal antigo, mas a Ana não encontra nenhum.",
                        },
                        {
                            native: "Она говорит: «Извините, у нас нет ни одного экземпляра этой газеты».",
                            target: "Ela diz: “Desculpe, não temos nenhum exemplar desse jornal.”",
                        },
                        {
                            native: "Мужчина улыбается и говорит, что это не важно.",
                            target: "O homem sorri e diz que não é nada importante.",
                        },
                        {
                            native: "Он берёт какую-то другую книгу и садится читать.",
                            target: "Ele escolhe algum outro livro e senta-se para ler.",
                        },
                        {
                            native: "Анна возвращается к работе, проверяет полки и видит, что одна книга пропала.",
                            target: "A Ana volta ao trabalho, verifica as prateleiras e vê que um livro desapareceu.",
                        },
                        {
                            native: "Она ищет, но не находит ничего.",
                            target: "Ela procura, mas não encontra nada.",
                        },
                        {
                            native: "Потом кто-то возвращает книгу и благодарит Анну за помощь.",
                            target: "Depois alguém devolve o livro e agradece à Ana pela ajuda.",
                        },
                        {
                            native: "Анна улыбается: она рада, что в библиотеке всегда есть кто-то, кто любит читать.",
                            target: "A Ana sorri: fica feliz porque na biblioteca há sempre alguém que gosta de ler.",
                        },
                        {
                            native: "Иногда приходит кто-то новый, а иногда не приходит никто.",
                            target: "Às vezes vem alguém novo, e às vezes não vem ninguém.",
                        },
                        {
                            native: "Но Анна любит свою работу, даже когда ничего не происходит.",
                            target: "Mas a Ana gosta do seu trabalho, mesmo quando não acontece nada.",
                        },
                        {
                            native: "Для неё каждый день — немного другой, с какими-то историями и людьми.",
                            target: "Para ela, cada dia é um pouco diferente, com algumas histórias e pessoas.",
                        },
                        {
                            native: "В конце дня она выключает свет и говорит: «Сегодня было что-то хорошее».",
                            target: "No fim do dia, ela apaga a luz e diz: “Hoje houve algo bom.”",
                        },
                        {
                            native: "А если день был пустой, она говорит: «Ничего страшного, завтра будет кто-то».",
                            target: "E se o dia foi vazio, ela diz: “Não faz mal, amanhã vem alguém.”",
                        },
                    ],
                    words: [
                        { id: "w1", native: "algum", target: "какой-то (м.р.)" },
                        { id: "w2", native: "alguma", target: "какая-то (ж.р.)" },
                        { id: "w3", native: "alguns", target: "какие-то (м.р. мн.ч.)" },
                        { id: "w4", native: "algumas", target: "какие-то (ж.р. мн.ч.)" },
                        { id: "w5", native: "alguém", target: "кто-то" },
                        { id: "w6", native: "algo", target: "что-то" },
                        { id: "w7", native: "nenhum", target: "ни один (м.р.)" },
                        { id: "w8", native: "nenhuma", target: "ни одна (ж.р.)" },
                        { id: "w9", native: "nenhuns", target: "никакие (м.р. мн.ч.)" },
                        { id: "w10", native: "nenhumas", target: "никакие (ж.р. мн.ч.)" },
                        { id: "w11", native: "nada", target: "ничего" },
                        { id: "w12", native: "ninguém", target: "никто" },
                        { id: "w13", native: "a biblioteca", target: "библиотека" },
                        { id: "w14", native: "o livro", target: "книга" },
                        { id: "w15", native: "a mesa", target: "стол" },
                        { id: "w16", native: "a carta", target: "письмо" },
                        { id: "w17", native: "o marcador", target: "закладка" },
                        { id: "w18", native: "ler", target: "читать" },
                        { id: "w19", native: "ouvir", target: "слышать" },
                        { id: "w20", native: "o som", target: "звук" },
                        { id: "w21", native: "ajudar", target: "помогать" },
                        { id: "w22", native: "procurar", target: "искать" },
                        { id: "w23", native: "ver", target: "видеть" },
                        { id: "w24", native: "deixar", target: "оставлять" },
                        { id: "w25", native: "voltar", target: "возвращаться" },
                        { id: "w26", native: "comer", target: "есть" },
                        { id: "w27", native: "o bolo", target: "пирог" },
                        { id: "w28", native: "o homem", target: "мужчина" },
                        { id: "w29", native: "importante", target: "важный" },
                        { id: "w30", native: "outro", target: "другой" },
                        { id: "w31", native: "sentar-se", target: "садиться" },
                        { id: "w32", native: "a prateleira", target: "полка" },
                        { id: "w33", native: "desaparecer", target: "пропадать" },
                        { id: "w34", native: "encontrar", target: "находить" },
                        { id: "w35", native: "acontecer", target: "происходить" },
                        { id: "w36", native: "diferente", target: "разный, другой" },
                        { id: "w37", native: "as histórias", target: "истории" },
                        { id: "w38", native: "as pessoas", target: "люди" },
                        { id: "w39", native: "apagar", target: "гасить (свет)" },
                        { id: "w40", native: "houve", target: "было, случилось" },
                        { id: "w41", native: "o exemplar", target: "экземпляр" },
                        { id: "w42", native: "o jornal", target: "газета" },
                        { id: "w43", native: "a manhã", target: "утро" },
                        { id: "w44", native: "a tarde", target: "день (время суток)" },
                        { id: "w45", native: "o fim do dia", target: "конец дня" },
                        { id: "w46", native: "feliz", target: "счастливая" },
                        { id: "w47", native: "estranho", target: "странный" },
                        { id: "w48", native: "a ajuda", target: "помощь" },
                        { id: "w49", native: "a luz", target: "свет" },
                        { id: "w50", native: "voltar", target: "возвращаться" },
                    ],
                },
                {
                    id: "todo_bom_mau",
                    title: "Тренировка todo / bom / mau",
                    title_native: "Один день в кафе",
                    title_target: "Um dia no café",
                    sentences: [
                        {
                            native: "Мигел каждый день работает в маленьком кафе у моря.",
                            target: "O Miguel trabalha todos os dias num pequeno café junto ao mar.",
                        },
                        {
                            native: "Он открывает двери рано утром и здоровается со всеми.",
                            target: "Ele abre as portas cedo de manhã e cumprimenta toda a gente.",
                        },
                        {
                            native: "Сегодня погода хорошая, небо голубое и воздух свежий.",
                            target: "Hoje o tempo está bom, o céu é azul e o ar está fresco.",
                        },
                        {
                            native: "Мигел чувствует себя хорошо и улыбается.",
                            target: "O Miguel sente-se bem e sorri.",
                        },
                        {
                            native: "Он говорит: «Хорошее утро — хороший день!»",
                            target: "Ele diz: “Boa manhã — bom dia!”",
                        },
                        {
                            native: "Первая клиентка — пожилая женщина, которая всегда приходит одна.",
                            target: "A primeira cliente é uma senhora velha que vem sempre sozinha.",
                        },
                        {
                            native: "Она просит чашку хорошего кофе и кусок хорошего пирога.",
                            target: "Ela pede uma chávena de bom café e um pedaço de boa tarte.",
                        },
                        {
                            native: "Мигел готовит всё с любовью, и всё получается хорошо.",
                            target: "O Miguel prepara tudo com carinho, e tudo fica bem.",
                        },
                        {
                            native: "Позже приходят два друга, они всегда говорят громко и смеются.",
                            target: "Mais tarde chegam dois amigos, eles falam sempre alto e riem.",
                        },
                        {
                            native: "Они заказывают хорошие сэндвичи и холодный сок.",
                            target: "Eles pedem bons sandes e sumo frio.",
                        },
                        {
                            native: "Мигел рад видеть всех, потому что любит, когда кафе живое.",
                            target: "O Miguel fica feliz por ver toda a gente, porque gosta quando o café está vivo.",
                        },
                        {
                            native: "Но в обед приходит мужчина в плохом настроении.",
                            target: "Mas ao almoço chega um homem de mau humor.",
                        },
                        {
                            native: "Он говорит грубо и жалуется, что кофе плохой.",
                            target: "Ele fala mal e reclama que o café é mau.",
                        },
                        {
                            native: "Мигел спокойно отвечает: «Может быть, просто день не очень хороший».",
                            target: "O Miguel responde com calma: “Talvez o dia não seja muito bom.”",
                        },
                        {
                            native: "Мужчина молчит, пробует торт и говорит, что он вкусный.",
                            target: "O homem fica calado, prova a tarte e diz que é boa.",
                        },
                        {
                            native: "Мигел улыбается: иногда плохие люди тоже умеют меняться.",
                            target: "O Miguel sorri: às vezes as pessoas más também sabem mudar.",
                        },
                        {
                            native: "После обеда приходит семья с двумя детьми.",
                            target: "Depois do almoço chega uma família com duas crianças.",
                        },
                        {
                            native: "Дети шумные, но очень добрые.",
                            target: "As crianças são barulhentas, mas muito boas.",
                        },
                        {
                            native: "Они пьют сок, едят пирог и говорят, что всё вкусное.",
                            target: "Eles bebem sumo, comem bolo e dizem que tudo é bom.",
                        },
                        {
                            native: "Вечером Мигел убирает столы и закрывает двери.",
                            target: "À noite o Miguel limpa as mesas e fecha as portas.",
                        },
                        {
                            native: "Он устал, но доволен, потому что день был хороший.",
                            target: "Ele está cansado, mas contente, porque o dia foi bom.",
                        },
                        {
                            native: "Он думает: «Хорошие люди приносят хороший день».",
                            target: "Ele pensa: “As pessoas boas trazem um bom dia.”",
                        },
                        {
                            native: "Он гасит свет и говорит: «Всё хорошо, завтра всё будет ещё лучше».",
                            target: "Apaga a luz e diz: “Tudo está bem, amanhã tudo vai estar ainda melhor.”",
                        },
                    ],
                    words: [
                        { id: "w1", native: "todo", target: "весь (м.р.)" },
                        { id: "w2", native: "toda", target: "вся (ж.р.)" },
                        { id: "w3", native: "todos", target: "все (м.р. мн.ч.)" },
                        { id: "w4", native: "todas", target: "все (ж.р. мн.ч.)" },
                        { id: "w5", native: "tudo", target: "всё" },
                        { id: "w6", native: "bom", target: "хороший" },
                        { id: "w7", native: "boa", target: "хорошая" },
                        { id: "w8", native: "bons", target: "хорошие (м.р.)" },
                        { id: "w9", native: "boas", target: "хорошие (ж.р.)" },
                        { id: "w10", native: "bem", target: "хорошо" },
                        { id: "w11", native: "mau", target: "плохой" },
                        { id: "w12", native: "má", target: "плохая" },
                        { id: "w13", native: "maus", target: "плохие (м.р.)" },
                        { id: "w14", native: "más", target: "плохие (ж.р.)" },
                        { id: "w15", native: "mal", target: "плохо" },
                        { id: "w16", native: "o café", target: "кафе" },
                        { id: "w17", native: "o mar", target: "море" },
                        { id: "w18", native: "abrir", target: "открывать" },
                        { id: "w19", native: "cumprimentar", target: "приветствовать" },
                        { id: "w20", native: "a gente", target: "люди (разг.)" },
                        { id: "w21", native: "o tempo", target: "погода" },
                        { id: "w22", native: "o céu", target: "небо" },
                        { id: "w23", native: "o ar", target: "воздух" },
                        { id: "w24", native: "sorrir", target: "улыбаться" },
                        { id: "w25", native: "a manhã", target: "утро" },
                        { id: "w26", native: "a senhora", target: "дама" },
                        { id: "w27", native: "o bolo", target: "пирог" },
                        { id: "w28", native: "a tarte", target: "пирог (фр. тип)" },
                        { id: "w29", native: "ficar", target: "оставаться / становиться" },
                        { id: "w30", native: "preparar", target: "готовить" },
                        { id: "w31", native: "os amigos", target: "друзья" },
                        { id: "w32", native: "os sandes", target: "сэндвичи" },
                        { id: "w33", native: "o sumo", target: "сок" },
                        { id: "w34", native: "feliz", target: "счастливый" },
                        { id: "w35", native: "o almoço", target: "обед" },
                        { id: "w36", native: "o humor", target: "настроение" },
                        { id: "w37", native: "reclamar", target: "жаловаться" },
                        { id: "w38", native: "importante", target: "важный" },
                        { id: "w39", native: "as pessoas", target: "люди" },
                        { id: "w40", native: "mudar", target: "менять(ся)" },
                        { id: "w41", native: "a família", target: "семья" },
                        { id: "w42", native: "as crianças", target: "дети" },
                        { id: "w43", native: "barulhentas", target: "шумные" },
                        { id: "w44", native: "contentar-se", target: "радоваться" },
                        { id: "w45", native: "o dia", target: "день" },
                        { id: "w46", native: "as portas", target: "двери" },
                        { id: "w47", native: "apagar", target: "гасить" },
                        { id: "w48", native: "melhor", target: "лучше" },
                        { id: "w49", native: "vivo", target: "живой" },
                        { id: "w50", native: "a noite", target: "вечер, ночь" },
                    ],
                },
                {
                    id: "muito_pouco_tanto",
                    title: "Тренировка muito / pouco / tanto",
                    title_native: "Утро у Марии",
                    title_target: "A manhã da Maria",
                    sentences: [
                        {
                            native: "Мария живёт в маленьком доме недалеко от центра.",
                            target: "A Maria mora numa casa pequena, perto do centro.",
                        },
                        {
                            native: "Она работает много, но любит свою работу.",
                            target: "Ela trabalha muito, mas gosta do seu trabalho.",
                        },
                        {
                            native: "Каждое утро у неё много дел.",
                            target: "Todas as manhãs ela tem muitas tarefas.",
                        },
                        {
                            native: "Она встаёт рано, пьёт немного кофе и завтракает быстро.",
                            target: "Levanta-se cedo, bebe um pouco de café e toma o pequeno-almoço depressa.",
                        },
                        {
                            native: "Иногда у неё мало времени, но много энергии.",
                            target: "Às vezes tem pouco tempo, mas muita energia.",
                        },
                        {
                            native: "Она идёт на работу пешком, потому что живёт недалеко.",
                            target: "Vai a pé para o trabalho, porque mora perto.",
                        },
                        {
                            native: "По дороге она видит много людей — одни улыбаются, другие спешат.",
                            target: "No caminho vê muitas pessoas — umas sorriem, outras têm pressa.",
                        },
                        {
                            native: "Мария работает в магазине одежды.",
                            target: "A Maria trabalha numa loja de roupa.",
                        },
                        {
                            native: "Сегодня в магазине много клиентов, и все говорят одновременно.",
                            target: "Hoje há muitos clientes na loja e todos falam ao mesmo tempo.",
                        },
                        {
                            native: "Она помогает каждой женщине выбрать подходящее платье.",
                            target: "Ela ajuda cada mulher a escolher o vestido certo.",
                        },
                        {
                            native: "Некоторые покупают много вещей, а некоторые — только немного.",
                            target: "Algumas compram muitas coisas, e outras só um pouco.",
                        },
                        {
                            native: "Один клиент очень вежлив, а другой — слишком нетерпеливый.",
                            target: "Um cliente é muito simpático, e outro é tão impaciente.",
                        },
                        {
                            native: "Мария остаётся спокойной и улыбается всем.",
                            target: "A Maria fica calma e sorri a toda a gente.",
                        },
                        {
                            native: "В обед у неё мало времени поесть, но она пьёт немного воды и ест немного pão.",
                            target: "Ao almoço ela tem pouco tempo para comer, mas bebe um pouco de água e come um pouco de pão.",
                        },
                        {
                            native: "После обеда клиентов становится ещё больше.",
                            target: "Depois do almoço há ainda mais clientes.",
                        },
                        {
                            native: "Мария помогает всем и говорит с таким терпением, что все довольны.",
                            target: "A Maria ajuda todos e fala com tanta paciência que todos ficam contentes.",
                        },
                        {
                            native: "Вечером она идёт домой очень усталая.",
                            target: "À noite ela vai para casa muito cansada.",
                        },
                        {
                            native: "Она готовит немного риса и пьёт немного вина.",
                            target: "Ela prepara um pouco de arroz e bebe um pouco de vinho.",
                        },
                        {
                            native: "Потом она слушает музыку — не громко, а немного, чтобы отдохнуть.",
                            target: "Depois ouve música — não alto, só um pouco, para descansar.",
                        },
                        {
                            native: "Она думает: «Сегодня было столько людей, столько слов и столько улыбок».",
                            target: "Ela pensa: “Hoje houve tantas pessoas, tantas palavras e tantos sorrisos.”",
                        },
                        {
                            native: "Она чувствует себя немного усталой, но очень счастливой.",
                            target: "Sente-se um pouco cansada, mas muito feliz.",
                        },
                        {
                            native: "Иногда немного достаточно, чтобы день стал хорошим.",
                            target: "Às vezes um pouco é suficiente para o dia ser bom.",
                        },
                        {
                            native: "Она улыбается и говорит: «Я благодарна за всё — и за много, и за немного».",
                            target: "Sorri e diz: “Sou grata por tudo — pelo muito e pelo pouco.”",
                        },
                    ],
                    words: [
                        { id: "w1", native: "muito", target: "много / очень (м.р. ед.ч. / наречие)" },
                        { id: "w2", native: "muita", target: "много (ж.р. ед.ч.)" },
                        { id: "w3", native: "muitos", target: "много (м.р. мн.ч.)" },
                        { id: "w4", native: "muitas", target: "много (ж.р. мн.ч.)" },
                        { id: "w5", native: "pouco", target: "мало / немного (м.р.)" },
                        { id: "w6", native: "pouca", target: "мало / немного (ж.р.)" },
                        { id: "w7", native: "poucos", target: "мало (м.р. мн.ч.)" },
                        { id: "w8", native: "poucas", target: "мало (ж.р. мн.ч.)" },
                        { id: "w9", native: "um pouco de", target: "немного (чего-то)" },
                        { id: "w10", native: "tanto", target: "столько / так много (м.р.)" },
                        { id: "w11", native: "tanta", target: "столько (ж.р.)" },
                        { id: "w12", native: "tantos", target: "столько (м.р. мн.ч.)" },
                        { id: "w13", native: "tantas", target: "столько (ж.р. мн.ч.)" },
                        { id: "w14", native: "tão", target: "так (перед прилагательным)" },
                        { id: "w15", native: "a Maria", target: "Мария" },
                        { id: "w16", native: "a casa", target: "дом" },
                        { id: "w17", native: "o centro", target: "центр" },
                        { id: "w18", native: "o trabalho", target: "работа" },
                        { id: "w19", native: "as tarefas", target: "дела, задания" },
                        { id: "w20", native: "o café", target: "кофе" },
                        { id: "w21", native: "a energia", target: "энергия" },
                        { id: "w22", native: "as pessoas", target: "люди" },
                        { id: "w23", native: "a loja", target: "магазин" },
                        { id: "w24", native: "os clientes", target: "клиенты" },
                        { id: "w25", native: "o vestido", target: "платье" },
                        { id: "w26", native: "as coisas", target: "вещи" },
                        { id: "w27", native: "o cliente", target: "клиент" },
                        { id: "w28", native: "simpático", target: "приятный, вежливый" },
                        { id: "w29", native: "impaciente", target: "нетерпеливый" },
                        { id: "w30", native: "a gente", target: "люди (разг.)" },
                        { id: "w31", native: "a água", target: "вода" },
                        { id: "w32", native: "o pão", target: "хлеб" },
                        { id: "w33", native: "o arroz", target: "рис" },
                        { id: "w34", native: "o vinho", target: "вино" },
                        { id: "w35", native: "descansar", target: "отдыхать" },
                        { id: "w36", native: "ouvir", target: "слушать" },
                        { id: "w37", native: "as palavras", target: "слова" },
                        { id: "w38", native: "os sorrisos", target: "улыбки" },
                        { id: "w39", native: "cansada", target: "уставшая" },
                        { id: "w40", native: "feliz", target: "счастливая" },
                        { id: "w41", native: "suficiente", target: "достаточный" },
                        { id: "w42", native: "grata", target: "благодарная" },
                        { id: "w43", native: "por tudo", target: "за всё" },
                        { id: "w44", native: "o dia", target: "день" },
                        { id: "w45", native: "depressa", target: "быстро" },
                        { id: "w46", native: "trabalhar", target: "работать" },
                        { id: "w47", native: "ter", target: "иметь" },
                        { id: "w48", native: "ver", target: "видеть" },
                        { id: "w49", native: "ficar", target: "оставаться / становиться" },
                        { id: "w50", native: "pensar", target: "думать" },
                    ],
                },
                {
                    id: "perguntas_interrogativas",
                    title: "Тренировка вопросительных слов",
                    title_native: "Утро Иво, полное вопросов",
                    title_target: "A manhã do Ivo cheia de perguntas",
                    sentences: [
                        {
                            native: "Почему Иво просыпается так рано утром?",
                            target: "Por que o Ivo acorda tão cedo de manhã?",
                        },
                        {
                            native: "Что он слышит первым делом, когда открывает глаза?",
                            target: "O que ele ouve primeiro quando abre os olhos?",
                        },
                        {
                            native: "Кто звонит ему так рано — сосед или курьер?",
                            target: "Quem lhe liga tão cedo — o vizinho ou o estafeta?",
                        },
                        {
                            native: "Где его телефон, если он не лежит на столе?",
                            target: "Onde está o telemóvel dele, se não está na mesa?",
                        },
                        {
                            native: "Куда он кладёт свои вещи каждую ночь?",
                            target: "Aonde ele põe as suas coisas todas as noites?",
                        },
                        {
                            native: "Откуда приходит этот странный шум в коридоре?",
                            target: "De onde vem esse barulho estranho no corredor?",
                        },
                        {
                            native: "Когда он успевает сделать кофе, если уже опаздывает?",
                            target: "Quando ele consegue fazer café, se já está atrasado?",
                        },
                        {
                            native: "Как он остаётся спокойным, если всё вокруг спешит?",
                            target: "Como ele fica calmo se tudo à volta tem pressa?",
                        },
                        {
                            native: "Для чего Иво открывает окно каждое утро?",
                            target: "Para que o Ivo abre a janela todas as manhãs?",
                        },
                        {
                            native: "Который автобус приходит первым сегодня?",
                            target: "Qual autocarro chega primeiro hoje?",
                        },
                        {
                            native: "Какие маршруты проходят рядом с его домом?",
                            target: "Quais rotas passam perto da casa dele?",
                        },
                        {
                            native: "Сколько времени у него остаётся до выхода?",
                            target: "Quanto tempo lhe resta até sair?",
                        },
                        {
                            native: "Сколько чашек кофе он обычно пьёт по утрам?",
                            target: "Quantas chávenas de café ele bebe normalmente de manhã?",
                        },
                        {
                            native: "Почему у него сегодня так мало энергии?",
                            target: "Por que ele tem tão pouca energia hoje?",
                        },
                        {
                            native: "С кем он завтракает в будние дни?",
                            target: "Com quem ele toma o pequeno-almoço nos dias úteis?",
                        },
                        {
                            native: "О чём он думает, когда смотрит в окно?",
                            target: "De que ele pensa quando olha pela janela?",
                        },
                        {
                            native: "В каком настроении он выходит из дома?",
                            target: "Em que humor ele sai de casa?",
                        },
                        {
                            native: "В какой магазин он заходит каждое утро?",
                            target: "Em que loja ele entra todas as manhãs?",
                        },
                        {
                            native: "Что он покупает — хлеб или фрукты?",
                            target: "O que ele compra — pão ou fruta?",
                        },
                        {
                            native: "Почему продавщица улыбается ему каждый день?",
                            target: "Por que a empregada lhe sorri todos os dias?",
                        },
                        {
                            native: "Кого он встречает по дороге на работу?",
                            target: "Quem ele encontra no caminho para o trabalho?",
                        },
                        {
                            native: "Где работают все эти люди, которых он видит утром?",
                            target: "Onde trabalham todas essas pessoas que ele vê de manhã?",
                        },
                        {
                            native: "Когда он успевает поговорить с ними?",
                            target: "Quando ele consegue falar com eles?",
                        },
                        {
                            native: "Почему одна женщина всегда спешит?",
                            target: "Por que uma mulher está sempre com pressa?",
                        },
                        {
                            native: "Что делает мужчина, который стоит у остановки?",
                            target: "O que faz o homem que está na paragem?",
                        },
                        {
                            native: "Кто из них ждёт первый автобус?",
                            target: "Qual deles espera o primeiro autocarro?",
                        },
                        {
                            native: "Сколько людей стоит в очереди?",
                            target: "Quantas pessoas estão na fila?",
                        },
                        {
                            native: "Почему автобус всегда приходит поздно?",
                            target: "Por que o autocarro chega sempre atrasado?",
                        },
                        {
                            native: "Куда водитель смотрит, когда подъезжает?",
                            target: "Aonde o motorista olha quando chega?",
                        },
                        {
                            native: "Как Иво находит место, если автобус переполнен?",
                            target: "Como o Ivo encontra lugar se o autocarro está cheio?",
                        },
                        {
                            native: "С кем он разговаривает по дороге?",
                            target: "Com quem ele fala durante o caminho?",
                        },
                        {
                            native: "О чём спрашивает его сосед по сиденью?",
                            target: "De que o vizinho de assento lhe pergunta?",
                        },
                        {
                            native: "Почему этот мужчина хочет знать, где Иво работает?",
                            target: "Por que esse homem quer saber onde o Ivo trabalha?",
                        },
                        {
                            native: "Что Иво отвечает, когда его спрашивают?",
                            target: "O que o Ivo responde quando lhe perguntam?",
                        },
                        {
                            native: "Когда он наконец выходит на своей остановке?",
                            target: "Quando ele finalmente sai na sua paragem?",
                        },
                        {
                            native: "Куда он идёт после выхода из автобуса?",
                            target: "Aonde ele vai depois de sair do autocarro?",
                        },
                        {
                            native: "Почему его коллеги стоят у двери офиса?",
                            target: "Por que os colegas estão à porta do escritório?",
                        },
                        {
                            native: "Кого они ждут — шефа или курьера?",
                            target: "Quem eles esperam — o chefe ou o estafeta?",
                        },
                        {
                            native: "Что Иво говорит, когда подходит ближе?",
                            target: "O que o Ivo diz quando se aproxima?",
                        },
                        {
                            native: "Как коллеги реагируют на его вопросы?",
                            target: "Como os colegas reagem às perguntas dele?",
                        },
                    ],

                    words: [
                        { id: "w1", native: "por que", target: "почему, зачем (вопрос)" },
                        { id: "w2", native: "o que", target: "что" },
                        { id: "w3", native: "quem", target: "кто" },
                        { id: "w4", native: "onde", target: "где" },
                        { id: "w5", native: "aonde", target: "куда (с движением)" },
                        { id: "w6", native: "de onde", target: "откуда" },
                        { id: "w7", native: "quando", target: "когда" },
                        { id: "w8", native: "como", target: "как" },
                        { id: "w9", native: "para que", target: "для чего, с какой целью" },
                        { id: "w10", native: "qual", target: "который, какой (из вариантов)" },
                        { id: "w11", native: "quais", target: "какие (множественное)" },
                        { id: "w12", native: "quanto", target: "сколько (м.р.)" },
                        { id: "w13", native: "quanta", target: "сколько (ж.р.)" },
                        { id: "w14", native: "quantos", target: "сколько (мн.ч. м.р.)" },
                        { id: "w15", native: "quantas", target: "сколько (мн.ч. ж.р.)" },
                        { id: "w16", native: "em que", target: "в каком, в какой" },
                        { id: "w17", native: "de que", target: "о чём, из чего" },
                        { id: "w18", native: "com quem", target: "с кем" }
                    ]
                }

            ],

        },
    ],
};
