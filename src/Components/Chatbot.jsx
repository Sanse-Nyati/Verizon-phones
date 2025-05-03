import React, { useState } from "react";

const chatbotResponses = [
  {
    regex: /hi|hello|good\s(morning|afternoon|evening)/i,
    responses: ["Hello! How can I assist you today?", "Hi there, how can I help you?"],
  },
  {
    regex: /how are you/i,
    responses: ["I'm doing great, thanks for asking!", "I'm good, how about you?"],
  },
  {
    regex: /.*phone|phones.*/i,
    responses: ["We have a variety of phones: Tecno, Samsung, Oppo, iPhone, Infinix, Google Pixel"],
  },
  {
    regex: /.*Iphone/i,
    responses: ["It is currently available at a cheaper price Kes: 154000"],
  },
  {
    regex: /.*Tecno/i,
    responses: ["Tecno is available at a cheaper price Kes: 15400"],
  },
  {
    regex: /.*Samsung/i,
    responses: ["The price of Samsung is Kes: 23400"],
  },
  {
    regex: /.*Oppo/i,
    responses: ["The price of Oppo is Kes: 164000"],
  },
  {
    regex: /.*Infinx/i,
    responses: ["The price of Infinix is Kes: 15000"],
  },
  {
    regex: /.*Google Pixel/i,
    responses: ["The price of Google Pixel is Kes: 256000"],
  },
  {
    regex: /.*/,
    responses: ["Sorry I didn't understand what you said!!"],
  },
];

const Chatbot = () => {
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([
    { sender: "chatbot", text: "Hi! I am your Verizon Phones chatbot." },
  ]);

  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userInput.toLowerCase() === "quit") {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "chatbot", text: "Goodbye! Talk later" },
      ]);
      setUserInput(""); // Reset input field
      return;
    }

    const response = getChatbotResponse(userInput);
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "user", text: userInput },
      { sender: "chatbot", text: response },
    ]);
    setUserInput(""); // Reset input field
  };

  const getChatbotResponse = (input) => {
    for (const { regex, responses } of chatbotResponses) {
      if (regex.test(input)) {
        return responses[Math.floor(Math.random() * responses.length)];
      }
    }
    return "Sorry, I didn't understand what you said!!";
  };

  return (
    
    
    <div className="chatbot-container">
      <div className="chatbox">
        {messages.map((msg, index) => (
          <div key={index} className={msg.sender}>
            <p>{msg.text}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="input-form">
        <input
          type="text"
          value={userInput}
          onChange={handleUserInput}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chatbot;
