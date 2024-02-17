
const destData = [
    {
        id: 1,
        cover: "https://www.planetware.com/wpimages/2022/03/indonesia-bali-top-attractions-places-to-visit-intro-paragraph-pura-ulun-danu-bratan.jpg",
        name: "Andaman and Nicobar Islands",
        location: "India",
        ratings: 4.5,
        experiences: [
            {
                activity: "Discover the Sea Life with Scuba Diving",
                image: "https://media2.thrillophilia.com/images/photos/000/112/447/original/1536990865_Scuba_Diving.jpg?w=753&h=450&dpr=1.0"
            },
            {
                activity: "Enjoy Walking Underwater While Sea Walking",
                image: "https://media2.thrillophilia.com/images/photos/000/112/448/original/1687767306_shutterstock_238293871.jpg?w=753&h=450&dpr=1.0"
            },
            {
                activity: "Get Acquainted with the Dolphin with Dolphin Glass Bottom Boat",
                image: "https://media2.thrillophilia.com/images/photos/000/112/449/original/1495453404_andaman_dolphin.jpg?w=753&h=450&dpr=1.0"
            },
            {
                activity: "Swim with the Colourful Fish while Snorkeling",
                image: "https://cdn1.parksmedia.wdprapps.disney.com/media/aulani-resort/images/en/activities/rainbow-reef/aulani-rainbow-reef-detail-fish-kids-hero.jpg"
            }
           
        ] 
    },
    {
        id: 2,
        cover: "https://static.toiimg.com/thumb/msid-94850960,width-748,height-499,resizemode=4,imgsize-221796/.jpg",
        name: "Himalaya Mountain",
        location: "India",
        ratings: 4.5,
        experiences: [
            {
                activity: "Water rafting",
                image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/f6/a0/8c.jpg"
            },
            {
                activity: "Trekking",
                image: "https://cdn.tourismontheedge.com/wp-content/uploads/2015/02/the-Himalayas.jpg"
            },
            {
                activity: "Heli-skiing",
                image: "https://scene7.vailresorts.com/is/image/vailresorts/20230327_WB_Winton_005:Featured-Content-AND-Sliding-Cards-AND-Container-Long-Amount?resMode=sharp2&w=855&h=480&wid=392&fit=constrain,1&dpr=on,2.625"
            },
            {
                activity: "Gondola rides",
                image: "https://cdn.tourismontheedge.com/wp-content/uploads/2015/02/Gulmarg-Gondola.jpg"
            }
           
        ]
    },
    {
        id: 3,
        cover: "https://thecarvaanresort.com/wp-content/uploads/2022/07/2022-07-28.png",
        name: "Jaisalmer",
        location: "Rajasthan",
        ratings: 4.5,
        experiences: [
            {
                activity: "Jaisalmer Fort – See The Grandeur ",
                image: "https://assets.traveltriangle.com/blog/wp-content/uploads/2016/09/Jaisalmer-Fort..jpg"
            },
            {
                activity: "Jaisalmer City – Witness The Scenic Beauty ",
                image: "https://assets.traveltriangle.com/blog/wp-content/uploads/2016/10/rajasthan-photography-tour.jpg"
            },
            {
                activity: "Gadisar Lake – Enjoy The View ",
                image: "https://assets.traveltriangle.com/blog/wp-content/uploads/2016/09/Gadisar-Lake..jpg"
            },
            {
                activity: "Kanoi – Parasailing",
                image: "https://assets.traveltriangle.com/blog/wp-content/uploads/2016/10/para-sailing-in-jaisalmer.jpg"
            }  
        ]
    },
    {
        id: 4,
        cover: "https://cdn.britannica.com/23/173823-050-E7E5BADB/area-Gangtok-Sikkim-India.jpg",
        name: "Gangtok",
        location: "Sikkim",
        ratings: 4.5,
        experiences: [
            {
                activity: "Cable Ride – Witness Gangtok At A Glance",
                image: "https://assets.traveltriangle.com/blog/wp-content/uploads/2016/07/Untitled-design2.jpg"
            },
            {
                activity: "Yak Safari – Take A Closer Look At The Mountain Animal",
                image: "https://assets.traveltriangle.com/blog/wp-content/uploads/2018/12/Himalayan_yaks_in_the_Everest_region.jpg"
            },
            {
                activity: "Mountain Biking – Satiate The Adrenaline Rush",
                image: "https://assets.traveltriangle.com/blog/wp-content/uploads/2016/07/Untitled-design-5.jpg"
            },
            {
                activity: "Tashi View Point – Witness The Hues Of Sunset",
                image: "https://assets.traveltriangle.com/blog/wp-content/uploads/2016/07/Untitled-design-7.jpg"
            }  
        ]
    },
    {
        id: 5,
        cover: "https://togethertounknown.com/wp-content/uploads/2023/01/DJI_0207-min.jpg",
        name: "Goa",
        location: "India",
        ratings: 4.5,
        experiences: [
            {
                activity: " Indulge in Beach Fun",
                image: "https://www.fabhotels.com/blog/wp-content/uploads/2019/04/Beach-fun.jpg"
            },
            {
                activity: "Explore the Majestic Forts in Goa",
                image: "https://www.fabhotels.com/blog/wp-content/uploads/2019/04/Majestic-Forts.jpg"
            },
            {
                activity: "Check out the UNESCO World Heritage Sites in Goa",
                image: "https://www.fabhotels.com/blog/wp-content/uploads/2019/04/UNESCO-World-Heritage-Sites-Goa.jpg"
            },
            {
                activity: "Pay a Visit to the Historical Temples",
                image: "https://www.fabhotels.com/blog/wp-content/uploads/2019/04/Historical-Temples.jpg"
            }  
        ]
    },
    {
        id: 6,
        cover: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Victoria_Memorial_By_Saprativa.jpg",
        name: "Kolkata",
        location: "uttar-pradesh",
        ratings: 4.5,
        experiences: [
            {
                activity: "Stop by the Famous Victoria Memorial Palace",
                image: "https://www.fabhotels.com/blog/wp-content/uploads/2019/02/Victoria-Memorial.jpg"
            },
            {
                activity: "Get Acquainted with the Royal Bengal Tigers at Sundarbans",
                image: "https://www.fabhotels.com/blog/wp-content/uploads/2019/02/Sundarbans1.jpg"
            },
            {
                activity: "Visit Mother Teresa’s House",
                image: "https://www.fabhotels.com/blog/wp-content/uploads/2019/02/Mother-Teresa%E2%80%99s-House.jpg"
            },
            {
                activity: "Explore the Myriad Temples of Kolkata",
                image: "https://www.fabhotels.com/blog/wp-content/uploads/2018/10/Durga-Puja.jpg"
            }  
        ]
    },
    {
        id: 7,
        cover: "https://static.toiimg.com/img/100273065/Master.jpg",
        name: "Varanasi",
        location: "uttar-pradesh",
        ratings: 4.5,
        experiences: [
            {
                activity: "Tour Of The Oldest Temple",
                image: "https://assets.traveltriangle.com/blog/wp-content/uploads/2019/12/Take-Divine-Blessings-In-The-Temples-Of-Varanasi_11th-dec.jpg"
            },
            {
                activity: "Relive Your History",
                image: "https://assets.traveltriangle.com/blog/wp-content/uploads/2016/10/Varanasi-6.jpg"
            },
            {
                activity: "Explore The Ghats",
                image: "https://assets.traveltriangle.com/blog/wp-content/uploads/2016/10/Varanasi-4.jpg"
            },
            {
                activity: "Boat Ride",
                image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/72/68/de.jpg"
            }  
        ]
    },
    {
        id: 8,
        cover: "https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/ooty-1655457424_bca80f81e8391ebdaaca.webp",
        name: "Ooty",
        location:"Tamil-nadu",
        ratings: 4.5,  
        experiences: [
            {
                activity: "Take A Boat Ride At The Ooty Lake",
                image: "https://static.thehosteller.com/blogimage/Ooty%20lake-1678277474861.jpg"
            },
            {
                activity: "Ride The Nilgiri Mountain Toy Train",
                image: "https://static.thehosteller.com/blogimage/Toy%20Train%20-%20TripSavvy-1678277644425.jpg"
            },
            {
                activity: "Take Blessings At the Elk Hill Murugan Temple",
                image: "https://static.thehosteller.com/blogimage/Elk%20Hill%20Murugan%20Temple%20-%20Trawell.in-1678336904589.jpg"
            },
            {
                activity: "Camp By The Avalanche Lake",
                image: "https://static.thehosteller.com/blogimage/Avalanche%20Lake%20-%20Tripoto-1678337675241.jpg"
            }  
        ]
    },
    {
        id: 9,
        cover: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Pondicherry-Rock_beach_aerial_view.jpg/1200px-Pondicherry-Rock_beach_aerial_view.jpg",
        name: "Pondicherry",
        location:"Tamil-nadu",
        ratings: 4.5,
        experiences: [
            {
                activity: "Scuba Diving in Pondicherry",
                image: "https://assets-news.housing.com/news/wp-content/uploads/2022/08/21192339/Pondicherry1.jpg"
            },
            {
                activity: "Auroville Ashram",
                image: "https://assets-news.housing.com/news/wp-content/uploads/2022/08/21192413/Pondicherry5.jpg"
            },
            {
                activity: "Visit the French War Memorial to pay respect",
                image: "https://assets-news.housing.com/news/wp-content/uploads/2022/08/21192429/Pondicherry7.jpg"
            },
            {
                activity: "Immaculate Conception Cathedral",
                image: "https://assets-news.housing.com/news/wp-content/uploads/2022/08/21192445/Pondicherry10.jpg"
            }  
        ]
    },
    {
        id: 10,
        cover: "https://www.abhibus.com/blog/wp-content/uploads/2023/04/Best-places-to-visit-in-Coorg.jpg",
        name: "Coorg",
        location:"Tamil-nadu",
        ratings: 4.5,
        experiences: [
            {
                activity: "Rappelling – At The Waterfall",
                image: "https://assets.traveltriangle.com/blog/wp-content/uploads/2020/01/Waterfall-Rappelling0310.jpg"
            },
            {
                activity: "Iruppu Falls – Witness The Splash Of Cool Waters",
                image: "https://img.traveltriangle.com/blog/wp-content/uploads/2020/01/Iruppu-Falls-400x229.jpg"
            },
            {
                activity: "Kushalnagar – Experience The Greenery",
                image: "https://assets.traveltriangle.com/blog/wp-content/uploads/2020/01/Kushalnagar.jpg"
            },
            {
                activity: "Abbey Falls – Click Pictures",
                image: "https://assets.traveltriangle.com/blog/wp-content/uploads/2018/04/Photograph-the-Abbey-Falls-coorg.jpg"
            }  
        ]
    },
    {
        id: 11,
        cover: "https://karnatakatourism.org/wp-content/uploads/2020/05/Hampi.jpg",
        name: "Hampi",
        location:"Karnataka",
        ratings: 4.5,
        experiences: [
            {
                activity: "Visit the Temples and Ruins of Hampi",
                image: "https://media2.thrillophilia.com/images/photos/000/149/232/original/1553343550_1280px-Architecture_of_Vitthala_Temple_2C_Hampi.jpg?w=753&h=450&dpr=1.0"
            },
            {
                activity: "Visit Anjaneya Hill",
                image: "https://media2.thrillophilia.com/images/photos/000/149/238/original/1676032238_Anjaneya_Hill.jpg?w=753&h=450&dpr=1.0"
            },
            {
                activity: "Coracle Ride",
                image: "https://media2.thrillophilia.com/images/photos/000/149/231/original/1676032812_Coracle_Ride.jpg?w=753&h=450&dpr=1.0"
            },
            {
                activity: "Boat Ride",
                image: "https://media2.thrillophilia.com/images/photos/000/149/223/original/1676033248_Boat_Ride.jpg?w=753&h=450&dpr=1.0"
            }  
        ]
    },
    {
        id: 12,
        cover: "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2021/03/18150935/5r4t-16.jpg?tr=w-1280,f-jpg,pr-true",
        name: "Jaipur",
        location:"Rajasthan",
        ratings: 4.5,
        experiences: [
            {
                activity: "See the Hawa Mahal by day and night",
                image: "https://www.travelandleisure.com/thmb/zRb8SKy62xDa4buro-YmSmgzwCo=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/TAL-hawa-mahal-TODOJAIPUR1023-034e1287d12d453fab6d236e8cf7e982.jpg"
            },
            {
                activity: "Visit the 19 astronomical instruments at Jantar Mantar.",
                image: "https://www.travelandleisure.com/thmb/1EUDoMha1En4Xfop-c_j6JCUuWI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/TAL-jantar-mantar-TODOJAIPUR1023-c6d7709df5734416ab3a65911251d093.jpg"
            },
            {
                activity: "Let your jaw drop at Patrika Gate",
                image: "https://www.travelandleisure.com/thmb/DTGTtW13FyhNUg0oJZvtkVLZgSg=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/TAL-patrika-gate-TODOJAIPUR1023-f5910b074c5445c38f1d31abfc358860.jpg"
            },
            {
                activity: "Visit one of Jaipur’s grand forts.",
                image: "https://www.travelandleisure.com/thmb/Z8Q0HDEr2l8llTPky0cdGAj6ftE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/TAL-amber-fort-TODOJAIPUR1023-edbed0745cf649c9abf341c7bb2fc76f.jpg"
            }  
        ]
    },

]
export default destData;
