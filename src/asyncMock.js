const products = [
    {
        id:'1',
        name: 'Rio de Janeiro',
        price: '25000',
        category: 'Beach',
        img: 'https://www.lanacion.com.ar/resizer/Wsg9m5c1-qze5Dw52Sgp0iWF4FU=/1920x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/2FVD7UD2VJE2JI6IPCHRCKX7RA.jpg',
        description: 'Detalles Rio de Janeiro'
    },
    {
        id:'2',
        name: 'Barcelona',
        price: '32000',
        category: 'City',
        img: 'https://cdn.turkishairlines.com/m/7d3da51b70a8575e/original/Travel-Guide-of-Barcelona-via-Turkish-Airlines.jpg',
        description: 'Detalles Barcelona'
    },
    {
        id:'3',
        name: 'Paris',
        price: '40000',
        category: 'City',
        img: 'https://media.cntraveler.com/photos/5d8cf7d5db6acf000833e6cc/master/pass/Eiffel-Tower_GettyImages-1060266626.jpg',
        description: 'Detalles Paris'
    }
]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

