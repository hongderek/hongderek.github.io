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
const chap_kanji_str = 'kanji,reading,meaning,kaku\n家族,かぞく,family,hai\n背が高い,せ（が）たか（い）,tall (ie: person\'s height) (が：topic particle),\nお兄さん,（お）にい（さん）,older brother (other),\n兄,あに,older brother (own),\nお姉さん,（お）ねえ（さん）,older sister(other),\n姉,あね,older sister (own),\n妹,いもうと,younger sister (other/own),\n弟,おとうと,younger brother (other/own),\nお父さん,（お）とう（さん）,father (other),\n父,ちち,father (own),\nお母さん,（お）かあ（さん）,mother (other),\n母,はは,mother (own,\n州都,しゅうと,state capital,hai\n人口,じんこう,population,hai\n有名（な）,ゆうめい（な）,famous,\n二番目,にばんめ,second (cf. 一番目、二番目、など),\n引っ越す,ひっこ（す）,to move (ie: residence),\n春,はる,spring,hai\n夏,なつ,summer,hai\n秋,あき,autumn,hai\n冬,ふゆ,winter,hai\n許可,きょか,permission,hai\n求める,もと（める）,to request; to ask for,\n両親,りょうしん,parents,\n借りる,か（りる）,to borrow,hai\n偶然,ぐうぜん,by chance,\n時々,ときどき,sometimes (々：repeat the preceeding kanji),\n長い,なが（い）,long,\n面白い,おもしろ（い）,interesting,\n経験,けいけん,experience,\n今学期,こんがっき,this semester,hai\n先学期,せんがっき,last semester,\n役に立つ,やく（に）た（つ）,to be useful,\n打つ,う（つ）,"to type (on keyboard, phone); to hit",\n熱心,ねっしん,intensely; eagerly,\n紅葉,こうよう,red leaves (fall leaves),\n生活,せいかつ,life; living,\n料理,りょうり,cooking,\n助かる,たす（かる）,to be saved,hai\n体重,たいじゅう,weight,hai\n変わる,か（わる）,to change (intransitive),\n日本史,にほんし,Japanese history,hai\n日本経済,にほんけいざい,Japanese economy,hai\n仏教,ぶっきょう,Buddhism,\n取る,と（る）,to take (a class); to grab,\n一回,いっかい,one time,hai\n足りる,た（りる）,to be sufficient,hai\n体,からだ,body,\n新聞記事,しんぶんきじ,newspaper article,\n覚える,おぼ（える）,to memorize,\n写真,しゃしん,photograph,\n財布,さいふ,wallet,\n珍しい,めずら（しい）,rare,\n間違える,まちが（える）,to make a mistake,\n湖,みずうみ,lake,\n・,すばらしい,wonderful; terrific,\n遠い,とお（い）,far,\n駅,えき,train station,\n自転車,じてんしゃ,bicycle,\n夕食,ゆうしょく,dinner,\n本当に,ほんとう（に）,"really, truly",\n・,たつ,(time) passes,\n速い,はや（い）,fast (cf. 早い：fast),\n・,だいぶ,"fairly well, to a large extent, pretty much",\n・,ひどい,terrible; awful,\n乗る,の（る）,to ride (intransitive 〜に to ride on ~),';

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
          ante: 'ううん、',
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
          ante: 'マディソンてどんな町',
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
          highlight: 'すきやきにします。',
          post: '。』'
        },
        translation: 'I will have the sukiyaki.'
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














