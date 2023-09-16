const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const path = require('path');
const multer = require('multer');

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const authRoutes = require('./routes/accounts');

const usersTable = 'users';

app.post('/signup', async (req, res) => {
  const { fname, lname, email, password, admin } = req.body;
  console.log(req.body)

  if (!fname || !lname || !email || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    db.query('SELECT * FROM users WHERE email = ?', [email], async (error, results) => {
      if (error) {
        console.error('Error fetching user:', error);
        return res.status(500).json({ error: 'Internal server error' });
      }

      if (results.length > 0) {
        return res.status(409).json({ error: 'User already exists' });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = {
        fname,
        lname,
        email,
        password: hashedPassword,
        admin
      };
      db.query('INSERT INTO users SET ?', newUser, (error, result) => {
        if (error) {
          console.error('Error registering user:', error);
          return res.status(500).json({ error: 'Internal server error' });
        }
        return res.status(201).json({ message: 'User registered successfully', results: result });
      });
    });
  } catch (error) {
    console.error('Error during signup:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/login', async (req, res) => {
  console.log("req:", req.body);

  if (!req.body) {
    return res.status(400).json({ error: 'Invalid request body' });
  }

  const { email, password } = req.body;

  // Use parameterized query to prevent SQL injection
  const query = `SELECT * FROM users WHERE email = '${email}';`
  
    db.query(query, async (error, results) => {
      if (error) {
        console.error('Error fetching user:', error);
        return res.status(500).json({ error: 'Internal server error' });
      }

      if (results.length === 0) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }

      const user = results[0];

      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }

      return res.status(200).json({ message: 'Login successful', user: user });
    });

});

app.get('/:tableName', (req, res) => {
  const { tableName } = req.params;

 const query = `SELECT * FROM ${tableName}`;

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).json({ error: 'Error executing query' });
    }

    if (results.length > 0) {
      return res.status(200).json({ message: 'Successful', results: results });
    } else {
      res.status(404).json({ message: 'No tilings found.' });
    }
  });
});


// Configure Multer for file upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'implement-uploads');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

app.post('/uploadItem', upload.single('image'), (req, res) => {
  try {
    const file = req.file;
    const { title, description, uploadTable } = req.body;

    if (!file || !title || !description || !uploadTable) {
      return res.status(400).json({ error: 'Title, description, and image are required' });
    }

    const imagePath = file.path;

    const imageInfo = {
      title,
      description,
      image_path: imagePath,
    };

    db.query(`INSERT INTO ${uploadTable} SET ?`, imageInfo, (error, result) => {
      if (error) {
        console.error('Error saving image information to the database:', error);
        return res.status(500).json({ error: 'Internal server error' });
      }

      return res.status(201).json({ message: 'Image uploaded and information saved successfully' });
    });
  } catch (error) {
    console.error('Error handling file upload:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'farm_implement',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to the database.');
});

const port = 3003; // You can use any available port
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});