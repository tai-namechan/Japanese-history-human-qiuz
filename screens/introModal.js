import React, {useState,useRef} from 'react'
import {View, Text, Modal, Image, StyleSheet, TouchableOpacity, FlatList, Dimensions} from 'react-native'

const IntroModal = ({isVisible, dismissModal}) => {
  const [viewableItemIndex, setViewableItemIndex] = useState(0);
  const [buttonText, setButtonText] = useState('Next');

  const _renderItem = page => {
    const {item} = page;
    return (
        <View style={styles.slideInner}>
          <Text style={styles.title}>{item.title}</Text>
          <Image style={styles.img} source={item.image} />
          <Text style={styles.text}>{item.text}</Text>
        </View>
    );
  };
  const _keyExtractor = page => page.key;


// 画像の下にdotのページネーションとボタンを設置
// flatListのrefを作成
  const flatListRef = useRef(null);
// onViewableItemsChangedで現在見えているviewを取得。
  const onViewRef = useRef(({viewableItems}) => {
      // 現在の見えているItemのindexをuseStateに保存
    setViewableItemIndex(viewableItems[0].index);
    // 一番最後のスライドならボタンのテキストを変える
    if (viewableItems[0].index === SLIDES.length - 1) {
      setButtonText('Done');
    } else {
      setButtonText('Next');
    }
  });
// buttonを押したら次のViewへ飛ぶ
  const _onBottomButton = () => {
    if (viewableItemIndex < SLIDES.length - 1) {
      flatListRef.current.scrollToIndex({animated: true, index: viewableItemIndex + 1});
    } else {
      dismissModal();
    }
  };
// dotを押したらそのindexのViewへ飛ぶ
  const _onDot = index => {
    flatListRef.current.scrollToIndex({animated: true, index: index});
  };
// dotの色を変える
  function dotColor(index) {
    return index === viewableItemIndex ? styles.colorDot : styles.whiteDot;
  }


  return (
    <Modal visible={isVisible} animationType="fade" transparent={true}>
      <View style={styles.container}>
        <FlatList
          data={SLIDES}
          horizontal={true}
          renderItem={_renderItem}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={_keyExtractor}
          // ref で参照を指定
          ref={flatListRef}
          // 見えているViewが変われば呼ばれる
          onViewableItemsChanged={onViewRef.current}
        />

        <View style={styles.bottomWrapper}>
        {/* pagenation */}
          <View style={styles.dotWrapper}>
          {/*  dot の作成 */}
            {SLIDES.map((listItem, index) => {
              return (
                <TouchableOpacity
                  onPress={() => _onDot(index)}
                  key={index}
                  style={[styles.dot, dotColor(index)]}
                />
              );
            })}
          </View>
          <TouchableOpacity style={styles.button} onPress={_onBottomButton}>
            <Text style={styles.buttonText}>{buttonText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}

export default IntroModal;

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(85, 122, 80, 0.9)'
  },
  space: {
    paddingTop: 40,
  },
  slideInner: {
    width: width,
    justifyContent: 'center',
    paddingBottom: 80,
    alignItems: 'center',
    paddingHorizontal: '5%',
  },
  img: {
    width: 250,
    height: 500,
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    marginTop: 30,
    marginBottom: 30,
  },
  text: {
    fontSize: 19,
    color: '#fff',
    textAlign: 'center',
    lineHeight: 30,
  },
  bottomWrapper: {
    position: 'absolute',
    bottom: 50,
    alignItems: 'center',
  },
  dotWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    marginHorizontal: 6,
  },
  colorDot: {
    backgroundColor: '#FFA700',
  },
  whiteDot: {
    backgroundColor: '#5d627b',
  },
  button: {
    marginTop: 18,
  },
  buttonText: {
    fontSize: 19,
    color: '#fff',
  },
})

const SLIDES = [
    {
      key: '1',
      title: "日本史の壁正解を衝けへ             ようこそ！✨",
      text: "このアプリは、質問をして偉人が誰か当てるクイズアプリです",
      image: require('../assets/img/sentaku.png'),
    },
    {
      key: '2',
      title: "偉人へ質問😎",
      text: "問題画面でシルエットのかかった偉人に対しボタンを押して質問します。質問ボタンを押すと、そのボタンは次の質問内容に　　　　　　切り替わります",
      image: require('../assets/img/shitumon.png'),
    },
    {
      key: '3',
      title: "正解発表🎉",
      text: "正解すると得点が貰えます。質問をした数に応じて点数が1点ずつ引かれていく仕組みの為少しでも質問数を少なくし正解にたどり着く事がコツです",
      image: require('../assets/img/kotae.png'),
    },
    {
      key: '4',
      title: "ランキング🎖",
      text: "総獲得ポイント、平均ポイントによるランキング機能もあります！是非競争心を持って、ランキング入りを目指してみましょう👍",
      image: require('../assets/img/jyunni.png'),
    },
  ];