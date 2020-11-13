const data = [
    {
        name: 'youtube', 
        imager_url: 'https://i.imgur.com/w5AOsXU.jpg'
    },
    {
        name: 'bango',
        imager_url: 'https://i.imgur.com/6wuTmGK.jpg'
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
    }
]


function randomLogo () {
    let random = Math.floor(Math.random() * (data.length-1))
    console.log(data[random])
    return data[random]
}

