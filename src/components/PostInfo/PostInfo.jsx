import { CommentList } from '../CommentList/index';
import { UserInfo } from '../UserInfo/index';
import './PostInfo.scss';

export const PostInfo = ({ post }) => (
  // <div className="PostInfo">
  //   <div className="PostInfo__header">
  //     <h3 className="PostInfo__title">qui est esse</h3>
  //     <p>
  //       {' Posted by  '}
  //       <a className="UserInfo" href="mailto:Sincere@april.biz">
  //         Leanne Graham
  //       </a>
  //     </p>
  //   </div>
  //   <p className="PostInfo__body">
  //     est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea
  //     dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut
  //     reiciendis qui aperiam non debitis possimus qui neque nisi nulla
  //   </p>
  //   <hr />
  //   <b data-cy="NoCommentsMessage">No comments yet</b>
  // </div>

  <div className="PostInfo">
    <div className="PostInfo__header">
      <h3 className="PostInfo__title">{post.title}</h3>
      <p>
        {' Posted by  '}

        <UserInfo user={post.user} />

        {/* <a className="UserInfo" href="mailto:Julianne.OConner@kory.org">
          Patricia Lebsack
        </a> */}
      </p>
    </div>

    <p className="PostInfo__body">{post.body}</p>

    <CommentList comments={post.comments} />

    {/* {comments.map(comment => (
      <CommentList key={comment.id} comment={comment} />
    ))} */}
  </div>
);
