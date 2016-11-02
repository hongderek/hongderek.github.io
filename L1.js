"use strict";

var chap_num = '１';

var chap_kanji_str = 'kanji,reading,meaning\n・,おじぎ,bow\n敬語,けいご,honorific expression\n初めて,はじ（めて）,for the first time\n留学する,りゅうがく（する）,to study abroad\n高校,こうこう,high school\n宿題,しゅくだい,homework\n教える,おし（える）,"to teach, to tell"\n友達,ともだち,friend\n大学院,だいがくいん,graduate school\n電気工学,でんきこうがく,electrical engineering\n専攻,せんこう,major (する：to major)\n学部,がくぶ,department (education)\n好き,す（き）,"a fondness, a liking"\n趣味,しゅみ,hobby\n一度,いちど,once\n〜に興味を持つ,（〜に）きょうみ（を）も（つ）,to have an interest in ~\n中学,ちゅうがく,middle school (junior high)\n家族,かぞく,"family, family members"\n遊ぶ,あそ（ぶ）,"to play, to have fun"\n文化,ぶんか,culture\n知識,ちしき,knowledge\n豊富（な）,ほうふ（な）,plenty\n卒業する,そつぎょう（する）,to graduage\n勤める,つと（める）,"to work (for), be employed (at)"\n休暇,きゅうか,vacation\n取る,と（る）,to take (ie: a class) (撮る：to take a picture)\n生まれる,う（まれる）,to be born\n育つ,そだ（つ）,to grow up\n名刺,めいし,business card\n所,ところ,place\n泊まる,と（まる）,"to stay (ie: a hotel, 旅館)"\n・,ていねい（な）,polite\n迎えに来る,むか（えに）く（る）,to go and get (ie: to pick up)\n見つかる,みつかる,to be found (intransitive)\n見つける,みつける,to find (transitive)\n呼ぶ,よ（ぶ）,to call (ie: call by name)\n自分,じぶん,oneself\n年上,としうえ,older\n年下,としした,younger\n時差ぼけ,じさ（ぼけ）,jet lag\n眠る,ねむ（る）,"to sleep, to be asleep (vs 寝る：go to bed)"\n連れて行く,つ（れて）い（く）,to take someone (along)\n結局,けっきょく,in the end\n適当（な）,てきとう（な）,appropriate\n引っ越す,ひっこ（す）,to move\n知人,ちじん,acquaintance\n若い,わかい,younger\n男性,だんせい,man\n自己紹介,じこしょうかい,self-introduction\n仕方,しかた,way of doing (something)\n習う,なら（う）,to learn\n中年,ちゅうねん,middle-aged\n女性,じょせい,woman\nお互いの,（お）たが（いの）,each other\n美しい,うつく（しい）,beautiful\n娘,むすめ,daughter\n考える,かんが（える）,"to think about, to consider"\n違う,ちが（う）,to differ (ie: is different)\n文法,ぶんぽう,grammar\n両親,りょうしん,parents';

var chap_grammar_list = [
{
  grammar_point: 'verb(plain past)ばかり',
  spec: 'verb(plain past)ばかり',
  meaning: 'Have just (verb)ed, have just finished (verb)ing.',
  use: 'ばかり can end a sentence (ばかり（だ・です)） and preceed conjunctions (ばかりだから) and other nouns (ばかりのｎｏｕｎ). [ie: nounal?]',
  example: '『勉強したばかりです。』I have just finished my homework.',
  other: '...'
},
{
  grammar_point: 'あの',
  spec: 'あの',
  meaning: 'あの refers to a noun that is not in sight.  あの is used when both the speaker and listener are familiar with the person or thing.',
  use: 'あの preceeds a noun.',
  example: '『あの人』that person',
  other: 'あの differs from その in that その refers to a noun with which only one person is familiar.'
},
{
  grammar_point: 'verb(plain)ようになる (ie: using なる with verbs)',
  spec: 'verb(plain)ようになる',
  meaning: 'Such (verb)ing has become [past] or will become [present] (or take place, etc.).',
  use: 'Conjugate なる in the [past] for verbing that has become.  Conjugate なる in the [present] for verbing that will become.',
  example: '『漢字を読めるようになりました。』I became able to read kanji.',
  other: 'Use dictionary, potential, 「〜ている」, etc. AND their negative forms.  It is useful to use this construction with verb(potential) ("I became able").'
},
{
  grammar_point: '(sentence)なあ',
  spec: '(sentence)なあ',
  meaning: 'Emphatic exclaimation of one\'s feeling or wish.  Implies self dialogue.',
  use: 'Sentence final particle.  Can be used to elicit response (id. 〜ね), which tends to be masculine.',
  example: '『食べたいなあ。』I want to eat!',
  other: '...'
},
{
  grammar_point: 'verb(plain, progressive, past)ところ',
  spec: 'verb(plain)ところ',
  meaning: 'Is about to verb [present], is currently (verb)ing [ている], has just (verb)ed [past].',
  use: 'Based on tense of verb(plain), meaning changes slightly.  ところ usually written with kana alone.  ところ declines as a noun.',
  example: '『食べるところです』I am just about to eat.\n『食べているところです』I am in the middle of eating.\n『食べたところです』I just ate.',
  other: '... [to look up: differenc between ばかり　ａｎｄ　ところ？]'
},
{
  grammar_point: 'verb(plain)ことに（なっている・なった）',
  spec: 'verb(plain)ことに（なってる・なった）',
  meaning: 'Expresses that a decision has been made for the speaker outside of their control.',
  use: 'Using なった reports that such decisions have been made.  Using なっている reports that future plans have been decided.  なっている is also used to describe rules, regulations, and social customs.',
  example: '『教室では日本語で話すことになっています。』You are expected to speak Japanese in the classroom.',
  other: '...'
}
];