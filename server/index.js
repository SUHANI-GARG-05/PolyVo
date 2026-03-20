import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

const USERS_FILE = path.join(__dirname, 'users.json');

// Helper to read users
const getUsers = () => {
    if (!fs.existsSync(USERS_FILE)) {
        fs.writeFileSync(USERS_FILE, JSON.stringify([]));
    }
    const data = fs.readFileSync(USERS_FILE);
    return JSON.parse(data);
};

// Helper to save users
const saveUser = (user) => {
    const users = getUsers();
    users.push(user);
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
};

// Register Endpoint
app.post('/api/register', (req, res) => {
    const { name, email, password } = req.body;
    const users = getUsers();

    if (users.find(u => u.email === email)) {
        return res.status(400).json({ message: 'User already exists' });
    }

    const newUser = { id: Date.now(), name, email, password };
    saveUser(newUser);

    // Return user without password
    const { password: _, ...userSafe } = newUser;
    res.json({ message: 'User created', user: userSafe });
});

// Login Endpoint
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    const users = getUsers();
    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    const { password: _, ...userSafe } = user;
    res.json({ message: 'Login successful', user: userSafe });
});

// Chatbot Endpoint (Mock AI)
app.post('/api/chat', (req, res) => {
    const { message } = req.body;
    const lowerMsg = message.toLowerCase();

    // Simulate AI thinking time
    setTimeout(() => {
        let response = "I'm not sure I understand. Could you rephrase that?";

        if (lowerMsg.includes('hello') || lowerMsg.includes('hi')) {
            response = "Hello! Welcome to Poly.vo. How can I help you with your language learning journey today?";
        } else if (lowerMsg.includes('course') || lowerMsg.includes('learn')) {
            response = "We offer fantastic courses in Japanese, English, Hindi, and many more! Check out our 'Courses' page to see the full catalog.";
        } else if (lowerMsg.includes('price') || lowerMsg.includes('cost') || lowerMsg.includes('free')) {
            response = "Many of our beginner lessons are free! We also offer a Premium subscription for unlimited access at $9.99/month.";
        } else if (lowerMsg.includes('japanese')) {
            response = "Japanese is a great choice! Our course covers Romaji, Hiragana, and Katakana to get you started.";
        } else if (lowerMsg.includes('login') || lowerMsg.includes('sign up')) {
            response = "You can access your account by clicking the 'Log in' button in the top right corner.";
        }

        res.json({ reply: response });
    }, 1000);
});

if (!fs.existsSync('server')) {
    fs.mkdirSync('server');
}

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
