const Confirmation = (
  {
    message = "Are you sure?",
    handleConfirm = () => {},
    isOpen = false,
    setIsOpen,
    value = null,
  }) => {

  return (
    isOpen && (
      <div>
        <span>{message}</span>
        <div className="btn">
          <button key={1} onClick={(e) => handleConfirm(true, value)}>Yes</button>
          <button key={2} onClick={(e) => setIsOpen(false)}>No</button>
        </div>
      </div>
    )
  )
}

export default Confirmation;