import React, { useState } from "react";

const chatbotResponses = [
  {
    regex: /hi|hello|good\s(morning|afternoon|evening)/i,
    responses: ["Hello 👋! How can I assist you today?", "Hi there, how can I help you?"],
  },
  {
    regex: /how are you/i,
    responses: ["I'm doing great 👍, thanks for asking!", "I'm good, how about you?"],
  },
  {
    regex: /.*phone|phones.*/i,
    responses: ["We have a variety of phones: Tecno, Samsung, Oppo, iPhone, Infinix, Google Pixel"],
  },
  {
    regex: /.*Iphone/i,
    responses: ["It is currently available from a lower price of Kes: 154000 only at Verizon Phones.How may i help you with do you want it ordered and Delivered?"],
  },
  {
    regex: /.*Tecno/i,
    responses: ["Tecno comes at a lower price Kes: 15400 which can be afforded by anyone. How may i help you with do you want it ordered and Delivered?"],
  },
  {
    regex: /.*Samsung/i,
    responses: ["The price of Samsung starts at Kes: 23400 upto to the max with diffrent varieties of phones.How may i help you with do you want it ordered, Delivered and paid for?"],
  },
  {
    regex: /.*Oppo/i,
    responses: ["Starting from the latest version of Oppo all varieties of Oppo are available.Do you want me to help you with how it will be ordered and delivered."],
  },
  {
    regex: /.*Infinx/i,
    responses: ["Starting with the cheaper versions of Infinix all versions are availble just for you. Do you want my assistance how it will be ordered and delivered?"],
  },
  {
    regex: /.*Google Pixel/i,
    responses: ["The price of Google Pixel is Kes: 25600 starting with the older versions. Do you want my assistance?"],
  },
  {
    regex: /.*yeah|yes.*/i,
    responses: ["First add your items to the cart, the navigate to your cart using the navbar and then press the blue button Buy Now then a pop-up will appear which you will enter your phone number and then a completion pop-up will be sent to your phone for the payment thereafter you willbe given a code that you will use to track your Order by pressing the blue button."],
  },
  {
    regex: /.*/,
    responses: ["Sorry 😔😔 I didn't understand what you said!!"],
  },
];

const Chatbot = () => {
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([
    { sender: "chatbot", text: "Hi there 👋! I am your Verizon Phones Assistant." },
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
