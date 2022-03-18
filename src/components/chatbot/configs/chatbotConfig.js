import React from 'react'
import { createChatBotMessage } from "react-chatbot-kit";
import EntryWidget from '../widgets/EntryWidget';
import Social from '../widgets/Social';
import Questions from '../widgets/Questions/index';

const config = {
  initialMessages: [
    createChatBotMessage(`Welcome to UAE CYBER LEAGUE`),
    createChatBotMessage('How can I help you today ?',
    {
      withAvatar: true,
      delay: 500,
      widget: "EntryWidget",
    }),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: '#ba1833',
    },
    chatButton: {
      backgroundColor: '#ba1833',
    },
  },
  state: {
    questions: [],
  },
  widgets: [
    {
      widgetName: "EntryWidget",
      widgetFunc: (props) => <EntryWidget {...props} />
    },
    {
      widgetName: "Social",
      widgetFunc: (props) => <Social {...props} />
    },
    {
      widgetName: "Questions",
      widgetFunc: (props) => <Questions {...props} />,
      mapStateToProps: ['questions'],
    }
  ]
}

export default config
