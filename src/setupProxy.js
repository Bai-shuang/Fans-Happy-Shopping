// const proxy =   require("http-proxy-middleware");

// module.exports =(app) =>{
//     app.use(proxy("/index.php?r=nine"),{
//         target:"http://www.0quan8.com",
//         changeOrigin:true,
//     })
// }

const proxy = require("http-proxy-middleware");

module.exports = (app)=>{
    app.use(proxy("/index.php?r=nine",{
        target:"http://www.0quan8.com",
        changeOrigin:true,
    }))
}