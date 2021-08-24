const questions = [
    
    {
        id: 1,
        period: '明治時代',
        human: '渋沢栄一',
        questionOptions: [
            { 
                questionText: 'どこで生まれましたか？', 
                answerText: '武蔵国といって現在の埼玉県にあたる場所で生まれたよ。' 
            },
            { 
                questionText: 'あなたのやってることは現代の職業で言ったら何になる？', 
                answerText: '経営者もやったことの一つだな' 
            },
            { 
                questionText: '西暦何年生まれですか？', 
                answerText: '1840年に生まれたよ。' 
            },
            { 
                questionText: '実は〇〇な話ある？', 
                answerText: '実は68歳で側室との間に子供ができたんじゃ' 
            },
        ],
        questionOptionsSecond: [
            { 
                questionText: '人生のターニングポイントは？', 
                answerText: 'いくつかあるが27歳の時のパリへの渡航がなければ今の私はなかったと思う' 
            },
            { 
                questionText: '何を経営してた？', 
                answerText: '第一国立銀行はそのうちの一つだ。国立銀行条例をもとにして私が設立したよ。' 
            },
            { 
                questionText: '尊敬している人は？', 
                answerText: '尊敬している人のうちの1人は平岡えん四郎様だな。' 
            },
            { 
                questionText: '特技はなんですか？', 
                answerText: 'そろばんが得意だよ。' 
            },
        ],
        questionOptionsThird: [
            { 
                questionText: '', 
                answerText: '' 
            },
            { 
                questionText: '異名はありますか？', 
                answerText: '日本資本主義の父と言われているらしいな。' 
            },
            { 
                questionText: '有名な知り合いを教えて?', 
                answerText: '西郷隆盛殿や大久保利通殿は知り合いだぞ。' 
            },
            { 
                questionText: 'あなたの偉業を教えてください。', 
                answerText: '現在のJR東日本、NHK、サッポロビールなど500以上の会社の設立に関わったよ。' 
            },
        ],
        questionOptionsFourth: [
            { 
                questionText: '', 
                answerText: '' 
            },
            { 
                questionText: '何か自慢できることはある？', 
                answerText: '私がもうじき１万円札の顔になるらしいぞ。' 
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
        dialogue: 'ワシは渋沢栄一じゃ覚えとけおら',
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
                answerText: '1760年に生まれたよ。' 
            },
            { 
                questionText: 'あなたのやってることは現代の職業で言ったら何になりますか？', 
                answerText: 'アーティストやの。' 
            },
            { 
                questionText: '苦手なことはありますか？', 
                answerText: '片付けをするのが苦手で部屋が汚くなると引越しを繰り返しておった。' 
            },
            { 
                questionText: '尊敬している人は誰ですか？', 
                answerText: '勝川春章先生じゃ。19歳の時に弟子入りしたぞ。' 
            },
        ],
        questionOptionsSecond: [
            { 
                questionText: 'あなたはどの分野に影響を与えましたか？', 
                answerText: '化政文化に影響を与えたよ。（しっくりきていない）' 
            },
            { 
                questionText: '作品を作るときに拘っていたことは何ですか？', 
                answerText: '遠近法や配色に拘っていたよ。' 
            },
            { 
                questionText: '何か自慢できることありますか？', 
                answerText: 'この1000年で最も偉大な業績を残した世界の100人という特集に選出されたことがあるらしいよ。' 
            },
            { 
                questionText: '実は〇〇な話ありますか？', 
                answerText: '実は改名を30回したんじゃ。卍を名前の中に入れたこともあるぞ。' 
            },
        ],
        questionOptionsThird: [
            { 
                questionText: 'あなたは有名な人物に影響を与えましたか？', 
                answerText: '歌川広重やヨーロッパのゴッホ、モネにも影響を与えたよ。' 
            },
            { 
                questionText: 'どういう作品を作りましたか？', 
                answerText: '富士山を各地から眺めた46枚の図を作ったよ。' 
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
                answerText: '富嶽三十六景だよ。その中でも凱風快晴、俗に言う赤富士が有名だな。評判が良かったから予定より10枚増やしたんじゃ。' 
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
        dialogue: 'わしは江戸の浮世絵師、葛飾北斎じゃ。',
        explanationTitle: '江戸の浮世絵師、葛飾北斎',
        explanationDetail: '1760~1849 浮世絵師、江戸の人。勝川春章に学び、狩野派・洋画など各種の画法も習得して独自の画風を開く。風景版画の「富嶽三十六景」などは、ヨーロッパ後期印象派の画家に影響を与え、ジャポニズムをうんだ。「北斎漫画」「画本東都遊」などの作品がある。',
    },
]
export default questions;

