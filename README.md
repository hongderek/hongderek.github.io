# shinzo-abes-dank-meme-emporium.github.io

Grammar and kanji resource for JAPN 0300.  JAPN 0400, 0500 work in progress.

Each chapter's grammar is transcribed, and kanji are transcribed as well (from the list, as well as from the reading).  Notes from lessons are recorded as well, but not comprehensively.

The most useful features are the Grammar Search and Kanji Search.  

  Grammar Search takes a query of the grammar topic in question.  Search has been generalized so that if a kanji is used in the grammar topic, either the kanji or hiragana readings of the topic are valid.  However, if hiragana is is given in the textbook for the grammar topic, only a hiragana search will return that topic, an equivalent kanji will not.  Search also queries the recorded English meaning, so English is also valid input but is generally less helpful.
    EXAMPLE SEARCHES:
    わけ (returns instances of grammar topics which contain 「わけ」 or 「訳」)
    訳 (returns instances of grammar topics which contain 「訳」but not those that contain 「わけ」)
    even though (returns instances of grammar meanings which contain "even though")
    

USES:
require.js
wanakana
jquery

# CHANGELOG:

9/15/2017
  got mobile basics down

9/12/2017 first changelog, features as of now:
  searchable kanji for 300, 400, and updating 500
    searches kanji and reading using kanji or hiragana
    parens, ~ ignored
    pressing "Search" with an empty term gives all entries
    CANNOT search using english meaning
  searchable grammar for 300, 400
    searches grammar topic using kanji or hiragana
    searches grammar meaning using kanji, hiragana, or english
    search term "　＋" (full width space and plus) combines search terms
    
    
  pages for 300, 400, and updating 500
    grammar section
    notes section
    kanji section
    
  all kanji sections feature kanji, reading, meaning, and furigana
    all kanji sections where a kanji was denoted as "must write" are highlighted yellow
    kanji sections for specific chapters feature toggling kanji, reading, and meaning
    
  experimental Jisho section, uses Jisho API 1.0
