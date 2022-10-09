import { ReactNode, useState } from 'react'
import { ModalError } from '../../components/ModalError'
import { ModalSuccess } from '../../components/ModalSuccess'

export function useFeedback() {
  const [FeedbackElement, setFeedbackElement] = useState<string | ReactNode>('')

  const feedbackTypes = {
    success: ModalSuccess,
    error: ModalError,
  }

  function renderFeedback(
    type: keyof typeof feedbackTypes,
    message: string,
    onClose: () => void = () => {
      setFeedbackElement('')
    },
  ) {
    const FeedComponent = feedbackTypes[type]
    setFeedbackElement(<FeedComponent message={message} onClose={onClose} />)
  }

  return {
    FeedbackElement,
    renderFeedback,
  }
}
