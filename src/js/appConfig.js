import Browser from './views/Browser';
import Email from './views/Email';
import Notes from './views/Notes';
import Photos from './views/Photos';
import Messages from './views/Messages';
import Phone from './views/phone/Phone';

const appConfig = [
  {
    name: 'Email',
    iconClassName: 'fas fa-envelope-open-text',
    styles: {
      backgroundColor: 'lightblue',
    },
    component: Email,
  },
  {
    name: 'Notes',
    iconClassName: 'fas fa-sticky-note',
    styles: {
      backgroundColor: 'orange',
    },
    component: Notes,
  },
  {
    name: 'Photos',
    iconClassName: 'far fa-images',
    styles: {
      backgroundColor: 'lightGray'
    },
    component: Photos,
  },
  {
    name: 'Calendar',
    iconClassName: 'fas fa-calendar',
    styles: {
      backgroundColor: '#D71717',
    },
  },
  {
    name: 'Browser',
    iconClassName: 'fas fa-window-restore',
    styles: {
      backgroundColor: 'blue',
    },
    component: Browser,
  },
  {
    name: 'Facebook',
    iconClassName: 'fab fa-facebook-f',
    styles: {
      backgroundColor: '#4267b2',
      lineHeight: '63px',
    },
    // url: 'https://www.facebook.com',
  },
  {
    name: 'Instagram',
    iconClassName: 'fab fa-instagram',
    styles: {
      backgroundColor: '#cc3e6d',
      fontSize: '50px',
    },
    // url: 'https://www.instagram.com',
  },
  {
    name: 'Maps',
    iconClassName: 'fas fa-map-marker-alt',
    styles: {
      backgroundColor: 'lightblue',
    },
    // url: 'https://maps.google.com',
  },
  {
    name: 'Settings',
    iconClassName: 'fas fa-wrench',
    styles: {
      backgroundColor: 'gray',
    },
  },
  {
    name: 'Phone',
    iconClassName: 'fas fa-phone',
    styles: {
      backgroundColor: '#D71717',
    },
    onDock: true,
    component: Phone,
  },
  {
    name: 'Messages',
    iconClassName: 'fas fa-comment-alt',
    styles: {
      backgroundColor: '#D71717',
    },
    component: Messages,
    onDock: true,
  },
  {
    name: 'Contacts',
    iconClassName: 'fas fa-address-book',
    styles: {
      backgroundColor: '#D71717',
    },
    onDock: true,
  },
].map((app, id) => ({...app, id}));

const appLookup = appConfig.reduce((aggregate, app) => ({...aggregate, [app.id]: app}), {});

export default appConfig;
export { appLookup };
