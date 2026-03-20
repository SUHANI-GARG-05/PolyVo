import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// ✅ IMPORTANT for deployment
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const USERS_FILE = path.join(__dirname, 'users.json');

// Helper to read users
const getUsers = () => {
    if (!fs.existsSync(USERS_FILE)) {
        fs.writeFileSync(USERS_FILE, JSON.stringify([]));
    }
    return JSON.parse(fs.readFileSync(USERS_FILE));
};

// Helper to save users
const saveUser = (user) => {
    const users = getUsers();
    users.push(user);
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
};

// ✅ Test route (so you see something instead of "Cannot GET /")
app.get('/', (req, res) => {
    res.send("Polyvo backend is running 🚀");
});

// Register
app.post('/api/register', (req, res) => {
    const { name, email, password } = req.body;
    const users = getUsers();

    if (users.find(u => u.email === email)) {
        return res.status(400).json({ message: 'User already exists' });
    }

    const newUser = { id: Date.now(), name, email, password };
    saveUser(newUser);

    const { password: _, ...userSafe } = newUser;
    res.json({ message: 'User created', user: userSafe });
});

// Login
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    const users = getUsers();

    const user = users.find(
        u => u.email === email && u.password === password
    );

    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    const { password: _, ...userSafe } = user;
    res.json({ message: 'Login successful', user: userSafe });
});

// Chat
app.post('/api/chat', (req, res) => {
    const { message } = req.body;
    const lowerMsg = message.toLowerCase();

    setTimeout(() => {
        let response = "I'm not sure I understand. Could you rephrase that?";

        if (lowerMsg.includes('hello') || lowerMsg.includes('hi')) {
            response = "Hello! Welcome to Poly.vo. How can I help you today?";
        } else if (lowerMsg.includes('course') || lowerMsg.includes('learn')) {
            response = "We offer courses in Japanese, English, Hindi and more!";
        } else if (lowerMsg.includes('price') || lowerMsg.includes('cost') || lowerMsg.includes('free')) {
            response = "Many beginner lessons are free! Premium is $9.99/month.";
        } else if (lowerMsg.includes('japanese')) {
            response = "Japanese course covers Romaji, Hiragana & Katakana.";
        } else if (lowerMsg.includes('login') || lowerMsg.includes('sign up')) {
            response = "Click the login button at top right to access your account.";
        }

        res.json({ reply: response });
    }, 1000);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});