import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const newMessage = { role: 'user', content: userInput };
    const updatedChatHistory = [...chatHistory, newMessage];
    setChatHistory(updatedChatHistory);
    setUserInput('');

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/engines/gpt-3.5/completions', // Updated endpoint for GPT-3.5
        {
          model: 'gpt-3.5',
          messages: updatedChatHistory,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer key`,
          },
        }
      );
  
      const botMessage = response.data.choices[0].message;
      setChatHistory((prevHistory) => [...prevHistory, { role: 'bot', content: botMessage }]);
    } catch (error) {
      console.error('Error calling OpenAI API:', error);
    }
  };
  return (
    <div style={{
      backgroundColor: '#e0f7fa',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
      marginTop: '20px'
    }}>
      <h4>Chat with Us About This Product</h4>
      <p>Have questions about the product? Ask us directly based on the reviews and we'll assist you promptly!</p>
      <div style={{
        maxHeight: '300px',
        overflowY: 'auto',
        marginBottom: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '10px',
        textAlign: 'left'
      }}>
        {chatHistory.map((msg, index) => (
          <div key={index} style={{
            textAlign: msg.role === 'user' ? 'right' : 'left',
            margin: '10px 0'
          }}>
            <b>{msg.role === 'user' ? 'You' : 'Bot'}:</b> {msg.content}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center' }}>
        <input
          type="text"
          value={userInput}
          onChange={handleInputChange}
          placeholder="Type your question..."
          style={{
            flex: 1,
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '5px'
          }}
        />
        <button type="submit" style={{
          backgroundColor: '#007bff',
          color: '#fff',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginLeft: '10px'
        }}>Send</button>
      </form>
    </div>
  );
};

export default Chatbot;
