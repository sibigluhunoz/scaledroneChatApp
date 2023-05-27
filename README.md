# React.js Chat App with Scaledrone

This is simple real-time chat app build with React.js and integrated with the ScaleDrone messaging platform

## Tehnologies:

: React.js
: ScaleDrone

## Instalation and usage:

1. install dependencies with npm install
2. create ScaleDrone account on https://www.scaledrone.com/ to get your free CHANNEL_ID
   and paste it in main component App.jsx

   this.drone = new window.Scaledrone('YOUR_CHANNEL_ID', {
   data: this.state.member,
   });

   or in .env file

   REACT_APP_CHANNEL_ID=YOUR_CHANNEL_ID

   this.drone = new window.Scaledrone(`${process.env.REACT_APP_CHANNEL_ID}`, {
   data: this.state.member,
   });

3. start the development server with npm start and open http://localhost:3000
4. write your first message and press enter or click send
