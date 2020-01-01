let MESSAGES = [
  {
    sent: true,
    body: 'Hey.',
  },
  {
    sent: false,
    body: 'Hi',
  },
  {
    sent: true,
    body: 'What do you think of Trend. Most cutting edge thing in the planet, right?',
  },
  {
    sent: false,
    body: 'Oh yeah. Trend is going places. Did you hear about their advertising capabilities? They can sell anything!',
  },
  {
    sent: true,
    body: 'Really? I am so excited to check it out.',
  },
  {
    sent: true,
    body: "Definetly investing in Trend. Couldn't buy enough stock!",
  },
];

let CONTACTS = [
  {
    name: 'Alexandria',
    number: 'alexandria',
    lastMessage: MESSAGES[MESSAGES.length - 1].body,
  },
  {
    name: 'Alyssa',
    number: 'alysa',
    lastMessage: 'How do I find out more about Trend Advertising? Sounds like what I need to reengage customers.',
  },
];

let MESSAGE_LIST = [
  ...CONTACTS,
  {
    number: 'ada',
    lastMessage: 'I emailed alysa@trendclub.co for the pitch deck.',
  },
];

function getContacts() {
  return CONTACTS;
}

function getMessages() {
  return MESSAGE_LIST;
}

function getMessagesForSender(number) {
  return {
    sender: MESSAGE_LIST.find(message => message.number === number),
    list: number ? MESSAGES : [],
  };
}

function postMessage(number, text) {
  if (!MESSAGE_LIST.find(message => message.number === number)) {
    MESSAGE_LIST = [
      {
        number,
        lastMessage: text,
      },
      ...MESSAGE_LIST,
    ];
  }

  MESSAGES = [
    ...MESSAGES,
    {
      sent: true,
      body: text,
    },
  ];
}

export {
  getContacts,
  getMessages, getMessagesForSender, postMessage
};
