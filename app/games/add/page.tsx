const AddGame = () => {
  return (
    <section id="game-add">
      <h2>Add a game:</h2>

      <div className="form-control">
        <label className="label" htmlFor="game-title">
          Title
        </label>
        <input
          className="input"
          type="text"
          name="title"
          id="game-title"
          placeholder="Enter game title"
        />
      </div>

      <button className="btn btn-primary">Submit</button>
    </section>
  )
}
export default AddGame
