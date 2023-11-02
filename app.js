var californiaBounds = [
    [32.5, -124.5], // Southwest corner of California
    [42, -114]     // Northeast corner of California
];


// Initialize the map with maxBounds
var mymap = L.map('mapid', {
    maxBounds: californiaBounds,
    maxBoundsViscosity: 1.0, // Keeps the user within the bounds
    maxZoom: 10, // Set the maximum zoom level
    minZoom: 6   // Set the minimum zoom level
}).setView([36.7783, -119.4179], 6); // Centered on California with an appropriate zoom level

// Add a tile layer 
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);



//add the tribal borders to the map
fetch('Federally_Recognized_Tribal_Lands.geojson')
    .then(response => response.json())
    .then(data => {
        L.geoJSON(data).addTo(mymap);
    });
// adds markers
var markers = [
    {
        coords: [34.0664, -118.1685],
        popupText: [
            'Agua Caliente Band of Cahuilla Indians',
            'Reid D. Milanovich (Chairman)',
            'Tel: (760) 699-6800',
            'Fax: (760) 699-6919',
            'Recognition Status: Federal',
            '5401 Dinah Shore Dr Palm Springs, CA92264-5970'
        ]
    },
    {
        coords: [38.590576, -121.489906],
        popupText: ['Buena Vista Rancheria of Me-Wuk Indians',
                    'Rhonda Morningstar Pope (Chairperson)',
                    'Tel: (916) 491-0011',
                    'Fax: (916) 491-0012',
                    'Recognition Status: Federal',
                    '1418 20th Street, Suite 200 Sacramento, CA95811-5206'
    ]
    },
    {
        coords: [33.680302, -116.173897],
        popupText: ['Augustine Band of Cahuilla Indians',
                    'Amanda Vance (Chairperson)',
                    'Tel: (760) 398-4722',
                    'Fax: (760) 369-7161',
                    'Recognition Status: Federal',
                    'PO Box 846',
                    'Coachella, CA92236-0846'
                ]
    },
    {
        coords: [41.4871, -120.5425],
        popupText: ['Alturas Rancheria',
                    'Darren Rose and Wendy Del Rosa (Co-Chairpersons)',
                    'Tel: Fax: (530) 233-4165',
                    'Recognition Status: Federal',
                    'PO Box 340',
                    'Alturas, CA96101-0340'
                ]

    },
    {
        coords: [32.8573, -116.9222],
        popupText: ['Barona Band of Mission Indians',
                    'Edwin "Thorpe" Romero (Chairman)',
                    'Tel: (619) 443-6612',
                    'Fax: (619) 443-0681',
                    'Recognition Status: Federal',
                    '1095 Barona Rd Lakeside, CA92040-1541'
    ]
    },
    {
        coords: [40.6411, -124.2263],
        popupText: ['Bear River Band of Rohnerville Rancheria',
                    'Josafina Cortez (Chairwoman)',
                    'Tel: (707) 733-1900',
                    'Fax: (707) 733-1723',
                    'Recognition Status: Federal',
                    '266 Keisner Rd Loleta, CA95551-9646'
    ]
    },
    {
        coords: [37.8183, -118.4770],
        popupText: ['Benton Paiute - U-tu Utu Gwaitu Paiute Tribe',
                    'Shane Saulque (Chairman)',
                    'Tel: (760) 933-2321',
                    'Fax: (760) 933-2412',
                    'Recognition Status: Federal',
                    '25669 Highway 6, PMB 1 Benton, CA93512-9703'

                ]
    },
    {
        coords: [39.511608, -121.556725],
        popupText: ['Berry Creek Rancheria of Maidu Indians of California',
                    'Francis Steele, Jr. (Chairman)',
                    'Tel: (530) 534-3859',
                    'Fax: (530) 534-1151',
                    'Recognition Status: Federal',
                    '5 Tyme Way',
                    'Oroville, CA95966-9115'

    ]
    },
    {
        coords: [41.0593, -124.1431],
        popupText: ['Big Lagoon Rancheria',
                    'Virgil Moorehead (Chairman)',
                    'Tel: (707) 826-2079',
                    'Fax: (707) 826-0495',
                    'Recognition Status: Federal',
                    'PO Box 3060',
                    'Trinidad, CA95570-3060'
    ]
    },
    {
        coords: [37.1649, -118.2895],
        popupText: ['Big Pine Paiute Tribe of the Owens Valley',
                    'Shannon Romero (Tribal Chairperson)',
                    'Tel: (760) 938-2003',
                    'Fax: (760) 938-2942',
                    'Recognition Status: Federal',
                    'PO Box 700',
                    'Big Pine, CA93513-0700'
    ]
    },
    {
        coords: [37.0808, -119.4854],
        popupText: ['Big Sandy Rancheria',
                    'Elizabeth Kipp (Chairperson)',
                    'Tel: (559) 855-4003',
                    'Fax: (559) 855-4129',
                    'Recognition Status: Federal',
                    'PO Box 337',
                    'Auberry, CA93602-0337'
    ]
    },
    {
        coords: [39.0430, -122.9158],
        popupText: ['Big Valley Rancheria',
                    'Philip Gomez (Chairman)',
                    'Tel: (707) 263-3924',
                    'Fax: (707) 533-2941',
                    'Recognition Status: Federal',
                    '2726 Mission Rancheria Rd',
                    'Lakeport, CA95453-9612'
    ]
    },
    {
        coords: [37.3614, -1118.3952],
        popupText: ['Bishop Paiute Tribe',
                     'Brian Poncho (Interim Chairperson)',
                     'Tel: (760) 873-3584',
                     'Fax: (760) 873-4143',
                     'Recognition Status: Federal',
                     '50 N Tu Su Ln',
                     'Bishop, CA93514-8058'
    ]
    },
    {
        coords: [40.8829, -123.9839],
        popupText: ['Blue Lake Rancheria',
                    'Claudia Brundin (Chairperson)',
                    'Tel: (707) 668-5101',
                    'Fax: (707) 668-4272',
                    'Recognition Status: Federal',
                    'PO Box 428',
                    'Blue Lake, CA95525-0314'
    ]
    },
    {
        coords: [38.258308, -119.2314],
        popupText: ['Bridgeport Paiute Indian Colony',
                    'John Glazier (Chairman)',
                    'Tel: (760) 932-7083',
                    'Fax: (760) 932-7846',
                    'Recognition Status: Federal',
                    'PO Box 37',
                    'Bridgeport, CA93517-0037'
    ]
    },
    {
        coords: [38.5816, -121.4944],
        popupText: ['Buena Vista Rancheria of Me-Wuk Indians',
                    'Rhonda Morningstar Pope (Chairperson)',
                    'Tel: (916) 491-0011',
                    'Fax: (916) 491-0012',
                    'Recognition Status: Federal',
                    '1418 20th Street, Suite 200',
                    'Sacramento, CA95811-5206',
    ]
    },
    {
        coords: [33.7206, -116.2156],
        popupText: ['Cabazon Band of Mission Indians',
                    'Doug Welmas (Chairman)',
                    'Tel: (760) 342-2593',
                    'Fax: (760) 347-7880',
                    'Recognition Status: Federal',
                    '84-245 Indio Springs Parkway',
                    'Indio, CA92203-'
    ]
    },
    {
        coords: [39.2143, -122.0094],
        popupText: ['Cachil Dehe Band of Wintun Indians of the Colusa Indian Rancheria',
                    'Daniel Gomez(Chairman)',
                    'Tel: (530) 458-8231',
                    'Fax: (530) 458-3866',
                    'Recognition Status: Federal',
                    '3730 State Highway 45',
                    'Colusa, CA95932-4022'
        ]

    },
    {
        coords: [39.6882, -123.4828],
        popupText: ['Cahto Tribe of the Laytonville Rancheria',
                    'Richard J. Smith (Chairperson)',
                    'Tel: (707) 984-6197',
                    'Fax: (707) 984-6201',
                    'Recognition Status: Federal',
                    'PO Box 1239',
                    'Laytonville, CA95454-1239'
    ]
    },
    {
        coords: [33.5553, -116.6742],
        popupText: ['Cahuilla Band of Mission Indians of the Cahuilla Reservation',
                    'Daniel Salgado (Chairman)',
                    'Tel: (951) 763-5549',
                    'Fax: (951) 763-2808',
                    'Recognition Status: Federal',
                    'PO Box 391760',
                    'Anza, CA92539-1760'
    ]
    },
    {
        coords: [37.6635, -120.4635],
        popupText: ['California Valley Miwok Tribe',
                    'Silvia Burley (Chairperson)',
                    'Tel: (209) 931-4567',
                    'Fax: (209) 931-4333',
                    'Recognition Status: Federal',
                    '14807 Avenida Central',
                    'LaGrange, CA95329-9400'
    ]
    },
    {
        coords: [32.6076, -116.4697],
        popupText: ['Campo Band of Mission Indians',
                    'Ralph Goff (Chairman)',
                    'Tel: (619) 478-9046',
                    'Fax: (619) 478-5818',
                    'Recognition Status: Federal',
                    '36190 Church Rd Ste 1',
                    'Campo, CA91906-2732'
    ]
    },
    {
        coords: [33.8317, -118.2817],
        popupText: ['Carson Colony (Washoe Tribes of Nevada & California)',
                    'Gary Nevers (Chaiman)',
                    'Gary Nevers (Chaiman)',
                    'Fax: (775) 265-6240',
                    'Recognition Status: Federal',
                    '2900 South Curry Street',
                    'Carson City, NV89703'
    ]
    },
    {
        coords: [39.6882, -123.4828],
        popupText: ['Cedarville Rancheria',
                    'Melissa Davis (Chairwoman)',
                    'Tel: (530) 233-3969',
                    'Fax: (530) 233-4776',
                    'Recognition Status: Federal',
                    '300 W 1st St',
                    'Alturas, CA96101-3905'
    ]
    },
    {
        coords: [41.0593, -124.1431],
        popupText: ['Cher-Ae Heights Indian Community of the Trinidad Rancheria',
                    'Garth Sundberg (Chairperson)',
                    'Tel: (707) 677-0211',
                    'Fax: (707) 677-3921',
                    'Recognition Status: Federal',
                    'PO Box 630',
                    'Trinidad, CA95570-0630'
    ]
    },
    {
        coords: [37.9533, -120.4227],
        popupText: ['Chicken Ranch Rancheria of Me-Wuk Indians of California',
                    'Lloyd Mathieson (Chairman)',
                    'Tel: (209) 984-4806',
                    'Fax: (209) 984-5606',
                    'Recognition Status: Federal',
                    'PO Box 1159',
                    'Jamestown, CA95327-1159'
    ]
    },
    {
        coords: [38.8055, -123.0172],
        popupText: ['Cloverdale Rancheria',
                    'Patricia Hermosillo (Chairperson)',
                    'Tel: (707) 894-5775',
                    'Fax: (707) 894-5727',
                    'Recognition Status: Federal',
                    '555 S Cloverdale Blvd Ste A',
                    'Cloverdale, CA95425-4020'
    ]
    },
    {
        coords: [37.0190, -1119.3992],
        popupText: ['Cold Springs Rancheria',
                    'Jeffery Lee (Chairman)',
                    'Tel: (559) 855-5043',
                    'Fax: (559) 855-4445',
                    'Fax: (559) 855-4445',
                    'PO Box 209',
                    'Tollhouse, CA93667-0209'

    ]
    },
    {
        coords: [39.1546, -122.1494],
        popupText: ['Cortina Band of Wintun Indians',
                    'Charlie Wright (Tribal Chairman)',
                    'Tel: (530) 473-3274',
                    'Fax: (530) 473-3301',
                    'Recognition Status: Federal',
                    'PO Box 1630',
                    'Williams, CA95987-1630',
                    
    ]
    },
    {
        coords: [39.2652, -123.2041],
        popupText: ['Coyote Valley Band of Pomo Indians',
                    'Michael Hunter (Chairman)',
                    'Tel: (707) 485-8723',
                    'Fax: (707) 485-1247',
                    'Recognition Status: Federal',
                    'PO Box 39',
                    'Redwood Valley, CA95470-0039'
    ]
    },
    {
        coords: [38.9413, -119.7496],
        popupText: ['Dresslerville Colony (Washoe Tribes of Nevada & California)',
                    'Rueben Vasquez(Chairman)',
                    'Tel: (775) 265-4191',
                    'Fax: (775) 265-6240',
                    'Recognition Status: Federal',
                    '919 Highwway 395 South',
                    'Gardnerville, NV89410'
    ]
    },
    {
        coords: [38.7075, -122.9028],
        popupText: ['Dry Creek Rancheria Band of Pomo Indians',
                    'Chris Wright (Chairman)',
                    'Tel: (707) 431-4090',
                    'Fax: (707) 857-3794',
                    'Recognition Status: Federal',
                    'PO Box 607',
                    'Geyserville, CA95441-0607'
    ]
    },
    {
        coords: [38.9105, -122.6103],
        popupText: ['Elem Indian Colony',
                    'Augustin Garcia (Chairman)',
                    'Tel: (707) 998-3400',
                    'Fax: (707) 994-3408',
                    'Recognition Status: Federal',
                    'PO Box 757',
                    'Lower Lake, CA95457'
    ]
    },
    {
        coords: [41.7558, -124.2026],
        popupText: ['Elk Valley Rancheria',
                    'Dale A. Miller (Chairman)',
                    'Tel: (707) 464-4680',
                    'Fax: (707) 464-4519',
                    'Recognition Status: Federal',
                    '2332 Howland Hill Road',
                    'Crescent City, CA95531-9238'
                    

    ]
    },
    {
        coords: [39.5138, -121.5564],
        popupText: ['Enterprise Rancheria Estom Yumeka Maidu Tribe',
                    'Glenda Nelson (Tribal Chairperson)',
                    'Tel: (530) 532-9214',
                    'Fax: (530) 532-1768',
                    'Recognition Status: Federal',
                    '2133 Monte Vista Ave',
                    'Oroville, CA95966-6968'
    
    ]
    },
    {
        coords: [32.8351, -116.7664],
        popupText: ['Ewiiaapaayp Band of Kumeyaay Indians',
                    'Robert Pinto (Chairman)',
                    'Tel: (619) 445-6315',
                    'Fax: (619) 445-9126',
                    'Recognition Status: Federal',
                    '4054 Willows Road',
                    'Alpine, CA91901-1620'
    
    ]
    },
    {
        coords: [38.3396, -122.7011],
        popupText: ['Federated Indians of Graton Rancheria',
                    'Greg Sarris (Chairman)',
                    'Tel: (707) 566-2288',
                    'Fax: (707) 566-2291',
                    'Recognition Status: Federal',
                    '6400 Redwood Drive, Suite 300',
                    'Rohnert Park, CA94928-2341'
    
    ]
    },
    {
        coords: [41.8605, -120.1521],
        popupText: ['Fort Bidwell Paiute Indian Reservation',
                    'Bernold Pollard (Chairman)',
                    'Tel: (530) 279-6310',
                    'Fax: (530) 279-2233',
                    'Recognition Status: Federal',
                    'PO Box 129',
                    'Fort Bidwell, CA96112-0129'
    
    ]
    },
    {
        coords: [36.8025, -118.1997],
        popupText: ['Fort Independence Indian Reservation',
                    'Norm Wilder (Chairman)',
                    'Tel: (760) 878-5160',
                    'Fax: (760) 878-2311',
                    'Recognition Status: Federal',
                    'PO Box 67',
                    'Independence, CA93526-0067'
    
    ]
    },
    {
        coords: [40.1396, -120.9511],
        popupText: ['Greenville Rancheria',
                    'Kyle Self (Chairman)',
                    'Tel: (530) 284-7990',
                    'Fax: (530) 284-6612',
                    'Recognition Status: Federal',
                    'PO Box 279',
                    'Greenville, CA95947-0279'
    ]
    },
    {
        coords: [39.6051, -122.5398],
        popupText: ['Grindstone Indian Rancheria',
                    'Ronald Kirk (Chairman)',
                    'Tel: (530) 968-5365',
                    'Fax: (530) 968-5366',
                    'Recognition Status: Federal',
                    'PO Box 63',
                    'Elk Creek, CA95939-0063',

    ]
    },
    {
        coords: [39.1332, -123.1678],
        popupText: ['Guidiville Indian Rancheria',
                    'Merlene Sanchez (Acting Chairperson)',
                    'Tel: (707) 462-3682',
                    'Fax: (707) 462-9183',
                    'Recognition Status: Federal',
                    'PO Box 339',
                    'Talmage, CA95481-0339'

    ]
    },
    {
        coords: [39.1646, -122.9106],
        popupText: ['Habematolel Pomo of Upper Lake',
                    'Sherry Treppa (Chairperson)',
                    'Tel: (707) 275-0737',
                    'Fax: (707) 275-0757',
                    'Recognition Status: Federal',
                    'PO Box 516',
                    'Upper Lake, CA95485-0516'

    ]
    },
    {
        coords: [41.0492, -123.6770],
        popupText: ['Hoopa Valley Tribe',
                    'Ryan p. Jackson (Chairman)',
                    'Tel: (530) 625-4211',
                    'Fax: (530) 625-4594',
                    'Recognition Status: Federal',
                    'PO Box 1348',
                    'Hoopa, CA95546-1348'
    ]
    },
    {
        coords: [38.9730, -123.1164],
        popupText: ['Hopland Band of Pomo Indians',
                    'Sonny J. Elliott, Sr. (Chairman)',
                    'Tel: (707) 472-2100',
                    'Fax: (707) 744-9101',
                    'Recognition Status: Federal',
                    '3000 Shanel Road',
                    'Hopland, CA95449-9809'
    ]
    },
    {
        coords: [33.1092 -116.6738],
        popupText: ['Iipay Nation of Santa Ysabel Band',
                    'Virgil Perez (Chairman)',
                    'Tel: (760) 765-0846',
                    'Fax: (760) 765-2545',
                    'Recognition Status: Federal',
                    'PO Box 130',
                    'Santa Ysabel, CA92070-0130'
    ]
    },
    {
        coords: [33.1192, -117.0864],
        popupText: ['Inaja-Cosmit Band of Mission Indians',
                    'Rebecca Osuna (Chairwoman)',
                    'Tel: (760) 737-7628',
                    'Fax: (760) 747-8568',
                    'Recognition Status: Federal',
                    '2005 S Escondido Boulevard',
                    'Escondido, CA92025-8207'

    ]
    },
    {
        coords: [38.4819, -120.8447],
        popupText: ['Ione Band of Miwok Indians',
                    'Yvonne Miller (Chairperson)',
                    'Tel: (209) 245-5800',
                    'Fax: (209) 245-3112',
                    'Recognition Status: Federal',
                    'PO Box 699',
                    'Plymouth, CA95669-0699'

    ]
    },
    {
        coords: [38.3488, -120.7741],
        popupText: ['Jackson Rancheria',
                    'Adam Dalton (Chairman)',
                    'Tel: (209) 223-1935',
                    'Fax: (209) 223-5366',
                    'Recognition Status: Federal',
                    'PO Box 1090',
                    'Jackson, CA95642-1090'
    ]
    },
    {
        coords: [32.7170 -116.8761],
        popupText: ['Jamul Indian Village',
                    'Erica Pinto (Chairwoman)',
                    'Tel: (619) 669-4785',
                    'Fax: (619) 669-4817',
                    'Recognition Status: Federal',
                    'PO Box 612',
                    'Jamul, CA91935-0612'
    ]
    },
    {
        coords: [33.5019, -117.6628],
        popupText: ['Juaneno Band of Mission Indians',
                    'Teresa M. Romero (Chairwoman)',
                    'Tel: (949) 488-3484',
                    'Fax: (949) 488-3294',
                    'Recognition Status: State',
                    '31411 La Matanza St Ste A',
                    'San Juan Capistrano, CA92675-2674'
    ]
    },
    {
        coords: [41.7927, -123.3786],
        popupText: ['Karuk Tribe of California',
                    'Russell Attebery (Chairman)',
                    'Tel: (530) 493-1600',
                    'Fax: (530) 493-5322',
                    'Recognition Status: Federal',
                    'PO Box 1016',
                    'Happy Camp, CA96039-1016'
    ]
    },
    {
        coords: [33.3034, -116.9814],
        popupText: ['La Jolla Band of Luiseno Indians',
                    'La Vonne Peck (Chair)',
                    'Tel: (760) 742-3771',
                    'Fax: (760) 742-1704',
                    'Recognition Status: Federal',
                    '22003 Highway 76',
                    'Pauma Valley, CA92061-9721'
    ]
    },
    {
        coords: [32.6636, -116.2738],
        popupText: ['La Posta Band of Mission Indians',
                    'Gwendolyn Parada (Chairperson)',
                    'Tel: (619) 478-2113',
                    'Fax: (619) 478-2125',
                    'Recognition Status: Federal',
                    '8 Crestwood Rd',
                    'Boulevard, CA91905-0220'
    ]
    },
    {
        coords: [36.606045, -118.062866],
        popupText: ['Lone Pine Paiute Shoshone Reservation',
                    'Mary Weuster(Chairperson)',
                    'Tel: (760) 876-1034',
                    'Fax: (760) 876-8302',
                    'Recognition Status: Federal',
                    'PO Box 747',
                    'Lone Pine, CA93545-0747'

    ]
    },
    {
        coords: [41.7558, -124.2026],
        popupText: ['Los Coyotes Band of Cahuilla and Cupeno Indians',
                    'Shane Chapparosa (Chairperson)',
                    'Tel: (760) 782-0711',
                    'Fax: (760) 782-2701',
                    'Recognition Status: Federal',
                    'PO Box 189',
                    'Warner Springs, CA92086-0189'
    ]
    }
    // Add more markers here
];

