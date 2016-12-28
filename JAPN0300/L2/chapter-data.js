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
const chap_kanji_str = 'kanji,reading,meaning,kaku\n会釈,えしゃく,to greet by bowing slightly,\n意味,いみ,the meaning,hai\n天気,てんき,weather,\n失礼します,しつれい（します）,"excuse me, (goodbye)",\n目覚まし時計,めざ（まし）どけい,alarm clock,\n寮,りょう,dorm,\n部屋,へや,room,hai\n同室,どうしつ,the same room,\n声,こえ,voice,\n寝る,ね（る）,"to go to bed (vs 眠る：to sleep, to be asleep)",\n眠い,ねむ（い）,sleepy,\n終わる,お（わる）,to end,hai\n大変（な）,たいへん（な）,class (lecture),\n授業,じゅぎょう,to be late,\n遅れる,おく（れる）,to fall,\n降る,ふ（る）,to hurry,\n急ぐ,いそ（ぐ）,to invite,\n誘う,さそ（う）,high school days,\n高校時代,こうこうじだい,classmate,hai\n手紙,てがみ,handwritten letter,\n〜号室,〜ごうしつ,counter for room number,\n質問,しつもん,question,\n言葉,ことば,a word; language,hai\n多分,たぶん,probably,hai\n病気,びょうき,sickness; illness,\n非常に,ひじょう（に）,extremely,\n代わりに,か（わりに）,instead of,hai\n寒い,さむ（い）,cold,\n当たる,あ（たる）,to correspond (to),\n別れる,わか（れる）,to part; to say farewell,hai\n相手,あいて,a partner; an opponent; the other party; the person you are talking to,hai\n目上,めうえ,one\'s superior (older person),hai\n目下,めした,one\'s inferior (younger person),\n訳す,やく（す）,to translate,hai\n説明,せつめい,explanation (する：to explain),hai\n顔,かお,face,\n実は,じつ（は）,actually... (は topic particle),\n例えば,たと（えば）,for example...,hai\n例,れい,example,hai\nそれに対して,（それに）たい（して）,in response to that...,\n数日前,すうじつまえ,a few days ago,\n先日,せんじつ,the other day,\n覚える,おぼ（える）,to remember,hai\n決まる,き（まる）,to be decided,hai\n文句,もんく,phrase; remark; expression,\n決まり文句,き（まり）もんく,set phrase,\n用語,ようご,terms,\n一般的に,いっぱんてき（に）,generally,hai\n客,きゃく,guest,\n食事,しょくじ,meal,\n大事（な）,だいじ（な）,important,hai\n社会,しゃかい,a society,hai\n教育,きょういく,education,hai\n・,あいさつ,greeting,\n朝,あさ,morning,\n・,けさ,this morning,\n・,おかしい,strange; odd; funny,\n頭,あたま,head,\n外,そと,outside,\n大雨,おおあめ,pouring rain,\n先に,さき（に）,to be ahead (of someone),\n同級生,こうきゅうせい,classmate,\n日米,にちべい,Japan and the US,\n（〜に）困る,（〜に）こま（る）,to have difficulty (with ~),\n友人,ゆうじん,friend,';

