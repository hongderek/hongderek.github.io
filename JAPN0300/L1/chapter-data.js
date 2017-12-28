"use strict";

var local_course_name = '日本語３００';
var local_course_path = 'JAPN0300'
var local_chap_name = '第１課';
var local_chap_path = 'L1';

/**
{
  kanji: '',
  reading: '',
  alt_def: '',
    meaning: '',
  (opt)kaku: 'hai' or ''
}
*/

var chap_note_list = [
  {
    topic: '初めて　vs　始める',
    spec: '初めて　vs　始める',
    subtopic_list: [
      {
        subtopic: '初めて and 始める are both read with「はじ」but they mean different things:',
        desc: ['']
      },{
        subtopic: '初めて：',
        desc: ['初めて means that "the first time doing something" (〜は初めてです）or "for the first time"（〜て初めて） (as in this chapter).  初める also exists, but it is an auxilliary verb meaning "to begin to" and is read as 「そ（める）」.  初 is the correct kanji to use in はじめまして。']
      },{
        subtopic: '始める：',
        desc: ['始める is an ichidan transitive verb meaning "to begin (something)".  始め is the kanji used in the grammar point in chapter 7「〜を始め」meaning "starting with 〜".  始 would be used in something like「始めましょう！」"Let\'s begin!"']
      },{
        subtopic: '>>>',
        desc: ['I\'ve seen 初めて be thought of as the kanji to mean "firstly" (in a temporal sense) (ie: the "first" something) whereas 始める is used to mean "to start" something (like an activity) (ie: the "beginning" of something).  For instance:']
      },{
        subtopic: '>>> 初：',
        desc: 
        [
          '初（はつ）：first, new',
          '最初（さい・しょ）：first, outset, beginning',
          '初恋（はつ・こい）：first love',
          '初音（はつ・ね）：first warbling of the new year (初音ミク）'
        ]
      },{
        subtopic: '>>> 始：',
        desc: 
        [
          '始める（はじ（める））：to begin something',
          '始まる（はじ（まる））：something begins',
          '始まり（はじ（まり））：the origin, beginning',
          '開始（かい・し）：the start, commencement, initiation'
        ]
      }
    ]
  },{
    topic: 'Phrases',
    spec: 'Phrases',
    subtopic_list: [
      {
        subtopic: '〜に興味を持っている',
        desc: ['to have an interest in　〜']
      },
      {
        subtopic: '〜に興味を持つようになる',
        desc: ['to become interested in 〜']
      }
    ]
  },{
    topic: '〜のに　vs　〜ので',
    spec: '〜のに　vs　〜ので',
    subtopic_list: [
      {
        subtopic: '〜のに：Although (contrary to one\'s expectation) ',
        desc: ['']
      },{
        subtopic: '〜ので：because',
        desc: ['']
      }
    ]
  },{
    topic: 'verb(て)（もらう・あげる）',
    spec: 'verb(て)（もらう・あげる）',
    subtopic_list: [
      {
        subtopic: 'Receiving/giving favor',
        desc: ['Only used for living things.']
      }
    ]
  }
];

