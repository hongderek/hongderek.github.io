"use strict";

const local_course_name = '日本語３００';

const local_chap_name = '第６課';

const chap_kanji_str = 'kanji,reading,meaning,kaku\n店,みせ,shop; store; restaurant,hai\n注文する,ちゅうもん（する）,to order,hai\n引用する,いんよう（する）,to quote,hai\n以上,いじょう,more than,hai\n勤める,つと（める）,to work for,\n同僚,どうりょう,colleague,hai\nご飯,（ご）はん,rice,\n丼,どんぶり,you know what it is boi,\n実物,じつぶつ,actual thing,\n卵,"\nたまご",egg,\n店員,てんいん,clerk; shop employee,hai\n親子,おやこ,parent and child,hai\n生む,う（む）,to lay (an egg); to give birth,\n昼食,ちゅうしょく,lunch (more polite),\n五十代,ごじゅうだい,In one\'s fifties (age wise),hai\n１９９０年代,（１９９０）ねんだい,Nineties (year wise ie: 1990s),\n込む,こ（む）,to be crowded,\n腰をかける,こし（をかける）,to sit (hum. of 座る「すわ（る）」）,\nお茶,（お）ちゃ,green tea,\n召し上がる,め（し）あ（がる）,to eat/drink (hon. of 食べる・飲む),\n参る,まい（る）,to come/go (hum. (courteous) of 行く・来る),\n請求書,せいきゅうしょ,bill; invoice,\n払う,はら（う）,to pay,\n全部,ぜんぶ,all; entire (NB: only for inanimate objects),hai\n席に着く,せき（に）つ（く）,"to seat oneself (lit. ""to arrive at a seat"")",\n辺り,あた（り）,vicinity,\n腹がへる,はら（がへる）,to be hungry,\nお腹がへる,（お）なか（がへる）,"to be hungry (more polite, note reading change)",\n売る,う（る）,to sell,\n外国,がいこく,foreign country,hai\n日本化する,にほんか（する）,"to Japanize (日本化 ""Japanization"")",\n旅行,りょこう,travel,hai\n習慣,しゅうかん,custom,hai\n面倒（な）,めんどう（な）,troublesome,\n（〜と）感じる,（〜と）かん（じる）,to feel (that ~),\n例,れい,example,hai\n運転手,うんてんしゅ,"driver, chauffeur",\n渡す,わた（す）,to hand to someone,\n荷物,にもつ,luggage; baggage,\n運ぶ,はこ（ぶ）,to carry,hai\n片付ける,かたづ（ける）,to clean; to tidy up,\n何度も,なんど（も）,many times,hai\n旅館,りょかん,Japanese-style inn,\n泊まる,と（まる）,"to stay (ie: hotel, 旅館 for a short time)",hai\n決まる,き（まる）,"to be decided, fixed, arraged",\n宿泊料,しゅくはくりょう,hotel charges,\n簡単,かんたん,simple; easy,\n含まれる,ふく（まれる）,to include,\n計算する,けいさn（する）,to calculate,\n舞踊院,ぶよういん,beauty salon,\n床屋,とこや,barber shop,\n（〜と）比べる,（〜と）くら（べる）,to compare (with ~),hai\n高級（な）,こうきゅう（な）,high class; first rate,hai\n料理屋,りょうりや,Japanese-style restaurant,\n普通,るつう,normal; ordinary; usual,hai\n必要（な）,ひつよう（な）,necessary,hai\n物価,ぶっか,prices (of commodities),hai\n以外に,いがい（に）,expectedly,\n宣伝,せんでん,advertisement,';


/**
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
*/
const chap_note_list = [
  {
    topic: '（〜から）です。',
    spec: '（〜から）です。',
    subtopic_list: [
      {
        subtopic: '',
        desc: '〜から：because.  Is full sentence to give answer to question (ie: 〜ですか)。'
      }
    ]
  }
];

const chap_grammar_list = [
  {
    grammar_point: '〜って',
    spec: '〜って',
    meaning: 'They say, ~.  ~, so I hear.',
    use: {
      text: 'A sentence ending in plain form is put before って。　Used to qualify information obtained through secondary sources (vs what is known firsthand).  Such distinction is important in Japanese.',
      species: []
    },
    example: [
      {
        sentence: {
          ante: '『東京の冬はあまり寒くないんだ',
          highlight: 'って',
          post: 'ねえ。』'
        },
        translation: 'I hear winter in Tokyo is not very cold.'
      }
    ],
    other: 'cf. そうだ、といっていました、らしい'
  },
  {
    grammar_point: '(verb/adj)ことは(verb/adj)が、(sentence)',
    spec: '〜ことは（〜が）',
    meaning: 'It is[present] indeed the case that (verb/adj), but...; It was[past] indeed the case that (verb/adj), but...',
    use: {
      text: 'This is another way to qualify one\'s statements.  The verb or adjective is repeated before and after ことは。 Both sides should match in tense.  〜が functions as a conjunction.',
      species: [
        {
          jap: '（いadj）い・ことは（いadj）い',
          eng: ''
        },
        {
          jap: '（なadj）な・ことは（なadj）な',
          eng: ''
        },
        {
          jap: 'verb(plain)・ことはverb(plain)',
          eng: ''
        }
      ]
    },
    example: [
      {
        sentence: {
          ante: '『作文を',
          highlight: '書いたことはかいたが',
          post: '、間違いが多かっただろうと思います。』'
        },
        translation: 'While indeed I did write the report, I think there were probably many mistakes.'
      }
    ],
    other: '([present]ことは[present])・([past]ことは[past]) note that the tense on either side of ことは should match.'
  },
  {
    grammar_point: '(noun)でいいです／(noun)でけっこうです',
    spec: 'nounでいいです／nounでけっこうです',
    meaning: '(noun) will do; (noun) will suffice',
    use: {
      text: 'けっこう means "sufficient, enough".',
      species: []
    },
    example: [
      {
        sentence: {
          ante: '『',
          highlight: 'お茶でけっこうです',
          post: '。』'
        },
        translation: 'Green tea is fine.'
      }
    ],
    other: '...'
  },
  {
    grammar_point: '〜とは限る[neg]（漢字：「かぎ」る）',
    spec: '〜とは限る[neg]',
    meaning: 'It is not necessarily the case that ~(sentence).  It does not mean that ~(sentence).',
    use: {
      text: '限る[neg] is 限らない／限りません。 The preceeding statement should end in plain form.  The expression is often used with 必ずしも（also expresses "not always; not necessarily").',
      species: [
        {
          jap: '〜とは（限らない・限りません）',
          eng: ''
        },
        {
          jap: '〜必ずしも〜とは限らない',
          eng: ''
        }
      ]
    },
    example: [
      {
        sentence: {
          ante: '『高いものが<b class="eg-highlight">必ずしも</b>みんなよい',
          highlight: 'とは限らない',
          post: '。』'
        },
        translation: 'Expensive things are not necessarily good.'
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

/*
て ‒ form + 終わる(お) to finish doing something て - form + 始める (はじ) to start doing something
*/











