"use strict";

var local_course_name = '日本語４００';
var local_course_path = 'JAPN0400'
var local_chap_name = '第８課';
var local_chap_path = 'L8';

/**
{
  kanji: '',
  reading: '',
  alt_def: '',
    alt_def: '',
    meaning: '',
  (opt)kaku: 'hai' or ''
}
*/



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
    topic: 'そう・らしい・よう',
    spec: 'そう・らしい・よう',
    subtopic_list: [
      {
        subtopic: '',
        desc: 
        [
          'そう：　hands to eyes',
          'らしい：hands to ears',
          'よう：　hands to read'
        ]
      }
    ]
  }
];

var chap_grammar_list = [
  {
    grammar_point: '(X)は(Y)くらいです',
    spec: '(X)は(Y)くらいです',
    alt_def: 'ぐらいです',
    meaning: '"Y is about the only X"; "As for X, there\'s pretty much only Y',
    use: {
      text: 'This expression is used when Y is about the only case where X holds true.  X and Y can be nouns or noun phrases (ie: verbの・こと）.  です may be substituted for an appropriate sentence ending verb (like かもしれない、でしょう、etc.).  くらい or ぐらい may be used.',
      species: [
        {
          jap: '(noun)は (Y)くらいです',
          eng: ''
        },{
          jap: '(phraseの／こと)は (Y)くらいです',
          eng: ''
        }
      ]
    },
    example: [
      {
        sentence: {
          ante: '『日本人がのんびりできるの<b>は</b>、大学生の時',
          highlight: 'くらいかもしれない',
          post: '。』'
        },
        translation: 'College years might be the only time when Japanese people can relax.'
      },{
        sentence: {
          ante: '『教えた経験<b>は</b>、ボランティアで子供に日本語を教えた',
          highlight: 'くらいです',
          post: '。』'
        },
        translation: 'About the only teaching experience (I have) is teaching Japanese to children as a volunteer.'
      }
    ],
    other: 'くらい means "about", "approximately", "around", or "〜, or so".'
  },{
    grammar_point: 'やっぱり',
    spec: 'やっぱり',
    alt_def: 'やはり',
    meaning: '"As expected"; "Also"; "Again"',
    use: {
      text: 'Conversational form of やはり。  Adverb which indicates that what is being said is what was expected from general or specific knowledge.',
      species: []
    },
    example: [
      {
        sentence: {
          ante: '『漢字は面白いですが、',
          highlight: 'やっぱり',
          post: '覚えるのに時間がかかります。』'
        },
        translation: 'Kanji are interesting, but (as expected) they take a long time to learn.'
      }
    ],
    other: '...'
  },{
    grammar_point: '〜さえ〜ば（result)',
    spec: '〜さえ〜ば（result)',
    alt_def: '',
    meaning: '"If only you 〜、then (result) will/would be"',
    use: {
      text: 'A better way to think of this construction is as (condition)>(result), where (condition) is the 〜さえ〜ば construction and the (result) is the result which is conditioned on (condition).  さえ replaces particles が、を、は、も and other particles are inserted as 〜＿さえ (eg: 〜にさえ), as usual.  さえ means "even", "if only", "if just", "as long as".  Possible species as follows: ',
      species: [
        {
          jap: 'nounさえ + verb(ば)',
          eng: ''
        },{
          jap: 'verb(stem)さえ + する(ば)：すれば',
          eng: ''
        },{
          jap: 'verb(て)さえ + いる(ば)：いれば',
          eng: ''
        },{
          jap: '',
          eng: 'In some cases, there is a choice whether to use さえ to emphasize the noun or the verb.  When さえ follows a noun, it emphasizes that only the noun is necessary to achieve the result.  When さえ follows the verb in either form (stem or て) then it emphasizes that it is the action which will produce the desired result.  See example sentences.'
        }
      ]
    },
    example: [
      {
        sentence: {
          ante: '『くすり',
          highlight: 'さえ飲めば',
          post: '、なおります。』'
        },
        translation: 'If only you would take your MEDICINE, you would get better.'
      },{
        sentence: {
          ante: '『くすりを',
          highlight: '飲みさえすれば',
          post: '、なおります。』'
        },
        translation: 'If only you would TAKE your medicine, you would get better.'
      },{
        sentence: {
          ante: '『ひま',
          highlight: 'さえあれば',
          post: '、幸せです。』'
        },
        translation: 'The only thing I need to be happy is free time. (If only I have free time, I am happy)'
      },{
        sentence: {
          ante: '『漢字',
          highlight: 'さえ知っていれば',
          post: '新聞が読めるというわけではありません。』'
        },
        translation: 'It is not the case that knowing kanji guarantees that you will be able to read newspapers.  (Just knowing kanji does not mean that you will be able to read newspapers.)'
      }
    ],
    other: 'Translating it as "If only, then" seems to be a literal but poor translation.  The super literal (and IMO more clear) translation might be: "Conditioned on just/only verb/noun, thus result/statement".  さえ means: "even", "if only", "if just", "as long as", the only thing needed".'
  },{
    grammar_point: '〜はず',
    spec: '〜はず',
    alt_def: '',
    meaning: '"Supposed to 〜"; "Expected to 〜"',
    use: {
      text: 'Expresses one\'s conjecture with some certainty that some thing is expected/suposed to be.  Can be used with nounの、(adjな）な、verp(plain), (adjい）い。Is usually followed by だ or です。 Can also be used with plain negations of the above options.',
      species: [
        {
          jap: 'nounの はず',
          eng: '：supposed to be noun'
        },{
          jap: '(adjな)な はず',
          eng: '：supposed to be adj'
        },{
          jap: '(adjい)い はず',
          eng: '：supposed to be adj'
        },{
          jap: 'verb(plain) はず',
          eng: '：supposed to verb'
        },{
          jap: '<b>Extra Examples:</b>',
          eng: ''
        },{
          jap: 'verb(pot.)(plain) はず：',
          eng: 'supposed to be able to verb'
        },{
          jap: '〜[neg.] はず：',
          eng: 'NOT supposed to be 〜'
        }
      ]
    },
    example: [
      {
        sentence: {
          ante: '『今日は日曜日だから、銀行は休み',
          highlight: 'のはず',
          post: 'です。』'
        },
        translation: 'It\'s Sunday today, and so banks are supposed to be closed.'
      },{
        sentence: {
          ante: '『日本に住んでいだから日本語が上手',
          highlight: 'なはず',
          post: 'です。』'
        },
        translation: 'His Japanese should be good since he lived in Japan.'
      },{
        sentence: {
          ante: '『中古（ちゅうこ）なら安い',
          highlight: 'はず',
          post: 'です。』'
        },
        translation: 'If it\'s a used one, it should be cheap.'
      },{
        sentence: {
          ante: '『日本語の三年になれば、日本語の新聞が読める',
          highlight: 'はず',
          post: 'です。』'
        },
        translation: 'Students who are in Third Year Japanese should be able to read newspapers in Japanese.'
      }
    ],
    other: '...'
  },{
    grammar_point: '〜みたい',
    spec: '〜みたい',
    alt_def: '',
    meaning: '"Seems", "Appears to be", "Looks like", "Is like"',
    use: {
      text: 'Colloquial form of ようだ (ie: seems to be, based on specific evidence).  Unlike ようだ、みたい follows bare nouns and (adjな) stem.  However!, it does follow plain forms of (adjい) and verbs.  Can follow negations, in which case the 〜ない retains the い as with (adjい).',
      species: [
        {
          jap: 'noun みたい',
          eng: '：appears to be noun'
        },{
          jap: '(adjな）みたい',
          eng: '：appears to be adj'
        },{
          jap: '(adjい)い みたい',
          eng: '：appears to be adj'
        },{
          jap: 'verb(plain) みたい',
          eng: '：appears to verb'
        }
      ],
    },
    example: [
      {
        sentence: {
          ante: '『まるで夢',
          highlight: 'みたい',
          post: '。』'
        },
        translation: 'It\'s like a dream.  (lit. It seems just like a dream.)'
      },{
        sentence: {
          ante: '『来年結婚する',
          highlight: 'みたい',
          post: 'よ。』'
        },
        translation: 'It looks like he/she is going to get married next year.'
      }
    ],
    other: '〜みたい、using the same grammatical formations, ALSO means "like", "sort of", "resembling", or "similar to".  So I guess use your best judgement.'
  },{
    grammar_point: '(noun)として',
    spec: '(noun)として',
    alt_def: '',
    meaning: '"As a 〜".',
    use: {
      text: 'Describes another noun, which noun is "as" the noun used in this construction.',
      species: [],
    },
    example: [
      {
        sentence: {
          ante: '『英語の教師',
          highlight: 'として',
          post: '日本へ行くアメリカ人は、年々増えているようだ。』'
        },
        translation: 'It seems that the number of Americans who go to Japan as English teachers is increasing every year.'
      },{
        sentence: {
          ante: '『チョムスキーは、言語学者',
          highlight: 'として',
          post: 'よりも政治運動（せいじうんどう）で有名かもしれない。』'
        },
        translation: 'Chomsky is perhaps more famous for his political activities than as a linguist. (wat)'
      }
    ],
    other: 'In example sentence 1, it seems like in Japanese that 増える "to increase" does not need to refer specifically to a number, as it does in English.  Instead, can it refer to "people" in general and one can infer that one means "number of people" from context?  SAT questions come back to haunt me...'
  },{
    grammar_point: '(noun)ため（に）',
    spec: '(noun)ため（に）',
    alt_def: '',
    meaning: '"Because (of) 〜"; "Due to 〜".',
    use: {
      text: 'Indicates the reason or cause for the following clause.  Follows nounの、(adjな）な、(adjい）い、and verb(plain).  に is an optional particle and usually omitted.  Can be used with negations.  Is a formal expression and usually used in writting or formal situations.',
      species: [
        {
          jap: 'nounの ため（に）',
          eng: '：because of noun'
        },{
          jap: '(adjな)な ため（に）',
          eng: '：due to being adj'
        },{
          jap: '(adjい)い ため（に）',
          eng: '：due to being adj'
        },{
          jap: 'verb(plain) ため（に）',
          eng: '：because of doing verb'
        },{
          jap: '<b>(cf. Chapter 5)</b>',
          eng: ''
        },{
          jap: '',
          eng: '〜ため（に）also indicates a purpose for an action.  Usually, the correct translation partly depends on context.  However, if the verb follows an adjective,a verb which indicates state such as 分かる、できる、ある、etc., or verb(past) it ALWAYS indicates a reason.'
        },{
          jap: '『日本語を<u>勉強する</u><b>ため</b>、日本行った。』',
          eng: 'He went to Japan in order to study Japanese.'
        },{
          jap: '『日本語を<u>勉強した</u><b>ため</b>、日本行った。』',
          eng: 'He went to Japan because he studied Japanese.'
        }
      ],
    },
    example: [
      {
        sentence: {
          ante: '『大雪',
          highlight: 'のため',
          post: '、フライトがキャンセルされた。』'
        },
        translation: 'The flight was cancelled because of heavy snow.'
      },{
        sentence: {
          ante: '『漢字は複雑',
          highlight: 'なため',
          post: '、覚えるのに時間がかかる。』'
        },
        translation: 'Kanji take a long time because they are complex.'
      },{
        sentence: {
          ante: '『英語のできる通訳（つうやく）がいない',
          highlight: 'ため',
          post: '、幕府（ばくふ）は大変不便に感じていた。』'
        },
        translation: 'Because there was no interpreter who could handle English, the Shogunate was greatly inconvenienced.'
      }
    ],
    other: 'In example sentence 1, it seems like in Japanese that 増える "to increase" does not need to refer specifically to a number, as it does in English.  Instead, can it refer to "people" in general and one can infer that one means "number of people" from context?  SAT questions come back to haunt me...'
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
  other: '...'
}
*/














