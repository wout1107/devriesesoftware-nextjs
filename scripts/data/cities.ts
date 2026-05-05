export type CityData = {
    slug: string
    name: string
    province: 'west-vlaanderen' | 'oost-vlaanderen' | 'antwerpen' | 'vlaams-brabant' | 'limburg'
    population: number
    lat: number
    lng: number
    neighborSlugs: string[]
    distanceFromKanegem: number
}

export const cities: CityData[] = [
    // West-Vlaanderen
    { slug: 'tielt', name: 'Tielt', province: 'west-vlaanderen', population: 20800, lat: 50.997, lng: 3.323, neighborSlugs: ['izegem', 'roeselare', 'waregem', 'deinze', 'brugge'], distanceFromKanegem: 5 },
    { slug: 'brugge', name: 'Brugge', province: 'west-vlaanderen', population: 118000, lat: 51.209, lng: 3.224, neighborSlugs: ['oostende', 'knokke-heist', 'tielt', 'roeselare', 'gent'], distanceFromKanegem: 30 },
    { slug: 'roeselare', name: 'Roeselare', province: 'west-vlaanderen', population: 65000, lat: 50.946, lng: 3.123, neighborSlugs: ['izegem', 'tielt', 'kortrijk', 'ieper', 'wevelgem'], distanceFromKanegem: 18 },
    { slug: 'kortrijk', name: 'Kortrijk', province: 'west-vlaanderen', population: 78000, lat: 50.828, lng: 3.265, neighborSlugs: ['waregem', 'wevelgem', 'roeselare', 'ieper', 'oudenaarde'], distanceFromKanegem: 28 },
    { slug: 'oostende', name: 'Oostende', province: 'west-vlaanderen', population: 72000, lat: 51.231, lng: 2.911, neighborSlugs: ['brugge', 'knokke-heist', 'ieper', 'roeselare', 'tielt'], distanceFromKanegem: 50 },
    { slug: 'ieper', name: 'Ieper', province: 'west-vlaanderen', population: 35000, lat: 50.851, lng: 2.886, neighborSlugs: ['kortrijk', 'roeselare', 'wevelgem', 'oostende', 'tielt'], distanceFromKanegem: 45 },
    { slug: 'waregem', name: 'Waregem', province: 'west-vlaanderen', population: 38000, lat: 50.890, lng: 3.426, neighborSlugs: ['kortrijk', 'tielt', 'deinze', 'oudenaarde', 'wevelgem'], distanceFromKanegem: 22 },
    { slug: 'izegem', name: 'Izegem', province: 'west-vlaanderen', population: 28000, lat: 50.918, lng: 3.213, neighborSlugs: ['roeselare', 'tielt', 'kortrijk', 'wevelgem', 'waregem'], distanceFromKanegem: 12 },
    { slug: 'knokke-heist', name: 'Knokke-Heist', province: 'west-vlaanderen', population: 33000, lat: 51.346, lng: 3.292, neighborSlugs: ['brugge', 'oostende', 'eeklo', 'tielt', 'gent'], distanceFromKanegem: 50 },
    { slug: 'wevelgem', name: 'Wevelgem', province: 'west-vlaanderen', population: 31500, lat: 50.806, lng: 3.176, neighborSlugs: ['kortrijk', 'izegem', 'roeselare', 'ieper', 'waregem'], distanceFromKanegem: 30 },

    // Oost-Vlaanderen
    { slug: 'gent', name: 'Gent', province: 'oost-vlaanderen', population: 263000, lat: 51.054, lng: 3.717, neighborSlugs: ['deinze', 'eeklo', 'lokeren', 'aalst', 'oudenaarde'], distanceFromKanegem: 40 },
    { slug: 'aalst', name: 'Aalst', province: 'oost-vlaanderen', population: 87000, lat: 50.937, lng: 4.040, neighborSlugs: ['gent', 'dendermonde', 'geraardsbergen', 'oudenaarde', 'lokeren'], distanceFromKanegem: 65 },
    { slug: 'sint-niklaas', name: 'Sint-Niklaas', province: 'oost-vlaanderen', population: 81000, lat: 51.165, lng: 4.144, neighborSlugs: ['lokeren', 'dendermonde', 'antwerpen', 'gent', 'aalst'], distanceFromKanegem: 90 },
    { slug: 'dendermonde', name: 'Dendermonde', province: 'oost-vlaanderen', population: 47000, lat: 51.029, lng: 4.103, neighborSlugs: ['aalst', 'lokeren', 'sint-niklaas', 'gent', 'mechelen'], distanceFromKanegem: 75 },
    { slug: 'lokeren', name: 'Lokeren', province: 'oost-vlaanderen', population: 42000, lat: 51.103, lng: 3.989, neighborSlugs: ['sint-niklaas', 'dendermonde', 'gent', 'aalst', 'antwerpen'], distanceFromKanegem: 80 },
    { slug: 'deinze', name: 'Deinze', province: 'oost-vlaanderen', population: 44000, lat: 50.981, lng: 3.531, neighborSlugs: ['gent', 'tielt', 'waregem', 'oudenaarde', 'eeklo'], distanceFromKanegem: 25 },
    { slug: 'eeklo', name: 'Eeklo', province: 'oost-vlaanderen', population: 21000, lat: 51.183, lng: 3.563, neighborSlugs: ['gent', 'brugge', 'knokke-heist', 'deinze', 'lokeren'], distanceFromKanegem: 50 },
    { slug: 'oudenaarde', name: 'Oudenaarde', province: 'oost-vlaanderen', population: 31000, lat: 50.846, lng: 3.601, neighborSlugs: ['ronse', 'geraardsbergen', 'deinze', 'waregem', 'gent'], distanceFromKanegem: 50 },
    { slug: 'geraardsbergen', name: 'Geraardsbergen', province: 'oost-vlaanderen', population: 33000, lat: 50.770, lng: 3.876, neighborSlugs: ['ronse', 'oudenaarde', 'aalst', 'halle', 'kortrijk'], distanceFromKanegem: 75 },
    { slug: 'ronse', name: 'Ronse', province: 'oost-vlaanderen', population: 27000, lat: 50.745, lng: 3.601, neighborSlugs: ['oudenaarde', 'geraardsbergen', 'kortrijk', 'waregem', 'deinze'], distanceFromKanegem: 60 },

    // Antwerpen
    { slug: 'antwerpen', name: 'Antwerpen', province: 'antwerpen', population: 530000, lat: 51.220, lng: 4.402, neighborSlugs: ['mechelen', 'mortsel', 'lier', 'sint-niklaas', 'turnhout'], distanceFromKanegem: 110 },
    { slug: 'mechelen', name: 'Mechelen', province: 'antwerpen', population: 87000, lat: 51.028, lng: 4.480, neighborSlugs: ['antwerpen', 'lier', 'vilvoorde', 'leuven', 'dendermonde'], distanceFromKanegem: 100 },
    { slug: 'turnhout', name: 'Turnhout', province: 'antwerpen', population: 46000, lat: 51.323, lng: 4.945, neighborSlugs: ['antwerpen', 'lier', 'mechelen', 'hasselt', 'genk'], distanceFromKanegem: 145 },
    { slug: 'mortsel', name: 'Mortsel', province: 'antwerpen', population: 26000, lat: 51.169, lng: 4.453, neighborSlugs: ['antwerpen', 'lier', 'mechelen', 'turnhout', 'vilvoorde'], distanceFromKanegem: 105 },
    { slug: 'lier', name: 'Lier', province: 'antwerpen', population: 36000, lat: 51.131, lng: 4.567, neighborSlugs: ['antwerpen', 'mechelen', 'mortsel', 'turnhout', 'leuven'], distanceFromKanegem: 110 },

    // Vlaams-Brabant
    { slug: 'leuven', name: 'Leuven', province: 'vlaams-brabant', population: 102000, lat: 50.879, lng: 4.700, neighborSlugs: ['mechelen', 'vilvoorde', 'lier', 'halle', 'hasselt'], distanceFromKanegem: 110 },
    { slug: 'vilvoorde', name: 'Vilvoorde', province: 'vlaams-brabant', population: 47000, lat: 50.928, lng: 4.426, neighborSlugs: ['mechelen', 'leuven', 'halle', 'antwerpen', 'aalst'], distanceFromKanegem: 95 },
    { slug: 'halle', name: 'Halle', province: 'vlaams-brabant', population: 41000, lat: 50.733, lng: 4.236, neighborSlugs: ['vilvoorde', 'geraardsbergen', 'leuven', 'aalst', 'mechelen'], distanceFromKanegem: 90 },

    // Limburg
    { slug: 'hasselt', name: 'Hasselt', province: 'limburg', population: 79000, lat: 50.931, lng: 5.337, neighborSlugs: ['genk', 'leuven', 'turnhout', 'mechelen', 'lier'], distanceFromKanegem: 150 },
    { slug: 'genk', name: 'Genk', province: 'limburg', population: 66000, lat: 50.965, lng: 5.500, neighborSlugs: ['hasselt', 'leuven', 'turnhout', 'mechelen', 'lier'], distanceFromKanegem: 165 },
]
