const questions = [
    {
        id: 1,
        period: '明治時代',
        human: '渋沢栄一',
        questionOptions: [
            { 
                questionText: '西暦何年生まれですか？', 
                answerText: '1840年に生まれたよ。', 
                readText: '1840年に生まれたよ。'
            },
            { 
                questionText: '人生のターニングポイントは？', 
                answerText: 'いくつかあるが27歳の時のパリへの渡航がなければ今の私はなかったと思う', 
                readText: 'いくつかあるが27歳の時のパリへの渡航がなければ今の私はなかったと思う' 
            },
            { 
                questionText: '実は〇〇な話ある？', 
                answerText: '実は68歳で側室との間に子供ができたんじゃ', 
                readText: '実は68歳で側室との間に子供ができたんじゃ'
            },
            { 
                questionText: '何か自慢できることはある？', 
                answerText: '私がもうじき１万円札の顔になるらしいぞ。', 
                readText: '私がもうじき１万円さつの顔になるらしいぞ。' 
            },
        ],
        questionOptionsSecond: [
            { 
                questionText: '有名な知り合いを教えて?', 
                answerText: '西郷隆盛殿や大久保利通殿は知り合いだぞ。', 
                readText: '西郷隆盛殿や大久保利通殿は知り合いだぞ。' 
            },
            { 
                questionText: '何を経営してた？', 
                answerText: '第一国立銀行はそのうちの一つだ。国立銀行条例をもとにして私が設立したよ。', 
                readText: '第いち国立銀行はそのうちの一つだ。国立銀行条例をもとにして私が設立したよ。' 
            },
            { 
                questionText: 'あなたの偉業を教えてください。', 
                answerText: '現在のJR東日本、NHK、サッポロビールなど500以上の会社の設立に関わったよ。', 
                readText: '現在のJR東日本、NHK、サッポロビールなど500以上の会社の設立に関わったよ。' 
            },
            { 
                questionText: '異名はありますか？', 
                answerText: '日本資本主義の父と言われているらしいな。', 
                readText: '日本資本主義の父と言われているらしいな。' 
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
]
export default questions;
