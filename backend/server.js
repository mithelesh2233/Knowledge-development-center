const express = require('express');
const app = express();
const PORT = 3000;
const cors=require('cors');

// Sample database of article posts
let posts = [];
app.use(express.json());
app.use(cors());
// Get all article posts
app.get('/posts', (req, res) => {
  res.send(posts);
});

// Get a specific article post by ID
app.get('/posts/:id', (req, res) => {
  const postId = req.params.id;
  const post = posts.find(post => post.id === postId);
  if (!post) {
    return res.status(404).json({ message: 'Post not found' });
  }
  res.json(post);
});

// Create a new article post
app.post('/posts', (req, res) => {
  const { title, content,authorname,yearofpublish } = req.body;
  const newPost = { id: Date.now().toString(), title,authorname,yearofpublish, content };
  posts.push(newPost);
  res.status(201).json(newPost);
});

// Update an existing article post
app.put('/posts/:id', (req, res) => {
  const postId = req.params.id;
  const { title,authorname,yearofpublish, content } = req.body;
  const postIndex = posts.findIndex(post => post.id === postId);
  if (postIndex === -1) {
    return res.status(404).json({ message: 'Post not found' });
  }
  posts[postIndex] = { ...posts[postIndex], title,authorname,yearofpublish, content  };
  res.json(posts[postIndex]);
});

// Delete an existing article post
app.delete('/posts/:id', (req, res) => {
  const postId = req.params.id;
  posts = posts.filter(post => post.id !== postId);
  res.status(204).send();
});
app.listen(PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`);
  });