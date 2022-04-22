const mongoose = require('mongoose');

mongoose.connect(
    process.env.NODE_ENV === 'development'? process.env.localDB: process.env.prodDB,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }
).then(()=>{
    if (process.env.NODE_ENV === 'development')       
        console.log(`connected to mongodb on dev cluster: ...`);
});
