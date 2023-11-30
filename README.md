# smart-home-light-bulb-control

This project demonstrates how to control a smart home light bulb using JavaScript and IoT technology.

Features

* Turn the light on and off using a web server
* Receive updates about the light's status
* Easy to use and customize

Requirements

* Raspberry Pi
* Node.js
* MQTT client library
* Express web server framework
* Body parser middleware
* Python RPi.GPIO library

Instructions

1. Install the dependencies:
    ```bash
    npm install mqtt
    npm install express
    npm install body-parser
    sudo apt-get install rpi.gpio
    ```
2. Run the web server:
    ```bash
    node index.js
    ```
3. Control the light using the following curl commands:
    ```bash
    curl -X POST http://localhost:3000/light -H "Content-Type: application/json" -d '{"action": "on"}'
    curl -X POST http://localhost:3000/light -H "Content-Type: application/json" -d '{"action": "off"}'
    ```

License

MIT
