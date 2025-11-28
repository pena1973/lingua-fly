export type SentencePair = { native: string; target: string };
export type WordPair = { native: string; target: string; id: string };
export type TextItem = { id: string; rule: string; title: string; title_native: string; title_target: string; sentences: SentencePair[]; words: WordPair[] };
export type Section = { id: string; title_native: string; title_target: string; texts: TextItem[] };


export type Library = {
    learningLang: "en" | "pt"; // что учим (пример: en)
    sections: Section[];
};


// ====== PAREDES "ИЗУЧАЕМЫЙ ЯЗЫК — РОДНОЙ/ИНТЕРФЕЙС" ======

export const libraryENRU: Library = {
    learningLang: "en",
    sections: [
        {
            id: "A1",
            title_native: "A1",
            title_target: "A1",
            texts: [
                // 1. Приветствия + to be
                {
                    id: "greetings_introductions",
                    rule: [
                        "to be(быть): I am, you are, he/she/it is, we/you/they are",
                        "Формулы приветствия: Hello, Hi, Good morning",
                        "Представление: I am…, My name is…, I am from…",
                        "Структура базового ответа: I am 20. I am a student. I am from Brazil."
                    ].join("\n"),
                    title: "Приветствия + to be",
                    title_native: "Приветствия и знакомство",
                    title_target: "Greetings and Introductions",
                    sentences: [
                        { target: "Hello!", native: "Привет!" },
                        { target: "Hi!", native: "Привет!" },
                        { target: "Good morning!", native: "Доброе утро!" },
                        { target: "Good afternoon!", native: "Добрый день!" },
                        { target: "Good evening!", native: "Добрый вечер!" },

                        { target: "My name is Anna.", native: "Меня зовут Анна." },
                        { target: "I am Anna.", native: "Я Анна." },
                        { target: "I am from Poland.", native: "Я из Польши." },
                        { target: "I am twenty years old.", native: "Мне двадцать лет." },
                        { target: "I am a student.", native: "Я студент." },

                        { target: "This is a short story.", native: "Это короткая история." },
                        { target: "The story is simple.", native: "История простая." },
                        { target: "All sentences are easy.", native: "Все предложения лёгкие." },
                        { target: "They help you learn English.", native: "Они помогают вам учить английский." },
                        { target: "We use greetings every day.", native: "Мы используем приветствия каждый день." },

                        { target: "Greetings are friendly.", native: "Приветствия дружелюбные." },
                        { target: "Greetings are important.", native: "Приветствия важные." },
                        { target: "Greetings help us talk.", native: "Приветствия помогают нам говорить." },
                        { target: "Greetings help us start.", native: "Приветствия помогают нам начать." },

                        { target: "You can say hello.", native: "Ты можешь сказать привет." },
                        { target: "You can say hi.", native: "Ты можешь сказать hi." },
                        { target: "You can meet people.", native: "Ты можешь встречать людей." },
                        { target: "People meet every day.", native: "Люди встречаются каждый день." },
                        { target: "People say hello every day.", native: "Люди говорят привет каждый день." },

                        { target: "Now I introduce myself.", native: "Сейчас я представляюсь." },
                        { target: "I say my name.", native: "Я говорю своё имя." },
                        { target: "I say my age.", native: "Я говорю свой возраст." },
                        { target: "I say my country.", native: "Я говорю свою страну." },
                        { target: "I say my job.", native: "Я говорю свою работу." },

                        { target: "You can ask questions.", native: "Ты можешь задавать вопросы." },
                        { target: "You can ask a name.", native: "Ты можешь спросить имя." },
                        { target: "You can ask a country.", native: "Ты можешь спросить страну." },
                        { target: "You can ask: How are you?", native: "Ты можешь спросить: Как ты?" },

                        { target: "A person can answer.", native: "Человек может ответить." },
                        { target: "My name is Mark.", native: "Меня зовут Марк." },
                        { target: "I am from Germany.", native: "Я из Германии." },
                        { target: "I am fine.", native: "У меня всё хорошо." },
                        { target: "I am a teacher.", native: "Я учитель." },

                        { target: "Here is a dialogue.", native: "Вот диалог." },
                        { target: "Anna says hello.", native: "Анна говорит привет." },
                        { target: "Mark says hi.", native: "Марк говорит hi." },
                        { target: "They meet for the first time.", native: "Они встречаются первый раз." },
                        { target: "They say nice to meet you.", native: "Они говорят приятно познакомиться." },

                        { target: "Practice is important.", native: "Практика важна." },
                        { target: "Practice every day.", native: "Практикуйся каждый день." },
                        { target: "Repeat your name.", native: "Повтори своё имя." },
                        { target: "Repeat your age.", native: "Повтори свой возраст." },
                        { target: "Repeat your country.", native: "Повтори свою страну." },

                        { target: "Speak aloud.", native: "Говори вслух." },
                        { target: "Speak slowly.", native: "Говори медленно." },
                        { target: "Speak clearly.", native: "Говори ясно." }
                    ]
                    ,
                    words: [
                        { id: "w1", target: "hello", native: "привет" },
                        { id: "w2", target: "hi", native: "привет" },
                        { id: "w3", target: "good morning", native: "доброе утро" },
                        { id: "w4", target: "good afternoon", native: "добрый день" },
                        { id: "w5", target: "good evening", native: "добрый вечер" },
                        { id: "w6", target: "my name", native: "моё имя" },
                        { id: "w7", target: "I am", native: "я есть" },
                        { id: "w8", target: "from", native: "из" },
                        { id: "w9", target: "story", native: "история" },
                        { id: "w10", target: "simple", native: "простой" },
                        { id: "w11", target: "sentence", native: "предложение" },
                        { id: "w12", target: "learn", native: "учить" },
                        { id: "w13", target: "English", native: "английский" },
                        { id: "w14", target: "every day", native: "каждый день" },
                        { id: "w15", target: "friendly", native: "дружелюбный" },
                        { id: "w16", target: "important", native: "важный" },
                        { id: "w17", target: "talk", native: "говорить" },
                        { id: "w18", target: "start", native: "начинать" },
                        { id: "w19", target: "meet", native: "встречать" },
                        { id: "w20", target: "people", native: "люди" },
                        { id: "w21", target: "introduce", native: "представляться" },
                        { id: "w22", target: "name", native: "имя" },
                        { id: "w23", target: "age", native: "возраст" },
                        { id: "w24", target: "country", native: "страна" },
                        { id: "w25", target: "job", native: "работа" },
                        { id: "w26", target: "question", native: "вопрос" },
                        { id: "w27", target: "answer", native: "ответ" },
                        { id: "w28", target: "fine", native: "хорошо" },
                        { id: "w29", target: "teacher", native: "учитель" },
                        { id: "w30", target: "dialogue", native: "диалог" },
                        { id: "w31", target: "first time", native: "первый раз" },
                        { id: "w32", target: "nice", native: "приятно" },
                        { id: "w33", target: "practice", native: "практика" },
                        { id: "w34", target: "repeat", native: "повторять" },
                        { id: "w35", target: "speak", native: "говорить" },
                        { id: "w36", target: "aloud", native: "вслух" },
                        { id: "w37", target: "slowly", native: "медленно" },
                        { id: "w38", target: "clearly", native: "ясно" },
                        { id: "w39", target: "student", native: "студент" },
                        { id: "w40", target: "German", native: "немецкий" },
                        { id: "w41", target: "Poland", native: "Польша" },
                        { id: "w42", target: "Germany", native: "Германия" },
                        { id: "w43", target: "evening", native: "вечер" },
                        { id: "w44", target: "morning", native: "утро" },
                        { id: "w45", target: "day", native: "день" },
                        { id: "w46", target: "help", native: "помогать" },
                        { id: "w47", target: "small", native: "маленький" },
                        { id: "w48", target: "story", native: "история" },
                        { id: "w49", target: "person", native: "человек" },
                        { id: "w50", target: "meet you", native: "встретить тебя" }
                    ]
                },

                // 2. Семья + притяжательные
                {
                    id: "family_possessives",

                    rule: [
                        "Притяжательные прилагательные: my(мой), your(твой), his(его), her(её), our(наш), their(их)",
                        "Слова по теме семья: mother, father, sister, brother, parents, children",
                        "Образец: This is my mother. Her name is Anna.",
                        "Пример отличий: his — его, her — её: This is his book. This is her book."
                    ].join("\n"),

                    title: "Семья + притяжательные",
                    title_native: "Моя семья",
                    title_target: "My Family",

                    sentences: [
                        { target: "This is my family.", native: "Это моя семья." },
                        { target: "My family is small.", native: "Моя семья маленькая." },
                        { target: "My family is friendly.", native: "Моя семья дружелюбная." },
                        { target: "I love my family.", native: "Я люблю свою семью." },

                        { target: "This is my mother.", native: "Это моя мама." },
                        { target: "My mother is Anna.", native: "Мою маму зовут Анна." },
                        { target: "She is kind.", native: "Она добрая." },
                        { target: "This is her bag.", native: "Это её сумка." },

                        { target: "This is my father.", native: "Это мой папа." },
                        { target: "My father is Mark.", native: "Моего папу зовут Марк." },
                        { target: "He is strong.", native: "Он сильный." },
                        { target: "This is his phone.", native: "Это его телефон." },

                        { target: "This is my sister.", native: "Это моя сестра." },
                        { target: "My sister is young.", native: "Моя сестра молодая." },
                        { target: "Her hair is long.", native: "Её волосы длинные." },
                        { target: "This is her book.", native: "Это её книга." },

                        { target: "This is my brother.", native: "Это мой брат." },
                        { target: "My brother is tall.", native: "Мой брат высокий." },
                        { target: "His eyes are blue.", native: "Его глаза голубые." },
                        { target: "This is his room.", native: "Это его комната." },

                        { target: "These are my parents.", native: "Это мои родители." },
                        { target: "My parents are happy.", native: "Мои родители счастливы." },
                        { target: "Their house is big.", native: "Их дом большой." },
                        { target: "I like their house.", native: "Мне нравится их дом." },

                        { target: "This is our home.", native: "Это наш дом." },
                        { target: "Our home is warm.", native: "Наш дом тёплый." },
                        { target: "Our family eats together.", native: "Наша семья ест вместе." },
                        { target: "We are together every day.", native: "Мы вместе каждый день." },

                        { target: "These are our children.", native: "Это наши дети." },
                        { target: "Our children are small.", native: "Наши дети маленькие." },
                        { target: "Their toys are on the floor.", native: "Их игрушки на полу." },
                        { target: "Their room is colorful.", native: "Их комната яркая." },

                        { target: "My grandmother is here.", native: "Моя бабушка здесь." },
                        { target: "She is very sweet.", native: "Она очень милая." },
                        { target: "This is her chair.", native: "Это её стул." },
                        { target: "I help my grandmother.", native: "Я помогаю своей бабушке." },

                        { target: "My grandfather is here too.", native: "Мой дедушка тоже здесь." },
                        { target: "He is funny.", native: "Он смешной." },
                        { target: "This is his hat.", native: "Это его шляпа." },
                        { target: "I like my grandfather.", native: "Мне нравится мой дедушка." },

                        { target: "We are one family.", native: "Мы одна семья." },
                        { target: "We live together.", native: "Мы живём вместе." },
                        { target: "We help each other.", native: "Мы помогаем друг другу." },
                        { target: "We love each other.", native: "Мы любим друг друга." },

                        { target: "This is their dog.", native: "Это их собака." },
                        { target: "Their dog is big.", native: "Их собака большая." },
                        { target: "Our dog is small.", native: "Наша собака маленькая." },
                        { target: "Our dog is friendly.", native: "Наша собака дружелюбная." }
                    ],

                    words: [
                        { id: "w1", target: "family", native: "семья" },
                        { id: "w2", target: "my", native: "мой" },
                        { id: "w3", target: "your", native: "твой" },
                        { id: "w4", target: "his", native: "его" },
                        { id: "w5", target: "her", native: "её" },
                        { id: "w6", target: "our", native: "наш" },
                        { id: "w7", target: "their", native: "их" },
                        { id: "w8", target: "mother", native: "мама" },
                        { id: "w9", target: "father", native: "папа" },
                        { id: "w10", target: "sister", native: "сестра" },
                        { id: "w11", target: "brother", native: "брат" },
                        { id: "w12", target: "parents", native: "родители" },
                        { id: "w13", target: "children", native: "дети" },
                        { id: "w14", target: "grandmother", native: "бабушка" },
                        { id: "w15", target: "grandfather", native: "дедушка" },
                        { id: "w16", target: "home", native: "дом" },
                        { id: "w17", target: "house", native: "дом" },
                        { id: "w18", target: "room", native: "комната" },
                        { id: "w19", target: "chair", native: "стул" },
                        { id: "w20", target: "book", native: "книга" },
                        { id: "w21", target: "bag", native: "сумка" },
                        { id: "w22", target: "phone", native: "телефон" },
                        { id: "w23", target: "name", native: "имя" },
                        { id: "w24", target: "happy", native: "счастливый" },
                        { id: "w25", target: "kind", native: "добрый" },
                        { id: "w26", target: "strong", native: "сильный" },
                        { id: "w27", target: "young", native: "молодой" },
                        { id: "w28", target: "tall", native: "высокий" },
                        { id: "w29", target: "big", native: "большой" },
                        { id: "w30", target: "small", native: "маленький" },
                        { id: "w31", target: "long", native: "длинный" },
                        { id: "w32", target: "blue", native: "синий/голубой" },
                        { id: "w33", target: "sweet", native: "милый" },
                        { id: "w34", target: "funny", native: "смешной" },
                        { id: "w35", target: "friendly", native: "дружелюбный" },
                        { id: "w36", target: "help", native: "помогать" },
                        { id: "w37", target: "love", native: "любить" },
                        { id: "w38", target: "each other", native: "друг друга" },
                        { id: "w39", target: "together", native: "вместе" },
                        { id: "w40", target: "dog", native: "собака" },
                        { id: "w41", target: "toy", native: "игрушка" },
                        { id: "w42", target: "floor", native: "пол" },
                        { id: "w43", target: "hair", native: "волосы" },
                        { id: "w44", target: "eyes", native: "глаза" },
                        { id: "w45", target: "bag", native: "сумка" },
                        { id: "w46", target: "phone", native: "телефон" },
                        { id: "w47", target: "room", native: "комната" },
                        { id: "w48", target: "parents", native: "родители" },
                        { id: "w49", target: "children", native: "дети" },
                        { id: "w50", target: "family", native: "семья" }
                    ]
                }
                ,

                // 3. Описание людей + прилагательные
                {
                    id: "people_descriptions",

                    rule: [
                        "Прилагательные для описания людей: tall(высокий), short(низкий), young(молодой), old(старый)",
                        "Полезные слова для внешности: hair(волосы), eyes(глаза), face(лицо)",
                        "Структура описания: He is tall. She is young.",
                        "Пример: She has long hair. He has brown eyes."
                    ].join("\n"),

                    title: "Описание людей + прилагательные",
                    title_native: "Описание людей",
                    title_target: "Describing People",

                    sentences: [
                        { target: "He is tall.", native: "Он высокий." },
                        { target: "She is short.", native: "Она низкая." },
                        { target: "He is young.", native: "Он молодой." },
                        { target: "She is old.", native: "Она старая." },

                        { target: "This man is tall.", native: "Этот мужчина высокий." },
                        { target: "This woman is short.", native: "Эта женщина низкая." },
                        { target: "This boy is young.", native: "Этот мальчик молодой." },
                        { target: "This girl is young.", native: "Эта девочка молодая." },

                        { target: "He has long hair.", native: "У него длинные волосы." },
                        { target: "She has short hair.", native: "У неё короткие волосы." },
                        { target: "He has brown hair.", native: "У него коричневые волосы." },
                        { target: "She has black hair.", native: "У неё чёрные волосы." },

                        { target: "He has blue eyes.", native: "У него голубые глаза." },
                        { target: "She has green eyes.", native: "У неё зелёные глаза." },
                        { target: "He has brown eyes.", native: "У него карие глаза." },
                        { target: "She has big eyes.", native: "У неё большие глаза." },

                        { target: "He has a small face.", native: "У него маленькое лицо." },
                        { target: "She has a round face.", native: "У неё круглое лицо." },
                        { target: "His face is kind.", native: "Его лицо доброе." },
                        { target: "Her face is pretty.", native: "Её лицо красивое." },

                        { target: "He is strong.", native: "Он сильный." },
                        { target: "She is weak.", native: "Она слабая." },
                        { target: "He is fast.", native: "Он быстрый." },
                        { target: "She is slow.", native: "Она медленная." },

                        { target: "He is friendly.", native: "Он дружелюбный." },
                        { target: "She is shy.", native: "Она застенчивая." },
                        { target: "He is happy.", native: "Он счастливый." },
                        { target: "She is sad.", native: "Она грустная." },

                        { target: "This man is old but strong.", native: "Этот мужчина старый, но сильный." },
                        { target: "This woman is young and pretty.", native: "Эта женщина молодая и красивая." },
                        { target: "This boy is short and fast.", native: "Этот мальчик низкий и быстрый." },
                        { target: "This girl is tall and kind.", native: "Эта девочка высокая и добрая." },

                        { target: "People are different.", native: "Люди разные." },
                        { target: "Some people are tall.", native: "Некоторые люди высокие." },
                        { target: "Some people are short.", native: "Некоторые люди низкие." },
                        { target: "Some people are young.", native: "Некоторые люди молодые." },
                        { target: "Some people are old.", native: "Некоторые люди старые." },

                        { target: "He looks friendly.", native: "Он выглядит дружелюбным." },
                        { target: "She looks serious.", native: "Она выглядит серьёзной." },
                        { target: "He looks strong.", native: "Он выглядит сильным." },
                        { target: "She looks happy.", native: "Она выглядит счастливой." },

                        { target: "This is a tall girl.", native: "Это высокая девочка." },
                        { target: "This is a short boy.", native: "Это низкий мальчик." },
                        { target: "This is an old man.", native: "Это старый мужчина." },
                        { target: "This is a young woman.", native: "Это молодая женщина." }
                    ],

                    words: [
                        { id: "w1", target: "tall", native: "высокий" },
                        { id: "w2", target: "short", native: "низкий" },
                        { id: "w3", target: "young", native: "молодой" },
                        { id: "w4", target: "old", native: "старый" },
                        { id: "w5", target: "man", native: "мужчина" },
                        { id: "w6", target: "woman", native: "женщина" },
                        { id: "w7", target: "boy", native: "мальчик" },
                        { id: "w8", target: "girl", native: "девочка" },
                        { id: "w9", target: "hair", native: "волосы" },
                        { id: "w10", target: "eyes", native: "глаза" },
                        { id: "w11", target: "face", native: "лицо" },
                        { id: "w12", target: "long", native: "длинный" },
                        { id: "w13", target: "short hair", native: "короткие волосы" },
                        { id: "w14", target: "brown", native: "коричневый" },
                        { id: "w15", target: "black", native: "чёрный" },
                        { id: "w16", target: "blue", native: "голубой" },
                        { id: "w17", target: "green", native: "зелёный" },
                        { id: "w18", target: "big", native: "большой" },
                        { id: "w19", target: "small", native: "маленький" },
                        { id: "w20", target: "round", native: "круглый" },
                        { id: "w21", target: "kind", native: "добрый" },
                        { id: "w22", target: "pretty", native: "красивая" },
                        { id: "w23", target: "strong", native: "сильный" },
                        { id: "w24", target: "weak", native: "слабый" },
                        { id: "w25", target: "fast", native: "быстрый" },
                        { id: "w26", target: "slow", native: "медленный" },
                        { id: "w27", target: "friendly", native: "дружелюбный" },
                        { id: "w28", target: "shy", native: "застенчивый" },
                        { id: "w29", target: "happy", native: "счастливый" },
                        { id: "w30", target: "sad", native: "грустный" },
                        { id: "w31", target: "looks", native: "выглядит" },
                        { id: "w32", target: "different", native: "разные" },
                        { id: "w33", target: "people", native: "люди" },
                        { id: "w34", target: "woman", native: "женщина" },
                        { id: "w35", target: "man", native: "мужчина" },
                        { id: "w36", target: "young woman", native: "молодая женщина" },
                        { id: "w37", target: "old man", native: "старый мужчина" },
                        { id: "w38", target: "tall girl", native: "высокая девочка" },
                        { id: "w39", target: "short boy", native: "низкий мальчик" },
                        { id: "w40", target: "hair", native: "волосы" },
                        { id: "w41", target: "eyes", native: "глаза" },
                        { id: "w42", target: "face", native: "лицо" },
                        { id: "w43", target: "kind face", native: "доброе лицо" },
                        { id: "w44", target: "pretty face", native: "красивое лицо" },
                        { id: "w45", target: "small face", native: "маленькое лицо" },
                        { id: "w46", target: "round face", native: "круглое лицо" },
                        { id: "w47", target: "big eyes", native: "большие глаза" },
                        { id: "w48", target: "brown eyes", native: "карие глаза" },
                        { id: "w49", target: "green eyes", native: "зелёные глаза" },
                        { id: "w50", target: "blue eyes", native: "голубые глаза" }
                    ]
                }
                ,

                // 4. Дом + there is / there are
                {
                    id: "home_there_is",

                    rule: [
                        "there is / there are: конструкции для описания того, что находится в комнате или месте",
                        "there is — единственное число: There is a table.",
                        "there are — множественное число: There are chairs.",
                        "Лексика по мебели: table, chair, bed, sofa, window, door, room",
                        "Пример: There is a bed in the room. There are books on the table."
                    ].join("\n"),

                    title: "Дом + there is / there are",
                    title_native: "Мой дом",
                    title_target: "My Home",

                    sentences: [
                        { target: "This is my home.", native: "Это мой дом." },
                        { target: "My home is small.", native: "Мой дом маленький." },
                        { target: "My home is warm.", native: "Мой дом тёплый." },
                        { target: "My home is quiet.", native: "Мой дом тихий." },

                        { target: "This is my room.", native: "Это моя комната." },
                        { target: "There is a bed in my room.", native: "В моей комнате есть кровать." },
                        { target: "There is a table in my room.", native: "В моей комнате есть стол." },
                        { target: "There is a chair in my room.", native: "В моей комнате есть стул." },

                        { target: "There is a lamp on the table.", native: "На столе есть лампа." },
                        { target: "There is a window near the bed.", native: "Возле кровати есть окно." },
                        { target: "There is a door near the table.", native: "Возле стола есть дверь." },
                        { target: "There is a carpet on the floor.", native: "На полу есть ковёр." },

                        { target: "There are two chairs in the room.", native: "В комнате есть два стула." },
                        { target: "There are books on the table.", native: "На столе есть книги." },
                        { target: "There are clothes on the chair.", native: "На стуле есть одежда." },
                        { target: "There are pictures on the wall.", native: "На стене есть картины." },

                        { target: "This is our kitchen.", native: "Это наша кухня." },
                        { target: "There is a fridge in the kitchen.", native: "На кухне есть холодильник." },
                        { target: "There is a stove in the kitchen.", native: "На кухне есть плита." },
                        { target: "There is a sink near the stove.", native: "Возле плиты есть раковина." },

                        { target: "There are plates in the cupboard.", native: "В шкафу есть тарелки." },
                        { target: "There are cups on the shelf.", native: "На полке есть кружки." },
                        { target: "There are apples on the table.", native: "На столе есть яблоки." },
                        { target: "There are chairs near the table.", native: "Возле стола есть стулья." },

                        { target: "This is the living room.", native: "Это гостиная." },
                        { target: "There is a sofa in the living room.", native: "В гостиной есть диван." },
                        { target: "There is a TV on the wall.", native: "На стене есть телевизор." },
                        { target: "There is a plant near the window.", native: "Возле окна есть растение." },

                        { target: "There are books on the shelf.", native: "На полке есть книги." },
                        { target: "There are photos on the wall.", native: "На стене есть фотографии." },
                        { target: "There are pillows on the sofa.", native: "На диване есть подушки." },
                        { target: "There are magazines on the table.", native: "На столе есть журналы." },

                        { target: "This is the bathroom.", native: "Это ванная комната." },
                        { target: "There is a sink in the bathroom.", native: "В ванной есть раковина." },
                        { target: "There is a mirror on the wall.", native: "На стене есть зеркало." },
                        { target: "There is a shower near the wall.", native: "Возле стены есть душ." },

                        { target: "There are towels on the shelf.", native: "На полке есть полотенца." },
                        { target: "There are bottles near the sink.", native: "Возле раковины есть бутылки." },
                        { target: "There are toys in the bath.", native: "В ванне есть игрушки." },
                        { target: "There are soaps on the table.", native: "На столе есть мыло." },

                        { target: "My home is clean.", native: "Мой дом чистый." },
                        { target: "My home is bright.", native: "Мой дом яркий." },
                        { target: "My home is comfortable.", native: "Мой дом удобный." },
                        { target: "I like my home.", native: "Мне нравится мой дом." }
                    ],

                    words: [
                        { id: "w1", target: "home", native: "дом" },
                        { id: "w2", target: "room", native: "комната" },
                        { id: "w3", target: "kitchen", native: "кухня" },
                        { id: "w4", target: "living room", native: "гостиная" },
                        { id: "w5", target: "bathroom", native: "ванная" },

                        { id: "w6", target: "there is", native: "есть (ед.ч.)" },
                        { id: "w7", target: "there are", native: "есть (мн.ч.)" },

                        { id: "w8", target: "bed", native: "кровать" },
                        { id: "w9", target: "table", native: "стол" },
                        { id: "w10", target: "chair", native: "стул" },
                        { id: "w11", target: "lamp", native: "лампа" },
                        { id: "w12", target: "window", native: "окно" },
                        { id: "w13", target: "door", native: "дверь" },
                        { id: "w14", target: "carpet", native: "ковёр" },

                        { id: "w15", target: "books", native: "книги" },
                        { id: "w16", target: "clothes", native: "одежда" },
                        { id: "w17", target: "pictures", native: "картины" },
                        { id: "w18", target: "wall", native: "стена" },
                        { id: "w19", target: "floor", native: "пол" },

                        { id: "w20", target: "fridge", native: "холодильник" },
                        { id: "w21", target: "stove", native: "плита" },
                        { id: "w22", target: "sink", native: "раковина" },
                        { id: "w23", target: "cupboard", native: "шкаф" },
                        { id: "w24", target: "shelf", native: "полка" },

                        { id: "w25", target: "plates", native: "тарелки" },
                        { id: "w26", target: "cups", native: "кружки" },
                        { id: "w27", target: "apples", native: "яблоки" },

                        { id: "w28", target: "sofa", native: "диван" },
                        { id: "w29", target: "tv", native: "телевизор" },
                        { id: "w30", target: "plant", native: "растение" },

                        { id: "w31", target: "photos", native: "фотографии" },
                        { id: "w32", target: "pillows", native: "подушки" },
                        { id: "w33", target: "magazines", native: "журналы" },

                        { id: "w34", target: "mirror", native: "зеркало" },
                        { id: "w35", target: "shower", native: "душ" },
                        { id: "w36", target: "towels", native: "полотенца" },
                        { id: "w37", target: "toys", native: "игрушки" },
                        { id: "w38", target: "bottles", native: "бутылки" },
                        { id: "w39", target: "soaps", native: "мыло" },

                        { id: "w40", target: "clean", native: "чистый" },
                        { id: "w41", target: "bright", native: "яркий" },
                        { id: "w42", target: "comfortable", native: "удобный" },
                        { id: "w43", target: "warm", native: "тёплый" },
                        { id: "w44", target: "quiet", native: "тихий" },
                        { id: "w45", target: "big", native: "большой" },
                        { id: "w46", target: "small", native: "маленький" },
                        { id: "w47", target: "floor", native: "пол" },
                        { id: "w48", target: "table", native: "стол" },
                        { id: "w49", target: "chair", native: "стул" },
                        { id: "w50", target: "room", native: "комната" }
                    ]
                }
                ,

                // 5. Ежедневные действия + Present Simple
                {
                    id: "daily_routine_present_simple",

                    rule: [
                        "Present Simple: используется для привычек и повторяющихся действий; примеры: I work, I get up, He works",
                        "Окончание -s в третьем лице: he/she/it works, lives, goes",
                        "Наречия частоты: always(всегда), usually(обычно), sometimes(иногда), never(никогда)",
                        "Порядок слов: I usually wake up at seven. (наречие ставится перед глаголом)"
                    ].join("\n"),

                    title: "Ежедневные действия + Present Simple",
                    title_native: "Рутина дня",
                    title_target: "Daily Routine",

                    sentences: [
                        { target: "I usually get up at seven.", native: "Я обычно встаю в семь." },
                        { target: "I always wake up early.", native: "Я всегда просыпаюсь рано." },
                        { target: "I sometimes wake up late.", native: "Иногда я просыпаюсь поздно." },
                        { target: "I never wake up at ten.", native: "Я никогда не просыпаюсь в десять." },

                        { target: "I get out of bed.", native: "Я встаю с кровати." },
                        { target: "I wash my face.", native: "Я умываю своё лицо." },
                        { target: "I brush my teeth.", native: "Я чищу зубы." },
                        { target: "I take a shower.", native: "Я принимаю душ." },

                        { target: "I get dressed.", native: "Я одеваюсь." },
                        { target: "I make breakfast.", native: "Я готовлю завтрак." },
                        { target: "I eat breakfast at home.", native: "Я ем завтрак дома." },
                        { target: "I drink coffee every morning.", native: "Я пью кофе каждое утро." },

                        { target: "I leave home at eight.", native: "Я выхожу из дома в восемь." },
                        { target: "I go to work by bus.", native: "Я еду на работу на автобусе." },
                        { target: "She goes to work by car.", native: "Она ездит на работу на машине." },
                        { target: "He walks to work.", native: "Он идёт на работу пешком." },

                        { target: "I start work at nine.", native: "Я начинаю работу в девять." },
                        { target: "I work in an office.", native: "Я работаю в офисе." },
                        { target: "I check my emails.", native: "Я проверяю почту." },
                        { target: "I write messages every day.", native: "Я пишу сообщения каждый день." },

                        { target: "I have lunch at one.", native: "Я обедаю в час." },
                        { target: "I eat lunch with my colleagues.", native: "Я обедаю с коллегами." },
                        { target: "I drink tea at lunch.", native: "Я пью чай на обеде." },
                        { target: "I sometimes eat soup.", native: "Иногда я ем суп." },

                        { target: "I finish work at five.", native: "Я заканчиваю работу в пять." },
                        { target: "I go home after work.", native: "Я иду домой после работы." },
                        { target: "I usually take a bus home.", native: "Обычно я еду домой на автобусе." },
                        { target: "I sometimes walk home.", native: "Иногда я иду домой пешком." },

                        { target: "I arrive home at six.", native: "Я прихожу домой в шесть." },
                        { target: "I relax on the sofa.", native: "Я расслабляюсь на диване." },
                        { target: "I watch TV in the evening.", native: "Я смотрю телевизор вечером." },
                        { target: "I listen to music.", native: "Я слушаю музыку." },

                        { target: "I make dinner.", native: "Я готовлю ужин." },
                        { target: "I eat dinner with my family.", native: "Я ужинаю с семьёй." },
                        { target: "We talk at dinner.", native: "Мы разговариваем за ужином." },
                        { target: "We laugh together.", native: "Мы смеёмся вместе." },

                        { target: "I read a book at night.", native: "Я читаю книгу вечером." },
                        { target: "I sometimes play games.", native: "Иногда я играю в игры." },
                        { target: "I call my friends.", native: "Я звоню своим друзьям." },
                        { target: "I clean my room.", native: "Я убираю свою комнату." },

                        { target: "I take a shower in the evening.", native: "Я принимаю душ вечером." },
                        { target: "I brush my teeth again.", native: "Я снова чищу зубы." },
                        { target: "I go to bed at eleven.", native: "Я ложусь спать в одиннадцать." },
                        { target: "I sleep eight hours.", native: "Я сплю восемь часов." }
                    ],

                    words: [
                        { id: "w1", target: "usually", native: "обычно" },
                        { id: "w2", target: "always", native: "всегда" },
                        { id: "w3", target: "sometimes", native: "иногда" },
                        { id: "w4", target: "never", native: "никогда" },

                        { id: "w5", target: "get up", native: "вставать" },
                        { id: "w6", target: "wake up", native: "просыпаться" },
                        { id: "w7", target: "wash", native: "мыть" },
                        { id: "w8", target: "brush", native: "чистить" },
                        { id: "w9", target: "teeth", native: "зубы" },
                        { id: "w10", target: "shower", native: "душ" },

                        { id: "w11", target: "get dressed", native: "одеваться" },
                        { id: "w12", target: "make breakfast", native: "готовить завтрак" },
                        { id: "w13", target: "eat", native: "есть" },
                        { id: "w14", target: "drink", native: "пить" },
                        { id: "w15", target: "coffee", native: "кофе" },

                        { id: "w16", target: "leave", native: "уходить" },
                        { id: "w17", target: "go to work", native: "ехать на работу" },
                        { id: "w18", target: "bus", native: "автобус" },
                        { id: "w19", target: "walk", native: "идти пешком" },

                        { id: "w20", target: "start", native: "начинать" },
                        { id: "w21", target: "work", native: "работать" },
                        { id: "w22", target: "office", native: "офис" },
                        { id: "w23", target: "emails", native: "почта" },
                        { id: "w24", target: "write", native: "писать" },

                        { id: "w25", target: "lunch", native: "обед" },
                        { id: "w26", target: "colleagues", native: "коллеги" },
                        { id: "w27", target: "tea", native: "чай" },
                        { id: "w28", target: "soup", native: "суп" },

                        { id: "w29", target: "finish", native: "заканчивать" },
                        { id: "w30", target: "go home", native: "идти домой" },

                        { id: "w31", target: "arrive", native: "прибывать" },
                        { id: "w32", target: "relax", native: "расслабляться" },
                        { id: "w33", target: "sofa", native: "диван" },
                        { id: "w34", target: "watch", native: "смотреть" },
                        { id: "w35", target: "tv", native: "телевизор" },

                        { id: "w36", target: "listen", native: "слушать" },
                        { id: "w37", target: "music", native: "музыка" },
                        { id: "w38", target: "dinner", native: "ужин" },
                        { id: "w39", target: "family", native: "семья" },
                        { id: "w40", target: "laugh", native: "смеяться" },

                        { id: "w41", target: "read", native: "читать" },
                        { id: "w42", target: "book", native: "книга" },
                        { id: "w43", target: "games", native: "игры" },
                        { id: "w44", target: "friends", native: "друзья" },

                        { id: "w45", target: "clean", native: "убирать" },
                        { id: "w46", target: "room", native: "комната" },
                        { id: "w47", target: "bed", native: "кровать" },
                        { id: "w48", target: "sleep", native: "спать" },
                        { id: "w49", target: "hours", native: "часы" },
                        { id: "w50", target: "evening", native: "вечер" }
                    ]
                }
                ,

                // 6. Время суток и часы
                {
                    id: "telling_time",

                    rule: [
                        "Указание времени: конструкция It's ... o'clock; пример: It's five o'clock.",
                        "Половина и четверти: half past..., a quarter past..., a quarter to...",
                        "Времена суток: morning(утро), afternoon(день), evening(вечер), night(ночь)",
                        "Пример: It's nine in the morning. It's eight in the evening."
                    ].join("\n"),

                    title: "Время суток и часы",
                    title_native: "Время и распорядок",
                    title_target: "Time of the Day",

                    sentences: [
                        { target: "It is nine o'clock.", native: "Сейчас девять часов." },
                        { target: "It is one o'clock.", native: "Сейчас час." },
                        { target: "It is two o'clock.", native: "Сейчас два часа." },
                        { target: "It is three o'clock.", native: "Сейчас три часа." },

                        { target: "It is four o'clock.", native: "Сейчас четыре часа." },
                        { target: "It is five o'clock.", native: "Сейчас пять часов." },
                        { target: "It is six o'clock.", native: "Сейчас шесть часов." },
                        { target: "It is seven o'clock.", native: "Сейчас семь часов." },

                        { target: "It is eight o'clock.", native: "Сейчас восемь часов." },
                        { target: "It is ten o'clock.", native: "Сейчас десять часов." },
                        { target: "It is eleven o'clock.", native: "Сейчас одиннадцать часов." },
                        { target: "It is twelve o'clock.", native: "Сейчас двенадцать часов." },

                        { target: "It is half past seven.", native: "Сейчас половина восьмого." },
                        { target: "It is half past ten.", native: "Сейчас половина одиннадцатого." },
                        { target: "It is a quarter past five.", native: "Сейчас пятнадцать минут шестого." },
                        { target: "It is a quarter past nine.", native: "Сейчас пятнадцать минут десятого." },

                        { target: "It is a quarter to six.", native: "Сейчас без четверти шесть." },
                        { target: "It is a quarter to eight.", native: "Сейчас без четверти восемь." },
                        { target: "It is ten past three.", native: "Сейчас десять минут четвёртого." },
                        { target: "It is twenty past four.", native: "Сейчас двадцать минут пятого." },

                        { target: "It is morning now.", native: "Сейчас утро." },
                        { target: "It is afternoon now.", native: "Сейчас день." },
                        { target: "It is evening now.", native: "Сейчас вечер." },
                        { target: "It is night now.", native: "Сейчас ночь." },

                        { target: "I wake up in the morning.", native: "Я просыпаюсь утром." },
                        { target: "I eat lunch in the afternoon.", native: "Я обедаю днём." },
                        { target: "I watch TV in the evening.", native: "Я смотрю телевизор вечером." },
                        { target: "I sleep at night.", native: "Я сплю ночью." },

                        { target: "I start work at nine.", native: "Я начинаю работу в девять." },
                        { target: "I finish work at five.", native: "Я заканчиваю работу в пять." },
                        { target: "I have breakfast at eight.", native: "Я завтракаю в восемь." },
                        { target: "I have dinner at seven.", native: "Я ужинаю в семь." },

                        { target: "The bus comes at ten.", native: "Автобус приходит в десять." },
                        { target: "The train leaves at six.", native: "Поезд отправляется в шесть." },
                        { target: "The shop opens at nine.", native: "Магазин открывается в девять." },
                        { target: "The shop closes at eight.", native: "Магазин закрывается в восемь." },

                        { target: "It is early.", native: "Сейчас рано." },
                        { target: "It is late.", native: "Сейчас поздно." },
                        { target: "It is time for lunch.", native: "Время обеда." },
                        { target: "It is time for bed.", native: "Время спать." },

                        { target: "My class starts at eight.", native: "Мой урок начинается в восемь." },
                        { target: "My class ends at ten.", native: "Мой урок заканчивается в десять." },
                        { target: "I meet my friend at six.", native: "Я встречаю друга в шесть." },
                        { target: "We talk until nine.", native: "Мы разговариваем до девяти." }
                    ],

                    words: [
                        { id: "w1", target: "o'clock", native: "ровно (о времени)" },
                        { id: "w2", target: "half past", native: "половина" },
                        { id: "w3", target: "a quarter past", native: "четверть после" },
                        { id: "w4", target: "a quarter to", native: "без четверти" },
                        { id: "w5", target: "morning", native: "утро" },
                        { id: "w6", target: "afternoon", native: "день" },
                        { id: "w7", target: "evening", native: "вечер" },
                        { id: "w8", target: "night", native: "ночь" },

                        { id: "w9", target: "early", native: "рано" },
                        { id: "w10", target: "late", native: "поздно" },
                        { id: "w11", target: "time", native: "время" },
                        { id: "w12", target: "now", native: "сейчас" },

                        { id: "w13", target: "wake up", native: "просыпаться" },
                        { id: "w14", target: "eat", native: "есть" },
                        { id: "w15", target: "watch", native: "смотреть" },
                        { id: "w16", target: "sleep", native: "спать" },

                        { id: "w17", target: "start", native: "начинать" },
                        { id: "w18", target: "finish", native: "заканчивать" },
                        { id: "w19", target: "breakfast", native: "завтрак" },
                        { id: "w20", target: "dinner", native: "ужин" },

                        { id: "w21", target: "bus", native: "автобус" },
                        { id: "w22", target: "train", native: "поезд" },
                        { id: "w23", target: "shop", native: "магазин" },
                        { id: "w24", target: "opens", native: "открывается" },
                        { id: "w25", target: "closes", native: "закрывается" },

                        { id: "w26", target: "class", native: "урок" },
                        { id: "w27", target: "meet", native: "встречать" },
                        { id: "w28", target: "talk", native: "разговаривать" },
                        { id: "w29", target: "until", native: "до" },

                        { id: "w30", target: "one", native: "один" },
                        { id: "w31", target: "two", native: "два" },
                        { id: "w32", target: "three", native: "три" },
                        { id: "w33", target: "four", native: "четыре" },
                        { id: "w34", target: "five", native: "пять" },
                        { id: "w35", target: "six", native: "шесть" },
                        { id: "w36", target: "seven", native: "семь" },
                        { id: "w37", target: "eight", native: "восемь" },
                        { id: "w38", target: "nine", native: "девять" },
                        { id: "w39", target: "ten", native: "десять" },
                        { id: "w40", target: "eleven", native: "одиннадцать" },
                        { id: "w41", target: "twelve", native: "двенадцать" },

                        { id: "w42", target: "past", native: "после" },
                        { id: "w43", target: "to", native: "до" },
                        { id: "w44", target: "in the morning", native: "утром" },
                        { id: "w45", target: "in the evening", native: "вечером" },
                        { id: "w46", target: "at night", native: "ночью" },
                        { id: "w47", target: "at", native: "в" },
                        { id: "w48", target: "until", native: "до" },
                        { id: "w49", target: "opens at", native: "открывается в" },
                        { id: "w50", target: "closes at", native: "закрывается в" }
                    ]
                }
                ,

                // 7. Еда + like / don't like
                {
                    id: "food_likes",

                    rule: [
                        "like / don't like: выражение вкусов и предпочтений; пример: I like tea. I don't like coffee.",
                        "Вопрос: Do you like ...? — Да/Нет: Yes, I do. / No, I don't.",
                        "Слова по теме еда: fruit, vegetables, bread, meat, juice, water",
                        "Пример: I like apples. I don’t like fish."
                    ].join("\n"),

                    title: "Еда + like / don't like",
                    title_native: "Еда и вкусы",
                    title_target: "Food and Tastes",

                    sentences: [
                        { target: "I like tea.", native: "Мне нравится чай." },
                        { target: "I like coffee.", native: "Мне нравится кофе." },
                        { target: "I don't like milk.", native: "Мне не нравится молоко." },
                        { target: "I like water.", native: "Мне нравится вода." },

                        { target: "I like bread.", native: "Мне нравится хлеб." },
                        { target: "I like butter.", native: "Мне нравится масло." },
                        { target: "I don't like cheese.", native: "Мне не нравится сыр." },
                        { target: "I like eggs.", native: "Мне нравятся яйца." },

                        { target: "I like apples.", native: "Мне нравятся яблоки." },
                        { target: "I like bananas.", native: "Мне нравятся бананы." },
                        { target: "I don't like lemons.", native: "Мне не нравятся лимоны." },
                        { target: "I like oranges.", native: "Мне нравятся апельсины." },

                        { target: "I like soup.", native: "Мне нравится суп." },
                        { target: "I like salad.", native: "Мне нравится салат." },
                        { target: "I don't like fish.", native: "Мне не нравится рыба." },
                        { target: "I like chicken.", native: "Мне нравится курица." },

                        { target: "I like rice.", native: "Мне нравится рис." },
                        { target: "I like pasta.", native: "Мне нравится паста." },
                        { target: "I don't like beans.", native: "Мне не нравятся бобы." },
                        { target: "I like potatoes.", native: "Мне нравятся картофель." },

                        { target: "I like juice.", native: "Мне нравится сок." },
                        { target: "I like apple juice.", native: "Мне нравится яблочный сок." },
                        { target: "I don't like tomato juice.", native: "Мне не нравится томатный сок." },
                        { target: "I like orange juice.", native: "Мне нравится апельсиновый сок." },

                        { target: "Do you like tea?", native: "Тебе нравится чай?" },
                        { target: "Yes, I do.", native: "Да." },
                        { target: "No, I don't.", native: "Нет." },
                        { target: "Do you like coffee?", native: "Тебе нравится кофе?" },

                        { target: "He likes apples.", native: "Он любит яблоки." },
                        { target: "She likes soup.", native: "Она любит суп." },
                        { target: "He doesn't like milk.", native: "Он не любит молоко." },
                        { target: "She doesn't like fish.", native: "Она не любит рыбу." },

                        { target: "We like fruit.", native: "Мы любим фрукты." },
                        { target: "We like vegetables.", native: "Мы любим овощи." },
                        { target: "We don't like meat.", native: "Мы не любим мясо." },
                        { target: "We like bread.", native: "Мы любим хлеб." },

                        { target: "They like pizza.", native: "Они любят пиццу." },
                        { target: "They like pasta.", native: "Они любят пасту." },
                        { target: "They don't like beans.", native: "Они не любят бобы." },
                        { target: "They like rice.", native: "Они любят рис." },

                        { target: "This soup is good.", native: "Этот суп хороший." },
                        { target: "This apple is sweet.", native: "Это яблоко сладкое." },
                        { target: "This lemon is sour.", native: "Этот лимон кислый." },
                        { target: "This fish is fresh.", native: "Эта рыба свежая." }
                    ],

                    words: [
                        { id: "w1", target: "like", native: "нравится" },
                        { id: "w2", target: "don't like", native: "не нравится" },
                        { id: "w3", target: "tea", native: "чай" },
                        { id: "w4", target: "coffee", native: "кофе" },
                        { id: "w5", target: "milk", native: "молоко" },
                        { id: "w6", target: "water", native: "вода" },

                        { id: "w7", target: "bread", native: "хлеб" },
                        { id: "w8", target: "butter", native: "масло" },
                        { id: "w9", target: "cheese", native: "сыр" },
                        { id: "w10", target: "eggs", native: "яйца" },

                        { id: "w11", target: "apple", native: "яблоко" },
                        { id: "w12", target: "banana", native: "банан" },
                        { id: "w13", target: "lemon", native: "лимон" },
                        { id: "w14", target: "orange", native: "апельсин" },

                        { id: "w15", target: "soup", native: "суп" },
                        { id: "w16", target: "salad", native: "салат" },
                        { id: "w17", target: "fish", native: "рыба" },
                        { id: "w18", target: "chicken", native: "курица" },

                        { id: "w19", target: "rice", native: "рис" },
                        { id: "w20", target: "pasta", native: "паста" },
                        { id: "w21", target: "beans", native: "бобы" },
                        { id: "w22", target: "potatoes", native: "картофель" },

                        { id: "w23", target: "juice", native: "сок" },
                        { id: "w24", target: "apple juice", native: "яблочный сок" },
                        { id: "w25", target: "tomato juice", native: "томатный сок" },
                        { id: "w26", target: "orange juice", native: "апельсиновый сок" },

                        { id: "w27", target: "fruit", native: "фрукты" },
                        { id: "w28", target: "vegetables", native: "овощи" },
                        { id: "w29", target: "meat", native: "мясо" },
                        { id: "w30", target: "pizza", native: "пицца" },

                        { id: "w31", target: "sweet", native: "сладкий" },
                        { id: "w32", target: "sour", native: "кислый" },
                        { id: "w33", target: "fresh", native: "свежий" },
                        { id: "w34", target: "good", native: "хороший" },

                        { id: "w35", target: "yes", native: "да" },
                        { id: "w36", target: "no", native: "нет" },
                        { id: "w37", target: "do you like", native: "тебе нравится" },

                        { id: "w38", target: "he likes", native: "ему нравится" },
                        { id: "w39", target: "she likes", native: "ей нравится" },
                        { id: "w40", target: "we like", native: "нам нравится" },
                        { id: "w41", target: "they like", native: "им нравится" },

                        { id: "w42", target: "eat", native: "есть" },
                        { id: "w43", target: "drink", native: "пить" },
                        { id: "w44", target: "good soup", native: "хороший суп" },
                        { id: "w45", target: "sweet apple", native: "сладкое яблоко" },
                        { id: "w46", target: "sour lemon", native: "кислый лимон" },
                        { id: "w47", target: "fresh fish", native: "свежая рыба" },

                        { id: "w48", target: "lunch", native: "обед" },
                        { id: "w49", target: "dinner", native: "ужин" },
                        { id: "w50", target: "food", native: "еда" }
                    ]
                }
                ,

                // 8. Покупки + how much
                {
                    id: "shopping_prices",

                    rule: [
                        "How much is it?: вопрос о цене; пример: How much is this shirt?",
                        "How much are they?: вопрос о цене множества; пример: How much are these shoes?",
                        "Лексика по одежде: shirt, dress, skirt, shoes, jacket, pants",
                        "Пример ответа: It is ten euros. / They are twenty euros."
                    ].join("\n"),

                    title: "Покупки + how much",
                    title_native: "Покупки",
                    title_target: "Shopping",

                    sentences: [
                        { target: "How much is this shirt?", native: "Сколько стоит эта рубашка?" },
                        { target: "How much is this dress?", native: "Сколько стоит это платье?" },
                        { target: "How much is this jacket?", native: "Сколько стоит эта куртка?" },
                        { target: "How much is this hat?", native: "Сколько стоит эта шляпа?" },

                        { target: "How much are these shoes?", native: "Сколько стоят эти туфли?" },
                        { target: "How much are these pants?", native: "Сколько стоят эти брюки?" },
                        { target: "How much are these socks?", native: "Сколько стоят эти носки?" },
                        { target: "How much are these gloves?", native: "Сколько стоят эти перчатки?" },

                        { target: "This shirt is ten euros.", native: "Эта рубашка стоит десять евро." },
                        { target: "This dress is twenty euros.", native: "Это платье стоит двадцать евро." },
                        { target: "This hat is five euros.", native: "Эта шляпа стоит пять евро." },
                        { target: "This jacket is fifty euros.", native: "Эта куртка стоит пятьдесят евро." },

                        { target: "These shoes are thirty euros.", native: "Эти туфли стоят тридцать евро." },
                        { target: "These socks are two euros.", native: "Эти носки стоят два евро." },
                        { target: "These gloves are eight euros.", native: "Эти перчатки стоят восемь евро." },
                        { target: "These pants are fifteen euros.", native: "Эти брюки стоят пятнадцать евро." },

                        { target: "I want this shirt.", native: "Я хочу эту рубашку." },
                        { target: "I like this dress.", native: "Мне нравится это платье." },
                        { target: "I don't like this jacket.", native: "Мне не нравится эта куртка." },
                        { target: "I want these shoes.", native: "Я хочу эти туфли." },

                        { target: "I need new pants.", native: "Мне нужны новые брюки." },
                        { target: "I need warm socks.", native: "Мне нужны тёплые носки." },
                        { target: "I need a cheap jacket.", native: "Мне нужна дешёвая куртка." },
                        { target: "I need a big bag.", native: "Мне нужна большая сумка." },

                        { target: "Do you have this in red?", native: "У вас есть это в красном цвете?" },
                        { target: "Do you have this in blue?", native: "У вас есть это в синем цвете?" },
                        { target: "Do you have this in my size?", native: "У вас есть это моего размера?" },
                        { target: "Do you have a bigger size?", native: "У вас есть размер больше?" },

                        { target: "This bag is nice.", native: "Эта сумка красивая." },
                        { target: "This coat is warm.", native: "Это пальто тёплое." },
                        { target: "These shoes are comfortable.", native: "Эти туфли удобные." },
                        { target: "These pants are too long.", native: "Эти брюки слишком длинные." },

                        { target: "The shop is big.", native: "Магазин большой." },
                        { target: "The shop is new.", native: "Магазин новый." },
                        { target: "The shop is cheap.", native: "Магазин дешёвый." },
                        { target: "The shop is busy.", native: "Магазин занятой." },

                        { target: "I pay with cash.", native: "Я плачу наличными." },
                        { target: "I pay with a card.", native: "Я плачу картой." },
                        { target: "Here is your change.", native: "Вот ваша сдача." },
                        { target: "Thank you very much.", native: "Большое спасибо." }
                    ],

                    words: [
                        { id: "w1", target: "how much", native: "сколько стоит" },
                        { id: "w2", target: "shirt", native: "рубашка" },
                        { id: "w3", target: "dress", native: "платье" },
                        { id: "w4", target: "jacket", native: "куртка" },
                        { id: "w5", target: "hat", native: "шляпа" },

                        { id: "w6", target: "shoes", native: "туфли" },
                        { id: "w7", target: "pants", native: "брюки" },
                        { id: "w8", target: "socks", native: "носки" },
                        { id: "w9", target: "gloves", native: "перчатки" },

                        { id: "w10", target: "euros", native: "евро" },
                        { id: "w11", target: "want", native: "хочу" },
                        { id: "w12", target: "like", native: "нравится" },
                        { id: "w13", target: "don't like", native: "не нравится" },

                        { id: "w14", target: "need", native: "нужно" },
                        { id: "w15", target: "cheap", native: "дешёвый" },
                        { id: "w16", target: "big", native: "большой" },
                        { id: "w17", target: "warm", native: "тёплый" },

                        { id: "w18", target: "bag", native: "сумка" },
                        { id: "w19", target: "coat", native: "пальто" },
                        { id: "w20", target: "comfortable", native: "удобный" },
                        { id: "w21", target: "long", native: "длинный" },

                        { id: "w22", target: "red", native: "красный" },
                        { id: "w23", target: "blue", native: "синий" },
                        { id: "w24", target: "size", native: "размер" },
                        { id: "w25", target: "bigger", native: "больше" },

                        { id: "w26", target: "shop", native: "магазин" },
                        { id: "w27", target: "cheap", native: "дешёвый" },
                        { id: "w28", target: "busy", native: "занятой" },
                        { id: "w29", target: "new", native: "новый" },

                        { id: "w30", target: "pay", native: "платить" },
                        { id: "w31", target: "cash", native: "наличные" },
                        { id: "w32", target: "card", native: "карта" },
                        { id: "w33", target: "change", native: "сдача" },

                        { id: "w34", target: "this", native: "это" },
                        { id: "w35", target: "these", native: "эти" },
                        { id: "w36", target: "too", native: "слишком" },
                        { id: "w37", target: "nice", native: "красивый" },

                        { id: "w38", target: "coat", native: "пальто" },
                        { id: "w39", target: "warm coat", native: "тёплое пальто" },
                        { id: "w40", target: "big shop", native: "большой магазин" },
                        { id: "w41", target: "cheap shop", native: "дешёвый магазин" },

                        { id: "w42", target: "pay with cash", native: "платить наличными" },
                        { id: "w43", target: "pay with card", native: "платить картой" },
                        { id: "w44", target: "thank you", native: "спасибо" },
                        { id: "w45", target: "very much", native: "очень" },

                        { id: "w46", target: "hat", native: "шляпа" },
                        { id: "w47", target: "dress", native: "платье" },
                        { id: "w48", target: "pants", native: "брюки" },
                        { id: "w49", target: "shoes", native: "туфли" },
                        { id: "w50", target: "price", native: "цена" }
                    ]
                }
                ,

                // 9. Город + предлоги места
                {
                    id: "city_prepositions",

                    rule: [
                        "Предлоги места: in(в), on(на), under(под), next to(рядом с), between(между)",
                        "Основные места в городе: bank, pharmacy, park, shop, school, bus stop",
                        "Пример: The pharmacy is next to the bank."
                    ].join("\n"),

                    title: "Город + предлоги места",
                    title_native: "В городе",
                    title_target: "In the City",

                    sentences: [
                        { target: "I walk in the city.", native: "Я гуляю по городу." },
                        { target: "The city is big.", native: "Город большой." },
                        { target: "The streets are clean.", native: "Улицы чистые." },
                        { target: "The park is in the city.", native: "Парк находится в городе." },

                        { target: "The bank is on the main street.", native: "Банк находится на главной улице." },
                        { target: "The pharmacy is next to the bank.", native: "Аптека рядом с банком." },
                        { target: "The shop is next to the pharmacy.", native: "Магазин рядом с аптекой." },
                        { target: "The café is between the shop and the bank.", native: "Кафе находится между магазином и банком." },

                        { target: "The bus stop is in front of the café.", native: "Автобусная остановка перед кафе." },
                        { target: "The bench is near the bus stop.", native: "Скамейка рядом с остановкой." },
                        { target: "There is a tree behind the bench.", native: "За скамейкой есть дерево." },
                        { target: "A cat is under the tree.", native: "Кошка под деревом." },

                        { target: "The school is next to the park.", native: "Школа рядом с парком." },
                        { target: "The children are in the school.", native: "Дети находятся в школе." },
                        { target: "The teacher is in the classroom.", native: "Учитель находится в классе." },
                        { target: "The books are on the table.", native: "Книги на столе." },

                        { target: "The library is near the park.", native: "Библиотека рядом с парком." },
                        { target: "People read in the library.", native: "Люди читают в библиотеке." },
                        { target: "The librarian is behind the desk.", native: "Библиотекарь за столом." },
                        { target: "The computer is on the desk.", native: "Компьютер на столе." },

                        { target: "The restaurant is in the center.", native: "Ресторан в центре." },
                        { target: "The menu is on the wall.", native: "Меню на стене." },
                        { target: "The chairs are under the tables.", native: "Стулья под столами." },
                        { target: "The lights are above the tables.", native: "Лампы над столами." },

                        { target: "The supermarket is near my home.", native: "Супермаркет рядом с моим домом." },
                        { target: "The fruit is on the shelf.", native: "Фрукты на полке." },
                        { target: "The bread is under the shelf.", native: "Хлеб под полкой." },
                        { target: "The bottles are between the boxes.", native: "Бутылки между коробками." },

                        { target: "The post office is next to the supermarket.", native: "Почта рядом с супермаркетом." },
                        { target: "The letter box is in front of the post office.", native: "Почтовый ящик перед почтой." },
                        { target: "The taxi is behind the post office.", native: "Такси позади почты." },
                        { target: "The driver is in the taxi.", native: "Водитель в такси." },

                        { target: "The city is busy in the morning.", native: "Город занятой утром." },
                        { target: "The people are on the street.", native: "Люди на улице." },
                        { target: "The cars are on the road.", native: "Машины на дороге." },
                        { target: "The buses are at the bus stop.", native: "Автобусы на остановке." }
                    ],

                    words: [
                        { id: "w1", target: "in", native: "в" },
                        { id: "w2", target: "on", native: "на" },
                        { id: "w3", target: "under", native: "под" },
                        { id: "w4", target: "next to", native: "рядом с" },
                        { id: "w5", target: "between", native: "между" },

                        { id: "w6", target: "bank", native: "банк" },
                        { id: "w7", target: "pharmacy", native: "аптека" },
                        { id: "w8", target: "shop", native: "магазин" },
                        { id: "w9", target: "café", native: "кафе" },
                        { id: "w10", target: "park", native: "парк" },

                        { id: "w11", target: "bus stop", native: "автобусная остановка" },
                        { id: "w12", target: "bench", native: "скамейка" },
                        { id: "w13", target: "tree", native: "дерево" },
                        { id: "w14", target: "cat", native: "кошка" },
                        { id: "w15", target: "school", native: "школа" },

                        { id: "w16", target: "children", native: "дети" },
                        { id: "w17", target: "teacher", native: "учитель" },
                        { id: "w18", target: "classroom", native: "класс" },
                        { id: "w19", target: "books", native: "книги" },
                        { id: "w20", target: "table", native: "стол" },

                        { id: "w21", target: "library", native: "библиотека" },
                        { id: "w22", target: "desk", native: "письменный стол" },
                        { id: "w23", target: "computer", native: "компьютер" },
                        { id: "w24", target: "restaurant", native: "ресторан" },
                        { id: "w25", target: "menu", native: "меню" },

                        { id: "w26", target: "lights", native: "лампы" },
                        { id: "w27", target: "supermarket", native: "супермаркет" },
                        { id: "w28", target: "fruit", native: "фрукты" },
                        { id: "w29", target: "bread", native: "хлеб" },
                        { id: "w30", target: "bottles", native: "бутылки" },

                        { id: "w31", target: "boxes", native: "коробки" },
                        { id: "w32", target: "post office", native: "почта" },
                        { id: "w33", target: "letter box", native: "почтовый ящик" },
                        { id: "w34", target: "taxi", native: "такси" },
                        { id: "w35", target: "driver", native: "водитель" },

                        { id: "w36", target: "street", native: "улица" },
                        { id: "w37", target: "road", native: "дорога" },
                        { id: "w38", target: "cars", native: "машины" },
                        { id: "w39", target: "buses", native: "автобусы" },
                        { id: "w40", target: "people", native: "люди" },

                        { id: "w41", target: "behind", native: "позади" },
                        { id: "w42", target: "in front of", native: "перед" },
                        { id: "w43", target: "near", native: "рядом" },
                        { id: "w44", target: "center", native: "центр" },
                        { id: "w45", target: "city", native: "город" },

                        { id: "w46", target: "clean", native: "чистый" },
                        { id: "w47", target: "big", native: "большой" },
                        { id: "w48", target: "busy", native: "занятой" },
                        { id: "w49", target: "shelf", native: "полка" },
                        { id: "w50", target: "wall", native: "стена" }
                    ]
                }
                ,

                // 10. Транспорт + направление
                {
                    id: "directions_travel",

                    rule: [
                        "Указание направления: go straight(идите прямо), turn left(поверните налево), turn right(поверните направо)",
                        "Общественный транспорт: bus(автобус), train(поезд), taxi(такси)",
                        "Пример: Go straight to the park. Turn right at the bank."
                    ].join("\n"),

                    title: "Транспорт + направление",
                    title_native: "Как добраться",
                    title_target: "Getting Around",

                    sentences: [
                        { target: "I travel in a new city.", native: "Я путешествую в новом городе." },
                        { target: "The city is big and busy.", native: "Город большой и оживлённый." },
                        { target: "I want to find the museum.", native: "Я хочу найти музей." },
                        { target: "I stop near a small café.", native: "Я останавливаюсь у маленького кафе." },

                        { target: "I ask a man for help.", native: "Я прошу мужчину о помощи." },
                        { target: "He is friendly.", native: "Он дружелюбный." },
                        { target: "He says: Go straight.", native: "Он говорит: Идите прямо." },
                        { target: "I go straight down the street.", native: "Я иду прямо по улице." },

                        { target: "He says: Turn left at the bank.", native: "Он говорит: Поверните налево у банка." },
                        { target: "I turn left at the bank.", native: "Я поворачиваю налево у банка." },
                        { target: "I see a bus stop.", native: "Я вижу автобусную остановку." },
                        { target: "The bus stop is next to the bank.", native: "Автобусная остановка рядом с банком." },

                        { target: "I wait for a bus.", native: "Я жду автобус." },
                        { target: "The bus arrives.", native: "Автобус приезжает." },
                        { target: "I get on the bus.", native: "Я захожу в автобус." },
                        { target: "I sit near the window.", native: "Я сажусь рядом с окном." },

                        { target: "I watch the street.", native: "Я смотрю на улицу." },
                        { target: "I see shops and cafés.", native: "Я вижу магазины и кафе." },
                        { target: "The bus goes straight.", native: "Автобус едет прямо." },
                        { target: "The driver turns right.", native: "Водитель поворачивает направо." },

                        { target: "I get off the bus near the station.", native: "Я выхожу из автобуса возле станции." },
                        { target: "The train station is big.", native: "Железнодорожная станция большая." },
                        { target: "I want to take a train.", native: "Я хочу поехать на поезде." },
                        { target: "I look at the signs.", native: "Я смотрю на указатели." },

                        { target: "One sign says: Go straight to the platform.", native: "Один указатель говорит: Идите прямо к платформе." },
                        { target: "I go straight again.", native: "Я снова иду прямо." },
                        { target: "I see the train.", native: "Я вижу поезд." },
                        { target: "The train is fast.", native: "Поезд быстрый." },

                        { target: "I take the train to the center.", native: "Я еду на поезде в центр." },
                        { target: "I arrive in the center.", native: "Я приезжаю в центр." },
                        { target: "The museum is near the station.", native: "Музей рядом со станцией." },
                        { target: "I walk to the museum.", native: "Я иду к музею." },

                        { target: "I enjoy the city.", native: "Мне нравится город." },
                        { target: "The trip is easy with good directions.", native: "Путешествие легко с хорошими подсказками." }
                    ],

                    words: [
                        { id: "w1", target: "go straight", native: "идите прямо" },
                        { id: "w2", target: "turn left", native: "поверните налево" },
                        { id: "w3", target: "turn right", native: "поверните направо" },
                        { id: "w4", target: "bus", native: "автобус" },
                        { id: "w5", target: "train", native: "поезд" },

                        { id: "w6", target: "taxi", native: "такси" },
                        { id: "w7", target: "station", native: "станция" },
                        { id: "w8", target: "platform", native: "платформа" },
                        { id: "w9", target: "stop", native: "остановка" },
                        { id: "w10", target: "sign", native: "указатель" },

                        { id: "w11", target: "city", native: "город" },
                        { id: "w12", target: "street", native: "улица" },
                        { id: "w13", target: "bank", native: "банк" },
                        { id: "w14", target: "café", native: "кафе" },
                        { id: "w15", target: "museum", native: "музей" },

                        { id: "w16", target: "bus stop", native: "автобусная остановка" },
                        { id: "w17", target: "driver", native: "водитель" },
                        { id: "w18", target: "window", native: "окно" },
                        { id: "w19", target: "shops", native: "магазины" },
                        { id: "w20", target: "center", native: "центр" },

                        { id: "w21", target: "help", native: "помощь" },
                        { id: "w22", target: "friendly", native: "дружелюбный" },
                        { id: "w23", target: "travel", native: "путешествовать" },
                        { id: "w24", target: "arrive", native: "прибывать" },
                        { id: "w25", target: "take the train", native: "поехать на поезде" },

                        { id: "w26", target: "look at", native: "смотреть на" },
                        { id: "w27", target: "get on", native: "садиться" },
                        { id: "w28", target: "get off", native: "выходить" },
                        { id: "w29", target: "turn", native: "поворачивать" },
                        { id: "w30", target: "walk", native: "идти пешком" },

                        { id: "w31", target: "again", native: "снова" },
                        { id: "w32", target: "near", native: "рядом" },
                        { id: "w33", target: "find", native: "находить" },
                        { id: "w34", target: "trip", native: "поездка" },
                        { id: "w35", target: "easy", native: "лёгко" },

                        { id: "w36", target: "friendly man", native: "дружелюбный мужчина" },
                        { id: "w37", target: "busy city", native: "оживлённый город" },
                        { id: "w38", target: "fast train", native: "быстрый поезд" },
                        { id: "w39", target: "bus arrives", native: "автобус приезжает" },
                        { id: "w40", target: "walk to the museum", native: "идти к музею" },

                        { id: "w41", target: "café", native: "кафе" },
                        { id: "w42", target: "street", native: "улица" },
                        { id: "w43", target: "window seat", native: "место у окна" },
                        { id: "w44", target: "signs", native: "указатели" },
                        { id: "w45", target: "left", native: "налево" },

                        { id: "w46", target: "right", native: "направо" },
                        { id: "w47", target: "go", native: "идти" },
                        { id: "w48", target: "find the museum", native: "найти музей" },
                        { id: "w49", target: "friendly driver", native: "дружелюбный водитель" },
                        { id: "w50", target: "travel in the city", native: "путешествовать по городу" }
                    ]
                }
                ,

                // 11. Работа и профессии + глагол to work
                {
                    id: "jobs_work",

                    rule: [
                        "Слова по теме профессии: teacher, doctor, driver, cook, worker, student",
                        "Глагол to work: I work, you work, he/she works",
                        "Вопросы с do/does: Where do you work? What do you do?",
                        "Пример ответа: I work in an office. She works in a school."
                    ].join("\n"),

                    title: "Работа и профессии + глагол to work",
                    title_native: "Работа",
                    title_target: "Work and Professions",

                    sentences: [
                        { target: "I work in an office.", native: "Я работаю в офисе." },
                        { target: "My office is in the city.", native: "Мой офис находится в городе." },
                        { target: "I go to work every day.", native: "Я хожу на работу каждый день." },
                        { target: "I start work at nine.", native: "Я начинаю работу в девять." },

                        { target: "I have many colleagues.", native: "У меня много коллег." },
                        { target: "My colleagues are friendly.", native: "Мои коллеги дружелюбные." },
                        { target: "We work together.", native: "Мы работаем вместе." },
                        { target: "We talk and help each other.", native: "Мы разговариваем и помогаем друг другу." },

                        { target: "My friend Anna is a teacher.", native: "Моя подруга Анна — учитель." },
                        { target: "She works in a school.", native: "Она работает в школе." },
                        { target: "She teaches children.", native: "Она учит детей." },
                        { target: "Her job is important.", native: "Её работа важная." },

                        { target: "My brother Mark is a driver.", native: "Мой брат Марк — водитель." },
                        { target: "He works in a taxi company.", native: "Он работает в такси-компании." },
                        { target: "He drives many people.", native: "Он перевозит много людей." },
                        { target: "His job is not easy.", native: "Его работа непростая." },

                        { target: "My mother is a doctor.", native: "Моя мама — врач." },
                        { target: "She works in a hospital.", native: "Она работает в больнице." },
                        { target: "She helps sick people.", native: "Она помогает больным людям." },
                        { target: "Her job is very important.", native: "Её работа очень важная." },

                        { target: "My father is a cook.", native: "Мой папа — повар." },
                        { target: "He works in a restaurant.", native: "Он работает в ресторане." },
                        { target: "He cooks tasty food.", native: "Он готовит вкусную еду." },
                        { target: "People like his food.", native: "Людям нравится его еда." },

                        { target: "My sister is a student.", native: "Моя сестра — студентка." },
                        { target: "She studies at a university.", native: "Она учится в университете." },
                        { target: "She works part-time.", native: "Она работает неполный день." },
                        { target: "She works in a small café.", native: "Она работает в маленьком кафе." },

                        { target: "Many people work in the city.", native: "Много людей работают в городе." },
                        { target: "Some people work in offices.", native: "Некоторые работают в офисах." },
                        { target: "Some people work in shops.", native: "Некоторые работают в магазинах." },
                        { target: "Some people work outside.", native: "Некоторые работают на улице." },

                        { target: "Where do you work?", native: "Где ты работаешь?" },
                        { target: "I work in an office.", native: "Я работаю в офисе." },
                        { target: "What do you do?", native: "Кем ты работаешь?" },
                        { target: "I am an office worker.", native: "Я офисный работник." },

                        { target: "Do you like your job?", native: "Тебе нравится твоя работа?" },
                        { target: "Yes, I do.", native: "Да." },
                        { target: "My job is interesting.", native: "Моя работа интересная." },
                        { target: "I learn something every day.", native: "Я узнаю что-то каждый день." }
                    ],

                    words: [
                        { id: "w1", target: "work", native: "работать" },
                        { id: "w2", target: "office", native: "офис" },
                        { id: "w3", target: "colleague", native: "коллега" },
                        { id: "w4", target: "together", native: "вместе" },
                        { id: "w5", target: "help", native: "помогать" },

                        { id: "w6", target: "teacher", native: "учитель" },
                        { id: "w7", target: "school", native: "школа" },
                        { id: "w8", target: "children", native: "дети" },
                        { id: "w9", target: "important", native: "важный" },

                        { id: "w10", target: "driver", native: "водитель" },
                        { id: "w11", target: "taxi", native: "такси" },
                        { id: "w12", target: "drive", native: "водить" },
                        { id: "w13", target: "people", native: "люди" },

                        { id: "w14", target: "doctor", native: "врач" },
                        { id: "w15", target: "hospital", native: "больница" },
                        { id: "w16", target: "sick", native: "больной" },
                        { id: "w17", target: "help", native: "помогать" },

                        { id: "w18", target: "cook", native: "повар" },
                        { id: "w19", target: "restaurant", native: "ресторан" },
                        { id: "w20", target: "food", native: "еда" },
                        { id: "w21", target: "tasty", native: "вкусный" },

                        { id: "w22", target: "student", native: "студент" },
                        { id: "w23", target: "university", native: "университет" },
                        { id: "w24", target: "part-time", native: "неполный день" },
                        { id: "w25", target: "café", native: "кафе" },

                        { id: "w26", target: "outside", native: "на улице" },
                        { id: "w27", target: "shop", native: "магазин" },
                        { id: "w28", target: "worker", native: "работник" },
                        { id: "w29", target: "job", native: "работа" },

                        { id: "w30", target: "do you work", native: "ты работаешь" },
                        { id: "w31", target: "where do you work", native: "где ты работаешь" },
                        { id: "w32", target: "what do you do", native: "кем ты работаешь" },
                        { id: "w33", target: "office worker", native: "офисный работник" },

                        { id: "w34", target: "start", native: "начинать" },
                        { id: "w35", target: "drive people", native: "перевозить людей" },
                        { id: "w36", target: "cook food", native: "готовить еду" },
                        { id: "w37", target: "teach", native: "учить" },
                        { id: "w38", target: "learn", native: "учить(узнавать)" },

                        { id: "w39", target: "friendly", native: "дружелюбный" },
                        { id: "w40", target: "every day", native: "каждый день" },
                        { id: "w41", target: "work together", native: "работать вместе" },
                        { id: "w42", target: "help each other", native: "помогать друг другу" },

                        { id: "w43", target: "company", native: "компания" },
                        { id: "w44", target: "restaurant", native: "ресторан" },
                        { id: "w45", target: "hospital", native: "больница" },

                        { id: "w46", target: "yes", native: "да" },
                        { id: "w47", target: "no", native: "нет" },
                        { id: "w48", target: "work in an office", native: "работать в офисе" },
                        { id: "w49", target: "work in a school", native: "работать в школе" },
                        { id: "w50", target: "work in a hospital", native: "работать в больнице" }
                    ]
                }
                ,

                // 12. Хобби + can / can't
                {
                    id: "hobbies_can",

                    rule: [
                        "can / can't: выражают умения и невозможность; пример: I can swim. I can't drive.",
                        "Лексика по хобби: read, swim, play tennis, draw, cook, run",
                        "Вопрос can you…?: Can you swim? — Ты умеешь плавать?"
                    ].join("\n"),

                    title: "Хобби + can / can't",
                    title_native: "Хобби и умения",
                    title_target: "Hobbies",

                    sentences: [
                        { target: "I have many hobbies.", native: "У меня много хобби." },
                        { target: "I can swim very well.", native: "Я умею плавать очень хорошо." },
                        { target: "I swim in the mornings.", native: "Я плаваю по утрам." },
                        { target: "I can also run fast.", native: "Я также умею быстро бегать." },

                        { target: "My friend Anna can draw.", native: "Моя подруга Анна умеет рисовать." },
                        { target: "She draws beautiful pictures.", native: "Она рисует красивые картинки." },
                        { target: "She can read for hours.", native: "Она может читать часами." },
                        { target: "Reading is her hobby.", native: "Чтение — её хобби." },

                        { target: "My brother Mark can play tennis.", native: "Мой брат Марк умеет играть в теннис." },
                        { target: "He plays tennis on weekends.", native: "Он играет в теннис по выходным." },
                        { target: "He can hit the ball very hard.", native: "Он может сильно ударить по мячу." },
                        { target: "He can’t swim.", native: "Он не умеет плавать." },

                        { target: "My sister can cook.", native: "Моя сестра умеет готовить." },
                        { target: "She cooks tasty food.", native: "Она готовит вкусную еду." },
                        { target: "She can make soup and pasta.", native: "Она умеет готовить суп и пасту." },
                        { target: "She can't play tennis.", native: "Она не умеет играть в теннис." },

                        { target: "My father can play the guitar.", native: "Мой папа умеет играть на гитаре." },
                        { target: "He plays songs in the evening.", native: "Он играет песни вечером." },
                        { target: "We sing together.", native: "Мы поём вместе." },
                        { target: "He can’t run fast.", native: "Он не умеет быстро бегать." },

                        { target: "My mother can speak two languages.", native: "Моя мама умеет говорить на двух языках." },
                        { target: "She can speak English.", native: "Она умеет говорить по-английски." },
                        { target: "She can speak Spanish.", native: "Она умеет говорить по-испански." },
                        { target: "She can’t draw.", native: "Она не умеет рисовать." },

                        { target: "I ask my friends questions.", native: "Я задаю своим друзьям вопросы." },
                        { target: "I ask: Can you swim?", native: "Я спрашиваю: Ты умеешь плавать?" },
                        { target: "I ask: Can you cook?", native: "Я спрашиваю: Ты умеешь готовить?" },
                        { target: "I ask: Can you read fast?", native: "Я спрашиваю: Ты умеешь быстро читать?" },

                        { target: "They ask me too.", native: "Они спрашивают меня тоже." },
                        { target: "They ask: Can you play tennis?", native: "Они спрашивают: Ты умеешь играть в теннис?" },
                        { target: "I say: Yes, I can.", native: "Я говорю: Да, умею." },
                        { target: "I say: No, I can't.", native: "Я говорю: Нет, не умею." },

                        { target: "We all have different hobbies.", native: "У нас у всех разные хобби." },
                        { target: "We can do many things.", native: "Мы можем делать много вещей." },
                        { target: "We can learn new hobbies.", native: "Мы можем учить новые хобби." },
                        { target: "We can enjoy our free time.", native: "Мы можем наслаждаться свободным временем." }
                    ],

                    words: [
                        { id: "w1", target: "can", native: "мочь, уметь" },
                        { id: "w2", target: "can't", native: "не мочь, не уметь" },
                        { id: "w3", target: "swim", native: "плавать" },
                        { id: "w4", target: "run", native: "бегать" },
                        { id: "w5", target: "draw", native: "рисовать" },

                        { id: "w6", target: "read", native: "читать" },
                        { id: "w7", target: "play tennis", native: "играть в теннис" },
                        { id: "w8", target: "cook", native: "готовить" },
                        { id: "w9", target: "play the guitar", native: "играть на гитаре" },
                        { id: "w10", target: "speak", native: "говорить" },

                        { id: "w11", target: "hobby", native: "хобби" },
                        { id: "w12", target: "free time", native: "свободное время" },
                        { id: "w13", target: "ball", native: "мяч" },
                        { id: "w14", target: "song", native: "песня" },
                        { id: "w15", target: "tasty", native: "вкусный" },

                        { id: "w16", target: "sister", native: "сестра" },
                        { id: "w17", target: "brother", native: "брат" },
                        { id: "w18", target: "father", native: "папа" },
                        { id: "w19", target: "mother", native: "мама" },
                        { id: "w20", target: "friend", native: "друг" },

                        { id: "w21", target: "question", native: "вопрос" },
                        { id: "w22", target: "ask", native: "спрашивать" },
                        { id: "w23", target: "answer", native: "отвечать" },
                        { id: "w24", target: "different", native: "разные" },
                        { id: "w25", target: "learn", native: "учить(новое)" },

                        { id: "w26", target: "hours", native: "часы" },
                        { id: "w27", target: "weekends", native: "выходные" },
                        { id: "w28", target: "morning", native: "утро" },
                        { id: "w29", target: "evening", native: "вечер" },
                        { id: "w30", target: "beautiful", native: "красивые" },

                        { id: "w31", target: "fast", native: "быстро" },
                        { id: "w32", target: "well", native: "хорошо" },
                        { id: "w33", target: "together", native: "вместе" },
                        { id: "w34", target: "enjoy", native: "наслаждаться" },
                        { id: "w35", target: "free", native: "свободный" },

                        { id: "w36", target: "make", native: "готовить(делать)" },
                        { id: "w37", target: "pasta", native: "паста" },
                        { id: "w38", target: "soup", native: "суп" },
                        { id: "w39", target: "read fast", native: "читать быстро" },
                        { id: "w40", target: "play songs", native: "играть песни" },

                        { id: "w41", target: "can you…?", native: "ты умеешь…?" },
                        { id: "w42", target: "yes, I can", native: "да, умею" },
                        { id: "w43", target: "no, I can't", native: "нет, не умею" },
                        { id: "w44", target: "I can swim", native: "я умею плавать" },
                        { id: "w45", target: "I can't draw", native: "я не умею рисовать" },

                        { id: "w46", target: "play", native: "играть" },
                        { id: "w47", target: "hours", native: "часы" },
                        { id: "w48", target: "fast run", native: "быстрый бег" },
                        { id: "w49", target: "hobbies", native: "хобби" },
                        { id: "w50", target: "enjoy time", native: "наслаждаться временем" }
                    ]
                }
                ,

                // 13. Погода и сезоны
                {
                    id: "weather_seasons",

                    rule: [
                        "Прилагательные о погоде: sunny(солнечно), rainy(дождливо), cold(холодно), hot(жарко)",
                        "Сезоны: spring, summer, autumn, winter",
                        "Месяцы года: January–December",
                        "Пример: It is sunny today. It is cold in winter."
                    ].join("\n"),

                    title: "Погода и сезоны",
                    title_native: "Погода",
                    title_target: "Weather",

                    sentences: [
                        { target: "It is sunny today.", native: "Сегодня солнечно." },
                        { target: "The sky is blue.", native: "Небо голубое." },
                        { target: "I walk outside.", native: "Я гуляю на улице." },
                        { target: "The weather is warm.", native: "Погода тёплая." },

                        { target: "It is spring now.", native: "Сейчас весна." },
                        { target: "Spring is beautiful.", native: "Весна красивая." },
                        { target: "The trees are green.", native: "Деревья зелёные." },
                        { target: "The flowers are pink and yellow.", native: "Цветы розовые и жёлтые." },

                        { target: "Sometimes it is rainy in spring.", native: "Иногда весной дождливо." },
                        { target: "I take an umbrella.", native: "Я беру зонт." },
                        { target: "I can walk in the rain.", native: "Я могу гулять под дождём." },
                        { target: "The rain is light.", native: "Дождь лёгкий." },

                        { target: "Summer is hot.", native: "Лето жаркое." },
                        { target: "The days are long in summer.", native: "Летом дни длинные." },
                        { target: "I can swim in summer.", native: "Летом я могу плавать." },
                        { target: "I drink cold water.", native: "Я пью холодную воду." },

                        { target: "Autumn is cool.", native: "Осень прохладная." },
                        { target: "The leaves are red and orange.", native: "Листья красные и оранжевые." },
                        { target: "It is rainy in autumn.", native: "Осенью дождливо." },
                        { target: "I wear a jacket.", native: "Я ношу куртку." },

                        { target: "Winter is cold.", native: "Зима холодная." },
                        { target: "I wear a hat and gloves.", native: "Я ношу шапку и перчатки." },
                        { target: "Sometimes it is snowy.", native: "Иногда идёт снег." },
                        { target: "The streets are white.", native: "Улицы белые." },

                        { target: "January is a winter month.", native: "Январь — зимний месяц." },
                        { target: "April is a spring month.", native: "Апрель — весенний месяц." },
                        { target: "July is a summer month.", native: "Июль — летний месяц." },
                        { target: "October is an autumn month.", native: "Октябрь — осенний месяц." },

                        { target: "I like warm weather.", native: "Мне нравится тёплая погода." },
                        { target: "I don't like cold weather.", native: "Мне не нравится холодная погода." },
                        { target: "My friend likes winter.", native: "Мой друг любит зиму." },
                        { target: "He likes snow.", native: "Он любит снег." },

                        { target: "We talk about the weather every day.", native: "Мы говорим о погоде каждый день." },
                        { target: "The weather changes often.", native: "Погода часто меняется." }
                    ],

                    words: [
                        { id: "w1", target: "sunny", native: "солнечно" },
                        { id: "w2", target: "rainy", native: "дождливо" },
                        { id: "w3", target: "cold", native: "холодно" },
                        { id: "w4", target: "hot", native: "жарко" },
                        { id: "w5", target: "warm", native: "тёплый" },

                        { id: "w6", target: "spring", native: "весна" },
                        { id: "w7", target: "summer", native: "лето" },
                        { id: "w8", target: "autumn", native: "осень" },
                        { id: "w9", target: "winter", native: "зима" },

                        { id: "w10", target: "January", native: "январь" },
                        { id: "w11", target: "April", native: "апрель" },
                        { id: "w12", target: "July", native: "июль" },
                        { id: "w13", target: "October", native: "октябрь" },

                        { id: "w14", target: "umbrella", native: "зонт" },
                        { id: "w15", target: "rain", native: "дождь" },
                        { id: "w16", target: "snow", native: "снег" },
                        { id: "w17", target: "hat", native: "шапка" },
                        { id: "w18", target: "gloves", native: "перчатки" },

                        { id: "w19", target: "trees", native: "деревья" },
                        { id: "w20", target: "flowers", native: "цветы" },
                        { id: "w21", target: "leaves", native: "листья" },
                        { id: "w22", target: "sky", native: "небо" },
                        { id: "w23", target: "street", native: "улица" },

                        { id: "w24", target: "today", native: "сегодня" },
                        { id: "w25", target: "outside", native: "на улице" },
                        { id: "w26", target: "walk", native: "гулять" },
                        { id: "w27", target: "drink", native: "пить" },
                        { id: "w28", target: "wear", native: "носить" },

                        { id: "w29", target: "cool", native: "прохладный" },
                        { id: "w30", target: "blue", native: "голубой" },
                        { id: "w31", target: "white", native: "белый" },
                        { id: "w32", target: "pink", native: "розовый" },
                        { id: "w33", target: "yellow", native: "жёлтый" },

                        { id: "w34", target: "month", native: "месяц" },
                        { id: "w35", target: "changes", native: "меняется" },
                        { id: "w36", target: "often", native: "часто" },
                        { id: "w37", target: "I like", native: "мне нравится" },
                        { id: "w38", target: "I don't like", native: "мне не нравится" },

                        { id: "w39", target: "snowy", native: "снежно" },
                        { id: "w40", target: "windy", native: "ветрено" },
                        { id: "w41", target: "cloudy", native: "облачно" },
                        { id: "w42", target: "weather", native: "погода" },
                        { id: "w43", target: "season", native: "сезон" },

                        { id: "w44", target: "green", native: "зелёный" },
                        { id: "w45", target: "red", native: "красный" },
                        { id: "w46", target: "orange", native: "оранжевый" },
                        { id: "w47", target: "cold water", native: "холодная вода" },
                        { id: "w48", target: "warm weather", native: "тёплая погода" },

                        { id: "w49", target: "long days", native: "длинные дни" },
                        { id: "w50", target: "beautiful spring", native: "красивая весна" }
                    ]
                }
                ,

                // 14. Здоровье + простые симптомы
                {
                    id: "health_basic",

                    rule: [
                        "Фразы о самочувствии: I have a headache(у меня болит голова), I have a cold(я простужен), I feel tired(я устал)",
                        "Части тела: head, throat, nose, back, stomach",
                        "Пример: I have a headache. My throat hurts."
                    ].join("\n"),

                    title: "Здоровье + простые симптомы",
                    title_native: "Здоровье",
                    title_target: "Health Basics",

                    sentences: [
                        { target: "I wake up in the morning.", native: "Я просыпаюсь утром." },
                        { target: "I do not feel well.", native: "Я чувствую себя нехорошо." },
                        { target: "I have a headache.", native: "У меня болит голова." },
                        { target: "My head hurts.", native: "Моя голова болит." },

                        { target: "I sit on my bed.", native: "Я сижу на своей кровати." },
                        { target: "I drink some water.", native: "Я пью немного воды." },
                        { target: "I feel a little better.", native: "Я чувствую себя немного лучше." },
                        { target: "But my throat hurts.", native: "Но у меня болит горло." },

                        { target: "I think I have a cold.", native: "Я думаю, что я простужен." },
                        { target: "My nose is stuffy.", native: "Мой нос заложен." },
                        { target: "I feel tired.", native: "Я чувствую себя уставшим." },
                        { target: "I want to rest.", native: "Я хочу отдохнуть." },

                        { target: "I call my friend Anna.", native: "Я звоню своей подруге Анне." },
                        { target: "I say: I feel sick today.", native: "Я говорю: Сегодня я плохо себя чувствую." },
                        { target: "She says: You should see a doctor.", native: "Она говорит: Тебе стоит сходить к врачу." },
                        { target: "I decide to go to the clinic.", native: "Я решаю пойти в клинику." },

                        { target: "The clinic is near my house.", native: "Клиника рядом с моим домом." },
                        { target: "I walk slowly to the clinic.", native: "Я медленно иду до клиники." },
                        { target: "The doctor is friendly.", native: "Доктор дружелюбный." },
                        { target: "He asks: What is the problem?", native: "Он спрашивает: Что случилось?" },

                        { target: "I say: I have a headache.", native: "Я говорю: У меня болит голова." },
                        { target: "I say: My throat hurts.", native: "Я говорю: У меня болит горло." },
                        { target: "I say: I feel tired.", native: "Я говорю: Я чувствую себя уставшим." },
                        { target: "The doctor listens to me.", native: "Доктор слушает меня." },

                        { target: "He checks my temperature.", native: "Он проверяет мою температуру." },
                        { target: "He says: You have a cold.", native: "Он говорит: У тебя простуда." },
                        { target: "He gives me some medicine.", native: "Он даёт мне лекарства." },
                        { target: "He says: Rest and drink water.", native: "Он говорит: Отдыхай и пей воду." },

                        { target: "I go back home.", native: "Я возвращаюсь домой." },
                        { target: "I drink tea with lemon.", native: "Я пью чай с лимоном." },
                        { target: "I rest in my bed.", native: "Я отдыхаю в своей кровати." },
                        { target: "I feel better in the evening.", native: "Я чувствую себя лучше вечером." }
                    ],

                    words: [
                        { id: "w1", target: "headache", native: "головная боль" },
                        { id: "w2", target: "cold", native: "простуда" },
                        { id: "w3", target: "tired", native: "уставший" },
                        { id: "w4", target: "sick", native: "больной" },
                        { id: "w5", target: "medicine", native: "лекарство" },

                        { id: "w6", target: "doctor", native: "врач" },
                        { id: "w7", target: "clinic", native: "клиника" },
                        { id: "w8", target: "temperature", native: "температура" },
                        { id: "w9", target: "throat", native: "горло" },
                        { id: "w10", target: "nose", native: "нос" },

                        { id: "w11", target: "head", native: "голова" },
                        { id: "w12", target: "back", native: "спина" },
                        { id: "w13", target: "stomach", native: "живот" },
                        { id: "w14", target: "water", native: "вода" },
                        { id: "w15", target: "tea", native: "чай" },

                        { id: "w16", target: "lemon", native: "лимон" },
                        { id: "w17", target: "rest", native: "отдыхать" },
                        { id: "w18", target: "drink", native: "пить" },
                        { id: "w19", target: "wake up", native: "просыпаться" },
                        { id: "w20", target: "walk", native: "идти пешком" },

                        { id: "w21", target: "hurt", native: "болеть" },
                        { id: "w22", target: "feel", native: "чувствовать" },
                        { id: "w23", target: "better", native: "лучше" },
                        { id: "w24", target: "stuffy", native: "заложенный" },
                        { id: "w25", target: "should", native: "следует" },

                        { id: "w26", target: "friendly", native: "дружелюбный" },
                        { id: "w27", target: "problem", native: "проблема" },
                        { id: "w28", target: "check", native: "проверять" },
                        { id: "w29", target: "give", native: "давать" },
                        { id: "w30", target: "drink water", native: "пить воду" },

                        { id: "w31", target: "feel tired", native: "чувствовать усталость" },
                        { id: "w32", target: "feel sick", native: "чувствовать себя больным" },
                        { id: "w33", target: "my head hurts", native: "моя голова болит" },
                        { id: "w34", target: "my throat hurts", native: "моё горло болит" },
                        { id: "w35", target: "stuffy nose", native: "заложенный нос" },

                        { id: "w36", target: "rest in bed", native: "отдыхать в кровати" },
                        { id: "w37", target: "drink tea", native: "пить чай" },
                        { id: "w38", target: "walk slowly", native: "идти медленно" },
                        { id: "w39", target: "not feel well", native: "чувствовать себя нехорошо" },
                        { id: "w40", target: "a little better", native: "немного лучше" },

                        { id: "w41", target: "friendly doctor", native: "дружелюбный врач" },
                        { id: "w42", target: "medicine", native: "лекарство" },
                        { id: "w43", target: "drink water", native: "пить воду" },
                        { id: "w44", target: "go back home", native: "вернуться домой" },
                        { id: "w45", target: "feel better", native: "чувствовать себя лучше" },

                        { id: "w46", target: "morning", native: "утро" },
                        { id: "w47", target: "evening", native: "вечер" },
                        { id: "w48", target: "today", native: "сегодня" },
                        { id: "w49", target: "water and tea", native: "вода и чай" },
                        { id: "w50", target: "headache and cold", native: "головная боль и простуда" }
                    ]
                }
                ,

                // 15. Планы + going to
                {
                    id: "plans_going_to",

                    rule: [
                        "going to: выражает планы и намерения; пример: I am going to travel tomorrow.",
                        "Выражения будущего: tomorrow(завтра), next week(на следующей неделе), next month(в следующем месяце)",
                        "Структура: I am going to + verb"
                    ].join("\n"),

                    title: "Планы + going to",
                    title_native: "Планы",
                    title_target: "Plans",

                    sentences: [
                        { target: "I am going to travel tomorrow.", native: "Я собираюсь поехать завтра." },
                        { target: "I have many plans.", native: "У меня много планов." },
                        { target: "I am going to visit my friend.", native: "Я собираюсь навестить своего друга." },
                        { target: "My friend lives in another city.", native: "Мой друг живёт в другом городе." },

                        { target: "I am going to take a train.", native: "Я собираюсь поехать на поезде." },
                        { target: "The train leaves in the morning.", native: "Поезд отправляется утром." },
                        { target: "I am going to wake up early.", native: "Я собираюсь проснуться рано." },
                        { target: "I am going to pack my bag tonight.", native: "Я собираюсь упаковать сумку сегодня вечером." },

                        { target: "I am going to take clothes and a book.", native: "Я собираюсь взять одежду и книгу." },
                        { target: "I am going to read on the train.", native: "Я собираюсь читать в поезде." },
                        { target: "The trip is going to be relaxing.", native: "Поездка будет расслабляющей." },
                        { target: "I like quiet trips.", native: "Мне нравятся тихие поездки." },

                        { target: "Next week I am going to start a new course.", native: "На следующей неделе я собираюсь начать новый курс." },
                        { target: "I am going to learn English.", native: "Я собираюсь учить английский." },
                        { target: "I am going to study every day.", native: "Я собираюсь учиться каждый день." },
                        { target: "My teacher is going to help me.", native: "Мой учитель собирается помочь мне." },

                        { target: "Next month I am going to visit my family.", native: "В следующем месяце я собираюсь навестить свою семью." },
                        { target: "We are going to have dinner together.", native: "Мы собираемся поужинать вместе." },
                        { target: "We are going to talk a lot.", native: "Мы собираемся много разговаривать." },
                        { target: "We are going to spend time in the garden.", native: "Мы собираемся провести время в саду." },

                        { target: "My sister is going to bake a cake.", native: "Моя сестра собирается испечь торт." },
                        { target: "My mother is going to make tea.", native: "Моя мама собирается приготовить чай." },
                        { target: "My father is going to play music.", native: "Мой папа собирается играть музыку." },
                        { target: "It is going to be a nice day.", native: "Это будет хороший день." },

                        { target: "I am going to rest on Sunday.", native: "Я собираюсь отдыхать в воскресенье." },
                        { target: "I am going to sleep a lot.", native: "Я собираюсь много спать." },
                        { target: "I am going to watch a movie.", native: "Я собираюсь смотреть фильм." },
                        { target: "I am going to cook dinner.", native: "Я собираюсь приготовить ужин." },

                        { target: "My plans are simple.", native: "Мои планы простые." },
                        { target: "I am going to enjoy my time.", native: "Я собираюсь наслаждаться своим временем." }
                    ],

                    words: [
                        { id: "w1", target: "going to", native: "собираться (что-то делать)" },
                        { id: "w2", target: "tomorrow", native: "завтра" },
                        { id: "w3", target: "next week", native: "на следующей неделе" },
                        { id: "w4", target: "next month", native: "в следующем месяце" },
                        { id: "w5", target: "today", native: "сегодня" },

                        { id: "w6", target: "travel", native: "путешествовать" },
                        { id: "w7", target: "visit", native: "навещать" },
                        { id: "w8", target: "take a train", native: "ехать на поезде" },
                        { id: "w9", target: "wake up", native: "просыпаться" },
                        { id: "w10", target: "pack", native: "собирать (вещи)" },

                        { id: "w11", target: "bag", native: "сумка" },
                        { id: "w12", target: "clothes", native: "одежда" },
                        { id: "w13", target: "book", native: "книга" },
                        { id: "w14", target: "read", native: "читать" },
                        { id: "w15", target: "relaxing", native: "расслабляющий" },

                        { id: "w16", target: "course", native: "курс" },
                        { id: "w17", target: "learning", native: "обучение" },
                        { id: "w18", target: "study", native: "учиться" },
                        { id: "w19", target: "teacher", native: "учитель" },
                        { id: "w20", target: "help", native: "помогать" },

                        { id: "w21", target: "family", native: "семья" },
                        { id: "w22", target: "dinner", native: "ужин" },
                        { id: "w23", target: "garden", native: "сад" },
                        { id: "w24", target: "spend time", native: "проводить время" },
                        { id: "w25", target: "talk", native: "разговаривать" },

                        { id: "w26", target: "bake", native: "печь" },
                        { id: "w27", target: "cake", native: "торт" },
                        { id: "w28", target: "make tea", native: "делать чай" },
                        { id: "w29", target: "play music", native: "играть музыку" },
                        { id: "w30", target: "nice", native: "хороший" },

                        { id: "w31", target: "rest", native: "отдыхать" },
                        { id: "w32", target: "sleep", native: "спать" },
                        { id: "w33", target: "watch a movie", native: "смотреть фильм" },
                        { id: "w34", target: "cook dinner", native: "готовить ужин" },
                        { id: "w35", target: "enjoy", native: "наслаждаться" },

                        { id: "w36", target: "plan", native: "план" },
                        { id: "w37", target: "simple", native: "простой" },
                        { id: "w38", target: "take clothes", native: "взять одежду" },
                        { id: "w39", target: "wake up early", native: "проснуться рано" },
                        { id: "w40", target: "pack my bag", native: "собрать мою сумку" },

                        { id: "w41", target: "visit my friend", native: "навестить друга" },
                        { id: "w42", target: "next", native: "следующий" },
                        { id: "w43", target: "going to visit", native: "собираться навестить" },
                        { id: "w44", target: "going to read", native: "собираться читать" },
                        { id: "w45", target: "going to rest", native: "собираться отдыхать" },

                        { id: "w46", target: "tonight", native: "сегодня вечером" },
                        { id: "w47", target: "early", native: "рано" },
                        { id: "w48", target: "city", native: "город" },
                        { id: "w49", target: "train", native: "поезд" },
                        { id: "w50", target: "enjoy my time", native: "наслаждаться своим временем" }
                    ]
                }

            ]
        },
        {
            id: "A2",
            title_native: "A2",
            title_target: "A2",
            texts: [

                // 1. Прошедшее время — Past Simple (регулярные/нерегулярные)
                {
                    id: "past_simple_basic",

                    rule: [
                        "Past Simple: did / didn’t + V1",
                        "Регулярные глаголы: worked, visited, watched",
                        "Нерегулярные глаголы: went, saw, ate"
                    ].join("\n"),

                    title: "Прошедшее время — Past Simple (регулярные/нерегулярные)",
                    title_native: "Прошедшее время: основы",
                    title_target: "Past Simple Basics",

                    sentences: [
                        { target: "Last weekend I visited my friend Anna.", native: "В прошлые выходные я навестил свою подругу Анну." },
                        { target: "She lives in a small town.", native: "Она живёт в маленьком городке." },
                        { target: "I went there by train.", native: "Я поехал туда на поезде." },
                        { target: "The train ride was long but comfortable.", native: "Поездка была долгой, но комфортной." },

                        { target: "I arrived in the morning.", native: "Я прибыл утром." },
                        { target: "Anna met me at the station.", native: "Анна встретила меня на станции." },
                        { target: "We walked to her house.", native: "Мы пошли пешком к её дому." },
                        { target: "We talked a lot on the way.", native: "Мы много разговаривали по дороге." },

                        { target: "Her family welcomed me warmly.", native: "Её семья тепло меня поприветствовала." },
                        { target: "We drank tea together.", native: "Мы вместе выпили чай." },
                        { target: "We ate a big breakfast.", native: "Мы съели большой завтрак." },
                        { target: "The food was delicious.", native: "Еда была вкусной." },

                        { target: "After breakfast we visited the town center.", native: "После завтрака мы посетили центр города." },
                        { target: "We walked around the old streets.", native: "Мы гуляли по старым улицам." },
                        { target: "We saw many interesting buildings.", native: "Мы увидели много интересных зданий." },
                        { target: "We took photos together.", native: "Мы сделали фотографии вместе." },

                        { target: "Then we went to the local museum.", native: "Затем мы пошли в местный музей." },
                        { target: "The museum had a new exhibition.", native: "В музее была новая выставка." },
                        { target: "We watched a short film about the town.", native: "Мы посмотрели короткий фильм о городе." },
                        { target: "I learned many new facts.", native: "Я узнал много новых фактов." },

                        { target: "In the afternoon we met Anna’s friends.", native: "Днём мы встретили друзей Анны." },
                        { target: "We sat in a small café.", native: "Мы сидели в маленьком кафе." },
                        { target: "We drank coffee and talked.", native: "Мы пили кофе и разговаривали." },
                        { target: "They asked me many questions.", native: "Они задавали мне много вопросов." },

                        { target: "We laughed a lot.", native: "Мы много смеялись." },
                        { target: "The atmosphere was friendly.", native: "Атмосфера была дружелюбной." },
                        { target: "We stayed there for two hours.", native: "Мы пробыли там два часа." },
                        { target: "Then we went to a park.", native: "Затем мы пошли в парк." },

                        { target: "The park was quiet and beautiful.", native: "Парк был тихим и красивым." },
                        { target: "We walked near the lake.", native: "Мы гуляли возле озера." },
                        { target: "The water looked calm.", native: "Вода выглядела спокойной." },
                        { target: "We fed the ducks.", native: "Мы кормили уток." },

                        { target: "In the evening we returned home.", native: "Вечером мы вернулись домой." },
                        { target: "We cooked dinner together.", native: "Мы приготовили ужин вместе." },
                        { target: "We listened to music.", native: "Мы слушали музыку." },
                        { target: "We talked about our plans.", native: "Мы говорили о наших планах." },

                        { target: "After dinner we watched a movie.", native: "После ужина мы посмотрели фильм." },
                        { target: "The movie was funny.", native: "Фильм был забавным." },
                        { target: "We enjoyed it very much.", native: "Он нам очень понравился." },
                        { target: "We went to bed late.", native: "Мы легли спать поздно." },

                        { target: "The next day I woke up early.", native: "На следующий день я проснулся рано." },
                        { target: "Anna made breakfast again.", native: "Анна снова приготовила завтрак." },
                        { target: "We ate pancakes.", native: "Мы ели блинчики." },
                        { target: "They tasted great.", native: "Они были очень вкусными." },

                        { target: "I packed my bag.", native: "Я собрал свою сумку." },
                        { target: "Anna walked with me to the station.", native: "Анна пошла со мной на станцию." },
                        { target: "We said goodbye.", native: "Мы попрощались." },
                        { target: "I took the train home.", native: "Я поехал домой на поезде." },

                        { target: "I thought about the weekend during the trip.", native: "Я думал о выходных во время поездки." },
                        { target: "I felt happy.", native: "Я чувствовал себя счастливым." },
                        { target: "It was a great weekend.", native: "Это были замечательные выходные." }
                    ],

                    words: [
                        { id: "w1", target: "visited", native: "навестил" },
                        { id: "w2", target: "went", native: "поехал" },
                        { id: "w3", target: "arrived", native: "прибыл" },
                        { id: "w4", target: "met", native: "встретил" },
                        { id: "w5", target: "walked", native: "гулял" },

                        { id: "w6", target: "talked", native: "разговаривал" },
                        { id: "w7", target: "drank", native: "пил" },
                        { id: "w8", target: "ate", native: "ел" },
                        { id: "w9", target: "watched", native: "смотрел" },
                        { id: "w10", target: "worked", native: "работал" },

                        { id: "w11", target: "saw", native: "увидел" },
                        { id: "w12", target: "took", native: "взял/сделал" },
                        { id: "w13", target: "learned", native: "узнал" },
                        { id: "w14", target: "asked", native: "спросил" },
                        { id: "w15", target: "laughed", native: "смеялся" },

                        { id: "w16", target: "stayed", native: "остался" },
                        { id: "w17", target: "returned", native: "вернулся" },
                        { id: "w18", target: "cooked", native: "готовил" },
                        { id: "w19", target: "listened", native: "слушал" },
                        { id: "w20", target: "enjoyed", native: "наслаждался" },

                        { id: "w21", target: "woke up", native: "проснулся" },
                        { id: "w22", target: "packed", native: "собрал" },
                        { id: "w23", target: "said goodbye", native: "попрощался" },
                        { id: "w24", target: "thought", native: "думал" },
                        { id: "w25", target: "felt", native: "чувствовал" },

                        { id: "w26", target: "weekend", native: "выходные" },
                        { id: "w27", target: "trip", native: "поездка" },
                        { id: "w28", target: "station", native: "станция" },
                        { id: "w29", target: "museum", native: "музей" },
                        { id: "w30", target: "breakfast", native: "завтрак" },

                        { id: "w31", target: "dinner", native: "ужин" },
                        { id: "w32", target: "evening", native: "вечер" },
                        { id: "w33", target: "morning", native: "утро" },
                        { id: "w34", target: "family", native: "семья" },
                        { id: "w35", target: "friends", native: "друзья" },

                        { id: "w36", target: "center", native: "центр" },
                        { id: "w37", target: "lake", native: "озеро" },
                        { id: "w38", target: "house", native: "дом" },
                        { id: "w39", target: "city", native: "город" },
                        { id: "w40", target: "food", native: "еда" },

                        { id: "w41", target: "quiet", native: "тихий" },
                        { id: "w42", target: "beautiful", native: "красивый" },
                        { id: "w43", target: "comfortable", native: "комфортный" },
                        { id: "w44", target: "warmly", native: "тепло" },
                        { id: "w45", target: "delicious", native: "вкусный" },

                        { id: "w46", target: "together", native: "вместе" },
                        { id: "w47", target: "question", native: "вопрос" },
                        { id: "w48", target: "plan", native: "план" },
                        { id: "w49", target: "photo", native: "фото" },
                        { id: "w50", target: "building", native: "здание" }
                    ]
                },
                // 2. Пересказ событий — последовательность действий
                {
                    id: "past_simple_story",

                    rule: [
                        "Past Simple для рассказа о прошедших событиях",
                        "Порядок действий: first, then, after that, finally"
                    ].join("\n"),

                    title: "Пересказ событий — последовательность действий",
                    title_native: "Рассказ о событиях",
                    title_target: "Telling a Past Story",

                    sentences: [
                        { target: "Last Saturday I had a very busy day.", native: "В прошлую субботу у меня был очень занятой день." },
                        { target: "First, I woke up earlier than usual.", native: "Сначала я проснулся раньше обычного." },
                        { target: "The sun was already bright.", native: "Солнце уже сияло ярко." },
                        { target: "I got out of bed and made my breakfast.", native: "Я встал с постели и приготовил себе завтрак." },

                        { target: "I ate toast and drank tea.", native: "Я съел тост и выпил чай." },
                        { target: "Then I cleaned my room.", native: "Затем я убрал свою комнату." },
                        { target: "I washed the dishes.", native: "Я помыл посуду." },
                        { target: "I vacuumed the floor.", native: "Я пропылесосил пол." },

                        { target: "After that, I left the house.", native: "После этого я вышел из дома." },
                        { target: "I went to the bus stop.", native: "Я пошёл на автобусную остановку." },
                        { target: "The bus arrived on time.", native: "Автобус прибыл вовремя." },
                        { target: "I took the bus to the city center.", native: "Я поехал на автобусе в центр города." },

                        { target: "I met my friend Tom there.", native: "Там я встретил своего друга Тома." },
                        { target: "We planned a long walk together.", native: "Мы запланировали долгую прогулку вместе." },
                        { target: "First, we visited a small café.", native: "Сначала мы посетили маленькое кафе." },
                        { target: "We drank coffee and talked about our week.", native: "Мы выпили кофе и поговорили о нашей неделе." },

                        { target: "Then we walked to the park.", native: "Затем мы пошли в парк." },
                        { target: "The park was full of people.", native: "Парк был полон людей." },
                        { target: "Children played on the playground.", native: "Дети играли на игровой площадке." },
                        { target: "We sat on a bench near the lake.", native: "Мы сели на скамейку возле озера." },

                        { target: "We watched the ducks swim.", native: "Мы смотрели, как плавают утки." },
                        { target: "After that, we went to the museum.", native: "После этого мы отправились в музей." },
                        { target: "The museum had a new art exhibition.", native: "В музее была новая художественная выставка." },
                        { target: "We looked at many paintings.", native: "Мы посмотрели много картин." },

                        { target: "I liked a painting of a mountain.", native: "Мне понравилась картина с горой." },
                        { target: "Tom liked a painting of a river.", native: "Тому понравилась картина с рекой." },
                        { target: "We talked about the artists.", native: "Мы поговорили об художниках." },
                        { target: "We took some photos.", native: "Мы сделали несколько фотографий." },

                        { target: "Then we left the museum and walked to a bookstore.", native: "Потом мы вышли из музея и пошли в книжный магазин." },
                        { target: "I bought a novel.", native: "Я купил роман." },
                        { target: "Tom bought a travel guide.", native: "Том купил туристический путеводитель." },
                        { target: "We spent a long time looking at books.", native: "Мы долго смотрели книги." },

                        { target: "After that, we ate lunch in a small restaurant.", native: "После этого мы пообедали в маленьком ресторане." },
                        { target: "I ordered soup.", native: "Я заказал суп." },
                        { target: "Tom ordered pasta.", native: "Том заказал пасту." },
                        { target: "The food tasted great.", native: "Еда была очень вкусной." },

                        { target: "Finally, we said goodbye.", native: "Наконец мы попрощались." },
                        { target: "I went back to the bus stop.", native: "Я вернулся на автобусную остановку." },
                        { target: "I took the bus home.", native: "Я поехал домой на автобусе." },
                        { target: "I arrived home tired but happy.", native: "Я приехал домой уставшим, но счастливым." },

                        { target: "In the evening I read my new book.", native: "Вечером я почитал свою новую книгу." },
                        { target: "I wrote about my day in my notebook.", native: "Я записал свой день в блокнот." },
                        { target: "Then I went to bed early.", native: "Потом я лёг спать рано." },
                        { target: "It was a good day.", native: "Это был хороший день." }
                    ],

                    words: [
                        { id: "w1", target: "first", native: "сначала" },
                        { id: "w2", target: "then", native: "затем" },
                        { id: "w3", target: "after that", native: "после этого" },
                        { id: "w4", target: "finally", native: "в конце концов" },
                        { id: "w5", target: "visited", native: "посетил" },

                        { id: "w6", target: "woke up", native: "проснулся" },
                        { id: "w7", target: "made", native: "сделал" },
                        { id: "w8", target: "ate", native: "ел" },
                        { id: "w9", target: "drank", native: "пил" },
                        { id: "w10", target: "cleaned", native: "убрал" },

                        { id: "w11", target: "washed", native: "помыли" },
                        { id: "w12", target: "vacuumed", native: "пропылесосил" },
                        { id: "w13", target: "left", native: "покинул" },
                        { id: "w14", target: "took", native: "взял/сел на" },
                        { id: "w15", target: "met", native: "встретил" },

                        { id: "w16", target: "walked", native: "гулял" },
                        { id: "w17", target: "talked", native: "разговаривал" },
                        { id: "w18", target: "sat", native: "сидел" },
                        { id: "w19", target: "watched", native: "смотрел" },
                        { id: "w20", target: "looked", native: "смотрели" },

                        { id: "w21", target: "painting", native: "картина" },
                        { id: "w22", target: "museum", native: "музей" },
                        { id: "w23", target: "bookstore", native: "книжный магазин" },
                        { id: "w24", target: "novel", native: "роман" },
                        { id: "w25", target: "guide", native: "путеводитель" },

                        { id: "w26", target: "ordered", native: "заказал" },
                        { id: "w27", target: "restaurant", native: "ресторан" },
                        { id: "w28", target: "bus stop", native: "автобусная остановка" },
                        { id: "w29", target: "arrived", native: "прибыл" },
                        { id: "w30", target: "notebook", native: "блокнот" },

                        { id: "w31", target: "busy", native: "занятой" },
                        { id: "w32", target: "bright", native: "яркий" },
                        { id: "w33", target: "together", native: "вместе" },
                        { id: "w34", target: "lake", native: "озеро" },
                        { id: "w35", target: "playground", native: "детская площадка" },

                        { id: "w36", target: "art", native: "искусство" },
                        { id: "w37", target: "photo", native: "фото" },
                        { id: "w38", target: "lunch", native: "обед" },
                        { id: "w39", target: "morning", native: "утро" },
                        { id: "w40", target: "evening", native: "вечер" },

                        { id: "w41", target: "center", native: "центр" },
                        { id: "w42", target: "city", native: "город" },
                        { id: "w43", target: "bench", native: "скамейка" },
                        { id: "w44", target: "river", native: "река" },
                        { id: "w45", target: "mountain", native: "гора" },

                        { id: "w46", target: "said goodbye", native: "попрощался" },
                        { id: "w47", target: "tired", native: "уставший" },
                        { id: "w48", target: "happy", native: "счастливый" },
                        { id: "w49", target: "week", native: "неделя" },
                        { id: "w50", target: "story", native: "история" }
                    ]
                },
                // 3. Сравнения — Comparative / Superlative
                {
                    id: "comparatives_superlatives",

                    rule: [
                        "Сравнительная степень: bigger, faster, more interesting",
                        "Превосходная степень: the biggest, the fastest, the most interesting"
                    ].join("\n"),

                    title: "Сравнения",
                    title_native: "Сравнительная и превосходная степени",
                    title_target: "Comparatives and Superlatives",

                    sentences: [
                        { target: "Last month my friend Tom and I visited three different cities.", native: "В прошлом месяце мы с другом Томом посетили три разных города." },
                        { target: "We wanted to compare them.", native: "Мы хотели сравнить их." },
                        { target: "The first city was small.", native: "Первый город был маленьким." },
                        { target: "It was smaller than our hometown.", native: "Он был меньше, чем наш родной город." },

                        { target: "The streets were quieter.", native: "Улицы были тише." },
                        { target: "The restaurants were cheaper.", native: "Рестораны были дешевле." },
                        { target: "The people were friendlier than we expected.", native: "Люди были дружелюбнее, чем мы ожидали." },
                        { target: "It was one of the nicest towns we visited.", native: "Это был один из самых приятных городков, которые мы посетили." },

                        { target: "Then we traveled to a second city.", native: "Затем мы поехали во второй город." },
                        { target: "It was bigger and busier.", native: "Он был больше и оживлённее." },
                        { target: "The buildings were taller.", native: "Здания были выше." },
                        { target: "The shops were more modern.", native: "Магазины были современнее." },

                        { target: "The food was better.", native: "Еда была лучше." },
                        { target: "The museum there was more interesting than the one in the first city.", native: "Музей там был интереснее, чем в первом городе." },
                        { target: "We spent more time there.", native: "Мы провели там больше времени." },
                        { target: "It was the most exciting part of our trip.", native: "Это была самая захватывающая часть нашего путешествия." },

                        { target: "Finally, we went to the third city.", native: "Наконец мы отправились в третий город." },
                        { target: "It was the biggest city of all.", native: "Это был самый большой город из всех." },
                        { target: "The streets were the busiest.", native: "Улицы были самыми оживлёнными." },
                        { target: "The traffic was the noisiest.", native: "Движение было самым шумным." },

                        { target: "But the park there was the most beautiful place.", native: "Но парк там был самым красивым местом." },
                        { target: "It was larger than the parks in the other cities.", native: "Он был больше, чем парки в других городах." },
                        { target: "It had the greenest trees.", native: "Там были самые зелёные деревья." },
                        { target: "We walked for hours.", native: "Мы гуляли часами." },

                        { target: "The river in the third city was wider.", native: "Река в третьем городе была шире." },
                        { target: "It was also cleaner.", native: "Она была также чище." },
                        { target: "The bridges were the longest we saw.", native: "Мосты были самыми длинными из тех, что мы видели." },
                        { target: "We took many photos.", native: "Мы сделали много фотографий." },

                        { target: "Tom liked the first city the most.", native: "Тому больше всего понравился первый город." },
                        { target: "He said it was quieter and safer.", native: "Он сказал, что он тише и безопаснее." },
                        { target: "I liked the second city more.", native: "Мне больше понравился второй город." },
                        { target: "I found it more comfortable and more fun.", native: "Он показался мне более комфортным и более весёлым." },

                        { target: "We agreed that all three cities were different.", native: "Мы согласились, что все три города были разными." },
                        { target: "Each city had something special.", native: "Каждый город имел что-то особенное." },
                        { target: "The first was the quietest.", native: "Первый был самым тихим." },
                        { target: "The second was the most interesting.", native: "Второй был самым интересным." },

                        { target: "The third was the largest.", native: "Третий был самым большим." },
                        { target: "Our trip became longer than we planned.", native: "Наше путешествие стало длиннее, чем мы планировали." },
                        { target: "But it was one of the best experiences we had.", native: "Но это был один из лучших наших опытов." },
                        { target: "We learned a lot from the trip.", native: "Мы многому научились из этого путешествия." }
                    ],

                    words: [
                        { id: "w1", target: "bigger", native: "больше" },
                        { id: "w2", target: "smaller", native: "меньше" },
                        { id: "w3", target: "quieter", native: "тише" },
                        { id: "w4", target: "cheaper", native: "дешевле" },
                        { id: "w5", target: "friendlier", native: "дружелюбнее" },

                        { id: "w6", target: "nicest", native: "самый приятный" },
                        { id: "w7", target: "busier", native: "оживлённее" },
                        { id: "w8", target: "taller", native: "выше" },
                        { id: "w9", target: "more modern", native: "современнее" },
                        { id: "w10", target: "better", native: "лучше" },

                        { id: "w11", target: "more interesting", native: "интереснее" },
                        { id: "w12", target: "most interesting", native: "самый интересный" },
                        { id: "w13", target: "most exciting", native: "самый захватывающий" },
                        { id: "w14", target: "biggest", native: "самый большой" },
                        { id: "w15", target: "busiest", native: "самый оживлённый" },

                        { id: "w16", target: "noisiest", native: "самый шумный" },
                        { id: "w17", target: "most beautiful", native: "самый красивый" },
                        { id: "w18", target: "greenest", native: "самый зелёный" },
                        { id: "w19", target: "wider", native: "шире" },
                        { id: "w20", target: "cleaner", native: "чище" },

                        { id: "w21", target: "longest", native: "самый длинный" },
                        { id: "w22", target: "safer", native: "безопаснее" },
                        { id: "w23", target: "more comfortable", native: "комфортнее" },
                        { id: "w24", target: "more fun", native: "веселее" },
                        { id: "w25", target: "different", native: "разный" },

                        { id: "w26", target: "city", native: "город" },
                        { id: "w27", target: "trip", native: "путешествие" },
                        { id: "w28", target: "experience", native: "опыт" },
                        { id: "w29", target: "street", native: "улица" },
                        { id: "w30", target: "restaurant", native: "ресторан" },

                        { id: "w31", target: "building", native: "здание" },
                        { id: "w32", target: "shop", native: "магазин" },
                        { id: "w33", target: "park", native: "парк" },
                        { id: "w34", target: "lake", native: "озеро" },
                        { id: "w35", target: "bridge", native: "мост" },

                        { id: "w36", target: "painting", native: "картина" },
                        { id: "w37", target: "photo", native: "фото" },
                        { id: "w38", target: "river", native: "река" },
                        { id: "w39", target: "modern", native: "современный" },
                        { id: "w40", target: "exciting", native: "захватывающий" },

                        { id: "w41", target: "quiet", native: "тихий" },
                        { id: "w42", target: "busy", native: "оживлённый" },
                        { id: "w43", target: "big", native: "большой" },
                        { id: "w44", target: "small", native: "маленький" },
                        { id: "w45", target: "beautiful", native: "красивый" },

                        { id: "w46", target: "compare", native: "сравнивать" },
                        { id: "w47", target: "visit", native: "посещать" },
                        { id: "w48", target: "plan", native: "планировать" },
                        { id: "w49", target: "agree", native: "соглашаться" },
                        { id: "w50", target: "special", native: "особенный" }
                    ]
                },
                // 4. Модальные глаголы — must / have to
                {
                    id: "must_have_to",

                    rule: [
                        "must — личная необходимость",
                        "have to — внешняя необходимость"
                    ].join("\n"),

                    title: "Модальные глаголы — must / have to",
                    title_native: "Must / Have to",
                    title_target: "Must vs Have to",

                    sentences: [
                        { target: "Last Monday I had a very busy day at work.", native: "В прошлый понедельник у меня был очень занятый день на работе." },
                        { target: "I had to wake up early because I had a meeting.", native: "Мне пришлось проснуться рано, потому что у меня была встреча." },
                        { target: "I did not want to get up, but I had to.", native: "Я не хотел вставать, но мне пришлось." },
                        { target: "I must drink coffee in the morning.", native: "Я должен выпить кофе утром." },

                        { target: "I had to catch the bus at seven.", native: "Мне нужно было успеть на автобус в семь." },
                        { target: "The bus was full, so I had to stand.", native: "Автобус был полным, поэтому мне пришлось стоять." },
                        { target: "I must be on time for my meetings.", native: "Я должен быть вовремя на своих встречах." },
                        { target: "I arrived at the office at eight.", native: "Я прибыл в офис в восемь." },

                        { target: "First, I had to check my emails.", native: "Сначала мне нужно было проверить свои письма." },
                        { target: "I had to answer many questions.", native: "Мне пришлось ответить на много вопросов." },
                        { target: "I must focus when I work.", native: "Я должен концентрироваться, когда я работаю." },
                        { target: "My boss asked me to prepare a report.", native: "Мой начальник попросил меня подготовить отчёт." },

                        { target: "I had to finish the report before lunch.", native: "Мне нужно было закончить отчёт до обеда." },
                        { target: "I must write clearly so everyone understands.", native: "Я должен писать ясно, чтобы все понимали." },
                        { target: "I worked fast, because I had to join another meeting.", native: "Я работал быстро, потому что мне нужно было присоединиться к другой встрече." },
                        { target: "The meeting was long.", native: "Встреча была долгой." },

                        { target: "After that, I had to call our clients.", native: "После этого мне нужно было позвонить нашим клиентам." },
                        { target: "I must be polite when I speak with clients.", native: "Я должен быть вежливым, когда разговариваю с клиентами." },
                        { target: "One client had a problem.", native: "У одного клиента была проблема." },
                        { target: "I had to help him solve it.", native: "Мне пришлось помочь ему решить её." },

                        { target: "I must stay calm in difficult situations.", native: "Я должен сохранять спокойствие в трудных ситуациях." },
                        { target: "At one o’clock I had to go to lunch.", native: "В час дня мне нужно было пойти на обед." },
                        { target: "I must eat something healthy.", native: "Я должен съесть что-то полезное." },
                        { target: "I ate soup and salad.", native: "Я ел суп и салат." },

                        { target: "After lunch I had to finish a presentation.", native: "После обеда мне нужно было закончить презентацию." },
                        { target: "I must check every slide carefully.", native: "Я должен внимательно проверить каждый слайд." },
                        { target: "Then I had to join a video call.", native: "Затем мне нужно было присоединиться к видеозвонку." },
                        { target: "My internet was slow, so I had to reconnect.", native: "Мой интернет был медленным, поэтому мне пришлось переподключиться." },

                        { target: "In the evening I had to stay late at the office.", native: "Вечером мне пришлось задержаться в офисе." },
                        { target: "I must finish my tasks before I go home.", native: "Я должен закончить задачи перед тем, как идти домой." },
                        { target: "I finally finished at seven.", native: "Наконец я закончил в семь." },
                        { target: "I had to take a taxi because the buses were full.", native: "Мне пришлось взять такси, потому что автобусы были переполнены." },

                        { target: "At home I must relax.", native: "Дома я должен расслабиться." },
                        { target: "I made dinner.", native: "Я приготовил ужин." },
                        { target: "I watched a short film.", native: "Я посмотрел короткий фильм." },
                        { target: "I felt tired after the long day.", native: "Я чувствовал себя уставшим после долгого дня." },

                        { target: "Before bed I had to plan the next day.", native: "Перед сном мне нужно было спланировать следующий день." },
                        { target: "I must write a list to stay organized.", native: "Я должен написать список, чтобы оставаться организованным." },
                        { target: "Finally, I went to sleep.", native: "Наконец я лёг спать." },
                        { target: "It was a productive day.", native: "Это был продуктивный день." }
                    ],

                    words: [
                        { id: "w1", target: "must", native: "должен (личная необходимость)" },
                        { id: "w2", target: "have to", native: "вынужден (внешняя необходимость)" },
                        { id: "w3", target: "had to", native: "пришлось" },
                        { id: "w4", target: "must be", native: "должен быть" },
                        { id: "w5", target: "must do", native: "должен сделать" },

                        { id: "w6", target: "report", native: "отчет" },
                        { id: "w7", target: "presentation", native: "презентация" },
                        { id: "w8", target: "meeting", native: "встреча" },
                        { id: "w9", target: "client", native: "клиент" },
                        { id: "w10", target: "boss", native: "начальник" },

                        { id: "w11", target: "answer", native: "отвечать" },
                        { id: "w12", target: "solve", native: "решать" },
                        { id: "w13", target: "prepare", native: "готовить" },
                        { id: "w14", target: "check", native: "проверять" },
                        { id: "w15", target: "focus", native: "концентрироваться" },

                        { id: "w16", target: "wake up", native: "просыпаться" },
                        { id: "w17", target: "catch", native: "успеть (на транспорт)" },
                        { id: "w18", target: "arrive", native: "прибывать" },
                        { id: "w19", target: "stay", native: "оставаться" },
                        { id: "w20", target: "relax", native: "расслабляться" },

                        { id: "w21", target: "healthy", native: "полезный" },
                        { id: "w22", target: "organized", native: "организованный" },
                        { id: "w23", target: "busy", native: "занятой" },
                        { id: "w24", target: "tired", native: "уставший" },
                        { id: "w25", target: "productive", native: "продуктивный" },

                        { id: "w26", target: "office", native: "офис" },
                        { id: "w27", target: "bus", native: "автобус" },
                        { id: "w28", target: "taxi", native: "такси" },
                        { id: "w29", target: "internet", native: "интернет" },
                        { id: "w30", target: "film", native: "фильм" },

                        { id: "w31", target: "plan", native: "планировать" },
                        { id: "w32", target: "write", native: "писать" },
                        { id: "w33", target: "list", native: "список" },
                        { id: "w34", target: "email", native: "электронное письмо" },
                        { id: "w35", target: "question", native: "вопрос" },

                        { id: "w36", target: "help", native: "помогать" },
                        { id: "w37", target: "understand", native: "понимать" },
                        { id: "w38", target: "speak", native: "говорить" },
                        { id: "w39", target: "cook", native: "готовить" },
                        { id: "w40", target: "eat", native: "есть" },

                        { id: "w41", target: "drink", native: "пить" },
                        { id: "w42", target: "early", native: "рано" },
                        { id: "w43", target: "late", native: "поздно" },
                        { id: "w44", target: "slide", native: "слайд" },
                        { id: "w45", target: "task", native: "задача" },

                        { id: "w46", target: "problem", native: "проблема" },
                        { id: "w47", target: "solution", native: "решение" },
                        { id: "w48", target: "call", native: "звонок" },
                        { id: "w49", target: "day", native: "день" },
                        { id: "w50", target: "home", native: "дом" }
                    ]
                },
                // 5. Планы и надежды — Future: will
                {
                    id: "future_will",

                    rule: [
                        "will — решение в момент речи",
                        "Структуры: I think…, I hope…, I’m sure…"
                    ].join("\n"),

                    title: "Планы и надежды — Future: will",
                    title_native: "Планы и надежды",
                    title_target: "Future with Will",

                    sentences: [
                        { target: "Next year I will start a new chapter in my life.", native: "В следующем году я начну новую главу в своей жизни." },
                        { target: "I think it will be exciting.", native: "Я думаю, это будет увлекательно." },
                        { target: "I hope I will learn many new things.", native: "Я надеюсь, что я узнаю много нового." },
                        { target: "I’m sure I will grow as a person.", native: "Я уверена, что я вырасту как личность." },

                        { target: "Tomorrow I will make a plan for the year.", native: "Завтра я составлю план на год." },
                        { target: "I think I will write down my goals.", native: "Я думаю, я запишу свои цели." },
                        { target: "I will try to be realistic.", native: "Я постараюсь быть реалистичной." },
                        { target: "I will also dream big.", native: "Я также буду мечтать масштабно." },

                        { target: "Next week I will start exercising again.", native: "На следующей неделе я снова начну заниматься спортом." },
                        { target: "I think exercise will make me feel better.", native: "Я думаю, спорт поможет мне чувствовать себя лучше." },
                        { target: "I will go for long walks.", native: "Я буду ходить на долгие прогулки." },
                        { target: "Sometimes I will run a little.", native: "Иногда я немного побегаю." },

                        { target: "I will also cook healthier food.", native: "Я также буду готовить более полезную еду." },
                        { target: "I hope I will have more energy.", native: "Я надеюсь, у меня будет больше энергии." },
                        { target: "I will drink more water.", native: "Я буду пить больше воды." },
                        { target: "I will try to sleep eight hours every night.", native: "Я постараюсь спать восемь часов каждую ночь." },

                        { target: "This summer I will travel somewhere new.", native: "Этим летом я поеду куда-то в новое место." },
                        { target: "I think I will visit a warm country.", native: "Я думаю, что посещу тёплую страну." },
                        { target: "I will swim in the sea.", native: "Я буду плавать в море." },
                        { target: "I will take many photos.", native: "Я сделаю много фотографий." },

                        { target: "I hope I will meet interesting people.", native: "Я надеюсь, что встречу интересных людей." },
                        { target: "I will try new food.", native: "Я попробую новую еду." },
                        { target: "I think the trip will inspire me.", native: "Я думаю, путешествие меня вдохновит." },
                        { target: "I will write about it in my diary.", native: "Я напишу об этом в своём дневнике." },

                        { target: "My family will support me.", native: "Моя семья будет поддерживать меня." },
                        { target: "My friends will visit me sometimes.", native: "Мои друзья будут иногда навещать меня." },
                        { target: "We will spend good time together.", native: "Мы будем хорошо проводить время вместе." },
                        { target: "We will celebrate my success.", native: "Мы будем праздновать мои успехи." },

                        { target: "One day I will start a big project.", native: "Однажды я начну большой проект." },
                        { target: "I think it will take a lot of time.", native: "Я думаю, это займёт много времени." },
                        { target: "But I’m sure I will finish it.", native: "Но я уверена, что закончу его." },
                        { target: "I will not give up.", native: "Я не сдамся." },

                        { target: "In the evening I will relax.", native: "Вечером я буду отдыхать." },
                        { target: "I will watch a movie.", native: "Я посмотрю фильм." },
                        { target: "I think the movie will be funny.", native: "Я думаю, фильм будет забавным." },
                        { target: "After that I will read a book.", native: "После этого я почитаю книгу." },

                        { target: "Before bed I will think about my goals.", native: "Перед сном я подумаю о своих целях." },
                        { target: "I hope I will stay motivated.", native: "Я надеюсь, что останусь мотивированной." },
                        { target: "I will try to do my best every day.", native: "Я постараюсь выкладываться каждый день." },
                        { target: "My future will be bright.", native: "Моё будущее будет светлым." }
                    ],

                    words: [
                        { id: "w1", target: "will", native: "будет / буду" },
                        { id: "w2", target: "I think", native: "я думаю" },
                        { id: "w3", target: "I hope", native: "я надеюсь" },
                        { id: "w4", target: "I’m sure", native: "я уверена" },
                        { id: "w5", target: "decide", native: "решать" },

                        { id: "w6", target: "plan", native: "план" },
                        { id: "w7", target: "goal", native: "цель" },
                        { id: "w8", target: "dream", native: "мечтать" },
                        { id: "w9", target: "exercise", native: "заниматься спортом" },
                        { id: "w10", target: "walk", native: "гулять" },

                        { id: "w11", target: "run", native: "бегать" },
                        { id: "w12", target: "healthy", native: "полезный" },
                        { id: "w13", target: "energy", native: "энергия" },
                        { id: "w14", target: "sleep", native: "спать" },
                        { id: "w15", target: "travel", native: "путешествовать" },

                        { id: "w16", target: "sea", native: "море" },
                        { id: "w17", target: "photo", native: "фото" },
                        { id: "w18", target: "meet", native: "встречать" },
                        { id: "w19", target: "inspire", native: "вдохновлять" },
                        { id: "w20", target: "write", native: "писать" },

                        { id: "w21", target: "diary", native: "дневник" },
                        { id: "w22", target: "support", native: "поддерживать" },
                        { id: "w23", target: "celebrate", native: "праздновать" },
                        { id: "w24", target: "project", native: "проект" },
                        { id: "w25", target: "finish", native: "заканчивать" },

                        { id: "w26", target: "give up", native: "сдаваться" },
                        { id: "w27", target: "relax", native: "расслабляться" },
                        { id: "w28", target: "movie", native: "фильм" },
                        { id: "w29", target: "funny", native: "забавный" },
                        { id: "w30", target: "book", native: "книга" },

                        { id: "w31", target: "future", native: "будущее" },
                        { id: "w32", target: "bright", native: "светлый" },
                        { id: "w33", target: "tomorrow", native: "завтра" },
                        { id: "w34", target: "next week", native: "на следующей неделе" },
                        { id: "w35", target: "next year", native: "в следующем году" },

                        { id: "w36", target: "cook", native: "готовить" },
                        { id: "w37", target: "water", native: "вода" },
                        { id: "w38", target: "food", native: "еда" },
                        { id: "w39", target: "energy", native: "энергия" },
                        { id: "w40", target: "success", native: "успех" },

                        { id: "w41", target: "write down", native: "записывать" },
                        { id: "w42", target: "big", native: "большой" },
                        { id: "w43", target: "learn", native: "учиться / узнавать" },
                        { id: "w44", target: "hope", native: "надежда" },
                        { id: "w45", target: "sure", native: "уверенный" },

                        { id: "w46", target: "try", native: "пытаться" },
                        { id: "w47", target: "stay", native: "оставаться" },
                        { id: "w48", target: "motivation", native: "мотивация" },
                        { id: "w49", target: "country", native: "страна" },
                        { id: "w50", target: "people", native: "люди" }
                    ]
                },
                // ⚡ 16. Present Continuous — действия, происходящие сейчас
                {
                    id: "present_continuous_now",

                    rule: [
                        "Present Continuous: am/is/are + Ving",
                        "Использование: действие происходит прямо сейчас",
                        "Пример: I am reading. She is cooking."
                    ].join("\n"),

                    title: "Present Continuous — действия, происходящие сейчас",
                    title_native: "Настоящее продолженное время",
                    title_target: "Present Continuous (Now)",

                    sentences: [
                        { target: "Right now I am sitting in a small café.", native: "Прямо сейчас я сижу в небольшом кафе." },
                        { target: "I am drinking a cup of coffee.", native: "Я пью чашку кофе." },
                        { target: "I am looking at the people around me.", native: "Я смотрю на людей вокруг себя." },
                        { target: "Many people are working on their laptops.", native: "Многие люди работают за своими ноутбуками." },

                        { target: "A woman is reading a book.", native: "Женщина читает книгу." },
                        { target: "A man is talking on the phone.", native: "Мужчина разговаривает по телефону." },
                        { target: "Two students are studying together.", native: "Двое студентов занимаются вместе." },
                        { target: "They are laughing quietly.", native: "Они тихо смеются." },

                        { target: "The barista is making fresh coffee.", native: "Бариста готовит свежий кофе." },
                        { target: "He is smiling at the customers.", native: "Он улыбается посетителям." },
                        { target: "He is cleaning the counter now.", native: "Сейчас он убирает стойку." },
                        { target: "He is working very fast today.", native: "Сегодня он работает очень быстро." },

                        { target: "Outside, cars are moving slowly.", native: "Снаружи машины движутся медленно." },
                        { target: "People are walking along the street.", native: "Люди идут по улице." },
                        { target: "Some tourists are taking photos.", native: "Некоторые туристы делают фотографии." },
                        { target: "A child is eating ice cream.", native: "Ребёнок ест мороженое." },

                        { target: "Right now my friend Anna is calling me.", native: "Прямо сейчас мне звонит моя подруга Анна." },
                        { target: "She is asking where I am.", native: "Она спрашивает, где я." },
                        { target: "I am telling her that I am in the café.", native: "Я говорю ей, что нахожусь в кафе." },
                        { target: "She is coming to join me.", native: "Она идёт, чтобы присоединиться ко мне." },

                        { target: "While I am waiting, I am checking my messages.", native: "Пока я жду, я проверяю свои сообщения." },
                        { target: "My colleagues are writing to me now.", native: "Мои коллеги сейчас пишут мне." },
                        { target: "They are working on a project.", native: "Они работают над проектом." },
                        { target: "They are asking for my help.", native: "Они просят моей помощи." },

                        { target: "I am writing a quick answer.", native: "Я пишу быстрый ответ." },
                        { target: "I am explaining what to do.", native: "Я объясняю, что нужно делать." },
                        { target: "I am sending the message.", native: "Я отправляю сообщение." },
                        { target: "Now I am closing my phone.", native: "Сейчас я закрываю свой телефон." },

                        { target: "Anna is arriving at the café.", native: "Анна прибывает в кафе." },
                        { target: "She is smiling at me.", native: "Она улыбается мне." },
                        { target: "She is putting her bag on the chair.", native: "Она кладёт свою сумку на стул." },
                        { target: "She is taking off her coat.", native: "Она снимает пальто." },

                        { target: "We are talking about our day.", native: "Мы говорим о нашем дне." },
                        { target: "We are planning what to do next.", native: "Мы планируем, что делать дальше." },
                        { target: "Anna is telling me about her work.", native: "Анна рассказывает мне о своей работе." },
                        { target: "She is working on a new project now.", native: "Она сейчас работает над новым проектом." },

                        { target: "She is learning new skills.", native: "Она изучает новые навыки." },
                        { target: "She is taking an online course.", native: "Она проходит онлайн-курс." },
                        { target: "I am listening to her with interest.", native: "Я слушаю её с интересом." },
                        { target: "We are laughing about something funny.", native: "Мы смеёмся из-за чего-то смешного." },

                        { target: "Right now the café is getting busier.", native: "Прямо сейчас кафе становится более оживлённым." },
                        { target: "More people are coming in.", native: "Входит больше людей." },
                        { target: "They are looking for free tables.", native: "Они ищут свободные столики." },
                        { target: "The baristas are working harder.", native: "Бариста работают усерднее." },

                        { target: "Anna and I are finishing our drinks.", native: "Мы с Анной заканчиваем свои напитки." },
                        { target: "We are putting on our coats.", native: "Мы надеваем свои пальто." },
                        { target: "We are leaving the café now.", native: "Мы выходим из кафе сейчас." },
                        { target: "We are walking into the cool evening air.", native: "Мы выходим в прохладный вечерний воздух." }
                    ],

                    words: [
                        { id: "w1", target: "am sitting", native: "сижу" },
                        { id: "w2", target: "am drinking", native: "пью" },
                        { id: "w3", target: "am looking", native: "смотрю" },
                        { id: "w4", target: "are working", native: "работают" },
                        { id: "w5", target: "is reading", native: "читает" },

                        { id: "w6", target: "is talking", native: "разговаривает" },
                        { id: "w7", target: "are studying", native: "занимаются" },
                        { id: "w8", target: "are laughing", native: "смеются" },
                        { id: "w9", target: "is making", native: "готовит" },
                        { id: "w10", target: "is smiling", native: "улыбается" },

                        { id: "w11", target: "is cleaning", native: "убирает" },
                        { id: "w12", target: "are moving", native: "движутся" },
                        { id: "w13", target: "are walking", native: "идут" },
                        { id: "w14", target: "are taking photos", native: "делают фотографии" },
                        { id: "w15", target: "is eating", native: "ест" },

                        { id: "w16", target: "is calling", native: "звонит" },
                        { id: "w17", target: "is asking", native: "спрашивает" },
                        { id: "w18", target: "am telling", native: "говорю" },
                        { id: "w19", target: "is coming", native: "идёт" },
                        { id: "w20", target: "am checking", native: "проверяю" },

                        { id: "w21", target: "are writing", native: "пишут" },
                        { id: "w22", target: "are asking", native: "просят" },
                        { id: "w23", target: "am writing", native: "пишу" },
                        { id: "w24", target: "am explaining", native: "объясняю" },
                        { id: "w25", target: "am sending", native: "отправляю" },

                        { id: "w26", target: "is arriving", native: "прибывает" },
                        { id: "w27", target: "is putting", native: "кладёт" },
                        { id: "w28", target: "is taking off", native: "снимает" },
                        { id: "w29", target: "are planning", native: "планируем" },
                        { id: "w30", target: "is telling", native: "рассказывает" },

                        { id: "w31", target: "is working", native: "работает" },
                        { id: "w32", target: "is learning", native: "изучает" },
                        { id: "w33", target: "is taking", native: "проходит" },
                        { id: "w34", target: "am listening", native: "слушаю" },
                        { id: "w35", target: "are laughing", native: "смеёмся" },

                        { id: "w36", target: "is getting", native: "становится" },
                        { id: "w37", target: "are coming", native: "приходят" },
                        { id: "w38", target: "are looking", native: "ищут" },
                        { id: "w39", target: "are working", native: "работают" },
                        { id: "w40", target: "are finishing", native: "заканчиваем" },

                        { id: "w41", target: "are putting on", native: "надеваем" },
                        { id: "w42", target: "are leaving", native: "уходим" },
                        { id: "w43", target: "are walking", native: "идём" },
                        { id: "w44", target: "café", native: "кафе" },
                        { id: "w45", target: "barista", native: "бариста" },

                        { id: "w46", target: "customer", native: "клиент" },
                        { id: "w47", target: "message", native: "сообщение" },
                        { id: "w48", target: "project", native: "проект" },
                        { id: "w49", target: "street", native: "улица" },
                        { id: "w50", target: "evening", native: "вечер" }
                    ]
                },
                // ⚡ 17. Past Continuous — действие в процессе в прошлом
                {
                    id: "past_continuous",

                    rule: [
                        "Past Continuous: was/were + Ving",
                        "Использование: действие было в процессе в конкретный момент времени",
                        "Пример: I was reading at 8 pm. They were working yesterday evening."
                    ].join("\n"),

                    title: "Past Continuous — действие в процессе в прошлом",
                    title_native: "Прошедшее продолженное время",
                    title_target: "Past Continuous",

                    sentences: [
                        { target: "Last Friday evening I was sitting at home.", native: "В прошлую пятницу вечером я сидел дома." },
                        { target: "I was watching a movie on my laptop.", native: "Я смотрел фильм на ноутбуке." },
                        { target: "It was raining outside.", native: "На улице шёл дождь." },
                        { target: "The wind was blowing strongly.", native: "Ветер сильно дул." },

                        { target: "At seven o’clock my friend Anna was calling me.", native: "В семь часов моя подруга Анна звонила мне." },
                        { target: "I was not hearing the phone at first.", native: "Сначала я не слышал звонок." },
                        { target: "I was turning up the volume of the movie.", native: "Я увеличивал громкость фильма." },
                        { target: "Finally I heard the call.", native: "Наконец я услышал звонок." },

                        { target: "Anna was asking me for help.", native: "Анна спрашивала меня о помощи." },
                        { target: "She was cooking dinner and needed advice.", native: "Она готовила ужин и нуждалась в совете." },
                        { target: "Her soup was boiling too fast.", native: "Её суп кипел слишком быстро." },
                        { target: "Her dog was barking loudly.", native: "Её собака громко лаяла." },

                        { target: "While she was talking, I was writing notes.", native: "Пока она говорила, я записывал заметки." },
                        { target: "I was trying to explain what to do.", native: "Я пытался объяснить, что нужно делать." },
                        { target: "She was listening carefully.", native: "Она слушала внимательно." },
                        { target: "Her dinner was getting better.", native: "Её ужин становился лучше." },

                        { target: "At the same time her brother was playing video games.", native: "В то же время её брат играл в видеоигры." },
                        { target: "He was shouting at the screen.", native: "Он кричал на экран." },
                        { target: "The dog was running around the table.", native: "Собака бегала вокруг стола." },
                        { target: "The phone was ringing again.", native: "Телефон снова звонил." },

                        { target: "While all this was happening, I was preparing my own dinner.", native: "Пока всё это происходило, я готовил свой собственный ужин." },
                        { target: "I was cutting vegetables.", native: "Я резал овощи." },
                        { target: "The water was heating on the stove.", native: "Вода нагревалась на плите." },
                        { target: "The radio was playing softly.", native: "Радио тихо играло." },

                        { target: "At eight o’clock I was setting the table.", native: "В восемь часов я накрывал на стол." },
                        { target: "My neighbors were talking in the hallway.", native: "Мои соседи разговаривали в коридоре." },
                        { target: "A baby was crying upstairs.", native: "Наверху плакал ребёнок." },
                        { target: "Someone was opening a window.", native: "Кто-то открывал окно." },

                        { target: "While I was eating, Anna was sending me photos of her dinner.", native: "Пока я ел, Анна отправляла мне фотографии своего ужина." },
                        { target: "She was smiling proudly.", native: "Она гордо улыбалась." },
                        { target: "Her brother was still playing games.", native: "Её брат всё ещё играл в игры." },
                        { target: "The dog was sleeping after all the noise.", native: "Собака спала после всего шума." },

                        { target: "At nine I was washing the dishes.", native: "В девять я мыл посуду." },
                        { target: "I was thinking about my day.", native: "Я думал о своём дне." },
                        { target: "I was feeling tired but calm.", native: "Я чувствовал себя уставшим, но спокойным." },
                        { target: "The rain was slowing down outside.", native: "Дождь снаружи ослабевал." },

                        { target: "At ten o’clock I was reading a book.", native: "В десять часов я читал книгу." },
                        { target: "My cat was sleeping next to me.", native: "Моя кошка спала рядом со мной." },
                        { target: "My phone was charging.", native: "Мой телефон заряжался." },
                        { target: "The movie was still paused on the screen.", native: "Фильм всё ещё был на паузе на экране." },

                        { target: "Finally, I was turning off the lights.", native: "В конце концов я выключал свет." },
                        { target: "I was getting ready for bed.", native: "Я готовился ко сну." },
                        { target: "While I was lying down, the rain was starting again.", native: "Когда я ложился, дождь снова начинался." },
                        { target: "I was falling asleep slowly.", native: "Я медленно засыпал." }
                    ],

                    words: [
                        { id: "w1", target: "was watching", native: "смотрел" },
                        { id: "w2", target: "was raining", native: "шёл дождь" },
                        { id: "w3", target: "was blowing", native: "дул" },
                        { id: "w4", target: "was calling", native: "звонила" },
                        { id: "w5", target: "was hearing", native: "слышал" },

                        { id: "w6", target: "was turning up", native: "увеличивал" },
                        { id: "w7", target: "was asking", native: "спрашивала" },
                        { id: "w8", target: "was cooking", native: "готовила" },
                        { id: "w9", target: "was boiling", native: "кипел" },
                        { id: "w10", target: "was barking", native: "лаяла" },

                        { id: "w11", target: "was writing", native: "писал" },
                        { id: "w12", target: "was trying", native: "пытался" },
                        { id: "w13", target: "was listening", native: "слушала" },
                        { id: "w14", target: "was getting", native: "становился" },
                        { id: "w15", target: "was playing", native: "играл" },

                        { id: "w16", target: "was shouting", native: "кричал" },
                        { id: "w17", target: "was running", native: "бегала" },
                        { id: "w18", target: "was ringing", native: "звонил" },
                        { id: "w19", target: "was preparing", native: "готовил" },
                        { id: "w20", target: "was cutting", native: "резал" },

                        { id: "w21", target: "was heating", native: "нагревалась" },
                        { id: "w22", target: "was playing", native: "играло" },
                        { id: "w23", target: "was setting", native: "накрывал" },
                        { id: "w24", target: "were talking", native: "разговаривали" },
                        { id: "w25", target: "was crying", native: "плакал" },

                        { id: "w26", target: "was opening", native: "открывал" },
                        { id: "w27", target: "was sending", native: "отправляла" },
                        { id: "w28", target: "was smiling", native: "улыбалась" },
                        { id: "w29", target: "was sleeping", native: "спала" },
                        { id: "w30", target: "was eating", native: "ел" },

                        { id: "w31", target: "was washing", native: "мыл" },
                        { id: "w32", target: "was thinking", native: "думал" },
                        { id: "w33", target: "was feeling", native: "чувствовал" },
                        { id: "w34", target: "was slowing down", native: "ослабевал" },
                        { id: "w35", target: "was reading", native: "читал" },

                        { id: "w36", target: "was charging", native: "заряжался" },
                        { id: "w37", target: "was paused", native: "был на паузе" },
                        { id: "w38", target: "was turning off", native: "выключал" },
                        { id: "w39", target: "was getting ready", native: "готовился" },
                        { id: "w40", target: "was lying down", native: "ложился" },

                        { id: "w41", target: "was starting", native: "начинался" },
                        { id: "w42", target: "was falling asleep", native: "засыпал" },
                        { id: "w43", target: "rain", native: "дождь" },
                        { id: "w44", target: "wind", native: "ветер" },
                        { id: "w45", target: "soup", native: "суп" },

                        { id: "w46", target: "dog", native: "собака" },
                        { id: "w47", target: "stove", native: "плита" },
                        { id: "w48", target: "hallway", native: "коридор" },
                        { id: "w49", target: "window", native: "окно" },
                        { id: "w50", target: "evening", native: "вечер" }
                    ]
                },
                // 6. Длительные времена — Present Continuous для будущего
                {
                    id: "present_continuous_future",

                    rule: [
                        "Present Continuous для запланированного будущего",
                        "Структура: I am meeting…, We are leaving…"
                    ].join("\n"),

                    title: "Длительные времена — Present Continuous для запланированного будущего",
                    title_native: "Ближайшие планы",
                    title_target: "Present Continuous (Future Meaning)",

                    sentences: [
                        { target: "This week is very busy for me.", native: "Эта неделя для меня очень занятая." },
                        { target: "I am meeting many people in the next few days.", native: "В ближайшие дни я встречаюсь со многими людьми." },
                        { target: "Tomorrow morning I am meeting my friend Anna.", native: "Завтра утром я встречаюсь с моей подругой Анной." },
                        { target: "We are having breakfast together.", native: "Мы завтракаем вместе." },

                        { target: "After breakfast we are walking to the park.", native: "После завтрака мы идём в парк." },
                        { target: "We are talking about our plans for the summer.", native: "Мы говорим о наших планах на лето." },
                        { target: "In the afternoon I am visiting my parents.", native: "Днём я навещаю своих родителей." },
                        { target: "We are having dinner at home.", native: "Мы ужинаем дома." },

                        { target: "On Wednesday I am going to the dentist.", native: "В среду я иду к стоматологу." },
                        { target: "I am not enjoying this visit.", native: "Мне не нравится этот визит." },
                        { target: "But I am keeping the appointment.", native: "Но я соблюдаю запись." },
                        { target: "My sister is coming with me.", native: "Моя сестра идёт со мной." },

                        { target: "In the evening we are watching a movie together.", native: "Вечером мы смотрим фильм вместе." },
                        { target: "We are choosing a comedy.", native: "Мы выбираем комедию." },
                        { target: "On Thursday I am working from home.", native: "В четверг я работаю из дома." },
                        { target: "I am starting early in the morning.", native: "Я начинаю рано утром." },

                        { target: "At lunchtime I am meeting my colleague Mark.", native: "В обед я встречаюсь с коллегой Марком." },
                        { target: "We are discussing a new project.", native: "Мы обсуждаем новый проект." },
                        { target: "After lunch we are visiting a client.", native: "После обеда мы навещаем клиента." },
                        { target: "We are presenting our ideas.", native: "Мы представляем наши идеи." },

                        { target: "On Friday evening I am packing my suitcase.", native: "В пятницу вечером я собираю свой чемодан." },
                        { target: "I am leaving the city on Saturday morning.", native: "Я уезжаю из города в субботу утром." },
                        { target: "I am taking a train to a small town.", native: "Я еду поездом в небольшой город." },
                        { target: "My friends are waiting for me there.", native: "Мои друзья ждут меня там." },

                        { target: "We are spending the weekend together.", native: "Мы проводим выходные вместе." },
                        { target: "We are staying in a cozy house near the lake.", native: "Мы остаёмся в уютном доме возле озера." },
                        { target: "On Saturday afternoon we are going hiking.", native: "В субботу днём мы идём в поход." },
                        { target: "We are cooking dinner on the fire.", native: "Мы готовим ужин на костре." },

                        { target: "On Sunday morning we are having breakfast outside.", native: "В воскресенье утром мы завтракаем на улице." },
                        { target: "Then we are taking a boat on the lake.", native: "Потом мы берём лодку на озере." },
                        { target: "In the evening we are going back home.", native: "Вечером мы возвращаемся домой." },
                        { target: "I am arriving late.", native: "Я приезжаю поздно." },

                        { target: "Next week I am starting a new course.", native: "На следующей неделе я начинаю новый курс." },
                        { target: "I am learning something interesting.", native: "Я изучаю что-то интересное." },
                        { target: "My friends are joining the course too.", native: "Мои друзья тоже присоединяются к курсу." },
                        { target: "We are studying together online.", native: "Мы учимся вместе онлайн." },

                        { target: "On Monday evening we are having our first lesson.", native: "В понедельник вечером у нас первое занятие." },
                        { target: "The teacher is explaining the plan.", native: "Учитель объясняет план." },
                        { target: "We are asking many questions.", native: "Мы задаём много вопросов." },
                        { target: "We are feeling excited about the course.", native: "Мы чувствуем волнение по поводу курса." }
                    ],

                    words: [
                        { id: "w1", target: "am meeting", native: "встречаюсь" },
                        { id: "w2", target: "are having", native: "завтракаем / ужинаем" },
                        { id: "w3", target: "are walking", native: "идём" },
                        { id: "w4", target: "am visiting", native: "навещаю" },
                        { id: "w5", target: "am going", native: "иду / еду" },

                        { id: "w6", target: "am keeping", native: "соблюдаю" },
                        { id: "w7", target: "is coming", native: "приходит" },
                        { id: "w8", target: "are watching", native: "смотрим" },
                        { id: "w9", target: "are choosing", native: "выбираем" },
                        { id: "w10", target: "am starting", native: "начинаю" },

                        { id: "w11", target: "am working", native: "работаю" },
                        { id: "w12", target: "are discussing", native: "обсуждаем" },
                        { id: "w13", target: "are visiting", native: "навещаем" },
                        { id: "w14", target: "are presenting", native: "представляем" },
                        { id: "w15", target: "am packing", native: "собираю" },

                        { id: "w16", target: "am leaving", native: "уезжаю" },
                        { id: "w17", target: "am taking", native: "беру / еду" },
                        { id: "w18", target: "are waiting", native: "ждут" },
                        { id: "w19", target: "are spending", native: "проводим" },
                        { id: "w20", target: "are staying", native: "остаёмся" },

                        { id: "w21", target: "are going", native: "идём" },
                        { id: "w22", target: "are cooking", native: "готовим" },
                        { id: "w23", target: "are taking", native: "берём" },
                        { id: "w24", target: "are arriving", native: "приезжаем / прибываю" },
                        { id: "w25", target: "am arriving", native: "приезжаю" },

                        { id: "w26", target: "am starting", native: "начинаю" },
                        { id: "w27", target: "am learning", native: "изучаю" },
                        { id: "w28", target: "are joining", native: "присоединяются" },
                        { id: "w29", target: "are studying", native: "учимся" },
                        { id: "w30", target: "are having", native: "имеем (занятие)" },

                        { id: "w31", target: "is explaining", native: "объясняет" },
                        { id: "w32", target: "are asking", native: "задаём" },
                        { id: "w33", target: "are feeling", native: "чувствуем" },
                        { id: "w34", target: "breakfast", native: "завтрак" },
                        { id: "w35", target: "dinner", native: "ужин" },

                        { id: "w36", target: "park", native: "парк" },
                        { id: "w37", target: "dentist", native: "стоматолог" },
                        { id: "w38", target: "project", native: "проект" },
                        { id: "w39", target: "client", native: "клиент" },
                        { id: "w40", target: "weekend", native: "выходные" },

                        { id: "w41", target: "suitcase", native: "чемодан" },
                        { id: "w42", target: "train", native: "поезд" },
                        { id: "w43", target: "lake", native: "озеро" },
                        { id: "w44", target: "course", native: "курс" },
                        { id: "w45", target: "lesson", native: "занятие" },

                        { id: "w46", target: "summer", native: "лето" },
                        { id: "w47", target: "appointment", native: "запись" },
                        { id: "w48", target: "plans", native: "планы" },
                        { id: "w49", target: "evening", native: "вечер" },
                        { id: "w50", target: "morning", native: "утро" }
                    ]
                },
                // 7. Сложные предлоги времени — before / after / during
                {
                    id: "time_prepositions",

                    rule: [
                        "before — перед чем-то",
                        "after — после чего-то",
                        "during — в течение"
                    ].join("\n"),

                    title: "Сложные предлоги времени — before / after / during",
                    title_native: "Before / After / During",
                    title_target: "Time Prepositions",

                    sentences: [
                        { target: "Every day I follow a simple routine.", native: "Каждый день я следую простому распорядку." },
                        { target: "Before work I always drink a cup of tea.", native: "Перед работой я всегда пью чашку чая." },
                        { target: "Before leaving home I check the weather.", native: "Перед тем как выйти из дома, я проверяю погоду." },
                        { target: "Before breakfast I stretch for a few minutes.", native: "Перед завтраком я делаю лёгкую растяжку несколько минут." },

                        { target: "During breakfast I read the news on my phone.", native: "Во время завтрака я читаю новости на телефоне." },
                        { target: "During the morning I answer emails.", native: "Утром я отвечаю на электронные письма." },
                        { target: "During meetings I take short notes.", native: "Во время встреч я делаю короткие заметки." },
                        { target: "During lunch I walk outside for fresh air.", native: "В обед я выхожу на улицу подышать свежим воздухом." },

                        { target: "After lunch I return to my desk.", native: "После обеда я возвращаюсь к своему столу." },
                        { target: "After a long task I usually take a short break.", native: "После долгой задачи я обычно делаю короткий перерыв." },
                        { target: "After work I meet my friend Anna.", native: "После работы я встречаюсь с моей подругой Анной." },
                        { target: "After dinner I relax on the sofa.", native: "После ужина я отдыхаю на диване." },

                        { target: "Before my walk I put on comfortable shoes.", native: "Перед прогулкой я надеваю удобную обувь." },
                        { target: "Before a call I check my microphone.", native: "Перед звонком я проверяю свой микрофон." },
                        { target: "Before going to bed I read a book.", native: "Перед сном я читаю книгу." },
                        { target: "Before midnight I try to fall asleep.", native: "До полуночи я стараюсь заснуть." },

                        { target: "During the evening I listen to calm music.", native: "Вечером я слушаю спокойную музыку." },
                        { target: "During cooking I often watch a show.", native: "Во время приготовления еды я часто смотрю шоу." },
                        { target: "During cleaning I open the windows.", native: "Во время уборки я открываю окна." },
                        { target: "During the weekend I spend time with friends.", native: "На выходных я провожу время с друзьями." },

                        { target: "After breakfast Anna calls me.", native: "После завтрака Анна звонит мне." },
                        { target: "After a busy day she likes to rest.", native: "После напряжённого дня она любит отдыхать." },
                        { target: "After her walk she makes tea.", native: "После прогулки она делает чай." },
                        { target: "After reading she writes in her journal.", native: "После чтения она пишет в своём дневнике." },

                        { target: "Before her lessons she prepares her notes.", native: "Перед занятиями она готовит свои записи." },
                        { target: "Before the weekend she finishes all tasks.", native: "Перед выходными она завершает все задания." },
                        { target: "Before lunch she drinks water.", native: "Перед обедом она пьёт воду." },
                        { target: "Before dinner she takes a short walk.", native: "Перед ужином она делает короткую прогулку." },

                        { target: "During her online class she listens carefully.", native: "Во время онлайн-занятия она внимательно слушает." },
                        { target: "During reading she highlights important words.", native: "Во время чтения она выделяет важные слова." },
                        { target: "During her break she checks messages.", native: "Во время перерыва она проверяет сообщения." },
                        { target: "During the afternoon she studies English.", native: "Днём она изучает английский." },

                        { target: "After the class she practices speaking.", native: "После занятия она практикует разговорную речь." },
                        { target: "After making dinner she relaxes.", native: "После приготовления ужина она отдыхает." },
                        { target: "After calling her mother she watches a movie.", native: "После звонка маме она смотрит фильм." },
                        { target: "After finishing the movie she goes to bed.", native: "После окончания фильма она ложится спать." },

                        { target: "Before sleep she turns off the lights.", native: "Перед сном она выключает свет." },
                        { target: "Before closing her eyes she thinks about the day.", native: "Перед тем как закрыть глаза, она думает о дне." },
                        { target: "During the night she sleeps very well.", native: "Ночью она спит очень хорошо." },
                        { target: "During early morning birds are singing.", native: "Рано утром птицы поют." },

                        { target: "After waking up she feels rested.", native: "После пробуждения она чувствует себя отдохнувшей." },
                        { target: "After stretching she smiles.", native: "После растяжки она улыбается." },
                        { target: "After getting dressed she starts the new day.", native: "После того как она одевается, она начинает новый день." },
                        { target: "And before everything she makes coffee.", native: "И перед всем этим она делает кофе." }
                    ],

                    words: [
                        { id: "w1", target: "before", native: "перед" },
                        { id: "w2", target: "after", native: "после" },
                        { id: "w3", target: "during", native: "в течение" },
                        { id: "w4", target: "routine", native: "распорядок" },
                        { id: "w5", target: "breakfast", native: "завтрак" },

                        { id: "w6", target: "lunch", native: "обед" },
                        { id: "w7", target: "dinner", native: "ужин" },
                        { id: "w8", target: "meeting", native: "встреча" },
                        { id: "w9", target: "notes", native: "заметки" },
                        { id: "w10", target: "call", native: "звонок" },

                        { id: "w11", target: "walk", native: "прогулка" },
                        { id: "w12", target: "cleaning", native: "уборка" },
                        { id: "w13", target: "cooking", native: "готовка" },
                        { id: "w14", target: "weekend", native: "выходные" },
                        { id: "w15", target: "journal", native: "дневник" },

                        { id: "w16", target: "class", native: "занятие" },
                        { id: "w17", target: "water", native: "вода" },
                        { id: "w18", target: "weather", native: "погода" },
                        { id: "w19", target: "movie", native: "фильм" },
                        { id: "w20", target: "lights", native: "свет" },

                        { id: "w21", target: "sleep", native: "сон" },
                        { id: "w22", target: "morning", native: "утро" },
                        { id: "w23", target: "night", native: "ночь" },
                        { id: "w24", target: "early", native: "рано" },
                        { id: "w25", target: "rested", native: "отдохнувший" },

                        { id: "w26", target: "stretching", native: "растяжка" },
                        { id: "w27", target: "smile", native: "улыбка" },
                        { id: "w28", target: "desk", native: "стол" },
                        { id: "w29", target: "window", native: "окно" },
                        { id: "w30", target: "bird", native: "птица" },

                        { id: "w31", target: "coffee", native: "кофе" },
                        { id: "w32", target: "prepare", native: "готовить" },
                        { id: "w33", target: "finish", native: "заканчивать" },
                        { id: "w34", target: "study", native: "учиться" },
                        { id: "w35", target: "day", native: "день" },

                        { id: "w36", target: "week", native: "неделя" },
                        { id: "w37", target: "task", native: "задание" },
                        { id: "w38", target: "screen", native: "экран" },
                        { id: "w39", target: "tea", native: "чай" },
                        { id: "w40", target: "music", native: "музыка" },

                        { id: "w41", target: "air", native: "воздух" },
                        { id: "w42", target: "fresh", native: "свежий" },
                        { id: "w43", target: "outside", native: "снаружи" },
                        { id: "w44", target: "inside", native: "внутри" },
                        { id: "w45", target: "prepare", native: "готовить" },

                        { id: "w46", target: "appointment", native: "запись" },
                        { id: "w47", target: "news", native: "новости" },
                        { id: "w48", target: "task", native: "задача" },
                        { id: "w49", target: "lesson", native: "урок" },
                        { id: "w50", target: "evening", native: "вечер" }
                    ]
                },
                // 8. Выражение эмоций и чувств
                {
                    id: "feelings_emotions",

                    rule: [
                        "Эмоции: excited, worried, bored, surprised",
                        "Глаголы-состояния: feel, look, seem"
                    ].join("\n"),

                    title: "Выражение эмоций и чувств",
                    title_native: "Эмоции",
                    title_target: "Feelings and Emotions",

                    sentences: [
                        { target: "This morning I feel happy.", native: "Этим утром я чувствую себя счастливым." },
                        { target: "The sun is shining, and everything seems bright.", native: "Солнце светит, и всё кажется ярким." },
                        { target: "I look rested after a long sleep.", native: "Я выгляжу отдохнувшим после долгого сна." },
                        { target: "My cat seems hungry and is looking at me.", native: "Моя кошка кажется голодной и смотрит на меня." },

                        { target: "I feel excited because today is important.", native: "Я чувствую воодушевление, потому что сегодня важный день." },
                        { target: "I am meeting my friend Anna later.", native: "Позже я встречаюсь с моей подругой Анной." },
                        { target: "She always looks cheerful in the morning.", native: "Она всегда выглядит бодрой по утрам." },
                        { target: "Her messages seem positive today.", native: "Её сообщения сегодня кажутся позитивными." },

                        { target: "At work my colleague Mark looks tired.", native: "На работе мой коллега Марк выглядит уставшим." },
                        { target: "He feels stressed about a new project.", native: "Он чувствует стресс из-за нового проекта." },
                        { target: "He says everything seems difficult today.", native: "Он говорит, что сегодня всё кажется трудным." },
                        { target: "I tell him that he looks stronger than he thinks.", native: "Я говорю ему, что он выглядит сильнее, чем думает." },

                        { target: "During lunch I feel relaxed.", native: "Во время обеда я чувствую себя расслабленным." },
                        { target: "The café looks warm and cozy.", native: "Кафе выглядит тёплым и уютным." },
                        { target: "The waiter seems friendly.", native: "Официант кажется дружелюбным." },
                        { target: "The food tastes wonderful.", native: "Еда на вкус чудесная." },

                        { target: "In the afternoon I start a long task.", native: "Днём я начинаю долгую задачу." },
                        { target: "After twenty minutes I feel bored.", native: "Через двадцать минут я чувствую скуку." },
                        { target: "The document looks endless.", native: "Документ выглядит бесконечным." },
                        { target: "The numbers seem confusing.", native: "Цифры кажутся запутанными." },

                        { target: "I take a break because I feel tired.", native: "Я делаю перерыв, потому что чувствую усталость." },
                        { target: "I walk outside, and everything looks calm.", native: "Я выхожу на улицу, и всё выглядит спокойным." },
                        { target: "The trees seem peaceful in the wind.", native: "Деревья кажутся спокойными на ветру." },
                        { target: "I breathe deeply and feel better.", native: "Я глубоко дышу и чувствую себя лучше." },

                        { target: "In the evening I meet Anna.", native: "Вечером я встречаю Анну." },
                        { target: "She looks excited about her day.", native: "Она выглядит воодушевлённой своим днём." },
                        { target: "She feels proud of her work.", native: "Она чувствует гордость за свою работу." },
                        { target: "Her story seems interesting.", native: "Её история кажется интересной." },

                        { target: "Suddenly Anna looks worried.", native: "Внезапно Анна выглядит взволнованной." },
                        { target: "She feels nervous about tomorrow.", native: "Она чувствует нервозность из-за завтрашнего дня." },
                        { target: "I ask what seems wrong.", native: "Я спрашиваю, что кажется не так." },
                        { target: "She says she is visiting the doctor.", native: "Она говорит, что идёт к врачу." },

                        { target: "I tell her she looks strong.", native: "Я говорю ей, что она выглядит сильной." },
                        { target: "I tell her she seems brave.", native: "Я говорю ей, что она кажется смелой." },
                        { target: "She smiles and feels calmer.", native: "Она улыбается и чувствует себя спокойнее." },
                        { target: "We continue talking for an hour.", native: "Мы продолжаем разговаривать час." },

                        { target: "Later at home I feel peaceful.", native: "Позже дома я чувствую себя умиротворённым." },
                        { target: "The apartment looks quiet and safe.", native: "Квартира выглядит тихой и безопасной." },
                        { target: "My cat seems sleepy on the chair.", native: "Моя кошка кажется сонной на стуле." },
                        { target: "I look tired but happy.", native: "Я выгляжу уставшим, но счастливым." },

                        { target: "Before bed I think about my day.", native: "Перед сном я думаю о своём дне." },
                        { target: "Some moments felt difficult.", native: "Некоторые моменты казались трудными." },
                        { target: "Other moments felt beautiful.", native: "Другие моменты казались прекрасными." },
                        { target: "Life seems full of emotions.", native: "Жизнь кажется полной эмоций." },

                        { target: "I close my eyes and feel calm.", native: "Я закрываю глаза и чувствую спокойствие." },
                        { target: "I fall asleep with a light heart.", native: "Я засыпаю с лёгким сердцем." }
                    ],

                    words: [
                        { id: "w1", target: "feel", native: "чувствовать" },
                        { id: "w2", target: "look", native: "выглядеть" },
                        { id: "w3", target: "seem", native: "казаться" },
                        { id: "w4", target: "excited", native: "вдохновлённый / воодушевлённый" },
                        { id: "w5", target: "worried", native: "взволнованный" },

                        { id: "w6", target: "bored", native: "скучающий" },
                        { id: "w7", target: "surprised", native: "удивлённый" },
                        { id: "w8", target: "tired", native: "уставший" },
                        { id: "w9", target: "happy", native: "счастливый" },
                        { id: "w10", target: "calm", native: "спокойный" },

                        { id: "w11", target: "proud", native: "гордый" },
                        { id: "w12", target: "nervous", native: "нервный" },
                        { id: "w13", target: "peaceful", native: "умиротворённый" },
                        { id: "w14", target: "cheerful", native: "жизнерадостный" },
                        { id: "w15", target: "rested", native: "отдохнувший" },

                        { id: "w16", target: "hungry", native: "голодный" },
                        { id: "w17", target: "bright", native: "яркий" },
                        { id: "w18", target: "confusing", native: "запутывающий" },
                        { id: "w19", target: "endless", native: "бесконечный" },
                        { id: "w20", target: "friendly", native: "дружелюбный" },

                        { id: "w21", target: "cozy", native: "уютный" },
                        { id: "w22", target: "safe", native: "безопасный" },
                        { id: "w23", target: "wind", native: "ветер" },
                        { id: "w24", target: "break", native: "перерыв" },
                        { id: "w25", target: "project", native: "проект" },

                        { id: "w26", target: "visit", native: "посещение" },
                        { id: "w27", target: "doctor", native: "врач" },
                        { id: "w28", target: "day", native: "день" },
                        { id: "w29", target: "moment", native: "момент" },
                        { id: "w30", target: "life", native: "жизнь" },

                        { id: "w31", target: "chair", native: "стул" },
                        { id: "w32", target: "apartment", native: "квартира" },
                        { id: "w33", target: "story", native: "история" },
                        { id: "w34", target: "music", native: "музыка" },
                        { id: "w35", target: "team", native: "команда" },

                        { id: "w36", target: "meeting", native: "встреча" },
                        { id: "w37", target: "coffee", native: "кофе" },
                        { id: "w38", target: "morning", native: "утро" },
                        { id: "w39", target: "evening", native: "вечер" },
                        { id: "w40", target: "call", native: "звонок" },

                        { id: "w41", target: "smile", native: "улыбка" },
                        { id: "w42", target: "rest", native: "отдых" },
                        { id: "w43", target: "sleep", native: "сон" },
                        { id: "w44", target: "hungry", native: "голодный" },
                        { id: "w45", target: "bright", native: "яркий" },

                        { id: "w46", target: "safe", native: "безопасный" },
                        { id: "w47", target: "seem wrong", native: "казаться неправильным" },
                        { id: "w48", target: "look strong", native: "выглядеть сильным" },
                        { id: "w49", target: "look tired", native: "выглядеть уставшим" },
                        { id: "w50", target: "feel calm", native: "чувствовать спокойствие" }
                    ]
                },
                // 9. Описание опыта — Present Perfect (начальный уровень)
                {
                    id: "present_perfect_intro",

                    rule: [
                        "Структура: have/has + V3",
                        "Использование: опыт (I have tried…), новости (She has just arrived)"
                    ].join("\n"),

                    title: "Present Perfect — введение",
                    title_native: "Опыт и недавние события",
                    title_target: "Present Perfect (Intro)",

                    sentences: [
                        { target: "This year has been very interesting for me.", native: "Этот год был очень интересным для меня." },
                        { target: "I have learned many new things.", native: "Я узнал много новых вещей." },
                        { target: "I have started a new job.", native: "Я начал новую работу." },
                        { target: "I have met many new colleagues.", native: "Я познакомился со многими новыми коллегами." },

                        { target: "My friend Anna has helped me a lot.", native: "Моя подруга Анна много мне помогала." },
                        { target: "She has given me good advice.", native: "Она давала мне хорошие советы." },
                        { target: "She has visited my office several times.", native: "Она несколько раз приходила в мой офис." },
                        { target: "We have worked on small projects together.", native: "Мы работали над небольшими проектами вместе." },

                        { target: "I have also traveled this year.", native: "В этом году я также путешествовал." },
                        { target: "I have visited two new cities.", native: "Я посетил два новых города." },
                        { target: "I have tried local food.", native: "Я пробовал местную еду." },
                        { target: "I have taken many photos.", native: "Я сделал много фотографий." },

                        { target: "My sister has just arrived from Germany.", native: "Моя сестра только что приехала из Германии." },
                        { target: "She has brought gifts for everyone.", native: "Она привезла подарки для всех." },
                        { target: "She has already visited our parents.", native: "Она уже навестила наших родителей." },
                        { target: "She has planned a short trip with me.", native: "Она запланировала короткую поездку со мной." },

                        { target: "My parents have changed the house this year.", native: "Мои родители изменили дом в этом году." },
                        { target: "They have painted the walls.", native: "Они покрасили стены." },
                        { target: "They have bought new furniture.", native: "Они купили новую мебель." },
                        { target: "They have made the garden more beautiful.", native: "Они сделали сад красивее." },

                        { target: "Recently I have started learning English seriously.", native: "Недавно я начал серьёзно изучать английский." },
                        { target: "I have taken online lessons.", native: "Я проходил онлайн-занятия." },
                        { target: "I have watched many videos in English.", native: "Я смотрел много видео на английском." },
                        { target: "I have read simple books.", native: "Я читал простые книги." },

                        { target: "I have noticed progress.", native: "Я заметил прогресс." },
                        { target: "My listening has improved.", native: "Мой навык слушания улучшился." },
                        { target: "My speaking has become easier.", native: "Моя разговорная речь стала легче." },
                        { target: "My confidence has grown.", native: "Моя уверенность выросла." },

                        { target: "Today something new has happened at work.", native: "Сегодня на работе произошло что-то новое." },
                        { target: "My team has received a new project.", native: "Моя команда получила новый проект." },
                        { target: "We have already started planning.", native: "Мы уже начали планирование." },
                        { target: "My manager has just sent the details.", native: "Мой менеджер только что отправил детали." },

                        { target: "I have prepared my notes.", native: "Я подготовил свои заметки." },
                        { target: "I have written a short plan.", native: "Я написал короткий план." },
                        { target: "I have organized the files.", native: "Я организовал файлы." },
                        { target: "I have shared the documents with my team.", native: "Я поделился документами с командой." },

                        { target: "This evening I have invited Anna for dinner.", native: "Сегодня вечером я пригласил Анну на ужин." },
                        { target: "I have cooked a simple meal.", native: "Я приготовил простой ужин." },
                        { target: "I have cleaned the kitchen.", native: "Я убрал на кухне." },
                        { target: "I have set the table beautifully.", native: "Я красиво накрыл на стол." },

                        { target: "Anna has brought dessert.", native: "Анна принесла десерт." },
                        { target: "She has told me new stories.", native: "Она рассказала мне новые истории." },
                        { target: "We have laughed a lot.", native: "Мы много смеялись." },
                        { target: "We have enjoyed the evening.", native: "Мы насладились вечером." }
                    ],

                    words: [
                        { id: "w1", target: "have learned", native: "выучил" },
                        { id: "w2", target: "have started", native: "начал" },
                        { id: "w3", target: "have met", native: "встретил" },
                        { id: "w4", target: "have helped", native: "помог" },
                        { id: "w5", target: "have given", native: "дал" },

                        { id: "w6", target: "have visited", native: "посетил" },
                        { id: "w7", target: "have tried", native: "попробовал" },
                        { id: "w8", target: "have taken", native: "сделал" },
                        { id: "w9", target: "has arrived", native: "прибывает / прибыла" },
                        { id: "w10", target: "has brought", native: "привезла" },

                        { id: "w11", target: "has visited", native: "навестила" },
                        { id: "w12", target: "has painted", native: "покрасили" },
                        { id: "w13", target: "has bought", native: "купили" },
                        { id: "w14", target: "has made", native: "сделали" },
                        { id: "w15", target: "have taken lessons", native: "проходил занятия" },

                        { id: "w16", target: "have watched", native: "смотрел" },
                        { id: "w17", target: "have read", native: "читал" },
                        { id: "w18", target: "has improved", native: "улучшился" },
                        { id: "w19", target: "has become", native: "стал" },
                        { id: "w20", target: "has grown", native: "вырос" },

                        { id: "w21", target: "has happened", native: "произошло" },
                        { id: "w22", target: "has received", native: "получила" },
                        { id: "w23", target: "have started", native: "начали" },
                        { id: "w24", target: "has sent", native: "отправил" },
                        { id: "w25", target: "have prepared", native: "подготовил" },

                        { id: "w26", target: "have written", native: "написал" },
                        { id: "w27", target: "have organized", native: "организовал" },
                        { id: "w28", target: "have shared", native: "поделился" },
                        { id: "w29", target: "has brought", native: "принесла" },
                        { id: "w30", target: "have cooked", native: "приготовил" },

                        { id: "w31", target: "have cleaned", native: "убрал" },
                        { id: "w32", target: "have set", native: "накрыл" },
                        { id: "w33", target: "have laughed", native: "смеялись" },
                        { id: "w34", target: "have enjoyed", native: "насладились" },
                        { id: "w35", target: "experience", native: "опыт" },

                        { id: "w36", target: "news", native: "новости" },
                        { id: "w37", target: "this year", native: "в этом году" },
                        { id: "w38", target: "recently", native: "недавно" },
                        { id: "w39", target: "already", native: "уже" },
                        { id: "w40", target: "just", native: "только что" },

                        { id: "w41", target: "gift", native: "подарок" },
                        { id: "w42", target: "garden", native: "сад" },
                        { id: "w43", target: "lesson", native: "занятие" },
                        { id: "w44", target: "office", native: "офис" },
                        { id: "w45", target: "trip", native: "поездка" },

                        { id: "w46", target: "colleague", native: "коллега" },
                        { id: "w47", target: "story", native: "история" },
                        { id: "w48", target: "details", native: "детали" },
                        { id: "w49", target: "plan", native: "план" },
                        { id: "w50", target: "dinner", native: "ужин" }
                    ]
                },
                // 10. Путешествия — аэропорт, отель, маршрут
                {
                    id: "travel_a2",

                    rule: [
                        "Фразы для путешествий: check in, check out, book a room",
                        "Лексика транспорта и аэропорта"
                    ].join("\n"),

                    title: "Путешествия — аэропорт, отель, маршрут",
                    title_native: "Путешествия",
                    title_target: "Travel",

                    sentences: [
                        { target: "Last month I traveled to another country.", native: "В прошлом месяце я путешествовал в другую страну." },
                        { target: "I booked a room in a small hotel.", native: "Я забронировал комнату в небольшом отеле." },
                        { target: "I checked the reservation online.", native: "Я проверил бронирование онлайн." },
                        { target: "Early in the morning I went to the airport.", native: "Рано утром я поехал в аэропорт." },

                        { target: "At the airport I checked in at the desk.", native: "В аэропорту я зарегистрировался на стойке." },
                        { target: "The staff asked for my passport.", native: "Персонал попросил мой паспорт." },
                        { target: "I got my boarding pass.", native: "Я получил посадочный талон." },
                        { target: "Then I went to security.", native: "Затем я пошёл на досмотр." },

                        { target: "During security I put my bag on the belt.", native: "На досмотре я положил свою сумку на ленту." },
                        { target: "I took off my jacket.", native: "Я снял свою куртку." },
                        { target: "The officer checked my things.", native: "Офицер проверил мои вещи." },
                        { target: "Everything was fine.", native: "Всё было в порядке." },

                        { target: "After that I walked to the gate.", native: "После этого я прошёл к выходу на посадку." },
                        { target: "People were waiting for the flight.", native: "Люди ждали рейс." },
                        { target: "I sat near the window.", native: "Я сел возле окна." },
                        { target: "I watched airplanes outside.", native: "Я смотрел на самолёты снаружи." },

                        { target: "Soon we boarded the plane.", native: "Вскоре мы зашли в самолёт." },
                        { target: "A flight attendant greeted us.", native: "Стюардесса поприветствовала нас." },
                        { target: "I found my seat easily.", native: "Я легко нашёл своё место." },
                        { target: "I put my bag in the overhead bin.", native: "Я положил свою сумку на верхнюю полку." },

                        { target: "During the flight I read a book.", native: "Во время полёта я читал книгу." },
                        { target: "I drank water.", native: "Я пил воду." },
                        { target: "I listened to music.", native: "Я слушал музыку." },
                        { target: "The flight was comfortable.", native: "Полёт был комфортным." },

                        { target: "When we arrived, I went to passport control.", native: "Когда мы прибыли, я пошёл на паспортный контроль." },
                        { target: "The officer stamped my passport.", native: "Офицер поставил штамп в мой паспорт." },
                        { target: "I picked up my suitcase.", native: "Я забрал свой чемодан." },
                        { target: "Then I left the airport.", native: "Затем я вышел из аэропорта." },

                        { target: "I took a taxi to the hotel.", native: "Я взял такси до отеля." },
                        { target: "The driver was friendly.", native: "Водитель был дружелюбным." },
                        { target: "The city looked beautiful from the car.", native: "Город выглядел красиво из машины." },
                        { target: "I was excited to explore it.", native: "Я был воодушевлён изучать его." },

                        { target: "At the hotel I checked in at the reception.", native: "В отеле я зарегистрировался на ресепшене." },
                        { target: "The receptionist gave me the key.", native: "Администратор дал мне ключ." },
                        { target: "I went up to my room.", native: "Я поднялся в свою комнату." },
                        { target: "The room was clean and bright.", native: "Комната была чистой и светлой." },

                        { target: "I unpacked my suitcase.", native: "Я распаковал свой чемодан." },
                        { target: "I took a quick shower.", native: "Я принял быстрый душ." },
                        { target: "Then I went out to explore the city.", native: "Затем я вышел изучать город." },
                        { target: "I walked through the old streets.", native: "Я гулял по старинным улицам." },

                        { target: "I visited a small museum.", native: "Я посетил небольшой музей." },
                        { target: "I bought a postcard.", native: "Я купил открытку." },
                        { target: "I tried local food in a café.", native: "Я попробовал местную еду в кафе." },
                        { target: "Everything tasted wonderful.", native: "Всё было на вкус чудесным." },

                        { target: "At the end of the trip I checked out of the hotel.", native: "В конце поездки я выписался из отеля." },
                        { target: "I thanked the staff.", native: "Я поблагодарил персонал." },
                        { target: "I took a bus to the airport.", native: "Я поехал на автобусе в аэропорт." },
                        { target: "I returned home safely.", native: "Я вернулся домой благополучно." }
                    ],

                    words: [
                        { id: "w1", target: "check in", native: "зарегистрироваться" },
                        { id: "w2", target: "check out", native: "выписаться" },
                        { id: "w3", target: "book a room", native: "забронировать комнату" },
                        { id: "w4", target: "reservation", native: "бронирование" },
                        { id: "w5", target: "boarding pass", native: "посадочный талон" },

                        { id: "w6", target: "security", native: "досмотр" },
                        { id: "w7", target: "gate", native: "выход на посадку" },
                        { id: "w8", target: "flight", native: "рейс" },
                        { id: "w9", target: "flight attendant", native: "стюардесса" },
                        { id: "w10", target: "overhead bin", native: "верхняя полка" },

                        { id: "w11", target: "passport control", native: "паспортный контроль" },
                        { id: "w12", target: "stamp", native: "штамп" },
                        { id: "w13", target: "suitcase", native: "чемодан" },
                        { id: "w14", target: "taxi", native: "такси" },
                        { id: "w15", target: "reception", native: "ресепшен" },

                        { id: "w16", target: "receptionist", native: "администратор" },
                        { id: "w17", target: "driver", native: "водитель" },
                        { id: "w18", target: "museum", native: "музей" },
                        { id: "w19", target: "postcard", native: "открытка" },
                        { id: "w20", target: "local food", native: "местная еда" },

                        { id: "w21", target: "airport", native: "аэропорт" },
                        { id: "w22", target: "hotel", native: "отель" },
                        { id: "w23", target: "desk", native: "стойка" },
                        { id: "w24", target: "belt", native: "лента" },
                        { id: "w25", target: "window seat", native: "место у окна" },

                        { id: "w26", target: "explore", native: "исследовать" },
                        { id: "w27", target: "streets", native: "улицы" },
                        { id: "w28", target: "shower", native: "душ" },
                        { id: "w29", target: "key", native: "ключ" },
                        { id: "w30", target: "friendly", native: "дружелюбный" },

                        { id: "w31", target: "bright", native: "светлый" },
                        { id: "w32", target: "clean", native: "чистый" },
                        { id: "w33", target: "arrive", native: "прибывать" },
                        { id: "w34", target: "bus", native: "автобус" },
                        { id: "w35", target: "car", native: "машина" },

                        { id: "w36", target: "train", native: "поезд" },
                        { id: "w37", target: "ticket", native: "билет" },
                        { id: "w38", target: "bag", native: "сумка" },
                        { id: "w39", target: "airport staff", native: "сотрудники аэропорта" },
                        { id: "w40", target: "travel", native: "путешествовать" },

                        { id: "w41", target: "arrived", native: "прибыл" },
                        { id: "w42", target: "explored", native: "изучил" },
                        { id: "w43", target: "visited", native: "посетил" },
                        { id: "w44", target: "took", native: "взял / поехал" },
                        { id: "w45", target: "watched", native: "смотрел" },

                        { id: "w46", target: "tasted", native: "попробовал" },
                        { id: "w47", target: "booked", native: "забронировал" },
                        { id: "w48", target: "checked in", native: "зарегистрировался" },
                        { id: "w49", target: "checked out", native: "выписался" },
                        { id: "w50", target: "returned", native: "вернулся" }
                    ]
                },
                // 11. Покупки и возвраты — более сложные диалоги
                {
                    id: "shopping_a2",

                    rule: [
                        "Фразы покупателя: I would like…, Can I try it on?",
                        "Фразы продавца: It fits you well, We don’t have this size"
                    ].join("\n"),

                    title: "Покупки и возвраты — диалоги в магазине",
                    title_native: "Покупки и возвраты",
                    title_target: "Shopping A2",

                    sentences: [
                        { target: "Last Saturday I went to a shopping mall.", native: "В прошлую субботу я пошёл в торговый центр." },
                        { target: "I wanted to buy new clothes.", native: "Я хотел купить новую одежду." },
                        { target: "The mall was busy and bright.", native: "Торговый центр был оживлённым и ярким." },
                        { target: "I walked into a clothing store.", native: "Я зашёл в магазин одежды." },

                        { target: "A shop assistant smiled at me.", native: "Продавец улыбнулся мне." },
                        { target: "I said: I would like a new jacket.", native: "Я сказал: Я бы хотел новую куртку." },
                        { target: "She asked what size I needed.", native: "Она спросила, какой размер мне нужен." },
                        { target: "I said I was not sure.", native: "Я сказал, что не уверен." },

                        { target: "She showed me a black jacket.", native: "Она показала мне чёрную куртку." },
                        { target: "I asked: Can I try it on?", native: "Я спросил: Могу я её примерить?" },
                        { target: "She opened the fitting room for me.", native: "Она открыла для меня примерочную." },
                        { target: "The jacket looked nice.", native: "Куртка выглядела хорошо." },

                        { target: "But it was too small.", native: "Но она была слишком маленькой." },
                        { target: "I asked for a bigger size.", native: "Я попросил размер побольше." },
                        { target: "She said: We don’t have this size.", native: "Она сказала: У нас нет этого размера." },
                        { target: "She brought me another jacket.", native: "Она принесла мне другую куртку." },

                        { target: "The second jacket fit me well.", native: "Вторая куртка сидела на мне хорошо." },
                        { target: "The assistant said: It fits you well!", native: "Продавец сказал: Она вам хорошо подходит!" },
                        { target: "I looked in the mirror.", native: "Я посмотрел в зеркало." },
                        { target: "I liked the color and style.", native: "Мне понравился цвет и стиль." },

                        { target: "I decided to buy it.", native: "Я решил купить её." },
                        { target: "At the counter I asked about returns.", native: "На кассе я спросил о возвратах." },
                        { target: "The assistant said: You can return it within fourteen days.", native: "Продавец сказал: Вы можете вернуть её в течение четырнадцати дней." },
                        { target: "I paid with my card.", native: "Я оплатил своей картой." },

                        { target: "After that I went to a shoe store.", native: "После этого я пошёл в магазин обуви." },
                        { target: "I said: I would like comfortable shoes.", native: "Я сказал: Я бы хотел удобную обувь." },
                        { target: "The seller showed me several pairs.", native: "Продавец показал мне несколько пар." },
                        { target: "I tried on white sneakers.", native: "Я примерил белые кроссовки." },

                        { target: "They were too big.", native: "Они были слишком большими." },
                        { target: "Then I tried a smaller pair.", native: "Потом я примерил пару поменьше." },
                        { target: "They fit perfectly.", native: "Они идеально подошли." },
                        { target: "The seller said: They look great on you.", native: "Продавец сказал: Они отлично смотрятся на вас." },

                        { target: "I bought the sneakers too.", native: "Я купил и кроссовки тоже." },
                        { target: "I put the bags in my hand.", native: "Я взял пакеты в руки." },
                        { target: "I felt happy with my purchases.", native: "Я был доволен своими покупками." },
                        { target: "I walked to the food court.", native: "Я пошёл в фудкорт." },

                        { target: "I ordered a coffee.", native: "Я заказал кофе." },
                        { target: "During the break I looked at my receipts.", native: "Во время перерыва я посмотрел свои чеки." },
                        { target: "I checked the prices again.", native: "Я снова проверил цены." },
                        { target: "Everything was correct.", native: "Всё было правильно." },

                        { target: "Later I went back to the first store.", native: "Позже я вернулся в первый магазин." },
                        { target: "I wanted to buy a scarf too.", native: "Я хотел купить ещё шарф." },
                        { target: "I said: I would like a blue scarf.", native: "Я сказал: Я бы хотел голубой шарф." },
                        { target: "The assistant found one for me.", native: "Продавец нашёл его для меня." },

                        { target: "It was soft and warm.", native: "Он был мягким и тёплым." },
                        { target: "I took it to the counter.", native: "Я отнёс его к кассе." },
                        { target: "I paid and put it in my bag.", native: "Я оплатил и положил его в пакет." },
                        { target: "I finished my shopping day with a smile.", native: "Я завершил свой день покупок с улыбкой." }
                    ],

                    words: [
                        { id: "w1", target: "I would like", native: "я бы хотел" },
                        { id: "w2", target: "Can I try it on?", native: "могу я это примерить?" },
                        { id: "w3", target: "It fits you well", native: "вам хорошо подходит" },
                        { id: "w4", target: "size", native: "размер" },
                        { id: "w5", target: "fitting room", native: "примерочная" },

                        { id: "w6", target: "shoe store", native: "магазин обуви" },
                        { id: "w7", target: "clothing store", native: "магазин одежды" },
                        { id: "w8", target: "assistant", native: "продавец" },
                        { id: "w9", target: "jacket", native: "куртка" },
                        { id: "w10", target: "sneakers", native: "кроссовки" },

                        { id: "w11", target: "too big", native: "слишком большой" },
                        { id: "w12", target: "too small", native: "слишком маленький" },
                        { id: "w13", target: "perfectly", native: "идеально" },
                        { id: "w14", target: "scarf", native: "шарф" },
                        { id: "w15", target: "receipt", native: "чек" },

                        { id: "w16", target: "price", native: "цена" },
                        { id: "w17", target: "return", native: "возврат" },
                        { id: "w18", target: "buy", native: "покупать" },
                        { id: "w19", target: "sell", native: "продавать" },
                        { id: "w20", target: "bag", native: "пакет" },

                        { id: "w21", target: "mall", native: "торговый центр" },
                        { id: "w22", target: "counter", native: "касса" },
                        { id: "w23", target: "queue", native: "очередь" },
                        { id: "w24", target: "comfortable", native: "удобный" },
                        { id: "w25", target: "customer", native: "покупатель" },

                        { id: "w26", target: "shop", native: "магазин" },
                        { id: "w27", target: "try on", native: "примерять" },
                        { id: "w28", target: "fits", native: "сидит (об одежде)" },
                        { id: "w29", target: "pay", native: "платить" },
                        { id: "w30", target: "card", native: "карта" },

                        { id: "w31", target: "color", native: "цвет" },
                        { id: "w32", target: "style", native: "стиль" },
                        { id: "w33", target: "soft", native: "мягкий" },
                        { id: "w34", target: "warm", native: "тёплый" },
                        { id: "w35", target: "bright", native: "яркий" },

                        { id: "w36", target: "buying", native: "покупка" },
                        { id: "w37", target: "shopping", native: "шопинг" },
                        { id: "w38", target: "show", native: "показывать" },
                        { id: "w39", target: "help", native: "помогать" },
                        { id: "w40", target: "pay for", native: "платить за" },

                        { id: "w41", target: "comfortable shoes", native: "удобная обувь" },
                        { id: "w42", target: "white sneakers", native: "белые кроссовки" },
                        { id: "w43", target: "bigger size", native: "больший размер" },
                        { id: "w44", target: "smaller size", native: "меньший размер" },
                        { id: "w45", target: "shopping mall", native: "торговый центр" },

                        { id: "w46", target: "look great", native: "выглядеть отлично" },
                        { id: "w47", target: "perfect fit", native: "идеальная посадка" },
                        { id: "w48", target: "soft scarf", native: "мягкий шарф" },
                        { id: "w49", target: "food court", native: "фудкорт" },
                        { id: "w50", target: "purchase", native: "покупка (как факт)" }
                    ]
                },
                // 12. Работа и обязанности — более сложные описания
                {
                    id: "jobs_a2",

                    rule: [
                        "Описание задач: I am responsible for…, I take care of…",
                        "Время Present Simple/Continuous в рабочих контекстах"
                    ].join("\n"),

                    title: "Работа и обязанности",
                    title_native: "Работа и обязанности",
                    title_target: "Work",

                    sentences: [
                        { target: "I work in a small office in the city center.", native: "Я работаю в небольшом офисе в центре города." },
                        { target: "Our office is on the third floor.", native: "Наш офис на третьем этаже." },
                        { target: "I am responsible for customer emails.", native: "Я отвечаю за письма клиентов." },
                        { target: "I also take care of phone calls.", native: "Я также занимаюсь телефонными звонками." },

                        { target: "Every morning I arrive at nine o'clock.", native: "Каждое утро я прихожу в девять часов." },
                        { target: "I make a cup of coffee.", native: "Я делаю чашку кофе." },
                        { target: "Then I turn on my computer.", native: "Затем я включаю свой компьютер." },
                        { target: "I check my inbox.", native: "Я проверяю свой почтовый ящик." },

                        { target: "I usually have many new messages.", native: "Обычно у меня много новых сообщений." },
                        { target: "I read them carefully.", native: "Я читаю их внимательно." },
                        { target: "I answer easy questions first.", native: "Сначала я отвечаю на простые вопросы." },
                        { target: "Then I write longer replies.", native: "Потом я пишу более длинные ответы." },

                        { target: "My colleague Anna helps me with reports.", native: "Моя коллега Анна помогает мне с отчётами." },
                        { target: "She is very organized.", native: "Она очень организована." },
                        { target: "We often work together.", native: "Мы часто работаем вместе." },
                        { target: "Right now she is preparing a new document.", native: "Прямо сейчас она готовит новый документ." },

                        { target: "My boss usually arrives later.", native: "Мой начальник обычно приходит позже." },
                        { target: "He checks the schedule.", native: "Он проверяет расписание." },
                        { target: "He asks me about important tasks.", native: "Он спрашивает меня о важных задачах." },
                        { target: "I tell him what I am working on.", native: "Я говорю ему, над чем я работаю." },

                        { target: "At eleven we have a short meeting.", native: "В одиннадцать у нас короткая встреча." },
                        { target: "We talk about our projects.", native: "Мы говорим о наших проектах." },
                        { target: "We plan our day.", native: "Мы планируем наш день." },
                        { target: "Sometimes we discuss problems.", native: "Иногда мы обсуждаем проблемы." },

                        { target: "Before lunch I work on a report.", native: "Перед обедом я работаю над отчётом." },
                        { target: "I collect information in a spreadsheet.", native: "Я собираю информацию в таблицу." },
                        { target: "I check numbers twice.", native: "Я проверяю цифры дважды." },
                        { target: "I send the report to my boss.", native: "Я отправляю отчёт своему начальнику." },

                        { target: "At one o'clock I have lunch with my colleagues.", native: "В час я обедаю с коллегами." },
                        { target: "We talk about work and family.", native: "Мы говорим о работе и семье." },
                        { target: "We sometimes go to a small café.", native: "Мы иногда ходим в маленькое кафе." },
                        { target: "After lunch we return to the office.", native: "После обеда мы возвращаемся в офис." },

                        { target: "In the afternoon I call clients.", native: "После обеда я звоню клиентам." },
                        { target: "I explain details about our services.", native: "Я объясняю детали о наших услугах." },
                        { target: "Some clients ask many questions.", native: "Некоторые клиенты задают много вопросов." },
                        { target: "I answer them patiently.", native: "Я отвечаю им терпеливо." },

                        { target: "Right now I am writing an email to a new client.", native: "Прямо сейчас я пишу письмо новому клиенту." },
                        { target: "The client wants information about prices.", native: "Клиент хочет информацию о ценах." },
                        { target: "I am preparing an offer.", native: "Я готовлю предложение." },
                        { target: "I hope the client will accept it.", native: "Я надеюсь, что клиент его примет." },

                        { target: "At five o'clock I finish my work.", native: "В пять часов я заканчиваю работу." },
                        { target: "I clean my desk.", native: "Я убираю свой стол." },
                        { target: "I turn off my computer.", native: "Я выключаю свой компьютер." },
                        { target: "I say goodbye to my colleagues.", native: "Я прощаюсь с коллегами." },

                        { target: "After work I feel tired but satisfied.", native: "После работы я чувствую себя уставшим, но довольным." },
                        { target: "My job is busy but interesting.", native: "Моя работа занятая, но интересная." },
                        { target: "I learn something new every week.", native: "Я узнаю что-то новое каждую неделю." },
                        { target: "I like my job.", native: "Мне нравится моя работа." }
                    ],

                    words: [
                        { id: "w1", target: "responsible for", native: "отвечающий за" },
                        { id: "w2", target: "take care of", native: "заниматься" },
                        { id: "w3", target: "task", native: "задача" },
                        { id: "w4", target: "meeting", native: "встреча" },
                        { id: "w5", target: "schedule", native: "расписание" },

                        { id: "w6", target: "report", native: "отчёт" },
                        { id: "w7", target: "spreadsheet", native: "таблица" },
                        { id: "w8", target: "document", native: "документ" },
                        { id: "w9", target: "client", native: "клиент" },
                        { id: "w10", target: "service", native: "услуга" },

                        { id: "w11", target: "boss", native: "начальник" },
                        { id: "w12", target: "colleague", native: "коллега" },
                        { id: "w13", target: "office", native: "офис" },
                        { id: "w14", target: "desk", native: "стол" },
                        { id: "w15", target: "computer", native: "компьютер" },

                        { id: "w16", target: "email", native: "письмо" },
                        { id: "w17", target: "inbox", native: "почтовый ящик" },
                        { id: "w18", target: "phone call", native: "телефонный звонок" },
                        { id: "w19", target: "offer", native: "предложение" },
                        { id: "w20", target: "responsibility", native: "обязанность" },

                        { id: "w21", target: "carefully", native: "внимательно" },
                        { id: "w22", target: "patiently", native: "терпеливо" },
                        { id: "w23", target: "busy", native: "занятой" },
                        { id: "w24", target: "organized", native: "организованный" },
                        { id: "w25", target: "tired", native: "уставший" },

                        { id: "w26", target: "satisfied", native: "довольный" },
                        { id: "w27", target: "floor", native: "этаж" },
                        { id: "w28", target: "arrive", native: "прибывать" },
                        { id: "w29", target: "prepare", native: "готовить" },
                        { id: "w30", target: "check", native: "проверять" },

                        { id: "w31", target: "explain", native: "объяснять" },
                        { id: "w32", target: "question", native: "вопрос" },
                        { id: "w33", target: "answer", native: "ответ" },
                        { id: "w34", target: "learn", native: "учить" },
                        { id: "w35", target: "finish", native: "заканчивать" },

                        { id: "w36", target: "turn on", native: "включать" },
                        { id: "w37", target: "turn off", native: "выключать" },
                        { id: "w38", target: "help", native: "помогать" },
                        { id: "w39", target: "plan", native: "планировать" },
                        { id: "w40", target: "collect", native: "собирать" },

                        { id: "w41", target: "number", native: "число" },
                        { id: "w42", target: "twice", native: "дважды" },
                        { id: "w43", target: "return", native: "возвращаться" },
                        { id: "w44", target: "offer", native: "предложение" },
                        { id: "w45", target: "city center", native: "центр города" },

                        { id: "w46", target: "right now", native: "прямо сейчас" },
                        { id: "w47", target: "project", native: "проект" },
                        { id: "w48", target: "important", native: "важный" },
                        { id: "w49", target: "week", native: "неделя" },
                        { id: "w50", target: "job", native: "работа" }
                    ]
                },
                // 13. Природа и окружающая среда
                {
                    id: "nature_environment",

                    rule: [
                        "Лексика природы: forest, river, mountain, lake",
                        "Глаголы действий: climb, hike, explore"
                    ].join("\n"),

                    title: "Природа",
                    title_native: "Природа и окружающая среда",
                    title_target: "Nature",

                    sentences: [
                        { target: "Last weekend I visited a beautiful national park.", native: "На прошлых выходных я посетил красивый национальный парк." },
                        { target: "The weather was warm and sunny.", native: "Погода была тёплой и солнечной." },
                        { target: "I wanted to spend the whole day in nature.", native: "Я хотел провести весь день на природе." },
                        { target: "I started my trip early in the morning.", native: "Я начал свою прогулку рано утром." },

                        { target: "First I walked into a large forest.", native: "Сначала я вошёл в большой лес." },
                        { target: "The trees were tall and green.", native: "Деревья были высокими и зелёными." },
                        { target: "I listened to the birds singing.", native: "Я слушал, как поют птицы." },
                        { target: "The forest felt calm and peaceful.", native: "Лес казался спокойным и мирным." },

                        { target: "A small river ran through the forest.", native: "Через лес протекала небольшая река." },
                        { target: "The water was clear and cold.", native: "Вода была прозрачной и холодной." },
                        { target: "I sat near the river for a moment.", native: "Я сел возле реки на минутку." },
                        { target: "I watched the water move slowly.", native: "Я наблюдал, как вода медленно движется." },

                        { target: "After that I continued my hike.", native: "После этого я продолжил свой поход." },
                        { target: "The trail led to a lake.", native: "Тропа вела к озеру." },
                        { target: "The lake was wide and quiet.", native: "Озеро было широким и тихим." },
                        { target: "Mountains stood around the lake.", native: "Вокруг озера стояли горы." },

                        { target: "I took many photos of the mountains.", native: "Я сделал много фотографий гор." },
                        { target: "The air was fresh and clean.", native: "Воздух был свежим и чистым." },
                        { target: "I enjoyed the view a lot.", native: "Мне очень понравился вид." },
                        { target: "I felt relaxed and happy.", native: "Я чувствовал себя расслабленным и счастливым." },

                        { target: "Later I saw a small wooden bridge.", native: "Позже я увидел маленький деревянный мост." },
                        { target: "I crossed the bridge slowly.", native: "Я медленно перешёл мост." },
                        { target: "A group of ducks swam in the water below.", native: "Группа уток плыла в воде внизу." },
                        { target: "I watched them for a while.", native: "Я некоторое время наблюдал за ними." },

                        { target: "Then I climbed a low hill.", native: "Потом я поднялся на невысокий холм." },
                        { target: "From the top I could see the whole valley.", native: "С вершины я мог видеть всю долину." },
                        { target: "The view was amazing.", native: "Вид был потрясающим." },
                        { target: "I took more pictures.", native: "Я сделал ещё больше фотографий." },

                        { target: "On my way down I met two hikers.", native: "На пути вниз я встретил двух туристов." },
                        { target: "We talked about the park.", native: "Мы поговорили о парке." },
                        { target: "They were exploring the same trail.", native: "Они исследовали ту же тропу." },
                        { target: "We wished each other a good day.", native: "Мы пожелали друг другу хорошего дня." },

                        { target: "In the afternoon the sky became cloudy.", native: "После обеда небо стало облачным." },
                        { target: "The wind grew stronger.", native: "Ветер стал сильнее." },
                        { target: "I decided to walk back to the forest.", native: "Я решил вернуться в лес." },
                        { target: "The forest protected me from the wind.", native: "Лес защищал меня от ветра." },

                        { target: "Before leaving the park I sat on a bench.", native: "Перед уходом из парка я сел на скамейку." },
                        { target: "I drank some water.", native: "Я выпил немного воды." },
                        { target: "I rested for a few minutes.", native: "Я отдохнул несколько минут." },
                        { target: "I thought about coming back soon.", native: "Я подумал о том, чтобы скоро вернуться." },

                        { target: "Finally I left the park.", native: "Наконец я покинул парк." },
                        { target: "I felt tired but peaceful.", native: "Я чувствовал себя уставшим, но спокойным." },
                        { target: "It was a wonderful day in nature.", native: "Это был чудесный день на природе." },
                        { target: "I want to explore more places like this.", native: "Я хочу исследовать больше таких мест." }
                    ],

                    words: [
                        { id: "w1", target: "forest", native: "лес" },
                        { id: "w2", target: "river", native: "река" },
                        { id: "w3", target: "mountain", native: "гора" },
                        { id: "w4", target: "lake", native: "озеро" },
                        { id: "w5", target: "valley", native: "долина" },

                        { id: "w6", target: "trail", native: "тропа" },
                        { id: "w7", target: "bridge", native: "мост" },
                        { id: "w8", target: "hill", native: "холм" },
                        { id: "w9", target: "path", native: "путь" },
                        { id: "w10", target: "view", native: "вид" },

                        { id: "w11", target: "fresh", native: "свежий" },
                        { id: "w12", target: "clean", native: "чистый" },
                        { id: "w13", target: "quiet", native: "тихий" },
                        { id: "w14", target: "peaceful", native: "мирный" },
                        { id: "w15", target: "sunny", native: "солнечный" },

                        { id: "w16", target: "cloudy", native: "облачный" },
                        { id: "w17", target: "wind", native: "ветер" },
                        { id: "w18", target: "strong", native: "сильный" },
                        { id: "w19", target: "warm", native: "тёплый" },
                        { id: "w20", target: "cold", native: "холодный" },

                        { id: "w21", target: "explore", native: "исследовать" },
                        { id: "w22", target: "hike", native: "ходить в поход" },
                        { id: "w23", target: "climb", native: "взбираться" },
                        { id: "w24", target: "walk", native: "гулять" },
                        { id: "w25", target: "rest", native: "отдыхать" },

                        { id: "w26", target: "bird", native: "птица" },
                        { id: "w27", target: "duck", native: "утка" },
                        { id: "w28", target: "tree", native: "дерево" },
                        { id: "w29", target: "water", native: "вода" },
                        { id: "w30", target: "air", native: "воздух" },

                        { id: "w31", target: "photo", native: "фото" },
                        { id: "w32", target: "picture", native: "картинка" },
                        { id: "w33", target: "national park", native: "национальный парк" },
                        { id: "w34", target: "bench", native: "скамейка" },
                        { id: "w35", target: "moment", native: "момент" },

                        { id: "w36", target: "whole day", native: "весь день" },
                        { id: "w37", target: "afternoon", native: "день (после обеда)" },
                        { id: "w38", target: "morning", native: "утро" },
                        { id: "w39", target: "weekend", native: "выходные" },
                        { id: "w40", target: "weather", native: "погода" },

                        { id: "w41", target: "calm", native: "спокойный" },
                        { id: "w42", target: "amazing", native: "потрясающий" },
                        { id: "w43", target: "beautiful", native: "красивый" },
                        { id: "w44", target: "clear", native: "чистый / прозрачный" },
                        { id: "w45", target: "wide", native: "широкий" },

                        { id: "w46", target: "group", native: "группа" },
                        { id: "w47", target: "hikers", native: "туристы" },
                        { id: "w48", target: "top", native: "вершина" },
                        { id: "w49", target: "below", native: "внизу" },
                        { id: "w50", target: "return", native: "возвращаться" }
                    ]
                },
                // 14. Жизненные привычки и здоровье A2
                {
                    id: "healthy_lifestyle",

                    rule: [
                        "Структуры: I try to…, I want to…, I need to…",
                        "Темы: спорт, еда, режим дня"
                    ].join("\n"),

                    title: "Здоровый образ жизни",
                    title_native: "Привычки и здоровье",
                    title_target: "Healthy Lifestyle",

                    sentences: [
                        { target: "This year I want to live a healthier life.", native: "В этом году я хочу жить более здоровой жизнью." },
                        { target: "I try to make small changes every day.", native: "Я стараюсь делать небольшие изменения каждый день." },
                        { target: "I need to take better care of my body.", native: "Мне нужно лучше заботиться о своём теле." },
                        { target: "My goal is to feel strong and energetic.", native: "Моя цель — чувствовать себя сильным и энергичным." },

                        { target: "Every morning I wake up earlier now.", native: "Каждое утро я теперь просыпаюсь раньше." },
                        { target: "I drink a glass of water after I wake up.", native: "Я пью стакан воды после пробуждения." },
                        { target: "Then I do a short stretching routine.", native: "Затем я делаю короткую растяжку." },
                        { target: "It helps my body wake up.", native: "Это помогает моему телу проснуться." },

                        { target: "I also try to eat a healthy breakfast.", native: "Я также стараюсь есть полезный завтрак." },
                        { target: "I eat yogurt with fruit.", native: "Я ем йогурт с фруктами." },
                        { target: "Sometimes I add nuts or seeds.", native: "Иногда я добавляю орехи или семечки." },
                        { target: "A good breakfast gives me energy.", native: "Хороший завтрак даёт мне энергию." },

                        { target: "Three times a week I go jogging.", native: "Три раза в неделю я бегаю трусцой." },
                        { target: "I run in the park near my home.", native: "Я бегаю в парке рядом с домом." },
                        { target: "I try to run at least twenty minutes.", native: "Я стараюсь бегать как минимум двадцать минут." },
                        { target: "Sometimes I listen to music while running.", native: "Иногда я слушаю музыку во время бега." },

                        { target: "On weekends I like to ride my bicycle.", native: "По выходным я люблю кататься на велосипеде." },
                        { target: "Cycling makes me feel free.", native: "Катание на велосипеде даёт мне чувство свободы." },
                        { target: "I explore different routes.", native: "Я изучаю разные маршруты." },
                        { target: "Fresh air always makes me feel better.", native: "Свежий воздух всегда улучшает моё самочувствие." },

                        { target: "I am also changing my eating habits.", native: "Я также меняю свои пищевые привычки." },
                        { target: "I try to cook more at home.", native: "Я стараюсь больше готовить дома." },
                        { target: "I want to eat more vegetables.", native: "Я хочу есть больше овощей." },
                        { target: "I need to reduce sugar in my diet.", native: "Мне нужно уменьшить количество сахара в рационе." },

                        { target: "I drink less soda now.", native: "Теперь я пью меньше газировки." },
                        { target: "I drink more water during the day.", native: "Я пью больше воды в течение дня." },
                        { target: "Sometimes I make herbal tea.", native: "Иногда я делаю травяной чай." },
                        { target: "Healthy drinks help me stay hydrated.", native: "Полезные напитки помогают мне оставаться гидратированным." },

                        { target: "Sleep is also very important.", native: "Сон тоже очень важен." },
                        { target: "I try to go to bed earlier.", native: "Я стараюсь ложиться спать раньше." },
                        { target: "I turn off my phone before bed.", native: "Я выключаю телефон перед сном." },
                        { target: "This helps me sleep better.", native: "Это помогает мне спать лучше." },

                        { target: "Stress is bad for my health.", native: "Стресс вреден для моего здоровья." },
                        { target: "I need to relax more often.", native: "Мне нужно чаще расслабляться." },
                        { target: "Sometimes I meditate for ten minutes.", native: "Иногда я медитирую десять минут." },
                        { target: "Deep breathing makes me calmer.", native: "Глубокое дыхание делает меня спокойнее." },

                        { target: "In the evening I take a short walk.", native: "Вечером я делаю короткую прогулку." },
                        { target: "Walking helps me clear my mind.", native: "Прогулка помогает мне очистить мысли." },
                        { target: "I think about the day and my progress.", native: "Я думаю о дне и своём прогрессе." },
                        { target: "Small steps help me build good habits.", native: "Маленькие шаги помогают мне формировать хорошие привычки." },

                        { target: "I know healthy living takes time.", native: "Я знаю, что здоровая жизнь требует времени." },
                        { target: "But I want to continue improving.", native: "Но я хочу продолжать улучшаться." },
                        { target: "Every week I feel a little stronger.", native: "Каждую неделю я чувствую себя немного сильнее." },
                        { target: "I am proud of my healthy choices.", native: "Я горжусь своими полезными выборами." }
                    ],

                    words: [
                        { id: "w1", target: "healthy", native: "здоровый" },
                        { id: "w2", target: "lifestyle", native: "образ жизни" },
                        { id: "w3", target: "try to", native: "стараться" },
                        { id: "w4", target: "need to", native: "нужно" },
                        { id: "w5", target: "want to", native: "хотеть" },

                        { id: "w6", target: "body", native: "тело" },
                        { id: "w7", target: "energy", native: "энергия" },
                        { id: "w8", target: "stretching", native: "растяжка" },
                        { id: "w9", target: "jogging", native: "бег трусцой" },
                        { id: "w10", target: "cycling", native: "велоспорт" },

                        { id: "w11", target: "breakfast", native: "завтрак" },
                        { id: "w12", target: "vegetables", native: "овощи" },
                        { id: "w13", target: "fruit", native: "фрукты" },
                        { id: "w14", target: "water", native: "вода" },
                        { id: "w15", target: "tea", native: "чай" },

                        { id: "w16", target: "sugar", native: "сахар" },
                        { id: "w17", target: "diet", native: "диета" },
                        { id: "w18", target: "cook", native: "готовить" },
                        { id: "w19", target: "eat", native: "есть" },
                        { id: "w20", target: "drink", native: "пить" },

                        { id: "w21", target: "sleep", native: "сон" },
                        { id: "w22", target: "go to bed", native: "ложиться спать" },
                        { id: "w23", target: "wake up", native: "просыпаться" },
                        { id: "w24", target: "habits", native: "привычки" },
                        { id: "w25", target: "relax", native: "расслабляться" },

                        { id: "w26", target: "meditate", native: "медитировать" },
                        { id: "w27", target: "breathe", native: "дышать" },
                        { id: "w28", target: "progress", native: "прогресс" },
                        { id: "w29", target: "strong", native: "сильный" },
                        { id: "w30", target: "calm", native: "спокойный" },

                        { id: "w31", target: "routine", native: "рутина" },
                        { id: "w32", target: "nuts", native: "орехи" },
                        { id: "w33", target: "seeds", native: "семечки" },
                        { id: "w34", target: "fresh air", native: "свежий воздух" },
                        { id: "w35", target: "routes", native: "маршруты" },

                        { id: "w36", target: "glass of water", native: "стакан воды" },
                        { id: "w37", target: "herbal tea", native: "травяной чай" },
                        { id: "w38", target: "reduce", native: "уменьшать" },
                        { id: "w39", target: "hydrate", native: "увлажнять / поддерживать водный баланс" },
                        { id: "w40", target: "clear my mind", native: "очистить мысли" },

                        { id: "w41", target: "stronger", native: "сильнее" },
                        { id: "w42", target: "improving", native: "улучшаться" },
                        { id: "w43", target: "choices", native: "выборы" },
                        { id: "w44", target: "week", native: "неделя" },
                        { id: "w45", target: "evening walk", native: "вечерняя прогулка" },

                        { id: "w46", target: "healthy breakfast", native: "полезный завтрак" },
                        { id: "w47", target: "cook at home", native: "готовить дома" },
                        { id: "w48", target: "eating habits", native: "пищевые привычки" },
                        { id: "w49", target: "go jogging", native: "бегать трусцой" },
                        { id: "w50", target: "healthy choices", native: "здоровые выборы" }
                    ]
                },
                // 15. Дом и обязанности
                {
                    id: "household_chores",

                    rule: [
                        "Фразы: do the dishes, clean the room, take out the trash",
                        "Сравнение частоты: I usually…, I rarely…, I sometimes…"
                    ].join("\n"),

                    title: "Домашние обязанности",
                    title_native: "Работа по дому",
                    title_target: "Household Chores",

                    sentences: [
                        { target: "I live in a small apartment with my family.", native: "Я живу в небольшой квартире со своей семьёй." },
                        { target: "We all share the household chores.", native: "Мы все делим обязанности по дому." },
                        { target: "Everyone has different tasks.", native: "У каждого есть разные задачи." },
                        { target: "We try to keep our home clean and comfortable.", native: "Мы стараемся держать наш дом чистым и уютным." },

                        { target: "I usually make my bed in the morning.", native: "Я обычно заправляю постель утром." },
                        { target: "It takes only a few minutes.", native: "Это занимает всего несколько минут." },
                        { target: "I sometimes forget to do it.", native: "Иногда я забываю это сделать." },
                        { target: "But I try to remember every day.", native: "Но я стараюсь вспоминать каждый день." },

                        { target: "I often clean my room on Saturdays.", native: "Я часто убираю свою комнату по субботам." },
                        { target: "I vacuum the floor and dust the shelves.", native: "Я пылесошу пол и вытираю пыль с полок." },
                        { target: "I open the window to let fresh air in.", native: "Я открываю окно, чтобы впустить свежий воздух." },
                        { target: "It makes the room feel better.", native: "Это делает комнату более приятной." },

                        { target: "My sister usually does the dishes.", native: "Моя сестра обычно моет посуду." },
                        { target: "She likes to listen to music while washing.", native: "Ей нравится слушать музыку во время мытья." },
                        { target: "Sometimes I help her.", native: "Иногда я помогаю ей." },
                        { target: "We talk and laugh together.", native: "Мы разговариваем и смеёмся вместе." },

                        { target: "My father takes out the trash.", native: "Мой отец выносит мусор." },
                        { target: "He rarely forgets this chore.", native: "Он редко забывает эту обязанность." },
                        { target: "He usually does it in the evening.", native: "Обычно он делает это вечером." },
                        { target: "He also repairs things around the house.", native: "Он также чинит вещи по дому." },

                        { target: "My mother cooks dinner most days.", native: "Моя мама готовит ужин почти каждый день." },
                        { target: "She tries to make healthy meals.", native: "Она старается готовить полезные блюда." },
                        { target: "Sometimes I cut vegetables for her.", native: "Иногда я режу овощи для неё." },
                        { target: "I enjoy helping in the kitchen.", native: "Мне нравится помогать на кухне." },

                        { target: "After dinner we clean the table together.", native: "После ужина мы вместе убираем стол." },
                        { target: "We wipe the surface and put things away.", native: "Мы протираем поверхность и убираем вещи." },
                        { target: "It takes only a few minutes.", native: "Это занимает всего несколько минут." },
                        { target: "Working together makes chores easier.", native: "Совместная работа делает обязанности легче." },

                        { target: "On Sunday we clean the whole apartment.", native: "В воскресенье мы убираем всю квартиру." },
                        { target: "We sweep the floors.", native: "Мы подметаем полы." },
                        { target: "We clean the bathroom.", native: "Мы убираем ванную комнату." },
                        { target: "We wash the mirrors.", native: "Мы моем зеркала." },

                        { target: "My sister washes her clothes.", native: "Моя сестра стирает свою одежду." },
                        { target: "I hang the clothes to dry.", native: "Я вешаю одежду сушиться." },
                        { target: "My father folds the dry clothes.", native: "Мой отец складывает сухую одежду." },
                        { target: "Everyone does something.", native: "Каждый делает что-то." },

                        { target: "Sometimes we are tired after cleaning.", native: "Иногда мы устаём после уборки." },
                        { target: "But the apartment looks nice.", native: "Но квартира выглядит хорошо." },
                        { target: "We feel proud of our clean home.", native: "Мы гордимся своим чистым домом." },
                        { target: "A tidy home makes us feel happy.", native: "Аккуратный дом делает нас счастливыми." },

                        { target: "In the evening we relax on the sofa.", native: "Вечером мы отдыхаем на диване." },
                        { target: "We drink tea and talk.", native: "Мы пьём чай и разговариваем." },
                        { target: "Sometimes we watch a movie together.", native: "Иногда мы вместе смотрим фильм." },
                        { target: "It is a nice end to a busy day.", native: "Это приятное завершение насыщенного дня." }
                    ],

                    words: [
                        { id: "w1", target: "do the dishes", native: "мыть посуду" },
                        { id: "w2", target: "clean the room", native: "убирать комнату" },
                        { id: "w3", target: "take out the trash", native: "выносить мусор" },
                        { id: "w4", target: "make the bed", native: "застилать кровать" },
                        { id: "w5", target: "vacuum", native: "пылесосить" },

                        { id: "w6", target: "dust", native: "вытирать пыль" },
                        { id: "w7", target: "sweep", native: "подметать" },
                        { id: "w8", target: "wipe", native: "вытирать" },
                        { id: "w9", target: "repair", native: "чинить" },
                        { id: "w10", target: "wash", native: "мыть" },

                        { id: "w11", target: "healthy meals", native: "полезные блюда" },
                        { id: "w12", target: "vegetables", native: "овощи" },
                        { id: "w13", target: "kitchen", native: "кухня" },
                        { id: "w14", target: "clothes", native: "одежда" },
                        { id: "w15", target: "fold", native: "складывать" },

                        { id: "w16", target: "hang to dry", native: "вешать сушиться" },
                        { id: "w17", target: "surface", native: "поверхность" },
                        { id: "w18", target: "chore", native: "домашняя обязанность" },
                        { id: "w19", target: "shared chores", native: "разделённые обязанности" },
                        { id: "w20", target: "comfortable home", native: "уютный дом" },

                        { id: "w21", target: "usually", native: "обычно" },
                        { id: "w22", target: "rarely", native: "редко" },
                        { id: "w23", target: "sometimes", native: "иногда" },
                        { id: "w24", target: "often", native: "часто" },
                        { id: "w25", target: "most days", native: "большинство дней" },

                        { id: "w26", target: "family", native: "семья" },
                        { id: "w27", target: "apartment", native: "квартира" },
                        { id: "w28", target: "home", native: "дом" },
                        { id: "w29", target: "sofa", native: "диван" },
                        { id: "w30", target: "mirror", native: "зеркало" },

                        { id: "w31", target: "window", native: "окно" },
                        { id: "w32", target: "fresh air", native: "свежий воздух" },
                        { id: "w33", target: "help", native: "помогать" },
                        { id: "w34", target: "tired", native: "уставший" },
                        { id: "w35", target: "proud", native: "гордый" },

                        { id: "w36", target: "busy day", native: "насыщенный день" },
                        { id: "w37", target: "clean home", native: "чистый дом" },
                        { id: "w38", target: "wipe the table", native: "вытирать стол" },
                        { id: "w39", target: "wash the mirrors", native: "мыть зеркала" },
                        { id: "w40", target: "whole apartment", native: "вся квартира" },

                        { id: "w41", target: "listen to music", native: "слушать музыку" },
                        { id: "w42", target: "busy", native: "занятый" },
                        { id: "w43", target: "together", native: "вместе" },
                        { id: "w44", target: "talk", native: "разговаривать" },
                        { id: "w45", target: "laugh", native: "смеяться" },

                        { id: "w46", target: "share", native: "делить" },
                        { id: "w47", target: "kitchen chores", native: "кухонные обязанности" },
                        { id: "w48", target: "wash clothes", native: "стирать одежду" },
                        { id: "w49", target: "dry clothes", native: "сушить одежду" },
                        { id: "w50", target: "clean the bathroom", native: "убирать ванную" }
                    ]
                }
            ]
        }

    ],
};

export const libraryPTRU: Library = {
    learningLang: "pt",
    sections: [
        {
            id: "A1-A2",
            title_native: "A1-A2",
            title_target: "A1-A2",
            texts: [
                {
                    id: "PTRU1",
                    rule: [
                        "ser: sou, és, é, somos, sois, são",
                        "ter: tenho, tens, tem, temos, tendes, têm",
                        "ver: vejo, vês, vê, vemos, vedes, veem",
                        "fazer: faço, fazes, faz, fazemos, fazeis, fazem",
                    ].join("\n"),
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
                    id: "PTRU2",
                    rule: [
                        "–m: jovem, jovem, jovens, jovens",
                        "-z: feliz, feliz, felizes, felizes",
                        "–ês: português, portuguesa, portugueses, portuguesas",
                        "simples: simples, simples, simples, simples",
                        "-o: preto, preta, pretos, pretas",
                        "-e: verde, verde, verdes, verdes",
                        "-l: azul, azul, azuis, azuis",
                    ].join("\n"),
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
                    id: "PTRU3",
                    rule: [
                        "algum(какой-то): algum, alguma, alguns, algumas + algo(что-то) + alguém(кто-то)",
                        "nenhum(никакой): nenhum, nenhuma, nenhuns, nenhumas + nada(ничто) + ninguém(никто)",
                    ].join("\n"),

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
                        { id: "w13", native: "a mesa", target: "стол" },
                        { id: "w14", native: "a carta", target: "письмо" },
                        { id: "w15", native: "o marcador", target: "закладка" },
                        { id: "w16", native: "ler", target: "читать" },
                        { id: "w17", native: "ouvir", target: "слышать" },
                        { id: "w18", native: "o som", target: "звук" },
                        { id: "w19", native: "ajudar", target: "помогать" },
                        { id: "w20", native: "procurar", target: "искать" },
                        { id: "w21", native: "ver", target: "видеть" },
                        { id: "w22", native: "deixar", target: "оставлять" },
                        { id: "w23", native: "voltar", target: "возвращаться" },
                        { id: "w24", native: "comer", target: "есть" },
                        { id: "w25", native: "o bolo", target: "пирог" },
                        { id: "w26", native: "o homem", target: "мужчина" },
                        { id: "w27", native: "importante", target: "важный" },
                        { id: "w28", native: "outro", target: "другой" },
                        { id: "w29", native: "sentar-se", target: "садиться" },
                        { id: "w30", native: "a prateleira", target: "полка" },
                        { id: "w31", native: "desaparecer", target: "пропадать / исчезать" },
                        { id: "w32", native: "encontrar", target: "находить" },
                        { id: "w33", native: "acontecer", target: "происходить" },
                        { id: "w34", native: "apagar", target: "гасить (свет)" },
                        { id: "w35", native: "houve", target: "было, случилось" },
                        { id: "w36", native: "o jornal", target: "газета" },
                        { id: "w37", native: "a manhã", target: "утро" },
                        { id: "w38", native: "a tarde", target: "день (время суток)" },
                        { id: "w39", native: "o fim do dia", target: "конец дня" },
                        { id: "w40", native: "estranho", target: "странный" },
                        { id: "w41", native: "a luz", target: "свет" },
                        { id: "w44", native: "a página", target: "страница" },
                        { id: "w45", native: "necessário", target: "нужный" },
                        { id: "w46", native: "verificar", target: "проверять" },
                        { id: "w47", native: "o caderno", target: "тетрадь" },
                        { id: "w48", native: "aberta", target: "открытая (ж.р.)" },
                        { id: "w49", native: "o lápis", target: "карандаш" },
                        { id: "w50", native: "voltar mais tarde", target: "возвращаться позже" },
                        { id: "w51", native: "antigo", target: "старый (о предмете)" },
                        { id: "w52", native: "pegar", target: "брать" },
                        { id: "w56", native: "agradecer", target: "благодарить" },

                    ]

                },
                {
                    id: "PTRU4",
                    rule: [
                        "todo(весь): todo o dia, toda a noite, todos os dias, todas as noites + tudo(всё)",
                        "bom(хороший): bom, boa, bons, boas + bem(хорошо)",
                        "mau(плохой): mau, má, maus, más + mal(плохо)",
                    ].join("\n"),

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
                    id: "PTRU5",
                    rule: [
                        "muito: muito vinho, muita água, muitos meninos, muitas meninas // muito simpático, muito simpática, muito simpáticos, muito simpáticas // falo muito",
                        "pouco: pouco vinho, pouca água, poucos meninos, poucas meninas // pouco simpático, pouco simpática, pouco simpáticos, pouco simpáticas // falo pouco // um pouco de 🍷",
                        "tanto: tanto vinho, tanta água, tantos meninos, tantas meninas // tão alto, tão alta, tão altos, tão altas // falo tanto",
                    ].join("\n"),

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
                    id: "PTRU6",
                    rule: [
                        "quem: кто — Quem é você?",
                        "o que: что — O que você faz?",
                        "que: какой — Que livro você lê?",
                        "qual: который/какой — Qual é o seu nome?",
                        "quais: какие — Quais são os seus amigos?",
                        "onde: где — Onde você mora?",
                        "de onde: откуда — De onde você é?",
                        "para onde: куда — Para onde você vai?",
                        "quando: когда — Quando começa a aula?",
                        "como: как — Como você está?",
                        "por que: почему — Por que você estuda português?",
                        "para que: для чего — Para que serve isto?",
                        "quanto: сколько (м.р.) — Quanto custa?",
                        "quanta: сколько (ж.р.) — Quanta água você bebe?",
                        "quantos: сколько (мн. м.) — Quantos alunos há?",
                        "quantas: сколько (мн. ж.) — Quantas pessoas vêm?",
                    ].join("\n"),
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
                        { id: "w1", native: "por que", target: "почему" },
                        { id: "w2", native: "o que", target: "что" },
                        { id: "w3", native: "quem", target: "кто" },
                        { id: "w4", native: "onde", target: "где" },
                        { id: "w5", native: "aonde", target: "куда (движение)" },
                        { id: "w6", native: "de onde", target: "откуда" },
                        { id: "w7", native: "quando", target: "когда" },
                        { id: "w8", native: "como", target: "как" },
                        { id: "w9", native: "para que", target: "для чего" },
                        { id: "w10", native: "qual", target: "который" },
                        { id: "w11", native: "quais", target: "какие" },
                        { id: "w12", native: "quanto", target: "сколько (м.р.)" },
                        { id: "w13", native: "quanta", target: "сколько (ж.р.)" },
                        { id: "w14", native: "quantos", target: "сколько (мн. м.)" },
                        { id: "w15", native: "quantas", target: "сколько (мн. ж.)" },
                        { id: "w16", native: "em que", target: "в каком" },
                        { id: "w17", native: "de que", target: "о чём" },
                        { id: "w18", native: "com quem", target: "с кем" },

                        // ——— Новые слова (ТОЛЬКО из текста) ———

                        { id: "w19", native: "acordar", target: "просыпаться" },
                        { id: "w20", native: "ouvir", target: "слышать" },
                        { id: "w21", native: "liga", target: "он/она звонит" },
                        { id: "w22", native: "vizinho", target: "сосед" },
                        { id: "w23", native: "estafeta", target: "курьер" },
                        { id: "w24", native: "telemóvel", target: "телефон" },
                        { id: "w25", native: "mesa", target: "стол" },
                        { id: "w26", native: "pôr", target: "класть" },
                        { id: "w27", native: "barulho", target: "шум" },
                        { id: "w28", native: "corredor", target: "коридор" },

                        { id: "w29", native: "conseguir", target: "успевать, суметь" },
                        { id: "w30", native: "ficar", target: "оставаться" },
                        { id: "w31", native: "calmo", target: "спокойный" },

                        { id: "w32", native: "abrir", target: "открывать" },
                        { id: "w33", native: "janela", target: "окно" },

                        { id: "w34", native: "autocarro", target: "автобус" },
                        { id: "w35", native: "rota", target: "маршрут" },
                        { id: "w36", native: "chegar", target: "приходить, приезжать" },

                        { id: "w37", native: "tempo", target: "время" },
                        { id: "w38", native: "chávena", target: "чашка" },
                        { id: "w39", native: "energia", target: "энергия" },

                        { id: "w40", native: "tomar", target: "принимать, пить" },
                        { id: "w41", native: "pequeno-almoço", target: "завтрак" },

                        { id: "w42", native: "paragem", target: "остановка" },
                        { id: "w43", native: "fila", target: "очередь" },
                        { id: "w44", native: "cheio", target: "полный, переполненный" },
                        { id: "w45", native: "lugar", target: "место" },

                        { id: "w46", native: "motorista", target: "водитель" },
                        { id: "w47", native: "olhar", target: "смотреть" },

                        { id: "w48", native: "colega", target: "коллега" },
                        { id: "w49", native: "chefe", target: "шеф, начальник" },
                        { id: "w50", native: "aproximar-se", target: "приближаться" }
                    ]

                },

                {
                    id: "PTRU7",
                    rule: [
                        "meu / minha: — мой / моя — meu livro, minha casa",
                        "meus / minhas: — мои — meus amigos, minhas roupas",
                        "teu / tua: — твой / твоя — teu carro, tua família",
                        "seu / sua: — его / её / ваш — seu carro, sua mãe",
                        "seus / suas: — его / её / ваши — seus colegas, suas ideias",
                        "dele: — его (не меняется) — o carro dele",
                        "dela: — её (не меняется) — a casa dela",
                        "deles / delas: — их — os planos deles, as coisas delas",
                        "nosso / nossa: — наш / наша — nosso trabalho, nossa rua",
                        "nossos / nossas: — наши — nossos pais, nossas viagens",
                        "vosso / vossa: — ваш / ваша — vosso projeto, vossa escola",
                        "vosso / vossa (мн.): — ваши — vossos filhos, vossas roupas"
                    ].join("\n"),

                    title: "Тренировка притяжательных местоимений",
                    title_native: "История о доме, семье и вещах",
                    title_target: "Uma história sobre casa, família e coisas",

                    sentences: [
                        {
                            native: "В небольшом городе живёт семья, и их дом всегда полон жизни.",
                            target: "Numa cidade pequena vive uma família, e a casa deles está sempre cheia de vida."
                        },
                        {
                            native: "У отца есть своя небольшая мастерская, и он проводит там много времени.",
                            target: "O pai tem a sua pequena oficina, e passa lá muito tempo."
                        },
                        {
                            native: "Он очень любит свои инструменты и всегда держит их в порядке.",
                            target: "Ele gosta muito das suas ferramentas e mantém tudo em ordem."
                        },
                        {
                            native: "Мать работает из дома и проводит большую часть дня в своём кабинете.",
                            target: "A mãe trabalha de casa e passa grande parte do dia no seu escritório."
                        },
                        {
                            native: "Она часто говорит, что её рабочий стол — это её личный мир.",
                            target: "Ela costuma dizer que a sua secretária é o seu mundo pessoal."
                        },
                        {
                            native: "Сын учится в школе, и его школьные тетради всегда лежат на столе.",
                            target: "O filho estuda na escola, e os seus cadernos escolares estão sempre em cima da mesa."
                        },
                        {
                            native: "Он любит показывать отцу свои новые рисунки.",
                            target: "Ele gosta de mostrar ao pai os seus novos desenhos."
                        },
                        {
                            native: "Дочь играет на пианино и каждый день репетирует свои мелодии.",
                            target: "A filha toca piano e pratica as suas melodias todos os dias."
                        },
                        {
                            native: "Её музыкальная комната — самое тихое место в доме.",
                            target: "A sala de música dela é o lugar mais calmo da casa."
                        },
                        {
                            native: "У семьи есть два кота, и их миски всегда стоят на кухне.",
                            target: "A família tem dois gatos, e as tigelas deles ficam sempre na cozinha."
                        },
                        {
                            native: "Каждый кот имеет своё любимое место возле окна.",
                            target: "Cada gato tem o seu lugar preferido perto da janela."
                        },
                        {
                            native: "По вечерам отец читает свою книгу в кресле рядом с лампой.",
                            target: "À noite o pai lê o seu livro na poltrona ao lado da lâmpada."
                        },
                        {
                            native: "Мать предпочитает смотреть свои сериалы в гостиной.",
                            target: "A mãe prefere ver as suas séries na sala de estar."
                        },
                        {
                            native: "Сын играет в свои игры на компьютере, когда заканчивает уроки.",
                            target: "O filho joga os seus jogos no computador quando termina os trabalhos."
                        },
                        {
                            native: "Дочь слушает свою любимую музыку перед сном.",
                            target: "A filha ouve a sua música preferida antes de dormir."
                        },
                        {
                            native: "Каждый из них ценит своё личное пространство.",
                            target: "Cada um deles valoriza o seu espaço pessoal."
                        },
                        {
                            native: "Но по выходным семья собирается вместе в своей большой кухне.",
                            target: "Mas aos fins de semana a família reúne-se na sua cozinha grande."
                        },
                        {
                            native: "Они готовят свои любимые блюда и делятся историями.",
                            target: "Eles preparam os seus pratos favoritos e partilham histórias."
                        },
                        {
                            native: "Отец рассказывает детям о своём детстве.",
                            target: "O pai conta aos filhos sobre a sua infância."
                        },
                        {
                            native: "Мать говорит о своих мечтах и планах.",
                            target: "A mãe fala sobre os seus sonhos e planos."
                        },
                        {
                            native: "Сын показывает семье свои новые фотографии.",
                            target: "O filho mostra à família as suas novas fotografias."
                        },
                        {
                            native: "Дочь играет свою мелодию, и все слушают её внимательно.",
                            target: "A filha toca a sua melodia, e todos a ouvem com atenção."
                        },
                        {
                            native: "Иногда к ним приходят друзья, и каждый приносит своё угощение.",
                            target: "Às vezes os amigos visitam a família, e cada um traz a sua sobremesa."
                        },
                        {
                            native: "Дом наполняется смехом, и каждый чувствует себя в своей тарелке.",
                            target: "A casa enche-se de riso, e cada pessoa sente-se no seu próprio lugar."
                        },
                        {
                            native: "После ужина семья убирает посуду и моет свои тарелки.",
                            target: "Depois do jantar a família arruma a louça e lava os seus pratos."
                        },
                        {
                            native: "Коты получают свою вечернюю еду и идут на свои кроватки.",
                            target: "Os gatos recebem a sua comida da noite e vão para as suas caminhas."
                        },
                        {
                            native: "Когда наступает ночь, каждый идёт в свою комнату.",
                            target: "Quando chega a noite, cada um vai para o seu quarto."
                        },
                        {
                            native: "Отец выключает свою лампу и засыпает быстро.",
                            target: "O pai apaga a sua lâmpada e adormece depressa."
                        },
                        {
                            native: "Мать проверяет свои письма перед сном.",
                            target: "A mãe verifica os seus emails antes de dormir."
                        },
                        {
                            native: "Сын складывает свои тетради в рюкзак.",
                            target: "O filho arruma os seus cadernos na mochila."
                        },
                        {
                            native: "Дочь ставит своё пианино на тихий режим.",
                            target: "A filha coloca o seu piano no modo silencioso."
                        },
                        {
                            native: "Их дом становится спокойным и тёплым.",
                            target: "A casa deles fica calma e acolhedora."
                        },
                        {
                            native: "Это место принадлежит каждому из них.",
                            target: "Este lugar pertence a cada um deles."
                        }
                    ],

                    words: [
                        { id: "w1", native: "meu", target: "мой" },
                        { id: "w2", native: "minha", target: "моя" },
                        { id: "w3", native: "meus", target: "мои (м.)" },
                        { id: "w4", native: "minhas", target: "мои (ж.)" },
                        { id: "w5", native: "seu", target: "его / её / ваш" },
                        { id: "w6", native: "sua", target: "его / её / ваша" },
                        { id: "w7", native: "seus", target: "их / его / её" },
                        { id: "w8", native: "suas", target: "их / его / её" },
                        { id: "w9", native: "dele", target: "его" },
                        { id: "w10", native: "dela", target: "её" },
                        { id: "w11", native: "deles", target: "их (м.)" },
                        { id: "w12", native: "delas", target: "их (ж.)" },
                        { id: "w13", native: "nosso", target: "наш" },
                        { id: "w14", native: "nossa", target: "наша" },
                        { id: "w15", native: "nossos", target: "наши (м.)" },
                        { id: "w16", native: "nossas", target: "наши (ж.)" },
                        { id: "w17", native: "família", target: "семья" },
                        { id: "w18", native: "oficina", target: "мастерская" },
                        { id: "w19", native: "ferramenta", target: "инструмент" },
                        { id: "w20", native: "ordem", target: "порядок" },
                        { id: "w21", native: "escritório", target: "кабинет" },
                        { id: "w22", native: "secretária", target: "письменный стол" },
                        { id: "w23", native: "caderno", target: "тетрадь" },
                        { id: "w24", native: "desenho", target: "рисунок" },
                        { id: "w25", native: "melodia", target: "мелодия" },
                        { id: "w26", native: "gato", target: "кот" },
                        { id: "w27", native: "tigela", target: "миска" },
                        { id: "w28", native: "lâmpada", target: "лампа" },
                        { id: "w29", native: "jantar", target: "ужин" },
                        { id: "w30", native: "prato", target: "тарелка" },
                        { id: "w31", native: "cama", target: "кровать" },
                        { id: "w32", native: "quarto", target: "комната" },
                        { id: "w33", native: "acender", target: "включать" },
                        { id: "w34", native: "apagar", target: "выключать" },
                        { id: "w35", native: "arrumar", target: "убирать" },
                        { id: "w36", native: "valorizar", target: "ценить" },
                        { id: "w37", native: "visitar", target: "посещать" },
                        { id: "w38", native: "história", target: "история" },
                        { id: "w39", native: "infância", target: "детство" },
                        { id: "w40", native: "plano", target: "план" },
                        { id: "w41", native: "sonho", target: "мечта" },
                        { id: "w42", native: "fotografia", target: "фотография" },
                        { id: "w43", native: "música", target: "музыка" },
                        { id: "w44", native: "silencioso", target: "тихий" },
                        { id: "w45", native: "acolhedor", target: "уютный" },
                        { id: "w46", native: "preferido", target: "любимый" },
                        { id: "w47", native: "pessoal", target: "личный" },
                        { id: "w48", native: "lugar", target: "место" },
                        { id: "w49", native: "espaço", target: "пространство" },
                        { id: "w50", native: "pertencer", target: "принадлежать" }
                    ]
                },
                {
                    id: "PTRU8",
                    rule: [
                        "em + o = no — no meu quarto (в моей комнате)",
                        "em + a = na — na tua bolsa (в твоей сумке)",
                        "de + o = do — do seu trabalho (от его работы)",
                        "de + a = da — da nossa casa (от нашего дома)",
                        "a + o = ao — ao meu amigo (к моему другу)",
                        "a + a = à — à sua mãe (к его/её маме)",
                        "por + o = pelo — pelo meu bairro (по моему району)",
                        "por + a = pela — pela sua rua (по его улице)",
                        "para + o = para o — para o seu carro (для его автомобиля)",
                        "para + a = para a — para a nossa filha (для нашей дочери)",
                        "com + o = com o — com o meu colega (с моим коллегой)",
                        "com + a = com a — com a tua professora (с твоей учительницей)",
                        "em + os = nos — nos seus amigos (в его/её друзьях)",
                        "em + as = nas — nas minhas ideias (в моих идеях)",
                        "de + os = dos — dos nossos vizinhos (от наших соседей)",
                        "de + as = das — das suas coisas (от её вещей)"
                    ].join("\n"),

                    title: "Тренировка притяжательных местоимений с предлогами",
                    title_native: "День Анны и её пространства",
                    title_target: "O dia da Ana e os seus espaços",

                    sentences: [
                        {
                            native: "Анна просыпается рано и выходит на балкон из своей комнаты.",
                            target: "A Ana acorda cedo e sai para a varanda do seu quarto."
                        },
                        {
                            native: "Она любит начинать утро с чашки кофе на своём любимом стуле.",
                            target: "Ela gosta de começar a manhã com uma chávena de café na sua cadeira preferida."
                        },
                        {
                            native: "На столе лежит блокнот с её заметками.",
                            target: "Na mesa está um caderno com as suas anotações."
                        },
                        {
                            native: "Она смотрит на улицу из своего окна и видит соседей у их ворот.",
                            target: "Ela olha para a rua da sua janela e vê os vizinhos nos seus portões."
                        },
                        {
                            native: "Анна вспоминает, что ей нужно зайти к своей подруге.",
                            target: "A Ana lembra-se de que precisa de ir à sua amiga."
                        },
                        {
                            native: "Она кладёт ключи в свою сумку и выходит из дома.",
                            target: "Ela põe as chaves na sua mala e sai de casa."
                        },
                        {
                            native: "По дороге она проходит по своему тихому району.",
                            target: "Pelo caminho ela passa pelo seu bairro tranquilo."
                        },
                        {
                            native: "Анна идёт к остановке, чтобы сесть в автобус к своему офису.",
                            target: "A Ana vai à paragem para apanhar o autocarro ao seu escritório."
                        },
                        {
                            native: "В автобусе она думает о своих планах на день.",
                            target: "No autocarro ela pensa nos seus planos para o dia."
                        },
                        {
                            native: "Анна выходит у здания, возле которого стоит кафе её коллеги.",
                            target: "A Ana sai no prédio ao lado do café do seu colega."
                        },
                        {
                            native: "Коллега машет ей рукой из-за своего прилавка.",
                            target: "O colega acena-lhe por detrás do seu balcão."
                        },
                        {
                            native: "Анна здоровается и покупает кофе для своей команды.",
                            target: "A Ana cumprimenta-o e compra um café para a sua equipa."
                        },
                        {
                            native: "Она идёт к лестнице, ведущей на этаж с её офисом.",
                            target: "Ela vai para as escadas que levam ao andar do seu escritório."
                        },
                        {
                            native: "На рабочем столе Анны лежат документы для её проекта.",
                            target: "Na secretária da Ana estão documentos para o seu projeto."
                        },
                        {
                            native: "Она открывает ноутбук и пишет письмо своему руководителю.",
                            target: "Ela abre o portátil e escreve uma mensagem ao seu chefe."
                        },
                        {
                            native: "После работы Анна идёт в магазин возле её дома.",
                            target: "Depois do trabalho a Ana vai ao supermercado perto da sua casa."
                        },
                        {
                            native: "Она покупает продукты для своего ужина.",
                            target: "Ela compra produtos para o seu jantar."
                        },
                        {
                            native: "Дома Анна ставит сумки на кухонный стол и включает свою музыку.",
                            target: "Em casa a Ana põe os sacos na mesa da cozinha e liga a sua música."
                        },
                        {
                            native: "На кухне она готовит суп для своей семьи.",
                            target: "Na cozinha ela prepara uma sopa para a sua família."
                        },
                        {
                            native: "Во время ужина Анна рассказывает родным о своём дне.",
                            target: "Durante o jantar a Ana conta aos seus familiares sobre o seu dia."
                        },
                        {
                            native: "После ужина она выходит на прогулку со своим псом.",
                            target: "Depois do jantar ela vai passear com o seu cão."
                        },
                        {
                            native: "Они идут по дороге возле их дома.",
                            target: "Eles caminham pela rua ao lado da casa deles."
                        },
                        {
                            native: "Анна любит смотреть на огни в окнах других людей.",
                            target: "A Ana gosta de olhar para as luzes nas janelas das outras pessoas."
                        },
                        {
                            native: "Её пёс тянет поводок к своему любимому парку.",
                            target: "O seu cão puxa a trela para o seu parque preferido."
                        },
                        {
                            native: "В парке Анна сидит на скамейке и читает книгу из своей сумки.",
                            target: "No parque a Ana senta-se no banco e lê um livro da sua mala."
                        },
                        {
                            native: "Когда становится темно, она возвращается к своему дому.",
                            target: "Quando escurece, ela volta à sua casa."
                        },
                        {
                            native: "В своей комнате Анна включает лампу около её кровати.",
                            target: "No seu quarto a Ana liga a lâmpada ao lado da sua cama."
                        },
                        {
                            native: "Она делает заметки в блокноте для своих будущих идей.",
                            target: "Ela faz anotações no caderno para as suas ideias futuras."
                        },
                        {
                            native: "Перед сном Анна открывает окно к своему саду.",
                            target: "Antes de dormir a Ana abre a janela para o seu jardim."
                        },
                        {
                            native: "Ночь ложится мягко на улицы её маленького города.",
                            target: "A noite cai suavemente sobre as ruas da sua pequena cidade."
                        }
                    ],

                    words: [
                        { id: "w1", native: "do", target: "от, из (de + o)" },
                        { id: "w2", native: "da", target: "от, из (de + a)" },
                        { id: "w3", native: "no", target: "в (em + o)" },
                        { id: "w4", native: "na", target: "в (em + a)" },
                        { id: "w5", native: "ao", target: "к (a + o)" },
                        { id: "w6", native: "à", target: "к (a + a)" },
                        { id: "w7", native: "pelo", target: "по (por + o)" },
                        { id: "w8", native: "pela", target: "по (por + a)" },

                        { id: "w9", native: "seu", target: "его/её/ваш" },
                        { id: "w10", native: "sua", target: "его/её/ваша" },
                        { id: "w11", native: "nosso", target: "наш" },
                        { id: "w12", native: "nossa", target: "наша" },
                        { id: "w13", native: "dele", target: "его" },
                        { id: "w14", native: "dela", target: "её" },

                        { id: "w15", native: "varanda", target: "балкон" },
                        { id: "w16", native: "janela", target: "окно" },
                        { id: "w17", native: "mala", target: "сумка" },
                        { id: "w18", native: "bairro", target: "район" },
                        { id: "w19", native: "paragem", target: "остановка" },
                        { id: "w20", native: "escritório", target: "офис" },
                        { id: "w21", native: "chefe", target: "начальник" },
                        { id: "w22", native: "escada", target: "лестница" },
                        { id: "w23", native: "secretária", target: "стол" },
                        { id: "w24", native: "projeto", target: "проект" },
                        { id: "w25", native: "equipa", target: "команда" },
                        { id: "w26", native: "supermercado", target: "магазин" },
                        { id: "w27", native: "produto", target: "продукт" },
                        { id: "w28", native: "familiar", target: "член семьи" },
                        { id: "w29", native: "cão", target: "пёс" },
                        { id: "w30", native: "trela", target: "поводок" },
                        { id: "w31", native: "parque", target: "парк" },
                        { id: "w32", native: "banco", target: "скамейка" },
                        { id: "w33", native: "jardim", target: "сад" },
                        { id: "w34", native: "cidade", target: "город" },
                        { id: "w35", native: "chave", target: "ключ" },
                        { id: "w36", native: "anotação", target: "заметка" },
                        { id: "w37", native: "ideia", target: "идея" },
                        { id: "w38", native: "jantar", target: "ужин" },
                        { id: "w39", native: "cozinha", target: "кухня" },
                        { id: "w40", native: "caminho", target: "путь" },
                        { id: "w41", native: "andar", target: "этаж" },
                        { id: "w42", native: "balcão", target: "прилавок" },
                        { id: "w43", native: "luz", target: "свет" },
                        { id: "w44", native: "porta", target: "дверь" },
                        { id: "w45", native: "sacola", target: "пакет" },
                        { id: "w46", native: "trabalho", target: "работа" },
                        { id: "w47", native: "rua", target: "улица" },
                        { id: "w48", native: "noite", target: "ночь" },
                        { id: "w49", native: "café", target: "кофе" },
                        { id: "w50", native: "visão", target: "вид, взгляд" }
                    ]
                },

                {
                    id: "PTRU9",
                    rule: [
                        "de + esse = desse — Eu preciso desse livro (мне нужна эта твоя книга)",
                        "em + esse = nesse — Eu moro nesse prédio (я живу в этом доме)",
                        "a + esse = àquele (в Португалии: a esse = a esse; àquele = к тому)",
                        "de + este = deste — perto deste lugar (рядом с этим местом)",
                        "em + este = neste — neste momento (в этот момент)",
                        "de + aquele = daquele — perto daquele parque (рядом с тем парком)",
                        "em + aquele = naquele — naquela rua (на той улице)",
                        "com + meu/sua — com o meu amigo (с моим другом), com a sua mãe (с его матерью)",
                        "por + minha/suas — pela minha rua (по моей улице), pelos seus planos (по его/её планам)"
                    ].join("\n"),

                    title: "Тренировка указательных + предлоги + принадлежность",
                    title_native: "День Марко и предметы вокруг него",
                    title_target: "O dia do Marco e as coisas à sua volta",


                    sentences: [
                        {
                            native: "Марко начинает день на своей кухне и смотрит на окно этого маленького помещения.",
                            target: "O Marco começa o dia na sua cozinha e olha para a janela deste pequeno espaço."
                        },
                        {
                            native: "Он берёт чашку с полки возле этого окна и наливает туда кофе.",
                            target: "Ele pega a chávena da prateleira perto dessa janela e põe lá o café."
                        },
                        {
                            native: "На столе лежит блокнот Марко, и он открывает его на странице из прошлой недели.",
                            target: "Na mesa está o caderno do Marco, e ele abre-o na página daquela semana passada."
                        },
                        {
                            native: "Он вспоминает, что должен вернуться к тому проекту, который он написал в том блокноте.",
                            target: "Ele lembra-se de que deve voltar àquele projeto que escreveu naquele caderno."
                        },
                        {
                            native: "Перед выходом Марко кладёт ключи в сумку, которая висит на спинке его стула.",
                            target: "Antes de sair, o Marco põe as chaves na mala que está nas costas da sua cadeira."
                        },
                        {
                            native: "Он выходит из дома и идёт по улице, рядом с которой находится парк его района.",
                            target: "Ele sai de casa e caminha pela rua ao lado do parque do seu bairro."
                        },
                        {
                            native: "Марко любит смотреть на людей, которые проходят по той дорожке возле деревьев.",
                            target: "O Marco gosta de observar as pessoas que passam pelo caminho perto daquelas árvores."
                        },
                        {
                            native: "Он останавливается возле киоска и покупает воду у продавца, который работает в этом месте много лет.",
                            target: "Ele pára perto do quiosque e compra água ao vendedor que trabalha neste lugar há muitos anos."
                        },
                        {
                            native: "Потом Марко идёт к автобусной остановке и ждёт транспорта на этой платформе.",
                            target: "Depois, o Marco vai à paragem de autocarro e espera o transporte nessa plataforma."
                        },
                        {
                            native: "Он читает сообщение от своей сестры, которая спрашивает о тех документах для семьи.",
                            target: "Ele lê uma mensagem da sua irmã, que pergunta sobre aqueles documentos para a família."
                        },
                        {
                            native: "Марко отвечает, что отдаст эти документы вечером.",
                            target: "O Marco responde que vai entregar esses documentos à noite."
                        },
                        {
                            native: "В автобусе он садится на место рядом с дверью и кладёт рюкзак возле своих ног.",
                            target: "No autocarro ele senta-se no lugar ao lado da porta e põe a mochila perto dos seus pés."
                        },
                        {
                            native: "Он замечает женщину, которая держит книгу из той новой серии.",
                            target: "Ele repara numa mulher que segura um livro daquela nova coleção."
                        },
                        {
                            native: "Ему нравится оформление этой серии, и он думает купить такую же книгу.",
                            target: "Ele gosta do design dessa coleção e pensa em comprar um livro igual."
                        },
                        {
                            native: "Когда автобус останавливается возле его офиса, Марко выходит на этой остановке.",
                            target: "Quando o autocarro pára junto do seu escritório, o Marco sai nessa paragem."
                        },
                        {
                            native: "Перед входом он здоровается с коллегой, который стоит у того высокого здания.",
                            target: "À entrada ele cumprimenta o colega que está junto daquele prédio alto."
                        },
                        {
                            native: "На рабочем месте Марко открывает компьютер и проверяет письмо от своего руководителя.",
                            target: "No trabalho o Marco abre o computador e verifica o email do seu chefe."
                        },
                        {
                            native: "Он работает над задачей, которая была в том письме.",
                            target: "Ele trabalha na tarefa que estava naquela mensagem."
                        },
                        {
                            native: "В обед Марко идёт в кафе напротив его офиса и садится за стол возле двери.",
                            target: "Ao almoço o Marco vai ao café em frente ao seu escritório e senta-se na mesa perto da porta."
                        },
                        {
                            native: "Он заказывает суп и салат, которые всегда берёт в таких местах.",
                            target: "Ele pede a sopa e a salada que sempre escolhe nesses lugares."
                        },
                        {
                            native: "После работы Марко встречается с другом возле того старого кинотеатра.",
                            target: "Depois do trabalho o Marco encontra-se com o amigo perto daquele cinema antigo."
                        },
                        {
                            native: "Они идут по дорожке около реки и говорят о своих планах на выходные.",
                            target: "Eles caminham pelo trilho ao lado do rio e falam sobre os seus planos para o fim de semana."
                        },
                        {
                            native: "Друг Марко показывает ему фотографии своего нового велосипеда.",
                            target: "O amigo mostra-lhe as fotografias da sua nova bicicleta."
                        },
                        {
                            native: "Марко говорит, что хотел бы покататься на том велосипеде в тот же день.",
                            target: "O Marco diz que gostaria de experimentar aquela bicicleta nesse mesmo dia."
                        },
                        {
                            native: "Когда наступает вечер, Марко возвращается к своему дому и открывает дверь своим ключом.",
                            target: "Quando chega a noite, o Marco volta à sua casa e abre a porta com a sua chave."
                        },
                        {
                            native: "Он включает лампу в своей гостиной и кладёт телефон на стол возле этого дивана.",
                            target: "Ele liga a lâmpada na sua sala de estar e põe o telemóvel na mesa ao lado deste sofá."
                        },
                        {
                            native: "Перед сном он делает заметки о тех идеях, которые пришли ему в голову в течение дня.",
                            target: "Antes de dormir ele faz anotações sobre aquelas ideias que lhe surgiram ao longo do dia."
                        }
                    ],

                    words: [
                        { id: "w1", native: "desse", target: "об этом (de + esse)" },
                        { id: "w2", native: "nesse", target: "в этом (em + esse)" },
                        { id: "w3", native: "deste", target: "об этом (de + este)" },
                        { id: "w4", native: "neste", target: "в этом (em + este)" },
                        { id: "w5", native: "daquele", target: "о том (de + aquele)" },
                        { id: "w6", native: "naquele", target: "в том (em + aquele)" },
                        { id: "w7", native: "com o seu", target: "с его" },
                        { id: "w8", native: "com a sua", target: "с её" },
                        { id: "w9", native: "pela", target: "по (por + a)" },
                        { id: "w10", native: "pelo", target: "по (por + o)" },

                        { id: "w11", native: "prateleira", target: "полка" },
                        { id: "w12", native: "cadeira", target: "стул" },
                        { id: "w13", native: "janela", target: "окно" },
                        { id: "w14", native: "semana", target: "неделя" },
                        { id: "w15", native: "caderno", target: "блокнот" },
                        { id: "w16", native: "mala", target: "сумка" },
                        { id: "w17", native: "árvore", target: "дерево" },
                        { id: "w18", native: "quiosque", target: "киоск" },
                        { id: "w19", native: "plataforma", target: "платформа" },
                        { id: "w20", native: "mensagem", target: "сообщение" },

                        { id: "w21", native: "documento", target: "документ" },
                        { id: "w22", native: "mochila", target: "рюкзак" },
                        { id: "w23", native: "pés", target: "ноги" },
                        { id: "w24", native: "coleção", target: "серия, коллекция" },
                        { id: "w25", native: "design", target: "дизайн" },
                        { id: "w26", native: "prédio", target: "здание" },
                        { id: "w27", native: "email", target: "имейл" },
                        { id: "w28", native: "tarefa", target: "задача" },
                        { id: "w29", native: "salada", target: "салат" },
                        { id: "w30", native: "cinema", target: "кинотеатр" },

                        { id: "w31", native: "rio", target: "река" },
                        { id: "w32", native: "bicicleta", target: "велосипед" },
                        { id: "w33", native: "fotografia", target: "фотография" },
                        { id: "w34", native: "noite", target: "ночь" },
                        { id: "w35", native: "sofá", target: "диван" },
                        { id: "w36", native: "telemóvel", target: "телефон" },
                        { id: "w37", native: "sala de estar", target: "гостиная" },
                        { id: "w38", native: "porta", target: "дверь" },
                        { id: "w39", native: "chave", target: "ключ" },
                        { id: "w40", native: "ideia", target: "идея" },

                        { id: "w41", native: "perto", target: "рядом" },
                        { id: "w42", native: "ao lado", target: "возле, сбоку" },
                        { id: "w43", native: "caminho", target: "дорожка" },
                        { id: "w44", native: "trilho", target: "тропа" },
                        { id: "w45", native: "andar", target: "этаж" },
                        { id: "w46", native: "cozinha", target: "кухня" },
                        { id: "w47", native: "prato", target: "блюдо" },
                        { id: "w48", native: "árvore", target: "дерево" },
                        { id: "w49", native: "mesa", target: "стол" },
                        { id: "w50", native: "luz", target: "свет" }
                    ]
                },
                {
                    id: "PTRU10",
                    rule: [
                        "este — этот (близко ко мне): esta rua, este lugar",
                        "esse — этот/тот (близко к тебе): esse carro, essa porta",
                        "aquele — тот (далеко от обоих): aquele parque, aquela casa",
                        "ir a / ir para — идти/ехать к чему-то: ir àquele café",
                        "vir de — приходить откуда-то: vir desse prédio",
                        "chegar a — прибывать куда-то: chegar a este hotel",
                        "sair de — выходить откуда-то: sair daquela estação",
                        "voltar a / voltar de — возвращаться: voltar a este bairro, voltar daquele sítio",
                        "passar por — проходить мимо/через: passar por essa rua",
                        "ir até — идти до: ir até aquele cruzamento"
                    ].join("\n"),

                    title: "Указательные местоимения + движение",
                    title_native: "Путешествие Диегу по трём направлениям",
                    title_target: "A viagem do Diego por três direções",

                    sentences: [
                        {
                            native: "Диегу начинает своё утро на этой улице, недалеко от своего дома.",
                            target: "O Diego começa a sua manhã nesta rua, perto da sua casa."
                        },
                        {
                            native: "Он выходит из этого дома и идёт к той автобусной остановке.",
                            target: "Ele sai desta casa e vai até àquela paragem de autocarro."
                        },
                        {
                            native: "Пока он идёт, он проходит по этой узкой дорожке.",
                            target: "Enquanto caminha, ele passa por este caminho estreito."
                        },
                        {
                            native: "Он видит женщин, которые идут в тот супермаркет у перекрёстка.",
                            target: "Ele vê mulheres que vão para aquele supermercado no cruzamento."
                        },
                        {
                            native: "Но Диегу идёт в другое место: в это маленькое кафе возле площади.",
                            target: "Mas o Diego vai a outro lugar: a este café pequeno perto da praça."
                        },
                        {
                            native: "Войдя в кафе, он встречает друга, который приходит из того старого района.",
                            target: "Ao entrar no café, ele encontra um amigo que vem daquele bairro antigo."
                        },
                        {
                            native: "Друг говорит, что идёт в этот офис неподалёку.",
                            target: "O amigo diz que vai para este escritório aqui perto."
                        },
                        {
                            native: "Диегу обещает пойти с ним и помочь ему донести вещи.",
                            target: "O Diego promete ir com ele e ajudar a levar as coisas."
                        },
                        {
                            native: "По пути они проходят по этой широкой улице, полной людей.",
                            target: "Pelo caminho eles passam por esta avenida larga cheia de pessoas."
                        },
                        {
                            native: "Они видят туристов, которые приходят в этот район ради красивых фотографий.",
                            target: "Eles veem turistas que vêm a este bairro para tirar fotografias bonitas."
                        },
                        {
                            native: "Перед офисом находится та высокая башня, которую можно увидеть издалека.",
                            target: "Em frente ao escritório está aquela torre alta que se vê de longe."
                        },
                        {
                            native: "Друг поднимается в здание, а Диегу решает пойти дальше.",
                            target: "O amigo sobe ao prédio e o Diego decide seguir em frente."
                        },
                        {
                            native: "Он идёт по этой дороге и выходит на ту тихую площадь.",
                            target: "Ele segue por esta rua e chega àquela praça tranquila."
                        },
                        {
                            native: "На площади он видит художника, который идёт к тем старым домам у реки.",
                            target: "Na praça ele vê um artista que vai para aquelas casas antigas junto ao rio."
                        },
                        {
                            native: "Диегу решает пройти до того моста, чтобы посмотреть на город.",
                            target: "O Diego decide ir até àquela ponte para ver a cidade."
                        },
                        {
                            native: "С моста он замечает людей, которые приходят от этой стороны реки.",
                            target: "Da ponte ele nota pessoas que vêm deste lado do rio."
                        },
                        {
                            native: "Но другие люди идут с той стороны, где много ресторанов.",
                            target: "Mas outras pessoas vêm daquele lado onde há muitos restaurantes."
                        },
                        {
                            native: "Диегу решает вернуться в этот район, чтобы поесть.",
                            target: "O Diego decide voltar a este bairro para comer."
                        },
                        {
                            native: "Он проходит по тем узким улицам и заходит в маленькое бистро.",
                            target: "Ele passa por aquelas ruas estreitas e entra num pequeno bistrô."
                        },
                        {
                            native: "После обеда он идёт обратно к этой автобусной остановке.",
                            target: "Depois do almoço ele vai de volta a esta paragem de autocarro."
                        },
                        {
                            native: "Автобус приходит с той дороги, что ведёт из старого центра.",
                            target: "O autocarro chega daquela estrada que vem do centro antigo."
                        },
                        {
                            native: "Диегу садится и возвращается в свой район.",
                            target: "O Diego entra e volta ao seu bairro."
                        },
                        {
                            native: "Дома он говорит, что сегодня прошёл по трём направлениям: этому, тому и далёкому.",
                            target: "Em casa ele diz que hoje caminhou por três direções: esta, essa e aquela."
                        }
                    ],

                    words: [
                        { id: "w1", native: "neste", target: "в этом" },
                        { id: "w2", native: "nesse", target: "в том (у тебя)" },
                        { id: "w3", native: "naquele", target: "в том (далеко)" },
                        { id: "w4", native: "deste", target: "об этом" },
                        { id: "w5", native: "desse", target: "об этом (у тебя)" },
                        { id: "w6", native: "daquele", target: "о том (далеко)" },
                        { id: "w7", native: "até", target: "до" },
                        { id: "w8", native: "rua", target: "улица" },
                        { id: "w9", native: "avenida", target: "проспект" },
                        { id: "w10", native: "ponte", target: "мост" },
                        { id: "w11", native: "praça", target: "площадь" },
                        { id: "w12", native: "bairro", target: "район" },
                        { id: "w13", native: "lado", target: "сторона" },
                        { id: "w14", native: "estrada", target: "дорога" },
                        { id: "w15", native: "direção", target: "направление" },
                        { id: "w16", native: "caminho", target: "путь, дорожка" },
                        { id: "w17", native: "chegar", target: "прибыть" },
                        { id: "w18", native: "sair", target: "выйти" },
                        { id: "w19", native: "voltar", target: "вернуться" },
                        { id: "w20", native: "passar", target: "проходить" },
                        { id: "w21", native: "ir", target: "идти" },
                        { id: "w22", native: "vir", target: "приходить" },
                        { id: "w23", native: "subir", target: "подниматься" },
                        { id: "w24", native: "entrar", target: "входить" },
                        { id: "w25", native: "seguir", target: "следовать" },
                        { id: "w26", native: "paragem", target: "остановка" },
                        { id: "w27", native: "bistrô", target: "бистро" },
                        { id: "w28", native: "mercado", target: "рынок" },
                        { id: "w29", native: "artista", target: "художник" },
                        { id: "w30", native: "ponte", target: "мост" },
                        { id: "w31", native: "turista", target: "турист" },
                        { id: "w32", native: "vista", target: "вид" },
                        { id: "w33", native: "lugar", target: "место" },
                        { id: "w34", native: "cidade", target: "город" },
                        { id: "w35", native: "centro", target: "центр" },
                        { id: "w36", native: "prédio", target: "здание" },
                        { id: "w37", native: "torre", target: "башня" },
                        { id: "w38", native: "porta", target: "дверь" },
                        { id: "w39", native: "janela", target: "окно" },
                        { id: "w40", native: "café", target: "кафе" },
                        { id: "w41", native: "supermercado", target: "супермаркет" },
                        { id: "w42", native: "mulher", target: "женщина" },
                        { id: "w43", native: "homem", target: "мужчина" },
                        { id: "w44", native: "fotografia", target: "фото" },
                        { id: "w45", native: "árvore", target: "дерево" },
                        { id: "w46", native: "rio", target: "река" },
                        { id: "w47", native: "restaurante", target: "ресторан" },
                        { id: "w48", native: "direções", target: "направления" },
                        { id: "w49", native: "longo", target: "далёкий" },
                        { id: "w50", native: "estreito", target: "узкий" }
                    ]
                },

                {
                    id: "PTRU11",
                    rule: [
                        "seu / sua — его/её/ваш: sua casa, seu carro",
                        "dele / dela — принадлежность без двусмысленности: o livro dele",
                        "este — этот (рядом со мной)",
                        "esse — этот/тот (рядом с тобой)",
                        "aquele — тот (далеко от нас)",
                        "isto / isso / aquilo — это / то / вон то",
                        "com o seu — с твоим/вашим/его",
                        "de + este = deste: perto deste lugar",
                        "em + esse = nesse: nesse momento"
                    ].join("\n"),

                    title: "Притяжательные + указательные в диалогах",
                    title_native: "Разговоры в кафе, на улице и дома",
                    title_target: "Conversas no café, na rua e em casa",

                    sentences: [
                        {
                            native: "— Чей это рюкзак? — спрашивает София.",
                            target: "— De quem é esta mochila? — pergunta a Sofia."
                        },
                        {
                            native: "— Это мой, но тот чехол не мой, он принадлежит моей сестре.",
                            target: "— É meu, mas aquele estojo não é meu, pertence à minha irmã."
                        },
                        {
                            native: "— А этот телефон? Он тоже твой?",
                            target: "— E este telemóvel? Também é teu?"
                        },
                        {
                            native: "— Нет, этот принадлежит Марку.",
                            target: "— Não, esse pertence ao Marco."
                        },
                        {
                            native: "— А где его зарядка?",
                            target: "— E onde está o carregador dele?"
                        },
                        {
                            native: "— Я думаю, что он оставил её в той комнате.",
                            target: "— Acho que ele a deixou naquele quarto."
                        },
                        {
                            native: "София подходит к комнате и видит книгу.",
                            target: "A Sofia chega ao quarto e vê um livro."
                        },
                        {
                            native: "— Это твоя книга или книга твоей сестры?",
                            target: "— Este livro é teu ou da tua irmã?"
                        },
                        {
                            native: "— Это книга моей сестры, но эта закладка моя.",
                            target: "— É da minha irmã, mas este marcador é meu."
                        },
                        {
                            native: "В это время Марк выходит из кухни с чашкой.",
                            target: "Nessa altura o Marco sai da cozinha com uma chávena."
                        },
                        {
                            native: "— Этот кофе твой?",
                            target: "— Este café é teu?"
                        },
                        {
                            native: "— Нет, тот кофе для Софии.",
                            target: "— Não, aquele café é para a Sofia."
                        },
                        {
                            native: "— Где твоя сумка? Я видел её возле той двери.",
                            target: "— Onde está a tua mala? Vi-a perto daquela porta."
                        },
                        {
                            native: "— Моя здесь, а та сумка принадлежит моей подруге.",
                            target: "— A minha está aqui, e aquela mala é da minha amiga."
                        },
                        {
                            native: "На улице они встречают соседа с его собакой.",
                            target: "Na rua eles encontram o vizinho com o seu cão."
                        },
                        {
                            native: "— Это его собака?",
                            target: "— Este é o cão dele?"
                        },
                        {
                            native: "— Нет, этот маленький — его, а тот большой — собака его сына.",
                            target: "— Não, este pequeno é dele, e aquele grande é do filho dele."
                        },
                        {
                            native: "— Ты видел мою книгу? Я оставила её на этом столе.",
                            target: "— Viste o meu livro? Deixei-o nesta mesa."
                        },
                        {
                            native: "— Я видел только ту газету.",
                            target: "— Só vi aquele jornal."
                        },
                        {
                            native: "— Хорошо, я посмотрю в той комнате ещё раз.",
                            target: "— Está bem, vou ver naquele quarto outra vez."
                        },
                        {
                            native: "Когда они возвращаются домой, София говорит:",
                            target: "Quando voltam a casa, a Sofia diz:"
                        },
                        {
                            native: "— Мне нравится этот дом, но тот, где живут мои родители, больше.",
                            target: "— Gosto desta casa, mas daquela onde vivem os meus pais gosto ainda mais."
                        },
                        {
                            native: "— А мне нравится этот вид из окна.",
                            target: "— E eu gosto desta vista pela janela."
                        },
                        {
                            native: "— Эта картина тоже твоя?",
                            target: "— Este quadro também é teu?"
                        },
                        {
                            native: "— Нет, она принадлежит моей подруге Карле.",
                            target: "— Não, é da minha amiga Carla."
                        },
                        {
                            native: "— А этот стул?",
                            target: "— E esta cadeira?"
                        },
                        {
                            native: "— Этот — мой, а тот — стул моего брата.",
                            target: "— Este é meu, e aquele é do meu irmão."
                        },
                        {
                            native: "— Хочу купить стол, похожий на этот.",
                            target: "— Quero comprar uma mesa parecida com esta."
                        },
                        {
                            native: "— Тогда нам нужно зайти в тот магазин на углу.",
                            target: "— Então precisamos de passar por aquela loja na esquina."
                        },
                        {
                            native: "— Хорошо, а после мы можем вернуться в этот район?",
                            target: "— Está bem, e depois podemos voltar a este bairro?"
                        }
                    ],

                    words: [
                        { id: "w1", native: "este", target: "этот (рядом)" },
                        { id: "w2", native: "esse", target: "тот/этот у тебя" },
                        { id: "w3", native: "aquele", target: "вон тот" },
                        { id: "w4", native: "isto", target: "это" },
                        { id: "w5", native: "isso", target: "то (у тебя)" },
                        { id: "w6", native: "aquilo", target: "вон то" },
                        { id: "w7", native: "seu", target: "его/её/ваш" },
                        { id: "w8", native: "dele", target: "его" },
                        { id: "w9", native: "dela", target: "её" },
                        { id: "w10", native: "marcador", target: "закладка" },

                        { id: "w11", native: "mochila", target: "рюкзак" },
                        { id: "w12", native: "carregador", target: "зарядка" },
                        { id: "w13", native: "cozinha", target: "кухня" },
                        { id: "w14", native: "quarto", target: "комната" },
                        { id: "w15", native: "porta", target: "дверь" },
                        { id: "w16", native: "janela", target: "окно" },
                        { id: "w17", native: "cadeira", target: "стул" },
                        { id: "w18", native: "mesa", target: "стол" },
                        { id: "w19", native: "vista", target: "вид" },
                        { id: "w20", native: "cão", target: "пёс" },

                        { id: "w21", native: "vizinho", target: "сосед" },
                        { id: "w22", native: "amiga", target: "подруга" },
                        { id: "w23", native: "amigo", target: "друг" },
                        { id: "w24", native: "filho", target: "сын" },
                        { id: "w25", native: "jornal", target: "газета" },
                        { id: "w26", native: "quadro", target: "картина" },
                        { id: "w27", native: "loja", target: "магазин" },
                        { id: "w28", native: "esquina", target: "угол" },
                        { id: "w29", native: "bairro", target: "район" },
                        { id: "w30", native: "casa", target: "дом" },

                        { id: "w31", native: "deixar", target: "оставлять" },
                        { id: "w32", native: "ver", target: "видеть" },
                        { id: "w33", native: "ir", target: "идти" },
                        { id: "w34", native: "vir", target: "приходить" },
                        { id: "w35", native: "voltar", target: "вернуться" },
                        { id: "w36", native: "passar por", target: "проходить мимо" },
                        { id: "w37", native: "perguntar", target: "спрашивать" },
                        { id: "w38", native: "responder", target: "отвечать" },
                        { id: "w39", native: "chegar", target: "прибыть" },
                        { id: "w40", native: "entrar", target: "входить" },

                        { id: "w41", native: "pequeno", target: "маленький" },
                        { id: "w42", native: "grande", target: "большой" },
                        { id: "w43", native: "novo", target: "новый" },
                        { id: "w44", native: "velho", target: "старый" },
                        { id: "w45", native: "perto", target: "близко" },
                        { id: "w46", native: "longe", target: "далеко" },
                        { id: "w47", native: "aqui", target: "здесь" },
                        { id: "w48", native: "aí", target: "там (у тебя)" },
                        { id: "w49", native: "lá", target: "там (далеко)" },
                        { id: "w50", native: "também", target: "тоже" }
                    ]
                },
                {
                    "id": "PTRU12",
                    "rule": [
                        "As estações do ano(Времена года): primavera(весна), verão(лето), outono(осень), inverno(зима)",
                        "Os meses: janeiro, fevereiro, março, abril, maio, junho, julho, agosto, setembro, outubro, novembro, dezembro"
                    ].join("\n"),
                    "title": "Времена года и месяцы",
                    "title_native": "Времена года и месяцы",
                    "title_target": "As estações e os meses",
                    "sentences": [
                        {
                            "native": "В Португалии четыре времени года: весна, лето, осень и зима.",
                            "target": "Em Portugal há quatro estações: primavera, verão, outono e inverno."
                        },
                        {
                            "native": "Весной погода становится мягкой, и люди начинают больше гулять.",
                            "target": "Na primavera o tempo fica mais suave e as pessoas começam a passear mais."
                        },
                        {
                            "native": "Летом стоит жара, и многие едут к океану.",
                            "target": "No verão faz calor e muitos vão ao oceano."
                        },
                        {
                            "native": "Осенью часто идут дожди, а листья меняют цвет.",
                            "target": "No outono chove muitas vezes e as folhas mudam de cor."
                        },
                        {
                            "native": "Зимой бывает прохладно, особенно в северных регионах.",
                            "target": "No inverno pode estar fresco, especialmente nas regiões do norte."
                        },
                        {
                            "native": "Год начинается в январе, когда многие люди делают новые планы.",
                            "target": "O ano começa em janeiro, quando muitas pessoas fazem novos planos."
                        },
                        {
                            "native": "В феврале погода ещё холодная, но дни уже становятся длиннее.",
                            "target": "Em fevereiro o tempo ainda é frio, mas os dias já ficam mais longos."
                        },
                        {
                            "native": "В марте чувствуется приближение весны.",
                            "target": "Em março sente-se a chegada da primavera."
                        },
                        {
                            "native": "Апрель приносит солнечные дни и частые ливни.",
                            "target": "Abril traz dias de sol e chuvas frequentes."
                        },
                        {
                            "native": "В мае природа полностью расцветает.",
                            "target": "Em maio a natureza floresce completamente."
                        },
                        {
                            "native": "Июнь открывает сезон тёплых вечеров.",
                            "target": "Junho abre a época das noites quentes."
                        },
                        {
                            "native": "В июле и августе самые высокие температуры.",
                            "target": "Em julho e agosto estão as temperaturas mais altas."
                        },
                        {
                            "native": "Сентябрь мягкий и спокойный, идеален для путешествий.",
                            "target": "Setembro é suave e tranquilo, ideal para viajar."
                        },
                        {
                            "native": "Октябрь приносит золотые листья.",
                            "target": "Outubro traz folhas douradas."
                        },
                        {
                            "native": "В ноябре дни становятся короткими и прохладными.",
                            "target": "Em novembro os dias ficam curtos e frescos."
                        },
                        {
                            "native": "Декабрь — месяц праздников и тёплых семейных встреч.",
                            "target": "Dezembro é o mês das festas e dos encontros familiares."
                        }
                    ],
                    "words": [
                        { id: "w1", native: "primavera", target: "весна" },
                        { id: "w2", native: "verão", target: "лето" },
                        { id: "w3", native: "outono", target: "осень" },
                        { id: "w4", native: "inverno", target: "зима" },
                        { id: "w5", native: "janeiro", target: "январь" },
                        { id: "w6", native: "fevereiro", target: "февраль" },
                        { id: "w7", native: "março", target: "март" },
                        { id: "w8", native: "abril", target: "апрель" },
                        { id: "w9", native: "maio", target: "май" },
                        { id: "w10", native: "junho", target: "июнь" },
                        { id: "w11", native: "julho", target: "июль" },
                        { id: "w12", native: "agosto", target: "август" },
                        { id: "w13", native: "setembro", target: "сентябрь" },
                        { id: "w14", native: "outubro", target: "октябрь" },
                        { id: "w15", native: "novembro", target: "ноябрь" },
                        { id: "w16", native: "dezembro", target: "декабрь" },
                        { id: "w17", native: "tempo", target: "погода" },
                        { id: "w18", native: "calor", target: "жара" },
                        { id: "w19", native: "frio", target: "холод" },
                        { id: "w20", native: "chuva", target: "дождь" },
                        { id: "w22", native: "sol", target: "солнце" },
                        { id: "w23", native: "viagem", target: "путешествие" },
                        { id: "w24", native: "praia", target: "пляж" },
                        { id: "w25", native: "oceano", target: "океан" },
                        { id: "w26", native: "folhas", target: "листья" },
                        { id: "w27", native: "cores", target: "цвета" },
                        { id: "w28", native: "festas", target: "праздники" },
                        { id: "w29", native: "família", target: "семья" },
                        { id: "w30", native: "região", target: "регион" },
                        { id: "w31", native: "natureza", target: "природа" },
                        { id: "w32", native: "florescer", target: "цвести" },
                        { id: "w33", native: "planos", target: "планы" },
                        { id: "w34", native: "noites", target: "ночи" },
                        { id: "w35", native: "dias", target: "дни" },
                        { id: "w36", native: "longo", target: "длинный" },
                        { id: "w37", native: "curto", target: "короткий" },
                        { id: "w38", native: "quente", target: "тёплый" },
                        { id: "w39", native: "suave", target: "мягкий" },
                        { id: "w40", native: "viajar", target: "путешествовать" },
                        { id: "w41", native: "andar", target: "гулять" },
                        { id: "w42", native: "começar", target: "начинать" },
                        { id: "w43", native: "mudar", target: "менять" },
                        { id: "w44", native: "trazer", target: "приносить" },
                        { id: "w45", native: "sentir", target: "чувствовать" },
                        { id: "w46", native: "ficar", target: "становиться" },
                        { id: "w47", native: "pessoa", target: "человек" },
                        { id: "w48", native: "cidade", target: "город" },
                        { id: "w49", native: "regiões", target: "регионы" },
                        { id: "w50", native: "altura", target: "период/сезон" },
                        { id: "w51", native: "ano", target: "год" }
                    ]
                },

            ],

        },
    ],
};


// PT (target) + EN (native)
export const libraryPTEN: Library = {
    learningLang: "pt",
    sections: [
        {
            id: "A1-A2",
            title_native: "A1-A2",
            title_target: "A1-A2",
            texts: [
                {
                    id: "PTEN1",
                    rule: [
                        "ser: sou, és, é, somos, sois, são",
                        "ter: tenho, tens, tem, temos, tendes, têm",
                        "ver: vejo, vês, vê, vemos, vedes, veem",
                        "fazer: faço, fazes, faz, fazemos, fazeis, fazem",
                    ].join("\n"),
                    title: "Practice of the verbs ser, ter, ver, fazer",
                    title_native: "Life of Laura",
                    title_target: "A vida de Laura",
                    sentences: [
                        {
                            native: "I am a music teacher and my name is Laura.",
                            target: "Eu sou professora de música e o meu nome é Laura.",
                        },
                        {
                            native: "My life is simple but full of sounds and emotions.",
                            target: "A minha vida é simples, mas cheia de sons e emoções.",
                        },
                        {
                            native: "Every morning, when the sun rises, I have a habit:",
                            target: "Todas as manhãs, quando o sol está a nascer, eu tenho um hábito:",
                        },
                        {
                            native: "I make strong coffee and look at the sky through the window.",
                            target: "Faço um café forte e vejo o céu pela janela.",
                        },
                        {
                            native: "Sometimes the sky is blue, sometimes it is grey – it depends on the mood of the day.",
                            target: "Às vezes o céu é azul, às vezes é cinzento — depende do humor do dia.",
                        },
                        {
                            native: "My husband is a painter.",
                            target: "O meu marido é pintor.",
                        },
                        {
                            native: "He paints every day and says that art is his breath.",
                            target: "Ele faz quadros todos os dias, e sempre diz que a arte é a sua respiração.",
                        },
                        {
                            native: "We have a small house by the sea, and when we have time, we walk on the beach.",
                            target: "Nós temos uma pequena casa perto do mar, e quando temos tempo, fazemos caminhadas na praia.",
                        },
                        {
                            native: "There we see seagulls and the waves that play.",
                            target: "Lá nós vemos as gaivotas e as ondas a brincar.",
                        },
                        {
                            native: "I see everything as a song, he sees it as a painting.",
                            target: "Eu vejo tudo como uma canção, ele vê como uma pintura.",
                        },
                        {
                            native: "My students are different: some are shy, others are very talkative.",
                            target: "Os meus alunos são diferentes: alguns são tímidos, outros são muito faladores.",
                        },
                        {
                            native: "They all love music, and that makes my work meaningful.",
                            target: "Todos têm amor pela música, e isso faz o meu trabalho valer a pena.",
                        },
                        {
                            native: "When I teach a lesson, I always feel new energy.",
                            target: "Quando eu faço uma aula, tenho sempre uma energia nova.",
                        },
                        {
                            native: "They see a friend in me, and I see the future in them.",
                            target: "Eles veem em mim uma amiga, e eu vejo neles o futuro.",
                        },
                        {
                            native: "At midday my little daughter is at home.",
                            target: "Ao meio-dia, a minha filha pequena está em casa.",
                        },
                        {
                            native: "She is five years old and very curious.",
                            target: "Ela tem cinco anos e é muito curiosa.",
                        },
                        {
                            native: "Every day she asks a thousand questions: “Mum, why is the sea blue?”",
                            target: "Todos os dias ela faz mil perguntas: “Mamã, por que o mar é azul?”",
                        },
                        {
                            native: "I answer: “Because the sky is its mirror.”",
                            target: "Eu respondo: “Porque o céu é o espelho dele.”",
                        },
                        {
                            native: "She sees the world as a magical place, and I am lucky to learn with her.",
                            target: "Ela vê o mundo como um lugar mágico, e eu tenho sorte de aprender com ela.",
                        },
                        {
                            native: "In the evening, when the sun goes down, we cook dinner together.",
                            target: "À noite, quando o sol se põe, nós fazemos o jantar juntos.",
                        },
                        {
                            native: "My husband makes the soup, I cook the rice, and our daughter draws while she waits.",
                            target: "O meu marido faz a sopa, eu faço o arroz, e a nossa filha faz desenhos enquanto espera.",
                        },
                        {
                            native: "After dinner we watch a film – sometimes a cartoon, sometimes a documentary.",
                            target: "Depois nós vemos um filme — às vezes um desenho animado, às vezes um documentário.",
                        },
                        {
                            native: "At the end of the day I always feel the same: life is simple, but when we see, have and do things with love, everything is perfect.",
                            target: "No fim do dia, eu tenho sempre a mesma certeza: a vida é simples, mas quando a gente vê, tem e faz com amor, tudo é perfeito.",
                        },
                    ],
                    words: [
                        { id: "w1", native: "sou", target: "I am (verb ser)" },
                        { id: "w2", native: "a professora", target: "teacher (female)" },
                        { id: "w3", native: "a música", target: "music" },
                        { id: "w4", native: "a vida", target: "life" },
                        { id: "w5", native: "simples", target: "simple" },
                        { id: "w6", native: "os sons", target: "sounds" },
                        { id: "w7", native: "as emoções", target: "emotions" },
                        { id: "w8", native: "as manhãs", target: "mornings" },
                        { id: "w9", native: "o sol", target: "sun" },
                        { id: "w10", native: "nascer", target: "to rise" },
                        { id: "w11", native: "o hábito", target: "habit" },
                        { id: "w12", native: "o café", target: "coffee" },
                        { id: "w13", native: "forte", target: "strong" },
                        { id: "w14", native: "o céu", target: "sky" },
                        { id: "w15", native: "a janela", target: "window" },
                        { id: "w16", native: "azul", target: "blue" },
                        { id: "w17", native: "cinzento", target: "grey" },
                        { id: "w18", native: "o humor", target: "mood" },
                        { id: "w19", native: "o dia", target: "day" },
                        { id: "w20", native: "o marido", target: "husband" },
                        { id: "w21", native: "o pintor", target: "painter" },
                        { id: "w22", native: "a arte", target: "art" },
                        { id: "w23", native: "a respiração", target: "breath" },
                        { id: "w24", native: "a casa", target: "house" },
                        { id: "w25", native: "o mar", target: "sea" },
                        { id: "w26", native: "a praia", target: "beach" },
                        { id: "w27", native: "as gaivotas", target: "seagulls" },
                        { id: "w28", native: "as ondas", target: "waves" },
                        { id: "w29", native: "brincar", target: "to play" },
                        { id: "w30", native: "a canção", target: "song" },
                        { id: "w31", native: "a pintura", target: "painting" },
                        { id: "w32", native: "os alunos", target: "students" },
                        { id: "w33", native: "tímidos", target: "shy" },
                        { id: "w34", native: "faladores", target: "talkative" },
                        { id: "w35", native: "o trabalho", target: "work" },
                        { id: "w36", native: "a aula", target: "lesson, class" },
                        { id: "w37", native: "a energia", target: "energy" },
                        { id: "w38", native: "o futuro", target: "future" },
                        { id: "w39", native: "a filha", target: "daughter" },
                        { id: "w40", native: "curiosa", target: "curious" },
                        { id: "w41", native: "o espelho", target: "mirror" },
                        { id: "w42", native: "mágico", target: "magical" },
                        { id: "w43", native: "a noite", target: "night" },
                        { id: "w44", native: "o jantar", target: "dinner" },
                        { id: "w45", native: "a sopa", target: "soup" },
                        { id: "w46", native: "o arroz", target: "rice" },
                        { id: "w47", native: "os desenhos", target: "drawings" },
                        { id: "w48", native: "o filme", target: "film, movie" },
                        { id: "w49", native: "o documentário", target: "documentary film" },
                        { id: "w50", native: "perfeito", target: "perfect" },
                    ],
                },
                {
                    id: "PTEN2",
                    rule: [
                        "–m: jovem, jovem, jovens, jovens",
                        "-z: feliz, feliz, felizes, felizes",
                        "–ês: português, portuguesa, portugueses, portuguesas",
                        "simples: simples, simples, simples, simples",
                        "-o: preto, preta, pretos, pretas",
                        "-e: verde, verde, verdes, verdes",
                        "-l: azul, azul, azuis, azuis",
                    ].join("\n"),
                    title: "Practice of adjectives by endings",
                    title_native: "A colourful day in Lisbon",
                    title_target: "Um dia colorido na cidade",
                    sentences: [
                        {
                            native: "Lisbon is a young and happy city.",
                            target: "Lisboa é uma cidade jovem e feliz.",
                        },
                        {
                            native: "The people there are young, energetic and talkative.",
                            target: "As pessoas são jovens, cheias de energia e muito faladoras.",
                        },
                        {
                            native: "In the morning the sky is blue and the streets are simple but full of life.",
                            target: "De manhã, o céu está azul e as ruas são simples, mas cheias de vida.",
                        },
                        {
                            native: "In the café on the corner, a Portuguese man drinks his black coffee.",
                            target: "No café da esquina, um homem português bebe o seu café preto.",
                        },
                        {
                            native: "He talks with a Portuguese woman in a green dress.",
                            target: "Ele conversa com uma mulher portuguesa que usa um vestido verde.",
                        },
                        {
                            native: "They are happy because it is Saturday.",
                            target: "Eles estão felizes porque é sábado.",
                        },
                        {
                            native: "Nearby, French tourists take photos of the colourful houses.",
                            target: "Perto dali, turistas franceses tiram fotos das casas coloridas.",
                        },
                        {
                            native: "The windows are blue, the doors are green and the walls are white.",
                            target: "As janelas são azuis, as portas verdes e as paredes brancas.",
                        },
                        {
                            native: "Young children run in the street with red balls.",
                            target: "As crianças jovens correm pela rua com bolas vermelhas.",
                        },
                        {
                            native: "The atmosphere is simple but beautiful.",
                            target: "O ambiente é simples, mas bonito.",
                        },
                        {
                            native: "In the main square, Brazilian musicians play cheerful songs.",
                            target: "Na praça central, músicos brasileiros tocam canções alegres.",
                        },
                        {
                            native: "The voices are strong, the sounds are soft and everyone smiles.",
                            target: "As vozes são fortes, os sons são doces e todos sorriem.",
                        },
                        {
                            native: "An old woman sells pink and blue flowers.",
                            target: "Uma senhora velha vende flores rosas e azuis.",
                        },
                        {
                            native: "A happy young man buys a simple bouquet for his Portuguese girlfriend.",
                            target: "Um rapaz feliz compra um buquê simples para a sua amiga portuguesa.",
                        },
                        {
                            native: "Later the sun is bright and the river becomes as blue as the sky.",
                            target: "Mais tarde, o sol brilha forte e o rio Tejo fica azul como o céu.",
                        },
                        {
                            native: "Small boats move slowly and the young sailors wave to the tourists.",
                            target: "Os barcos pequenos navegam devagar e os marinheiros jovens acenam para os turistas.",
                        },
                        {
                            native: "A Portuguese family has a picnic by the river.",
                            target: "Uma família portuguesa faz um piquenique junto ao rio.",
                        },
                        {
                            native: "The father eats white bread and the mother drinks red wine.",
                            target: "O pai come pão branco e a mãe bebe vinho tinto.",
                        },
                        {
                            native: "The children eat green apples and laugh.",
                            target: "As crianças comem maçãs verdes e riem.",
                        },
                        {
                            native: "In the evening the city lights become golden and soft.",
                            target: "Ao entardecer, as luzes da cidade ficam douradas e suaves.",
                        },
                        {
                            native: "The simple streets become magical.",
                            target: "As ruas simples tornam-se mágicas.",
                        },
                        {
                            native: "Happy friends walk together and speak in soft voices.",
                            target: "Os amigos felizes caminham juntos e conversam em vozes suaves.",
                        },
                        {
                            native: "A young man plays the guitar by a blue wall.",
                            target: "Um rapaz jovem toca guitarra perto de um muro azul.",
                        },
                        {
                            native: "Lisbon seems even more beautiful, simple and happy.",
                            target: "Lisboa parece ainda mais bonita, simples e feliz.",
                        },
                        {
                            native: "It is a Portuguese but also an international city.",
                            target: "É uma cidade portuguesa, mas também internacional.",
                        },
                        {
                            native: "It is full of colours, sounds and young hearts.",
                            target: "Está cheia de cores, sons e corações jovens.",
                        },
                    ],
                    words: [
                        { id: "w1", native: "jovem", target: "young" },
                        { id: "w2", native: "feliz", target: "happy" },
                        { id: "w3", native: "português", target: "Portuguese (man, language)" },
                        { id: "w4", native: "portuguesa", target: "Portuguese (woman)" },
                        { id: "w5", native: "simples", target: "simple" },
                        { id: "w6", native: "preto", target: "black" },
                        { id: "w7", native: "verde", target: "green" },
                        { id: "w8", native: "azul", target: "blue" },
                        { id: "w9", native: "felizes", target: "happy (plural)" },
                        { id: "w10", native: "jovens", target: "young (plural)" },
                        { id: "w11", native: "as cores", target: "colours" },
                        { id: "w12", native: "as ruas", target: "streets" },
                        { id: "w13", native: "a cidade", target: "city" },
                        { id: "w14", native: "o café", target: "coffee" },
                        { id: "w15", native: "o homem", target: "man" },
                        { id: "w16", native: "a mulher", target: "woman" },
                        { id: "w17", native: "o vestido", target: "dress" },
                        { id: "w18", native: "a casa", target: "house" },
                        { id: "w19", native: "colorido", target: "colourful" },
                        { id: "w20", native: "azuis", target: "blue (plural)" },
                        { id: "w21", native: "brancas", target: "white (fem. plural)" },
                        { id: "w22", native: "verdes", target: "green (plural)" },
                        { id: "w23", native: "vermelhas", target: "red (fem. plural)" },
                        { id: "w24", native: "amarelos", target: "yellow (masc. plural)" },
                        { id: "w25", native: "bonito", target: "beautiful" },
                        { id: "w26", native: "brasileiros", target: "Brazilian (men, people)" },
                        { id: "w27", native: "alegres", target: "cheerful" },
                        { id: "w28", native: "fortes", target: "strong (plural)" },
                        { id: "w29", native: "doces", target: "sweet, soft" },
                        { id: "w30", native: "velha", target: "old (fem.)" },
                        { id: "w31", native: "rosas", target: "pink (fem. plural)" },
                        { id: "w32", native: "pequenos", target: "small (masc. plural)" },
                        { id: "w33", native: "devagar", target: "slowly" },
                        { id: "w34", native: "os marinheiros", target: "sailors" },
                        { id: "w35", native: "a família", target: "family" },
                        { id: "w36", native: "o pão", target: "bread" },
                        { id: "w37", native: "branco", target: "white" },
                        { id: "w38", native: "tinto", target: "red (for wine)" },
                        { id: "w39", native: "as maçãs", target: "apples" },
                        { id: "w40", native: "douradas", target: "golden" },
                        { id: "w41", native: "suaves", target: "soft" },
                        { id: "w42", native: "mágicas", target: "magical (fem. plural)" },
                        { id: "w43", native: "internacional", target: "international" },
                        { id: "w44", native: "bonita", target: "beautiful (fem.)" },
                        { id: "w45", native: "corações", target: "hearts" },
                        { id: "w46", native: "cheio", target: "full" },
                        { id: "w47", native: "o rio", target: "river" },
                        { id: "w48", native: "o sol", target: "sun" },
                        { id: "w49", native: "o muro", target: "wall" },
                        { id: "w50", native: "o amigo", target: "friend (male)" },
                    ],
                },

                {
                    id: "PTEN3",
                    rule: [
                        "algum (some): algum, alguma, alguns, algumas + algo (something) + alguém (someone)",
                        "nenhum (no, none): nenhum, nenhuma, nenhuns, nenhumas + nada (nothing) + ninguém (nobody)",
                    ].join("\n"),

                    title: "Practice of pronouns algum / nenhum / alguém / ninguém",
                    title_native: "A normal day for Ana",
                    title_target: "Um dia normal da Ana",
                    sentences: [
                        {
                            native: "Ana lives in Porto and works in a library.",
                            target: "A Ana mora no Porto e trabalha numa biblioteca.",
                        },
                        {
                            native: "Every morning she looks for some book that someone left on the table.",
                            target: "Todas as manhãs ela procura algum livro que alguém deixou na mesa.",
                        },
                        {
                            native: "Sometimes she finds something interesting – an old letter or a bookmark.",
                            target: "Às vezes ela encontra algo interessante — uma carta velha ou um marcador.",
                        },
                        {
                            native: "In the library there is always someone who reads in silence.",
                            target: "Na biblioteca há sempre alguém que lê em silêncio.",
                        },
                        {
                            native: "Ana loves this calm moment when you can only hear the sound of pages turning.",
                            target: "A Ana gosta desse momento calmo, quando só se ouve o som das páginas a virar.",
                        },
                        {
                            native: "Sometimes she helps some student find the right book.",
                            target: "Às vezes ela ajuda algum estudante a encontrar o livro certo.",
                        },
                        {
                            native: "Today nobody comes in the morning – it is strange.",
                            target: "Hoje ninguém vem de manhã — é estranho.",
                        },
                        {
                            native: "She checks the room and doesn't see a single person.",
                            target: "Ela olha a sala e não vê nenhuma pessoa.",
                        },
                        {
                            native: "But on the table someone has left an open notebook and some pencil.",
                            target: "Mas na mesa alguém deixou um caderno aberto e algum lápis.",
                        },
                        {
                            native: "Ana smiles and thinks: “Maybe someone will come back later.”",
                            target: "A Ana sorri e pensa: “Talvez alguém volte mais tarde.”",
                        },
                        {
                            native: "She makes coffee and eats some small cake.",
                            target: "Ela faz um café e come algum bolo pequeno.",
                        },
                        {
                            native: "At that moment some man enters the library.",
                            target: "Nesse momento entra algum homem na biblioteca.",
                        },
                        {
                            native: "He is looking for an old newspaper, but Ana doesn't find any.",
                            target: "Ele procura um jornal antigo, mas a Ana não encontra nenhum.",
                        },
                        {
                            native: "She says: “Sorry, we don't have any copy of that newspaper.”",
                            target: "Ela diz: “Desculpe, não temos nenhum exemplar desse jornal.”",
                        },
                        {
                            native: "The man smiles and says it isn't important.",
                            target: "O homem sorri e diz que não é nada importante.",
                        },
                        {
                            native: "He takes some other book and sits down to read.",
                            target: "Ele escolhe algum outro livro e senta-se para ler.",
                        },
                        {
                            native: "Ana goes back to work, checks the shelves and sees that one book has disappeared.",
                            target: "A Ana volta ao trabalho, verifica as prateleiras e vê que um livro desapareceu.",
                        },
                        {
                            native: "She looks for it but doesn't find anything.",
                            target: "Ela procura, mas não encontra nada.",
                        },
                        {
                            native: "Then someone returns the book and thanks Ana for her help.",
                            target: "Depois alguém devolve o livro e agradece à Ana pela ajuda.",
                        },
                        {
                            native: "Ana smiles: she is happy that there is always someone in the library who likes to read.",
                            target: "A Ana sorri: fica feliz porque na biblioteca há sempre alguém que gosta de ler.",
                        },
                        {
                            native: "Sometimes someone new comes, and sometimes nobody comes.",
                            target: "Às vezes vem alguém novo, e às vezes não vem ninguém.",
                        },
                        {
                            native: "But Ana loves her job, even when nothing happens.",
                            target: "Mas a Ana gosta do seu trabalho, mesmo quando não acontece nada.",
                        },
                        {
                            native: "For her, every day is a little different, with some stories and people.",
                            target: "Para ela, cada dia é um pouco diferente, com algumas histórias e pessoas.",
                        },
                        {
                            native: "At the end of the day she turns off the light and says: “Today there was something good.”",
                            target: "No fim do dia, ela apaga a luz e diz: “Hoje houve algo bom.”",
                        },
                        {
                            native: "And if the day was empty, she says: “It's okay, tomorrow someone will come.”",
                            target: "E se o dia foi vazio, ela diz: “Não faz mal, amanhã vem alguém.”",
                        },
                    ],
                    words: [
                        { id: "w1", native: "algum", target: "some (masc.)" },
                        { id: "w2", native: "alguma", target: "some (fem.)" },
                        { id: "w3", native: "alguns", target: "some (masc. plural)" },
                        { id: "w4", native: "algumas", target: "some (fem. plural)" },
                        { id: "w5", native: "alguém", target: "someone" },
                        { id: "w6", native: "algo", target: "something" },
                        { id: "w7", native: "nenhum", target: "no, none (masc.)" },
                        { id: "w8", native: "nenhuma", target: "no, none (fem.)" },
                        { id: "w9", native: "nenhuns", target: "no, none (masc. plural)" },
                        { id: "w10", native: "nenhumas", target: "no, none (fem. plural)" },
                        { id: "w11", native: "nada", target: "nothing" },
                        { id: "w12", native: "ninguém", target: "nobody" },
                        { id: "w13", native: "a mesa", target: "table" },
                        { id: "w14", native: "a carta", target: "letter" },
                        { id: "w15", native: "o marcador", target: "bookmark" },
                        { id: "w16", native: "ler", target: "to read" },
                        { id: "w17", native: "ouvir", target: "to hear" },
                        { id: "w18", native: "o som", target: "sound" },
                        { id: "w19", native: "ajudar", target: "to help" },
                        { id: "w20", native: "procurar", target: "to look for" },
                        { id: "w21", native: "ver", target: "to see" },
                        { id: "w22", native: "deixar", target: "to leave" },
                        { id: "w23", native: "voltar", target: "to return, to come back" },
                        { id: "w24", native: "comer", target: "to eat" },
                        { id: "w25", native: "o bolo", target: "cake" },
                        { id: "w26", native: "o homem", target: "man" },
                        { id: "w27", native: "importante", target: "important" },
                        { id: "w28", native: "outro", target: "other, another" },
                        { id: "w29", native: "sentar-se", target: "to sit down" },
                        { id: "w30", native: "a prateleira", target: "shelf" },
                        { id: "w31", native: "desaparecer", target: "to disappear" },
                        { id: "w32", native: "encontrar", target: "to find" },
                        { id: "w33", native: "acontecer", target: "to happen" },
                        { id: "w34", native: "apagar", target: "to switch off, to turn off" },
                        { id: "w35", native: "houve", target: "there was / there were; happened" },
                        { id: "w36", native: "o jornal", target: "newspaper" },
                        { id: "w37", native: "a manhã", target: "morning" },
                        { id: "w38", native: "a tarde", target: "afternoon" },
                        { id: "w39", native: "o fim do dia", target: "end of the day" },
                        { id: "w40", native: "estranho", target: "strange" },
                        { id: "w41", native: "a luz", target: "light" },
                        { id: "w44", native: "a página", target: "page" },
                        { id: "w45", native: "necessário", target: "necessary, needed" },
                        { id: "w46", native: "verificar", target: "to check" },
                        { id: "w47", native: "o caderno", target: "notebook" },
                        { id: "w48", native: "aberta", target: "open (fem.)" },
                        { id: "w49", native: "o lápis", target: "pencil" },
                        { id: "w50", native: "voltar mais tarde", target: "to come back later" },
                        { id: "w51", native: "antigo", target: "old (about an object)" },
                        { id: "w52", native: "pegar", target: "to take" },
                        { id: "w56", native: "agradecer", target: "to thank" },
                    ],
                },
                {
                    id: "PTEN4",
                    rule: [
                        "todo (all, every): todo o dia, toda a noite, todos os dias, todas as noites + tudo (everything)",
                        "bom (good): bom, boa, bons, boas + bem (well)",
                        "mau (bad): mau, má, maus, más + mal (badly)",
                    ].join("\n"),

                    title: "Practice of todo / bom / mau",
                    title_native: "One day in a café",
                    title_target: "Um dia no café",
                    sentences: [
                        {
                            native: "Miguel works every day in a small café by the sea.",
                            target: "O Miguel trabalha todos os dias num pequeno café junto ao mar.",
                        },
                        {
                            native: "He opens the doors early in the morning and greets everyone.",
                            target: "Ele abre as portas cedo de manhã e cumprimenta toda a gente.",
                        },
                        {
                            native: "Today the weather is good, the sky is blue and the air is fresh.",
                            target: "Hoje o tempo está bom, o céu é azul e o ar está fresco.",
                        },
                        {
                            native: "Miguel feels good and smiles.",
                            target: "O Miguel sente-se bem e sorri.",
                        },
                        {
                            native: "He says: “Good morning, good day!”",
                            target: "Ele diz: “Boa manhã — bom dia!”",
                        },
                        {
                            native: "The first customer is an elderly woman who always comes alone.",
                            target: "A primeira cliente é uma senhora velha que vem sempre sozinha.",
                        },
                        {
                            native: "She asks for a cup of good coffee and a piece of good pie.",
                            target: "Ela pede uma chávena de bom café e um pedaço de boa tarte.",
                        },
                        {
                            native: "Miguel prepares everything with care, and everything turns out well.",
                            target: "O Miguel prepara tudo com carinho, e tudo fica bem.",
                        },
                        {
                            native: "Later two friends arrive; they always speak loudly and laugh.",
                            target: "Mais tarde chegam dois amigos, eles falam sempre alto e riem.",
                        },
                        {
                            native: "They order good sandwiches and cold juice.",
                            target: "Eles pedem bons sandes e sumo frio.",
                        },
                        {
                            native: "Miguel is happy to see everyone because he likes it when the café is lively.",
                            target: "O Miguel fica feliz por ver toda a gente, porque gosta quando o café está vivo.",
                        },
                        {
                            native: "But at lunchtime a man arrives in a bad mood.",
                            target: "Mas ao almoço chega um homem de mau humor.",
                        },
                        {
                            native: "He speaks rudely and complains that the coffee is bad.",
                            target: "Ele fala mal e reclama que o café é mau.",
                        },
                        {
                            native: "Miguel answers calmly: “Maybe the day just isn't very good.”",
                            target: "O Miguel responde com calma: “Talvez o dia não seja muito bom.”",
                        },
                        {
                            native: "The man is quiet, tastes the pie and says it is tasty.",
                            target: "O homem fica calado, prova a tarte e diz que é boa.",
                        },
                        {
                            native: "Miguel smiles: sometimes bad people can also change.",
                            target: "O Miguel sorri: às vezes as pessoas más também sabem mudar.",
                        },
                        {
                            native: "After lunch a family with two children comes in.",
                            target: "Depois do almoço chega uma família com duas crianças.",
                        },
                        {
                            native: "The children are noisy but very kind.",
                            target: "As crianças são barulhentas, mas muito boas.",
                        },
                        {
                            native: "They drink juice, eat cake and say that everything is tasty.",
                            target: "Eles bebem sumo, comem bolo e dizem que tudo é bom.",
                        },
                        {
                            native: "In the evening Miguel cleans the tables and closes the doors.",
                            target: "À noite o Miguel limpa as mesas e fecha as portas.",
                        },
                        {
                            native: "He is tired but satisfied because the day was good.",
                            target: "Ele está cansado, mas contente, porque o dia foi bom.",
                        },
                        {
                            native: "He thinks: “Good people bring a good day.”",
                            target: "Ele pensa: “As pessoas boas trazem um bom dia.”",
                        },
                        {
                            native: "He switches off the light and says: “Everything is good, tomorrow everything will be even better.”",
                            target: "Apaga a luz e diz: “Tudo está bem, amanhã tudo vai estar ainda melhor.”",
                        },
                    ],
                    words: [
                        { id: "w1", native: "todo", target: "all, whole (masc.)" },
                        { id: "w2", native: "toda", target: "all, whole (fem.)" },
                        { id: "w3", native: "todos", target: "all (masc. plural)" },
                        { id: "w4", native: "todas", target: "all (fem. plural)" },
                        { id: "w5", native: "tudo", target: "everything" },
                        { id: "w6", native: "bom", target: "good (masc.)" },
                        { id: "w7", native: "boa", target: "good (fem.)" },
                        { id: "w8", native: "bons", target: "good (masc. plural)" },
                        { id: "w9", native: "boas", target: "good (fem. plural)" },
                        { id: "w10", native: "bem", target: "well" },
                        { id: "w11", native: "mau", target: "bad (masc.)" },
                        { id: "w12", native: "má", target: "bad (fem.)" },
                        { id: "w13", native: "maus", target: "bad (masc. plural)" },
                        { id: "w14", native: "más", target: "bad (fem. plural)" },
                        { id: "w15", native: "mal", target: "badly" },
                        { id: "w16", native: "o café", target: "café" },
                        { id: "w17", native: "o mar", target: "sea" },
                        { id: "w18", native: "abrir", target: "to open" },
                        { id: "w19", native: "cumprimentar", target: "to greet" },
                        { id: "w20", native: "a gente", target: "people (colloquial 'we/people')" },
                        { id: "w21", native: "o tempo", target: "weather" },
                        { id: "w22", native: "o céu", target: "sky" },
                        { id: "w23", native: "o ar", target: "air" },
                        { id: "w24", native: "sorrir", target: "to smile" },
                        { id: "w25", native: "a manhã", target: "morning" },
                        { id: "w26", native: "a senhora", target: "lady" },
                        { id: "w27", native: "o bolo", target: "cake" },
                        { id: "w28", native: "a tarte", target: "pie (tart)" },
                        { id: "w29", native: "ficar", target: "to stay; to become" },
                        { id: "w30", native: "preparar", target: "to prepare" },
                        { id: "w31", native: "os amigos", target: "friends" },
                        { id: "w32", native: "os sandes", target: "sandwiches" },
                        { id: "w33", native: "o sumo", target: "juice" },
                        { id: "w34", native: "feliz", target: "happy" },
                        { id: "w35", native: "o almoço", target: "lunch" },
                        { id: "w36", native: "o humor", target: "mood" },
                        { id: "w37", native: "reclamar", target: "to complain" },
                        { id: "w38", native: "importante", target: "important" },
                        { id: "w39", native: "as pessoas", target: "people" },
                        { id: "w40", native: "mudar", target: "to change" },
                        { id: "w41", native: "a família", target: "family" },
                        { id: "w42", native: "as crianças", target: "children" },
                        { id: "w43", native: "barulhentas", target: "noisy (fem. plural)" },
                        { id: "w44", native: "contentar-se", target: "to be pleased, to be content" },
                        { id: "w45", native: "o dia", target: "day" },
                        { id: "w46", native: "as portas", target: "doors" },
                        { id: "w47", native: "apagar", target: "to switch off, to turn off" },
                        { id: "w48", native: "melhor", target: "better" },
                        { id: "w49", native: "vivo", target: "alive; lively" },
                        { id: "w50", native: "a noite", target: "evening, night" },
                    ],
                },

                {
                    id: "PTEN5",
                    rule: [
                        "muito: muito vinho, muita água, muitos meninos, muitas meninas // muito simpático, muito simpática, muito simpáticos, muito simpáticas // falo muito",
                        "pouco: pouco vinho, pouca água, poucos meninos, poucas meninas // pouco simpático, pouco simpática, pouco simpáticos, pouco simpáticas // falo pouco // um pouco de 🍷",
                        "tanto: tanto vinho, tanta água, tantos meninos, tantas meninas // tão alto, tão alta, tão altos, tão altas // falo tanto",
                    ].join("\n"),

                    title: "Practice of muito / pouco / tanto",
                    title_native: "Maria’s morning",
                    title_target: "A manhã da Maria",
                    sentences: [
                        {
                            native: "Maria lives in a small house not far from the centre.",
                            target: "A Maria mora numa casa pequena, perto do centro.",
                        },
                        {
                            native: "She works a lot but she loves her job.",
                            target: "Ela trabalha muito, mas gosta do seu trabalho.",
                        },
                        {
                            native: "Every morning she has many tasks.",
                            target: "Todas as manhãs ela tem muitas tarefas.",
                        },
                        {
                            native: "She gets up early, drinks a little coffee and has breakfast quickly.",
                            target: "Levanta-se cedo, bebe um pouco de café e toma o pequeno-almoço depressa.",
                        },
                        {
                            native: "Sometimes she has little time but a lot of energy.",
                            target: "Às vezes tem pouco tempo, mas muita energia.",
                        },
                        {
                            native: "She goes to work on foot because she lives nearby.",
                            target: "Vai a pé para o trabalho, porque mora perto.",
                        },
                        {
                            native: "On the way she sees many people – some smile, others are in a hurry.",
                            target: "No caminho vê muitas pessoas — umas sorriem, outras têm pressa.",
                        },
                        {
                            native: "Maria works in a clothes shop.",
                            target: "A Maria trabalha numa loja de roupa.",
                        },
                        {
                            native: "Today there are many customers in the shop and everyone talks at the same time.",
                            target: "Hoje há muitos clientes na loja e todos falam ao mesmo tempo.",
                        },
                        {
                            native: "She helps each woman choose the right dress.",
                            target: "Ela ajuda cada mulher a escolher o vestido certo.",
                        },
                        {
                            native: "Some buy many things, and others buy only a little.",
                            target: "Algumas compram muitas coisas, e outras só um pouco.",
                        },
                        {
                            native: "One customer is very polite and another is so impatient.",
                            target: "Um cliente é muito simpático, e outro é tão impaciente.",
                        },
                        {
                            native: "Maria stays calm and smiles at everyone.",
                            target: "A Maria fica calma e sorri a toda a gente.",
                        },
                        {
                            native: "At lunchtime she has little time to eat, but she drinks a little water and eats a little bread.",
                            target: "Ao almoço ela tem pouco tempo para comer, mas bebe um pouco de água e come um pouco de pão.",
                        },
                        {
                            native: "After lunch there are even more customers.",
                            target: "Depois do almoço há ainda mais clientes.",
                        },
                        {
                            native: "Maria helps everyone and speaks with so much patience that everyone is happy.",
                            target: "A Maria ajuda todos e fala com tanta paciência que todos ficam contentes.",
                        },
                        {
                            native: "In the evening she goes home very tired.",
                            target: "À noite ela vai para casa muito cansada.",
                        },
                        {
                            native: "She prepares a little rice and drinks a little wine.",
                            target: "Ela prepara um pouco de arroz e bebe um pouco de vinho.",
                        },
                        {
                            native: "Then she listens to music – not loud, just a little, to rest.",
                            target: "Depois ouve música — não alto, só um pouco, para descansar.",
                        },
                        {
                            native: "She thinks: “Today there were so many people, so many words and so many smiles.”",
                            target: "Ela pensa: “Hoje houve tantas pessoas, tantas palavras e tantos sorrisos.”",
                        },
                        {
                            native: "She feels a little tired but very happy.",
                            target: "Sente-se um pouco cansada, mas muito feliz.",
                        },
                        {
                            native: "Sometimes a little is enough to make the day good.",
                            target: "Às vezes um pouco é suficiente para o dia ser bom.",
                        },
                        {
                            native: "She smiles and says: “I am grateful for everything – for the much and for the little.”",
                            target: "Sorri e diz: “Sou grata por tudo — pelo muito e pelo pouco.”",
                        },
                    ],
                    words: [
                        { id: "w1", native: "muito", target: "a lot / very (masc. sing.; adverb)" },
                        { id: "w2", native: "muita", target: "a lot (fem. sing.)" },
                        { id: "w3", native: "muitos", target: "many, a lot (masc. pl.)" },
                        { id: "w4", native: "muitas", target: "many, a lot (fem. pl.)" },
                        { id: "w5", native: "pouco", target: "little / a bit (masc.)" },
                        { id: "w6", native: "pouca", target: "little / a bit (fem.)" },
                        { id: "w7", native: "poucos", target: "few (masc. pl.)" },
                        { id: "w8", native: "poucas", target: "few (fem. pl.)" },
                        { id: "w9", native: "um pouco de", target: "a little (of something)" },
                        { id: "w10", native: "tanto", target: "so much / so many (masc.)" },
                        { id: "w11", native: "tanta", target: "so much (fem.)" },
                        { id: "w12", native: "tantos", target: "so many (masc. pl.)" },
                        { id: "w13", native: "tantas", target: "so many (fem. pl.)" },
                        { id: "w14", native: "tão", target: "so (before an adjective)" },
                        { id: "w15", native: "a Maria", target: "Maria" },
                        { id: "w16", native: "a casa", target: "house" },
                        { id: "w17", native: "o centro", target: "centre" },
                        { id: "w18", native: "o trabalho", target: "work, job" },
                        { id: "w19", native: "as tarefas", target: "tasks" },
                        { id: "w20", native: "o café", target: "coffee" },
                        { id: "w21", native: "a energia", target: "energy" },
                        { id: "w22", native: "as pessoas", target: "people" },
                        { id: "w23", native: "a loja", target: "shop" },
                        { id: "w24", native: "os clientes", target: "customers, clients" },
                        { id: "w25", native: "o vestido", target: "dress" },
                        { id: "w26", native: "as coisas", target: "things" },
                        { id: "w27", native: "o cliente", target: "customer (male)" },
                        { id: "w28", native: "simpático", target: "nice, friendly, polite" },
                        { id: "w29", native: "impaciente", target: "impatient" },
                        { id: "w30", native: "a gente", target: "people (colloquial 'we/people')" },
                        { id: "w31", native: "a água", target: "water" },
                        { id: "w32", native: "o pão", target: "bread" },
                        { id: "w33", native: "o arroz", target: "rice" },
                        { id: "w34", native: "o vinho", target: "wine" },
                        { id: "w35", native: "descansar", target: "to rest" },
                        { id: "w36", native: "ouvir", target: "to listen" },
                        { id: "w37", native: "as palavras", target: "words" },
                        { id: "w38", native: "os sorrisos", target: "smiles" },
                        { id: "w39", native: "cansada", target: "tired (fem.)" },
                        { id: "w40", native: "feliz", target: "happy" },
                        { id: "w41", native: "suficiente", target: "enough, sufficient" },
                        { id: "w42", native: "grata", target: "grateful (fem.)" },
                        { id: "w43", native: "por tudo", target: "for everything" },
                        { id: "w44", native: "o dia", target: "day" },
                        { id: "w45", native: "depressa", target: "quickly" },
                        { id: "w46", native: "trabalhar", target: "to work" },
                        { id: "w47", native: "ter", target: "to have" },
                        { id: "w48", native: "ver", target: "to see" },
                        { id: "w49", native: "ficar", target: "to stay; to become" },
                        { id: "w50", native: "pensar", target: "to think" },
                    ],
                },
                {
                    id: "PTEN6",
                    rule: [
                        "quem: who — Quem é você?",
                        "o que: what — O que você faz?",
                        "que: which / what — Que livro você lê?",
                        "qual: which / which one — Qual é o seu nome?",
                        "quais: which (plural) — Quais são os seus amigos?",
                        "onde: where — Onde você mora?",
                        "de onde: from where — De onde você é?",
                        "para onde: to where — Para onde você vai?",
                        "quando: when — Quando começa a aula?",
                        "como: how — Como você está?",
                        "por que: why — Por que você estuda português?",
                        "para que: for what / what for — Para que serve isto?",
                        "quanto: how much (masc.) — Quanto custa?",
                        "quanta: how much (fem.) — Quanta água você bebe?",
                        "quantos: how many (masc. pl.) — Quantos alunos há?",
                        "quantas: how many (fem. pl.) — Quantas pessoas vêm?",
                    ].join("\n"),
                    title: "Practice of question words",
                    title_native: "Ivo’s morning full of questions",
                    title_target: "A manhã do Ivo cheia de perguntas",
                    sentences: [
                        {
                            native: "Why does Ivo wake up so early in the morning?",
                            target: "Por que o Ivo acorda tão cedo de manhã?",
                        },
                        {
                            native: "What does he hear first when he opens his eyes?",
                            target: "O que ele ouve primeiro quando abre os olhos?",
                        },
                        {
                            native: "Who calls him so early – the neighbour or the courier?",
                            target: "Quem lhe liga tão cedo — o vizinho ou o estafeta?",
                        },
                        {
                            native: "Where is his phone if it is not on the table?",
                            target: "Onde está o telemóvel dele, se não está na mesa?",
                        },
                        {
                            native: "Where does he put his things every night?",
                            target: "Aonde ele põe as suas coisas todas as noites?",
                        },
                        {
                            native: "Where does that strange noise in the corridor come from?",
                            target: "De onde vem esse barulho estranho no corredor?",
                        },
                        {
                            native: "When does he manage to make coffee if he is already late?",
                            target: "Quando ele consegue fazer café, se já está atrasado?",
                        },
                        {
                            native: "How does he stay calm if everything around is in a hurry?",
                            target: "Como ele fica calmo se tudo à volta tem pressa?",
                        },
                        {
                            native: "What does Ivo open the window for every morning?",
                            target: "Para que o Ivo abre a janela todas as manhãs?",
                        },
                        {
                            native: "Which bus arrives first today?",
                            target: "Qual autocarro chega primeiro hoje?",
                        },
                        {
                            native: "Which routes pass near his house?",
                            target: "Quais rotas passam perto da casa dele?",
                        },
                        {
                            native: "How much time does he have left before he has to leave?",
                            target: "Quanto tempo lhe resta até sair?",
                        },
                        {
                            native: "How many cups of coffee does he usually drink in the morning?",
                            target: "Quantas chávenas de café ele bebe normalmente de manhã?",
                        },
                        {
                            native: "Why does he have so little energy today?",
                            target: "Por que ele tem tão pouca energia hoje?",
                        },
                        {
                            native: "With whom does he have breakfast on weekdays?",
                            target: "Com quem ele toma o pequeno-almoço nos dias úteis?",
                        },
                        {
                            native: "What does he think about when he looks out of the window?",
                            target: "De que ele pensa quando olha pela janela?",
                        },
                        {
                            native: "In what mood does he leave the house?",
                            target: "Em que humor ele sai de casa?",
                        },
                        {
                            native: "Which shop does he go into every morning?",
                            target: "Em que loja ele entra todas as manhãs?",
                        },
                        {
                            native: "What does he buy – bread or fruit?",
                            target: "O que ele compra — pão ou fruta?",
                        },
                        {
                            native: "Why does the shop assistant smile at him every day?",
                            target: "Por que a empregada lhe sorri todos os dias?",
                        },
                        {
                            native: "Whom does he meet on the way to work?",
                            target: "Quem ele encontra no caminho para o trabalho?",
                        },
                        {
                            native: "Where do all those people work whom he sees in the morning?",
                            target: "Onde trabalham todas essas pessoas que ele vê de manhã?",
                        },
                        {
                            native: "When does he manage to talk to them?",
                            target: "Quando ele consegue falar com eles?",
                        },
                        {
                            native: "Why is one woman always in a hurry?",
                            target: "Por que uma mulher está sempre com pressa?",
                        },
                        {
                            native: "What is the man doing who is standing at the bus stop?",
                            target: "O que faz o homem que está na paragem?",
                        },
                        {
                            native: "Which of them is waiting for the first bus?",
                            target: "Qual deles espera o primeiro autocarro?",
                        },
                        {
                            native: "How many people are standing in the queue?",
                            target: "Quantas pessoas estão na fila?",
                        },
                        {
                            native: "Why does the bus always arrive late?",
                            target: "Por que o autocarro chega sempre atrasado?",
                        },
                        {
                            native: "Where does the driver look when he arrives?",
                            target: "Aonde o motorista olha quando chega?",
                        },
                        {
                            native: "How does Ivo find a place if the bus is full?",
                            target: "Como o Ivo encontra lugar se o autocarro está cheio?",
                        },
                        {
                            native: "With whom does he talk on the way?",
                            target: "Com quem ele fala durante o caminho?",
                        },
                        {
                            native: "What does his seat neighbour ask him about?",
                            target: "De que o vizinho de assento lhe pergunta?",
                        },
                        {
                            native: "Why does this man want to know where Ivo works?",
                            target: "Por que esse homem quer saber onde o Ivo trabalha?",
                        },
                        {
                            native: "What does Ivo answer when they ask him?",
                            target: "O que o Ivo responde quando lhe perguntam?",
                        },
                        {
                            native: "When does he finally get off at his stop?",
                            target: "Quando ele finalmente sai na sua paragem?",
                        },
                        {
                            native: "Where does he go after getting off the bus?",
                            target: "Aonde ele vai depois de sair do autocarro?",
                        },
                        {
                            native: "Why are his colleagues standing at the office door?",
                            target: "Por que os colegas estão à porta do escritório?",
                        },
                        {
                            native: "Whom are they waiting for – the boss or the courier?",
                            target: "Quem eles esperam — o chefe ou o estafeta?",
                        },
                        {
                            native: "What does Ivo say when he comes closer?",
                            target: "O que o Ivo diz quando se aproxima?",
                        },
                        {
                            native: "How do the colleagues react to his questions?",
                            target: "Como os colegas reagem às perguntas dele?",
                        },
                    ],
                    words: [
                        { id: "w1", native: "por que", target: "why" },
                        { id: "w2", native: "o que", target: "what" },
                        { id: "w3", native: "quem", target: "who" },
                        { id: "w4", native: "onde", target: "where" },
                        { id: "w5", native: "aonde", target: "to where (movement)" },
                        { id: "w6", native: "de onde", target: "from where" },
                        { id: "w7", native: "quando", target: "when" },
                        { id: "w8", native: "como", target: "how" },
                        { id: "w9", native: "para que", target: "for what, what for" },
                        { id: "w10", native: "qual", target: "which, which one" },
                        { id: "w11", native: "quais", target: "which (plural)" },
                        { id: "w12", native: "quanto", target: "how much (masc.)" },
                        { id: "w13", native: "quanta", target: "how much (fem.)" },
                        { id: "w14", native: "quantos", target: "how many (masc. plural)" },
                        { id: "w15", native: "quantas", target: "how many (fem. plural)" },
                        { id: "w16", native: "em que", target: "in which" },
                        { id: "w17", native: "de que", target: "about what" },
                        { id: "w18", native: "com quem", target: "with whom" },

                        // new words (only from the text)
                        { id: "w19", native: "acordar", target: "to wake up" },
                        { id: "w20", native: "ouvir", target: "to hear" },
                        { id: "w21", native: "liga", target: "he/she calls" },
                        { id: "w22", native: "vizinho", target: "neighbour" },
                        { id: "w23", native: "estafeta", target: "courier" },
                        { id: "w24", native: "telemóvel", target: "mobile phone" },
                        { id: "w25", native: "mesa", target: "table" },
                        { id: "w26", native: "pôr", target: "to put" },
                        { id: "w27", native: "barulho", target: "noise" },
                        { id: "w28", native: "corredor", target: "corridor" },

                        { id: "w29", native: "conseguir", target: "to manage, to be able to" },
                        { id: "w30", native: "ficar", target: "to stay; to become" },
                        { id: "w31", native: "calmo", target: "calm" },

                        { id: "w32", native: "abrir", target: "to open" },
                        { id: "w33", native: "janela", target: "window" },

                        { id: "w34", native: "autocarro", target: "bus" },
                        { id: "w35", native: "rota", target: "route" },
                        { id: "w36", native: "chegar", target: "to arrive" },

                        { id: "w37", native: "tempo", target: "time" },
                        { id: "w38", native: "chávena", target: "cup" },
                        { id: "w39", native: "energia", target: "energy" },

                        { id: "w40", native: "tomar", target: "to take; to have (food/drink)" },
                        { id: "w41", native: "pequeno-almoço", target: "breakfast" },

                        { id: "w42", native: "paragem", target: "stop (bus stop)" },
                        { id: "w43", native: "fila", target: "queue" },
                        { id: "w44", native: "cheio", target: "full, crowded" },
                        { id: "w45", native: "lugar", target: "seat, place" },

                        { id: "w46", native: "motorista", target: "driver" },
                        { id: "w47", native: "olhar", target: "to look" },

                        { id: "w48", native: "colega", target: "colleague" },
                        { id: "w49", native: "chefe", target: "boss" },
                        { id: "w50", native: "aproximar-se", target: "to come closer, to approach" },
                    ],
                },

                {
                    id: "PTEN7",
                    rule: [
                        "meu / minha: my — meu livro, minha casa",
                        "meus / minhas: my (plural) — meus amigos, minhas roupas",
                        "teu / tua: your (informal) — teu carro, tua família",
                        "seu / sua: his / her / your (formal) — seu carro, sua mãe",
                        "seus / suas: his / her / their / your (plural) — seus colegas, suas ideias",
                        "dele: his (of him, invariable) — o carro dele",
                        "dela: her (of her, invariable) — a casa dela",
                        "deles / delas: their — os planos deles, as coisas delas",
                        "nosso / nossa: our — nosso trabalho, nossa rua",
                        "nossos / nossas: our (plural) — nossos pais, nossas viagens",
                        "vosso / vossa: your (plural) — vosso projeto, vossa escola",
                        "vossos / vossas: your (plural) — vossos filhos, vossas roupas"
                    ].join("\n"),

                    title: "Practice of possessive pronouns",
                    title_native: "A story about a house, family and things",
                    title_target: "Uma história sobre casa, família e coisas",

                    sentences: [
                        {
                            native: "In a small town there is a family, and their house is always full of life.",
                            target: "Numa cidade pequena vive uma família, e a casa deles está sempre cheia de vida.",
                        },
                        {
                            native: "The father has his own small workshop and spends a lot of time there.",
                            target: "O pai tem a sua pequena oficina, e passa lá muito tempo.",
                        },
                        {
                            native: "He really loves his tools and always keeps them in order.",
                            target: "Ele gosta muito das suas ferramentas e mantém tudo em ordem.",
                        },
                        {
                            native: "The mother works from home and spends most of the day in her office.",
                            target: "A mãe trabalha de casa e passa grande parte do dia no seu escritório.",
                        },
                        {
                            native: "She often says that her desk is her personal world.",
                            target: "Ela costuma dizer que a sua secretária é o seu mundo pessoal.",
                        },
                        {
                            native: "The son studies at school and his school notebooks are always on the table.",
                            target: "O filho estuda na escola, e os seus cadernos escolares estão sempre em cima da mesa.",
                        },
                        {
                            native: "He likes to show his new drawings to his father.",
                            target: "Ele gosta de mostrar ao pai os seus novos desenhos.",
                        },
                        {
                            native: "The daughter plays the piano and practises her melodies every day.",
                            target: "A filha toca piano e pratica as suas melodias todos os dias.",
                        },
                        {
                            native: "Her music room is the quietest place in the house.",
                            target: "A sala de música dela é o lugar mais calmo da casa.",
                        },
                        {
                            native: "The family has two cats, and their bowls are always in the kitchen.",
                            target: "A família tem dois gatos, e as tigelas deles ficam sempre na cozinha.",
                        },
                        {
                            native: "Each cat has its favourite place by the window.",
                            target: "Cada gato tem o seu lugar preferido perto da janela.",
                        },
                        {
                            native: "In the evenings the father reads his book in the armchair next to the lamp.",
                            target: "À noite o pai lê o seu livro na poltrona ao lado da lâmpada.",
                        },
                        {
                            native: "The mother prefers to watch her series in the living room.",
                            target: "A mãe prefere ver as suas séries na sala de estar.",
                        },
                        {
                            native: "The son plays his games on the computer when he finishes his homework.",
                            target: "O filho joga os seus jogos no computador quando termina os trabalhos.",
                        },
                        {
                            native: "The daughter listens to her favourite music before going to sleep.",
                            target: "A filha ouve a sua música preferida antes de dormir.",
                        },
                        {
                            native: "Each of them values their own personal space.",
                            target: "Cada um deles valoriza o seu espaço pessoal.",
                        },
                        {
                            native: "But at the weekend the family gets together in their big kitchen.",
                            target: "Mas aos fins de semana a família reúne-se na sua cozinha grande.",
                        },
                        {
                            native: "They cook their favourite dishes and share stories.",
                            target: "Eles preparam os seus pratos favoritos e partilham histórias.",
                        },
                        {
                            native: "The father tells the children about his childhood.",
                            target: "O pai conta aos filhos sobre a sua infância.",
                        },
                        {
                            native: "The mother talks about her dreams and plans.",
                            target: "A mãe fala sobre os seus sonhos e planos.",
                        },
                        {
                            native: "The son shows the family his new photos.",
                            target: "O filho mostra à família as suas novas fotografias.",
                        },
                        {
                            native: "The daughter plays her melody and everyone listens carefully.",
                            target: "A filha toca a sua melodia, e todos a ouvem com atenção.",
                        },
                        {
                            native: "Sometimes friends come to visit and each person brings their own dessert.",
                            target: "Às vezes os amigos visitam a família, e cada um traz a sua sobremesa.",
                        },
                        {
                            native: "The house fills with laughter and everyone feels at home.",
                            target: "A casa enche-se de riso, e cada pessoa sente-se no seu próprio lugar.",
                        },
                        {
                            native: "After dinner the family puts away the dishes and washes their plates.",
                            target: "Depois do jantar a família arruma a louça e lava os seus pratos.",
                        },
                        {
                            native: "The cats get their evening food and go to their little beds.",
                            target: "Os gatos recebem a sua comida da noite e vão para as suas caminhas.",
                        },
                        {
                            native: "When night comes, everyone goes to their own room.",
                            target: "Quando chega a noite, cada um vai para o seu quarto.",
                        },
                        {
                            native: "The father turns off his lamp and falls asleep quickly.",
                            target: "O pai apaga a sua lâmpada e adormece depressa.",
                        },
                        {
                            native: "The mother checks her emails before going to sleep.",
                            target: "A mãe verifica os seus emails antes de dormir.",
                        },
                        {
                            native: "The son puts his notebooks into his backpack.",
                            target: "O filho arruma os seus cadernos na mochila.",
                        },
                        {
                            native: "The daughter puts her piano into silent mode.",
                            target: "A filha coloca o seu piano no modo silencioso.",
                        },
                        {
                            native: "Their house becomes calm and cosy.",
                            target: "A casa deles fica calma e acolhedora.",
                        },
                        {
                            native: "This place belongs to each one of them.",
                            target: "Este lugar pertence a cada um deles.",
                        },
                    ],

                    words: [
                        { id: "w1", native: "meu", target: "my (masc.)" },
                        { id: "w2", native: "minha", target: "my (fem.)" },
                        { id: "w3", native: "meus", target: "my (masc. plural)" },
                        { id: "w4", native: "minhas", target: "my (fem. plural)" },
                        { id: "w5", native: "seu", target: "his / her / your (formal)" },
                        { id: "w6", native: "sua", target: "his / her / your (formal, fem.)" },
                        { id: "w7", native: "seus", target: "his / her / their (masc. plural)" },
                        { id: "w8", native: "suas", target: "his / her / their (fem. plural)" },
                        { id: "w9", native: "dele", target: "his (of him)" },
                        { id: "w10", native: "dela", target: "her (of her)" },
                        { id: "w11", native: "deles", target: "their (masc. or mixed)" },
                        { id: "w12", native: "delas", target: "their (fem.)" },
                        { id: "w13", native: "nosso", target: "our (masc.)" },
                        { id: "w14", native: "nossa", target: "our (fem.)" },
                        { id: "w15", native: "nossos", target: "our (masc. plural)" },
                        { id: "w16", native: "nossas", target: "our (fem. plural)" },
                        { id: "w17", native: "família", target: "family" },
                        { id: "w18", native: "oficina", target: "workshop" },
                        { id: "w19", native: "ferramenta", target: "tool" },
                        { id: "w20", native: "ordem", target: "order" },
                        { id: "w21", native: "escritório", target: "office, study" },
                        { id: "w22", native: "secretária", target: "desk" },
                        { id: "w23", native: "caderno", target: "notebook" },
                        { id: "w24", native: "desenho", target: "drawing" },
                        { id: "w25", native: "melodia", target: "melody" },
                        { id: "w26", native: "gato", target: "cat" },
                        { id: "w27", native: "tigela", target: "bowl" },
                        { id: "w28", native: "lâmpada", target: "lamp" },
                        { id: "w29", native: "jantar", target: "dinner" },
                        { id: "w30", native: "prato", target: "plate" },
                        { id: "w31", native: "cama", target: "bed" },
                        { id: "w32", native: "quarto", target: "room, bedroom" },
                        { id: "w33", native: "acender", target: "to switch on" },
                        { id: "w34", native: "apagar", target: "to switch off" },
                        { id: "w35", native: "arrumar", target: "to tidy up, to put away" },
                        { id: "w36", native: "valorizar", target: "to value" },
                        { id: "w37", native: "visitar", target: "to visit" },
                        { id: "w38", native: "história", target: "story" },
                        { id: "w39", native: "infância", target: "childhood" },
                        { id: "w40", native: "plano", target: "plan" },
                        { id: "w41", native: "sonho", target: "dream" },
                        { id: "w42", native: "fotografia", target: "photograph" },
                        { id: "w43", native: "música", target: "music" },
                        { id: "w44", native: "silencioso", target: "silent, quiet" },
                        { id: "w45", native: "acolhedor", target: "cosy" },
                        { id: "w46", native: "preferido", target: "favourite" },
                        { id: "w47", native: "pessoal", target: "personal" },
                        { id: "w48", native: "lugar", target: "place" },
                        { id: "w49", native: "espaço", target: "space" },
                        { id: "w50", native: "pertencer", target: "to belong" },
                    ],
                },
                {
                    id: "PTEN8",
                    rule: [
                        "em + o = no — no meu quarto (in my room)",
                        "em + a = na — na tua bolsa (in your bag)",
                        "de + o = do — do seu trabalho (from his / her work)",
                        "de + a = da — da nossa casa (from our house)",
                        "a + o = ao — ao meu amigo (to my friend)",
                        "a + a = à — à sua mãe (to his / her mother)",
                        "por + o = pelo — pelo meu bairro (through my neighbourhood)",
                        "por + a = pela — pela sua rua (along his / her street)",
                        "para + o = para o — para o seu carro (for his / her car)",
                        "para + a = para a — para a nossa filha (for our daughter)",
                        "com + o = com o — com o meu colega (with my colleague)",
                        "com + a = com a — com a tua professora (with your teacher)",
                        "em + os = nos — nos seus amigos (in his / her friends)",
                        "em + as = nas — nas minhas ideias (in my ideas)",
                        "de + os = dos — dos nossos vizinhos (from our neighbours)",
                        "de + as = das — das suas coisas (from his / her things)"
                    ].join("\n"),

                    title: "Practice of possessives with prepositions",
                    title_native: "Ana’s day and her spaces",
                    title_target: "O dia da Ana e os seus espaços",

                    sentences: [
                        {
                            native: "Ana wakes up early and goes out to the balcony from her room.",
                            target: "A Ana acorda cedo e sai para a varanda do seu quarto.",
                        },
                        {
                            native: "She likes to start the morning with a cup of coffee on her favourite chair.",
                            target: "Ela gosta de começar a manhã com uma chávena de café na sua cadeira preferida.",
                        },
                        {
                            native: "On the table there is a notebook with her notes.",
                            target: "Na mesa está um caderno com as suas anotações.",
                        },
                        {
                            native: "She looks at the street from her window and sees the neighbours at their gates.",
                            target: "Ela olha para a rua da sua janela e vê os vizinhos nos seus portões.",
                        },
                        {
                            native: "Ana remembers that she needs to visit her friend.",
                            target: "A Ana lembra-se de que precisa de ir à sua amiga.",
                        },
                        {
                            native: "She puts the keys into her bag and leaves the house.",
                            target: "Ela põe as chaves na sua mala and sai de casa.",
                        },
                        {
                            native: "On the way she walks through her quiet neighbourhood.",
                            target: "Pelo caminho ela passa pelo seu bairro tranquilo.",
                        },
                        {
                            native: "Ana goes to the bus stop to catch the bus to her office.",
                            target: "A Ana vai à paragem para apanhar o autocarro ao seu escritório.",
                        },
                        {
                            native: "On the bus she thinks about her plans for the day.",
                            target: "No autocarro ela pensa nos seus planos para o dia.",
                        },
                        {
                            native: "Ana gets off at the building next to her colleague’s café.",
                            target: "A Ana sai no prédio ao lado do café do seu colega.",
                        },
                        {
                            native: "Her colleague waves to her from behind his counter.",
                            target: "O colega acena-lhe por detrás do seu balcão.",
                        },
                        {
                            native: "Ana says hello and buys coffee for her team.",
                            target: "A Ana cumprimenta-o e compra um café para a sua equipa.",
                        },
                        {
                            native: "She goes to the stairs that lead to the floor with her office.",
                            target: "Ela vai para as escadas que levam ao andar do seu escritório.",
                        },
                        {
                            native: "On Ana’s desk there are documents for her project.",
                            target: "Na secretária da Ana estão documentos para o seu projeto.",
                        },
                        {
                            native: "She opens the laptop and writes a message to her boss.",
                            target: "Ela abre o portátil e escreve uma mensagem ao seu chefe.",
                        },
                        {
                            native: "After work Ana goes to the supermarket near her house.",
                            target: "Depois do trabalho a Ana vai ao supermercado perto da sua casa.",
                        },
                        {
                            native: "She buys food for her dinner.",
                            target: "Ela compra produtos para o seu jantar.",
                        },
                        {
                            native: "At home Ana puts the bags on the kitchen table and turns on her music.",
                            target: "Em casa a Ana põe os sacos na mesa da cozinha e liga a sua música.",
                        },
                        {
                            native: "In the kitchen she prepares soup for her family.",
                            target: "Na cozinha ela prepara uma sopa para a sua família.",
                        },
                        {
                            native: "During dinner Ana tells her relatives about her day.",
                            target: "Durante o jantar a Ana conta aos seus familiares sobre o seu dia.",
                        },
                        {
                            native: "After dinner she goes for a walk with her dog.",
                            target: "Depois do jantar ela vai passear com o seu cão.",
                        },
                        {
                            native: "They walk along the street next to their house.",
                            target: "Eles caminham pela rua ao lado da casa deles.",
                        },
                        {
                            native: "Ana likes to look at the lights in other people’s windows.",
                            target: "A Ana gosta de olhar para as luzes nas janelas das outras pessoas.",
                        },
                        {
                            native: "Her dog pulls the lead towards his favourite park.",
                            target: "O seu cão puxa a trela para o seu parque preferido.",
                        },
                        {
                            native: "In the park Ana sits on a bench and reads a book from her bag.",
                            target: "No parque a Ana senta-se no banco e lê um livro da sua mala.",
                        },
                        {
                            native: "When it gets dark, she goes back to her house.",
                            target: "Quando escurece, ela volta à sua casa.",
                        },
                        {
                            native: "In her room Ana turns on the lamp next to her bed.",
                            target: "No seu quarto a Ana liga a lâmpada ao lado da sua cama.",
                        },
                        {
                            native: "She makes notes in the notebook for her future ideas.",
                            target: "Ela faz anotações no caderno para as suas ideias futuras.",
                        },
                        {
                            native: "Before sleeping Ana opens the window to her garden.",
                            target: "Antes de dormir a Ana abre a janela para o seu jardim.",
                        },
                        {
                            native: "The night falls softly over the streets of her small town.",
                            target: "A noite cai suavemente sobre as ruas da sua pequena cidade.",
                        },
                    ],

                    words: [
                        { id: "w1", native: "do", target: "of / from the (de + o)" },
                        { id: "w2", native: "da", target: "of / from the (de + a)" },
                        { id: "w3", native: "no", target: "in / at the (em + o)" },
                        { id: "w4", native: "na", target: "in / at the (em + a)" },
                        { id: "w5", native: "ao", target: "to the (a + o)" },
                        { id: "w6", native: "à", target: "to the (a + a)" },
                        { id: "w7", native: "pelo", target: "through / along (por + o)" },
                        { id: "w8", native: "pela", target: "through / along (por + a)" },

                        { id: "w9", native: "seu", target: "his / her / your" },
                        { id: "w10", native: "sua", target: "his / her / your (fem.)" },
                        { id: "w11", native: "nosso", target: "our (masc.)" },
                        { id: "w12", native: "nossa", target: "our (fem.)" },
                        { id: "w13", native: "dele", target: "his (of him)" },
                        { id: "w14", native: "dela", target: "her (of her)" },

                        { id: "w15", native: "varanda", target: "balcony" },
                        { id: "w16", native: "janela", target: "window" },
                        { id: "w17", native: "mala", target: "bag" },
                        { id: "w18", native: "bairro", target: "neighbourhood" },
                        { id: "w19", native: "paragem", target: "stop (bus stop)" },
                        { id: "w20", native: "escritório", target: "office" },
                        { id: "w21", native: "chefe", target: "boss" },
                        { id: "w22", native: "escada", target: "stairs" },
                        { id: "w23", native: "secretária", target: "desk" },
                        { id: "w24", native: "projeto", target: "project" },
                        { id: "w25", native: "equipa", target: "team" },
                        { id: "w26", native: "supermercado", target: "supermarket" },
                        { id: "w27", native: "produto", target: "product, food item" },
                        { id: "w28", native: "familiar", target: "family member, relative" },
                        { id: "w29", native: "cão", target: "dog" },
                        { id: "w30", native: "trela", target: "lead, leash" },
                        { id: "w31", native: "parque", target: "park" },
                        { id: "w32", native: "banco", target: "bench" },
                        { id: "w33", native: "jardim", target: "garden" },
                        { id: "w34", native: "cidade", target: "city, town" },
                        { id: "w35", native: "chave", target: "key" },
                        { id: "w36", native: "anotação", target: "note" },
                        { id: "w37", native: "ideia", target: "idea" },
                        { id: "w38", native: "jantar", target: "dinner" },
                        { id: "w39", native: "cozinha", target: "kitchen" },
                        { id: "w40", native: "caminho", target: "way, path" },
                        { id: "w41", native: "andar", target: "floor, storey" },
                        { id: "w42", native: "balcão", target: "counter" },
                        { id: "w43", native: "luz", target: "light" },
                        { id: "w44", native: "porta", target: "door" },
                        { id: "w45", native: "sacola", target: "bag (shopping bag)" },
                        { id: "w46", native: "trabalho", target: "work" },
                        { id: "w47", native: "rua", target: "street" },
                        { id: "w48", native: "noite", target: "night" },
                        { id: "w49", native: "café", target: "coffee, café" },
                        { id: "w50", native: "visão", target: "view, sight" },
                    ],
                },

                {
                    id: "PTEN9",
                    rule: [
                        "de + esse = desse — Eu preciso desse livro (I need that book of yours)",
                        "em + esse = nesse — Eu moro nesse prédio (I live in that building)",
                        "a + esse = àquele (In Portugal: a esse = a esse; àquele = to that one)",
                        "de + este = deste — perto deste lugar (near this place)",
                        "em + este = neste — neste momento (at this moment)",
                        "de + aquele = daquele — perto daquele parque (near that park)",
                        "em + aquele = naquele — naquela rua (on that street)",
                        "com + meu/sua — com o meu amigo (with my friend), com a sua mãe (with his/her mother)",
                        "por + minha/suas — pela minha rua (along my street), pelos seus planos (through his/her plans)"
                    ].join("\n"),

                    title: "Practice of demonstratives + prepositions + possession",
                    title_native: "Marco’s day and the objects around him",
                    title_target: "O dia do Marco e as coisas à sua volta",

                    sentences: [
                        {
                            native: "Marco starts his day in his kitchen and looks at the window of this small room.",
                            target: "O Marco começa o dia na sua cozinha e olha para a janela deste pequeno espaço."
                        },
                        {
                            native: "He takes a cup from the shelf near that window and pours coffee into it.",
                            target: "Ele pega a chávena da prateleira perto dessa janela e põe lá o café."
                        },
                        {
                            native: "On the table there is Marco’s notebook and he opens it at the page from last week.",
                            target: "Na mesa está o caderno do Marco, e ele abre-o na página daquela semana passada."
                        },
                        {
                            native: "He remembers that he has to go back to that project he wrote in that notebook.",
                            target: "Ele lembra-se de que deve voltar àquele projeto que escreveu naquele caderno."
                        },
                        {
                            native: "Before leaving, Marco puts the keys into the bag that hangs on the back of his chair.",
                            target: "Antes de sair, o Marco põe as chaves na mala que está nas costas da sua cadeira."
                        },
                        {
                            native: "He leaves the house and walks along the street next to the park in his neighbourhood.",
                            target: "Ele sai de casa e caminha pela rua ao lado do parque do seu bairro."
                        },
                        {
                            native: "Marco likes watching the people who walk along that path near the trees.",
                            target: "O Marco gosta de observar as pessoas que passam pelo caminho perto daquelas árvores."
                        },
                        {
                            native: "He stops near the kiosk and buys water from the seller who has been working in this place for many years.",
                            target: "Ele pára perto do quiosque e compra água ao vendedor que trabalha neste lugar há muitos anos."
                        },
                        {
                            native: "Then Marco goes to the bus stop and waits for the transport on this platform.",
                            target: "Depois, o Marco vai à paragem de autocarro e espera o transporte nessa plataforma."
                        },
                        {
                            native: "He reads a message from his sister who is asking about those documents for the family.",
                            target: "Ele lê uma mensagem da sua irmã, que pergunta sobre aqueles documentos para a família."
                        },
                        {
                            native: "Marco answers that he will hand over those documents in the evening.",
                            target: "O Marco responde que vai entregar esses documentos à noite."
                        },
                        {
                            native: "On the bus he sits in the seat next to the door and puts his backpack near his feet.",
                            target: "No autocarro ele senta-se no lugar ao lado da porta e põe a mochila perto dos seus pés."
                        },
                        {
                            native: "He notices a woman who is holding a book from that new series.",
                            target: "Ele repara numa mulher que segura um livro daquela nova coleção."
                        },
                        {
                            native: "He likes the design of this series and thinks about buying the same book.",
                            target: "Ele gosta do design dessa coleção e pensa em comprar um livro igual."
                        },
                        {
                            native: "When the bus stops near his office, Marco gets off at this stop.",
                            target: "Quando o autocarro pára junto do seu escritório, o Marco sai nessa paragem."
                        },
                        {
                            native: "At the entrance he greets a colleague who is standing by that tall building.",
                            target: "À entrada ele cumprimenta o colega que está junto daquele prédio alto."
                        },
                        {
                            native: "At work Marco turns on the computer and checks the email from his boss.",
                            target: "No trabalho o Marco abre o computador e verifica o email do seu chefe."
                        },
                        {
                            native: "He works on the task that was in that message.",
                            target: "Ele trabalha na tarefa que estava naquela mensagem."
                        },
                        {
                            native: "At lunchtime Marco goes to the café opposite his office and sits at the table near the door.",
                            target: "Ao almoço o Marco vai ao café em frente ao seu escritório e senta-se na mesa perto da porta."
                        },
                        {
                            native: "He orders the soup and salad he always chooses in such places.",
                            target: "Ele pede a sopa e a salada que sempre escolhe nesses lugares."
                        },
                        {
                            native: "After work Marco meets his friend near that old cinema.",
                            target: "Depois do trabalho o Marco encontra-se com o amigo perto daquele cinema antigo."
                        },
                        {
                            native: "They walk along the path by the river and talk about their plans for the weekend.",
                            target: "Eles caminham pelo trilho ao lado do rio e falam sobre os seus planos para o fim de semana."
                        },
                        {
                            native: "Marco’s friend shows him photos of his new bicycle.",
                            target: "O amigo mostra-lhe as fotografias da sua nova bicicleta."
                        },
                        {
                            native: "Marco says that he would like to ride that bicycle on the same day.",
                            target: "O Marco diz que gostaria de experimentar aquela bicicleta nesse mesmo dia."
                        },
                        {
                            native: "When evening comes, Marco returns to his house and opens the door with his key.",
                            target: "Quando chega a noite, o Marco volta à sua casa e abre a porta com a sua chave."
                        },
                        {
                            native: "He switches on the lamp in his living room and puts his phone on the table next to this sofa.",
                            target: "Ele liga a lâmpada na sua sala de estar e põe o telemóvel na mesa ao lado deste sofá."
                        },
                        {
                            native: "Before going to sleep he makes notes about those ideas that came to him during the day.",
                            target: "Antes de dormir ele faz anotações sobre aquelas ideias que lhe surgiram ao longo do dia."
                        }
                    ],

                    words: [
                        { id: "w1", native: "desse", target: "of/from that (de + esse)" },
                        { id: "w2", native: "nesse", target: "in/at that (em + esse)" },
                        { id: "w3", native: "deste", target: "of/from this (de + este)" },
                        { id: "w4", native: "neste", target: "in/at this (em + este)" },
                        { id: "w5", native: "daquele", target: "of/from that (far) (de + aquele)" },
                        { id: "w6", native: "naquele", target: "in/at that (far) (em + aquele)" },
                        { id: "w7", native: "com o seu", target: "with his" },
                        { id: "w8", native: "com a sua", target: "with her" },
                        { id: "w9", native: "pela", target: "along/through (por + a)" },
                        { id: "w10", native: "pelo", target: "along/through (por + o)" },

                        { id: "w11", native: "prateleira", target: "shelf" },
                        { id: "w12", native: "cadeira", target: "chair" },
                        { id: "w13", native: "janela", target: "window" },
                        { id: "w14", native: "semana", target: "week" },
                        { id: "w15", native: "caderno", target: "notebook" },
                        { id: "w16", native: "mala", target: "bag" },
                        { id: "w17", native: "árvore", target: "tree" },
                        { id: "w18", native: "quiosque", target: "kiosk" },
                        { id: "w19", native: "plataforma", target: "platform" },
                        { id: "w20", native: "mensagem", target: "message" },

                        { id: "w21", native: "documento", target: "document" },
                        { id: "w22", native: "mochila", target: "backpack" },
                        { id: "w23", native: "pés", target: "feet" },
                        { id: "w24", native: "coleção", target: "series, collection" },
                        { id: "w25", native: "design", target: "design" },
                        { id: "w26", native: "prédio", target: "building" },
                        { id: "w27", native: "email", target: "email" },
                        { id: "w28", native: "tarefa", target: "task" },
                        { id: "w29", native: "salada", target: "salad" },
                        { id: "w30", native: "cinema", target: "cinema" },

                        { id: "w31", native: "rio", target: "river" },
                        { id: "w32", native: "bicicleta", target: "bicycle" },
                        { id: "w33", native: "fotografia", target: "photograph" },
                        { id: "w34", native: "noite", target: "night" },
                        { id: "w35", native: "sofá", target: "sofa" },
                        { id: "w36", native: "telemóvel", target: "mobile phone" },
                        { id: "w37", native: "sala de estar", target: "living room" },
                        { id: "w38", native: "porta", target: "door" },
                        { id: "w39", native: "chave", target: "key" },
                        { id: "w40", native: "ideia", target: "idea" },

                        { id: "w41", native: "perto", target: "near" },
                        { id: "w42", native: "ao lado", target: "next to, beside" },
                        { id: "w43", native: "caminho", target: "path" },
                        { id: "w44", native: "trilho", target: "trail, path" },
                        { id: "w45", native: "andar", target: "floor, storey" },
                        { id: "w46", native: "cozinha", target: "kitchen" },
                        { id: "w47", native: "prato", target: "dish, plate" },
                        { id: "w48", native: "árvore", target: "tree" },
                        { id: "w49", native: "mesa", target: "table" },
                        { id: "w50", native: "luz", target: "light" }
                    ]
                },
                {
                    id: "PTEN10",
                    rule: [
                        "este — this (close to me): esta rua, este lugar",
                        "esse — this/that (close to you): esse carro, essa porta",
                        "aquele — that (far from both): aquele parque, aquela casa",
                        "ir a / ir para — to go to something: ir àquele café",
                        "vir de — to come from somewhere: vir desse prédio",
                        "chegar a — to arrive at: chegar a este hotel",
                        "sair de — to go/come out of: sair daquela estação",
                        "voltar a / voltar de — to return: voltar a este bairro, voltar daquele sítio",
                        "passar por — to go past / through: passar por essa rua",
                        "ir até — to go as far as, up to: ir até aquele cruzamento"
                    ].join("\n"),

                    title: "Demonstratives + movement",
                    title_native: "Diego’s trip in three directions",
                    title_target: "A viagem do Diego por três direções",

                    sentences: [
                        {
                            native: "Diego starts his morning on this street, not far from his house.",
                            target: "O Diego começa a sua manhã nesta rua, perto da sua casa."
                        },
                        {
                            native: "He leaves this house and goes to that bus stop.",
                            target: "Ele sai desta casa e vai até àquela paragem de autocarro."
                        },
                        {
                            native: "While he walks, he goes along this narrow path.",
                            target: "Enquanto caminha, ele passa por este caminho estreito."
                        },
                        {
                            native: "He sees women who are going to that supermarket at the junction.",
                            target: "Ele vê mulheres que vão para aquele supermercado no cruzamento."
                        },
                        {
                            native: "But Diego is going somewhere else: to this small café near the square.",
                            target: "Mas o Diego vai a outro lugar: a este café pequeno perto da praça."
                        },
                        {
                            native: "On entering the café, he meets a friend who is coming from that old neighbourhood.",
                            target: "Ao entrar no café, ele encontra um amigo que vem daquele bairro antigo."
                        },
                        {
                            native: "The friend says he is going to this office nearby.",
                            target: "O amigo diz que vai para este escritório aqui perto."
                        },
                        {
                            native: "Diego promises to go with him and help carry the things.",
                            target: "O Diego promete ir com ele e ajudar a levar as coisas."
                        },
                        {
                            native: "On the way they go along this wide avenue full of people.",
                            target: "Pelo caminho eles passam por esta avenida larga cheia de pessoas."
                        },
                        {
                            native: "They see tourists who come to this neighbourhood to take beautiful photos.",
                            target: "Eles veem turistas que vêm a este bairro para tirar fotografias bonitas."
                        },
                        {
                            native: "In front of the office there is that tall tower that can be seen from far away.",
                            target: "Em frente ao escritório está aquela torre alta que se vê de longe."
                        },
                        {
                            native: "The friend goes up into the building and Diego decides to go on.",
                            target: "O amigo sobe ao prédio e o Diego decide seguir em frente."
                        },
                        {
                            native: "He continues along this street and arrives at that quiet square.",
                            target: "Ele segue por esta rua e chega àquela praça tranquila."
                        },
                        {
                            native: "In the square he sees an artist who is going to those old houses by the river.",
                            target: "Na praça ele vê um artista que vai para aquelas casas antigas junto ao rio."
                        },
                        {
                            native: "Diego decides to go as far as that bridge to look at the city.",
                            target: "O Diego decide ir até àquela ponte para ver a cidade."
                        },
                        {
                            native: "From the bridge he notices people who are coming from this side of the river.",
                            target: "Da ponte ele nota pessoas que vêm deste lado do rio."
                        },
                        {
                            native: "But other people are coming from that side where there are many restaurants.",
                            target: "Mas outras pessoas vêm daquele lado onde há muitos restaurantes."
                        },
                        {
                            native: "Diego decides to return to this neighbourhood to eat.",
                            target: "O Diego decide voltar a este bairro para comer."
                        },
                        {
                            native: "He walks along those narrow streets and goes into a small bistro.",
                            target: "Ele passa por aquelas ruas estreitas e entra num pequeno bistrô."
                        },
                        {
                            native: "After lunch he goes back to this bus stop.",
                            target: "Depois do almoço ele vai de volta a esta paragem de autocarro."
                        },
                        {
                            native: "The bus comes from that road that leads from the old centre.",
                            target: "O autocarro chega daquela estrada que vem do centro antigo."
                        },
                        {
                            native: "Diego gets on and returns to his neighbourhood.",
                            target: "O Diego entra e volta ao seu bairro."
                        },
                        {
                            native: "At home he says that today he walked through three directions: this one, that one and the far one.",
                            target: "Em casa ele diz que hoje caminhou por três direções: esta, essa e aquela."
                        }
                    ],

                    words: [
                        { id: "w1", native: "neste", target: "in this" },
                        { id: "w2", native: "nesse", target: "in that (near you)" },
                        { id: "w3", native: "naquele", target: "in that (far)" },
                        { id: "w4", native: "deste", target: "of/from this" },
                        { id: "w5", native: "desse", target: "of/from that (near you)" },
                        { id: "w6", native: "daquele", target: "of/from that (far)" },
                        { id: "w7", native: "até", target: "as far as, up to" },
                        { id: "w8", native: "rua", target: "street" },
                        { id: "w9", native: "avenida", target: "avenue" },
                        { id: "w10", native: "ponte", target: "bridge" },
                        { id: "w11", native: "praça", target: "square" },
                        { id: "w12", native: "bairro", target: "neighbourhood" },
                        { id: "w13", native: "lado", target: "side" },
                        { id: "w14", native: "estrada", target: "road" },
                        { id: "w15", native: "direção", target: "direction" },
                        { id: "w16", native: "caminho", target: "way, path" },
                        { id: "w17", native: "chegar", target: "to arrive" },
                        { id: "w18", native: "sair", target: "to leave, to go out" },
                        { id: "w19", native: "voltar", target: "to return" },
                        { id: "w20", native: "passar", target: "to pass, to go by" },
                        { id: "w21", native: "ir", target: "to go" },
                        { id: "w22", native: "vir", target: "to come" },
                        { id: "w23", native: "subir", target: "to go up" },
                        { id: "w24", native: "entrar", target: "to enter, to go in" },
                        { id: "w25", native: "seguir", target: "to follow, to go on" },
                        { id: "w26", native: "paragem", target: "stop (bus stop)" },
                        { id: "w27", native: "bistrô", target: "bistro" },
                        { id: "w28", native: "mercado", target: "market" },
                        { id: "w29", native: "artista", target: "artist" },
                        { id: "w30", native: "ponte", target: "bridge" },
                        { id: "w31", native: "turista", target: "tourist" },
                        { id: "w32", native: "vista", target: "view" },
                        { id: "w33", native: "lugar", target: "place" },
                        { id: "w34", native: "cidade", target: "city" },
                        { id: "w35", native: "centro", target: "centre" },
                        { id: "w36", native: "prédio", target: "building" },
                        { id: "w37", native: "torre", target: "tower" },
                        { id: "w38", native: "porta", target: "door" },
                        { id: "w39", native: "janela", target: "window" },
                        { id: "w40", native: "café", target: "café" },
                        { id: "w41", native: "supermercado", target: "supermarket" },
                        { id: "w42", native: "mulher", target: "woman" },
                        { id: "w43", native: "homem", target: "man" },
                        { id: "w44", native: "fotografia", target: "photo" },
                        { id: "w45", native: "árvore", target: "tree" },
                        { id: "w46", native: "rio", target: "river" },
                        { id: "w47", native: "restaurante", target: "restaurant" },
                        { id: "w48", native: "direções", target: "directions" },
                        { id: "w49", native: "longo", target: "distant, long" },
                        { id: "w50", native: "estreito", target: "narrow" }
                    ]
                },

                {
                    id: "PTEN11",
                    rule: [
                        "seu / sua — his / her / your: sua casa, seu carro",
                        "dele / dela — clear possession (his / her): o livro dele",
                        "este — this (near me)",
                        "esse — this / that (near you)",
                        "aquele — that (far from us)",
                        "isto / isso / aquilo — this / that / that over there",
                        "com o seu — with your / his / her",
                        "de + este = deste — perto deste lugar (near this place)",
                        "em + esse = nesse — nesse momento (in that moment)"
                    ].join("\n"),

                    title: "Possessives + demonstratives in dialogues",
                    title_native: "Conversations in a café, in the street and at home",
                    title_target: "Conversas no café, na rua e em casa",

                    sentences: [
                        {
                            native: "“Whose backpack is this?” asks Sofia.",
                            target: "— De quem é esta mochila? — pergunta a Sofia."
                        },
                        {
                            native: "“It’s mine, but that pencil case is not mine, it belongs to my sister.”",
                            target: "— É meu, mas aquele estojo não é meu, pertence à minha irmã."
                        },
                        {
                            native: "“And this phone? Is it yours too?”",
                            target: "— E este telemóvel? Também é teu?"
                        },
                        {
                            native: "“No, that one belongs to Marco.”",
                            target: "— Não, esse pertence ao Marco."
                        },
                        {
                            native: "“And where is his charger?”",
                            target: "— E onde está o carregador dele?"
                        },
                        {
                            native: "“I think he left it in that room.”",
                            target: "— Acho que ele a deixou naquele quarto."
                        },
                        {
                            native: "Sofia goes to the room and sees a book.",
                            target: "A Sofia chega ao quarto e vê um livro."
                        },
                        {
                            native: "“Is this your book or your sister’s book?”",
                            target: "— Este livro é teu ou da tua irmã?"
                        },
                        {
                            native: "“It’s my sister’s book, but this bookmark is mine.”",
                            target: "— É da minha irmã, mas este marcador é meu."
                        },
                        {
                            native: "At that moment Marco comes out of the kitchen with a cup.",
                            target: "Nessa altura o Marco sai da cozinha com uma chávena."
                        },
                        {
                            native: "“Is this coffee yours?”",
                            target: "— Este café é teu?"
                        },
                        {
                            native: "“No, that coffee is for Sofia.”",
                            target: "— Não, aquele café é para a Sofia."
                        },
                        {
                            native: "“Where is your bag? I saw it near that door.”",
                            target: "— Onde está a tua mala? Vi-a perto daquela porta."
                        },
                        {
                            native: "“Mine is here, and that bag belongs to my friend.”",
                            target: "— A minha está aqui, e aquela mala é da minha amiga."
                        },
                        {
                            native: "In the street they meet their neighbour with his dog.",
                            target: "Na rua eles encontram o vizinho com o seu cão."
                        },
                        {
                            native: "“Is this his dog?”",
                            target: "— Este é o cão dele?"
                        },
                        {
                            native: "“No, this small one is his, and that big one is his son’s dog.”",
                            target: "— Não, este pequeno é dele, e aquele grande é do filho dele."
                        },
                        {
                            native: "“Have you seen my book? I left it on this table.”",
                            target: "— Viste o meu livro? Deixei-o nesta mesa."
                        },
                        {
                            native: "“I only saw that newspaper.”",
                            target: "— Só vi aquele jornal."
                        },
                        {
                            native: "“All right, I’ll look in that room again.”",
                            target: "— Está bem, vou ver naquele quarto outra vez."
                        },
                        {
                            native: "When they go back home, Sofia says:",
                            target: "Quando voltam a casa, a Sofia diz:"
                        },
                        {
                            native: "“I like this house, but I like that one where my parents live even more.”",
                            target: "— Gosto desta casa, mas daquela onde vivem os meus pais gosto ainda mais."
                        },
                        {
                            native: "“And I like this view from the window.”",
                            target: "— E eu gosto desta vista pela janela."
                        },
                        {
                            native: "“Is this painting yours too?”",
                            target: "— Este quadro também é teu?"
                        },
                        {
                            native: "“No, it belongs to my friend Carla.”",
                            target: "— Não, é da minha amiga Carla."
                        },
                        {
                            native: "“And this chair?”",
                            target: "— E esta cadeira?"
                        },
                        {
                            native: "“This one is mine, and that one is my brother’s chair.”",
                            target: "— Este é meu, e aquele é do meu irmão."
                        },
                        {
                            native: "“I want to buy a table similar to this one.”",
                            target: "— Quero comprar uma mesa parecida com esta."
                        },
                        {
                            native: "“Then we need to go to that shop on the corner.”",
                            target: "— Então precisamos de passar por aquela loja na esquina."
                        },
                        {
                            native: "“All right, and after that can we come back to this neighbourhood?”",
                            target: "— Está bem, e depois podemos voltar a este bairro?"
                        }
                    ],

                    words: [
                        { id: "w1", native: "este", target: "this (near speaker)" },
                        { id: "w2", native: "esse", target: "this / that (near listener)" },
                        { id: "w3", native: "aquele", target: "that (far away)" },
                        { id: "w4", native: "isto", target: "this (neuter)" },
                        { id: "w5", native: "isso", target: "that (near listener, neuter)" },
                        { id: "w6", native: "aquilo", target: "that over there (neuter)" },
                        { id: "w7", native: "seu", target: "his / her / your" },
                        { id: "w8", native: "dele", target: "his" },
                        { id: "w9", native: "dela", target: "her" },
                        { id: "w10", native: "marcador", target: "bookmark" },

                        { id: "w11", native: "mochila", target: "backpack" },
                        { id: "w12", native: "carregador", target: "charger" },
                        { id: "w13", native: "cozinha", target: "kitchen" },
                        { id: "w14", native: "quarto", target: "room, bedroom" },
                        { id: "w15", native: "porta", target: "door" },
                        { id: "w16", native: "janela", target: "window" },
                        { id: "w17", native: "cadeira", target: "chair" },
                        { id: "w18", native: "mesa", target: "table" },
                        { id: "w19", native: "vista", target: "view" },
                        { id: "w20", native: "cão", target: "dog" },

                        { id: "w21", native: "vizinho", target: "neighbour" },
                        { id: "w22", native: "amiga", target: "female friend" },
                        { id: "w23", native: "amigo", target: "friend" },
                        { id: "w24", native: "filho", target: "son" },
                        { id: "w25", native: "jornal", target: "newspaper" },
                        { id: "w26", native: "quadro", target: "painting, picture" },
                        { id: "w27", native: "loja", target: "shop" },
                        { id: "w28", native: "esquina", target: "corner" },
                        { id: "w29", native: "bairro", target: "neighbourhood" },
                        { id: "w30", native: "casa", target: "house, home" },

                        { id: "w31", native: "deixar", target: "to leave, to put down" },
                        { id: "w32", native: "ver", target: "to see" },
                        { id: "w33", native: "ir", target: "to go" },
                        { id: "w34", native: "vir", target: "to come" },
                        { id: "w35", native: "voltar", target: "to return, to come back" },
                        { id: "w36", native: "passar por", target: "to pass by" },
                        { id: "w37", native: "perguntar", target: "to ask" },
                        { id: "w38", native: "responder", target: "to answer" },
                        { id: "w39", native: "chegar", target: "to arrive" },
                        { id: "w40", native: "entrar", target: "to enter, to come in" },

                        { id: "w41", native: "pequeno", target: "small" },
                        { id: "w42", native: "grande", target: "big" },
                        { id: "w43", native: "novo", target: "new" },
                        { id: "w44", native: "velho", target: "old" },
                        { id: "w45", native: "perto", target: "near" },
                        { id: "w46", native: "longe", target: "far" },
                        { id: "w47", native: "aqui", target: "here" },
                        { id: "w48", native: "aí", target: "there (near you)" },
                        { id: "w49", native: "lá", target: "there (far away)" },
                        { id: "w50", native: "também", target: "also, too" }
                    ]
                },
                {
                    id: "PTEN12",
                    rule: [
                        "As estações do ano (seasons of the year): primavera (spring), verão (summer), outono (autumn / fall), inverno (winter)",
                        "Os meses (months): janeiro, fevereiro, março, abril, maio, junho, julho, agosto, setembro, outubro, novembro, dezembro"
                    ].join("\n"),

                    title: "Seasons and months",
                    title_native: "Seasons and months",
                    title_target: "As estações e os meses",

                    sentences: [
                        {
                            native: "In Portugal there are four seasons: spring, summer, autumn and winter.",
                            target: "Em Portugal há quatro estações: primavera, verão, outono e inverno."
                        },
                        {
                            native: "In spring the weather becomes mild and people start going for walks more often.",
                            target: "Na primavera o tempo fica mais suave e as pessoas começam a passear mais."
                        },
                        {
                            native: "In summer it is hot and many people go to the ocean.",
                            target: "No verão faz calor e muitos vão ao oceano."
                        },
                        {
                            native: "In autumn it often rains and the leaves change colour.",
                            target: "No outono chove muitas vezes e as folhas mudam de cor."
                        },
                        {
                            native: "In winter it can be chilly, especially in the northern regions.",
                            target: "No inverno pode estar fresco, especialmente nas regiões do norte."
                        },
                        {
                            native: "The year begins in January, when many people make new plans.",
                            target: "O ano começa em janeiro, quando muitas pessoas fazem novos planos."
                        },
                        {
                            native: "In February the weather is still cold, but the days are already getting longer.",
                            target: "Em fevereiro o tempo ainda é frio, mas os dias já ficam mais longos."
                        },
                        {
                            native: "In March you can feel that spring is coming.",
                            target: "Em março sente-se a chegada da primavera."
                        },
                        {
                            native: "April brings sunny days and frequent showers.",
                            target: "Abril traz dias de sol e chuvas frequentes."
                        },
                        {
                            native: "In May nature is in full bloom.",
                            target: "Em maio a natureza floresce completamente."
                        },
                        {
                            native: "June opens the season of warm evenings.",
                            target: "Junho abre a época das noites quentes."
                        },
                        {
                            native: "In July and August the temperatures are at their highest.",
                            target: "Em julho e agosto estão as temperaturas mais altas."
                        },
                        {
                            native: "September is mild and calm, ideal for travelling.",
                            target: "Setembro é suave e tranquilo, ideal para viajar."
                        },
                        {
                            native: "October brings golden leaves.",
                            target: "Outubro traz folhas douradas."
                        },
                        {
                            native: "In November the days become short and cool.",
                            target: "Em novembro os dias ficam curtos e frescos."
                        },
                        {
                            native: "December is the month of holidays and warm family gatherings.",
                            target: "Dezembro é o mês das festas e dos encontros familiares."
                        }
                    ],

                    words: [
                        { id: "w1", native: "primavera", target: "spring" },
                        { id: "w2", native: "verão", target: "summer" },
                        { id: "w3", native: "outono", target: "autumn, fall" },
                        { id: "w4", native: "inverno", target: "winter" },
                        { id: "w5", native: "janeiro", target: "January" },
                        { id: "w6", native: "fevereiro", target: "February" },
                        { id: "w7", native: "março", target: "March" },
                        { id: "w8", native: "abril", target: "April" },
                        { id: "w9", native: "maio", target: "May" },
                        { id: "w10", native: "junho", target: "June" },
                        { id: "w11", native: "julho", target: "July" },
                        { id: "w12", native: "agosto", target: "August" },
                        { id: "w13", native: "setembro", target: "September" },
                        { id: "w14", native: "outubro", target: "October" },
                        { id: "w15", native: "novembro", target: "November" },
                        { id: "w16", native: "dezembro", target: "December" },
                        { id: "w17", native: "tempo", target: "weather, time" },
                        { id: "w18", native: "calor", target: "heat, hot weather" },
                        { id: "w19", native: "frio", target: "cold" },
                        { id: "w20", native: "chuva", target: "rain" },
                        { id: "w22", native: "sol", target: "sun" },
                        { id: "w23", native: "viagem", target: "trip, journey" },
                        { id: "w24", native: "praia", target: "beach" },
                        { id: "w25", native: "oceano", target: "ocean" },
                        { id: "w26", native: "folhas", target: "leaves" },
                        { id: "w27", native: "cores", target: "colours" },
                        { id: "w28", native: "festas", target: "parties, holidays" },
                        { id: "w29", native: "família", target: "family" },
                        { id: "w30", native: "região", target: "region" },
                        { id: "w31", native: "natureza", target: "nature" },
                        { id: "w32", native: "florescer", target: "to bloom, to blossom" },
                        { id: "w33", native: "planos", target: "plans" },
                        { id: "w34", native: "noites", target: "nights" },
                        { id: "w35", native: "dias", target: "days" },
                        { id: "w36", native: "longo", target: "long" },
                        { id: "w37", native: "curto", target: "short" },
                        { id: "w38", native: "quente", target: "warm, hot" },
                        { id: "w39", native: "suave", target: "mild, soft" },
                        { id: "w40", native: "viajar", target: "to travel" },
                        { id: "w41", native: "andar", target: "to walk" },
                        { id: "w42", native: "começar", target: "to begin, to start" },
                        { id: "w43", native: "mudar", target: "to change" },
                        { id: "w44", native: "trazer", target: "to bring" },
                        { id: "w45", native: "sentir", target: "to feel" },
                        { id: "w46", native: "ficar", target: "to become, to stay" },
                        { id: "w47", native: "pessoa", target: "person" },
                        { id: "w48", native: "cidade", target: "city" },
                        { id: "w49", native: "regiões", target: "regions" },
                        { id: "w50", native: "altura", target: "period, season, time of year" },
                        { id: "w51", native: "ano", target: "year" }
                    ]
                }

            ],
        },
    ],
};


