"use strict";

var local_course_name = '日本語４００';
var local_course_path = 'JAPN0400'
var local_chap_name = '第１５課';
var local_chap_path = 'L15';



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
    grammar_point: '〜（って／と）いうか',
    spec: '〜（って／と）いうか',
    alt_def: 'っていうか、というか、って言うか、と言うか',
    meaning: '"〜、Or rather"; "More appropriately"; "Rather than 〜、...',
    use: {
      text: 'The kanji of いう is 言う.  Usually the kana is used.  The thing that is rathered precedes っていうか and the thing that is a better fit follows.  Can follow a noun, phrase, or a sentence and is used to give a more appropriate expression.',
      species: []
    },
    example: [
      {
        sentence: {
          ante: '『昨日パイを作った、',
          highlight: 'ていうか',
          post: '作るのを手伝った（手伝う：てつだ(う)）だけなんだけど。』'
        },
        translation: 'Yesterday, I made a pie; or rather, I helped make a pie...'
      },{
        sentence: {
          ante: '『乗馬（じょうば）',
          highlight: 'っていうか',
          post: '、馬にさわっただけ。』'
        },
        translation: 'It wasn\'t really horseback riding – it was more like just touching a horse.'
      },{
        sentence: {
          ante: '『兄弟',
          highlight: 'っていうか',
          post: '、ふたごですけど。』'
        },
        translation: 'More precisely, they were twins rather than brothers.'
      }
    ],
    other: 'It can be thought of as a combination of（って／と）+ 言う + か'
  },{
    grammar_point: '（どっち／どちら）かと言うと',
    spec: '（どっち／どちら）かと言うと',
    alt_def: 'どっちかと言うと、どちらかと言うと、どっちかというと、とちらかというと',
    meaning: '"Rather (than)"; "If anything"; "If we\'re talking about the two"',
    use: {
      text: 'Used to imply "If we have to choose between two alternatives, X is Y".  It\'s easier to understand if we break up the parts into「どっち」「か」「と」「言う」「と」= "Which of the two" + "?" + "(quotation)" + "speaking" + "if".',
      species: []
    },
    example: [
      {
        sentence: {
          ante: '『彼女は',
          highlight: 'どっちかと言うと',
          post: '母親（ははおや）に似ている。』'
        },
        translation: 'She looks more like her mother [than her father].'
      },{
        sentence: {
          ante: '『日本人は',
          highlight: 'どっちかと言うと',
          post: '対立を好まない（好む：この(む))。』'
        },
        translation: 'Japanese people, if anything, do not like confrontation.'
      },{
        sentence: {
          ante: '『私は、日本語は、',
          highlight: 'どっちかと言うと',
          post: '話す方が得意だ。』'
        },
        translation: 'If I had to choose, I am better at speaking Japanese [than reading it].'
      }
    ],
    other: 'Note that どっち and どちら ("which way / direction (of two)") are similar to こっち and こちら (etc.) which mean "this way / direction".  (cf. ここ／どこ、これ／どれ、こう／どう）'
  },{
    grammar_point: '〜ような気がする',
    spec: '〜ような気がする',
    alt_def: 'ようなきがする',
    meaning: '"To feel that 〜"; "To have the impression that 〜"; "It seems to me that 〜"',
    use: {
      text: 'Another way to express one\'s thoughts or opininos.  Perhaps not to dissimilar to そう、らしい、よう。',
      species: []
    },
    example: [
      {
        sentence: {
          ante: '『日本語が少し上達（じょうたつ）',
          highlight: 'ような気がする',
          post: '。』'
        },
        translation: 'I feel like my Japanese has improved a little.'
      },{
        sentence: {
          ante: '『日本人は自分の入っているグループを重んじる',
          highlight: 'ような気がする',
          post: '。』'
        },
        translation: 'It seems to me that Japanese people value a group that they belong to.'
      }
    ],
    other: '...'
  },{
    grammar_point: '〜とか（言う）',
    spec: '〜とか（言う）',
    alt_def: '〜とか言う、〜とかいう、〜とか（いう）',
    meaning: 'Quotation marker.  Indicates uncertainty.  Or, makes utterance more indirect, vague, or casual.',
    use: {
      text: '〜とか can be used in place of the quotation marker 〜と。 As in 〜とか言う、〜とか聞く、etc.  Compared to 〜と、〜とか indicates that the speaker is not quite certain of what is quoted.  Also used to make a phrase more indirect, vague, or casual.',
      species: []
    },
    example: [
      {
        sentence: {
          ante: '『今日本語の学生が増えている',
          highlight: 'とか',
          post: '聞きましたが、本当でしょうか。』'
        },
        translation: 'I heard something like the number of students of Japanese is increasing, but is it true?'
      },{
        sentence: {
          ante: '『「これかわいい」',
          highlight: 'とか',
          post: 'よく言われました。』'
        },
        translation: 'They often said something like, "This is cute".'
      }
    ],
    other: '...'
  },{
    grammar_point: '(noun)（と）同様',
    spec: '(noun)（と）同様',
    alt_def: 'と同様、とどうよう、',
    meaning: '（「同様」どうよう：Similar; identical）"Similar to (noun)"; "Just like (noun)"',
    use: {
      text: 'と is optional.',
      species: []
    },
    example: [
      {
        sentence: {
          ante: '『アニメは日本',
          highlight: 'と同様',
          post: '、アメリカも人気がある。』'
        },
        translation: 'Anime is popular in America just like in Japan.'
      },{
        sentence: {
          ante: '『韓国語にも日本語',
          highlight: '同様',
          post: '梯梧がある。』'
        },
        translation: 'Korean has honorific speech, just like Japanese.'
      }
    ],
    other: '...'
  },{
    grammar_point: '単に〜ではない',
    spec: '単に〜ではない',
    alt_def: 'たんに〜ではない、[neg.]',
    meaning: '（「単」たん：Simple）"Not merely 〜"; "Not simply 〜"',
    use: {
      text: 'As 単 means simple, the adverbialization 単に means simply.',
      species: []
    },
    example: [
      {
        sentence: {
          ante: '『日本は',
          highlight: '単に',
          post: '、外国文化を模倣（もほう）しているの<b>ではない</b>。』'
        },
        translation: 'Japan is not simply imitating foreign cultures.'
      },{
        sentence: {
          ante: '『多くの人は、',
          highlight: '単に',
          post: 'お金を稼ぐ（かせ(ぐ)）たみに働いているの<b>ではない</b>だろう。』'
        },
        translation: 'Many people are probably not working merely to make money.'
      }
    ],
    other: '...'
  },{
    grammar_point: '(noun)だらけ（の・だ）',
    spec: '(noun)だらけ',
    alt_def: '',
    meaning: '"Full of (noun)" [negative context]',
    use: {
      text: 'Used with limited groups of nouns (eg: どろ、間違い、穴).  Carries negative connotations.  As a nounal suffix, だらけ can modify another noun by の or be made a statement by だ。',
      species: []
    },
    example: [
      {
        sentence: {
          ante: '『間違い',
          highlight: 'だらけ',
          post: 'の作文を直すのは時間がかかる。』'
        },
        translation: 'It is time consuming to correct compositions full of mistakes.'
      }
    ],
    other: 'cf. いっぱい "full"'
  },{
    grammar_point: '(noun)の余地がない',
    spec: '(noun)の余地がない',
    alt_def: 'のよちがない、[neg.]',
    meaning: '（「余地」よち：Place; Room; Margin; Scope）"There is no room for 〜"',
    use: {
      text: 'ｌａｎｇｕａｇｅ',
      species: []
    },
    example: [
      {
        sentence: {
          ante: '『妥協（だきょう）',
          highlight: 'の余地がない',
          post: '。』'
        },
        translation: 'There is no room for compromise.'
      },{
        sentence: {
          ante: '『相手が話を聞いてくれない人だと議論（ぎろん）',
          highlight: 'の余地がない',
          post: '。』'
        },
        translation: 'When the other party does not listen to what I have to say, there is no room for discussion.'
      }
    ],
    other: '...'
  },{
    grammar_point: '(noun)に（は）かなう[neg.]',
    spec: '(noun)に（は）かなう[neg.]',
    alt_def: '(noun)にはかなう[neg.],、(noun)に（は）叶う[neg.]、(noun)に（は）叶わない',
    meaning: '"To be no match for 〜"; "Can\'t win against 〜"',
    use: {
      text: 'The kanji for かなう is 叶う which means "To be a match (for power, skill, etc)", "To rival", "To bear (eg: I can\'t bear the heat)".',
      species: []
    },
    example: [
      {
        sentence: {
          ante: '『どんなに正当（せいとう）な理由もこの言葉',
          highlight: 'にはかなわない',
          post: '。』'
        },
        translation: 'Even the most legitimate reason cannot prevail over this word.'
      },{
        sentence: {
          ante: '『素人（しろうと）はいくらがんばってもプロ',
          highlight: 'にはかなわない',
          post: '。』'
        },
        translation: 'An amateur, no matter how hard he tries, is no match for a PURO.'
      }
    ],
    other: '...'
  },{
    grammar_point: 'verb(stem)づらい',
    spec: 'verb(stem)づらい',
    alt_def: '',
    meaning: '"Difficult to do (verb)"',
    use: {
      text: 'Very similar to verb(stem)にくい、but has more the sense of "painful to do" or "to have a hard time doing".  づらい is an (adjい).',
      species: []
    },
    example: [
      {
        sentence: {
          ante: '『のどが痛いと、ものが',
          highlight: '食べづらい',
          post: 'だろう。』'
        },
        translation: 'When your throat hurts, it\'s hard to eat.'
      },{
        sentence: {
          ante: '『自分の失敗（しっぱい）は他人には',
          highlight: '話しづらい',
          post: '。』'
        },
        translation: 'I find it difficult to talk about my own failures.'
      }
    ],
    other: 'The kanji for づらい is 辛い meaning "painful", "bitter", "heartbreaking" or "spicy".  However the kanji form is probably not usually used.'
  },{
    grammar_point: '(noun)にこだわる([pos.]/[neg.])',
    spec: '(noun)にこだわる([pos.]/[neg.])',
    alt_def: 'にこだわない',
    meaning: '"To be particular/picky about 〜" [pos]; "To not be particular/picky about 〜" [neg]',
    use: {
      text: 'ｋｏｔｏｂａ。 こだわる can be conjugated in any number of ways, with expected results.  (ている、ば、etc.)',
      species: [
        {
          jap: '(noun)に こだわる',
          eng: '：To be particular about 〜'
        },{
          jap: '(noun)に こだわない',
          eng: '：To not be particular about 〜'
        }
      ]
    },
    example: [
      {
        sentence: {
          ante: '『アクセント',
          highlight: 'にこだわっている',
          post: 'と、日本語を話すのは難しいかもしれない。』'
        },
        translation: 'If you pay too much attention to accent, it might be difficult to speak Japanese.'
      },{
        sentence: {
          ante: '『場所',
          highlight: 'にこだわらなければ',
          post: '、安く家が買える。』'
        },
        translation: 'If you\'re not picky about the location, you can buy an house inexpensively.'
      }
    ],
    other: 'The kanji for こだわる is 拘わる、however the kana form is usually used.'
  },{
    grammar_point: '(noun)において',
    spec: '(noun)において',
    alt_def: '',
    meaning: '"At"; "In" (ie: a location or timeframe)',
    use: {
      text: 'Used with a noun to indicate a place or timeperiod.  〜において is formal and usually used in writing.  Can be replaced by the "place of action/event" particle 〜で。',
      species: []
    },
    example: [
      {
        sentence: {
          ante: '『明治（めいじ）時代',
          highlight: 'において',
          post: '女性が留学するのは大変珍しいことだった。』'
        },
        translation: 'In the Meiji period, it was very unusual for a woman to study abroad.'
      },{
        sentence: {
          ante: '『第一回のオリンピックはギリシャ',
          highlight: 'において',
          post: '、開催（かいさい）された。』'
        },
        translation: 'The first Olympic Games were held in Greece.'
      }
    ],
    other: 'The kanji for おいて is 於て or 於いて、but the kana form is usually used.  Note that this differs from おく in verb(て)おく meaning "to do in advance", the kanji of which is 置く。  However, the dictionary also gives a possible kanji for 於て as 置いて。 So idk, but in either case the kana is usually used.'
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














