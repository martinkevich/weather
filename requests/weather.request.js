const rp = require('request-promise')

module.exports = {
    request: async function (city = '') {
        if (!city) {
            return "Заполните поле"
        }
        const KEY = '7605b4e8696f1d6b8361f35f698a8477'
        const uri = 'http://api.openweathermap.org/data/2.5/weather'
        const options = {
            uri,
            qs: {
                appid: KEY,
                q: city
            },
            json: true
        }
        try {
        const response = await rp(options)
        temperature = (response.main.temp - 273.15).toFixed(0)
            return temperature
        }
        catch(error){
            return 'Город не найден'
        }

    },
}