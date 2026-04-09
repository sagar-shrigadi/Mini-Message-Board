# Mini-Message-Board

A simple Express-based web application that allows users to view and post messages to a public board. This project was built to practice handling routes, rendering templates with EJS, and managing form data.

## 🚀 Features

- View Messages: See a list of all messages with the author's name and the date they were posted.
- Add New Messages: A simple form to submit your own name and message.
- Message Details: Individual links for each message to view them on a separate page.
- Dynamic Rendering: Uses EJS to render data from the server.

## 🛠️ Tech Stack

- Node.js
- Express.js
- EJS (View Engine)

## ⚙️ Installation & Setup

```
Clone the repository:
### bash
git clone git@github.com:sagar-shrigadi/Mini-Message-Board.git

Install dependencies:
### bash
npm install

Run the server:
### bash
# Using node
npm start

Open in browser:
Navigate to http://localhost:3000 to see the app in action.
```

## 📁 Project Structure

```
├── controllers/           # Route logic (req, res handlers)
│   ├── getIndex.js
│   ├── getMsg.js
│   ├── getNewMsgForm.js
│   └── postNewMsg.js
├── routes/                # Route definitions & URL paths
│   ├── indexRouter.js     # "/"
│   ├── messagesRouter.js  # "/messages"
│   └── newMsgRouter.js    # "/new"
├── views/                 # EJS templates
│   ├── pages/
│   │   ├── index.ejs      # Main board
│   │   ├── form.ejs       # "New Message" form
│   │   └── messages.ejs   # Individual message details
│   ├── header.ejs         # Reusable navigation/header
│   └── footer.ejs         # Reusable footer
├── public/                # Static assets
│   └── styles/
│       ├── reset.css
│       └── style.css
├── app.js                 # Server entry point & middleware setup
└── package.json           # Dependencies & scripts
```

## 🧠 What I Learned

- Setting up a basic Express server and middleware.
- Using express.urlencoded() to parse form data from req.body.
- Working with EJS to dynamically generate HTML on server and send to client as response.
- Implementing POST requests and using res.redirect() to handle user flow.
