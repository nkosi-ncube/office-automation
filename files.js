const fs = require('fs');
const generatedreport= require('./download.js');

const pdf = {
  pages: [
    ' \n \n \n  \nCHOBE PRINCESS  \n2023 STO 30% RATE SHEET  \nPRIVATE & CONFIDENTIAL  \n \nAn exceptional place to find yourself  t +27 21 715 2412  |  e info@zqcollection.com  |  www.zqcollection.com  ',
    "Rates are:  \n\uf0d7 Subject to room and rate availabilty  \n\uf0d7 Quoted, invoiced and payable in ZAR  \n\uf0d7 Inclusive of 15% VAT  \n\uf0d7 Quoted per person per night on a double occupancy basis based on the \nset departures dates.  \n\uf0d7 Subject to a 30% single supplement for cabins occupied by one adult  \n(limited availability per trip)  \n \nChild Policy:  \n\uf0d7 Children from age 7 are welcome on board the Chobe Princess  \n\uf0d7 Children aged 7 -12 receive a 50% discount on the applicable adult rate  \n\uf0d7 Children aged 13 and older are charged the applicable adult rate  \n\uf0d7 A 30% single supplement applies to single children  \n\uf0d7 Only one child between the ages of 7 and 12 can share a cabin with two \nadults. This is limited to one cabin per night per houseboat and is subject \nto availability at time of reservation  \n \nRates include:  \n\uf0d7 Accommodation, all meals, soft drinks, mineral water, coffee, tea and \nlocal beer & wine  \n\uf0d7 Guided water -based game viewing and birding  \n\uf0d7 Guided water -based fishing (all fishing is strictly catch and release) * \n\uf0d7 Guided (non-professional)  water -based photographic safari ** \n\uf0d7 Guided cultural tour of a local village  \n\uf0d7 Road transfers to and from Kasane International Airport and Kasane \nImmigration Office located on the Botswana side of the Chobe River *** \n\uf0d7 Boat transfers between Kasane Immigration Office and Namibia \nImmigration Office located on the Namibian side of the Chobe River *** \n \n* Subject to availability of fishing boats.  \n** Subject to availability of photographic boat at time of reservation.  \n*** When arriving at the Kasane and Namibian Immigration Offices guests need \nto fill in the required immigration forms to gain access and departure permission \nfrom the relevant authorities. This process can take between 45 to 60 minutes to \ncomplete and needs to be considered in terms of timing and pre -planning.  Rates exclude:  \n\uf0d7 Community development levy (ZAR 90 per person per night).                               \nThe Community Development Levy will reflect as a separate line item on all \ninvoices issued. The funds collected will supplement our community projects \nand initiatives run by the Zambezi Queen Collection to assist with education, \nhealth care and basic community services  \n\uf0d7 Air tickets & visa fees, additional transfers to/from Zambia, Zimbabwe and \nNamibia or any of the nearby Kasane lodges  \n\uf0d7 Premium alcoholic beverages (such as sparkling wine, spirits & dessert wines) , curio \nstore purchases and gratuities (discretionary)   \n\uf0d7 A land -based 4x4 game drive in Botswana's Chobe National Park  \n \nBooking & Payment policy:  \n\uf0d7 Provisional reservations will be held for a maximum of 14 days, thereafter it will \nbe automatically released  \n\uf0d7 Any discrepancies on the confirmation or invoice  must be addressed with \nreservations within 7 days  of issue  \n\uf0d7 Reservations made less than 60 days prior to arrival will require full pre -payment \nat time of booking  \n\uf0d7 No credit card payments will be accepted for any tax invoices issued to a tour \noperator or travel agent. All bank charges are for the account of the tour \noperator or travel agent  \n \nDeposit payments:  \n \nFIT (1 \u2013 7 pax):   \n\uf0d7 30% deposit is due within 7 days of invoice date  \n\uf0d7 70% balance payment is due 60 days prior to arrival  \n \nGroup (8 \u2013 26 pax):   \n\uf0d7 10% deposit is due within 7 days of invoice date  \n\uf0d7 A further 40% deposit is due 120 days prior to arrival  \n\uf0d7 50% balance payment is due 60 days prior to arrival  \n \nTour Series (Min. of 8 pax for 3 + trips per year):   \n\uf0d7 10% deposit is due 180 days prior to arrival  \n\uf0d7 A further 40% deposit is due 120 days prior to arrival  \n\uf0d7 50% balance payment is due 60 days prior to arrival  \n  Cancellation Policy:  \n\uf0d7 Only written cancellations will be accepted. An acknowledgement  \nof the cancellation will be sent from the reservations department  \n\uf0d7 Chobe Princess reserves the right to release bookings should payment \nnot be received by the requested date.  \n \nFIT (1 \u2013 7 pax):   \n\uf0d7 30% of fee if cancellation is less than 90 days prior to arrival  \n\uf0d7 100% of fee if cancellation is less than 60 days prior to arrival  \n \nGroup (8 \u2013 26 pax) & Tour Series (Min. of 8 pax for 3 + trips per year):  \n\uf0d7 10% of fee if cancellation is less than 180 days prior to arrival  \n\uf0d7 50% of fee if cancellation is less than 120 days prior to arrival  \n\uf0d7 100% of fee if cancellation is less than 60 days prior to arrival  \n \n \nTour Guide Policy:   \n\uf0d7 Please note that there is no tour guide cabin on the Chobe Princesses, \ntherefore the guide will be accommodated at Ichingo Chobe River \nLodge unless there is a room available on the Chobe Princess 24 hours \nprior to arrival. The guide rate is ZAR 3 035 per night  \n\uf0d7 Should the guide need to stay on board the Chobe Princess then the \nper person sharing rate will be charged  \n \nSpecial rates are available for:  \n\uf0d7 Exclusive use, honeymoon and repeat guests.  Available on request.  \n \nWaiver:  \n\uf0d7 Available rates and dates are subject to change at management \ndiscretion  \n\uf0d7 Account Holders: Full payment is required within 30 days from travel \ndate and 2.5% interest will apply for late payments. Chobe Princess \nreserves the right to withdraw the account facility  \n\uf0d7 Chobe Princess retains the right to admit or remove any guests whose \nbehaviour impacts negatively on the hotel property, other guests \nand/or staff  \n\uf0d7 Please note no babysitting services, separate activities and/or menus \nare available for children  \n \n 2023 Rates  Rates per person per night sharing  Departure Dates (Minimum 2 night stay)  \n  Month  Standard Cabin  \n  2 Nights (Departing Monday and Wednesday)    3 Nights (Departing Friday)    4 Nights (Departing Monday)  Superior Cabin  \nRACK  STO RACK  STO \n  January  7 932  5 552  9 518  6 662   2, 4, 9, 11, 16, 18, 23, 25, 30   6, 13, 20, 27   6, 13, 20, 27  \n  February  7 932  5 552  9 518  6 662   1, 6, 8, 13, 15, 20, 22, 27   3, 10, 17, 24   6, 13, 20, 27  \n  March  10 667  7 467  12 801  8 961   1, 6, 8, 13, 15, 20, 22, 27, 29   3, 10, 17, 24, 31   6, 13, 20, 27  \n  April  10 667  7 467  12 801  8 961   3, 5, 10, 12, 17, 19, 24, 26   7, 14, 21, 28   3, 10, 17, 24  \n  May  10 667  7 467  12 801  8 961   1, 3, 8, 10, 15, 17, 22, 24, 29, 31   5, 12, 19, 26   1, 8, 15, 22, 29  \n  June  10 667  7 467  12 801  8 961   5, 7, 12, 14, 19, 21, 26, 28   2, 9, 16, 23, 30   5, 12, 19, 26  \n  July 10 667  7 467  12 801  8 961   3, 5, 10, 12, 17, 19, 24, 26, 31   7, 14, 21, 28   3, 10, 17, 24, 31  \n  August  10 667  7 467  12 801  8 961   2, 7, 9, 14, 16, 21, 23, 28, 30   4, 11, 18, 25   7, 14, 21, 28  \n  September  10 667  7 467  12 801  8 961   4, 6, 11, 13, 18, 20, 25, 27   1, 8, 15, 22, 29   4, 11, 18, 25  \n  October  10 667  7 467  12 801  8 961   2, 4, 9, 11, 16, 18, 23, 25, 30   6, 13, 20, 27   2, 9, 16, 23, 30  \n  November  10 667  7 467  12 801  8 961   1, 6, 8, 13,15, 20, 22, 27, 29   3, 10, 17, 24   6, 13, 20, 27  \n  December  7 932  5 552  9 518  6 662   4, 6, 11, 13, 18, 20, 25, 27   1, 8, 15, 22, 29   4, 11, 18, 25  STO 30% RATE SHEET  |  TERMS & CONDITIONS  \n \nCHOBE PRINCESS  \nCHOBE RIVER | NAMIBIA  \nAn exceptional place to find yourself  t +27 21 715 2412  |  e info@zqcollection.com  |  www.zqcollection.com  ",
  ],
};

