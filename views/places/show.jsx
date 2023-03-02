const React = require("react");
const Def = require("../default");

function show(data) {
  let comments = (
    <h3 className="inactive">
      No comments yet!
    </h3>
  )
  if (data.place.comments.length) {
    comments = data.place.comments.map((c) => {
      return (
        <div className="border">
          <h2 className="rant">{c.rant ? "Rant! ðŸ˜¡" : "Rave! ðŸ˜»"}</h2>
          <h4>{c.content}</h4>
          <h3>
            <stong>- {c.author}</stong>
          </h3>
          <h4>Rating: {c.stars}</h4>
        </div>
      );
    });
  }
  return (
    <Def>
      <main>
        <div className="row">
          <div className="col-sm-6">
            <h1>{data.place.name}</h1>
            <img src={data.place.pic} alt={data.place.name} />
            <h3>
              Locatind in {data.place.city}, {data.place.state}
            </h3>
          </div>
          <div className="col-sm-6">
            <h2>Description</h2>
            <h3>{data.place.showEstablished()}</h3>
            <h4>Serving {data.place.cuisines}</h4>
          </div>
          <h2>Rating</h2>
          <p>Currently Unrated</p>
          <hr />
          <h2>Comments</h2>
          {comments}
          <a href={`/places/${data.id}/edit`} className="btn btn-warning">
            Edit
          </a>
          <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
            <button type="submit" className="btn btn-danger">
              Delete
            </button>
          </form>

          <form method="POST" action={`/places/${data.place.id}/comment`}>
            <div className="form-group">
              <label htmlFor="author">Author</label>
              <input className="form-control" id="author" name="author" />
            </div>
            <div className="form-group">
              <label htmlFor="content">Comments</label>
              <input className="form-control" id="content" name="content" />
            </div>
            <div className="form-group">
              <label htmlFor="stars">Star Rating</label>
              <input
                type="range"
                className="form-control"
                id="starRating"
                name="starRating"
                step="0.5"
                min="0"
                max="5"
                required
              />
            </div>
            <div >
              <label htmlFor="rant">Rant?!</label>
              <input
                type="checkbox"
                className="form-control"
                id="rant"
                name="rant"
                value="rant"
              />
            </div>
            <button
              className="btn btn-primary"
              type="submit"
              value="Add Comment">Add Comment</button>
          </form>
        </div>
      </main>
    </Def>
  );
}

module.exports = show;