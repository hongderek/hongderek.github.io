"use strict";

const local_course_name = '日本語３００';

const local_chap_name = '第４課';

/**
{
  kanji: '',
  reading: '',
  meaning: '',
  (opt)kaku: 'hai' or ''
}
*/
const chap_kanji_str = 'kanji,reading,meaning,kaku\n家族,かぞく,family,hai\n背が高い,せ（が）たか（い）,tall (ie: person\'s height) (が：topic particle),\nお兄さん,（お）にい（さん）,older brother (other),\n兄,あに,older brother (own),\nお姉さん,（お）ねえ（さん）,older sister(other),\n姉,あね,older sister (own),\n妹,いもうと,younger sister (other/own),\n弟,おとうと,younger brother (other/own),\nお父さん,（お）とう（さん）,father (other),\n父,ちち,father (own),\nお母さん,（お）かあ（さん）,mother (other),\n母,はは,mother (own,\n州都,しゅうと,state capital,hai\n人口,じんこう,population,hai\n有名（な）,ゆうめい（な）,famous,\n二番目,にばんめ,second (cf. 一番目、二番目、など),\n引っ越す,ひっこ（す）,to move (ie: residence),\n春,はる,spring,hai\n夏,なつ,summer,hai\n秋,あき,autumn,hai\n冬,ふゆ,winter,hai\n許可,きょか,permission,hai\n求める,もと（める）,to request; to ask for,\n両親,りょうしん,parents,\n借りる,か（りる）,to borrow,hai\n偶然,ぐうぜん,by chance,\n時々,ときどき,sometimes (々：repeat the preceeding kanji),\n長い,なが（い）,long,\n面白い,おもしろ（い）,interesting,\n経験,けいけん,experience,\n今学期,こんがっき,this semester,hai\n先学期,せんがっき,last semester,\n役に立つ,やく（に）た（つ）,to be useful,\n打つ,う（つ）,"to type (on keyboard, phone); to hit",\n熱心,ねっしん,intensely; eagerly,\n紅葉,こうよう,red leaves (fall leaves),\n生活,せいかつ,life; living,\n料理,りょうり,cooking,\n助かる,たす（かる）,to be saved,hai\n体重,たいじゅう,weight,hai\n変わる,か（わる）,to change (intransitive),\n日本史,にほんし,Japanese history,hai\n日本経済,にほんけいざい,Japanese economy,hai\n仏教,ぶっきょう,Buddhism,\n取る,と（る）,to take (a class); to grab,\n一回,いっかい,one time,hai\n足りる,た（りる）,to be sufficient,hai\n体,からだ,body,\n新聞記事,しんぶんきじ,newspaper article,\n覚える,おぼ（える）,to memorize,';

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














