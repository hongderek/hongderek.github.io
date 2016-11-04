"use strict";

const local_course_name = '日本語３００';

const local_chap_name = '第１課';

/**
{
  kanji: '',
  reading: '',
  meaning: '',
  (opt)kaku: 'hai' or ''
}
*/
const chap_kanji_str = 'kanji,reading,meaning,kaku\n・,おじぎ,bow,\n敬語,けいご,honorific expression,\n初めて,はじ（めて）,for the first time,\n留学する,りゅうがく（する）,to study abroad,hai\n高校,こうこう,high school,hai\n宿題,しゅくだい,homework,\n教える,おし（える）,"to teach, to tell",hai\n友達,ともだち,friend,\n大学院,だいがくいん,graduate school,hai\n電気工学,でんきこうがく,electrical engineering,\n専攻,せんこう,major (する：to major),hai\n学部,がくぶ,department (education),hai\n好き,す（き）,"a fondness, a liking",\n趣味,しゅみ,hobby,\n一度,いちど,once,\n〜に興味を持つ,（〜に）きょうみ（を）も（つ）,to have an interest in ~,\n中学,ちゅうがく,middle school (junior high),hai\n家族,かぞく,"family, family members",\n遊ぶ,あそ（ぶ）,"to play, to have fun",hai\n文化,ぶんか,culture,hai\n知識,ちしき,knowledge,\n豊富（な）,ほうふ（な）,plenty,\n卒業する,そつぎょう（する）,to graduage,hai\n勤める,つと（める）,"to work (for), be employed (at)",\n休暇,きゅうか,vacation,\n取る,と（る）,to take (ie: a class) (撮る：to take a picture),hai\n生まれる,う（まれる）,to be born,hai\n育つ,そだ（つ）,to grow up,hai\n名刺,めいし,business card,\n所,ところ,place,\n泊まる,と（まる）,"to stay (ie: a hotel, 旅館)",\n・,ていねい（な）,polite,\n迎えに来る,むか（えに）く（る）,to go and get (ie: to pick up),\n見つかる,みつかる,to be found (intransitive),\n見つける,みつける,to find (transitive),\n呼ぶ,よ（ぶ）,to call (ie: call by name),\n自分,じぶん,oneself,hai\n年上,としうえ,older,hai\n年下,としした,younger,hai\n時差ぼけ,じさ（ぼけ）,jet lag,\n眠る,ねむ（る）,"to sleep, to be asleep (vs 寝る：go to bed)",\n連れて行く,つ（れて）い（く）,to take someone (along),\n結局,けっきょく,in the end,\n適当（な）,てきとう（な）,appropriate,\n引っ越す,ひっこ（す）,to move,\n知人,ちじん,acquaintance,hai\n若い,わかい,younger,hai\n男性,だんせい,man,hai\n自己紹介,じこしょうかい,self-introduction,\n仕方,しかた,way of doing (something),\n習う,なら（う）,to learn,\n中年,ちゅうねん,middle-aged,\n女性,じょせい,woman,hai\nお互いの,（お）たが（いの）,each other,\n美しい,うつく（しい）,beautiful,\n娘,むすめ,daughter,\n考える,かんが（える）,"to think about, to consider",hai\n違う,ちが（う）,to differ (ie: is different),\n文法,ぶんぽう,grammar,hai\n両親,りょうしん,parents,';

