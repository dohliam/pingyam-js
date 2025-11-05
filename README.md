# Cantonese Romanization Converter - A tool for converting romanized Cantonese text

This is a simple client-based Javascript converter for romanized Cantonese text based on data from the [Pingyam database](https://github.com/kfcd/pingyam).

Features:

* Supports eight different forms of romanization (including IPA)
* Supports conversion to and from any two romanization standards
* Can be downloaded and used offline
* Mobile-friendly

## Supported romanization systems

* [Yale Romanization](https://en.wikipedia.org/wiki/Yale_romanization_of_Cantonese) (耶魯拼音)
* [Cantonese Pinyin](https://en.wikipedia.org/wiki/Cantonese_Pinyin) (教院拼音)
* [S. L. Wong Romanization](https://en.wikipedia.org/wiki/S._L._Wong_(romanisation)) (黃錫凌)
* [International Phonetic Alphabet](https://en.wikipedia.org/wiki/International_Phonetic_Alphabet) (國際音標)
* [Jyutping](https://en.wikipedia.org/wiki/Jyutping) (粵拼)
* [Canton Romanization](https://en.wikipedia.org/wiki/Guangdong_Romanization#Cantonese) (廣州拼音)
* [Sidney Lau Romanization](https://en.wikipedia.org/wiki/Sidney_Lau_romanisation) (劉錫祥)
* [Penkyamp](http://cantonese.wikia.com/wiki/Penkyamp) (粵語拼音字)

Note: Yale, SL Wong, and Penkyamp are available both using numerals and diacritics.

## Demo

There is an online demo [here](https://dohliam.github.io/pingyam/).

## Examples

* 月光光 照地堂 中秋看燈賞月忙
  * **Yale** (numerals): _yut9 gwong1 gwong1 jiu3 dei6 tong4 jung1 chau1 hon3 dang1 seung2 yut9 mong4_
  * **Yale** (diacritics): _yuht gwōng gwōng jiu deih tòhng jūng chāu hon dāng séung yuht mòhng_
  * **Cantonese Pinyin**: _jyt9 gwong1 gwong1 dziu3 dei6 tong4 dzung1 tsau1 hon3 dang1 soeng2 jyt9 mong4_
  * **S. L. Wong** (numerals): _jyt⁹ gwɔŋ¹ gwɔŋ¹ dziu³ dei⁶ tɔŋ⁴ dzʊŋ¹ tsɐu¹ hɔn³ dɐŋ¹ sœŋ² jyt⁹ mɔŋ⁴_
  * **S. L. Wong** (diacritics): _\_jyt 'gwɔŋ 'gwɔŋ ¯dziu _dei ˌtɔŋ 'dzʊŋ 'tsɐu ¯hɔn 'dɐŋ ´sœŋ \_jyt ˌmɔŋ_
  * **IPA**: _jy:t˨ kwɔ:ŋ˥ kwɔ:ŋ˥ tsi:u˧ tei˨ tʰɔ:ŋ˨˩ tsʊŋ˥ tsʰɐu˥ hɔ:n˧ tɐŋ˥ sœ:ŋ˧˥ jy:t˨ mɔ:ŋ˨˩_
  * **Jyutping**: _jyut6 gwong1 gwong1 ziu3 dei6 tong4 zung1 cau1 hon3 dang1 soeng2 jyut6 mong4_
  * **Canton Romanization**: _yud6 gwong1 gwong1 jiu3 déi6 tong4 zung1 ceo1 hon3 deng1 sêng2 yud6 mong4_
  * **Sidney Lau**: _yuet⁶ gwong¹ gwong¹ jiu³ dei⁶ tong⁴ jung¹ chau¹ hon³ dang¹ seung² yuet⁶ mong⁴_
  * **Penkyamp** (numerals): _yeud6 guong1 guong1 jiu3 dey6 tong4 jonk1 caw1 hon3 dank1 seong2 yeud6 mong4_
  * **Penkyamp** (diacritics): _yeùd guöng guöng jîu dèy tong jönk cäw hôn dänk seõng yeùd mong_

* 入實驗室㩒緊急掣
  * **Yale** (numerals): _yap9 sat9 yim6 sat7 gam6 gan2 gap7 jai3_
  * **Yale** (diacritics): _yahp saht yihm sāt gahm gán gāp jai_
  * **Cantonese Pinyin**: _jap9 sat9 jim6 sat7 gam6 gan2 gap7 dzai3_
  * **S. L. Wong** (numerals): _jɐp⁹ sɐt⁹ jim⁶ sɐt⁷ gɐm⁶ gɐn² gɐp⁷ dzɐi³_
  * **S. L. Wong** (diacritics): _\_jɐp _sɐt _jim 'sɐt \_gɐm ´gɐn 'gɐp ¯dzɐi_
  * **IPA**: _jɐp˨ sɐt˨ ji:m˨ sɐt˥ kɐm˨ kɐn˧˥ kɐp˥ tsɐi˧_
  * **Jyutping**: _jap6 sat6 jim6 sat1 gam6 gan2 gap1 zai3_
  * **Canton Romanization**: _yeb6 sed6 yim6 sed1 gem6 gen2 geb1 zei3 _
  * **Sidney Lau**: _yap⁶ sat⁶ yim⁶ sat¹ gam⁶ gan² gap¹ jai³_
  * **Penkyamp** (numerals): _yap6 sat6 yim6 sat1 gamp6 gant2 gap1 jay3_
  * **Penkyamp** (diacritics): _yàp sàt yìm sät gàmp gãnt gäp jây_

## See also

* [Pingyam database](https://github.com/kfcd/pingyam) - A comprehensive list of every possible Cantonese syllable in all major romanization systems
* [pingyam-rb](https://github.com/dohliam/pingyam-rb) - Ruby library for converting between Cantonese romanization systems

## License

Romanization data has been released under a [CC BY license](https://github.com/kfcd/pingyam/blob/master/LICENSE) by the [kfcd](https://github.com/kfcd/) project.

CSS by [Concise CSS](https://github.com/ConciseCSS/concise.css) ([MIT](https://github.com/ConciseCSS/concise.css/blob/master/LICENSE))

All other code in this repo is licensed under MIT.
