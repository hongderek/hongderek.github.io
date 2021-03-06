"use strict";

var local_course_name = '日本語３００';
var local_course_path = 'JAPN0300'
var local_chap_name = '第６課';
var local_chap_path = 'L6';


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
var chap_note_list = [
  {
    topic: 'How to say I\'m hungry',
    spec: 'How to say I\'m hungry',
    subtopic_list: [
      {
        subtopic: '腹がへった',
        desc: ['']
      },{
        subtopic: 'ＸＯＲ',
        desc: ['']
      },{
        subtopic: 'お腹がすいた',
        desc: 
        [
          'ie: only use one or the other, it sounds wierd otherwise.',
          '(お腹がいっぱい is to say "I am full")'
        ]
      }
    ]
  },{
    topic: '（〜から）です。',
    spec: '（〜から）です。',
    subtopic_list: [
      {
        subtopic: '〜から：because.  The preceeding sentence is the answer to question (ie: 〜ですか)。  A more colloquial form of 〜んです which is from 〜のです。',
        desc: ['']
      }
    ]
  },{
    topic: 'Please explain 〜',
    spec: 'Please explain 〜',
    subtopic_list: [
      {
        subtopic: 'I want an explaination for this graph (using verb(て)もらいたい)',
        desc: ['このグラフは説明してもらいたい。']
      }
    ]
  },{
    topic: 'Motion verbs （に）',
    spec: 'Motion verbs （に）',
    subtopic_list: [
      {
        subtopic: 'These verbs take 〜に：',
        desc: ['行く、来る、帰る、入る、乗る、留学する、移る、引っ越す、参加する']
      }
    ]
  },{
    topic: 'Expressing similarity',
    spec: 'Expressing similarity',
    subtopic_list: [
      {
        subtopic: '似ている：to be the same/similar (cf. 違う：to be different/differ)',
        desc: ['似る（漢字：に（る））：to be similar.  Usually used in ている form ie: 似ている。']
      }
    ]
  },{
    topic: 'verb(plain, non-past)ことがある',
    spec: 'verb(plain, non-past)ことがある',
    subtopic_list: [
      {
        subtopic: '〜ある',
        desc: ['There are times/cases when 〜.  ie: sometimes, from time to time']
      },
      {
        subtopic: '〜ない',
        desc: ['There are no occasions when 〜.  ie: almost never']
      }
    ]
  },{
    topic: 'verb(volitional)とする',
    spec: 'verb(volitional)とする',
    subtopic_list: [
      {
        subtopic: 'Try to do ___',
        desc: ['と seems to function as it does in と思う、と考える、etc.']
      }
    ]
  },{
    topic: 'The suffering passive',
    spec: 'The suffering passive',
    subtopic_list: [
      {
        subtopic: 'wat',
        desc: ['literally wat']
      }
    ]
  },{
    topic: '覚えるセンテンス',
    spec: '覚えるセンテンス',
    subtopic_list: [
      {
        subtopic: 'Sentences to remember:',
        desc: 
        [
          '丼の作り方が必ずしも簡単とは限らない。',
          '日本に行った時に高級な旅館に泊まります。',
          '日本に行く時に五十代の友達に会いました。',
          'トムは日本の習慣に慣(な)れたことは慣(な)れたらしいです。',
          'やはり、外国に比べると日本の物価は高いのではないかと思う。'
        ]
      }
    ]
  }
];

