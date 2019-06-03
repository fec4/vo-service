var Business = require("../models/businesses");

var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/business");

var businesses = [
	new Business({
		business_id: 0,
		business_name: "In Hendrerit Corp.",
		business_rating: 2,
		business_genre: "Legal Department",
		business_phone: "(465) 817-2638",
		business_reviews: 866
	}),
	new Business({
		business_id: 1,
		business_name: "Non Justo Proin LLP",
		business_rating: 2,
		business_genre: "Public Relations",
		business_phone: "(426) 430-2531",
		business_reviews: 460
	}),
	new Business({
		business_id: 2,
		business_name: "Ridiculus Consulting",
		business_rating: 0,
		business_genre: "Tech Support",
		business_phone: "(362) 380-7494",
		business_reviews: 805
	}),
	new Business({
		business_id: 3,
		business_name: "A Enim Suspendisse Limited",
		business_rating: 4,
		business_genre: "Legal Department",
		business_phone: "(825) 175-8145",
		business_reviews: 457
	}),
	new Business({
		business_id: 4,
		business_name: "Nisi Magna Inc.",
		business_rating: 0,
		business_genre: "Research and Development",
		business_phone: "(102) 463-9020",
		business_reviews: 672
	}),
	new Business({
		business_id: 5,
		business_name: "Dignissim Institute",
		business_rating: 4,
		business_genre: "Tech Support",
		business_phone: "(160) 934-7867",
		business_reviews: 355
	}),
	new Business({
		business_id: 6,
		business_name: "Ultricies Ligula Nullam Ltd",
		business_rating: 1,
		business_genre: "Customer Service",
		business_phone: "(521) 871-9881",
		business_reviews: 818
	}),
	new Business({
		business_id: 7,
		business_name: "Quis Company",
		business_rating: 0,
		business_genre: "Payroll",
		business_phone: "(500) 155-5669",
		business_reviews: 169
	}),
	new Business({
		business_id: 8,
		business_name: "Erat Eget Ipsum Inc.",
		business_rating: 1,
		business_genre: "Tech Support",
		business_phone: "(598) 940-2825",
		business_reviews: 535
	}),
	new Business({
		business_id: 9,
		business_name: "Sagittis Foundation",
		business_rating: 1,
		business_genre: "Legal Department",
		business_phone: "(319) 401-2398",
		business_reviews: 547
	}),
	new Business({
		business_id: 10,
		business_name: "Habitant Morbi Corp.",
		business_rating: 3,
		business_genre: "Tech Support",
		business_phone: "(634) 738-3351",
		business_reviews: 840
	}),
	new Business({
		business_id: 11,
		business_name: "Nisl Institute",
		business_rating: 2,
		business_genre: "Public Relations",
		business_phone: "(201) 456-6717",
		business_reviews: 233
	}),
	new Business({
		business_id: 12,
		business_name: "Eu Industries",
		business_rating: 3,
		business_genre: "Legal Department",
		business_phone: "(188) 772-5961",
		business_reviews: 336
	}),
	new Business({
		business_id: 13,
		business_name: "Placerat Velit Quisque LLP",
		business_rating: 1,
		business_genre: "Customer Service",
		business_phone: "(908) 809-1377",
		business_reviews: 865
	}),
	new Business({
		business_id: 14,
		business_name: "Mauris Aliquam Eu Corporation",
		business_rating: 4,
		business_genre: "Human Resources",
		business_phone: "(274) 115-0181",
		business_reviews: 520
	}),
	new Business({
		business_id: 15,
		business_name: "Arcu Curabitur Foundation",
		business_rating: 5,
		business_genre: "Accounting",
		business_phone: "(832) 510-3860",
		business_reviews: 530
	}),
	new Business({
		business_id: 16,
		business_name: "Magna Sed Company",
		business_rating: 5,
		business_genre: "Accounting",
		business_phone: "(202) 246-4736",
		business_reviews: 873
	}),
	new Business({
		business_id: 17,
		business_name: "Nulla Facilisis Suspendisse Institute",
		business_rating: 1,
		business_genre: "Finances",
		business_phone: "(523) 235-2334",
		business_reviews: 734
	}),
	new Business({
		business_id: 18,
		business_name: "Nunc Company",
		business_rating: 1,
		business_genre: "Asset Management",
		business_phone: "(327) 127-7427",
		business_reviews: 813
	}),
	new Business({
		business_id: 19,
		business_name: "Nulla Magna Ltd",
		business_rating: 4,
		business_genre: "Finances",
		business_phone: "(585) 138-5329",
		business_reviews: 325
	}),
	new Business({
		business_id: 20,
		business_name: "Penatibus Et Associates",
		business_rating: 1,
		business_genre: "Customer Service",
		business_phone: "(500) 863-6424",
		business_reviews: 417
	}),
	new Business({
		business_id: 21,
		business_name: "Molestie Sed Id Inc.",
		business_rating: 0,
		business_genre: "Asset Management",
		business_phone: "(749) 192-5936",
		business_reviews: 45
	}),
	new Business({
		business_id: 22,
		business_name: "Et Magna Praesent Ltd",
		business_rating: 4,
		business_genre: "Asset Management",
		business_phone: "(754) 834-4479",
		business_reviews: 442
	}),
	new Business({
		business_id: 23,
		business_name: "Ligula PC",
		business_rating: 3,
		business_genre: "Quality Assurance",
		business_phone: "(991) 588-7851",
		business_reviews: 706
	}),
	new Business({
		business_id: 24,
		business_name: "Iaculis Aliquet Diam Incorporated",
		business_rating: 5,
		business_genre: "Advertising",
		business_phone: "(735) 507-8700",
		business_reviews: 689
	}),
	new Business({
		business_id: 25,
		business_name: "In Molestie Corporation",
		business_rating: 1,
		business_genre: "Payroll",
		business_phone: "(826) 662-6969",
		business_reviews: 511
	}),
	new Business({
		business_id: 26,
		business_name: "Egestas Aliquam Company",
		business_rating: 3,
		business_genre: "Tech Support",
		business_phone: "(422) 854-4723",
		business_reviews: 310
	}),
	new Business({
		business_id: 27,
		business_name: "Gravida Praesent Eu Corporation",
		business_rating: 3,
		business_genre: "Customer Relations",
		business_phone: "(535) 391-6208",
		business_reviews: 803
	}),
	new Business({
		business_id: 28,
		business_name: "Ultricies PC",
		business_rating: 4,
		business_genre: "Public Relations",
		business_phone: "(983) 621-4506",
		business_reviews: 795
	}),
	new Business({
		business_id: 29,
		business_name: "Ornare Tortor At Industries",
		business_rating: 3,
		business_genre: "Tech Support",
		business_phone: "(165) 711-0326",
		business_reviews: 913
	}),
	new Business({
		business_id: 30,
		business_name: "Risus LLP",
		business_rating: 0,
		business_genre: "Sales and Marketing",
		business_phone: "(432) 992-8441",
		business_reviews: 650
	}),
	new Business({
		business_id: 31,
		business_name: "Vitae Orci Phasellus Inc.",
		business_rating: 4,
		business_genre: "Accounting",
		business_phone: "(846) 563-7994",
		business_reviews: 607
	}),
	new Business({
		business_id: 32,
		business_name: "At Sem Inc.",
		business_rating: 2,
		business_genre: "Public Relations",
		business_phone: "(529) 993-0365",
		business_reviews: 396
	}),
	new Business({
		business_id: 33,
		business_name: "Tellus Imperdiet Non Company",
		business_rating: 5,
		business_genre: "Quality Assurance",
		business_phone: "(268) 839-3937",
		business_reviews: 175
	}),
	new Business({
		business_id: 34,
		business_name: "Arcu Associates",
		business_rating: 4,
		business_genre: "Asset Management",
		business_phone: "(159) 267-0782",
		business_reviews: 775
	}),
	new Business({
		business_id: 35,
		business_name: "Metus Consulting",
		business_rating: 4,
		business_genre: "Legal Department",
		business_phone: "(457) 811-5609",
		business_reviews: 528
	}),
	new Business({
		business_id: 36,
		business_name: "Posuere Cubilia Curae; Industries",
		business_rating: 4,
		business_genre: "Customer Service",
		business_phone: "(462) 641-9830",
		business_reviews: 236
	}),
	new Business({
		business_id: 37,
		business_name: "Odio Phasellus Industries",
		business_rating: 1,
		business_genre: "Asset Management",
		business_phone: "(220) 224-8756",
		business_reviews: 185
	}),
	new Business({
		business_id: 38,
		business_name: "Gravida Corp.",
		business_rating: 2,
		business_genre: "Accounting",
		business_phone: "(651) 105-5925",
		business_reviews: 313
	}),
	new Business({
		business_id: 39,
		business_name: "Class LLC",
		business_rating: 1,
		business_genre: "Tech Support",
		business_phone: "(623) 678-7872",
		business_reviews: 166
	}),
	new Business({
		business_id: 40,
		business_name: "Vitae Aliquet Nec Associates",
		business_rating: 0,
		business_genre: "Sales and Marketing",
		business_phone: "(628) 174-2132",
		business_reviews: 314
	}),
	new Business({
		business_id: 41,
		business_name: "Posuere Inc.",
		business_rating: 1,
		business_genre: "Asset Management",
		business_phone: "(874) 285-6479",
		business_reviews: 176
	}),
	new Business({
		business_id: 42,
		business_name: "In Tempus Corp.",
		business_rating: 0,
		business_genre: "Tech Support",
		business_phone: "(145) 428-3803",
		business_reviews: 968
	}),
	new Business({
		business_id: 43,
		business_name: "Dolor Institute",
		business_rating: 5,
		business_genre: "Public Relations",
		business_phone: "(801) 943-4532",
		business_reviews: 936
	}),
	new Business({
		business_id: 44,
		business_name: "Fermentum Arcu PC",
		business_rating: 0,
		business_genre: "Finances",
		business_phone: "(920) 473-4170",
		business_reviews: 755
	}),
	new Business({
		business_id: 45,
		business_name: "Tristique Pharetra Consulting",
		business_rating: 1,
		business_genre: "Public Relations",
		business_phone: "(416) 155-5592",
		business_reviews: 978
	}),
	new Business({
		business_id: 46,
		business_name: "Nec Company",
		business_rating: 2,
		business_genre: "Quality Assurance",
		business_phone: "(778) 280-5948",
		business_reviews: 621
	}),
	new Business({
		business_id: 47,
		business_name: "Consequat Enim Diam Ltd",
		business_rating: 2,
		business_genre: "Sales and Marketing",
		business_phone: "(571) 463-0826",
		business_reviews: 492
	}),
	new Business({
		business_id: 48,
		business_name: "Neque In Ornare Incorporated",
		business_rating: 1,
		business_genre: "Public Relations",
		business_phone: "(168) 103-7607",
		business_reviews: 446
	}),
	new Business({
		business_id: 49,
		business_name: "Elit Industries",
		business_rating: 0,
		business_genre: "Advertising",
		business_phone: "(216) 290-4143",
		business_reviews: 649
	}),
	new Business({
		business_id: 50,
		business_name: "Aliquam Vulputate Ullamcorper Ltd",
		business_rating: 2,
		business_genre: "Media Relations",
		business_phone: "(181) 595-2272",
		business_reviews: 490
	}),
	new Business({
		business_id: 51,
		business_name: "Aliquet Corp.",
		business_rating: 4,
		business_genre: "Sales and Marketing",
		business_phone: "(447) 763-5601",
		business_reviews: 407
	}),
	new Business({
		business_id: 52,
		business_name: "Ligula Aenean Euismod Institute",
		business_rating: 0,
		business_genre: "Customer Relations",
		business_phone: "(577) 411-7280",
		business_reviews: 168
	}),
	new Business({
		business_id: 53,
		business_name: "Nec Limited",
		business_rating: 5,
		business_genre: "Customer Relations",
		business_phone: "(712) 554-2475",
		business_reviews: 447
	}),
	new Business({
		business_id: 54,
		business_name: "Egestas Blandit Nam Associates",
		business_rating: 2,
		business_genre: "Customer Service",
		business_phone: "(284) 935-0778",
		business_reviews: 510
	}),
	new Business({
		business_id: 55,
		business_name: "Nunc Quis Consulting",
		business_rating: 0,
		business_genre: "Legal Department",
		business_phone: "(534) 320-8278",
		business_reviews: 114
	}),
	new Business({
		business_id: 56,
		business_name: "Volutpat Ornare Facilisis Limited",
		business_rating: 0,
		business_genre: "Tech Support",
		business_phone: "(968) 532-6836",
		business_reviews: 479
	}),
	new Business({
		business_id: 57,
		business_name: "Urna Suscipit Company",
		business_rating: 3,
		business_genre: "Research and Development",
		business_phone: "(836) 709-0739",
		business_reviews: 192
	}),
	new Business({
		business_id: 58,
		business_name: "Felis Donec Ltd",
		business_rating: 1,
		business_genre: "Media Relations",
		business_phone: "(831) 527-0058",
		business_reviews: 405
	}),
	new Business({
		business_id: 59,
		business_name: "Neque Nullam Industries",
		business_rating: 4,
		business_genre: "Finances",
		business_phone: "(954) 239-0588",
		business_reviews: 676
	}),
	new Business({
		business_id: 60,
		business_name: "Sapien Foundation",
		business_rating: 0,
		business_genre: "Media Relations",
		business_phone: "(896) 692-2047",
		business_reviews: 152
	}),
	new Business({
		business_id: 61,
		business_name: "Eu Turpis Consulting",
		business_rating: 2,
		business_genre: "Media Relations",
		business_phone: "(193) 506-4520",
		business_reviews: 261
	}),
	new Business({
		business_id: 62,
		business_name: "Tristique Senectus LLC",
		business_rating: 0,
		business_genre: "Advertising",
		business_phone: "(691) 606-5369",
		business_reviews: 431
	}),
	new Business({
		business_id: 63,
		business_name: "Consectetuer Euismod Corporation",
		business_rating: 5,
		business_genre: "Quality Assurance",
		business_phone: "(751) 558-7101",
		business_reviews: 506
	}),
	new Business({
		business_id: 64,
		business_name: "Integer Ltd",
		business_rating: 2,
		business_genre: "Research and Development",
		business_phone: "(309) 151-5307",
		business_reviews: 911
	}),
	new Business({
		business_id: 65,
		business_name: "Curabitur Vel Corporation",
		business_rating: 3,
		business_genre: "Human Resources",
		business_phone: "(595) 957-6194",
		business_reviews: 744
	}),
	new Business({
		business_id: 66,
		business_name: "Class Aptent Corporation",
		business_rating: 2,
		business_genre: "Human Resources",
		business_phone: "(877) 942-0014",
		business_reviews: 428
	}),
	new Business({
		business_id: 67,
		business_name: "Non Dui Consulting",
		business_rating: 5,
		business_genre: "Customer Service",
		business_phone: "(638) 176-8050",
		business_reviews: 924
	}),
	new Business({
		business_id: 68,
		business_name: "Lectus Sit Amet LLC",
		business_rating: 4,
		business_genre: "Advertising",
		business_phone: "(134) 285-0228",
		business_reviews: 691
	}),
	new Business({
		business_id: 69,
		business_name: "Ac Associates",
		business_rating: 2,
		business_genre: "Asset Management",
		business_phone: "(148) 252-3436",
		business_reviews: 698
	}),
	new Business({
		business_id: 70,
		business_name: "Tellus Sem Industries",
		business_rating: 0,
		business_genre: "Sales and Marketing",
		business_phone: "(436) 654-0953",
		business_reviews: 911
	}),
	new Business({
		business_id: 71,
		business_name: "Ornare Consulting",
		business_rating: 2,
		business_genre: "Tech Support",
		business_phone: "(275) 410-3204",
		business_reviews: 775
	}),
	new Business({
		business_id: 72,
		business_name: "Enim Nisl Corporation",
		business_rating: 5,
		business_genre: "Customer Relations",
		business_phone: "(341) 779-7085",
		business_reviews: 388
	}),
	new Business({
		business_id: 73,
		business_name: "Facilisis Vitae Incorporated",
		business_rating: 1,
		business_genre: "Customer Relations",
		business_phone: "(563) 670-1865",
		business_reviews: 930
	}),
	new Business({
		business_id: 74,
		business_name: "Iaculis Quis Pede LLP",
		business_rating: 5,
		business_genre: "Research and Development",
		business_phone: "(628) 978-2688",
		business_reviews: 366
	}),
	new Business({
		business_id: 75,
		business_name: "Neque Et Nunc Institute",
		business_rating: 0,
		business_genre: "Customer Relations",
		business_phone: "(984) 561-1371",
		business_reviews: 436
	}),
	new Business({
		business_id: 76,
		business_name: "Eleifend Egestas LLC",
		business_rating: 2,
		business_genre: "Asset Management",
		business_phone: "(919) 835-1617",
		business_reviews: 537
	}),
	new Business({
		business_id: 77,
		business_name: "Placerat Augue Company",
		business_rating: 2,
		business_genre: "Customer Relations",
		business_phone: "(526) 610-5377",
		business_reviews: 258
	}),
	new Business({
		business_id: 78,
		business_name: "Consectetuer Inc.",
		business_rating: 5,
		business_genre: "Sales and Marketing",
		business_phone: "(737) 120-9729",
		business_reviews: 556
	}),
	new Business({
		business_id: 79,
		business_name: "Sem Molestie Institute",
		business_rating: 1,
		business_genre: "Asset Management",
		business_phone: "(433) 318-9835",
		business_reviews: 798
	}),
	new Business({
		business_id: 80,
		business_name: "Tincidunt Aliquam Corp.",
		business_rating: 4,
		business_genre: "Advertising",
		business_phone: "(836) 565-6320",
		business_reviews: 446
	}),
	new Business({
		business_id: 81,
		business_name: "Purus Sapien Gravida Foundation",
		business_rating: 1,
		business_genre: "Customer Service",
		business_phone: "(180) 979-9409",
		business_reviews: 956
	}),
	new Business({
		business_id: 82,
		business_name: "Proin Ultrices Foundation",
		business_rating: 2,
		business_genre: "Media Relations",
		business_phone: "(507) 294-8183",
		business_reviews: 509
	}),
	new Business({
		business_id: 83,
		business_name: "Fusce Diam Incorporated",
		business_rating: 2,
		business_genre: "Advertising",
		business_phone: "(521) 257-4883",
		business_reviews: 584
	}),
	new Business({
		business_id: 84,
		business_name: "Suspendisse Associates",
		business_rating: 3,
		business_genre: "Sales and Marketing",
		business_phone: "(332) 836-7750",
		business_reviews: 682
	}),
	new Business({
		business_id: 85,
		business_name: "Phasellus Dolor Corp.",
		business_rating: 4,
		business_genre: "Customer Service",
		business_phone: "(869) 467-7034",
		business_reviews: 183
	}),
	new Business({
		business_id: 86,
		business_name: "Nunc Quis Associates",
		business_rating: 1,
		business_genre: "Legal Department",
		business_phone: "(623) 435-6658",
		business_reviews: 201
	}),
	new Business({
		business_id: 87,
		business_name: "Integer Inc.",
		business_rating: 1,
		business_genre: "Media Relations",
		business_phone: "(912) 647-3943",
		business_reviews: 286
	}),
	new Business({
		business_id: 88,
		business_name: "Sed Industries",
		business_rating: 2,
		business_genre: "Sales and Marketing",
		business_phone: "(625) 977-6797",
		business_reviews: 887
	}),
	new Business({
		business_id: 89,
		business_name: "Et Ultrices Corporation",
		business_rating: 5,
		business_genre: "Public Relations",
		business_phone: "(629) 332-5913",
		business_reviews: 564
	}),
	new Business({
		business_id: 90,
		business_name: "Purus Ltd",
		business_rating: 3,
		business_genre: "Accounting",
		business_phone: "(494) 197-0533",
		business_reviews: 907
	}),
	new Business({
		business_id: 91,
		business_name: "Quis Massa Ltd",
		business_rating: 2,
		business_genre: "Legal Department",
		business_phone: "(454) 545-2623",
		business_reviews: 440
	}),
	new Business({
		business_id: 92,
		business_name: "Dolor Dapibus Gravida PC",
		business_rating: 5,
		business_genre: "Payroll",
		business_phone: "(129) 195-3586",
		business_reviews: 970
	}),
	new Business({
		business_id: 93,
		business_name: "Luctus Ut Corp.",
		business_rating: 3,
		business_genre: "Payroll",
		business_phone: "(515) 636-4994",
		business_reviews: 135
	}),
	new Business({
		business_id: 94,
		business_name: "Ligula Aliquam Erat Corp.",
		business_rating: 0,
		business_genre: "Advertising",
		business_phone: "(141) 695-8218",
		business_reviews: 75
	}),
	new Business({
		business_id: 95,
		business_name: "Vehicula Consulting",
		business_rating: 3,
		business_genre: "Customer Service",
		business_phone: "(702) 639-0255",
		business_reviews: 610
	}),
	new Business({
		business_id: 96,
		business_name: "Elit Company",
		business_rating: 5,
		business_genre: "Advertising",
		business_phone: "(372) 967-0287",
		business_reviews: 829
	}),
	new Business({
		business_id: 97,
		business_name: "Sagittis Duis Gravida Limited",
		business_rating: 2,
		business_genre: "Media Relations",
		business_phone: "(728) 194-1511",
		business_reviews: 473
	}),
	new Business({
		business_id: 98,
		business_name: "Nulla Facilisi Sed Incorporated",
		business_rating: 5,
		business_genre: "Advertising",
		business_phone: "(345) 278-9173",
		business_reviews: 869
	}),
	new Business({
		business_id: 99,
		business_name: "Leo Elementum PC",
		business_rating: 0,
		business_genre: "Customer Service",
		business_phone: "(846) 393-0321",
		business_reviews: 153
	})
];

mongoose.connection.collections['businesses'].drop( function(err) {
  console.log('collection dropped');
});

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
