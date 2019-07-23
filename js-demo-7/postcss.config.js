module.exports={
    plugins:[ 
        require('autoprefixer')({
            browsers: ["last 5 versions"]
        })
    ]
}
//这样不会给加前缀
// module.exports={
//     plugins:[require('autoprefixer')]
// }
