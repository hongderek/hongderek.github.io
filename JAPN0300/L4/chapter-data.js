"use strict";

var local_course_name = '日本語３００';
var local_course_path = 'JAPN0300'
var local_chap_name = '第４課';
var local_chap_path = 'L4';

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
  },{
    topic: 'らしい',
    spec: 'らしい',
    subtopic_list: [
      {
        subtopic: '',
        desc: ['Can be used to express hearsay that one has heard.  But can also be followed by a noun to mean "A typical（＿らしい）noun".  ie: 冬らしい日：a typical winter day.  Compare:']
      },{
        subtopic: '夏らしい日です。',
        desc: ['It is a summery day.  (ie: It is a typical summer day (and we\'re in summer.))']
      },{
        subtopic: '夏のような日です。',
        desc: ['It is a summer-like day.  (ie: It is like a summer day (and it is not summer.))']
      }
    ]
  },{
    topic: '々',
    spec: '々',
    subtopic_list: [
      {
        subtopic: 'ｔｈｅ　ｔｗｉｃｅｎｅｒ。',
        desc: ['']
      }
    ]
  },{
    topic: '〜んです',
    spec: '〜んです',
    subtopic_list: [
      {
        subtopic: 'Because 〜んです is a shortening of 〜のです ("because", "it is the case that"), you cannot use the sentence conjunction 〜から ("because", "since") with a sentence ending in 〜んです',
        desc: 
          [
            '◯　〜んですけど',
            '◯　〜んですが',
            '△　〜んですのに',
            '×　〜んですから'
          ]
      }
    ]
  },{
    topic: 'つれて行く　vs　もっていく',
    spec: 'つれて行く　vs　もっていく',
    subtopic_list: [
      {
        subtopic: '"To bring" for living/non-living things.',
        desc: 
          [
            'つれていく：for living things',
            'もっていく：for non-living things'
          ]
      }
    ]
  }
];

