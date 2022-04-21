var config = {
    style: 'mapbox://styles/ead2200/cl1p9dy42000114qrg2q9w2n1',
    accessToken: 'pk.eyJ1IjoiZWFkMjIwMCIsImEiOiJja3M2ZTIzcmIwOTg5MndwNXM5ODZ5d2J3In0.LQXO-PEblZkmvFSlZpSS1w',
    showMarkers: false,
    theme: 'light',
    title: '',
    subtitle: '',
    byline: '',
    footer: '',
    chapters: [
        {
            id: 'chapterA',
            alignment: 'right',
            title: '7 PRISON TOWNS',
            image: '',
            description: 'Chateaugay<br>Chateaugay Correctional<br><br>Beacon<br>Beacon Correctional<br><br>Wilton<br>Mount McGregor Correctional<br><br>Kingston<br>Motels<br><br>Watertown<br>Watertown Correctional<br><br>Dannemora<br>Clinton Annex at Clinton Correctional<br><br>Rome<br>Mohawk Correctional',
            location: {
                center: [-74.076,42.793],
                zoom: 6.5,
                pitch: 0,
                bearing: 0.00
            },
            onChapterEnter: [
                {layer: 'poi-label', opacity: 0 },
                {layer: 'road', opacity: 0 },
                {layer: 'building', opacity:1 }
            ],
            onChapterExit: [
              
            ]
        },
        {
            id: 'chapter1A_Sanober',
            alignment: 'right',
            title: 'Reimagining The Justice System and Infrastructures of Harm: A Toolkit',
            image: './images/placeholder.jpg',
            description: 'What would our towns, cities and institutions look like if we redirected the justice system away from punitive measures and towards restorative measures?',
            location: {
                center: [-74.076,42.793],
                zoom: 6.5,
                pitch: 0,
                bearing: 0.00
            },
            onChapterEnter: [
                {layer: 'poi-label', opacity: 0 },
                {layer: 'road', opacity: 0 },
                {layer: 'building', opacity:1 }
            ],
            onChapterExit: [
              
            ]
        },
        {
            id: 'chapter1',
            alignment: 'right',
            title: 'CHATEAUGAY',
            image: './images/Chateaugay.jpeg',
            description: 'Town Population: 1,595<br>Historical Industry: Manufacturing<br>Prison Name: Chateaugay Correctional<br>Prison Years: 1990-2014<br>Prison Capacity: 195',
            location: {
                center: [-74.063,44.932],
                zoom: 13,
                pitch: 0,
                bearing: 0.00
            },
            onChapterEnter: [
                {layer: 'poi-label', opacity: 0 },
                {layer: 'road', opacity: 0 },
                {layer: 'building', opacity:1 }
            ],
            onChapterExit: [
              
            ]
        },
        {
            id: 'chapter1A',
            alignment: 'right',
            title: 'PROJECT NAME',
            image: './images/placeholder.jpg',
            description: 'project discription',
            location: {
                center: [-74.063,44.932],
                zoom: 13,
                pitch: 0,
                bearing: 0.00
            },
            onChapterEnter: [
                {layer: 'poi-label', opacity: 0 },
                {layer: 'road', opacity: 0 },
                {layer: 'building', opacity:1 }
            ],
            onChapterExit: [
              
            ]
        },
        {
            id: 'chapter2',
            alignment: 'right',
            title: 'BEACON',
            image: './images/Beacon.jpeg',
            description: 'Town Population: 13,630<br>Historical Industry: Manufacturing<br>Prison Name: Beacon Correctional<br>Prison Years: 1932-2013<br>Prison Capacity: 161',
            location: {
                center: [-73.962,41.506],
                zoom: 13,
                pitch: 0,
                bearing: 0.00
            },
            onChapterEnter: [
                {layer: 'poi-label', opacity: 1 },
                {layer: 'road', opacity: 1 },
                {layer: 'building', opacity: 0 }
            ],
            onChapterExit: [
              
            ]
        },
        {
            id: 'chapter2A_Tristan',
            alignment: 'right',
            title: 'Energy Park',
            image: './images/Tristan_Beacon.jpg',
            description: 'From a declining prison system to a burgeoning clean energy system, from exostruture to infrastructure, a new picture of the future awaits us, one that may be bathed in “sunshine”.',
            location: {
                center: [-73.962,41.506],
                zoom: 13,
                pitch: 0,
                bearing: 0.00
            },
            onChapterEnter: [
                {layer: 'poi-label', opacity: 1 },
                {layer: 'road', opacity: 1 },
                {layer: 'building', opacity: 0 }
            ],
            onChapterExit: [
              
            ]
        },
        {
            id: 'chapter3',
            alignment: 'right',
            title: 'WILTON',
            image: './images/Wilton.jpeg',
            description: 'Town Population: 16,990<br>Historical Industry: Mining<br>Prison Name: Mount McGregor Correctional<br>Prison Years: 1976-2014<br>Prison Capacity: 695',
            location: {
                center: [-73.726,43.170],
                zoom: 13,
                pitch: 0,
                bearing: 0.00
            },
            onChapterEnter: [
                {layer: 'poi-label', opacity: 0 },
                {layer: 'road', opacity: 1 },
                {layer: 'building', opacity: 0 }
            ],
            onChapterExit: [
              
            ]
        },
        {
            id: 'chapter3A_Junho',
            alignment: 'right',
            title: 'PROJECT NAME',
            image: './images/Junho_wilton.jpeg',
            description: 'Replacing the exploitative prison system of rural New York, the cannabis campus, which consists of a retrofitted farm, tourism laboratory, and sensuous dispensary will change the old exploitative relationship between the economic driver and the related actors to a more sustainable and fun one.',
            location: {
                center: [-73.726,43.170],
                zoom: 13,
                pitch: 0,
                bearing: 0.00
            },
            onChapterEnter: [
                {layer: 'poi-label', opacity: 0 },
                {layer: 'road', opacity: 1 },
                {layer: 'building', opacity: 0 }
            ],
            onChapterExit: [
              
            ]
        },
        {
            id: 'chapter3B_Ethan',
            alignment: 'right',
            title: 'PROJECT NAME',
            image: './images/Ethan_Wilton.jpeg',
            description: 'Through the introduction of a sustainable colocation edge data center, Wilton will have the proper digital infrastructure and broadband access to instigate an economic renaissance that will break down the extractive nature of the town’s sprawling cul-de-sac neighborhoods and imposing distribution centers.',
            location: {
                center: [-73.726,43.170],
                zoom: 13,
                pitch: 0,
                bearing: 0.00
            },
            onChapterEnter: [
                {layer: 'poi-label', opacity: 0 },
                {layer: 'road', opacity: 1 },
                {layer: 'building', opacity: 0 }
            ],
            onChapterExit: [
              
            ]
        },
        {
            id: 'chapter4',
            alignment: 'right',
            title: 'KINGSTON',
            image: './images/Kingston.jpeg',
            description: 'Town Population: 13,630<br>Historical Industry: Manufacturing<br>Prison Name: Beacon Correctional<br>Prison Years: 1932-2013<br>Prison Capacity: 161',
            location: {
                center: [-73.986,41.927],
                zoom: 13,
                pitch: 0,
                bearing: 0.00
            },
            onChapterEnter: [
                {layer: 'poi-label', opacity: 0 },
                {layer: 'road', opacity: 1 },
                {layer: 'building', opacity: 0 }
            ],
            onChapterExit: [
              
            ]
        },
        {
            id: 'chapter4A_Shulong',
            alignment: 'right',
            title: 'Connecting the motels',
            image: './images/Shulong_Kingston.png',
            description: 'What if we help the residents living in the 14 motels in Ulster county establish a de-carceral alternative to connect with the farm and support themselves?',
            location: {
                center: [-73.986,41.927],
                zoom: 13,
                pitch: 0,
                bearing: 0.00
             },
                onChapterEnter: [
                {layer: 'poi-label', opacity: 0 },
                {layer: 'road', opacity: 1 },
                {layer: 'building', opacity: 0 }
            ],
            onChapterExit: [
            
            ]
         },
         {
            id: 'chapter5',
            alignment: 'right',
            title: 'WATERTOWN',
            image: './images/Watertown.jpeg',
            description: 'Town Population: 13,630<br>Historical Industry: Manufacturing<br>Prison Name: Beacon Correctional<br>Prison Years: 1932-2013<br>Prison Capacity: 161',
            location: {
                center: [-75.894,43.956],
                zoom: 13,
                pitch: 0,
                bearing: 0.00
            },
            onChapterEnter: [
                {layer: 'poi-label', opacity: 0 },
                {layer: 'road', opacity: 1 },
                {layer: 'building', opacity: 0 }
            ],
            onChapterExit: [
              
            ]
        },
        {
            id: 'chapter5a_Leon',
            alignment: 'right',
            title: 'TITLE',
            image: './images/placeholder.jpg',
            description: 'project description',
            location: {
                center: [-75.894,43.956],
                zoom: 13,
                pitch: 0,
                bearing: 0.00
            },
            onChapterEnter: [
                {layer: 'poi-label', opacity: 0 },
                {layer: 'road', opacity: 1 },
                {layer: 'building', opacity: 0 }
            ],
            onChapterExit: [
              
            ]
        },
        {
            id: 'chapter6',
            alignment: 'right',
            title: 'DANNEMORA',
            image: './images/Dannemora.jpeg',
            description: 'Town Population: 13,630<br>Historical Industry: Manufacturing<br>Prison Name: Beacon Correctional<br>Prison Years: 1932-2013<br>Prison Capacity: 161',
            location: {
                center: [-73.655,44.706],
                zoom: 13,
                pitch: 0,
                bearing: 0.00
            },
            onChapterEnter: [
                {layer: 'poi-label', opacity: 0 },
                {layer: 'road', opacity: 1 },
                {layer: 'building', opacity: 0 }
            ],
            onChapterExit: [
              
            ]
        },
        {
            id: 'chapter6A_Hein',
            alignment: 'right',
            title: 'Towards the Slowest Landfilling',
            image: './images/Hein_Dannemora.jpg',
            description: 'Prisons and Landfills are two bad neighbors often located nearby. This project turns the decline of the prison industry to the opportunity to have a less extractive, more sustainable industry by intercepting resources from landfills.',
            location: {
                center: [-73.655,44.706],
                zoom: 13,
                pitch: 0,
                bearing: 0.00
            },
            onChapterEnter: [
                {layer: 'poi-label', opacity: 0 },
                {layer: 'road', opacity: 1 },
                {layer: 'building', opacity: 0 }
            ],
            onChapterExit: [
              
            ]
        },
         {
            id: 'chapter7',
            alignment: 'right',
            title: 'ROME',
            image: './images/Rome.jpeg',
            description: 'Town Population: 13,630<br>Historical Industry: Manufacturing<br>Prison Name: Beacon Correctional<br>Prison Years: 1932-2013<br>Prison Capacity: 161',
            location: {
                center: [-75.464,43.212],
                zoom: 13,
                pitch: 0,
                bearing: 0.00
            },
            onChapterEnter: [
                {layer: 'poi-label', opacity: 0 },
                {layer: 'road', opacity: 1 },
                {layer: 'building', opacity: 0 }
            ],
            onChapterExit: [
              
            ]
        },
        {
            id: 'chapter7A_Yani',
            alignment: 'right',
            title: 'RPROJECT TITLE',
            image: './images/placeholder.jpg',
            description: 'project description',
            location: {
                center: [-75.464,43.212],
                zoom: 13,
                pitch: 0,
                bearing: 0.00
            },
            onChapterEnter: [
                {layer: 'poi-label', opacity: 0 },
                {layer: 'road', opacity: 1 },
                {layer: 'building', opacity: 0 }
            ],
            onChapterExit: [
              
            ]
        },
    ]
};
