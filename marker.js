if (mymap) {
    // adds markers
    // adds markers
    var markers = [
        {
            coords: [33.808101, -116.487954],
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
            coords: [38.5715938, -121.4823938],
            popupText: ['Buena Vista Rancheria of Me-Wuk Indians',
                        'Rhonda Morningstar Pope (Chairperson)',
                        'Tel: (916) 491-0011',
                        'Fax: (916) 491-0012',
                        'Recognition Status: Federal',
                        '1418 20th Street, Suite 200 Sacramento, CA95811-5206'
        ]
        },
        {
            coords: [33.6885095, -116.1477598],
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
            coords: [41.4871146, -120.5424555],
            popupText: ['Alturas Rancheria',
                        'Darren Rose and Wendy Del Rosa (Co-Chairpersons)',
                        'Tel: Fax: (530) 233-4165',
                        'Recognition Status: Federal',
                        'PO Box 340',
                        'Alturas, CA96101-0340'
                    ]

        },
        {
            coords: [32.9421047, -116.8559394],
            popupText: ['Barona Band of Mission Indians',
                        'Edwin "Thorpe" Romero (Chairman)',
                        'Tel: (619) 443-6612',
                        'Fax: (619) 443-0681',
                        'Recognition Status: Federal',
                        '1095 Barona Rd Lakeside, CA92040-1541'
        ]
        },
        {
            coords: [40.6301812,-124.2022063],
            popupText: ['Bear River Band of Rohnerville Rancheria',
                        'Josafina Cortez (Chairwoman)',
                        'Tel: (707) 733-1900',
                        'Fax: (707) 733-1723',
                        'Recognition Status: Federal',
                        '266 Keisner Rd Loleta, CA95551-9646'
        ]
        },
        {
            coords: [37.8909018, -118.5564526],
            popupText: ['Benton Paiute - U-tu Utu Gwaitu Paiute Tribe',
                        'Shane Saulque (Chairman)',
                        'Tel: (760) 933-2321',
                        'Fax: (760) 933-2412',
                        'Recognition Status: Federal',
                        '25669 Highway 6, PMB 1 Benton, CA93512-9703'

                    ]
        },
        {
            coords: [39.5032863, -121.5027662],
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
            coords: [41.059291, -124.1431246],
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
            coords: [37.1649307, -118.289546],
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
            coords: [39.0237426, -122.8877954],
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
            coords: [37.3617454, -118.4183193],
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
            coords: [40.8829072, -123.9839488],
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
            coords: [38.2557045, -119.2313932],
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
            coords: [38.5715938, -121.4823938],
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
            coords: [33.7222052, -116.1951804],
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
            coords: [39.2522314, -122.0315147],
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
            coords: [39.6882116, -123.4827942],
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
            coords: [41.059291, -124.1431246],
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
            coords: [37.9532584, -120.4226952],
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
            coords: [38.7958305, -123.0193963],
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
            coords: [37.0190155, -119.3991908],
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
            coords: [39.1274525, -122.3107517],
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
            coords: [39.253231, -123.211116],
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
            coords: [38.9046388,-119.7054904],
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
            coords: [38.9104546, -122.6102614],
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
            coords: [41.7585605, -124.1578832],
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
            coords: [32.836279, -116.726317],
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
            coords: [38.3476948, -122.7161054],
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
            coords: [41.8605328, -120.15207],
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
            coords: [36.8027102, -118.2000951],
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
            coords: [40.1396126, -120.9510675],
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
            coords: [39.535761, -122.6729515],
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
            coords: [39.1331805, -123.1663077],
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
            coords: [39.1646129, -122.9105515],
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
            coords: [41.0491723, 123.6770485],
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
            coords: [38.9795822, -123.0579313],
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
            coords: [33.170673, -116.72607],
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
            coords: [33.0996671, -117.0707332],
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
            coords: [38.4818531, -120.844659],
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
            coords: [32.7169988, -116.8761347],
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
            coords: [33.8294746, -117.9400687],
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
            coords: [41.792654, -123.3785705],
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
            coords: [33.273574, -116.8522365],
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
            coords: [32.7055315, -116.3610593],
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
            coords: [36.6060444, -118.0628654],
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
            coords: [33.2769753, -116.6494394],
            popupText: ['Los Coyotes Band of Cahuilla and Cupeno Indians',
                        'Shane Chapparosa (Chairperson)',
                        'Tel: (760) 782-0711',
                        'Fax: (760) 782-2701',
                        'Recognition Status: Federal',
                        'PO Box 189',
                        'Warner Springs, CA92086-0189'
        ]
        },
        {
            coords: [38.4399754, -122.710764],
            popupText: ['Lower Lake Rancheria',
                        'Darin Beltran (Chairman)',
                        'Tel: (707) 575-5586',
                        'Fax: (707) 575-5506',
                        'Recognition Status: Federal',
                        'PO Box 3162',
                        'Santa Rosa, CA95402-3162'
        ]
        },
        {
            coords: [38.5155226, -122.7873196],
            popupText: ['Lytton Rancheria of California',
                        'Marjorie Mejia (Tribal Chairperson)',
                        'Tel: (707) 575-5917',
                        'Fax: (707) 575-6974',
                        'Recognition Status: Federal',
                        '437 Aviation Boulevard',
                        'Santa Rosa, CA95403'
        ]

        },
        {
            coords: [38.908798, -123.6930726],
            popupText: ['Manchester Point Arena Band of Pomo Indians',
                        'Jaime Cobarubba (Chairman)',
                        'Tel: (707) 882-2788',
                        'Fax: (707) 882-3417',
                        'Recognition Status: Federal',
                        'PO Box 623',
                        'Point Arena, CA95468-0623'
        ]
        },
        {
            coords: [32.6636254, -116.2738148],
            popupText: ['Manzanita Band of Kumeyaay Nation',
                        'Angela Elliott Santos (Chairwoman)',
                        'Tel: (619) 766-4930',
                        'Fax: (619) 766-4957',
                        'Recognition Status: Federal',
                        'PO Box 1302',
                        'Boulevard, CA91905-0402',
        ]
        },
        {
            coords: [39.7530638, -121.8606691],
            popupText: ['Mechoopda Indian Tribe of Chico Rancheria',
                        'Dennis Ramirez (Chairman)',
                        'Tel: (530) 899-8922',
                        'Fax: (530) 899-8517',
                        'Recognition Status: Federal',
                        '125 Mission Ranch Boulevard',
                        'Chico, CA95926-2175'
        ]
        },
        { 
            coords: [33.1091684, -116.673794],
            popupText: ['Mesa Grande Band of Mission Indians',
                        'Virgil Oyos (Chairman)',
                        'Tel: (760) 782-3818',
                        'Fax: (760) 782-0795',
                        'Recognition Status: Federal',
                        'PO Box 270',
                        'Santa Ysabel, CA92070-0270'
        ]
        },
        {
            coords: [38.7524045, -122.6149853],
            popupText: ['Middletown Rancheria',
                        'Jose Simon, III (Chairman)',
                        'Tel: (707) 987-3670',
                        'Fax: (707) 987-9091',
                        'Recognition Status: Federal',
                        'PO Box 1035',
                        'Middletown, CA95461-1035'

        ]
        },
        { 
            coords: [39.4662682, -121.521937],
            popupText: ['Mooretown Rancheria',
                        'Benjamin Clark (Chairman)',
                        'Tel: (530) 533-3625',
                        'Fax: (530) 533-3680',
                        'Recognition Status: Federal',
                        '1 Alverda Drive',
                        'Oroville, CA95966-9379'
        ]
        },
        {
            coords: [33.9398629 -116.8102138],
            popupText: ['Morongo Band of Mission Indians',
                        'Robert Martin (Chairman)',
                        'Tel: (951) 755-5110',
                        'Fax: (951) 755-5109',
                        'Recognition Status: Federal',
                        '12700 Pumarra Rd',
                        'Banning, CA92220-6977'
        ]
        },
        {
            coords: [37.2293765, -119.5093812],
            popupText: ['North Fork Rancheria',
                        'Gary Walker (Chairperson)',
                        'Tel: (559) 877-2461',
                        'Fax: (559) 877-2467',
                        'Recognition Status: Federal',
                        'PO Box 929',
                        'North Fork, CA93643-0929'
        ]
        },
        {
            coords: [33.3652166, -117.0764739],
            popupText: ['Pala Band of Mission Indians',
                        'Robert Smith (Chairman)',
                        'Tel: (760) 891-3500',
                        'Fax: (760) 891-3584',
                        'Recognition Status: Federal',
                        '35008 Pala Temecula Rd',
                        'Pala, CA92059-2419'     
        ]
        },
        {
            coords: [39.9276572, -122.1791556],
            popupText: ['Paskenta Band of Nomlaki Indians',
                        'Andrew "Dru" Alejandre (Chairman)',
                        'Tel: (530) 865-2010',
                        'Fax: (530) 528-3553',
                        'Recognition Status: Federal',
                        'PO Box 709',
                        'Corning, CA96021'
        ]
        },
        {
            coords: [39.9276572, -122.1791556],
            popupText: ['Pauma/Yuima Band of Mission Indians',
                        'Temet A. Aguilar (Chairman)',
                        'Tel: (760) 742-1289',
                        'Fax: (760) 742-3422',
                        'Recognition Status: Federal',
                        'PO Box 369',
                        'Pauma Valley, CA92061-0369'
        ]
        },
        {
            coords: [33.44841, -117.08867],
            popupText: ['Pechanga Band of Mission Indians',
                        'Mark Macarro (Chairman)',
                        'Tel: (951) 770-6200',
                        'Fax: (951) 695-1778',
                        'Recognition Status: Federal',
                        'PO Box 1477',
                        'Temecula, CA92593-1477'
        ]
        },
        {
            coords: [36.8533631, -119.8051492],
            popupText: ['Picayune Rancheria of Chukchansi Indians',
                        'Jennifer Ruiz (Chairwoman)',
                        'Tel: (559) 412-5590',
                        'Fax: (559) 666-3321',
                        'Recognition Status: Federal',
                        'PO Box 2226',
                        'Oakhurst, CA93644'
        ]
        },
        {
            coords: [39.1796399, -123.2196454],
            popupText: ['Pinoleville Pomo Nation',
                        'Leona Williams (Chairperson)',
                        'Tel: (707) 463-1454',
                        'Fax: (707) 463-6601',
                        'Recognition Status: Federal',
                        '500 Pinoleville Rd Ste B',
                        'Ukiah, CA95482-7121'
        ]
        },
        {
            coords: [40.8761232, -121.6711219],
            popupText: ['Pit River Tribe',
                        'Mickey Gemill (Chairman)',
                        'Tel: (530) 335-5421',
                        'Fax: (530) 335-3140',
                        'Recognition Status: Federal',
                        '3670 Park Avenue',
                        'Burney, CA96013-4128'
        ]
        },
        {
            coords: [39.3221089, -123.113059],
            popupText: ['Potter Valley Rancheria',
                        'Salvador Rosales (Chairman)',
                        'Tel: (707) 462-1213',
                        'Fax: (707) 462-1240',
                        'Recognition Status: Federal',
                        '2251 South State Street',
                        'Ukiah, CA95482-6723'
        ]
        },
        {
            coords: [41.6010261, -122.9750197],
            popupText: ['Quartz Valley Reservation',
                        'Harold Bennett (Chairman)',
                        'Tel: (530) 468-5907',
                        'Fax: (530) 468-5908',
                        'Recognition Status: Federal',
                        '13601 Quartz Valley Rd',
                        'Fort Jones, CA96032-9714'
        ]
        },
        {
            coords: [33.5555, -116.6782],
            popupText: ['Ramona Band of Cahuilla',
                        'Joseph D. Hamilton (Chairman)',
                        'Tel: (951)763-4105',
                        'Fax: (951) 769-4325',
                        'Recognition Status: Federal',
                        '56310 Highway 371, Suite B',
                        'Anza, CA92539'
        ]
        },
        {
            coords: [40.5069031, -122.3858174],
            popupText: ['Redding Rancheria',
                        'Jack Potter, Jr. (Chairman)',
                        'Tel: (530) 225-8979',
                        'Fax: (530) 242-4540',
                        'Recognition Status: Federal',
                        '2000 Redding Rancheria Road',
                        'Redding, CA96001-5528'
        ]
        },
        {
            coords: [39.287016, -123.184024],
            popupText: ['Redwood Valley Little River Band of Pomo Indians',
                        'Debra Ramirez (Chairperson)',
                        'Tel: (707) 485-0361',
                        'Fax: (707) 485-5726',
                        'Recognition Status: Federal',
                        '3250 Road I',
                        'Redwood Valley, CA95470-9526'
        ]
        },
        {
            coords: [41.5265092, -124.0384069],
            popupText: ['Resighini Rancheria',
                        'Rick Dowd (Chairman)',
                        'Tel: (707) 482-2431',
                        'Fax: (707) 482-3425',
                        'Recognition Status: Federal',
                        'PO Box 529',
                        'Klamath, CA95548-0529'
        ]
        },
        {
            coords: [33.2738725, -116.957577],
            popupText: ['Rincon Band of Mission Indians',
                        'Frederick "Bo" Mazzetti (Chairman)',
                        'Tel: (760) 749-1051',
                        'Fax: (760) 749-8901',
                        'Recognition Status: Federal',
                        '1 West Tribal Road',
                        'Valley Center, CA92082-0068'
        ]
        },
        {
            coords: [39.1112521, -122.8253741],
            popupText: ['Robinson Rancheria',
                        'Beniaken Cromwell (Chairman)',
                        'Tel: (707) 275-0527',
                        'Fax: (707) 275-0325',
                        'Recognition Status: Federal',
                        'PO Box 4015',
                        'Nice, CA95464-4015'
        ]
        },
        {
            coords: [39.8143599, -123.248213],
            popupText: ['Round Valley Reservation',
                        'James Russ (President)',
                        'Tel: (707) 983-6126',
                        'Fax: (707) 983-6128',
                        'Recognition Status: Federal',
                        '77826 Covelo Road',
                        'Covelo, CA95428-0448'
        ]
        },
        {
            coords: [34.1506988, -117.214223],
            popupText: ['San Manuel Band of Mission Indians',
                        'Lynn Valbuena (Chairwoman)',
                        'Tel: (909) 864-8933',
                        'Fax: (909) 864-3370',
                        'Recognition Status: Federal',
                        '26569 Community Center Drive',
                        'Highland, CA92346',
        ]
        },
        {
            coords: [33.2183701, -117.0341967],
            popupText: ['San Pasqual Band of Diegueno Indians',
                        'Allen Lawson (Tribal Chairman)',
                        'Allen Lawson (Tribal Chairman)',
                        'Tel: (760) 749-3200',
                        'Fax: (760) 749-3876',
                        'Recognition Status: Federal',
                        'PO Box 365',
                        'Valley Center, CA92082-0365'

                        
        ]
        },
        {
            coords: [33.5257713, -116.6317514],
            popupText: ['Santa Rosa Band of Cahuilla Indians',
                        'Steven Estrada (Chairman)',
                        'Tel: (951) 659-2700',
                        'Fax: (951) 659-2228',
                        'Recognition Status: Federal',
                        'PO Box 391820',
                        'Anza, CA92539'
        ]
        },
        {
            coords: [36.3007835, -119.7829107],
            popupText: ['Santa Rosa Rancheria Tachi Yokut Tribe',
                        'Ruben Barrios (Chairman)',
                        'Tel: (559) 924-1278',
                        'Fax: (559) 924-2931',
                        'Recognition Status: Federal',
                        'PO Box 8',
                        'Lemoore, CA93245-0008'
        ]
        },
        {
            coords: [34.6144313, -120.079868],
            popupText: ['Santa Ynez Band Of Chumash Tribe',
                        'Vincent Armenta (Chairman)',
                        'Tel: (805) 688-7997',
                        'Fax: (805) 686-9578',
                        'Recognition Status: Federal',
                        'PO Box 517',
                        'Santa Ynez, CA93460-0517'
        
        ]
        },
        {
            coords: [39.0347666, -122.9263504],
            popupText: ['Scotts Valley Band of Pomo Indians',
                        'Shawn Davis (Chairman)',
                        'Tel: (707) 263-4220',
                        'Fax: (707) 263-4345',
                        'Recognition Status: Federal',
                        '1005 Parallel Dr.',
                        'Lakeport, CA95453'
        ]
        },
        {
            coords: [39.3947823, -123.3607902],
            popupText: ['Sherwood Valley Rancheria',
                        'Melanie Rafanan (Chairwoman)',
                        'Tel: (707) 459-9690',
                        'Fax: (707) 459-6936',
                        'Recognition Status: Federal',
                        '190 Sherwood Hill Dr',
                        'Willits, CA95490-4666'
        ]
        },
        {
            coords: [38.687249 -120.9892566],
            popupText: ['Shingle Springs Rancheria',
                        'Regina Cuellar (Chairwoman)',
                        'Tel: (530) 387-4994',
                        'Fax: (530) 676-6288',
                        'Recognition Status: Federal',
                        'PO Box 1340',
                        'Shingle Springs, CA95682-1340'
        ]
        },
        {
            coords: [41.952201, -124.202587],
            popupText: ['Smith River Rancheria',
                        'Scott D. Sullivan (Chairperson)',
                        'Tel: (707) 487-9255',
                        'Fax: (707) 487-0930',
                        'Recognition Status: Federal',
                        '140 Rowdy Creek Rd',
                        'Smith River, CA95567-9446'
        ]
        },
        {
            coords: [33.7729474, -116.9618653],
            popupText: ['Soboba Band of Luiseno Indians',
                        'Isaiah Vivanco (Chairman)',
                        'Tel: (951) 654-2765',
                        'Fax: (951) 654-4198',
                        'Recognition Status: Federal',
                        'PO Box 487',
                        'San Jacinto, CA92581-0487'
        ]
        },
        {
            coords: [38.9046388, -119.7054904],
            popupText: ['Stewart Community Council (Washoe Tribe of Nevada & California)',
                        'Blain Osorio (Chairman)',
                        'Tel: (775) 883-7794',
                        'Fax: (775) 265-6240',
                        'Recognition Status: Federal',
                        '919 Highway 395 South',
                        'Gardnerville, NV89410'
        ]
        },
        {
            coords: [38.457324, -122.7344912],
            popupText: ['Stewarts Point Rancheria',
                        'Reno Franklin (Chairman)',
                        'Tel: (707) 591-0580',
                        'Fax: (707) 591-0583',
                        'Recognition Status: Federal',
                        '1420 Guerneville Rd Suite 1',
                        'Santa Rosa, CA95403-2039'
        ]
        },
        {
            coords: [40.426133, -120.6571637],
            popupText: ['Susanville Indian Rancheria',
                        'Arian Hart (Chairman)',
                        'Tel: (530) 257-6264',
                        'Fax: (530) 257-7986',
                        'Recognition Status: Federal',
                        '745 Joaquin St',
                        'Susanville, CA96130-3628'
        ]
        },
        {
            coords: [32.7947731, -116.9625269],
            popupText: ['Sycuan Band of the Kumeyaay Nation',
                        'Cody Martinez (Chairman)',
                        'Tel: (619) 445-2613',
                        'Fax: (619) 445-3016',
                        'Recognition Status: Federal',
                        '1 Kwaaypaay Court',
                        'El Cajon, CA92019-1821'
        ]
        },
        {
            coords: [36.9877274, -119.7118118],
            popupText: ['Table Mountain Rancheria',
                        'Leanne Walker-Grant (Chairperson)',
                        'Tel: (559) 822-2587',
                        'Fax: (559) 822-2693',
                        'Recognition Status: Federal',
                        'PO Box 410',
                        'Friant, CA93626-0410'
        ]
        },
        {
            coords: [35.092307660856015, -118.91575547970623],
            popupText: ['Tejon Indian Tribe',
                        'Octavio Escabedo (Chairperson)',
                        'Tel: (661) 834-8566',
                        'Fax: (661) 834-8564',
                        'Recognition Status: Federal',
                        '1731 Hasti Acres Drive, Suite 108',
                        'Bakersfield, CA93309'
        ]
        },
        {
            coords: [37.36, -118.39],
            popupText: ['Timbisha Shoshone Tribe',
                        'George Gholson (Chairman)',
                        'Tel: (760) 872-3614',
                        'Fax: (760) 872-3670',
                        'Recognition Status: Federal',
                        'PO Box 1779',
                        'Bishop, CA93515-1779'
        ]
        },
        {
            coords: [33.6402638, -116.1422353],
            popupText: ['Torres-Martinez Desert Cahuilla Indians',
                        'Thomas Tortez, Jr. (Chairman)',
                        'Tel: (760) 397-0300',
                        'Fax: (760) 397-3925',
                        'Recognition Status: Federal',
                        'PO Box 1160',
                        'Thermal, CA92274-1160'
        ]
        },
        {
            coords: [36.07, -119.02],
            popupText: ['Tule River Indian Reservation',
                        'Neil Peyron (Chairman)',
                        'Tel: (559) 781-4271',
                        'Fax: (559) 791-2121',
                        'Recognition Status: Federal',
                        'PO Box 589',
                        'Porterville, CA93258-0589'
        ]
        },
        {
            coords: [37.9627027, -120.2412999],
            popupText: ['Tuolumne Me-Wuk Tribe',
                        'Kevin Day (Chairman)',
                        'Tel: (209) 928-5300',
                        'Fax: (209) 928-1677',
                        'Recognition Status: Federal',
                        'PO Box 699',
                        'Tuolumne, CA95379-0699'
        ]
        },
        {
            coords: [33.7106659, -116.1835261],
            popupText: ['Twenty-Nine Palms Band of Mission Indians',
                        'Darrell Mike (Chairman)',
                        'Tel: (760) 863-2444',
                        'Fax: (760) 863-2449',
                        'Recognition Status: Federal',
                        '46200 Harrison Place',
                        'Coachella, CA92236-2031'
        ]
        },
        {
            coords: [38.871886, -121.091924],
            popupText: ['United Auburn Indian Community',
                        'Gene Whitehouse (Chairman)',
                        'Tel: (530) 883-2390',
                        'Fax: (530) 883-2380',
                        'Recognition Status: Federal',
                        '10720 Indian Hill Rd',
                        'Auburn, CA95603-9403'
        ]
        },
        {
            coords: [32.8502, -116.6926],
            popupText: ['Viejas Band of Kumeyaay Indians',
                        'Robert J. Welch, Jr. (Chairman)',
                        'Tel: (619) 445-3810',
                        'Fax: (619) 445-5337',
                        'Recognition Status: Federal',
                        '1 Viejas Grade Road',
                        'Alpine, CA91901-1605'
        ]
        },
        {
            coords: [38.4039442, -121.3597885],
            popupText: ['Wilton Rancheria',
                        'Jesus Tarango, Jr. (Chairman)',
                        'Tel: (916) 683-6000',
                        'Fax: (916) 683-6015',
                        'Recognition Status: Federal',
                        '9300 Wesf Stockton Boulevard, Suite 200',
                        'Elk Grove, CA95758'
        ]
        },
        {
            coords: [40.6885076, -124.2529779],
            popupText: ['Wiyot Tribe',
                        'Theodore Hernandez (Chairman)',
                        'Tel: (707) 733-5055',
                        'Fax: (707) 733-5601',
                        'Recognition Status: Federal',
                        '1000 Wiyot Dr',
                        'Loleta, CA95551-9640'
        ]
        },
        {
            coords: [38.7684692, -122.1973081],
            popupText: ['Yocha Dene Wintun Nation',
                        'Leland Kinter (Chairman)',
                        'Tel: (530) 796-3400',
                        'Fax: (530) 796-2143',
                        'Recognition Status: Federal',
                        'PO Box 18',
                        'Brooks, CA95606-0018'
        ]
        },
        {
            coords: [41.5265092, -124.0384069],
            popupText: ['Yurok Tribe',
                        "Thomas O'Rourke (Chairman)",
                        'Tel: (707) 482-1350',
                        'Fax: (707) 482-1373',
                        'Fax: (707) 482-1373',
                        'Recognition Status: Federal',
                        'PO Box 1027',
                        'Klamath, CA95548-1027'

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
    /*
    // Add click event to each marker to zoom in when clicked
        newMarker.on('click', function(e) {
            mymap.setView(e.latlng, 13); // Zoom in to level 13, adjust as needed
        });
    */
}