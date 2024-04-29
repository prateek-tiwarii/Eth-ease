const mongoose = require('mongoose')

const ConnectToDB = () => {
    mongoose.connect('mongodb+srv://tiwariprateek1976:yBA39VPL47jORApL@cluster0.nnm0doi.mongodb.net/').then(
        () => {console.log('DB Connected')}
    ).catch((err) => {
        console.log(err)
    })
}

module.exports = ConnectToDB


