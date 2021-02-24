<!-- 用powerShell 的 for循环，可以实现同时混淆多个包，前提是这几个包是同样的混淆源码

例如 for($i = 34; $i -le 37; $i++){npm run build-${i}} 打包马甲34到37的包


遍历 array数组
$array = 84,83,82,80,78,77,73,72
foreach ($n in $array){npm run build-$n} -->

文件配置：
    config
        各个打包配置的历史记录
    modules
        各种模板文件的文件夹（
            defaultConfig.js 默认的混淆配置
            package.json 默认package.json
            webpack-config.js 默认的打包配置模板 
            wxgame.js 微信小游戏模板 
            afterMath 善后模板，处理混淆之后的所有事情
        ）
    inputGame
        各个游戏的源吗/要混淆的游戏的源码 的文件夹
    miniGame
        小游戏壳文件夹
    outputGame
        提审游戏包文件夹
    dist
        混淆之后的js文件
    jsonList
        混淆之后的json文件


思路：
    1、用node把config里面的对应的配置文件内容给复制了，然后把内容放到一个新的webpack.config.js里面去

    2、用node，根据config里面的配置，判断是用哪种混淆方式，用在indexCode对应的源码文件复制/覆盖到打包工具里面去，然后打包多个游戏

    3、打包结束后，用node在input里面复制对应的游戏包到output，然后在output里面修改对应游戏的appid,游戏id（这些在config里面的配置文件设置），再把dist里面混淆好的文件覆盖到output的游戏里面去

    4、用node删除步骤1新生成的webpack.config.js，压缩config里面规定的文件，打包结束

    5、混淆结束之后，直接把jonsList对应的压缩文件上到线上就行了，地址要去看outGame对应的游戏的game.js里面的 downloadUrl，再去http://www.jshaman.com/#section2，把game.js简单混淆一下就可以了上传代码进行提审

需要工具：
npm install concurrently --save 这个可以同时执行多个命令
compressing 用于压缩
