"use strict";

const local_course_name = '日本語３００';
const local_course_path = 'JAPN0300'
const local_chap_name = '第５課';

/**
{
  kanji: '',
  reading: '',
  meaning: '',
  (opt)kaku: 'hai' or ''
}
*/
const chap_kanji_str = 'kanji,reading,meaning,kaku\n求める,もと（める）,to seek (ie: advice アドバイスを),hai\n与える,あた（える）,"to give, to bestow (ie: advice アドバイスを)",hai\n指導教授,しどうきょうじゅ,academic advisor,\n発表,はっぴょう,announcement (する：to announce),hai\n建物,たてもの,building,\n〜号室,〜ごうしつ,counter for room number,\n場所,ばしょ,place,\n相談,そうだん,"a consultation, discussion (する：to consult)",\n移る,うつ（る）,"to move, transfer (in general) (cf. 引っ越す：to move (residence))",hai\n成績,せいせき,grade,\n予習,よしゅう,to prepare for class,hai\n・,ほかに,"In addition, besides",\n現代史,げんだいし,Contemporary history,hai\n社会学,しゃかいがく,Sociology,hai\n学期末,がっきまつ,the end of semester,hai\n様子,ようす,condition; circumstance; situation,\n部員,ぶいん,member; staff,hai\n勧誘,かんゆう,"invitation, solicitation (する：to invite, solicit (eg: to join a club))",\n新入生,しんにゅうせい,new student,\n居酒屋,いざかや,Japanese-style pub,\n歓迎会,かんげいかい,welcome party,\n一生けんめい,いっしょう（けんめい）,"very hard, with utmost effort, for dear life (一生懸命)",\n将来,しょうらい,in the future,\n一流（の）,いちりゅう（の）,"first-rate, foremost (noun with gen. case particle の)",\n就職する,しゅうしょく（する）,to get a job,\n部活動,ぶかつどう,club activities,hai\n生徒,せいと,student; pupil,hai\n増える,ふ（える）,to increase (intransitive: 〜が増える),hai\n減る,へ（る）,to decrease (intransitive: 〜が減る),\n授業,じゅぎょう,class (lecture),\n塾,じゅく,cram school,\n予備校,よびこう,prep-school (rōnin year),\n落ちる,お（ちる）,to fail (intransitive 〜に落ちる),hai\n希望,きぼう,a hope (する：to hope for),\n浪人,ろうにん,a masterless samurai; student who studies for a year after failing college entrance exam,\n次の年,つぎ（の）とし,next year,\n次（の）,つぎ（の）,next (noun w/gen. case particle の),\n次（に）,つぎ（に）,"next, then, after that (conj.)",\n傾向,けいこう,tendency,hai\n最近,さいきん,"recently, these days",\n変わる,か（わる）,to change (intransitive) (〜が）,\n変える,か（える）,to change (transitive) (〜を),\n確かに,たし（かに）,certainly,\n大切（な）,たいせつ（な）,important,hai\n調査,ちょうさ,"survey, inquiry, research",\n理由,りゆう,reason,hai\n少子化,しょうしか,decrease in number of children due to low birth rate,hai\n子供,こども,child,\n必ずしも,かなら（ずしも）,not necessarily,\n強い,つよ（い）,strong,\n関して,かん（して）,about; concerning,hai\n一般的（に）,いっぱんてき（に）,generally,hai\n楽（な）,らく（な）,"easy, comfortable",\n講義,こうぎ,lecture,\n点,てん,"point (mark, score, grade, point; also of an argument)",hai\n重要（な）,じゅうよう（な）,"important, principal, essential",hai\n第一,だいいち,"first, foremost, number one",hai\n年々,ねんねん,every year,\n付き合い,つ（き）あ（い）,socialization; association,\n時代,じだい,age; period; era,hai\n伺う,うかが（う）,to ask (hum. 聞く),\n玄関,げんかん,entrance (to house or building),\nもう一歩,（もう）いっぽ,just one more step (ie: just a bit more improvement),\n島,しま,island,\n・,ため,"sake, purpose, objective",\n・,もちろん,"definitely, certainly, naturally",\n好く,す（く）,to like (transitive を),\n少ない,すく（ない）,"few, low in number",\n・,また,also,\n場合,ばあい,"case, situation",';

