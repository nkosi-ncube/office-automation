const fs = require('fs');


function generateReport() {

  const json = {
    "root": {
      "CrystalReport": {
        "Group": [
          {
            "GroupHeader": {
              "Section": {
                "Text": [
                  {
                    "TextValue": "Service Name:"
                  },
                  {
                    "TextValue": "Supplier:"
                  }
                ],
                "Field": [
                  {
                    "FormattedValue": "Chobe Princess",
                    "Value": "Chobe Princess"
                  },
                  {
                    "FormattedValue": "Zambezi Queen Collection",
                    "Value": "Zambezi Queen Collection"
                  },
                  {
                    "FormattedValue": "CHOPRI",
                    "Value": "CHOPRI"
                  }
                ]
              }
            },
            "Group": {
              "GroupHeader": {
                "Section": {
                  "Text": [
                    {
                      "TextValue": "Service Status:"
                    },
                    {
                      "TextValue": "Service Type:"
                    }
                  ],
                  "Field": [
                    {
                      "FormattedValue": "Active",
                      "Value": "Active"
                    },
                    {
                      "FormattedValue": "Accommodation",
                      "Value": "Accommodation"
                    }
                  ]
                }
              },
              "Group": {
                "GroupHeader": {
                  "Section": {
                    "Text": [
                      {
                        "TextValue": "Contract Name:"
                      },
                      {
                        "TextValue": "Contract Duration From"
                      },
                      {
                        "TextValue": "To"
                      }
                    ],
                    "Field": [
                      {
                        "FormattedValue": "Chobe Princess 2023",
                        "Value": "Chobe Princess 2023"
                      },
                      {
                        "FormattedValue": "1/1/2023",
                        "Value": "2023-01-01"
                      },
                      {
                        "FormattedValue": "12/31/2023",
                        "Value": "2023-12-31"
                      }
                    ]
                  }
                },
                "Group": [
                  // MONTH1
                  {
                    "GroupHeader": {
                      "Section": {
                        "Text": [
                          {
                            "TextValue": "Season:"
                          },
                          {
                            "TextValue": "Season Duration From"
                          },
                          {
                            "TextValue": "To"
                          }
                        ],
                        "Field": [
                          {
                            "FormattedValue": "Low Season",
                            "Value": "Low Season"
                          },
                          {
                            "FormattedValue": "12/1/2023",
                            "Value": "2023-12-01"
                          },
                          {
                            "FormattedValue": "12/31/2023",
                            "Value": "2023-12-31"
                          }
                        ]
                      }
                    },
                    "Details": {
                      "Section": [
                        {
                          "Subreport": {
                            "ReportHeader": {
                              "Section": {
                                "Text": [
                                  {
                                    "TextValue": "Meal Plan"
                                  },
                                  {
                                    "TextValue": "Sun"
                                  },
                                  {
                                    "TextValue": "Sat"
                                  },
                                  {
                                    "TextValue": "Fri"
                                  },
                                  {
                                    "TextValue": "Thu"
                                  },
                                  {
                                    "TextValue": "Wed"
                                  },
                                  {
                                    "TextValue": "Tue"
                                  },
                                  {
                                    "TextValue": "Mon"
                                  },
                                  {
                                    "TextValue": "On Sale"
                                  },
                                  {
                                    "TextValue": "INet"
                                  },
                                  {
                                    "TextValue": "Amount"
                                  },
                                  {
                                    "TextValue": "Booking Type"
                                  },
                                  {
                                    "TextValue": "Price Type"
                                  },
                                  {
                                    "TextValue": "Buying Price"
                                  },
                                  {
                                    "TextValue": "Child Policy"
                                  },
                                  {
                                    "TextValue": "Charging Policy"
                                  }
                                ]
                              }
                            },
                            "Details": [
                              {
                                "Section": {
                                  "Field": [
                                    {
                                      "FormattedValue": "Standard Cabin (DBL)",
                                      "Value": "Standard Cabin (DBL)"
                                    },
                                    {
                                      "FormattedValue": "Nett Cost Price",
                                      "Value": "Nett Cost Price"
                                    },
                                    {
                                      "FormattedValue": "FIT",
                                      "Value": "FIT"
                                    },
                                    {
                                      "FormattedValue": "Per Person per Night",
                                      "Value": "Per Person per Night"
                                    },
                                    {
                                      "FormattedValue": "Child Policy 29",
                                      "Value": "Child Policy 29"
                                    },
                                    {
                                      "FormattedValue": "ZAR 5552.00",
                                      "Value": "ZAR 5552.00"
                                    },
                                    {
                                      "FormattedValue": "N",
                                      "Value": 0
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Fully Inclusive",
                                      "Value": "Fully Inclusive"
                                    }
                                  ]
                                }
                              },
                              {
                                "Section": {
                                  "Field": [
                                    {
                                      "FormattedValue": "Standard Cabin (SGL)",
                                      "Value": "Standard Cabin (SGL)"
                                    },
                                    {
                                      "FormattedValue": "Nett Cost Price",
                                      "Value": "Nett Cost Price"
                                    },
                                    {
                                      "FormattedValue": "FIT",
                                      "Value": "FIT"
                                    },
                                    {
                                      "FormattedValue": "Per Person per Night",
                                      "Value": "Per Person per Night"
                                    },
                                    {
                                      "FormattedValue": "",
                                      "Value": ""
                                    },
                                    {
                                      "FormattedValue": "ZAR 7217.60",
                                      "Value": "ZAR 7217.60"
                                    },
                                    {
                                      "FormattedValue": "N",
                                      "Value": 0
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Fully Inclusive",
                                      "Value": "Fully Inclusive"
                                    }
                                  ]
                                }
                              },
                              {
                                "Section": {
                                  "Field": [
                                    {
                                      "FormattedValue": "Superior Cabin (DBL)",
                                      "Value": "Superior Cabin (DBL)"
                                    },
                                    {
                                      "FormattedValue": "Nett Cost Price",
                                      "Value": "Nett Cost Price"
                                    },
                                    {
                                      "FormattedValue": "FIT",
                                      "Value": "FIT"
                                    },
                                    {
                                      "FormattedValue": "Per Person per Night",
                                      "Value": "Per Person per Night"
                                    },
                                    {
                                      "FormattedValue": "Child Policy 29",
                                      "Value": "Child Policy 29"
                                    },
                                    {
                                      "FormattedValue": "ZAR 6662.00",
                                      "Value": "ZAR 6662.00"
                                    },
                                    {
                                      "FormattedValue": "N",
                                      "Value": 0
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Fully Inclusive",
                                      "Value": "Fully Inclusive"
                                    }
                                  ]
                                }
                              },
                              {
                                "Section": {
                                  "Field": [
                                    {
                                      "FormattedValue": "Superior Cabin (SGL)",
                                      "Value": "Superior Cabin (SGL)"
                                    },
                                    {
                                      "FormattedValue": "Nett Cost Price",
                                      "Value": "Nett Cost Price"
                                    },
                                    {
                                      "FormattedValue": "FIT",
                                      "Value": "FIT"
                                    },
                                    {
                                      "FormattedValue": "Per Person per Night",
                                      "Value": "Per Person per Night"
                                    },
                                    {
                                      "FormattedValue": "",
                                      "Value": ""
                                    },
                                    {
                                      "FormattedValue": "ZAR 8660.60",
                                      "Value": "ZAR 8660.60"
                                    },
                                    {
                                      "FormattedValue": "N",
                                      "Value": 0
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Fully Inclusive",
                                      "Value": "Fully Inclusive"
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        },
                        {
                          "Subreport": {
                            "ReportHeader": {
                              "Section": {
                                "Text": {
                                  "TextValue": "Extras"
                                }
                              }
                            },
                            "Details": [
                              {
                                "Section": {
                                  "Field": [
                                    {
                                      "FormattedValue": "E0027 - Community development levy",
                                      "Value": "E0027 - Community development levy"
                                    },
                                    {
                                      "FormattedValue": "Nett Cost Price",
                                      "Value": "Nett Cost Price"
                                    },
                                    {
                                      "FormattedValue": "FIT",
                                      "Value": "FIT"
                                    },
                                    {
                                      "FormattedValue": "Per Person per Night",
                                      "Value": "Per Person per Night"
                                    },
                                    {
                                      "FormattedValue": "",
                                      "Value": ""
                                    },
                                    {
                                      "FormattedValue": "ZAR 90.00",
                                      "Value": "ZAR 90.00"
                                    },
                                    {
                                      "FormattedValue": "N",
                                      "Value": 0
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "",
                                      "Value": ""
                                    }
                                  ]
                                }
                              },
                              {
                                "Section": {
                                  "Field": [
                                    {
                                      "FormattedValue": "E0035 - Fuel Surcharge",
                                      "Value": "E0035 - Fuel Surcharge"
                                    },
                                    {
                                      "FormattedValue": "Nett Cost Price",
                                      "Value": "Nett Cost Price"
                                    },
                                    {
                                      "FormattedValue": "FIT",
                                      "Value": "FIT"
                                    },
                                    {
                                      "FormattedValue": "Per Person per Day",
                                      "Value": "Per Person per Day"
                                    },
                                    {
                                      "FormattedValue": "",
                                      "Value": ""
                                    },
                                    {
                                      "FormattedValue": "ZAR 250.00",
                                      "Value": "ZAR 250.00"
                                    },
                                    {
                                      "FormattedValue": "N",
                                      "Value": 0
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "",
                                      "Value": ""
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  },
                  //MONTH2
                  {
                    "GroupHeader": {
                      "Section": {
                        "Text": [
                          {
                            "TextValue": "Season:"
                          },
                          {
                            "TextValue": "Season Duration From"
                          },
                          {
                            "TextValue": "To"
                          }
                        ],
                        "Field": [
                          {
                            "FormattedValue": "High Season",
                            "Value": "High Season"
                          },
                          {
                            "FormattedValue": "3/1/2023",
                            "Value": "2023-03-01"
                          },
                          {
                            "FormattedValue": "11/30/2023",
                            "Value": "2023-11-30"
                          }
                        ]
                      }
                    },
                    "Details": {
                      "Section": [
                        {
                          "Subreport": {
                            "ReportHeader": {
                              "Section": {
                                "Text": [
                                  {
                                    "TextValue": "Meal Plan"
                                  },
                                  {
                                    "TextValue": "Sun"
                                  },
                                  {
                                    "TextValue": "Sat"
                                  },
                                  {
                                    "TextValue": "Fri"
                                  },
                                  {
                                    "TextValue": "Thu"
                                  },
                                  {
                                    "TextValue": "Wed"
                                  },
                                  {
                                    "TextValue": "Tue"
                                  },
                                  {
                                    "TextValue": "Mon"
                                  },
                                  {
                                    "TextValue": "On Sale"
                                  },
                                  {
                                    "TextValue": "INet"
                                  },
                                  {
                                    "TextValue": "Amount"
                                  },
                                  {
                                    "TextValue": "Booking Type"
                                  },
                                  {
                                    "TextValue": "Price Type"
                                  },
                                  {
                                    "TextValue": "Buying Price"
                                  },
                                  {
                                    "TextValue": "Child Policy"
                                  },
                                  {
                                    "TextValue": "Charging Policy"
                                  }
                                ]
                              }
                            },
                            "Details": [
                              {
                                "Section": {
                                  "Field": [
                                    {
                                      "FormattedValue": "Standard Cabin (DBL)",
                                      "Value": "Standard Cabin (DBL)"
                                    },
                                    {
                                      "FormattedValue": "Nett Cost Price",
                                      "Value": "Nett Cost Price"
                                    },
                                    {
                                      "FormattedValue": "FIT",
                                      "Value": "FIT"
                                    },
                                    {
                                      "FormattedValue": "Per Person per Night",
                                      "Value": "Per Person per Night"
                                    },
                                    {
                                      "FormattedValue": "Child Policy 29",
                                      "Value": "Child Policy 29"
                                    },
                                    {
                                      "FormattedValue": "ZAR 7467.00",
                                      "Value": "ZAR 7467.00"
                                    },
                                    {
                                      "FormattedValue": "N",
                                      "Value": 0
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Fully Inclusive",
                                      "Value": "Fully Inclusive"
                                    }
                                  ]
                                }
                              },
                              {
                                "Section": {
                                  "Field": [
                                    {
                                      "FormattedValue": "Standard Cabin (SGL)",
                                      "Value": "Standard Cabin (SGL)"
                                    },
                                    {
                                      "FormattedValue": "Nett Cost Price",
                                      "Value": "Nett Cost Price"
                                    },
                                    {
                                      "FormattedValue": "FIT",
                                      "Value": "FIT"
                                    },
                                    {
                                      "FormattedValue": "Per Person per Night",
                                      "Value": "Per Person per Night"
                                    },
                                    {
                                      "FormattedValue": "",
                                      "Value": ""
                                    },
                                    {
                                      "FormattedValue": "ZAR 9707.10",
                                      "Value": "ZAR 9707.10"
                                    },
                                    {
                                      "FormattedValue": "N",
                                      "Value": 0
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Fully Inclusive",
                                      "Value": "Fully Inclusive"
                                    }
                                  ]
                                }
                              },
                              {
                                "Section": {
                                  "Field": [
                                    {
                                      "FormattedValue": "Superior Cabin (DBL)",
                                      "Value": "Superior Cabin (DBL)"
                                    },
                                    {
                                      "FormattedValue": "Nett Cost Price",
                                      "Value": "Nett Cost Price"
                                    },
                                    {
                                      "FormattedValue": "FIT",
                                      "Value": "FIT"
                                    },
                                    {
                                      "FormattedValue": "Per Person per Night",
                                      "Value": "Per Person per Night"
                                    },
                                    {
                                      "FormattedValue": "Child Policy 29",
                                      "Value": "Child Policy 29"
                                    },
                                    {
                                      "FormattedValue": "ZAR 8961.00",
                                      "Value": "ZAR 8961.00"
                                    },
                                    {
                                      "FormattedValue": "N",
                                      "Value": 0
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Fully Inclusive",
                                      "Value": "Fully Inclusive"
                                    }
                                  ]
                                }
                              },
                              {
                                "Section": {
                                  "Field": [
                                    {
                                      "FormattedValue": "Superior Cabin (SGL)",
                                      "Value": "Superior Cabin (SGL)"
                                    },
                                    {
                                      "FormattedValue": "Nett Cost Price",
                                      "Value": "Nett Cost Price"
                                    },
                                    {
                                      "FormattedValue": "FIT",
                                      "Value": "FIT"
                                    },
                                    {
                                      "FormattedValue": "Per Person per Night",
                                      "Value": "Per Person per Night"
                                    },
                                    {
                                      "FormattedValue": "",
                                      "Value": ""
                                    },
                                    {
                                      "FormattedValue": "ZAR 11649.30",
                                      "Value": "ZAR 11649.30"
                                    },
                                    {
                                      "FormattedValue": "N",
                                      "Value": 0
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Fully Inclusive",
                                      "Value": "Fully Inclusive"
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        },
                        {
                          "Subreport": {
                            "ReportHeader": {
                              "Section": {
                                "Text": {
                                  "TextValue": "Extras"
                                }
                              }
                            },
                            "Details": [
                              {
                                "Section": {
                                  "Field": [
                                    {
                                      "FormattedValue": "E0027 - Community development levy",
                                      "Value": "E0027 - Community development levy"
                                    },
                                    {
                                      "FormattedValue": "Nett Cost Price",
                                      "Value": "Nett Cost Price"
                                    },
                                    {
                                      "FormattedValue": "FIT",
                                      "Value": "FIT"
                                    },
                                    {
                                      "FormattedValue": "Per Person per Night",
                                      "Value": "Per Person per Night"
                                    },
                                    {
                                      "FormattedValue": "",
                                      "Value": ""
                                    },
                                    {
                                      "FormattedValue": "ZAR 90.00",
                                      "Value": "ZAR 90.00"
                                    },
                                    {
                                      "FormattedValue": "N",
                                      "Value": 0
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "",
                                      "Value": ""
                                    }
                                  ]
                                }
                              },
                              {
                                "Section": {
                                  "Field": [
                                    {
                                      "FormattedValue": "E0035 - Fuel Surcharge",
                                      "Value": "E0035 - Fuel Surcharge"
                                    },
                                    {
                                      "FormattedValue": "Nett Cost Price",
                                      "Value": "Nett Cost Price"
                                    },
                                    {
                                      "FormattedValue": "FIT",
                                      "Value": "FIT"
                                    },
                                    {
                                      "FormattedValue": "Per Person per Day",
                                      "Value": "Per Person per Day"
                                    },
                                    {
                                      "FormattedValue": "",
                                      "Value": ""
                                    },
                                    {
                                      "FormattedValue": "ZAR 250.00",
                                      "Value": "ZAR 250.00"
                                    },
                                    {
                                      "FormattedValue": "N",
                                      "Value": 0
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "",
                                      "Value": ""
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  },
                  {
                    "GroupHeader": {
                      "Section": {
                        "Text": [
                          {
                            "TextValue": "Season:"
                          },
                          {
                            "TextValue": "Season Duration From"
                          },
                          {
                            "TextValue": "To"
                          }
                        ],
                        "Field": [
                          {
                            "FormattedValue": "Low Season",
                            "Value": "Low Season"
                          },
                          {
                            "FormattedValue": "1/1/2023",
                            "Value": "2023-01-01"
                          },
                          {
                            "FormattedValue": "2/28/2023",
                            "Value": "2023-02-28"
                          }
                        ]
                      }
                    },
                    "Details": {
                      "Section": [
                        {
                          "Subreport": {
                            "ReportHeader": {
                              "Section": {
                                "Text": [
                                  {
                                    "TextValue": "Meal Plan"
                                  },
                                  {
                                    "TextValue": "Sun"
                                  },
                                  {
                                    "TextValue": "Sat"
                                  },
                                  {
                                    "TextValue": "Fri"
                                  },
                                  {
                                    "TextValue": "Thu"
                                  },
                                  {
                                    "TextValue": "Wed"
                                  },
                                  {
                                    "TextValue": "Tue"
                                  },
                                  {
                                    "TextValue": "Mon"
                                  },
                                  {
                                    "TextValue": "On Sale"
                                  },
                                  {
                                    "TextValue": "INet"
                                  },
                                  {
                                    "TextValue": "Amount"
                                  },
                                  {
                                    "TextValue": "Booking Type"
                                  },
                                  {
                                    "TextValue": "Price Type"
                                  },
                                  {
                                    "TextValue": "Buying Price"
                                  },
                                  {
                                    "TextValue": "Child Policy"
                                  },
                                  {
                                    "TextValue": "Charging Policy"
                                  }
                                ]
                              }
                            },
                            "Details": [
                              {
                                "Section": {
                                  "Field": [
                                    {
                                      "FormattedValue": "Standard Cabin (DBL)",
                                      "Value": "Standard Cabin (DBL)"
                                    },
                                    {
                                      "FormattedValue": "Nett Cost Price",
                                      "Value": "Nett Cost Price"
                                    },
                                    {
                                      "FormattedValue": "FIT",
                                      "Value": "FIT"
                                    },
                                    {
                                      "FormattedValue": "Per Person per Night",
                                      "Value": "Per Person per Night"
                                    },
                                    {
                                      "FormattedValue": "Child Policy 29",
                                      "Value": "Child Policy 29"
                                    },
                                    {
                                      "FormattedValue": "ZAR 5552.00",
                                      "Value": "ZAR 5552.00"
                                    },
                                    {
                                      "FormattedValue": "N",
                                      "Value": 0
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Fully Inclusive",
                                      "Value": "Fully Inclusive"
                                    }
                                  ]
                                }
                              },
                              {
                                "Section": {
                                  "Field": [
                                    {
                                      "FormattedValue": "Standard Cabin (SGL)",
                                      "Value": "Standard Cabin (SGL)"
                                    },
                                    {
                                      "FormattedValue": "Nett Cost Price",
                                      "Value": "Nett Cost Price"
                                    },
                                    {
                                      "FormattedValue": "FIT",
                                      "Value": "FIT"
                                    },
                                    {
                                      "FormattedValue": "Per Person per Night",
                                      "Value": "Per Person per Night"
                                    },
                                    {
                                      "FormattedValue": "",
                                      "Value": ""
                                    },
                                    {
                                      "FormattedValue": "ZAR 7217.60",
                                      "Value": "ZAR 7217.60"
                                    },
                                    {
                                      "FormattedValue": "N",
                                      "Value": 0
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Fully Inclusive",
                                      "Value": "Fully Inclusive"
                                    }
                                  ]
                                }
                              },
                              {
                                "Section": {
                                  "Field": [
                                    {
                                      "FormattedValue": "Superior Cabin (DBL)",
                                      "Value": "Superior Cabin (DBL)"
                                    },
                                    {
                                      "FormattedValue": "Nett Cost Price",
                                      "Value": "Nett Cost Price"
                                    },
                                    {
                                      "FormattedValue": "FIT",
                                      "Value": "FIT"
                                    },
                                    {
                                      "FormattedValue": "Per Person per Night",
                                      "Value": "Per Person per Night"
                                    },
                                    {
                                      "FormattedValue": "Child Policy 29",
                                      "Value": "Child Policy 29"
                                    },
                                    {
                                      "FormattedValue": "ZAR 6662.00",
                                      "Value": "ZAR 6662.00"
                                    },
                                    {
                                      "FormattedValue": "N",
                                      "Value": 0
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Fully Inclusive",
                                      "Value": "Fully Inclusive"
                                    }
                                  ]
                                }
                              },
                              {
                                "Section": {
                                  "Field": [
                                    {
                                      "FormattedValue": "Superior Cabin (SGL)",
                                      "Value": "Superior Cabin (SGL)"
                                    },
                                    {
                                      "FormattedValue": "Nett Cost Price",
                                      "Value": "Nett Cost Price"
                                    },
                                    {
                                      "FormattedValue": "FIT",
                                      "Value": "FIT"
                                    },
                                    {
                                      "FormattedValue": "Per Person per Night",
                                      "Value": "Per Person per Night"
                                    },
                                    {
                                      "FormattedValue": "",
                                      "Value": ""
                                    },
                                    {
                                      "FormattedValue": "ZAR 8660.60",
                                      "Value": "ZAR 8660.60"
                                    },
                                    {
                                      "FormattedValue": "N",
                                      "Value": 0
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Fully Inclusive",
                                      "Value": "Fully Inclusive"
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        },
                        {
                          "Subreport": {
                            "ReportHeader": {
                              "Section": {
                                "Text": {
                                  "TextValue": "Extras"
                                }
                              }
                            },
                            "Details": [
                              {
                                "Section": {
                                  "Field": [
                                    {
                                      "FormattedValue": "E0027 - Community development levy",
                                      "Value": "E0027 - Community development levy"
                                    },
                                    {
                                      "FormattedValue": "Nett Cost Price",
                                      "Value": "Nett Cost Price"
                                    },
                                    {
                                      "FormattedValue": "FIT",
                                      "Value": "FIT"
                                    },
                                    {
                                      "FormattedValue": "Per Person per Night",
                                      "Value": "Per Person per Night"
                                    },
                                    {
                                      "FormattedValue": "",
                                      "Value": ""
                                    },
                                    {
                                      "FormattedValue": "ZAR 90.00",
                                      "Value": "ZAR 90.00"
                                    },
                                    {
                                      "FormattedValue": "N",
                                      "Value": 0
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "",
                                      "Value": ""
                                    }
                                  ]
                                }
                              },
                              {
                                "Section": {
                                  "Field": [
                                    {
                                      "FormattedValue": "E0035 - Fuel Surcharge",
                                      "Value": "E0035 - Fuel Surcharge"
                                    },
                                    {
                                      "FormattedValue": "Nett Cost Price",
                                      "Value": "Nett Cost Price"
                                    },
                                    {
                                      "FormattedValue": "FIT",
                                      "Value": "FIT"
                                    },
                                    {
                                      "FormattedValue": "Per Person per Day",
                                      "Value": "Per Person per Day"
                                    },
                                    {
                                      "FormattedValue": "",
                                      "Value": ""
                                    },
                                    {
                                      "FormattedValue": "ZAR 250.00",
                                      "Value": "ZAR 250.00"
                                    },
                                    {
                                      "FormattedValue": "N",
                                      "Value": 0
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "",
                                      "Value": ""
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                ]
              },
              "GroupFooter": {
                "Section": ""
              }
            }
          },
          {
            "GroupHeader": {
              "Section": {
                "Text": [
                  {
                    "TextValue": "Service Name:"
                  },
                  {
                    "TextValue": "Supplier:"
                  }
                ],
                "Field": [
                  {
                    "FormattedValue": "Zambezi Queen",
                    "Value": "Zambezi Queen"
                  },
                  {
                    "FormattedValue": "Zambezi Queen Collection",
                    "Value": "Zambezi Queen Collection"
                  },
                  {
                    "FormattedValue": "ZAMQUE",
                    "Value": "ZAMQUE"
                  }
                ]
              }
            },
            "Group": {
              "GroupHeader": {
                "Section": {
                  "Text": [
                    {
                      "TextValue": "Service Status:"
                    },
                    {
                      "TextValue": "Service Type:"
                    }
                  ],
                  "Field": [
                    {
                      "FormattedValue": "Active",
                      "Value": "Active"
                    },
                    {
                      "FormattedValue": "Accommodation",
                      "Value": "Accommodation"
                    }
                  ]
                }
              },
              "Group": {
                "GroupHeader": {
                  "Section": {
                    "Text": [
                      {
                        "TextValue": "Contract Name:"
                      },
                      {
                        "TextValue": "Contract Duration From"
                      },
                      {
                        "TextValue": "To"
                      }
                    ],
                    "Field": [
                      {
                        "FormattedValue": "Zambezi Queen 2023",
                        "Value": "Zambezi Queen 2023"
                      },
                      {
                        "FormattedValue": "1/1/2023",
                        "Value": "2023-01-01"
                      },
                      {
                        "FormattedValue": "12/31/2023",
                        "Value": "2023-12-31"
                      }
                    ]
                  }
                },
                "Group": [
                  {
                    "GroupHeader": {
                      "Section": {
                        "Text": [
                          {
                            "TextValue": "Season:"
                          },
                          {
                            "TextValue": "Season Duration From"
                          },
                          {
                            "TextValue": "To"
                          }
                        ],
                        "Field": [
                          {
                            "FormattedValue": "Season 1",
                            "Value": "Season 1"
                          },
                          {
                            "FormattedValue": "12/1/2023",
                            "Value": "2023-12-01"
                          },
                          {
                            "FormattedValue": "12/31/2023",
                            "Value": "2023-12-31"
                          }
                        ]
                      }
                    },
                    "Details": {
                      "Section": [
                        {
                          "Subreport": {
                            "ReportHeader": {
                              "Section": {
                                "Text": [
                                  {
                                    "TextValue": "Meal Plan"
                                  },
                                  {
                                    "TextValue": "Sun"
                                  },
                                  {
                                    "TextValue": "Sat"
                                  },
                                  {
                                    "TextValue": "Fri"
                                  },
                                  {
                                    "TextValue": "Thu"
                                  },
                                  {
                                    "TextValue": "Wed"
                                  },
                                  {
                                    "TextValue": "Tue"
                                  },
                                  {
                                    "TextValue": "Mon"
                                  },
                                  {
                                    "TextValue": "On Sale"
                                  },
                                  {
                                    "TextValue": "INet"
                                  },
                                  {
                                    "TextValue": "Amount"
                                  },
                                  {
                                    "TextValue": "Booking Type"
                                  },
                                  {
                                    "TextValue": "Price Type"
                                  },
                                  {
                                    "TextValue": "Buying Price"
                                  },
                                  {
                                    "TextValue": "Child Policy"
                                  },
                                  {
                                    "TextValue": "Charging Policy"
                                  }
                                ]
                              }
                            },
                            "Details": [
                              {
                                "Section": {
                                  "Field": [
                                    {
                                      "FormattedValue": "Master Suite (DBL)",
                                      "Value": "Master Suite (DBL)"
                                    },
                                    {
                                      "FormattedValue": "Nett Cost Price",
                                      "Value": "Nett Cost Price"
                                    },
                                    {
                                      "FormattedValue": "FIT",
                                      "Value": "FIT"
                                    },
                                    {
                                      "FormattedValue": "Per Person per Night",
                                      "Value": "Per Person per Night"
                                    },
                                    {
                                      "FormattedValue": "Child Policy 29",
                                      "Value": "Child Policy 29"
                                    },
                                    {
                                      "FormattedValue": "ZAR 9169.00",
                                      "Value": "ZAR 9169.00"
                                    },
                                    {
                                      "FormattedValue": "N",
                                      "Value": 0
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Fully Inclusive",
                                      "Value": "Fully Inclusive"
                                    }
                                  ]
                                }
                              },
                              {
                                "Section": {
                                  "Field": [
                                    {
                                      "FormattedValue": "Master Suite (SGL)",
                                      "Value": "Master Suite (SGL)"
                                    },
                                    {
                                      "FormattedValue": "Nett Cost Price",
                                      "Value": "Nett Cost Price"
                                    },
                                    {
                                      "FormattedValue": "FIT",
                                      "Value": "FIT"
                                    },
                                    {
                                      "FormattedValue": "Per Person per Night",
                                      "Value": "Per Person per Night"
                                    },
                                    {
                                      "FormattedValue": "Child Policy 29",
                                      "Value": "Child Policy 29"
                                    },
                                    {
                                      "FormattedValue": "ZAR 11920.00",
                                      "Value": "ZAR 11920.00"
                                    },
                                    {
                                      "FormattedValue": "N",
                                      "Value": 0
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Fully Inclusive",
                                      "Value": "Fully Inclusive"
                                    }
                                  ]
                                }
                              },
                              {
                                "Section": {
                                  "Field": [
                                    {
                                      "FormattedValue": "Standard Suite (DBL)",
                                      "Value": "Standard Suite (DBL)"
                                    },
                                    {
                                      "FormattedValue": "Nett Cost Price",
                                      "Value": "Nett Cost Price"
                                    },
                                    {
                                      "FormattedValue": "FIT",
                                      "Value": "FIT"
                                    },
                                    {
                                      "FormattedValue": "Per Person per Night",
                                      "Value": "Per Person per Night"
                                    },
                                    {
                                      "FormattedValue": "Child Policy 29",
                                      "Value": "Child Policy 29"
                                    },
                                    {
                                      "FormattedValue": "ZAR 7773.00",
                                      "Value": "ZAR 7773.00"
                                    },
                                    {
                                      "FormattedValue": "N",
                                      "Value": 0
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Fully Inclusive",
                                      "Value": "Fully Inclusive"
                                    }
                                  ]
                                }
                              },
                              {
                                "Section": {
                                  "Field": [
                                    {
                                      "FormattedValue": "Standard Suite (SGL)",
                                      "Value": "Standard Suite (SGL)"
                                    },
                                    {
                                      "FormattedValue": "Nett Cost Price",
                                      "Value": "Nett Cost Price"
                                    },
                                    {
                                      "FormattedValue": "FIT",
                                      "Value": "FIT"
                                    },
                                    {
                                      "FormattedValue": "Per Person per Night",
                                      "Value": "Per Person per Night"
                                    },
                                    {
                                      "FormattedValue": "Child Policy 29",
                                      "Value": "Child Policy 29"
                                    },
                                    {
                                      "FormattedValue": "ZAR 10104.90",
                                      "Value": "ZAR 10104.90"
                                    },
                                    {
                                      "FormattedValue": "N",
                                      "Value": 0
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Fully Inclusive",
                                      "Value": "Fully Inclusive"
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        },
                        {
                          "Subreport": {
                            "ReportHeader": {
                              "Section": {
                                "Text": {
                                  "TextValue": "Extras"
                                }
                              }
                            },
                            "Details": [
                              {
                                "Section": {
                                  "Field": [
                                    {
                                      "FormattedValue": "E0027 - Community development levy",
                                      "Value": "E0027 - Community development levy"
                                    },
                                    {
                                      "FormattedValue": "Nett Cost Price",
                                      "Value": "Nett Cost Price"
                                    },
                                    {
                                      "FormattedValue": "FIT",
                                      "Value": "FIT"
                                    },
                                    {
                                      "FormattedValue": "Per Person per Night",
                                      "Value": "Per Person per Night"
                                    },
                                    {
                                      "FormattedValue": "",
                                      "Value": ""
                                    },
                                    {
                                      "FormattedValue": "ZAR 120.00",
                                      "Value": "ZAR 120.00"
                                    },
                                    {
                                      "FormattedValue": "N",
                                      "Value": 0
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "",
                                      "Value": ""
                                    }
                                  ]
                                }
                              },
                              {
                                "Section": {
                                  "Field": [
                                    {
                                      "FormattedValue": "E0035 - Fuel Surcharge",
                                      "Value": "E0035 - Fuel Surcharge"
                                    },
                                    {
                                      "FormattedValue": "Nett Cost Price",
                                      "Value": "Nett Cost Price"
                                    },
                                    {
                                      "FormattedValue": "FIT",
                                      "Value": "FIT"
                                    },
                                    {
                                      "FormattedValue": "Per Person per Day",
                                      "Value": "Per Person per Day"
                                    },
                                    {
                                      "FormattedValue": "",
                                      "Value": ""
                                    },
                                    {
                                      "FormattedValue": "ZAR 250.00",
                                      "Value": "ZAR 250.00"
                                    },
                                    {
                                      "FormattedValue": "N",
                                      "Value": 0
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "",
                                      "Value": ""
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  },
                  {
                    "GroupHeader": {
                      "Section": {
                        "Text": [
                          {
                            "TextValue": "Season:"
                          },
                          {
                            "TextValue": "Season Duration From"
                          },
                          {
                            "TextValue": "To"
                          }
                        ],
                        "Field": [
                          {
                            "FormattedValue": "Season 2",
                            "Value": "Season 2"
                          },
                          {
                            "FormattedValue": "3/1/2023",
                            "Value": "2023-03-01"
                          },
                          {
                            "FormattedValue": "11/30/2023",
                            "Value": "2023-11-30"
                          }
                        ]
                      }
                    },
                    "Details": {
                      "Section": [
                        {
                          "Subreport": {
                            "ReportHeader": {
                              "Section": {
                                "Text": [
                                  {
                                    "TextValue": "Meal Plan"
                                  },
                                  {
                                    "TextValue": "Sun"
                                  },
                                  {
                                    "TextValue": "Sat"
                                  },
                                  {
                                    "TextValue": "Fri"
                                  },
                                  {
                                    "TextValue": "Thu"
                                  },
                                  {
                                    "TextValue": "Wed"
                                  },
                                  {
                                    "TextValue": "Tue"
                                  },
                                  {
                                    "TextValue": "Mon"
                                  },
                                  {
                                    "TextValue": "On Sale"
                                  },
                                  {
                                    "TextValue": "INet"
                                  },
                                  {
                                    "TextValue": "Amount"
                                  },
                                  {
                                    "TextValue": "Booking Type"
                                  },
                                  {
                                    "TextValue": "Price Type"
                                  },
                                  {
                                    "TextValue": "Buying Price"
                                  },
                                  {
                                    "TextValue": "Child Policy"
                                  },
                                  {
                                    "TextValue": "Charging Policy"
                                  }
                                ]
                              }
                            },
                            "Details": [
                              {
                                "Section": {
                                  "Field": [
                                    {
                                      "FormattedValue": "Master Suite (DBL)",
                                      "Value": "Master Suite (DBL)"
                                    },
                                    {
                                      "FormattedValue": "Nett Cost Price",
                                      "Value": "Nett Cost Price"
                                    },
                                    {
                                      "FormattedValue": "FIT",
                                      "Value": "FIT"
                                    },
                                    {
                                      "FormattedValue": "Per Person per Night",
                                      "Value": "Per Person per Night"
                                    },
                                    {
                                      "FormattedValue": "Child Policy 29",
                                      "Value": "Child Policy 29"
                                    },
                                    {
                                      "FormattedValue": "ZAR 11116.00",
                                      "Value": "ZAR 11116.00"
                                    },
                                    {
                                      "FormattedValue": "N",
                                      "Value": 0
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Fully Inclusive",
                                      "Value": "Fully Inclusive"
                                    }
                                  ]
                                }
                              },
                              {
                                "Section": {
                                  "Field": [
                                    {
                                      "FormattedValue": "Master Suite (SGL)",
                                      "Value": "Master Suite (SGL)"
                                    },
                                    {
                                      "FormattedValue": "Nett Cost Price",
                                      "Value": "Nett Cost Price"
                                    },
                                    {
                                      "FormattedValue": "FIT",
                                      "Value": "FIT"
                                    },
                                    {
                                      "FormattedValue": "Per Person per Night",
                                      "Value": "Per Person per Night"
                                    },
                                    {
                                      "FormattedValue": "Child Policy 29",
                                      "Value": "Child Policy 29"
                                    },
                                    {
                                      "FormattedValue": "ZAR 14450.80",
                                      "Value": "ZAR 14450.80"
                                    },
                                    {
                                      "FormattedValue": "N",
                                      "Value": 0
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Fully Inclusive",
                                      "Value": "Fully Inclusive"
                                    }
                                  ]
                                }
                              },
                              {
                                "Section": {
                                  "Field": [
                                    {
                                      "FormattedValue": "Standard Suite (DBL)",
                                      "Value": "Standard Suite (DBL)"
                                    },
                                    {
                                      "FormattedValue": "Nett Cost Price",
                                      "Value": "Nett Cost Price"
                                    },
                                    {
                                      "FormattedValue": "FIT",
                                      "Value": "FIT"
                                    },
                                    {
                                      "FormattedValue": "Per Person per Night",
                                      "Value": "Per Person per Night"
                                    },
                                    {
                                      "FormattedValue": "Child Policy 29",
                                      "Value": "Child Policy 29"
                                    },
                                    {
                                      "FormattedValue": "ZAR 9418.00",
                                      "Value": "ZAR 9418.00"
                                    },
                                    {
                                      "FormattedValue": "N",
                                      "Value": 0
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Fully Inclusive",
                                      "Value": "Fully Inclusive"
                                    }
                                  ]
                                }
                              },
                              {
                                "Section": {
                                  "Field": [
                                    {
                                      "FormattedValue": "Standard Suite (SGL)",
                                      "Value": "Standard Suite (SGL)"
                                    },
                                    {
                                      "FormattedValue": "Nett Cost Price",
                                      "Value": "Nett Cost Price"
                                    },
                                    {
                                      "FormattedValue": "FIT",
                                      "Value": "FIT"
                                    },
                                    {
                                      "FormattedValue": "Per Person per Night",
                                      "Value": "Per Person per Night"
                                    },
                                    {
                                      "FormattedValue": "Child Policy 29",
                                      "Value": "Child Policy 29"
                                    },
                                    {
                                      "FormattedValue": "ZAR 12243.40",
                                      "Value": "ZAR 12243.40"
                                    },
                                    {
                                      "FormattedValue": "N",
                                      "Value": 0
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Fully Inclusive",
                                      "Value": "Fully Inclusive"
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        },
                        {
                          "Subreport": {
                            "ReportHeader": {
                              "Section": {
                                "Text": {
                                  "TextValue": "Extras"
                                }
                              }
                            },
                            "Details": [
                              {
                                "Section": {
                                  "Field": [
                                    {
                                      "FormattedValue": "E0027 - Community development levy",
                                      "Value": "E0027 - Community development levy"
                                    },
                                    {
                                      "FormattedValue": "Nett Cost Price",
                                      "Value": "Nett Cost Price"
                                    },
                                    {
                                      "FormattedValue": "FIT",
                                      "Value": "FIT"
                                    },
                                    {
                                      "FormattedValue": "Per Person per Night",
                                      "Value": "Per Person per Night"
                                    },
                                    {
                                      "FormattedValue": "",
                                      "Value": ""
                                    },
                                    {
                                      "FormattedValue": "ZAR 120.00",
                                      "Value": "ZAR 120.00"
                                    },
                                    {
                                      "FormattedValue": "N",
                                      "Value": 0
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "",
                                      "Value": ""
                                    }
                                  ]
                                }
                              },
                              {
                                "Section": {
                                  "Field": [
                                    {
                                      "FormattedValue": "E0035 - Fuel Surcharge",
                                      "Value": "E0035 - Fuel Surcharge"
                                    },
                                    {
                                      "FormattedValue": "Nett Cost Price",
                                      "Value": "Nett Cost Price"
                                    },
                                    {
                                      "FormattedValue": "FIT",
                                      "Value": "FIT"
                                    },
                                    {
                                      "FormattedValue": "Per Person per Day",
                                      "Value": "Per Person per Day"
                                    },
                                    {
                                      "FormattedValue": "",
                                      "Value": ""
                                    },
                                    {
                                      "FormattedValue": "ZAR 250.00",
                                      "Value": "ZAR 250.00"
                                    },
                                    {
                                      "FormattedValue": "N",
                                      "Value": 0
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "",
                                      "Value": ""
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  },
                  {
                    "GroupHeader": {
                      "Section": {
                        "Text": [
                          {
                            "TextValue": "Season:"
                          },
                          {
                            "TextValue": "Season Duration From"
                          },
                          {
                            "TextValue": "To"
                          }
                        ],
                        "Field": [
                          {
                            "FormattedValue": "Season 1",
                            "Value": "Season 1"
                          },
                          {
                            "FormattedValue": "1/1/2023",
                            "Value": "2023-01-01"
                          },
                          {
                            "FormattedValue": "2/28/2023",
                            "Value": "2023-02-28"
                          }
                        ]
                      }
                    },
                    "Details": {
                      "Section": [
                        {
                          "Subreport": {
                            "ReportHeader": {
                              "Section": {
                                "Text": [
                                  {
                                    "TextValue": "Meal Plan"
                                  },
                                  {
                                    "TextValue": "Sun"
                                  },
                                  {
                                    "TextValue": "Sat"
                                  },
                                  {
                                    "TextValue": "Fri"
                                  },
                                  {
                                    "TextValue": "Thu"
                                  },
                                  {
                                    "TextValue": "Wed"
                                  },
                                  {
                                    "TextValue": "Tue"
                                  },
                                  {
                                    "TextValue": "Mon"
                                  },
                                  {
                                    "TextValue": "On Sale"
                                  },
                                  {
                                    "TextValue": "INet"
                                  },
                                  {
                                    "TextValue": "Amount"
                                  },
                                  {
                                    "TextValue": "Booking Type"
                                  },
                                  {
                                    "TextValue": "Price Type"
                                  },
                                  {
                                    "TextValue": "Buying Price"
                                  },
                                  {
                                    "TextValue": "Child Policy"
                                  },
                                  {
                                    "TextValue": "Charging Policy"
                                  }
                                ]
                              }
                            },
                            "Details": [
                              {
                                "Section": {
                                  "Field": [
                                    {
                                      "FormattedValue": "Master Suite (DBL)",
                                      "Value": "Master Suite (DBL)"
                                    },
                                    {
                                      "FormattedValue": "Nett Cost Price",
                                      "Value": "Nett Cost Price"
                                    },
                                    {
                                      "FormattedValue": "FIT",
                                      "Value": "FIT"
                                    },
                                    {
                                      "FormattedValue": "Per Person per Night",
                                      "Value": "Per Person per Night"
                                    },
                                    {
                                      "FormattedValue": "Child Policy 29",
                                      "Value": "Child Policy 29"
                                    },
                                    {
                                      "FormattedValue": "ZAR 9169.00",
                                      "Value": "ZAR 9169.00"
                                    },
                                    {
                                      "FormattedValue": "N",
                                      "Value": 0
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Fully Inclusive",
                                      "Value": "Fully Inclusive"
                                    }
                                  ]
                                }
                              },
                              {
                                "Section": {
                                  "Field": [
                                    {
                                      "FormattedValue": "Master Suite (SGL)",
                                      "Value": "Master Suite (SGL)"
                                    },
                                    {
                                      "FormattedValue": "Nett Cost Price",
                                      "Value": "Nett Cost Price"
                                    },
                                    {
                                      "FormattedValue": "FIT",
                                      "Value": "FIT"
                                    },
                                    {
                                      "FormattedValue": "Per Person per Night",
                                      "Value": "Per Person per Night"
                                    },
                                    {
                                      "FormattedValue": "Child Policy 29",
                                      "Value": "Child Policy 29"
                                    },
                                    {
                                      "FormattedValue": "ZAR 11920.00",
                                      "Value": "ZAR 11920.00"
                                    },
                                    {
                                      "FormattedValue": "N",
                                      "Value": 0
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Fully Inclusive",
                                      "Value": "Fully Inclusive"
                                    }
                                  ]
                                }
                              },
                              {
                                "Section": {
                                  "Field": [
                                    {
                                      "FormattedValue": "Standard Suite (DBL)",
                                      "Value": "Standard Suite (DBL)"
                                    },
                                    {
                                      "FormattedValue": "Nett Cost Price",
                                      "Value": "Nett Cost Price"
                                    },
                                    {
                                      "FormattedValue": "FIT",
                                      "Value": "FIT"
                                    },
                                    {
                                      "FormattedValue": "Per Person per Night",
                                      "Value": "Per Person per Night"
                                    },
                                    {
                                      "FormattedValue": "Child Policy 29",
                                      "Value": "Child Policy 29"
                                    },
                                    {
                                      "FormattedValue": "ZAR 7773.00",
                                      "Value": "ZAR 7773.00"
                                    },
                                    {
                                      "FormattedValue": "N",
                                      "Value": 0
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Fully Inclusive",
                                      "Value": "Fully Inclusive"
                                    }
                                  ]
                                }
                              },
                              {
                                "Section": {
                                  "Field": [
                                    {
                                      "FormattedValue": "Standard Suite (SGL)",
                                      "Value": "Standard Suite (SGL)"
                                    },
                                    {
                                      "FormattedValue": "Nett Cost Price",
                                      "Value": "Nett Cost Price"
                                    },
                                    {
                                      "FormattedValue": "FIT",
                                      "Value": "FIT"
                                    },
                                    {
                                      "FormattedValue": "Per Person per Night",
                                      "Value": "Per Person per Night"
                                    },
                                    {
                                      "FormattedValue": "Child Policy 29",
                                      "Value": "Child Policy 29"
                                    },
                                    {
                                      "FormattedValue": "ZAR 10104.90",
                                      "Value": "ZAR 10104.90"
                                    },
                                    {
                                      "FormattedValue": "N",
                                      "Value": 0
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Fully Inclusive",
                                      "Value": "Fully Inclusive"
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        },
                        {
                          "Subreport": {
                            "ReportHeader": {
                              "Section": {
                                "Text": {
                                  "TextValue": "Extras"
                                }
                              }
                            },
                            "Details": [
                              {
                                "Section": {
                                  "Field": [
                                    {
                                      "FormattedValue": "E0027 - Community development levy",
                                      "Value": "E0027 - Community development levy"
                                    },
                                    {
                                      "FormattedValue": "Nett Cost Price",
                                      "Value": "Nett Cost Price"
                                    },
                                    {
                                      "FormattedValue": "FIT",
                                      "Value": "FIT"
                                    },
                                    {
                                      "FormattedValue": "Per Person per Night",
                                      "Value": "Per Person per Night"
                                    },
                                    {
                                      "FormattedValue": "",
                                      "Value": ""
                                    },
                                    {
                                      "FormattedValue": "ZAR 120.00",
                                      "Value": "ZAR 120.00"
                                    },
                                    {
                                      "FormattedValue": "N",
                                      "Value": 0
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "",
                                      "Value": ""
                                    }
                                  ]
                                }
                              },
                              {
                                "Section": {
                                  "Field": [
                                    {
                                      "FormattedValue": "E0035 - Fuel Surcharge",
                                      "Value": "E0035 - Fuel Surcharge"
                                    },
                                    {
                                      "FormattedValue": "Nett Cost Price",
                                      "Value": "Nett Cost Price"
                                    },
                                    {
                                      "FormattedValue": "FIT",
                                      "Value": "FIT"
                                    },
                                    {
                                      "FormattedValue": "Per Person per Day",
                                      "Value": "Per Person per Day"
                                    },
                                    {
                                      "FormattedValue": "",
                                      "Value": ""
                                    },
                                    {
                                      "FormattedValue": "ZAR 250.00",
                                      "Value": "ZAR 250.00"
                                    },
                                    {
                                      "FormattedValue": "N",
                                      "Value": 0
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "Y",
                                      "Value": 1
                                    },
                                    {
                                      "FormattedValue": "",
                                      "Value": ""
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                ]
              },
              "GroupFooter": {
                "Section": ""
              }
            }
          }
        ]
      }
    }
  }

  accomodations = []
  // Object.values(json).CrystalReport.Group.map(v => v.Group.Group.Group.map(v => console.log('-> %o', v.Details)))
  Object.values(json).map((v) =>
    v.CrystalReport.Group.map((v) =>
      v.Group.Group.Group.map((v) =>
        v.Details.Section.map((v) =>
          v.Subreport.Details.map((v) => {
            if (v.Section.Field[0].Value.includes('DBL')) {
              let results = {};

              results.name = v.Section.Field[0].Value;
              results.price = v.Section.Field[5].Value;
              accomodations.push(results);
            
            }
          })
        )
      )
    )
  );

  //console.log(accomodations)

  let mergedAccommodations = [];

  for (let i = 0; i < accomodations.length; i += 2) {
    if (i + 1 < accomodations.length) {
      mergedAccommodations.push([accomodations[i], accomodations[i + 1]]);
    }
  }

  console.log(mergedAccommodations);
  fs.writeFile('generatedreport.json', JSON.stringify(mergedAccommodations), (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Report Data written to file -generatedReport.json');
  });
}


module.exports = generateReport;