"use strict";

const local_course_name = '日本語３００';
const local_course_path = 'JAPN0300'
const local_chap_name = '第３課';

/**
{
  kanji: '',
  reading: '',
  meaning: '',
  (opt)kaku: 'hai' or ''
}
*/
const chap_kanji_str = 'kanji,reading,meaning,kaku\n研究室,けんきゅうしつ,office (ie: professor\'s),\n授業,じゅぎょう,class (lecture),\n期末試験,きまつしけん,final exam,\n受ける,う（ける）,"to take (a class, test), to receive",hai\n推薦状,すいせんじょう,recommendation,\n留学,りゅうがく,study abroad,hai\n奨学金,しょうがくきん,scholarship,\n申し込む,もう（し）こ（む）,to apply,hai\n締め切り,し（め）き（り）,deadline,\n送る,おく（る）,to send,hai\n頼む,たの（む）,to ask a favor,hai\n痛い,いた（い）,painful,\n教室,きょうしつ,classroom,\n宿題,しゅくだい,homework,\n部屋,へや,room,hai\n寄る,よ（る）,to stop by,\n情報,じょうほう,information,\n交換,こうかん,exchange,\n利用する,りよう（する）,to use,hai\n授業料,じゅぎょうりょう,tuition,\n数,かず,number,hai\n同じ,おな（じ）,"same (noun/verb acting prenominally, cf. 似ている（似る）：to be similar)",\n選ぶ,えら（ぶ）,to choose,\n面接,めんせつ,interview,\n成績,せいせき,grade,\n性格,せいかく,character; personality,\n態度,だいど,attitude,\n目的,もくてき,aim; goal; purpose,hai\n優先,ゆうせん,priority,\n以外,いがい,other than; besides; excepting,\n場合,ばあい,case; situation,\n助ける,たす（ける）,"to help, to save/rescue",\n全部,ぜんぶ,all; entire (NB: only for inanimate objects) (cf. 全員),\n帰国,きこく,a return to one\'s home country (する：to return...),\n単位,たんい,credit (for a course),\n交渉,こうしょう,negotation,\n認める,みと（める）,"to approve, acknoledge, to admit, to recognize",\n国際学部,こくさいがくぶ,International Division (of University),\n文学,ぶんがく,Literature,hai\n歴史,れきし,History,hai\n経済,けいざい,Economics,hai\n政治,せいじ,Politics,hai\n宗教,しゅうきょう,Religion,hai\n音楽,おんがく,Music,hai\n普通,ふつう,"the common, usual, ordinary",hai\n活動,かつどう,activity,\n家庭,かてい,"home, household",\n特に,とく（に）,"particularlly, especially",\n希望,きぼう,wish; hope,\n者,もの,person,\n悪い,わる（い）,bad,\n住宅事情,じゅうたくじじょう,housing condition,\n留学希望者,りゅうがくきぼうしゃ,one who wishes to go study abroad,\n忘れる,わす（れる）,to forget,\n〜枚,〜まい,"counter for thin, flat objects",\nお願い,（お）ねが（い）,a request,\n伺う,うかが（う）,hum. form of 行く、来る、聞く,\n用紙,ようし,form,\n主（な）,おも（な）,"main (ie: the main ""topic"", etc)",\n行う,おこな（う）,"to carry out, to conduct (usually used in written lang.)",\n・,ほとんど〜ない,hardly,';

const chap_note_list = [
  {
    topic: 'asdf',
    spec: 'asdf',
    subtopic_list: [
      {
        subtopic: 'asdf',
        desc: 'asdf'
      }
    ]
  }
];

const chap_grammar_list = [
  {
    grammar_point: 'verb[neg]で',
    spec: 'verb[neg]で',
    meaning: 'Don\'t (verb).',
    use: {
      text: 'A contraction of a request using the negative て form of verbs: verb[neg]でください。',
      species: [
        {
          jap: 'verbないで：',
          eng: 'don\'t verb'
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
    meaning: 'May I do ___?  Lit. "Could I not receive the favor of your letting me do 〜?".',
    use: {
      text: 'A very indirect way of asking for permission to do something.  Not to be confused with verb(て)いただけないでしょうか which means "Could you do ___?".',
      species: [
        {
          jap: 'verb(causative, て)いただけないでしょうか：',
          eng: 'May I do verb?'
        },{
          jap: 'verb(て)いただけないでしょうか：　　　　　　　',
          eng: 'Could you do verb?'
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
    other: '...'
  },{
    grammar_point: '〜中に',
    spec: '〜中に',
    meaning: 'Sometime during 〜。  By the end of 〜。',
    use: {
      text: 'Decribes a time frame (eg: by the end of this week, by the end of today, etc.).  The reading of 「中」 will be 「ちゅう」 or 「じゅう」 depending on the preceeding word.',
      species: [
        {
          jap: '(time-frame)中に：',
          eng: 'By the end of (time-frame).'
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
    meaning: 'The more/less 〜、the more/less ＿＿',
    use: {
      text: 'The same verb/adj/noun is used for both 〜, first in 〜ば form and then in plain form + ぼど。For nouns and なadj., であれば／ある will be suffixed.  Pos. constructions give the "more" meaning, neg. constructions give the "less" meaning.  The 〜 may be positive and the ＿＿ may be negative, in which case the translation would be "the more, the less", and vice versa, etc.  For nouns/adjな、ある will be negated and not the noun/adj.  I kind of like the literal translations, as un-English as they are.',
      species: [
        {
          jap: 'verb[pos.]ばverb[pos.]ほど＿＿：',
          eng: 'The more verb, the more ＿＿。'
        },{
          jap: 'verb[neg.]ばverb[neg.]ほど＿＿：',
          eng: 'The less verb, the less ＿＿。'
        },{
          jap: '（adjい）[pos.]ば（adjい）[pos.]ほど＿＿：',
          eng: 'The more adj, the more ＿＿。'
        },{
          jap: '（adjい）[neg.]ば（adjい）[neg.]ほど＿＿：',
          eng: 'The less adj, the less ＿＿。'
        },{
          jap: '（adjな）であればあるほど＿＿：',
          eng: 'The more adj, the more ＿＿。'
        },{
          jap: '（adjな）でなければないほど＿＿：',
          eng: 'The less adj, the less ＿＿。'
        },{
          jap: 'nounであればあるほど＿＿：',
          eng: 'The more noun, the more ＿＿。'
        },{
          jap: 'nounでなければないほど＿＿：',
          eng: 'The less noun, the less ＿＿。'
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
          highlight: '寒かなければ寒くないほど',
          post: 'いい。』'
        },
        translation: 'The less cold it is the better. (I think...)'
      },{
        sentence: {
          ante: '『',
          highlight: '寒かなければ寒くないほど',
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
    grammar_point: 'noun以外（に・の）',
    spec: 'noun以外（の・に）',
    meaning: '（漢字：いがい）Other than noun; besides noun.',
    use: {
      text: '以外 literally just means "besides" or "excepting".  Using 以外に creates an adverbial phrase, 以外の will preceed another noun and modify it.',
      species: [
        {
          jap: '',
          eng: ''
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
        translation: 'At the beginning of the semester, there are varous things to buy besides textbooks (lit. textbook-exceptingly).'
      },{
        sentence: {
          ante: '『',
          highlight: '文部科学省以外の',
          post: '奨学金もあります。』'
        },
        translation: 'There are scholarships other than those from the Ministry of Eduction, Culture, Sports, Science, and Technology. (lit. There are "other than MECSST"のscholarhsips)'
      }
    ],
    other: 'I quite like literal translations.  Overthrow Western grammatical constructs!'
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














