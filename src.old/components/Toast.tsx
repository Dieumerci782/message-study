import React from 'react'

interface ToastProps {
  message: string
  type: 'success' | 'error' | 'info' | 'warning'
  onClose?: () => void
}

export const Toast: React.FC<ToastProps> = ({ message, type, onClose }) => {
  React.useEffect(() => {
    const timer = setTimeout(() => onClose?.(), 4000)
    return () => clearTimeout(timer)
  }, [onClose])

  const iconMap = {
    success: '✓',
    error: '✕',
    info: 'ℹ',
    warning: '⚠',
  }

  const bgColorMap = {
    success: 'bg-semantic-success',
    error: 'bg-semantic-error',
    info: 'bg-semantic-info',
    warning: 'bg-semantic-warning',
  }

  return (
    <div className={`fixed top-6 right-6 z-50 ${bgColorMap[type]} text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 animate-fade-in max-w-sm`}>
      <span className="font-bold text-lg">{iconMap[type]}</span>
      <span className="text-sm font-medium">{message}</span>
      <button
        onClick={onClose}
        className="ml-auto text-white hover:opacity-80 transition-opacity"
      >
        ✕
      </button>
    </div>
  )
}
