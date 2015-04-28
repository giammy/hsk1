(function(){
  'use strict';
  var module = angular.module('app', ['onsen']);

  module.controller('AppController', function($scope, $data) {
    $scope.doSomething = function() {
      ons.notification.alert({message: 'Hello, World!'});
    };
  });

  module.controller('DetailController', function($scope, $data) {
    $scope.item = $data.selectedItem;

    $scope.backReset = function(index) {
	var pages = $scope.navi.getPages();
	var i = 1;
	/* console.log("pages.length=%i", pages.length); */
	while (pages.length > 2) {
 	  pages[pages.length - 1].destroy();
	}
	$scope.navi.popPage();
    };

    $scope.showReplaceDetail = function(index) {
      var selectedItem = $data.items[index];
      $data.selectedItem = selectedItem;
      /*      $scope.navi.replacePage('detail.html', {title : selectedItem.title}); */
      /*      $scope.navi.popPage(); */
      $scope.navi.pushPage('detail.html', {title : selectedItem.title});
    };

    $scope.showReplaceRandomDetail = function() {
      var selectedItem = $data.items[Math.floor(Math.random() * 153)];
      $data.selectedItem = selectedItem;
      /* $scope.navi.replacePage('detail.html', {title : selectedItem.title}); */
      $scope.navi.pushPage('detail.html', {title : selectedItem.title});
    };

  });

  module.controller('MasterController', function($scope, $data) {
    $scope.items = $data.items;  
    
    $scope.showDetail = function(index) {
      var selectedItem = $data.items[index];
      $data.selectedItem = selectedItem;
      $scope.navi.pushPage('detail.html', {title : selectedItem.title});
    };
  });

  module.factory('$data', function() {
      var data = {};
      
      data.items = [

{ idx: '0',  pidx: '152',nidx: '1',    title: '爱',	label: 'ài',	desc: 'love' },
{ idx: '1',  pidx: '0',  nidx: '2',    title: '八',	label: 'bā',	desc: '8' },
{ idx: '2',  pidx: '1',  nidx: '3',    title: '爸爸',	label: 'bàba',	desc: 'father' },
{ idx: '3',  pidx: '2',  nidx: '4',    title: '杯子',	label: 'bēizi',	desc: 'cup' },
{ idx: '4',  pidx: '3',  nidx: '5',    title: '北京',	label: 'Běijīng',	desc: 'Beijing' },
{ idx: '5',  pidx: '4',  nidx: '6',    title: '本',	label: 'běn',	desc: '[cl.book]' },
{ idx: '6',  pidx: '5',  nidx: '7',    title: '不客气',	label: 'búkèqi',	desc: 'you are welcome' },
{ idx: '7',  pidx: '6',  nidx: '8',    title: '不',	label: 'bù',	desc: 'not' },
{ idx: '8',  pidx: '7',  nidx: '9',    title: '菜',	label: 'cài',	desc: 'vegetables' },
{ idx: '9',  pidx: '8',  nidx: '10',   title: '茶',	label: 'chá',	desc: 'tea' },
{ idx: '10', pidx: '9',  nidx: '11',   title: '吃',	label: 'chī',	desc: 'to eat' },
{ idx: '11', pidx: '10', nidx: '12',   title: '出租车',	label: 'chūzūchē',	desc: 'taxi' },
{ idx: '12', pidx: '11', nidx: '13',   title: '打电话',	label: 'dǎdiànhuà',	desc: 'to phone' },
{ idx: '13', pidx: '12', nidx: '14',   title: '大',	label: 'dà',	desc: 'large' },
{ idx: '14', pidx: '13', nidx: '15',   title: '的',	label: 'de',	desc: 'of' },
{ idx: '15', pidx: '14', nidx: '16',   title: '点',	label: 'diǎn',	desc: 'point' },
{ idx: '16', pidx: '15', nidx: '17',   title: '电脑',	label: 'diànnǎo',	desc: 'computer' },
{ idx: '17', pidx: '16', nidx: '18',   title: '电视',	label: 'diànshì',	desc: 'TV' },
{ idx: '18', pidx: '17', nidx: '19',   title: '电影',	label: 'diànyǐng',	desc: 'film' },
{ idx: '19', pidx: '18', nidx: '20',   title: '东西',	label: 'dōngxi',	desc: 'things' },
{ idx: '20', pidx: '19', nidx: '21',   title: '都',	label: 'dōu',	desc: 'all' },
{ idx: '21', pidx: '20', nidx: '22',   title: '读',	label: 'dú',	desc: 'to read' },
{ idx: '22', pidx: '21', nidx: '23',   title: '对不起',	label: 'duìbuqǐ',	desc: 'sorry' },
{ idx: '23', pidx: '22', nidx: '24',   title: '多',	label: 'duō',	desc: 'more' },
{ idx: '24', pidx: '23', nidx: '25',   title: '多少',	label: 'duōshao',	desc: 'much' },
{ idx: '25', pidx: '24', nidx: '26',   title: '儿子',	label: 'érzi',	desc: 'son' },
{ idx: '26', pidx: '25', nidx: '27',   title: '二',	label: 'èr',	desc: '2' },
{ idx: '27', pidx: '26', nidx: '28',   title: '饭馆',	label: 'fànguǎn',	desc: 'restaurant' },
{ idx: '28', pidx: '27', nidx: '29',   title: '飞机',	label: 'fēijī',	desc: 'aircraft' },
{ idx: '29', pidx: '28', nidx: '30',   title: '分钟',	label: 'fēnzhōng',	desc: 'minutes' },
{ idx: '30', pidx: '29', nidx: '31',   title: '高兴',	label: 'gāoxìng',	desc: 'pleased' },
{ idx: '31', pidx: '30', nidx: '32',   title: '个',	label: 'gè',	desc: '[cl.]' },
{ idx: '32', pidx: '31', nidx: '33',   title: '工作',	label: 'gōngzuò',	desc: 'work' },
{ idx: '33', pidx: '32', nidx: '34',   title: '狗',	label: 'gǒu',	desc: 'dog' },
{ idx: '34', pidx: '33', nidx: '35',   title: '汉语',	label: 'Hànyǔ',	desc: 'Chinese' },
{ idx: '35', pidx: '34', nidx: '36',   title: '好',	label: 'hǎo',	desc: 'good' },
{ idx: '36', pidx: '35', nidx: '37',   title: '喝',	label: 'hē',	desc: 'to drink' },
{ idx: '37', pidx: '36', nidx: '38',   title: '和',	label: 'hé',	desc: 'and' },
{ idx: '38', pidx: '37', nidx: '39',   title: '很',	label: 'hěn',	desc: 'very' },
{ idx: '39', pidx: '38', nidx: '40',   title: '后面',	label: 'hòumiàn',	desc: 'back' },
{ idx: '40', pidx: '39', nidx: '41',   title: '回',	label: 'huí',	desc: 'to go back' },
{ idx: '41', pidx: '40', nidx: '42',   title: '会',	label: 'huì',	desc: 'will' },
{ idx: '42', pidx: '41', nidx: '43',   title: '火车站',	label: 'huǒchēzhàn',	desc: 'station' },
{ idx: '43', pidx: '42', nidx: '44',   title: '几',	label: 'jǐ',	desc: 'few' },
{ idx: '44', pidx: '43', nidx: '45',   title: '家',	label: 'jiā',	desc: 'home' },
{ idx: '45', pidx: '44', nidx: '46',   title: '叫',	label: 'jiào',	desc: 'to be called' },
{ idx: '46', pidx: '45', nidx: '47',   title: '今天',	label: 'jīntiān',	desc: 'today' },
{ idx: '47', pidx: '46', nidx: '48',   title: '九',	label: 'jiǔ',	desc: '9' },
{ idx: '48', pidx: '47', nidx: '49',   title: '开',	label: 'kāi',	desc: 'to open' },
{ idx: '49', pidx: '48', nidx: '50',   title: '看',	label: 'kàn',	desc: 'to see' },
{ idx: '50', pidx: '49', nidx: '51',   title: '看见',	label: 'kànjiàn',	desc: 'to see' },
{ idx: '51', pidx: '50', nidx: '52',   title: '块',	label: 'kuài',	desc: 'block' },
{ idx: '52', pidx: '51', nidx: '53',   title: '来',	label: 'lái',	desc: 'to come' },
{ idx: '53', pidx: '52', nidx: '54',   title: '老师',	label: 'lǎoshī',	desc: 'teacher' },
{ idx: '54', pidx: '53', nidx: '55',   title: '了',	label: 'le',	desc: '[past part.]' },
{ idx: '55', pidx: '54', nidx: '56',   title: '冷',	label: 'lěng',	desc: 'cold' },
{ idx: '56', pidx: '55', nidx: '57',   title: '里',	label: 'lǐ',	desc: 'in' },
{ idx: '57', pidx: '56', nidx: '58',   title: '零',	label: 'líng',	desc: '0' },
{ idx: '58', pidx: '57', nidx: '59',   title: '六',	label: 'liù',	desc: '6' },
{ idx: '59', pidx: '58', nidx: '60',   title: '妈妈',	label: 'māma',	desc: 'mother' },
{ idx: '60', pidx: '59', nidx: '61',   title: '吗',	label: 'ma',	desc: '[question part.]' },
{ idx: '61', pidx: '60', nidx: '62',   title: '买',	label: 'mǎi',	desc: 'to buy' },
{ idx: '62', pidx: '61', nidx: '63',   title: '猫',	label: 'māo',	desc: 'cat' },
{ idx: '63', pidx: '62', nidx: '64',   title: '没',	label: 'méi',	desc: 'not' },
{ idx: '64', pidx: '63', nidx: '65',   title: '没关系',	label: 'méiguānxi',	desc: 'does not matter' },
{ idx: '65', pidx: '64', nidx: '66',   title: '米饭',	label: 'mǐfàn',	desc: 'rice' },
{ idx: '66', pidx: '65', nidx: '67',   title: '明天',	label: 'míngtiān',	desc: 'tomorrow' },
{ idx: '67', pidx: '66', nidx: '68',   title: '名字',	label: 'míngzi',	desc: 'name' },
{ idx: '68', pidx: '67', nidx: '69',   title: '哪',	label: 'nǎ',	desc: 'which' },
{ idx: '69', pidx: '68', nidx: '70',   title: '哪儿',	label: 'nǎr',	desc: 'where' },
{ idx: '70', pidx: '69', nidx: '71',   title: '那',	label: 'nà',	desc: 'that' },
{ idx: '71', pidx: '70', nidx: '72',   title: '那儿',	label: 'nàr',	desc: 'there' },
{ idx: '72', pidx: '71', nidx: '73',   title: '呢',	label: 'ne',	desc: '[part.]' },
{ idx: '73', pidx: '72', nidx: '74',   title: '能',	label: 'néng',	desc: 'can' },
{ idx: '74', pidx: '73', nidx: '75',   title: '你',	label: 'nǐ',	desc: 'you' },
{ idx: '75', pidx: '74', nidx: '76',   title: '年',	label: 'nián',	desc: 'year' },
{ idx: '76', pidx: '75', nidx: '77',   title: '女儿',	label: 'nǚ ér',	desc: 'daughter' },
{ idx: '77', pidx: '76', nidx: '78',   title: '朋友',	label: 'péngyou',	desc: 'friend' },
{ idx: '78', pidx: '77', nidx: '79',   title: '漂亮',	label: 'piàoliang',	desc: 'beautiful' },
{ idx: '79', pidx: '78', nidx: '80',   title: '苹果',	label: 'píngguǒ',	desc: 'apple' },
{ idx: '80', pidx: '79', nidx: '81',   title: '七',	label: 'qī',	desc: '7' },
{ idx: '81', pidx: '80', nidx: '82',   title: '钱',	label: 'qián',	desc: 'money' },
{ idx: '82', pidx: '81', nidx: '83',   title: '前面',	label: 'qiánmiàn',	desc: 'front' },
{ idx: '83', pidx: '82', nidx: '84',   title: '请',	label: 'qǐng',	desc: 'please' },
{ idx: '84', pidx: '83', nidx: '85',   title: '去',	label: 'qù',	desc: 'to go' },
{ idx: '85', pidx: '84', nidx: '86',   title: '热',	label: 'rè',	desc: 'heat' },
{ idx: '86', pidx: '85', nidx: '87',   title: '人',	label: 'rén',	desc: 'people' },
{ idx: '87', pidx: '86', nidx: '88',   title: '认识',	label: 'rènshi',	desc: 'to understand' },
{ idx: '88', pidx: '87', nidx: '89',   title: '日',	label: 'rì',	desc: 'day' },
{ idx: '89', pidx: '88', nidx: '90',   title: '三',	label: 'sān',	desc: '3' },
{ idx: '90', pidx: '89', nidx: '91',   title: '商店',	label: 'shāngdiàn',	desc: 'store' },
{ idx: '91', pidx: '90', nidx: '92',   title: '上',	label: 'shàng',	desc: 'on' },
{ idx: '92', pidx: '91', nidx: '93',   title: '上午',	label: 'shàngwǔ',	desc: 'morning' },
{ idx: '93', pidx: '92', nidx: '94',   title: '少',	label: 'shǎo',	desc: 'less' },
{ idx: '94', pidx: '93', nidx: '95',   title: '谁',	label: 'shéi',	desc: 'who' },
{ idx: '95', pidx: '94', nidx: '96',   title: '什么',	label: 'shénme',	desc: 'what' },
{ idx: '96', pidx: '95', nidx: '97',   title: '十',	label: 'shí',	desc: '10' },
{ idx: '97', pidx: '96', nidx: '98',   title: '时候',	label: 'shíhou',	desc: 'time' },
{ idx: '98', pidx: '97', nidx: '99',   title: '是',	label: 'shì',	desc: 'to be' },
{ idx: '99', pidx: '98', nidx: '100',  title: '书',	label: 'shū',	desc: 'book' },
{ idx: '100',pidx: '99', nidx: '101',  title: '水',	label: 'shuǐ',	desc: 'water' },
{ idx: '101',pidx: '100',nidx: '102',  title: '水果',	label: 'shuǐguǒ',	desc: 'fruit' },
{ idx: '102',pidx: '101',nidx: '103',  title: '睡觉',	label: 'shuìjiào',	desc: 'to sleep' },
{ idx: '103',pidx: '102',nidx: '104',  title: '说话',	label: 'shuōhuà',	desc: 'to speak' },
{ idx: '104',pidx: '103',nidx: '105',  title: '四',	label: 'sì',	desc: '4' },
{ idx: '105',pidx: '104',nidx: '106',  title: '岁',	label: 'suì',	desc: 'years-old' },
{ idx: '106',pidx: '105',nidx: '107',  title: '他',	label: 'tā',	desc: 'he' },
{ idx: '107',pidx: '106',nidx: '108',  title: '她',	label: 'tā',	desc: 'her' },
{ idx: '108',pidx: '107',nidx: '109',  title: '太',	label: 'tài',	desc: 'too' },
{ idx: '109',pidx: '108',nidx: '110',  title: '天气',	label: 'tiānqì',	desc: 'weather' },
{ idx: '110',pidx: '109',nidx: '111',  title: '听',	label: 'tīng',	desc: 'to listen' },
{ idx: '111',pidx: '110',nidx: '112',  title: '同学',	label: 'tóngxué',	desc: 'classmate' },
{ idx: '112',pidx: '111',nidx: '113',  title: '喂',	label: 'wèi',	desc: 'hello' },
{ idx: '113',pidx: '112',nidx: '114',  title: '我',	label: 'wǒ',	desc: 'I' },
{ idx: '114',pidx: '113',nidx: '115',  title: '我们',	label: 'wǒmen',	desc: 'we' },
{ idx: '115',pidx: '114',nidx: '116',  title: '五',	label: 'wǔ',	desc: '5' },
{ idx: '116',pidx: '115',nidx: '117',  title: '喜欢',	label: 'xǐhuan',	desc: 'to like' },
{ idx: '117',pidx: '116',nidx: '118',  title: '下',	label: 'xià',	desc: 'under' },
{ idx: '118',pidx: '117',nidx: '119',  title: '下午',	label: 'xiàwǔ',	desc: 'afternoon' },
{ idx: '119',pidx: '118',nidx: '120',  title: '下雨',	label: 'xiàyǔ',	desc: 'to rain' },
{ idx: '120',pidx: '119',nidx: '121',  title: '先生',	label: 'xiānsheng',	desc: 'Mister' },
{ idx: '121',pidx: '120',nidx: '122',  title: '现在',	label: 'xiànzài',	desc: 'now' },
{ idx: '122',pidx: '121',nidx: '123',  title: '想',	label: 'xiǎng',	desc: 'to think' },
{ idx: '123',pidx: '122',nidx: '124',  title: '小',	label: 'xiǎo',	desc: 'small' },
{ idx: '124',pidx: '123',nidx: '125',  title: '小姐',	label: 'xiǎojiě',	desc: 'Miss' },
{ idx: '125',pidx: '124',nidx: '126',  title: '些',	label: 'xiē',	desc: '[plural]' },
{ idx: '126',pidx: '125',nidx: '127',  title: '写',	label: 'xiě',	desc: 'to write' },
{ idx: '127',pidx: '126',nidx: '128',  title: '谢谢',	label: 'xièxie',	desc: 'thank you' },
{ idx: '128',pidx: '127',nidx: '129',  title: '星期',	label: 'xīngqī',	desc: 'week' },
{ idx: '129',pidx: '128',nidx: '130',  title: '学生',	label: 'xuésheng',	desc: 'student' },
{ idx: '130',pidx: '129',nidx: '131',  title: '学习',	label: 'xuéxí',	desc: 'to learn' },
{ idx: '131',pidx: '130',nidx: '132',  title: '学校',	label: 'xuéxiào',	desc: 'school' },
{ idx: '132',pidx: '131',nidx: '133',  title: '一',	label: 'yī',	desc: '1' },
{ idx: '133',pidx: '132',nidx: '134',  title: '衣服',	label: 'yīfu',	desc: 'clothes' },
{ idx: '134',pidx: '133',nidx: '135',  title: '医生',	label: 'yīshēng',	desc: 'doctor' },
{ idx: '135',pidx: '134',nidx: '136',  title: '医院',	label: 'yīyuàn',	desc: 'hospital' },
{ idx: '136',pidx: '135',nidx: '137',  title: '椅子',	label: 'yǐzi',	desc: 'chair' },
{ idx: '137',pidx: '136',nidx: '138',  title: '有',	label: 'yǒu',	desc: 'to have' },
{ idx: '138',pidx: '137',nidx: '139',  title: '月',	label: 'yuè',	desc: 'month' },
{ idx: '139',pidx: '138',nidx: '140',  title: '在',	label: 'zài',	desc: 'in' },
{ idx: '140',pidx: '139',nidx: '141',  title: '再见',	label: 'zàijiàn',	desc: 'goodbye' },
{ idx: '141',pidx: '140',nidx: '142',  title: '怎么',	label: 'zěnme',	desc: 'how' },
{ idx: '142',pidx: '141',nidx: '143',  title: '怎么样',	label: 'zěnmeyàng',	desc: 'how to' },
{ idx: '143',pidx: '142',nidx: '144',  title: '这',	label: 'zhè',	desc: 'this' },
{ idx: '144',pidx: '143',nidx: '145',  title: '这儿',	label: 'zhèr',	desc: 'here' },
{ idx: '145',pidx: '144',nidx: '146',  title: '中国',	label: 'Zhōngguó',	desc: 'China' },
{ idx: '146',pidx: '145',nidx: '147',  title: '中午',	label: 'zhōngwǔ',	desc: 'noon' },
{ idx: '147',pidx: '146',nidx: '148',  title: '住',	label: 'zhù',	desc: 'to live' },
{ idx: '148',pidx: '147',nidx: '149',  title: '桌子',	label: 'zhuōzi',	desc: 'table' },
{ idx: '149',pidx: '148',nidx: '150',  title: '字',	label: 'zì',	desc: 'word' },
{ idx: '150',pidx: '149',nidx: '151',  title: '昨天',	label: 'zuótiān',	desc: 'yesterday' },
{ idx: '151',pidx: '150',nidx: '152',  title: '坐',	label: 'zuò',	desc: 'to sit' },
{ idx: '152',pidx: '151',nidx: '0',    title: '做',	label: 'zuò',	desc: 'to do' }

      ]; 
      
      return data;
  });
})();

