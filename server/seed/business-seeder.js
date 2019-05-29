var Business = require("../models/businesses");

var mongoose = require("mongoose");

mongoose.connect("localhost:3000/business");

var businesses = [
    new Business({
      business_name: "A Associates",
      business_rating: 0,
      business_genre: "Customer Service",
      business_phone: "(591) 933-5631",
      map_id: 88
    }),
    new Business({
      business_name: "Hendrerit Donec Porttitor Corp.",
      business_rating: 0,
      business_genre: "Sales and Marketing",
      business_phone: "(722) 614-0034",
      map_id: 28
    }),
    new Business({
      business_name: "Proin Eget Associates",
      business_rating: 5,
      business_genre: "Tech Support",
      business_phone: "(328) 374-8038",
      map_id: 94
    }),
    new Business({
      business_name: "Mi Institute",
      business_rating: 1,
      business_genre: "Sales and Marketing",
      business_phone: "(736) 689-6254",
      map_id: 14
    }),
    new Business({
      business_name: "Praesent Luctus Company",
      business_rating: 4,
      business_genre: "Tech Support",
      business_phone: "(204) 207-9537",
      map_id: 39
    }),
    new Business({
      business_name: "Magna LLC",
      business_rating: 0,
      business_genre: "Customer Relations",
      business_phone: "(509) 347-6259",
      map_id: 56
    }),
    new Business({
      business_name: "Cursus Company",
      business_rating: 0,
      business_genre: "Advertising",
      business_phone: "(410) 154-3652",
      map_id: 19
    }),
    new Business({
      business_name: "Bibendum Donec Felis LLC",
      business_rating: 2,
      business_genre: "Sales and Marketing",
      business_phone: "(661) 765-0267",
      map_id: 94
    }),
    new Business({
      business_name: "Scelerisque PC",
      business_rating: 2,
      business_genre: "Tech Support",
      business_phone: "(786) 731-8877",
      map_id: 67
    }),
    new Business({
      business_name: "Massa Industries",
      business_rating: 2,
      business_genre: "Tech Support",
      business_phone: "(577) 428-8095",
      map_id: 77
    }),
    new Business({
      business_name: "Non Magna Associates",
      business_rating: 5,
      business_genre: "Tech Support",
      business_phone: "(487) 707-5587",
      map_id: 87
    }),
    new Business({
      business_name: "Augue Porttitor Consulting",
      business_rating: 0,
      business_genre: "Quality Assurance",
      business_phone: "(148) 947-2325",
      map_id: 85
    }),
    new Business({
      business_name: "Mollis LLC",
      business_rating: 4,
      business_genre: "Public Relations",
      business_phone: "(112) 120-9356",
      map_id: 79
    }),
    new Business({
      business_name: "Nunc Corp.",
      business_rating: 1,
      business_genre: "Public Relations",
      business_phone: "(713) 410-5407",
      map_id: 91
    }),
    new Business({
      business_name: "Vel Nisl Limited",
      business_rating: 3,
      business_genre: "Asset Management",
      business_phone: "(297) 393-6759",
      map_id: 55
    }),
    new Business({
      business_name: "Enim Associates",
      business_rating: 2,
      business_genre: "Research and Development",
      business_phone: "(200) 309-6095",
      map_id: 95
    }),
    new Business({
      business_name: "Aliquam LLP",
      business_rating: 4,
      business_genre: "Sales and Marketing",
      business_phone: "(371) 110-1896",
      map_id: 51
    }),
    new Business({
      business_name: "Facilisis Incorporated",
      business_rating: 0,
      business_genre: "Advertising",
      business_phone: "(269) 345-3128",
      map_id: 5
    }),
    new Business({
      business_name: "Eu Neque Pellentesque LLP",
      business_rating: 4,
      business_genre: "Human Resources",
      business_phone: "(375) 841-3565",
      map_id: 99
    }),
    new Business({
      business_name: "Proin Eget Institute",
      business_rating: 5,
      business_genre: "Advertising",
      business_phone: "(811) 968-2536",
      map_id: 52
    }),
    new Business({
      business_name: "Nam Porttitor Scelerisque Consulting",
      business_rating: 1,
      business_genre: "Legal Department",
      business_phone: "(600) 750-8474",
      map_id: 64
    }),
    new Business({
      business_name: "Massa Lobortis Ultrices Ltd",
      business_rating: 2,
      business_genre: "Public Relations",
      business_phone: "(624) 261-1965",
      map_id: 11
    }),
    new Business({
      business_name: "In Associates",
      business_rating: 0,
      business_genre: "Finances",
      business_phone: "(639) 846-9665",
      map_id: 77
    }),
    new Business({
      business_name: "Mi Aliquam Limited",
      business_rating: 0,
      business_genre: "Accounting",
      business_phone: "(304) 496-4656",
      map_id: 94
    }),
    new Business({
      business_name: "Lacus Quisque Imperdiet Consulting",
      business_rating: 2,
      business_genre: "Customer Relations",
      business_phone: "(710) 834-9470",
      map_id: 81
    }),
    new Business({
      business_name: "Maecenas Libero Est Foundation",
      business_rating: 4,
      business_genre: "Payroll",
      business_phone: "(929) 320-2610",
      map_id: 60
    }),
    new Business({
      business_name: "Aliquet Institute",
      business_rating: 0,
      business_genre: "Tech Support",
      business_phone: "(561) 465-0296",
      map_id: 39
    }),
    new Business({
      business_name: "Nullam Vitae Consulting",
      business_rating: 3,
      business_genre: "Customer Relations",
      business_phone: "(914) 707-6352",
      map_id: 20
    }),
    new Business({
      business_name: "Et Ultrices Posuere Consulting",
      business_rating: 2,
      business_genre: "Tech Support",
      business_phone: "(824) 235-9027",
      map_id: 13
    }),
    new Business({
      business_name: "Sit Consulting",
      business_rating: 2,
      business_genre: "Research and Development",
      business_phone: "(495) 576-7967",
      map_id: 92
    }),
    new Business({
      business_name: "Aliquam Rutrum Lorem Inc.",
      business_rating: 5,
      business_genre: "Public Relations",
      business_phone: "(710) 950-3125",
      map_id: 90
    }),
    new Business({
      business_name: "Lorem Vehicula Et Corporation",
      business_rating: 4,
      business_genre: "Accounting",
      business_phone: "(546) 956-1456",
      map_id: 49
    }),
    new Business({
      business_name: "Amet Consectetuer Adipiscing Industries",
      business_rating: 1,
      business_genre: "Customer Relations",
      business_phone: "(994) 780-8608",
      map_id: 4
    }),
    new Business({
      business_name: "Nunc Id Incorporated",
      business_rating: 1,
      business_genre: "Human Resources",
      business_phone: "(644) 545-5321",
      map_id: 18
    }),
    new Business({
      business_name: "Aliquet Magna A Associates",
      business_rating: 3,
      business_genre: "Customer Service",
      business_phone: "(890) 371-2590",
      map_id: 81
    }),
    new Business({
      business_name: "Porta Incorporated",
      business_rating: 0,
      business_genre: "Payroll",
      business_phone: "(310) 875-1962",
      map_id: 85
    }),
    new Business({
      business_name: "Ut Consulting",
      business_rating: 2,
      business_genre: "Finances",
      business_phone: "(760) 777-2972",
      map_id: 59
    }),
    new Business({
      business_name: "Odio Foundation",
      business_rating: 5,
      business_genre: "Quality Assurance",
      business_phone: "(893) 419-0975",
      map_id: 43
    }),
    new Business({
      business_name: "Nec Mollis Vitae Corporation",
      business_rating: 3,
      business_genre: "Media Relations",
      business_phone: "(712) 302-1360",
      map_id: 79
    }),
    new Business({
      business_name: "Pharetra LLC",
      business_rating: 2,
      business_genre: "Media Relations",
      business_phone: "(453) 640-3104",
      map_id: 89
    }),
    new Business({
      business_name: "Consequat Enim Diam LLC",
      business_rating: 2,
      business_genre: "Quality Assurance",
      business_phone: "(993) 718-3316",
      map_id: 96
    }),
    new Business({
      business_name: "Dolor Sit Corp.",
      business_rating: 1,
      business_genre: "Customer Relations",
      business_phone: "(578) 599-2143",
      map_id: 77
    }),
    new Business({
      business_name: "Varius Nam Consulting",
      business_rating: 3,
      business_genre: "Legal Department",
      business_phone: "(895) 887-2041",
      map_id: 100
    }),
    new Business({
      business_name: "Cum Sociis Corp.",
      business_rating: 1,
      business_genre: "Media Relations",
      business_phone: "(403) 158-3516",
      map_id: 4
    }),
    new Business({
      business_name: "Nunc Consulting",
      business_rating: 4,
      business_genre: "Media Relations",
      business_phone: "(462) 170-4209",
      map_id: 41
    }),
    new Business({
      business_name: "Dui Quis Accumsan PC",
      business_rating: 0,
      business_genre: "Finances",
      business_phone: "(123) 445-0411",
      map_id: 71
    }),
    new Business({
      business_name: "Amet Incorporated",
      business_rating: 2,
      business_genre: "Research and Development",
      business_phone: "(128) 647-5958",
      map_id: 35
    }),
    new Business({
      business_name: "In Consequat Inc.",
      business_rating: 5,
      business_genre: "Customer Relations",
      business_phone: "(795) 465-4139",
      map_id: 53
    }),
    new Business({
      business_name: "Mus Proin Vel Limited",
      business_rating: 1,
      business_genre: "Advertising",
      business_phone: "(335) 845-4537",
      map_id: 8
    }),
    new Business({
      business_name: "Nunc Foundation",
      business_rating: 1,
      business_genre: "Asset Management",
      business_phone: "(929) 210-1717",
      map_id: 9
    }),
    new Business({
      business_name: "Aliquam Consulting",
      business_rating: 2,
      business_genre: "Finances",
      business_phone: "(837) 820-3889",
      map_id: 41
    }),
    new Business({
      business_name: "Hendrerit Ltd",
      business_rating: 2,
      business_genre: "Media Relations",
      business_phone: "(612) 686-1214",
      map_id: 17
    }),
    new Business({
      business_name: "Dolor Elit Pellentesque PC",
      business_rating: 1,
      business_genre: "Customer Service",
      business_phone: "(185) 637-5598",
      map_id: 15
    }),
    new Business({
      business_name: "Vestibulum Ante Ipsum LLC",
      business_rating: 2,
      business_genre: "Finances",
      business_phone: "(600) 798-4548",
      map_id: 50
    }),
    new Business({
      business_name: "Egestas Ligula PC",
      business_rating: 0,
      business_genre: "Accounting",
      business_phone: "(884) 408-4930",
      map_id: 44
    }),
    new Business({
      business_name: "Dui Consulting",
      business_rating: 0,
      business_genre: "Payroll",
      business_phone: "(570) 628-1204",
      map_id: 33
    }),
    new Business({
      business_name: "Nec Foundation",
      business_rating: 1,
      business_genre: "Accounting",
      business_phone: "(145) 634-2356",
      map_id: 40
    }),
    new Business({
      business_name: "Ut Tincidunt Company",
      business_rating: 2,
      business_genre: "Asset Management",
      business_phone: "(919) 734-4894",
      map_id: 22
    }),
    new Business({
      business_name: "Augue LLP",
      business_rating: 2,
      business_genre: "Advertising",
      business_phone: "(448) 891-2700",
      map_id: 47
    }),
    new Business({
      business_name: "A Nunc LLC",
      business_rating: 2,
      business_genre: "Research and Development",
      business_phone: "(890) 959-0210",
      map_id: 82
    }),
    new Business({
      business_name: "Fringilla Foundation",
      business_rating: 2,
      business_genre: "Customer Service",
      business_phone: "(807) 169-6845",
      map_id: 73
    }),
    new Business({
      business_name: "Elit Pharetra Ut Ltd",
      business_rating: 1,
      business_genre: "Finances",
      business_phone: "(497) 466-2916",
      map_id: 71
    }),
    new Business({
      business_name: "Nec Ligula Consectetuer Inc.",
      business_rating: 2,
      business_genre: "Asset Management",
      business_phone: "(488) 102-2441",
      map_id: 40
    }),
    new Business({
      business_name: "Tellus Aenean Egestas Company",
      business_rating: 1,
      business_genre: "Human Resources",
      business_phone: "(896) 900-7900",
      map_id: 34
    }),
    new Business({
      business_name: "Nunc Foundation",
      business_rating: 5,
      business_genre: "Advertising",
      business_phone: "(364) 895-5409",
      map_id: 92
    }),
    new Business({
      business_name: "Luctus Lobortis Class Associates",
      business_rating: 1,
      business_genre: "Legal Department",
      business_phone: "(677) 871-7438",
      map_id: 63
    }),
    new Business({
      business_name: "Mauris Ut Quam Incorporated",
      business_rating: 1,
      business_genre: "Legal Department",
      business_phone: "(631) 634-7458",
      map_id: 87
    }),
    new Business({
      business_name: "Nisl Arcu Iaculis Consulting",
      business_rating: 4,
      business_genre: "Accounting",
      business_phone: "(141) 141-8380",
      map_id: 25
    }),
    new Business({
      business_name: "Ac Foundation",
      business_rating: 3,
      business_genre: "Finances",
      business_phone: "(640) 597-7885",
      map_id: 5
    }),
    new Business({
      business_name: "Imperdiet Incorporated",
      business_rating: 2,
      business_genre: "Customer Service",
      business_phone: "(991) 536-6825",
      map_id: 96
    }),
    new Business({
      business_name: "Phasellus Ornare Fusce LLC",
      business_rating: 2,
      business_genre: "Sales and Marketing",
      business_phone: "(704) 602-3250",
      map_id: 50
    }),
    new Business({
      business_name: "Duis LLC",
      business_rating: 3,
      business_genre: "Asset Management",
      business_phone: "(680) 307-8430",
      map_id: 75
    }),
    new Business({
      business_name: "Fusce Feugiat Consulting",
      business_rating: 4,
      business_genre: "Accounting",
      business_phone: "(506) 633-6078",
      map_id: 7
    }),
    new Business({
      business_name: "Laoreet Ipsum Curabitur Industries",
      business_rating: 5,
      business_genre: "Finances",
      business_phone: "(256) 683-8504",
      map_id: 65
    }),
    new Business({
      business_name: "Mauris Company",
      business_rating: 5,
      business_genre: "Media Relations",
      business_phone: "(596) 491-7706",
      map_id: 76
    }),
    new Business({
      business_name: "Neque Sed Limited",
      business_rating: 4,
      business_genre: "Accounting",
      business_phone: "(656) 697-7179",
      map_id: 13
    }),
    new Business({
      business_name: "In Incorporated",
      business_rating: 3,
      business_genre: "Payroll",
      business_phone: "(850) 643-9226",
      map_id: 81
    }),
    new Business({
      business_name: "Feugiat Lorem Ipsum Company",
      business_rating: 5,
      business_genre: "Media Relations",
      business_phone: "(916) 680-3276",
      map_id: 79
    }),
    new Business({
      business_name: "Vitae Erat Vivamus Corporation",
      business_rating: 0,
      business_genre: "Research and Development",
      business_phone: "(915) 197-0561",
      map_id: 65
    }),
    new Business({
      business_name: "Mauris Eu Incorporated",
      business_rating: 1,
      business_genre: "Public Relations",
      business_phone: "(391) 661-7118",
      map_id: 16
    }),
    new Business({
      business_name: "Tristique Senectus Et Corp.",
      business_rating: 1,
      business_genre: "Finances",
      business_phone: "(701) 870-6189",
      map_id: 93
    }),
    new Business({
      business_name: "Odio Sagittis LLP",
      business_rating: 5,
      business_genre: "Media Relations",
      business_phone: "(156) 192-1361",
      map_id: 25
    }),
    new Business({
      business_name: "Malesuada Integer Id Consulting",
      business_rating: 0,
      business_genre: "Customer Service",
      business_phone: "(449) 268-5761",
      map_id: 6
    }),
    new Business({
      business_name: "Eu Sem LLP",
      business_rating: 3,
      business_genre: "Asset Management",
      business_phone: "(893) 663-9825",
      map_id: 61
    }),
    new Business({
      business_name: "Eu Inc.",
      business_rating: 4,
      business_genre: "Advertising",
      business_phone: "(484) 822-2211",
      map_id: 66
    }),
    new Business({
      business_name: "Ipsum Suspendisse LLP",
      business_rating: 5,
      business_genre: "Quality Assurance",
      business_phone: "(751) 504-0322",
      map_id: 72
    }),
    new Business({
      business_name: "Ipsum Suspendisse Non Foundation",
      business_rating: 2,
      business_genre: "Human Resources",
      business_phone: "(756) 819-5107",
      map_id: 83
    }),
    new Business({
      business_name: "Vel LLP",
      business_rating: 4,
      business_genre: "Quality Assurance",
      business_phone: "(692) 915-5316",
      map_id: 69
    }),
    new Business({
      business_name: "Tincidunt Aliquam Arcu LLC",
      business_rating: 3,
      business_genre: "Asset Management",
      business_phone: "(580) 570-2857",
      map_id: 48
    }),
    new Business({
      business_name: "Sed Turpis Institute",
      business_rating: 4,
      business_genre: "Quality Assurance",
      business_phone: "(807) 225-0136",
      map_id: 56
    }),
    new Business({
      business_name: "Fermentum Fermentum Foundation",
      business_rating: 2,
      business_genre: "Accounting",
      business_phone: "(162) 380-5430",
      map_id: 61
    }),
    new Business({
      business_name: "Eget Magna Suspendisse Associates",
      business_rating: 0,
      business_genre: "Human Resources",
      business_phone: "(173) 465-2725",
      map_id: 25
    }),
    new Business({
      business_name: "Diam Vel LLP",
      business_rating: 1,
      business_genre: "Advertising",
      business_phone: "(849) 989-8607",
      map_id: 94
    }),
    new Business({
      business_name: "Adipiscing Non Luctus Corp.",
      business_rating: 3,
      business_genre: "Public Relations",
      business_phone: "(119) 846-8834",
      map_id: 89
    }),
    new Business({
      business_name: "Enim LLP",
      business_rating: 1,
      business_genre: "Legal Department",
      business_phone: "(956) 467-2593",
      map_id: 5
    }),
    new Business({
      business_name: "Eu Neque Pellentesque Ltd",
      business_rating: 1,
      business_genre: "Customer Relations",
      business_phone: "(972) 273-2695",
      map_id: 34
    }),
    new Business({
      business_name: "Tortor Dictum Consulting",
      business_rating: 3,
      business_genre: "Finances",
      business_phone: "(375) 964-0418",
      map_id: 48
    }),
    new Business({
      business_name: "At Libero LLC",
      business_rating: 0,
      business_genre: "Tech Support",
      business_phone: "(724) 621-5442",
      map_id: 100
    }),
    new Business({
      business_name: "Dis Parturient Montes Consulting",
      business_rating: 4,
      business_genre: "Finances",
      business_phone: "(633) 305-6628",
      map_id: 83
    }),
    new Business({
      business_name: "Sagittis Semper Nam Inc.",
      business_rating: 2,
      business_genre: "Tech Support",
      business_phone: "(323) 643-8270",
      map_id: 70
    })
];

var done = 0;
for(var i = 0; i < businesses.length; i++) {
  businesses[i].save(function(err, result) {
    done++;
    if (done === businesses.length) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}
