const SingleComment = ({ comment }) => {
  return (
    <>
      <div className="d-flex w-100 justify-content-between">
        <small>{comment.author}</small>
        <small>{comment.rate} / 5</small>
      </div>
      <p className="m-0">{comment.comment}</p>
    </>
  );
};
export default SingleComment;
