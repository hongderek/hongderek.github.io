"use strict";

const local_course_name = '日本語３００';
const local_course_path = 'JAPN0300'
const local_chap_name = '第４課';

/**
{
  kanji: '',
  reading: '',
  meaning: '',
  (opt)kaku: 'hai' or ''
}
*/
const chap_kanji_str = 'kanji,reading,meaning,kaku\n家族,かぞく,family,hai\n背が高い,せ（が）たか（い）,tall (ie: person\'s height) (が：topic particle),\nお兄さん,（お）にい（さん）,older brother (other),\n兄,あに,older brother (own),\nお姉さん,（お）ねえ（さん）,older sister(other),\n姉,あね,older sister (own),\n妹,いもうと,younger sister (other/own),\n弟,おとうと,younger brother (other/own),\nお父さん,（お）とう（さん）,father (other),\n父,ちち,father (own),\nお母さん,（お）かあ（さん）,mother (other),\n母,はは,mother (own,\n州都,しゅうと,state capital,hai\n人口,じんこう,population,hai\n有名（な）,ゆうめい（な）,famous,\n二番目,にばんめ,second (cf. 一番目、二番目、など),\n引っ越す,ひっこ（す）,to move (ie: residence),\n春,はる,spring,hai\n夏,なつ,summer,hai\n秋,あき,autumn,hai\n冬,ふゆ,winter,hai\n許可,きょか,permission,hai\n求める,もと（める）,to request; to ask for,\n両親,りょうしん,parents,\n借りる,か（りる）,to borrow,hai\n偶然,ぐうぜん,by chance,\n時々,ときどき,sometimes (々：repeat the preceeding kanji),\n長い,なが（い）,long,\n面白い,おもしろ（い）,interesting,\n経験,けいけん,experience,\n今学期,こんがっき,this semester,hai\n先学期,せんがっき,last semester,\n役に立つ,やく（に）た（つ）,to be useful,\n打つ,う（つ）,"to type (on keyboard, phone); to hit",\n熱心に,ねっしん（に）,intensely; eagerly,\n紅葉,こうよう,red leaves (fall leaves),\n生活,せいかつ,life; living,\n料理,りょうり,cooking,\n助かる,たす（かる）,to be saved,hai\n体重,たいじゅう,weight,hai\n変わる,か（わる）,to change (intransitive),\n日本史,にほんし,Japanese history,hai\n日本経済,にほんけいざい,Japanese economy,hai\n仏教,ぶっきょう,Buddhism,\n取る,と（る）,to take (a class); to grab,\n一回,いっかい,one time,hai\n足りる,た（りる）,to be sufficient,hai\n体,からだ,body,\n新聞記事,しんぶんきじ,newspaper article,\n覚える,おぼ（える）,to memorize,\n写真,しゃしん,photograph,\n財布,さいふ,wallet,\n珍しい,めずら（しい）,rare,\n間違える,まちが（える）,to make a mistake,\n湖,みずうみ,lake,\n・,すばらしい,wonderful; terrific,\n遠い,とお（い）,far,\n駅,えき,train station,\n自転車,じてんしゃ,bicycle,\n夕食,ゆうしょく,dinner,\n本当に,ほんとう（に）,"really, truly",\n・,たつ,(time) passes,\n速い,はや（い）,fast (cf. 早い：fast),\n・,だいぶ,"fairly well, to a large extent, pretty much",\n・,ひどい,terrible; awful,\n乗る,の（る）,to ride (intransitive 〜に to ride on ~),';

const chap_note_list = [
  {
    topic: 'そう・らしい・よう',
    spec: 'そう・らしい・よう',
    subtopic_list: [
      {
        subtopic: '',
        desc: 'そう：　hands to eyes'
      },{
        subtopic: '',
        desc: 'らしい：hands to ears'
      },{
        subtopic: '',
        desc: 'よう：　hands to read'
      }
    ]
  },{
    topic: 'らしい',
    spec: 'らしい',
    subtopic_list: [
      {
        subtopic: '',
        desc: 'Can be used to express hearsay that one has heard.  But can also be followed by a noun to mean "A typical（＿らしい）noun".  ie: 冬らしい日：a typical winter day.  Compare:'
      },{
        subtopic: '夏らしい日です。',
        desc: 'It is a summery day.  (ie: It is a typical summer day (and we\'re in summer.))'
      },{
        subtopic: '夏のような日です。',
        desc: 'It is a summer-like day.  (ie: It is like a summer day (and it is not summer.))'
      }
    ]
  },{
    topic: '々',
    spec: '々',
    subtopic_list: [
      {
        subtopic: 'ｔｈｅ　ｔｗｉｃｅｎｅｒ。',
        desc: ''
      }
    ]
  }
];

