var xmlhttp = new XMLHttpRequest();
var url = "https://www.webcovid-19.live/all";

xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var parsed = JSON.parse(this.responseText);
    SetMap(parsed);
  }

  // var data = {
  //   "get": "statistics",
  //   "parameters": [],
  //   "errors": [],
  //   "results": 207,
  //   "response": [{
  //     "country": "China",
  //     "cases": {
  //       "new": "+31",
  //       "active": 2466,
  //       "critical": 633,
  //       "recovered": 75700,
  //       "total": 81470
  //     },
  //     "deaths": {
  //       "new": "+4",
  //       "total": 3304
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Italy",
  //     "cases": {
  //       "new": "+4050",
  //       "active": 75528,
  //       "critical": 3981,
  //       "recovered": 14620,
  //       "total": 101739
  //     },
  //     "deaths": {
  //       "new": "+812",
  //       "total": 11591
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Spain",
  //     "cases": {
  //       "new": "+7846",
  //       "active": 63460,
  //       "critical": 5231,
  //       "recovered": 16780,
  //       "total": 87956
  //     },
  //     "deaths": {
  //       "new": "+913",
  //       "total": 7716
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "USA",
  //     "cases": {
  //       "new": "+19988",
  //       "active": 154825,
  //       "critical": 3512,
  //       "recovered": 5506,
  //       "total": 163479
  //     },
  //     "deaths": {
  //       "new": "+565",
  //       "total": 3148
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Germany",
  //     "cases": {
  //       "new": "+4450",
  //       "active": 52740,
  //       "critical": 1979,
  //       "recovered": 13500,
  //       "total": 66885
  //     },
  //     "deaths": {
  //       "new": "+104",
  //       "total": 645
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Iran",
  //     "cases": {
  //       "new": "+3186",
  //       "active": 24827,
  //       "critical": 3511,
  //       "recovered": 13911,
  //       "total": 41495
  //     },
  //     "deaths": {
  //       "new": "+117",
  //       "total": 2757
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "France",
  //     "cases": {
  //       "new": "+4376",
  //       "active": 33599,
  //       "critical": 5056,
  //       "recovered": 7927,
  //       "total": 44550
  //     },
  //     "deaths": {
  //       "new": "+418",
  //       "total": 3024
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "S.-Korea",
  //     "cases": {
  //       "new": "+78",
  //       "active": 4275,
  //       "critical": 59,
  //       "recovered": 5228,
  //       "total": 9661
  //     },
  //     "deaths": {
  //       "new": "+6",
  //       "total": 158
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Switzerland",
  //     "cases": {
  //       "new": "+1093",
  //       "active": 13740,
  //       "critical": 301,
  //       "recovered": 1823,
  //       "total": 15922
  //     },
  //     "deaths": {
  //       "new": "+59",
  //       "total": 359
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "UK",
  //     "cases": {
  //       "new": "+2619",
  //       "active": 20598,
  //       "critical": 163,
  //       "recovered": 135,
  //       "total": 22141
  //     },
  //     "deaths": {
  //       "new": "+180",
  //       "total": 1408
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Netherlands",
  //     "cases": {
  //       "new": "+884",
  //       "active": 10636,
  //       "critical": 1053,
  //       "recovered": 250,
  //       "total": 11750
  //     },
  //     "deaths": {
  //       "new": "+93",
  //       "total": 864
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Austria",
  //     "cases": {
  //       "new": "+830",
  //       "active": 8874,
  //       "critical": 193,
  //       "recovered": 636,
  //       "total": 9618
  //     },
  //     "deaths": {
  //       "new": "+22",
  //       "total": 108
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Belgium",
  //     "cases": {
  //       "new": "+1063",
  //       "active": 9859,
  //       "critical": 927,
  //       "recovered": 1527,
  //       "total": 11899
  //     },
  //     "deaths": {
  //       "new": "+82",
  //       "total": 513
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Norway",
  //     "cases": {
  //       "new": "+161",
  //       "active": 4401,
  //       "critical": 97,
  //       "recovered": 12,
  //       "total": 4445
  //     },
  //     "deaths": {
  //       "new": "+6",
  //       "total": 32
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Sweden",
  //     "cases": {
  //       "new": "+328",
  //       "active": 3866,
  //       "critical": 306,
  //       "recovered": 16,
  //       "total": 4028
  //     },
  //     "deaths": {
  //       "new": "+36",
  //       "total": 146
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Canada",
  //     "cases": {
  //       "new": "+1128",
  //       "active": 6266,
  //       "critical": 120,
  //       "recovered": 1093,
  //       "total": 7448
  //     },
  //     "deaths": {
  //       "new": "+24",
  //       "total": 89
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Denmark",
  //     "cases": {
  //       "new": "+182",
  //       "active": 2499,
  //       "critical": 137,
  //       "recovered": 1,
  //       "total": 2577
  //     },
  //     "deaths": {
  //       "new": "+5",
  //       "total": 77
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Portugal",
  //     "cases": {
  //       "new": "+446",
  //       "active": 6225,
  //       "critical": 164,
  //       "recovered": 43,
  //       "total": 6408
  //     },
  //     "deaths": {
  //       "new": "+21",
  //       "total": 140
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Malaysia",
  //     "cases": {
  //       "new": "+156",
  //       "active": 2110,
  //       "critical": 94,
  //       "recovered": 479,
  //       "total": 2626
  //     },
  //     "deaths": {
  //       "new": "+2",
  //       "total": 37
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Brazil",
  //     "cases": {
  //       "new": "+374",
  //       "active": 4347,
  //       "critical": 296,
  //       "recovered": 120,
  //       "total": 4630
  //     },
  //     "deaths": {
  //       "new": "+27",
  //       "total": 163
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Australia",
  //     "cases": {
  //       "new": "+297",
  //       "active": 4197,
  //       "critical": 28,
  //       "recovered": 244,
  //       "total": 4460
  //     },
  //     "deaths": {
  //       "new": "+2",
  //       "total": 19
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Japan",
  //     "cases": {
  //       "new": "+87",
  //       "active": 1473,
  //       "critical": 56,
  //       "recovered": 424,
  //       "total": 1953
  //     },
  //     "deaths": {
  //       "new": "+2",
  //       "total": 56
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Czechia",
  //     "cases": {
  //       "new": "+184",
  //       "active": 2953,
  //       "critical": 52,
  //       "recovered": 25,
  //       "total": 3001
  //     },
  //     "deaths": {
  //       "new": "+7",
  //       "total": 23
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Turkey",
  //     "cases": {
  //       "new": "+1610",
  //       "active": 10497,
  //       "critical": 568,
  //       "recovered": 162,
  //       "total": 10827
  //     },
  //     "deaths": {
  //       "new": "+37",
  //       "total": 168
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Israel",
  //     "cases": {
  //       "new": "+448",
  //       "active": 4518,
  //       "critical": 79,
  //       "recovered": 161,
  //       "total": 4695
  //     },
  //     "deaths": {
  //       "new": "+1",
  //       "total": 16
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Ireland",
  //     "cases": {
  //       "new": "+295",
  //       "active": 2851,
  //       "critical": 84,
  //       "recovered": 5,
  //       "total": 2910
  //     },
  //     "deaths": {
  //       "new": "+8",
  //       "total": 54
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Diamond-Princess-",
  //     "cases": {
  //       "new": null,
  //       "active": 99,
  //       "critical": 15,
  //       "recovered": 603,
  //       "total": 712
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 10
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Luxembourg",
  //     "cases": {
  //       "new": "+38",
  //       "active": 1926,
  //       "critical": 25,
  //       "recovered": 40,
  //       "total": 1988
  //     },
  //     "deaths": {
  //       "new": "+1",
  //       "total": 22
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Pakistan",
  //     "cases": {
  //       "new": "+120",
  //       "active": 1620,
  //       "critical": 11,
  //       "recovered": 76,
  //       "total": 1717
  //     },
  //     "deaths": {
  //       "new": "+7",
  //       "total": 21
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Chile",
  //     "cases": {
  //       "new": "+310",
  //       "active": 2285,
  //       "critical": 14,
  //       "recovered": 156,
  //       "total": 2449
  //     },
  //     "deaths": {
  //       "new": "+1",
  //       "total": 8
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Poland",
  //     "cases": {
  //       "new": "+193",
  //       "active": 2017,
  //       "critical": 3,
  //       "recovered": 7,
  //       "total": 2055
  //     },
  //     "deaths": {
  //       "new": "+9",
  //       "total": 31
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Ecuador",
  //     "cases": {
  //       "new": "+42",
  //       "active": 1901,
  //       "critical": 58,
  //       "recovered": 3,
  //       "total": 1966
  //     },
  //     "deaths": {
  //       "new": "+4",
  //       "total": 62
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Greece",
  //     "cases": {
  //       "new": "+56",
  //       "active": 1114,
  //       "critical": 72,
  //       "recovered": 52,
  //       "total": 1212
  //     },
  //     "deaths": {
  //       "new": "+7",
  //       "total": 46
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Finland",
  //     "cases": {
  //       "new": "+112",
  //       "active": 1329,
  //       "critical": 49,
  //       "recovered": 10,
  //       "total": 1352
  //     },
  //     "deaths": {
  //       "new": "+2",
  //       "total": 13
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Qatar",
  //     "cases": {
  //       "new": "+59",
  //       "active": 641,
  //       "critical": 6,
  //       "recovered": 51,
  //       "total": 693
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 1
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Iceland",
  //     "cases": {
  //       "new": "+66",
  //       "active": 927,
  //       "critical": 25,
  //       "recovered": 157,
  //       "total": 1086
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 2
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Indonesia",
  //     "cases": {
  //       "new": "+129",
  //       "active": 1217,
  //       "critical": 0,
  //       "recovered": 75,
  //       "total": 1414
  //     },
  //     "deaths": {
  //       "new": "+8",
  //       "total": 122
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Singapore",
  //     "cases": {
  //       "new": "+35",
  //       "active": 648,
  //       "critical": 19,
  //       "recovered": 228,
  //       "total": 879
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 3
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Thailand",
  //     "cases": {
  //       "new": "+136",
  //       "active": 1286,
  //       "critical": 11,
  //       "recovered": 229,
  //       "total": 1524
  //     },
  //     "deaths": {
  //       "new": "+2",
  //       "total": 9
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Saudi-Arabia",
  //     "cases": {
  //       "new": "+154",
  //       "active": 1330,
  //       "critical": 12,
  //       "recovered": 115,
  //       "total": 1453
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 8
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Slovenia",
  //     "cases": {
  //       "new": "+26",
  //       "active": 735,
  //       "critical": 28,
  //       "recovered": 10,
  //       "total": 756
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 11
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Romania",
  //     "cases": {
  //       "new": "+294",
  //       "active": 1835,
  //       "critical": 33,
  //       "recovered": 209,
  //       "total": 2109
  //     },
  //     "deaths": {
  //       "new": "+22",
  //       "total": 65
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "India",
  //     "cases": {
  //       "new": "+227",
  //       "active": 1117,
  //       "critical": 0,
  //       "recovered": 102,
  //       "total": 1251
  //     },
  //     "deaths": {
  //       "new": "+5",
  //       "total": 32
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Peru",
  //     "cases": {
  //       "new": "+98",
  //       "active": 873,
  //       "critical": 49,
  //       "recovered": 53,
  //       "total": 950
  //     },
  //     "deaths": {
  //       "new": "+6",
  //       "total": 24
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Bahrain",
  //     "cases": {
  //       "new": "+16",
  //       "active": 216,
  //       "critical": 2,
  //       "recovered": 295,
  //       "total": 515
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 4
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Philippines",
  //     "cases": {
  //       "new": "+128",
  //       "active": 1426,
  //       "critical": 1,
  //       "recovered": 42,
  //       "total": 1546
  //     },
  //     "deaths": {
  //       "new": "+7",
  //       "total": 78
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Russia",
  //     "cases": {
  //       "new": "+302",
  //       "active": 1761,
  //       "critical": 8,
  //       "recovered": 66,
  //       "total": 1836
  //     },
  //     "deaths": {
  //       "new": "+1",
  //       "total": 9
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Estonia",
  //     "cases": {
  //       "new": "+36",
  //       "active": 692,
  //       "critical": 10,
  //       "recovered": 20,
  //       "total": 715
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 3
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Egypt",
  //     "cases": {
  //       "new": "+47",
  //       "active": 465,
  //       "critical": 0,
  //       "recovered": 150,
  //       "total": 656
  //     },
  //     "deaths": {
  //       "new": "+1",
  //       "total": 41
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Hong-Kong",
  //     "cases": {
  //       "new": "+41",
  //       "active": 561,
  //       "critical": 5,
  //       "recovered": 118,
  //       "total": 683
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 4
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "South-Africa",
  //     "cases": {
  //       "new": "+46",
  //       "active": 1292,
  //       "critical": 7,
  //       "recovered": 31,
  //       "total": 1326
  //     },
  //     "deaths": {
  //       "new": "+1",
  //       "total": 3
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Lebanon",
  //     "cases": {
  //       "new": "+8",
  //       "active": 400,
  //       "critical": 3,
  //       "recovered": 35,
  //       "total": 446
  //     },
  //     "deaths": {
  //       "new": "+1",
  //       "total": 11
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Iraq",
  //     "cases": {
  //       "new": "+83",
  //       "active": 432,
  //       "critical": 0,
  //       "recovered": 152,
  //       "total": 630
  //     },
  //     "deaths": {
  //       "new": "+4",
  //       "total": 46
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Croatia",
  //     "cases": {
  //       "new": "+77",
  //       "active": 717,
  //       "critical": 27,
  //       "recovered": 67,
  //       "total": 790
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 6
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Mexico",
  //     "cases": {
  //       "new": "+145",
  //       "active": 938,
  //       "critical": 1,
  //       "recovered": 35,
  //       "total": 993
  //     },
  //     "deaths": {
  //       "new": "+4",
  //       "total": 20
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Panama",
  //     "cases": {
  //       "new": "+86",
  //       "active": 1039,
  //       "critical": 43,
  //       "recovered": 9,
  //       "total": 1075
  //     },
  //     "deaths": {
  //       "new": "+3",
  //       "total": 27
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Colombia",
  //     "cases": {
  //       "new": "+96",
  //       "active": 769,
  //       "critical": 29,
  //       "recovered": 15,
  //       "total": 798
  //     },
  //     "deaths": {
  //       "new": "+4",
  //       "total": 14
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Slovakia",
  //     "cases": {
  //       "new": "+22",
  //       "active": 329,
  //       "critical": 1,
  //       "recovered": 7,
  //       "total": 336
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 0
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Kuwait",
  //     "cases": {
  //       "new": "+11",
  //       "active": 194,
  //       "critical": 13,
  //       "recovered": 72,
  //       "total": 266
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 0
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Serbia",
  //     "cases": {
  //       "new": "+44",
  //       "active": 727,
  //       "critical": 62,
  //       "recovered": 42,
  //       "total": 785
  //     },
  //     "deaths": {
  //       "new": "+3",
  //       "total": 16
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Bulgaria",
  //     "cases": {
  //       "new": "+13",
  //       "active": 334,
  //       "critical": 13,
  //       "recovered": 17,
  //       "total": 359
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 8
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "San-Marino",
  //     "cases": {
  //       "new": "+6",
  //       "active": 192,
  //       "critical": 16,
  //       "recovered": 13,
  //       "total": 230
  //     },
  //     "deaths": {
  //       "new": "+3",
  //       "total": 25
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Armenia",
  //     "cases": {
  //       "new": "+58",
  //       "active": 449,
  //       "critical": 15,
  //       "recovered": 30,
  //       "total": 482
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 3
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Argentina",
  //     "cases": {
  //       "new": null,
  //       "active": 569,
  //       "critical": 0,
  //       "recovered": 228,
  //       "total": 820
  //     },
  //     "deaths": {
  //       "new": "+3",
  //       "total": 23
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Taiwan",
  //     "cases": {
  //       "new": "+8",
  //       "active": 262,
  //       "critical": 0,
  //       "recovered": 39,
  //       "total": 306
  //     },
  //     "deaths": {
  //       "new": "+2",
  //       "total": 5
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "UAE",
  //     "cases": {
  //       "new": "+41",
  //       "active": 545,
  //       "critical": 2,
  //       "recovered": 61,
  //       "total": 611
  //     },
  //     "deaths": {
  //       "new": "+2",
  //       "total": 5
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Algeria",
  //     "cases": {
  //       "new": "+73",
  //       "active": 512,
  //       "critical": 0,
  //       "recovered": 37,
  //       "total": 584
  //     },
  //     "deaths": {
  //       "new": "+4",
  //       "total": 35
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Latvia",
  //     "cases": {
  //       "new": "+29",
  //       "active": 375,
  //       "critical": 3,
  //       "recovered": 1,
  //       "total": 376
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 0
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Costa-Rica",
  //     "cases": {
  //       "new": "+16",
  //       "active": 324,
  //       "critical": 7,
  //       "recovered": 4,
  //       "total": 330
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 2
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Dominican-Republic",
  //     "cases": {
  //       "new": "+42",
  //       "active": 855,
  //       "critical": 0,
  //       "recovered": 4,
  //       "total": 901
  //     },
  //     "deaths": {
  //       "new": "+3",
  //       "total": 42
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Uruguay",
  //     "cases": {
  //       "new": "+16",
  //       "active": 294,
  //       "critical": 9,
  //       "recovered": 25,
  //       "total": 320
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 1
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Hungary",
  //     "cases": {
  //       "new": "+39",
  //       "active": 398,
  //       "critical": 6,
  //       "recovered": 34,
  //       "total": 447
  //     },
  //     "deaths": {
  //       "new": "+2",
  //       "total": 15
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Jordan",
  //     "cases": {
  //       "new": "+9",
  //       "active": 237,
  //       "critical": 3,
  //       "recovered": 26,
  //       "total": 268
  //     },
  //     "deaths": {
  //       "new": "+2",
  //       "total": 5
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Lithuania",
  //     "cases": {
  //       "new": "+31",
  //       "active": 477,
  //       "critical": 5,
  //       "recovered": 7,
  //       "total": 491
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 7
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Morocco",
  //     "cases": {
  //       "new": "+77",
  //       "active": 508,
  //       "critical": 1,
  //       "recovered": 15,
  //       "total": 556
  //     },
  //     "deaths": {
  //       "new": "+7",
  //       "total": 33
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Vietnam",
  //     "cases": {
  //       "new": "+10",
  //       "active": 149,
  //       "critical": 3,
  //       "recovered": 55,
  //       "total": 204
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 0
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Bosnia-and-Herzegovina",
  //     "cases": {
  //       "new": "+45",
  //       "active": 341,
  //       "critical": 1,
  //       "recovered": 17,
  //       "total": 368
  //     },
  //     "deaths": {
  //       "new": "+4",
  //       "total": 10
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Faeroe-Islands",
  //     "cases": {
  //       "new": "+9",
  //       "active": 98,
  //       "critical": 1,
  //       "recovered": 70,
  //       "total": 168
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 0
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Andorra",
  //     "cases": {
  //       "new": "+36",
  //       "active": 352,
  //       "critical": 10,
  //       "recovered": 10,
  //       "total": 370
  //     },
  //     "deaths": {
  //       "new": "+2",
  //       "total": 8
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "North-Macedonia",
  //     "cases": {
  //       "new": "+26",
  //       "active": 266,
  //       "critical": 1,
  //       "recovered": 12,
  //       "total": 285
  //     },
  //     "deaths": {
  //       "new": "+1",
  //       "total": 7
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Cyprus",
  //     "cases": {
  //       "new": "+16",
  //       "active": 201,
  //       "critical": 3,
  //       "recovered": 22,
  //       "total": 230
  //     },
  //     "deaths": {
  //       "new": "+1",
  //       "total": 7
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Brunei-",
  //     "cases": {
  //       "new": "+1",
  //       "active": 88,
  //       "critical": 3,
  //       "recovered": 38,
  //       "total": 127
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 1
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Moldova",
  //     "cases": {
  //       "new": "+35",
  //       "active": 281,
  //       "critical": 44,
  //       "recovered": 15,
  //       "total": 298
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 2
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Sri-Lanka",
  //     "cases": {
  //       "new": "+5",
  //       "active": 105,
  //       "critical": 5,
  //       "recovered": 15,
  //       "total": 122
  //     },
  //     "deaths": {
  //       "new": "+1",
  //       "total": 2
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Albania",
  //     "cases": {
  //       "new": "+11",
  //       "active": 168,
  //       "critical": 7,
  //       "recovered": 44,
  //       "total": 223
  //     },
  //     "deaths": {
  //       "new": "+1",
  //       "total": 11
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Belarus",
  //     "cases": {
  //       "new": "+58",
  //       "active": 120,
  //       "critical": 2,
  //       "recovered": 32,
  //       "total": 152
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 0
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Malta",
  //     "cases": {
  //       "new": "+5",
  //       "active": 154,
  //       "critical": 4,
  //       "recovered": 2,
  //       "total": 156
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 0
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Venezuela",
  //     "cases": {
  //       "new": "+16",
  //       "active": 93,
  //       "critical": 6,
  //       "recovered": 39,
  //       "total": 135
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 3
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Burkina-Faso",
  //     "cases": {
  //       "new": "+24",
  //       "active": 203,
  //       "critical": 0,
  //       "recovered": 31,
  //       "total": 246
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 12
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Tunisia",
  //     "cases": {
  //       "new": "+50",
  //       "active": 349,
  //       "critical": 10,
  //       "recovered": 3,
  //       "total": 362
  //     },
  //     "deaths": {
  //       "new": "+2",
  //       "total": 10
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Guadeloupe",
  //     "cases": {
  //       "new": "+4",
  //       "active": 85,
  //       "critical": 10,
  //       "recovered": 17,
  //       "total": 106
  //     },
  //     "deaths": {
  //       "new": "+2",
  //       "total": 4
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Senegal",
  //     "cases": {
  //       "new": "+20",
  //       "active": 135,
  //       "critical": 0,
  //       "recovered": 27,
  //       "total": 162
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 0
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Kazakhstan",
  //     "cases": {
  //       "new": "+18",
  //       "active": 280,
  //       "critical": 0,
  //       "recovered": 21,
  //       "total": 302
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 1
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Azerbaijan",
  //     "cases": {
  //       "new": "+64",
  //       "active": 243,
  //       "critical": 23,
  //       "recovered": 26,
  //       "total": 273
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 4
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Cambodia",
  //     "cases": {
  //       "new": "+4",
  //       "active": 86,
  //       "critical": 1,
  //       "recovered": 21,
  //       "total": 107
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 0
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Palestine",
  //     "cases": {
  //       "new": "+8",
  //       "active": 98,
  //       "critical": 0,
  //       "recovered": 18,
  //       "total": 117
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 1
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "New-Zealand",
  //     "cases": {
  //       "new": "+75",
  //       "active": 525,
  //       "critical": 2,
  //       "recovered": 63,
  //       "total": 589
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 1
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Oman",
  //     "cases": {
  //       "new": "+12",
  //       "active": 150,
  //       "critical": 3,
  //       "recovered": 29,
  //       "total": 179
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 0
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Georgia",
  //     "cases": {
  //       "new": "+12",
  //       "active": 83,
  //       "critical": 6,
  //       "recovered": 20,
  //       "total": 103
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 0
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Trinidad-and-Tobago",
  //     "cases": {
  //       "new": "+5",
  //       "active": 79,
  //       "critical": 0,
  //       "recovered": 1,
  //       "total": 83
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 3
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Ukraine",
  //     "cases": {
  //       "new": "+73",
  //       "active": 527,
  //       "critical": 0,
  //       "recovered": 8,
  //       "total": 548
  //     },
  //     "deaths": {
  //       "new": "+3",
  //       "total": 13
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "R&eacute;union",
  //     "cases": {
  //       "new": "+41",
  //       "active": 223,
  //       "critical": 0,
  //       "recovered": 1,
  //       "total": 224
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 0
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Uzbekistan",
  //     "cases": {
  //       "new": "+5",
  //       "active": 140,
  //       "critical": 8,
  //       "recovered": 7,
  //       "total": 149
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 2
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Cameroon",
  //     "cases": {
  //       "new": "+48",
  //       "active": 128,
  //       "critical": 0,
  //       "recovered": 5,
  //       "total": 139
  //     },
  //     "deaths": {
  //       "new": "+4",
  //       "total": 6
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Martinique",
  //     "cases": {
  //       "new": null,
  //       "active": 92,
  //       "critical": 12,
  //       "recovered": 0,
  //       "total": 93
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 1
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Liechtenstein",
  //     "cases": {
  //       "new": "+6",
  //       "active": 62,
  //       "critical": 0,
  //       "recovered": 0,
  //       "total": 62
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 0
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Channel-Islands",
  //     "cases": {
  //       "new": "+33",
  //       "active": 139,
  //       "critical": 0,
  //       "recovered": 0,
  //       "total": 141
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 2
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Bangladesh",
  //     "cases": {
  //       "new": "+1",
  //       "active": 25,
  //       "critical": 1,
  //       "recovered": 19,
  //       "total": 49
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 5
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Afghanistan",
  //     "cases": {
  //       "new": "+50",
  //       "active": 164,
  //       "critical": 0,
  //       "recovered": 2,
  //       "total": 170
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 4
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Honduras",
  //     "cases": {
  //       "new": "+29",
  //       "active": 129,
  //       "critical": 4,
  //       "recovered": 3,
  //       "total": 139
  //     },
  //     "deaths": {
  //       "new": "+4",
  //       "total": 7
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "DRC",
  //     "cases": {
  //       "new": "+16",
  //       "active": 71,
  //       "critical": 0,
  //       "recovered": 2,
  //       "total": 81
  //     },
  //     "deaths": {
  //       "new": "+2",
  //       "total": 8
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Nigeria",
  //     "cases": {
  //       "new": "+20",
  //       "active": 121,
  //       "critical": 0,
  //       "recovered": 8,
  //       "total": 131
  //     },
  //     "deaths": {
  //       "new": "+1",
  //       "total": 2
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Cuba",
  //     "cases": {
  //       "new": "+31",
  //       "active": 162,
  //       "critical": 2,
  //       "recovered": 4,
  //       "total": 170
  //     },
  //     "deaths": {
  //       "new": "+1",
  //       "total": 4
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Ghana",
  //     "cases": {
  //       "new": "+11",
  //       "active": 145,
  //       "critical": 1,
  //       "recovered": 2,
  //       "total": 152
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 5
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Puerto-Rico",
  //     "cases": {
  //       "new": "+8",
  //       "active": 36,
  //       "critical": 0,
  //       "recovered": 1,
  //       "total": 39
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 2
  //     },
  //     "day": "2020-03-25",
  //     "time": "2020-03-25T06:00:07+00:00"
  //   }, {
  //     "country": "Jamaica",
  //     "cases": {
  //       "new": "+4",
  //       "active": 33,
  //       "critical": 0,
  //       "recovered": 2,
  //       "total": 36
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 1
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Bolivia",
  //     "cases": {
  //       "new": "+16",
  //       "active": 93,
  //       "critical": 3,
  //       "recovered": 0,
  //       "total": 97
  //     },
  //     "deaths": {
  //       "new": "+3",
  //       "total": 4
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Guyana",
  //     "cases": {
  //       "new": "+3",
  //       "active": 7,
  //       "critical": 0,
  //       "recovered": 0,
  //       "total": 8
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 1
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Paraguay",
  //     "cases": {
  //       "new": "+5",
  //       "active": 60,
  //       "critical": 3,
  //       "recovered": 1,
  //       "total": 64
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 3
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Macao",
  //     "cases": {
  //       "new": "+1",
  //       "active": 28,
  //       "critical": 0,
  //       "recovered": 10,
  //       "total": 38
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 0
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Monaco",
  //     "cases": {
  //       "new": "+3",
  //       "active": 47,
  //       "critical": 0,
  //       "recovered": 1,
  //       "total": 49
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 1
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "French-Guiana",
  //     "cases": {
  //       "new": "+15",
  //       "active": 37,
  //       "critical": 0,
  //       "recovered": 6,
  //       "total": 43
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 0
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Guatemala",
  //     "cases": {
  //       "new": "+2",
  //       "active": 25,
  //       "critical": 1,
  //       "recovered": 10,
  //       "total": 36
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 1
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Rwanda",
  //     "cases": {
  //       "new": "+10",
  //       "active": 70,
  //       "critical": 0,
  //       "recovered": 0,
  //       "total": 70
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 0
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Montenegro",
  //     "cases": {
  //       "new": "+6",
  //       "active": 90,
  //       "critical": 1,
  //       "recovered": 0,
  //       "total": 91
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 1
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Togo",
  //     "cases": {
  //       "new": "+5",
  //       "active": 28,
  //       "critical": 0,
  //       "recovered": 1,
  //       "total": 30
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 1
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "French-Polynesia",
  //     "cases": {
  //       "new": "+6",
  //       "active": 36,
  //       "critical": 2,
  //       "recovered": 0,
  //       "total": 36
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 0
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Guam",
  //     "cases": {
  //       "new": "+3",
  //       "active": 31,
  //       "critical": 0,
  //       "recovered": 0,
  //       "total": 32
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 1
  //     },
  //     "day": "2020-03-25",
  //     "time": "2020-03-25T06:00:07+00:00"
  //   }, {
  //     "country": "Mauritius",
  //     "cases": {
  //       "new": "+21",
  //       "active": 125,
  //       "critical": 1,
  //       "recovered": 0,
  //       "total": 128
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 3
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Barbados",
  //     "cases": {
  //       "new": "+7",
  //       "active": 33,
  //       "critical": 0,
  //       "recovered": 0,
  //       "total": 33
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 0
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Ivory-Coast",
  //     "cases": {
  //       "new": "+3",
  //       "active": 161,
  //       "critical": 0,
  //       "recovered": 6,
  //       "total": 168
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 1
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Kyrgyzstan",
  //     "cases": {
  //       "new": "+10",
  //       "active": 91,
  //       "critical": 0,
  //       "recovered": 3,
  //       "total": 94
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 0
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Maldives",
  //     "cases": {
  //       "new": "+1",
  //       "active": 4,
  //       "critical": 0,
  //       "recovered": 13,
  //       "total": 17
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 0
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Mayotte",
  //     "cases": {
  //       "new": "+19",
  //       "active": 72,
  //       "critical": 3,
  //       "recovered": 10,
  //       "total": 82
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 0
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Gibraltar",
  //     "cases": {
  //       "new": "+4",
  //       "active": 35,
  //       "critical": 0,
  //       "recovered": 34,
  //       "total": 69
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 0
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Mongolia",
  //     "cases": {
  //       "new": null,
  //       "active": 10,
  //       "critical": 0,
  //       "recovered": 2,
  //       "total": 12
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 0
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Ethiopia",
  //     "cases": {
  //       "new": "+2",
  //       "active": 19,
  //       "critical": 1,
  //       "recovered": 4,
  //       "total": 23
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 0
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Kenya",
  //     "cases": {
  //       "new": "+8",
  //       "active": 48,
  //       "critical": 2,
  //       "recovered": 1,
  //       "total": 50
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 1
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Seychelles",
  //     "cases": {
  //       "new": "+1",
  //       "active": 8,
  //       "critical": 0,
  //       "recovered": 0,
  //       "total": 8
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 0
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Equatorial-Guinea",
  //     "cases": {
  //       "new": "+3",
  //       "active": 12,
  //       "critical": 0,
  //       "recovered": 0,
  //       "total": 12
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 0
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Tanzania",
  //     "cases": {
  //       "new": "+5",
  //       "active": 18,
  //       "critical": 0,
  //       "recovered": 1,
  //       "total": 19
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 0
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "U.S.-Virgin-Islands",
  //     "cases": {
  //       "new": "+11",
  //       "active": 17,
  //       "critical": 0,
  //       "recovered": 0,
  //       "total": 17
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 0
  //     },
  //     "day": "2020-03-25",
  //     "time": "2020-03-25T06:00:07+00:00"
  //   }, {
  //     "country": "Gabon",
  //     "cases": {
  //       "new": "+1",
  //       "active": 6,
  //       "critical": 0,
  //       "recovered": 0,
  //       "total": 7
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 1
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Aruba",
  //     "cases": {
  //       "new": "+4",
  //       "active": 49,
  //       "critical": 0,
  //       "recovered": 1,
  //       "total": 50
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 0
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Saint-Martin",
  //     "cases": {
  //       "new": "+4",
  //       "active": 12,
  //       "critical": 0,
  //       "recovered": 2,
  //       "total": 15
  //     },
  //     "deaths": {
  //       "new": "+1",
  //       "total": 1
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Suriname",
  //     "cases": {
  //       "new": "+1",
  //       "active": 8,
  //       "critical": 0,
  //       "recovered": 0,
  //       "total": 8
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 0
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Bahamas",
  //     "cases": {
  //       "new": "+4",
  //       "active": 13,
  //       "critical": 0,
  //       "recovered": 1,
  //       "total": 14
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 0
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "New-Caledonia",
  //     "cases": {
  //       "new": "+1",
  //       "active": 15,
  //       "critical": 0,
  //       "recovered": 0,
  //       "total": 15
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 0
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Cayman-Islands",
  //     "cases": {
  //       "new": "+4",
  //       "active": 11,
  //       "critical": 0,
  //       "recovered": 0,
  //       "total": 12
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 1
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Cura&ccedil;ao",
  //     "cases": {
  //       "new": "+3",
  //       "active": 8,
  //       "critical": 0,
  //       "recovered": 2,
  //       "total": 11
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 1
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Cabo-Verde",
  //     "cases": {
  //       "new": "+1",
  //       "active": 5,
  //       "critical": 0,
  //       "recovered": 0,
  //       "total": 6
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 1
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "CAR",
  //     "cases": {
  //       "new": null,
  //       "active": 3,
  //       "critical": 0,
  //       "recovered": 0,
  //       "total": 3
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 0
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Congo",
  //     "cases": {
  //       "new": "+15",
  //       "active": 19,
  //       "critical": 0,
  //       "recovered": 0,
  //       "total": 19
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 0
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "El-Salvador",
  //     "cases": {
  //       "new": "+6",
  //       "active": 30,
  //       "critical": 5,
  //       "recovered": 0,
  //       "total": 30
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 0
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Liberia",
  //     "cases": {
  //       "new": null,
  //       "active": 3,
  //       "critical": 0,
  //       "recovered": 0,
  //       "total": 3
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 0
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Madagascar",
  //     "cases": {
  //       "new": "+4",
  //       "active": 43,
  //       "critical": 0,
  //       "recovered": 0,
  //       "total": 43
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 0
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Namibia",
  //     "cases": {
  //       "new": "+3",
  //       "active": 9,
  //       "critical": 0,
  //       "recovered": 2,
  //       "total": 11
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 0
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "St.-Barth",
  //     "cases": {
  //       "new": "+1",
  //       "active": 5,
  //       "critical": 0,
  //       "recovered": 1,
  //       "total": 6
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 0
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Zimbabwe",
  //     "cases": {
  //       "new": "+2",
  //       "active": 6,
  //       "critical": 0,
  //       "recovered": 0,
  //       "total": 7
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 1
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Sudan",
  //     "cases": {
  //       "new": null,
  //       "active": 4,
  //       "critical": 0,
  //       "recovered": 0,
  //       "total": 6
  //     },
  //     "deaths": {
  //       "new": "+1",
  //       "total": 2
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Angola",
  //     "cases": {
  //       "new": null,
  //       "active": 4,
  //       "critical": 0,
  //       "recovered": 1,
  //       "total": 7
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 2
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Benin",
  //     "cases": {
  //       "new": "+4",
  //       "active": 6,
  //       "critical": 0,
  //       "recovered": 0,
  //       "total": 6
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 0
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Bermuda",
  //     "cases": {
  //       "new": "+5",
  //       "active": 25,
  //       "critical": 0,
  //       "recovered": 2,
  //       "total": 27
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 0
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Bhutan",
  //     "cases": {
  //       "new": "+1",
  //       "active": 4,
  //       "critical": 0,
  //       "recovered": 0,
  //       "total": 4
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 0
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Fiji",
  //     "cases": {
  //       "new": "+1",
  //       "active": 5,
  //       "critical": 0,
  //       "recovered": 0,
  //       "total": 5
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 0
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Greenland",
  //     "cases": {
  //       "new": "+4",
  //       "active": 8,
  //       "critical": 0,
  //       "recovered": 2,
  //       "total": 10
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 0
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Guinea",
  //     "cases": {
  //       "new": "+6",
  //       "active": 22,
  //       "critical": 0,
  //       "recovered": 0,
  //       "total": 22
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 0
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Haiti",
  //     "cases": {
  //       "new": "+7",
  //       "active": 14,
  //       "critical": 0,
  //       "recovered": 1,
  //       "total": 15
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 0
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Isle-of-Man",
  //     "cases": {
  //       "new": "+7",
  //       "active": 49,
  //       "critical": 0,
  //       "recovered": 0,
  //       "total": 49
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 0
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Mauritania",
  //     "cases": {
  //       "new": "+1",
  //       "active": 3,
  //       "critical": 0,
  //       "recovered": 2,
  //       "total": 6
  //     },
  //     "deaths": {
  //       "new": "+1",
  //       "total": 1
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Nicaragua",
  //     "cases": {
  //       "new": null,
  //       "active": 3,
  //       "critical": 0,
  //       "recovered": 0,
  //       "total": 4
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 1
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Saint-Lucia",
  //     "cases": {
  //       "new": "+6",
  //       "active": 8,
  //       "critical": 0,
  //       "recovered": 1,
  //       "total": 9
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 0
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Zambia",
  //     "cases": {
  //       "new": "+6",
  //       "active": 35,
  //       "critical": 0,
  //       "recovered": 0,
  //       "total": 35
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 0
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Nepal",
  //     "cases": {
  //       "new": "+1",
  //       "active": 4,
  //       "critical": 0,
  //       "recovered": 1,
  //       "total": 5
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 0
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Antigua-and-Barbuda",
  //     "cases": {
  //       "new": "+4",
  //       "active": 7,
  //       "critical": 0,
  //       "recovered": 0,
  //       "total": 7
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 0
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Chad",
  //     "cases": {
  //       "new": "+2",
  //       "active": 5,
  //       "critical": 0,
  //       "recovered": 0,
  //       "total": 5
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 0
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Djibouti",
  //     "cases": {
  //       "new": "+4",
  //       "active": 18,
  //       "critical": 0,
  //       "recovered": 0,
  //       "total": 18
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 0
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Eritrea",
  //     "cases": {
  //       "new": "+3",
  //       "active": 15,
  //       "critical": 0,
  //       "recovered": 0,
  //       "total": 15
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 0
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Gambia",
  //     "cases": {
  //       "new": "+1",
  //       "active": 3,
  //       "critical": 0,
  //       "recovered": 0,
  //       "total": 4
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 1
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Vatican-City",
  //     "cases": {
  //       "new": "+2",
  //       "active": 6,
  //       "critical": 0,
  //       "recovered": 0,
  //       "total": 6
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 0
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Montserrat",
  //     "cases": {
  //       "new": "+4",
  //       "active": 5,
  //       "critical": 0,
  //       "recovered": 0,
  //       "total": 5
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 0
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Niger",
  //     "cases": {
  //       "new": "+9",
  //       "active": 24,
  //       "critical": 0,
  //       "recovered": 0,
  //       "total": 27
  //     },
  //     "deaths": {
  //       "new": "+2",
  //       "total": 3
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Papua-New-Guinea",
  //     "cases": {
  //       "new": null,
  //       "active": 1,
  //       "critical": 0,
  //       "recovered": 0,
  //       "total": 1
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 0
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "St.-Vincent-Grenadines",
  //     "cases": {
  //       "new": null,
  //       "active": 0,
  //       "critical": 0,
  //       "recovered": 1,
  //       "total": 1
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 0
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Sint-Maarten",
  //     "cases": {
  //       "new": null,
  //       "active": 6,
  //       "critical": 0,
  //       "recovered": 0,
  //       "total": 6
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 0
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Somalia",
  //     "cases": {
  //       "new": "+1",
  //       "active": 3,
  //       "critical": 0,
  //       "recovered": 0,
  //       "total": 3
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 0
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Eswatini",
  //     "cases": {
  //       "new": "+3",
  //       "active": 9,
  //       "critical": 0,
  //       "recovered": 0,
  //       "total": 9
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 0
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Timor-Leste",
  //     "cases": {
  //       "new": null,
  //       "active": 1,
  //       "critical": 0,
  //       "recovered": 0,
  //       "total": 1
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 0
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Uganda",
  //     "cases": {
  //       "new": "+3",
  //       "active": 33,
  //       "critical": 0,
  //       "recovered": 0,
  //       "total": 33
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 0
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "All",
  //     "cases": {
  //       "new": "+60991",
  //       "active": 581566,
  //       "critical": 29597,
  //       "recovered": 165035,
  //       "total": 784381
  //     },
  //     "deaths": {
  //       "new": "+3715",
  //       "total": 37780
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Mozambique",
  //     "cases": {
  //       "new": "+1",
  //       "active": 8,
  //       "critical": 0,
  //       "recovered": 0,
  //       "total": 8
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 0
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Syria",
  //     "cases": {
  //       "new": "+1",
  //       "active": 8,
  //       "critical": 0,
  //       "recovered": 0,
  //       "total": 10
  //     },
  //     "deaths": {
  //       "new": "+1",
  //       "total": 2
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Grenada",
  //     "cases": {
  //       "new": "+2",
  //       "active": 9,
  //       "critical": 0,
  //       "recovered": 0,
  //       "total": 9
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 0
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Dominica",
  //     "cases": {
  //       "new": "+1",
  //       "active": 12,
  //       "critical": 0,
  //       "recovered": 0,
  //       "total": 12
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 0
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Turks-and-Caicos",
  //     "cases": {
  //       "new": "+1",
  //       "active": 5,
  //       "critical": 0,
  //       "recovered": 0,
  //       "total": 5
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 0
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Belize",
  //     "cases": {
  //       "new": "+1",
  //       "active": 3,
  //       "critical": 0,
  //       "recovered": 0,
  //       "total": 3
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 0
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Myanmar",
  //     "cases": {
  //       "new": "+4",
  //       "active": 14,
  //       "critical": 0,
  //       "recovered": 0,
  //       "total": 14
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 0
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Laos",
  //     "cases": {
  //       "new": "+2",
  //       "active": 8,
  //       "critical": 0,
  //       "recovered": 0,
  //       "total": 8
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 0
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Libya",
  //     "cases": {
  //       "new": "+5",
  //       "active": 8,
  //       "critical": 0,
  //       "recovered": 0,
  //       "total": 8
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 0
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Mali",
  //     "cases": {
  //       "new": "+7",
  //       "active": 23,
  //       "critical": 0,
  //       "recovered": 0,
  //       "total": 25
  //     },
  //     "deaths": {
  //       "new": "+1",
  //       "total": 2
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Guinea-Bissau",
  //     "cases": {
  //       "new": "+6",
  //       "active": 8,
  //       "critical": 0,
  //       "recovered": 0,
  //       "total": 8
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 0
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "British-Virgin-Islands",
  //     "cases": {
  //       "new": "+2",
  //       "active": 2,
  //       "critical": 0,
  //       "recovered": 0,
  //       "total": 2
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 0
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Saint-Kitts-and-Nevis",
  //     "cases": {
  //       "new": "+5",
  //       "active": 7,
  //       "critical": 0,
  //       "recovered": 0,
  //       "total": 7
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 0
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "Anguilla",
  //     "cases": {
  //       "new": "+2",
  //       "active": 2,
  //       "critical": 0,
  //       "recovered": 0,
  //       "total": 2
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 0
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "MS-Zaandam-",
  //     "cases": {
  //       "new": "+2",
  //       "active": 2,
  //       "critical": 0,
  //       "recovered": 0,
  //       "total": 2
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 0
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }, {
  //     "country": "MS-Zaandam",
  //     "cases": {
  //       "new": "+2",
  //       "active": 2,
  //       "critical": 0,
  //       "recovered": 0,
  //       "total": 2
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 0
  //     },
  //     "day": "2020-03-28",
  //     "time": "2020-03-28T02:30:04+00:00"
  //   }, {
  //     "country": "Botswana",
  //     "cases": {
  //       "new": "+3",
  //       "active": 3,
  //       "critical": 0,
  //       "recovered": 0,
  //       "total": 3
  //     },
  //     "deaths": {
  //       "new": null,
  //       "total": 0
  //     },
  //     "day": "2020-03-31",
  //     "time": "2020-03-31T01:00:05+00:00"
  //   }]
  // }
  // SetMap(data);

};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function SetMap(json) {

  var nameCountries = {
    'Afghanistan': 'AF',
    'Aland Islands': 'AX',
    'Albania': 'AL',
    'Algeria': 'DZ',
    'American Samoa': 'AS',
    'Andorra': 'AD',
    'Angola': 'AO',
    'Anguilla': 'AI',
    'Antarctica': 'AQ',
    'Antigua And Barbuda': 'AG',
    'Argentina': 'AR',
    'Armenia': 'AM',
    'Aruba': 'AW',
    'Australia': 'AU',
    'Austria': 'AT',
    'Azerbaijan': 'AZ',
    'Bahamas': 'BS',
    'Bahrain': 'BH',
    'Bangladesh': 'BD',
    'Barbados': 'BB',
    'Belarus': 'BY',
    'Belgium': 'BE',
    'Belize': 'BZ',
    'Benin': 'BJ',
    'Bermuda': 'BM',
    'Bhutan': 'BT',
    'Bolivia': 'BO',
    'Bosnia And Herzegovina': 'BA',
    'Botswana': 'BW',
    'Bouvet Island': 'BV',
    'Brazil': 'BR',
    'British Indian Ocean Territory': 'IO',
    'Brunei Darussalam': 'BN',
    'Bulgaria': 'BG',
    'Burkina Faso': 'BF',
    'Burundi': 'BI',
    'Cambodia': 'KH',
    'Cameroon': 'CM',
    'Canada': 'CA',
    'Cape Verde': 'CV',
    'Cayman Islands': 'KY',
    'Central African Republic': 'CF',
    'Chad': 'TD',
    'Chile': 'CL',
    'China': 'CN',
    'Christmas Island': 'CX',
    'Cocos (Keeling) Islands': 'CC',
    'Colombia': 'CO',
    'Comoros': 'KM',
    'Congo': 'CG',
    'Congo, Democratic Republic': 'CD',
    'Cook Islands': 'CK',
    'Costa Rica': 'CR',
    'Cote D\'Ivoire': 'CI',
    'Croatia': 'HR',
    'Cuba': 'CU',
    'Cyprus': 'CY',
    'Czech Republic': 'CZ',
    'Denmark': 'DK',
    'Djibouti': 'DJ',
    'Dominica': 'DM',
    'Dominican Republic': 'DO',
    'Ecuador': 'EC',
    'Egypt': 'EG',
    'El Salvador': 'SV',
    'Equatorial Guinea': 'GQ',
    'Eritrea': 'ER',
    'Estonia': 'EE',
    'Ethiopia': 'ET',
    'Falkland Islands (Malvinas)': 'FK',
    'Faroe Islands': 'FO',
    'Fiji': 'FJ',
    'Finland': 'FI',
    'France': 'FR',
    'French Guiana': 'GF',
    'French Polynesia': 'PF',
    'French Southern Territories': 'TF',
    'Gabon': 'GA',
    'Gambia': 'GM',
    'Georgia': 'GE',
    'Germany': 'DE',
    'Ghana': 'GH',
    'Gibraltar': 'GI',
    'Greece': 'GR',
    'Greenland': 'GL',
    'Grenada': 'GD',
    'Guadeloupe': 'GP',
    'Guam': 'GU',
    'Guatemala': 'GT',
    'Guernsey': 'GG',
    'Guinea': 'GN',
    'Guinea-Bissau': 'GW',
    'Guyana': 'GY',
    'Haiti': 'HT',
    'Heard Island & Mcdonald Islands': 'HM',
    'Holy See (Vatican City State)': 'VA',
    'Honduras': 'HN',
    'Hong Kong': 'HK',
    'Hungary': 'HU',
    'Iceland': 'IS',
    'India': 'IN',
    'Indonesia': 'ID',
    'Iran, Islamic Republic Of': 'IR',
    'Iraq': 'IQ',
    'Ireland': 'IE',
    'Isle Of Man': 'IM',
    'Israel': 'IL',
    'Italy': 'IT',
    'Jamaica': 'JM',
    'Japan': 'JP',
    'Jersey': 'JE',
    'Jordan': 'JO',
    'Kazakhstan': 'KZ',
    'Kenya': 'KE',
    'Kiribati': 'KI',
    'Korea': 'KR',
    'Kuwait': 'KW',
    'Kyrgyzstan': 'KG',
    'Lao People\'s Democratic Republic': 'LA',
    'Latvia': 'LV',
    'Lebanon': 'LB',
    'Lesotho': 'LS',
    'Liberia': 'LR',
    'Libyan Arab Jamahiriya': 'LY',
    'Liechtenstein': 'LI',
    'Lithuania': 'LT',
    'Luxembourg': 'LU',
    'Macao': 'MO',
    'Macedonia': 'MK',
    'Madagascar': 'MG',
    'Malawi': 'MW',
    'Malaysia': 'MY',
    'Maldives': 'MV',
    'Mali': 'ML',
    'Malta': 'MT',
    'Marshall Islands': 'MH',
    'Martinique': 'MQ',
    'Mauritania': 'MR',
    'Mauritius': 'MU',
    'Mayotte': 'YT',
    'Mexico': 'MX',
    'Micronesia, Federated States Of': 'FM',
    'Moldova': 'MD',
    'Monaco': 'MC',
    'Mongolia': 'MN',
    'Montenegro': 'ME',
    'Montserrat': 'MS',
    'Morocco': 'MA',
    'Mozambique': 'MZ',
    'Myanmar': 'MM',
    'Namibia': 'NA',
    'Nauru': 'NR',
    'Nepal': 'NP',
    'Netherlands': 'NL',
    'Netherlands Antilles': 'AN',
    'New Caledonia': 'NC',
    'New Zealand': 'NZ',
    'Nicaragua': 'NI',
    'Niger': 'NE',
    'Nigeria': 'NG',
    'Niue': 'NU',
    'Norfolk Island': 'NF',
    'Northern Mariana Islands': 'MP',
    'Norway': 'NO',
    'Oman': 'OM',
    'Pakistan': 'PK',
    'Palau': 'PW',
    'Palestinian Territory, Occupied': 'PS',
    'Panama': 'PA',
    'Papua New Guinea': 'PG',
    'Paraguay': 'PY',
    'Peru': 'PE',
    'Philippines': 'PH',
    'Pitcairn': 'PN',
    'Poland': 'PL',
    'Portugal': 'PT',
    'Puerto Rico': 'PR',
    'Qatar': 'QA',
    'Reunion': 'RE',
    'Romania': 'RO',
    'Russian Federation': 'RU',
    'Rwanda': 'RW',
    'Saint Barthelemy': 'BL',
    'Saint Helena': 'SH',
    'Saint Kitts And Nevis': 'KN',
    'Saint Lucia': 'LC',
    'Saint Martin': 'MF',
    'Saint Pierre And Miquelon': 'PM',
    'Saint Vincent And Grenadines': 'VC',
    'Samoa': 'WS',
    'San Marino': 'SM',
    'Sao Tome And Principe': 'ST',
    'Saudi Arabia': 'SA',
    'Senegal': 'SN',
    'Serbia': 'RS',
    'Seychelles': 'SC',
    'Sierra Leone': 'SL',
    'Singapore': 'SG',
    'Slovakia': 'SK',
    'Slovenia': 'SI',
    'Solomon Islands': 'SB',
    'Somalia': 'SO',
    'South Africa': 'ZA',
    'South Georgia And Sandwich Isl.': 'GS',
    'Spain': 'ES',
    'Sri Lanka': 'LK',
    'Sudan': 'SD',
    'Suriname': 'SR',
    'Svalbard And Jan Mayen': 'SJ',
    'Swaziland': 'SZ',
    'Sweden': 'SE',
    'Switzerland': 'CH',
    'Syrian Arab Republic': 'SY',
    'Taiwan': 'TW',
    'Tajikistan': 'TJ',
    'Tanzania': 'TZ',
    'Thailand': 'TH',
    'Timor-Leste': 'TL',
    'Togo': 'TG',
    'Tokelau': 'TK',
    'Tonga': 'TO',
    'Trinidad And Tobago': 'TT',
    'Tunisia': 'TN',
    'Turkey': 'TR',
    'Turkmenistan': 'TM',
    'Turks And Caicos Islands': 'TC',
    'Tuvalu': 'TV',
    'Uganda': 'UG',
    'Ukraine': 'UA',
    'United Arab Emirates': 'AE',
    'United Kingdom': 'GB',
    'USA': 'US',
    'United States Outlying Islands': 'UM',
    'Uruguay': 'UY',
    'Uzbekistan': 'UZ',
    'Vanuatu': 'VU',
    'Venezuela': 'VE',
    'Viet Nam': 'VN',
    'Virgin Islands, British': 'VG',
    'Virgin Islands, U.S.': 'VI',
    'Wallis And Futuna': 'WF',
    'Western Sahara': 'EH',
    'Yemen': 'YE',
    'Zambia': 'ZM',
    'Zimbabwe': 'ZW'
  }

  var dataSet = [];
    
  for (i = 0; i < json.length; i++) {
    dataSet.push({
      'id': nameCountries[json[i].country],
      'size': json[i].cases.total,
      normal:   {
                 fill: "#b30059 " + (0.5 * (json[i].cases.total) / (200000) + 0.1),
                 stroke: "#b30059"
                },
      hovered:  {
                 fill: "#b30059 0.05",
                 stroke: "2 #b30059"
                },
      selected: {
                 fill: "#b30059 0.6",
                 stroke: "4 #b30059"
                }
    });
  }

  //
  var map = anychart.map();
  map.geoData(anychart.maps.world);

  // set the series
  var series = map.bubble(dataSet);
  // set the maximum size of the bubble
  map.maxBubbleSize('60%');
  // set the minimum size of the bubble
  map.minBubbleSize('1%');

  // disable labels
  series.labels(false);
    
    series.tooltip().format(function(e){
    return "Cases: " + e.getData("size")
  });
    
  map.colorRange(false);
    
  // Disables zoom On Mouse Wheel
map.interactivity().zoomOnMouseWheel(true);
// Disables zoom on double click
map.interactivity().keyboardZoomAndMove(true);
// Disables zoom on double click
map.interactivity().zoomOnDoubleClick(true);

//   var zoomController = anychart.ui.zoom();
// zoomController.target(map);
// zoomController.render();
    
    // set the container
  map.container('map-container');
  map.draw();
}
