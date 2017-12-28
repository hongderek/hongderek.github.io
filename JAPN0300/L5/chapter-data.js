"use strict";

var local_course_name = '日本語３００';
var local_course_path = 'JAPN0300'
var local_chap_name = '第５課';
var local_chap_path = 'L5';

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
    topic: 'Humble and Honorific Patterns',
    spec: 'Humble and Honorific Patterns',
    subtopic_list: [
      {
        subtopic: 'There are ceratin verbs that have special forms in Humble and Honorific.  Besides these verbs, the pattern for forming the Humble form of verbs is おverb(stem)する。eg:',
        desc: 
          [
            '<b>『お verb(stem) する（I humbly verb)』</b>',
            '願う：お願いする（I request, ie: お願いします）',
            '聞く：お聞きする (I ask)'
          ]
      },{
        subtopic: 'The general pattern for forming the Honorific form is おverb(stem)になる ie: to become verbly.',
        desc: 
          ['<b>『お verb(stem) に なる（My superior honorifically verbs)』</b>']
      },{
        subtopic: 'Another Honorific pattern is to conjugate by おverb(stem)です',
        desc: 
          [
            '<b>『お verb(stem) です（My superior honorifically verbs)』</b>',
            '帰る：お帰りです（「もうお帰りですか。」Are you going home already?)'
          ]
      },{
        subtopic: 'Making honorific requests for verbs without special conjugation uses the same おverb(stem) thing but with ください',
        desc: 
          [
            '<b>『お verb(stem) ください（Please verb (polite))』</b>',
            '待つ：お待ちください（Please wait.)'
          ]
      },{
        subtopic: 'Forming Honorific requests using the verbs with special conjugations (eg: いらしゃる）involves taking the 〜ます conjugation and replacing す with せ。',
        desc: 
          [
            '<b>『verb(stem) ませ（Please verb (polite))』</b>',
            '（行く）：いらしゃる：いらしゃいます：いらしゃいませ（Please come in!)'
          ]
      },{
        subtopic: 'Additionally, to make polite but firm requests, use the verb(stem) with なさい the stem of なさる which is the special Honorific conjugation of する。',
        desc: 
          [
            '<b>『verb(stem) なさい（Please verb (polite))』</b>',
            '聞く：聞きなさい（Please listen!)',
            '座る：座りなさい（Please sit.)',
            'する：しなさい（Please do.)'
          ]
      }
    ]
  }
];

