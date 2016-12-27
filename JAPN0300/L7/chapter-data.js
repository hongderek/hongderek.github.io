"use strict";

const local_course_name = '日本語３００';
const local_course_path = 'JAPN0300'
const local_chap_name = '第７課';

const chap_kanji_str = 'kanji,reading,meaning,kaku\n誘う,さそ（う）,to invite (also: to seduce),hai\n試合,しあい,game,\n席,せき,seat,\n一緒,いっしょ,together,\n喜んで,よろこ（んで）,gladly,\n野球,やきゅう,baseball,\n古希,こき,seventy years of age,\nお祝い,（お）いわ（い）,celebration,hai\n〜歳,〜さい,〜 years old,\n秋葉原,あきはばら,Akihabara,\n部品,ぶひん,parts,hai\n組み立てる,く（み）た（てる）,to put together; to assemble,\n専門店,せんもんてん,specialist shops,hai\n電気街,でんきがい,electric store district,\n改札,かいさつ,ticket gate,\n出口,でぐち,exit,\n音,おと,sound,hai\n欲しい,ほ（しい）,to want (〜some noun),hai\n昔,むかし,the past; the olden days,hai\n映画監督,えいがかんとく,movie director,\n侍,さむらい,Samurai,hai\n徹夜する,てつや（する）,to stay up all night,\n・,きっと,"for sure, surely",\n盛ん（な）,さか（ん）（な）,popular (not for person),\n人気がある,にんき（がある）,popular (ie: has popularity),hai\n紹介,しょうかい,introduction (する：to introduce),\nその他,（その）た,And others (also read as （その）ほか）,hai\n訪問する,ほうもん（する）,to visit,\n３０年代,３０ねんだい,a 30 year old,\n前半,ぜんはん,first half,\n選手,せんしゅ,player,\n集める,あつ（める）,to gather (something) (transitive を),hai\n集まる,あつ（まる）,to gather (intransitive が),hai\n戦う,たたか（う）,to fight,\n簡単に,かんたん（に）,easily,\n負ける,ま（ける）,to lose,hai\n太平洋戦争,たいへいようせんそう,WWII,\n終わる,お（わる）,to end (intransitive が),hai\n始める,はじ（める）,to begin (transitive を),\n始まる,はじ（まる）,to begin (intransitive が）,hai\n戦死する,せんし（する）,to die in battle,\n活躍する,かつやく（する）,to play an active part in,\n増える,ふ（える）,to increase,hai\n優勝,ゆうしょう,"overall victory, championship",\n全国,ぜんこく,the entire nation,hai\n高校野球,こうこうやきゅう,high school baseball,\n県,けん,prefecture,hai\n地域,ちいき,region,hai\n予選,よせん,preliminary,\n大会,たいかい,(big) tournament,\n野球場,やきゅうじょう,baseball stadium,\n応援する,おうえん（する）,"to support, to cheer (transitive を)",\n私立,しりつ,"private (ie: founded with private fund, eg: private university, etc.)",hai\n観客,かんきゃく,spectator,\n欧米,おうべい,the West,hai\n伝統的（な）,でんとうてき（な）,traditional,hai\n名窯（な）,めいよ（な）,honorable,\n日本代表,にほんだいひょう,Japanese representative,\n相撲,すもう,Sumō wrestling,\n論文,ろんぶん,thesis,hai\n単語,たんご,"word, vocabulary",hai\n座る,すわ（る）,to sit,';


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
    topic: '初めて　vs　始める',
    spec: '初めて　vs　始める',
    subtopic_list: [
      {
        subtopic: '初めて and 始める are both read with「はじ」but they mean different things:',
        desc: ''
      },{
        subtopic: '初めて：',
        desc: '初めて means that "the first time doing something" (〜は初めてです）or "for the first time"（〜て初めて）(as in chapter 1).  初める also exists, but it is an auxilliary verb meaning "to begin to" and is read as 「そ（める）」.  初 is the correct kanji to use in はじめまして。'
      },{
        subtopic: '始める：',
        desc: '始める is an ichidan transitive verb meaning "to begin (something)".  始め is the kanji used in this chapter,「〜を始め」meaning "starting with 〜".  始 would be used in something like「始めましょう！」"Let\'s begin!"'
      },{
        subtopic: '>>>',
        desc: 'I\'ve seen 初めて be thought of as the kanji to mean "firstly" (in a temporal sense) (ie: the "first" something) whereas 始める is used to mean "to start" something (like an activity) (ie: the "beginning" of something).  For instance:'
      },{
        subtopic: '初：',
        desc: '初（はつ）：first, new'
      },{
        subtopic: '',
        desc: '最初（さい・しょ）：first, outset, beginning'
      },{
        subtopic: '',
        desc: '初恋（はつ・こい）：first love'
      },{
        subtopic: '',
        desc: '初音（はつ・ね）：first warbling of the new year (初音ミク）'
      },{
        subtopic: '始：',
        desc: '始める（はじ（める））：to begin something'
      },{
        subtopic: '',
        desc: '始まる（はじ（まる））：something begins'
      },{
        subtopic: '',
        desc: '始まり（はじ（まり））：the origin, beginning'
      },{
        subtopic: '',
        desc: '開始（かい・し）：the start, commencement, initiation'
      }
    ]
  }
];

