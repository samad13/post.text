
var fs = require('fs')
fs.writeFile('post.txt',fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(json => console.log(json)) ,(err, content) => {
    if (err) throw err;
    console.log('content')
})

