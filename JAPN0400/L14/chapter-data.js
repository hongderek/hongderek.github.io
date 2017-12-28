"use strict";

var local_course_name = '日本語４００';
var local_course_path = 'JAPN0400'
var local_chap_name = '第１４課';
var local_chap_path = 'L14';



/*
{
  topic: '',
  spec: '',
  subtopic_list: [
    {
      subtopic: '',
      desc: 
      [
        ''
      ]
    }
  ]
}
*/

var chap_note_list = [
  {
    topic: '無',
    spec: '無',
    subtopic_list: [
      {
        subtopic: '無',
        desc: 
        [
          '無',
          '無',
          '無'
        ]
      }
    ]
  }
];

var chap_grammar_list = [
  {
    grammar_point: '(noun)には(noun)の〜がある',
    spec: '(noun)には(noun)の〜がある',
    alt_def: '',
    meaning: '"Nouns have their own 〜"',
    use: {
      text: '〜 can be whatever, as long as it\'s nominalized',
      species: []
    },
    example: [
      {
        sentence: {
          ante: '『',
          highlight: '親には親の生活がある',
          post: '。』'
        },
        translation: 'Parents have their own lives (to live).'
      },{
        sentence: {
          ante: '『',
          highlight: '子供には子供の考えがある',
          post: 'んだから、まず聞いてやることが重要だ。』'
        },
        translation: 'Children have their own ways of thinking, so we should first listen to them.'
      }
    ],
    other: '...'
  },{
    grammar_point: '(noun A)は(noun A)なり（に(verb)／の(noun))',
    spec: '(noun A)は(noun A)なり（に(verb)／の(noun))',
    alt_def: 'なりに、なりの',
    meaning: '"Noun does things in its own way" [〜に(verb)]; "(noun A) has it\'s own (noun B)" [〜の(noun)]',
    use: {
      text: 'Pretty similary to the above.  なり is the kana of 形 meaning "shape", "style", "way".  That makes remembering translations a little easier (I think...).',
      species: [
        {
          jap: '(noun)は(noun)なりに(verb)',
          eng: '：(noun) does things in its own way'
        },{
          jap: '(noun A)は(nounA)なりの(noun B)',
          eng: '：(noun A) has it\'s own (noun B)'
        }
      ]
    },
    example: [
      {
        sentence: {
          ante: '『',
          highlight: '私は私なりにがんばっている',
          post: 'つもりですけど。』'
        },
        translation: 'I plan to do my best in my own way.'
      },{
        sentence: {
          ante: '『<b>アメリカにはアメリカなりのよさ</b>があり、',
          highlight: '日本には日本なりのよさ',
          post: 'があるから、どちらがいいとも言えない。』'
        },
        translation: 'Both Japan and Amerika have their own good points, so we can\'t say one is better than the other.'
      }
    ],
    other: '...'
  },{
    grammar_point: '〜くせに',
    spec: '〜くせに',
    alt_def: '',
    meaning: '"Although"; "But"; "Bad-habit-ually" (expresses displeasure, disgust, contempt)',
    use: {
      text: 'Adverb.  Like 〜のに (despite) except it also expresses displeasure, disgust, or contempt.  Can follow nouns, adjectives, and verbs.  くせ means "habit" (in the case of bad habit), or "mannerism".',
      species: [
        {
          jap: '(noun)の くせに',
          eng: ''
        },{
          jap: '(adjい)い くせに',
          eng: ''
        },{
          jap: '(adjな)な くせに',
          eng: ''
        },{
          jap: 'verb(plain) くせに',
          eng: ''
        }
      ]
    },
    example: [
      {
        sentence: {
          ante: '『子供の',
          highlight: 'くせに',
          post: '外で遊びたがらないのは、困る。』'
        },
        translation: 'Although being a child, it not playing outside is troublesome.'
      },{
        sentence: {
          ante: '『下手（したて）な',
          highlight: 'くせに',
          post: 'すぐやりたがる人はいやだ。』'
        },
        translation: 'Being bad at it and liking doing it people are an big pain.'
      },{
        sentence: {
          ante: '『お金もない',
          highlight: 'くせに',
          post: '高い物ばかり買う人は困ります。』'
        },
        translation: 'Despite lacking money, people who buy nothing but expensive things are 困.'
      },{
        sentence: {
          ante: '『知っている',
          highlight: 'くせに',
          post: '教えてくれない。』'
        },
        translation: 'Despite that he knows it, he won\'t tell me.'
      }
    ],
    other: '...'
  },{
    grammar_point: '〜（って／と）いう理由で',
    spec: '〜（って／と）いう理由で',
    alt_def: 'っていう理由で、という理由で、っていうりゆうで、というりゆうで',
    meaning: '（「理由」りゆう）"For such and such reason"',
    use: {
      text: 'This phrase follows a sentence in the plain form, as usual with things preceding っていう。',
      species: []
    },
    example: [
      {
        sentence: {
          ante: '『日本では結婚する',
          highlight: 'という理由で',
          post: '会社をやめる女性が多い。』'
        },
        translation: 'Many Japanese women quit companies for the reason of marriage.'
      },{
        sentence: {
          ante: '『ほかのコースの勉強が忙しい',
          highlight: 'という理由で',
          post: '宿題をしてこない学生もいます。』'
        },
        translation: 'There are students who don\'t do homework because they are too busy studying for other courses.'
      }
    ],
    other: 'I guess this is more specific / complex way to state cause.'
  },{
    grammar_point: '(X)とともに(Y)',
    spec: '(X)とともに(Y)',
    alt_def: '',
    meaning: '"Together with X", "Along with X", "As well as X"; "As X happens, so does Y happen"',
    use: {
      text: 'This has two constructions.  One is the meaning of "Together with" or "As well as" which is used exclusively with (noun)とともに。 The other meaning is "As X happens, so does Y" which can be used with nouns or plain forms of verbs',
      species: [
        {
          jap: '(noun) とともに',
          eng: '：As well as (noun)'
        },{
          jap: '(noun) とともに (Y)',
          eng: '：As (noun) is so, so is (Y)'
        },{
          jap: 'verb(plain)[pres.] とともに (Y)',
          eng: '：As verb happens, so does (Y)'
        }
      ]
    },
    example: [
      {
        sentence: {
          ante: '『京都は奈良（なら）',
          highlight: 'とともに',
          post: '日本の古い町である。』'
        },
        translation: 'Kyōto, along with Nara, is an old Japanese city. (nounとともに)'
      },{
        sentence: {
          ante: '『年を取る',
          highlight: 'とともに',
          post: '小さいことが気になるようになるらしい。』'
        },
        translation: 'It seems that as one grows older, one begins to worry more about trivial things.  (verbとともにY)'
      },{
        sentence: {
          ante: '『言葉は時代',
          highlight: 'とともに',
          post: '変化する。』'
        },
        translation: 'Language changes with time. (nounとともにY)'
      }
    ],
    other: 'とともに can be understood as「と」「とも」「に」、that is, 「とも」is「共」meaning "Together with".  lit. "Together with-ly".'
  },{
    grammar_point: '(X)を(Y)にまかす(caus.)',
    spec: '(X)を(Y)にまかす(caus.)',
    alt_def: 'に任す(caus.)、にまかせる、に任せる',
    meaning: '"To leave/entrust X to Y"',
    use: {
      text: 'まかせる is the causative of the transitive verb まかす meaning "To entrust something to someone".  Thus, まかせる means "Let it be entrusted to someone/me" or, without using passive voice in English, "Unto someone/me, let there be an entrusting of a thing".  まかせる can also be negated ("Let it not be entrusted")  The thing entrusted is marked with を and the entrusted person is marked with に。 を can also be は to emphasize emphasis.',
      species: []
    },
    example: [
      {
        sentence: {
          ante: '『簡単なこと<b>は</b>、機械（きかい）',
          highlight: 'にまかせて',
          post: 'もいいと思う。』'
        },
        translation: 'I think we can have machines do simple tasks.'
      },{
        sentence: {
          ante: '『大切なこと<b>は</b>、人',
          highlight: 'にまかせない',
          post: '方がいい。』'
        },
        translation: 'It\'s better not to leave important things to others.'
      }
    ],
    other: 'From anime: 「まかせて！」"Leave it to me!"'
  },{
    grammar_point: 'verb(plain)[pres.]たびに〜',
    spec: 'verb(plain)[pres.]たびに〜',
    alt_def: '度に',
    meaning: '"Every time something happens, 〜 also happens."',
    use: {
      text: '...',
      species: []
    },
    example: [
      {
        sentence: {
          ante: '『',
          highlight: '会うたびに',
          post: '同じ話を聞かされるのはいやだ。』'
        },
        translation: 'I don\'t like to be told the same story every time I see [him].'
      },{
        sentence: {
          ante: '『日本人は旅行に',
          highlight: '行くたびに',
          post: 'その土地のおみやげを買う。』'
        },
        translation: 'Japanese people buy souvenirs every time they go on a trip..'
      }
    ],
    other: 'The kanji of たび is 度、but the kana is often used.'
  },{
    grammar_point: 'verb(て)くれたらと思う',
    spec: 'verb(て)くれたらと思う',
    alt_def: 'てくれたらと思う、てくれたらとおもう、verb(て)くれたらとおもう',
    meaning: '"I wish someone would do 〜"; "I hope someone does 〜"; "I wish that I would receive the favor of someone doing 〜"; "I wish for the subjunctive/possible/conditional receiving of an action"',
    use: {
      text: '...',
      species: []
    },
    example: [
      {
        sentence: {
          ante: '『',
          highlight: '会うたびに',
          post: '同じ話を聞かされるのはいやだ。』'
        },
        translation: 'I don\'t like to be told the same story every time I see [him].'
      },{
        sentence: {
          ante: '『日本人は旅行に',
          highlight: '行くたびに',
          post: 'その土地のおみやげを買う。』'
        },
        translation: 'Japanese people buy souvenirs every time they go on a trip..'
      }
    ],
    other: 'The subjunctive mood is found in many languages and is usually used in statements to express unfulfilled wishes or desires, possibility, or actions that have not occured yet.  We don\'t really use the subjuctive conjugations of verbs in English anymore.  Rather, we construct conditional sentences.  However, there are a few preserved conjugations such as "would" (will), "could" (can), or "should" (shall) that can be easily used to express subjunctivity.  In other cases, insertion of a "that" conveys the subjuctive (eg: "I wish that she were here" or "Would that she were here").  Another way to break down てくれたらと思う might be "I wish 〜" (思う) + "would that I receive" (くれたら) + "the action" (verb(て)); or, in sum: "I wish that I (would) receive the action".  In fact, the 〜たら construction may be as close to the subjunctive in English as we can get, afaik.'
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














