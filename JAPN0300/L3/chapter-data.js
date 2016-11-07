"use strict";

const local_course_name = '日本語３００';

const local_chap_name = '第３課';

/**
{
  kanji: '',
  reading: '',
  meaning: '',
  (opt)kaku: 'hai' or ''
}
*/
const chap_kanji_str = 'kanji,reading,meaning,kaku\n研究室,けんきゅうしつ,office (ie: of a professor),\n授業,じゅぎょう,class (lecture),\n期末試験,きまつしけん,final exam,\n受ける,う（ける）,"to take (a class, test), to receive",hai\n推薦状,すいせんじょう,recommendation,\n留学,りゅうがく,study abroad,hai\n奨学金,しょうがくきん,scholarship,\n申し込む,もう（し）こ（む）,to apply,hai\n締め切り,し（め）き（り）,deadline,\n送る,おく（る）,to send,hai\n頼む,たの（む）,to ask a favor,hai\n痛い,いた（い）,painful,\n教室,きょうしつ,classroom,\n宿題,しゅくだい,homework,\n部屋,へや,room,hai\n寄る,よ（る）,to stop by,\n情報,じょうほう,information,\n交換,こうかん,exchange,\n利用する,りよう（する）,to use,hai\n授業料,じゅぎょうりょう,tuition,\n数,かず,number,hai\n同じ,おな（じ）,"same (noun/verb acting prenominally, cf. 似ている（似る）：to be similar)",\n選ぶ,えら（ぶ）,to choose,\n面接,めんせつ,interview,\n成績,せいせき,grade,\n性格,せいかく,character; personality,\n態度,だいど,attitude,\n目的,もくてき,aim; goal; purpose,hai\n優先,ゆうせん,priority,\n以外,いがい,other than; besides; excepting,\n場合,ばあい,case; situation,\n助ける,たす（ける）,"to help, to save/rescue",\n全部,ぜんぶ,all; entire (NB: only for inanimate objects) (cf. 全員),\n帰国,きこく,a return to one\'s home country (する：to return...),\n単位,たんい,credit (for a course),\n交渉,こうしょう,negotation,\n認める,みと（める）,"to approve, acknoledge, to admit, to recognize",\n国際学部,こくさいがくぶ,International Division (of University),\n文学,ぶんがく,Literature,hai\n歴史,れきし,History,hai\n経済,けいざい,Economics,hai\n政治,せいじ,Politics,hai\n宗教,しゅうきょう,Religion,hai\n音楽,おんがく,Music,hai\n普通,ふつう,"the common, usual, ordinary",hai\n活動,かつどう,activity,\n家庭,かてい,"home, household",\n特に,とく（に）,"particularlly, especially",\n希望,きぼう,wish; hope,\n者,もの,person,\n悪い,わる（い）,bad,\n住宅事情,じゅうたくじじょう,housing condition,\n留学希望者,りゅうがくきぼうしゃ,one who wishes to go study abroad,';

const chap_note_list = [
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
];

const chap_grammar_list = [
  {
    grammar_point: 'verb(plain past)ばかり',
    spec: 'verb(plain past)ばかり',
    meaning: 'Have just (verb)ed, have just finished (verb)ing.',
    use: {
      text: 'ばかり can end a sentence (ばかり（だ・です)） and preceed conjunctions (ばかりだから) and other nouns (ばかりのｎｏｕｎ).',
      species: []
    },
    example: [
      {
        sentence: {
          ante: '『勉強',
          highlight: 'したばかり',
          post: 'です。』'
        },
        translation: 'I have just finished my homework.'
      }
    ],
    other: 'Grammatically, ばかり is technically a particle, but it seems to be like a noun?  (cf. Vところ for differences)'
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














