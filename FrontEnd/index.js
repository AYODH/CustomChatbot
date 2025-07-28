document.addEventListener('DOMContentLoaded', function() {
    class Chatbox{
        constructor(){
            this.args = {
                openButton: document.querySelector('.chatbox_icon'),
                chatBox: document.querySelector('.chatbox'),
                sendButton: document.querySelector('.chatbox_send--footer'),
                closeButton: document.querySelector('.chatbox_close'),
            };

            this.state = false;
            this.messages = [];
            this.greetingDisplayed = false;  //Flag to check if greeting is displayed
        }

        display(){
            const {openButton, chatBox, sendButton, closeButton} = this.args;

            if(!openButton || !chatBox || !sendButton || !closeButton){
                console.error("Chatbox elements not found in the DOM.");
                return;
            }

            openButton.addEventListener('click', () => this.toggleState());
            sendButton.addEventListener('click', () => this.onSendButton(chatBox));

            const node = chatBox.querySelector('input');
            node.addEventListener('keyup', ({ key }) => {
                if (key === 'Enter') {
                    this.onSendButton(chatBox);
                }
            });

            closeButton.addEventListener('click', () => this.toggleState());
        }

        toggleState(){
            this.state = !this.state;

            if(this.state){
                this.args.chatBox.Style.display = 'block';
                this.args.chatBox.classList.add('chatbox--active');

                if(!this.greetingDisplayed){
                    setTimeout(() => {
                        let msg = {name: "Bot", message: "Hello! How can I assist you today?"};
                        this.messages.push(msg);
                        this.updateChatText(this.args.chatBox);
                        this.greetingDisplayed = true;  //Set flag to true after greeting is displayed
                    }, 500);

                }
            } else {
                this.args.chatBox.classList.remove('chatbox--active');
                this.args.chatBox.style.display = 'none';
            }
        }

        onSendButton(chatBos){
            const textField = chatbox.querySelector('input');
            const text1 = textField.value;
            if(text1 === ""){
                return;
            }

            let msg1 = {name: "User", message: text1};
            this.messages.push(msg1);
            this.updateChatText(chatbox);

            setTimeout(() => {
                let msg2 = {name: "Bot", message: "Typing..."};
                this.messages.push(msg2);
                this.updateChatText(chatbox);

                this.getChatResponse(text1, (responseText) => {
                    msg2.message = responseText;
                    this.updateChatText(chatbox);
                });

                textField.value = '';
            }, 500);
        }

        updateChatText(chatbox){
            var html = '';
            this.messages.slice().reverse().forEach(function(item){
                if(item.name === "User"){
                    html += '<div class="messages__item messages__item--operator"><img src="1703354587672.jpeg" />' + item.message + '</div>';
                } else {
                    html += '<div class="messages__item messages__item--visitor"><img src="chatbot.png" />' + item.message + '</div>';
                }
            });

            const chatmessage = chatbox.querySelector('.chatbox_messages');
            chatmessage.innerHTML = html;
        }

        getChatResponse(userMessage, callback){
            const data = {
                message: userMessage
            };

            fetch('http://localhost:5000/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data => {
                if (data && data.response){
                    const botResponse = data.response;
                    callback(botResponse);
                } else {
                    console.error("Invalid response from server:", data);
                    callback("Sorry, I couldn't get a response. Please try again later.");
                }
            })
            .catch(error => {
                console.error("Error fetching chat response:", error);
                callback("Sorry, I couldn't get a response. Please try again later.");
            });
        }
    }

    const chatbox = new Chatbox();
    chatbox.display();
});