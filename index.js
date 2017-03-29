const express = require('express');
const proxy = require('http-proxy-middleware');
const app = express();

app.use(proxy('http://localhost:3000/', {
    logLevel: 'warn',
    ws: true,
    router: {
        'localhost:8080/api': 'http://localhost:9000'
    }
}));
app.listen(process.env.PORT || 8080, () => {
  console.log("listening on 8080");
});
