import { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import Button from '@components/button/Button'
import CloseIcon from '@assets/icons/CloseIcon'
import { ModalProps } from '@interfaces/PropTypes'

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  className,
}) => {
  const [isAnimating, setIsAnimating] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      setIsAnimating(true)
      document.body.style.overflow = 'hidden'
      document.addEventListener('keydown', handleKeyPress)
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [isOpen, onClose])

  const handleTransitionEnd = () => {
    setIsAnimating(false)
  }

  const modalContent = (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 top-8 ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      } transition-opacity duration-300`}
      onTransitionEnd={handleTransitionEnd}
    >
      <div
        className="fixed inset-0 bg-gray-500 bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        ref={modalRef}
        className={`relative rounded-lg transform ${
          isAnimating ? 'scale-100' : 'scale-95'
        } transition-transform duration-300 ${className}`}
      >
        <Button
          icon={<CloseIcon />}
          className="absolute top-0 left-[5px] m-4 z-30"
          onClickAction={onClose}
        />
        {children}
      </div>
    </div>
  )

  return ReactDOM.createPortal(
    modalContent,
    document.getElementById('modal-root')!,
  )
}

export default Modal
