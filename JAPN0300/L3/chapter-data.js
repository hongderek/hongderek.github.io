"use strict";

var local_course_name = '日本語３００';
var local_course_path = 'JAPN0300'
var local_chap_name = '第３課';
var local_chap_path = 'L3';

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
    topic: '借りる　and　貸す',
    spec: '借りる　and　貸す',
    subtopic_list: [
      {
        subtopic: 'You cannot use 借りる(caus.て) and 貸す(て) forms to ask for monies.',
        desc: 
        [
          '借りる：か（りる）to borrow',
          '　貸す：か（す）　to lend'
        ]
      },{
        subtopic: 'Instead, use the「(て or caus.て)いただけないでしょうか。」construction (etc: もらう、くれる）',
        desc: ['Also, don\'t do 借りて, that means "please let me lend"...']
      },{
        subtopic: '',
        desc: ['eg: 「お金を<b>貸して</b>いただけないでしょうか」pls lend monies']
      },{
        subtopic: 'In response, you muse use 貸す (to lend)',
        desc: ['eg: 「貸して上げます。」I lend to you.']
      }
    ]
  },{
    topic: 'Phrases',
    spec: 'Phrases',
    subtopic_list: [
      {
        subtopic: 'Meeting 先生 and asking for favors',
        desc: 
        [
          'ちょっとおじゃまします',
          'もう一つお願いします',
          'blahblahことなんですけど',
          'もう一つお願いがあるんですけど',
          '二、三分よろしいでしょうか'
        ]
      }
    ]
  },{
    topic: 'Suggestion',
    spec: 'Suggestion',
    subtopic_list: [
      {
        subtopic: 'じゃ、えんぴつ使えば？',
        desc: ['How about using a pencil?']
      }
    ]
  },{
    topic: '"To use" in writing and speech',
    spec: '"To use" in writing and speech',
    subtopic_list: [
      {
        subtopic: '利用する（りよう（する））："to use" (when writing)',
        desc: ['']
      },{
        subtopic: '使う　　（つか（う））　　："to use" (when speaking)',
        desc: ['']
      }
    ]
  },{
    topic: 'Asking Permission',
    spec: 'Asking Permission',
    subtopic_list: [
      {
        subtopic: '〜けど、いいでしょうか。',
        desc: ['']
      },{
        subtopic: 'verb(て)もいいですか。',
        desc: ['ie: as opposed to favours']
      }
    ]
  },{
    topic: 'Years older/younger',
    spec: 'Years older/younger',
    subtopic_list: [
      {
        subtopic: 'You can use either ＃つ or ＃さい for years older/younger (上／下）',
        desc: ['eg: 僕の妹は　二つ／二さい　下です。']
      }
    ]
  },{
    topic: 'KARUCHAA NOOTO',
    spec: 'KARUCHAA NOOTO',
    subtopic_list: [
      {
        subtopic: 'Asking favours:',
        desc: 
        [
          '１）あのう〜',
          '２）ちょっと、おじゃまします〜 (excuse me...)',
          '３）実は、〜んですけど (intro topic)',
          '　　　　　〜のことなんですけど',
          '　　verb(caus.て)いただけないでしょうか。 (ask favour)',
          '４）よろしくお願いします。(k thx)'
        ]
      }
    ]
  }
];

