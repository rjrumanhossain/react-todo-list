export const AddComponents = () => {
    return(
        <>
            <div className="form-container">
      <h2>User Information Form</h2>

      <form className="form-row">
        {/* Name */}
        <div className="form-group">
          <label>Name</label>
          <input type="text" placeholder="Enter name" />
        </div>

        {/* Email */}
        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="Enter email" />
        </div>

        {/* Age */}
        <div className="form-group">
          <label>Age</label>
          <input type="number" placeholder="Enter age" />
        </div>

        {/* Country */}
        <div className="form-group">
          <label>Country</label>
          <select>
            <option value="">Select country</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="Canada">Canada</option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="India">India</option>
          </select>
        </div>
      </form>

      <div className="form-submit">
        <button type="submit">Submit</button>
      </div>
    </div>
        </>
    )
}