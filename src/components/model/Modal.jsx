function Modal({ open, onClose, children }) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex justify-center bg-[#140758]/60"
      onClick={onClose}           // close when clicking backdrop
    >
      <div
        className="bg-base-200  rounded-xl shadow-2xl w-full max-w-[40rem] p-6 bg-[#140758]"
        onClick={(e) => e.stopPropagation()}  // prevent closing when clicking inside
      >
        {children}
      </div>
    </div>
  );
}

export default Modal;
