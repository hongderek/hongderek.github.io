"use strict";

var local_course_name = '日本語３００';
var local_course_path = 'JAPN0300'
var local_chap_name = '第２課';
var local_chap_path = 'L2';

/**
{
  kanji: '',
  reading: '',
  alt_def: '',
    meaning: '',
  (opt)kaku: 'hai' or ''
}
*/

var chap_note_list = [
  {
    topic: 'Phrases',
    spec: 'Phrases',
    subtopic_list: [
      {
        subtopic: '〜（は何と・ってどう）言う意味ですか。',
        desc: ['What is the meaning of 〜.  (ie: What does 〜 mean?)']
      },{
        subtopic: '〜は「〜」と言う意味です。',
        desc: ['〜 is the meaning of 〜.  (ie: 〜 means 〜.)']
      },{
        subtopic: 'それに対して',
        desc: ['In response to that.（漢字：たい）']
      }
    ]
  },{
    topic: 'Giving/asking for advice (casual)',
    spec: 'Giving/asking for advice (casual)',
    subtopic_list: [
      {
        subtopic: 'verb(ば）いいですか。',
        desc: ['asking for advice']
      },{
        subtopic: 'verb(ば）いいでしょう。',
        desc: ['giving advice']
      },{
        subtopic: 'verb(ば）いいのに。',
        desc: ['informal giving advice']
      },{
        subtopic: '（eg）：どうすればいいですか。',
        desc: ['"What should I do?"']
      }
    ]
  },{
    topic: '(verb(plain)・adj)と〜',
    spec: '(verb(plain)・adj)と〜',
    subtopic_list: [
      {
        subtopic: 'If/when (stating strong logical/natural conclusion) ',
        desc: ['NOT a way to list verbs/adjectives (use て form for that)']
      },{
        subtopic: '（eg）：(verb/adj)と〜。',
        desc: ['If/when verb/adj, then 〜。']
      }
    ]
  },{
    topic: '(Q word)（か・も）',
    spec: '(Q word)（か・も）',
    subtopic_list: [
      {
        subtopic: '(Q word)か ',
        desc: ['some-(where, thing, one, time, etc.)']
      },{
        subtopic: '(Q word)も',
        desc: ['no-(where, thing, one, time, etc.)']
      },{
        subtopic: 'Particle placement:',
        desc: ['〜か＿　（eg: 何かに)']
      },{
        subtopic: '',
        desc: ['〜＿も　（eg: 何にも)']
      }
    ]
  },{
    topic: 'verb(stem)かける',
    spec: 'verb(stem)かける',
    subtopic_list: [
      {
        subtopic: 'To start doing verb.',
        desc: ['(But not necessarily finish it?)']
      }
    ]
  },{
    topic: 'Passive voice',
    spec: 'Passive voice',
    subtopic_list: [
      {
        subtopic: 'Formation: ',
        desc: ['／う／　＝　／あ／れる']
      },{
        subtopic: '',
        desc: ['　　る　＝　られる']
      }
    ]
  }
];

