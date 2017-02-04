"use strict";

const local_course_name = '日本語４００';
const local_course_path = 'JAPN0400'
const local_chap_name = '第８課';

/**
{
  kanji: '',
  reading: '',
  meaning: '',
  (opt)kaku: 'hai' or ''
}
*/
const chap_kanji_str = 'kanji,reading,meaning,kaku,教師,きょうし,teacher,,係の者,かかり（の）もの,person who handles a particular matter,,（〜と）代わる,か（わる）,to replace someone,,対象,たいしょう,target,,詳しい,くわ（しい）,detailed,hai,以後,いご,after,,個人,こじん,"individual, private, personal",hai,会社員,かいしゃいん,company employee,,主婦,しゅふ,housewife,,家庭教師,かていきょうし,private tutor,,相手をする,あいて（をする）,to keep company with,hai,親類,しんるい,relatives,,翻訳,ほんやく,translation,,特技,とくぎ,"special talent, skill",hai,雇う,やと（う）,to hire,hai,漂流者,ひょうりゅうしゃ,a person who goes adrift in the ocean,,大陸,たいりく,continent,hai,（〜に）流れ着く,なが（れ）つ（く）,to drift ashore,,感動する,かんどう（する）,"to be impressed, touched, moved",,祖先,そせん,ancestor,,伝説,でんせつ,legend,hai,憧れ,あこが（れ）,a longing,,鎖国,さこく,national isolation,hai,開国,さいこく,to open the country (する）,hai,白人,はくじん,White person,,入国,にゅうこく,to enter a country (する),hai,許す,ゆる（す）,"to permit, forgive",hai,決心する,けっしん（する）,"to be determined, decide (ie: 決める)",,日本近海,にほんきんかい,"""off the coast of Japan""",hai,捕鯨船,ほげいせん,whaling vessel,,方法,ほうほう,method,hai,幸い,さいわ（い）,fortunately,,（〜へ）向かう,む（かう）,to head twoard,,船長,せんちょう,ship captain,,陸地,りくち,land,,上陸,じょうりく,to land (する）,,幕府,ばくふ,the ＳＨＯＧＵＮＡＴＥ,,決定する,けってい（する）,"to be determined, decide (ie: 決める)",,難破する,なんぱ（する）,to be ship wrecked,,現れる,あらわ（れる）,"to appear (not ""to seem""), to turn up (not ""to get lit"")",,感じる,かん（じる）,"to feel (eg: that, a feeling, etc)",,通訳,つうやく,an interpreter,hai,不便（な）,ふべん（な）,inconvenient,hai,選ぶ,えら（ぶ）,"to choose, to select",,侍,さむらい,a ＳＡＭＵＲＡＩ,hai,学ぶ,まな（ぶ）,"to learn, to study",hai,送り返す,おく（り）かえ（す）,"to send back, to deport",,一生,いっしょう,throughout one\'s life,,死ぬ,し（ぬ）,to die,hai,病死する,びょうし（する）,to die from an illness,,語学,ごがく,language study,hai,天才,てんさい,genius,hai,求める,もと（める）,"to ask, to seek",,戻る,もど（る）,to return (ie: to come back),hai,江戸,えど,Edo (historic Tōkyō),hai,条約,じょうやく,a treaty,,日米,にちべい,Japan-US,hai,交渉,こうしょう,negotiation,hai,立派に,りっぱ（に）,splendidly,,役立つ,やくだ（つ）,to be useful,hai,・,〜のことで,(polite) 〜について,,・,そちら,"(polite) ""on your side"" (そこ）",,・,おります,(humble) います (ie: 〜ています）,,・,なんか,"(at the end of lists) ""like"" or ""etc.""",,・,ちょうど,"right, just, exactly",,翌〜,よく〜,"the next 〜 (eg: year, day, month, etc.)",,足りる,た（りる）,to be sufficient,,・,そのころ,"then, at that time",,探す,さが（す）,to look for,,受付,うけつけ,receptionist,,少々,しょうしょう,"a little, a short while (formal 少し）",,主任,しゅにん,person in charge,,手っ取り早い,てっとりはやい,quick and simple,,・,しゃべる,more casual 話す,,・,ＯＬ,office lady,,掲示板,けいじばん,bulletin board,,口,くち,(in context) job opening,,偏集,へんしゅう,editing (eg: a magazine),,早速〜する,さっそく（〜する）,to lost no time in 〜ing,,ぴったり（な）,ぴったり（な）,perfect fit,,思い出す,おも（い）だ（す）,"to recall, to remember (but not as in 覚える）",,（〜に）対す,たい（す）,towards 〜,,抱く,いだ（く）,to hold (transitive) (written expression),,・,やがて,"before long, soon",,方面,ほうめん,"direction, area",,驚く,おどろ（く）,to be surprised,,彼,かれ,3rd person male pronoun,,軍権,ぐんけん,warship';

const chap_note_list = [
  {
    topic: 'そう・らしい・よう',
    spec: 'そう・らしい・よう',
    subtopic_list: [
      {
        subtopic: '',
        desc: 
        [
          'そう：　hands to eyes',
          'らしい：hands to ears',
          'よう：　hands to read'
        ]
      }
    ]
  }
];

const chap_grammar_list = [
  {
    grammar_point: '別に（〜ない）',
    spec: '別に（〜ない）',
    meaning: '（漢字：べつ（に））Not particularly.',
    use: {
      text: 'Adverb.  Usually followed by a negative form of a verb.  Means that something is not particularly the case.',
      species: []
    },
    example: [
      {
        sentence: {
          ante: '『いいえ、',
          highlight: '別に',
          post: '何でも<b>ありません</b>。』'
        },
        translation: 'No, there is nothing particularly wrong.'
      },{
        sentence: {
          ante: '『ううん、',
          highlight: '別に',
          post: '。』'
        },
        translation: 'No, not particularly.'
      }
    ],
    other: '別 by itself means distinction, different, particular, seperate.'
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














