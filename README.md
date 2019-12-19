# Single-Spa
前端微服务框架

1:projectBase基本框架，功能：做各子服务的集成（类似于后端微服务的关网）。
2:projectA、projectC 为独立子服务应用（可由不同的技术栈Vue、React、Angularjs等实现），子服务应用可独立开发、测式、发布、部置。

Demo演示1：本地运行
演示一: 子服务来自远端
1：启动 projectA、projectC服务
   到各子项目的根目录执行：npm run dev
2：启动 projectBase 服务
   到项目的public目录打开project.config.js，注册远端子服务
   到根目录执行：npm run dev

演示二: 子服务来自本地
1：打包 projectA、projectC 服务
到各子项目的根目录执行：npm run prod

2：将projectA、projectC工程下target目录中的projectA、projectC目录，考贝到projectBase工程下的modules下

3：启动 projectBase 服务
   到项目的public目录打开project.config.js，注册本地子服务
   到根目录执行：npm run dev
   
Demo演示2: Nginx上发布运行
演示一: 子服务来自远端，nginx.conf配置

演示二: 子服务来自本地，nginx.conf配置

    server {
          listen       8080;
          server_name  localhost;
          charset utf-8;
          access_log  /Users/liqin/Yangjijiang/nginx/logs/access.8080.log  main;

          location / {
              root   /Users/liqin/Yangjijiang/IDEA/git/single-spa/demo/Single-SPA/projectBase/target;
              index  index.html index.htm;
              try_files $uri /index.html;
          }
          location /projectA/api/ {
              proxy_pass http://localhost:8081;
              rewrite ^/projectA/api/(.*)$ /api/$1 break;
          }
          location /projectC/passport/ {
              proxy_pass http://localhost:8082;
              rewrite ^/projectC/(.*)$ /$1 break;
          }

          error_page   500 502 503 504  /50x.html;
          location = /50x.html {
              root   html;
          }
     }
