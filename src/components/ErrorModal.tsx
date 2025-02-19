interface ErrorModalProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
}

const ErrorModal = ({ isOpen, onClose, message }: ErrorModalProps) => {
  if (!isOpen) return null;

  const handleClose = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black opacity-50" onClick={handleClose}></div>
      <div className="relative bg-white dark:bg-gray-800 rounded-lg p-6 max-w-sm w-full mx-4">
        <div className="mb-4 text-red-500">
          <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-center mb-4 text-gray-900 dark:text-white">Error</h3>
        <p className="text-center text-gray-500 dark:text-gray-400 mb-6">{message}</p>
        <button
          onClick={handleClose}
          className="w-full bg-gradient-to-r from-purple-900 to-pink-600 text-white py-2 px-4 rounded-lg hover:opacity-90 transition-opacity"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ErrorModal;