var chap_grammar_list = [
  {
    grammar_point: '（〜に）気がつく',
    spec: '（〜に）気がつく',
    alt_def: '〜にきがつく',
    meaning: '"To notice 〜"; "〜 caught one\'s attention"',
    use: {
      text: 'The kanji of つく is 付く。 つく is a verb and is conjugated as such.  The thing which is noticed is marked by 〜に and can be a noun or a phrase (sentence(の・こと)).',
      species: []
    },
    example: [
      {
        sentence: {
          ante: '『間違い',
          highlight: 'に気がつきませんでした',
          post: '。』'
        },
        translation: 'I wasn\'t aware of my mistake.'
      }
    ],
    other: '...'
  },{
    grammar_point: 'せっかく',
    spec: 'せっかく',
    alt_def: '',
    meaning: 'Indicates that something has been done with a great deal of trouble.',
    use: {
      text: 'The true meaning and usage of せっかく is probably quite nuanced.  From what I have read, せっかく means that a positive opportunity has arisen or come about with effort (and, in certain scenarios, it would be/was a shame not to seize it or to have it go to waste).  There is a similar word わざわざ which means "someone has gone out of their way to do something".  Compare:',
      species: [
        {
          jap: '『せっかく来たのに、るすだった。』',
          eng: '：Even though I made a special trip (to see you), you were out.'
        },{
          jap: '『わざわざ来るにはおよばない。』',
          eng: '：There is no need to make a special trip (go out of your way to come by).'
        }
      ]
    },
    example: [
      {
        sentence: {
          ante: '『人が',
          highlight: 'せっかく',
          post: '作ってくれた料理を食べないのは失礼だ。』'
        },
        translation: 'It is impolite not to eat food which someone has taken the trouble of preparing for you.'
      }
    ],
    other: 'The nuance is probably best learned through seeing its usage in the wild.'
  },{
    grammar_point: 'verb(plain)[pos/neg]わけにはいく[neg]',
    spec: 'verb(plain)[pos/neg]わけにはいく[neg]',
    alt_def: 'わけにはいかない',
    meaning: '"One cannot do certain things for social/moral/societal reasons" verb(plain)[pres, pos.]; "One can\'t help but to do verb" verb(plain)[pres, neg.]',
    use: {
      text: 'いく[neg.] is conjugated as いかない or いきません。 In this construction, いく is always negative.  The meaning of the phrase will depend on the conjugation of the modifying verb:',
      species: [
        {
          jap: 'verb(plain)[pres, POS.] わけにはいかない',
          eng: '：I cannot do verb for social/moral/societal reasons.'
        },{
          jap: 'verb(plain)[pres, NEG.] わけにはいかない',
          eng: '：I can\'t help but to verb.'
        }
      ]
    },
    example: [
      {
        sentence: {
          ante: '『これは先生の本だから、あなたに貸す',
          highlight: '貸すわけにはいきません',
          post: '。』'
        },
        translation: 'Because this is my teacher\'s book, I cannot lend it to you (for social/moral/societal reasons).'
      },{
        sentence: {
          ante: '『明日試験がありるから、今晩',
          highlight: '勉強しないわけにはいかない',
          post: '。』'
        },
        translation: 'Because I have an exam tomorrow, I can\'t help but study tonight.'
      }
    ],
    other: '...'
  },{
    grammar_point: 'そうかと言って',
    spec: 'そうかと言って',
    alt_def: 'そうかといって',
    meaning: '"But, "; "And yet, " (lit. "Having said that, ")',
    use: {
      text: 'Used to qualify a preceeding statement.  Usually used with 〜わけにはいかない or 〜わけではない etc.',
      species: []
    },
    example: [
      {
        sentence: {
          ante: '『アメリカの大学生はよく勉強するが、',
          highlight: 'そうかと言って',
          post: '勉強してばかりいるわけではない。』'
        },
        translation: 'American university students study a lot, but having said that, they don\'t necessarily do nothing but study.'
      },{
        sentence: {
          ante: '『背は高くもないが、',
          highlight: 'そうかといって',
          post: 'ひくくもない。』'
        },
        translation: 'He\'s not tall, but he\'s not quite short either.  (lit. having said that, he\'s also not short.)'
      }
    ],
    other: '...'
  },{
    grammar_point: 'verb(plain)[pres]ため(に・の)',
    spec: 'verb(plain)ために',
    alt_def: '',
    meaning: '"In order to verb"',
    use: {
      text: 'ため means "purpose" or "sake".  Literally, you might translate verb(plain)[pres]ために as "verb-purpose-ly".  Verbための will modify a following noun.  This translation is more difficult, but the literal translation is also fun (lit. "the for-the-purpose-of-verb noun").',
      species: [
        {
          jap: 'verb(plain)ため に',
          eng: '：In order to verb.  (lit. verb-pupose-ly)'
        },{
          jap: 'verb(plain)ため の(noun)',
          eng: '：A noun to verb.  (lit. A for-the-purpose-of-verb noun)'
        }
      ]
    },
    example: [
      {
        sentence: {
          ante: '『',
          highlight: 'やせるために',
          post: '毎日うんどうをしています。』'
        },
        translation: 'I am exercising every day in order to lose weight.'
      },{
        sentence: {
          ante: '『辞書は、言葉の意味を',
          highlight: '調べるためのもの',
          post: 'です。』'
        },
        translation: 'A dictionary is something you use to look look up the meanings of words. (lit. is a "for the purpose of looking up meanings of words" thing)'
      }
    ],
    other: 'LONG LIVE LITERAL MEANINGS!'
  },{
    grammar_point: '(〜て)も',
    spec: '(〜て)も',
    alt_def: '〜ても',
    meaning: '"Even when/if 〜"',
    use: {
      text: 'Verbs and adjectives in the て form with the particle も gives the meaning "even when/if 〜".  The main sentence is usually in the non-past, as in "Even if A, B is so".  な adjectives and nouns take the form 〜であっても which is usually contracted to でも。 Conjugation as follows:',
      species: [
        {
          jap: 'verb(て) も',
          eng: ''
        },{
          jap: '（adjい)くて も',
          eng: ''
        },{
          jap: '（adjな)であって も',
          eng: '　(or:（adjな) でも)'
        },{
          jap: '（noun)であって も',
          eng: '　(or:（noun) でも)'
        }
      ]
    },
    example: [
      {
        sentence: {
          ante: '『チーズは、雪が',
          highlight: '降っても',
          post: '食べるそうです。』'
        },
        translation: 'I hear they eat cheese even when it snows.'
      },{
        sentence: {
          ante: '『チーズは、',
          highlight: '高くても',
          post: '食べるそうです。』'
        },
        translation: 'I hear they eat cheese even if it is expensive.'
      },{
        sentence: {
          ante: '『チーズは、',
          highlight: '有名で（あって）も',
          post: '食べるそうです。』'
        },
        translation: 'I hear they eat cheese even if it is famous.'
      },{
        sentence: {
          ante: '『チーズは、',
          highlight: 'チーズで（あって）も',
          post: '食べるそうです。』'
        },
        translation: 'I hear they eat cheese even if it is cheese.'
      }
    ],
    other: '...'
  },{
    grammar_point: 'verb[neg.](stem)ず（に）',
    spec: 'verb[neg.](stem)ず（に）',
    alt_def: '〜ずに',
    meaning: '〜ず can connect sentences where the final verb would end as 〜なくて。 〜ずに is also used in the same context as 〜ないで (ie: without doing).',
    use: {
      text: '〜ず is a negative form in classical Japanese.  The modern equivalent is 〜ない。 This helps a bit with figuring out the conjugation of 〜ず： Conjugate the verb as you would for ない but use ず instead.',
      species: [
        {
          jap: '（うverb)',
          eng: '：(うverb）／あ／ず'
        },{
          jap: '（るverb)',
          eng: '：(るverb）ず'
        },{
          jap: 'くる',
          eng: '：こず（来る：来ず）'
        },{
          jap: 'する',
          eng: '：せず'
        }
      ]
    },
    example: [
      {
        sentence: {
          ante: '『ひどいカルチャーショックは',
          highlight: '受けず',
          post: 'すぐ日本の生活になれました。』'
        },
        translation: 'I did not have a bad culture shock and quickly became accustomed to life in Japan.'
      },{
        sentence: {
          ante: '『',
          highlight: '寝ずに',
          post: '勉強すると病気になるでしょう。』'
        },
        translation: 'If you study without sleeping, you will get sick.'
      }
    ],
    other: 'Usually appears in contemporary Japanese, especially written style.'
  },{
    grammar_point: '(noun)によると',
    spec: '(noun)によると',
    alt_def: '',
    meaning: '"According to 〜"',
    use: {
      text: 'Used to indicate a source of information.  Usually followed by expressions to indicate hearsay (eg: そうだ).  よる is the verb here, meaning "based on" or "coming from" (compare to 〜によって：depending on 〜)',
      species: []
    },
    example: [
      {
        sentence: {
          ante: '『今日の新聞',
          highlight: 'によると',
          post: '、昨日じしんがあったそうだ。』'
        },
        translation: 'According to today\'s newspaper, there was an earthquake yesterday.'
      }
    ],
    other: '...'
  },{
    grammar_point: '(noun)化',
    spec: '(noun)化',
    alt_def: '',
    meaning: '"〜ization"',
    use: {
      text: 'Carries the meaning of 〜になる or 〜にする。 Hard to translate or define.  Usually using the English suffix "〜ization" gets the point across.  Usually attached to kanji compounds.  Usually combined with する to mean "〜ize" or される "〜ized".  For example:',
      species: [
        {
          jap: '兵器（へいき）',
          eng: '：weapon'
        },{
          jap: '兵器 化',
          eng: '：weaponization'
        },{
          jap: '兵器 化 する',
          eng: '：to weaponize'
        },{
          jap: '兵器 化 される',
          eng: '：to be weaponized'
        }
      ]
    },
    example: [
      {
        sentence: {
          ante: '『せんご日本はずいぶん',
          highlight: '西洋化',
          post: '（せいようか）した。』'
        },
        translation: 'Since the war, Japan has become quite Westernized. (did the Westernization, did Westernize)'
      },{
        sentence: {
          ante: '『',
          highlight: '映画化',
          post: 'された小説（しょうせつ）は多い。』'
        },
        translation: 'There are many novels which have been made into movies (lit. The movie-ization-ed (movie-ized) novels are many.)'
      }
    ],
    other: '...'
  },{
    grammar_point: 'The Causative-Passive (verb(causitive))(passive)',
    spec: 'The Causative-Passive (verb(causitive))(passive)',
    alt_def: 'せられる',
    meaning: '"To be made to verb"',
    use: {
      text: 'Formed by conjugating a verb in the causative and then taking the passive of that form.  This ultimately ends up as ／あ／せられる which can be contracted to ／あ／される UNLESS such contraction would duplicate the さ。 Conjugation of the causative and passive:',
      species: [
        {
          jap: '／Causative／',
          eng: ''
        },{
          jap: 'causative（る）：',
          eng: 'verb[neg.](stem) + さ + せる (eg: 食べる：食べ：食べさせる）'
        },{
          jap: 'causative（う）：',
          eng: 'verb[neg.](stem) + せる (eg: 読む：読ま：読ませる）'
        },{
          jap: 'causative（する）：',
          eng: 'させる'
        },{
          jap: 'causative（くる）：',
          eng: 'こさせる'
        },{
          jap: '／Passive／',
          eng: ''
        },{
          jap: 'passive（る）：',
          eng: 'verb[neg.](stem) + ら + れる (eg: 食べる：食べ：食べられる）'
        },{
          jap: 'passive（う）：',
          eng: 'verb[neg.](stem) + れる (eg: 読む：読ま：読まれる）'
        },{
          jap: 'passive（する）：',
          eng: 'される'
        },{
          jap: 'passive（くる）：',
          eng: 'こられる'
        },{
          jap: '／Causative-Passive／',
          eng: ''
        },{
          jap: 'caus-pass（する）：',
          eng: 'させられる'
        },{
          jap: 'caus-pass（くる）：',
          eng: 'こさせられる'
        },{
          jap: 'In general：',
          eng: 'verb[neg.](stem) + (さ if [る]) + せられる（eg: 食べ・さ・せられる　or　読ま・せられる）'
        },{
          jap: '',
          eng: '〜せられる can be contracted to 〜される unless it would duplicate a さ (eg: 話させられる cannot become 話さされる)'
        },{
          jap: '',
          eng: 'Verbs are conjugated FIRST into causative, and NEXT into passive.  Causative conjugations are ichidan (る) verbs.'
        }
      ]
    },
    example: [
      {
        sentence: {
          ante: '『たいてい一学期に一つは論文を',
          highlight: '書かされる',
          post: '。』'
        },
        translation: 'In general, we are made to write at least one paper per semester.'
      }
    ],
    other: 'LITERAL TRANSLATIONS YAY: "there is a causing done unto me".  Passive comes from the Latin "patior, pati, passus sum" meaning "to endure, to bear, to suffer".  Compare to "Passion of the Christ" (the suffering of Christ) or a doctor\'s "patient" (one who undergoes).  In Japanese, there is a direct and an indirect passive.  The direct passive is as it is in English, eg: "to be done".  There is a subject to which the action is done by an agent.  The indirect passive means something more like "There is an action done by an agent (over which the subject or a third party has no control)".  In this case, the verb is used quite like the active voice, but the focus is on the fact that the subject could do nothing about the verb.  Compare: 『寿司が先生に作られる：The sushi is made by sensei.』 with 『寿司を先生に作られる：There is sushi is made by sensei (over which I or the sushi have no control, which may or may not infer negative context).』 The meanings are essentially the same, but using the particle が and を infers a different context.  I still don\'t really know how it exactly works.  BUT, this is all to clarify that the causative-passive has a meaning of "I am caused to verb outside of my control", per se.'
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














