"use strict";

const local_course_name = '日本語３００';
const local_course_path = 'JAPN0300'
const local_chap_name = '第７課';

const chap_kanji_str = 'kanji,reading,meaning,kaku\n誘う,さそ（う）,to invite (also: to seduce),hai\n試合,しあい,game,\n席,せき,seat,\n一緒,いっしょ,together,\n喜んで,よろこ（んで）,gladly,\n野球,やきゅう,baseball,\n古希,こき,seventy years of age,\nお祝い,（お）いわ（い）,celebration,hai\n〜歳,〜さい,〜 years old,\n秋葉原,あきはばら,Akihabara,\n部品,ぶひん,parts,hai\n組み立てる,く（み）た（てる）,to put together; to assemble,\n専門店,せんもんてん,specialist shops,hai\n電気街,でんきがい,electric store district,\n改札,かいさつ,ticket gate,\n出口,でぐち,exit,\n音,おと,sound,hai\n欲しい,ほ（しい）,to want (〜some noun),hai\n昔,むかし,the past; the olden days,hai\n映画監督,えいがかんとく,movie director,\n侍,さむらい,Samurai,hai\n徹夜する,てつや（する）,to stay up all night,\n・,きっと,"for sure, surely",\n盛ん,さか（ん）,popular (not for person),\n人気がある,にんき（がある）,popular (ie: has popularity),hai\n紹介,しょうかい,introduction (する：to introduce),\nその他,（その）た,And others (also read as （その）ほか）,hai\n訪問する,ほうもん（する）,to visit,\n３０年代,３０ねんだい,a 30 year old,\n前半,ぜんはん,first half,\n選手,せんしゅ,player,\n集める,あつ（める）,to gather (something) (transitive を),hai\n集まる,あつ（まる）,to gather (intransitive が),hai\n戦う,たたか（う）,to fight,\n簡単に,かんたん（に）,easily,\n負ける,ま（ける）,to lose,hai\n太平洋戦争,たいへいようせんそう,WWII,\n終わる,お（わる）,to end (intransitive が),hai\n始める,はじ（める）,to begin (transitive を),hai\n戦死する,せんし（する）,to die in battle,\n活躍する,かつやく（する）,to play an active part in,\n増える,ふ（える）,to increase,hai\n優勝,ゆうしょう,"overall victory, championship",\n全国,ぜんこく,the entire nation,hai\n高校野球,こうこうやきゅう,high school baseball,\n県,けん,prefecture,hai\n地域,ちいき,region,hai\n予選,よせん,preliminary,\n大会,たいかい,(big) tournament,\n野球場,やきゅうじょう,baseball stadium,\n応援する,おうえん（する）,"to support, to cheer (transitive を)",\n私立,しりつ,"private (ie: founded with private fund, eg: private university, etc.)",hai\n観客,かんきゃく,spectator,\n欧米,おうべい,the West,hai\n伝統的（な）,でんとうてき（な）,traditional,hai\n名窯（な）,めいよ（な）,honorable,\n日本代表,にほんだいひょう,Japanese representative,\n相撲,すもう,Sumō wrestling,\n論文,ろんぶん,thesis,hai\n単語,たんご,"word, vocabulary",hai\n座る,すわ（る）,to sit,';


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











