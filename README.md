# CustomChatBot

A full-stack AI chatbot application built with a Python Flask backend and an HTML/CSS/JavaScript frontend. This chatbot uses deep learning (neural networks) to understand user intent and provide contextual responses.

## 📋 Project Overview

CustomChatBot is a conversational AI system that:
- Uses a trained neural network model to classify user intents
- Processes natural language using NLTK (Natural Language Toolkit)
- Provides context-aware responses based on learned intents
- Features a clean, interactive web interface
- Supports real-time communication via Flask API

## 🏗️ Project Structure

```
CustomChatbot/
├── README.md              # This file
├── BackEnd/
│   ├── app.py            # Flask API server
│   ├── train.py          # Model training script
│   ├── chatbot_model.h5  # Trained neural network model
│   ├── intents.json      # Intent definitions and patterns
│   ├── words.pkl         # Preprocessed words vocabulary
│   └── classes.pkl       # Intent classes
└── FrontEnd/
    ├── index.html        # Chat interface markup
    ├── index.js          # Frontend logic and API calls
    └── style.css         # Styling for the chatbot UI
```

## 🚀 Features

- **AI-Powered Responses**: Uses a trained neural network to understand user intent
- **Intent Recognition**: Classifies user messages into predefined intent categories
- **Natural Language Processing**: Leverages NLTK for text preprocessing and lemmatization
- **RESTful API**: Flask-based backend with CORS support
- **Interactive UI**: Clean, modern web interface with chat bubbles
- **Real-time Communication**: Seamless message exchange between frontend and backend

## 🛠️ Tech Stack

### Backend
- **Python 3.x**
- **Flask**: Web framework for building the API
- **TensorFlow/Keras**: Deep learning framework for the neural network
- **NLTK**: Natural language processing library
- **NumPy**: Numerical computing library
- **Flask-CORS**: Cross-Origin Resource Sharing support

### Frontend
- **HTML5**: Markup structure
- **CSS3**: Styling and layout
- **JavaScript**: Client-side logic and API communication
- **Bootstrap**: Responsive UI framework

## 📦 Installation

### Prerequisites
- Python 3.7 or higher
- pip (Python package manager)
- A modern web browser

### Backend Setup

1. Navigate to the BackEnd directory:
```bash
cd BackEnd
```

2. Install required Python packages:
```bash
pip install flask flask-cors tensorflow nltk numpy
```

3. Download NLTK data (if not already downloaded):
```python
python -m nltk.downloader punkt wordnet
```

4. Verify that the following files exist in the BackEnd directory:
   - `chatbot_model.h5` (trained model)
   - `intents.json` (intent definitions)
   - `words.pkl` (vocabulary file)
   - `classes.pkl` (intent classes)

### Frontend Setup

The frontend is a standalone HTML/CSS/JavaScript application. No installation is required, but ensure:
- The Flask backend is running and accessible
- Update the API endpoint in `index.js` if the backend runs on a different port/URL

## 🎯 Usage

### Running the Backend

1. Open a terminal and navigate to the BackEnd directory:
```bash
cd BackEnd
```

2. Start the Flask server:
```bash
python app.py
```

The server will run on `http://localhost:5000` by default.

### Running the Frontend

1. Open the FrontEnd folder in your file explorer
2. Double-click `index.html` to open it in your default browser
3. Or serve it using a local web server:
```bash
# Using Python
python -m http.server 8000

# Then open http://localhost:8000 in your browser
```

### Using the Chatbot

1. Click the chatbot icon (💬) to open the chat window
2. Type your message and press Enter or click the send button
3. The chatbot will process your message and provide a response
4. Continue the conversation naturally

## 🤖 Training the Model

To retrain the chatbot model with new intents:

1. Edit `intents.json` to add/modify intents, patterns, and responses
2. Run the training script:
```bash
python train.py
```

This will regenerate:
- `chatbot_model.h5` (updated model)
- `words.pkl` (updated vocabulary)
- `classes.pkl` (updated intent classes)

## 📝 Intent Structure

The `intents.json` file defines how the chatbot understands and responds:

```json
{
    "intents": [
        {
            "tag": "greeting",
            "patterns": ["Hi", "Hello", "Hey"],
            "responses": ["Hello! How can I assist you today?"]
        },
        {
            "tag": "doctor_advice",
            "patterns": ["Do I need to see a doctor?", "What should I do if I'm sick?"],
            "responses": ["It's best to consult a healthcare professional for advice."]
        }
    ]
}
```

- **tag**: Unique identifier for the intent
- **patterns**: Example user inputs that match this intent
- **responses**: Possible responses the chatbot can provide

## 🔧 API Endpoints

### POST `/predict`

Sends a user message to the chatbot and receives a response.

**Request:**
```json
{
    "message": "Hello, how are you?"
}
```

**Response:**
```json
{
    "response": "Hello! How can I assist you today?"
}
```

## 🧠 How It Works

1. **User Input**: User types a message in the chat interface
2. **Preprocessing**: The backend cleans and processes the text using NLTK
3. **Vectorization**: The text is converted to a bag-of-words representation
4. **Prediction**: The neural network predicts the most likely intent
5. **Response Generation**: A random response is selected from the matched intent
6. **Display**: The response is sent back to the frontend and displayed in the chat

## 🐛 Troubleshooting

### CORS Errors
- Ensure Flask-CORS is installed and initialized
- Check that the frontend is calling the correct backend URL

### Model Loading Errors
- Verify that `chatbot_model.h5`, `words.pkl`, and `classes.pkl` exist in the BackEnd directory
- Ensure TensorFlow/Keras is properly installed

### No Response from Chatbot
- Check that the Flask server is running
- Verify the message prediction confidence threshold in `app.py`
- Ensure intents are properly defined in `intents.json`

## 📌 Future Enhancements

- Add database support for conversation history
- Implement user authentication and profiles
- Enhance intent recognition with more training data
- Add multiple language support
- Implement sentiment analysis
- Create admin panel for managing intents
- Add chat export functionality

## 📄 License

This project is provided as-is for educational and development purposes.

## 👤 Author

AYODH

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements.

## 📧 Contact

For questions or feedback, please contact the project owner.

---

**Last Updated**: December 2025