var chap_grammar_list = [
  {
    grammar_point: 'verb[neg]で',
    spec: 'verb[neg]で',
    alt_def: 'ないで',
    meaning: '"Without doing verb"; "Instead of doing verb"',
    use: {
      text: 'A negative verb(て) form.  Usually followed by another verb and indicates a manner in which the action is carried out.  Often carries the connotation that one was expected to do the verb but did not.',
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
    alt_def: '',
    meaning: '"You should verb" (lit. It would be good if you verb)',
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
    alt_def: 'そして、それから、それで',
    meaning: '"Moreover"; "Besides"',
    use: {
      text: 'A carnival of conjunctions: ',
      species: [
        {
          jap: 'それに',
          eng: '："Moreover"; "Besides"'
        },
        {
          jap: 'そして',
          eng: '："And" (Used in general, does not necessarily imply a sequence of events)'
        },
        {
          jap: 'それか',
          eng: '："And" (Specifically implies a sequence of events, so some sequences are ungrammatical)'
        },
        {
          jap: 'それで',
          eng: '："Therefore"; "So" (Implies a causal relationship between two sentences)'
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
    alt_def: 'なかなか〜ない',
    meaning: '"Not easily verb-ed"; "Verb is not easily done"',
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
    other: 'You can do なかなかverb(potential)[neg] for "Not easily able to be done".  なかなか is actually a very nuanced word and has various translations.  It is given in the dictionary as "with considerable difficulty" and "by no means".  They don\'t mean the same thing, but, in general, なかなか〜ない may imply a passage of time, an expectation (that is not met), a great deal of effort (over a length of time), or that such expectation is acheived with great difficulty.'
  },
  {
    grammar_point: '(Q word)(sentence plain)か分かる[neg]',
    spec: '(Q word)(sentence)か分かる[neg]',
    alt_def: 'かどうか分からない、か分からない、かどうかわからない、かわからない',
    meaning: '"I don\'t know (when/what/where/who/etc.) 〜.',
    use: {
      text: 'Used to embed a question in another sentence.  End the embedded question in plain form plus か.  For nouns and adjな、だ is optional.  かどうか without a Q-word embeds a yes-no question.',
      species: [
        {
          jap: '(Q word)(sentence plain)か わからない',
          eng: '：I don\'t know (who/when/what/where/etc.) (embedded question)'
        },
        {
          jap: '(sentence plain)かどうか わからない',
          eng: '：I don\'t know whether (embedded question)'
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
    alt_def: 'しか〜ない',
    meaning: '"Only"; "No more than"',
    use: {
      text: 'Implies that the aforementioned amount/item is not enough or less than expected.  しか replaces は、が、を (like も), but other particles are retained as ＿しか (eg: (noun)にしか).  Can follow objects, numbers, and their counters to say that there is not enough of such object.',
      species: [
        {
          jap: '(#, counter) しか ない',
          eng: '：Only have # of counter (such that it is not enough).'
        },
        {
          jap: '(#, counter) しか verb[neg]',
          eng: '：Only verb(ed) # of counter.'
        },
        {
          jap: 'noun(を) しか verb[neg]',
          eng: '：Only verb-ed noun.'
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
    alt_def: '',
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
    alt_def: '',
    meaning: 'That is to say; it follows that; that means (sentence)',
    use: {
      text: 'States a logical conclusion which can be drawn from previous statements.  The sentence ends in plain form which can be past or present.',
      species: [
        {
          jap: '〜(adjな)(な、だった) わけです。',
          eng: ''
        },
        {
          jap: '〜(adjい)(い、かった) わけです。',
          eng: ''
        },
        {
          jap: '〜verb(plain)[pres., past] わけです。',
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
    alt_def: '',
    meaning: 'Depending on (noun).',
    use: {
      text: 'nounによって can be followed by a noun or verb.   It describes that noun or verb.',
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
    grammar_point: '(noun)に当たる',
    spec: '(noun)に当たる',
    alt_def: 'にあたる',
    meaning: '（「当たる」：あ(たる)：(intrans.) To hit, to touch, to be equivalent to）"To correspond to 〜"; "To be equal to 〜"',
    use: {
      text: 'Compares an aforementioned noun to the nounに and states (or asks a question about) the equality of the two.  The object of comparison is marked with 〜に',
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
    other: '...'
  },
  {
    grammar_point: '(nounの／〜verb(plain)）ような(noun)',
    spec: '(nounの／〜verb(plain)）ような(noun)',
    alt_def: '',
    meaning: '"A (noun) like/such as 〜"',
    use: {
      text: 'Compares a noun to another noun or verb phrase.  CANNOT be used with adjectives.',
      species: [
        {
          jap: '(noun A)の ような(noun B)',
          eng: '：A (noun B) that is like (noun A)'
        },{
          jap: '〜verb(plain) ような(noun)',
          eng: '：A (noun) that is like (verb phrase)'
        }
      ]
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
    other: 'Yeah it\'s kind of wierd to try and translate the verb one.'
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














