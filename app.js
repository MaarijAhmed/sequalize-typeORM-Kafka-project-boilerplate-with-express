const { DataTypes } = require("sequelize");
const sequelize = require("./src/config/seq-config");

const country = sequelize.define('country', {
    countryName : {
        type : DataTypes.STRING,
        unique : true
    },
   
})

const capital = sequelize.define('capital', {
    capitalName : {
        type : DataTypes.STRING,
        unique : true
    },
    countryId : {
        type : DataTypes.INTEGER,
        unique : true
    }
})


country.hasOne(capital)

let Country;
let Capital;

// sequelize.sync({alter : true}).then(async() => {
//     return capital.findOne({
//         where : {
//             capitalName : "Tokyo"
//         }
//     }).then(async(res) => {
//         Capital = res
//         return country.findOne({
//             where : {
//                 countryName : "Japan"
//             }
//         }).then(async(res) => {
//             Country = res;
//             await Country.setCapital(Capital)
//         }).catch((err) => {
//             console.log(err)
//         })
//     }).catch((err) => {
//         console.log(err)
//     })
// }).catch((err) => {
//     console.log(err)
// })





// let capitalCityId;

// sequelize.sync({alter : true}).then((res) => {
//     return capital.findOne({
//         capitalName : "Delhi"
//     }).then((res) => {
//         capitalCityId = res.countryId;
//         return country.findByPk(capitalCityId).then((res) => {
//             console.log(res)
//         })
//         // return country.findOne({
//         //     id : capitalCityId
//         // }).then((res) => {
//         //     console.log(res)
//         // })
//     }).then((res))
// })




// let countryId;
// sequelize.sync({alter : true}).then(() => {
//     return country.findOne({
//         where : {
//             countryName : "India"
//         }
//     }).then((res) => {
//         countryId = res.id;
//         return capital.findOne({
//             where : {
//                 countryId : countryId
//             }
//         }).then((res) => {
//             console.log(res)
//         }).catch((err) => {
//             console.log(err)
//         })
//     }).catch((err) => {
//         console.log(err)
//     })
// })



















// sequelize.sync({alter : true})
// .then(async() => {
//     await capital.findOne({where : {capitalName : "New York"}}).then((res) => {
//         Capital = res;
//         return country.findOne({
//             where : {
//                 countryName : "USA"
//             }
//         }).then(async(res) => {
//             Country = res;
//             await Country.setCapital(Capital)
//         })
//     }).catch((err) => {
//         console.log(err)
//     })
// })

capital.belongsTo(country, {
    foreignKey : {
        name : "countryId",
        type : DataTypes.STRING
    }
})

// sequelize.sync({alter : true}).then(async() => {
//    return country.findOne({
//     where : {
//         countryName : "Pakistan"
//     }
//    }).then((res) => {
//     Country = res;
//     let countryId
//     return Country.getCapital().then((res) => {
//         countryId = res.countryId;
//         return country.findOne({
//             id : countryId
//         }).then((res) => {
//             console.log(res)
//         })
//     })
//    })
    
// }).catch((err) => {
//     console.log(err)
// })