var chap_grammar_list = [
  {
    grammar_point: '別に（〜ない）',
    spec: '別に（〜ない）',
    alt_def: 'べつに〜ない',
    meaning: '（「別」べつ：A distinction, difference）"Not particularly"',
    use: {
      text: 'Adverb.  Usually followed by a negative form of a verb.  Means that something is not particularly the case.',
      species: []
    },
    example: [
      {
        sentence: {
          ante: '『いいえ、',
          highlight: '別に',
          post: '何でも<b>ありません</b>。』'
        },
        translation: 'No, there is nothing particularly wrong.'
      },{
        sentence: {
          ante: '『ううん、',
          highlight: '別に',
          post: '。』'
        },
        translation: 'No, not particularly.'
      }
    ],
    other: '別 by itself means distinction, different, particular, seperate.'
  },{
    grammar_point: '〜かな',
    spec: '〜かな',
    alt_def: '',
    meaning: '"I wonder..." (Emphatic)',
    use: {
      text: '〜かな is the colloquial form of 〜でしょうか meaning "I wonder".  Also used as 〜かなと思う to provide more emphasis.',
      species: [
        {
          jap: '〜かな',
          eng: '：I wonder'
        },{
          jap: '〜かなぁぁ',
          eng: '：I wonder...'
        },{
          jap: '〜かなと思う',
          eng: '：I WONDER'
        },{
          jap: '〜かなと思っていた',
          eng: '：I\'ve been ＷＯＮＤＥＲＩＮＧ'
        }
      ]
    },
    example: [
      {
        sentence: {
          ante: '『人口はどのぐらい',
          highlight: 'かな',
          post: '。』'
        },
        translation: 'What is the population, I wonder...'
      },{
        sentence: {
          ante: '『マディソンてどんな町',
          highlight: 'かなと思っていた',
          post: 'んです。』'
        },
        translation: 'I\'ve been wondering what kind of town Madison is..'
      }
    ],
    other: 'なぁ was also put in the grammar notes as a "casual emphatic sentence ending".'
  },{
    grammar_point: 'たしか',
    spec: 'たしか',
    alt_def: '',
    meaning: '"If I remember correctly"; "If I am not mistaken"',
    use: {
      text: 'Usually put at the beginning of the clause that is unsure.  Injects the implication of uncertainty that the speaker has.  NOT to be confused with たしかに：certainly.',
      species: [
        {
          jap: 'たしか',
          eng: '：If I remember correctly,'
        },{
          jap: 'たしかに',
          eng: '：Certainly,'
        }
      ]
    },
    example: [
      {
        sentence: {
          ante: '『僕の好きな食べ物は、',
          highlight: 'たしか',
          post: 'チーズです。』'
        },
        translation: 'If I remember correctly, my favorite food is cheese.'
      }
    ],
    other: '...'
  },{
    grammar_point: '（X）は（Y）で有名だ',
    spec: '（X）は（Y）で有名だ',
    alt_def: 'XはYでゆうめいだ',
    meaning: '"X is famous for Y"',
    use: {
      text: 'Y can be a noun or verb phrase (ie: sentence（の・こと）',
      species: []
    },
    example: [
      {
        sentence: {
          ante: '『京都<b>は</b>、古いお寺',
          highlight: 'で有名な',
          post: '町です。』'
        },
        translation: 'Kyōto is famous for its old temples.'
      },{
        sentence: {
          ante: '『日本人<b>は</b>、よくはたらくの',
          highlight: 'で有名です',
          post: '。』'
        },
        translation: 'The Japanese people are famous for working hard.'
      }
    ],
    other: '...'
  },{
    grammar_point: '(noun)にする',
    spec: '(noun)にする',
    alt_def: '',
    meaning: '"To decide on noun"; "To have/take noun"',
    use: {
      text: 'Used when one decides on one choice of many.  Like an item on a menu, or date for an event.',
      species: []
    },
    example: [
      {
        sentence: {
          ante: '『私は',
          highlight: 'すきやきにします',
          post: '。』'
        },
        translation: 'I will have the sukiyaki.'
      }
    ],
    other: '...'
  },{
    grammar_point: '〜ようだ',
    spec: '〜ようだ',
    alt_def: '',
    meaning: '"It seems like 〜"; "It looks like 〜" (Based on physical evidence)',
    use: {
      text: 'Used when there is good evidence to support what seems.  Can be used with noun/adj/verb',
      species: [
        {
          jap: '(noun)の ようだ',
          eng: ''
        },{
          jap: '(adjい)い ようだ',
          eng: ''
        },{
          jap: '(adjな)な ようだ',
          eng: ''
        },{
          jap: 'verb(plain) ようだ',
          eng: ''
        }
      ]
    },
    example: [
      {
        sentence: {
          ante: '『日本人は白い車が',
          highlight: '好きなようです',
          post: '。』'
        },
        translation: 'It seems Japanese people like white cars.'
      }
    ],
    other: 'よう is a noun, this helps with knowing how to conjugate preceeding words.  ようだ differs from そうだ in that そう is based on one\'s own conjecture, while よう is based on physical or more concrete evidence.'
  },{
    grammar_point: '(noun)のように',
    spec: '(noun)のように',
    alt_def: '',
    meaning: '"Like"; "As if it were noun"',
    use: {
      text: 'An adverbial construction of よう。 (lit. "noun-likeningly")',
      species: []
    },
    example: [
      {
        sentence: {
          ante: '『時々',
          highlight: '夏のように',
          post: '暑い日があります。』'
        },
        translation: 'Sometimes there hot days as if it were summer.'
      }
    ],
    other: '...'
  },{
    grammar_point: '（nounA）のような（nounB）',
    spec: '（nounA）のような（nounB）',
    alt_def: '',
    meaning: '"(noun B) looks/is like (noun A)"',
    use: {
      text: 'In this way, よう connects two nouns.  This is like らしい connecting two nouns.',
      species: []
    },
    example: [
      {
        sentence: {
          ante: '『夏',
          highlight: 'のような',
          post: '日です。』'
        },
        translation: 'It\'s a summer-like day. (ie: it\'s hot like summer although it is not summer)'
      }
    ],
    other: '...'
  },{
    grammar_point: 'さえ',
    spec: 'さえ',
    alt_def: '',
    meaning: '"Even" (Unexpected)',
    use: {
      text: 'Is a particle which emphasizes the case which is unexpected.  Acts with mostly the same meaning as in English.  Usually replaces the particle, but particles can remain as ＿さえ。  Conjugation as such:',
      species: [
        {
          jap: '(noun) さえ',
          eng: '：even noun'
        },{
          jap: 'verb(の・こと) さえ',
          eng: '：even nominalized-verb'
        }
      ]
    },
    example: [
      {
        sentence: {
          ante: '『私は',
          highlight: '寝る時間さえ',
          post: 'ありません。』'
        },
        translation: 'I don\'t even have time to sleep.'
      }
    ],
    other: 'Similar to (noun)でも which also means "even noun".  The difference is unclear, but it seems that merely でも highlights an example.'
  },{
    grammar_point: 'いつのまにか',
    spec: 'いつのまにか',
    alt_def: '',
    meaning: '"Before one knows/realizes it"',
    use: {
      text: 'A saying/phrasing.  Used before the phrase which is what is before one realizes.',
      species: []
    },
    example: [
      {
        sentence: {
          ante: '『お金は',
          highlight: 'いつのまにか',
          post: 'なくなってしまいます。』'
        },
        translation: 'Money is gone before you know it.'
      }
    ],
    other: '...'
  },{
    grammar_point: '〜になれる',
    spec: '〜になれる',
    alt_def: '',
    meaning: '"To be used to"; "To be accustomed to"',
    use: {
      text: 'Follows a noun directly or a sentenceの。',
      species: []
    },
    example: [
      {
        sentence: {
          ante: '『日本の生活',
          highlight: 'になれて',
          post: 'きました。』'
        },
        translation: 'Money is gone before you know it.'
      }
    ],
    other: '...'
  },{
    grammar_point: 'verb(て)(くる・いく)',
    spec: 'verb(て)(くる・いく)',
    alt_def: '',
    meaning: '"A change/process/transition has been taking place up until now" (くる); "A change/process/transition will take place from now own" (いく)',
    use: {
      text: 'くる and いく are kana forms of 来る and 行く respectively.  In this form, the verbs are usually written with kana alone.  くる is usually conjugated in the past (to convey the meaning of "has come to be").',
      species: [
        {
          jap: 'verbて くる',
          eng: '：a change has been taking place up until now.'
        },{
          jap: 'verbて いく',
          eng: '：a change will take place from now on.'
        },{
          jap: 'verbて きた',
          eng: '：a change has taken place (has come).'
        }
      ]
    },
    example: [
      {
        sentence: {
          ante: '『私たちの生活は、どんどん',
          highlight: '変わっていく',
          post: 'でしょう。』'
        },
        translation: 'Our life style will continue to change rapidly.'
      }
    ],
    other: 'Seems to usually be used with verbs of change or transition (変わる、減る、増える、なる、etc.)'
  },{
    grammar_point: '〜わけではない',
    spec: '〜わけではない',
    alt_def: '',
    meaning: '"It does not necessarily mean that 〜"; "It does not follow that 〜"',
    use: {
      text: 'This construction negates what one would conclude from previously mentioned statements or situations.  Is preceeded by words of the plain form.',
      species: []
    },
    example: [
      {
        sentence: {
          ante: '『あまり英語を話しませんが、英語ができない',
          highlight: 'わけではありません',
          post: '。』'
        },
        translation: 'I don\'t speak English much, but that does not mean that I am unable to speak it.'
      }
    ],
    other: 'Similar in meaning and use as 必ずしも〜というわけではない of the previous chapter.'
  },{
    grammar_point: 'verb[neg.]で済む',
    spec: 'verb[neg.]で済む',
    alt_def: 'verb[neg.]ですむ、ないですむ',
    meaning: '（「済む」す(む)：To finish）"One manages to get by without doing verb"; "One doesn\'t even have to verb"',
    use: {
      text: 'verbないで is the negative て form.',
      species: []
    },
    example: [
      {
        sentence: {
          ante: '『バスがすぐ来たので、あまり',
          highlight: '待たないで済みました',
          post: '。』'
        },
        translation: 'The bus came right away, so I did not have to wait long. (lit. I managed to not wait long, I didn\'t even wait long)'
      }
    ],
    other: '...'
  },{
    grammar_point: '〜ずつ',
    spec: '〜ずつ',
    alt_def: '',
    meaning: '"Each"; "At a time"',
    use: {
      text: 'Follows a number or number + counter or limited quanitity (like 少し).  Indicates that a quanitity is equally distributed among two or more objects, time, etc.',
      species: []
    },
    example: [
      {
        sentence: {
          ante: '『一人一枚',
          highlight: 'ずつ',
          post: '取ってください。』'
        },
        translation: 'Please take one sheet each.'
      },{
        sentence: {
          ante: '『毎日漢字を五つ',
          highlight: 'ずつ',
          post: '覚えることにしています。』'
        },
        translation: 'I memorize five kanji every day.'
      }
    ],
    other: '...'
  },{
    grammar_point: '（verb/adj)(stem）すぎる',
    spec: '（verb/adj)(stem）すぎる',
    alt_def: 'verb(stem)すぎる、adj(stem)すぎる',
    meaning: '"Too adj"; "Do verb too much"',
    use: {
      text: 'Conjugation as such:',
      species: [
        {
          jap: 'verb(stem) すぎる',
          eng: '：(eg: 食べすぎる)'
        },{
          jap: '(adjい) すぎる',
          eng: '：(eg: 高すぎる)'
        },{
          jap: '(adjな) すぎる',
          eng: '：(eg: 有名すぎる)'
        },{
          jap: 'しすぎる',
          eng: '：(from する)'
        }
      ]
    },
    example: [
      {
        sentence: {
          ante: '『',
          highlight: '飲みすぎる',
          post: 'と、頭が痛くなります。』'
        },
        translation: 'If you drink too much, you will get a head ache.'
      }
    ],
    other: '...'
  },{
    grammar_point: '(# + counter)以上',
    spec: '(# + counter)以上',
    alt_def: '〜いじょう、以下、いか',
    meaning: '（「以上」いじょう：Not less than; More than）"More than (some quanitity)"',
    use: {
      text: 'Preceeded by some number and counter.  If the counter is generic (ie: つ、本、枚), a noun can follow to further specify what is "more than".  As a whole, the phrase indicates some quanitity of which there is more than.  Sort of like a particle?  Specifically, 以上 means "more than and including #" meaning there could be some number of things or more.',
      species: []
    },
    example: [
      {
        sentence: {
          ante: '『一時間に１００枚',
          highlight: '以上',
          post: 'チーズを食べると大変だと思います。』'
        },
        translation: 'I think it will be difficult to eat 100 slices of cheese in an hour.'
      }
    ],
    other: '「以下」（いか）means "Less than 〜" as in "up to and including #".'
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














