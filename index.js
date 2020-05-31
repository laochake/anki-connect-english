const axios = require('axios')

// 创建anki数据库
function createDeck () {
  
  axios.post('http://127.0.0.1:8765', JSON.stringify({
    action: 'createDeck',
    params: { deck: 'test1' }
  }))
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}

// createDeck()

// 获取anki数据库名称
function deckNames () {
  
  axios.post('http://127.0.0.1:8765', JSON.stringify({
    action: 'deckNames'
  }))
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}

// deckNames()

// 获取anki数据库名称和ID
function deckNamesAndIds () {
  
  axios.post('http://127.0.0.1:8765', JSON.stringify({
    action: 'deckNamesAndIds'
  }))
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}

// deckNamesAndIds()

// 获取anki数据库名详情
function getDecks () {
  
  axios.post('http://127.0.0.1:8765', JSON.stringify({
    action: 'getDecks',
    params: { cards: [1579137797017]}
  }))
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
}

// getDecks()



// 打开ANKI增加卡片
function guiAddCard () {
  
  axios.post('http://127.0.0.1:8765', JSON.stringify({
    action: 'guiguiAddCards',
    params: { 
      note: {
        deckName: "test1",
        modelName: '英语单词',
        fields: {
          "单词": "The capital of Romania is {{c1::Bucharest}}",
          "单一释义": "Romania is a country in Europe"
        },
        options: {
          closeAfterAdding: true
        }
      }
    }
  }))
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
}

// guiAddCard()


// 打开ANKI增加卡片
function addNote () {
  
  axios.post('http://127.0.0.1:8765', JSON.stringify({
    action: 'addNote',
    params: { 
      note: {
        deckName: "test1",
        modelName: 'basic-mac',
        fields: {
          "正面": "apple",
          "背面": "苹果"
        },
        options: {
          closeAfterAdding: true
        }
      }
    }
  }))
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
}

addNote()




