import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './Blog.scss';

class Blog extends Component {
  constructor(props) {
    super(props);
  }

  renderArticle(i) {
    return (
      <div className={styles.blogArticle} key={i}>
        <div className={styles.blogImageContainer}>
          <img className={styles.blogImage} src="/public/womanTraveling.jpg" />
        </div>
        <div className={styles.blogText} style={i % 2 ? {order: -1} : {}}>
          <div className={styles.blogTitle}>Lorum ipsum</div>
          <div className={styles.blogBody}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt est ligula, sit amet interdum quam maximus vitae. Nulla at orci ut velit vestibulum elementum quis ut velit. Pellentesque neque felis, cursus ac ultricies in, molestie quis dui. Phasellus rhoncus, ligula at dapibus suscipit, mi leo pretium felis, ut dignissim ipsum eros volutpat nibh. Fusce id ultrices leo, et dignissim eros. Morbi dapibus lorem sed est varius, sit amet aliquam augue lobortis. Sed imperdiet sagittis tellus vel condimentum. Etiam maximus eros vel ante imperdiet posuere. Nam nibh nisi, interdum vel blandit sed, vestibulum ut risus. In at augue tincidunt, rhoncus velit ut, rutrum mauris.
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className={styles.body}>
        {[1,2,3].map((ele, i) => this.renderArticle(i))}
        <br/>
      </div>
    );
  }
}

export default Blog;