var chap_grammar_list = [
  {
    grammar_point: 'verb(plain)[past]ばかり',
    spec: 'verb(plain)[past]ばかり',
    alt_def: 'たばかり',
    meaning: '"Have just verb-ed"; "Have just finsished verb-ing"',
    use: {
      text: 'ばかり can end a sentence (ばかり（だ・です)）and preceed conjunctions (ばかりだから) and other nouns (ばかりのnoun).',
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
    other: 'ie: 〜たばかり'
  },
  {
    grammar_point: 'あの',
    spec: 'あの',
    alt_def: '',
    meaning: '"That 〜"',
    use: {
      text: 'あの preceeds a noun.  あの refers to a noun that is not in sight.  あの is used when both the speaker and listener are familiar with the person or thing.',
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
    grammar_point: 'verb(plain)ようになる[past, pres.]',
    spec: 'verb(plain)ようになる[past, pres.]',
    alt_def: 'ようになった、なった',
    meaning: '"Such verb has become/came to be" (なる[past]); "Such verb will become/will be/will take place" (なる[present])',
    use: {
      text: 'In other words, how to use なる with verbs.  Conjugate なる in the [past] for verbing that has become.  Conjugate なる in the [present] for verbing that will become.',
      species: [
        {
          jap: 'verb(plain)ように なる',
          eng: '：Such verb will become (or will be) (or take place, etc.)'
        },
        {
          jap: 'verb(plain)ように なった',
          eng: '：Such verb has become (or came to be) (or took place, etc.)'
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
    alt_def: '',
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
    grammar_point: 'verb(plain)[pres., prog., past]ところ',
    spec: 'verb(plain)[pres., prog., past]ところ',
    alt_def: 'ているところ、たところ、ったところ',
    meaning: '"Is about to verb" [pres.]ところ; "Is currently verb-ing" [ている]ところ; "Has just verb-ed" [past]ところ.',
    use: {
      text: 'The meaning changes based on tense of verb(plain).  ところ usually written with kana alone.  ところ declines as a noun.',
      species: [
        {
          jap: 'verb(present) ところ',
          eng: '：Just about to verb.'
        },
        {
          jap: 'verb(ている) ところ',
          eng: '：Currently/in the middle of verb(ing).'
        },
        {
          jap: 'verb(past) ところ',
          eng: '：Just finished verb(ing).'
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
    grammar_point: 'verb(plain)ことになる[prog., past]',
    spec: 'verb(plain)ことになる[prog., past]',
    alt_def: 'なっている、なった、ことになっている、ことになった',
    meaning: '"It has been decided that 〜"',
    use: {
      text: 'Expresses that a decision has been made for the speaker outside of their control.  Using なる[past] implies that such decisions have been made.  Using なる[ている] reports that future plans have been decided.',
      species: [
        {
          jap: 'verb(plain)ことに なっている',
          eng: '：Such decision has been made (outside of one\'s control).  This construction is also used to convey rules, regulations, and social customs.'
        },
        {
          jap: 'verb(plain)こと になった',
          eng: '：Such future plans have been decided (outside of one\'s control).'
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
    grammar_point: '(noun／nominalized verb)は初めてです',
    spec: '(noun／nominalized verb)は初めてです',
    alt_def: 'verbの、はじめて、はじめてです',
    meaning: '"The first time of noun"; "The first time doing something".',
    use: {
      text: 'Implies that it is the first time doing something.  You can only use this phrase in situations where the topic at hand is relevant to the situation you are in.',
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
    other: 'NOTE: That 初め is different from 始める。 Both kanji are read as「はじ」but their usages are different.  More info in notes below.'
  },
  {
    grammar_point: 'verb(stem)（にくい・やすい）',
    spec: 'verb(stem)（にくい・やすい）',
    alt_def: '',
    meaning: '"Something is difficult to do" (にくい); "Something is easy to do" (やすい).',
    use: {
      text: 'にくい and やすい are い auxilliary adjectives attached to verb(stem)s.  These conjugate as い adjectives.  Usually, the "something" is marked with ~は。',
      species: [
        {
          jap: 'verb(stem) にくい',
          eng: '：〜 is difficult to do'
        },
        {
          jap: 'verb(stem) やすい',
          eng: '：〜 is easy to do'
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
    alt_def: 'ことにした',
    meaning: '"Decide to do 〜"',
    use: {
      text: 'Implies active decision making by the subject.  Usually, する will be する[past] to say that such decisions have been made.',
      species: [
        {
          jap: 'verb(plain)ことに する',
          eng: '：I decide to do'
        },{
          jap: 'verb(plain)ことに した',
          eng: '：I decided to do'
        }
      ]
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
    grammar_point: '(verb A)[past]ら、(verb B)[past]',
    spec: '(verb A)[past]ら、(verb B)[past]',
    alt_def: 'たら、ったら',
    meaning: '"When such A occured, then such B happened"',
    use: {
      text: 'Expresses causal relationship between A and B.  It is implied that the event or outome in sentence B is unexpected.',
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
    other: 'cf: 「(verb A)[past]ら、(verb B)[present]」is the <b>conditional</b> use of [past]ら (ie: 〜たら).  It means "If A, then B".  Note in difference of tense.'
  },
  {
    grammar_point: 'とても(verb/nominalized verb)[neg.]',
    spec: 'とても(verb/nominalized verb)[neg.]',
    alt_def: 'とても〜ない',
    meaning: '"Can\'t verb (at all)"; "Can\'t possibly verb"',
    use: {
      text: 'Expresses strong sense of impossibility.  Usually used with verb(potential)[neg.] (ie: "not able to verb at all").',
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
    alt_def: 'かた',
    meaning: '（「方」かた：way）"The way of verb-ing"; "How to verb"; (lit. the verb way)',
    use: {
      text: '方 in this case is a nounal suffix attached to verb(stem)s.  Verb(stem)方 is declined as a noun.  する＋方 is usually written as 仕方 and not し方。 Since verb(stem)方 is a noun phrase, you MUST use の (not を) to connect preceeding nouns to the verb(stem) (see eg1).  Additionally, adjectives describing verb(stem)方 are in PLAIN form (ie: not adverbial).  HOWEVER, in translation, such adjectives will end up acting adverbially (as in eg2).',
      species: []
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
    alt_def: '',
    meaning: '"It seems that 〜"; "Evidently, 〜"',
    use: {
      text: 'Expresses opinion ased on what one has heard.  Implies uncertainty about the statement.  らしい in this case is an auxilliary adjective that can be used after noun, adjective, or verb phrases.  らしい ends the sentence in casual speech, らしいです in formal speech.',
      species: [
        {
          jap: 'noun らしい',
          eng: ''
        },
        {
          jap: '(adjい)い らしい',
          eng: ''
        },
        {
          jap: '(adjな) らしい',
          eng: ''
        },
        {
          jap: 'verb(plain) らしい',
          eng: ''
        }
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
    alt_def: 'て初めて、てはじめて',
    meaning: '"The first noun after verb-ing"; "The "first, after-verbing" noun"; "When/after verb, there was noun for the first time"',
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
    alt_def: 'て初めて、てはじめて',
    meaning: '"The first (verb phrase B) when/after (verb phrase A)"; "When (verb A) happened, (verb B) occured for the first time"',
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
  alt_def: '',
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












