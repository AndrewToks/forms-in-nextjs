
const ShowMessage = ({onClose}) => {
  return (
    <div className="flex flex-col justify-center items-center h-48 gap-8">
        <h1 className="text-xl">You have successfully submitted your details!</h1>
        <button onClick={onClose} className="bg-[#7e007e] text-white py-3 px-8 text-xl rounded-[3px]  outline-none">Close</button>
    </div>
  )
}

export default ShowMessage