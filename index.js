document.querySelector('.submit').addEventListener('click', function(e) {
  e.preventDefault()
}, false)

function processInputData() {
  let inputBlock = document.querySelector('.text')
  let inputValue = inputBlock.value
  if(checkInputData(inputValue)) {
    const url = getUrl(inputValue)
    const uuid = getUUID(inputValue)
    const output = `<iframe src="https://tw.news.yahoo.com/video/${url}?format=embed&region=TW&lang=zh-Hant-TW&site=news&player_autoplay=true&mode=simpletron&player_mute=1&recommendations=false" width="640" height="360" allowtransparency="true" data-yom-embed-source="{media_id_1:${uuid}}" frameborder="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>`
    
    outputData(output)
    inputBlock.value = ''
  } else {
    alert('輸入不能為空')
  }
}

function checkInputData(inputValue) {
  return inputValue == '' ? false :  true
}

function outputData(output) {
  const answerBlock = document.querySelector('.answer')
  answerBlock.textContent = output
}

function getUrl(input) {
  const re = /.+\/(.+)\.html/
  let unencode = input.match(re)[1]
  return encodeURIComponent(unencode) + '.html'
}

function getUUID(input) {
  const re = /{media_id_1:(.+)}/
  return input.match(re)[1]
}

function CopyTextToClipboard() {
  const copythis = document.querySelector('.answer')

  const TextRange = document.createRange();
  TextRange.selectNode(copythis);

  sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(TextRange);
  document.execCommand("copy");
}