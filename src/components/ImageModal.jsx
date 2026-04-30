import { X } from 'lucide-react'

const ImageModal = ({ image, alt, isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl max-h-[90vh] mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 p-2 text-white hover:text-gray-300 transition-colors duration-300 z-10"
          aria-label="Close"
        >
          <X size={28} />
        </button>

        {/* Image */}
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-contain rounded-lg shadow-2xl"
        />
      </div>
    </div>
  )
}

export default ImageModal