const chap_grammar_list = [
  {
    grammar_point: '別に（〜ない）',
    spec: '別に（〜ない）',
    meaning: '（漢字：べつ（に））Not particularly.',
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
    meaning: '"I wonder."  Emphatic.',
    use: {
      text: '〜かな is the colloquial form of 〜でしょうか meaning "I wonder".  Also used as 〜かなと思う to provide more emphasis.',
      species: [
        {
          jap: '〜かな：',
          eng: 'I wonder'
        },{
          jap: '〜かなぁぁ：',
          eng: 'I wonder...'
        },{
          jap: '〜かなと思う：',
          eng: 'I WONDER'
        },{
          jap: '〜かなと思っていた：',
          eng: 'I\'ve been ＷＯＮＤＥＲＩＮＧ'
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
    meaning: 'If I remember correctly, if I am not mistaken.',
    use: {
      text: 'Usually put at the beginning of the clause that is unsure.  Injects the implication of uncertainty that the speaker has.  NOT to be confused with たしかに：certainly.',
      species: [
        {
          jap: 'たしか：　',
          eng: 'If I remember correctly,'
        },{
          jap: 'たしかに：',
          eng: 'Certainly,'
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
    meaning: 'X is famous for Y.',
    use: {
      text: 'Y can be a noun or noun phrase (ie: sentence（の・こと）',
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
    grammar_point: 'nounにする',
    spec: 'nounにする',
    meaning: 'To decide on noun.  To have/take noun.',
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
    meaning: 'It seems like 〜。 It looks like 〜。 (Based on physical evidence)',
    use: {
      text: 'Used when there is good evidence to support what seems.  Can be used with noun/adj/verb',
      species: [
        {
          jap: 'nounのようだ',
          eng: ''
        },{
          jap: '（adjい）いようだ',
          eng: ''
        },{
          jap: '（adjな）なようだ',
          eng: ''
        },{
          jap: 'verb(plain)ようだ',
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
    grammar_point: 'nounのように',
    spec: 'nounのように',
    meaning: 'Like, as if it were noun.',
    use: {
      text: 'An adverbial construction of よう。 lit. "noun likeningly".  ',
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
    meaning: 'Noun B looks/is like noun A.',
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
    meaning: 'Even',
    use: {
      text: 'Is a particle which emphasizes the case which is unexpected.  Acts with mostly the same meaning as in English.  Usually replaces the particle, but particles can remain as ＿さえ。  Conjugation as such:',
      species: [
        {
          jap: 'nounさえ：',
          eng: 'even noun'
        },{
          jap: 'verb（の・こと）さえ：',
          eng: 'even nominalized-verb'
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
    other: 'Similar to nounでも which also means "even noun".  The difference is unclear, but it seems that merely でも highlights an example.'
  },{
    grammar_point: 'いつのまにか',
    spec: 'いつのまにか',
    meaning: 'Before one knows/realizes it',
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
    meaning: 'to be used to; to be accustomed to',
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
    grammar_point: '（verbて）くる／いく',
    spec: '（verbて）くる／いく',
    meaning: 'A change/process/transition has been taking place up until now (くる）。  A change/process/transition will take place from now own （いく）。',
    use: {
      text: 'くる and いく are kana forms of 来る and 行く respectively.  In this form, the verbs are usually written with kana alone.  くる is usually conjugated in the past (to convey the meaning of "has come to be").',
      species: [
        {
          jap: 'verbてくる：',
          eng: 'a change has been taking place up until now.'
        },{
          jap: 'verbていく：',
          eng: 'a change will take place from now on.'
        },{
          jap: 'verbてきた：',
          eng: 'a change has taken place (has come).'
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
    meaning: 'It does not necessarily mean that...; it does not follow that...',
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
    grammar_point: 'verbないで済む',
    spec: 'verbないで済む',
    meaning: '（漢字：す（む）：to finish）One manages to get by without doing verb.  One "doesn\'t even have to verb.',
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
    meaning: 'Each; at a time.',
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
    grammar_point: '（verb/adj)（stem）すぎる',
    spec: '（verb/adj)（stem）すぎる',
    meaning: 'Too adj.  Do verb too much.',
    use: {
      text: 'Conjugation as such:',
      species: [
        {
          jap: 'verb(stem)すぎる',
          eng: '（eg: 食べすぎる)'
        },{
          jap: '（adjい）すぎる',
          eng: '（eg: 高すぎる)'
        },{
          jap: '（adjな）有名すぎる',
          eng: '（eg: 有名すぎる)'
        },{
          jap: 'しすぎる',
          eng: '　from する'
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
    grammar_point: '〜以上',
    spec: '〜以上',
    meaning: '（漢字：いじょう）More than 〜。(some quanitity)',
    use: {
      text: 'Preceeded by some number and counter.  As a whole, the phrase indicates some quanitity of which there is more than.',
      species: []
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














