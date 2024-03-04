const prices = [  [    { name: 'Standard Cabin (DBL)', price: 'ZAR 5552.00' },    { name: 'Superior Cabin (DBL)', price: 'ZAR 6662.00' }  ],
  [    { name: 'Standard Cabin (DBL)', price: 'ZAR 7467.00' },    { name: 'Superior Cabin (DBL)', price: 'ZAR 8961.00' }  ],
  [    { name: 'Standard Cabin (DBL)', price: 'ZAR 5552.00' },    { name: 'Superior Cabin (DBL)', price: 'ZAR 6662.00' }  ],
  [    { name: 'Master Suite (DBL)', price: 'ZAR 9169.00' },    { name: 'Standard Suite (DBL)', price: 'ZAR 7773.00' }  ],
  [    { name: 'Master Suite (DBL)', price: 'ZAR 11116.00' },    { name: 'Standard Suite (DBL)', price: 'ZAR 9418.00' }  ],
  [    { name: 'Master Suite (DBL)', price: 'ZAR 9169.00' },    { name: 'Standard Suite (DBL)', price: 'ZAR 7773.00' }  ]
];
//console.log(prices[0][0]['price'])
const objReport = {};
const monthlyReport = prices.map((v, i) => {
    [standard, cabin] = v;
    
    let month = {};
    month[i + 1] = { standard, cabin };
    
    return month
})

console.log(objectReport);
const monthlyPrices = {
  January: { STO1: '5 552', STO2: '6 662' },
  February: { STO1: '5 552', STO2: '6 662' },
  March: { STO1: '7 467', STO2: '8 961' },
  April: { STO1: '7 467', STO2: '8 961' },
  May: { STO1: '7 467', STO2: '8 961' },
  June: { STO1: '7 467', STO2: '8 961' },
  July: { STO1: '7 467', STO2: '8 961' },
  August: { STO1: '7 467', STO2: '8 961' },
  September: { STO1: '7 467', STO2: '8 961' },
  October: { STO1: '7 467', STO2: '8 961' },
  November: { STO1: '7 467', STO2: '8 961' },
  December: { STO1: '5 552', STO2: '6 662' },
  
};

for (const month in monthlyPrices) {
  const sto1Price = 'ZAR '+monthlyPrices[month].STO1 + '.00';
    const sto2Price = 'ZAR '+ monthlyPrices[month].STO2+ '.00';
    //console.log(sto1Price)
    //console.log('-----------------')
    //console.log(sto2Price)
  let foundMatchingPrices = false;
  
    for (const priceArray of prices) {
        //console.log('********')
        // console.log(priceArray[0]['price'])
        //console.log(priceArray[1].price)
     // console.log(sto1Price)
    if (priceArray[0].price ===`ZAR ${sto1Price}` ) {
        console.log(`Match found for ${month}: ${priceArray[0].name} and ${priceArray[1].name}`);
        foundMatchingPrices = true;
        break;

    }
  }

    if (!foundMatchingPrices) {

      //console.log(`No match found for ${month}`);
    }
}
