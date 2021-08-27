const questions = [
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
]
export default questions;
