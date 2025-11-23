export type SentencePair = { native: string; target: string };
export type WordPair = { native: string; target: string; id: string };
export type TextItem = { id: string; rule: string; title: string; title_native: string; title_target: string; sentences: SentencePair[]; words: WordPair[] };
export type Section = { id: string; title_native: string; title_target: string; texts: TextItem[] };


export type Library = {
    learningLang: "en" | "pt" | "es"; // что учим (пример: en)
    sections: Section[];
};


export const libraryEN: Library = {
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

export const libraryPT: Library = {
    learningLang: "pt",
    sections: [
        {
            id: "A2",
            title_native: "A2",
            title_target: "A2",
            texts: [
                {
                    id: "laura",
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
                    id: "cores_lisboa",
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
                    id: "alguem_nenhum",
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
                    id: "muito_pouco_tanto",
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
                    id: "perguntas_interrogativas",
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

                }

            ],

        },
    ],
};
