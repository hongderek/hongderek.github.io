"use strict";

const local_course_name = '日本語３００';
const local_course_path = 'JAPN0300'
const local_chap_name = '第１課';

/**
{
  kanji: '',
  reading: '',
  meaning: '',
  (opt)kaku: 'hai' or ''
}
*/
const chap_kanji_str = 'kanji,reading,meaning,kaku\n・,おじぎ,bow,\n敬語,けいご,honorific expression,\n初めて,はじ（めて）,for the first time,\n留学する,りゅうがく（する）,to study abroad,hai\n高校,こうこう,high school,hai\n宿題,しゅくだい,homework,\n教える,おし（える）,"to teach, to tell",hai\n友達,ともだち,friend,\n大学院,だいがくいん,graduate school,hai\n電気工学,でんきこうがく,electrical engineering,\n専攻,せんこう,major (する：to major),hai\n学部,がくぶ,department (education),hai\n好き,す（き）,"a fondness, a liking",\n趣味,しゅみ,hobby,\n一度,いちど,once,\n〜に興味を持つ,（〜に）きょうみ（を）も（つ）,to have an interest in ~,\n中学,ちゅうがく,middle school (junior high),hai\n家族,かぞく,"family, family members",\n遊ぶ,あそ（ぶ）,"to play, to have fun",hai\n文化,ぶんか,culture,hai\n知識,ちしき,knowledge,\n豊富（な）,ほうふ（な）,plenty,\n卒業する,そつぎょう（する）,to graduage,hai\n勤める,つと（める）,"to work (for), be employed (at)",\n休暇,きゅうか,vacation,\n取る,と（る）,to take (ie: a class) (撮る：to take a picture),hai\n生まれる,う（まれる）,to be born,hai\n育つ,そだ（つ）,to grow up,hai\n名刺,めいし,business card,\n所,ところ,place,\n泊まる,と（まる）,"to stay (ie: a hotel, 旅館)",\n・,ていねい（な）,polite,\n迎えに来る,むか（えに）く（る）,to go and get (ie: to pick up),\n見つかる,みつかる,to be found (intransitive),\n見つける,みつける,to find (transitive),\n呼ぶ,よ（ぶ）,to call (ie: call by name),\n自分,じぶん,oneself,hai\n年上,としうえ,older,hai\n年下,としした,younger,hai\n時差ぼけ,じさ（ぼけ）,jet lag,\n眠る,ねむ（る）,"to sleep, to be asleep (vs 寝る：go to bed)",\n連れて行く,つ（れて）い（く）,to take someone (along),\n結局,けっきょく,in the end,\n適当（な）,てきとう（な）,appropriate,\n引っ越す,ひっこ（す）,to move,\n知人,ちじん,acquaintance,hai\n若い,わかい,younger,hai\n男性,だんせい,man,hai\n自己紹介,じこしょうかい,self-introduction,\n仕方,しかた,way of doing (something),\n習う,なら（う）,to learn,\n中年,ちゅうねん,middle-aged,\n女性,じょせい,woman,hai\nお互いの,（お）たが（いの）,each other,\n美しい,うつく（しい）,beautiful,\n娘,むすめ,daughter,\n考える,かんが（える）,"to think about, to consider",hai\n違う,ちが（う）,to differ (ie: is different),\n文法,ぶんぽう,grammar,hai\n両親,りょうしん,parents,';

