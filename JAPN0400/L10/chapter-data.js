"use strict";

var local_course_name = '日本語４００';
var local_course_path = 'JAPN0400'
var local_chap_name = '第１０課';
var local_chap_path = 'L10';

/**
{
  kanji: '',
  reading: '',
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
    grammar_point: '(分数 (fractions))',
    spec: '分数 (fractions)',
    alt_def: 'ぶんすう、ぶんの',
    meaning: '「分数」ぶんすう',
    use: {
      text: 'A fraction is expressed in Japanese as「＃ 分の ＃」。「分」is read as ぶん。 In Japanese, the denominator becomes before the numerator, as in「denominator 分の numerator」or (X / Y) =「Y 分の X」',
      species: [
        {
          jap: '二分の一',
          eng: ' = 1/2'
        },{
          jap: '五分の三',
          eng: ' = 3/5'
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
        translation: '...'
      }
    ],
    other: '...'
  },{
    grammar_point: '(S1)ほど(S2)',
    spec: '(S1)ほど(S2)',
    alt_def: '',
    meaning: '"It is S2, to the extent that S1"; "It is so very S2 that S1".',
    use: {
      text: 'ほど is a sentence connecter that uses S2 to describe S1.  S1 is generally ends in a verb(plain)[pres.].  Can also be rearranged to「S2て、S1ほどです。」。ほど means "extent", "approximately", "degree".',
      species: [
        {
          jap: 'S1 ほど S2',
          eng: '：To the extent that S1, such is S2.'
        },{
          jap: 'S2て、S1 ほどです',
          eng: '：It is S2, to the extent that S1.'
        }
      ]
    },
    example: [
      {
        sentence: {
          ante: '『ラーメンは、',
          highlight: '涙が出るほど',
          post: 'からいことがある。』'
        },
        translation: 'Ramen can be so hot that it brings a tear to your eyes. (lit. as for ramen, so much so that you cry, such can it be spicy).'
      },{
        sentence: {
          ante: '『ラーメンはからくて',
          highlight: '涙が出るほどです',
          post: '。』'
        },
        translation: '(lit. Ramen is spicy to the extent that you cry).'
      }
    ],
    other: 'I assume that「S1 ほど S2」, which is more difficult to translate into English, is the more natural sounding Japanese choice.  Also, ほど is sort of like Latin "tantum".  It was so ___ that ___!'
  },{
    grammar_point: '(Q word)よりも',
    spec: '(Q word)よりも',
    alt_def: '',
    meaning: '"More than any(Q word)".',
    use: {
      text: '(Q word) can be something like 何、どこ、etc.  何 can be pronounced as「なに」or「なん」',
      species: [
        {
          jap: '(eg) 何よりも',
          eng: '：More than anything'
        }
      ]
    },
    example: [
      {
        sentence: {
          ante: '『今、',
          highlight: '何よりも',
          post: 'チーズが欲しいですねえ。』'
        },
        translation: 'Right now, I want cheese more than anything.'
      },{
        sentence: {
          ante: '『',
          highlight: '何よりも',
          post: '健康（けんこう）が一番です。』'
        },
        translation: 'Health is the most important thing in the world.'
      }
    ],
    other: '...'
  },{
    grammar_point: '（Xは）(Y)に限る',
    spec: '（Xは）(Y)に限る',
    alt_def: 'にかぎる',
    meaning: '（「限る」かぎ(る)）"As for X, Y is the best thing to do"; "As for X, there is nothing better than Y".',
    use: {
      text: 'Y can be a noun or verb(plain)[pres.].  X marks the thing for which nothing is better than Y, and is optional.',
      species: [
        {
          jap: '(noun)に 限る',
          eng: ''
        },{
          jap: 'verb(plain)[pres.]に 限る',
          eng: ''
        }
      ]
    },
    example: [
      {
        sentence: {
          ante: '『暑い<b>日には</b>冷たいビールを',
          highlight: '飲むに限る',
          post: '。』'
        },
        translation: 'Nothing is better than drinking cold beer on a hot day.'
      },{
        sentence: {
          ante: '『古い都を訪ねたければ',
          highlight: '京都に限ります',
          post: '。』'
        },
        translation: 'If you want to visit an old city, Kyōto is the best place.'
      }
    ],
    other: '限る means to restrict, to limit, to confine as a transitive verb.  It can also be an intransitive verb meaning to be restricted, to be limited, to be confined.'
  },{
    grammar_point: '〜まま',
    spec: '〜まま',
    alt_def: '',
    meaning: '"Unchanged"; "As it is"; "Still being in the state of 〜"',
    use: {
      text: '〜まま indicates that some condition/state is unchanged.  It can be attached to nouns, adjectives, and verbs.  When 〜まま modifies a noun, の follows 〜まま (ie: 〜ままの(noun)).  Can also be used with negative forms (〜ないまま).  Can also be used with demonstrative nouns (この、その、あの).  Usage of 〜まま seems to imply that there is a state that was acheived previously and that such state was/is maintained.  As such, the progressive form of verbs (〜ている) is not used since because it would be awkward (I think...)',
      species: [
        {
          jap: '(noun)のまま',
          eng: '：As noun is'
        },{
          jap: '(adjい)いまま',
          eng: '：As adj is (NOTE: adjい MUST be in plain, present tense)'
        },{
          jap: '〜ないまま',
          eng: '：As 〜 is not (NOTE: the negation 〜ない MUST be in plain, present tense)'
        },{
          jap: '(adjな)なまま',
          eng: '：As adj is'
        },{
          jap: 'verb(plain)[past]まま',
          eng: '：As verb is (NOTE: verb MUST be in plain, past tense.  Verb should NOT be progressive/stative 〜て form)'
        }
      ]
    },
    example: [
      {
        sentence: {
          ante: '『京都には',
          highlight: '昔のまま',
          post: 'のお寺や神社が多い。』'
        },
        translation: 'There are many old temples and shrines in Kyōto. (lit. There are many temples and shrines that are unchanged as they were in the olden days, in Kyōto.)'
      },{
        sentence: {
          ante: '『日本酒（しゅ）は',
          highlight: '冷たいまま',
          post: '飲んでも美味しい。』'
        },
        translation: 'Japanese rice wine even tastes good cold. (lit. Japanese rice wine tastes good even if it is drunk being cold.)'
      },{
        sentence: {
          ante: '『窓（まど）',
          highlight: '開けたまま',
          post: '寝ると、風邪（かぜ）をひく。』'
        },
        translation: 'If you go to sleep with the window open, you will catch a cold. (lit. If you go to sleep with an opened window still in the state of being so, you will catch a cold.)'
      },{
        sentence: {
          ante: '『',
          highlight: 'このまま',
          post: 'よろしいですか。』'
        },
        translation: 'Is it alright like this (being unchanged)?'
      },{
        sentence: {
          ante: '『彼女に別れ（わか）を',
          highlight: '言わないまま',
          post: '日本に来てしまった。』'
        },
        translation: 'I came to Japan still not having said goodbye to my girlfriend. (what is the difference between using this and using 〜ないで？）'
      },{
        sentence: {
          ante: '『私の本棚（ほんだな）には',
          highlight: '買ったまま',
          post: '読んでないマンガがたくさんあります。』'
        },
        translation: 'My bookshelf has many manga that are left unread. (lit. My bookshelf has many manga that are unread, bought but unchanged.)'
      }
    ],
    other: 'I think the verb(plain)[past]まま construction has the literal meaning of "unchanged with respect to being verbed in the past".  As such, the verb must be past because it references something that happened in the past while まま declares that the result of what happened is yet unchanged.  As a consequence, I think the stative 〜ている form of verbs– verb(て)(plain)[past] (〜ていたまま)– is not used because まま already implies the stative aspect of a situation.  For example, in the last example sentence, 買ったまま means "unchanged since when they were bought".  The sentence makes sense without 買ったまま、but 〜まま here emphasizes that the manga are yet unread "just as when they were bought".  Additionally, when compared to verb(stem)ながら it becomes more clear that 〜まま means "to do (main)verb IN THE STATE of doing/having done (まま)verb", whereas 〜ながら means "to do (main)verb WHILE doing (ながら)verb".  But, 〜てないまま seems to be an acceptable construction.  This probably means someting like "still being in the state of not being in the state of verb" (maybe...).'
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














