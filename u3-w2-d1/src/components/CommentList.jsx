import SingleComment from "./SingleComment";

const CommentList = ({ comments }) => {
  return (
    <div>
      {comments.map((comment, index) => (
        <div key={`comment-${index}`} className="d-flex flex-column align-items-start border border-1 mb-1">
          <SingleComment comment={comment} />
        </div>
      ))}
    </div>
  );
};
export default CommentList;