const chap_note_list = [
  {
    topic: 'Phrases',
    spec: 'phrases',
    subtopic_list: [
      {
        subtopic: '〜に興味を持っている',
        desc: 'to have an interest in　〜'
      },
      {
        subtopic: '〜に興味を持つようになる',
        desc: 'to become interested in 〜'
      }
    ]
  },
  {
    topic: '〜のに　vs　〜ので',
    spec: '〜のに　vs　〜ので',
    subtopic_list: [
      {
        subtopic: '',
        desc: '〜のに：Although (contrary to one\'s expectation) ; 〜ので：because'
      }
    ]
  },
  {
    topic: 'verb(て)（もらう・あげる）',
    spec: 'verb(て)（もらう・あげる）',
    subtopic_list: [
      {
        subtopic: 'Receiving/giving favor',
        desc: 'Only used for living things.'
    ]
  }
];

const chap_grammar_list = [
  {
    grammar_point: 'verb(plain past)ばかり',
    spec: 'verb(plain past)ばかり',
    meaning: 'Have just (verb)ed, have just finished (verb)ing.',
    use: {
      text: 'ばかり can end a sentence (ばかり（だ・です)） and preceed conjunctions (ばかりだから) and other nouns (ばかりのｎｏｕｎ).',
      species: []
    },
    example: [
      {
        sentence: {
          ante: '『勉強',
          highlight: 'したばかり',
          post: 'です。』'
        },
        translation: 'I have just finished my homework.'
      }
    ],
    other: 'Grammatically, ばかり is technically a particle, but it seems to be like a noun?  (cf. Vところ for differences)'
  },
  {
    grammar_point: 'あの',
    spec: 'あの',
    meaning: 'あの refers to a noun that is not in sight.  あの is used when both the speaker and listener are familiar with the person or thing.',
    use: {
      text: 'あの preceeds a noun.',
      species: []
    },
    example: [
      {
        sentence: {
          ante: '『',
          highlight: 'あの',
          post: '人』'
        },
        translation: 'That person.'
      }
    ],
    other: 'あの differs from その in that その refers to a noun with which only one person is familiar.'
  },
  {
    grammar_point: 'verb(plain)ようになる',
    spec: 'verb(plain)ようになる',
    meaning: 'Such (verb)ing has become (or came to be) [past] or will become (or will be) [present] (or take place, etc.).  (ie: using なる with verbs)',
    use: {
      text: 'Conjugate なる in the [past] for verbing that has become.  Conjugate なる in the [present] for verbing that will become.',
      species: [
        {
          jap: '『verb[present]ようになる[present]』',
          eng: 'Such verb will become (or will be) (or take place, etc.)'
        },
        {
          jap: '『verb[past]ようになる[past]』',
          eng: 'Such verb has become (or came to be) (or took place, etc.)'
        }
      ]
    },
    example: [
      {
        sentence: {
          ante: '『漢字を',
          highlight: '読めるようになりました',
          post: '。』'
        },
        translation: 'I became able to read kanji.'
      },
      {
        sentence: {
          ante: '『日本に興味を',
          highlight: '持つようになった',
          post: '。』'
        },
        translation: 'I came to have an interest in Japan.'
      }
    ],
    other: 'It is useful to use this construction with verb(potential) ("I became able").  Note that verb(pot.) does not take を (rather, が).  Further, verb(potential)なりたい ("I want to become able").'
  },
  {
    grammar_point: '(sentence)なあ',
    spec: '(sentence)なあ',
    meaning: 'Emphatic exclaimation of one\'s feeling or wish.  Implies self dialogue.',
    use: {
      text: 'Sentence final particle.  Can be used to elicit response (id. 〜ね), which tends to be masculine.',
      species: []
    },
    example: [
      {
        sentence: {
          ante: '『食べたい',
          highlight: 'なあ',
          post: '。』'
        },
        translation: 'I want to eat!'
      },
    ],
    other: '...'
  },
  {
    grammar_point: 'verb(plain)ところ',
    spec: 'verb(plain)ところ',
    meaning: 'Is about to verb [present]; is currently (verb)ing [ている]; has just (verb)ed [past].',
    use: {
      text: 'The meaning changes based on tense of verb(plain).  ところ usually written with kana alone.  ところ declines as a noun.',
      species: [
        {
          jap: '『verb[present]ところ』',
          eng: 'Just about to verb.'
        },
        {
          jap: '『verb[ている]ところ』',
          eng: 'Currently/in the middle of verb(ing).'
        },
        {
          jap: '『verb[past]ところ』',
          eng: 'Just finished verb(ing).'
        }
      ]
    },
    example: [
      {
        sentence: {
          ante: '『',
          highlight: '食べるところ',
          post: 'です。』'
        },
        translation: 'I am just about to eat.'
      }
    ],
    other: 'Verb(plain past)ばかり can imply longer times of "just" (ie: I just moved here a week ago).  Verbところ carries a more immediate temporal definition.'
  },
  {
    grammar_point: 'verb(plain)ことに（なっている・なった）',
    spec: 'verb(plain)ことに（なっている・なった）',
    meaning: 'It has been decided that–.  Expresses that a decision has been made for the speaker outside of their control.',
    use: {
      text: 'Using なった implies that such decisions have been made.  Using なっている reports that future plans have been decided.',
      species: [
        {
          jap: '『verb(plain)ことになっている』',
          eng: 'Such decision has been made (outside of one\'s control).  This construction is also used to convey rules, regulations, and social customs.'
        },
        {
          jap: '『verb(plain)ことになった』',
          eng: 'Such future plans have been decided (outside of one\'s control).'
        }
      ]
    },
    example: [
      {
        sentence: {
          ante: '『教室では日本語で',
          highlight: '話すことになっています',
          post: '。』'
        },
        translation: 'You are expected to speak Japanese in the classroom.'
      },
    ],
    other: '...'
  },
  {
    grammar_point: 'noun(OR verb phraseの)は初めてです',
    spec: 'noun(OR verb phraseの)は初めてです',
    meaning: 'The subject\'s first noun (or (verb)ing).  Implies that it is the first time doing something.',
    use: {
      text: 'You can only use this phrase in situations where the topic at hand is relevant to the situation you are in.',
      species: []
    },
    example: [
      {
        sentence: {
          ante: '(in a sushi restaurant, in response to 「お寿司を食べたことがありますか。」"Have you eaten sushi before?")<br>『いいえ、',
          highlight: 'お寿司は初じめてです',
          post: '。』'
        },
        translation: 'No, this is the first time.'
      },
    ],
    other: '...'
  },
  {
    grammar_point: 'verb(stem)（にくい・やすい）',
    spec: 'verb(stem)（にくい・やすい）',
    meaning: 'Something is difficult to verb (にくい).  Something is easy to verb (やすい).',
    use: {
      text: 'にくい・やすい are い auxilliary adjectives attached to verb(stem)s.  These conjugate as い adjectives.  Usually, the something is marked with ~は。',
      species: [
        {
          jap: '『verb(stem)にくい』',
          eng: '~ is difficult to do'
        },
        {
          jap: '『verb(stem)やすい』',
          eng: '~ is easy to do'
        }
      ]
    },
    example: [
      {
        sentence: {
          ante: '『あの漢字は、',
          highlight: '読みにくい',
          post: 'です。』'
        },
        translation: 'Kanji is difficult to read.'
      },
    ],
    other: 'It does not mean that verb(ing) is difficult, rather that /something/ is difficult to verb.<br>『漢字は読みにくい。』"Kanji is difficult to read."<br>『漢字を読むのは難しい。』"Reading Kanji is difficult."<br>にくい as an adjective by itself means "detestable, hateful" and not "difficult".'
  },
  {
    grammar_point: 'verb(plain)ことにする',
    spec: 'verb(plain)ことにする',
    meaning: 'Decide to do –.  Implies active decision making by the subject.',
    use: {
      text: 'Usually, する will be [past] to say that such decisions have been made.',
      species: []
    },
    example: [
      {
        sentence: {
          ante: '『寿司を',
          highlight: '食べることにしました',
          post: '。』'
        },
        translation: 'I have decided to eat sushi.'
      },
    ],
    other: 'cf: 「nounにする」To decide on noun.<br>cf: 「verb(plain)ことに（なっている・なった）」It has been decided that...'
  },
  {
    grammar_point: '(verb phrase A)[past]ら、(verb phrase B)[past]',
    spec: '(verb phrase A)[past]ら、(verb phrase B)[past]',
    meaning: 'When such A occured, then such B happened.  Expresses causal relationship between A and B.  It is implied that the event or outome in sentence B is unexpected.',
    use: {
      text: 'Used to express causal relationship between events.  Also called「(sentence)たら、(sentence)」since verb(past) conjugations end in 〜た。',
      species: []
    },
    example: [
      {
        sentence: {
          ante: '『スタバに',
          highlight: '行ったら',
          post: '、先生にあいました。』'
        },
        translation: 'When I went to Starbucks, I met 先生。'
      },
    ],
    other: 'cf: 「(verb phrase A)[past]ら、(verb phrase B)[present]」is the /conditional/ use of [past]ら (ie: 〜たら).  It means "IF A, then B".  Note in difference of tense.'
  },
  {
    grammar_point: 'とてもverb(OR verb phrase)[neg]',
    spec: 'とてもverb(OR verb phrase)[neg]',
    meaning: 'Can\'t verb (at all).  Expresses strong sense of impossibility.',
    use: {
      text: 'Usually used with verb(potential)[neg] ("can\'t possibly verb").',
      species: []
    },
    example: [
      {
        sentence: {
          ante: '『僕は',
          highlight: 'とても日本語を話せない',
          post: '。』'
        },
        translation: 'It is impossible for me to speak Japanese.'
      },
    ],
    other: '...'
  },
  {
    grammar_point: 'verb(stem)方',
    spec: 'verb(stem)方',
    meaning: 'The way of (verb)ing.  How to verb.  (lit. the verb way)',
    use: {
      text: '方 in this case is a nounal suffix attached to verb(stem)s.  Verb(stem)方 is declined as a noun.  する＋方 is usually written as 仕方 and not し方。',
      species: [
        {
          jap: '',
          eng: 'Since verb(stem)方 is a noun phrase, you must use の (not を) to connect preceeding nouns to the verb(stem) (see eg1)'
        },
        {
          jap: '',
          eng: 'Additionally, adjectives describing verb(stem)方 are in plain form (ie: not adverbial).  However, in translation, such adjectives will end up acting adverbially (as in eg2).'
        }
      ]
    },
    example: [
      {
        sentence: {
          ante: '『ダギーの',
          highlight: '仕方',
          post: 'を教えて。』'
        },
        translation: 'Teach me how to dougie.'
      },
      {
        sentence: {
          ante: '『ダギーの正しい',
          highlight: '仕方',
          post: 'を教えて。』'
        },
        translation: 'Teach me how to dougie correctly.'
      },
    ],
    other: 'fyi: you can put adjectives between nounのnoun (ie: nounの[adjいnoun] "[adj noun] of noun").  Therefore, you can also do nounの[adjいverb(stem)方] (as in eg2)'
  },
  {
    grammar_point: '〜らしい',
    spec: '〜らしい',
    meaning: 'It seems that–.  Evidently, –.  Based on what one has heard.  Implies uncertainty about statement.',
    use: {
      text: 'らしい in this case is an auxilliary adjective that can be used after noun, adjective, or verb phrases.  らしい ends the sentence in casual speech, らしいです in formal speech.',
      species: [
        {
          jap: '（noun）・らしい',
          eng: ''
        },
        {
          jap: '（いadj）い・らしい',
          eng: ''
        },
        {
          jap: '（なadj）＿・らしい',
          eng: ''
        },
        {
          jap: '（るverb）る・らしい',
          eng: ''
        },
        {
          jap: '（うverb）う・らしい',
          eng: ''
        },
      ]
    },
    example: [
      {
        sentence: {
          ante: '『和食は美味しい',
          highlight: 'らしい',
          post: 'です。』'
        },
        translation: 'It seems Japanese food is good (, so I\'ve heard).'
      },
    ],
    other: 'The use of らしい is nuanced and worth further explanation.  cf. そうだ、らしい、ようだ、みたい。'
  },
  {
    grammar_point: 'verb(て)初めてのnoun',
    spec: 'verb(て)初めてのnoun',
    meaning: 'The first noun after verb(ing);  The "first, after-(verb)ing" noun;  When/after verb phrase, there was noun for the first time.',
    use: {
      text: 'Use the て form of the verb.',
      species: []
    },
    example: [
      {
        sentence: {
          ante: '『アメリカに',
          highlight: '着いて初めてのカルチャーショック',
          post: 'だった。』'
        },
        translation: 'After arriving in America, it was my first culture shock. (lit. It was a "first, after-(arriving in America)" culture shock)'
      },
    ],
    other: 'Since て implies sequence, it seems like you can translate the verb(て) as "After (verb)ing" or "When I (verb)ed" to smooth translation.'
  },
  {
    grammar_point: '(verb A(て))初めて(verb B)',
    spec: '(verb A(て))初めて(verb B)',
    meaning: 'The first (verb phrase B) when/after (verb phrase A);  When (verb A) happened, (verb B) occured for the first time.',
    use: {
      text: 'I think て implies sequence.  ie: When (verb phrase A), then for the first time (verb phrase B)',
      species: []
    },
    example: [
      {
        sentence: {
          ante: '『アメリカに',
          highlight: '着いて初めてハンバーガーを食べた',
          post: '。』'
        },
        translation: 'When I arrived in America, I ate a hamburger for the first time.'
      },
    ],
    other: 'This construction seems to imply "first time ever" or "first time in my life".'
  }
];


/**
{
  grammar_point: '',
  spec: '',
  meaning: '',
  use: {
    text: '',
    species: [
      {
        jap: '',
        eng: ''
      }
    ],
  },
  example: [
    {
      sentence: {
        ante: '',
        highlight: '',
        post: ''
      },
      translation: ''
    },
  ],
  other: ''
}
*/