const chap_grammar_list = [
  {
    grammar_point: '何と言っても',
    spec: '何と言っても',
    meaning: 'Undeniably; no doubt; by any account.  (lit. No matter what you say, lit.lit. Even if you say what/that)',
    use: {
      text: 'Pretty self explanitory phrase.',
      species: []
    },
    example: [
      {
        sentence: {
          ante: '『日本が経済たいこくになれたのは、',
          highlight: '何と言っても',
          post: 'アメリカのおかげだろう。』'
        },
        translation: 'No doubt it was thanks to America that Japan became an economic power.'
      }
    ],
    other: '...'
  },{
    grammar_point: '〜だっけ／〜だっけ',
    spec: '〜だっけ／〜だっけ',
    meaning: '〜、if I remember correctly; 〜、what was it again?; 〜、if I am right',
    use: {
      text: 'A phrase used to indicate that the speaker does not remember or is unsure about certain information that was known or told previously; trying to jog one\'s memory to remember again.  As opposed to asking a question to find out information for the first time.  This is why the past form is usually used.  Is only used in casual speech.  Usually used with the past（〜たっけ）but can also be used with the present where だ is used（だっけ）.  ですっけ cannot be used.',
      species: [
        {
          jap: 'Present tense + っけ',
          eng: ''
        },{
          jap: '',
          eng: 'nounだっけ'
        },{
          jap: '',
          eng: '（adjな）だっけ'
        },{
          jap: '',
          eng: 'ーーー (use with（adjい）いんだっけ）'
        },{
          jap: '',
          eng: 'ーーー (use with verb(plain, present)んだっけ）'
        },{
          jap: '',
          eng: '〜んだっけ'
        },{
          jap: 'Plain past + っけ',
          eng: ''
        },{
          jap: '',
          eng: 'nounだったっけ'
        },{
          jap: '',
          eng: '（adjな）だったっけ'
        },{
          jap: '',
          eng: '（adjい）かったっけ'
        },{
          jap: '',
          eng: 'verb(plain, past)っけ'
        },{
          jap: '',
          eng: '〜んだったっけ'
        },{
          jap: 'Polite past + っけ',
          eng: ''
        },{
          jap: '',
          eng: 'nounでしたっけ'
        },{
          jap: '',
          eng: '（adjな）でしたっけ'
        },{
          jap: '',
          eng: 'ーーー (use with （adjい）いんでしたっけ)'
        },{
          jap: '',
          eng: 'verb(stem)ましたっけ'
        },{
          jap: '',
          eng: '〜んでしたっけ'
        }
      ]
    },
    example: [
      {
        sentence: {
          ante: '『去年の夏も',
          highlight: '暑かったっけ',
          post: '。』'
        },
        translation: 'Last summer was also hot, if I remember correctly.'
      },{
        sentence: {
          ante: '『試験は',
          highlight: '来週だったっけ',
          post: '。』'
        },
        translation: 'The exam is next week, right? (lit. it was next week that the exam is if I remember correctly)'
      },{
        sentence: {
          ante: '『試験は',
          highlight: 'いつだったっけ',
          post: '。』'
        },
        translation: 'When was the exam, again?'
      },{
        sentence: {
          ante: '『郵便局の前にコンビニが',
          highlight: 'ありましたっけ',
          post: '。』'
        },
        translation: 'Is there a konbini in front of the post-office (I don\'t recall seeing it). (The "don\'t recall seeing it" carries the implication that you knew about it before but are now having trouble remembering)'
      }
    ],
    other: 'The usage of っけ to ask questions about the non-past (eg: Is there a konbini around here?; when is the test?) can be difficult to wrap your head around because a past form of the verb is used.  But, more precisely, when you use っけ you are asking about something that was known or mentioned in the past (eg: Was there a konbini around here?; When was the test, again?) as opposed to knowing about it for the first time.  If you really wanted to keep the past construction in translation, adding ", again?" makes it sound more natural and gets the "I heard it before but can\'t seem to remember it now" implication.'
  },{
    grammar_point: 'verb(plain)ようにする',
    spec: 'verb(plain)ようにする',
    meaning: 'To make an effort to do verb.  To make it a point to do verb.',
    use: {
      text: 'yup',
      species: []
    },
    example: [
      {
        sentence: {
          ante: '『日本語は毎日',
          highlight: '勉強するようにして',
          post: 'ください。』'
        },
        translation: 'Please make an effort to study Japanese every day.'
      }
    ],
    other: 'cf. verb(plain)ようになる'
  },{
    grammar_point: 'verb(stem)（始める・終わる）',
    spec: 'verb(stem)始める',
    meaning: '（始める：はじ（める））To begin verbing.  （終わる：お（わる））To finish verbing.',
    use: {
      text: 'Using the past forms of 始めろ・終わる means began/finished verbing.',
      species: [
        {
          jap: 'verb(stem)始める：',
          eng: 'To begin verbing.'
        },{
          jap: 'verb(stem)終わる：',
          eng: 'To finish verbing.'
        }
      ]
    },
    example: [
      {
        sentence: {
          ante: '『私が日本語を',
          highlight: '勉強し始めた',
          post: 'のは一年前です。』'
        },
        translation: 'It was one year ago that I started studying Japanese.'
      },{
        sentence: {
          ante: '『午前三時にやっと論文を',
          highlight: '書き終わりました',
          post: '。』'
        },
        translation: 'I finally finished writing the paper at 3am.'
      }
    ],
    other: '...'
  },{
    grammar_point: '(sentence）verb(stem)（sentence)',
    spec: '(sentence）verb(stem)（sentence)',
    meaning: 'The verb(stem) can be used as verb(て) to connect two sentences.',
    use: {
      text: 'This is generally restricted to written style.',
      species: []
    },
    example: [
      {
        sentence: {
          ante: '『コンビニへ',
          highlight: '行き',
          post: '、チーズを買った。』'
        },
        translation: 'I went to the konbini and bought cheese.'
      }
    ],
    other: '...'
  },{
    grammar_point: 'Q word + verb(て）も',
    spec: 'Q word + verb(て）も',
    meaning: 'No matter what/when/who/where/many times/etc. one verbs...',
    use: {
      text: 'Question words (eg: 何／いつ／だれ／どこ／何度／etc.) (with particles where needed) follwed by verb(て）も gives this meaning.',
      species: []
    },
    example: [
      {
        sentence: {
          ante: '『富士山は、',
          highlight: 'いつ見ても',
          post: 'きれいです。』'
        },
        translation: 'No matter when you look at it, Mt. Fuji is beautiful.'
      },{
        sentence: {
          ante: '『',
          highlight: '何を食べても',
          post: 'ふとらない人がうらやましいです。』'
        },
        translation: 'I envy people who do not get fat no matter what they eat.'
      },{
        sentence: {
          ante: '『東京の町は、',
          highlight: 'どこへ行っても',
          post: '人で込んでいます。』'
        },
        translation: 'Tōkyō is crowded with people no matter where you go.'
      }
    ],
    other: '...'
  },{
    grammar_point: '〜を始め',
    spec: '〜を始め',
    meaning: '"Starting with 〜, "; "Including 〜, "',
    use: {
      text: 'When you want to give a list of items, this phrase will be used to introduce the most obvious example and is usually followed by more examples.',
      species: []
    },
    example: [
      {
        sentence: {
          ante: '『アメリカではフットボール、',
          highlight: 'をはじめ、',
          post: 'バスケット、アイスホッケーなどのスポーツも盛んです。』'
        },
        translation: 'In America, popular sports include football, basketball, ice hockey, and others.'
      }
    ],
    other: '始め is different than 初めて、see notes for explaination.'
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











