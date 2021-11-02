const questions = [
    {
        id: 1,
        period: '江戸時代',
        human: '徳川慶喜',
        questionOptions: [
            {
                questionText: '幼少期の話を聞かせてください',
                answerText: '厳しい父親の方針で、私の寝相を直す為に枕の両側に剃刀の刃を立てて寝かせられていたよ',
                readText: '厳しい父親の方針で、私のねぞうを直す為に枕の両側にカミソリの刃を立てて寝かせられていたよ'
            },
            {
                questionText: '人生のターニングポイントはいつですか？',
                answerText: '11歳の時に養子縁組に入ったことかな',
                readText: '11歳の時にようしえんぐみに入ったことかな'
            },
            {
                questionText: '色恋事情を教えて？',
                answerText: '隠棲生活をするにあたり20人ほどいた側室を2人に絞り皆で一緒に暮らしたよ。側室の2人が女同士で仲が良かったんだ',
                readText: 'いんせい生活をするにあたり20人ほどいたそくしつを2人に絞り皆で一緒に暮らしたよ。そくしつの2人が女同士で仲が良かったんだ',
            },
            {
                questionText: '趣味はなんですか？',
                answerText: '後半生はカメラにはまっていたよ',
                readText: 'こうはんせいはカメラにはまっていたよ'
            },
        ],
        questionOptionsSecond: [
            {
                questionText: '何か自慢できることありますか？',
                answerText: '大河ドラマでSMAPの草彅くんが私を演じてくれたらしいな',
                readText: 'たいがドラマでスマップのくさなぎくんが私を演じてくれたらしいな'
            },
            {
                questionText: 'あなたがやっていることは現代の職業で言ったら何になりますか？',
                answerText: '総理大臣かなぁ',
                readText: 'そうりだいじんかなぁ'
            },
            {
                questionText: 'どんな人って言われますか？',
                answerText: '先見の才があり優秀だと言われる一方で臆病者とも言われるよ',
                readText: 'せんけんのさいがあり優秀だと言われる一方でおくびょうものとも言われるよ'
            },
            {
                questionText: '黒歴史を教えて？',
                answerText: '敵を目の前にして、家臣を置いて逃げてしまったことだ',
                readText: '敵を目の前にして、カシンを置いて逃げてしまったことだ'
            },
        ],
        questionOptionsThird: [
            {
                questionText: 'あなたが関わる大きな出来事はなんですか？',
                answerText: '大政奉還であるな',
                readText: 'たいせいほうかんであるな'
            },
            {
                questionText: 'どんな政策を出しましたか？',
                answerText: 'ヨーロッパの行政組織を参考にした「慶應の改革」を推進したよ',
                readText: 'ヨーロッパのぎょうせいそしきを参考にした「けいおうの改革」を推進したよ'
            },
            {
                questionText: '',
                answerText: '',
                readText: ''
            },
            {
                questionText: '',
                answerText: '',
                readText: ''
            },
        ],
        questionOptionsFourth: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: 'あなたを一言で表すなら？',
                answerText: '徳川家最後の将軍であるな',
                readText: 'とくがわけさいごのしょうぐんであるな'
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: '',
                readText: ''
            },
        ],
        questionOptionsFifth: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
        ],
        image: require('../assets/img/徳川慶喜.png'),
        dialogue: 'わしの名前は徳川慶喜じゃ。',
        readDialogue: 'わしのっ、名前はっ、とくがわよしのぶじゃ。',
        explanationTitle: '江戸幕府15代将軍、徳川慶喜',
        explanationDetail: '水戸藩主徳川斉昭の7男。1874年に一橋家を継ぎ、将軍継嗣問題で一橋派におされたが実現せず。文久の改革では将軍後見職につき、1864年に朝廷を守る禁裏御守衛総督・摂海防禦指揮に任命された。1866年、将軍に就任、翌年、大政奉還を行った。',
    },

    {
        id: 1,
        period: '戦国時代',
        human: '織田信長',
        questionOptions: [
            {
                questionText: '西暦何年生まれですか？',
                answerText: '1534年に生まれたよ',
                readText: '1534年に生まれたよ'
            },
            {
                questionText: 'あなたの人生におけるライバルを教えてください',
                answerText: '若い頃ではあるがお兄ちゃんかなぁ',
                readText: '若い頃ではあるがお兄ちゃんかなぁ'
            },
            {
                questionText: '名言を教えてください',
                answerText: '「器用というのは他人の思惑の逆をする者だ。」周りと異なることをするには勇気がいるが、是非君にも自分のやりたいことに挑戦してみてほしい。',
                readText: '「器用というのは他人のしわくの逆をする者だ。」周りと異なることをするには勇気がいるが、是非キミにも自分のやりたいことに挑戦してみてほしい。'
            },
            {
                questionText: 'あなたは何をしている人ですか？',
                answerText: '武将だよ',
                readText: 'ぶしょうだよ'
            },
        ],
        questionOptionsSecond: [
            {
                questionText: '知り合いを1人教えてください',
                answerText: 'ポルトガルのルイス・フロイスは知り合いだよ',
                readText: 'ポルトガルのルイス・フロイスは知り合いだよ'
            },
            {
                questionText: '',
                answerText: '',
                readText: ''
            },
            {
                questionText: '趣味を教えてください。',
                answerText: '鷹狩りとか馬乗り、他にもたくさんあるよ。',
                readText: 'たかがりとかうまのり、他にもたくさんあるよ。'
            },
            {
                questionText: '戦い方のコツを教えてください。',
                answerText: '敵に戦闘の準備をする時間を与えずに攻撃するようにしていたよ',
                readText: '敵にせんとうの準備をする時間を与えずに攻撃するようにしていたよ'
            },
        ],
        questionOptionsThird: [
            {
                questionText: '実は〇〇な話ありますか？',
                answerText: '実は男色を好んでいたよ',
                readText: '実はなんしょくを好んでいたよ'
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: '',
                readText: ''
            },
            {
                questionText: 'どんな政策を出しましたか？',
                answerText: '商業を盛んにさせるための政策を出したよ',
                readText: '商業をさかんにさせるための政策を出したよ'
            },
        ],
        questionOptionsFourth: [
            {
                questionText: '死因は何ですか？',
                answerText: '自分もまさかとは思ったが家臣に謀反されて死んだよ',
                readText: '自分もまさかとは思ったがカシンにむほんされて死んだよ'
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '具体的な政策名を教えてください',
                answerText: '関所撤廃や楽市楽座だな',
                readText: 'せきしょてっぱいやらくいちらくざだな'
            },
        ],
        questionOptionsFifth: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
        ],
        image: require('../assets/img/織田信長.png'),
        dialogue: 'わしの名前は織田信長じゃ。',
        readDialogue: 'わしのっ、名前はっ、おだのぶながじゃ。',
        explanationTitle: '尾張の戦国大名、織田信長',
        explanationDetail: '尾張の守護大名織田氏は岩倉織田家と清洲織田家に分裂していたが、信長は清洲織田家の奉行織田信秀の子。1560年、桶狭間で今川義元を討ち、「天下布武」の印判を用いつつ、全国統一の事業を進めた。1573年、室町幕府を滅ぼし、畿内平定を達成したが、82年、本能寺の変に倒れた。',
    },
    {
        id: 1,
        period: '明治時代',
        human: '渋沢栄一',
        questionOptions: [
            {
                questionText: 'どこで生まれましたか？',
                answerText: '武蔵国といって現在の埼玉県にあたる場所で生まれたよ。',
                readText: '武蔵国といって現在の埼玉県にあたる場所で生まれたよ。'
            },
            {
                questionText: 'あなたは何をしている人ですか？',
                answerText: '経営者もやったことの一つだな',
                readText: '経営者もやったことの一つだな'
            },
            {
                questionText: '西暦何年生まれですか？',
                answerText: '1840年に生まれたよ。',
                readText: '1840年に生まれたよ。'
            },
            {
                questionText: '実は〇〇な話ある？',
                answerText: '実は68歳で側室との間に子供ができたんじゃ',
                readText: '実は68歳で側室との間に子供ができたんじゃ'
            },
        ],
        questionOptionsSecond: [
            {
                questionText: '人生のターニングポイントは？',
                answerText: 'いくつかあるが27歳の時のパリへの渡航がなければ今の私はなかったと思う',
                readText: 'いくつかあるが27歳の時のパリへの渡航がなければ今の私はなかったと思う'
            },
            {
                questionText: '何を経営してた？',
                answerText: '第一国立銀行はそのうちの一つだ。国立銀行条例をもとにして私が設立したよ。',
                readText: '第いち国立銀行はそのうちの一つだ。国立銀行条例をもとにして私が設立したよ。'
            },
            {
                questionText: '尊敬している人は？',
                answerText: '尊敬している人のうちの1人は平岡円四郎様だな。',
                readText: '尊敬している人のうちの1人は平岡えん四郎様だな。'
            },
            {
                questionText: '特技はなんですか？',
                answerText: 'そろばんが得意だよ。',
                readText: 'そろばんが得意だよ。'
            },
        ],
        questionOptionsThird: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '異名はありますか？',
                answerText: '日本資本主義の父と言われているらしいな。',
                readText: '日本資本主義の父と言われているらしいな。'
            },
            {
                questionText: '有名な知り合いを教えて?',
                answerText: '西郷隆盛殿や大久保利通殿は知り合いだぞ。',
                readText: '西郷隆盛殿や大久保利通殿は知り合いだぞ。'
            },
            {
                questionText: 'あなたの偉業を教えてください。',
                answerText: '現在のJR東日本、NHK、サッポロビールなど500以上の会社の設立に関わったよ。',
                readText: '現在のJR東日本、NHK、サッポロビールなど500以上の会社の設立に関わったよ。'
            },
        ],
        questionOptionsFourth: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '何か自慢できることはある？',
                answerText: '私がもうじき１万円札の顔になるらしいぞ。',
                readText: '私がもうじき１万円さつの顔になるらしいぞ。'
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
        ],
        questionOptionsFifth: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
        ],
        image: require('../assets/img/渋沢栄一.jpg'),
        dialogue: 'わしの名前は渋沢栄一じゃ',
        readDialogue:'わしのっ、名前はっ、渋沢栄一じゃ',
        explanationTitle: '明治の実業家、渋沢栄一',
        explanationDetail: '埼玉県の豪農出身。一橋家・幕府に仕え、1867年に欧州視察。明治政府の大蔵省に出仕、財制・幣制改革にあたる。退官後、第一国立銀行・大阪紡績会社創立など実業界で活躍。教育・社会事業にも尽力。',
    },
    {
        id: 1,
        period: '江戸時代',
        human: '葛飾北斎',
        questionOptions: [
            {
                questionText: '西暦何年生まれですか？',
                answerText: '1760年に生まれたよ。',
                readText: '1760年に生まれたよ。'
            },
            {
                questionText: 'あなたのやってることは現代の職業で言ったら何になりますか？',
                answerText: 'アーティストやの。',
                readText: 'アーティストやの。'
            },
            {
                questionText: '苦手なことはありますか？',
                answerText: '片付けをするのが苦手で部屋が汚くなると引越しを繰り返しておった。',
                readText: '片付けをするのが苦手で部屋が汚くなると引越しを繰り返しておった。'
            },
            {
                questionText: '尊敬している人は誰ですか？',
                answerText: '勝川春章先生じゃ。19歳の時に弟子入りしたぞ。',
                readText: 'かつ川しゅん章先生じゃ。19歳の時に弟子入りしたぞ。'
            },
        ],
        questionOptionsSecond: [
            {
                questionText: 'あなたはどの分野に影響を与えましたか？',
                answerText: '化政文化に影響を与えたよ',
                readText: '化政文化に影響を与えたよ'
            },
            {
                questionText: '作品を作るときに拘っていたことは何ですか？',
                answerText: '遠近法や配色に拘っていたよ。',
                readText: '遠近法や配色に拘っていたよ。'
            },
            {
                questionText: '何か自慢できることありますか？',
                answerText: 'この1000年で最も偉大な業績を残した世界の100人という特集に選出されたことがあるらしいよ。',
                readText: 'この1000年で最も偉大な業績を残した世界の100人という特集に選出されたことがあるらしいよ。'
            },
            {
                questionText: '実は〇〇な話ありますか？',
                answerText: '実は改名を30回したんじゃ。卍を名前の中に入れたこともあるぞ。',
                readText: '実は改名を30かいしたんじゃ。卍を名前の中に入れたこともあるぞ。'
            },
        ],
        questionOptionsThird: [
            {
                questionText: 'あなたは有名な人物に影響を与えましたか？',
                answerText: '歌川広重やヨーロッパのゴッホ、モネにも影響を与えたよ。',
                readText: '歌川広重やヨーロッパのゴっホ、モネにも影響を与えたよ'
            },
            {
                questionText: 'どういう作品を作りましたか？',
                answerText: '富士山を各地から眺めた46枚の図を作ったよ。',
                readText: '富士山を各地から眺めた46枚の図を作ったよ。'
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
        ],
        questionOptionsFourth: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '具体的な作品名はなんですか？',
                answerText: '富嶽三十六景だよ。その中でも凱風快晴、俗に言う赤富士が有名だな。評判が良かったから予定より10枚増やしたんじゃ。',
                readText: '富嶽三十六景だよ。その中でも凱風快晴、俗に言う赤富士が有名だな。評判が良かったから予定より10枚増やしたんじゃ。'
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
        ],
        questionOptionsFifth: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
        ],
        image: require('../assets/img/葛飾北斎.jpg'),
        dialogue: 'わしの名前は葛飾北斎じゃ。',
        readDialogue: 'わしのっ、名前はっ、葛飾北斎じゃ。',
        explanationTitle: '江戸の浮世絵師、葛飾北斎',
        explanationDetail: '1760~1849 浮世絵師、江戸の人。勝川春章に学び、狩野派・洋画など各種の画法も習得して独自の画風を開く。風景版画の「富嶽三十六景」などは、ヨーロッパ後期印象派の画家に影響を与え、ジャポニズムをうんだ。「北斎漫画」「画本東都遊」などの作品がある。',
    },
    {
        id: 1,
        period: '戦国時代',
        human: '武田信玄',
        questionOptions: [
            {
                questionText: '実は〇〇な話ありますか？',
                answerText: '実は自分専用の水洗トイレがあったんだ。鈴を鳴らすと家臣が裏から水を流してくれていたよ。',
                readText: '実は自分専用の水洗トイレがあったんだ。鈴を鳴らすと家臣が裏から水を流してくれていたよ。'
            },
            {
                questionText: '好きな言葉はありますか？',
                answerText: 'わしは古い中国の武将、孫子様を尊敬しており、「彼を知り、己を知れば、百戦殆（あやう）からず」という言葉が好きだな。',
                readText: 'わしは古い中国の武将、そんし様を尊敬しており、「彼を知り、おのれを知れば、百せんあやうからず」という言葉が好きだな。'
            },
            {
                questionText: '人生のターニングポイントは？',
                answerText: '実の父を追放してトップの座についた時だな。',
                readText: '実の父を追放してトップの座についた時だな。'
            },
            {
                questionText: '西暦何年生まれですか？',
                answerText: '1521年に生まれたよ。',
                readText: '1521年に生まれたよ。'
            },
        ],
        questionOptionsSecond: [
            {
                questionText: '何か自慢できることはありますか？',
                answerText: '大河ドラマの主人公として選出されたことがあるぞ。',
                readText: '大河ドラマの主人公として選出されたことがあるぞ'
            },
            {
                questionText: '失敗談はありますか？',
                answerText: '息子をリーダーに相応しくない人物に育ててしまったことだな。',
                readText: '息子をリーダーに相応しくない人物に育ててしまったことだな。'
            },
            {
                questionText: '特技はありますか？',
                answerText: 'スパイを戦に活用するイメージ戦略が得意だったよ。',
                readText: 'スパイを戦に活用するイメージ戦略が得意だったよ。'
            },
            {
                questionText: '有名な知り合いを教えてください。',
                answerText: '織田信長と一時期同盟を組んでいたよ。',
                readText: '織田信長と一時期、同盟を組んでいたよ。'
            },
        ],
        questionOptionsThird: [
            {
                questionText: '異名はありますか？',
                answerText: '甲斐の虎と呼ばれておるぞ。',
                readText: '甲斐の虎と呼ばれておるぞ。'
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: 'あなたが関わる大きな出来事はなんですか？',
                answerText: '長い領地争いである「川中島の戦い」であるな。',
                readText: '長い領地争いである「川中島の戦い」であるな。'
            },
            {
                questionText: 'あなたの人生におけるライバルは？',
                answerText: '長きに渡り領地争いをしていた上杉謙信であるかな。',
                readText: '長きに渡り、領地争いをしていた上杉謙信であるかな。'
            },
        ],
        questionOptionsFourth: [
            {
                questionText: '何か名言を残しましたか？',
                answerText: '疾きこと風の如く、徐かなること林の如く、侵掠すること火の如く、動かざること山の如し。',
                readText: 'はやきこと風のごとく、しずかなること林のごとく、しんりゃくすること火のごとく、動かざること山のごとし。'
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
        ],
        questionOptionsFifth: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
        ],
        image: require('../assets/img/武田信玄.jpg'),
        dialogue: 'わしの名前は武田信玄じゃ。',
        readDialogue: 'わしのっ、名前はっ、武田信玄じゃ。',
        explanationTitle: '戦国時代の武将、武田信玄',
        explanationDetail: '正式な名は晴信、出家して信玄と号す。父信虎の専断を嫌った家臣団に擁されて父を追放。家督を継いだ。信濃をめぐり上杉謙信と川中島の戦いで争い、駿河・遠江に兵を進めて徳川家康を三方原で破ったが、上京の途中で死去した。「甲州法度之次第」や信玄堤など優れた分国支配を行った。',
    },
    {
        id: 1,
        period: '鎌倉時代',
        human: '楠木正成',
        questionOptions: [
            {
                questionText: '異名はありますか？',
                answerText: '日本最高の名将、軍神の化身と言われているよ。',
                readText: '日本最高の名将、ぐんしんのけしんと言われているよ。'
            },
            {
                questionText: '好きな言葉は？',
                answerText: '孫子の「良将は戦わずして勝つ」であるな。',
                readText: 'そんしの「りょうしょうは戦わずして勝つ」であるな。'
            },
            {
                questionText: '親戚に有名な人はいる？',
                answerText: '観阿弥が私の甥っ子であるよ。',
                readText: 'かんあみが私の甥っ子であるよ。'
            },
            {
                questionText: '何か自慢できることある？',
                answerText: '築城・籠城の技術を発展させたことであるな。',
                readText: 'ちくじょう・ろうじょうの技術を発展させたことであるな。'
            },
        ],
        questionOptionsSecond: [
            {
                questionText: 'あなたが関わる大きな出来事はなんですか？',
                answerText: '元弘の乱であるな。',
                readText: 'げんこうのらんであるな。'
            },
            {
                questionText: 'あなたのやってることは現代の職業で言ったら何になる？',
                answerText: '国の代表の右腕という意味では官房長官であるかな。（国の代表（後醍醐天皇）の右腕）',
                readText: '国の代表のみぎうでという意味ではかんぼうちょうかんであるかな。'
            },
            {
                questionText: '何か名言を残しましたか？',
                answerText: '七生報国という言葉を晩年に残したよ。7回生まれ変わっても天皇の敵を滅ぼし国を報いたいという意味だよ。',
                readText: 'しちしょうほうこくという言葉をばんねんに残したよ。7回生まれ変わっても天皇の敵を滅ぼし国を報いたいという意味だよ。',
            },
            {
                questionText: 'あなたは社会にどのような影響を与えましたか？',
                answerText: '智・仁・勇の三徳の象徴とされ、その後の時代の人々の生き方の見本となった',
                readText: 'ち・じん・ゆうの三徳の象徴とされ、その後の時代の人々の生き方の見本となった'
            },
        ],
        questionOptionsThird: [
            {
                questionText: '元弘の乱はどういう戦いですか？',
                answerText: '鎌倉幕府とそれを打倒しようとする者達の戦いでおよそ２年間に渡り争いが続いたよ。',
                readText: 'ち・じん・ゆうのさんとくの象徴とされ、その後の時代の人々の生き方の見本となった'
            },
            {
                questionText: '誰の右腕として活躍しましたか？',
                answerText: '後醍醐天皇だよ。',
                readText: 'ごだいご天皇だよ。'
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '実は〇〇な話教えて？',
                answerText: '実は悪党と言われていたよ。',
                readText: '実はあくとうと言われていたよ。',
            },
        ],
        questionOptionsFourth: [
            {
                questionText: 'あなたの人生におけるライバルは？',
                answerText: '足利尊氏であるかな。共に鎌倉幕府を滅ぼしたがその後仲違いし戦争することになったよ。',
                readText: 'あしかがたかうじであるかな。共に鎌倉幕府を滅ぼしたがその後なかたがいし、戦争することになったよ。',
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
        ],
        questionOptionsFifth: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
        ],
        image: require('../assets/img/楠木正成.png'),
        dialogue: 'わしの名前は楠木正成じゃ。',
        readDialogue: 'わしのっ、名前はっ、くすのきまさしげじゃ。',
        explanationTitle: '河内国の悪党、楠木正成',
        explanationDetail: '鎌倉時代末期から南北朝時代にかけて大覚寺統の後醍醐天皇側の有力武将。1331年元弘の変にて赤坂城で挙兵、後に1336年湊川の戦いで足利尊氏に倒される',
    },
    {
        id: 1,
        period: '明治時代',
        human: '伊藤博文',
        questionOptions: [
            {
                questionText: '有名な知り合いはいますか？',
                answerText: '大久保利通は知り合いだよ。',
                readText: '大久保としみちは知り合いだよ。',
            },
            {
                questionText: 'どこで生まれたの？',
                answerText: '周防国で百姓の子として生まれたんだ。',
                readText: 'すおうのくにで、ひゃくしょうの子として生まれたんだ。',
            },
            {
                questionText: 'あなたの仕事は？',
                answerText: '政治家やんなー',
                readText: '政治家やんなー',
            },
            {
                questionText: 'あだ名はありますか？',
                answerText: '吐き捨てるほど女がいるという意味で箒というあだ名がついていたよ。',
                readText: '吐き捨てるほど女がいるという意味で、ほうきというあだ名がついていたよ。',
            },
        ],
        questionOptionsSecond: [
            {
                questionText: '実は、、って話ありますか？',
                answerText: '禁止されていたフグ料理の解禁のきっかけを作っちゃったよ。',
                readText: '禁止されていたフグ料理の解禁のきっかけを作っちゃったよ。',
            },
            {
                questionText: 'ユーを一言で言うなら？',
                answerText: '明治維新後の日本を牽引し、日本を近代化に導いた立役者やんな！',
                readText: '明治維新ごの日本を牽引し、日本を近代化に導いたたてやくしゃやんな！',
            },
            {
                questionText: '政治家としてどんなことをしましたか？',
                answerText: '初代韓国統監をしたよ。',
                readText: '初代韓国とうかんをしたよ。',
            },
            {
                questionText: 'ライバルは誰ですか？',
                answerText: 'うーん、山縣有朋かなー。',
                readText: 'うーん、やまがたありともかなー。',
            },
        ],
        questionOptionsThird: [
            {
                questionText: '人生におけるターニングポイントは何ですか？',
                answerText: '岩倉使節団の副使として、不平等条約の改正交渉と国家建設のモデルとして欧米諸国を参考にするためにアメリカに行ったことだよ。',
                readText: 'いわくらしせつだんのふくしとして、不平等条約の改正交渉と国家建設のモデルとして欧米諸国を参考にするためにアメリカにいったことだよ。',
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '役職は何でしたか？',
                answerText: '４度にわたり、内閣総理大臣を務めたよ。',
                readText: '４度にわたり、内閣総理大臣を務めたよ。',
            },
            {
                questionText: '死因は何ですか？',
                answerText: '中国のハルビン駅で、安重根に暗殺されちゃった。',
                readText: '中国のハルビン駅で、アン・ジュングンに暗殺されちゃった。',
            },
        ],
        questionOptionsFourth: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '自慢できることは何ですか？',
                answerText: '初代内閣総理大臣を務めたことさ！',
                readText: '初代内閣総理大臣を務めたことさ！',
            },
            {
                questionText: '',
                answerText: ''
            },
        ],
        questionOptionsFifth: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
        ],
        image: require('../assets/img/伊藤博文.png'),
        dialogue: 'わしの名前は伊藤博文じゃ。',
        readDialogue: 'わしのっ、名前はっ、伊藤ひろぶみじゃ。',
        explanationTitle: '初代内閣総理大臣、伊藤博文',
        explanationDetail: '明治期の日本の政治家。1885年内閣制度が創設され、初代内閣総理大臣に就任。明治時代に4度にわたって内閣制度発足以降の内閣総理大臣を務めたことで知られ、1次内閣時には明治憲法の起草の中心人物となり、2次内閣では日清講和条約の起草にあたった',
    },
    {
        id: 1,
        period: '鎌倉時代',
        human: 'フビライハン',
        questionOptions: [
            {
                questionText: '西暦何年生まれですか？',
                answerText: '1215年にこの地に降り立った。',
                readText: '1215年にこの地に降り立った',
            },
            {
                questionText: '知り合いを教えて？',
                answerText: 'ヨーロッパ商人のマルコ・ポーロだな。彼のおかげで、わしは権力を拡大しようと努力することになったな。',
                readText: 'ヨーロッパ商人のマルコ・ポーロだな。彼のおかげで、わしは権力を拡大しようと努力することになったな。',
            },
            {
                questionText: '人生のターニングポイントは？',
                answerText: '生まれた家系が良かったな。家系のおかげで力をつけることができたと思う。',
                readText: '生まれた家系が良かったな。家系のおかげで力をつけることができたと思う。',
            },
            {
                questionText: '実は〇〇な話教えて？',
                answerText: 'ワシは子供が２桁おるのじゃが、ワシのじっちゃんは100人子供がいたらしいぞ。',
                readText: 'ワシは子供が２桁おるのじゃが、ワシのじっちゃんは100人子供がいたらしいぞ。',
            },
        ],
        questionOptionsSecond: [
            {
                questionText: 'どこで生まれた？',
                answerText: 'アジア全土とヨーロッパまでも征服したあの国がワシの生まれた地じゃ。コロナが収束したらぜひ遊びに来てくれ',
                readText: 'アジアぜんどとヨーロッパまでも征服したあの国がワシの生まれた地じゃ。コロナが収束したらぜひ遊びに来てくれ',
            },
            {
                questionText: '夢はなんでしたか？',
                answerText: '世界統一を目指し頑張っておったな。',
                readText: '世界統一を目指し頑張っておったな。',
            },
            {
                questionText: '親戚に有名な人はいる？',
                answerText: '祖父が我が国を創立したな。じっちゃん愛してるよ❤️',
                readText: '祖父が我が国を創立したな。じっちゃん愛してるよ',
            },
            {
                questionText: '悔しかったことはありますか？',
                answerText: '日本に国書を送ったが、なかなか返信をくれなかったことだな。その出来事を機に日本を征服しようと決意したな。',
                readText: '日本にこくしょを送ったが、なかなか返信をくれなかったことだな。その出来事を機に日本を征服しようと決意したな。',
            },
        ],
        questionOptionsThird: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '何か成し遂げたことはありますか？',
                answerText: '現在の北京に「元」を建国し、皇帝となったことだな。「皇帝」という肩書きがカッコ良くって気に入っていたな',
                readText: '現在のぺきんにげんを建国し、皇帝となったことだな。「皇帝」という肩書きがカッコ良くって気に入っていたな',
            },
            {
                questionText: '苦手なことは？',
                answerText: '大雨の日にはあの日を思い出して、今でも苦しい気持ちになるな。',
                readText: '大雨の日にはあの日を思い出して、今でも苦しい気持ちになるな。',
            },
            {
                questionText: 'あなたの人生におけるライバルは？',
                answerText: '鎌倉幕府８代執権北条時宗じゃの。彼は防衛についての知恵もあり、運の強い奴であったのお。',
                readText: '鎌倉幕府８代しっけん、ほうじょうときむねじゃの。彼は防衛についての知恵もあり、運の強い奴であったのお。',
            },
        ],
        questionOptionsFourth: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: 'あなたが関わる大きな出来事はなんですか？',
                answerText: '日本と争った「元寇」であるな。日本では「文永の役」と「弘安の役」というらしいな。ぜひワシの血と汗と涙の戦乱を忘れないでくれ',
                readText: '日本と争ったげんこうであるな。日本ではぶんえいのえきとこうあんのえきというらしいな。ぜひワシの血と汗と涙の戦乱を忘れないでくれ',
            },
        ],
        questionOptionsFifth: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
        ],
        image: require('../assets/img/ふびらいはん.png'),
        dialogue: 'わしはフビライ・ハンじゃ。',
        readDialogue: 'わしのっ、名前はっ、フビライハンじゃ。',
        explanationTitle: 'モンゴル帝国5代皇帝、フビライ・ハン',
        explanationDetail: 'チンギス＝ハンの孫。中国に【元】を建国し、『世祖』となる。1271年征服した高麗を通じ日本に服属を要求するが8代執権北条時宗によってそれを拒否される【文永の役1274年、弘安の役1281年】',
    },
    {
        id: 1,
        period: '昭和時代',
        human: '田中角栄',
        questionOptions: [
            {
                questionText: '何か名言を残しましたか？',
                answerText: '「功は焦らなくても良い。自分に実力がありさえすれば、運は必ず回って来る。」さ',
                readText: '「こうは焦らなくても良い。自分に実力がありさえすれば、運は必ず回って来る。」さ',
            },
            {
                questionText: '若い頃は何をやっていましたか？',
                answerText: '土木会社を設立し、成功を納めたわい。もしかしたら人生軌道に乗り始めたのは、この頃からかもしれないな。',
                readText: 'どぼくがいしゃを設立し、成功を納めたわい。もしかしたら人生軌道に乗り始めたのは、この頃からかもしれないな。',
            },
            {
                questionText: '何か自慢できることある？',
                answerText: '自慢というほどでもないが、逮捕された経験が豊富な人間じゃ。',
                readText: '自慢というほどでもないが、逮捕された経験が豊富な人間じゃ。',
            },
            {
                questionText: '西暦何年生まれですか？',
                answerText: 'ワシは1918年生まれだ。',
                readText: 'ワシは1918年生まれだ。',
            },
        ],
        questionOptionsSecond: [
            {
                questionText: '実は〇〇な話教えて？',
                answerText: 'ワシは悪人のイメージが強いが、実は礼儀正しく心優しいんだ。ワシのいい人エピソードを聞いてくれるか？',
                readText: 'ワシは悪人のイメージが強いが、実は礼儀正しく心優しいんだ。ワシのいい人エピソードを聞いてくれるか？',
            },
            {
                questionText: '尊敬している人は？',
                answerText: '吉田茂先生であるな。とてもお世話になったから、本当に感謝しているな。',
                readText: '吉田しげる先生であるな。とてもお世話になったから、本当に感謝しているな。',
            },
            {
                questionText: '逮捕歴以外の経歴はありますか？',
                answerText: '郵政大臣、国務大臣、大蔵大臣、通商産業大臣を勤めた経験もあるな。これも自慢じゃな',
                readText: '郵政大臣、こくむ大臣、おおくら大臣、つうしょう産業大臣を勤めた経験もあるな。これも自慢じゃな',
            },
            {
                questionText: '異名はありますか？',
                answerText: '皆ワシを今太閤や闇将軍と呼んでおった。これらの異名からもわかると思うが、ワシはかなり影響力を持っていたということだな。',
                readText: 'みなワシをいまたいこうややみ将軍と呼んでおった。これらのいみょうからもわかると思うが、ワシはかなり影響力を持っていたということだな。',
            },
        ],
        questionOptionsThird: [
            {
                questionText: '',
                answerText: '',
                readText: '',
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '人生最高の成功体験はありますか？',
                answerText: '貧相な家庭出身のワシが、最年少で総理大臣になった。支持率70%越えのかっこいい総理をしていたな。',
                readText: '貧相な家庭出身のワシが、最年少で総理大臣になった。支持率70%越えのかっこいい総理をしていたな。',
            },
            {
                questionText: 'あなたは社会にどのような影響を与えましたか？',
                answerText: '影響力を持っていたワシは日本列島改造論を発表し、国民の関心を引きつけたな。',
                readText: '影響力を持っていたワシは日本列島かいぞう論を発表し、国民の関心を引きつけたな。',
            },
        ],
        questionOptionsFourth: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '何か成し遂げたことはありますか？',
                answerText: '総理になった時、日中国交正常化をすると決め、それを成し遂げたな。',
                readText: '総理になった時、にっちゅうこっこう正常化をすると決め、それを成し遂げたな。',
            },
            {
                questionText: 'あなたが関わる大きな出来事はなんですか？',
                answerText: 'やはりワシと言ったらロッキード事件じゃ。ロッキード社の旅客機受注をめぐる汚職事件で世間を騒がせてしまったな...',
                readText: 'やはりワシと言ったらロッキード事件じゃ。ロッキード社の旅客機受注をめぐる汚職事件でせけんを騒がせてしまったな...',
            },
        ],
        questionOptionsFifth: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
        ],
        image: require('../assets/img/田中角栄.png'),
        dialogue: 'わしの名前は田中角栄じゃ。',
        readDialogue: 'わしのっ、名前はっ、田中かくえいじゃ。',
        explanationTitle: '第64、65代内閣総理大臣、田中角栄',
        explanationDetail: '第一次政権では『日本列島改造論』を掲げ、1972年日中共同声明にて、中国との国交が正式に開かれた。第二次政権では第四次中東戦争からの第一次石油危機【オイルショック】が発生',
    },
    {
        id: 1,
        period: '鎌倉時代',
        human: '源頼朝',
        questionOptions: [
            {
                questionText: '何か自慢できることある？',
                answerText: '自分で言うのもなんじゃが容姿が整っており、周りからまるでスーパースターかのようにモテていたんじゃ🤪',
                readText: '自分で言うのもなんじゃが容姿が整っており、周りからまるでスーパースターかのようにモテていたんじゃ',
            },
            {
                questionText: '何か名言を残しましたか？',
                answerText: '大事を思ひはからふ者、物とがめをせず、事ならぬことを事になさず。',
                readText: 'だいじをおもひはからふもの、ものとがめをせず、ことならぬことをことになさず。',
            },
            {
                questionText: '何年に生まれた？',
                answerText: '1147年に生まれたよ',
                readText: '1147年に生まれたよ',
            },
            {
                questionText: 'あなたのやってることは現代の職業で言ったら何になる？',
                answerText: '総理大臣か、大統領やな',
                readText: '総理大臣か、大統領やな',
            },
        ],
        questionOptionsSecond: [
            {
                questionText: '身内で有名人おる？',
                answerText: '妻が北条政子である',
                readText: '妻がほうじょうまさこである',
            },
            {
                questionText: '何か成し遂げたことはありますか？',
                answerText: '初の征夷大将軍になったことじゃ',
                readText: '初のせいいたいしょうぐんになったことじゃ',
            },
            {
                questionText: 'あなたは社会にどのような影響を与えましたか？',
                answerText: '幕府を開き、武士による政治が始まったんじゃ',
                readText: '幕府を開き、武士による政治が始まったんじゃ',
            },
            {
                questionText: 'あなたが関わる大きな出来事はなんですか？',
                answerText: '御恩と奉公、封建体制の成立じゃな',
                readText: 'ごおんとほうこう、ほうけん体制の成立じゃな',
            },
        ],
        questionOptionsThird: [
            {
                questionText: 'あなたの人生におけるライバルは？',
                answerText: '主に平家だと思っとる',
                readText: '主にへいけだと思っとる',
            },
            {
                questionText: '他に何か成し遂げたことはありますか？',
                answerText: '1185 年に鎌倉幕府をつくった',
                readText: '1185 年にかまくら幕府をつくった',
            },
            {
                questionText: 'ゆかりの地は？',
                answerText: '相模国、鎌倉の地じゃな',
                readText: 'さがみのくに、かまくらのちじゃな',
            },
            {
                questionText: '実は〇〇な話教えて？',
                answerText: '実はわしは平家との戦いには参加しておらず弟の義経や範頼が戦っておった',
                readText: '実はわしはへいけとの戦いには参加しておらず弟のよしつねやのりよりが戦っておった',
            },
        ],
        questionOptionsFourth: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
        ],
        questionOptionsFifth: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
        ],
        image: require('../assets/img/源頼朝.png'),
        dialogue: 'わしの名前は源頼朝じゃ。',
        readDialogue: 'わしのっ、名前はっ、みなもとのよりともじゃ。',
        explanationTitle: '鎌倉幕府の初代征夷大将軍、源頼朝',
        explanationDetail: '平安時代末期から鎌倉時代初期の日本の武将。北条時政や北条義時などと平家打倒を試み、鎌倉を本拠地として占拠した。藤原氏を滅ぼし、1192年に征夷大将軍に任命された。',
    },
    {
        id: 1,
        period: '時代',
        human: '聖徳太子',
        questionOptions: [
            {
                questionText: '何年にうまれた？',
                answerText: 'ワシは574年にうまれた',
                readText: 'ワシは574年にうまれた',
            },
            {
                questionText: 'なんと呼ばれていましたか？',
                answerText: '厩戸皇子と呼ばれていたぜ',
                readText: 'うまやどのおうじと呼ばれていたぜ',
            },
            {
                questionText: 'あなたはどんな書物を残したの？',
                answerText: '蘇我馬子と共同で『天皇紀』と『国記』を編纂したよ',
                readText: 'そがのうまこと共同でてんのうきと、こきを編纂したよ',
            },
            {
                questionText: 'あなたは社会にどのような影響を与えましたか？',
                answerText: '倭の国が日本になるための土台を作ったな',
                readText: 'わの国が日本になるための土台を作ったな',
            },
        ],
        questionOptionsSecond: [
            {
                questionText: 'あなたが関わる大きな出来事はなんですか？',
                answerText: '寺を作ったな',
                readText: '寺を作ったな',
            },
            {
                questionText: 'あなたは誰の知り合いですか',
                answerText: '蘇我馬子じゃ',
                readText: 'そがのうまこじゃ',
            },
            {
                questionText: '何か成し遂げたことはありますか？',
                answerText: '603年に冠位十二階の制という出世システムを作りだした',
                readText: '603年にかんいじゅうにかいのせいという出世システムを作りだした',
            },
            {
                questionText: '何か自慢できることある？',
                answerText: '10人の話を同時に聞けたんじゃ',
                readText: '10人の話を同時に聞けたんじゃ',
            },
        ],
        questionOptionsThird: [
            {
                questionText: 'あなたの仕事は？',
                answerText: '政治の補佐じゃな',
                readText: '政治の補佐じゃな',
            },
            {
                questionText: '誰の右腕として活躍しましたか？',
                answerText: '推古天皇だな',
                readText: 'すいこ天皇だな',
            },
            {
                questionText: '他には何成し遂げた？',
                answerText: '604年に我が国初の成文法、憲法十七条を制定した',
                readText: '604年に我が国、初のせいぶんほう、けんぽうじゅうななじょうを制定した',
            },
            {
                questionText: '',
                answerText: ''
            },
        ],
        questionOptionsFourth: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: 'あなたといえば？',
                answerText: '小野妹子を遣隋使として派遣したな',
                readText: 'おののいもこをけんずいしとして派遣したな',
            },
            {
                questionText: '',
                answerText: ''
            },
        ],
        questionOptionsFifth: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
        ],
        image: require('../assets/img/聖徳太子.png'),
        dialogue: 'わしの名前は聖徳太子じゃ。',
        readDialogue: 'わしのっ、名前はっ、しょうとく、たいしじゃ。',
        explanationTitle: '飛鳥時代の皇族・政治家、聖徳太子',
        explanationDetail: '推古天皇と蘇我馬子と協力し、遣隋使を派遣し大陸の文化や制度を日本に取り入れた。階位十二階や十七条憲法を定め、中央集権国家体制を確立した。',
    },
    {
        id: 1,
        period: '江戸時代',
        human: '伊能忠敬',
        questionOptions: [
            {
                questionText: '西暦何年生まれですか？',
                answerText: '1745年生まれじゃ',
                readText: '1745年生まれじゃ',
            },
            {
                questionText: '実は○○な話ある？',
                answerText: '実はわしは商才があったんじゃ',
                readText: '実はわしはしょうさいがあったんじゃ',
            },
            {
                questionText: 'あなたの仕事は？',
                answerText: 'いろいろやったが、天文学者もやったなぁ',
                readText: 'いろいろやったが、てんもんがくしゃもやったなぁ',
            },
            {
                questionText: '何かエピソードある？',
                answerText: '今でいうと定年退職後に大学に入学するようなことをやっていたのお',
                readText: '今でいうと定年退職後に大学に入学するようなことをやっていたのお',
            },
        ],
        questionOptionsSecond: [
            {
                questionText: 'どんな性格だったの？',
                answerText: '厳格な性格じゃったよ',
                readText: '厳格な性格じゃったよ',
            },
            {
                questionText: '実は〇〇、もっと聞きたい！',
                answerText: 'あることをするために3.5万キロ歩いたことがあるのじゃ',
                readText: 'あることをするためにさんてんご万キロ歩いたことがあるのじゃ',
            },
            {
                questionText: '天文学で有名になった人？',
                answerText: 'わしは別のことで有名じゃな',
                readText: 'わしは別のことで有名じゃな',
            },
            {
                questionText: 'それって具体的にどんなこと？',
                answerText: '四十九歳に隠居をして江戸に移り住んだんじゃ',
                readText: '四十九歳に隠居をしてえどに移りすんだんじゃ',
            },
        ],
        questionOptionsThird: [
            {
                questionText: '偉業はなんかある？',
                answerText: '大日本沿海輿地全図を作ったことじゃ。（伊能図とも言われてる）',
                readText: 'だいにほんえんかいよちぜんずを作ったことじゃ。',
            },
            {
                questionText: 'なんのために歩いたの？',
                answerText: '測量をしたんじゃ',
                readText: '測量をしたんじゃ',
            },
            {
                questionText: 'それは天文学に関係する？',
                answerText: '距離を測ったりするという意味では関係あるのう',
                readText: '距離を測ったりするという意味では関係あるのう',
            },
            {
                questionText: '江戸に移り住んでなにしてた？',
                answerText: '19歳年下のやつから天文学を教わったのう',
                readText: '19歳年下のやつからてんもんがくを教わったのう',
            },
        ],
        questionOptionsFourth: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '距離を測ってなにしてたの？',
                answerText: '日本中を歩き回って測量したのお',
                readText: '日本中を歩き回って測量したのお',
            },
            {
                questionText: '誰に天文学を教わったの？',
                answerText: '高橋至時くんじゃ',
                readText: 'たかはしよしときくんじゃ',
            },
        ],
        questionOptionsFifth: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
        ],
        image: require('../assets/img/伊能忠敬.png'),
        dialogue: 'わしの名前は伊能忠敬じゃ。',
        readDialogue: 'わしのっ、名前はっ、いのうただたかじゃ。',
        explanationTitle: '江戸時代の測量家、伊能忠敬',
        explanationDetail: '55~71歳の時、日本中を歩き回りながら測量し、日本地図を完成した。作成した地図はヨーロッパでも高く評価され、明治以降には日本地図として使われることになった。',
    },
    {
        id: 1,
        period: '平安時代',
        human: '源義経',
        questionOptions: [
            {
                questionText: '西暦何年生まれですか？',
                answerText: '1159年に生まれたよ。',
                readText: '1159年に生まれたよ。'
            },
            {
                questionText: '小さい頃のエピソードを教えてください。',
                answerText: '赤ん坊の時に敵に殺されかけたが母親が懇願して見逃してくれたんだ。',
                readText: '赤ん坊の時に敵に殺されかけたが母親が懇願して見逃してくれたんだ。'
            },
            {
                questionText: 'あなたは社会にどのような影響を与えましたか？',
                answerText: '日本に幕府というものを作るきっかけとなったな。',
                readText: '日本に幕府というものを作るきっかけとなったな。'
            },
            {
                questionText: '何をしている人ですか？',
                answerText: '武将であるよ。',
                readText: '武将であるよ。'
            },
        ],
        questionOptionsSecond: [
            {
                questionText: '有名な知り合いはいますか？',
                answerText: '知り合いと言うのは気が引けるが、後白河上皇に直接命を受けたことがあるぞ。',
                readText: '知り合いと言うのは気が引けるが、ごしらかわじょうこうに直接めいを受けたことがあるぞ。'
            },
            {
                questionText: '死因は何ですか？',
                answerText: '共に仲間として戦ってきた兄に攻められたんだ。一切戦うことはせず、妻と４歳の娘を殺害した後に自害したよ。',
                readText: '共に仲間として戦ってきた兄に攻められたんだ。一切戦うことはせず、妻と４歳の娘を殺害した後に自害したよ。'
            },
            {
                questionText: 'ゆかりの地はどこですか？',
                answerText: '奥州平泉であるな。今も堂が残っていて2011年に世界遺産に登録されたらしいな。',
                readText: 'おうしゅうひらいずみであるな。今も堂が残っていて2011年に世界遺産に登録されたらしいな。'
            },
            {
                questionText: 'どういう戦い方をしていましたか？',
                answerText: '突然崖を駆け下りて奇襲をしたり船の操縦員を矢で射止めたりして敵の隙をつく戦い方をして大勝利を収めていたよ。',
                readText: '突然崖を駆け下りて奇襲をしたり船の操縦員を矢で射止めたりして敵の隙をつく戦い方をして大勝利を収めていたよ。'
            },
        ],
        questionOptionsThird: [
            {
                questionText: 'あなたが関わる大きな出来事はなんですか？',
                answerText: '治承・寿永の乱であるぞ。一般的には源平合戦と言われているな。',
                readText: 'じしょう・じゅえいの乱であるぞ。一般的にはげんぺい合戦と言われているな。'
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: 'あなたが信頼する人は誰ですか？',
                answerText: '部下の弁慶じゃ。',
                readText: '部下のべんけいじゃ。'
            },
            {
                questionText: '具体的には何の戦いで勝利しましたか？',
                answerText: '一ノ谷の戦い、屋島の戦い、そして壇ノ浦の戦いで勝利を収めたよ。',
                readText: 'いちのたにの戦い、やしまの戦い、そしてだんのうらの戦いで勝利を収めたよ。'
            },
        ],
        questionOptionsFourth: [
            {
                questionText: '',
                answerText: '',
                readText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '異名はありますか？',
                answerText: '牛若丸と呼ばれておった。',
                readText: 'うしわかまると呼ばれておった。'
            },
        ],
        questionOptionsFifth: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
        ],
        image: require('../assets/img/源義経.png'),
        dialogue: 'わしの名前は源義経じゃ。',
        readDialogue: 'わしのっ、名前はっ、みなもとのよしつねじゃ。',
        explanationTitle: '平安時代末期の武将、源義経',
        explanationDetail: '1159~89　頼朝の弟。幼名牛若丸。奥州に下り藤原秀衡（ふじわらのひでひら）の下で成長。頼朝挙兵に参じ、義仲（よしなか）・兵士討伐に功をあげた。後に頼朝と不仲になり、奥州に潜伏中、秀衡の子泰衡（やすひら）に攻められて自殺した。',
    },
    {
        id: 1,
        period: '室町時代',
        human: '足利義満',
        questionOptions: [
            {
                questionText: '西暦何年生まれですか？',
                answerText: '1369年生まれだよ',
                readText: '1369年生まれだよ'
            },
            {
                questionText: 'あなたの仕事は？',
                answerText: '将軍様じゃー！',
                readText: 'しょうぐんさまじゃー！'
            },
            {
                questionText: 'どこで生まれたの？',
                answerText: '京都どすえぇ〜',
                readText: '京都どすえぇ〜'
            },
            {
                questionText: '実は◯◯な話ってある？',
                answerText: '10歳で将軍になったって話かな',
                readText: '10歳で将軍になったって話かな'
            },
        ],
        questionOptionsSecond: [
            {
                questionText: '誰かに尊敬とかされたことある？',
                answerText: 'だいぶ後の人やけど、織田信長くんに尊敬されちゃったみたいやな',
                readText: 'だいぶあとの人やけど、織田信長くんに尊敬されちゃったみたいやな'
            },
            {
                questionText: 'あなたの地位は？',
                answerText: '平清盛に次いで２人目の太政大臣にまで登りつめたよ',
                readText:  'たいらのきよもりに次いで２人目のたいじょうだいじんにまで登りつめたよ'
            },
            {
                questionText: '一昔前にテレビに出てなかった？',
                answerText: '一休さんに出たよ！',
                readText: 'いっきゅうさんに出たよ！'
            },
            {
                questionText: 'なんか作ってないん？',
                answerText: '20歳の時に花の御所作ったったわい',
                readText: '20歳の時に花のごしょ作ったったわい'
            },
        ],
        questionOptionsThird: [
            {
                questionText: 'あだ名は？',
                answerText: '室町殿と呼ばれておった',
                readText: '室町どのと呼ばれておった'
            },
            {
                questionText: '何か誇れることは？',
                answerText: 'まあ、わいが将軍してた頃が室町時代で１番栄えてたってことかね',
                readText: 'まあ、わいが将軍してた頃が室町時代で１番栄えてたってことかね'
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '他にどんなこと行ってたの？',
                answerText: '「明」（中国）と勘合貿易を始めたよ',
                readText: '「みん」（中国）とかんごう貿易を始めたよ'
            },
        ],
        questionOptionsFourth: [
            {
                questionText: '偉業はなんかある？',
                answerText: '南北朝合一したったわい。あと、金があまっとったけん別荘建てたったわい！チナそれが、金閣なんよな〜',
                readText: 'なんぼくちょうごういつしたったわい。あと、金があまっとったけんべっそう建てたったわい！チナそれが、きんかくなんよな〜'
            },
            {
                questionText: 'おじいちゃん誰？',
                answerText: '足利尊氏といって、誇り高い祖父であったな',
                readText: 'あしかがたかうじといって、ほこり高い祖父であったな'
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
        ],
        questionOptionsFifth: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
        ],
        image: require('../assets/img/足利義満.png'),
        dialogue: 'わしの名前は足利義満じゃ。',
        readDialogue: 'わしのっ、名前はっ、あしかがよしみつじゃ。',
        explanationTitle: '室町幕府三代将軍、足利義満',
        explanationDetail: '南北朝統一を成し遂げ、室町幕府の権力を確立した。また金閣寺を建国し、北山文化を開花させた。室町時代の政治、経済、文化の最盛期を築いた。',
    },
    {
        id: 1,
        period: '室町時代',
        human: '足利尊氏',
        questionOptions: [
            {
                questionText: 'あなたの仕事は？',
                answerText: '将軍様じゃー！',
                readText: 'しょうぐんさまじゃー'
            },
            {
                questionText: 'どこで生まれたの？',
                answerText: '栃木県で生まれたよ。',
                readText: 'とちぎけんでうまれたよ'
            },
            {
                questionText: '西暦何年生まれですか？',
                answerText: '1305年生まれだよ',
                readText: '1305ねんうまれだよ'
            },
            {
                questionText: 'あなたの異名は？',
                answerText: '史上最大の逆賊って言われたり言われてなかったり・・・',
                readText: 'しじょうさいだいのぎゃくぞくっていわれたりいわれてなかったり'
            },
        ],
        questionOptionsSecond: [
            {
                questionText: '祖先に有名な人いる？',
                answerText: '源義家っちだね',
                readText: 'みなもとのよしいえっちだね'
            },
            {
                questionText: 'あなたのやっちゃった事件は？',
                answerText: '力を合わせて政治をしてた弟を対立してしまった時に毒殺したんだな、、',
                readText: 'ちからをあわせてせいじをしてたおとうとをたいりつしてしまったときにどくさつしたんだな'
            },
            {
                questionText: '関わった大きな戦とかってある？',
                answerText: '元弘の乱だね',
                readText: 'げんこうのらんだね'
            },
            {
                questionText: 'この前テレビに出てなかった？',
                answerText: '大河ドラマの「太平記」にでとったわい！',
                readText: 'たいがどらまのたいへいきにでとったわい'
            },
        ],
        questionOptionsThird: [
            {
                questionText: 'お父さん誰？',
                answerText: '足利貞氏くんだよ',
                readText: 'あしかがさだうじくんだよ'
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: 'ここだけの話ってある？',
                answerText: '元弘の乱に出陣するよう言われたけど、父の喪中だったから断ったんだけど、幕府に許してもらえなかったんよ（太平記より）',
                readText: 'げんこうのらんにしゅつじんするよういわれたけど、ちちのもちゅうだったからことわったんだけど、ばくふにゆるしてもらえなかったよ'
            },
            {
                questionText: '実はの話ってある？',
                answerText: '最初は鎌倉幕府側の人間だったんだけど、途中で裏切って後醍醐天皇側についたんや〜',
                readText: 'さいしょはかまくらばくふがわのにんげんだったんだけど、とちゅうでうらぎってごだいごてんのうがわについたんや〜'
            },
        ],
        questionOptionsFourth: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: 'あなたの偉業は？',
                answerText: '室町幕府つくりましたー！！新田義貞、楠木正成、後醍醐天皇の新政府を倒した後に、光明天皇をたててと色々苦労して幕府を作ったんよ。',
                readText: 'むろまちばくふつくりましたー！！にったよしさだ、くすのきまさしげ、ごだいごてんのうのしんせいふをたおしたあとに、こうめいてんのうをたててといろいろくろうしてばくふをつくったんよ'
            },
        ],
        questionOptionsFifth: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
        ],
        image: require('../assets/img/足利尊氏.png'),
        dialogue: 'わしの名前は足利尊氏じゃ。',
        readDialogue: 'わしのっ、名前はっ、あしかがたかうじじゃ。',
        explanationTitle: '室町幕府初代征夷大将軍、足利尊氏',
        explanationDetail: '鎌倉時代末期から南北朝時代の武将。後醍醐天皇とともに鎌倉幕府を倒し、室町幕府を築いた。',
    },
    {
        id: 1,
        period: '戦国時代',
        human: '斎藤道三',
        questionOptions: [
            {
                questionText: '西暦何年に生まれたの？',
                answerText: '1494年やな！',
                readText: '1494年やな！',
            },
            {
                questionText: 'どこで生まれたん？',
                answerText: '京都どすえぇ',
                readText: '京都どすえぇ',
            },
            {
                questionText: '10歳の時の名前なんなん？',
                answerText: '法蓮、、蓮舫ちゃうぞうい！',
                readText: 'ほうれん、、れんほうちゃうぞうい！',
            },
            {
                questionText: 'どんな人なの？',
                answerText: 'ワイは人を平気で騙せる非情な人間やったわい',
                readText: 'ワイは人を平気で騙せる非情な人間やったわい',
            },
        ],
        questionOptionsSecond: [
            {
                questionText: 'なんか自慢できることある？',
                answerText: 'パパと一緒に親子２代で、僧侶から油売り、ほんで大名に成り上がったんや！下克上最高！！',
                readText: 'パパと一緒に親子２代で、僧侶からあぶらうり、ほんでだいみょうに成り上がったんや！げこくじょう最高！！',
            },
            {
                questionText: '名言ある？',
                answerText: '「力で奪い取ったものは時を経て、力でもぎ取られる」と言ったな',
                readText: '「ちからで奪い取ったものは時を経て、ちからでもぎ取られる」と言ったな',
            },
            {
                questionText: '何か自慢できることあり？',
                answerText: '信長の城作りに影響を与えたんじゃ！',
                readText: 'のぶながのしろ作りに影響を与えたんじゃ！',
            },
            {
                questionText: 'どんなことをしてたの？',
                answerText: '武将をしちょったわい',
                readText: 'ぶしょうをしちょったわい',
            },
        ],
        questionOptionsThird: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: 'なんか武勇伝ある？',
                answerText: 'まあ、戦の最後死ぬ直前に遺言を書いて信長に自分の国をやったことやな',
                readText: 'まあ、いくさの最後死ぬ直前にゆいごんを書いてのぶながに自分の国をやったことやな',
            },
            {
                questionText: '具体的にはどんなことをしてたの？',
                answerText: '美濃国の戦国大名もしとった',
                readText: 'みののくにのせんごくだいみょうもしとった',
            },
        ],
        questionOptionsFourth: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: 'あだ名はある？',
                answerText: '美濃のマムシって呼ばれとったわい！',
                readText: 'みののマムシって呼ばれとったわい！',
            },
        ],
        questionOptionsFifth: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
        ],
        image: require('../assets/img/斎藤道三.png'),
        dialogue: 'わしの名前は斎藤道三じゃ。',
        readDialogue: 'わしのっ、名前はっ、斎藤どうさんじゃ。',
        explanationTitle: '美濃の戦国大名、斎藤道三',
        explanationDetail: '規秀（道三）の代に長井家を倒し、守護代斎藤氏の家名を奪って、土岐氏を追放。長男の義龍と争って敗北した。',
    },
    {
        id: 1,
        period: '江戸時代',
        human: '徳川慶喜',
        questionOptions: [
            {
                questionText: '幼少期の話を聞かせてください',
                answerText: '厳しい父親の方針で、私の寝相を直す為に枕の両側に剃刀の刃を立てて寝かせられていたよ',
                readText: '厳しい父親の方針で、私のねぞうを直す為に枕の両側にカミソリの刃を立てて寝かせられていたよ'
            },
            {
                questionText: '人生のターニングポイントはいつですか？',
                answerText: '11歳の時に養子縁組に入ったことかな',
                readText: '11歳の時にようしえんぐみに入ったことかな'
            },
            {
                questionText: '色恋事情を教えて？',
                answerText: '隠棲生活をするにあたり20人ほどいた側室を2人に絞り皆で一緒に暮らしたよ。側室の2人が女同士で仲が良かったんだ',
                readText: 'いんせい生活をするにあたり20人ほどいたそくしつを2人に絞り皆で一緒に暮らしたよ。そくしつの2人が女同士で仲が良かったんだ',
            },
            {
                questionText: '趣味はなんですか？',
                answerText: '後半生はカメラにはまっていたよ',
                readText: 'こうはんせいはカメラにはまっていたよ'
            },
        ],
        questionOptionsSecond: [
            {
                questionText: '何か自慢できることありますか？',
                answerText: '大河ドラマでSMAPの草彅くんが私を演じてくれたらしいな',
                readText: 'たいがドラマでスマップのくさなぎくんが私を演じてくれたらしいな'
            },
            {
                questionText: 'あなたがやっていることは現代の職業で言ったら何になりますか？',
                answerText: '総理大臣かなぁ',
                readText: 'そうりだいじんかなぁ'
            },
            {
                questionText: 'どんな人って言われますか？',
                answerText: '先見の才があり優秀だと言われる一方で臆病者とも言われるよ',
                readText: 'せんけんのさいがあり優秀だと言われる一方でおくびょうものとも言われるよ'
            },
            {
                questionText: '黒歴史を教えて？',
                answerText: '敵を目の前にして、家臣を置いて逃げてしまったことだ',
                readText: '敵を目の前にして、カシンを置いて逃げてしまったことだ'
            },
        ],
        questionOptionsThird: [
            {
                questionText: 'あなたが関わる大きな出来事はなんですか？',
                answerText: '大政奉還であるな',
                readText: 'たいせいほうかんであるな'
            },
            {
                questionText: 'どんな政策を出しましたか？',
                answerText: 'ヨーロッパの行政組織を参考にした「慶應の改革」を推進したよ',
                readText: 'ヨーロッパのぎょうせいそしきを参考にした「けいおうの改革」を推進したよ'
            },
            {
                questionText: '',
                answerText: '',
                readText: ''
            },
            {
                questionText: '',
                answerText: '',
                readText: ''
            },
        ],
        questionOptionsFourth: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: 'あなたを一言で表すなら？',
                answerText: '徳川家最後の将軍であるな',
                readText: 'とくがわけさいごのしょうぐんであるな'
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: '',
                readText: ''
            },
        ],
        questionOptionsFifth: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
        ],
        image: require('../assets/img/徳川慶喜.png'),
        dialogue: 'わしの名前は徳川慶喜じゃ。',
        readDialogue: 'わしのっ、名前はっ、とくがわよしのぶじゃ。',
        explanationTitle: '江戸幕府15代将軍、徳川慶喜',
        explanationDetail: '水戸藩主徳川斉昭の7男。1874年に一橋家を継ぎ、将軍継嗣問題で一橋派におされたが実現せず。文久の改革では将軍後見職につき、1864年に朝廷を守る禁裏御守衛総督・摂海防禦指揮に任命された。1866年、将軍に就任、翌年、大政奉還を行った。',
    },

    {
        id: 1,
        period: '戦国時代',
        human: '織田信長',
        questionOptions: [
            {
                questionText: '西暦何年生まれですか？',
                answerText: '1534年に生まれたよ',
                readText: '1534年に生まれたよ'
            },
            {
                questionText: 'あなたの人生におけるライバルを教えてください',
                answerText: '若い頃ではあるがお兄ちゃんかなぁ',
                readText: '若い頃ではあるがお兄ちゃんかなぁ'
            },
            {
                questionText: '名言を教えてください',
                answerText: '「器用というのは他人の思惑の逆をする者だ。」周りと異なることをするには勇気がいるが、是非君にも自分のやりたいことに挑戦してみてほしい。',
                readText: '「器用というのは他人のしわくの逆をする者だ。」周りと異なることをするには勇気がいるが、是非キミにも自分のやりたいことに挑戦してみてほしい。'
            },
            {
                questionText: 'あなたは何をしている人ですか？',
                answerText: '武将だよ',
                readText: 'ぶしょうだよ'
            },
        ],
        questionOptionsSecond: [
            {
                questionText: '知り合いを1人教えてください',
                answerText: 'ポルトガルのルイス・フロイスは知り合いだよ',
                readText: 'ポルトガルのルイス・フロイスは知り合いだよ'
            },
            {
                questionText: '',
                answerText: '',
                readText: ''
            },
            {
                questionText: '趣味を教えてください。',
                answerText: '鷹狩りとか馬乗り、他にもたくさんあるよ。',
                readText: 'たかがりとかうまのり、他にもたくさんあるよ。'
            },
            {
                questionText: '戦い方のコツを教えてください。',
                answerText: '敵に戦闘の準備をする時間を与えずに攻撃するようにしていたよ',
                readText: '敵にせんとうの準備をする時間を与えずに攻撃するようにしていたよ'
            },
        ],
        questionOptionsThird: [
            {
                questionText: '実は〇〇な話ありますか？',
                answerText: '実は男色を好んでいたよ',
                readText: '実はなんしょくを好んでいたよ'
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: '',
                readText: ''
            },
            {
                questionText: 'どんな政策を出しましたか？',
                answerText: '商業を盛んにさせるための政策を出したよ',
                readText: '商業をさかんにさせるための政策を出したよ'
            },
        ],
        questionOptionsFourth: [
            {
                questionText: '死因は何ですか？',
                answerText: '自分もまさかとは思ったが家臣に謀反されて死んだよ',
                readText: '自分もまさかとは思ったがカシンにむほんされて死んだよ'
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '具体的な政策名を教えてください',
                answerText: '関所撤廃や楽市楽座だな',
                readText: 'せきしょてっぱいやらくいちらくざだな'
            },
        ],
        questionOptionsFifth: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
        ],
        image: require('../assets/img/織田信長.png'),
        dialogue: 'わしの名前は織田信長じゃ。',
        readDialogue: 'わしのっ、名前はっ、おだのぶながじゃ。',
        explanationTitle: '尾張の戦国大名、織田信長',
        explanationDetail: '尾張の守護大名織田氏は岩倉織田家と清洲織田家に分裂していたが、信長は清洲織田家の奉行織田信秀の子。1560年、桶狭間で今川義元を討ち、「天下布武」の印判を用いつつ、全国統一の事業を進めた。1573年、室町幕府を滅ぼし、畿内平定を達成したが、82年、本能寺の変に倒れた。',
    },
    {
        id: 1,
        period: '明治時代',
        human: '渋沢栄一',
        questionOptions: [
            {
                questionText: 'どこで生まれましたか？',
                answerText: '武蔵国といって現在の埼玉県にあたる場所で生まれたよ。',
                readText: '武蔵国といって現在の埼玉県にあたる場所で生まれたよ。'
            },
            {
                questionText: 'あなたは何をしている人ですか？',
                answerText: '経営者もやったことの一つだな',
                readText: '経営者もやったことの一つだな'
            },
            {
                questionText: '西暦何年生まれですか？',
                answerText: '1840年に生まれたよ。',
                readText: '1840年に生まれたよ。'
            },
            {
                questionText: '実は〇〇な話ある？',
                answerText: '実は68歳で側室との間に子供ができたんじゃ',
                readText: '実は68歳で側室との間に子供ができたんじゃ'
            },
        ],
        questionOptionsSecond: [
            {
                questionText: '人生のターニングポイントは？',
                answerText: 'いくつかあるが27歳の時のパリへの渡航がなければ今の私はなかったと思う',
                readText: 'いくつかあるが27歳の時のパリへの渡航がなければ今の私はなかったと思う'
            },
            {
                questionText: '何を経営してた？',
                answerText: '第一国立銀行はそのうちの一つだ。国立銀行条例をもとにして私が設立したよ。',
                readText: '第いち国立銀行はそのうちの一つだ。国立銀行条例をもとにして私が設立したよ。'
            },
            {
                questionText: '尊敬している人は？',
                answerText: '尊敬している人のうちの1人は平岡円四郎様だな。',
                readText: '尊敬している人のうちの1人は平岡えん四郎様だな。'
            },
            {
                questionText: '特技はなんですか？',
                answerText: 'そろばんが得意だよ。',
                readText: 'そろばんが得意だよ。'
            },
        ],
        questionOptionsThird: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '異名はありますか？',
                answerText: '日本資本主義の父と言われているらしいな。',
                readText: '日本資本主義の父と言われているらしいな。'
            },
            {
                questionText: '有名な知り合いを教えて?',
                answerText: '西郷隆盛殿や大久保利通殿は知り合いだぞ。',
                readText: '西郷隆盛殿や大久保利通殿は知り合いだぞ。'
            },
            {
                questionText: 'あなたの偉業を教えてください。',
                answerText: '現在のJR東日本、NHK、サッポロビールなど500以上の会社の設立に関わったよ。',
                readText: '現在のJR東日本、NHK、サッポロビールなど500以上の会社の設立に関わったよ。'
            },
        ],
        questionOptionsFourth: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '何か自慢できることはある？',
                answerText: '私がもうじき１万円札の顔になるらしいぞ。',
                readText: '私がもうじき１万円さつの顔になるらしいぞ。'
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
        ],
        questionOptionsFifth: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
        ],
        image: require('../assets/img/渋沢栄一.jpg'),
        dialogue: 'わしの名前は渋沢栄一じゃ',
        readDialogue:'わしのっ、名前はっ、渋沢栄一じゃ',
        explanationTitle: '明治の実業家、渋沢栄一',
        explanationDetail: '埼玉県の豪農出身。一橋家・幕府に仕え、1867年に欧州視察。明治政府の大蔵省に出仕、財制・幣制改革にあたる。退官後、第一国立銀行・大阪紡績会社創立など実業界で活躍。教育・社会事業にも尽力。',
    },
    {
        id: 1,
        period: '江戸時代',
        human: '葛飾北斎',
        questionOptions: [
            {
                questionText: '西暦何年生まれですか？',
                answerText: '1760年に生まれたよ。',
                readText: '1760年に生まれたよ。'
            },
            {
                questionText: 'あなたのやってることは現代の職業で言ったら何になりますか？',
                answerText: 'アーティストやの。',
                readText: 'アーティストやの。'
            },
            {
                questionText: '苦手なことはありますか？',
                answerText: '片付けをするのが苦手で部屋が汚くなると引越しを繰り返しておった。',
                readText: '片付けをするのが苦手で部屋が汚くなると引越しを繰り返しておった。'
            },
            {
                questionText: '尊敬している人は誰ですか？',
                answerText: '勝川春章先生じゃ。19歳の時に弟子入りしたぞ。',
                readText: 'かつ川しゅん章先生じゃ。19歳の時に弟子入りしたぞ。'
            },
        ],
        questionOptionsSecond: [
            {
                questionText: 'あなたはどの分野に影響を与えましたか？',
                answerText: '化政文化に影響を与えたよ',
                readText: '化政文化に影響を与えたよ'
            },
            {
                questionText: '作品を作るときに拘っていたことは何ですか？',
                answerText: '遠近法や配色に拘っていたよ。',
                readText: '遠近法や配色に拘っていたよ。'
            },
            {
                questionText: '何か自慢できることありますか？',
                answerText: 'この1000年で最も偉大な業績を残した世界の100人という特集に選出されたことがあるらしいよ。',
                readText: 'この1000年で最も偉大な業績を残した世界の100人という特集に選出されたことがあるらしいよ。'
            },
            {
                questionText: '実は〇〇な話ありますか？',
                answerText: '実は改名を30回したんじゃ。卍を名前の中に入れたこともあるぞ。',
                readText: '実は改名を30かいしたんじゃ。卍を名前の中に入れたこともあるぞ。'
            },
        ],
        questionOptionsThird: [
            {
                questionText: 'あなたは有名な人物に影響を与えましたか？',
                answerText: '歌川広重やヨーロッパのゴッホ、モネにも影響を与えたよ。',
                readText: '歌川広重やヨーロッパのゴっホ、モネにも影響を与えたよ'
            },
            {
                questionText: 'どういう作品を作りましたか？',
                answerText: '富士山を各地から眺めた46枚の図を作ったよ。',
                readText: '富士山を各地から眺めた46枚の図を作ったよ。'
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
        ],
        questionOptionsFourth: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '具体的な作品名はなんですか？',
                answerText: '富嶽三十六景だよ。その中でも凱風快晴、俗に言う赤富士が有名だな。評判が良かったから予定より10枚増やしたんじゃ。',
                readText: '富嶽三十六景だよ。その中でも凱風快晴、俗に言う赤富士が有名だな。評判が良かったから予定より10枚増やしたんじゃ。'
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
        ],
        questionOptionsFifth: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
        ],
        image: require('../assets/img/葛飾北斎.jpg'),
        dialogue: 'わしの名前は葛飾北斎じゃ。',
        readDialogue: 'わしのっ、名前はっ、葛飾北斎じゃ。',
        explanationTitle: '江戸の浮世絵師、葛飾北斎',
        explanationDetail: '1760~1849 浮世絵師、江戸の人。勝川春章に学び、狩野派・洋画など各種の画法も習得して独自の画風を開く。風景版画の「富嶽三十六景」などは、ヨーロッパ後期印象派の画家に影響を与え、ジャポニズムをうんだ。「北斎漫画」「画本東都遊」などの作品がある。',
    },
    {
        id: 1,
        period: '戦国時代',
        human: '武田信玄',
        questionOptions: [
            {
                questionText: '実は〇〇な話ありますか？',
                answerText: '実は自分専用の水洗トイレがあったんだ。鈴を鳴らすと家臣が裏から水を流してくれていたよ。',
                readText: '実は自分専用の水洗トイレがあったんだ。鈴を鳴らすと家臣が裏から水を流してくれていたよ。'
            },
            {
                questionText: '好きな言葉はありますか？',
                answerText: 'わしは古い中国の武将、孫子様を尊敬しており、「彼を知り、己を知れば、百戦殆（あやう）からず」という言葉が好きだな。',
                readText: 'わしは古い中国の武将、そんし様を尊敬しており、「彼を知り、おのれを知れば、百せんあやうからず」という言葉が好きだな。'
            },
            {
                questionText: '人生のターニングポイントは？',
                answerText: '実の父を追放してトップの座についた時だな。',
                readText: '実の父を追放してトップの座についた時だな。'
            },
            {
                questionText: '西暦何年生まれですか？',
                answerText: '1521年に生まれたよ。',
                readText: '1521年に生まれたよ。'
            },
        ],
        questionOptionsSecond: [
            {
                questionText: '何か自慢できることはありますか？',
                answerText: '大河ドラマの主人公として選出されたことがあるぞ。',
                readText: '大河ドラマの主人公として選出されたことがあるぞ'
            },
            {
                questionText: '失敗談はありますか？',
                answerText: '息子をリーダーに相応しくない人物に育ててしまったことだな。',
                readText: '息子をリーダーに相応しくない人物に育ててしまったことだな。'
            },
            {
                questionText: '特技はありますか？',
                answerText: 'スパイを戦に活用するイメージ戦略が得意だったよ。',
                readText: 'スパイを戦に活用するイメージ戦略が得意だったよ。'
            },
            {
                questionText: '有名な知り合いを教えてください。',
                answerText: '織田信長と一時期同盟を組んでいたよ。',
                readText: '織田信長と一時期、同盟を組んでいたよ。'
            },
        ],
        questionOptionsThird: [
            {
                questionText: '異名はありますか？',
                answerText: '甲斐の虎と呼ばれておるぞ。',
                readText: '甲斐の虎と呼ばれておるぞ。'
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: 'あなたが関わる大きな出来事はなんですか？',
                answerText: '長い領地争いである「川中島の戦い」であるな。',
                readText: '長い領地争いである「川中島の戦い」であるな。'
            },
            {
                questionText: 'あなたの人生におけるライバルは？',
                answerText: '長きに渡り領地争いをしていた上杉謙信であるかな。',
                readText: '長きに渡り、領地争いをしていた上杉謙信であるかな。'
            },
        ],
        questionOptionsFourth: [
            {
                questionText: '何か名言を残しましたか？',
                answerText: '疾きこと風の如く、徐かなること林の如く、侵掠すること火の如く、動かざること山の如し。',
                readText: 'はやきこと風のごとく、しずかなること林のごとく、しんりゃくすること火のごとく、動かざること山のごとし。'
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
        ],
        questionOptionsFifth: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
        ],
        image: require('../assets/img/武田信玄.jpg'),
        dialogue: 'わしの名前は武田信玄じゃ。',
        readDialogue: 'わしのっ、名前はっ、武田信玄じゃ。',
        explanationTitle: '戦国時代の武将、武田信玄',
        explanationDetail: '正式な名は晴信、出家して信玄と号す。父信虎の専断を嫌った家臣団に擁されて父を追放。家督を継いだ。信濃をめぐり上杉謙信と川中島の戦いで争い、駿河・遠江に兵を進めて徳川家康を三方原で破ったが、上京の途中で死去した。「甲州法度之次第」や信玄堤など優れた分国支配を行った。',
    },
    {
        id: 1,
        period: '鎌倉時代',
        human: '楠木正成',
        questionOptions: [
            {
                questionText: '異名はありますか？',
                answerText: '日本最高の名将、軍神の化身と言われているよ。',
                readText: '日本最高の名将、ぐんしんのけしんと言われているよ。'
            },
            {
                questionText: '好きな言葉は？',
                answerText: '孫子の「良将は戦わずして勝つ」であるな。',
                readText: 'そんしの「りょうしょうは戦わずして勝つ」であるな。'
            },
            {
                questionText: '親戚に有名な人はいる？',
                answerText: '観阿弥が私の甥っ子であるよ。',
                readText: 'かんあみが私の甥っ子であるよ。'
            },
            {
                questionText: '何か自慢できることある？',
                answerText: '築城・籠城の技術を発展させたことであるな。',
                readText: 'ちくじょう・ろうじょうの技術を発展させたことであるな。'
            },
        ],
        questionOptionsSecond: [
            {
                questionText: 'あなたが関わる大きな出来事はなんですか？',
                answerText: '元弘の乱であるな。',
                readText: 'げんこうのらんであるな。'
            },
            {
                questionText: 'あなたのやってることは現代の職業で言ったら何になる？',
                answerText: '国の代表の右腕という意味では官房長官であるかな。（国の代表（後醍醐天皇）の右腕）',
                readText: '国の代表の右うでという意味ではかんぼうちょうかんであるかな。'
            },
            {
                questionText: '何か名言を残しましたか？',
                answerText: '七生報国という言葉を晩年に残したよ。7回生まれ変わっても天皇の敵を滅ぼし国に報いたいという意味だよ。',
                readText: 'しちしょうほうこくという言葉をばんねんに残したよ。7回生まれ変わっても天皇の敵を滅ぼし国を報いたいという意味だよ。',
            },
            {
                questionText: 'あなたは社会にどのような影響を与えましたか？',
                answerText: '智・仁・勇の三徳の象徴とされ、その後の時代の人々の生き方の見本となった',
                readText: 'ち・じん・ゆうの三徳の象徴とされ、その後の時代の人々の生き方の見本となった'
            },
        ],
        questionOptionsThird: [
            {
                questionText: '元弘の乱はどういう戦いですか？',
                answerText: '鎌倉幕府とそれを打倒しようとする者達の戦いでおよそ２年間に渡り争いが続いたよ。',
                readText: 'ち・じん・ゆうの三徳の象徴とされ、その後の時代の人々の生き方の見本となった'
            },
            {
                questionText: '誰の右腕として活躍しましたか？',
                answerText: '後醍醐天皇だよ。',
                readText: 'ごだいご天皇だよ。'
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '実は〇〇な話教えて？',
                answerText: '実は悪党と言われていたよ。',
                readText: '実はあくとうと言われていたよ。',
            },
        ],
        questionOptionsFourth: [
            {
                questionText: 'あなたの人生におけるライバルは？',
                answerText: '足利尊氏であるかな。共に鎌倉幕府を滅ぼしたがその後仲違いし戦争することになったよ。',
                readText: 'あしかがたかうじであるかな。共に鎌倉幕府を滅ぼしたがその後仲違いし、戦争することになったよ。',
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
        ],
        questionOptionsFifth: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
        ],
        image: require('../assets/img/楠木正成.png'),
        dialogue: 'わしの名前は楠木正成じゃ。',
        readDialogue: 'わしのっ、名前はっ、くすのきまさしげじゃ。',
        explanationTitle: '河内国の悪党、楠木正成',
        explanationDetail: '鎌倉時代末期から南北朝時代にかけて大覚寺統の後醍醐天皇側の有力武将。1331年元弘の変にて赤坂城で挙兵、後に1336年湊川の戦いで足利尊氏に倒される',
    },
    {
        id: 1,
        period: '明治時代',
        human: '伊藤博文',
        questionOptions: [
            {
                questionText: '有名な知り合いはいますか？',
                answerText: '大久保利通は知り合いだよ。',
                readText: '大久保としみちは知り合いだよ。',
            },
            {
                questionText: 'どこで生まれたの？',
                answerText: '周防国で百姓の子として生まれたんだ。',
                readText: 'すおうのくにで、ひゃくしょうの子として生まれたんだ。',
            },
            {
                questionText: 'あなたの仕事は？',
                answerText: '政治家やんなー',
                readText: '政治家やんなー',
            },
            {
                questionText: 'あだ名はありますか？',
                answerText: '吐き捨てるほど女がいるという意味で箒というあだ名がついていたよ。',
                readText: '吐き捨てるほど女がいるという意味で、ほうきというあだ名がついていたよ。',
            },
        ],
        questionOptionsSecond: [
            {
                questionText: '実は、、って話ありますか？',
                answerText: '禁止されていたフグ料理の解禁のきっかけを作っちゃったよ。',
                readText: '禁止されていたフグ料理の解禁のきっかけを作っちゃったよ。',
            },
            {
                questionText: 'ユーを一言で言うなら？',
                answerText: '明治維新後の日本を牽引し、日本を近代化に導いた立役者やんな！',
                readText: '明治維新ごの日本を牽引し、日本を近代化に導いたたてやくしゃやんな！',
            },
            {
                questionText: '政治家としてどんなことをしましたか？',
                answerText: '初代韓国統監をしたよ。',
                readText: '初代韓国とうかんをしたよ。',
            },
            {
                questionText: 'ライバルは誰ですか？',
                answerText: 'うーん、山縣有朋かなー。',
                readText: 'うーん、やまがたありともかなー。',
            },
        ],
        questionOptionsThird: [
            {
                questionText: '人生におけるターニングポイントは何ですか？',
                answerText: '岩倉使節団の副使として、不平等条約の改正交渉と国家建設のモデルとして欧米諸国を参考にするためにアメリカに行ったことだよ。',
                readText: 'いわくらしせつだんのふくしとして、不平等条約の改正交渉と国家建設のモデルとして欧米諸国を参考にするためにアメリカにいったことだよ。',
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '役職は何でしたか？',
                answerText: '４度にわたり、内閣総理大臣を務めたよ。',
                readText: '４度にわたり、内閣総理大臣を務めたよ。',
            },
            {
                questionText: '死因は何ですか？',
                answerText: '中国のハルビン駅で、安重根に暗殺されちゃった。',
                readText: '中国のハルビン駅で、アン・ジュングンに暗殺されちゃった。',
            },
        ],
        questionOptionsFourth: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '自慢できることは何ですか？',
                answerText: '初代内閣総理大臣を務めたことさ！',
                readText: '初代内閣総理大臣を務めたことさ！',
            },
            {
                questionText: '',
                answerText: ''
            },
        ],
        questionOptionsFifth: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
        ],
        image: require('../assets/img/伊藤博文.png'),
        dialogue: 'わしの名前は伊藤博文じゃ。',
        readDialogue: 'わしのっ、名前はっ、伊藤ひろぶみじゃ。',
        explanationTitle: '初代内閣総理大臣、伊藤博文',
        explanationDetail: '明治期の日本の政治家。1885年内閣制度が創設され、初代内閣総理大臣に就任。明治時代に4度にわたって内閣制度発足以降の内閣総理大臣を務めたことで知られ、1次内閣時には明治憲法の起草の中心人物となり、2次内閣では日清講和条約の起草にあたった',
    },
    {
        id: 1,
        period: '鎌倉時代',
        human: 'フビライハン',
        questionOptions: [
            {
                questionText: '西暦何年生まれですか？',
                answerText: '1215年にこの地に降り立った。',
                readText: '1215年にこの地に降り立った',
            },
            {
                questionText: '知り合いを教えて？',
                answerText: 'ヨーロッパ商人のマルコ・ポーロだな。彼のおかげで、わしは権力を拡大しようと努力することになったな。',
                readText: 'ヨーロッパ商人のマルコ・ポーロだな。彼のおかげで、わしは権力を拡大しようと努力することになったな。',
            },
            {
                questionText: '人生のターニングポイントは？',
                answerText: '生まれた家系が良かったな。家系のおかげで力をつけることができたと思う。',
                readText: '生まれた家系が良かったな。家系のおかげで力をつけることができたと思う。',
            },
            {
                questionText: '実は〇〇な話教えて？',
                answerText: 'ワシは子供が２桁おるのじゃが、ワシのじっちゃんは100人子供がいたらしいぞ。',
                readText: 'ワシは子供が２桁おるのじゃが、ワシのじっちゃんは100人子供がいたらしいぞ。',
            },
        ],
        questionOptionsSecond: [
            {
                questionText: 'どこで生まれた？',
                answerText: 'アジア全土とヨーロッパまでも征服したあの国がワシの生まれた地じゃ。コロナが収束したらぜひ遊びに来てくれ',
                readText: 'アジアぜんどとヨーロッパまでも征服したあの国がワシの生まれた地じゃ。コロナが収束したらぜひ遊びに来てくれ',
            },
            {
                questionText: '夢はなんでしたか？',
                answerText: '世界統一を目指し頑張っておったな。',
                readText: '世界統一を目指し頑張っておったな。',
            },
            {
                questionText: '親戚に有名な人はいる？',
                answerText: '祖父が我が国を創立したな。じっちゃん愛してるよ❤️',
                readText: '祖父が我が国を創立したな。じっちゃん愛してるよ',
            },
            {
                questionText: '悔しかったことはありますか？',
                answerText: '日本に国書を送ったが、なかなか返信をくれなかったことだな。その出来事を機に日本を征服しようと決意したな。',
                readText: '日本にこくしょを送ったが、なかなか返信をくれなかったことだな。その出来事を機に日本を征服しようと決意したな。',
            },
        ],
        questionOptionsThird: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '何か成し遂げたことはありますか？',
                answerText: '現在の北京に「元」を建国し、皇帝となったことだな。「皇帝」という肩書きがカッコ良くって気に入っていたな',
                readText: '現在のぺきんにげんを建国し、皇帝となったことだな。「皇帝」という肩書きがカッコ良くって気に入っていたな',
            },
            {
                questionText: '苦手なことは？',
                answerText: '大雨の日にはあの日を思い出して、今でも苦しい気持ちになるな。',
                readText: '大雨の日にはあの日を思い出して、今でも苦しい気持ちになるな。',
            },
            {
                questionText: 'あなたの人生におけるライバルは？',
                answerText: '鎌倉幕府８代執権北条時宗じゃの。彼は防衛についての知恵もあり、運の強い奴であったのお。',
                readText: '鎌倉幕府８代しっけん、ほうじょうときむねじゃの。彼は防衛についての知恵もあり、運の強い奴であったのお。',
            },
        ],
        questionOptionsFourth: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: 'あなたが関わる大きな出来事はなんですか？',
                answerText: '日本と争った「元寇」であるな。日本では「文永の役」と「弘安の役」というらしいな。ぜひワシの血と汗と涙の戦乱を忘れないでくれ',
                readText: '日本と争ったげんこうであるな。日本ではぶんえいのえきとこうあんのえきというらしいな。ぜひワシの血と汗と涙の戦乱を忘れないでくれ',
            },
        ],
        questionOptionsFifth: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
        ],
        image: require('../assets/img/ふびらいはん.png'),
        dialogue: 'わしはフビライ・ハンじゃ。',
        readDialogue: 'わしのっ、名前はっ、フビライハンじゃ。',
        explanationTitle: 'モンゴル帝国5代皇帝、フビライ・ハン',
        explanationDetail: 'チンギス＝ハンの孫。中国に【元】を建国し、『世祖』となる。1271年征服した高麗を通じ日本に服属を要求するが8代執権北条時宗によってそれを拒否される【文永の役1274年、弘安の役1281年】',
    },
    {
        id: 1,
        period: '昭和時代',
        human: '田中角栄',
        questionOptions: [
            {
                questionText: '何か名言を残しましたか？',
                answerText: '「功は焦らなくても良い。自分に実力がありさえすれば、運は必ず回って来る。」さ',
                readText: '「こうは焦らなくても良い。自分に実力がありさえすれば、運は必ず回って来る。」さ',
            },
            {
                questionText: '若い頃は何をやっていましたか？',
                answerText: '土木会社を設立し、成功を納めたわい。もしかしたら人生軌道に乗り始めたのは、この頃からかもしれないな。',
                readText: 'どぼくがいしゃを設立し、成功を納めたわい。もしかしたら人生軌道に乗り始めたのは、この頃からかもしれないな。',
            },
            {
                questionText: '何か自慢できることある？',
                answerText: '自慢というほどでもないが、逮捕された経験が豊富な人間じゃ。',
                readText: '自慢というほどでもないが、逮捕された経験が豊富な人間じゃ。',
            },
            {
                questionText: '西暦何年生まれですか？',
                answerText: 'ワシは1918年生まれだ。',
                readText: 'ワシは1918年生まれだ。',
            },
        ],
        questionOptionsSecond: [
            {
                questionText: '実は〇〇な話教えて？',
                answerText: 'ワシは悪人のイメージが強いが、実は礼儀正しく心優しいんだ。ワシのいい人エピソードを聞いてくれるか？',
                readText: 'ワシは悪人のイメージが強いが、実は礼儀正しく心優しいんだ。ワシのいい人エピソードを聞いてくれるか？',
            },
            {
                questionText: '尊敬している人は？',
                answerText: '吉田茂先生であるな。とてもお世話になったから、本当に感謝しているな。',
                readText: '吉田しげる先生であるな。とてもお世話になったから、本当に感謝しているな。',
            },
            {
                questionText: '逮捕歴以外の経歴はありますか？',
                answerText: '郵政大臣、国務大臣、大蔵大臣、通商産業大臣を勤めた経験もあるな。これも自慢じゃな',
                readText: '郵政大臣、こくむ大臣、おおくら大臣、つうしょう産業大臣を勤めた経験もあるな。これも自慢じゃな',
            },
            {
                questionText: '異名はありますか？',
                answerText: '皆ワシを今太閤や闇将軍と呼んでおった。これらの異名からもわかると思うが、ワシはかなり影響力を持っていたということだな。',
                readText: 'みなワシをいまたいこうややみ将軍と呼んでおった。これらのいみょうからもわかると思うが、ワシはかなり影響力を持っていたということだな。',
            },
        ],
        questionOptionsThird: [
            {
                questionText: '',
                answerText: '',
                readText: '',
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '人生最高の成功体験はありますか？',
                answerText: '貧相な家庭出身のワシが、最年少で総理大臣になった。支持率70%越えのかっこいい総理をしていたな。',
                readText: '貧相な家庭出身のワシが、最年少で総理大臣になった。支持率70%越えのかっこいい総理をしていたな。',
            },
            {
                questionText: 'あなたは社会にどのような影響を与えましたか？',
                answerText: '影響力を持っていたワシは日本列島改造論を発表し、国民の関心を引きつけたな。',
                readText: '影響力を持っていたワシは日本列島かいぞう論を発表し、国民の関心を引きつけたな。',
            },
        ],
        questionOptionsFourth: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '何か成し遂げたことはありますか？',
                answerText: '総理になった時、日中国交正常化をすると決め、それを成し遂げたな。',
                readText: '総理になった時、にっちゅうこっこう正常化をすると決め、それを成し遂げたな。',
            },
            {
                questionText: 'あなたが関わる大きな出来事はなんですか？',
                answerText: 'やはりワシと言ったらロッキード事件じゃ。ロッキード社の旅客機受注をめぐる汚職事件で世間を騒がせてしまったな...',
                readText: 'やはりワシと言ったらロッキード事件じゃ。ロッキード社の旅客機受注をめぐる汚職事件でせけんを騒がせてしまったな...',
            },
        ],
        questionOptionsFifth: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
        ],
        image: require('../assets/img/田中角栄.png'),
        dialogue: 'わしの名前は田中角栄じゃ。',
        readDialogue: 'わしのっ、名前はっ、田中かくえいじゃ。',
        explanationTitle: '第64、65代内閣総理大臣、田中角栄',
        explanationDetail: '第一次政権では『日本列島改造論』を掲げ、1972年日中共同声明にて、中国との国交が正式に開かれた。第二次政権では第四次中東戦争からの第一次石油危機【オイルショック】が発生',
    },
    {
        id: 1,
        period: '鎌倉時代',
        human: '源頼朝',
        questionOptions: [
            {
                questionText: '何か自慢できることある？',
                answerText: '自分で言うのもなんじゃが容姿が整っており、周りからまるでスーパースターかのようにモテていたんじゃ🤪',
                readText: '自分で言うのもなんじゃが容姿が整っており、周りからまるでスーパースターかのようにモテていたんじゃ',
            },
            {
                questionText: '何か名言を残しましたか？',
                answerText: '大事を思ひはからふ者、物とがめをせず、事ならぬことを事になさず。',
                readText: 'だいじをおもひはからふもの、ものとがめをせず、ことならぬことをことになさず。',
            },
            {
                questionText: '何年に生まれた？',
                answerText: '1147年に生まれたよ',
                readText: '1147年に生まれたよ',
            },
            {
                questionText: 'あなたのやってることは現代の職業で言ったら何になる？',
                answerText: '総理大臣か、大統領やな',
                readText: '総理大臣か、大統領やな',
            },
        ],
        questionOptionsSecond: [
            {
                questionText: '身内で有名人おる？',
                answerText: '妻が北条政子である',
                readText: '妻がほうじょうまさこである',
            },
            {
                questionText: '何か成し遂げたことはありますか？',
                answerText: '初の征夷大将軍になったことじゃ',
                readText: '初のせいいたいしょうぐんになったことじゃ',
            },
            {
                questionText: 'あなたは社会にどのような影響を与えましたか？',
                answerText: '幕府を開き、武士による政治が始まったんじゃ',
                readText: '幕府を開き、武士による政治が始まったんじゃ',
            },
            {
                questionText: 'あなたが関わる大きな出来事はなんですか？',
                answerText: '御恩と奉公、封建体制の成立じゃな',
                readText: 'ごおんとほうこう、ほうけん体制の成立じゃな',
            },
        ],
        questionOptionsThird: [
            {
                questionText: 'あなたの人生におけるライバルは？',
                answerText: '主に平家だと思っとる',
                readText: '主にへいけだと思っとる',
            },
            {
                questionText: '他に何か成し遂げたことはありますか？',
                answerText: '1185 年に鎌倉幕府をつくった',
                readText: '1185 年にかまくら幕府をつくった',
            },
            {
                questionText: 'ゆかりの地は？',
                answerText: '相模国、鎌倉の地じゃな',
                readText: 'さがみのくに、かまくらのちじゃな',
            },
            {
                questionText: '実は〇〇な話教えて？',
                answerText: '実はわしは平家との戦いには参加しておらず弟の義経や範頼が戦っておった',
                readText: '実はわしはへいけとの戦いには参加しておらず弟のよしつねやのりよりが戦っておった',
            },
        ],
        questionOptionsFourth: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
        ],
        questionOptionsFifth: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
        ],
        image: require('../assets/img/源頼朝.png'),
        dialogue: 'わしの名前は源頼朝じゃ。',
        readDialogue: 'わしのっ、名前はっ、みなもとのよりともじゃ。',
        explanationTitle: '鎌倉幕府の初代征夷大将軍、源頼朝',
        explanationDetail: '平安時代末期から鎌倉時代初期の日本の武将。北条時政や北条義時などと平家打倒を試み、鎌倉を本拠地として占拠した。藤原氏を滅ぼし、1192年に征夷大将軍に任命された。',
    },
    {
        id: 1,
        period: '時代',
        human: '聖徳太子',
        questionOptions: [
            {
                questionText: '何年にうまれた？',
                answerText: 'ワシは574年にうまれた',
                readText: 'ワシは574年にうまれた',
            },
            {
                questionText: 'なんと呼ばれていましたか？',
                answerText: '厩戸皇子と呼ばれていたぜ',
                readText: 'うまやどのおうじと呼ばれていたぜ',
            },
            {
                questionText: 'あなたはどんな書物を残したの？',
                answerText: '蘇我馬子と共同で『天皇紀』と『国記』を編纂したよ',
                readText: 'そがのうまこと共同でてんのうきと、こきを編纂したよ',
            },
            {
                questionText: 'あなたは社会にどのような影響を与えましたか？',
                answerText: '倭の国が日本になるための土台を作ったな',
                readText: 'わの国が日本になるための土台を作ったな',
            },
        ],
        questionOptionsSecond: [
            {
                questionText: 'あなたが関わる大きな出来事はなんですか？',
                answerText: '寺を作ったな',
                readText: '寺を作ったな',
            },
            {
                questionText: 'あなたは誰の知り合いですか',
                answerText: '蘇我馬子じゃ',
                readText: 'そがのうまこじゃ',
            },
            {
                questionText: '何か成し遂げたことはありますか？',
                answerText: '603年に冠位十二階の制という出世システムを作りだした',
                readText: '603年にかんいじゅうにかいのせいという出世システムを作りだした',
            },
            {
                questionText: '何か自慢できることある？',
                answerText: '10人の話を同時に聞けたんじゃ',
                readText: '10人の話を同時に聞けたんじゃ',
            },
        ],
        questionOptionsThird: [
            {
                questionText: 'あなたの仕事は？',
                answerText: '政治の補佐じゃな',
                readText: '政治の補佐じゃな',
            },
            {
                questionText: '誰の右腕として活躍しましたか？',
                answerText: '推古天皇だな',
                readText: 'すいこ天皇だな',
            },
            {
                questionText: '他には何成し遂げた？',
                answerText: '604年に我が国初の成文法、憲法十七条を制定した',
                readText: '604年に我が国、初のせいぶんほう、けんぽうじゅうななじょうを制定した',
            },
            {
                questionText: '',
                answerText: ''
            },
        ],
        questionOptionsFourth: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: 'あなたといえば？',
                answerText: '小野妹子を遣隋使として派遣したな',
                readText: 'おののいもこをけんずいしとして派遣したな',
            },
            {
                questionText: '',
                answerText: ''
            },
        ],
        questionOptionsFifth: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
        ],
        image: require('../assets/img/聖徳太子.png'),
        dialogue: 'わしの名前は聖徳太子じゃ。',
        readDialogue: 'わしのっ、名前はっ、しょうとく、たいしじゃ。',
        explanationTitle: '飛鳥時代の皇族・政治家、聖徳太子',
        explanationDetail: '推古天皇と蘇我馬子と協力し、遣隋使を派遣し大陸の文化や制度を日本に取り入れた。階位十二階や十七条憲法を定め、中央集権国家体制を確立した。',
    },
    {
        id: 1,
        period: '江戸時代',
        human: '伊能忠敬',
        questionOptions: [
            {
                questionText: '西暦何年生まれですか？',
                answerText: '1745年生まれじゃ',
                readText: '1745年生まれじゃ',
            },
            {
                questionText: '実は○○な話ある？',
                answerText: '実はわしは商才があったんじゃ',
                readText: '実はわしはしょうさいがあったんじゃ',
            },
            {
                questionText: 'あなたの仕事は？',
                answerText: 'いろいろやったが、天文学者もやったなぁ',
                readText: 'いろいろやったが、てんもんがくしゃもやったなぁ',
            },
            {
                questionText: '何かエピソードある？',
                answerText: '今でいうと定年退職後に大学に入学するようなことをやっていたのお',
                readText: '今でいうと定年退職後に大学に入学するようなことをやっていたのお',
            },
        ],
        questionOptionsSecond: [
            {
                questionText: 'どんな性格だったの？',
                answerText: '厳格な性格じゃったよ',
                readText: '厳格な性格じゃったよ',
            },
            {
                questionText: '実は〇〇、もっと聞きたい！',
                answerText: 'あることをするために3.5万キロ歩いたことがあるのじゃ',
                readText: 'あることをするためにさんてんご万キロ歩いたことがあるのじゃ',
            },
            {
                questionText: '天文学で有名になった人？',
                answerText: 'わしは別のことで有名じゃな',
                readText: 'わしは別のことで有名じゃな',
            },
            {
                questionText: 'それって具体的にどんなこと？',
                answerText: '四十九歳に隠居をして江戸に移り住んだんじゃ',
                readText: '四十九歳に隠居をしてえどに移りすんだんじゃ',
            },
        ],
        questionOptionsThird: [
            {
                questionText: '偉業はなんかある？',
                answerText: '大日本沿海輿地全図を作ったことじゃ。（伊能図とも言われてる）',
                readText: 'だいにほんえんかいよちぜんずを作ったことじゃ。',
            },
            {
                questionText: 'なんのために歩いたの？',
                answerText: '測量をしたんじゃ',
                readText: '測量をしたんじゃ',
            },
            {
                questionText: 'それは天文学に関係する？',
                answerText: '距離を測ったりするという意味では関係あるのう',
                readText: '距離を測ったりするという意味では関係あるのう',
            },
            {
                questionText: '江戸に移り住んでなにしてた？',
                answerText: '19歳年下のやつから天文学を教わったのう',
                readText: '19歳年下のやつからてんもんがくを教わったのう',
            },
        ],
        questionOptionsFourth: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '距離を測ってなにしてたの？',
                answerText: '日本中を歩き回って測量したのお',
                readText: '日本中を歩き回って測量したのお',
            },
            {
                questionText: '誰に天文学を教わったの？',
                answerText: '高橋至時くんじゃ',
                readText: 'たかはしよしときくんじゃ', 
            },
        ],
        questionOptionsFifth: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
        ],
        image: require('../assets/img/伊能忠敬.png'),
        dialogue: 'わしの名前は伊能忠敬じゃ。',
        readDialogue: 'わしのっ、名前はっ、いのうただたかじゃ。',
        explanationTitle: '江戸時代の測量家、伊能忠敬',
        explanationDetail: '55~71歳の時、日本中を歩き回りながら測量し、日本地図を完成した。作成した地図はヨーロッパでも高く評価され、明治以降には日本地図として使われることになった。',
    },
    {
        id: 1,
        period: '平安時代',
        human: '源義経',
        questionOptions: [
            {
                questionText: '西暦何年生まれですか？',
                answerText: '1159年に生まれたよ。',
                readText: '1159年に生まれたよ。'
            },
            {
                questionText: '小さい頃のエピソードを教えてください。',
                answerText: '赤ん坊の時に敵に殺されかけたが母親が懇願して見逃してくれたんだ。',
                readText: '赤ん坊の時に敵に殺されかけたが母親が懇願して見逃してくれたんだ。'
            },
            {
                questionText: 'あなたは社会にどのような影響を与えましたか？',
                answerText: '日本に幕府というものを作るきっかけとなったな。',
                readText: '日本に幕府というものを作るきっかけとなったな。'
            },
            {
                questionText: '何をしている人ですか？',
                answerText: '武将であるよ。',
                readText: '武将であるよ。'
            },
        ],
        questionOptionsSecond: [
            {
                questionText: '有名な知り合いはいますか？',
                answerText: '知り合いと言うのは気が引けるが、後白河上皇に直接命を受けたことがあるぞ。',
                readText: '知り合いと言うのは気が引けるが、ごしらかわじょうこうに直接めいを受けたことがあるぞ。'
            },
            {
                questionText: '死因は何ですか？',
                answerText: '共に仲間として戦ってきた兄に攻められたんだ。一切戦うことはせず、妻と４歳の娘を殺害した後に自害したよ。',
                readText: '共に仲間として戦ってきた兄に攻められたんだ。一切戦うことはせず、妻と４歳の娘を殺害した後に自害したよ。'
            },
            {
                questionText: 'ゆかりの地はどこですか？',
                answerText: '奥州平泉であるな。今も堂が残っていて2011年に世界遺産に登録されたらしいな。',
                readText: 'おうしゅうひらいずみであるな。今も堂が残っていて2011年に世界遺産に登録されたらしいな。'
            },
            {
                questionText: 'どういう戦い方をしていましたか？',
                answerText: '突然崖を駆け下りて奇襲をしたり船の操縦員を矢で射止めたりして敵の隙をつく戦い方をして大勝利を収めていたよ。',
                readText: '突然崖を駆け下りて奇襲をしたり船の操縦員を矢で射止めたりして敵の隙をつく戦い方をして大勝利を収めていたよ。'
            },
        ],
        questionOptionsThird: [
            {
                questionText: 'あなたが関わる大きな出来事はなんですか？',
                answerText: '治承・寿永の乱であるぞ。一般的には源平合戦と言われているな。',
                readText: 'じしょう・じゅえいの乱であるぞ。一般的にはげんぺい合戦と言われているな。'
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: 'あなたが信頼する人は誰ですか？',
                answerText: '部下の弁慶じゃ。',
                readText: '部下のべんけいじゃ。'
            },
            {
                questionText: '具体的には何の戦いで勝利しましたか？',
                answerText: '一ノ谷の戦い、屋島の戦い、そして壇ノ浦の戦いで勝利を収めたよ。',
                readText: 'いちのたにの戦い、やしまの戦い、そしてだんのうらの戦いで勝利を収めたよ。'
            },
        ],
        questionOptionsFourth: [
            {
                questionText: '',
                answerText: '',
                readText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '異名はありますか？',
                answerText: '牛若丸と呼ばれておった。',
                readText: 'うしわかまると呼ばれておった。'
            },
        ],
        questionOptionsFifth: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
        ],
        image: require('../assets/img/源義経.png'),
        dialogue: 'わしの名前は源義経じゃ。',
        readDialogue: 'わしのっ、名前はっ、みなもとのよしつねじゃ。',
        explanationTitle: '平安時代末期の武将、源義経',
        explanationDetail: '1159~89　頼朝の弟。幼名牛若丸。奥州に下り藤原秀衡（ふじわらのひでひら）の下で成長。頼朝挙兵に参じ、義仲（よしなか）・兵士討伐に功をあげた。後に頼朝と不仲になり、奥州に潜伏中、秀衡の子泰衡（やすひら）に攻められて自殺した。',
    },
    {
        id: 1,
        period: '室町時代',
        human: '足利義満',
        questionOptions: [
            {
                questionText: '西暦何年生まれですか？',
                answerText: '1369年生まれだよ',
                readText: '1369年生まれだよ'
            },
            {
                questionText: 'あなたの仕事は？',
                answerText: '将軍様じゃー！',
                readText: 'しょうぐんさまじゃー！'
            },
            {
                questionText: 'どこで生まれたの？',
                answerText: '京都どすえぇ〜',
                readText: '京都どすえぇ〜'
            },
            {
                questionText: '実は◯◯な話ってある？',
                answerText: '10歳で将軍になったって話かな',
                readText: '10歳で将軍になったって話かな'
            },
        ],
        questionOptionsSecond: [
            {
                questionText: '誰かに尊敬とかされたことある？',
                answerText: 'だいぶ後の人やけど、織田信長くんに尊敬されちゃったみたいやな',
                readText: 'だいぶあとの人やけど、織田信長くんに尊敬されちゃったみたいやな'
            },
            {
                questionText: 'あなたの地位は？',
                answerText: '平清盛に次いで２人目の太政大臣にまで登りつめたよ',
                readText:  'たいらのきよもりに次いで２人目のたいじょうだいじんにまで登りつめたよ'
            },
            {
                questionText: '一昔前にテレビに出てなかった？',
                answerText: '一休さんに出たよ！',
                readText: 'いっきゅうさんに出たよ！'
            },
            {
                questionText: 'なんか作ってないん？',
                answerText: '20歳の時に花の御所作ったったわい',
                readText: '20歳の時に花のごしょ作ったったわい'
            },
        ],
        questionOptionsThird: [
            {
                questionText: 'あだ名は？',
                answerText: '室町殿と呼ばれておった',
                readText: '室町どのと呼ばれておった'
            },
            {
                questionText: '何か誇れることは？',
                answerText: 'まあ、わいが将軍してた頃が室町時代で１番栄えてたってことかね',
                readText: 'まあ、わいが将軍してた頃が室町時代で１番栄えてたってことかね'
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '他にどんなこと行ってたの？',
                answerText: '「明」（中国）と勘合貿易を始めたよ',
                readText: '「みん」（中国）とかんごう貿易を始めたよ'
            },
        ],
        questionOptionsFourth: [
            {
                questionText: '偉業はなんかある？',
                answerText: '南北朝合一したったわい。あと、金があまっとったけん別荘建てたったわい！チナそれが、金閣なんよな〜',
                readText: 'なんぼくちょうごういつしたったわい。あと、金があまっとったけんべっそう建てたったわい！チナそれが、きんかくなんよな〜'
            },
            {
                questionText: 'おじいちゃん誰？',
                answerText: '足利尊氏といって、誇り高い祖父であったな',
                readText: 'あしかがたかうじといって、ほこり高い祖父であったな'
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
        ],
        questionOptionsFifth: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
        ],
        image: require('../assets/img/足利義満.png'),
        dialogue: 'わしの名前は足利義満じゃ。',
        readDialogue: 'わしのっ、名前はっ、あしかがよしみつじゃ。',
        explanationTitle: '室町幕府三代将軍、足利義満',
        explanationDetail: '南北朝統一を成し遂げ、室町幕府の権力を確立した。また金閣寺を建国し、北山文化を開花させた。室町時代の政治、経済、文化の最盛期を築いた。',
    },
    {
        id: 1,
        period: '室町時代',
        human: '足利尊氏',
        questionOptions: [
            {
                questionText: 'あなたの仕事は？',
                answerText: '将軍様じゃー！',
                readText: 'しょうぐんさまじゃー'
            },
            {
                questionText: 'どこで生まれたの？',
                answerText: '栃木県で生まれたよ。',
                readText: 'とちぎけんでうまれたよ'
            },
            {
                questionText: '西暦何年生まれですか？',
                answerText: '1305年生まれだよ',
                readText: '1305ねんうまれだよ'
            },
            {
                questionText: 'あなたの異名は？',
                answerText: '史上最大の逆賊って言われたり言われてなかったり・・・',
                readText: 'しじょうさいだいのぎゃくぞくっていわれたりいわれてなかったり'
            },
        ],
        questionOptionsSecond: [
            {
                questionText: '祖先に有名な人いる？',
                answerText: '源義家っちだね',
                readText: 'みなもとのよしいえっちだね'
            },
            {
                questionText: 'あなたのやっちゃった事件は？',
                answerText: '力を合わせて政治をしてた弟を対立してしまった時に毒殺したんだな、、',
                readText: 'ちからをあわせてせいじをしてたおとうとをたいりつしてしまったときにどくさつしたんだな'
            },
            {
                questionText: '関わった大きな戦とかってある？',
                answerText: '元弘の乱だね',
                readText: 'げんこうのらんだね'
            },
            {
                questionText: 'この前テレビに出てなかった？',
                answerText: '大河ドラマの「太平記」にでとったわい！',
                readText: 'たいがどらまのたいへいきにでとったわい'
            },
        ],
        questionOptionsThird: [
            {
                questionText: 'お父さん誰？',
                answerText: '足利貞氏くんだよ',
                readText: 'あしかがさだうじくんだよ'
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: 'ここだけの話ってある？',
                answerText: '元弘の乱に出陣するよう言われたけど、父の喪中だったから断ったんだけど、幕府に許してもらえなかったんよ（太平記より）',
                readText: 'げんこうのらんにしゅつじんするよういわれたけど、ちちのもちゅうだったからことわったんだけど、ばくふにゆるしてもらえなかったよ'
            },
            {
                questionText: '実はの話ってある？',
                answerText: '最初は鎌倉幕府側の人間だったんだけど、途中で裏切って後醍醐天皇側についたんや〜',
                readText: 'さいしょはかまくらばくふがわのにんげんだったんだけど、とちゅうでうらぎってごだいごてんのうがわについたんや〜'
            },
        ],
        questionOptionsFourth: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: 'あなたの偉業は？',
                answerText: '室町幕府つくりましたー！！新田義貞、楠木正成、後醍醐天皇の新政府を倒した後に、光明天皇をたててと色々苦労して幕府を作ったんよ。',
                readText: 'むろまちばくふつくりましたー！！にったよしさだ、くすのきまさしげ、ごだいごてんのうのしんせいふをたおしたあとに、こうめいてんのうをたててといろいろくろうしてばくふをつくったんよ'
            },
        ],
        questionOptionsFifth: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
        ],
        image: require('../assets/img/足利尊氏.png'),
        dialogue: 'わしの名前は足利尊氏じゃ。',
        readDialogue: 'わしのっ、名前はっ、あしかがたかうじじゃ。',
        explanationTitle: '室町幕府初代征夷大将軍、足利尊氏',
        explanationDetail: '鎌倉時代末期から南北朝時代の武将。後醍醐天皇とともに鎌倉幕府を倒し、室町幕府を築いた。',
    },
    {
        id: 1,
        period: '戦国時代',
        human: '斎藤道三',
        questionOptions: [
            {
                questionText: '西暦何年に生まれたの？',
                answerText: '1494年やな！',
                readText: '1494年やな！',
            },
            {
                questionText: 'どこで生まれたん？',
                answerText: '京都どすえぇ',
                readText: '京都どすえぇ',
            },
            {
                questionText: '10歳の時の名前なんなん？',
                answerText: '法蓮、、蓮舫ちゃうぞうい！',
                readText: 'ほうれん、、れんほうちゃうぞうい！',
            },
            {
                questionText: 'どんな人なの？',
                answerText: 'ワイは人を平気で騙せる非情な人間やったわい',
                readText: 'ワイは人を平気で騙せる非情な人間やったわい',
            },
        ],
        questionOptionsSecond: [
            {
                questionText: 'なんか自慢できることある？',
                answerText: 'パパと一緒に親子２代で、僧侶から油売り、ほんで大名に成り上がったんや！下克上最高！！',
                readText: 'パパと一緒に親子２代で、僧侶からあぶらうり、ほんでだいみょうに成り上がったんや！げこくじょう最高！！',
            },
            {
                questionText: '名言ある？',
                answerText: '「力で奪い取ったものは時を経て、力でもぎ取られる」と言ったな',
                readText: '「ちからで奪い取ったものは時を経て、ちからでもぎ取られる」と言ったな',
            },
            {
                questionText: '何か自慢できることあり？',
                answerText: '信長の城作りに影響を与えたんじゃ！',
                readText: 'のぶながのしろ作りに影響を与えたんじゃ！',
            },
            {
                questionText: 'どんなことをしてたの？',
                answerText: '武将をしちょったわい',
                readText: 'ぶしょうをしちょったわい',
            },
        ],
        questionOptionsThird: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: 'なんか武勇伝ある？',
                answerText: 'まあ、戦の最後死ぬ直前に遺言を書いて信長に自分の国をやったことやな',
                readText: 'まあ、いくさの最後死ぬ直前にゆいごんを書いてのぶながに自分の国をやったことやな',
            },
            {
                questionText: '具体的にはどんなことをしてたの？',
                answerText: '美濃国の戦国大名もしとった',
                readText: 'みののくにのせんごくだいみょうもしとった',
            },
        ],
        questionOptionsFourth: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: 'あだ名はある？',
                answerText: '美濃のマムシって呼ばれとったわい！',
                readText: 'みののマムシって呼ばれとったわい！',
            },
        ],
        questionOptionsFifth: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
        ],
        image: require('../assets/img/斎藤道三.png'),
        dialogue: 'わしの名前は斎藤道三じゃ。',
        readDialogue: 'わしのっ、名前はっ、斎藤どうさんじゃ。',
        explanationTitle: '美濃の戦国大名、斎藤道三',
        explanationDetail: '規秀（道三）の代に長井家を倒し、守護代斎藤氏の家名を奪って、土岐氏を追放。長男の義龍と争って敗北した。',
    },
    {
        id: 1,
        period: '江戸時代',
        human: '徳川慶喜',
        questionOptions: [
            {
                questionText: '幼少期の話を聞かせてください',
                answerText: '厳しい父親の方針で、私の寝相を直す為に枕の両側に剃刀の刃を立てて寝かせられていたよ',
                readText: '厳しい父親の方針で、私のねぞうを直す為に枕の両側にカミソリの刃を立てて寝かせられていたよ'
            },
            {
                questionText: '人生のターニングポイントはいつですか？',
                answerText: '11歳の時に養子縁組に入ったことかな',
                readText: '11歳の時にようしえんぐみに入ったことかな'
            },
            {
                questionText: '色恋事情を教えて？',
                answerText: '隠棲生活をするにあたり20人ほどいた側室を2人に絞り皆で一緒に暮らしたよ。側室の2人が女同士で仲が良かったんだ',
                readText: 'いんせい生活をするにあたり20人ほどいたそくしつを2人に絞り皆で一緒に暮らしたよ。そくしつの2人が女同士で仲が良かったんだ',
            },
            {
                questionText: '趣味はなんですか？',
                answerText: '後半生はカメラにはまっていたよ',
                readText: 'こうはんせいはカメラにはまっていたよ'
            },
        ],
        questionOptionsSecond: [
            {
                questionText: '何か自慢できることありますか？',
                answerText: '大河ドラマでSMAPの草彅くんが私を演じてくれたらしいな',
                readText: 'たいがドラマでスマップのくさなぎくんが私を演じてくれたらしいな'
            },
            {
                questionText: 'あなたがやっていることは現代の職業で言ったら何になりますか？',
                answerText: '総理大臣かなぁ',
                readText: 'そうりだいじんかなぁ'
            },
            {
                questionText: 'どんな人って言われますか？',
                answerText: '先見の才があり優秀だと言われる一方で臆病者とも言われるよ',
                readText: 'せんけんのさいがあり優秀だと言われる一方でおくびょうものとも言われるよ'
            },
            {
                questionText: '黒歴史を教えて？',
                answerText: '敵を目の前にして、家臣を置いて逃げてしまったことだ',
                readText: '敵を目の前にして、カシンを置いて逃げてしまったことだ'
            },
        ],
        questionOptionsThird: [
            {
                questionText: 'あなたが関わる大きな出来事はなんですか？',
                answerText: '大政奉還であるな',
                readText: 'たいせいほうかんであるな'
            },
            {
                questionText: 'どんな政策を出しましたか？',
                answerText: 'ヨーロッパの行政組織を参考にした「慶應の改革」を推進したよ',
                readText: 'ヨーロッパのぎょうせいそしきを参考にした「けいおうの改革」を推進したよ'
            },
            {
                questionText: '',
                answerText: '',
                readText: ''
            },
            {
                questionText: '',
                answerText: '',
                readText: ''
            },
        ],
        questionOptionsFourth: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: 'あなたを一言で表すなら？',
                answerText: '徳川家最後の将軍であるな',
                readText: 'とくがわけさいごのしょうぐんであるな'
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: '',
                readText: ''
            },
        ],
        questionOptionsFifth: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
        ],
        image: require('../assets/img/徳川慶喜.png'),
        dialogue: 'わしの名前は徳川慶喜じゃ。',
        readDialogue: 'わしのっ、名前はっ、とくがわよしのぶじゃ。',
        explanationTitle: '江戸幕府15代将軍、徳川慶喜',
        explanationDetail: '水戸藩主徳川斉昭の7男。1874年に一橋家を継ぎ、将軍継嗣問題で一橋派におされたが実現せず。文久の改革では将軍後見職につき、1864年に朝廷を守る禁裏御守衛総督・摂海防禦指揮に任命された。1866年、将軍に就任、翌年、大政奉還を行った。',
    },

    {
        id: 1,
        period: '戦国時代',
        human: '織田信長',
        questionOptions: [
            {
                questionText: '西暦何年生まれですか？',
                answerText: '1534年に生まれたよ',
                readText: '1534年に生まれたよ'
            },
            {
                questionText: 'あなたの人生におけるライバルを教えてください',
                answerText: '若い頃ではあるがお兄ちゃんかなぁ',
                readText: '若い頃ではあるがお兄ちゃんかなぁ'
            },
            {
                questionText: '名言を教えてください',
                answerText: '「器用というのは他人の思惑の逆をする者だ。」周りと異なることをするには勇気がいるが、是非君にも自分のやりたいことに挑戦してみてほしい。',
                readText: '「器用というのは他人のしわくの逆をする者だ。」周りと異なることをするには勇気がいるが、是非キミにも自分のやりたいことに挑戦してみてほしい。'
            },
            {
                questionText: 'あなたは何をしている人ですか？',
                answerText: '武将だよ',
                readText: 'ぶしょうだよ'
            },
        ],
        questionOptionsSecond: [
            {
                questionText: '知り合いを1人教えてください',
                answerText: 'ポルトガルのルイス・フロイスは知り合いだよ',
                readText: 'ポルトガルのルイス・フロイスは知り合いだよ'
            },
            {
                questionText: '',
                answerText: '',
                readText: ''
            },
            {
                questionText: '趣味を教えてください。',
                answerText: '鷹狩りとか馬乗り、他にもたくさんあるよ。',
                readText: 'たかがりとかうまのり、他にもたくさんあるよ。'
            },
            {
                questionText: '戦い方のコツを教えてください。',
                answerText: '敵に戦闘の準備をする時間を与えずに攻撃するようにしていたよ',
                readText: '敵にせんとうの準備をする時間を与えずに攻撃するようにしていたよ'
            },
        ],
        questionOptionsThird: [
            {
                questionText: '実は〇〇な話ありますか？',
                answerText: '実は男色を好んでいたよ',
                readText: '実はなんしょくを好んでいたよ'
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: '',
                readText: ''
            },
            {
                questionText: 'どんな政策を出しましたか？',
                answerText: '商業を盛んにさせるための政策を出したよ',
                readText: '商業をさかんにさせるための政策を出したよ'
            },
        ],
        questionOptionsFourth: [
            {
                questionText: '死因は何ですか？',
                answerText: '自分もまさかとは思ったが家臣に謀反されて死んだよ',
                readText: '自分もまさかとは思ったがカシンにむほんされて死んだよ'
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '具体的な政策名を教えてください',
                answerText: '関所撤廃や楽市楽座だな',
                readText: 'せきしょてっぱいやらくいちらくざだな'
            },
        ],
        questionOptionsFifth: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
        ],
        image: require('../assets/img/織田信長.png'),
        dialogue: 'わしの名前は織田信長じゃ。',
        readDialogue: 'わしのっ、名前はっ、おだのぶながじゃ。',
        explanationTitle: '尾張の戦国大名、織田信長',
        explanationDetail: '尾張の守護大名織田氏は岩倉織田家と清洲織田家に分裂していたが、信長は清洲織田家の奉行織田信秀の子。1560年、桶狭間で今川義元を討ち、「天下布武」の印判を用いつつ、全国統一の事業を進めた。1573年、室町幕府を滅ぼし、畿内平定を達成したが、82年、本能寺の変に倒れた。',
    },
    {
        id: 1,
        period: '明治時代',
        human: '渋沢栄一',
        questionOptions: [
            {
                questionText: 'どこで生まれましたか？',
                answerText: '武蔵国といって現在の埼玉県にあたる場所で生まれたよ。',
                readText: '武蔵国といって現在の埼玉県にあたる場所で生まれたよ。'
            },
            {
                questionText: 'あなたは何をしている人ですか？',
                answerText: '経営者もやったことの一つだな',
                readText: '経営者もやったことの一つだな'
            },
            {
                questionText: '西暦何年生まれですか？',
                answerText: '1840年に生まれたよ。',
                readText: '1840年に生まれたよ。'
            },
            {
                questionText: '実は〇〇な話ある？',
                answerText: '実は68歳で側室との間に子供ができたんじゃ',
                readText: '実は68歳で側室との間に子供ができたんじゃ'
            },
        ],
        questionOptionsSecond: [
            {
                questionText: '人生のターニングポイントは？',
                answerText: 'いくつかあるが27歳の時のパリへの渡航がなければ今の私はなかったと思う',
                readText: 'いくつかあるが27歳の時のパリへの渡航がなければ今の私はなかったと思う'
            },
            {
                questionText: '何を経営してた？',
                answerText: '第一国立銀行はそのうちの一つだ。国立銀行条例をもとにして私が設立したよ。',
                readText: '第いち国立銀行はそのうちの一つだ。国立銀行条例をもとにして私が設立したよ。'
            },
            {
                questionText: '尊敬している人は？',
                answerText: '尊敬している人のうちの1人は平岡円四郎様だな。',
                readText: '尊敬している人のうちの1人は平岡えん四郎様だな。'
            },
            {
                questionText: '特技はなんですか？',
                answerText: 'そろばんが得意だよ。',
                readText: 'そろばんが得意だよ。'
            },
        ],
        questionOptionsThird: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '異名はありますか？',
                answerText: '日本資本主義の父と言われているらしいな。',
                readText: '日本資本主義の父と言われているらしいな。'
            },
            {
                questionText: '有名な知り合いを教えて?',
                answerText: '西郷隆盛殿や大久保利通殿は知り合いだぞ。',
                readText: '西郷隆盛殿や大久保利通殿は知り合いだぞ。'
            },
            {
                questionText: 'あなたの偉業を教えてください。',
                answerText: '現在のJR東日本、NHK、サッポロビールなど500以上の会社の設立に関わったよ。',
                readText: '現在のJR東日本、NHK、サッポロビールなど500以上の会社の設立に関わったよ。'
            },
        ],
        questionOptionsFourth: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '何か自慢できることはある？',
                answerText: '私がもうじき１万円札の顔になるらしいぞ。',
                readText: '私がもうじき１万円さつの顔になるらしいぞ。'
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
        ],
        questionOptionsFifth: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
        ],
        image: require('../assets/img/渋沢栄一.jpg'),
        dialogue: 'わしの名前は渋沢栄一じゃ',
        readDialogue:'わしのっ、名前はっ、渋沢栄一じゃ',
        explanationTitle: '明治の実業家、渋沢栄一',
        explanationDetail: '埼玉県の豪農出身。一橋家・幕府に仕え、1867年に欧州視察。明治政府の大蔵省に出仕、財制・幣制改革にあたる。退官後、第一国立銀行・大阪紡績会社創立など実業界で活躍。教育・社会事業にも尽力。',
    },
    {
        id: 1,
        period: '江戸時代',
        human: '葛飾北斎',
        questionOptions: [
            {
                questionText: '西暦何年生まれですか？',
                answerText: '1760年に生まれたよ。',
                readText: '1760年に生まれたよ。'
            },
            {
                questionText: 'あなたのやってることは現代の職業で言ったら何になりますか？',
                answerText: 'アーティストやの。',
                readText: 'アーティストやの。'
            },
            {
                questionText: '苦手なことはありますか？',
                answerText: '片付けをするのが苦手で部屋が汚くなると引越しを繰り返しておった。',
                readText: '片付けをするのが苦手で部屋が汚くなると引越しを繰り返しておった。'
            },
            {
                questionText: '尊敬している人は誰ですか？',
                answerText: '勝川春章先生じゃ。19歳の時に弟子入りしたぞ。',
                readText: 'かつ川しゅん章先生じゃ。19歳の時に弟子入りしたぞ。'
            },
        ],
        questionOptionsSecond: [
            {
                questionText: 'あなたはどの分野に影響を与えましたか？',
                answerText: '化政文化に影響を与えたよ',
                readText: '化政文化に影響を与えたよ'
            },
            {
                questionText: '作品を作るときに拘っていたことは何ですか？',
                answerText: '遠近法や配色に拘っていたよ。',
                readText: '遠近法や配色に拘っていたよ。'
            },
            {
                questionText: '何か自慢できることありますか？',
                answerText: 'この1000年で最も偉大な業績を残した世界の100人という特集に選出されたことがあるらしいよ。',
                readText: 'この1000年で最も偉大な業績を残した世界の100人という特集に選出されたことがあるらしいよ。'
            },
            {
                questionText: '実は〇〇な話ありますか？',
                answerText: '実は改名を30回したんじゃ。卍を名前の中に入れたこともあるぞ。',
                readText: '実は改名を30かいしたんじゃ。卍を名前の中に入れたこともあるぞ。'
            },
        ],
        questionOptionsThird: [
            {
                questionText: 'あなたは有名な人物に影響を与えましたか？',
                answerText: '歌川広重やヨーロッパのゴッホ、モネにも影響を与えたよ。',
                readText: '歌川広重やヨーロッパのゴっホ、モネにも影響を与えたよ'
            },
            {
                questionText: 'どういう作品を作りましたか？',
                answerText: '富士山を各地から眺めた46枚の図を作ったよ。',
                readText: '富士山を各地から眺めた46枚の図を作ったよ。'
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
        ],
        questionOptionsFourth: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '具体的な作品名はなんですか？',
                answerText: '富嶽三十六景だよ。その中でも凱風快晴、俗に言う赤富士が有名だな。評判が良かったから予定より10枚増やしたんじゃ。',
                readText: '富嶽三十六景だよ。その中でも凱風快晴、俗に言う赤富士が有名だな。評判が良かったから予定より10枚増やしたんじゃ。'
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
        ],
        questionOptionsFifth: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
        ],
        image: require('../assets/img/葛飾北斎.jpg'),
        dialogue: 'わしの名前は葛飾北斎じゃ。',
        readDialogue: 'わしのっ、名前はっ、葛飾北斎じゃ。',
        explanationTitle: '江戸の浮世絵師、葛飾北斎',
        explanationDetail: '1760~1849 浮世絵師、江戸の人。勝川春章に学び、狩野派・洋画など各種の画法も習得して独自の画風を開く。風景版画の「富嶽三十六景」などは、ヨーロッパ後期印象派の画家に影響を与え、ジャポニズムをうんだ。「北斎漫画」「画本東都遊」などの作品がある。',
    },
    {
        id: 1,
        period: '戦国時代',
        human: '武田信玄',
        questionOptions: [
            {
                questionText: '実は〇〇な話ありますか？',
                answerText: '実は自分専用の水洗トイレがあったんだ。鈴を鳴らすと家臣が裏から水を流してくれていたよ。',
                readText: '実は自分専用の水洗トイレがあったんだ。鈴を鳴らすと家臣が裏から水を流してくれていたよ。'
            },
            {
                questionText: '好きな言葉はありますか？',
                answerText: 'わしは古い中国の武将、孫子様を尊敬しており、「彼を知り、己を知れば、百戦殆（あやう）からず」という言葉が好きだな。',
                readText: 'わしは古い中国の武将、そんし様を尊敬しており、「彼を知り、おのれを知れば、百せんあやうからず」という言葉が好きだな。'
            },
            {
                questionText: '人生のターニングポイントは？',
                answerText: '実の父を追放してトップの座についた時だな。',
                readText: '実の父を追放してトップの座についた時だな。'
            },
            {
                questionText: '西暦何年生まれですか？',
                answerText: '1521年に生まれたよ。',
                readText: '1521年に生まれたよ。'
            },
        ],
        questionOptionsSecond: [
            {
                questionText: '何か自慢できることはありますか？',
                answerText: '大河ドラマの主人公として選出されたことがあるぞ。',
                readText: '大河ドラマの主人公として選出されたことがあるぞ'
            },
            {
                questionText: '失敗談はありますか？',
                answerText: '息子をリーダーに相応しくない人物に育ててしまったことだな。',
                readText: '息子をリーダーに相応しくない人物に育ててしまったことだな。'
            },
            {
                questionText: '特技はありますか？',
                answerText: 'スパイを戦に活用するイメージ戦略が得意だったよ。',
                readText: 'スパイを戦に活用するイメージ戦略が得意だったよ。'
            },
            {
                questionText: '有名な知り合いを教えてください。',
                answerText: '織田信長と一時期同盟を組んでいたよ。',
                readText: '織田信長と一時期、同盟を組んでいたよ。'
            },
        ],
        questionOptionsThird: [
            {
                questionText: '異名はありますか？',
                answerText: '甲斐の虎と呼ばれておるぞ。',
                readText: '甲斐の虎と呼ばれておるぞ。'
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: 'あなたが関わる大きな出来事はなんですか？',
                answerText: '長い領地争いである「川中島の戦い」であるな。',
                readText: '長い領地争いである「川中島の戦い」であるな。'
            },
            {
                questionText: 'あなたの人生におけるライバルは？',
                answerText: '長きに渡り領地争いをしていた上杉謙信であるかな。',
                readText: '長きに渡り、領地争いをしていた上杉謙信であるかな。'
            },
        ],
        questionOptionsFourth: [
            {
                questionText: '何か名言を残しましたか？',
                answerText: '疾きこと風の如く、徐かなること林の如く、侵掠すること火の如く、動かざること山の如し。',
                readText: 'はやきこと風のごとく、しずかなること林のごとく、しんりゃくすること火のごとく、動かざること山のごとし。'
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
        ],
        questionOptionsFifth: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
        ],
        image: require('../assets/img/武田信玄.jpg'),
        dialogue: 'わしの名前は武田信玄じゃ。',
        readDialogue: 'わしのっ、名前はっ、武田信玄じゃ。',
        explanationTitle: '戦国時代の武将、武田信玄',
        explanationDetail: '正式な名は晴信、出家して信玄と号す。父信虎の専断を嫌った家臣団に擁されて父を追放。家督を継いだ。信濃をめぐり上杉謙信と川中島の戦いで争い、駿河・遠江に兵を進めて徳川家康を三方原で破ったが、上京の途中で死去した。「甲州法度之次第」や信玄堤など優れた分国支配を行った。',
    },
    {
        id: 1,
        period: '鎌倉時代',
        human: '楠木正成',
        questionOptions: [
            {
                questionText: '異名はありますか？',
                answerText: '日本最高の名将、軍神の化身と言われているよ。',
                readText: '日本最高の名将、ぐんしんのけしんと言われているよ。'
            },
            {
                questionText: '好きな言葉は？',
                answerText: '孫子の「良将は戦わずして勝つ」であるな。',
                readText: 'そんしの「りょうしょうは戦わずして勝つ」であるな。'
            },
            {
                questionText: '親戚に有名な人はいる？',
                answerText: '観阿弥が私の甥っ子であるよ。',
                readText: 'かんあみが私の甥っ子であるよ。'
            },
            {
                questionText: '何か自慢できることある？',
                answerText: '築城・籠城の技術を発展させたことであるな。',
                readText: 'ちくじょう・ろうじょうの技術を発展させたことであるな。'
            },
        ],
        questionOptionsSecond: [
            {
                questionText: 'あなたが関わる大きな出来事はなんですか？',
                answerText: '元弘の乱であるな。',
                readText: 'げんこうのらんであるな。'
            },
            {
                questionText: 'あなたのやってることは現代の職業で言ったら何になる？',
                answerText: '国の代表の右腕という意味では官房長官であるかな。（国の代表（後醍醐天皇）の右腕）',
                readText: '国の代表の右うでという意味ではかんぼうちょうかんであるかな。'
            },
            {
                questionText: '何か名言を残しましたか？',
                answerText: '七生報国という言葉を晩年に残したよ。7回生まれ変わっても天皇の敵を滅ぼし国に報いたいという意味だよ。',
                readText: 'しちしょうほうこくという言葉をばんねんに残したよ。7回生まれ変わっても天皇の敵を滅ぼし国を報いたいという意味だよ。',
            },
            {
                questionText: 'あなたは社会にどのような影響を与えましたか？',
                answerText: '智・仁・勇の三徳の象徴とされ、その後の時代の人々の生き方の見本となった',
                readText: 'ち・じん・ゆうの三徳の象徴とされ、その後の時代の人々の生き方の見本となった'
            },
        ],
        questionOptionsThird: [
            {
                questionText: '元弘の乱はどういう戦いですか？',
                answerText: '鎌倉幕府とそれを打倒しようとする者達の戦いでおよそ２年間に渡り争いが続いたよ。',
                readText: '鎌倉幕府とそれを打倒しようとする者たちのたたかいでおよそ２年間に渡り争いが続いたよ。',
            },
            {
                questionText: '誰の右腕として活躍しましたか？',
                answerText: '後醍醐天皇だよ。',
                readText: 'ごだいご天皇だよ。'
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '実は〇〇な話教えて？',
                answerText: '実は悪党と言われていたよ。',
                readText: '実はあくとうと言われていたよ。',
            },
        ],
        questionOptionsFourth: [
            {
                questionText: 'あなたの人生におけるライバルは？',
                answerText: '足利尊氏であるかな。共に鎌倉幕府を滅ぼしたがその後仲違いし戦争することになったよ。',
                readText: 'あしかがたかうじであるかな。共に鎌倉幕府を滅ぼしたがその後仲違いし、戦争することになったよ。',
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
        ],
        questionOptionsFifth: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
        ],
        image: require('../assets/img/楠木正成.png'),
        dialogue: 'わしの名前は楠木正成じゃ。',
        readDialogue: 'わしのっ、名前はっ、くすのきまさしげじゃ。',
        explanationTitle: '河内国の悪党、楠木正成',
        explanationDetail: '鎌倉時代末期から南北朝時代にかけて大覚寺統の後醍醐天皇側の有力武将。1331年元弘の変にて赤坂城で挙兵、後に1336年湊川の戦いで足利尊氏に倒される',
    },
    {
        id: 1,
        period: '明治時代',
        human: '伊藤博文',
        questionOptions: [
            {
                questionText: '有名な知り合いはいますか？',
                answerText: '大久保利通は知り合いだよ。',
                readText: '大久保としみちは知り合いだよ。',
            },
            {
                questionText: 'どこで生まれたの？',
                answerText: '周防国で百姓の子として生まれたんだ。',
                readText: 'すおうのくにで、ひゃくしょうの子として生まれたんだ。',
            },
            {
                questionText: 'あなたの仕事は？',
                answerText: '政治家やんなー',
                readText: '政治家やんなー',
            },
            {
                questionText: 'あだ名はありますか？',
                answerText: '吐き捨てるほど女がいるという意味で箒というあだ名がついていたよ。',
                readText: '吐き捨てるほど女がいるという意味で、ほうきというあだ名がついていたよ。',
            },
        ],
        questionOptionsSecond: [
            {
                questionText: '実は、、って話ありますか？',
                answerText: '禁止されていたフグ料理の解禁のきっかけを作っちゃったよ。',
                readText: '禁止されていたフグ料理の解禁のきっかけを作っちゃったよ。',
            },
            {
                questionText: 'ユーを一言で言うなら？',
                answerText: '明治維新後の日本を牽引し、日本を近代化に導いた立役者やんな！',
                readText: '明治維新ごの日本を牽引し、日本を近代化に導いたたてやくしゃやんな！',
            },
            {
                questionText: '政治家としてどんなことをしましたか？',
                answerText: '初代韓国統監をしたよ。',
                readText: '初代韓国とうかんをしたよ。',
            },
            {
                questionText: 'ライバルは誰ですか？',
                answerText: 'うーん、山縣有朋かなー。',
                readText: 'うーん、やまがたありともかなー。',
            },
        ],
        questionOptionsThird: [
            {
                questionText: '人生におけるターニングポイントは何ですか？',
                answerText: '岩倉使節団の副使として、不平等条約の改正交渉と国家建設のモデルとして欧米諸国を参考にするためにアメリカに行ったことだよ。',
                readText: 'いわくらしせつだんのふくしとして、不平等条約の改正交渉と国家建設のモデルとして欧米諸国を参考にするためにアメリカにいったことだよ。',
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '役職は何でしたか？',
                answerText: '４度にわたり、内閣総理大臣を務めたよ。',
                readText: '４度にわたり、内閣総理大臣を務めたよ。',
            },
            {
                questionText: '死因は何ですか？',
                answerText: '中国のハルビン駅で、安重根に暗殺されちゃった。',
                readText: '中国のハルビン駅で、アン・ジュングンに暗殺されちゃった。',
            },
        ],
        questionOptionsFourth: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '自慢できることは何ですか？',
                answerText: '初代内閣総理大臣を務めたことさ！',
                readText: '初代内閣総理大臣を務めたことさ！',
            },
            {
                questionText: '',
                answerText: ''
            },
        ],
        questionOptionsFifth: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
        ],
        image: require('../assets/img/伊藤博文.png'),
        dialogue: 'わしの名前は伊藤博文じゃ。',
        readDialogue: 'わしのっ、名前はっ、伊藤ひろぶみじゃ。',
        explanationTitle: '初代内閣総理大臣、伊藤博文',
        explanationDetail: '明治期の日本の政治家。1885年内閣制度が創設され、初代内閣総理大臣に就任。明治時代に4度にわたって内閣制度発足以降の内閣総理大臣を務めたことで知られ、1次内閣時には明治憲法の起草の中心人物となり、2次内閣では日清講和条約の起草にあたった',
    },
    {
        id: 1,
        period: '鎌倉時代',
        human: 'フビライハン',
        questionOptions: [
            {
                questionText: '西暦何年生まれですか？',
                answerText: '1215年にこの地に降り立った。',
                readText: '1215年にこの地に降り立った',
            },
            {
                questionText: '知り合いを教えて？',
                answerText: 'ヨーロッパ商人のマルコ・ポーロだな。彼のおかげで、わしは権力を拡大しようと努力することになったな。',
                readText: 'ヨーロッパ商人のマルコ・ポーロだな。彼のおかげで、わしは権力を拡大しようと努力することになったな。',
            },
            {
                questionText: '人生のターニングポイントは？',
                answerText: '生まれた家系が良かったな。家系のおかげで力をつけることができたと思う。',
                readText: '生まれた家系が良かったな。家系のおかげで力をつけることができたと思う。',
            },
            {
                questionText: '実は〇〇な話教えて？',
                answerText: 'ワシは子供が２桁おるのじゃが、ワシのじっちゃんは100人子供がいたらしいぞ。',
                readText: 'ワシは子供が２桁おるのじゃが、ワシのじっちゃんは100人子供がいたらしいぞ。',
            },
        ],
        questionOptionsSecond: [
            {
                questionText: 'どこで生まれた？',
                answerText: 'アジア全土とヨーロッパまでも征服したあの国がワシの生まれた地じゃ。コロナが収束したらぜひ遊びに来てくれ',
                readText: 'アジアぜんどとヨーロッパまでも征服したあの国がワシの生まれた地じゃ。コロナが収束したらぜひ遊びに来てくれ',
            },
            {
                questionText: '夢はなんでしたか？',
                answerText: '世界統一を目指し頑張っておったな。',
                readText: '世界統一を目指し頑張っておったな。',
            },
            {
                questionText: '親戚に有名な人はいる？',
                answerText: '祖父が我が国を創立したな。じっちゃん愛してるよ❤️',
                readText: '祖父が我が国を創立したな。じっちゃん愛してるよ',
            },
            {
                questionText: '悔しかったことはありますか？',
                answerText: '日本に国書を送ったが、なかなか返信をくれなかったことだな。その出来事を機に日本を征服しようと決意したな。',
                readText: '日本にこくしょを送ったが、なかなか返信をくれなかったことだな。その出来事を機に日本を征服しようと決意したな。',
            },
        ],
        questionOptionsThird: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '何か成し遂げたことはありますか？',
                answerText: '現在の北京に「元」を建国し、皇帝となったことだな。「皇帝」という肩書きがカッコ良くって気に入っていたな',
                readText: '現在のぺきんにげんを建国し、皇帝となったことだな。「皇帝」という肩書きがカッコ良くって気に入っていたな',
            },
            {
                questionText: '苦手なことは？',
                answerText: '大雨の日にはあの日を思い出して、今でも苦しい気持ちになるな。',
                readText: '大雨の日にはあの日を思い出して、今でも苦しい気持ちになるな。',
            },
            {
                questionText: 'あなたの人生におけるライバルは？',
                answerText: '鎌倉幕府８代執権北条時宗じゃの。彼は防衛についての知恵もあり、運の強い奴であったのお。',
                readText: '鎌倉幕府８代しっけん、ほうじょうときむねじゃの。彼は防衛についての知恵もあり、運の強い奴であったのお。',
            },
        ],
        questionOptionsFourth: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: 'あなたが関わる大きな出来事はなんですか？',
                answerText: '日本と争った「元寇」であるな。日本では「文永の役」と「弘安の役」というらしいな。ぜひワシの血と汗と涙の戦乱を忘れないでくれ',
                readText: '日本と争ったげんこうであるな。日本ではぶんえいのえきとこうあんのえきというらしいな。ぜひワシの血と汗と涙の戦乱を忘れないでくれ',
            },
        ],
        questionOptionsFifth: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
        ],
        image: require('../assets/img/ふびらいはん.png'),
        dialogue: 'わしはフビライ・ハンじゃ。',
        readDialogue: 'わしのっ、名前はっ、フビライハンじゃ。',
        explanationTitle: 'モンゴル帝国5代皇帝、フビライ・ハン',
        explanationDetail: 'チンギス＝ハンの孫。中国に【元】を建国し、『世祖』となる。1271年征服した高麗を通じ日本に服属を要求するが8代執権北条時宗によってそれを拒否される【文永の役1274年、弘安の役1281年】',
    },
    {
        id: 1,
        period: '昭和時代',
        human: '田中角栄',
        questionOptions: [
            {
                questionText: '何か名言を残しましたか？',
                answerText: '「功は焦らなくても良い。自分に実力がありさえすれば、運は必ず回って来る。」さ',
                readText: '「こうは焦らなくても良い。自分に実力がありさえすれば、運は必ず回って来る。」さ',
            },
            {
                questionText: '若い頃は何をやっていましたか？',
                answerText: '土木会社を設立し、成功を納めたわい。もしかしたら人生軌道に乗り始めたのは、この頃からかもしれないな。',
                readText: 'どぼくがいしゃを設立し、成功を納めたわい。もしかしたら人生軌道に乗り始めたのは、この頃からかもしれないな。',
            },
            {
                questionText: '何か自慢できることある？',
                answerText: '自慢というほどでもないが、逮捕された経験が豊富な人間じゃ。',
                readText: '自慢というほどでもないが、逮捕された経験が豊富な人間じゃ。',
            },
            {
                questionText: '西暦何年生まれですか？',
                answerText: 'ワシは1918年生まれだ。',
                readText: 'ワシは1918年生まれだ。',
            },
        ],
        questionOptionsSecond: [
            {
                questionText: '実は〇〇な話教えて？',
                answerText: 'ワシは悪人のイメージが強いが、実は礼儀正しく心優しいんだ。ワシのいい人エピソードを聞いてくれるか？',
                readText: 'ワシは悪人のイメージが強いが、実は礼儀正しく心優しいんだ。ワシのいい人エピソードを聞いてくれるか？',
            },
            {
                questionText: '尊敬している人は？',
                answerText: '吉田茂先生であるな。とてもお世話になったから、本当に感謝しているな。',
                readText: '吉田しげる先生であるな。とてもお世話になったから、本当に感謝しているな。',
            },
            {
                questionText: '逮捕歴以外の経歴はありますか？',
                answerText: '郵政大臣、国務大臣、大蔵大臣、通商産業大臣を勤めた経験もあるな。これも自慢じゃな',
                readText: '郵政大臣、こくむ大臣、おおくら大臣、つうしょう産業大臣を勤めた経験もあるな。これも自慢じゃな',
            },
            {
                questionText: '異名はありますか？',
                answerText: '皆ワシを今太閤や闇将軍と呼んでおった。これらの異名からもわかると思うが、ワシはかなり影響力を持っていたということだな。',
                readText: 'みなワシをいまたいこうややみ将軍と呼んでおった。これらのいみょうからもわかると思うが、ワシはかなり影響力を持っていたということだな。',
            },
        ],
        questionOptionsThird: [
            {
                questionText: '',
                answerText: '',
                readText: '',
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '人生最高の成功体験はありますか？',
                answerText: '貧相な家庭出身のワシが、最年少で総理大臣になった。支持率70%越えのかっこいい総理をしていたな。',
                readText: '貧相な家庭出身のワシが、最年少で総理大臣になった。支持率70%越えのかっこいい総理をしていたな。',
            },
            {
                questionText: 'あなたは社会にどのような影響を与えましたか？',
                answerText: '影響力を持っていたワシは日本列島改造論を発表し、国民の関心を引きつけたな。',
                readText: '影響力を持っていたワシは日本列島かいぞう論を発表し、国民の関心を引きつけたな。',
            },
        ],
        questionOptionsFourth: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '何か成し遂げたことはありますか？',
                answerText: '総理になった時、日中国交正常化をすると決め、それを成し遂げたな。',
                readText: '総理になった時、にっちゅうこっこう正常化をすると決め、それを成し遂げたな。',
            },
            {
                questionText: 'あなたが関わる大きな出来事はなんですか？',
                answerText: 'やはりワシと言ったらロッキード事件じゃ。ロッキード社の旅客機受注をめぐる汚職事件で世間を騒がせてしまったな...',
                readText: 'やはりワシと言ったらロッキード事件じゃ。ロッキード社の旅客機受注をめぐる汚職事件でせけんを騒がせてしまったな...',
            },
        ],
        questionOptionsFifth: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
        ],
        image: require('../assets/img/田中角栄.png'),
        dialogue: 'わしの名前は田中角栄じゃ。',
        readDialogue: 'わしのっ、名前はっ、田中かくえいじゃ。',
        explanationTitle: '第64、65代内閣総理大臣、田中角栄',
        explanationDetail: '第一次政権では『日本列島改造論』を掲げ、1972年日中共同声明にて、中国との国交が正式に開かれた。第二次政権では第四次中東戦争からの第一次石油危機【オイルショック】が発生',
    },
    {
        id: 1,
        period: '鎌倉時代',
        human: '源頼朝',
        questionOptions: [
            {
                questionText: '何か自慢できることある？',
                answerText: '自分で言うのもなんじゃが容姿が整っており、周りからまるでスーパースターかのようにモテていたんじゃ🤪',
                readText: '自分で言うのもなんじゃが容姿が整っており、周りからまるでスーパースターかのようにモテていたんじゃ',
            },
            {
                questionText: '何か名言を残しましたか？',
                answerText: '大事を思ひはからふ者、物とがめをせず、事ならぬことを事になさず。',
                readText: 'だいじをおもひはからふもの、ものとがめをせず、ことならぬことをことになさず。',
            },
            {
                questionText: '何年に生まれた？',
                answerText: '1147年に生まれたよ',
                readText: '1147年に生まれたよ',
            },
            {
                questionText: 'あなたのやってることは現代の職業で言ったら何になる？',
                answerText: '総理大臣か、大統領やな',
                readText: '総理大臣か、大統領やな',
            },
        ],
        questionOptionsSecond: [
            {
                questionText: '身内で有名人おる？',
                answerText: '妻が北条政子である',
                readText: '妻がほうじょうまさこである',
            },
            {
                questionText: '何か成し遂げたことはありますか？',
                answerText: '初の征夷大将軍になったことじゃ',
                readText: '初のせいいたいしょうぐんになったことじゃ',
            },
            {
                questionText: 'あなたは社会にどのような影響を与えましたか？',
                answerText: '幕府を開き、武士による政治が始まったんじゃ',
                readText: '幕府を開き、武士による政治が始まったんじゃ',
            },
            {
                questionText: 'あなたが関わる大きな出来事はなんですか？',
                answerText: '御恩と奉公、封建体制の成立じゃな',
                readText: 'ごおんとほうこう、ほうけん体制の成立じゃな',
            },
        ],
        questionOptionsThird: [
            {
                questionText: 'あなたの人生におけるライバルは？',
                answerText: '主に平家だと思っとる',
                readText: '主にへいけだと思っとる',
            },
            {
                questionText: '他に何か成し遂げたことはありますか？',
                answerText: '1185 年に鎌倉幕府をつくった',
                readText: '1185 年にかまくら幕府をつくった',
            },
            {
                questionText: 'ゆかりの地は？',
                answerText: '相模国、鎌倉の地じゃな',
                readText: 'さがみのくに、かまくらのちじゃな',
            },
            {
                questionText: '実は〇〇な話教えて？',
                answerText: '実はわしは平家との戦いには参加しておらず弟の義経や範頼が戦っておった',
                readText: '実はわしはへいけとの戦いには参加しておらず弟のよしつねやのりよりが戦っておった',
            },
        ],
        questionOptionsFourth: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
        ],
        questionOptionsFifth: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
        ],
        image: require('../assets/img/源頼朝.png'),
        dialogue: 'わしの名前は源頼朝じゃ。',
        readDialogue: 'わしのっ、名前はっ、みなもとのよりともじゃ。',
        explanationTitle: '鎌倉幕府の初代征夷大将軍、源頼朝',
        explanationDetail: '平安時代末期から鎌倉時代初期の日本の武将。北条時政や北条義時などと平家打倒を試み、鎌倉を本拠地として占拠した。藤原氏を滅ぼし、1192年に征夷大将軍に任命された。',
    },
    {
        id: 1,
        period: '時代',
        human: '聖徳太子',
        questionOptions: [
            {
                questionText: '何年にうまれた？',
                answerText: 'ワシは574年にうまれた',
                readText: 'ワシは574年にうまれた',
            },
            {
                questionText: 'なんと呼ばれていましたか？',
                answerText: '厩戸皇子と呼ばれていたぜ',
                readText: 'うまやどのおうじと呼ばれていたぜ',
            },
            {
                questionText: 'あなたはどんな書物を残したの？',
                answerText: '蘇我馬子と共同で『天皇紀』と『国記』を編纂したよ',
                readText: 'そがのうまこと共同でてんのうきと、こきを編纂したよ',
            },
            {
                questionText: 'あなたは社会にどのような影響を与えましたか？',
                answerText: '倭の国が日本になるための土台を作ったな',
                readText: 'わの国が日本になるための土台を作ったな',
            },
        ],
        questionOptionsSecond: [
            {
                questionText: 'あなたが関わる大きな出来事はなんですか？',
                answerText: '寺を作ったな',
                readText: '寺を作ったな',
            },
            {
                questionText: 'あなたは誰の知り合いですか',
                answerText: '蘇我馬子じゃ',
                readText: 'そがのうまこじゃ',
            },
            {
                questionText: '何か成し遂げたことはありますか？',
                answerText: '603年に冠位十二階の制という出世システムを作りだした',
                readText: '603年にかんいじゅうにかいのせいという出世システムを作りだした',
            },
            {
                questionText: '何か自慢できることある？',
                answerText: '10人の話を同時に聞けたんじゃ',
                readText: '10人の話を同時に聞けたんじゃ',
            },
        ],
        questionOptionsThird: [
            {
                questionText: 'あなたの仕事は？',
                answerText: '政治の補佐じゃな',
                readText: '政治の補佐じゃな',
            },
            {
                questionText: '誰の右腕として活躍しましたか？',
                answerText: '推古天皇だな',
                readText: 'すいこ天皇だな',
            },
            {
                questionText: '他には何成し遂げた？',
                answerText: '604年に我が国初の成文法、憲法十七条を制定した',
                readText: '604年に我が国、初のせいぶんほう、けんぽうじゅうななじょうを制定した',
            },
            {
                questionText: '',
                answerText: ''
            },
        ],
        questionOptionsFourth: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: 'あなたといえば？',
                answerText: '小野妹子を遣隋使として派遣したな',
                readText: 'おののいもこをけんずいしとして派遣したな',
            },
            {
                questionText: '',
                answerText: ''
            },
        ],
        questionOptionsFifth: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
        ],
        image: require('../assets/img/聖徳太子.png'),
        dialogue: 'わしの名前は聖徳太子じゃ。',
        readDialogue: 'わしのっ、名前はっ、しょうとく、たいしじゃ。',
        explanationTitle: '飛鳥時代の皇族・政治家、聖徳太子',
        explanationDetail: '推古天皇と蘇我馬子と協力し、遣隋使を派遣し大陸の文化や制度を日本に取り入れた。階位十二階や十七条憲法を定め、中央集権国家体制を確立した。',
    },
    {
        id: 1,
        period: '江戸時代',
        human: '伊能忠敬',
        questionOptions: [
            {
                questionText: '西暦何年生まれですか？',
                answerText: '1745年生まれじゃ',
                readText: '1745年生まれじゃ',
            },
            {
                questionText: '実は○○な話ある？',
                answerText: '実はわしは商才があったんじゃ',
                readText: '実はわしはしょうさいがあったんじゃ',
            },
            {
                questionText: 'あなたの仕事は？',
                answerText: 'いろいろやったが、天文学者もやったなぁ',
                readText: 'いろいろやったが、てんもんがくしゃもやったなぁ',
            },
            {
                questionText: '何かエピソードある？',
                answerText: '今でいうと定年退職後に大学に入学するようなことをやっていたのお',
                readText: '今でいうと定年退職後に大学に入学するようなことをやっていたのお',
            },
        ],
        questionOptionsSecond: [
            {
                questionText: 'どんな性格だったの？',
                answerText: '厳格な性格じゃったよ',
                readText: '厳格な性格じゃったよ',
            },
            {
                questionText: '実は〇〇、もっと聞きたい！',
                answerText: 'あることをするために3.5万キロ歩いたことがあるのじゃ',
                readText: 'あることをするためにさんてんご万キロ歩いたことがあるのじゃ',
            },
            {
                questionText: '天文学で有名になった人？',
                answerText: 'わしは別のことで有名じゃな',
                readText: 'わしは別のことで有名じゃな',
            },
            {
                questionText: 'それって具体的にどんなこと？',
                answerText: '四十九歳に隠居をして江戸に移り住んだんじゃ',
                readText: '四十九歳に隠居をしてえどに移りすんだんじゃ',
            },
        ],
        questionOptionsThird: [
            {
                questionText: '偉業はなんかある？',
                answerText: '大日本沿海輿地全図を作ったことじゃ。（伊能図とも言われてる）',
                readText: 'だいにほんえんかいよちぜんずを作ったことじゃ。',
            },
            {
                questionText: 'なんのために歩いたの？',
                answerText: '測量をしたんじゃ',
                readText: '測量をしたんじゃ',
            },
            {
                questionText: 'それは天文学に関係する？',
                answerText: '距離を測ったりするという意味では関係あるのう',
                readText: '距離を測ったりするという意味では関係あるのう',
            },
            {
                questionText: '江戸に移り住んでなにしてた？',
                answerText: '19歳年下のやつから天文学を教わったのう',
                readText: '19歳年下のやつからてんもんがくを教わったのう',
            },
        ],
        questionOptionsFourth: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '距離を測ってなにしてたの？',
                answerText: '日本中を歩き回って測量したのお',
                readText: '日本中を歩き回って測量したのお',
            },
            {
                questionText: '誰に天文学を教わったの？',
                answerText: '高橋至時くんじゃ',
                readText: 'たかはしよしときくんじゃ', 
            },
        ],
        questionOptionsFifth: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
        ],
        image: require('../assets/img/伊能忠敬.png'),
        dialogue: 'わしの名前は伊能忠敬じゃ。',
        readDialogue: 'わしのっ、名前はっ、伊能ただたかじゃ。',
        explanationTitle: '江戸時代の測量家、伊能忠敬',
        explanationDetail: '55~71歳の時、日本中を歩き回りながら測量し、日本地図を完成した。作成した地図はヨーロッパでも高く評価され、明治以降には日本地図として使われることになった。',
    },
    {
        id: 1,
        period: '平安時代',
        human: '源義経',
        questionOptions: [
            {
                questionText: '西暦何年生まれですか？',
                answerText: '1159年に生まれたよ。',
                readText: '1159年に生まれたよ。'
            },
            {
                questionText: '小さい頃のエピソードを教えてください。',
                answerText: '赤ん坊の時に敵に殺されかけたが母親が懇願して見逃してくれたんだ。',
                readText: '赤ん坊の時に敵に殺されかけたが母親が懇願して見逃してくれたんだ。'
            },
            {
                questionText: 'あなたは社会にどのような影響を与えましたか？',
                answerText: '日本に幕府というものを作るきっかけとなったな。',
                readText: '日本に幕府というものを作るきっかけとなったな。'
            },
            {
                questionText: '何をしている人ですか？',
                answerText: '武将であるよ。',
                readText: '武将であるよ。'
            },
        ],
        questionOptionsSecond: [
            {
                questionText: '有名な知り合いはいますか？',
                answerText: '知り合いと言うのは気が引けるが、後白河上皇に直接命を受けたことがあるぞ。',
                readText: '知り合いと言うのは気が引けるが、ごしらかわじょうこうに直接めいを受けたことがあるぞ。'
            },
            {
                questionText: '死因は何ですか？',
                answerText: '共に仲間として戦ってきた兄に攻められたんだ。一切戦うことはせず、妻と４歳の娘を殺害した後に自害したよ。',
                readText: '共に仲間として戦ってきた兄に攻められたんだ。一切戦うことはせず、妻と４歳の娘を殺害した後に自害したよ。'
            },
            {
                questionText: 'ゆかりの地はどこですか？',
                answerText: '奥州平泉であるな。今も堂が残っていて2011年に世界遺産に登録されたらしいな。',
                readText: 'おうしゅうひらいずみであるな。今も堂が残っていて2011年に世界遺産に登録されたらしいな。'
            },
            {
                questionText: 'どういう戦い方をしていましたか？',
                answerText: '突然崖を駆け下りて奇襲をしたり船の操縦員を矢で射止めたりして敵の隙をつく戦い方をして大勝利を収めていたよ。',
                readText: '突然崖を駆け下りて奇襲をしたり船の操縦員を矢で射止めたりして敵の隙をつく戦い方をして大勝利を収めていたよ。'
            },
        ],
        questionOptionsThird: [
            {
                questionText: 'あなたが関わる大きな出来事はなんですか？',
                answerText: '治承・寿永の乱であるぞ。一般的には源平合戦と言われているな。',
                readText: 'じしょう・じゅえいの乱であるぞ。一般的にはげんぺい合戦と言われているな。'
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: 'あなたが信頼する人は誰ですか？',
                answerText: '部下の弁慶じゃ。',
                readText: '部下のべんけいじゃ。'
            },
            {
                questionText: '具体的には何の戦いで勝利しましたか？',
                answerText: '一ノ谷の戦い、屋島の戦い、そして壇ノ浦の戦いで勝利を収めたよ。',
                readText: 'いちのたにの戦い、やしまの戦い、そしてだんのうらの戦いで勝利を収めたよ。'
            },
        ],
        questionOptionsFourth: [
            {
                questionText: '',
                answerText: '',
                readText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '異名はありますか？',
                answerText: '牛若丸と呼ばれておった。',
                readText: 'うしわかまると呼ばれておった。'
            },
        ],
        questionOptionsFifth: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
        ],
        image: require('../assets/img/源義経.png'),
        dialogue: 'わしの名前は源義経じゃ。',
        readDialogue: 'わしのっ、名前はっ、みなもとのよしつねじゃ。',
        explanationTitle: '平安時代末期の武将、源義経',
        explanationDetail: '1159~89　頼朝の弟。幼名牛若丸。奥州に下り藤原秀衡（ふじわらのひでひら）の下で成長。頼朝挙兵に参じ、義仲（よしなか）・兵士討伐に功をあげた。後に頼朝と不仲になり、奥州に潜伏中、秀衡の子泰衡（やすひら）に攻められて自殺した。',
    },
    {
        id: 1,
        period: '室町時代',
        human: '足利義満',
        questionOptions: [
            {
                questionText: '西暦何年生まれですか？',
                answerText: '1369年生まれだよ',
                readText: '1369年生まれだよ'
            },
            {
                questionText: 'あなたの仕事は？',
                answerText: '将軍様じゃー！',
                readText: 'しょうぐんさまじゃー！'
            },
            {
                questionText: 'どこで生まれたの？',
                answerText: '京都どすえぇ〜',
                readText: '京都どすえぇ〜'
            },
            {
                questionText: '実は◯◯な話ってある？',
                answerText: '10歳で将軍になったって話かな',
                readText: '10歳で将軍になったって話かな'
            },
        ],
        questionOptionsSecond: [
            {
                questionText: '誰かに尊敬とかされたことある？',
                answerText: 'だいぶ後の人やけど、織田信長くんに尊敬されちゃったみたいやな',
                readText: 'だいぶあとの人やけど、織田信長くんに尊敬されちゃったみたいやな'
            },
            {
                questionText: 'あなたの地位は？',
                answerText: '平清盛に次いで２人目の太政大臣にまで登りつめたよ',
                readText:  'たいらのきよもりに次いで２人目のたいじょうだいじんにまで登りつめたよ'
            },
            {
                questionText: '一昔前にテレビに出てなかった？',
                answerText: '一休さんに出たよ！',
                readText: 'いっきゅうさんに出たよ！'
            },
            {
                questionText: 'なんか作ってないん？',
                answerText: '20歳の時に花の御所作ったったわい',
                readText: '20歳の時に花のごしょ作ったったわい'
            },
        ],
        questionOptionsThird: [
            {
                questionText: 'あだ名は？',
                answerText: '室町殿と呼ばれておった',
                readText: '室町どのと呼ばれておった'
            },
            {
                questionText: '何か誇れることは？',
                answerText: 'まあ、わいが将軍してた頃が室町時代で１番栄えてたってことかね',
                readText: 'まあ、わいが将軍してた頃が室町時代で１番栄えてたってことかね'
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '他にどんなこと行ってたの？',
                answerText: '「明」（中国）と勘合貿易を始めたよ',
                readText: '「みん」（中国）とかんごう貿易を始めたよ'
            },
        ],
        questionOptionsFourth: [
            {
                questionText: '偉業はなんかある？',
                answerText: '南北朝合一したったわい。あと、金があまっとったけん別荘建てたったわい！チナそれが、金閣なんよな〜',
                readText: 'なんぼくちょうごういつしたったわい。あと、金があまっとったけんべっそう建てたったわい！チナそれが、きんかくなんよな〜'
            },
            {
                questionText: 'おじいちゃん誰？',
                answerText: '足利尊氏といって、誇り高い祖父であったな',
                readText: 'あしかがたかうじといって、ほこり高い祖父であったな'
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
        ],
        questionOptionsFifth: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
        ],
        image: require('../assets/img/足利義満.png'),
        dialogue: 'わしの名前は足利義満じゃ。',
        readDialogue: 'わしのっ、名前はっ、あしかがよしみつじゃ。',
        explanationTitle: '室町幕府三代将軍、足利義満',
        explanationDetail: '南北朝統一を成し遂げ、室町幕府の権力を確立した。また金閣寺を建国し、北山文化を開花させた。室町時代の政治、経済、文化の最盛期を築いた。',
    },
    {
        id: 1,
        period: '室町時代',
        human: '足利尊氏',
        questionOptions: [
            {
                questionText: 'あなたの仕事は？',
                answerText: '将軍様じゃー！',
                readText: 'しょうぐんさまじゃー'
            },
            {
                questionText: 'どこで生まれたの？',
                answerText: '栃木県で生まれたよ。',
                readText: 'とちぎけんでうまれたよ'
            },
            {
                questionText: '西暦何年生まれですか？',
                answerText: '1305年生まれだよ',
                readText: '1305ねんうまれだよ'
            },
            {
                questionText: 'あなたの異名は？',
                answerText: '史上最大の逆賊って言われたり言われてなかったり・・・',
                readText: 'しじょうさいだいのぎゃくぞくっていわれたりいわれてなかったり'
            },
        ],
        questionOptionsSecond: [
            {
                questionText: '祖先に有名な人いる？',
                answerText: '源義家っちだね',
                readText: 'みなもとのよしいえっちだね'
            },
            {
                questionText: 'あなたのやっちゃった事件は？',
                answerText: '力を合わせて政治をしてた弟を対立してしまった時に毒殺したんだな、、',
                readText: 'ちからをあわせてせいじをしてたおとうとをたいりつしてしまったときにどくさつしたんだな'
            },
            {
                questionText: '関わった大きな戦とかってある？',
                answerText: '元弘の乱だね',
                readText: 'げんこうのらんだね'
            },
            {
                questionText: 'この前テレビに出てなかった？',
                answerText: '大河ドラマの「太平記」にでとったわい！',
                readText: 'たいがどらまのたいへいきにでとったわい'
            },
        ],
        questionOptionsThird: [
            {
                questionText: 'お父さん誰？',
                answerText: '足利貞氏くんだよ',
                readText: 'あしかがさだうじくんだよ'
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: 'ここだけの話ってある？',
                answerText: '元弘の乱に出陣するよう言われたけど、父の喪中だったから断ったんだけど、幕府に許してもらえなかったんよ（太平記より）',
                readText: 'げんこうのらんにしゅつじんするよういわれたけど、ちちのもちゅうだったからことわったんだけど、ばくふにゆるしてもらえなかったよ'
            },
            {
                questionText: '実はの話ってある？',
                answerText: '最初は鎌倉幕府側の人間だったんだけど、途中で裏切って後醍醐天皇側についたんや〜',
                readText: 'さいしょはかまくらばくふがわのにんげんだったんだけど、とちゅうでうらぎってごだいごてんのうがわについたんや〜'
            },
        ],
        questionOptionsFourth: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: 'あなたの偉業は？',
                answerText: '室町幕府つくりましたー！！新田義貞、楠木正成、後醍醐天皇の新政府を倒した後に、光明天皇をたててと色々苦労して幕府を作ったんよ。',
                readText: 'むろまちばくふつくりましたー！！にったよしさだ、くすのきまさしげ、ごだいごてんのうのしんせいふをたおしたあとに、こうめいてんのうをたててといろいろくろうしてばくふをつくったんよ'
            },
        ],
        questionOptionsFifth: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
        ],
        image: require('../assets/img/足利尊氏.png'),
        dialogue: 'わしの名前は足利尊氏じゃ。',
        readDialogue: 'わしのっ、名前はっ、あしかがたかうじじゃ。',
        explanationTitle: '室町幕府初代征夷大将軍、足利尊氏',
        explanationDetail: '鎌倉時代末期から南北朝時代の武将。後醍醐天皇とともに鎌倉幕府を倒し、室町幕府を築いた。',
    },
    {
        id: 1,
        period: '戦国時代',
        human: '斎藤道三',
        questionOptions: [
            {
                questionText: '西暦何年に生まれたの？',
                answerText: '1494年やな！',
                readText: '1494年やな！',
            },
            {
                questionText: 'どこで生まれたん？',
                answerText: '京都どすえぇ',
                readText: '京都どすえぇ',
            },
            {
                questionText: '10歳の時の名前なんなん？',
                answerText: '法蓮、、蓮舫ちゃうぞうい！',
                readText: 'ほうれん、、れんほうちゃうぞうい！',
            },
            {
                questionText: 'どんな人なの？',
                answerText: 'ワイは人を平気で騙せる非情な人間やったわい',
                readText: 'ワイは人を平気で騙せる非情な人間やったわい',
            },
        ],
        questionOptionsSecond: [
            {
                questionText: 'なんか自慢できることある？',
                answerText: 'パパと一緒に親子２代で、僧侶から油売り、ほんで大名に成り上がったんや！下克上最高！！',
                readText: 'パパと一緒に親子２代で、僧侶からあぶらうり、ほんでだいみょうに成り上がったんや！げこくじょう最高！！',
            },
            {
                questionText: '名言ある？',
                answerText: '「力で奪い取ったものは時を経て、力でもぎ取られる」と言ったな',
                readText: '「ちからで奪い取ったものは時を経て、ちからでもぎ取られる」と言ったな',
            },
            {
                questionText: '何か自慢できることあり？',
                answerText: '信長の城作りに影響を与えたんじゃ！',
                readText: 'のぶながのしろ作りに影響を与えたんじゃ！',
            },
            {
                questionText: 'どんなことをしてたの？',
                answerText: '武将をしちょったわい',
                readText: 'ぶしょうをしちょったわい',
            },
        ],
        questionOptionsThird: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: 'なんか武勇伝ある？',
                answerText: 'まあ、戦の最後死ぬ直前に遺言を書いて信長に自分の国をやったことやな',
                readText: 'まあ、いくさの最後死ぬ直前にゆいごんを書いてのぶながに自分の国をやったことやな',
            },
            {
                questionText: '具体的にはどんなことをしてたの？',
                answerText: '美濃国の戦国大名もしとった',
                readText: 'みののくにのせんごくだいみょうもしとった',
            },
        ],
        questionOptionsFourth: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: 'あだ名はある？',
                answerText: '美濃のマムシって呼ばれとったわい！',
                readText: 'みののマムシって呼ばれとったわい！',
            },
        ],
        questionOptionsFifth: [
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
            {
                questionText: '',
                answerText: ''
            },
        ],
        image: require('../assets/img/斎藤道三.png'),
        dialogue: 'わしの名前は斎藤道三じゃ。',
        readDialogue: 'わしのっ、名前はっ、斎藤どうさんじゃ。',
        explanationTitle: '美濃の戦国大名、斎藤道三',
        explanationDetail: '規秀（道三）の代に長井家を倒し、守護代斎藤氏の家名を奪って、土岐氏を追放。長男の義龍と争って敗北した。',
    },
]
export default questions;
