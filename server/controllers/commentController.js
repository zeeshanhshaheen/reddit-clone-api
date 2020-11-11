import db from "./../models";

const commentController = {};

commentController.post = (req, res) => {
  const { text, userId, postId } = req.body;

  // Validation

  const comment = new db.Comment({
    text,
    _creator: userId,
    _post: postId,
  });

  comment
    .save()
    .then((newComment) => {
      db.Post.findByIdAndUpdate(postId, {
        $push: { _comments: newComment._id },
      })
        .then((excistingPost) => {
          res.status(200).json({
            success: true,
            data: newComment,
            excistingPost,
          });
        })
        .catch((err) => {
          res.status(500).json({
            message: err,
          });
        });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.toString(),
      });
    });
};

export default commentController;
