var xmlhttp = new XMLHttpRequest();
var url = "https://www.webcovid-19.live/all";

xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var parsed = JSON.parse(this.responseText);
    SetMap(parsed);
  }
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
    'Costa-Rica': 'CR',
    'Cote D\'Ivoire': 'CI',
    'Croatia': 'HR',
    'Cuba': 'CU',
    'Cyprus': 'CY',
    'Czechia': 'CZ',
    'Denmark': 'DK',
    'Djibouti': 'DJ',
    'Dominica': 'DM',
    'Dominican-Republic': 'DO',
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
    'Hong-Kong': 'HK',
    'Hungary': 'HU',
    'Iceland': 'IS',
    'India': 'IN',
    'Indonesia': 'ID',
    'Iran': 'IR',
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
    'Russia': 'RU',
    'Rwanda': 'RW',
    'Saint Barthelemy': 'BL',
    'Saint Helena': 'SH',
    'Saint Kitts And Nevis': 'KN',
    'Saint Lucia': 'LC',
    'Saint Martin': 'MF',
    'Saint Pierre And Miquelon': 'PM',
    'Saint Vincent And Grenadines': 'VC',
    'Samoa': 'WS',
    'San-Marino': 'SM',
    'Sao Tome And Principe': 'ST',
    'Saudi-Arabia': 'SA',
    'Senegal': 'SN',
    'Serbia': 'RS',
    'Seychelles': 'SC',
    'Sierra Leone': 'SL',
    'Singapore': 'SG',
    'Slovakia': 'SK',
    'Slovenia': 'SI',
    'Solomon Islands': 'SB',
    'Somalia': 'SO',
    'South-Africa': 'ZA',
    'South Georgia And Sandwich Isl.': 'GS',
    'S.-Korea': 'KR',
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
    'UAE': 'AE',
    'UK': 'GB',
    'USA': 'US',
    'United States Outlying Islands': 'UM',
    'Uruguay': 'UY',
    'Uzbekistan': 'UZ',
    'Vanuatu': 'VU',
    'Venezuela': 'VE',
    'Vietam': 'VN',
    'Virgin Islands, British': 'VG',
    'Virgin Islands, U.S.': 'VI',
    'Wallis And Futuna': 'WF',
    'Western Sahara': 'EH',
    'Yemen': 'YE',
    'Zambia': 'ZM',
    'Zimbabwe': 'ZW'
  }

  var lat = {
    'AF': 33,
    'AL': 41,
    'DZ': 28,
    'AS': -14.3333,
    'AD': 42.5,
    'AO': -12.5,
    'AI': 18.25,
    'AQ': -90,
    'AG': 17.05,
    'AR': -34,
    'AM': 40,
    'AW': 12.5,
    'AU': -27,
    'AT': 47.3333,
    'AZ': 40.5,
    'BS': 24.25,
    'BH': 26,
    'BD': 24,
    'BB': 13.1667,
    'BY': 53,
    'BE': 50.8333,
    'BZ': 17.25,
    'BJ': 9.5,
    'BM': 32.3333,
    'BT': 27.5,
    'BO': -17,
    'BA': 44,
    'BW': -22,
    'BV': -54.4333,
    'BR': -10,
    'IO': -6,
    'BN': 4.5,
    'BG': 43,
    'BF': 13,
    'BI': -3.5,
    'KH': 13,
    'CM': 6,
    'CA': 60,
    'CV': 16,
    'KY': 19.5,
    'CF': 7,
    'TD': 15,
    'CL': -30,
    'CN': 35,
    'CX': -10.5,
    'CC': -12.5,
    'CO': 4,
    'KM': -12.1667,
    'CG': -1,
    'CD': 0,
    'CK': -21.2333,
    'CR': 10,
    'CI': 8,
    'HR': 45.1667,
    'CU': 21.5,
    'CY': 35,
    'CZ': 49.75,
    'DK': 56,
    'DJ': 11.5,
    'DM': 15.4167,
    'DO': 19,
    'EC': -2,
    'EG': 27,
    'SV': 13.8333,
    'GQ': 2,
    'ER': 15,
    'EE': 59,
    'ET': 8,
    'FK': -51.75,
    'FO': 62,
    'FJ': -18,
    'FI': 64,
    'FR': 46,
    'GF': 4,
    'PF': -15,
    'TF': -43,
    'GA': -1,
    'GM': 13.4667,
    'GE': 42,
    'DE': 51,
    'GH': 8,
    'GI': 36.1833,
    'GR': 39,
    'GL': 72,
    'GD': 12.1167,
    'GP': 16.25,
    'GU': 13.4667,
    'GT': 15.5,
    'GG': 49.5,
    'GN': 11,
    'GW': 12,
    'GY': 5,
    'HT': 19,
    'HM': -53.1,
    'VA': 41.9,
    'HN': 15,
    'HK': 22.25,
    'HU': 47,
    'IS': 65,
    'IN': 20,
    'ID': -5,
    'IR': 32,
    'IQ': 33,
    'IE': 53,
    'IM': 54.23,
    'IL': 31.5,
    'IT': 42.8333,
    'JM': 18.25,
    'JP': 36,
    'JE': 49.21,
    'JO': 31,
    'KZ': 48,
    'KE': 1,
    'KI': 1.4167,
    'KP': 40,
    'KR': 37,
    'KW': 29.3375,
    'KG': 41,
    'LA': 18,
    'LV': 57,
    'LB': 33.8333,
    'LS': -29.5,
    'LR': 6.5,
    'LY': 25,
    'LI': 47.1667,
    'LT': 56,
    'LU': 49.75,
    'MO': 22.1667,
    'MK': 41.8333,
    'MG': -20,
    'MW': -13.5,
    'MY': 2.5,
    'MV': 3.25,
    'ML': 17,
    'MT': 35.8333,
    'MH': 9,
    'MQ': 14.6667,
    'MR': 20,
    'MU': -20.2833,
    'YT': -12.8333,
    'MX': 23,
    'FM': 6.9167,
    'MD': 47,
    'MC': 43.7333,
    'MN': 46,
    'ME': 42,
    'MS': 16.75,
    'MA': 32,
    'MZ': -18.25,
    'MM': 22,
    'NA': -22,
    'NR': -0.5333,
    'NP': 28,
    'NL': 52.5,
    'AN': 12.25,
    'NC': -21.5,
    'NZ': -41,
    'NI': 13,
    'NE': 16,
    'NG': 10,
    'NU': -19.0333,
    'NF': -29.0333,
    'MP': 15.2,
    'NO': 62,
    'OM': 21,
    'PK': 30,
    'PW': 7.5,
    'PS': 32,
    'PA': 9,
    'PG': -6,
    'PY': -23,
    'PE': -10,
    'PH': 13,
    'PN': -24.7,
    'PL': 52,
    'PT': 39.5,
    'PR': 18.25,
    'QA': 25.5,
    'RE': -21.1,
    'RO': 46,
    'RU': 60,
    'RW': -2,
    'SH': -15.9333,
    'KN': 17.3333,
    'LC': 13.8833,
    'PM': 46.8333,
    'VC': 13.25,
    'WS': -13.5833,
    'SM': 43.7667,
    'ST': 1,
    'SA': 25,
    'SN': 14,
    'RS': 44,
    'SC': -4.5833,
    'SL': 8.5,
    'SG': 1.3667,
    'SK': 48.6667,
    'SI': 46,
    'SB': -8,
    'SO': 10,
    'ZA': -29,
    'GS': -54.5,
    'ES': 40,
    'LK': 7,
    'SD': 15,
    'SR': 4,
    'SJ': 78,
    'SZ': -26.5,
    'SE': 62,
    'CH': 47,
    'SY': 35,
    'TW': 23.5,
    'TJ': 39,
    'TZ': -6,
    'TH': 15,
    'TL': -8.55,
    'TG': 8,
    'TK': -9,
    'TO': -20,
    'TT': 11,
    'TN': 34,
    'TR': 39,
    'TM': 40,
    'TC': 21.75,
    'TV': -8,
    'UG': 1,
    'UA': 49,
    'AE': 24,
    'GB': 54,
    'US': 38,
    'UM': 19.2833,
    'UY': -33,
    'UZ': 41,
    'VU': -16,
    'VE': 8,
    'VN': 16,
    'VG': 18.5,
    'VI': 18.3333,
    'WF': -13.3,
    'EH': 24.5,
    'YE': 15,
    'ZM': -15,
    'ZW': -20,
  }
  var long = {
    'AF': 65,
    'AL': 20,
    'DZ': 3,
    'AS': -170,
    'AD': 1.6,
    'AO': 18.5,
    'AI': -63.1667,
    'AQ': 0,
    'AG': -61.8,
    'AR': -64,
    'AM': 45,
    'AW': -69.9667,
    'AU': 133,
    'AT': 13.3333,
    'AZ': 47.5,
    'BS': -76,
    'BH': 50.55,
    'BD': 90,
    'BB': -59.5333,
    'BY': 28,
    'BE': 4,
    'BZ': -88.75,
    'BJ': 2.25,
    'BM': -64.75,
    'BT': 90.5,
    'BO': -65,
    'BA': 18,
    'BW': 24,
    'BV': 3.4,
    'BR': -55,
    'IO': 71.5,
    'BN': 114.6667,
    'BG': 25,
    'BF': -2,
    'BI': 30,
    'KH': 105,
    'CM': 12,
    'CA': -95,
    'CV': -24,
    'KY': -80.5,
    'CF': 21,
    'TD': 19,
    'CL': -71,
    'CN': 105,
    'CX': 105.6667,
    'CC': 96.8333,
    'CO': -72,
    'KM': 44.25,
    'CG': 15,
    'CD': 25,
    'CK': -159.7667,
    'CR': -84,
    'CI': -5,
    'HR': 15.5,
    'CU': -80,
    'CY': 33,
    'CZ': 15.5,
    'DK': 10,
    'DJ': 43,
    'DM': -61.3333,
    'DO': -70.6667,
    'EC': -77.5,
    'EG': 30,
    'SV': -88.9167,
    'GQ': 10,
    'ER': 39,
    'EE': 26,
    'ET': 38,
    'FK': -59,
    'FO': -7,
    'FJ': 175,
    'FI': 26,
    'FR': 2,
    'GF': -53,
    'PF': -140,
    'TF': 67,
    'GA': 11.75,
    'GM': -16.5667,
    'GE': 43.5,
    'DE': 9,
    'GH': -2,
    'GI': -5.3667,
    'GR': 22,
    'GL': -40,
    'GD': -61.6667,
    'GP': -61.5833,
    'GU': 144.7833,
    'GT': -90.25,
    'GG': -2.56,
    'GN': -10,
    'GW': -15,
    'GY': -59,
    'HT': -72.4167,
    'HM': 72.5167,
    'VA': 12.45,
    'HN': -86.5,
    'HK': 114.1667,
    'HU': 20,
    'IS': -18,
    'IN': 77,
    'ID': 120,
    'IR': 53,
    'IQ': 44,
    'IE': -8,
    'IM': -4.55,
    'IL': 34.75,
    'IT': 12.8333,
    'JM': -77.5,
    'JP': 138,
    'JE': -2.13,
    'JO': 36,
    'KZ': 68,
    'KE': 38,
    'KI': 173,
    'KP': 127,
    'KR': 127.5,
    'KW': 47.6581,
    'KG': 75,
    'LA': 105,
    'LV': 25,
    'LB': 35.8333,
    'LS': 28.5,
    'LR': -9.5,
    'LY': 17,
    'LI': 9.5333,
    'LT': 24,
    'LU': 6.1667,
    'MO': 113.55,
    'MK': 22,
    'MG': 47,
    'MW': 34,
    'MY': 112.5,
    'MV': 73,
    'ML': -4,
    'MT': 14.5833,
    'MH': 168,
    'MQ': -61,
    'MR': -12,
    'MU': 57.55,
    'YT': 45.1667,
    'MX': -102,
    'FM': 158.25,
    'MD': 29,
    'MC': 7.4,
    'MN': 105,
    'ME': 19,
    'MS': -62.2,
    'MA': -5,
    'MZ': 35,
    'MM': 98,
    'NA': 17,
    'NR': 166.9167,
    'NP': 84,
    'NL': 5.75,
    'AN': -68.75,
    'NC': 165.5,
    'NZ': 174,
    'NI': -85,
    'NE': 8,
    'NG': 8,
    'NU': -169.8667,
    'NF': 167.95,
    'MP': 145.75,
    'NO': 10,
    'OM': 57,
    'PK': 70,
    'PW': 134.5,
    'PS': 35.25,
    'PA': -80,
    'PG': 147,
    'PY': -58,
    'PE': -76,
    'PH': 122,
    'PN': -127.4,
    'PL': 20,
    'PT': -8,
    'PR': -66.5,
    'QA': 51.25,
    'RE': 55.6,
    'RO': 25,
    'RU': 100,
    'RW': 30,
    'SH': -5.7,
    'KN': -62.75,
    'LC': -61.1333,
    'PM': -56.3333,
    'VC': -61.2,
    'WS': -172.3333,
    'SM': 12.4167,
    'ST': 7,
    'SA': 45,
    'SN': -14,
    'RS': 21,
    'SC': 55.6667,
    'SL': -11.5,
    'SG': 103.8,
    'SK': 19.5,
    'SI': 15,
    'SB': 159,
    'SO': 49,
    'ZA': 24,
    'GS': -37,
    'ES': -4,
    'LK': 81,
    'SD': 30,
    'SR': -56,
    'SJ': 20,
    'SZ': 31.5,
    'SE': 15,
    'CH': 8,
    'SY': 38,
    'TW': 121,
    'TJ': 71,
    'TZ': 35,
    'TH': 100,
    'TL': 125.5167,
    'TG': 1.1667,
    'TK': -172,
    'TO': -175,
    'TT': -61,
    'TN': 9,
    'TR': 35,
    'TM': 60,
    'TC': -71.5833,
    'TV': 178,
    'UG': 32,
    'UA': 32,
    'AE': 54,
    'GB': -2,
    'US': -97,
    'UM': 166.6,
    'UY': -56,
    'UZ': 64,
    'VU': 167,
    'VE': -66,
    'VN': 106,
    'VG': -64.5,
    'VI': -64.8333,
    'WF': -176.2,
    'EH': -13,
    'YE': 48,
    'ZM': 30,
    'ZW': 30,
  }

  var dataSet = [];


  /* SET COLOR RANGE */
  var newCases = [];
  for (i = 0; i < json.length; i++) {
    // if (json[i].cases.new == null || json[i].country == "All" || json[i].country == "World") {
    if (json[i].cases.new == null || !(json[i].country in nameCountries)) {
      newCases[i] = 0;
    } else
      newCases[i] = json[i].cases.new.substring(1);
  }

  var normalizedNew = normalize(newCases);

  for (i = 0; i < json.length; i++) {
    var stats = [];
    stats[0] = json[i].country;
    stats[1] = json[i].cases.total;
    stats[2] = json[i].cases.new;
    stats[3] = json[i].deaths.total;
    stats[4] = json[i].deaths.new;

    for (n = 0; n < stats.length; n++) {
      if (stats[n] == null) {
        stats[n] = 0;
      }
    }

    var light_color = "#00ffe2";

    // old: 090b79
    var dark_color = "#00aeff";


    dataSet.push({
      'id': stats[0],
      'size': stats[1],
      'new': stats[2],
      'deaths': stats[3],
      'newdeaths': stats[4],
      "lat": lat[nameCountries[json[i].country]],
      "long": long[nameCountries[json[i].country]],
      normal: {
        fill: getGradientColor(light_color, dark_color, normalizedNew[i]) + " " + (0.5 * (json[i].cases.total) / (json[3].cases.total) + 0.1),
        stroke: getGradientColor(light_color, dark_color, normalizedNew[i])
      },
      hovered: {
        fill: getGradientColor(light_color, dark_color, normalizedNew[i]) + " 0.05",
        stroke: "2 " + getGradientColor(light_color, dark_color, normalizedNew[i])
      },
      selected: {
        fill: getGradientColor(light_color, dark_color, normalizedNew[i]) + " 0.6",
        stroke: "4 " + getGradientColor(light_color, dark_color, normalizedNew[i])
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

  // disable selection
  series.selectionMode(false);

  series.tooltip().format(function(e) {
    return "Cases: " + e.getData("size") + " (" + e.getData("new") + ")\n" +
      "Deaths: " + e.getData("deaths") + " (" + e.getData("newdeaths") + ")"
  });

  // Disables zoom On Mouse Wheel
  map.interactivity().zoomOnMouseWheel(false);
  // Disables zoom on double click
  map.interactivity().keyboardZoomAndMove(true);
  // Disables zoom on double click
  map.interactivity().zoomOnDoubleClick(false);

  map.background().fill("#d6d6d6");

  var cr = map.colorRange(false);

  var zoomController = anychart.ui.zoom();
  zoomController.target(map);
  zoomController.render();

  // set zoom
  map.listen('dblclick', function(evt) {
    map.zoom(2, evt.clientX, evt.clientY);
  });

  var scrollableElement = document.body;

  scrollableElement.addEventListener('wheel', checkScrollDirection);

  function checkScrollDirection(evt) {
    if (checkScrollDirectionIsUp(evt)) {
      map.zoom(1.5, evt.clientX- $('#map-container').offset().left, evt.clientY)
    } else {
      map.zoom(0.5, evt.clientX- $('#map-container').offset().left, evt.clientY)
    }
  }

  function checkScrollDirectionIsUp(event) {
    if (event.wheelDelta) {
      return event.wheelDelta > 0;
    }
    return event.deltaY < 0;
  }

  var tooltip = series.tooltip();
  tooltip.titleFormat("{%id}")

  // set the container
  map.container('map-container');
  map.draw();
}

getGradientColor = function(start_color, end_color, percent) {
  // strip the leading # if it's there
  start_color = start_color.replace(/^\s*#|\s*$/g, '');
  end_color = end_color.replace(/^\s*#|\s*$/g, '');

  // convert 3 char codes --> 6, e.g. `E0F` --> `EE00FF`
  if (start_color.length == 3) {
    start_color = start_color.replace(/(.)/g, '$1$1');
  }

  if (end_color.length == 3) {
    end_color = end_color.replace(/(.)/g, '$1$1');
  }

  // get colors
  var start_red = parseInt(start_color.substr(0, 2), 16),
    start_green = parseInt(start_color.substr(2, 2), 16),
    start_blue = parseInt(start_color.substr(4, 2), 16);

  var end_red = parseInt(end_color.substr(0, 2), 16),
    end_green = parseInt(end_color.substr(2, 2), 16),
    end_blue = parseInt(end_color.substr(4, 2), 16);

  // calculate new color
  var diff_red = end_red - start_red;
  var diff_green = end_green - start_green;
  var diff_blue = end_blue - start_blue;

  diff_red = ((diff_red * percent) + start_red).toString(16).split('.')[0];
  diff_green = ((diff_green * percent) + start_green).toString(16).split('.')[0];
  diff_blue = ((diff_blue * percent) + start_blue).toString(16).split('.')[0];

  // ensure 2 digits by color
  if (diff_red.length == 1) diff_red = '0' + diff_red
  if (diff_green.length == 1) diff_green = '0' + diff_green
  if (diff_blue.length == 1) diff_blue = '0' + diff_blue

  return '#' + diff_red + diff_green + diff_blue;
};

function normalize(arr) {
  var max = Math.max.apply(Math, arr);
  var min = Math.min.apply(Math, arr);
  console.log(min + " " + max);
  var ret = [];

  for (var i = 0; i < arr.length; i++) {
    ret.push((arr[i] - min) / (max - min));
  }

  return ret;
}
