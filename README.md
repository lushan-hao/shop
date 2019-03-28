# shop
这是一个关于购物的网站，基于vue+node（koa2）+mongodb 其中模拟数据用的是mock
关于这个项目具体流程我暂时先不写  
只想写一下关于我在项目打包时，遇到的很多问题，自己琢磨了许久，写下这个简单的来纪念一下  
我的解决方方法具体应用在阿里云的轻量级服务器上，因为学生机便宜，所以...  
我的项目具体采用的技术时vue+node.js(koa2)+mongodb，其中有一部分应用mock去模拟数据  
首先我在vue打包时遇到的问题就是打包路径有错误，在官网上看到了解决方法，如下图  
![Alt text](https://github.com/haolushan5253/shop/blob/master/img/1.JPG)
其次在后端程序这个文件夹单独放置，与vue打包后dist放在一个文件夹，这时候运行后端文件，我的是node index.js  
我的就报错了，这时候我发现是跨域错误，后端不响应，找了许久，结果发现我应用的koa2-cors出现错误，然后配置参数，结果如下图  
![Alt text](https://github.com/haolushan5253/shop/blob/master/img/2.JPG)
运行成功，本地打包后也可以获取后端数据，接下来就是将数据库里面的数据导出部署在服务器上   
我的是进入到mongodb文件下的bin（敲的终端）  
https://blog.csdn.net/m0_38039437/article/details/80196576
这篇文章应该有帮助  
之后导入到阿里云服务器上，阿里云服务器安装一些软件  
我安装了monngodb、PM2，其中pm2安装运行node用的  
接下来上传到服务器上，这个应该很容易，不做过多介绍，记得运行node  
之后发现正常，可是在获取数据库数据还是失败，查找发现发送请求时缺少，无法发送请求，上网查询发现koa2-cors有错误，做出如下修改  
![Alt text](https://github.com/haolushan5253/shop/blob/master/img/3.JPG)
终于我的成功了，第一次写踩过的坑，写的很差，见谅。

