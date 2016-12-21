"use strict";

const local_course_name = '日本語３００';
const local_course_path = 'JAPN0300'
const local_chap_name = '第６課';

const chap_kanji_str = 'kanji,reading,meaning,kaku\n店,みせ,shop; store; restaurant,hai\n注文する,ちゅうもん（する）,to order,hai\n引用する,いんよう（する）,to quote,hai\n以上,いじょう,more than,hai\n勤める,つと（める）,to work for,\n同僚,どうりょう,colleague,hai\nご飯,（ご）はん,rice,\n丼,どんぶり,you know what it is boi,\n実物,じつぶつ,actual thing,\n卵,"\nたまご",egg,\n店員,てんいん,clerk; shop employee,hai\n親子,おやこ,parent and child,hai\n生む,う（む）,to lay (an egg); to give birth,\n昼食,ちゅうしょく,lunch (more polite),\n五十代,ごじゅうだい,In one\'s fifties (age wise),hai\n１９９０年代,（１９９０）ねんだい,Nineties (year wise ie: 1990s),\n込む,こ（む）,to be crowded,\n腰をかける,こし（をかける）,to sit (hum. of 座る）,\n座る,すわ（る）,to sit,\nお茶,（お）ちゃ,green tea,\n召し上がる,め（し）あ（がる）,to eat/drink (hon. of 食べる・飲む),\n参る,まい（る）,to come/go (hum. (courteous) of 行く・来る),\n請求書,せいきゅうしょ,bill; invoice,\n払う,はら（う）,to pay,\n全部,ぜんぶ,all; entire (NB: only for inanimate objects) (cf. 全員),hai\n席に着く,せき（に）つ（く）,"to seat oneself (lit. ""to arrive at a seat"")",\n辺り,あた（り）,vicinity,\n腹がへる,はら（がへる）,to be hungry,\nお腹がへる,（お）なか（がへる）,"to be hungry (more polite, note reading change)",\n売る,う（る）,to sell,\n外国,がいこく,foreign country,hai\n日本化する,にほんか（する）,"to Japanize (日本化 ""Japanization"")",\n旅行,りょこう,travel,hai\n習慣,しゅうかん,custom,hai\n面倒（な）,めんどう（な）,troublesome,\n（〜と）感じる,（〜と）かん（じる）,to feel (that ~),\n例,れい,example,hai\n運転手,うんてんしゅ,"driver, chauffeur",\n渡す,わた（す）,to hand to someone,\n荷物,にもつ,luggage; baggage,\n運ぶ,はこ（ぶ）,to carry,hai\n片付ける,かたづ（ける）,to clean; to tidy up,\n何度も,なんど（も）,many times,hai\n旅館,りょかん,Japanese-style inn,\n泊まる,と（まる）,"to stay (ie: hotel, 旅館 for a short time)",hai\n決まる,き（まる）,"to be decided, fixed, arraged",\n宿泊料,しゅくはくりょう,hotel charges,\n簡単,かんたん,simple; easy,\n（〜に）含まれる,（〜に）ふく（まれる）,to be include (in 〜) (pass. 含む),\n含む,ふく（む）,to include,\n計算する,けいさん（する）,to calculate,\n美容院,びよういん,beauty salon,\n床屋,とこや,barber shop,\n（〜と／に）比べる,（〜と／に）くら（べる）,to compare (with ~),hai\n高級（な）,こうきゅう（な）,high class; first rate,hai\n料理屋,りょうりや,Japanese-style restaurant,\n普通,るつう,normal; ordinary; usual,hai\n必要（な）,ひつよう（な）,necessary,hai\n必要ない,ひつよう（ない）,not necessary,\n物価,ぶっか,prices (of commodities),hai\n意外に,いがい（に）,expectedly; unexpectedly ,\n宣伝,せんでん,advertisement,\n・,なるほど,(phrase),\n・,やめる,"to refrain (from), stop (something) (transitive, 〜を)",\n・,おごる,to treat (someone to food/drink) (don\'t use to superiors),\n・,ごちそうになる,to be treated by someone,\n（〜を）降りる,（〜を）お（りる）,to get off 〜; to get out of (a vehicle),\n食堂,しょくどう,dining room,\n・,（〜が）いる,to need 〜,\n心配,しんぱい,worry (する：to worry),\n・,むしろ,rather,\nこの間,（この）あいだ,"the other day, recently",\n訪ねる,たず（ねる）,to visit,\n様,さま,hon. of さん,';


