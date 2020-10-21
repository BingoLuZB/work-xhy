用powerShell 的 for循环，可以实现同时混淆多个包，前提是这几个包是同样的混淆源码

例如 for($i = 34; $i -le 37; $i++){npm run build-${i}} 打包马甲34到37的包