const path=require('path')
const CracoLessPlugin = require('craco-less')

const resolve=pathName=>path.resolve(__dirname,pathName)

module.exports={
    //less
    plugins:[
        {
            plugin:CracoLessPlugin
        }
    ],
    //webpack
    webpack:{
        alias:{
            "@":resolve("src"),
            "assets":resolve("src/assets"),
            "base-ui":resolve("src/base-ui"),
            "components":resolve("src/components"),
            "hooks":resolve("src/hooks"),
            "router":resolve("src/router"),
            "service":resolve("src/service"),
            "store":resolve("src/store"),
            "utils":resolve("src/utils"),
            "views":resolve("src/views")
        }
    }
}