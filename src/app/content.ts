import commentsWatcher from './commentsWatcher'
import timestamps from './timestamps'

chrome.runtime.sendMessage({}, () => {
  var checkReady = setInterval(() => {
    if (document.readyState === 'complete') {
      clearInterval(checkReady)

      commentsWatcher.init({ onNewCommentsLoad: timestamps.setupListeners })
    }
  }, 100)
})
