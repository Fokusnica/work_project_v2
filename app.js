var app =angular.module('chainSelect', [])

app.controller('SelectController',function($scope){ 
  $scope.drop2_5 = function() {
   $scope.categoryItem = "";
    $scope.subChild = "";
    $scope.level4 = "";
    $scope.level5 = "";
  }
   $scope.drop3_5 = function() {
   
    $scope.subChild = "";
    $scope.level4 = "";
    $scope.level5 = "";
  } 
   $scope.drop4_5 = function() {
   
    $scope.level4 = "";
    $scope.level5 = "";
  } 
    $scope.drop_5 = function() {
   
    $scope.level5 = "";
  } 

  $scope.resetDropDown = function() {
    $scope.category = "";
    $scope.categoryItem = "";
    $scope.subChild = "";
    $scope.level4 = "";
    $scope.level5 = "";
  }

  // Data taken from KnockoutJs cart example
  $scope.sampleProductCategories = [
  {
    "name": "Classic Cars",
    "products": [
    {
      "name": "1948 Porsche 356-A Roadster",
      "options":[
      {"value": "Color",
      "options":[
      {"value": "Red", "options": [{"value": "Dark Red"}, {"value": "Not Dark Red"}]},
      {"value":"Black"}
      ],                                    
    },
    {"value":"Seats",
    "options":[
    {"value": "Leather"},
    {"value":"Cloth"}
    ],    

  },

  {"value":"Warranty",
  "options":[
  {"value": "2 Year"},
  {"value":"3 Year"}
  ],    

} 

],
"price": 53.9
},
{
  "name": "1948 Porsche Type 356 Roadster",
  "price": 62.16
},
{
  "name": "1949 Jaguar XK 120",
  "options":[
  {"value": "Color",
  "options":[
  {"value": "Red"},
  {"value":"Black"}
  ],                                    
},
{"value":"Seats",
"options":[
{"value": "Leather"},
{"value":"Cloth"}
],    

},

{"value":"Warranty",
"options":[
{"value": "2 Year"},
{"value":"3 Year"}
],    

} 

],
"price": 47.25
}
]

},
{
  "name": "Motorcycles",
  "products": [
  {
    "name": "1936 Harley Davidson El Knucklehead",
    "price": 24.23
  },
  {
    "name": "1957 Vespa GS150",
    "price": 32.95
  },
  {
    "name": "1960 BSA Gold Star DBD34",
    "price": 37.32
  }
  ]

},
{
  "name": "Planes",
  "products": [
  {
    "name": "1900s Vintage Bi-Plane",
    "price": 34.25
  },
  {
    "name": "1900s Vintage Tri-Plane",
    "price": 36.23
  },
  {
    "name": "1928 British Royal Navy Airplane",
    "price": 66.74
  },
  {
    "name": "1980s Black Hawk Helicopter",
    "price": 77.27
  },
  {
    "name": "ATA: B757-300",
    "price": 59.33
  }
  ]

},
{
  "name": "Bikes",
  "products": [
  {
   "name": "Mounain Bikes",
   "options":[
   {"value": "Color",
   "options":[
   {"value": "Red", "options": [{"value": "Dark Red"}, {"value": "Not Dark Red"}]},
   {"value":"Black"}
   ],                                    
 },
 {"value":"Seats",
 "options":[
 {"value": "Leather"},
 {"value":"Cloth"}
 ],    

},

{"value":"Warranty",
"options":[
{"value": "2 Year"},
{"value":"3 Year"}
],    

} 

],
"price": 250
},
{
 "name": "Sport Bikes",
 "price": 300

}

]




}
];
}
)