function extractText(text) {
  const regex = /January.*?December\s+\d.*?\n/gs;
  const matches = text.match(regex);
  if (matches && matches.length > 0) {
    return matches[0];
  } else {
    return '';
  }
}

const extractedText = pdf.pages.map((v) => extractText(v));

const finalText = [
  'January  7 932  5 552  9 518  6 662   2, 4, 9, 11, 16, 18, 23, 25, 30   6, 13, 20, 27   6, 13, 20, 27  ',
  '  February  7 932  5 552  9 518  6 662   1, 6, 8, 13, 15, 20, 22, 27   3, 10, 17, 24   6, 13, 20, 27  ',
  '  March  10 667  7 467  12 801  8 961   1, 6, 8, 13, 15, 20, 22, 27, 29   3, 10, 17, 24, 31   6, 13, 20, 27  ',
  '  April  10 667  7 467  12 801  8 961   3, 5, 10, 12, 17, 19, 24, 26   7, 14, 21, 28   3, 10, 17, 24  ',
  '  May  10 667  7 467  12 801  8 961   1, 3, 8, 10, 15, 17, 22, 24, 29, 31   5, 12, 19, 26   1, 8, 15, 22, 29  ',
  '  June  10 667  7 467  12 801  8 961   5, 7, 12, 14, 19, 21, 26, 28   2, 9, 16, 23, 30   5, 12, 19, 26  ',
  '  July 10 667  7 467  12 801  8 961   3, 5, 10, 12, 17, 19, 24, 26, 31   7, 14, 21, 28   3, 10, 17, 24, 31  ',
  '  August  10 667  7 467  12 801  8 961   2, 7, 9, 14, 16, 21, 23, 28, 30   4, 11, 18, 25   7, 14, 21, 28  ',
  '  September  10 667  7 467  12 801  8 961   4, 6, 11, 13, 18, 20, 25, 27   1, 8, 15, 22, 29   4, 11, 18, 25  ',
  '  October  10 667  7 467  12 801  8 961   2, 4, 9, 11, 16, 18, 23, 25, 30   6, 13, 20, 27   2, 9, 16, 23, 30  ',
  '  November  10 667  7 467  12 801  8 961   1, 6, 8, 13,15, 20, 22, 27, 29   3, 10, 17, 24   6, 13, 20, 27  ',
  '  December  7 932  5 552  9 518  6 662   4, 6, 11, 13, 18, 20, 25, 27   1, 8, 15, 22, 29   4, 11, 18, 25  STO 30% RATE SHEET  |  TERMS & CONDITIONS  ',
  '',
];
let results = {};

