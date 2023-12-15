const http = require('http');
const url = require('url');
const querystring = require('querystring');

const users = {
  '123': { email: 'john@example.com' },
};

const server = http.createServer((req, res) => {
  const { url: requestUrl, method } = req;
  const { pathname, search } = url.parse(requestUrl, true);

  if (method === 'GET') {
    handleGetRoute(pathname, res);
  } else if (method === 'POST') {
    handlePostRoute(pathname, req, res);
  } else if (method === 'PUT' || method === 'PATCH') {
    handleUpdateRoute(pathname, method, req, res);
  } else if (method === 'DELETE') {
    handleDeleteRoute(pathname, res);
  } else {
    handleNotFoundRoute(res);
  }

  function handleGetRoute(path, res) {
    if (path === '/' || path === '/home') {
      sendResponse(res, 200, 'Welcome to the Home Page!\n');
    } else if (path === '/about') {
      sendResponse(res, 200, 'Welcome to the About Page!\n');
    } else if (path === '/contact') {
      sendResponse(res, 200, 'Welcome to the Contact Page!\n');
    } else if (path.startsWith('/users/')) {
      const userId = path.split('/')[2];
      handleGetUserRoute(userId, res);
    } else {
      handleNotFoundRoute(res);
    }
  }

  function handlePostRoute(path, req, res) {
    if (path === '/users') {
      handlePostUserRoute(req, res);
    } else {
      handleNotFoundRoute(res);
    }
  }

  function handleUpdateRoute(path, method, req, res) {
    if (path.startsWith('/users/')) {
      const userId = path.split('/')[2];
      handleUpdateUserRoute(userId, method, req, res);
    } else {
      handleNotFoundRoute(res);
    }
  }

  function handleDeleteRoute(path, res) {
    if (path.startsWith('/users/')) {
      const userId = path.split('/')[2];
      handleDeleteUserRoute(userId, res);
    } else {
      handleNotFoundRoute(res);
    }
  }

  function handleGetUserRoute(userId, res) {
    const user = users[userId];
    if (user) {
      sendResponse(res, 200, JSON.stringify(user) + '\n');
    } else {
      handleNotFoundRoute(res);
    }
  }

  function handlePostUserRoute(req, res) {
    readRequestBody(req, (data) => {
      const email = querystring.parse(data).email;
      const userId = generateUserId();
      users[userId] = { email };
      sendResponse(res, 201, JSON.stringify(users[userId]) + '\n');
    });
  }

  function handleUpdateUserRoute(userId, method, req, res) {
    if (users[userId]) {
      readRequestBody(req, (data) => {
        const email = querystring.parse(data).email;
        users[userId].email = email;
        sendResponse(res, 200, JSON.stringify(users[userId]) + '\n');
      });
    } else {
      handleNotFoundRoute(res);
    }
  }

  function handleDeleteUserRoute(userId, res) {
    if (users[userId]) {
      delete users[userId];
      sendResponse(res, 204);
    } else {
      handleNotFoundRoute(res);
    }
  }

  function handleNotFoundRoute(res) {
    sendResponse(res, 404, 'Page not found!\n');
  }
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

function readRequestBody(req, callback) {
  let chunks = '';
  req.on('data', (chunk) => (chunks += chunk));
  req.on('end', () => callback(chunks));
}

function sendResponse(res, statusCode, data = '') {
  res.writeHead(statusCode, { 'Content-Type': 'application/json' });
  res.end(data);
}

function generateUserId() {
  return Math.random().toString(36).substring(7);
}
