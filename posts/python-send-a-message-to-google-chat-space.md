---
title: 'Python - Send a message to Google chat space'
description: 'Use google webhook to send a message to chat space'
date: '2021-01-01'
---
### Steps
0. End result. A message on chat space.
    ![](https://github.com/taeheechoi/python-send-a-message-to-google-chat-space/blob/main/images/0.jpg?raw=true)

1. Open chat https://mail.google.com/chat/u/0/ and create a new space.
    ![](https://github.com/taeheechoi/python-send-a-message-to-google-chat-space/blob/main/images/1.jpg?raw=true)

2. Enter a new space name. eg) Demo
    ![](https://github.com/taeheechoi/python-send-a-message-to-google-chat-space/blob/main/images/2.jpg?raw=true)

3. Click dropdown arrow on the space. eg) Demo and select Manage webhooks
    ![](https://github.com/taeheechoi/python-send-a-message-to-google-chat-space/blob/main/images/3.jpg?raw=true)

4. Copy a webhook address.
    ![](https://github.com/taeheechoi/python-send-a-message-to-google-chat-space/blob/main/images/4.jpg?raw=true)

5. Create a new python file and paste below code. Update url to the webhook. eg) demo.py
    ```python
    #  https://developers.google.com/chat/quickstart/incoming-bot-python
    from json import dumps

    from httplib2 import Http


    def main():
        """Hangouts Chat incoming webhook quickstart."""
        url = '<INCOMING-WEBHOOK-URL>'
        bot_message = {
            'text' : 'Hello from a Python script!'}

        message_headers = {'Content-Type': 'application/json; charset=UTF-8'}

        http_obj = Http()

        response = http_obj.request(
            uri=url,
            method='POST',
            headers=message_headers,
            body=dumps(bot_message),
        )

        print(response)

    if __name__ == '__main__':
        main()
    ```
6. Run demo.py. Ctrl + F5 or Right click >> "Run Python File in Terminal"  within VS Code.

### [Github](https://github.com/taeheechoi/python-send-a-message-to-google-chat-space.git)