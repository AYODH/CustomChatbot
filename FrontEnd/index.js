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
    }
});