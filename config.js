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
            description: 'NEW YORK STATE<br>Reimagining the Justice System at Grassroots Level<br><br>CHATEAUGAY: Chateaugay Correctional<br>A De-carcenated Alternative<br><br>BEACON: Downstate correctional facility<br>Energy Park<br><br>WILTON: Mount McGregor Correctional<br>Young, Wild & Free<br>Ethan Project<br><br>KINGSTON: 6 Motels<br>Re-Connecting the Motel<br><br>WATERTOWN: Watertown Correctional<br>Watertown´s Military-Industrial Dystopia<br><br>DANNEMORA: Clinton Annex at Clinton Correctional<br>Towards the Slowest Landfilling<br><br>ROME: Mohawk Correctional<br>Yani Project',
            location: {
                center: [-74.076,42.793],
                zoom: 6.5,
                pitch: 0,
                bearing: 0.00
            },
            onChapterEnter: [
                {layer: 'POI Text', opacity: 0 },
                {layer: 'Prison Name', opacity: 0 },
                {layer: 'individualtown-building', opacity: 0 },
                {layer: 'individualtown-road', opacity: 0 },
                {layer: 'individualtown-rail', opacity: 0 },
                {layer: 'poi-tristan', opacity: 0 },
                {layer: 'poi-tristan outline', opacity: 0 },
                {layer: 'poi-tristan text', opacity: 0 },
                {layer: 'pointsofinterest-outline', opacity: 0 },
                {layer: 'pointsofinterest-fill', opacity: 0 },
                {layer: 'pointesofinterest-rome-outline', opacity: 0 },
                {layer: 'pointesofinterest-rome-fill', opacity: 0 }
            ],
            onChapterExit: [
              
            ]
        },
        {
            id: 'chapter1A_Sanober',
            alignment: 'right',
            title: 'Reimagining the Justice System at Grassroots Level',
            image: './images/placeholder.jpg',
            description: 'Sanober Khan<br><br>What would it mean for our towns, cities and institutions if we redirected the justice system away from punitive measures and towards restorative measures?',
            location: {
                center: [-74.076,42.793],
                zoom: 6.5,
                pitch: 0,
                bearing: 0.00
            },
            onChapterEnter: [
                {layer: 'POI Text', opacity: 0 },
                {layer: 'Prison Name', opacity: 0 },
                {layer: 'individualtown-building', opacity: 0 },
                {layer: 'individualtown-road', opacity: 0 },
                {layer: 'individualtown-rail', opacity: 0 },
                {layer: 'poi-tristan', opacity: 0 },
                {layer: 'poi-tristan outline', opacity: 0 },
                {layer: 'poi-tristan text', opacity: 0 },
                {layer: 'pointsofinterest-outline', opacity: 0 },
                {layer: 'pointsofinterest-fill', opacity: 0 },
                {layer: 'pointesofinterest-rome-outline', opacity: 0 },
                {layer: 'pointesofinterest-rome-fill', opacity: 0 }
            ],
            onChapterExit: [
              
            ]
        },
        {
            id: 'chapter1',
            alignment: 'right',
            title: 'CHATEAUGAY',
            image: './images/Chateaugay.jpeg',
            description: 'Town Population: 2,155<br>Historical Industry: Agriculture<br>Prison Name:  Chateaugay corretional facility<br>Prison Years: 1990-2014<br>Prison Capacity: 1799',
            location: {
                center: [-74.042, 44.927],
                zoom: 13,
                pitch: 0,
                bearing: 0.00
            },
            onChapterEnter: [
                {layer: 'POI Text', opacity: 1 },
                {layer: 'Prison Name', opacity: 1 },
                {layer: 'individualtown-building', opacity: 1 },
                {layer: 'individualtown-road', opacity: 1 },
                {layer: 'individualtown-rail', opacity: 1 },
                {layer: 'pointesofinterest-rome-outline', opacity: 0.5 },
                {layer: 'poi-tristan', opacity: 0.5 },
                {layer: 'poi-tristan outline', opacity: 1 },
                {layer: 'poi-tristan text', opacity: 1 },
                {layer: 'pointsofinterest-outline', opacity: 1 },
                {layer: 'pointsofinterest-fill', opacity: 0.5 },
            ],
            onChapterExit: [
              
            ]
        },
        {
            id: 'chapter1A_Shan',
            alignment: 'right',
            title: 'A De-carcenated Alternative',
            image: './images/placeholder.jpg',
            description: 'Shan Li<br><br>The project focuses on how to create a dairy farm community that inhabaits human and happy cows-An alternative local economy that replacing the prison industry and decarcenated the cows from fenced environment and enclosed barns.',
            location: {
                center: [-74.042, 44.927],
                zoom: 13,
                pitch: 0,
                bearing: 0.00
            },
            onChapterEnter: [
                {layer: 'POI Text', opacity: 1 },
                {layer: 'Prison Name', opacity: 1 },
                {layer: 'individualtown-building', opacity: 1 },
                {layer: 'individualtown-road', opacity: 1 },
                {layer: 'individualtown-rail', opacity: 1 },
                {layer: 'pointesofinterest-rome-outline', opacity: 0.5 },
                {layer: 'poi-tristan', opacity: 0.5 },
                {layer: 'poi-tristan outline', opacity: 1 },
                {layer: 'poi-tristan text', opacity: 1 },
                {layer: 'pointsofinterest-outline', opacity: 1 },
                {layer: 'pointsofinterest-fill', opacity: 0.5 },
            ],
            onChapterExit: [
              
            ]
        },
        {
            id: 'chapter2',
            alignment: 'right',
            title: 'BEACON',
            image: './images/Beacon.jpeg',
            description: 'Town Population: 14,571<br>Historical Industry: Manufacturing<br>Prison Name: Downstate correctional facility<br>Prison Years: 1979-2013<br>Prison Capacity: 1221',
            location: {
                center: [-73.919, 41.507],
                zoom: 13,
                pitch: 0,
                bearing: 0.00
            },
            onChapterEnter: [
                {layer: 'POI Text', opacity: 1 },
                {layer: 'individualtown-building', opacity: 1 },
                {layer: 'individualtown-road', opacity: 1 },
                {layer: 'individualtown-rail', opacity: 1 },
                {layer: 'pointesofinterest-rome-outline', opacity: 0.5 },
                {layer: 'poi-tristan', opacity: 0.5 },
                {layer: 'poi-tristan outline', opacity: 1 },
                {layer: 'poi-tristan text', opacity: 1 },
                {layer: 'pointsofinterest-outline', opacity: 1 },
                {layer: 'pointsofinterest-fill', opacity: 0.5 },
                {layer: 'Prison Name', opacity: 1 },
                {layer: 'prison-boundaries-outline', opacity: 1 },
            ],
            onChapterExit: [
              
            ]
        },
        {
            id: 'chapter2A_Tristan',
            alignment: 'right',
            title: 'Energy Park',
            image: './images/Tristan.jpg',
            description: 'Zhichen Gong<br><br>From a declining prison system to a burgeoning clean energy system, from exostruture to infrastructure, a new picture of the future awaits us, one that may be bathed in “sunshine”.',
            location: {
                center: [-73.919, 41.507],
                zoom: 13,
                pitch: 0,
                bearing: 0.00
            },
            onChapterEnter: [
                {layer: 'POI Text', opacity: 1 },
                {layer: 'individualtown-building', opacity: 1 },
                {layer: 'individualtown-road', opacity: 1 },
                {layer: 'individualtown-rail', opacity: 1 },
                {layer: 'pointesofinterest-rome-outline', opacity: 0.5 },
                {layer: 'poi-tristan', opacity: 0.5 },
                {layer: 'poi-tristan outline', opacity: 1 },
                {layer: 'poi-tristan text', opacity: 1 },
                {layer: 'pointsofinterest-outline', opacity: 1 },
                {layer: 'pointsofinterest-fill', opacity: 0.5 },
                {layer: 'Prison Name', opacity: 1 },
                {layer: 'prison-boundaries-outline', opacity: 1 },
            ],
            onChapterExit: [
              
            ]
        },
        {
            id: 'chapter3',
            alignment: 'right',
            title: 'WILTON',
            image: './images/Wilton.jpeg',
            description: 'Town Population: 18,397<br>Historical Industry: Mining, Resort<br>Prison Name: Mount McGregor Correctional Facility<br>Prison Years: 1976-2014<br>Prison Capacity: 695',
            location: {
                center: [-73.68, 43.190],
                zoom: 12.5,
                pitch: 0,
                bearing: 0.00
            },
            onChapterEnter: [
                {layer: 'POI Text', opacity: 1 },
                {layer: 'Prison Name', opacity: 1 },
                {layer: 'individualtown-building', opacity: 1 },
                {layer: 'individualtown-road', opacity: 1 },
                {layer: 'individualtown-rail', opacity: 1 },
                {layer: 'pointesofinterest-rome-outline', opacity: 0.5 },
                {layer: 'poi-tristan', opacity: 0.5 },
                {layer: 'poi-tristan outline', opacity: 1 },
                {layer: 'poi-tristan text', opacity: 1 },
                {layer: 'pointsofinterest-outline', opacity: 1 },
                {layer: 'pointsofinterest-fill', opacity: 0.5 },
                {layer: 'Prison Name', opacity: 1 },
                {layer: 'prison-boundaries-outline', opacity: 1 },
            ],
            onChapterExit: [
              
            ]
        },
        {
            id: 'chapter3A_Junho',
            alignment: 'right',
            title: 'Young, Wild & Free',
            image: './images/Junho_wilton.jpeg',
            description: 'Junho Lee<br><br>Replacing the exploitative prison system of rural New York, the cannabis campus, which consists of a retrofitted farm, tourism laboratory, and sensuous dispensary will transform the relationship between the economic driver and its related actors into a less extractive, more sustainable, and fun system.',
            location: {
                center: [-73.68, 43.190],
                zoom: 12.5,
                pitch: 0,
                bearing: 0.00
            },
            onChapterEnter: [
                {layer: 'POI Text', opacity: 1 },
                {layer: 'Prison Name', opacity: 1 },
                {layer: 'individualtown-building', opacity: 1 },
                {layer: 'individualtown-road', opacity: 1 },
                {layer: 'individualtown-rail', opacity: 1 },
                {layer: 'pointesofinterest-rome-outline', opacity: 0.5 },
                {layer: 'poi-tristan', opacity: 0.5 },
                {layer: 'poi-tristan outline', opacity: 1 },
                {layer: 'poi-tristan text', opacity: 1 },
                {layer: 'pointsofinterest-outline', opacity: 1 },
                {layer: 'pointsofinterest-fill', opacity: 0.5 },
            ],
            onChapterExit: [
              
            ]
        },
        {
            id: 'chapter3B_Ethan',
            alignment: 'right',
            title: 'PROJECT NAME',
            image: './images/Ethan_Wilton.jpeg',
            description: 'Ethan Davis<br><br>Through the introduction of a sustainable colocation edge data center, Wilton will have the proper digital infrastructure and broadband access to instigate an economic renaissance that will break down the extractive nature of the town’s sprawling cul-de-sac neighborhoods and imposing distribution centers.',
            location: {
                center: [-73.68, 43.190],
                zoom: 12.5,
                pitch: 0,
                bearing: 0.00
            },
            onChapterEnter: [
                {layer: 'POI Text', opacity: 1 },
                {layer: 'Prison Name', opacity: 1 },
                {layer: 'individualtown-building', opacity: 1 },
                {layer: 'individualtown-road', opacity: 1 },
                {layer: 'individualtown-rail', opacity: 1 },
                {layer: 'pointesofinterest-rome-outline', opacity: 0.5 },
                {layer: 'poi-tristan', opacity: 0.5 },
                {layer: 'poi-tristan outline', opacity: 1 },
                {layer: 'poi-tristan text', opacity: 1 },
                {layer: 'pointsofinterest-outline', opacity: 1 },
                {layer: 'pointsofinterest-fill', opacity: 0.5 },
            ],
            onChapterExit: [
              
            ]
        },
        {
            id: 'chapter4',
            alignment: 'right',
            title: 'KINGSTON',
            image: './images/Kingston.jpeg',
            description: 'Town Population: 23,070<br>Historical Industry: cement, bricks, bluestone',
            location: {
                center: [-73.942, 41.922],
                zoom: 11.7,
                pitch: 0,
                bearing: 0.00
            },
            onChapterEnter: [
                {layer: 'POI Text', opacity: 1 },
                {layer: 'individualtown-building', opacity: 1 },
                {layer: 'individualtown-road', opacity: 1 },
                {layer: 'individualtown-rail', opacity: 1 },
                {layer: 'pointesofinterest-rome-outline', opacity: 0.5 },
                {layer: 'poi-tristan', opacity: 0.5 },
                {layer: 'poi-tristan outline', opacity: 1 },
                {layer: 'poi-tristan text', opacity: 1 },
                {layer: 'pointsofinterest-outline', opacity: 1 },
                {layer: 'pointsofinterest-fill', opacity: 0.5 },
                {layer: 'Prison Name', opacity: 0 },
                {layer: 'prison-boundaries-outline', opacity: 0 },
            ],
            onChapterExit: [
              
            ]
        },
        {
            id: 'chapter4A_Shulong',
            alignment: 'right',
            title: 'RE-CONNECTING THE MOTEL',
            image: './images/Shulong.jpg',
            description: 'Shulong Ren<br><br>What if we help residents of emergency housing in the 14  Motels establish a de-carceral alternative to help them move away from state support toward mobility and Independence?',
            location: {
                center: [-73.942, 41.922],
                zoom: 11.7,
                pitch: 0,
                bearing: 0.00
             },
                onChapterEnter: [
                    {layer: 'POI Text', opacity: 1 },
                    {layer: 'individualtown-building', opacity: 1 },
                    {layer: 'individualtown-road', opacity: 1 },
                    {layer: 'individualtown-rail', opacity: 1 },
                    {layer: 'pointesofinterest-rome-outline', opacity: 0.5 },
                    {layer: 'poi-tristan', opacity: 0.5 },
                    {layer: 'poi-tristan outline', opacity: 1 },
                    {layer: 'poi-tristan text', opacity: 1 },
                    {layer: 'pointsofinterest-outline', opacity: 1 },
                    {layer: 'pointsofinterest-fill', opacity: 0.5 },
                    {layer: 'Prison Name', opacity: 0 },
                    {layer: 'prison-boundaries-outline', opacity: 0 },
            ],
            onChapterExit: [
            
            ]
         },
         {
            id: 'chapter5',
            alignment: 'right',
            title: 'WATERTOWN',
            image: './images/Watertown.jpeg',
            description: 'Town Population: 24.685<br>Historical Industry: Manufacturing<br>Prison Name: Watertown Correctional Facility<br>Prison Years: 1981-2021<br>Prison Capacity: 637',
            location: {
                center: [-75.69, 43.990],
                zoom: 11.2,
                pitch: 0,
                bearing: 0.00
            },
            onChapterEnter: [
                {layer: 'POI Text', opacity: 1 },
                {layer: 'individualtown-building', opacity: 1 },
                {layer: 'individualtown-road', opacity: 1 },
                {layer: 'individualtown-rail', opacity: 1 },
                {layer: 'pointesofinterest-rome-outline', opacity: 1 },
                {layer: 'poi-tristan', opacity: 0.5 },
                {layer: 'poi-tristan outline', opacity: 1 },
                {layer: 'poi-tristan text', opacity: 1 },
                {layer: 'pointsofinterest-outline', opacity: 1 },
                {layer: 'pointsofinterest-fill', opacity: 0.5 },
                {layer: 'Prison Name', opacity: 0 },
                {layer: 'prison-boundaries-outline', opacity: 0 },
            ],
            onChapterExit: [
              
            ]
        },
        {
            id: 'chapter5a_Leon',
            alignment: 'right',
            title: 'Watertown´s Military-Industrial Dystopia',
            image: './images/Leon.png',
            description: 'Leon Duval<br><br>What if we stop the military-industrial complex to keep assimilating infrastructures in Watertown by producing an aneducational performance in the prison to conscientize and prevent the community?',
            location: {
                center: [-75.69, 43.990],
                zoom: 11.2,
                pitch: 0,
                bearing: 0.00
            },
            onChapterEnter: [
                {layer: 'POI Text', opacity: 1 },
                {layer: 'individualtown-building', opacity: 1 },
                {layer: 'individualtown-road', opacity: 1 },
                {layer: 'individualtown-rail', opacity: 1 },
                {layer: 'pointesofinterest-rome-outline', opacity: 1 },
                {layer: 'poi-tristan', opacity: 0.5 },
                {layer: 'poi-tristan outline', opacity: 1 },
                {layer: 'poi-tristan text', opacity: 1 },
                {layer: 'pointsofinterest-outline', opacity: 1 },
                {layer: 'pointsofinterest-fill', opacity: 0.5 },
                {layer: 'Prison Name', opacity: 0 },
                {layer: 'prison-boundaries-outline', opacity: 0 },
            ],
            onChapterExit: [
              
            ]
        },
        {
            id: 'chapter6',
            alignment: 'right',
            title: 'DANNEMORA',
            image: './images/Dannemora.jpeg',
            description: 'Town Population: 4,219<br>Historical Industry: Manufacturing<br>Prison Name: Clinton Annex at Clinton Correctional<br>Prison Years: 1972-2021<br>Prison Capacity: 735',
            location: {
                center: [-73.57,44.706],
                zoom: 11.5,
                pitch: 0,
                bearing: 0.00
            },
            onChapterEnter: [
                {layer: 'POI Text', opacity: 1 },
                {layer: 'individualtown-building', opacity: 1 },
                {layer: 'individualtown-road', opacity: 1 },
                {layer: 'individualtown-rail', opacity: 1 },
                {layer: 'pointesofinterest-rome-outline', opacity: 1 },
                {layer: 'poi-tristan', opacity: 0.5 },
                {layer: 'poi-tristan outline', opacity: 1 },
                {layer: 'poi-tristan text', opacity: 1 },
                {layer: 'pointsofinterest-outline', opacity: 1 },
                {layer: 'pointsofinterest-fill', opacity: 1 },
                {layer: 'Prison Name', opacity: 1 },
                {layer: 'prison-boundaries-outline', opacity: 1 },
            ],
            onChapterExit: [
              
            ]
        },
        {
            id: 'chapter6A_Hein',
            alignment: 'right',
            title: 'Towards the Slowest Landfilling',
            image: './images/Hein_Dannemora.jpg',
            description: 'Hyuein Song<br><br>Prisons and Landfills are two bad neighbors often located nearby. This project turns the decline of the prison industry to the opportunity to have a less extractive, more sustainable industry by intercepting resources from landfills.',
            location: {
                center: [-73.57,44.706],
                zoom: 11.5,
                pitch: 0,
                bearing: 0.00
            },
            onChapterEnter: [
                {layer: 'POI Text', opacity: 1 },
                {layer: 'individualtown-building', opacity: 1 },
                {layer: 'individualtown-road', opacity: 1 },
                {layer: 'individualtown-rail', opacity: 1 },
                {layer: 'pointesofinterest-rome-outline', opacity: 1 },
                {layer: 'poi-tristan', opacity: 0.5 },
                {layer: 'poi-tristan outline', opacity: 1 },
                {layer: 'poi-tristan text', opacity: 1 },
                {layer: 'pointsofinterest-outline', opacity: 1 },
                {layer: 'pointsofinterest-fill', opacity: 1 },
                {layer: 'Prison Name', opacity: 1},
                {layer: 'prison-boundaries-outline', opacity: 1 },
            ],
            onChapterExit: [
              
            ]
        },
         {
            id: 'chapter7',
            alignment: 'right',
            title: 'ROME',
            image: './images/Rome.jpeg',
            description: 'Town Population: 32,253<br>Historical Industry: MMetal Industries (Mining & Manufacturing)<br>Prison Name: Oneida Correctional Facility<br>Prison Years: 1893-2011<br>Prison Capacity: 998',
            location: {
                center: [-75.385, 43.244],
                zoom: 12,
                pitch: 0,
                bearing: 0.00
            },
            onChapterEnter: [
                {layer: 'POI Text', opacity: 1 },
                {layer: 'individualtown-building', opacity: 1 },
                {layer: 'individualtown-road', opacity: 1 },
                {layer: 'individualtown-rail', opacity: 1 },
                {layer: 'pointesofinterest-rome-outline', opacity: 1 },
                {layer: 'poi-tristan', opacity: 0.5 },
                {layer: 'poi-tristan outline', opacity: 1 },
                {layer: 'poi-tristan text', opacity: 1 },
                {layer: 'pointsofinterest-outline', opacity: 1 },
                {layer: 'pointsofinterest-fill', opacity: 1 },
                {layer: 'Prison Name', opacity: 1},
                {layer: 'prison-boundaries-outline', opacity: 1 },
            ],
            onChapterExit: [
              
            ]
        },
        {
            id: 'chapter7A_Yani',
            alignment: 'right',
            title: 'RPROJECT TITLE',
            image: './images/placeholder.jpg',
            description: 'Yani Gao<br><br>What if the old Erie Canal acquires ‘soft edges’ in Rome, NY, to promote an alternative town adapting to annual flooding and reflect on past exclusive history with inclusive, conscious planning and building programs.',
            location: {
                center: [-75.385, 43.244],
                zoom: 12,
                pitch: 0,
                bearing: 0.00
            },
            onChapterEnter: [
                {layer: 'POI Text', opacity: 1 },
                {layer: 'individualtown-building', opacity: 1 },
                {layer: 'individualtown-road', opacity: 1 },
                {layer: 'individualtown-rail', opacity: 1 },
                {layer: 'pointesofinterest-rome-outline', opacity: 1 },
                {layer: 'poi-tristan', opacity: 0.5 },
                {layer: 'poi-tristan outline', opacity: 1 },
                {layer: 'poi-tristan text', opacity: 1 },
                {layer: 'pointsofinterest-outline', opacity: 1 },
                {layer: 'pointsofinterest-fill', opacity: 1 },
                {layer: 'Prison Name', opacity: 1},
                {layer: 'prison-boundaries-outline', opacity: 1 },
            ],
            onChapterExit: [
              
            ]
        },
    ]
};