var chap_grammar_list = [
  {
    grammar_point: '〜って',
    spec: '〜って',
    alt_def: '',
    meaning: '"They say, 〜"; "〜, so I hear."',
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
    grammar_point: '〜ことは〜（が、〜）',
    spec: '〜ことは〜（が、〜）',
    alt_def: '',
    meaning: '"It is indeed the case that 〜(, but...)" [pres.]; "It was indeed the case that 〜(, but...)" [past]',
    use: {
      text: 'This is another way to qualify one\'s statements.  〜 may be a verb or adjective in the [present] or [past].  The verb or adjective is repeated before and after ことは。 Both sides of adj/verb should match in tense.  The conjunction 〜が is optional (ie: You don\'t need to say "Indeed ___, BUT", you can just say "Indeed ___."',
      species: [
        {
          jap: '(adjい)(い・かった) ことは (adjい)(い・かった)（が、〜）',
          eng: ''
        },
        {
          jap: '(adjな)(な・だった) ことは (adjな)(だ・だった)（が、〜）',
          eng: ''
        },
        {
          jap: 'verb(plain)([pres.]/[past]) ことは verb(plain)([pres.]/[past])（が、〜）',
          eng: ''
        },{
          jap: 'ie: [present] ことは [present（が、〜）',
          eng: ''
        },{
          jap: '',
          eng: '[present] ことは [present]（が、〜）'
        },{
          jap: '',
          eng: '[past] ことは [past]（が、〜）'
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
    other: 'It should be either ([present]ことは[present]) or ([past]ことは[past]); note that the tense on either side of ことは should match.'
  },
  {
    grammar_point: '(noun)で（いい・けっこう）です',
    spec: '(noun)で（いい・けっこう）です',
    alt_def: '(noun)でいいです、(noun)でけっこうです',
    meaning: '"(noun) will do"; "(noun) will suffice"',
    use: {
      text: 'けっこう means "sufficient", "enough".',
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
    other: 'NOTE: けっこう is conversational and probably used only in certain contexts.  To express a broader sense of sufficiency in writing or otherwise, perhaps consider「足りる」た(りる)：To be sufficient.'
  },
  {
    grammar_point: '〜とは限る[neg]',
    spec: '〜とは限る[neg]',
    alt_def: '〜とはかぎる[neg]、〜とはかぎらない',
    meaning: '（「限る」かぎ(る)：To limit; To restrict) "It is not necessarily the case that 〜"; "It does not mean that 〜',
    use: {
      text: '限る[neg] is 限らない／限りません。 The preceeding statement should end in plain form.  The expression is often used with 必ずしも（also expresses "not always; not necessarily").',
      species: []
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
    grammar_point: 'verb(plain)（[pres]前に・[past]後(で)・[pres/past]時(に))',
    spec: 'verb(plain)（前に・後(で)・時(に))',
    alt_def: 'まえに、後で、あとで、時に、ときに',
    meaning: '"Before 〜" [pres]前に（「前」まえ); "After 〜" [past]後(で)（「後」あと); "When (present/past) 〜" [pres/past]時(に)（「時」とき)',
    use: {
      text: 'Time particles indicate the temporal situation of the preceeding action with respect to the following clause.  There are rules which govern whether to use [present] or [past] in the preceeding action, HOWEVER, the main verb always governs the embeded verb\'s tense in translation.  It\'s quite fun to think about the sequence of actions.  For 後 and 時 their particles are optional.',
      species: [
        {
          jap: 'verb(plain)[present] 前に (main sentence[present/past])',
          eng: '："Before verb, clause.".  The verb which preceeds 前に must be [present].  前 is read as 「まえ」。'
        },
        {
          jap: 'verb(plain)[past] 後(で) (main sentence[present/past])',
          eng: '："After verb, clause".  The verb which preceeds 後 must be [past].  で is optional.  後 is read as 「あと」。'
        },
        {
          jap: 'verb(plain)[present] 時(に) (main sentence[present/past])',
          eng: '："When verb, clause".  "When" here implies that the the preceeding action occurs DURING/BEFORE the main verb.  に is optional.  時 is read as 「とき」。'
        },
        {
          jap: 'verb(plain)[past] 時(に) (main sentence[present/past])',
          eng: '："When verb, clause".  "When" here implies that the the preceeding action occured AFTER the main verb.'
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
    other: 'In "After/before verb, (main sentence[present])" constructions, it is useful to use verb(volitional) as the main verb.  Such as, "Before/after verb, let\'s _____."  (eg: "After the test, let\'s party!")'
  },
  {
    grammar_point: '何(counter)も',
    spec: '何(counter)も',
    alt_def: '',
    meaning: '"Many of that which is counted by (counter)"',
    use: {
      text: '何(counter)も also has a negative analogue 「一(counter)も (phrase)[neg]」which means "Not even one of that which is counted by (counter)".  Both formations take no particles.',
      species: [
        {
          jap: '何(counter)も',
          eng: '：Many (counter)s (esp.「何度も」many times)'
        },
        {
          jap: '何十(counter)も',
          eng: '：Dozens of (counter)s (lit. "tens of (counter)s")'
        },
        {
          jap: '一(counter)も (phrase)[neg]',
          eng: '：Not even one (counter)'
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
    grammar_point: '(verb A (volitional)）か（verb B (vol.)）かと（思う・心配する・迷う・考える）',
    spec: 'verb(volitional)かverb(vol.)かと',
    alt_def: 'おもう、しんぱいする、まよう、かんがえる',
    meaning: '"Wondering whether to (verb A) or (verb B)"',
    use: {
      text: 'Such construction is followed by 心配する、迷う、考える。  Such verbs can be [past], as well (ie: wondered whether to...).  Indicates the subject is wondering which option to take.  Note that each verb conjugates as (vol.) and is followed by か ("or"), and preceeds a と verb (思う、心配する、迷う、考える、etc.)',
      species: [
        {
          jap: '思う',
          eng: '：おも(う)：Wondering whether to A or B.'
        },{
          jap: '心配する',
          eng: '：しんぱい（する))：Worried whether to A or B.'
        },
        {
          jap: '迷う',
          eng: '：まよ(う))：Lost, hesitating, puzzled whether to A or B.'
        },
        {
          jap: '考える',
          eng: '：かんが(える))：Considering whether to A or B.'
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
    alt_def: 'のではないでしょうか、のではないだろうか、のではないか、んじゃないでしょうか、んじゃないだろうか、のではないかと思う、のではないかとおもう、んじゃないかと思う、んじゃないかとおもう',
    meaning: '"Might it not be the case that 〜"; "Perhaps 〜" (I kind of like just inserting "perhaps", it softens the claim without adding too much extra wording)',
    use: {
      text: 'Yet another indirect way to express one\'s opinon.  「〜」is usually a sentence ending in plain form.  「〜ではないだろうか」can be followed by と plus verbs like 思う、心配する、etc.  There are several contractions and rules as follows:',
      species: [
        {
          jap: 'verb(plain) のではない〜',
          eng: ''
        },
        {
          jap: '(adjい)い のではない〜',
          eng: ''
        },
        {
          jap: '(adjな)な のではない〜',
          eng: ' (Note that な is used)'
        },
        {
          jap: '(noun)な のではない〜',
          eng: ' (Note that な is used)'
        },
        {
          jap: '〜んじゃない（でしょうか・だろうか)',
          eng: ' (Contraction of 〜のではない in colloquial speech)'
        },
        {
          jap: '〜のではない か と（思う／etc.)',
          eng: ' (Contraction of 〜のではないだろうか when followed by と plus verbs like 思う、心配する、etc.) "I think that perhaps 〜"'
        },{
          jap: '〜んじゃない か と（思う／etc.)',
          eng: ' (Similar to above, but with 〜んじゃない) "I think that perhaps 〜"'
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
    other: 'Note that ではない is the [neg] of である which itself is a formal version of だ。 Adding の to ではない has the same effect as のだ／のです and んだ／んです。'
  },
  {
    grammar_point: 'むしろ',
    spec: 'むしろ',
    alt_def: '',
    meaning: '"Rather (than)"; "More ＿＿" (ie: more preferable, fits the description more, etc.)',
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
    grammar_point: '意外に(adj[past])',
    spec: '意外に(adj[past])',
    alt_def: 'いがいに',
    meaning: '（「意外」いがい：Unexpected; Surprising）"More/less than expected"; "Contrary to one\'s expectation"',
    use: {
      text: '意外に is an adverb.  意外と is a more colloquial form.  What comes after (ie: adj) is what was contrary to expectation.  The adjectives are in plain form (the examples only use [past], but I\'m sure [present] also occurs?), but are comparative in translation thanks to 意外に。',
      species: [
        {
          jap: '〜は 意外に (adj[past])',
          eng: '：As for 〜、it was adj(er) than expected'
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

/*
て ‒ form + 終わる(お) to finish doing something て - form + 始める (はじ) to start doing something
*/











