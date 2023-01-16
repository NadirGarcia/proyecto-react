const products = [
    {
        id:'1',
        name: 'Rio de Janeiro',
        price: '25000',
        category: 'beach',
        img: 'https://www.lanacion.com.ar/resizer/Wsg9m5c1-qze5Dw52Sgp0iWF4FU=/1920x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/2FVD7UD2VJE2JI6IPCHRCKX7RA.jpg',
        description: 'Disfruta de los increíbles paisajes, los famosos monumentos y la majestuosa naturaleza que hacen de Rio la joya de Brasil y le han otorgado el título de Ciudad Maravillosa.',
        stock: 11
    },
    {
        id:'2',
        name: 'Barcelona',
        price: '32000',
        category: 'city',
        img: 'https://cdn.turkishairlines.com/m/7d3da51b70a8575e/original/Travel-Guide-of-Barcelona-via-Turkish-Airlines.jpg',
        description: 'Detalles Barcelona',
        stock: 5
    },
    {
        id:'3',
        name: 'Paris',
        price: '40000',
        category: 'city',
        img: 'https://media.cntraveler.com/photos/5d8cf7d5db6acf000833e6cc/master/pass/Eiffel-Tower_GettyImages-1060266626.jpg',
        description: 'Detalles Paris',
        stock: 7
    }
]

export const getProducts = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export const getProductsById = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        })
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise(resolve =>
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 2000)
    )
}
