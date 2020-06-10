const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    
    if (url === '/') {
        res.write('<html><head><title>Assignment 1</title></head>');
        res.write('<body><h1>Welcome to assignment 1</h1>');
        res.write('<form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Submit</button></form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/users') {
        res.write('<html><head><title>Users</title></head>');
        res.write('<body>');
        res.write('<ul><li>User 1</li></ul>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/create-user' && method === 'POST') {
        const user = [];

        req.on('data', (chunk) => {
            user.push(chunk);
        });
        
        req.on('end', () => {
            const parsedUser = Buffer.concat(user).toString();
            console.log(parsedUser.split('=')[1]);            
        });       
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
    }
};

exports.handler = requestHandler;