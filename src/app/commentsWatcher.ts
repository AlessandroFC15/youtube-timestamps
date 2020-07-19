let numberOfCommentsLoaded: number = 0

const init = ({ onNewCommentsLoad }: CommentsWatcherParams) : void => {
  setInterval(() => {
    const comments = document.querySelectorAll('ytd-comment-thread-renderer')

    if (comments.length !== numberOfCommentsLoaded) {
      numberOfCommentsLoaded = comments.length
      onNewCommentsLoad()
    }
  }, 500)
}

type CommentsWatcherParams = {
  onNewCommentsLoad: () => void
}

export default {
  init
}
