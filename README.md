运行这个项目需要执行
```
npm install --legacy-peer-deps
```
之后到 ``node_modules\@dataview\datav-vue3\package.json`` 文件内 ``"module": "./es/index.js",`` 改成 ``"module": "./es/index.mjs",``
![alt text](4a9a1581353e8d37bf9185e0065dc39.png)