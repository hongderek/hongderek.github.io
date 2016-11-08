"use strict";

const local_course_name = '日本語３００';
const local_course_path = 'JAPN0300'
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
    meaning: 'Without verb(ing)...; Instead of verb(ing)...',
    use: {
      text: '(ie: verbないで).  A negative verb(て) form.  Usually followed by another verb and indicates a manner in which the action is carried out.  Often carries the connotation that one was expected to do the verb but did not.',
      species: []
    },
    example: [
      {
        sentence: {
          ante: '『日本では、何も',
          highlight: '言わないで',
          post: '食事を始めるのは失礼だ。』'
        },
        translation: 'In Japan, it is rude to begin a meal without saying anything.'
      }
    ],
    other: '...'
  },
  {
    grammar_point: 'verb(ば)いいのに',
    spec: 'verb(ば)いいのに',
    meaning: 'You should verb.  (lit. It would be good if you verb)',
    use: {
      text: 'Casual.  Usually ends the sentence.  Usually used to suggest the opposite of what the other person is doing or not doing.',
      species: []
    },
    example: [
      {
        sentence: {
          ante: '『もっと早く',
          highlight: '寝ればいいのに',
          post: '。』'
        },
        translation: 'You should go to bed earlier.'
      }
    ],
    other: '...'
  },
  {
    grammar_point: 'それに（and other conjunctions)',
    spec: 'それに',
    meaning: 'moreover; besides',
    use: {
      text: 'A carnival of conjunctions: ',
      species: [
        {
          jap: '『それに』　',
          eng: 'Moreover; besides.'
        },
        {
          jap: '『そして』　',
          eng: 'And.  Used in general, does not necessarily imply a sequence of events'
        },
        {
          jap: '『それから』',
          eng: 'And.  Specifically implies a sequence of events, so some sequences are ungrammatical.'
        }
        {
          jap: '『それで』　',
          eng: 'Therefore; so.  Implies a causal relationship between two sentences.'
        }
      ]
    },
    example: [
      {
        sentence: {
          ante: '『日本料理屋へ行った。',
          highlight: 'そして',
          post: 'お寿司をたべた。』'
        },
        translation: 'I went to a Japanese restaurant and ate sushi.  (NOTE: それから cannot be used here)'
      },
      {
        sentence: {
          ante: '『買い物に行きました。',
          highlight: '（それから・そして）',
          post: 'パーティーへ行った。』'
        },
        translation: 'I went shopping.  And (then) I went to a party.  (NOTE: because there is a sequence of events, それから may be used.)'
      }
    ],
    other: '...'
  },
  {
    grammar_point: 'なかなかverb[neg]',
    spec: 'なかなかverb[neg]',
    meaning: 'Not easily (verb).  Verb is not easily done.',
    use: {
      text: 'なかなか、when used with a verb[neg] means something is not easly done or it takes time to do verb.',
      species: []
    },
    example: [
      {
        sentence: {
          ante: '『漢字が',
          highlight: 'なかなか覚えられる',
          post: '。』'
        },
        translation: 'Kanji is not easily able to be remembered.  Kanji takes a long time to be able to be remembered.'
      }
    ],
    other: 'You can do なかなかverb(potential)[neg] for "Not easily able to be done".'
  },
  {
    grammar_point: '(Q word)(sentence plain)か分かる[neg]',
    spec: '(Q word)(sentence)か分かる[neg]',
    meaning: 'I don\'t know when/what/where/who/etc. (sentence).',
    use: {
      text: 'Used to embed a wh-question in another sentence.  End the embedded question in plain form plus か.  だ is optional.  かどうか embeds a yes-no question.',
      species: [
        {
          jap: '(Q word)(sentence plain)かわからない',
          eng: 'I don\'t know who/when/what/where/etc. (embedded question)'
        },
        {
          jap: '(sentence plain)かどうかわからない',
          eng: 'I don\'t know whether (embedded question)'
        }
      ]
    },
    example: [
      {
        sentence: {
          ante: '『<b class="eg-highlight">いつ</b>日本へ行く',
          highlight: 'か分かりません',
          post: '。』'
        },
        translation: 'I don\'t know when I will go to Japan.'
      },
      {
        sentence: {
          ante: '『日本人',
          highlight: '（だ）かどうか知りません',
          post: '。』'
        },
        translation: 'I don\'t know whether he is Japanese.'
      }
    ],
    other: 'The embedded question does not necessarily have to be followed by 分かる[neg].'
  },
  {
    grammar_point: 'しかverb[neg]',
    spec: 'しかverb[neg]',
    meaning: 'Only; no more than',
    use: {
      text: 'Implies that the aforementioned amount/item is not enough or less than expected.  しか replaces は、が、を (like も), but other particles are retained as ＿しか (eg: nounにしか).',
      species: [
        {
          jap: '(#, counter)しか（ない・ありません）',
          eng: 'Only # of counter (such that it is not enough).'
        },
        {
          jap: '(#, counter)しかverb[neg]',
          eng: 'Only verb(ed) # of counter.'
        },
        {
          jap: 'noun(を)しかverb[neg]',
          eng: 'Only verb noun.'
        }
      ]
    },
    example: [
      {
        sentence: {
          ante: '『五ドル',
          highlight: 'しかない',
          post: '。』'
        },
        translation: 'I only have five dollars.'
      },
      {
        sentence: {
          ante: '『五時間',
          highlight: 'しか寝なかった',
          post: '。』'
        },
        translation: 'I only slept five hours.'
      },
      {
        sentence: {
          ante: '『漫画を',
          highlight: 'しか読めません。',
          post: '。』'
        },
        translation: 'I only read manga.'
      }
    ],
    other: 'In other words, しか ＋ ない carries the meaning of "only" in a negative way.'
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














