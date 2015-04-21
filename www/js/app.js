(function(){
  'use strict';
  var module = angular.module('app', ['onsen']);

  module.controller('AppController', function($scope, $data) {
    $scope.doSomething = function() {
      setTimeout(function() {
        alert('tappaed');
      }, 100);
    };
  });

  module.controller('DetailController', function($scope, $data) {
    $scope.item = $data.selectedItem;
  });

  module.controller('MasterController', function($scope, $data) {
    $scope.items = $data.items;  
    
    $scope.showDetail = function(index) {
      var selectedItem = $data.items[index];
      $data.selectedItem = selectedItem;
      $scope.ons.navigator.pushPage('detail.html', {title : selectedItem.title});
    };
  });

  module.factory('$data', function() {
      var data = {};
      
      data.items = [
		    { title: '爱',		label: 'ài',	desc: 'love' },
		    { title: '八',		label: 'bā',	desc: '8' },
{ title: '爸爸',	label: 'bàba',	desc: 'father' },
{ title: '杯子',	label: 'bēizi',	desc: 'cup' },
{ title: '北京',	label: 'Běijīng',	desc: 'Beijing' },
{ title: '本',		label: 'běn',	desc: '[cl.book]' },
{ title: '不客气',	label: 'búkèqi',	desc: 'you are welcome' },
{ title: '不',		label: 'bù',	desc: 'not' },
{ title: '菜',		label: 'cài',	desc: 'vegetables' },
{ title: '茶',		label: 'chá',	desc: 'tea' },
{ title: '吃',		label: 'chī',	desc: 'to eat' },
{ title: '出租车',	label: 'chūzūchē',	desc: 'taxi' },
{ title: '打电话',	label: 'dǎdiànhuà',	desc: 'to phone' },
{ title: '大',		label: 'dà',	desc: 'large' },
{ title: '的',		label: 'de',	desc: 'of' },
{ title: '点',		label: 'diǎn',	desc: 'point' },
{ title: '电脑',	label: 'diànnǎo',	desc: 'computer' },
{ title: '电视',	label: 'diànshì',	desc: 'TV' },
{ title: '电影',	label: 'diànyǐng',	desc: 'film' },
{ title: '东西',	label: 'dōngxi',	desc: 'things' },
{ title: '都',		label: 'dōu',	desc: 'all' },
{ title: '读',		label: 'dú',	desc: 'to read' },
{ title: '对不起',	label: 'duìbuqǐ',	desc: 'sorry' },
{ title: '多',		label: 'duō',	desc: 'more' },
{ title: '多少',	label: 'duōshao',	desc: 'much' },
{ title: '儿子',	label: 'érzi',	desc: 'son' },
{ title: '二',		label: 'èr',	desc: '2' },
{ title: '饭馆',	label: 'fànguǎn',	desc: 'restaurant' },
{ title: '飞机',	label: 'fēijī',	desc: 'aircraft' },
{ title: '分钟',	label: 'fēnzhōng',	desc: 'minutes' },
{ title: '高兴',	label: 'gāoxìng',	desc: 'pleased' },
{ title: '个',		label: 'gè',	desc: '[cl.]' },
{ title: '工作',	label: 'gōngzuò',	desc: 'work' },
{ title: '狗',		label: 'gǒu',	desc: 'dog' },
{ title: '汉语',	label: 'Hànyǔ',	desc: 'Chinese' },
{ title: '好',		label: 'hǎo',	desc: 'good' },
{ title: '喝',		label: 'hē',	desc: 'to drink' },
{ title: '和',		label: 'hé',	desc: 'and' },
{ title: '很',		label: 'hěn',	desc: 'very' },
{ title: '后面',	label: 'hòumiàn',	desc: 'back' },
{ title: '回',		label: 'huí',	desc: 'to go back' },
{ title: '会',		label: 'huì',	desc: 'will' },
{ title: '火车站',	label: 'huǒchēzhàn',	desc: 'station' },
{ title: '几',		label: 'jǐ',	desc: 'few' },
{ title: '家',		label: 'jiā',	desc: 'home' },
{ title: '叫',		label: 'jiào',	desc: 'to be called' },
{ title: '今天',	label: 'jīntiān',	desc: 'today' },
{ title: '九',		label: 'jiǔ',	desc: '9' },
{ title: '开',		label: 'kāi',	desc: 'to open' },
{ title: '看',		label: 'kàn',	desc: 'to see' },
{ title: '看见',	label: 'kànjiàn',	desc: 'to see' },
{ title: '块',		label: 'kuài',	desc: 'block' },
{ title: '来',		label: 'lái',	desc: 'to come' },
{ title: '老师',	label: 'lǎoshī',	desc: 'teacher' },
{ title: '了',		label: 'le',	desc: '[past part.]' },
{ title: '冷',		label: 'lěng',	desc: 'cold' },
{ title: '里',		label: 'lǐ',	desc: 'in' },
{ title: '零',		label: 'líng',	desc: '0' },
{ title: '六',		label: 'liù',	desc: '6' },
{ title: '妈妈',	label: 'māma',	desc: 'mother' },
{ title: '吗',		label: 'ma',	desc: '[question part.]' },
{ title: '买',		label: 'mǎi',	desc: 'to buy' },
{ title: '猫',		label: 'māo',	desc: 'cat' },
{ title: '没',		label: 'méi',	desc: 'not' },
{ title: '没关系',	label: 'méiguānxi',	desc: 'does not matter' },
{ title: '米饭',	label: 'mǐfàn',	desc: 'rice' },
{ title: '明天',	label: 'míngtiān',	desc: 'tomorrow' },
{ title: '名字',	label: 'míngzi',	desc: 'name' },
{ title: '哪',		label: 'nǎ',	desc: 'which' },
{ title: '哪儿',	label: 'nǎr',	desc: 'where' },
{ title: '那',		label: 'nà',	desc: 'that' },
{ title: '那儿',	label: 'nàr',	desc: 'there' },
{ title: '呢',		label: 'ne',	desc: '[part.]' },
{ title: '能',		label: 'néng',	desc: 'can' },
{ title: '你',		label: 'nǐ',	desc: 'you' },
{ title: '年',		label: 'nián',	desc: 'year' },
{ title: '女儿',	label: 'nǚ ér',	desc: 'daughter' },
{ title: '朋友',	label: 'péngyou',	desc: 'friend' },
{ title: '漂亮',	label: 'piàoliang',	desc: 'beautiful' },
{ title: '苹果',	label: 'píngguǒ',	desc: 'apple' },
{ title: '七',		label: 'qī',	desc: '7' },
{ title: '钱',		label: 'qián',	desc: 'money' },
{ title: '前面',	label: 'qiánmiàn',	desc: 'front' },
{ title: '请',		label: 'qǐng',	desc: 'please' },
{ title: '去',		label: 'qù',	desc: 'to go' },
{ title: '热',		label: 'rè',	desc: 'heat' },
{ title: '人',		label: 'rén',	desc: 'people' },
{ title: '认识',	label: 'rènshi',	desc: 'to understand' },
{ title: '日',		label: 'rì',	desc: 'day' },
{ title: '三',		label: 'sān',	desc: '3' },
{ title: '商店',	label: 'shāngdiàn	desc: store' },
{ title: '上',		label: 'shàng',	desc: 'on' },
{ title: '上午',	label: 'shàngwǔ',	desc: 'morning' },
{ title: '少',		label: 'shǎo',	desc: 'less' },
{ title: '谁',		label: 'shéi',	desc: 'who' },
{ title: '什么',	label: 'shénme',	desc: 'what' },
{ title: '十',		label: 'shí',	desc: '10' },
{ title: '时候',	label: 'shíhou',	desc: 'time' },
{ title: '是',		label: 'shì',	desc: 'to be' },
{ title: '书',		label: 'shū',	desc: 'book' },
{ title: '水',		label: 'shuǐ',	desc: 'water' },
{ title: '水果',	label: 'shuǐguǒ',	desc: 'fruit' },
{ title: '睡觉',	label: 'shuìjiào',	desc: 'to sleep' },
{ title: '说话',	label: 'shuōhuà',	desc: 'to speak' },
{ title: '四',		label: 'sì',	desc: '4' },
{ title: '岁',		label: 'suì',	desc: 'years-old' },
{ title: '他',		label: 'tā',	desc: 'he' },
{ title: '她',		label: 'tā',	desc: 'her' },
{ title: '太',		label: 'tài',	desc: 'too' },
{ title: '天气',	label: 'tiānqì',	desc: 'weather' },
{ title: '听',		label: 'tīng',	desc: 'to listen' },
{ title: '同学',	label: 'tóngxué',	desc: 'classmate' },
{ title: '喂',		label: 'wèi',	desc: 'hello' },
{ title: '我',		label: 'wǒ',	desc: 'I' },
{ title: '我们',	label: 'wǒmen',	desc: 'we' },
{ title: '五',		label: 'wǔ',	desc: '5' },
{ title: '喜欢',	label: 'xǐhuan',	desc: 'to like' },
{ title: '下',		label: 'xià',	desc: 'under' },
{ title: '下午',	label: 'xiàwǔ',	desc: 'afternoon' },
{ title: '下雨',	label: 'xiàyǔ',	desc: 'to rain' },
{ title: '先生',	label: 'xiānsheng',	desc: 'Mister' },
{ title: '现在',	label: 'xiànzài',	desc: 'now' },
{ title: '想',		label: 'xiǎng',	desc: 'to think' },
{ title: '小',		label: 'xiǎo',	desc: 'small' },
{ title: '小姐',	label: 'xiǎojiě',	desc: 'Miss' },
{ title: '些',		label: 'xiē',	desc: '[plural]' },
{ title: '写',		label: 'xiě',	desc: 'to write' },
{ title: '谢谢',	label: 'xièxie',	desc: 'thank you' },
{ title: '星期',	label: 'xīngqī',	desc: 'week' },
{ title: '学生',	label: 'xuésheng',	desc: 'student' },
{ title: '学习',	label: 'xuéxí',	desc: 'to learn' },
{ title: '学校',	label: 'xuéxiào',	desc: 'school' },
{ title: '一',		label: 'yī',	desc: '1' },
{ title: '衣服',	label: 'yīfu',	desc: 'clothes' },
{ title: '医生',	label: 'yīshēng',	desc: 'doctor' },
{ title: '医院',	label: 'yīyuàn',	desc: 'hospital' },
{ title: '椅子',	label: 'yǐzi',	desc: 'chair' },
{ title: '有',		label: 'yǒu',	desc: 'to have' },
{ title: '月',		label: 'yuè',	desc: 'month' },
{ title: '在',		label: 'zài',	desc: 'in' },
{ title: '再见',	label: 'zàijiàn',	desc: 'goodbye' },
{ title: '怎么',	label: 'zěnme',	desc: 'how' },
{ title: '怎么样',	label: 'zěnmeyàng',	desc: 'how to' },
{ title: '这',		label: 'zhè',	desc: 'this' },
{ title: '这儿',	label: 'zhèr',	desc: 'here' },
{ title: '中国',	label: 'Zhōngguó',	desc: 'China' },
{ title: '中午',	label: 'zhōngwǔ',	desc: 'noon' },
{ title: '住',		label: 'zhù',	desc: 'to live' },
{ title: '桌子',	label: 'zhuōzi',	desc: 'table' },
{ title: '字',		label: 'zì',	desc: 'word' },
{ title: '昨天',	label: 'zuótiān',	desc: 'yesterday' },
{ title: '坐',		label: 'zuò',	desc: 'to sit' },
{ title: '做',		label: 'zuò',	desc: 'to do' }
      ]; 
      
      return data;
  });
})();