const chap_grammar_list = [
{
  grammar_point: 'verb(plain past)ばかり',
  spec: 'verb(plain past)ばかり',
  meaning: 'Have just (verb)ed, have just finished (verb)ing.',
  use: 'ばかり can end a sentence (ばかり（だ・です)） and preceed conjunctions (ばかりだから) and other nouns (ばかりのｎｏｕｎ).',
  example: '『勉強<b class="eg-highlight">したばかり</b>です。』I have just finished my homework.',
  other: 'Grammatically, ばかり is technically a particle, but it seems to be like a noun?  (cf. Vところ for differences)'
},
{
  grammar_point: 'あの',
  spec: 'あの',
  meaning: 'あの refers to a noun that is not in sight.  あの is used when both the speaker and listener are familiar with the person or thing.',
  use: 'あの preceeds a noun.',
  example: '『<b class="eg-highlight">あの</b>人』that person',
  other: 'あの differs from その in that その refers to a noun with which only one person is familiar.'
},
{
  grammar_point: 'verb(plain)ようになる',
  spec: 'verb(plain)ようになる',
  meaning: 'Such (verb)ing has become (or came to be) [past] or will become (or will be) [present] (or take place, etc.).  (ie: using なる with verbs)',
  use: 'Conjugate なる in the [past] for verbing that has become.  Conjugate なる in the [present] for verbing that will become.',
  example: '『漢字を<b class="eg-highlight">読めるようになりました</b>。』I became able to read kanji.<br>『日本に興味を<b class="eg-highlight">持つようになった</b>。』I came to have an interest in Japan.',
  other: 'It is useful to use this construction with verb(potential) ("I became able").  Further, verb(potential)なりたい ("I want to become able").'
},
{
  grammar_point: '(sentence)なあ',
  spec: '(sentence)なあ',
  meaning: 'Emphatic exclaimation of one\'s feeling or wish.  Implies self dialogue.',
  use: 'Sentence final particle.  Can be used to elicit response (id. 〜ね), which tends to be masculine.',
  example: '『食べたい<b class="eg-highlight">なあ</b>。』I want to eat!',
  other: '...'
},
{
  grammar_point: 'verb(plain)ところ',
  spec: 'verb(plain)ところ',
  meaning: 'Is about to verb [present], is currently (verb)ing [ている], has just (verb)ed [past].',
  use: 'The meaning changes based on tense of verb(plain).  ところ usually written with kana alone.  ところ declines as a noun.',
  example: '『<b class="eg-highlight">食べるところ</b>です』I am just about to eat.<br>『<b class="eg-highlight">食べているところ</b>です』I am in the middle of eating.<br>『<b class="eg-highlight">食べたところ</b>です』I just ate.',
  other: 'Verb(plain past)ばかり can imply longer times of "just" (ie: I just moved here a week ago).  Verbところ carries a more immediate temporal definition.'
},
{
  grammar_point: 'verb(plain)ことに（なっている・なった）',
  spec: 'verb(plain)ことに（なっている・なった）',
  meaning: 'It has been decided that–.  Expresses that a decision has been made for the speaker outside of their control.',
  use: 'Using なった implies that such decisions have been made.  Using なっている reports that future plans have been decided.  なっている is also used to describe rules, regulations, and social customs.',
  example: '『教室では日本語で<b class="eg-highlight">話すことになっています</b>。』You are expected to speak Japanese in the classroom.',
  other: '...'
},
{
  grammar_point: 'noun(OR verb phraseの)は初めてです',
  spec: 'noun(OR verb phraseの)は初めてです',
  meaning: 'The subject\'s first noun (or (verb)ing).  Implies that it is the first time doing something.',
  use: 'You can only use this phrase in situations where the topic at hand is relevant to the situation you are in.',
  example: '(in a sushi restaurant, in response to 「お寿司を食べたことがありますか。」"Have you eaten sushi before?")<br>『いいえ、<b class="eg-highlight">お寿司は初じめてです</b>。』No, this is the first time.',
  other: 'Context is imporant in use and translation.'
},
{
  grammar_point: 'verb(stem)（にくい・やすい）',
  spec: 'v(stem)（にくい・やすい）',
  meaning: 'Something is difficult to verb (にくい).  Something is easy to verb (やすい).',
  use: 'にくい・やすい are い auxilliary adjectives attached to verb(stem)s.  These conjugate as い adjectives.  Usually, the something is marked with ~は。',
  example: '『あの漢字は、<b class="eg-highlight">読みにくい</b>です。』Kanji is difficult to read.',
  other: 'As a subtle point, it does not mean that verb(ing) is difficult, rather that something is difficult to verb.<br>『漢字は読みにくい。』"Kanji is difficult to read."<br>『漢字を読むのは難しい。』"Reading Kanji is difficult."<br>にくい as an adjective by itself means "detestable, hateful" and not "difficult".'
},
{
  grammar_point: 'verb(plain)ことにする',
  spec: 'verb(plain)ことにする',
  meaning: 'Decide to do –.  Implies active decision making by the subject.',
  use: 'Usually, する will be [past] to say that such decisions have been made.',
  example: '『寿司を<b class="eg-highlight">食べることにしました</b>。』I have decided to eat sushi.',
  other: 'cf: 「nounにする」To decide on noun.<br>cf: 「verb(plain)ことに（なっている・なった）」It has been decided that...'
},
{
  grammar_point: '(verb phrase A)[past]ら、(verb phrase B)[past]',
  spec: '(verb phrase A)[past]ら、(verb phrase B)[past]',
  meaning: 'When such A occured, then such B happened.  Expresses causual relationship between A and B.  It is implied that the event or outome in sentence B is unexpected.',
  use: 'Used to express causal relationship between events.  Also called「(sentence)たら、(sentence)」since verb(past) conjugations end in 〜た。',
  example: '『スタバに<b class="eg-highlight">行ったら</b>、先生にあいました。』When I went to Starbucks, I met 先生。',
  other: 'cf: 「(verb phrase A)[past]ら、(verb phrase B)[present]」is the conditional use of [past]ら (ie: 〜たら).  It means "If A, then B".  Note in difference of tense.'
},
{
  grammar_point: 'とてもverb(OR verb phrase)[neg]',
  spec: 'とてもverb(OR verb phrase)[neg]',
  meaning: 'Can\'t verb.  Expresses strong sense of impossibility.',
  use: 'Usually used with verb(potential)[neg] ("can\'t possibly verb").',
  example: '『僕は<b class="eg-highlight">とても</b>日本語を<b class="eg-highlight">話せない</b>。』It is impossible for me to speak Japanese.',
  other: '...'
},
{
  grammar_point: 'verb(stem)方',
  spec: 'verb(stem)方',
  meaning: 'The way of (verb)ing.  How to verb.  (lit. the verb way)',
  use: '方 in this case is a nounal suffix attached to verb(stem)s.  As such, verb(stem)方 is declined as a noun.',
  example: '『ダギーの<b class="eg-highlight">仕方</b>を教えて。』Teach me how to dougie.',
  other: 'IMPORTANT NOTES:<br>- verb(stem)方 is a noun phrase, so use の (not を) to connect preceeding nouns to the verb(stem) (as above)<br>- Additionally, as a noun phrase, adjectives describing the verb(stem)方 are in plain form (ie: not adverbial).  However, in translation, such adjectives will end up adverbially (as in the following example).<br>- fyi: you can put adjectives between nounのnoun (ie: nounの[adjいnoun] "[adj noun] of noun").  Therefore, you can also do nounの[adjいverb(stem)方] (eg:「ダギーの正しい仕方を教えて」"Teach me how to dougie correctly.")<br>- する＋方 is usually written as 仕方 and not し方。'
},
{
  grammar_point: '〜らしい',
  spec: '〜らしい',
  meaning: 'It seems that–.  Evidently, –.  Based on what one has heard.  Implies uncertainty about statement.',
  use: 'らしい in this case is an auxilliary adjective that can be used after noun, adjective, or verb phrases.  らしい ends the sentence in casual speech, らしいです in formal speech.<br>Formation:<br>（noun)・らしい<br>（いadj）い・らしい<br>（なadj）・らしい<br>（るverb）る・らしい<br>（うverb）う・らしい',
  example: '『和食は美味しい<b class="eg-highlight">らしい</b>です。』It seems Japanese food is good (, so I\'ve heard).',
  other: 'The use of らしい is quite nuanced and worth further explanation.  Refer to the main article on expressing hearsay (そうだ、らしい、ようだ、みたい）。'
},
{
  grammar_point: 'verb(て)初めてのnoun',
  spec: 'verb(て)初めてのnoun',
  meaning: 'The first noun after verb(ing);  The "first, after-(verb)ing" noun;  When/after verb phrase, there was noun for the first time.',
  use: 'Use the て form of the verb.',
  example: '『アメリカに<b class="eg-highlight">着いて初めてのカルチャーショック</b>だった。』It was a "first, after-(arriving in America)" culture shock.  After arriving in America, it was my first culture shock.',
  other: 'Since て implies sequence, it seems like you can translate the verb(て) as "After (verb)ing" or "When I (verb)ed" to smooth translation.'
},
{
  grammar_point: '(verb A(て))初めて(verb B)',
  spec: '(verb A(て))初めて(verb B)',
  meaning: 'The first (verb phrase B) when/after (verb phrase A);  When (verb A) happened, (verb B) occured for the first time.',
  use: 'I think て implies sequence.  ie: When (verb phrase A), then for the first time (verb phrase B)',
  example: '『アメリカに<b class="eg-highlight">着いて初めてハンバーガーを食べた</b>。』When I arrived in America, I ate a hamburger for the first time.',
  other: 'This construction seems to imply "first time ever" or "first time in my life".'
}
];

/**
{
  grammar_point: '',
  spec: '',
  meaning: '',
  use: '',
  example: '',
  other: ''
}
*/


/**
{
  grammar_point: '',
  spec: '',
  meaning: '',
  use: '',
  example: {
    sentence: {
      ante: '',
      highlight: '',
      post''
    },
    translation: ''
  },
  other: ''
}
*/













