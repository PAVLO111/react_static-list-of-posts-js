import { CommentList } from '../CommentList/index';
import { UserInfo } from '../UserInfo/index';

export const PostInfo = () => (
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
      <h3 className="PostInfo__title">doloremque illum aliquid sunt</h3>
      <p>
        {' Posted by  '}

        <UserInfo />

        {/* <a className="UserInfo" href="mailto:Julianne.OConner@kory.org">
          Patricia Lebsack
        </a> */}
      </p>
    </div>
    <p className="PostInfo__body">
      deserunt eos nobis asperiores et hic est debitis repellat molestiae
      optio nihil ratione ut eos beatae quibusdam distinctio maiores earum
      voluptates et aut adipisci ea maiores voluptas maxime
    </p>

    <CommentList />
  </div>
);
