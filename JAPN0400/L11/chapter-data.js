"use strict";

var local_course_name = '日本語４００';
var local_course_path = 'JAPN0400'
var local_chap_name = '第１１課';
var local_chap_path = 'L11';


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
    grammar_point: 'verb(plain)（もん／もの）ですから',
    spec: 'verb(plain)（もん／もの）ですから',
    alt_def: 'もんですから、ものですから',
    meaning: '"Because of 〜"; "〜 happened, regretably"',
    use: {
      text: 'When verb is verb(plain)[PAST], there is a semblance of apology in the statment.  When the verb is verb(plain)[PRESENT], the speaker is giving a reason or stating something that happened with a hint of dissatisfaction, resentment, or regret.  In both cases, the speaker feels bad for what happened and in both cases the situation could not be avoided.  The past form of verbs is used for apologies.',
      species: [
        {
          jap: 'verb(plain)[past]もんですから',
          eng: '：Such verb happened, I appologize.'
        },{
          jap: 'verb(plain)[present]もんですから',
          eng: '：Such verb happened, to my dismay.'
        }
      ]
    },
    example: [
      {
        sentence: {
          ante: 'すみません。出かけようとしたところに家から電話が',
          highlight: 'かかたものですから',
          post: '。』'
        },
        translation: 'I\'m sorry.  It\'s because my parents called me just as I was about to leave the house. (Appologetic)'
      },{
        sentence: {
          ante: '『友達と街でばったり',
          highlight: '出会ったもんですから',
          post: '。』'
        },
        translation: 'It\'s because I happened to meet my friend in the city. (Appologetic)'
      },{
        sentence: {
          ante: '『このごろホストファミリーのお母さんに、よく文句',
          highlight: '言われるもんだから',
          post: '。』'
        },
        translation: '(In response to an observation that one looks sad) This morning, I was scolded by my hostfamily mom. (feels bad man)'
      }
    ],
    other: '...'
  },{
    grammar_point: '〜うちに',
    spec: '〜うちに',
    alt_def: '内に',
    meaning: '"While 〜"; "While 〜 situation holds"',
    use: {
      text: 'There are two versions of 〜うちに。 The second is explained below.  〜うちに is preceded by nouns, adjectives, and verbs in simple (る・／う／) or progressive/stative (〜ている) forms.  You should not use with past forms.  It expresses a sense of "while a certain situation holds".  うち means "inside", "within", and "while", among other things.',
      species: [
        {
          jap: '(noun)の うちに',
          eng: '：While being a noun'
        },{
          jap: '(adjい)い うちに',
          eng: '：While being adjい'
        },{
          jap: '(adjな)な うちに',
          eng: '：While being adjな'
        },{
          jap: 'verb(plain) うちに',
          eng: '：While verb is the case'
        },{
          jap: 'verb[ている](plain) うちに',
          eng: '：While verb state is the case'
        }
      ]
    },
    example: [
      {
        sentence: {
          ante: '『',
          highlight: '学生のうちに',
          post: '旅行をした方がいい。』'
        },
        translation: 'One should travel while still a student.'
      },{
        sentence: {
          ante: '『',
          highlight: '静かな（しず）うちに',
          post: '勉強をしておこう。』'
        },
        translation: 'I will get my study done while it is quiet.'
      },{
        sentence: {
          ante: '『',
          highlight: '若いうちに',
          post: '自分のしたいことをしておくといい。』'
        },
        translation: 'You should do what you want while you are still young.'
      },{
        sentence: {
          ante: '『日本に',
          highlight: 'いるうちに',
          post: '、一度富士山に登（のぼ）りたいと思います。』'
        },
        translation: 'I would like to climb Mt. Fuji while I am in Japan.'
      },{
        sentence: {
          ante: '『',
          highlight: '話しているうちに',
          post: '時間がたってしまった。』'
        },
        translation: 'Time flew by while we were talking.'
      }
    ],
    other: 'How does 〜うちに compare to 〜まま？'
  },{
    grammar_point: 'verb(plain)[neg.]うちに',
    spec: 'verb(plain)[neg.]うちに',
    alt_def: '内に',
    meaning: '"Before 〜"; "Before 〜 happens"',
    use: {
      text: 'When 〜うちに is preceded by negative verbs, it means "before 〜 happens".  This only applies to verbs in the negative case.  In particular, adjectives can be followed by なる[neg.] (ie: ならない) which is used to convey "before something becomes adj".',
      species: [
        {
          jap: 'verb(plain)[neg.] うちに',
          eng: '：Before verb happens'
        },{
          jap: '(adjい／な)（く／に）ならないうちに',
          eng: '：Before something becomes adj'
        }
      ]
    },
    example: [
      {
        sentence: {
          ante: '『ラーメンが',
          highlight: '冷たくならないうちに',
          post: '食べなさい。』'
        },
        translation: 'Please eat the ramen before it becomes cold.'
      },{
        sentence: {
          ante: '『母に',
          highlight: 'しかられないうちに',
          post: '宿題をします。』'
        },
        translation: 'I will do my homework before my mother scolds me.'
      }
    ],
    other: '...'
  },{
    grammar_point: '〜が気になる',
    spec: '〜が気になる',
    alt_def: '〜がきがなる',
    meaning: '"〜 weighs on one\'s mind"; "To be concerned about 〜"',
    use: {
      text: '〜 can be a noun or a phrase ending in a nominalized verb (ie: verbの／こと）。',
      species: [
        {
          jap: '(noun)が気になる',
          eng: '：To be concerned about noun'
        },{
          jap: '(nominalized verb)が気になる',
          eng: '：To be concerned about verb phrase'
        }
      ]
    },
    example: [
      {
        sentence: {
          ante: '『',
          highlight: '成績が気になります',
          post: '。』'
        },
        translation: 'I am worried about my grade.'
      },{
        sentence: {
          ante: '『ホームステイの学生の家族から手紙が一通（つう）も',
          highlight: '来ないのが気になるます',
          post: '。』'
        },
        translation: 'I am bothered by the fact that my host student\'s family has not even written a single letter to me.'
      }
    ],
    other: '...'
  },{
    grammar_point: 'どうしても～([pos.]/[neg.])',
    spec: 'どうしても～([pos.]/[neg.])',
    alt_def: '',
    meaning: '"By all means", "No matter what" [pos.]; "Can\'t, no matter how hard one tries" [neg.]',
    use: {
      text: 'Can be used with positive or negative predicate (ie: verbs, adj, nounだ, etc.)',
      species: [
        {
          jap: 'どうしても～[pos.]',
          eng: '：By all means, ～'
        },{
          jap: 'どうしても～[neg.]',
          eng: '：Can\'t do ～ no matter how hard one tries'
        }
      ]
    },
    example: [
      {
        sentence: {
          ante: '『',
          highlight: 'どうしても分からない',
          post: '時は、先生に聞いてください。』'
        },
        translation: 'When you don\'t understand no matter how hard you try, please ask your teacher.'
      },{
        sentence: {
          ante: '『',
          highlight: 'どうしても',
          post: '一度日本へ<b>行ってみたい</b>。』'
        },
        translation: 'I would like to go to Japan, no matter what.'
      }
    ],
    other: 'I assume that どうしても means "even if what(ever)".'
  },{
    grammar_point: 'つい',
    spec: 'つい',
    alt_def: '',
    meaning: '"Inadvertently"; "Involuntarily"',
    use: {
      text: 'つい is an adverb and can be inserted as such.  Usually precedes the phrase it modifies.',
      species: []
    },
    example: [
      {
        sentence: {
          ante: '『言ってはいけないことが',
          highlight: 'つい',
          post: '口に出ることがある。』'
        },
        translation: 'Sometimes, we accidentally say things we should not say.'
      },{
        sentence: {
          ante: '『話をしていて、',
          highlight: 'つい',
          post: '時間を忘れてしまった。』'
        },
        translation: 'I was talking and lost track of time.'
      }
    ],
    other: '...'
  },{
    grammar_point: '(noun)に気をつける',
    spec: '(noun)に気をつける',
    alt_def: 'にきをつける、に気をつけて、にきをつけて',
    meaning: '"To pay attention to ～"; "To be careful/mindful of ～"',
    use: {
      text: 'Also used as a forewarning:「（～に）気をつけてください！」',
      species: []
    },
    example: [
      {
        sentence: {
          ante: '『日本語を話すときは、',
          highlight: 'アクセントに気を付けて',
          post: '。』'
        },
        translation: 'When you speak Japanese, please be mindful of pitch patterns.'
      }
    ],
    other: '...'
  },{
    grammar_point: '（～に）verb(plain)ように（お願いする／言う／頼む／注意する）',
    spec: '（～に）verb(plain)ように（お願いする／言う／頼む／注意する）',
    alt_def: '',
    meaning: '"To request/tell/ask (someone(に)) (to do something(を))"',
    use: {
      text: 'An indirect quote of a command or request.  The person to whom the request is directed is marked with ～に。 Transitive verbs in the embedded request are marked with 〜を as usual.  Can also be used with passive forms of the "asking" verbs to mean that someone was asked to do something by someone else.',
      species: [
        {
          jap: '（～に）verb(plain)ように お願いする',
          eng: '：to request someone to do verb'
        },{
          jap: '（～に）verb(plain)ように 言う',
          eng: '：to tell someone to do verb'
        },{
          jap: '（～に）verb(plain)ように 頼む',
          eng: '：to ask someone to do verb'
        },{
          jap: '（～に）verb(plain)ように 注意する',
          eng: '：to advise someone to do verb'
        },{
          jap: '（～に）verb(plain)ように 言われる',
          eng: '：to be told to do verb (works with passives of the other verbs, too)'
        }
      ]
    },
    example: [
      {
        sentence: {
          ante: '『先生に推薦状を書いていただく',
          highlight: 'ようにお願いした',
          post: '。』'
        },
        translation: 'I asked my teacher to write a letter of recommendation.'
      },{
        sentence: {
          ante: '『お母さんにショウートパンツをはいて学校へ行かない',
          highlight: 'ように注意された',
          post: '。』'
        },
        translation: 'My mom advised me not to go to school wearing shorts.'
      },{
        sentence: {
          ante: '『夜十一時までには帰ってくる',
          highlight: 'ように言われた',
          post: '。』'
        },
        translation: 'I was told to come home by 11 at night.'
      }
    ],
    other: '（～に）verb(plain)ように言う is equivalent to a sentence with a direct quote, ie: 「verb(て）くださいと言う」、「verb(stem)なさいと言う」'
  },{
    grammar_point: 'verb(vol.)としたら',
    spec: 'verb(vol.)としたら',
    alt_def: '',
    meaning: '"When I was about to verb"',
    use: {
      text: 'Remember, verb(vol.)とする means "to try to do verb".  Also, verb[past.]ら (ie: ～たら) means "when" or "if".  Volitional formation:',
      species: [
        {
          jap: '「～る」>「～よう」',
          eng: '：verb(vol.) (る verbs)'
        },{
          jap: '「～／う／」>「～／お／う」',
          eng: '：verb(vol.) (う verbs)'
        },{
          jap: '「くる」>「こよう」',
          eng: ''
        },{
          jap: '「する」>「しよう」',
          eng: ''
        }
      ]
    },
    example: [
      {
        sentence: {
          ante: '『デパートへ',
          highlight: '行こうとしたら',
          post: '、雨が降ってきた。』'
        },
        translation: 'When I was about to leave for the department store, it began to rain.'
      },{
        sentence: {
          ante: '『電話で彼を聞いて、',
          highlight: '話そうとしたら',
          post: '、涙が出てきた。』'
        },
        translation: 'When I heard his voice and tried to talk, tears came to my eyes.'
      }
    ],
    other: '...'
  },{
    grammar_point: '（Xて、)[Y]くらいだ',
    spec: '（Xて、)[Y]くらいだ',
    alt_def: '',
    meaning: '"X, to the extent that (it\'s like/almost) Y."',
    use: {
      text: 'くらい in this instance indicate the degree or extent of a situation (like ほど).  X is just a phrase that ends with its respective て (or also で、so the book says... I think the important part is that it\'s a phrase that will be connected to Y), so X can be a noun, adj, verb, etc.  Y may be an adjective or verb.',
      species: [
        {
          jap: '（Xて、)(adjい)い くらいだ',
          eng: '：X, to the extent that it\'s (like/almost) adj'
        },{
          jap: '（Xて、)(adjな)な くらいだ',
          eng: '：X, to the extent that it\'s (like/almost) adj'
        },{
          jap: '（Xて、)(verb(plain)) くらいだ',
          eng: '：X, to the extent that it\'s (like/almost) verb'
        }
      ]
    },
    example: [
      {
        sentence: {
          ante: '『アメリカにずっとすんでいるので、英語の方が日本語より',
          highlight: '上手なくらいだ',
          post: '。』'
        },
        translation: 'He has lived America so long that his English is almost better than his Japanese.'
      },{
        sentence: {
          ante: '『ごちそうがたくさなって、全部',
          highlight: '食べられないくらいでした',
          post: '。』'
        },
        translation: 'There was so much food that we almost could not eat it all.'
      },{
        sentence: {
          ante: '『日本の人名（じんめい）は読み方がたくさなって、',
          highlight: '日本人にも',
          post: '難しいくらいです。』'
        },
        translation: 'There are so many ways of reading Japanese names that they are even difficult for Japanese people (to read).'
      },{
        sentence: {
          ante: '『この読み物は頭が',
          highlight: '痛くなるくらい',
          post: '難しいです。』'
        },
        translation: 'This reading is so diffuclt that (to the extent that) I almost gives me a headache.'
      }
    ],
    other: 'Just like ほど、くらい will act as an indiator for the extent of its preceding phrase.  Yくらい can also precede the phrase it qualifies, just as in 「YくらいX」'
  },{
    grammar_point: 'verb(plain)[past]ものだ',
    spec: 'verb(plain)[past]ものだ',
    alt_def: 'たものだ、[past]ものです、たものです',
    meaning: '"Used to verb"',
    use: {
      text: 'Expresses something one used to do in the past or to reminisce about the past.',
      species: []
    },
    example: [
      {
        sentence: {
          ante: '『子供のころは、よく弟と',
          highlight: 'けんかをしたものだ',
          post: '。』'
        },
        translation: 'When I was a kid, I used to fight with my brother a lot.'
      },{
        sentence: {
          ante: '『大学時代は、よく遊びよく',
          highlight: '勉強したものだ',
          post: '。』'
        },
        translation: 'In my college days, I used to play hard and study hard.'
      }
    ],
    other: 'NOTE: this is strictly different from ～ものですから。 There\'s probably a connection between the「もの」but I haven\'t been able to figure it out yet...'
  },{
    grammar_point: 'verb(stem)たて（の・だ）',
    spec: 'verb(stem)たて（の・だ）',
    alt_def: '',
    meaning: '"Something was <i>just</i> done"; "Freshly ～"; "Newly ～".',
    use: {
      text: 'Attaches to a limited number of verbs.  When used to modify a noun, is followed by の。 I\'ve read that it is ascribed to verbs that "produce results" or have a concept of "emergence".',
      species: [
        {
          jap: '<b>Examples:</b>',
          eng: ''
        },{
          jap: '焼きたて',
          eng: '：freshly baked（焼く：や（く））'
        },{
          jap: 'とりたて',
          eng: '：freshly picked'
        },{
          jap: 'ペンキ塗りたて',
          eng: '：newly painted（塗る：ぬ（る））'
        },{
          jap: '<b>BAD Examples:</b>',
          eng: ''
        },{
          jap: '読みたて',
          eng: '：freshly read?'
        },{
          jap: '寝たて',
          eng: '：freshly slept?'
        },{
          jap: '食べたて',
          eng: '：newly eaten?'
        }
      ]
    },
    example: [
      {
        sentence: {
          ante: '『',
          highlight: '焼きたて',
          post: 'のパンはおいしい。』'
        },
        translation: 'Freshly baked bread is delicious.'
      },{
        sentence: {
          ante: '『',
          highlight: 'ぬりたて',
          post: 'のペンキに気を付けてください。』'
        },
        translation: 'Please watch out for wet paint (the just painted paint).'
      }
    ],
    other: 'The kanji for ～たて is　～立て、but the kana usage seems to be used more.'
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