/**
  {
    topic: '',
    spec: '',
    subtopic_list: [
      {
        subtopic: '',
        desc: ''
      }
    ]
  }
*/
const chap_note_list = [
  {
    topic: '（〜から）です。',
    spec: '（〜から）です。',
    subtopic_list: [
      {
        subtopic: '',
        desc: '〜から：because.  The preceeding sentence is the answer to question (ie: 〜ですか)。  A more colloquial form of 〜んです which is from 〜のです。'
      }
    ]
  },
  {
    topic: 'Please explain ~',
    spec: 'Please explain ~',
    subtopic_list: [
      {
        subtopic: 'I want an explaination for this graph',
        desc: 'このグラフは説明してもらいたい。'
      }
    ]
  },
  {
    topic: 'Motion verbs （に）',
    spec: 'Motion verbs （に）',
    subtopic_list: [
      {
        subtopic: 'These verbs take 〜に',
        desc: '行く、来る、帰る、入る、乗る、留学する、移る、引っ越す、参加する'
      }
    ]
  },
  {
    topic: 'Expressing similarity',
    spec: 'Expressing similarity',
    subtopic_list: [
      {
        subtopic: '似ている：to be the same/similar',
        desc: '似る（漢字：に（る））：to be similar.  Usually used in ている form ie: 似ている。'
      }
    ]
  },
  {
    topic: 'verb(plain, non-past)ことがある',
    spec: 'verb(plain, non-past)ことがある',
    subtopic_list: [
      {
        subtopic: '〜ある',
        desc: 'There are times/cases when 〜.  ie: sometimes, from time to time'
      },
      {
        subtopic: '〜ない',
        desc: 'There are no occasions when 〜.  ie: almost never'
      }
    ]
  },
  {
    topic: 'verb(volitional)とする',
    spec: 'verb(volitional)とする',
    subtopic_list: [
      {
        subtopic: 'Try to do ___',
        desc: 'と seems to function as it does in と思う、と考える、etc.'
      }
    ]
  },
  {
    topic: 'The suffering passive',
    spec: 'The suffering passive',
    subtopic_list: [
      {
        subtopic: 'wat',
        desc: 'literally wat'
      }
    ]
  },
  {
    topic: '覚えるセンテンス',
    spec: '覚えるセンテンス',
    subtopic_list: [
      {
        subtopic: 'Sentences to remember:',
        desc: '丼の作り方が必ずしも簡単とは限らない。'
      },
      {
        subtopic: '',
        desc: '日本に行った時に高級な旅館に泊まります。'
      },
      {
        subtopic: '',
        desc: '日本に行く時に五十代の友達に会いました。'
      },
      {
        subtopic: '',
        desc: 'トムは日本の習慣に慣(な)れたことは慣(な)れたらしいです。'
      },
      {
        subtopic: '',
        desc: 'やはり、外国に比べると日本の物価は高いのではないかと思う。'
      }
    ]
  }
];