const chap_note_list = [
  {
    topic: 'Phrases',
    spec: 'Phrases',
    subtopic_list: [
      {
        subtopic: '〜（は何と・ってどう）言う意味ですか。',
        desc: 'What is the meaning of 〜.  (ie: What does 〜 mean?)'
      },{
        subtopic: '〜は「〜」と言う意味です。',
        desc: '〜 is the meaning of 〜.  (ie: 〜 means 〜.)'
      },{
        subtopic: 'それに対して',
        desc: 'In response to that.（漢字：たい）'
      }
    ]
  },{
    topic: 'Giving/asking for advice (casual)',
    spec: 'Giving/asking for advice (casual)',
    subtopic_list: [
      {
        subtopic: 'verb(ば）いいですか。',
        desc: 'asking for advice'
      },{
        subtopic: 'verb(ば）いいでしょう。',
        desc: 'giving advice'
      },{
        subtopic: 'verb(ば）いいのに。',
        desc: 'informal giving advice'
      },{
        subtopic: '（eg）：どうすればいいですか。',
        desc: '"What should I do?"'
      }
    ]
  },{
    topic: '(verb(plain)・adj)と〜',
    spec: '(verb(plain)・adj)と〜',
    subtopic_list: [
      {
        subtopic: 'If/when (stating strong logical/natural conclusion) ',
        desc: 'NOT a way to list verbs/adjectives (use て form for that)'
      },{
        subtopic: '（eg）：(verb/adj)と〜。',
        desc: 'If/when verb/adj, then 〜。'
      }
    ]
  },{
    topic: '(Q word)（か・も）',
    spec: '(Q word)（か・も）',
    subtopic_list: [
      {
        subtopic: '(Q word)か ',
        desc: 'some-(where, thing, one, time, etc.)'
      },{
        subtopic: '(Q word)も',
        desc: 'no-(where, thing, one, time, etc.)'
      },{
        subtopic: 'Particle placement:',
        desc: '〜か＿　（eg: 何かに)'
      },{
        subtopic: '',
        desc: '〜＿も　（eg: 何にも)'
      }
    ]
  },{
    topic: 'verb(stem)かける',
    spec: 'verb(stem)かける',
    subtopic_list: [
      {
        subtopic: 'To start doing verb.',
        desc: '(But not necessarily finish it?)'
      }
    ]
  },{
    topic: 'Passive voice',
    spec: 'Passive voice',
    subtopic_list: [
      {
        subtopic: 'Formation: ',
        desc: '／う／　＝　／あ／れる'
      },{
        subtopic: '',
        desc: '　　る　＝　られる'
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
        },
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
          eng: 'Only have # of counter (such that it is not enough).'
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
    other: 'In other words, しか + ない carries the meaning of "only" in a negative way.'
  },
  {
    grammar_point: '(sentence A)つまり(sentence B)',
    spec: 'つまり',
    meaning: '"Sentence A.  In other words/that is/namely/in short, sentence B."',
    use: {
      text: 'Used at the beginning of a sentence to summarize/expand the previous sentence.',
      species: []
    },
    example: [
      {
        sentence: {
          ante: '『何々何々。',
          highlight: 'つまり',
          post: '、何。』'
        },
        translation: 'Blah blah blah.  In other words, blah.'
      }
    ],
    other: 'Usually follwed by a「(sentence)わけです。」construction.'
  },
  {
    grammar_point: '(sentence)わけです。',
    spec: '(sentence)わけです。',
    meaning: 'That is to say; it follows that; that means (sentence)',
    use: {
      text: 'States a logical conclusion which can be drawn from previous statements.  The sentence ends in plain form, can be past or present.',
      species: [
        {
          jap: '〜（adjな）（な・だった）わけです。',
          eng: ''
        },
        {
          jap: '〜（adjい）（い・かった）わけです。',
          eng: ''
        },
        {
          jap: '〜（verb）わけです。',
          eng: ''
        }
      ]
    },
    example: [
      {
        sentence: {
          ante: '『何々何々。だから、日本語がペラペラな',
          highlight: 'わけです',
          post: 'ね。』'
        },
        translation: 'Blah blah blah.  That\'s why he speaks Japanese fluently.'
      }
    ],
    other: 'わけ means "conclusion from reasoning".'
  },
  {
    grammar_point: 'nounによって',
    spec: 'nounによって',
    meaning: 'Depending on (noun).',
    use: {
      text: 'nounによって can be followed by a noun or verb and describes the noun or verb.  ',
      species: []
    },
    example: [
      {
        sentence: {
          ante: '『',
          highlight: '人によって',
          post: '考えが違います。』'
        },
        translation: 'Opinions vary from person to person.'
      },
      {
        sentence: {
          ante: '『コースの成績は、試験の',
          highlight: '成績によって',
          post: '決まります。』'
        },
        translation: 'Your course grade will be set depending on your test grades.'
      }
    ],
    other: 'よる means "to depend on".  Therefore, よって is the て form of よる。'
  },
  {
    grammar_point: 'nounに当たる',
    spec: 'nounに当たる',
    meaning: '（漢字：あ（たる））To correspond to; to be equal to (noun)',
    use: {
      text: 'Compares an aforementioned noun to the nounに and states (or asks a question about) the equality of the two.',
      species: []
    },
    example: [
      {
        sentence: {
          ante: '『日本語の「こんいちは」は、英語の＂Ｈｅｌｌｏ＂',
          highlight: 'にあたる',
          post: '。』'
        },
        translation: '"Konnichi wa" in Japanese corresponds to "Hello" in English.'
      },
      {
        sentence: {
          ante: '『一ドルは、何円',
          highlight: 'に当たりますか',
          post: '。』'
        },
        translation: 'How much yen is (equal to) a dollar?'
      }
    ],
    other: '当たる is an intransitive verb.  The object of comparison is marked with 〜に。'
  },
  {
    grammar_point: '（nounの・verb phrase）ような(noun)',
    spec: '〜（のnoun・verb）ような(noun)',
    meaning: 'A (noun) like/such as 〜。',
    use: {
      text: 'Compares a noun to another noun or verb phrase.  Cannot be used with adjectives.  Verbような(noun) means "A noun which is like verb-phrase(noun)", I think, wherein (noun) is an unwritten but implied repetition of noun to which the verb-phrase is related, such as eg2.',
      species: []
    },
    example: [
      {
        sentence: {
          ante: '『「どうも」',
          highlight: 'のような',
          post: '便利なプレーズは、英語にはないだろう。』'
        },
        translation: 'I don\'t think English as a convinient phrase like "Dōmo".'
      },
      {
        sentence: {
          ante: '『名前の漢字は、日本人には読めない',
          highlight: 'ような',
          post: '読み方があるから、難しい。』'
        },
        translation: 'Kanji for names, because there are ways of reading such as those that Japanese people are not able to read, are difficult.'
      }
    ],
    other: 'Yeah it\'s kind of wierd to try and translate.'
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














