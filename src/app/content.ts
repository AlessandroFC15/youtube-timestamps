import commentsWatcher from './commentsWatcher'

chrome.runtime.sendMessage({}, () => {
  var checkReady = setInterval(() => {
    if (document.readyState === 'complete') {
      clearInterval(checkReady)

      commentsWatcher.init({ onNewCommentsLoad: () => console.log('New comments have been loaded') })
    }
  }, 100)
})
