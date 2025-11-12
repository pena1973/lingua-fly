export type SentencePair = { native: string; target: string };
export type WordPair = { native: string; target: string; id: string };
export type TextItem = { id: string; title_native: string; title_target: string; sentences: SentencePair[]; words: WordPair[] };
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
                {
                    id: "coffee",
                    title_native: "Утро и кофе",
                    title_target: "Morning and coffee",
                    sentences: [
                        { native: "Я есть (я —) преподаватель музыки, и моё имя есть Лаура.", target: "Eu sou professora de música e o meu nome é Laura." },
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
            title_native: "Жизнь Лауры",
            title_target: "A vida de Laura",
            texts: [
                {
                    id: "laura",
                    title_native: "Жизнь Лауры",
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
            ],
        },
    ],
};
