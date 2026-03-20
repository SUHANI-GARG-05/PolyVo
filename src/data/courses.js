export const courses = [
    {
        id: 'japanese-basics',
        title: 'Japanese Basics',
        description: 'Master the fundamentals of Japanese writing systems: Hiragana, Katakana, and basic Romaji.',
        level: 'Beginner',
        lessonsCount: 12,
        flag: '🇯🇵',
        color: 'bg-rose-500',
        accentColor: 'text-rose-500',
        bgLight: 'bg-rose-50',
        features: [
            'Master Hiragana & Katakana',
            'Basic Greeting & Etiquette',
            'Numbers & Counting',
            'Shopping & Ordering Food'
        ],
        requirements: [
            'No prior knowledge required',
            '15 minutes a day',
            'Open mind and enthusiasm'
        ],
        lessons: [
            { id: 1, title: 'Introduction to Romaji', duration: '10 min' },
            { id: 2, title: 'Hiragana Part 1: A-Ka-Sa', duration: '15 min' },
            { id: 3, title: 'Hiragana Part 2: Ta-Na-Ha', duration: '15 min' },
            { id: 4, title: 'Katakana Introduction', duration: '20 min' },
        ]
    },
    {
        id: 'english-grammar',
        title: 'English Grammar',
        description: 'Solidify your English grammar skills with comprehensive lessons on tenses, verbs, and sentence structure.',
        level: 'Intermediate',
        lessonsCount: 20,
        flag: '🇬🇧',
        color: 'bg-blue-500',
        accentColor: 'text-blue-500',
        bgLight: 'bg-blue-50',
        features: [
            'Advanced Tenses',
            'Business English vocabulary',
            'Essay Writing Structure',
            'Public Speaking Tips'
        ],
        requirements: [
            'Basic understanding of English',
            'Notebook for practice'
        ],
        lessons: [
            { id: 1, title: 'Present Simple vs Present Continuous', duration: '12 min' },
            { id: 2, title: 'Past Tenses Mastery', duration: '18 min' },
            { id: 3, title: 'Future Forms', duration: '15 min' },
        ]
    },
    {
        id: 'hindi-script',
        title: 'Hindi Script',
        description: 'Learn to read and write Devanagari script, the foundation of the Hindi language.',
        level: 'Beginner',
        lessonsCount: 15,
        flag: '🇮🇳',
        color: 'bg-orange-500',
        accentColor: 'text-orange-500',
        bgLight: 'bg-orange-50',
        features: [
            'All 46 alphabets',
            'Matras (Vowel signs)',
            'Conjunct constants',
            'Basic sentence formation'
        ],
        requirements: [
            'None! Start from scratch',
            'Practice sheets (printable)'
        ],
        lessons: [
            { id: 1, title: 'Vowels (Swar)', duration: '20 min' },
            { id: 2, title: 'Consonants (Vyanjan) Part 1', duration: '25 min' },
            { id: 3, title: 'Matras and Conjuncts', duration: '30 min' },
        ]
    },
    {
        id: 'french-express',
        title: 'French Express',
        description: 'Quick functional French for travelers. Learn to navigate Paris like a local.',
        level: 'Beginner',
        lessonsCount: 8,
        flag: '🇫🇷',
        color: 'bg-indigo-500',
        accentColor: 'text-indigo-500',
        bgLight: 'bg-indigo-50',
        features: [
            'Airport & Hotel survival',
            'Bakery ordering',
            'Directions & Transport',
            'Polite refusals'
        ],
        requirements: [
            'Passion for travel'
        ],
        lessons: [
            { id: 1, title: 'Bonjour & Basic Greetings', duration: '8 min' },
            { id: 2, title: 'At the Cafe', duration: '15 min' },
        ]
    },
    {
        id: 'korean-alphabet',
        title: 'Korean Hangul',
        description: 'Read Korean in 90 minutes. The most scientific writing system in the world.',
        level: 'Beginner',
        lessonsCount: 5,
        flag: '🇰🇷',
        color: 'bg-red-500',
        accentColor: 'text-red-500',
        bgLight: 'bg-red-50',
        features: [
            'Basic Vowels',
            'Basic Consonants',
            'Batchim rules',
            'Reading K-pop lyrics'
        ],
        requirements: [
            'Love for K-Drama helps!'
        ],
        lessons: [
            { id: 1, title: 'The 10 Basic Vowels', duration: '20 min' },
            { id: 2, title: 'Basic Consonants', duration: '25 min' },
        ]
    },
    {
        id: 'spanish-start',
        title: 'Spanish Start',
        description: 'The second most spoken language in the world. Open up a new continent.',
        level: 'Beginner',
        lessonsCount: 25,
        flag: '🇪🇸',
        color: 'bg-yellow-500',
        accentColor: 'text-yellow-500',
        bgLight: 'bg-yellow-50',
        features: [
            'Masculine vs Feminine',
            'Ser vs Estar',
            'Common Verbs',
            'Family vocabulary'
        ],
        requirements: [
            'Consistent practice'
        ],
        lessons: [
            { id: 1, title: 'Greetings & Introduction', duration: '10 min' },
            { id: 2, title: 'Gender of Nouns', duration: '15 min' },
        ]
    },
    {
        id: 'italian-cooking',
        title: 'Italian for Foodies',
        description: 'Learn the language of food. Read menus and pronounce dishes perfectly.',
        level: 'Beginner',
        lessonsCount: 10,
        flag: '🇮🇹',
        color: 'bg-green-600',
        accentColor: 'text-green-600',
        bgLight: 'bg-green-50',
        features: [
            'Menu decoding',
            'Wine regions',
            'Regional specialties',
            'Ordering etiquette'
        ],
        requirements: [
            'Empty stomach encouraged'
        ],
        lessons: [
            { id: 1, title: 'The Coffee Culture', duration: '12 min' },
            { id: 2, title: 'Pizza & Pasta types', duration: '18 min' },
        ]
    },
    {
        id: 'german-basics',
        title: 'German Basics',
        description: 'Precision and structure. Learn the language of engineering and philosophy.',
        level: 'Beginner',
        lessonsCount: 18,
        flag: '🇩🇪',
        color: 'bg-slate-700',
        accentColor: 'text-slate-700',
        bgLight: 'bg-slate-100',
        features: [
            'The 4 Cases',
            'Article declensions',
            'Compound words',
            'Daily routine'
        ],
        requirements: [
            'Attention to detail'
        ],
        lessons: [
            { id: 1, title: 'Hallo & Tschüss', duration: '10 min' },
            { id: 2, title: 'Der, Die, Das', duration: '20 min' },
        ]
    },
    {
        id: 'portuguese-brazil',
        title: 'Brazilian Portuguese',
        description: 'The musical language of Samba and Bossa Nova.',
        level: 'Beginner',
        lessonsCount: 15,
        flag: '🇧🇷',
        color: 'bg-teal-500',
        accentColor: 'text-teal-500',
        bgLight: 'bg-teal-50',
        features: [
            'Nasal sounds',
            'Rhythm and flow',
            'Greetings',
            'Beach vocabulary'
        ],
        requirements: [
            'None'
        ],
        lessons: [
            { id: 1, title: 'Greetings (Tudo bem?)', duration: '10 min' },
            { id: 2, title: 'The verb Ser', duration: '15 min' },
        ]
    },
    {
        id: 'turkish-talk',
        title: 'Turkish Talk',
        description: 'Bridge between East and West. A beautiful agglutinative language.',
        level: 'Beginner',
        lessonsCount: 12,
        flag: '🇹🇷',
        color: 'bg-red-600',
        accentColor: 'text-red-600',
        bgLight: 'bg-red-50',
        features: [
            'Vowel Harmony',
            'Suffixes',
            'Greetings',
            'At the Bazaar'
        ],
        requirements: [
            'None'
        ],
        lessons: [
            { id: 1, title: 'Merkaba', duration: '10 min' },
            { id: 2, title: 'Vowel Harmony Intro', duration: '20 min' },
        ]
    }
];

export const languages = [
    { name: 'English', flag: '🇬🇧' },
    { name: 'Japanese', flag: '🇯🇵' },
    { name: 'Korean', flag: '🇰🇷' },
    { name: 'Spanish', flag: '🇪🇸' },
    { name: 'Portuguese', flag: '🇵🇹' },
    { name: 'Turkish', flag: '🇹🇷' },
    { name: 'French', flag: '🇫🇷' },
    { name: 'Hindi', flag: '🇮🇳' },
    { name: 'German', flag: '🇩🇪' },
    { name: 'Italian', flag: '🇮🇹' },
];
