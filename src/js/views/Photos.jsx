import React, { Component } from 'react';

const styles = {
  body: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    height: '100%',
    position: 'relative',
  },
  headerContainer: {
    fontSize: '22px',
    padding: '10px 20px',
    backgroundColor: 'lightgray',
    fontWeight: 'bold',
  },
  photosContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '0 10px',
  },
  photoWrapper: {
    width: '25%',
    height: '100px',
    padding: '10px',
  },
  photo: {
    width: '100%',
    height: '100%',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  singlePhotoCloseButton: {
    position: 'absolute',
    right: '0',
    top: '0',
    padding: '10px',
    fontSize: '22px',
    cursor: 'pointer',
    zIndex: '1',
  },
  singlePhotoContainer: {
    width: '100%',
    height: '100%',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'lightgray',
  },
};

const PHOTOS = [
  'https://cdn.pixabay.com/photo/2015/07/10/17/53/cheers-839865_1280.jpg',
  'https://www.shutterfly.com/ideas/wp-content/uploads/2016/06/30th-birthday-party-ideas-5.jpg',
  'https://zone1-ibizaspotlightsl.netdna-ssl.com/sites/default/files/styles/auto_1500_width/public/article-images/135020/slideshow-1567785244.jpg',
  'https://cdn10.phillymag.com/wp-content/uploads/sites/3/2018/10/pumpkin-patch-lead.jpg',
  'https://images2.minutemediacdn.com/image/upload/c_crop,h_2014,w_3584,x_0,y_187/f_auto,q_auto,w_1100/v1554918066/shape/mentalfloss/56004-istock-496545234.jpg',
];

class Photos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoId: null,
    };
  }

  get photoUrl() {
    return PHOTOS[this.state.photoId];
  }

  onSelectPhoto(photoId) {
    this.setState({photoId});
  }

  renderSinglePhoto() {
    return (
      <React.Fragment>
        <div
          style={styles.singlePhotoCloseButton}
          className={'fas fa-times'}
          onClick={() => this.onSelectPhoto(null)}
        ></div>
        <div
          style={{...styles.singlePhotoContainer, backgroundImage: `url(${this.photoUrl})`}}
        ></div>
      </React.Fragment>
    );
  }

  renderPhotoList() {
    return (
      <React.Fragment>
        <div style={styles.headerContainer}>
          Photos
        </div>
        <div style={styles.photosContainer}>
          {PHOTOS.map((photo, index) =>
            <div style={{...styles.photoWrapper}} key={index} onClick={() => this.onSelectPhoto(index)}>
              <div style={{...styles.photo, backgroundImage: `url(${photo})`}}></div>
            </div>
          )}
        </div>
      </React.Fragment>
    );
  }

  render() {
    return (
      <div style={styles.body}>
        {this.state.photoId === null ? this.renderPhotoList() : this.renderSinglePhoto()}
      </div>
    );
  }
}

export default Photos;
