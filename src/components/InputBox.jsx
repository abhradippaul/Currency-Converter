

function InputBox() {
  return (
    <div className="inputBox">
        <div className="heading">
            <h3>From</h3>
            <h3>Currency Type</h3>
        </div>
        <div className="input">
            <input type="number" value={0} />
            <select>
                <option value="">All</option>
            </select>
        </div>
    </div>
  )
}

export default InputBox