// const extractData = (data) => {
//   const result = {};
//   const months = Object.values(data);

//   for (const month of months) {
//     const name = month[0];
//     const STO1 = month[2];
//     const STO2 = month[4];
//     result[name] = { STO1, STO2 };
//   }

//   return result;
// };

function extractData(data) {
  const months = Object.keys(data);
  const result = {};

  for (let i = 0; i < months.length; i++) {
    const month = months[i];
    const values = data[month];
    const sto1 = values[1];
    const sto2 = values[3];

    result[month] = { STO1: sto1, STO2: sto2 };
  }

  return result;
}

const findFirstDigitIndex = (str) => {
  const digitRegex = /\d/;
  return str.search(digitRegex);
};

// extractedText[1].split('\n').map((value, index) => {
//   index++;
// //   console.log(value.split('  '));
//   return (results[index] = value.split('  ').filter((v) => v !== ''));
// });

const rt = extractedText[1].split('\n').map((value, index) => {
  const month = value.slice(0, findFirstDigitIndex(value)).trim();
  const monthData = value.slice(findFirstDigitIndex(value), value.length);

  return (results[month] = monthData.split('  ').filter((v) => v !== ''));
});

fs.writeFile('supplier.json', JSON.stringify(extractData(results)), (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Supplier Data written to file-supplier.json');
});

// console.log(results);
// console.log(extractedText[1].split('\n'));
console.log(extractData(results));
generatedreport();