var chap_grammar_list = [
  {
    grammar_point: 'verb[neg]で',
    spec: 'verb[neg]で',
    alt_def: 'ないで',
    meaning: '"Don\'t (verb)."',
    use: {
      text: 'A contraction of a request using the negative て form of verbs: verb[neg]でください。',
      species: [
        {
          jap: 'verbないで',
          eng: '：don\'t verb'
        }
      ]
    },
    example: [
      {
        sentence: {
          ante: '『',
          highlight: '遅れないで',
          post: '。』'
        },
        translation: 'Don\'t be late.'
      }
    ],
    other: '...'
  },{
    grammar_point: 'verb(causative, て)いただけないでしょうか',
    spec: 'verb(causative, て)いただけないでしょうか',
    alt_def: 'せていただけないでしょうか',
    meaning: '"May I do ___?" (lit. "Could I not receive the favor of your letting me do 〜?")',
    use: {
      text: 'A very indirect way of asking for permission to do something.  NOT to be confused with verb(て)いただけないでしょうか which means "Could you do ___?".',
      species: [
        {
          jap: 'verb(causative, て) いただけないでしょうか',
          eng: '：May I do verb?'
        },{
          jap: 'verb(て) いただけないでしょうか',
          eng: '：Could you do verb?'
        },{
          jap: '<b>This kind of construction (て + verb of giving/receiving) also works with くれる、あげる、もらう with expected results.</b>',
          eng: ''
        },{
          jap: 'verb(て) くれる',
          eng: '：Someone did something for me (ie: Someone gave me the favor of 〜) (theyが meに)'
        },{
          jap: 'verb(て) あげる',
          eng: '：I did something for someone (ie: I gave the favor of 〜) (meが theyに)'
        },{
          jap: 'verb(て) もらう',
          eng: '：Someone did something for me (ie: I received the favor of 〜) (meが theyに)'
        }
      ]
    },
    example: [
      {
        sentence: {
          ante: '『前の日に試験を',
          highlight: '受けさせていただけないでしょうか',
          post: '。』'
        },
        translation: 'May I take the test one day early?'
      }
    ],
    other: 'Formed from 「verb(caus.) + いただく(pot.)[neg.] + でしょうか」。  でしょう is a more indirect form of です、thus making the question more polite.  ALSO: notice the difference in subject marker for 〜てくれる and 〜てもらう'
  },{
    grammar_point: '〜中に',
    spec: '〜中に',
    alt_def: 'ちゅうに',
    meaning: '"Sometime during 〜"; "By the end of 〜"',
    use: {
      text: 'Decribes a time frame (eg: by the end of this week, by the end of today, etc.).  The reading of 「中」 will be 「ちゅう」 or 「じゅう」 depending on the preceeding word.',
      species: [
        {
          jap: '(time-frame)中に',
          eng: '：By the end of (time-frame).'
        },{
          jap: '今週中に reading: ',
          eng: 'こんしゅう<b>ちゅう</b>に'
        },{
          jap: '今月中に reading: ',
          eng: 'こんげつ<b>ちゅう</b>に'
        },{
          jap: '午前中に reading: ',
          eng: 'ごぜん<b>ちゅう</b>に'
        },{
          jap: '今日中に reading: ',
          eng: 'きょう<b>じゅう</b>に'
        },{
          jap: '今年中に reading: ',
          eng: 'ことし<b>じゅう</b>に'
        }
      ]
    },
    example: [
      {
        sentence: {
          ante: '『',
          highlight: '今日中に',
          post: 'メールをしてください。』'
        },
        translation: '（漢字：きょうじゅう）Please email me sometime today.'
      }
    ],
    other: '...'
  },{
    grammar_point: '（〜[pos./neg.]ば）〜ほど＿＿',
    spec: '(〜ば)〜ほど',
    alt_def: '',
    meaning: '"The more/less 〜 is so, the more/less ＿＿ is."',
    use: {
      text: 'The same verb/adj/noun is used for both 〜, first in 〜ば form and then in plain form + ぼど。For nouns and なadj., であれば／ある will be suffixed.  Pos. constructions give the "more" meaning, neg. constructions give the "less" meaning.  The 〜 may be positive and the ＿＿ may be negative, in which case the translation would be "the more, the less", and vice versa, etc.  For nouns/adjな、ある will be negated and not the noun/adj.  I kind of like the literal translations, as un-English as they are.',
      species: [
        {
          jap: 'verb[pos.]ばverb[pos.]ほど ＿[pos.]＿',
          eng: '：The more verb, the more ＿＿。'
        },{
          jap: 'verb[neg.]ばverb[neg.]ほど ＿[neg.]＿',
          eng: '：The less verb, the less ＿＿。'
        },{
          jap: '（adjい)[pos.]ば（adjい)[pos.]ほど ＿[pos.]＿',
          eng: '：The more adj, the more ＿＿。'
        },{
          jap: '（adjい)[neg.]ば（adjい)[neg.]ほど ＿[neg.]＿',
          eng: '：The less adj, the less ＿＿。'
        },{
          jap: '（adjな)であればあるほど ＿[pos.]＿',
          eng: '：The more adj, the more ＿＿。'
        },{
          jap: '（adjな)ではなければないほど ＿[neg.]＿',
          eng: '：The less adj, the less ＿＿。'
        },{
          jap: 'nounであればあるほど ＿[pos.]＿',
          eng: '：The more noun, the more ＿＿。'
        },{
          jap: 'nounではなければないほど ＿[neg.]＿',
          eng: '：The less noun, the less ＿＿。'
        }
      ]
    },
    example: [
      {
        sentence: {
          ante: '『日本語は',
          highlight: '勉強すれば勉強するほど',
          post: '上手になります。』'
        },
        translation: 'The more you study Japanese the better you will become.'
      },{
        sentence: {
          ante: '『日本語は',
          highlight: '勉強しなければ勉強しないほど',
          post: '下手になります。』'
        },
        translation: 'The less you study Japanese the worse you will become.'
      },{
        sentence: {
          ante: '『',
          highlight: '寒ければ寒いほど',
          post: 'いい。』'
        },
        translation: 'The colder it is the better.'
      },{
        sentence: {
          ante: '『',
          highlight: '寒くなければ寒くないほど',
          post: 'いい。』'
        },
        translation: 'The less cold it is the better. (I think...)'
      },{
        sentence: {
          ante: '『',
          highlight: '寒くなければ寒くないほど',
          post: 'よくない。』'
        },
        translation: 'The less cold it is the worse it is. (I think...)'
      },{
        sentence: {
          ante: '『',
          highlight: '寒ければ寒いほど',
          post: 'よくない。』'
        },
        translation: 'The colder it is the worse it is. (I think...)'
      },{
        sentence: {
          ante: '『説明は',
          highlight: '簡単であればあるほど',
          post: '分かられる。』'
        },
        translation: 'The simpler the explaination, the more it is able to be understood.'
      },{
        sentence: {
          ante: '『',
          highlight: 'いいレストランであればあるほど',
          post: '高い。』'
        },
        translation: 'The better a restaurant is the more expensive it is.'
      },{
        sentence: {
          ante: '／',
          highlight: 'Literal translations:',
          post: '／'
        },
        translation: ''
      },{
        sentence: {
          ante: '『日本語は',
          highlight: '勉強すれば勉強するほど',
          post: '上手になります。』'
        },
        translation: 'lit. If you study Japanese（ば）, the extent of your study（ほど）is how much better you will become.'
      },{
        sentence: {
          ante: '『日本語は',
          highlight: '勉強しなければ勉強しないほど',
          post: '下手になります。』'
        },
        translation: 'lit. If you do not study Japanese（ば）, the extent of your non-study（ほど）is how much worse you will become.'
      },{
        sentence: {
          ante: '『',
          highlight: '寒ければ寒いほど',
          post: 'いい。』'
        },
        translation: 'lit. If it is cold（ば）, as much as it it is cold（ほど）it is that much good.'
      },{
        sentence: {
          ante: '『',
          highlight: '寒ければ寒いほど',
          post: 'よくない。』'
        },
        translation: 'lit. If it is cold（ば）, as much as it it is cold（ほど）it is that much not good.'
      }
    ],
    other: 'ほど means "degree, extent of".  The literal translation might be "If there is 〜, then to the extent of 〜 there is ＿＿。" like the literal examples.  Think of it like a linear relationship, where "as much as there is 〜, there is ＿＿".  Meaning, "as 〜 increases, ＿＿ also increases to that extent", which is where the "the more, the more" meaning comes from.'
  },{
    grammar_point: '(noun)以外（に・の）',
    spec: '(noun)以外（の・に）',
    alt_def: 'いじょう',
    meaning: '（「以上」いがい：With the exception of）"Other than noun"; "Besides noun"',
    use: {
      text: '以外 literally just means "besides" or "excepting".  Using 以外に creates an adverbial phrase (try using noun-exceptingly, it\'s fun!), 以外の will preceed another noun and modify it.',
      species: [
        {
          jap: '(noun)以外 に',
          eng: '：noun-exceptingly'
        },{
          jap: '(noun A)以外 の(noun B)',
          eng: '：a (noun A)-excepting (noun B)'
        }
      ]
    },
    example: [
      {
        sentence: {
          ante: '『学期の初めは、',
          highlight: '教科書以外に',
          post: 'いろいろ買うものがある。』'
        },
        translation: 'At the beginning of the semester, there are various things to buy "besides textbooks" (lit. textbook-exceptingly).'
      },{
        sentence: {
          ante: '『',
          highlight: '文部科学省以外の',
          post: '奨学金もあります。』'
        },
        translation: 'There are scholarships other than those from the Ministry of Eduction, Culture, Sports, Science, and Technology. (lit. "Other than MECSST"のscholarhsips exist)'
      }
    ],
    other: 'I quite like literal translations.  Overthrow Western grammatical constructs!'
  },{
    grammar_point: '必ずしも（clause）というわけではない',
    spec: '必ずしも〜というわけではない',
    alt_def: 'かならずしも〜というわけではない',
    meaning: '（「必ずしも」かなら(ずしも)：Not necessarily）"It does not necessarily mean that 〜"',
    use: {
      text: 'What comes before という is a clause which gives detail to わけ。必ず means "always, without exception, invariably".  必ずしも is the NEGATION of that: "not always, not necessarily" and acts adverbially.  わけ means "conclusion from reasoning".  The ではない is a double-negative in the sense of an intesifier, not in the sense of "not-not".',
      species: []
    },
    example: [
      {
        sentence: {
          ante: '『<b>必ずしも</b>高いものがいい',
          highlight: 'というわけではない',
          post: '。』'
        },
        translation: 'It is not necessarily the case that expensive things are good.'
      }
    ],
    other: 'A literal translation might be "The so called 〜 reasoning is not necessarily the case".'
  },{
    grammar_point: '(noun/verbて)ばかり（だ）',
    spec: '(noun/verbて)ばかり（だ）',
    alt_def: '',
    meaning: '"Nothing but noun"; "Do nothing but verb"',
    use: {
      text: 'Conveys a sense that there is so much 〜 that it appears as if there is only 〜',
      species: [
        {
          jap: '(noun) ばかり(だ)',
          eng: '：nothing but noun'
        },{
          jap: 'verb(て) ばかりいる',
          eng: '：do nothing but verb.  NOTE: that ばかり is sandwiched between verbて and いる。'
        }
      ]
    },
    example: [
      {
        sentence: {
          ante: '『テレビのニュースはいやな',
          highlight: 'ニュースばかり',
          post: 'です。』'
        },
        translation: 'TV news is nothing but bad news.'
      },{
        sentence: {
          ante: '『テレビを',
          highlight: '見てばかりいる',
          post: 'と勉強できません。』'
        },
        translation: 'If you do nothing but watch TV, you won\'t be able to study.'
      }
    ],
    other: '...'
  },{
    grammar_point: 'なるべく',
    spec: 'なるべく',
    alt_def: '',
    meaning: '"As (much, fast, etc.) as possible"; "If at all possible"',
    use: {
      text: 'Usually followed by a phrase or action which should be "as 〜 as possible".',
      species: []
    },
    example: [
      {
        sentence: {
          ante: '『教室以の外に、',
          highlight: 'なるべく',
          post: '日本語を使った方がいいでしょう。』'
        },
        translation: 'It will be better if you speak Japanese as much as possible even outside the classroom.'
      },{
        sentence: {
          ante: '『宿題は、',
          highlight: 'なるべく',
          post: '次の日出してください。』'
        },
        translation: 'If possible, please hand in homework the next day.'
      }
    ],
    other: 'I\'ve seen なるべく described as "preferably".  Like, "be as quiet as possible" = "be quiet, preferably".  なるべく + adverb conveys the meaning "as adverbially as possible".  Also, for those who care, the dictionary gives kanji for「なるべく」as「成る可く」。 「成る」"To become" is the なる that we know and love.  I\'m not sure「可く」means exactly, but the kanji「可」means "can", "passable"; "mustn\'t", "should not".  It is related to べき／べし。'
  },{
    grammar_point: 'verb(plain)べき',
    spec: 'verb(plain)べき',
    alt_def: '',
    meaning: '"One should/ought to verb"; "I should verb"',
    use: {
      text: 'べき is conjugated like a noun (followed by だ・です・etc).  Negation of べき is べきではない。  するべき may be contracted to すべき、but both are used.  Is a strong suggestion, maybe too strong to use casually directly to others; keep it to "I should" or "one should".',
      species: [
        {
          jap: 'verb(plain)べき だ：',
          eng: '：[pos.] One should verb'
        },{
          jap: 'verb(plain)べき ではない：',
          eng: '：[neg.] One should not verb (note: that it is べき and not the verb which is negated)'
        }
      ]
    },
    example: [
      {
        sentence: {
          ante: '『日本語の新聞が読みたかったら、漢字を',
          highlight: '勉強するべきだ',
          post: '。』'
        },
        translation: 'If one wants to read Japanese newspapers, one should study kanji.'
      },{
        sentence: {
          ante: '『ほかの人の意見も',
          highlight: '聞くべきだ',
          post: '。』'
        },
        translation: 'One should listen to the opinions of others.'
      }
    ],
    other: 'べき is derived from the classical auxilliary verb べし。'
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














