const express = require('express');
const app = express();
const port = 3000; // 设置服务器监听的端口号

// 静态文件中间件，用于提供HTML、CSS、JavaScript等静态文件
app.use(express.static(__dirname));

// 设置路由，用于提供其他后端功能
app.get('/api/data', (req, res) => {
  // 处理后端逻辑
  res.json({ message: 'Hello, World!' });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
});