const data = [
    {
        name: 'youtube', 
        image_url: 'https://i.imgur.com/w5AOsXU.jpg'
    },
    {
        name: 'bango',
        image_url: 'https://i.imgur.com/6wuTmGK.jpg'
    },
    {
        name: 'starbuck',
        image_url: 'https://i.imgur.com/77xjxGw.png'
    },
    {
        name: 'pizzahut',
        image_url: 'https://i.imgur.com/o1MAxhO.jpg'
    },
    {
        name: 'garuda indonesia',
        image_url: 'https://i.imgur.com/PFBribo.png'
    },
    {
        name: 'bni',
        image_url: 'https://i.imgur.com/XuFCs62.jpg'
    },
    {
        name: 'renault',
        image_url: 'https://i.imgur.com/mz0FtIE.jpg'
    },
    {
        name: 'dunkindonuts',
        image_url: 'https://i.imgur.com/h4e6orG.jpg'
    },
    {
        name: 'hyundai',
        image_url: 'https://i.imgur.com/SdfSxRY.jpg'
    },
    { 
        name: 'toyota',
        image_url: 'https://i.imgur.com/4vVL9Pt.jpg'
    },
    {
        name: 'honda',
        image_url: 'https://i.imgur.com/Rijhgi6.jpg'
    },
    {
        name: 'kfc', 
        image_url: 'https://i.imgur.com/dlzutof.png'
    },
    {
        name: 'mcd',
        image_url: 'https://i.imgur.com/GYRhgkk.jpg'
    },
    {
        name: 'pertamina',
        image_url: 'https://i.imgur.com/zuyZAkW.jpg'
    },
    {
        name: 'apple',
        image_url: 'https://i.imgur.com/9m9vnCK.jpg'
    },
    {
        name: 'batman',
        image_url: 'https://i.imgur.com/eMgurW5.png'
    },
    {
        name: 'yahoo',
        image_url: 'https://i.imgur.com/FXICfV5.jpg'
    },
    {
        name: 'twitter',
        image_url: 'https://i.imgur.com/0qbumjL.png'
    },
    {
        name: 'mitsubishi',
        image_url: 'https://i.imgur.com/CLNMnxl.jpg'
    },
    {
        name: 'telegram',
        image_url: 'https://i.imgur.com/I5BMADi.jpg'
    },
    
    
    
    

]


function randomLogo () {
    let random = Math.floor(Math.random() * (data.length-1))
    console.log(data[random])
    return data[random]
}

module.exports = randomLogo