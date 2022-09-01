import React, {useState,useRef} from 'react'
import {View, Text, Modal, Image, StyleSheet, TouchableOpacity, FlatList, Dimensions} from 'react-native'
import {
    useNavigation,
  } from '@react-navigation/native';

const Tutorial = ({isVisible, dismissModal}) => {
  const [viewableItemIndex, setViewableItemIndex] = useState(0);
  const [buttonText, setButtonText] = useState('次へ');
  const navigation = useNavigation();

  const _renderItem = page => {
    const {item} = page;
    return (
        <View style={styles.slideInner}>
            <View style={styles.slideInner_title_wrapper}>
                <Text style={styles.title}>{item.title}</Text>
            </View>
          <View style={styles.slideInner_image_wrapper}>
              <Image style={styles.img} source={item.image} />
        </View>
          <View style={styles.slideInner_text_wrapper}>
          <Text style={styles.text}>{item.text}</Text>
          </View>
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
      setButtonText('トップへ戻る');
    } else {
      setButtonText('次へ');
    }
  });
// buttonを押したら次のViewへ飛ぶ
  const _onBottomButton = () => {
    if (viewableItemIndex < SLIDES.length - 1) {
      flatListRef.current.scrollToIndex({animated: true, index: viewableItemIndex + 1});
    } else {
    //   dismissModal();
    navigation.navigate("問題");
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
      <View style={styles.top_wrapper}>
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
        </View>
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
    </Modal>
  )
}

export default  Tutorial;

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  top_wrapper: {
    height: "85%",
    backgroundColor: 'rgba(85, 122, 80, 0.9)'
  },
  slideInner: {
    width: width,
    height: "100%",
    paddingHorizontal: '10%',
    // backgroundColor: "red",
  },
  slideInner_title_wrapper: {
    justifyContent: "flex-end",
    paddingBottom: "5%",
    height: "20%",
    width: "100%",
    // backgroundColor: "blue",
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
  slideInner_image_wrapper: {
    justifyContent: "center",
    alignItems: "center",
    height: "60%",
    width: "100%",
    // backgroundColor: "green",
  },
  img: {
    width: 200,
    height: 450,
  },
  slideInner_text_wrapper: {
    paddingTop: "5%",
    height: "20%",
    width: "100%",
    // backgroundColor: "orange",
  },
  text: {
    fontSize: 19,
    color: '#fff',
    lineHeight: 30,
  },
  bottomWrapper: {
    width: "100%",
    height: "12%",
    justifyContent: "center",
    alignItems: 'center',
    // backgroundColor: "pink",
    backgroundColor: 'rgba(85, 122, 80, 0.9)'
  },
  dotWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: "purple",
  },
  dot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    marginHorizontal: 6,
  },
  colorDot: {
    backgroundColor: '#FFA700',
  },
  whiteDot: {
    backgroundColor: '#5d627b',
  },
  button: {
    marginTop: 20,
  },
  buttonText: {
    fontSize: 19,
    color: '#fff',
    
  },
})

const SLIDES = [
    {
      key: '1',
      title: "「日本史の壁」へようこそ！✨",
      text: "日本史の壁は、質問をしながら偉人が誰かを当てるクイズアプリです！",
      image: require('../../assets/img/sentaku.png'),
    },
    {
      key: '2',
      title: "偉人へ質問😎",
      text: "質問画面でシルエットのかかった偉人に対し、ボタンを押して質問します。質問ボタンを押すと、そのボタンは次の質問内容に切り替わります。",
      image: require('../../assets/img/shitumon.png'),
    },
    {
      key: '3',
      title: "正解発表🎉",
      text: "正解すると得点が貰えます。質問をした数に応じて点数が1点ずつ引かれていく仕組みのため、質問数を少なくし正解にたどり着く事がコツです！",
      image: require('../../assets/img/kotae.png'),
    },
    {
      key: '4',
      title: "ランキング🎖",
      text: "総獲得ポイント、月次ポイントによるランキング機能もあります！是非競争心を持って、ランキング入りを目指してみましょう👍",
      image: require('../../assets/img/jyunni.png'),
    },
  ];