var lastClickedTimestampScrollOffset = null
var isReturnButtonCreated: boolean = false

const setupListeners = () : void => {
  const timestamps = document.querySelectorAll('ytd-comment-thread-renderer #content-text a.yt-simple-endpoint')

  for (const timestamp of timestamps) {
    timestamp.removeEventListener('click', onTimestampClick)
    timestamp.addEventListener('click', onTimestampClick)
  }
}

const onTimestampClick = () : void => {
  lastClickedTimestampScrollOffset = window.pageYOffset

  if (!isReturnButtonCreated) {
    createButtonToReturnToLastClickedTimestamps()
  }
}

const createButtonToReturnToLastClickedTimestamps = () : void => {
  if (isReturnButtonCreated || !lastClickedTimestampScrollOffset) {
    return
  }

  const commentsTitle = document.querySelector('.count-text')

  const button = document.createElement('a')
  button.innerText = 'Return to the last clicked comment'
  button.style.padding = '10px 0'
  button.style.marginLeft = '32px'
  button.style.color = 'var(--yt-spec-call-to-action, #3ea6ff)'
  button.style.fontSize = 'var(--ytd-tab-system_-_font-size)'
  button.style.fontWeight = 'var(--ytd-tab-system_-_font-weight)'
  button.style.letterSpacing = 'var(--ytd-tab-system_-_letter-spacing)'
  button.style.textTransform = 'var(--ytd-tab-system_-_text-transform)'
  button.style.fontFamily = 'inherit'
  button.addEventListener('click', () => {
    window.scrollTo({
      top: lastClickedTimestampScrollOffset,
      behavior: 'auto'
    })
  })

  commentsTitle.insertAdjacentElement('afterend', button)
  isReturnButtonCreated = true
}

export default {
  setupListeners
}
