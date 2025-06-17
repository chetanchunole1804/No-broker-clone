interface Country {
    code: string;
    name: string;
    dialCode: string;
    flag: string;
  }
  
  const countries: Country[] = [
    { code: "IN", name: "India", dialCode: "+91", flag: "https://flagcdn.com/in.svg" },
    { code: "US", name: "United States", dialCode: "+1", flag: "https://flagcdn.com/us.svg" },
    { code: "GB", name: "United Kingdom", dialCode: "+44", flag: "https://flagcdn.com/gb.svg" },
    { code: "FR", name: "France", dialCode: "+33", flag: "https://flagcdn.com/fr.svg" },
    { code: "DE", name: "Germany", dialCode: "+49", flag: "https://flagcdn.com/de.svg" },
    { code: "AU", name: "Australia", dialCode: "+61", flag: "https://flagcdn.com/au.svg" },
    { code: "CA", name: "Canada", dialCode: "+1", flag: "https://flagcdn.com/ca.svg" },
    { code: "CN", name: "China", dialCode: "+86", flag: "https://flagcdn.com/cn.svg" },
    { code: "JP", name: "Japan", dialCode: "+81", flag: "https://flagcdn.com/jp.svg" },
    { code: "RU", name: "Russia", dialCode: "+7", flag: "https://flagcdn.com/ru.svg" },
    { code: "BR", name: "Brazil", dialCode: "+55", flag: "https://flagcdn.com/br.svg" },
    { code: "ZA", name: "South Africa", dialCode: "+27", flag: "https://flagcdn.com/za.svg" },
    { code: "MX", name: "Mexico", dialCode: "+52", flag: "https://flagcdn.com/mx.svg" },
    { code: "IT", name: "Italy", dialCode: "+39", flag: "https://flagcdn.com/it.svg" },
    { code: "ES", name: "Spain", dialCode: "+34", flag: "https://flagcdn.com/es.svg" },
    { code: "TR", name: "Turkey", dialCode: "+90", flag: "https://flagcdn.com/tr.svg" },
    { code: "KR", name: "South Korea", dialCode: "+82", flag: "https://flagcdn.com/kr.svg" },
    { code: "SA", name: "Saudi Arabia", dialCode: "+966", flag: "https://flagcdn.com/sa.svg" },
    { code: "NG", name: "Nigeria", dialCode: "+234", flag: "https://flagcdn.com/ng.svg" },
    { code: "EG", name: "Egypt", dialCode: "+20", flag: "https://flagcdn.com/eg.svg" },
    { code: "AR", name: "Argentina", dialCode: "+54", flag: "https://flagcdn.com/ar.svg" },
    { code: "CL", name: "Chile", dialCode: "+56", flag: "https://flagcdn.com/cl.svg" },
    { code: "CO", name: "Colombia", dialCode: "+57", flag: "https://flagcdn.com/co.svg" },
    { code: "TH", name: "Thailand", dialCode: "+66", flag: "https://flagcdn.com/th.svg" },
    { code: "VN", name: "Vietnam", dialCode: "+84", flag: "https://flagcdn.com/vn.svg" },
    { code: "PH", name: "Philippines", dialCode: "+63", flag: "https://flagcdn.com/ph.svg" },
    { code: "PK", name: "Pakistan", dialCode: "+92", flag: "https://flagcdn.com/pk.svg" },
    { code: "BD", name: "Bangladesh", dialCode: "+880", flag: "https://flagcdn.com/bd.svg" },
    { code: "ID", name: "Indonesia", dialCode: "+62", flag: "https://flagcdn.com/id.svg" },
    { code: "MY", name: "Malaysia", dialCode: "+60", flag: "https://flagcdn.com/my.svg" },
    { code: "SG", name: "Singapore", dialCode: "+65", flag: "https://flagcdn.com/sg.svg" },
    { code: "NZ", name: "New Zealand", dialCode: "+64", flag: "https://flagcdn.com/nz.svg" },
    { code: "SE", name: "Sweden", dialCode: "+46", flag: "https://flagcdn.com/se.svg" },
    { code: "NO", name: "Norway", dialCode: "+47", flag: "https://flagcdn.com/no.svg" },
    { code: "FI", name: "Finland", dialCode: "+358", flag: "https://flagcdn.com/fi.svg" },
    { code: "DK", name: "Denmark", dialCode: "+45", flag: "https://flagcdn.com/dk.svg" },
    { code: "CH", name: "Switzerland", dialCode: "+41", flag: "https://flagcdn.com/ch.svg" },
    { code: "AT", name: "Austria", dialCode: "+43", flag: "https://flagcdn.com/at.svg" },
    { code: "BE", name: "Belgium", dialCode: "+32", flag: "https://flagcdn.com/be.svg" },
    { code: "NL", name: "Netherlands", dialCode: "+31", flag: "https://flagcdn.com/nl.svg" },
    { code: "PL", name: "Poland", dialCode: "+48", flag: "https://flagcdn.com/pl.svg" },
    { code: "IE", name: "Ireland", dialCode: "+353", flag: "https://flagcdn.com/ie.svg" },
    { code: "GR", name: "Greece", dialCode: "+30", flag: "https://flagcdn.com/gr.svg" },
    { code: "PT", name: "Portugal", dialCode: "+351", flag: "https://flagcdn.com/pt.svg" },
  ];
  
  export default countries;



  // {
  //   "id": 7,
  //   "name": "AvailableAmenities",
  //   "AmenitiesData": [
  //     {
  //       "backgroundImage": "url('https://assets.nobroker.in/static/img/icon/amenities/amenities-sprite_2.png')",
  //       "backgroundPosition": "-25px -477px",
  //       "label": "Lift"
  //     },
  //     {
  //       "backgroundImage": "url('https://assets.nobroker.in/static/img/icon/amenities/amenities-sprite_2.png')",
  //       "backgroundPosition": "-25px -1229px",
  //       "label": "Internet Services"
  //     },
  //     {
  //       "backgroundImage": "url('https://assets.nobroker.in/static/img/icon/amenities/amenities-sprite_2.png')",
  //       "backgroundPosition": "-25px -25px",
  //       "label": "Air Conditioner"
  //     },
  //     {
  //       "backgroundImage": "url('https://assets.nobroker.in/static/img/icons-sprite.png')",
  //       "backgroundPosition": "0px -832px",
  //       "label": "Club House"
  //     },
  //     {
  //       "backgroundImage": "url('https://assets.nobroker.in/static/img/icon/amenities/amenities-sprite_2.png')",
  //       "backgroundPosition": "-25px -1079px",
  //       "label": "Intercom"
  //     },
  //     {
  //       "backgroundImage": "url('https://assets.nobroker.in/static/img/icon/amenities/amenities-sprite_2.png')",
  //       "backgroundPosition": "-25px -2057px",
  //       "label": "Swimming Pool"
  //     },
  //     {
  //       "backgroundImage": "url('https://assets.nobroker.in/static/img/icon/amenities/amenities-sprite_2.png')",
  //       "backgroundPosition": "-25px -1907px",
  //       "label": "Children Play Area"
  //     },
  //     {
  //       "backgroundImage": "url('https://assets.nobroker.in/static/img/icon/amenities/amenities-sprite_2.png')",
  //       "backgroundPosition": "-25px -627px",
  //       "label": "Fire Safety"
  //     },
  //     {
  //       "backgroundImage": "url('https://assets.nobroker.in/static/img/icons-sprite.png')",
  //       "backgroundPosition": "-2px -1172px",
  //       "label": "Servant Room"
  //     },
  //     {
  //       "backgroundImage": "url('https://assets.nobroker.in/static/img/icon/amenities/amenities-sprite_2.png')",
  //       "backgroundPosition": "-25px -2659px",
  //       "label": "Shopping Center"
  //     },
  //     {
  //       "backgroundImage": "url('https://assets.nobroker.in/static/img/icons-sprite.png')",
  //       "backgroundPosition": "-1px -936px",
  //       "label": "Gas Pipeline"
  //     },
  //     {
  //       "backgroundImage": "url('https://assets.nobroker.in/static/img/icon/amenities/amenities-sprite_2.png')",
  //       "backgroundPosition": "-25px -1607px",
  //       "label": "Park"
  //     },
  //     {
  //       "backgroundImage": "url('https://assets.nobroker.in/static/img/icons-sprite.png')",
  //       "backgroundPosition": "-1px -549px",
  //       "label": "Rain Water Harvesting"
  //     },
  //     {
  //       "backgroundImage": "url('https://assets.nobroker.in/static/img/icons-sprite.png')",
  //       "backgroundPosition": "-5px -519px",
  //       "label": "Sewage Treatment Plant"
  //     },
  //     {
  //       "backgroundImage": "url('https://assets.nobroker.in/static/img/icons-sprite.png')",
  //       "backgroundPosition": "-3px -395px",
  //       "label": "House Keeping"
  //     },
  //     {
  //       "backgroundImage": "url('https://assets.nobroker.in/static/img/icon/amenities/amenities-sprite_2.png')",
  //       "backgroundPosition": "-25px -2207px",
  //       "label": "Power Backup"
  //     },
  //     {
  //       "backgroundImage": "url('https://assets.nobroker.in/static/img/icon/amenities/amenities-sprite_2.png')",
  //       "backgroundPosition": "-25px -1757px",
  //       "label": "Visitor Parking"
  //     }
  //   ]
  // }
  