markers.forEach(function(markerInfo) {
    var newMarker = L.marker(markerInfo.coords).addTo(mymap);

    if (markerInfo.popupText) {
        var popupContent = markerInfo.popupText.join('<br>');
        newMarker.bindPopup(popupContent);
    }

    // Add click event to each marker to zoom in when clicked
    newMarker.on('click', function(e) {
        mymap.setView(e.latlng, 13); // Zoom in to level 13, adjust as needed
    });
});
/*markers.forEach(function(marker) {
    var newMarker = L.marker(marker.coords).addTo(mymap);

    if (marker.popupText) {
        newMarker.bindPopup(marker.popupText);
    }
});*/



/*L.marker([34.0664,-118.1685]).addTo(mymap)
.bindPopup('Agua Caliente Band of Cahuilla Indians');*/

var maxZoomToSeeBorders = mymap.getBoundsZoom(californiaBounds);
mymap.setMinZoom(maxZoomToSeeBorders); // Prevents the user from zooming farther out than the bounds


/*
var tribalLocations = [
    { name: "Agua Caliente Band of Cahuilla Indians", lat: 33.809212, lon: -116.525694 },
    { name: "Augustine Band of Cahuilla Indians", lat: 33.685378, lon: -116.142309 },
    { name: "Barona Band of Mission Indians", lat: 32.976976, lon: -116.853185 },
    { name: "Bear River Band of Rohnerville Rancheria", lat: 40.699806, lon: -124.234920 },
    { name: "Berry Creek Rancheria", lat: 39.492117, lon: -121.536500 },
    { name: "Big Lagoon Rancheria", lat: 41.313362, lon: -124.006708 },
    { name: "Big Pine Paiute Tribe of the Owens Valley", lat: 37.167570, lon: -118.392080 },
    { name: "Big Sandy Rancheria", lat: 36.938469, lon: -119.503935 },
    { name: "Big Valley Band of Pomo Indians", lat: 39.091760, lon: -122.959297 },
    { name: "Bishop Paiute Tribe", lat: 37.363872, lon: -118.395134 }
    // Add more locations here
];



// Add markers with popups
for (var i = 0; i < tribalLocations.length; i++) {
    var location = tribalLocations[i];
    L.marker([location.lat, location.lon])
        .bindPopup(location.name)
        .addTo(mymap);
}
*/
