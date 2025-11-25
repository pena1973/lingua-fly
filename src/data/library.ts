export type SentencePair = { native: string; target: string };
export type WordPair = { native: string; target: string; id: string };
export type TextItem = { id: string; rule: string; title: string; title_native: string; title_target: string; sentences: SentencePair[]; words: WordPair[] };
export type Section = { id: string; title_native: string; title_target: string; texts: TextItem[] };


export type Library = {
    learningLang: "en" | "pt" | "es"; // что учим (пример: en)
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
                // 1) Greetings & introductions
                {
                    id: "en_a1_greetings",
                    rule: [
                        "to be: I am, you are, he is, she is, it is, we are, they are",
                        "subject pronouns: I, you, he, she, it, we, they",
                        "basic questions: What is your name? Where are you from? How are you?",
                        "short answers: I am fine. I am OK. I am not very well."
                    ].join("\n"),
                    title: "Знакомство и приветствия",
                    title_native: "Знакомство и приветствия",
                    title_target: "Greetings and introductions",
                    sentences: [
                        {
                            native: "Меня зовут Анна, и я начинаю учить английский язык.",
                            target: "My name is Anna and I am starting to learn English."
                        },
                        {
                            native: "Сегодня у меня первый урок в онлайн-школе.",
                            target: "Today I have my first lesson in an online school."
                        },
                        {
                            native: "Учитель улыбается и говорит: «Hello, my name is Mark.»",
                            target: "The teacher smiles and says, 'Hello, my name is Mark.'"
                        },
                        {
                            native: "Я немного нервничаю, но тоже говорю: «Hello, I am Anna.»",
                            target: "I feel a little nervous, but I also say, 'Hello, I am Anna.'"
                        },
                        {
                            native: "В группе есть люди из разных стран.",
                            target: "There are people from different countries in the group."
                        },
                        {
                            native: "Одна девушка из Испании, один парень из Италии и одна женщина из Бразилии.",
                            target: "One girl is from Spain, one boy is from Italy, and one woman is from Brazil."
                        },
                        {
                            native: "Учитель задаёт простой вопрос: «Where are you from?»",
                            target: "The teacher asks a simple question, 'Where are you from?'"
                        },
                        {
                            native: "Я отвечаю: «I am from Latvia, but I live in Riga.»",
                            target: "I answer, 'I am from Latvia, but I live in Riga.'"
                        },
                        {
                            native: "Все внимательно слушают друг друга и повторяют имена.",
                            target: "Everyone listens to each other carefully and repeats the names."
                        },
                        {
                            native: "Потом учитель учит нас приветствиям на английском.",
                            target: "Then the teacher teaches us greetings in English."
                        },
                        {
                            native: "Мы говорим: «Good morning», «Good afternoon» и «Good evening».",
                            target: "We say, 'Good morning', 'Good afternoon' and 'Good evening'."
                        },
                        {
                            native: "Мы также учим вежливые фразы: «Nice to meet you» и «See you later».",
                            target: "We also learn polite phrases: 'Nice to meet you' and 'See you later'."
                        },
                        {
                            native: "Иногда я ошибаюсь и путаю слова.",
                            target: "Sometimes I make mistakes and mix up the words."
                        },
                        {
                            native: "Учитель говорит, что это нормально и что ошибки — часть обучения.",
                            target: "The teacher says it is normal and that mistakes are part of learning."
                        },
                        {
                            native: "В конце урока мы повторяем диалог в парах.",
                            target: "At the end of the lesson we repeat a dialogue in pairs."
                        },
                        {
                            native: "Моя партнёрша говорит: «Hello, what is your name?»",
                            target: "My partner says, 'Hello, what is your name?'"
                        },
                        {
                            native: "Я отвечаю: «My name is Anna. How are you?»",
                            target: "I answer, 'My name is Anna. How are you?'"
                        },
                        {
                            native: "Она говорит: «I am fine, thank you. And you?»",
                            target: "She says, 'I am fine, thank you. And you?'"
                        },
                        {
                            native: "Я немного смеюсь, потому что мой акцент пока сильный.",
                            target: "I laugh a little because my accent is still strong."
                        },
                        {
                            native: "Но я чувствую, что делаю первый важный шаг в мире английского языка.",
                            target: "But I feel that I am taking the first important step into the world of English."
                        }
                    ],
                    words: [
                        { id: "w1", native: "знакомство", target: "introduction" },
                        { id: "w2", native: "приветствие", target: "greeting" },
                        { id: "w3", native: "имя", target: "name" },
                        { id: "w4", native: "страна", target: "country" },
                        { id: "w5", native: "город", target: "city" },
                        { id: "w6", native: "онлайн-школа", target: "online school" },
                        { id: "w7", native: "учитель", target: "teacher" },
                        { id: "w8", native: "студент", target: "student" },
                        { id: "w9", native: "группа", target: "group" },
                        { id: "w10", native: "урок", target: "lesson" },
                        { id: "w11", native: "привет", target: "hello" },
                        { id: "w12", native: "доброе утро", target: "good morning" },
                        { id: "w13", native: "добрый день", target: "good afternoon" },
                        { id: "w14", native: "добрый вечер", target: "good evening" },
                        { id: "w15", native: "как дела?", target: "how are you?" },
                        { id: "w16", native: "хорошо", target: "fine" },
                        { id: "w17", native: "нормально", target: "OK" },
                        { id: "w18", native: "спасибо", target: "thank you" },
                        { id: "w19", native: "рад познакомиться", target: "nice to meet you" },
                        { id: "w20", native: "увидимся позже", target: "see you later" },
                        { id: "w21", native: "откуда ты?", target: "where are you from?" },
                        { id: "w22", native: "я из", target: "I am from" },
                        { id: "w23", native: "жить", target: "to live" },
                        { id: "w24", native: "ошибка", target: "mistake" },
                        { id: "w25", native: "акцент", target: "accent" },
                        { id: "w26", native: "чувствовать", target: "to feel" },
                        { id: "w27", native: "смеяться", target: "to laugh" },
                        { id: "w28", native: "слушать", target: "to listen" },
                        { id: "w29", native: "повторять", target: "to repeat" },
                        { id: "w30", native: "вопрос", target: "question" },
                        { id: "w31", native: "ответ", target: "answer" },
                        { id: "w32", native: "нервный", target: "nervous" },
                        { id: "w33", native: "спокойный", target: "calm" },
                        { id: "w34", native: "улыбаться", target: "to smile" },
                        { id: "w35", native: "слово", target: "word" },
                        { id: "w36", native: "фраза", target: "phrase" },
                        { id: "w37", native: "язык", target: "language" },
                        { id: "w38", native: "начинающий", target: "beginner" },
                        { id: "w39", native: "важный", target: "important" },
                        { id: "w40", native: "первый шаг", target: "first step" },
                        { id: "w41", native: "другой", target: "other" },
                        { id: "w42", native: "люди", target: "people" },
                        { id: "w43", native: "разный", target: "different" },
                        { id: "w44", native: "сегодня", target: "today" },
                        { id: "w45", native: "сейчас", target: "now" },
                        { id: "w46", native: "повторять имя", target: "to repeat a name" },
                        { id: "w47", native: "слушать внимательно", target: "to listen carefully" },
                        { id: "w48", native: "это нормально", target: "it is normal" },
                        { id: "w49", native: "часть обучения", target: "part of learning" },
                        { id: "w50", native: "мир английского языка", target: "world of English" }
                    ]
                },

                // 2) Daily routine
                {
                    id: "en_a1_daily_routine",
                    rule: [
                        "present simple (habits): I get up, you work, he works, we study",
                        "adverbs of frequency: always, usually, often, sometimes, never",
                        "time phrases: in the morning, in the afternoon, in the evening, at night, every day"
                    ].join("\n"),
                    title: "Ежедневная рутина",
                    title_native: "Ежедневная рутина",
                    title_target: "Daily routine",
                    sentences: [
                        {
                            native: "Каждое утро я просыпаюсь в семь часов.",
                            target: "Every morning I wake up at seven o'clock."
                        },
                        {
                            native: "Я выключаю будильник и несколько минут лежу в кровати.",
                            target: "I turn off my alarm and lie in bed for a few minutes."
                        },
                        {
                            native: "Потом я встаю, иду в ванную и умываюсь холодной водой.",
                            target: "Then I get up, go to the bathroom and wash my face with cold water."
                        },
                        {
                            native: "Я чищу зубы и быстро причёсываюсь.",
                            target: "I brush my teeth and comb my hair quickly."
                        },
                        {
                            native: "Обычно я пью чай или кофе и ем простой завтрак.",
                            target: "I usually drink tea or coffee and eat a simple breakfast."
                        },
                        {
                            native: "Я часто слушаю спокойную музыку во время завтрака.",
                            target: "I often listen to calm music during breakfast."
                        },
                        {
                            native: "В восемь часов я сажусь за стол и начинаю работать.",
                            target: "At eight o'clock I sit at my desk and start to work."
                        },
                        {
                            native: "Я работаю из дома, поэтому мой ноутбук — это мой офис.",
                            target: "I work from home, so my laptop is my office."
                        },
                        {
                            native: "Каждый час я делаю небольшой перерыв на пару минут.",
                            target: "Every hour I take a short break for a few minutes."
                        },
                        {
                            native: "Иногда во время перерыва я повторяю новые английские слова.",
                            target: "Sometimes during the break I review new English words."
                        },
                        {
                            native: "В полдень я готовлю простой обед и немного отдыхаю.",
                            target: "At noon I cook a simple lunch and rest a little."
                        },
                        {
                            native: "После обеда я продолжаю работать до пяти часов.",
                            target: "After lunch I continue to work until five o'clock."
                        },
                        {
                            native: "Вечером я выхожу на короткую прогулку около дома.",
                            target: "In the evening I go for a short walk near my home."
                        },
                        {
                            native: "Я иногда встречаю соседей и говорю им «hello».",
                            target: "Sometimes I meet my neighbours and say 'hello' to them."
                        },
                        {
                            native: "После прогулки я ужинаю и немного смотрю сериал.",
                            target: "After the walk I have dinner and watch a series for a while."
                        },
                        {
                            native: "Перед сном я всегда повторяю хотя бы десять слов по-английски.",
                            target: "Before bed I always review at least ten English words."
                        },
                        {
                            native: "Иногда я пишу короткий дневник о своём дне на английском.",
                            target: "Sometimes I write a short diary about my day in English."
                        },
                        {
                            native: "Когда я очень устала, я просто читаю простой текст.",
                            target: "When I am very tired, I just read a simple text."
                        },
                        {
                            native: "Я ложусь спать около одиннадцати часов.",
                            target: "I go to bed at about eleven o'clock."
                        },
                        {
                            native: "Мой обычный день простой, но он помогает мне учить язык каждый день.",
                            target: "My usual day is simple, but it helps me learn the language every day."
                        }
                    ],
                    words: [
                        { id: "w1", native: "ежедневная рутина", target: "daily routine" },
                        { id: "w2", native: "просыпаться", target: "to wake up" },
                        { id: "w3", native: "будильник", target: "alarm clock" },
                        { id: "w4", native: "кровать", target: "bed" },
                        { id: "w5", native: "ванная", target: "bathroom" },
                        { id: "w6", native: "умываться", target: "to wash (one's face)" },
                        { id: "w7", native: "чистить зубы", target: "to brush teeth" },
                        { id: "w8", native: "завтрак", target: "breakfast" },
                        { id: "w9", native: "обед", target: "lunch" },
                        { id: "w10", native: "ужин", target: "dinner" },
                        { id: "w11", native: "чай", target: "tea" },
                        { id: "w12", native: "кофе", target: "coffee" },
                        { id: "w13", native: "музыка", target: "music" },
                        { id: "w14", native: "работать", target: "to work" },
                        { id: "w15", native: "из дома", target: "from home" },
                        { id: "w16", native: "ноутбук", target: "laptop" },
                        { id: "w17", native: "офис", target: "office" },
                        { id: "w18", native: "перерыв", target: "break" },
                        { id: "w19", native: "каждый день", target: "every day" },
                        { id: "w20", native: "обычно", target: "usually" },
                        { id: "w21", native: "часто", target: "often" },
                        { id: "w22", native: "иногда", target: "sometimes" },
                        { id: "w23", native: "никогда", target: "never" },
                        { id: "w24", native: "утро", target: "morning" },
                        { id: "w25", native: "день", target: "afternoon" },
                        { id: "w26", native: "вечер", target: "evening" },
                        { id: "w27", native: "ночь", target: "night" },
                        { id: "w28", native: "прогулка", target: "walk" },
                        { id: "w29", native: "сосед", target: "neighbour" },
                        { id: "w30", native: "дом", target: "home" },
                        { id: "w31", native: "пешком", target: "on foot" },
                        { id: "w32", native: "сериал", target: "series" },
                        { id: "w33", native: "дневник", target: "diary" },
                        { id: "w34", native: "повторять (слова)", target: "to review words" },
                        { id: "w35", native: "простой", target: "simple" },
                        { id: "w36", native: "обычный день", target: "usual day" },
                        { id: "w37", native: "час", target: "o'clock" },
                        { id: "w38", native: "утомлённый", target: "tired" },
                        { id: "w39", native: "отдыхать", target: "to rest" },
                        { id: "w40", native: "готовить", target: "to cook" },
                        { id: "w41", native: "сидеть за столом", target: "to sit at the desk" },
                        { id: "w42", native: "начинать", target: "to start" },
                        { id: "w43", native: "продолжать", target: "to continue" },
                        { id: "w44", native: "выходить", target: "to go out" },
                        { id: "w45", native: "короткий", target: "short" },
                        { id: "w46", native: "уставать", target: "to get tired" },
                        { id: "w47", native: "помогать", target: "to help" },
                        { id: "w48", native: "учить язык", target: "to learn the language" },
                        { id: "w49", native: "каждый час", target: "every hour" },
                        { id: "w50", native: "перед сном", target: "before bed" }
                    ]
                },

                // 3) Family
                {
                    id: "en_a1_family",
                    rule: [
                        "possessive adjectives: my, your, his, her, our, their",
                        "family vocabulary: mother, father, sister, brother, parents",
                        "’s for possession: Anna's mother, Mark's brother"
                    ].join("\n"),
                    title: "Моя семья",
                    title_native: "Моя семья",
                    title_target: "My family",
                    sentences: [
                        {
                            native: "У меня небольшая, но дружная семья.",
                            target: "I have a small but friendly family."
                        },
                        {
                            native: "Мы живём в уютной квартире недалеко от центра города.",
                            target: "We live in a cozy flat not far from the city centre."
                        },
                        {
                            native: "В моей семье четыре человека: мама, папа, брат и я.",
                            target: "There are four people in my family: my mother, my father, my brother and me."
                        },
                        {
                            native: "Моя мама — врач, и она много работает.",
                            target: "My mother is a doctor, and she works a lot."
                        },
                        {
                            native: "Мой папа — водитель автобуса, он часто в дороге.",
                            target: "My father is a bus driver, he is often on the road."
                        },
                        {
                            native: "Мой младший брат ходит в школу и любит играть в футбол.",
                            target: "My younger brother goes to school and likes playing football."
                        },
                        {
                            native: "По вечерам мы обычно собираемся на кухне и говорим о нашем дне.",
                            target: "In the evenings we usually sit in the kitchen and talk about our day."
                        },
                        {
                            native: "Моя мама задаёт мне вопросы на английском, чтобы помочь мне учиться.",
                            target: "My mother asks me questions in English to help me learn."
                        },
                        {
                            native: "Она говорит: «What did you do today?»",
                            target: "She says, 'What did you do today?'"
                        },
                        {
                            native: "Я отвечаю простыми предложениями и иногда ищу слова.",
                            target: "I answer with simple sentences and sometimes search for words."
                        },
                        {
                            native: "Мой папа пока не говорит по-английски, но он слушает нас с интересом.",
                            target: "My father does not speak English yet, but he listens to us with interest."
                        },
                        {
                            native: "Иногда он шутит и придумывает свои английские слова.",
                            target: "Sometimes he makes jokes and invents his own English words."
                        },
                        {
                            native: "Мы все смеёмся, и атмосфера становится ещё теплее.",
                            target: "We all laugh, and the atmosphere becomes even warmer."
                        },
                        {
                            native: "По выходным мы иногда смотрим семейный фильм на английском с субтитрами.",
                            target: "At the weekend we sometimes watch a family film in English with subtitles."
                        },
                        {
                            native: "Мой брат задаёт много вопросов о словах, которые он не понимает.",
                            target: "My brother asks many questions about the words he does not understand."
                        },
                        {
                            native: "Я объясняю ему простые фразы, и это помогает мне повторять материал.",
                            target: "I explain simple phrases to him, and it helps me review the material."
                        },
                        {
                            native: "Мои родители гордятся тем, что я учу английский язык.",
                            target: "My parents are proud that I am learning English."
                        },
                        {
                            native: "Я тоже горжусь своей семьёй, потому что они поддерживают меня.",
                            target: "I am also proud of my family because they support me."
                        },
                        {
                            native: "Иногда я мечтаю, как мы все вместе поедем в другую страну.",
                            target: "Sometimes I dream that we will all travel to another country together."
                        },
                        {
                            native: "Я представляю, как мы будем использовать английский язык в поездке.",
                            target: "I imagine how we will use the English language during the trip."
                        }
                    ],
                    words: [
                        { id: "w1", native: "семья", target: "family" },
                        { id: "w2", native: "мама", target: "mother" },
                        { id: "w3", native: "папа", target: "father" },
                        { id: "w4", native: "родители", target: "parents" },
                        { id: "w5", native: "брат", target: "brother" },
                        { id: "w6", native: "сестра", target: "sister" },
                        { id: "w7", native: "сын", target: "son" },
                        { id: "w8", native: "дочь", target: "daughter" },
                        { id: "w9", native: "младший", target: "younger" },
                        { id: "w10", native: "старший", target: "older" },
                        { id: "w11", native: "жить вместе", target: "to live together" },
                        { id: "w12", native: "квартира", target: "flat" },
                        { id: "w13", native: "центр города", target: "city centre" },
                        { id: "w14", native: "работать много", target: "to work a lot" },
                        { id: "w15", native: "врач", target: "doctor" },
                        { id: "w16", native: "водитель", target: "driver" },
                        { id: "w17", native: "автобус", target: "bus" },
                        { id: "w18", native: "дорога", target: "road" },
                        { id: "w19", native: "школа", target: "school" },
                        { id: "w20", native: "играть в футбол", target: "to play football" },
                        { id: "w21", native: "вечером", target: "in the evening" },
                        { id: "w22", native: "по выходным", target: "at the weekend" },
                        { id: "w23", native: "кухня", target: "kitchen" },
                        { id: "w24", native: "сидеть", target: "to sit" },
                        { id: "w25", native: "разговаривать", target: "to talk" },
                        { id: "w26", native: "вопрос", target: "question" },
                        { id: "w27", native: "поддерживать", target: "to support" },
                        { id: "w28", native: "гордиться", target: "to be proud" },
                        { id: "w29", native: "мечтать", target: "to dream" },
                        { id: "w30", native: "поездка", target: "trip" },
                        { id: "w31", native: "другая страна", target: "another country" },
                        { id: "w32", native: "фильм", target: "film" },
                        { id: "w33", native: "субтитры", target: "subtitles" },
                        { id: "w34", native: "объяснять", target: "to explain" },
                        { id: "w35", native: "повторять материал", target: "to review the material" },
                        { id: "w36", native: "шутить", target: "to make jokes" },
                        { id: "w37", native: "придумывать", target: "to invent" },
                        { id: "w38", native: "атмосфера", target: "atmosphere" },
                        { id: "w39", native: "тёплый", target: "warm" },
                        { id: "w40", native: "дружный", target: "friendly/close (about family)" },
                        { id: "w41", native: "уютный", target: "cozy" },
                        { id: "w42", native: "рядом", target: "near" },
                        { id: "w43", native: "интерес", target: "interest" },
                        { id: "w44", native: "слушать с интересом", target: "to listen with interest" },
                        { id: "w45", native: "смеяться вместе", target: "to laugh together" },
                        { id: "w46", native: "английский язык", target: "English language" },
                        { id: "w47", native: "использовать язык", target: "to use the language" },
                        { id: "w48", native: "иногда", target: "sometimes" },
                        { id: "w49", native: "обычно", target: "usually" },
                        { id: "w50", native: "моя семья", target: "my family" }
                    ]
                }
            ]
        }
    ]
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


