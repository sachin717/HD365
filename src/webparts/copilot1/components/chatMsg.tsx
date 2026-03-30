import * as React from 'react'

export interface ChatMessageProps {
  children: React.ReactNode;
  type?: 'info' | 'warning' | 'error';
}
const ChatMessage: React.FC<ChatMessageProps> = ({ children, type = 'info' }) => {
  const styles = {
    info: { padding: 16 },
    warning: { padding: 16, color: '#8a6d3b', backgroundColor: '#fcf8e3' },
    error: { padding: 16, color: '#a94442', backgroundColor: '#f2dede' }
  };
  return <div style={styles[type]}>{children}</div>;
};

export default ChatMessage;