const chap_note_list = [
  {
    topic: 'asdf',
    spec: 'asdf',
    subtopic_list: [
      {
        subtopic: 'asdf',
        desc: ['asdf']
      }
    ]
  }
];

const chap_grammar_list = [
  {
    grammar_point: '（〜に）気がつく',
    spec: '（〜に）気がつく',
    meaning: 'To notice 〜。  〜 caught one\'s attention',
    use: {
      text: 'The kanji of つく is 付く。 つく is a verb and is conjugated as such.  The thing which is noticed can be a noun or a phrase (sentence + の・こと).',
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
    meaning: 'Indicates that something has been done with a great deal of trouble.',
    use: {
      text: 'The true meaning and usage of せっかく is probably quite nuanced.  From what I have read, せっかく means that a positive opportunity has arisen or come about with effort (and, in certain scenarios, it would be/was a shame not to seize it or to have it go to waste).  There is a similar word わざわざ which means "someone has gone out of their way to do something".  Compare:',
      species: [
        {
          jap: 'せっかく来たのに、るすだった。：',
          eng: 'Even though I made a special trip (to see you), you were out.'
        },{
          jap: 'わざわざ来るにはおよばない。：',
          eng: 'There is no need to make a special trip (go out of your way to come by).'
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
    grammar_point: 'verb(plain)わけにはいく[neg.]',
    spec: 'verb(plain)わけにはいく[neg.]',
    meaning: 'Using verb(plain, pres., pos.) means "One cannot do certain things for social/moral/societal reasons.  Using verb(plain, pres. neg.) means "One can\'t help but to do verb"',
    use: {
      text: 'いく[neg.] is conjugated as いかない or いけません etc.  Meanings or using the [pos.] or [neg.] forms of verbs:',
      species: [
        {
          jap: 'verb(plain, pres., POS.)わけにはいかない：',
          eng: 'I cannot do verb for social/moral/societal reasons.'
        },{
          jap: 'verb(plain, pres., NEG.)わけにはいかない：',
          eng: 'I can\'t help but to verb.'
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
    meaning: 'But.  And yet.  (lit. "Having said that, ")',
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
    grammar_point: 'verb(plain, present)ために',
    spec: 'verb(plain)ために',
    meaning: 'In order to verb.',
    use: {
      text: 'ため means "purpose" or "sake".  Literally, you might translate verb(pl, pres)ために as "verb-purpose-ly".  Verbための will modify a following noun.  This translation is more difficult, but the literal translation is also fun (lit. "the for-the-purpose-of-verb noun").',
      species: [
        {
          jap: 'verbために',
          eng: 'In order to verb.  (lit. verb-pupose-ly)'
        },{
          jap: 'verbためのnoun',
          eng: 'A noun to verb.  (lit. A for-the-purpose-of-verb noun)'
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
    grammar_point: '（〜て）も',
    spec: '（〜て）も',
    meaning: 'Even when/if 〜',
    use: {
      text: 'Verbs and adjectives in the て form with the particle も gives the meaning "even when/if 〜".  The main sentence is usually in the non-past, as in "Even if A, B is so".  な adjectives and nouns take the form 〜であっても which is usually contracted to でも。 Conjugation as follows:',
      species: [
        {
          jap: 'verb(て）も',
          eng: ''
        },{
          jap: '（adjい)(て）も',
          eng: ''
        },{
          jap: '（adjな）であっても',
          eng: '　(or:（adjな）でも)'
        },{
          jap: '（noun）であっても',
          eng: '　(or:（noun）でも)'
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
    meaning: '〜ず connects sentences where the final verb would end as 〜なくて。 〜ずに is used in the same context as 〜ないで (ie: without doing).',
    use: {
      text: '〜ず is a negative form in classical Japanese.  The modern equivalent is 〜ない。 This helps a bit with figuring out the conjugation of 〜ず： Conjugate the verb as you would for ない but use ず instead.',
      species: [
        {
          jap: '（うverb）：',
          eng: '（うverb）／あ／ず'
        },{
          jap: '（るverb）：',
          eng: '（るverb）ず'
        },{
          jap: '　　　くる：',
          eng: 'こず（来る：来ず）'
        },{
          jap: '　　　する：',
          eng: 'せず'
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
    grammar_point: 'nounによると',
    spec: 'nounによると',
    meaning: 'According to 〜',
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
    grammar_point: 'noun化',
    spec: 'noun化',
    meaning: '〜ization.  Carries the meaning of 〜になる or 〜にする。',
    use: {
      text: 'Hard to translate or define.  Usually using the English suffix "〜ization" gets the point across.  Usually attached to kanji compounds.  Usually combined with する to mean "〜ize" or される "〜ized".  For example:',
      species: [
        {
          jap: '兵器（へいき）：',
          eng: 'weapon'
        },{
          jap: '兵器化：',
          eng: 'weaponization'
        },{
          jap: '兵器化する：',
          eng: 'to weaponize'
        },{
          jap: '兵器化される：',
          eng: 'to be weaponized'
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
    grammar_point: 'Causative-Passive (verb(caus.))(pass.)',
    spec: 'Causative-Passive (verb(caus.))(pass.)',
    meaning: 'To be made to verb',
    use: {
      text: 'Formed by conjugating a verb in the causative and then taking the passive of that form.  This ultimately ends up as ／あ／せられる which can be contracted to ／あ／される UNLESS such contraction would duplicate the さ。 Conjugation of the causative, passive, caus-pass, and contractions:',
      species: [
        {
          jap: 'causative（る）：',
          eng: 'verb[neg.](stem) + さ + せる (eg: 食べる：食べ：食べさせる）'
        },{
          jap: 'causative（う）：',
          eng: 'verb[neg.](stem) + せる (eg: 読む：読ま：読ませる）'
        },{
          jap: 'causative（する）：',
          eng: 'させる'
        },{
          jap: 'passive（る）：',
          eng: 'verb[neg.](stem) + ら + れる (eg: 食べる：食べ：食べられる）'
        },{
          jap: 'passive（う）：',
          eng: 'verb[neg.](stem) + れる (eg: 読む：読ま：読まれる）'
        },{
          jap: '／in general／',
          eng: ''
        },{
          jap: 'verb／あ／せられる：',
          eng: 'contracted to: verb／あ／される (unless it would duplicate a さ eg: 話させられる cannot become 話さされる)'
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
    other: 'LITERAL TRANSLATIONS YAY: "there is a causing done unto me".  Passive comes from the Latin "patior, pati, passus sum" meaning "to endure, to bear, to suffer".  Compare to "Passion of the Christ" (the suffering of Christ) or a doctor\'s "patient" (one who undergoes).  In Japanese, there is a direct and an indirect passive.  The direct passive is as it is in English, eg: "to be done".  There is a subject to which the action is done by an agent.  The indirect passive means something more like "There is an action done by an agent over which the subject".  In this case, the verb is used quite like the active voice, but the focus is on the fact that the subject could do nothing about the verb.  Compare: 『寿司が先生に作られる：The sushi is made by sensei.』 with 『寿司を先生に作られる：There is sushi is made by sensei (over which I or the sushi have no control, which may or may not infer negative context).』 The meanings are essentially the same, but using the particle が and を infers a different context.  I still don\'t really know how it exactly works.  BUT, this is all to clarify that the causative-passive has a meaning of "I am caused to verb outside of my control", per se.'
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














