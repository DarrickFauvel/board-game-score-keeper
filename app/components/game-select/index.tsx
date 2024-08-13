"use client"

const GameSelect = () => {
  return (
    <section id="game-select">
      <div className="form-control">
        <label className="label" htmlFor="game-select">
          Choose a game to score:
        </label>
        <select className="select" name="games" id="game-select">
          <option value="">--Please choose game--</option>
          <option value="otter">otter</option>
          <option value="sloth">sloth</option>
          <option value="koala">koala</option>
        </select>
      </div>
    </section>
  )
}
export default GameSelect