const chap_grammar_list = [
  {
    grammar_point: '〜って',
    spec: '〜って',
    meaning: 'They say, ~.  ~, so I hear.',
    use: {
      text: 'A sentence ending in plain form is put before って。　Used to qualify information obtained through secondary sources (vs what is known firsthand).  Such distinction is important in Japanese.',
      species: []
    },
    example: [
      {
        sentence: {
          ante: '『東京の冬はあまり寒くないんだ',
          highlight: 'って',
          post: 'ねえ。』'
        },
        translation: 'I hear winter in Tokyo is not very cold.'
      }
    ],
    other: 'cf. そうだ、といっていました、らしい'
  },
  {
    grammar_point: '(verb/adj)ことは(verb/adj)（が、〜）',
    spec: '〜ことは（〜が）',
    meaning: 'It is[present] indeed the case that (verb/adj)(, but...); It was[past] indeed the case that (verb/adj)(, but...)',
    use: {
      text: 'This is another way to qualify one\'s statements.  The verb or adjective is repeated before and after ことは。 Both sides should match in tense.  〜が is optional (ie: You don\'t need to say "Indeed ___, but", you can just say "Indeed ___."',
      species: [
        {
          jap: '（adjい）い・ことは（adjい）〜',
          eng: ''
        },
        {
          jap: '（adjな）な・ことは（adjな）〜',
          eng: ''
        },
        {
          jap: 'verb(plain)・ことはverb(plain)〜',
          eng: ''
        }
      ]
    },
    example: [
      {
        sentence: {
          ante: '『作文を',
          highlight: '書いたことはかいたが',
          post: '、間違いが多かっただろうと思います。』'
        },
        translation: 'While indeed I did write the report, I think there were probably many mistakes.'
      },{
        sentence: {
          ante: '『この寿司は',
          highlight: 'おいしいことはおいしいです',
          post: '。』'
        },
        translation: 'This sushi is indeed delicious.'
      }
    ],
    other: '([present]ことは[present])・([past]ことは[past]) note that the tense on either side of ことは should match.'
  },
  {
    grammar_point: '(noun)でいいです／(noun)でけっこうです',
    spec: 'nounでいいです／nounでけっこうです',
    meaning: '(noun) will do; (noun) will suffice',
    use: {
      text: 'けっこう means "sufficient, enough".',
      species: []
    },
    example: [
      {
        sentence: {
          ante: '『',
          highlight: 'お茶でけっこうです',
          post: '。』'
        },
        translation: 'Green tea is fine.'
      }
    ],
    other: '...'
  },
  {
    grammar_point: '〜とは限る[neg]',
    spec: '〜とは限る[neg]',
    meaning: '（漢字：「かぎ」る）It is not necessarily the case that ~(sentence).  It does not mean that ~(sentence).',
    use: {
      text: '限る[neg] is 限らない／限りません。 The preceeding statement should end in plain form.  The expression is often used with 必ずしも（also expresses "not always; not necessarily").',
      species: [
        {
          jap: '〜とは（限らない・限りません）',
          eng: ''
        },
        {
          jap: '〜必ずしも〜とは限らない',
          eng: ''
        }
      ]
    },
    example: [
      {
        sentence: {
          ante: '『高いものが<b class="eg-highlight">必ずしも</b>みんなよい',
          highlight: 'とは限らない',
          post: '。』'
        },
        translation: 'Expensive things are not necessarily good.'
      }
    ],
    other: '...'
  },
  {
    grammar_point: 'verb(plain)（前に・〜後（で）・〜時（に））',
    spec: 'verb(plain)（前に・〜後（で）・〜時（に））',
    meaning: 'Before 〜; After 〜; When(present/past) 〜',
    use: {
      text: 'Time particles indicate the temporal situation of the preceeding action to the following clause.  There are rules which govern whether to use [present] or [past] in the preceeding action, however, the main verb always governs the embeded verb\'s tense in translation.  It\'s quite fun to think about the sequence of actions.  For 後 and 時 their particles are optional.',
      species: [
        {
          jap: '「verb[present]前に(clause[present/past])」　　 ',
          eng: '"Before verb, clause.".  The verb which preceeds 前に must be [present].  前 is read as 「まえ」。'
        },
        {
          jap: '「verb[past]後（で）(clause[present/past])」　 ',
          eng: '"After verb, clause".  The verb which preceeds 後 must be [past].  で is optional.  後 is read as 「あと」。'
        },
        {
          jap: '「verb[present]時（に）(clause[present/past])」',
          eng: '"When verb, clause".  "When" here implies that the the preceeding action occurs DURING/BEFORE the main verb.  に is optional.  時 is read as 「とき」。'
        },
        {
          jap: '「verb[past]時（に）(clause[present/past])」　  ',
          eng: '"When verb, clause".  "When" here implies that the the preceeding action occured AFTER the main verb.'
        }
      ]
    },
    example: [
    {
        sentence: {
          ante: '',
          highlight: '',
          post: ''
        },
        translation: 'Notice how the changes in verb tense will change translation slightly in the following examples:'
      },
      {
        sentence: {
          ante: '前に：『試験を',
          highlight: '取る前に',
          post: '食べる。』'
        },
        translation: 'I will eat before I take the test.'
      },
      {
        sentence: {
          ante: '　　：『試験を',
          highlight: '取る前に',
          post: '食べた。』'
        },
        translation: 'I ate before I took the test.  (note: how 取る is [present], but its tense in translation is dictated by the main clause)'
      },
      {
        sentence: {
          ante: '後で：『試験を',
          highlight: '取った後で',
          post: '食べる。』'
        },
        translation: 'I will eat after I take the test.'
      },
      {
        sentence: {
          ante: '　　：『試験を',
          highlight: '取った後で',
          post: '食べた。』'
        },
        translation: 'I ate after I took the test.  (note: tense change in translation)'
      },
      {
        sentence: {
          ante: '時に：『試験を',
          highlight: '取る時に',
          post: '食べる。』'
        },
        translation: 'I will eat when I take the test [before/during].  (ie: When I take the test, I\'ll eat beforehand/during)'
      },
      {
        sentence: {
          ante: '　　：『試験を',
          highlight: '取った時に',
          post: '食べる。』'
        },
        translation: 'I will eat when I take the test [after].  (ie: When I take the test, I\'ll eat afterwards)'
      },
      {
        sentence: {
          ante: '　　：『試験を',
          highlight: '取る時に',
          post: '食べた。』'
        },
        translation: 'I ate when I took the test [before/during].  (ie: When I took the test, I ate beforehand/during)'
      },
      {
        sentence: {
          ante: '　　：『試験を',
          highlight: '取った時に',
          post: '食べた。』'
        },
        translation: 'I ate when I took the test [after].  (ie: When I took the test, I ate afterwards)'
      }
    ],
    other: 'In "After/before verb, (clause[present])" is useful to use verb(volitional) in the clause.  Such as, "Before/after verb, let\'s _____."  (eg: "After the test, let\'s party!")'
  },
  {
    grammar_point: '何(counter)も',
    spec: '何(counter)も',
    meaning: '何(counter)も is a phrase which means "many of that which is counted by (counter)".',
    use: {
      text: '何(counter)も also has a negative analogue 「一(counter)も[neg]」',
      species: [
        {
          jap: '「何(counter)も」',
          eng: 'Many (counter)s (esp. 「何度も」 many times)'
        },
        {
          jap: '「何十(counter)も」',
          eng: 'Dozens of (counter)s (lit. "tens of (counter)s")'
        },
        {
          jap: '「一(counter)も[neg]」　 ',
          eng: 'Not even one (counter)'
        }
      ]
    },
    example: [
      {
        sentence: {
          ante: '『日本へは',
          highlight: '何度も',
          post: '行ったことがあります。』'
        },
        translation: 'I\'ve been to Japan many times.'
      },
      {
        sentence: {
          ante: '『日本へは',
          highlight: '一度も',
          post: '行ったことがありません。』'
        },
        translation: 'I have not been to Japan even once.'
      }
    ],
    other: '何(counter)も and it\'s negative analogue take no particles.'
  },
  {
    grammar_point: '(verb A (volitional)）か（verb B (vol.)）かと（心配する・迷う・考える）',
    spec: 'verb(volitional)かverb(vol.)かと',
    meaning: 'Wondering whether to (verb A) or (verb B).',
    use: {
      text: 'Such construction is followed by 心配する、迷う、考える。  Such verbs can be [past] as well (wodered whether to...).  Indicates the subject is wondering which option to take.',
      species: [
        {
          jap: '心配する：',
          eng: '（しんぱい（する））：Worried whether to A or B.'
        },
        {
          jap: '迷う　　：',
          eng: '（まよ（う））：Lost, hesitating, puzzled whether to A or B.'
        },
        {
          jap: '考える　：',
          eng: '（かんが（える））：Considering whether to A or B.'
        }
      ]
    },
    example: [
      {
        sentence: {
          ante: '『お寿司に<b class="eg-highlight">しようか</b>天ぷらに',
          highlight: 'しようかと迷った',
          post: '。』'
        },
        translation: 'I had trouble deciding whether to have sushi or tempura.'
      }
    ],
    other: '...'
  },
  {
    grammar_point: '〜のではない（でしょうか・だろうか・か）',
    spec: '〜のではない（でしょうか・だろうか・か）',
    meaning: 'Might it not be the case that 〜。  (however, the focus here should be on the feeling, rather than literal translation)',
    use: {
      text: 'Yet another indirect way to express one\'s opinon.  「〜」is usually a sentence ending in plain form.  「〜ではないだろうか」can be followed by と plus verbs like 思う、心配する、etc.  There are several contractions and rules as follows:',
      species: [
        {
          jap: 'verb(plain)のではない〜',
          eng: ''
        },
        {
          jap: '(adjい)い・のではない〜',
          eng: ''
        },
        {
          jap: '(adjな)な・のではない〜',
          eng: '　Note that な is used.'
        },
        {
          jap: '(noun)な・のではない〜',
          eng: '　Note that な is used.'
        },
        {
          jap: '〜んじゃない（でしょうか・だろうか）',
          eng: 'Contraction of 〜のではない in colloquial speech.'
        },
        {
          jap: '〜のではないかと（思う・etc）',
          eng: 'Contraction of 〜のではないだろうか when followed by と plus verbs like 思う、心配する、etc.'
        }
      ]
    },
    example: [
      {
        sentence: {
          ante: '『チップを払わなくてもいい',
          highlight: 'のではないでしょうか',
          post: '。』'
        },
        translation: 'I think it is OK not to leave a tip.  (Might it not be the case that it\'s OK to not leave a tip?)'
      },
      {
        sentence: {
          ante: '『最近、日本語のできる外国人は増えてきている',
          highlight: 'のではないかと思います',
          post: '。』'
        },
        translation: 'Recently, I think (that I think it might be the case that) (the number of) foreigners who can speak Japanese has increased.'
      }
    ],
    other: '...'
  },
  {
    grammar_point: 'むしろ',
    spec: 'むしろ',
    meaning: 'Rather (than); more ___ than the other (more preferable, fits the description more, etc)',
    use: {
      text: 'むしろ is used when comparing two alternatives to say that one is more ___ than the other.  Usually preceeded by a より clause which describes what is lesser.  Translation is very contextual; think of むしろ as a "leaning towards" or describing preference.',
      species: [
        {
          jap: '（eg）(clause A)よりむしろ(clause B)：',
          eng: '"Rather/more than" (clause A) is so, (clause B) is such.'
        },
        {
          jap: 'structure: ',
          eng: 'the first, lesser option --> the second, better option'
        }
      ]
    },
    example: [
      {
        sentence: {
          ante: '『夏かぜは冬のかぜより',
          highlight: 'むしろ',
          post: '治りにくいです。』'
        },
        translation: 'A summer cold is even harder to get rid of than a winter cold.  (Summer colds, than (compared to) winter colds, are rather more difficult to get rid of.)'
      }
    ],
    other: 'Often, when むしろ is used there is a certain general or contextual expectation that the opposite is true.  (ie: "You may think that ..., but ____ is rather more _____")'
  },
  {
    grammar_point: '意外に',
    spec: '意外に',
    meaning: 'More/less than expected; contrary to one\'s expectation.',
    use: {
      text: '意外に（漢字：いがい（に））is a phrase.  意外と is a more colloquial form.  What comes after (ie: adj) is what was contrary to expectation.  The adjectives are in plain form (the examples only use [past], but I\'m sure [present] also occurs?), but are comparative in translation thanks to 意外に。',
      species: [
        {
          jap: '〜は「意外に」adj[past]：',
          eng: 'As for 〜、it was adj(er) than expected'
        }
      ]
    },
    example: [
      {
        sentence: {
          ante: '『試験は',
          highlight: '意外に',
          post: '簡単だった。』'
        },
        translation: 'The test was easier than expected.'
      },
      {
        sentence: {
          ante: '『りんごは',
          highlight: '意外に',
          post: '安かった。』'
        },
        translation: 'The apples were cheaper than expected.  (ie: more cheap)'
      },
      {
        sentence: {
          ante: '『りんごは',
          highlight: '意外に',
          post: '安くなかった。』'
        },
        translation: 'The apples were not as cheap as I expected.  (ie: less cheap)'
      }
    ],
    other: '...'
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

/*
て ‒ form + 終わる(お) to finish doing something て - form + 始める (はじ) to start doing something
*/











