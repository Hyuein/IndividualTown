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
            image: 'Chateaugay<br>Beacon<br>Wilton<br>Kingston<br>Watertown<br>Dannemora<br>Rome',
            description: '',
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
            id: 'chapterA',
            alignment: 'right',
            title: 'PROJECT SANI',
            image: './images/placeholder.jpg',
            description: 'project description',
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
            id: 'chapter2A',
            alignment: 'right',
            title: 'PROJECT NAME',
            image: './images/Tristan_Beacon.jpg',
            description: 'project description',
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
            id: 'chapter3A',
            alignment: 'right',
            title: 'PROJECT NAME',
            image: './images/Junho_wilton.jpeg',
            description: 'project description',
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
            id: 'chapter3B',
            alignment: 'right',
            title: 'PROJECT NAME',
            image: './images/placeholder.jpg',
            description: 'project description',
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
            description: 'uam erat volutpat. Sed ullamcorper convallis eros ut auctor. Cras vel iaculis ligula, et vestibulum metus.',
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
            id: 'chapter4A',
            alignment: 'right',
            title: 'PROJECT NAME',
            image: './images/placeholder.jpg',
            description: 'uam erat volutpat. Sed ullamcorper convallis eros ut auctor. Cras vel iaculis ligula, et vestibulum metus.',
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
            description: 'uam erat volutpat. Sed ullamcorper convallis eros ut auctor. Cras vel iaculis ligula, et vestibulum metus.',
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
            id: 'chapter5a',
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
            description: 'uam erat volutpat. Sed ullamcorper convallis eros ut auctor. Cras vel iaculis ligula, et vestibulum metus.',
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
            id: 'chapter6A',
            alignment: 'right',
            title: 'PROJECT TITLE',
            image: './images/placeholder.jpg',
            description: 'project description',
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
            description: 'uam erat volutpat. Sed ullamcorper convallis eros ut auctor. Cras vel iaculis ligula, et vestibulum metus.',
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
            id: 'chapter7A',
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
