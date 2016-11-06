"use strict";

const local_course_name = '日本語３００';

const local_chap_name = '第２課';

/**
{
  kanji: '',
  reading: '',
  meaning: '',
  (opt)kaku: 'hai' or ''
}
*/
const chap_kanji_str = 'kanji,reading,meaning,kaku\n会釈,えしゃく,to greet by bowing slightly,\n意味,いみ,the meaning,hai\n天気,てんき,weather,\n失礼します,しつれい（します）,"excuse me, (goodbye)",\n目覚まし時計,めざ（まし）どけい,alarm clock,\n寮,りょう,dorm,\n部屋,へや,room,hai\n同室,どうしつ,the same room,\n声,こえ,voice,\n寝る,ね（る）,"to go to bed (vs 眠る：to sleep, to be asleep)",\n眠い,ねむ（い）,sleepy,\n終わる,お（わる）,to end,hai\n大変（な）,たいへん（な）,class (lecture),\n授業,じゅぎょう,to be late,\n遅れる,おく（れる）,to fall,\n降る,ふ（る）,to hurry,\n急ぐ,いそ（ぐ）,to invite,\n誘う,さそ（う）,high school days,\n高校時代,こうこうじだい,classmate,hai\n手紙,てがみ,handwritten letter,\n〜号室,〜ごうしつ,counter for room number,\n質問,しつもん,question,\n言葉,ことば,a word; language,hai\n多分,たぶん,probably,hai\n病気,びょうき,sickness; illness,\n非常に,ひじょう（に）,extremely,\n代わりに,か（わりに）,instead of,hai\n寒い,さむ（い）,cold,\n当たる,あ（たる）,to correspond (to),\n別れる,わか（れる）,to part; to say farewell,hai\n相手,あいて,a partner; an opponent; the other party; the person you are talking to,hai\n目上,めうえ,one\'s superior (older person),hai\n目下,めした,one\'s inferior (younger person),\n訳す,やく（す）,to translate,hai\n説明,せつめい,to explain,hai\n顔,かお,face,\n実は,じつ（は）,actually... (は topic particle),\n例えば,たと（えば）,for example...,hai\n例,れい,example,hai\nそれに対して,（それに）たい（して）,in response to that...,\n数日前,すうじつまえ,a few days ago,\n先日,せんじつ,the other day,\n覚える,おぼ（える）,to remember,hai\n決まる,き（まる）,to be decided,hai\n文句,もんく,phrase; remark; expression,\n決まり文句,き（まり）もんく,set phrase,\n用語,ようご,terms,\n一般的に,いっぱんてき（に）,generally,hai\n客,きゃく,guest,\n食事,しょくじ,meal,\n大事（な）,だいじ（な）,important,hai\n社会,しゃかい,a society,hai\n教育,きょういく,education,hai';

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














