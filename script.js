const cars = [
    {
        model: "NEXON",
        company: "TATA",
        imageUrl: "https://s7ap1.scene7.com/is/image/tatamotors/CreativeOceanWithPristineWhite-0?$PO-750-500-S$&fit=crop&fmt=webp-alpha",
        specifications: `Max Power: 84.5 PS @ 3750 rpm
Max Torque: 260 Nm @ 1500-2750 rpm
Engine Type: 1.5L Turbocharged Revotorq Engine
Engine Capacity: 1496cc
Ratings: Adult - 5 stars, Child - 4 stars`,
        price: "₹7,99,990"
    },
    {
        model: "XUV700",
        company: "MAHINDRA",
        imageUrl: "https://auto.mahindra.com/on/demandware.static/-/Sites-mahindra-product-catalog/default/dw6a9136a5/images/X700/hires/AX7_DT_EverestWhite_1366x443.png",
        specifications: `Mileage: 16.57 kmpl
Fuel Type: Diesel
Engine: 2198 cc, 182 bhp
Max Torque: 450 Nm @ 1750-2800 rpm
Seating: 5, 6, 7
Transmission: Automatic
Ratings: Adult - 5 stars, Child - 5 stars`,
        price: "₹25,48,999"
    },
    {
        model: "FORTUNER",
        company: "TOYOTA",
        imageUrl: "https://img.indianautosblog.com/2020/06/04/toyota-fortuner-legender-black-front-quarters-0295.jpg",
        specifications: `Engine Options: 2.7L Petrol (166 bhp) and 2.8L Diesel (204 bhp)
Transmission: 6-speed Manual and Automatic
Mileage: 10.0 - 14.4 kmpl
Ratings: Adult - 4 stars, Child - 5 stars`,
        price: "₹33.43 - ₹51.44 lakh"
    },
    {
        model: "Creta",
        company: "Hyundai",
        imageUrl: "https://tse4.mm.bing.net/th?id=OIP.HHgsZol10P5joMeNignFeAHaFr&w=200&h=153&c=7",
        specifications: `Engine Options: 1.5L Petrol (113.18 bhp) and 1.5L Diesel (113 bhp)
Transmission: 6-speed Manual and Automatic
Mileage: 16.75 - 20 kmpl
Ratings: Adult - 5 stars, Child - 4 stars`,
        price: "₹10.89 - ₹20.45 lakh"
    },
    {
        model: "Grand Vitara",
        company: "Maruti Suzuki",
        imageUrl: "https://az-ci-afde-prd-nexa-01-dkcjcehxewgpebhe.z01.azurefd.net/-/media/feature/nexawebsitecarbrand/grand-vitara/brand-persona-variant/gv_811x629-33-mt.webp",
        specifications: `Engine Options: 1.5L Petrol (91.18 bhp) and 1.5L CNG (87 bhp)
Transmission: 5-speed Manual and Automatic
Mileage: 21.97 kmpl
Ratings: Adult - 5 stars, Child - 5 stars`,
        price: "₹9.99 - ₹19.49 lakh"
    },
    {
        model: "Virtus",
        company: "Volkswagen",
        imageUrl: "https://example.com/car7.jpg",
        specifications: `Engine Options: 1.0L TSI Petrol (113.98 bhp) and 1.5L TSI Petrol (147.51 bhp)
Transmission: 6-speed Manual and Automatic
Mileage: 18.12 - 20.8 kmpl
Ratings: Adult - 5 stars, Child - 5 stars`,
        price: "₹11.56 - ₹19.40 lakh"
    },
    {
        model: "Seltos",
        company: "Kia",
        imageUrl: "https://tse4.mm.bing.net/th?id=OIP.YzfOaZA6co5hON88_faFlwHaEz&w=200&h=130&c=7",
        specifications: "Safety Features: Engine Options: 1.5L Petrol (113.18 bhp, 143.8 Nm) and 1.5L Diesel (113 bhp, 250 Nm)
Transmission: 6-speed Manual and Automatic
Mileage: 16.75 - 20 kmpl Ratings: Adult - 4 stars, Child - 4 stars",
        price: "₹ ₹10.89 - ₹20.45 lakh"
    },
    {
        model: "Slavia",
        company: "Skoda ",
        imageUrl: "https://tse2.mm.bing.net/th?id=OIP.7aw7W5I3r-fAqoL99GmmAQHaE6&w=200&h=132&c=7",
        specifications: "Safety Features:Engine Options: 1.0L TSI Petrol (113.98 bhp, 178 Nm) and 1.5L TSI Petrol (147.51 bhp, 250 Nm)
Transmission: 6-speed Manual and Automatic
Mileage: 18.73 - 20.32 kmpl Ratings: Adult - 5 stars, Child - 5 stars",
        price: "₹10.69 - ₹18.69 lakh
"
    },
    {
        model: "Kiger",
        company: "Renault ",
        imageUrl: "https://tse4.mm.bing.net/th?id=OIP.mskL6JkWRQdh_7lWpfrqXAHaE6&w=200&h=132&c=7",
        specifications: "Safety Features: Engine Options: 1.0L Petrol (98.63 bhp, 152 Nm)
Transmission: 5-speed Manual and CVT Automatic
Mileage: 18.24 - 20.5 kmpl Ratings: Adult - 4 stars, Child - 5 stars",
        price: "₹6.00 - ₹11.23 lakh"
    }
];

function displayCars() {
    const carList = document.getElementById('car-list');
    
    cars.forEach(car => {
        const carEntry = document.createElement('div');
        carEntry.classList.add('car-entry');

        carEntry.innerHTML = `
            <div class="car-image">
                <img src="${car.imageUrl}" alt="${car.model}">
            </div>
            <div class="car-details">
                <h2>${car.model} by ${car.company}</h2>
                <p>${car.specifications}</p>
                <p class="price">${car.price}</p>
            </div>
        `;
        
        carList.appendChild(carEntry);
    });
}

document.addEventListener('DOMContentLoaded', displayCars);
