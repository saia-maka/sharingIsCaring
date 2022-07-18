import React from 'react'
function Tile(props) {
  function handleDelete() {
    alert('No takebacks!')
  }

  return (
    <>
      <section className="tile-wrapper" onClick={props.itemHandler}>
        <h2 className="tile-title">{props.titleName}</h2>
        <button
          className="tile-delete-btn"
          type="button"
          onClick={handleDelete}
        >
          Delete
        </button>
      </section>
    </>
  )
}
export default Tile
