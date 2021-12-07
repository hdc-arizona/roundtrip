// From the UScereals dataset from the MASS dataset R library
var cereals = [
  {
    "name": "100% Bran",
    "mfr": "N",
    "calories": 212.12121,
    "protein": 12.1212121,
    "fat": 3.030303,
    "sodium": 393.93939,
    "fibre": 30.30303,
    "carbo": 15.15152,
    "sugars": 18.181818,
    "shelf": 3,
    "potassium": 848.48485,
    "vitamins": "enriched"
  },
  {
    "name": "All-Bran",
    "mfr": "K",
    "calories": 212.12121,
    "protein": 12.1212121,
    "fat": 3.030303,
    "sodium": 787.87879,
    "fibre": 27.272727,
    "carbo": 21.21212,
    "sugars": 15.151515,
    "shelf": 3,
    "potassium": 969.69697,
    "vitamins": "enriched"
  },
  {
    "name": "All-Bran with Extra Fiber",
    "mfr": "K",
    "calories": 100,
    "protein": 8,
    "fat": 0,
    "sodium": 280,
    "fibre": 28,
    "carbo": 16,
    "sugars": 0,
    "shelf": 3,
    "potassium": 660,
    "vitamins": "enriched"
  },
  {
    "name": "Apple Cinnamon Cheerios",
    "mfr": "G",
    "calories": 146.66667,
    "protein": 2.6666667,
    "fat": 2.6666667,
    "sodium": 240,
    "fibre": 2,
    "carbo": 14,
    "sugars": 13.333333,
    "shelf": 1,
    "potassium": 93.33333,
    "vitamins": "enriched"
  },
  {
    "name": "Apple Jacks",
    "mfr": "K",
    "calories": 110,
    "protein": 2,
    "fat": 0,
    "sodium": 125,
    "fibre": 1,
    "carbo": 11,
    "sugars": 14,
    "shelf": 2,
    "potassium": 30,
    "vitamins": "enriched"
  },
  {
    "name": "Basic 4",
    "mfr": "G",
    "calories": 173.33333,
    "protein": 4,
    "fat": 2.6666667,
    "sodium": 280,
    "fibre": 2.666667,
    "carbo": 24,
    "sugars": 10.666667,
    "shelf": 3,
    "potassium": 133.33333,
    "vitamins": "enriched"
  },
  {
    "name": "Bran Chex",
    "mfr": "R",
    "calories": 134.32836,
    "protein": 2.9850746,
    "fat": 1.4925373,
    "sodium": 298.50746,
    "fibre": 5.970149,
    "carbo": 22.38806,
    "sugars": 8.955224,
    "shelf": 1,
    "potassium": 186.56716,
    "vitamins": "enriched"
  },
  {
    "name": "Bran Flakes",
    "mfr": "P",
    "calories": 134.32836,
    "protein": 4.4776119,
    "fat": 0,
    "sodium": 313.43284,
    "fibre": 7.462687,
    "carbo": 19.40299,
    "sugars": 7.462687,
    "shelf": 3,
    "potassium": 283.58209,
    "vitamins": "enriched"
  },
  {
    "name": "Cap'n'Crunch",
    "mfr": "Q",
    "calories": 160,
    "protein": 1.3333333,
    "fat": 2.6666667,
    "sodium": 293.33333,
    "fibre": 0,
    "carbo": 16,
    "sugars": 16,
    "shelf": 2,
    "potassium": 46.66667,
    "vitamins": "enriched"
  },
  {
    "name": "Cheerios",
    "mfr": "G",
    "calories": 88,
    "protein": 4.8,
    "fat": 1.6,
    "sodium": 232,
    "fibre": 1.6,
    "carbo": 13.6,
    "sugars": 0.8,
    "shelf": 1,
    "potassium": 84,
    "vitamins": "enriched"
  },
  {
    "name": "Cinnamon Toast Crunch",
    "mfr": "G",
    "calories": 160,
    "protein": 1.3333333,
    "fat": 4,
    "sodium": 280,
    "fibre": 0,
    "carbo": 17.33333,
    "sugars": 12,
    "shelf": 2,
    "potassium": 60,
    "vitamins": "enriched"
  },
  {
    "name": "Clusters",
    "mfr": "G",
    "calories": 220,
    "protein": 6,
    "fat": 4,
    "sodium": 280,
    "fibre": 4,
    "carbo": 26,
    "sugars": 14,
    "shelf": 3,
    "potassium": 210,
    "vitamins": "enriched"
  },
  {
    "name": "Cocoa Puffs",
    "mfr": "G",
    "calories": 110,
    "protein": 1,
    "fat": 1,
    "sodium": 180,
    "fibre": 0,
    "carbo": 12,
    "sugars": 13,
    "shelf": 2,
    "potassium": 55,
    "vitamins": "enriched"
  },
  {
    "name": "Corn Chex",
    "mfr": "R",
    "calories": 110,
    "protein": 2,
    "fat": 0,
    "sodium": 280,
    "fibre": 0,
    "carbo": 22,
    "sugars": 3,
    "shelf": 1,
    "potassium": 25,
    "vitamins": "enriched"
  },
  {
    "name": "Corn Flakes",
    "mfr": "K",
    "calories": 100,
    "protein": 2,
    "fat": 0,
    "sodium": 290,
    "fibre": 1,
    "carbo": 21,
    "sugars": 2,
    "shelf": 1,
    "potassium": 35,
    "vitamins": "enriched"
  },
  {
    "name": "Corn Pops",
    "mfr": "K",
    "calories": 110,
    "protein": 1,
    "fat": 0,
    "sodium": 90,
    "fibre": 1,
    "carbo": 13,
    "sugars": 12,
    "shelf": 2,
    "potassium": 20,
    "vitamins": "enriched"
  },
  {
    "name": "Count Chocula",
    "mfr": "G",
    "calories": 110,
    "protein": 1,
    "fat": 1,
    "sodium": 180,
    "fibre": 0,
    "carbo": 12,
    "sugars": 13,
    "shelf": 2,
    "potassium": 65,
    "vitamins": "enriched"
  },
  {
    "name": "Cracklin' Oat Bran",
    "mfr": "K",
    "calories": 220,
    "protein": 6,
    "fat": 6,
    "sodium": 280,
    "fibre": 8,
    "carbo": 20,
    "sugars": 14,
    "shelf": 3,
    "potassium": 320,
    "vitamins": "enriched"
  },
  {
    "name": "Crispix",
    "mfr": "K",
    "calories": 110,
    "protein": 2,
    "fat": 0,
    "sodium": 220,
    "fibre": 1,
    "carbo": 21,
    "sugars": 3,
    "shelf": 3,
    "potassium": 30,
    "vitamins": "enriched"
  },
  {
    "name": "Crispy Wheat & Raisins",
    "mfr": "G",
    "calories": 133.33333,
    "protein": 2.6666667,
    "fat": 1.3333333,
    "sodium": 186.66667,
    "fibre": 2.666667,
    "carbo": 14.66667,
    "sugars": 13.333333,
    "shelf": 3,
    "potassium": 160,
    "vitamins": "enriched"
  },
  {
    "name": "Double Chex",
    "mfr": "R",
    "calories": 133.33333,
    "protein": 2.6666667,
    "fat": 0,
    "sodium": 253.33333,
    "fibre": 1.333333,
    "carbo": 24,
    "sugars": 6.666667,
    "shelf": 3,
    "potassium": 106.66667,
    "vitamins": "enriched"
  },
  {
    "name": "Froot Loops",
    "mfr": "K",
    "calories": 110,
    "protein": 2,
    "fat": 1,
    "sodium": 125,
    "fibre": 1,
    "carbo": 11,
    "sugars": 13,
    "shelf": 2,
    "potassium": 30,
    "vitamins": "enriched"
  },
  {
    "name": "Frosted Flakes",
    "mfr": "K",
    "calories": 146.66667,
    "protein": 1.3333333,
    "fat": 0,
    "sodium": 266.66667,
    "fibre": 1.333333,
    "carbo": 18.66667,
    "sugars": 14.666667,
    "shelf": 1,
    "potassium": 33.33333,
    "vitamins": "enriched"
  },
  {
    "name": "Frosted Mini-Wheats",
    "mfr": "K",
    "calories": 125,
    "protein": 3.75,
    "fat": 0,
    "sodium": 0,
    "fibre": 3.75,
    "carbo": 17.5,
    "sugars": 8.75,
    "shelf": 2,
    "potassium": 125,
    "vitamins": "enriched"
  },
  {
    "name": "Fruit & Fibre: Dates Walnuts and Oats",
    "mfr": "P",
    "calories": 179.10448,
    "protein": 4.4776119,
    "fat": 2.9850746,
    "sodium": 238.80597,
    "fibre": 7.462687,
    "carbo": 17.91045,
    "sugars": 14.925373,
    "shelf": 3,
    "potassium": 298.50746,
    "vitamins": "enriched"
  },
  {
    "name": "Fruitful Bran",
    "mfr": "K",
    "calories": 179.10448,
    "protein": 4.4776119,
    "fat": 0,
    "sodium": 358.20896,
    "fibre": 7.462687,
    "carbo": 20.89552,
    "sugars": 17.910448,
    "shelf": 3,
    "potassium": 283.58209,
    "vitamins": "enriched"
  },
  {
    "name": "Fruity Pebbles",
    "mfr": "P",
    "calories": 146.66667,
    "protein": 1.3333333,
    "fat": 1.3333333,
    "sodium": 180,
    "fibre": 0,
    "carbo": 17.33333,
    "sugars": 16,
    "shelf": 2,
    "potassium": 33.33333,
    "vitamins": "enriched"
  },
  {
    "name": "Golden Crisp",
    "mfr": "P",
    "calories": 113.63636,
    "protein": 2.2727273,
    "fat": 0,
    "sodium": 51.13636,
    "fibre": 0,
    "carbo": 12.5,
    "sugars": 17.045455,
    "shelf": 1,
    "potassium": 45.45455,
    "vitamins": "enriched"
  },
  {
    "name": "Golden Grahams",
    "mfr": "G",
    "calories": 146.66667,
    "protein": 1.3333333,
    "fat": 1.3333333,
    "sodium": 373.33333,
    "fibre": 0,
    "carbo": 20,
    "sugars": 12,
    "shelf": 2,
    "potassium": 60,
    "vitamins": "enriched"
  },
  {
    "name": "Grape Nuts Flakes",
    "mfr": "P",
    "calories": 113.63636,
    "protein": 3.4090909,
    "fat": 1.1363636,
    "sodium": 159.09091,
    "fibre": 3.409091,
    "carbo": 17.04545,
    "sugars": 5.681818,
    "shelf": 3,
    "potassium": 96.59091,
    "vitamins": "enriched"
  },
  {
    "name": "Grape-Nuts",
    "mfr": "P",
    "calories": 440,
    "protein": 12,
    "fat": 0,
    "sodium": 680,
    "fibre": 12,
    "carbo": 68,
    "sugars": 12,
    "shelf": 3,
    "potassium": 360,
    "vitamins": "enriched"
  },
  {
    "name": "Great Grains Pecan",
    "mfr": "P",
    "calories": 363.63636,
    "protein": 9.0909091,
    "fat": 9.0909091,
    "sodium": 227.27273,
    "fibre": 9.090909,
    "carbo": 39.39394,
    "sugars": 12.121212,
    "shelf": 3,
    "potassium": 303.0303,
    "vitamins": "enriched"
  },
  {
    "name": "Honey Graham Ohs",
    "mfr": "Q",
    "calories": 120,
    "protein": 1,
    "fat": 2,
    "sodium": 220,
    "fibre": 1,
    "carbo": 12,
    "sugars": 11,
    "shelf": 2,
    "potassium": 45,
    "vitamins": "enriched"
  },
  {
    "name": "Honey Nut Cheerios",
    "mfr": "G",
    "calories": 146.66667,
    "protein": 4,
    "fat": 1.3333333,
    "sodium": 333.33333,
    "fibre": 2,
    "carbo": 15.33333,
    "sugars": 13.333333,
    "shelf": 1,
    "potassium": 120,
    "vitamins": "enriched"
  },
  {
    "name": "Honey-comb",
    "mfr": "P",
    "calories": 82.70677,
    "protein": 0.7518797,
    "fat": 0,
    "sodium": 135.33835,
    "fibre": 0,
    "carbo": 10.52632,
    "sugars": 8.270677,
    "shelf": 1,
    "potassium": 26.31579,
    "vitamins": "enriched"
  },
  {
    "name": "Just Right Fruit & Nut",
    "mfr": "K",
    "calories": 186.66667,
    "protein": 4,
    "fat": 1.3333333,
    "sodium": 226.66667,
    "fibre": 2.666667,
    "carbo": 26.66667,
    "sugars": 12,
    "shelf": 3,
    "potassium": 126.66667,
    "vitamins": "100%"
  },
  {
    "name": "Kix",
    "mfr": "G",
    "calories": 73.33333,
    "protein": 1.3333333,
    "fat": 0.6666667,
    "sodium": 173.33333,
    "fibre": 0,
    "carbo": 14,
    "sugars": 2,
    "shelf": 2,
    "potassium": 26.66667,
    "vitamins": "enriched"
  },
  {
    "name": "Life",
    "mfr": "Q",
    "calories": 149.25373,
    "protein": 5.9701493,
    "fat": 2.9850746,
    "sodium": 223.8806,
    "fibre": 2.985075,
    "carbo": 17.91045,
    "sugars": 8.955224,
    "shelf": 2,
    "potassium": 141.79104,
    "vitamins": "enriched"
  },
  {
    "name": "Lucky Charms",
    "mfr": "G",
    "calories": 110,
    "protein": 2,
    "fat": 1,
    "sodium": 180,
    "fibre": 0,
    "carbo": 12,
    "sugars": 12,
    "shelf": 2,
    "potassium": 55,
    "vitamins": "enriched"
  },
  {
    "name": "Mueslix Crispy Blend",
    "mfr": "K",
    "calories": 238.80597,
    "protein": 4.4776119,
    "fat": 2.9850746,
    "sodium": 223.8806,
    "fibre": 4.477612,
    "carbo": 25.37313,
    "sugars": 19.402985,
    "shelf": 3,
    "potassium": 238.80597,
    "vitamins": "enriched"
  },
  {
    "name": "Multi-Grain Cheerios",
    "mfr": "G",
    "calories": 100,
    "protein": 2,
    "fat": 1,
    "sodium": 220,
    "fibre": 2,
    "carbo": 15,
    "sugars": 6,
    "shelf": 1,
    "potassium": 90,
    "vitamins": "enriched"
  },
  {
    "name": "Nut&Honey Crunch",
    "mfr": "K",
    "calories": 179.10448,
    "protein": 2.9850746,
    "fat": 1.4925373,
    "sodium": 283.58209,
    "fibre": 0,
    "carbo": 22.38806,
    "sugars": 13.432836,
    "shelf": 2,
    "potassium": 59.70149,
    "vitamins": "enriched"
  },
  {
    "name": "Nutri-Grain Almond-Raisin",
    "mfr": "K",
    "calories": 208.95522,
    "protein": 4.4776119,
    "fat": 2.9850746,
    "sodium": 328.35821,
    "fibre": 4.477612,
    "carbo": 31.34328,
    "sugars": 10.447761,
    "shelf": 3,
    "potassium": 194.02985,
    "vitamins": "enriched"
  },
  {
    "name": "Oatmeal Raisin Crisp",
    "mfr": "G",
    "calories": 260,
    "protein": 6,
    "fat": 4,
    "sodium": 340,
    "fibre": 3,
    "carbo": 27,
    "sugars": 20,
    "shelf": 3,
    "potassium": 240,
    "vitamins": "enriched"
  },
  {
    "name": "Post Nat. Raisin Bran",
    "mfr": "P",
    "calories": 179.10448,
    "protein": 4.4776119,
    "fat": 1.4925373,
    "sodium": 298.50746,
    "fibre": 8.955224,
    "carbo": 16.41791,
    "sugars": 20.895522,
    "shelf": 3,
    "potassium": 388.0597,
    "vitamins": "enriched"
  },
  {
    "name": "Product 19",
    "mfr": "K",
    "calories": 100,
    "protein": 3,
    "fat": 0,
    "sodium": 320,
    "fibre": 1,
    "carbo": 20,
    "sugars": 3,
    "shelf": 3,
    "potassium": 45,
    "vitamins": "100%"
  },
  {
    "name": "Puffed Rice",
    "mfr": "Q",
    "calories": 50,
    "protein": 1,
    "fat": 0,
    "sodium": 0,
    "fibre": 0,
    "carbo": 13,
    "sugars": 0,
    "shelf": 3,
    "potassium": 15,
    "vitamins": "none"
  },
  {
    "name": "Quaker Oat Squares",
    "mfr": "Q",
    "calories": 200,
    "protein": 8,
    "fat": 2,
    "sodium": 270,
    "fibre": 4,
    "carbo": 28,
    "sugars": 12,
    "shelf": 3,
    "potassium": 220,
    "vitamins": "enriched"
  },
  {
    "name": "Raisin Bran",
    "mfr": "K",
    "calories": 160,
    "protein": 4,
    "fat": 1.3333333,
    "sodium": 280,
    "fibre": 6.666667,
    "carbo": 18.66667,
    "sugars": 16,
    "shelf": 2,
    "potassium": 320,
    "vitamins": "enriched"
  },
  {
    "name": "Raisin Nut Bran",
    "mfr": "G",
    "calories": 200,
    "protein": 6,
    "fat": 4,
    "sodium": 280,
    "fibre": 5,
    "carbo": 21,
    "sugars": 16,
    "shelf": 3,
    "potassium": 280,
    "vitamins": "enriched"
  },
  {
    "name": "Raisin Squares",
    "mfr": "K",
    "calories": 180,
    "protein": 4,
    "fat": 0,
    "sodium": 0,
    "fibre": 4,
    "carbo": 30,
    "sugars": 12,
    "shelf": 3,
    "potassium": 220,
    "vitamins": "enriched"
  },
  {
    "name": "Rice Chex",
    "mfr": "R",
    "calories": 97.34513,
    "protein": 0.8849558,
    "fat": 0,
    "sodium": 212.38938,
    "fibre": 0,
    "carbo": 20.35398,
    "sugars": 1.769912,
    "shelf": 1,
    "potassium": 26.54867,
    "vitamins": "enriched"
  },
  {
    "name": "Rice Krispies",
    "mfr": "K",
    "calories": 110,
    "protein": 2,
    "fat": 0,
    "sodium": 290,
    "fibre": 0,
    "carbo": 22,
    "sugars": 3,
    "shelf": 1,
    "potassium": 35,
    "vitamins": "enriched"
  },
  {
    "name": "Shredded Wheat 'n'Bran",
    "mfr": "N",
    "calories": 134.32836,
    "protein": 4.4776119,
    "fat": 0,
    "sodium": 0,
    "fibre": 5.970149,
    "carbo": 28.35821,
    "sugars": 0,
    "shelf": 1,
    "potassium": 208.95522,
    "vitamins": "none"
  },
  {
    "name": "Shredded Wheat spoon size",
    "mfr": "N",
    "calories": 134.32836,
    "protein": 4.4776119,
    "fat": 0,
    "sodium": 0,
    "fibre": 4.477612,
    "carbo": 29.85075,
    "sugars": 0,
    "shelf": 1,
    "potassium": 179.10448,
    "vitamins": "none"
  },
  {
    "name": "Smacks",
    "mfr": "K",
    "calories": 146.66667,
    "protein": 2.6666667,
    "fat": 1.3333333,
    "sodium": 93.33333,
    "fibre": 1.333333,
    "carbo": 12,
    "sugars": 20,
    "shelf": 2,
    "potassium": 53.33333,
    "vitamins": "enriched"
  },
  {
    "name": "Special K",
    "mfr": "K",
    "calories": 110,
    "protein": 6,
    "fat": 0,
    "sodium": 230,
    "fibre": 1,
    "carbo": 16,
    "sugars": 3,
    "shelf": 1,
    "potassium": 55,
    "vitamins": "enriched"
  },
  {
    "name": "Total Corn Flakes",
    "mfr": "G",
    "calories": 110,
    "protein": 2,
    "fat": 1,
    "sodium": 200,
    "fibre": 0,
    "carbo": 21,
    "sugars": 3,
    "shelf": 3,
    "potassium": 35,
    "vitamins": "100%"
  },
  {
    "name": "Total Raisin Bran",
    "mfr": "G",
    "calories": 140,
    "protein": 3,
    "fat": 1,
    "sodium": 190,
    "fibre": 4,
    "carbo": 15,
    "sugars": 14,
    "shelf": 3,
    "potassium": 230,
    "vitamins": "100%"
  },
  {
    "name": "Total Whole Grain",
    "mfr": "G",
    "calories": 100,
    "protein": 3,
    "fat": 1,
    "sodium": 200,
    "fibre": 3,
    "carbo": 16,
    "sugars": 3,
    "shelf": 3,
    "potassium": 110,
    "vitamins": "100%"
  },
  {
    "name": "Triples",
    "mfr": "G",
    "calories": 146.66667,
    "protein": 2.6666667,
    "fat": 1.3333333,
    "sodium": 333.33333,
    "fibre": 0,
    "carbo": 28,
    "sugars": 4,
    "shelf": 3,
    "potassium": 80,
    "vitamins": "enriched"
  },
  {
    "name": "Trix",
    "mfr": "G",
    "calories": 110,
    "protein": 1,
    "fat": 1,
    "sodium": 140,
    "fibre": 0,
    "carbo": 13,
    "sugars": 12,
    "shelf": 2,
    "potassium": 25,
    "vitamins": "enriched"
  },
  {
    "name": "Wheat Chex",
    "mfr": "R",
    "calories": 149.25373,
    "protein": 4.4776119,
    "fat": 1.4925373,
    "sodium": 343.28358,
    "fibre": 4.477612,
    "carbo": 25.37313,
    "sugars": 4.477612,
    "shelf": 1,
    "potassium": 171.64179,
    "vitamins": "enriched"
  },
  {
    "name": "Wheaties",
    "mfr": "G",
    "calories": 100,
    "protein": 3,
    "fat": 1,
    "sodium": 200,
    "fibre": 3,
    "carbo": 17,
    "sugars": 3,
    "shelf": 1,
    "potassium": 110,
    "vitamins": "enriched"
  },
  {
    "name": "Wheaties Honey Gold",
    "mfr": "G",
    "calories": 146.66667,
    "protein": 2.6666667,
    "fat": 1.3333333,
    "sodium": 266.66667,
    "fibre": 1.333333,
    "carbo": 21.33333,
    "sugars": 10.666667,
    "shelf": 1,
    "potassium": 80,
    "vitamins": "enriched"
  }
];

// From the painters dataset from the MASS dataset R library
var painters = [
  {
    "": "Da Udine",
    "Composition": 10,
    "Drawing": 8,
    "Colour": 16,
    "Expression": 3,
    "School": "A"
  },
  {
    "": "Da Vinci",
    "Composition": 15,
    "Drawing": 16,
    "Colour": 4,
    "Expression": 14,
    "School": "A"
  },
  {
    "": "Del Piombo",
    "Composition": 8,
    "Drawing": 13,
    "Colour": 16,
    "Expression": 7,
    "School": "A"
  },
  {
    "": "Del Sarto",
    "Composition": 12,
    "Drawing": 16,
    "Colour": 9,
    "Expression": 8,
    "School": "A"
  },
  {
    "": "Fr. Penni",
    "Composition": 0,
    "Drawing": 15,
    "Colour": 8,
    "Expression": 0,
    "School": "A"
  },
  {
    "": "Guilio Romano",
    "Composition": 15,
    "Drawing": 16,
    "Colour": 4,
    "Expression": 14,
    "School": "A"
  },
  {
    "": "Michelangelo",
    "Composition": 8,
    "Drawing": 17,
    "Colour": 4,
    "Expression": 8,
    "School": "A"
  },
  {
    "": "Perino del Vaga",
    "Composition": 15,
    "Drawing": 16,
    "Colour": 7,
    "Expression": 6,
    "School": "A"
  },
  {
    "": "Perugino",
    "Composition": 4,
    "Drawing": 12,
    "Colour": 10,
    "Expression": 4,
    "School": "A"
  },
  {
    "": "Raphael",
    "Composition": 17,
    "Drawing": 18,
    "Colour": 12,
    "Expression": 18,
    "School": "A"
  },
  {
    "": "F. Zucarro",
    "Composition": 10,
    "Drawing": 13,
    "Colour": 8,
    "Expression": 8,
    "School": "B"
  },
  {
    "": "Fr. Salviata",
    "Composition": 13,
    "Drawing": 15,
    "Colour": 8,
    "Expression": 8,
    "School": "B"
  },
  {
    "": "Parmigiano",
    "Composition": 10,
    "Drawing": 15,
    "Colour": 6,
    "Expression": 6,
    "School": "B"
  },
  {
    "": "Primaticcio",
    "Composition": 15,
    "Drawing": 14,
    "Colour": 7,
    "Expression": 10,
    "School": "B"
  },
  {
    "": "T. Zucarro",
    "Composition": 13,
    "Drawing": 14,
    "Colour": 10,
    "Expression": 9,
    "School": "B"
  },
  {
    "": "Volterra",
    "Composition": 12,
    "Drawing": 15,
    "Colour": 5,
    "Expression": 8,
    "School": "B"
  },
  {
    "": "Barocci",
    "Composition": 14,
    "Drawing": 15,
    "Colour": 6,
    "Expression": 10,
    "School": "C"
  },
  {
    "": "Cortona",
    "Composition": 16,
    "Drawing": 14,
    "Colour": 12,
    "Expression": 6,
    "School": "C"
  },
  {
    "": "Josepin",
    "Composition": 10,
    "Drawing": 10,
    "Colour": 6,
    "Expression": 2,
    "School": "C"
  },
  {
    "": "L. Jordaens",
    "Composition": 13,
    "Drawing": 12,
    "Colour": 9,
    "Expression": 6,
    "School": "C"
  },
  {
    "": "Testa",
    "Composition": 11,
    "Drawing": 15,
    "Colour": 0,
    "Expression": 6,
    "School": "C"
  },
  {
    "": "Vanius",
    "Composition": 15,
    "Drawing": 15,
    "Colour": 12,
    "Expression": 13,
    "School": "C"
  },
  {
    "": "Bassano",
    "Composition": 6,
    "Drawing": 8,
    "Colour": 17,
    "Expression": 0,
    "School": "D"
  },
  {
    "": "Bellini",
    "Composition": 4,
    "Drawing": 6,
    "Colour": 14,
    "Expression": 0,
    "School": "D"
  },
  {
    "": "Giorgione",
    "Composition": 8,
    "Drawing": 9,
    "Colour": 18,
    "Expression": 4,
    "School": "D"
  },
  {
    "": "Murillo",
    "Composition": 6,
    "Drawing": 8,
    "Colour": 15,
    "Expression": 4,
    "School": "D"
  },
  {
    "": "Palma Giovane",
    "Composition": 12,
    "Drawing": 9,
    "Colour": 14,
    "Expression": 6,
    "School": "D"
  },
  {
    "": "Palma Vecchio",
    "Composition": 5,
    "Drawing": 6,
    "Colour": 16,
    "Expression": 0,
    "School": "D"
  },
  {
    "": "Pordenone",
    "Composition": 8,
    "Drawing": 14,
    "Colour": 17,
    "Expression": 5,
    "School": "D"
  },
  {
    "": "Tintoretto",
    "Composition": 15,
    "Drawing": 14,
    "Colour": 16,
    "Expression": 4,
    "School": "D"
  },
  {
    "": "Titian",
    "Composition": 12,
    "Drawing": 15,
    "Colour": 18,
    "Expression": 6,
    "School": "D"
  },
  {
    "": "Veronese",
    "Composition": 15,
    "Drawing": 10,
    "Colour": 16,
    "Expression": 3,
    "School": "D"
  },
  {
    "": "Albani",
    "Composition": 14,
    "Drawing": 14,
    "Colour": 10,
    "Expression": 6,
    "School": "E"
  },
  {
    "": "Caravaggio",
    "Composition": 6,
    "Drawing": 6,
    "Colour": 16,
    "Expression": 0,
    "School": "E"
  },
  {
    "": "Corregio",
    "Composition": 13,
    "Drawing": 13,
    "Colour": 15,
    "Expression": 12,
    "School": "E"
  },
  {
    "": "Domenichino",
    "Composition": 15,
    "Drawing": 17,
    "Colour": 9,
    "Expression": 17,
    "School": "E"
  },
  {
    "": "Guercino",
    "Composition": 18,
    "Drawing": 10,
    "Colour": 10,
    "Expression": 4,
    "School": "E"
  },
  {
    "": "Lanfranco",
    "Composition": 14,
    "Drawing": 13,
    "Colour": 10,
    "Expression": 5,
    "School": "E"
  },
  {
    "": "The Carraci",
    "Composition": 15,
    "Drawing": 17,
    "Colour": 13,
    "Expression": 13,
    "School": "E"
  },
  {
    "": "Durer",
    "Composition": 8,
    "Drawing": 10,
    "Colour": 10,
    "Expression": 8,
    "School": "F"
  },
  {
    "": "Holbein",
    "Composition": 9,
    "Drawing": 10,
    "Colour": 16,
    "Expression": 13,
    "School": "F"
  },
  {
    "": "Pourbus",
    "Composition": 4,
    "Drawing": 15,
    "Colour": 6,
    "Expression": 6,
    "School": "F"
  },
  {
    "": "Van Leyden",
    "Composition": 8,
    "Drawing": 6,
    "Colour": 6,
    "Expression": 4,
    "School": "F"
  },
  {
    "": "Diepenbeck",
    "Composition": 11,
    "Drawing": 10,
    "Colour": 14,
    "Expression": 6,
    "School": "G"
  },
  {
    "": "J. Jordaens",
    "Composition": 10,
    "Drawing": 8,
    "Colour": 16,
    "Expression": 6,
    "School": "G"
  },
  {
    "": "Otho Venius",
    "Composition": 13,
    "Drawing": 14,
    "Colour": 10,
    "Expression": 10,
    "School": "G"
  },
  {
    "": "Rembrandt",
    "Composition": 15,
    "Drawing": 6,
    "Colour": 17,
    "Expression": 12,
    "School": "G"
  },
  {
    "": "Rubens",
    "Composition": 18,
    "Drawing": 13,
    "Colour": 17,
    "Expression": 17,
    "School": "G"
  },
  {
    "": "Teniers",
    "Composition": 15,
    "Drawing": 12,
    "Colour": 13,
    "Expression": 6,
    "School": "G"
  },
  {
    "": "Van Dyck",
    "Composition": 15,
    "Drawing": 10,
    "Colour": 17,
    "Expression": 13,
    "School": "G"
  },
  {
    "": "Bourdon",
    "Composition": 10,
    "Drawing": 8,
    "Colour": 8,
    "Expression": 4,
    "School": "H"
  },
  {
    "": "Le Brun",
    "Composition": 16,
    "Drawing": 16,
    "Colour": 8,
    "Expression": 16,
    "School": "H"
  },
  {
    "": "Le Suer",
    "Composition": 15,
    "Drawing": 15,
    "Colour": 4,
    "Expression": 15,
    "School": "H"
  },
  {
    "": "Poussin",
    "Composition": 15,
    "Drawing": 17,
    "Colour": 6,
    "Expression": 15,
    "School": "H"
  }
]

// NUFORC.ORG UFO Reports in AZ, from 2016 onwards
var ufos = [
  {
    "Date": "6/21/18 21:00",
    "City": "Chandler",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "90 minutes",
    "Summary": "Multiple fast solid white lights appearing at different times and locations in the sky.",
    "Posted": "6/28/18"
  },
  {
    "Date": "6/17/18 23:30",
    "City": "Anthem",
    "State": "AZ",
    "Shape": "Changing",
    "Duration": "10 minutes",
    "Summary": "Possibly related to phoenix lights.",
    "Posted": "6/21/18"
  },
  {
    "Date": "6/11/18 23:30",
    "City": "Gilbert",
    "State": "AZ",
    "Shape": "Flash",
    "Duration": "5 minutes",
    "Summary": "Two blinking tiny flashes, red, white, blue, green. Really far away to the NE when first seen. Lost one heading SW.((anonymous report))",
    "Posted": "6/15/18"
  },
  {
    "Date": "6/10/18 20:00",
    "City": "Mesa",
    "State": "AZ",
    "Shape": "Circle",
    "Duration": "30 minutes",
    "Summary": "Magenta-Violet Orb Moves Abnormally Through Eastern Mesa Sky. ((anonymous report))",
    "Posted": "6/15/18"
  },
  {
    "Date": "6/6/18 20:00",
    "City": "Scottsdale",
    "State": "AZ",
    "Shape": "Other",
    "Duration": "1:00 minute",
    "Summary": "Hovering and then fast moving object, Scottsdale, AZ.",
    "Posted": "6/7/18"
  },
  {
    "Date": "6/6/18 2:00",
    "City": "Mesa (Historic part)",
    "State": "AZ",
    "Shape": "Circle",
    "Duration": "1+ minute",
    "Summary": "Saw a perfect circle of red (only) lights blinking all blinked at same time, no other lights were seen.",
    "Posted": "6/7/18"
  },
  {
    "Date": "5/29/18 19:45",
    "City": "Mesa",
    "State": "AZ",
    "Shape": "Rectangle",
    "Duration": "5 minutes",
    "Summary": "Black Rectangular Flying Object Over Mesa, AZ. ((anonymous report))",
    "Posted": "5/31/18"
  },
  {
    "Date": "5/29/18 0:00",
    "City": "Phoenix",
    "State": "AZ",
    "Shape": "Circle",
    "Duration": "Few minutes",
    "Summary": "Two red lights like lasers hovering houses and zooming off to turn into am insanely bright light then fading ((anonymous report))",
    "Posted": "5/31/18"
  },
  {
    "Date": "5/17/18 21:00",
    "City": "Rio Rico",
    "State": "AZ",
    "Shape": "Disk",
    "Duration": "10-12 seconds",
    "Summary": "A huge band of slightly rectangular lights appx 300degrees NW sky appeared out of thin air and looked extremely CLOSE!",
    "Posted": "5/31/18"
  },
  {
    "Date": "5/16/18 20:57",
    "City": "Apache Junction",
    "State": "AZ",
    "Shape": "Other",
    "Duration": "2-3 minutes",
    "Summary": "Omg. I was just out back and towards Florence southeast of the valley I saw 3 distinct separate bright lights a distance from each ot",
    "Posted": "5/31/18"
  },
  {
    "Date": "5/8/18 23:00",
    "City": "Prescott",
    "State": "AZ",
    "Shape": "Fireball",
    "Duration": "5 seconds",
    "Summary": "Green yellow blue all of fire streaks across sky",
    "Posted": "5/10/18"
  },
  {
    "Date": "5/8/18 0:00",
    "City": "Apache Junction",
    "State": "AZ",
    "Shape": "Other",
    "Duration": "30 minutes",
    "Summary": "Green beam from 3-5 miles alerting us to its location 7 times, lasting 30 minutes.",
    "Posted": "5/10/18"
  },
  {
    "Date": "5/3/18 21:15",
    "City": "Bullhead City",
    "State": "AZ",
    "Shape": "Circle",
    "Duration": "15 minutes",
    "Summary": "Circle of lights seen two nights in a row.",
    "Posted": "5/4/18"
  },
  {
    "Date": "4/29/18 21:15",
    "City": "Benson",
    "State": "AZ",
    "Shape": "Rectangle",
    "Duration": "10mun",
    "Summary": "3 red lights blinking but they were far apart. At first we were not sure if they were moving.",
    "Posted": "5/4/18"
  },
  {
    "Date": "4/16/18 22:05",
    "City": "Glendale",
    "State": "AZ",
    "Shape": "Oval",
    "Duration": "45 seconds",
    "Summary": "Orange/red ball floating in the sky over Glendale, AZ.",
    "Posted": "4/19/18"
  },
  {
    "Date": "4/14/18 20:30",
    "City": "Scottsdale",
    "State": "AZ",
    "Shape": "Other",
    "Duration": "45 seconds",
    "Summary": "Object sighted, triangular shaped with curved magenta bottom. Lights moved sequentially from left to right bluish-white with magenta .",
    "Posted": "4/19/18"
  },
  {
    "Date": "4/13/18 20:30",
    "City": "Scottsdale",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "3 minutes",
    "Summary": "Bright light in sky, slowly increase elevation and then faded. Second night in a row.",
    "Posted": "4/19/18"
  },
  {
    "Date": "4/7/18 11:00",
    "City": "Florence/Apache Jct. (between)",
    "State": "AZ",
    "Shape": "Cigar",
    "Duration": "1 minute",
    "Summary": "Two grey objects disappeared suddently.",
    "Posted": "4/13/18"
  },
  {
    "Date": "4/6/18 0:20",
    "City": "Florence",
    "State": "AZ",
    "Shape": "Fireball",
    "Duration": "1-2 minutes",
    "Summary": "Orange ball of fire floating across the sky.",
    "Posted": "4/13/18"
  },
  {
    "Date": "4/3/18 20:30",
    "City": "Phoenix",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "2 minutes",
    "Summary": "I do not believe in UFO's, but this was definately odd. ((no contact information))",
    "Posted": "4/5/18"
  },
  {
    "Date": "4/2/18 5:38",
    "City": "Tucson",
    "State": "AZ",
    "Shape": "Light",
    "Duration": ">10 minutes (continuous)",
    "Summary": "Two points of light blinking, changing color, and moving very unusually.",
    "Posted": "4/13/18"
  },
  {
    "Date": "3/21/18",
    "City": "Ajo",
    "State": "AZ",
    "Shape": "Circle",
    "Duration": "~5 minutes",
    "Summary": "We saw orbs of light in Arizona, a few days before the CT sighting one was reported.",
    "Posted": "4/19/18"
  },
  {
    "Date": "3/15/18 23:00",
    "City": "Green Valley",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "6 seconds",
    "Summary": "Date is approximate, and viewed a similar event about two weeks before this one, but in different part of the sky.",
    "Posted": "7/13/18"
  },
  {
    "Date": "",
    "City": "",
    "State": "",
    "Shape": "",
    "Duration": "",
    "Summary": "",
    "Posted": ""
  },
  {
    "Date": "",
    "City": "",
    "State": "",
    "Shape": "",
    "Duration": "",
    "Summary": "I stepped out of",
    "Posted": ""
  },
  {
    "Date": "3/12/18 16:05",
    "City": "Arizona (above; in flight)",
    "State": "AZ",
    "Shape": "Cylinder",
    "Duration": "<10 seconds",
    "Summary": "Mysterious shaped form flying beside SWA flt 612 over Northern AZ @ 4:05 PM PDT - alttitude 35,000 - 40,000 ft",
    "Posted": "3/23/18"
  },
  {
    "Date": "3/8/18 18:50",
    "City": "Gold Canyon",
    "State": "AZ",
    "Shape": "Sphere",
    "Duration": "2-3 minutes",
    "Summary": "Glowing all-orange orb hovering over my subdivision",
    "Posted": "3/23/18"
  },
  {
    "Date": "2/25/18 16:00",
    "City": "Tombstone",
    "State": "AZ",
    "Shape": "Other",
    "Duration": "2+",
    "Summary": "Bat winged shaped ufo.",
    "Posted": "3/2/18"
  },
  {
    "Date": "2/24/18 15:30",
    "City": "In-flight; above AZ",
    "State": "AZ",
    "Shape": "",
    "Duration": "45 minutes",
    "Summary": "Three air crews observed object. Recordings on the internet. ((anonymous report))",
    "Posted": "4/19/18"
  },
  {
    "Date": "2/24/18 15:30",
    "City": "Southern",
    "State": "AZ",
    "Shape": "Unknown",
    "Duration": "",
    "Summary": "Three air crews encounter strange object. Audios located. ((NUFORC Note: MUFON CMS report. PD))",
    "Posted": "4/26/18"
  },
  {
    "Date": "2/20/18 11:30",
    "City": "Surprise",
    "State": "AZ",
    "Shape": "Sphere",
    "Duration": "5-10 minutes",
    "Summary": "15+ UFO's in formation. ((anonymous report))",
    "Posted": "2/22/18"
  },
  {
    "Date": "2/17/18 21:00",
    "City": "Thatcher",
    "State": "AZ",
    "Shape": "Fireball",
    "Duration": "10 minutes",
    "Summary": "3 Orangish fireball coming from north to south just above treeline hover a minute and take off to the east at a high rate of speed",
    "Posted": "2/22/18"
  },
  {
    "Date": "2/10/18 6:40",
    "City": "Mesa",
    "State": "AZ",
    "Shape": "Sphere",
    "Duration": "3 minutes",
    "Summary": "10+ red lights moving formation Mesa, AZ.",
    "Posted": "2/16/18"
  },
  {
    "Date": "2/9/18 19:25",
    "City": "Tucson",
    "State": "AZ",
    "Shape": "Fireball",
    "Duration": "30 seconds",
    "Summary": "Four orange fireballs traveling together , fly over the house",
    "Posted": "2/16/18"
  },
  {
    "Date": "2/7/18 0:00",
    "City": "Mesa",
    "State": "AZ",
    "Shape": "Circle",
    "Duration": "5 minutes",
    "Summary": "3 symmetrical bright orange orbs",
    "Posted": "2/16/18"
  },
  {
    "Date": "2/4/18 19:50",
    "City": "Chandler",
    "State": "AZ",
    "Shape": "Flash",
    "Duration": "4 minutes",
    "Summary": "Flashing multicolored object spotted above Chandler AZ apparently traveling outward into space in the high southern skies.",
    "Posted": "2/16/18"
  },
  {
    "Date": "2/1/18 18:35",
    "City": "Green Valley",
    "State": "AZ",
    "Shape": "Unknown",
    "Duration": "1 minute",
    "Summary": "Horizontal line of 7-9 Identially-Sized, Evenly Spaced, \"Signalling\" Lights.",
    "Posted": "2/16/18"
  },
  {
    "Date": "1/29/18 19:00",
    "City": "Queen Creek",
    "State": "AZ",
    "Shape": "Other",
    "Duration": "4 seconds",
    "Summary": "I couldn't tell if it was one object or several; but it's one of the most interesting things I've seen in the night sky.",
    "Posted": "2/16/18"
  },
  {
    "Date": "1/28/18 23:10",
    "City": "Phoenix",
    "State": "AZ",
    "Shape": "Fireball",
    "Duration": "2 minutes",
    "Summary": "The object was heading south towards central Phoenix. It was glowing bright red. And only four stores high in the air. When the object",
    "Posted": "2/16/18"
  },
  {
    "Date": "1/24/18 19:00",
    "City": "Tucson",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "2 hours",
    "Summary": "Was it Venus or a UFO? ((NUFORC Note: Possible sighting of Sirius?? PD))",
    "Posted": "1/25/18"
  },
  {
    "Date": "1/24/18 7:45",
    "City": "Mesa",
    "State": "AZ",
    "Shape": "Cigar",
    "Duration": "15 seconds",
    "Summary": "Line of sequencing lights in Arizona.",
    "Posted": "1/25/18"
  },
  {
    "Date": "1/4/18 23:55",
    "City": "Maricopa",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "10 minutes",
    "Summary": "Orange/yellow object east of Maricopa, AZ, traveling south toward Tucson, AZ.",
    "Posted": "1/12/18"
  },
  {
    "Date": "12/31/17 23:00",
    "City": "Mesa",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "10-20 minutes",
    "Summary": "orange orbs in formation",
    "Posted": "1/12/18"
  },
  {
    "Date": "12/31/17 0:00",
    "City": "Gilbert",
    "State": "AZ",
    "Shape": "Changing",
    "Duration": "25 minutes",
    "Summary": "As many as 7 Orbs seen ascending and descending, changing colors and flight paths for 30 minutes.",
    "Posted": "7/5/18"
  },
  {
    "Date": "12/30/17 21:05",
    "City": "Anthem",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "3 minutes",
    "Summary": "Red lights above north Phoenix, Arizona. ((anonymous report))",
    "Posted": "1/12/18"
  },
  {
    "Date": "12/29/17 13:00",
    "City": "Ganado",
    "State": "AZ",
    "Shape": "Cylinder",
    "Duration": "",
    "Summary": "Caught in photo of highway. Seemed plunging to earth. Contrail. Cylinder with four precise round appendages. ((anonymous report))",
    "Posted": "1/12/18"
  },
  {
    "Date": "12/25/17 18:15",
    "City": "Chandler",
    "State": "AZ",
    "Shape": "",
    "Duration": "",
    "Summary": "2 Solid round Orbs, one white/one red. Stopping/ starting, in the sky above me. Both orbs very clear, solid.",
    "Posted": "1/12/18"
  },
  {
    "Date": "12/23/17 6:30",
    "City": "Show Low",
    "State": "AZ",
    "Shape": "Cone",
    "Duration": "10 minutes",
    "Summary": "Big bright dot w/ a huge multi-colored tail which fanned out in the back; huge cloud. ((NUFORC Note: Missile launch. PD))",
    "Posted": "1/12/18"
  },
  {
    "Date": "12/22/17 19:00",
    "City": "Green Valley",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "10 minutes",
    "Summary": "Huge brilliant blue'ish white light over the desert, west of Green Valley AZ., ((NUFORC Note: Missile launch. PD))",
    "Posted": "1/12/18"
  },
  {
    "Date": "12/22/17 18:55",
    "City": "Mesa",
    "State": "AZ",
    "Shape": "Cigar",
    "Duration": "2 minutes",
    "Summary": "Fast moving glowing object with glowing gas plume remaining for several minutes flew over Phoenix after sundown heading north to south.",
    "Posted": "1/12/18"
  },
  {
    "Date": "12/22/17 18:52",
    "City": "Mesa",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "0:30",
    "Summary": "A light in the sky that emitted whitish beam with a tint. ((NUFORC Note: Rocket launch at 5:27 p.m. (Pacific). PD))",
    "Posted": "1/12/18"
  },
  {
    "Date": "12/22/17 18:45",
    "City": "Tucson",
    "State": "AZ",
    "Shape": "Cigar",
    "Duration": "2 minutes",
    "Summary": "Around 6:45 PM, I witnessed a cigar shaped object that had no noise and illuminated the sky so bright. ((anonymous report))((Missile.))",
    "Posted": "1/12/18"
  },
  {
    "Date": "12/22/17 18:45",
    "City": "Tonopah",
    "State": "AZ",
    "Shape": "Fireball",
    "Duration": "8 minutes",
    "Summary": "Approx. 1845 hours in the W sky something appeared to be traveling from the W to the E making a 90-degree turn.",
    "Posted": "1/12/18"
  },
  {
    "Date": "12/22/17 18:45",
    "City": "Phoenix",
    "State": "AZ",
    "Shape": "Cone",
    "Duration": "10 minutes",
    "Summary": "1 craft was slowly crashing while another shined a giant spotlight on it. ((NUFORC Note: Missile launch at 5:26 p.m.. PD))",
    "Posted": "1/12/18"
  },
  {
    "Date": "12/22/17 18:40",
    "City": "Mesa",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "30 seconds",
    "Summary": "Bright light with trailing aura moving across the sky.",
    "Posted": "1/12/18"
  },
  {
    "Date": "12/22/17 18:40",
    "City": "Marana",
    "State": "AZ",
    "Shape": "Fireball",
    "Duration": "1 minute",
    "Summary": "Bright white light with large tail, like photos of a comet, moving NE to SW. ((NUFORC Note: Sighting of missile launch?? PD))",
    "Posted": "1/12/18"
  },
  {
    "Date": "12/22/17 18:40",
    "City": "Dragoon",
    "State": "AZ",
    "Shape": "Other",
    "Duration": "3 minutes",
    "Summary": "Low flying object on a straight southern trajectory with a heavy glowing trail. ((NUFORC Note: Sighting of missile launch?? PD))",
    "Posted": "1/12/18"
  },
  {
    "Date": "12/22/17 18:30",
    "City": "Snowflake",
    "State": "AZ",
    "Shape": "Other",
    "Duration": "5 minutes",
    "Summary": "A squiggly cloud and a bright light that lit up the sky and the light started moving backwards. ((NUFORC Note: Missile launch. PD))",
    "Posted": "1/12/18"
  },
  {
    "Date": "12/22/17 18:30",
    "City": "Lake Havasu City",
    "State": "AZ",
    "Shape": "Cone",
    "Duration": "5 minutes",
    "Summary": "((NUFORC Note: No information provided by source. Possible report of missile launch. PD))",
    "Posted": "1/12/18"
  },
  {
    "Date": "12/22/17 18:28",
    "City": "Village of Oak Creek",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "4 minutes",
    "Summary": "Two large lights shine in the sky over the mountains of Sedona, AZ. ((NUFORC Note: Sighting of missile launch?? PD))",
    "Posted": "1/12/18"
  },
  {
    "Date": "12/22/17 16:00",
    "City": "Duncan",
    "State": "AZ",
    "Shape": "Cylinder",
    "Duration": "3 minutes",
    "Summary": "We saw a missle shaped object in the sky, huge. ((NUFORC Note: Missile launch from Vandenberg AFB. PD))",
    "Posted": "1/12/18"
  },
  {
    "Date": "12/21/17 7:44",
    "City": "Anthem",
    "State": "AZ",
    "Shape": "Disk",
    "Duration": "1 second",
    "Summary": "Strange object or bird? Not sure.",
    "Posted": "1/12/18"
  },
  {
    "Date": "12/21/17 6:30",
    "City": "PHONEX",
    "State": "AZ",
    "Shape": "Circle",
    "Duration": "10 minutes",
    "Summary": "It was circular and white with a huge fanned out tail of bright, bright white. ((NUFORC Note: Missile launch. PD))",
    "Posted": "1/12/18"
  },
  {
    "Date": "12/18/17 20:00",
    "City": "Queen Creek",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "15 minutes",
    "Summary": "River of lights in the sky above Queen Creek",
    "Posted": "12/21/17"
  },
  {
    "Date": "12/18/17 20:00",
    "City": "Queen Creek",
    "State": "AZ",
    "Shape": "Formation",
    "Duration": "30 minutes",
    "Summary": "Snake like formation with hundreds of lights sighted above Queen Creek, AZ at 8pm on 12/18/17.",
    "Posted": "12/21/17"
  },
  {
    "Date": "12/18/17 19:45",
    "City": "Queen Creek",
    "State": "AZ",
    "Shape": "Other",
    "Duration": "20 minutes",
    "Summary": "1000 star lights following blue lights moving like a snake.going in circles then moved out of sight by the big dipper.was about 3-4 mai",
    "Posted": "12/21/17"
  },
  {
    "Date": "12/14/17 20:00",
    "City": "Sonora Desert",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "15 minutes",
    "Summary": "We were driving on highway 8 South. 4 lights became two pairs then not light. Then disappeared",
    "Posted": "12/21/17"
  },
  {
    "Date": "12/11/17 19:30",
    "City": "San Tan Valley",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "35 seconds",
    "Summary": "Possible UFO. ((anonymous report)",
    "Posted": "12/14/17"
  },
  {
    "Date": "12/11/17 19:05",
    "City": "Gold Canyon",
    "State": "AZ",
    "Shape": "Egg",
    "Duration": "10 seconds",
    "Summary": "Two large, orange bright football/egg shaped objects with windows low in sky",
    "Posted": "1/12/18"
  },
  {
    "Date": "12/11/17 18:00",
    "City": "Queen Creek/South Gilbert",
    "State": "AZ",
    "Shape": "Circle",
    "Duration": "15 minutes",
    "Summary": "Saw orange reddish orbs moving from Queen Creek west towards south Gilbert. Very bright in the sky.",
    "Posted": "12/14/17"
  },
  {
    "Date": "11/26/17 18:15",
    "City": "Phoenix",
    "State": "AZ",
    "Shape": "Oval",
    "Duration": "90 seconds",
    "Summary": "Slow moving oval object 2x size and brightness of the ISS came up from the S. ((NUFORC Note: ISS?? PD))",
    "Posted": "12/4/17"
  },
  {
    "Date": "11/26/17 16:35",
    "City": "Phoenix",
    "State": "AZ",
    "Shape": "Changing",
    "Duration": "5 minutes",
    "Summary": "Red/orange object in daytime sky.",
    "Posted": "12/4/17"
  },
  {
    "Date": "11/25/17 20:48",
    "City": "Phoenix",
    "State": "AZ",
    "Shape": "Sphere",
    "Duration": "Continuous",
    "Summary": "Sparkling Spheres in the eastern Arizona night, tonight !",
    "Posted": "12/4/17"
  },
  {
    "Date": "11/24/17 4:00",
    "City": "Scottsdale",
    "State": "AZ",
    "Shape": "Teardrop",
    "Duration": "2 minutes",
    "Summary": "Me and my mother were looking outside at the night sky. After a few moments we saw a plane off in the distance. Then at least 20 minute",
    "Posted": "12/4/17"
  },
  {
    "Date": "11/17/17 20:00",
    "City": "North Phoenix",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "10 minutes",
    "Summary": "Orange ball flame colored craft. Flying W, paused as a/c approached from the N than disappeared.",
    "Posted": "11/22/17"
  },
  {
    "Date": "11/16/17 20:30",
    "City": "Maricopa",
    "State": "AZ",
    "Shape": "Circle",
    "Duration": "<5 seconds",
    "Summary": "I am glad, I stumbled upon this website. I am witnessing the same glowing fireballs as others are seeing in AZ.",
    "Posted": "11/17/17"
  },
  {
    "Date": "",
    "City": "",
    "State": "",
    "Shape": "",
    "Duration": "",
    "Summary": "",
    "Posted": ""
  },
  {
    "Date": "",
    "City": "",
    "State": "",
    "Shape": "",
    "Duration": "",
    "Summary": "Tonight is the 3rd",
    "Posted": ""
  },
  {
    "Date": "11/15/17 21:00",
    "City": "Dewey",
    "State": "AZ",
    "Shape": "Chevron",
    "Duration": "10 seconds",
    "Summary": "They were Chevron shaped. The lights varying from orange, to red to white. Incredible! ((NUFORC Note: Witness is engineer. PD))",
    "Posted": "11/17/17"
  },
  {
    "Date": "11/15/17 21:00",
    "City": "Chandler",
    "State": "AZ",
    "Shape": "Formation",
    "Duration": "1-2 minutes",
    "Summary": "Synchronous blinkings silvery lights in a formation across entire SW sky above South Mountain. ((NUFORC Note: Meteor? PD))",
    "Posted": "11/17/17"
  },
  {
    "Date": "11/14/17 22:30",
    "City": "Tucson",
    "State": "AZ",
    "Shape": "Fireball",
    "Duration": "10 seconds",
    "Summary": "Large falling UFO disappears into flash of blue light over Tucson.",
    "Posted": "11/17/17"
  },
  {
    "Date": "11/14/17 20:25",
    "City": "San Tan Valley",
    "State": "AZ",
    "Shape": "Flash",
    "Duration": "3 seconds",
    "Summary": "Bright Light up of Sky. ((NUFORC Note: Possible meteor?? PD))",
    "Posted": "11/17/17"
  },
  {
    "Date": "11/12/17 10:00",
    "City": "Chino Valley",
    "State": "AZ",
    "Shape": "Rectangle",
    "Duration": "5 minutes",
    "Summary": "Stationary vertical bluish white rectangle.",
    "Posted": "11/17/17"
  },
  {
    "Date": "11/11/17 13:26",
    "City": "Tucson",
    "State": "AZ",
    "Shape": "Circle",
    "Duration": "",
    "Summary": "Bright object(s) traveling over Foothills from Sabino Canyon , Az.",
    "Posted": "11/17/17"
  },
  {
    "Date": "11/8/17 2:45",
    "City": "Phoenix",
    "State": "AZ",
    "Shape": "Fireball",
    "Duration": "1 second",
    "Summary": "Saw what it looked like a shooting star, but it was red.",
    "Posted": "11/9/17"
  },
  {
    "Date": "11/5/17 19:00",
    "City": "Gilbert",
    "State": "AZ",
    "Shape": "Formation",
    "Duration": "2 minutes",
    "Summary": "Clusters of yellow lights flying across the sky.",
    "Posted": "11/9/17"
  },
  {
    "Date": "11/5/17 18:15",
    "City": "Snowflake (toward; near)",
    "State": "AZ",
    "Shape": "Disk",
    "Duration": "5-8 minutes",
    "Summary": "On the Sunday evening of November 5th, 2017 around 6:15 p.m., there were 2 flying saucers in the western sky looking toward Snowflake,",
    "Posted": "11/22/17"
  },
  {
    "Date": "11/4/17 21:20",
    "City": "Glendale",
    "State": "AZ",
    "Shape": "Formation",
    "Duration": "40 seconds",
    "Summary": "White lights in a formation traveling slowly/silently over NW Glendale, AZ, then disappeared after sighting. ((anonymous report))",
    "Posted": "11/9/17"
  },
  {
    "Date": "11/3/17 20:00",
    "City": "Bullhead City",
    "State": "AZ",
    "Shape": "Circle",
    "Duration": "30 seconds",
    "Summary": "I had seen a black object is all i know . with no lights and no noticible sound. ((anonymous report))",
    "Posted": "11/17/17"
  },
  {
    "Date": "10/29/17 19:00",
    "City": "Fountain Hills",
    "State": "AZ",
    "Shape": "Oval",
    "Duration": "15 minutes",
    "Summary": "Craft are dark perhaps black with no visable lights and move from spot to spot very quickly. ((anonymous report))",
    "Posted": "11/3/17"
  },
  {
    "Date": "10/17/17 21:30",
    "City": "Tempe",
    "State": "AZ",
    "Shape": "Circle",
    "Duration": "1 minutes",
    "Summary": "Orange/yellow orb near Sky Harbor. ((anonymous report))",
    "Posted": "11/3/17"
  },
  {
    "Date": "10/7/17 20:15",
    "City": "Chandler",
    "State": "AZ",
    "Shape": "Triangle",
    "Duration": "5 minutes",
    "Summary": "We saw 2 lights that seemed to be a helicopter but we didn't hear any noise. There was no flashing wing or tail light. Just an orangish",
    "Posted": "10/19/17"
  },
  {
    "Date": "10/6/17 19:00",
    "City": "Yuma",
    "State": "AZ",
    "Shape": "Cylinder",
    "Duration": "4 hours",
    "Summary": "Skeptical to say that America We have Air Space Friends !!!",
    "Posted": "10/19/17"
  },
  {
    "Date": "10/5/17 19:40",
    "City": "Lake Havasu City",
    "State": "AZ",
    "Shape": "Unknown",
    "Duration": "5 seconds",
    "Summary": "Trail of lights where glowing and blinking in patterns of 1 second.",
    "Posted": "10/19/17"
  },
  {
    "Date": "10/3/17 17:00",
    "City": "Page",
    "State": "AZ",
    "Shape": "Teardrop",
    "Duration": "1 hour",
    "Summary": "Bright white teardrop shaped object that emitted red orbs which landed and eventually rose again.",
    "Posted": "10/19/17"
  },
  {
    "Date": "10/1/17 19:00",
    "City": "Tucson",
    "State": "AZ",
    "Shape": "Teardrop",
    "Duration": "Hour",
    "Summary": "A white object in the NE sky from Tucson with a few white and black objects flashing around the stationary object.",
    "Posted": "10/5/17"
  },
  {
    "Date": "9/29/17 19:00",
    "City": "Sahuarita",
    "State": "AZ",
    "Shape": "Flash",
    "Duration": "30 seconds",
    "Summary": "Random white flashes of light of differing intensity in the same small area of sky",
    "Posted": "10/5/17"
  },
  {
    "Date": "9/27/17 23:00",
    "City": "Green Valley",
    "State": "AZ",
    "Shape": "Other",
    "Duration": ">10 minutes",
    "Summary": "Object was triangular shaped with rounded edges instead of points.",
    "Posted": "10/5/17"
  },
  {
    "Date": "9/26/17 23:10",
    "City": "Wellton",
    "State": "AZ",
    "Shape": "Circle",
    "Duration": "1 minute",
    "Summary": "Orange orb with huge waves of air below and above it.",
    "Posted": "9/28/17"
  },
  {
    "Date": "9/24/17 18:14",
    "City": "Phoenix",
    "State": "AZ",
    "Shape": "Unknown",
    "Duration": "1 second",
    "Summary": "Sunset object.",
    "Posted": "9/28/17"
  },
  {
    "Date": "9/21/17 5:15",
    "City": "Mesa",
    "State": "AZ",
    "Shape": "Changing",
    "Duration": "2 miniutes",
    "Summary": "Is that a star?",
    "Posted": "10/5/17"
  },
  {
    "Date": "9/20/17 21:00",
    "City": "Sahuarita",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "3 minutes",
    "Summary": "Light flashes in a small dark patch of sky just to the right of the Milky Way.",
    "Posted": "9/21/17"
  },
  {
    "Date": "9/20/17 20:30",
    "City": "San Tan Valley",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "1 minute",
    "Summary": "I glanced to the East over the Tonto Natl forest and saw 2 orange orbs fairly close together. After a very short time they turned off A",
    "Posted": "9/21/17"
  },
  {
    "Date": "9/20/17 3:30",
    "City": "Chandler",
    "State": "AZ",
    "Shape": "Teardrop",
    "Duration": "1 hour",
    "Summary": "Intermittent pulsing, green, stationary, then moved an hour later. ((NUFORC Note: Star or planet, we suspect. PD))",
    "Posted": "9/21/17"
  },
  {
    "Date": "9/17/17 20:30",
    "City": "South Lake Havasu City",
    "State": "AZ",
    "Shape": "Circle",
    "Duration": "S.w",
    "Summary": "This had red yellow green blue orang lights blanking.",
    "Posted": "9/21/17"
  },
  {
    "Date": "",
    "City": "",
    "State": "",
    "Shape": "",
    "Duration": "",
    "Summary": "",
    "Posted": ""
  },
  {
    "Date": "",
    "City": "",
    "State": "",
    "Shape": "",
    "Duration": "",
    "Summary": "Faceing southern California.",
    "Posted": ""
  },
  {
    "Date": "9/14/17 23:00",
    "City": "Phoenix",
    "State": "AZ",
    "Shape": "Chevron",
    "Duration": "5 seconds",
    "Summary": "Nighttime observation of chevron shaped object with light on the bottom traveling at a high rate of speed. ((anonymous report))",
    "Posted": "9/21/17"
  },
  {
    "Date": "8/30/17 21:30",
    "City": "Sells",
    "State": "AZ",
    "Shape": "Sphere",
    "Duration": "5 minutes",
    "Summary": "Large craft follows us. ((anonymous report))",
    "Posted": "9/5/17"
  },
  {
    "Date": "8/30/17 20:15",
    "City": "Miami",
    "State": "AZ",
    "Shape": "Circle",
    "Duration": "1 minute",
    "Summary": "I saw 3 orbs of light that had emitted themselves from one another then disappear.",
    "Posted": "9/5/17"
  },
  {
    "Date": "8/30/17 20:05",
    "City": "San tan valley",
    "State": "AZ",
    "Shape": "Egg",
    "Duration": "3 minutes",
    "Summary": "3 oval orange orbs flashed lights on than off before dissappearing.",
    "Posted": "9/5/17"
  },
  {
    "Date": "8/30/17",
    "City": "Superior",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "30 seconds",
    "Summary": "Three stationary lights seen in sky south of Superior",
    "Posted": "11/3/17"
  },
  {
    "Date": "8/29/17 15:00",
    "City": "Tucson (Pima Co.)(copper mine S of )",
    "State": "AZ",
    "Shape": "Disk",
    "Duration": "20 seconds",
    "Summary": "Disk over open-pit copper mine in southern Arizona. ((anonymous report))",
    "Posted": "9/5/17"
  },
  {
    "Date": "8/27/17 22:00",
    "City": "Phoenix",
    "State": "AZ",
    "Shape": "Unknown",
    "Duration": "5 minutes",
    "Summary": "Possible sighting or drones.",
    "Posted": "9/5/17"
  },
  {
    "Date": "8/24/17 12:00",
    "City": "Phoenix",
    "State": "AZ",
    "Shape": "Teardrop",
    "Duration": "",
    "Summary": "The object appears to have a tear/cone shape. It is blue but the sky way a lighter shade. ((anonymous report))",
    "Posted": "9/5/17"
  },
  {
    "Date": "8/22/17 4:00",
    "City": "Buckeye",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "2 hours",
    "Summary": "((HOAX??)) Looked like bright star. It moved slowly. ((anonymous report))",
    "Posted": "8/24/17"
  },
  {
    "Date": "8/21/17 2:30",
    "City": "Dateland",
    "State": "AZ",
    "Shape": "Cone",
    "Duration": "15-20 minutes",
    "Summary": "Flashes of light cone object darting around the desert joined by multiple other objects.",
    "Posted": "8/24/17"
  },
  {
    "Date": "8/20/17 12:00",
    "City": "Winslow",
    "State": "AZ",
    "Shape": "Changing",
    "Duration": 45,
    "Summary": "I captured this on video during solar eclipse. ((anonymous report))",
    "Posted": "8/10/18"
  },
  {
    "Date": "8/19/17 23:00",
    "City": "Sedona",
    "State": "AZ",
    "Shape": "Cone",
    "Duration": "5-7 minutes",
    "Summary": "Large golden, cone-shaped light, gliding over West Sedona. ((anonymous report))",
    "Posted": "8/24/17"
  },
  {
    "Date": "8/18/17 21:40",
    "City": "Glendale",
    "State": "AZ",
    "Shape": "Flash",
    "Duration": "5 minutes",
    "Summary": "Intermittent flashing light. 3 flashes in one spot, 4th flash was brighter than brightest star in the night sky. Flashed fainter flashe",
    "Posted": "8/24/17"
  },
  {
    "Date": "8/18/17 9:45",
    "City": "Mesa",
    "State": "AZ",
    "Shape": "Other",
    "Duration": "10 minutes",
    "Summary": "Several aircraft in Mesa, AZ, seen on 8/18/17. ((anonymous report))",
    "Posted": "8/24/17"
  },
  {
    "Date": "8/14/17 0:20",
    "City": "Phoenix",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "4 minutes",
    "Summary": "Stationary bright light.",
    "Posted": "8/17/17"
  },
  {
    "Date": "8/12/17 9:30",
    "City": "Tucson",
    "State": "AZ",
    "Shape": "Unknown",
    "Duration": "3 minutes",
    "Summary": "Strange lights in a octagon formation.",
    "Posted": "8/17/17"
  },
  {
    "Date": "8/10/17 14:30",
    "City": "Scottsdale",
    "State": "AZ",
    "Shape": "Disk",
    "Duration": "2 minutes",
    "Summary": "Dark & Light Circular Objects Raced Across the Sky.",
    "Posted": "8/11/17"
  },
  {
    "Date": "8/4/17 21:15",
    "City": "Phoenix",
    "State": "AZ",
    "Shape": "Flash",
    "Duration": "5 minutes",
    "Summary": "Streak of light ending with 3 objects flashing intermittently moving in the opposite direction for 5 minutes.",
    "Posted": "8/11/17"
  },
  {
    "Date": "7/27/17 20:38",
    "City": "Buckeye",
    "State": "AZ",
    "Shape": "Other",
    "Duration": "10 minutes",
    "Summary": "4 objects inline headed N; objects had one greyish/blue light on each of them moving faster than your average aircraft or jet th",
    "Posted": "8/4/17"
  },
  {
    "Date": "7/27/17 2:00",
    "City": "Sahuarita",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "5 minutes",
    "Summary": "Slow moving high-alt. light moving W to E would blink at random intervals about 1 second apart. ((NUFORC Note: Tumbling booster? PD))",
    "Posted": "8/4/17"
  },
  {
    "Date": "7/26/17 4:20",
    "City": "Phoenix",
    "State": "AZ",
    "Shape": "Fireball",
    "Duration": "5 minutes",
    "Summary": "I looked to see a beautiful bright Venus in E sky. I then noticed a &quot;Bright, Orange, Light.",
    "Posted": "7/27/17"
  },
  {
    "Date": "7/16/17 23:00",
    "City": "Chandler",
    "State": "AZ",
    "Shape": "Sphere",
    "Duration": "2 minutes",
    "Summary": "((NUFORC Note: Witness provides no information about sighting. PD))",
    "Posted": "7/23/17"
  },
  {
    "Date": "7/14/17 4:00",
    "City": "Chandler",
    "State": "AZ",
    "Shape": "Other",
    "Duration": "5 minutes",
    "Summary": "Strange three light object seen swooping over a field in Chandler, AZ.",
    "Posted": "7/14/17"
  },
  {
    "Date": "7/12/17 19:05",
    "City": "Glendale",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "1 minute",
    "Summary": "Bright star like light (during daytime), fades while moving and disappears.",
    "Posted": "7/14/17"
  },
  {
    "Date": "7/6/17 21:25",
    "City": "Phoenix",
    "State": "AZ",
    "Shape": "Oval",
    "Duration": "9:25 PM",
    "Summary": "First One BIG oval disc 2 bright lights one red. The other was smaller and moving very fast. We saw it shoot light from the craft.. It",
    "Posted": "7/7/17"
  },
  {
    "Date": "7/6/17 7:55",
    "City": "Tempe",
    "State": "AZ",
    "Shape": "Flash",
    "Duration": "2 seconds",
    "Summary": "Recurring white flashes. ((anonymous report))",
    "Posted": "7/7/17"
  },
  {
    "Date": "7/6/17 4:30",
    "City": "Kingman",
    "State": "AZ",
    "Shape": "Fireball",
    "Duration": "8-10 minutes",
    "Summary": "Recurring quick, bright flashing object from 07/04/17 being pursued by another object in Kingman, AZ",
    "Posted": "7/14/17"
  },
  {
    "Date": "7/4/17 4:28",
    "City": "Kingman",
    "State": "AZ",
    "Shape": "Flash",
    "Duration": "5 minutes",
    "Summary": "07/04/17 @ 04:28 hr Kingman, AZ. Bright, quick flashing light every 5-15 seconds in constellation Andromeda.",
    "Posted": "7/14/17"
  },
  {
    "Date": "7/1/17 21:35",
    "City": "Cave Creek",
    "State": "AZ",
    "Shape": "Formation",
    "Duration": "1-2 minutes",
    "Summary": "Group of 20+ star like objects in a constellation formation then hovering around each other then breaking formation and moving eastward",
    "Posted": "7/7/17"
  },
  {
    "Date": "6/27/17 23:45",
    "City": "Casa Grande",
    "State": "AZ",
    "Shape": "Diamond",
    "Duration": "30 minutes",
    "Summary": "Odd stationary orange glowing objects over the Sonoran desert",
    "Posted": "7/7/17"
  },
  {
    "Date": "6/27/17 21:57",
    "City": "Leupp",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "15 seconds",
    "Summary": "3 connected lights were in the sky and vanished before my very eyes.",
    "Posted": "7/7/17"
  },
  {
    "Date": "6/22/17 20:45",
    "City": "Desert Hills",
    "State": "AZ",
    "Shape": "Fireball",
    "Duration": 20,
    "Summary": "Objects were in V shaped about 2 miles long with Military jets chasing it. Went Southwest to northeast east towards cave Creek. Also go",
    "Posted": "7/7/17"
  },
  {
    "Date": "6/16/17 21:00",
    "City": "Mesa",
    "State": "AZ",
    "Shape": "Sphere",
    "Duration": "3 minutes",
    "Summary": "Low altitude balls over Mesa, AZ, appearing, then disappearing after a short flight in tandem.",
    "Posted": "6/22/17"
  },
  {
    "Date": "6/15/17 23:00",
    "City": "Phoenix",
    "State": "AZ",
    "Shape": "Triangle",
    "Duration": "3-5 seconds",
    "Summary": "Huge triangle shape object travelling slowly in outer space over the skies of Phoenix, AZ.",
    "Posted": "7/7/17"
  },
  {
    "Date": "6/15/17 21:55",
    "City": "Paulden",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "10 minutes",
    "Summary": "8-10 white lights moving slowly in formation near Prescott Valley, AZ, viewed from Paulden, AZ.",
    "Posted": "6/22/17"
  },
  {
    "Date": "6/15/17 15:35",
    "City": "Phoenix",
    "State": "AZ",
    "Shape": "Other",
    "Duration": "3 minutes",
    "Summary": "Ok today I was driving down the I-10 freeway traveling eastbound and as I passed 43rd Ave. I saw a large airliner plane. It caught my a",
    "Posted": "6/22/17"
  },
  {
    "Date": "6/12/17 21:50",
    "City": "Buckeye",
    "State": "AZ",
    "Shape": "Other",
    "Duration": "3 minutes",
    "Summary": "4 UFOs Buckeye, AZ, on 6/12/2017 @ 21:50. ((NUFORC Note: Advertising lights?? PD))",
    "Posted": "6/15/17"
  },
  {
    "Date": "6/12/17 21:30",
    "City": "Yuma",
    "State": "AZ",
    "Shape": "Circle",
    "Duration": "15 seconds",
    "Summary": "2 crafts sighted, as they flew overhead.",
    "Posted": "6/15/17"
  },
  {
    "Date": "6/12/17 3:45",
    "City": "Fortuna",
    "State": "AZ",
    "Shape": "Unknown",
    "Duration": "60 minutes",
    "Summary": "Stopped to assist several entities. ((anonymous report))",
    "Posted": "6/15/17"
  },
  {
    "Date": "6/11/17 22:30",
    "City": "Cave Creek",
    "State": "AZ",
    "Shape": "Disk",
    "Duration": "10 minutes",
    "Summary": "1 saucer shape obj. with three bright lights. It hovered very still, no sound then split into 3 separate lights. ((anonymous report))",
    "Posted": "6/15/17"
  },
  {
    "Date": "6/8/17 22:00",
    "City": "Prescott Valley",
    "State": "AZ",
    "Shape": "Formation",
    "Duration": "20 minutes",
    "Summary": "Formation of 6-10 lights flying Prescott Valley, AZ then suddenly dispersed and went separate ways.",
    "Posted": "6/9/17"
  },
  {
    "Date": "6/8/17 21:45",
    "City": "Paulden",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "15 minutes",
    "Summary": "7 white lights South of Paulden, AZ. On 6/8/17 at 9:45 pm, that lasted until 10 pm.",
    "Posted": "6/9/17"
  },
  {
    "Date": "6/8/17 21:45",
    "City": "Welton",
    "State": "AZ",
    "Shape": "Chevron",
    "Duration": "3 seconds",
    "Summary": "V-shaped yellow lights in the southern sky south of Welton, AZ on Thursday June 8, 2017 at 9:45pm.",
    "Posted": "6/15/17"
  },
  {
    "Date": "6/7/17 8:20",
    "City": "Phoenix",
    "State": "AZ",
    "Shape": "Other",
    "Duration": "40 seconds",
    "Summary": "Daylight object in close proximity to Sky Harbor Airport",
    "Posted": "6/22/17"
  },
  {
    "Date": "6/5/17 20:00",
    "City": "Tucson",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "2 minutes",
    "Summary": "Red lights over the Eastern Tucson sky.",
    "Posted": "6/9/17"
  },
  {
    "Date": "6/5/17",
    "City": "Cave Creek",
    "State": "AZ",
    "Shape": "Circle",
    "Duration": "30 minutes",
    "Summary": "Large round, lighted disc hovering silently, then moves out of sight at a very high rate of speed, as I took video of this occurrence.",
    "Posted": "6/9/17"
  },
  {
    "Date": "6/3/17 23:30",
    "City": "Benson",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "Not sure",
    "Summary": "Driving on Hwy 90 thru Benson a bright star like light in E sky. looked like it was hovering or bobbing moving S. ((anonymous report))",
    "Posted": "6/9/17"
  },
  {
    "Date": "6/2/17 21:15",
    "City": "Lake Havasu City",
    "State": "AZ",
    "Shape": "Egg",
    "Duration": "90 seconds",
    "Summary": "Bright red, egg-shaped object was seen flying overhead headed NE. No sound could be heard coming from the craft.",
    "Posted": "6/9/17"
  },
  {
    "Date": "5/30/17 21:15",
    "City": "Gila Bend",
    "State": "AZ",
    "Shape": "Other",
    "Duration": "15 minutes",
    "Summary": "Flashing lights south of Interstate 8, Maricopa, AZ, area.",
    "Posted": "6/2/17"
  },
  {
    "Date": "5/29/17 21:00",
    "City": "Phoenix",
    "State": "AZ",
    "Shape": "Oval",
    "Duration": "7 minutes",
    "Summary": "Orange color shade object hovering in night sky",
    "Posted": "6/2/17"
  },
  {
    "Date": "5/28/17 20:00",
    "City": "El Mirage",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "12 minutes",
    "Summary": "Dozen or more strange lights flying by in the sky above western Arizona.",
    "Posted": "6/2/17"
  },
  {
    "Date": "5/27/17 20:00",
    "City": "Sierra Vista",
    "State": "AZ",
    "Shape": "Circle",
    "Duration": "2-3 hours",
    "Summary": "3-5 craft with white and red lights flying erratic patterns over sierra vista / tombstone area",
    "Posted": "6/2/17"
  },
  {
    "Date": "5/23/17 19:30",
    "City": "Globe",
    "State": "AZ",
    "Shape": "Unknown",
    "Duration": "30 minutes +",
    "Summary": "Srange light appeared over San Carlos May 23",
    "Posted": "6/2/17"
  },
  {
    "Date": "5/19/17 13:38",
    "City": "Phoenix",
    "State": "AZ",
    "Shape": "Sphere",
    "Duration": "2 hours",
    "Summary": "UFO sighting over Phoenix.",
    "Posted": "6/21/18"
  },
  {
    "Date": "5/19/17 10:49",
    "City": "Superior",
    "State": "AZ",
    "Shape": "Circle",
    "Duration": "10 seconds",
    "Summary": "I am former recon in the military. I was observing the sky and caught it on video. I'm huge skeptic. ((anonymous report))",
    "Posted": "6/2/17"
  },
  {
    "Date": "5/17/17 21:30",
    "City": "Tucson",
    "State": "AZ",
    "Shape": "Circle",
    "Duration": "6 seconds",
    "Summary": "It was around 9:30 pm when we seen 7 bright orange lights come together in a circle formation then disappear,it looked like 7 orange li",
    "Posted": "6/2/17"
  },
  {
    "Date": "5/16/17 18:45",
    "City": "San Tan Valley",
    "State": "AZ",
    "Shape": "Changing",
    "Duration": "10 minutes",
    "Summary": "Streaks of light ahead of red object.",
    "Posted": "5/31/18"
  },
  {
    "Date": "5/14/17 4:00",
    "City": "Tucson",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "20 minutes",
    "Summary": "Noticed a VERY bright light, in the east sky, even brighter than the moon. ((anonymous report))",
    "Posted": "5/15/17"
  },
  {
    "Date": "",
    "City": "",
    "State": "",
    "Shape": "",
    "Duration": "",
    "Summary": "",
    "Posted": ""
  },
  {
    "Date": "",
    "City": "",
    "State": "",
    "Shape": "",
    "Duration": "",
    "Summary": "It see",
    "Posted": ""
  },
  {
    "Date": "5/13/17 3:45",
    "City": "Tucson/Sierra Vista (Interstate 10)",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "continuous",
    "Summary": "Star like light in sky. ((NUFORC Note: Probably Venus, we suspect. PD))",
    "Posted": "6/2/17"
  },
  {
    "Date": "5/12/17 20:30",
    "City": "Mesa",
    "State": "AZ",
    "Shape": "Other",
    "Duration": "5 minutes",
    "Summary": "Arch shaped, red/orange color. ((anonymous report))",
    "Posted": "5/15/17"
  },
  {
    "Date": "5/12/17 20:05",
    "City": "Surprise",
    "State": "AZ",
    "Shape": "Fireball",
    "Duration": "7 seconds",
    "Summary": "Red ball in sky.",
    "Posted": "5/15/17"
  },
  {
    "Date": "5/11/17 22:00",
    "City": "Apache Junction",
    "State": "AZ",
    "Shape": "Changing",
    "Duration": "15 minutes",
    "Summary": "I saw three elongated oval lights in my peripheral vision. I quickly pulled off the dark highway and turned off my headlights. I watche",
    "Posted": "5/15/17"
  },
  {
    "Date": "5/10/17 21:00",
    "City": "Tempe",
    "State": "AZ",
    "Shape": "Circle",
    "Duration": "5 minutes",
    "Summary": "Rose pinkish orbs in Tempe, Arizona.",
    "Posted": "6/2/17"
  },
  {
    "Date": "5/7/17 2:50",
    "City": "Tucson",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "Ongoing",
    "Summary": "What I presumed was Vega... was actually moving. So basically, this appeared to be a star. Then, as I watched it, it was actuall",
    "Posted": "5/11/17"
  },
  {
    "Date": "5/6/17 22:00",
    "City": "Goodyear",
    "State": "AZ",
    "Shape": "Diamond",
    "Duration": "all night",
    "Summary": "Witnessing fixed diamond shaped craft with red lights on top. They remain in the same position all night. ((NUFORC Note: Stars? PD))",
    "Posted": "7/7/17"
  },
  {
    "Date": "5/6/17 20:45",
    "City": "Phoenix",
    "State": "AZ",
    "Shape": "Triangle",
    "Duration": "3 minutes",
    "Summary": "Phoenix HUGE Isosceles Triangle shaped Craft with 3 lights quietly headed Southeast in Arizona!",
    "Posted": "5/11/17"
  },
  {
    "Date": "5/5/17 4:30",
    "City": "Surprise",
    "State": "AZ",
    "Shape": "Circle",
    "Duration": 1,
    "Summary": "Very strange looking. Lots of dogs were barking, the whole time.",
    "Posted": "5/11/17"
  },
  {
    "Date": "5/5/17 3:00",
    "City": "El Mirage",
    "State": "AZ",
    "Shape": "Circle",
    "Duration": "30 seconds",
    "Summary": "While letting my dog out, a very bright white circle of light appeared suddenly in the sky. It seemed very low.",
    "Posted": "5/6/17"
  },
  {
    "Date": "5/4/17 21:27",
    "City": "Phoenix",
    "State": "AZ",
    "Shape": "Circle",
    "Duration": "15 seconds",
    "Summary": "Orange round sphere.",
    "Posted": "5/6/17"
  },
  {
    "Date": "5/4/17 18:30",
    "City": "Phoenix",
    "State": "AZ",
    "Shape": "Teardrop",
    "Duration": "5 minutes",
    "Summary": "Flying corkscrews.",
    "Posted": "5/6/17"
  },
  {
    "Date": "5/3/17 8:50",
    "City": "Phoenix",
    "State": "AZ",
    "Shape": "Other",
    "Duration": "2 seconds",
    "Summary": "MAN SEEN AIRLINE LIKE OBJECT VANISH INSIDE CONTRAIL..",
    "Posted": "5/6/17"
  },
  {
    "Date": "5/1/17 21:15",
    "City": "Marana",
    "State": "AZ",
    "Shape": "Circle",
    "Duration": "20 minutes",
    "Summary": "In the sky W of Marana, 3 flashing objects at 3 different levels above the horizon. The lowest object was also the furthest S.",
    "Posted": "5/6/17"
  },
  {
    "Date": "5/1/17 21:13",
    "City": "Scottsdale",
    "State": "AZ",
    "Shape": "Unknown",
    "Duration": "5-10 seconds",
    "Summary": "Bright white light.",
    "Posted": "5/6/17"
  },
  {
    "Date": "4/22/17 21:30",
    "City": "Surprise",
    "State": "AZ",
    "Shape": "Unknown",
    "Duration": "2 hours",
    "Summary": "Fixed flashing colored lights 9pm to 1am. Change position suddenly appear regularly. ((NUFORC Note: Possibly stars or planets?? PD))",
    "Posted": "4/28/17"
  },
  {
    "Date": "4/17/17 19:28",
    "City": "Gilbert",
    "State": "AZ",
    "Shape": "Cigar",
    "Duration": "2 minutes",
    "Summary": "Red/orbs San Tan peak/jet engine facility.",
    "Posted": "4/20/17"
  },
  {
    "Date": "4/14/17 23:00",
    "City": "Phoenix",
    "State": "AZ",
    "Shape": "Diamond",
    "Duration": "90 minutes",
    "Summary": "Diamond shaped crafts test my perception and direction following abilities.",
    "Posted": "4/20/17"
  },
  {
    "Date": "4/13/17 0:00",
    "City": "Phoenix",
    "State": "AZ",
    "Shape": "Cigar",
    "Duration": "1 hour",
    "Summary": "Red and yellow, stayed there for 1 whole hour.",
    "Posted": "4/20/17"
  },
  {
    "Date": "4/12/17 3:00",
    "City": "Luke Air Force Base",
    "State": "AZ",
    "Shape": "Chevron",
    "Duration": "10 minutes",
    "Summary": "V-shaped UFO flew over Luke Air Force Base from white tanks, toward Phoenix.",
    "Posted": "4/13/17"
  },
  {
    "Date": "4/11/17 20:45",
    "City": "Chandler",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "30 seconds",
    "Summary": "Exiting of the freeway, my son told me to look out to the west kind of higher in the sky.",
    "Posted": "4/13/17"
  },
  {
    "Date": "",
    "City": "",
    "State": "",
    "Shape": "",
    "Duration": "",
    "Summary": "",
    "Posted": ""
  },
  {
    "Date": "",
    "City": "",
    "State": "",
    "Shape": "",
    "Duration": "",
    "Summary": "We saw am amber circular light blink out,",
    "Posted": ""
  },
  {
    "Date": "4/11/17 20:30",
    "City": "Show Low",
    "State": "AZ",
    "Shape": "Diamond",
    "Duration": "30 minutes",
    "Summary": "Large object flew directly over house, was not more than 30 feet above our roof. It continued to circle the area for a bit hovering at",
    "Posted": "4/13/17"
  },
  {
    "Date": "4/7/17 20:00",
    "City": "Williams",
    "State": "AZ",
    "Shape": "Unknown",
    "Duration": "2 hours",
    "Summary": "I've seen strange lights in the night sky, but nothing this long or active before.",
    "Posted": "4/13/17"
  },
  {
    "Date": "4/5/17 18:00",
    "City": "San Tan Valley",
    "State": "AZ",
    "Shape": "Sphere",
    "Duration": "1 hour",
    "Summary": "Large lights slowly moving, dimming in and out of visability. Abrupt angle changing motions, morphing.",
    "Posted": "4/7/17"
  },
  {
    "Date": "4/2/17 22:40",
    "City": "Mesa",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "1 minute",
    "Summary": "Blue dot in sky ascends and descends quickly with a plane flying by a reference.",
    "Posted": "4/7/17"
  },
  {
    "Date": "3/26/17 0:58",
    "City": "Prescott Valley",
    "State": "AZ",
    "Shape": "Circle",
    "Duration": "3-5 minutes",
    "Summary": "Bluish light heading S before turning towards me. It stopped then moved like a moth in rapid random motions.((NUFORC Note: Star? PD))",
    "Posted": "4/7/17"
  },
  {
    "Date": "3/24/17 16:14",
    "City": "Goodyear",
    "State": "AZ",
    "Shape": "Triangle",
    "Duration": "",
    "Summary": "I have a photographic of the UFO I can send it to you my email is ((e-address deleted))",
    "Posted": "4/7/17"
  },
  {
    "Date": "3/23/17 20:25",
    "City": "Bullhead City",
    "State": "AZ",
    "Shape": "Circle",
    "Duration": "30-45 seconds",
    "Summary": "UFO sighting over Rotary Park, 3 circular lights.",
    "Posted": "4/7/17"
  },
  {
    "Date": "3/23/17 19:30",
    "City": "Tempe",
    "State": "AZ",
    "Shape": "Circle",
    "Duration": "5 seconds",
    "Summary": "Green/White Orb in the East Valley.",
    "Posted": "4/7/17"
  },
  {
    "Date": "3/22/17 18:00",
    "City": "Mesa",
    "State": "AZ",
    "Shape": "Circle",
    "Duration": "10 seconds",
    "Summary": "Round, shiny object fewed sitting way up in the sky for a few seconds before drifting to the right and disappearing completley.",
    "Posted": "4/28/17"
  },
  {
    "Date": "3/20/17 23:00",
    "City": "Ajo",
    "State": "AZ",
    "Shape": "Triangle",
    "Duration": "5 minutes",
    "Summary": "My wife and I saw a huge triangular shaped object, red lights at each point, for about 5 minutes. ((anonymous report))",
    "Posted": "3/23/17"
  },
  {
    "Date": "3/20/17 20:15",
    "City": "Chandler",
    "State": "AZ",
    "Shape": "Fireball",
    "Duration": "15 minutes",
    "Summary": "Orange orbs in southeastern Phoenix sky, March 20, 2017, around 8-9 pm.",
    "Posted": "3/23/17"
  },
  {
    "Date": "3/19/17 22:15",
    "City": "Tempe",
    "State": "AZ",
    "Shape": "Light",
    "Duration": 90,
    "Summary": "First was 3 lights in triangle formation. Then 2 more came - one went over to the other and shown a bright white light.",
    "Posted": "3/23/17"
  },
  {
    "Date": "3/19/17 18:45",
    "City": "Phoenix",
    "State": "AZ",
    "Shape": "Changing",
    "Duration": "5 minutes",
    "Summary": "Cyl. silver obj. approached, then receded, then changed shape..began to sparkle then drift away to WSW. ((anonymous report))",
    "Posted": "3/23/17"
  },
  {
    "Date": "3/16/17 20:15",
    "City": "tempe",
    "State": "AZ",
    "Shape": "Other",
    "Duration": "15 minutes",
    "Summary": "Low Flying Helicopter Chasing Lighted Object",
    "Posted": "6/2/17"
  },
  {
    "Date": "3/16/17 20:15",
    "City": "Tempe",
    "State": "AZ",
    "Shape": "Other",
    "Duration": "15 minutes",
    "Summary": "Low Flying Helicopter Chasing Lighted Object",
    "Posted": "6/2/17"
  },
  {
    "Date": "3/16/17 20:12",
    "City": "Tempe",
    "State": "AZ",
    "Shape": "Other",
    "Duration": "50 minutes",
    "Summary": "Unusual military helicopter activity over east Phoenix, AZ, valley. 3-16-17. 8:12 pm. ((anonymous report))",
    "Posted": "3/17/17"
  },
  {
    "Date": "3/16/17 19:35",
    "City": "Chandler",
    "State": "AZ",
    "Shape": "Triangle",
    "Duration": "1 minute",
    "Summary": "3 bright red lights in triangular formation.",
    "Posted": "3/17/17"
  },
  {
    "Date": "3/15/17 17:50",
    "City": "Phoenix",
    "State": "AZ",
    "Shape": "Oval",
    "Duration": "5 minutes",
    "Summary": "Over South Mountain, a single craft with 3 oval sides spinning slowly. ((anonymous report))",
    "Posted": "3/17/17"
  },
  {
    "Date": "3/15/17 7:15",
    "City": "Phoenix",
    "State": "AZ",
    "Shape": "Circle",
    "Duration": "25 minutes",
    "Summary": "We saw 4 orbs moving away and at each other.the very strange thing was a plane circling around the area. ((anonymous report))",
    "Posted": "3/17/17"
  },
  {
    "Date": "3/14/17 20:24",
    "City": "Chandler",
    "State": "AZ",
    "Shape": "Sphere",
    "Duration": "2 minutes",
    "Summary": "Four, red white blue and green, glowing objects flew overhead. Did not make a sound.",
    "Posted": "3/17/17"
  },
  {
    "Date": "3/14/17 6:45",
    "City": "Phoenix",
    "State": "AZ",
    "Shape": "Other",
    "Duration": "5-10 minutes",
    "Summary": "2 large objects with many much smaller objects floating in the sky over Phoenix Sky Harbor airport",
    "Posted": "3/17/17"
  },
  {
    "Date": "3/14/17 5:00",
    "City": "Goodyear",
    "State": "AZ",
    "Shape": "Triangle",
    "Duration": "2 hours",
    "Summary": "((HOAX??)) The \"UFO\" was fairly large. It was about a mile wide and a mile tall. There was about 6 or 7 orbs in a V shape.",
    "Posted": "3/17/17"
  },
  {
    "Date": "3/13/17 21:26",
    "City": "Mesa",
    "State": "AZ",
    "Shape": "Sphere",
    "Duration": "6 minutes",
    "Summary": "Witnessed 2 orange orbs being followed by a large helicopter like a Blackhawk. Flew directly overhead at approximately 500ft northbound",
    "Posted": "3/17/17"
  },
  {
    "Date": "3/13/17 21:00",
    "City": "Glendale",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "20 minutes",
    "Summary": "((NUFORC Note: Source of report provides no information; elects to remain totally anonymous. PD))",
    "Posted": "3/17/17"
  },
  {
    "Date": "3/11/17 20:55",
    "City": "Casa Grande",
    "State": "AZ",
    "Shape": "Circle",
    "Duration": "3 minutes",
    "Summary": "4 lights over Casa Grande, AZ.",
    "Posted": "3/17/17"
  },
  {
    "Date": "3/9/17 21:25",
    "City": "Phoenix",
    "State": "AZ",
    "Shape": "Formation",
    "Duration": 1,
    "Summary": "3 red lights with three blue lights hovering over n Phoenix",
    "Posted": "3/10/17"
  },
  {
    "Date": "3/8/17 2:00",
    "City": "Phoenix",
    "State": "AZ",
    "Shape": "Unknown",
    "Duration": "10 minutes",
    "Summary": "In the E sky over Phoenix at 2am on Mar 9th my friend and I saw 4 bright lights flickering fast at first then slow then fast again.",
    "Posted": "3/10/17"
  },
  {
    "Date": "3/3/17 19:36",
    "City": "Yuma",
    "State": "AZ",
    "Shape": "Oval",
    "Duration": "1.5 minutes",
    "Summary": "As I was walking to my door, I looked up at the western sky and saw approximately 7 oval bright orange/red objects in a hook formation.",
    "Posted": "3/10/17"
  },
  {
    "Date": "2/28/17 19:45",
    "City": "Phoenix",
    "State": "AZ",
    "Shape": "Fireball",
    "Duration": "3 minutes",
    "Summary": "Lights in North phoenix sky 2-28-17 at 7:45 pm",
    "Posted": "3/10/17"
  },
  {
    "Date": "2/26/17 20:23",
    "City": "Prescott",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "30 seconds",
    "Summary": "Glowing and pulsing orange and dark yellow orb, about 100ft up in the air. Floating in a northbound direction on the west side of the c",
    "Posted": "3/10/17"
  },
  {
    "Date": "2/25/17 14:16",
    "City": "Mesa",
    "State": "AZ",
    "Shape": "Sphere",
    "Duration": "5 minutes",
    "Summary": "We saw bright orbital objects and 1 larger grey object.",
    "Posted": "3/10/17"
  },
  {
    "Date": "2/24/17 20:30",
    "City": "Payson",
    "State": "AZ",
    "Shape": "Other",
    "Duration": "10 minutes",
    "Summary": "On 2/24/17 between 20:30 and 21:00 when leaving a resturant in Payson, Arizona what appeared to be a very bright star was visible in",
    "Posted": "3/10/17"
  },
  {
    "Date": "2/24/17 19:40",
    "City": "Buckeye/Litchfield Park",
    "State": "AZ",
    "Shape": "Circle",
    "Duration": "10 minutes",
    "Summary": "I walked outside and saw a group of orange lights coming from the south. They were all coming from the same area and going east. There",
    "Posted": "3/10/17"
  },
  {
    "Date": "2/22/17 21:47",
    "City": "Tucson",
    "State": "AZ",
    "Shape": "Changing",
    "Duration": "1 hour",
    "Summary": "Object in sky moves erratic, changing shape, size, and disappearing/ reappearing on video.",
    "Posted": "4/7/17"
  },
  {
    "Date": "2/21/17 20:00",
    "City": "Phoenix",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "10minutes",
    "Summary": "3-4 Bright lights in the sky. Seemingly hovering. One or two of the objects moves up and around.",
    "Posted": "3/10/17"
  },
  {
    "Date": "2/21/17 11:40",
    "City": "Sun City West",
    "State": "AZ",
    "Shape": "Other",
    "Duration": "3 minutes",
    "Summary": "Fluid formation flying objects.",
    "Posted": "3/10/17"
  },
  {
    "Date": "2/21/17 11:15",
    "City": "Peoria",
    "State": "AZ",
    "Shape": "Formation",
    "Duration": "10 minutes",
    "Summary": "Fluid formation flying disks.",
    "Posted": "2/22/17"
  },
  {
    "Date": "2/20/17 21:00",
    "City": "Tucson",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "25 minutes",
    "Summary": "My sister and I were driving from Tucson to Sierra Vista tonight. Right near the Sanoita/Patagonia exit going east on I-10 we noticed",
    "Posted": "2/22/17"
  },
  {
    "Date": "2/16/17 7:00",
    "City": "Yuma",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "1 minute",
    "Summary": "Light north of Yuma, west of Yuma Proving Grounds. Hovered approx. 1000ft AGL then rose into a small cloud, then light and cloud disapp",
    "Posted": "2/17/17"
  },
  {
    "Date": "2/15/17 21:10",
    "City": "Prescott Valley",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "Still going",
    "Summary": "Saw an unexplained light over 89A Prescott valley/Chino Valley AZ area. Light stayed constant. ((NUFORC Note: Sighting of Venus? PD))",
    "Posted": "2/17/17"
  },
  {
    "Date": "2/14/17 23:00",
    "City": "Goodyear",
    "State": "AZ",
    "Shape": "Other",
    "Duration": "5-8 minutes",
    "Summary": "These were fairly bright like an amber orb? There was 5 before i got to my brothers room there was only 2 remaining.",
    "Posted": "4/7/17"
  },
  {
    "Date": "2/14/17 0:00",
    "City": "Goodyear",
    "State": "AZ",
    "Shape": "Other",
    "Duration": "5-8 minutes",
    "Summary": "Bright, amber, 5 of them, 2 remain after 30 seconds.",
    "Posted": "4/20/17"
  },
  {
    "Date": "2/12/17 22:15",
    "City": "Apache Junction",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "Round flash",
    "Summary": "Yellow round flashes",
    "Posted": "2/17/17"
  },
  {
    "Date": "2/12/17 20:30",
    "City": "Peoria",
    "State": "AZ",
    "Shape": "Circle",
    "Duration": "1 hour",
    "Summary": "Stationary bright white light west of Peoria, AZ. ((NUFORC Note: Probable sighting of Venus. PD))",
    "Posted": "2/17/17"
  },
  {
    "Date": "2/8/17 22:30",
    "City": "Tucson",
    "State": "AZ",
    "Shape": "Unknown",
    "Duration": "10 minutes",
    "Summary": "Bright red light traveled across sky in Tucson, Arizona. No sound, then flickers out to the west of city.",
    "Posted": "2/17/17"
  },
  {
    "Date": "2/8/17 21:30",
    "City": "Avondale",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "5-10 minutes",
    "Summary": "Large orange/reddish light high in the sky, moves horizontal and fades away.",
    "Posted": "2/10/17"
  },
  {
    "Date": "2/7/17 21:30",
    "City": "Tucson",
    "State": "AZ",
    "Shape": "Other",
    "Duration": "2-5 minutes",
    "Summary": "Four strobing lights seen in motion moving from the south to the west in Tucson, AZ with military activity present",
    "Posted": "2/10/17"
  },
  {
    "Date": "2/5/17 1:35",
    "City": "Sahuarita",
    "State": "AZ",
    "Shape": "Triangle",
    "Duration": "3 minutes",
    "Summary": "Sahuarita, Arizona, lights.",
    "Posted": "2/10/17"
  },
  {
    "Date": "2/4/17 17:53",
    "City": "Queen Creek",
    "State": "AZ",
    "Shape": "Changing",
    "Duration": "8 minutes",
    "Summary": "Red/orange object--circle to chevron shape with lights hovering overhead with no sound",
    "Posted": "2/10/17"
  },
  {
    "Date": "2/3/17 20:00",
    "City": "Phoenix",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "4 hours",
    "Summary": "Phx, I lookup and saw this intense light just hovering no not that it was fix no plane or helicopter. ((NUFORC Note: Venus. PD))",
    "Posted": "2/10/17"
  },
  {
    "Date": "2/2/17 20:00",
    "City": "Mesa",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "20 seconds",
    "Summary": "3 Pulsing yellow/orange lights. ((anonymous report))",
    "Posted": "2/3/17"
  },
  {
    "Date": "2/1/17 22:50",
    "City": "Tempe",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "10 minutes",
    "Summary": "Four orange lights Tempe.",
    "Posted": "2/3/17"
  },
  {
    "Date": "2/1/17 12:00",
    "City": "not sure",
    "State": "AZ",
    "Shape": "Oval",
    "Duration": "1 minute",
    "Summary": "I photographed a hot air balloon thru my vehicle's windshield. A few days later I enlarged photo for a close up view.",
    "Posted": "3/10/17"
  },
  {
    "Date": "1/31/17 23:00",
    "City": "Maricopa",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "~5 minutes",
    "Summary": "While driving 347 towards Maricopa, saw 6 lights gradually appear then disappear - 4 in a tight line formation.",
    "Posted": "2/3/17"
  },
  {
    "Date": "1/31/17 6:15",
    "City": "Glendale",
    "State": "AZ",
    "Shape": "Triangle",
    "Duration": "Unknown",
    "Summary": "Black Triangular Craft over AZ Cardinal Stadium",
    "Posted": "2/16/18"
  },
  {
    "Date": "1/30/17 14:00",
    "City": "Cottonwood",
    "State": "AZ",
    "Shape": "Rectangle",
    "Duration": "1 minute",
    "Summary": "Captured an object that came into view on the far right.",
    "Posted": "2/16/18"
  },
  {
    "Date": "1/29/17 15:17",
    "City": "Phoenix",
    "State": "AZ",
    "Shape": "Sphere",
    "Duration": "10 minutes",
    "Summary": "Was aluminating bright white, almost silver. The light appeared to pulsate. Eventually moving away in upward and south direction .",
    "Posted": "4/7/17"
  },
  {
    "Date": "1/28/17 23:54",
    "City": "Tucson",
    "State": "AZ",
    "Shape": "Circle",
    "Duration": "1 seconds",
    "Summary": "Ball of light through sky",
    "Posted": "2/3/17"
  },
  {
    "Date": "1/28/17 20:50",
    "City": "Sahuarita",
    "State": "AZ",
    "Shape": "Formation",
    "Duration": "~6 minutes",
    "Summary": "Formation of steady, orange lights east of Sahuarita AZ traveling SSW. Visible for appx. 6 minutes.",
    "Posted": "2/3/17"
  },
  {
    "Date": "1/28/17 20:20",
    "City": "Chandler",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "3 minutes",
    "Summary": "3 Large Orange lights hover over Chandler, AZ.",
    "Posted": "2/3/17"
  },
  {
    "Date": "1/28/17 18:30",
    "City": "Scottsdale",
    "State": "AZ",
    "Shape": "Triangle",
    "Duration": "5 minutes",
    "Summary": "Huge fire orange objects over Phoenix.",
    "Posted": "2/3/17"
  },
  {
    "Date": "1/25/17 19:00",
    "City": "Yuma",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "8 minutes",
    "Summary": "Venus lights.",
    "Posted": "2/3/17"
  },
  {
    "Date": "1/21/17 20:30",
    "City": "Gilbert",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "3 seconds",
    "Summary": "I went for ice cream with my son who is 12. We were in the car heading back home about 1 minute away from the house. I was facing w at",
    "Posted": "1/26/17"
  },
  {
    "Date": "1/15/17 20:53",
    "City": "Phoenix",
    "State": "AZ",
    "Shape": "Flash",
    "Duration": "2 minutes",
    "Summary": "Flash of light in the sky.",
    "Posted": "1/19/17"
  },
  {
    "Date": "1/10/17 3:45",
    "City": "Sahaurita",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "20 minutes",
    "Summary": "Bright light formation moving erratically near Tucson, AZ",
    "Posted": "2/17/17"
  },
  {
    "Date": "1/9/17 19:15",
    "City": "Chandler",
    "State": "AZ",
    "Shape": "Sphere",
    "Duration": "2 minutes",
    "Summary": "One round ball of fire.",
    "Posted": "1/12/17"
  },
  {
    "Date": "1/1/17 0:20",
    "City": "San Tan Valley",
    "State": "AZ",
    "Shape": "Fireball",
    "Duration": "5 minutes",
    "Summary": "Red ball of hovering light.",
    "Posted": "1/6/17"
  },
  {
    "Date": "12/31/16 23:56",
    "City": "Phoenix",
    "State": "AZ",
    "Shape": "Triangle",
    "Duration": "2 minutes",
    "Summary": "The pyramid shaped like craft flew from the west to east.it was very cloudy weather. The craft was huge and bright with a amber color.",
    "Posted": "1/6/17"
  },
  {
    "Date": "12/31/16 17:00",
    "City": "Mesa",
    "State": "AZ",
    "Shape": "Egg",
    "Duration": "20 minutes",
    "Summary": "Metallic object flashing in sky.",
    "Posted": "1/6/17"
  },
  {
    "Date": "12/31/16 2:45",
    "City": "Phoenix",
    "State": "AZ",
    "Shape": "Flash",
    "Duration": "5-10 seconds",
    "Summary": "A dark round object, then a bright flash of light trailing the sky.",
    "Posted": "1/6/17"
  },
  {
    "Date": "12/30/16 20:00",
    "City": "New River",
    "State": "AZ",
    "Shape": "Fireball",
    "Duration": "3 minutes",
    "Summary": "I just saw 2-3 looked like stars, not a plane, in the west sky. The one top left &quot;joined&quot; the one bottom right.",
    "Posted": "1/6/17"
  },
  {
    "Date": "12/27/16 18:00",
    "City": "Tucson",
    "State": "AZ",
    "Shape": "Unknown",
    "Duration": "2 hours",
    "Summary": "Bright white orb over Mt Lemmon Tucson AZ",
    "Posted": "12/30/16"
  },
  {
    "Date": "12/24/16 21:00",
    "City": "Anthem",
    "State": "AZ",
    "Shape": "Sphere",
    "Duration": 5,
    "Summary": "7 orange lights/sphere's seen by 3 ppl on Christmas Eve.",
    "Posted": "12/30/16"
  },
  {
    "Date": "12/23/16 17:30",
    "City": "Tucson",
    "State": "AZ",
    "Shape": "Formation",
    "Duration": "2 minutes",
    "Summary": "Ten large round solid, non-blinking, reddish-orange \"orb-like\" lights flying in formation over Tucson, AZ.",
    "Posted": "3/17/17"
  },
  {
    "Date": "12/20/16 20:30",
    "City": "Sun City West",
    "State": "AZ",
    "Shape": "Fireball",
    "Duration": "5 minutes",
    "Summary": "Hovering silent flaming object, after a few minutes rapidly ascended to the SW and disappeared.",
    "Posted": "3/10/17"
  },
  {
    "Date": "12/19/16 21:53",
    "City": "Florence Jct./Reymart",
    "State": "AZ",
    "Shape": "Circle",
    "Duration": "60 seconds",
    "Summary": "While camping in the Cottonwood canyon Rd., along the gas line rd., I awoke to my dog growling and staring north. I looked to see what",
    "Posted": "12/21/16"
  },
  {
    "Date": "12/19/16 20:02",
    "City": "Gilbert",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "15 minutes",
    "Summary": "Undulating swarm cloud of thousands of multi-colored blinking lights in the sky for 10-15 minutes. ((NUFORC Note: LED balloons. PD))",
    "Posted": "12/21/16"
  },
  {
    "Date": "12/19/16 19:02",
    "City": "Phoenix",
    "State": "AZ",
    "Shape": "Circle",
    "Duration": "3 days",
    "Summary": "Bright light in the night sky. Disappears within about every 30 min returns in intervals. ((NUFORC Note: Venus?? PD))",
    "Posted": "12/21/16"
  },
  {
    "Date": "12/15/16 7:12",
    "City": "Chandler",
    "State": "AZ",
    "Shape": "",
    "Duration": "1 minute",
    "Summary": "Dropping off my son at school and we saw a black line going north to south across the moon",
    "Posted": "12/15/16"
  },
  {
    "Date": "12/14/16 5:35",
    "City": "Prescott Valley",
    "State": "AZ",
    "Shape": "Unknown",
    "Duration": "8 minutes",
    "Summary": "Three blinking lights (in order) hovering w/ a metal pinging sounds in the dark morning sky for 8-10 minutes before disappearing.",
    "Posted": "12/21/16"
  },
  {
    "Date": "12/12/16 16:30",
    "City": "Green Valley",
    "State": "AZ",
    "Shape": "Disk",
    "Duration": "unknown",
    "Summary": "The clear distinct shape and symmetry of this object seem to suggest a UFO.",
    "Posted": "12/30/16"
  },
  {
    "Date": "12/12/16 16:30",
    "City": "Green Valley",
    "State": "AZ",
    "Shape": "Cone",
    "Duration": "unk",
    "Summary": "Small round object hovering over Green Valley, AZ. ((NUFORC Note: We suspect Venus, or a lens flare. PD))",
    "Posted": "12/30/16"
  },
  {
    "Date": "12/10/16 18:52",
    "City": "Kayenta",
    "State": "AZ",
    "Shape": "Disk",
    "Duration": "10 minutes",
    "Summary": "Gigantict Disc with rotating side lights headed northeast over Kayenta into Monument Valley, UT.",
    "Posted": "12/15/16"
  },
  {
    "Date": "12/9/16 22:00",
    "City": "Phoenix",
    "State": "AZ",
    "Shape": "Unknown",
    "Duration": "30 minutes",
    "Summary": "We were looking towards east and seen in the sky a object that was spinning or lights were spinning. ((NUFORC Note: Star? PD))",
    "Posted": "12/15/16"
  },
  {
    "Date": "12/9/16 21:30",
    "City": "Kingman",
    "State": "AZ",
    "Shape": "Triangle",
    "Duration": "15 seconds",
    "Summary": "Aircraft w/3 large bright white lights. Lights were shaped like &gt; . It was too high to be a commercial airline but as big. Became as",
    "Posted": "12/15/16"
  },
  {
    "Date": "12/4/16 14:16",
    "City": "Marana",
    "State": "AZ",
    "Shape": "",
    "Duration": "4 seconds",
    "Summary": "Black nose aircraft near sun. ((anonymous report))",
    "Posted": "12/5/16"
  },
  {
    "Date": "12/1/16 18:52",
    "City": "Glendale",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "8 seconds",
    "Summary": "Fastest light I've ever seen move in the sky with no trail behind it.",
    "Posted": "12/5/16"
  },
  {
    "Date": "11/22/16 21:30",
    "City": "Mesa",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "20 minutes",
    "Summary": "Bright red light,waning until disappearing, moving in small, erratic, directional changes.",
    "Posted": "12/5/16"
  },
  {
    "Date": "11/16/16 22:37",
    "City": "Benson (north of)",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "2 minutes",
    "Summary": "Large amber light turns into 5 and slowly disappears",
    "Posted": "12/5/16"
  },
  {
    "Date": "11/16/16 20:00",
    "City": "Maricopa",
    "State": "AZ",
    "Shape": "Circle",
    "Duration": "15 minutes",
    "Summary": "3 lights in a line that would randomly go dark and return to color. Stayed in formation the while time.",
    "Posted": "12/5/16"
  },
  {
    "Date": "11/16/16 20:00",
    "City": "Lake Havasu City",
    "State": "AZ",
    "Shape": "Cross",
    "Duration": "20 minutes",
    "Summary": "8 Flashing lights seen flying in formation with multiple other planes flying in close proximity for long periods of time circling over",
    "Posted": "12/5/16"
  },
  {
    "Date": "11/15/16 20:00",
    "City": "Phoenix",
    "State": "AZ",
    "Shape": "Egg",
    "Duration": "30 seconds",
    "Summary": "2 fast low flying planes follow point of light in sky over east valley in Phoenix",
    "Posted": "12/5/16"
  },
  {
    "Date": "11/15/16 8:00",
    "City": "Glendale",
    "State": "AZ",
    "Shape": "Changing",
    "Duration": "3 minutes",
    "Summary": "((HOAX??)) Mother ship released four lights.",
    "Posted": "12/5/16"
  },
  {
    "Date": "11/14/16 0:00",
    "City": "Glendale",
    "State": "AZ",
    "Shape": "Circle",
    "Duration": "5 minutes",
    "Summary": "I walked out of my friends house toward my car looking west and spotted two orange lights coasting downward toward earth, the lights s",
    "Posted": "12/5/16"
  },
  {
    "Date": "11/13/16 19:30",
    "City": "Gila Bend (west of; on I-8)",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "10-12 minutes",
    "Summary": "Lights from sky following car near Gila Bend I-8.",
    "Posted": "12/5/16"
  },
  {
    "Date": "11/12/16 19:00",
    "City": "Glendale",
    "State": "AZ",
    "Shape": "Circle",
    "Duration": "40 minutes",
    "Summary": "Ospreys USMC trainings.",
    "Posted": "12/5/16"
  },
  {
    "Date": "11/11/16 18:45",
    "City": "Phoenix",
    "State": "AZ",
    "Shape": "Light",
    "Duration": 60,
    "Summary": "Light follows Southwest Airlines flight for 60 minutes.",
    "Posted": "12/5/16"
  },
  {
    "Date": "11/10/16 19:17",
    "City": "Glendale",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "12 minutes",
    "Summary": "3 lights.",
    "Posted": "11/11/16"
  },
  {
    "Date": "11/10/16 19:15",
    "City": "Phoenix",
    "State": "AZ",
    "Shape": "Formation",
    "Duration": "5 minutes",
    "Summary": "White/orange circular lights in rectangle formation Phoenix, Arizona.",
    "Posted": "11/11/16"
  },
  {
    "Date": "11/10/16 19:15",
    "City": "Glendale",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "15 minutes",
    "Summary": "3 lights over Phoenix, AZ.",
    "Posted": "11/11/16"
  },
  {
    "Date": "11/10/16 19:00",
    "City": "Phoenix",
    "State": "AZ",
    "Shape": "Circle",
    "Duration": "15 minutes",
    "Summary": "3 lights in formation turning off and on in sequence.",
    "Posted": "11/11/16"
  },
  {
    "Date": "11/10/16 19:00",
    "City": "Glendale",
    "State": "AZ",
    "Shape": "Formation",
    "Duration": "20 minutes",
    "Summary": "3 lights spotted in line over Phoenix.",
    "Posted": "11/11/16"
  },
  {
    "Date": "11/10/16 15:30",
    "City": "Glendale",
    "State": "AZ",
    "Shape": "Other",
    "Duration": "15 minutes",
    "Summary": "Three lights in a line a cross the sky. ((anonymous report))",
    "Posted": "11/11/16"
  },
  {
    "Date": "11/6/16 0:30",
    "City": "Avondale",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "10 minutes",
    "Summary": "3 bright orange lights in the Avondale, AZ, area.",
    "Posted": "11/11/16"
  },
  {
    "Date": "11/5/16 22:35",
    "City": "Scottsdale",
    "State": "AZ",
    "Shape": "Fireball",
    "Duration": "5 minutes",
    "Summary": "Upon stepping out to the back yard this evening, I noticed 3 large, orange fireball type objects low in the north sky.",
    "Posted": "11/11/16"
  },
  {
    "Date": "11/5/16 19:00",
    "City": "Kingman",
    "State": "AZ",
    "Shape": "Unknown",
    "Duration": "30-35 minutes",
    "Summary": "Wintessed what appeared to be 2 satellites in tandem--then later--odd grouping of flickering lights",
    "Posted": "11/11/16"
  },
  {
    "Date": "11/5/16 6:45",
    "City": "Sweetwater",
    "State": "AZ",
    "Shape": "Other",
    "Duration": "3 minutes",
    "Summary": "On Nov. 5th, 2016, at approx. 0645 hours. We were out doing our morning walk, and we observed a metallic chrome like helmet sh",
    "Posted": "12/5/16"
  },
  {
    "Date": "11/4/16 1:00",
    "City": "Tempe",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "90 seconds",
    "Summary": "Three orange/amber orbs silently floating above Tempe neighborhood around Baseline and Kyrene",
    "Posted": "11/11/16"
  },
  {
    "Date": "11/2/16 20:42",
    "City": "Congress",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "20 minutes",
    "Summary": "Orange glowing lights in the sky, 3 sets of 3 and then 2 sets of 3 in two different locations in Congress, Arizona.",
    "Posted": "11/4/16"
  },
  {
    "Date": "10/31/16 1:16",
    "City": "Tempe",
    "State": "AZ",
    "Shape": "Fireball",
    "Duration": "5 minutes",
    "Summary": "Three fire balls appear in the nights sky. Do there little dance and then disappear into the night.",
    "Posted": "11/4/16"
  },
  {
    "Date": "10/29/16 10:30",
    "City": "Rock Point",
    "State": "AZ",
    "Shape": "Disk",
    "Duration": "10 seconds",
    "Summary": "Dark-grayish flat like object, in the skies for approximately 10 seconds.",
    "Posted": "12/5/16"
  },
  {
    "Date": "10/28/16 4:30",
    "City": "Florence",
    "State": "AZ",
    "Shape": "Circle",
    "Duration": "5:30",
    "Summary": "Giant lighted circle towards the E over the mountains, looks like a full moon but the moon sets in the W. ((anonymous report))",
    "Posted": "11/4/16"
  },
  {
    "Date": "10/27/16 20:00",
    "City": "Tucson",
    "State": "AZ",
    "Shape": "Other",
    "Duration": "6 seconds",
    "Summary": "Fast moving straight line from E to W, no sound, completely covered underneath with dim white light.",
    "Posted": "11/4/16"
  },
  {
    "Date": "10/26/16 22:15",
    "City": "Apache Junction",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "~7 minutes",
    "Summary": "I received a phone call stating that I needed to go outside and look at the lights over South Mountain.",
    "Posted": "10/27/16"
  },
  {
    "Date": "10/25/16 19:00",
    "City": "Chandler",
    "State": "AZ",
    "Shape": "Unknown",
    "Duration": "1 minute",
    "Summary": "The UFO had amber lights circulating around it. It was dark so I could not see any shape. The event only lasted 1 minute.",
    "Posted": "10/27/16"
  },
  {
    "Date": "10/25/16 18:45",
    "City": "Globe",
    "State": "AZ",
    "Shape": "Formation",
    "Duration": "4 minutes",
    "Summary": "Amber string of lights.",
    "Posted": "10/27/16"
  },
  {
    "Date": "10/25/16 18:42",
    "City": "San Tan Valley",
    "State": "AZ",
    "Shape": "Oval",
    "Duration": "",
    "Summary": "A straight line of four to five lights that appeared to be rotating in a circular motion",
    "Posted": "10/27/16"
  },
  {
    "Date": "10/25/16 18:40",
    "City": "Chandler",
    "State": "AZ",
    "Shape": "Formation",
    "Duration": "30 seconds",
    "Summary": "We were driving east on the Loop 202 San Tan freeway, and I saw what appeared to be balls of amber light appearing in the sky due east.",
    "Posted": "10/27/16"
  },
  {
    "Date": "10/25/16 18:40",
    "City": "Florence",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "10 minutes",
    "Summary": "Oct. 25, 2016, between 6:30pm and 7:30pm, numerous people from different towns in Arizona are seeing lights in the sky.",
    "Posted": "10/27/16"
  },
  {
    "Date": "10/25/16 18:40",
    "City": "Globe",
    "State": "AZ",
    "Shape": "Other",
    "Duration": "1-2 minutes",
    "Summary": "My sons and I were leaving the College when we saw 5 lights in the sky, they faded in and out then disappeared. The 5 lights were in th",
    "Posted": "10/27/16"
  },
  {
    "Date": "10/25/16 18:35",
    "City": "San Tan Valley",
    "State": "AZ",
    "Shape": "Formation",
    "Duration": "3 minutes",
    "Summary": "String of lights appearing to change postition with each other.",
    "Posted": "11/4/16"
  },
  {
    "Date": "10/25/16 18:30",
    "City": "Gilbert",
    "State": "AZ",
    "Shape": "Circle",
    "Duration": "2 minutes",
    "Summary": "Four red lights. Appeared, went into formation and then disappeared.",
    "Posted": "10/27/16"
  },
  {
    "Date": "10/25/16 18:30",
    "City": "Queen Creek",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "2 minutes",
    "Summary": "Saw lights appear and dissapear then reappear in a straight line...north to south",
    "Posted": "10/27/16"
  },
  {
    "Date": "10/25/16 18:30",
    "City": "Mesa",
    "State": "AZ",
    "Shape": "Unknown",
    "Duration": "~2 minutes",
    "Summary": "I only saw 4 or 5 oscillating lights while travelling down the 202 eastbound. Amber or white in color. Slowly moving through the sky",
    "Posted": "10/27/16"
  },
  {
    "Date": "10/21/16 23:50",
    "City": "Phoenix",
    "State": "AZ",
    "Shape": "Other",
    "Duration": "8 minutes",
    "Summary": "Mysterious object in the Phoenix sky.",
    "Posted": "11/4/16"
  },
  {
    "Date": "10/18/16 23:00",
    "City": "Tucson",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "10 minutes",
    "Summary": "Bright light that seemed to be hovering, jumped twice, then disapeared.",
    "Posted": "10/21/16"
  },
  {
    "Date": "10/16/16 19:50",
    "City": "Golden Valley",
    "State": "AZ",
    "Shape": "Circle",
    "Duration": "5 minutes",
    "Summary": "Large Circular Bright Pulsating Light Changed Color from Red to Green to Yellow",
    "Posted": "10/21/16"
  },
  {
    "Date": "10/16/16 12:45",
    "City": "Tucson",
    "State": "AZ",
    "Shape": "Rectangle",
    "Duration": "4 minutes",
    "Summary": "Object flew across the sky and then straight up until no longer visible. Fast.",
    "Posted": "10/21/16"
  },
  {
    "Date": "10/15/16 18:03",
    "City": "Prescott",
    "State": "AZ",
    "Shape": "Unknown",
    "Duration": "2 minutes",
    "Summary": "Odd erratic, bright light over Prescott area.",
    "Posted": "10/21/16"
  },
  {
    "Date": "10/13/16 22:00",
    "City": "Parker",
    "State": "AZ",
    "Shape": "Sphere",
    "Duration": "10 minutes",
    "Summary": "Once again above the desert here where I live red orb like lights appeared, traveled the same exact path and vanished.",
    "Posted": "10/21/16"
  },
  {
    "Date": "10/8/16 18:13",
    "City": "Prescott",
    "State": "AZ",
    "Shape": "Other",
    "Duration": "16 minutes",
    "Summary": "On October 8, 2016 from 1813 to 1829 I observed a stationary hovering object above Prescott, AZ that had six tumbling &quot;lobes.&quot",
    "Posted": "4/20/17"
  },
  {
    "Date": "10/8/16 0:00",
    "City": "Cochise County",
    "State": "AZ",
    "Shape": "Flash",
    "Duration": "seconds",
    "Summary": "Flashes lighting up portions of the sky. Also, last year witnessed 4 lights hovering in diamond shape in St. David for >1 hr.",
    "Posted": "10/11/16"
  },
  {
    "Date": "10/1/16 19:30",
    "City": "Phoenix",
    "State": "AZ",
    "Shape": "Other",
    "Duration": "12 minutes",
    "Summary": "7 objects appearing to be fire going over phoenix az sky at around 730 pm on oct.1 2016",
    "Posted": "10/11/16"
  },
  {
    "Date": "9/25/16 23:46",
    "City": "El Mirage",
    "State": "AZ",
    "Shape": "Circle",
    "Duration": "10 minutes",
    "Summary": "Around 11:46 PM when I was staring up in the sky and noticed 2 circle li ((anonymous report))",
    "Posted": "9/30/16"
  },
  {
    "Date": "9/15/16 23:20",
    "City": "Benson",
    "State": "AZ",
    "Shape": "Rectangle",
    "Duration": "1 second",
    "Summary": "Rectangular light bar shaped object swooped down the hills in a flash.",
    "Posted": "10/21/16"
  },
  {
    "Date": "9/10/16 1:50",
    "City": "Tucson",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "",
    "Summary": "Three lights with one being green, if connected, one can form a triangle; also stood in place while the lights flashed in a pattern.",
    "Posted": "9/15/16"
  },
  {
    "Date": "9/6/16 14:45",
    "City": "Tucson",
    "State": "AZ",
    "Shape": "Triangle",
    "Duration": "1.5 minutes",
    "Summary": "Unidentifiable craft moving at extreme speed over Tucson, AZ SEPT 6, 16",
    "Posted": "9/9/16"
  },
  {
    "Date": "8/30/16 21:45",
    "City": "Tempe",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "16 minutes",
    "Summary": "My girlfriend and I saw two lights hovering over the Tempe area. We were looking south to southwest.",
    "Posted": "9/9/16"
  },
  {
    "Date": "8/30/16 21:40",
    "City": "Tempe",
    "State": "AZ",
    "Shape": "Fireball",
    "Duration": "5-10 minutes",
    "Summary": "At around 9:40 pm went outside and saw two bright orange fireballs side by side heading towards south mountain. ((anonymous report))",
    "Posted": "9/2/16"
  },
  {
    "Date": "8/23/16 19:00",
    "City": "Gila Bend",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "20 minutes",
    "Summary": "Lights in the sky.",
    "Posted": "9/2/16"
  },
  {
    "Date": "8/22/16 22:15",
    "City": "Prescott Valley",
    "State": "AZ",
    "Shape": "Other",
    "Duration": "8 seconds",
    "Summary": "I saw two bright orange lights in the night that slowly glowed on , then slowly glowed off.",
    "Posted": "8/25/16"
  },
  {
    "Date": "8/22/16 20:00",
    "City": "Sedona",
    "State": "AZ",
    "Shape": "Unknown",
    "Duration": "2-3 hours",
    "Summary": "Lights and entities in Northern Arizona.",
    "Posted": "8/29/16"
  },
  {
    "Date": "8/18/16 21:00",
    "City": "Mesa",
    "State": "AZ",
    "Shape": "Fireball",
    "Duration": "2 seconds",
    "Summary": "Green, bright, ball falling from sky, Mesa, AZ.",
    "Posted": "8/19/16"
  },
  {
    "Date": "8/18/16 20:37",
    "City": "Maricopa",
    "State": "AZ",
    "Shape": "Circle",
    "Duration": "4 minutes",
    "Summary": "Bright flashing light zig zagging across the sky. ((anonymous report))",
    "Posted": "8/19/16"
  },
  {
    "Date": "8/17/16 20:00",
    "City": "Gilbert",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "60 seconds",
    "Summary": "Constant bright star-like white light, heading away with no nav or landing lights. ((NUFORC Note: Sighting of ISS. PD))",
    "Posted": "8/19/16"
  },
  {
    "Date": "8/15/16 20:05",
    "City": "Gilbert",
    "State": "AZ",
    "Shape": "Circle",
    "Duration": "5 minutes",
    "Summary": "Round shaped object with no blinking lights, just white, first high in air, then lower instantly, moving across the sky, disappears.",
    "Posted": "8/16/16"
  },
  {
    "Date": "8/12/16 4:00",
    "City": "Interstate 8",
    "State": "AZ",
    "Shape": "Triangle",
    "Duration": "10 minutes",
    "Summary": "W on I-8, in AZ, E of Yuma at 4am. On my left, near an overpass, was a craft that looked to be size of car. ((anonymous report))",
    "Posted": "8/16/16"
  },
  {
    "Date": "8/12/16 2:04",
    "City": "Phoenix",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "4 seconds",
    "Summary": "Went out to smoke a cigarette and saw a flash of blue light in the sky, it was like something just warped out. The blue light was compo",
    "Posted": "8/16/16"
  },
  {
    "Date": "8/6/16 20:30",
    "City": "Sedonna",
    "State": "AZ",
    "Shape": "Other",
    "Duration": "90 minutes",
    "Summary": "How anyone can see a UFO.",
    "Posted": "5/4/18"
  },
  {
    "Date": "8/2/16 19:25",
    "City": "Phoenix",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "4-5 minutes",
    "Summary": "This was not a plane or helecopter.",
    "Posted": "8/29/16"
  },
  {
    "Date": "7/31/16 20:00",
    "City": "Phoenix",
    "State": "AZ",
    "Shape": "Rectangle",
    "Duration": "2 seconds",
    "Summary": "Looks like square lightning. ((NUFORC Note: Looks like a normal lightning bolt to us. PD))",
    "Posted": "8/16/16"
  },
  {
    "Date": "7/28/16 9:00",
    "City": "Phoenix",
    "State": "AZ",
    "Shape": "Other",
    "Duration": "1 minute",
    "Summary": "Faster than Mach 9.6 or almost 7,000 mph. WAY FASTER!",
    "Posted": "8/16/16"
  },
  {
    "Date": "7/28/16 1:35",
    "City": "Buckeye",
    "State": "AZ",
    "Shape": "Changing",
    "Duration": "5 minutes",
    "Summary": "We saw a fuzzy orb of yellow/cream light that divided into two and back to one, giving the appearance of growing brighter and then disa",
    "Posted": "8/2/16"
  },
  {
    "Date": "7/27/16 23:00",
    "City": "Kingman",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "2 minutes",
    "Summary": "Slow moving orbs of light.",
    "Posted": "8/2/16"
  },
  {
    "Date": "7/27/16 21:30",
    "City": "Kingman",
    "State": "AZ",
    "Shape": "Other",
    "Duration": "60 seconds",
    "Summary": "Huge low flying craft over Kingman, AZ, possible crash landing. ((NUFORC Note: Space debris? PD))",
    "Posted": "8/2/16"
  },
  {
    "Date": "7/27/16 21:30",
    "City": "Prescott Valley",
    "State": "AZ",
    "Shape": "Formation",
    "Duration": "10 minutes",
    "Summary": "Round headlight appearing to be two crafts side by side, then veered toward the E. ((NUFORC Note: Space debris. PD))",
    "Posted": "8/2/16"
  },
  {
    "Date": "7/27/16 20:30",
    "City": "Grand Canyon",
    "State": "AZ",
    "Shape": "Circle",
    "Duration": "30 seconds",
    "Summary": "Grand Canyon sighting.",
    "Posted": "8/16/16"
  },
  {
    "Date": "7/27/16 2:30",
    "City": "Surprise/Glendale",
    "State": "AZ",
    "Shape": "Unknown",
    "Duration": "3 seconds",
    "Summary": "Bright flash of green light, streaked through the sky and left behind a faint purple glow that faded quickly",
    "Posted": "8/2/16"
  },
  {
    "Date": "7/26/16 21:45",
    "City": "Kingman",
    "State": "AZ",
    "Shape": "Circle",
    "Duration": "",
    "Summary": "2 large balls of light in the southern sky, lasted for only a few seconds.",
    "Posted": "8/2/16"
  },
  {
    "Date": "7/22/16 1:30",
    "City": "Sedona",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "1 second",
    "Summary": "Flash of white ball of light.",
    "Posted": "7/22/16"
  },
  {
    "Date": "7/21/16 22:00",
    "City": "Phoenix",
    "State": "AZ",
    "Shape": "Circle",
    "Duration": "Seconds",
    "Summary": "OBJECT CROSSED THE SKY SO FAST, LIKE IT WAS HURLING TOWARD THE GROUND, BUT DISAPPEARED INSTEAD.",
    "Posted": "8/2/16"
  },
  {
    "Date": "7/21/16 20:50",
    "City": "Buckeye",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "5 seconds",
    "Summary": "Fast moving light in Buckeye, AZ.",
    "Posted": "7/22/16"
  },
  {
    "Date": "7/21/16 20:00",
    "City": "Camp Verde",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "8-15 minutes",
    "Summary": "Multiple lights, moving horizontally and vertically with no sound.",
    "Posted": "7/22/16"
  },
  {
    "Date": "7/19/16 5:20",
    "City": "Yuma",
    "State": "AZ",
    "Shape": "Disk",
    "Duration": "30 minutes",
    "Summary": "Orange saucer vanished and left a black trail leading down to the surface of the Earth.",
    "Posted": "7/22/16"
  },
  {
    "Date": "7/19/16 0:10",
    "City": "Phoenix",
    "State": "AZ",
    "Shape": "Cylinder",
    "Duration": "45 seconds",
    "Summary": "Strange red lights in Phoenix Sky, just now.",
    "Posted": "7/22/16"
  },
  {
    "Date": "7/17/16 16:00",
    "City": "Quartzsite",
    "State": "AZ",
    "Shape": "Unknown",
    "Duration": "Unknown",
    "Summary": "I did not witness anything while I was shooting my photos,I took them blindly of the bright sky. ((NUFORC Note: Lens flares. PD))",
    "Posted": "7/22/16"
  },
  {
    "Date": "7/14/16 20:40",
    "City": "Gold Canyon",
    "State": "AZ",
    "Shape": "Other",
    "Duration": "15 seconds",
    "Summary": "Round craft with bright emerald lights flashed and disappeared the second time the lights flashed.",
    "Posted": "9/9/16"
  },
  {
    "Date": "7/12/16 21:45",
    "City": "Kingman",
    "State": "AZ",
    "Shape": "Flash",
    "Duration": "1 second",
    "Summary": "My girlfriend and I we're sitting on my back patio stargazing in Clacks Canyon. All of a sudden a spotlight appeared high in sky.",
    "Posted": "7/15/16"
  },
  {
    "Date": "7/11/16 19:00",
    "City": "Tucson",
    "State": "AZ",
    "Shape": "Other",
    "Duration": "~2 seconds",
    "Summary": "Took pic 3 lights in picture u can see ufo have pic's.",
    "Posted": "8/2/16"
  },
  {
    "Date": "7/7/16 21:30",
    "City": "Tucson",
    "State": "AZ",
    "Shape": "Teardrop",
    "Duration": "4 minutes",
    "Summary": "Hundreds of small flickering white lighted objects floating quickly across the sky.",
    "Posted": "7/15/16"
  },
  {
    "Date": "7/7/16 21:30",
    "City": "Tucson",
    "State": "AZ",
    "Shape": "Other",
    "Duration": "4 minutes",
    "Summary": "Star-like objects pass over Tucson.",
    "Posted": "7/8/16"
  },
  {
    "Date": "7/7/16 21:30",
    "City": "Tucson",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "1 minute",
    "Summary": "Constellation of 14-30 dim lights, 3 bright blue lights performing maneuvers.",
    "Posted": "7/15/16"
  },
  {
    "Date": "7/4/16 21:00",
    "City": "El Mirage",
    "State": "AZ",
    "Shape": "Circle",
    "Duration": "1 minutes",
    "Summary": "Round orb purple haze around it with red in the middle , moved vary quickly down and to the left and hovered there ,seen it for maybe 1",
    "Posted": "7/8/16"
  },
  {
    "Date": "7/2/16 21:03",
    "City": "Phoenix",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "~3 minutes",
    "Summary": "3 Moving Lights with Large Trails in Phoenix form a Triangle in the Night Sky",
    "Posted": "7/8/16"
  },
  {
    "Date": "6/29/16 1:01",
    "City": "Phoenix",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "~5 seconds",
    "Summary": "Please review the show of \"American Monster\" S1 / E5 \"Shooting Phoenix.\" This show has absolutely nothing to do w/ UFOs.",
    "Posted": "7/8/16"
  },
  {
    "Date": "6/27/16 20:25",
    "City": "San Tan Valley",
    "State": "AZ",
    "Shape": "Oval",
    "Duration": "5 minutes",
    "Summary": "3 iridescent orbs flyin North to South with no noise",
    "Posted": "7/8/16"
  },
  {
    "Date": "6/27/16 17:50",
    "City": "Phoenix",
    "State": "AZ",
    "Shape": "Oval",
    "Duration": "30+ seconds",
    "Summary": "Oval shaped disk w/15 degree increase towards center top; bright light w/thin beams extended to its side; shot up & disappeared.",
    "Posted": "7/8/16"
  },
  {
    "Date": "6/19/16 23:32",
    "City": "Sun City West",
    "State": "AZ",
    "Shape": "Sphere",
    "Duration": "20 seconds",
    "Summary": "Bright luminous green UFO.",
    "Posted": "6/24/16"
  },
  {
    "Date": "6/19/16 12:20",
    "City": "Green Valley",
    "State": "AZ",
    "Shape": "Cylinder",
    "Duration": "10 seconds",
    "Summary": "UFO over Green Valley, Arizona.",
    "Posted": "6/24/16"
  },
  {
    "Date": "6/17/16 20:05",
    "City": "Oro Valley",
    "State": "AZ",
    "Shape": "Sphere",
    "Duration": "2 minutes",
    "Summary": "Bright white sphere traveling east to west.",
    "Posted": "6/24/16"
  },
  {
    "Date": "6/15/16 20:00",
    "City": "Gilbert",
    "State": "AZ",
    "Shape": "Formation",
    "Duration": "20 minutes",
    "Summary": "Orbs in the sky.",
    "Posted": "3/23/18"
  },
  {
    "Date": "6/13/16 22:30",
    "City": "Phoenix",
    "State": "AZ",
    "Shape": "Circle",
    "Duration": "20 seconds",
    "Summary": "Bright circular light over North Phoenix, then disappears.",
    "Posted": "6/16/16"
  },
  {
    "Date": "6/13/16 2:00",
    "City": "Phoenix",
    "State": "AZ",
    "Shape": "Circle",
    "Duration": "3 minutes",
    "Summary": "Bright white/blue halo over Phoenix.",
    "Posted": "6/16/16"
  },
  {
    "Date": "6/12/16 23:30",
    "City": "Phoenix",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "2 seconds",
    "Summary": "Late night, on a mountain relatively close to my home, I encountered this green light streak across the sky. Heading in the north-west",
    "Posted": "6/16/16"
  },
  {
    "Date": "6/11/16 23:20",
    "City": "Peoria",
    "State": "AZ",
    "Shape": "Unknown",
    "Duration": "10 minutes",
    "Summary": "Weird maneuvers by bright lights.",
    "Posted": "6/16/16"
  },
  {
    "Date": "6/11/16 11:10",
    "City": "Laveen",
    "State": "AZ",
    "Shape": "Diamond",
    "Duration": "10-15 minutes",
    "Summary": "Weird shaped object towards South Mountain by Laveen 6-11-16.",
    "Posted": "6/16/16"
  },
  {
    "Date": "6/11/16 7:00",
    "City": "Buckeye",
    "State": "AZ",
    "Shape": "Sphere",
    "Duration": "30-45 seconds",
    "Summary": "((HOAX??)) Was standing outside at a cemetery, my whole family was there. I was looking up at planes (like I do often).",
    "Posted": "6/16/16"
  },
  {
    "Date": "6/9/16 21:00",
    "City": "Chandler",
    "State": "AZ",
    "Shape": "Fireball",
    "Duration": "20 minutes",
    "Summary": "I noticed something strange flying in the sky. It was a red circular orb. It flew around. ((anonymous report))",
    "Posted": "6/15/17"
  },
  {
    "Date": "6/6/16 4:30",
    "City": "Mohave Valley",
    "State": "AZ",
    "Shape": "Sphere",
    "Duration": "20-30 minutes",
    "Summary": "Early this morning while I was on my back porch waiting for my dogs to go number one and too,I Witnessed an orange colored orb to the w",
    "Posted": "6/10/16"
  },
  {
    "Date": "6/3/16 14:05",
    "City": "Wittmann",
    "State": "AZ",
    "Shape": "Cylinder",
    "Duration": "6 minutes",
    "Summary": "Tumbling red cylinder moving very slowly, then disappeared.",
    "Posted": "6/10/16"
  },
  {
    "Date": "6/2/16 23:00",
    "City": "Sun City",
    "State": "AZ",
    "Shape": "Formation",
    "Duration": "10 minutes",
    "Summary": "Bluish, to red/orange, formation of circle or oval, swormed and traveled",
    "Posted": "6/3/16"
  },
  {
    "Date": "6/2/16 4:00",
    "City": "Phoenix",
    "State": "AZ",
    "Shape": "Fireball",
    "Duration": "3 seconds",
    "Summary": "Gigantic fireball lit up the night sky just like it was daylight. E sky, N Phoenix. Huge contrail was left in the sky. ((meteor??))",
    "Posted": "6/3/16"
  },
  {
    "Date": "6/2/16 4:00",
    "City": "Phoenix",
    "State": "AZ",
    "Shape": "Unknown",
    "Duration": "20 seconds",
    "Summary": "It turned the Phoenix area in to full daylight....",
    "Posted": "6/3/16"
  },
  {
    "Date": "6/2/16 4:00",
    "City": "Tucson",
    "State": "AZ",
    "Shape": "Circle",
    "Duration": "2 seconds",
    "Summary": "Bright yellow pulsating light, 3 sec. And exploded into a white light.",
    "Posted": "6/3/16"
  },
  {
    "Date": "6/2/16 4:00",
    "City": "Glendale",
    "State": "AZ",
    "Shape": "Other",
    "Duration": "5 minutes",
    "Summary": "There was a bright light, multiple bass booms and then crazy trails left in the sky. ((NUFORC Note: Reported as meteor. PD))",
    "Posted": "6/3/16"
  },
  {
    "Date": "6/2/16 3:56",
    "City": "Kingman",
    "State": "AZ",
    "Shape": "Unknown",
    "Duration": "10 seconds",
    "Summary": "Driving into work I saw a sudden bright blue light almost like lighting over the mountains behind the airport. At first I thought it wa",
    "Posted": "6/3/16"
  },
  {
    "Date": "6/2/16 3:56",
    "City": "Scottsdale",
    "State": "AZ",
    "Shape": "Flash",
    "Duration": "1 second",
    "Summary": "Flash of light in the sky followed by a boom, followed by smoke trails that appear in uneven circles. ((NUFORC Note: Meteor? PD))",
    "Posted": "6/3/16"
  },
  {
    "Date": "6/2/16 3:55",
    "City": "Phoenix",
    "State": "AZ",
    "Shape": "Unknown",
    "Duration": "1 second",
    "Summary": "Bright light swell, north of Phoenix.",
    "Posted": "6/3/16"
  },
  {
    "Date": "6/2/16 3:55",
    "City": "Lakeside",
    "State": "AZ",
    "Shape": "Flash",
    "Duration": "3-4 seconds",
    "Summary": "Bright flash in sky followed by loud distant boom. ((NUFORC Note: Reported to have been a meteor. PD))",
    "Posted": "6/3/16"
  },
  {
    "Date": "6/2/16 3:45",
    "City": "Tempe",
    "State": "AZ",
    "Shape": "Fireball",
    "Duration": "30 minutes",
    "Summary": "Bright flash followed by fireball falling from sky seen over PHX INT airport restricted air space. ((NUFORC Note: Meteor?? PD))",
    "Posted": "6/3/16"
  },
  {
    "Date": "6/1/16 4:00",
    "City": "Avondale",
    "State": "AZ",
    "Shape": "Flash",
    "Duration": "4 seconds",
    "Summary": "Orange firework flare west to east that was silent. ((NUFORC Note: Probable meteor?? PD))",
    "Posted": "6/3/16"
  },
  {
    "Date": "5/30/16 21:00",
    "City": "Phoenix",
    "State": "AZ",
    "Shape": "Changing",
    "Duration": "30 minutes",
    "Summary": "Monday May 30th NE Phoenix, 7th Street and Paradise LN.",
    "Posted": "6/10/16"
  },
  {
    "Date": "5/30/16 20:35",
    "City": "Avondale",
    "State": "AZ",
    "Shape": "Oval",
    "Duration": "2 minutes",
    "Summary": "2 separate oval orange lights, not blinking, no sounds, were flying low should have heard engines, moving very slowly then disappears.",
    "Posted": "6/1/16"
  },
  {
    "Date": "5/29/16 23:30",
    "City": "Buckeye",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "30 minutes+",
    "Summary": "3 of us were in my back yard and seen a bright blue light slightly blinking and sometimes red lights in center. ((anonymous report))",
    "Posted": "6/1/16"
  },
  {
    "Date": "5/29/16 11:43",
    "City": "Scottsdale",
    "State": "AZ",
    "Shape": "Other",
    "Duration": "2-4 seconds",
    "Summary": "A shadow moving across mountain peaks which cause could not be determined.",
    "Posted": "6/1/16"
  },
  {
    "Date": "5/28/16 9:00",
    "City": "Sun City",
    "State": "AZ",
    "Shape": "Circle",
    "Duration": "1 hour",
    "Summary": "Orangish-red circular object seen north of Sun City AZ",
    "Posted": "6/1/16"
  },
  {
    "Date": "5/27/16 22:00",
    "City": "Phoenix",
    "State": "AZ",
    "Shape": "Changing",
    "Duration": "30 minutes",
    "Summary": "Friday the 27th of May at 10pm noticed a light flashing in the sky NE of Phoenix",
    "Posted": "6/1/16"
  },
  {
    "Date": "5/22/16 23:05",
    "City": "Gilbert",
    "State": "AZ",
    "Shape": "Sphere",
    "Duration": "5 minutes",
    "Summary": "Formation of lights.",
    "Posted": "5/26/16"
  },
  {
    "Date": "5/19/16 21:11",
    "City": "Tucson",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "15 seconds",
    "Summary": "To the N of Tucson saw a still light suspended in the sky. It appeared to be moving ever so slowly. ((anonymous report))",
    "Posted": "5/20/16"
  },
  {
    "Date": "5/16/16 23:30",
    "City": "Laveen",
    "State": "AZ",
    "Shape": "Disk",
    "Duration": "30 seconds",
    "Summary": "Yellow lights on Saucer spotted over the Estrella Mountains in Laveen, AZ",
    "Posted": "5/20/16"
  },
  {
    "Date": "5/14/16 20:10",
    "City": "Maricopa",
    "State": "AZ",
    "Shape": "Fireball",
    "Duration": "4 seconds",
    "Summary": "Orange orbs without noise & vanished quickly.",
    "Posted": "5/20/16"
  },
  {
    "Date": "5/11/16 19:40",
    "City": "Tucson",
    "State": "AZ",
    "Shape": "Light",
    "Duration": ">20 minutes",
    "Summary": "A bright green light surrounded by red lights hovered over NW Tucson.",
    "Posted": "5/20/16"
  },
  {
    "Date": "5/11/16 4:00",
    "City": "Payson",
    "State": "AZ",
    "Shape": "Formation",
    "Duration": "5 seconds",
    "Summary": "6 objects in formation flying North at very high rate of speed, visible with night vision only",
    "Posted": "5/20/16"
  },
  {
    "Date": "5/10/16 22:00",
    "City": "Prescott",
    "State": "AZ",
    "Shape": "Circle",
    "Duration": "6 minutes",
    "Summary": "Strange light makes 90 degree turn.",
    "Posted": "5/20/16"
  },
  {
    "Date": "5/4/16 21:00",
    "City": "Tucson",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "5 minutes",
    "Summary": "High altitude South to North soundless white lighted object.",
    "Posted": "5/6/16"
  },
  {
    "Date": "5/4/16 5:30",
    "City": "Mesa",
    "State": "AZ",
    "Shape": "Fireball",
    "Duration": "5 minutes",
    "Summary": "I saw what looked like the only cloud in the sky. It was a small smudge. The sun was rising from behind the mountains so that little sp",
    "Posted": "5/6/16"
  },
  {
    "Date": "5/3/16 12:00",
    "City": "Phoenix/Tempe",
    "State": "AZ",
    "Shape": "Disk",
    "Duration": "15 minutes",
    "Summary": "05/03/2016 UFOS OVER PHOENIX SKYHABOR AIRPORT 1. BRIGHT LIGHTS Small bright lights dancing all over skyhabor airport 12pm A. Disk shap",
    "Posted": "5/6/16"
  },
  {
    "Date": "5/1/16 21:30",
    "City": "Chandler",
    "State": "AZ",
    "Shape": "Oval",
    "Duration": "1 hour",
    "Summary": "Orange Oval near Chandler",
    "Posted": "5/6/16"
  },
  {
    "Date": "4/28/16",
    "City": "Camp Verde",
    "State": "AZ",
    "Shape": "Circle",
    "Duration": "2 minutes",
    "Summary": "Round black object in the sky by Camp Verde, AZ with no sound, just hovering.",
    "Posted": "5/6/16"
  },
  {
    "Date": "4/23/16 23:00",
    "City": "Phoenix",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "",
    "Summary": "I was going into my home i noticed a fire in the sky looked like a big shooting star i immediately started recording i told my boyfrien",
    "Posted": "4/29/16"
  },
  {
    "Date": "4/23/16 21:20",
    "City": "Phoenix",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "~10 seconds",
    "Summary": "Bright light. ((NUFORC Note: Possible flare from an Iridium satellite? PD))",
    "Posted": "4/29/16"
  },
  {
    "Date": "4/22/16 23:30",
    "City": "Green Valley",
    "State": "AZ",
    "Shape": "Circle",
    "Duration": "10 seconds",
    "Summary": "Yellow circle object bright as a Christmas tree going warp speed as a plane was coming it just vanish",
    "Posted": "4/29/16"
  },
  {
    "Date": "4/18/16 23:00",
    "City": "Peoria",
    "State": "AZ",
    "Shape": "Triangle",
    "Duration": "2 minutes",
    "Summary": "Big triangle flew over my house!",
    "Posted": "4/29/16"
  },
  {
    "Date": "4/16/16 2:17",
    "City": "Wickenburg",
    "State": "AZ",
    "Shape": "Rectangle",
    "Duration": "2 seconds",
    "Summary": "I live in an airpark a few miles northwest of the town of Wickenburg, AZ. I have a game camera set up to monitor traffic.",
    "Posted": "5/26/16"
  },
  {
    "Date": "4/12/16 10:30",
    "City": "Nelson",
    "State": "AZ",
    "Shape": "Cylinder",
    "Duration": "10 minutes",
    "Summary": "UFO observed near Nelson, NV. ((NUFORC Note: Report from retired aerospace employee. PD))",
    "Posted": "4/15/16"
  },
  {
    "Date": "4/3/16 12:20",
    "City": "Wickieup",
    "State": "AZ",
    "Shape": "Formation",
    "Duration": "3 minutes",
    "Summary": "Cluster of small white/silver objects in the daytime sky.",
    "Posted": "4/15/16"
  },
  {
    "Date": "4/2/16 21:00",
    "City": "Avondale",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "1 hour",
    "Summary": "Orangey-yellow ORBS at the Phoenix Raceway - April 2, 2016",
    "Posted": "4/15/16"
  },
  {
    "Date": "4/1/16 20:00",
    "City": "Sun City West",
    "State": "AZ",
    "Shape": "Circle",
    "Duration": "5 minutes",
    "Summary": "((HOAX??)) Large falling orb breaks into 5 smaller orbs and possible explosion.",
    "Posted": "4/15/16"
  },
  {
    "Date": "4/1/16 20:00",
    "City": "Surprise",
    "State": "AZ",
    "Shape": "Other",
    "Duration": "30 seconds",
    "Summary": "Burning plane falls from sky over LAFB in Az.",
    "Posted": "5/26/16"
  },
  {
    "Date": "4/1/16 19:30",
    "City": "Goodyear",
    "State": "AZ",
    "Shape": "Fireball",
    "Duration": "45 seconds",
    "Summary": "Fireball.",
    "Posted": "4/15/16"
  },
  {
    "Date": "3/30/16 23:00",
    "City": "Phoenix",
    "State": "AZ",
    "Shape": "Changing",
    "Duration": "5-10 minutes",
    "Summary": "Strange light or object in North Phoenix sky",
    "Posted": "4/15/16"
  },
  {
    "Date": "3/30/16 5:00",
    "City": "Surprise",
    "State": "AZ",
    "Shape": "Other",
    "Duration": "1 minute",
    "Summary": "Have video appeared middle of sky forming a cloud behind no aircraft no typical cloud... I zoomed in no aircraft in visible or flat was",
    "Posted": "4/29/16"
  },
  {
    "Date": "3/29/16 17:00",
    "City": "Surprise",
    "State": "AZ",
    "Shape": "Disk",
    "Duration": "2 minutes",
    "Summary": "Started in middle of sky...made a turn....when I closed up with camara yhe object seemed flat but invisible..I see a lit of military je",
    "Posted": "5/26/16"
  },
  {
    "Date": "3/28/16 12:30",
    "City": "Tucson",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "60 seconds",
    "Summary": "Light sphere becomes hawk.",
    "Posted": "4/1/16"
  },
  {
    "Date": "3/26/16 18:30",
    "City": "Globe",
    "State": "AZ",
    "Shape": "Rectangle",
    "Duration": "30 minutes",
    "Summary": "Lights over globe as 3-26-16",
    "Posted": "4/15/16"
  },
  {
    "Date": "3/23/16 20:18",
    "City": "Mesa",
    "State": "AZ",
    "Shape": "Teardrop",
    "Duration": 1.3,
    "Summary": "A craft over a house in East Mesa..",
    "Posted": "4/29/16"
  },
  {
    "Date": "3/18/16 20:20",
    "City": "Mesa",
    "State": "AZ",
    "Shape": "Triangle",
    "Duration": "25 seconds",
    "Summary": "Triangular shape object flying overhead maybe 50 feet was seen.",
    "Posted": "3/24/16"
  },
  {
    "Date": "3/15/16 2:40",
    "City": "Phoenix",
    "State": "AZ",
    "Shape": "Formation",
    "Duration": "15 seconds",
    "Summary": "((HOAX??)) It was semi transparent shaped like a bomarang but the right side was a little shorter. size of a small 727, silent.",
    "Posted": "3/18/16"
  },
  {
    "Date": "3/12/16 22:20",
    "City": "Scottsdale",
    "State": "AZ",
    "Shape": "Other",
    "Duration": "20 seconds",
    "Summary": "Unusually shaped object flying over North Scottsdale.",
    "Posted": "3/18/16"
  },
  {
    "Date": "3/11/16 19:30",
    "City": "Superior",
    "State": "AZ",
    "Shape": "Rectangle",
    "Duration": "30 minutes",
    "Summary": "Unknown lights in western sky of Central Arizona forming \"V\" shapes, and then \"M\" shapes.",
    "Posted": "3/18/16"
  },
  {
    "Date": "3/10/16 19:00",
    "City": "Lake Havasu City",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "2 minutes",
    "Summary": "Loud rumble flashing red light heading west disappeared.",
    "Posted": "3/18/16"
  },
  {
    "Date": "3/2/16 21:35",
    "City": "Wickieup (south of)",
    "State": "AZ",
    "Shape": "Formation",
    "Duration": "60 seconds",
    "Summary": "Four bright lights over Wickieup, AZ.",
    "Posted": "3/4/16"
  },
  {
    "Date": "3/2/16 21:10",
    "City": "Clarkdale",
    "State": "AZ",
    "Shape": "Cylinder",
    "Duration": "<10 seconds",
    "Summary": "Bright green light over Northern Arizona.",
    "Posted": "3/4/16"
  },
  {
    "Date": "3/2/16 20:00",
    "City": "Phoenix",
    "State": "AZ",
    "Shape": "Unknown",
    "Duration": "10 minutes",
    "Summary": "4 objects with one red and green light on each hovering over the freeway.",
    "Posted": "3/4/16"
  },
  {
    "Date": "3/2/16 19:41",
    "City": "Phoenix",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "1 minute",
    "Summary": "UP DATE ON 3-2-16 REPORT OF 3 BRIGHT LIGHT'S FOLLOWED BY RED LIGHT MAKING LOUD HELICOPTER LIKE NOISE.",
    "Posted": "3/11/16"
  },
  {
    "Date": "3/2/16 19:41",
    "City": "Phoenix",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "1 minute",
    "Summary": "3 Blue-whites Being Followed,By Red Blinking Light Making Loud Helicopter-Like Noise!,.",
    "Posted": "3/4/16"
  },
  {
    "Date": "3/2/16 19:35",
    "City": "Scottsdale/Northwest Mesa",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "25 minutes",
    "Summary": "5 lights seen traveling over Scottsdale/North Mesa area in uniform fashion.",
    "Posted": "3/4/16"
  },
  {
    "Date": "3/2/16 19:00",
    "City": "Scottsdale",
    "State": "AZ",
    "Shape": "Formation",
    "Duration": "7 minutes",
    "Summary": "4 lights seen in a formation.",
    "Posted": "3/4/16"
  },
  {
    "Date": "3/1/16 22:00",
    "City": "Glendale",
    "State": "AZ",
    "Shape": "Triangle",
    "Duration": "1 minutes",
    "Summary": "3 White lights over Glendale, Arizona.",
    "Posted": "3/4/16"
  },
  {
    "Date": "3/1/16 19:00",
    "City": "Parker",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "45 seconds",
    "Summary": "Two orange lights with one white light between them",
    "Posted": "5/6/16"
  },
  {
    "Date": "2/29/16 19:20",
    "City": "Chandler",
    "State": "AZ",
    "Shape": "Triangle",
    "Duration": "10 minutes",
    "Summary": "Flashing red/orange light looking like it was on fire in the sky near Warner & Dobson Rds in Chandler, Az then disappeared!!!",
    "Posted": "3/4/16"
  },
  {
    "Date": "2/29/16 1:00",
    "City": "Phoenix",
    "State": "AZ",
    "Shape": "Circle",
    "Duration": "2 hours",
    "Summary": "UFO sighting over Phoenix, AZ 02/29/16",
    "Posted": "3/4/16"
  },
  {
    "Date": "2/28/16 15:00",
    "City": "Levene",
    "State": "AZ",
    "Shape": "Triangle",
    "Duration": "25 minutes",
    "Summary": "White, shiny triangles.",
    "Posted": "3/4/16"
  },
  {
    "Date": "2/26/16 20:03",
    "City": "Chandler",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "3 minutes",
    "Summary": "Heard a loud helicopter so I knew it was military and I ran outside right after my house began to tremble. Saw a helicopter fly right o",
    "Posted": "3/4/16"
  },
  {
    "Date": "2/26/16 19:30",
    "City": "Sacaton",
    "State": "AZ",
    "Shape": "Disk",
    "Duration": "30 seconds",
    "Summary": "Was exiting Gila River Reservation, Sacaton. Noticed three lights blinking, just hovering near the desert, east of Interstate 10.",
    "Posted": "3/4/16"
  },
  {
    "Date": "2/26/16 13:11",
    "City": "Palm Springs",
    "State": "AZ",
    "Shape": "Disk",
    "Duration": "1 second",
    "Summary": "Picture taken, object cannot be explained. No reflection possible we can explain. Have photo to share",
    "Posted": "4/1/16"
  },
  {
    "Date": "2/26/16 9:06",
    "City": "Chandler",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "~2 seconds",
    "Summary": "Daytime silver streak.",
    "Posted": "2/26/16"
  },
  {
    "Date": "2/20/16 16:20",
    "City": "Peoria",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "45 seconds",
    "Summary": "Set of four lights flying in formation.",
    "Posted": "2/26/16"
  },
  {
    "Date": "2/20/16 1:04",
    "City": "Mesa",
    "State": "AZ",
    "Shape": "Triangle",
    "Duration": "1 minute",
    "Summary": "Very low, large, fast traveling lights that just disappeared quickly with no clouds in the sky. There were 3 lights in a triangle shape",
    "Posted": "2/26/16"
  },
  {
    "Date": "2/19/16 18:51",
    "City": "Estrella (west of Phoenix)",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "5 minutes",
    "Summary": "Cluster of 13 Lights over Estrella, AZ, seen for 5 minutes by two witnesses.",
    "Posted": "2/26/16"
  },
  {
    "Date": "2/19/16 18:43",
    "City": "Avondale",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "2 minutes",
    "Summary": "15-20 lights in the horizon, bright very close together, all disappeared within 5 seconds of each other. Video from Avondale.",
    "Posted": "2/26/16"
  },
  {
    "Date": "2/19/16 18:38",
    "City": "Phoenix",
    "State": "AZ",
    "Shape": "Formation",
    "Duration": "6 minutes",
    "Summary": "At first sight, we thought...the Phoenix Lights are back!!!",
    "Posted": "2/26/16"
  },
  {
    "Date": "2/19/16 18:30",
    "City": "Maricopa",
    "State": "AZ",
    "Shape": "Formation",
    "Duration": "10-15 minutes",
    "Summary": "Strange cluster of bright white lights over the southwest sky",
    "Posted": "2/26/16"
  },
  {
    "Date": "2/19/16 6:30",
    "City": "Maricopa",
    "State": "AZ",
    "Shape": "Rectangle",
    "Duration": "10 minutes",
    "Summary": "Multi light formation high in the sky",
    "Posted": "2/26/16"
  },
  {
    "Date": "2/18/16 18:44",
    "City": "Chandler",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "5 minutes",
    "Summary": "Two clusters of orange flashing/flickering objects over Chandler",
    "Posted": "2/19/16"
  },
  {
    "Date": "2/17/16 19:30",
    "City": "Wellton",
    "State": "AZ",
    "Shape": "Formation",
    "Duration": "45 minutes",
    "Summary": "Formation of bright orange lights appearing and disappearing over AZ desert.",
    "Posted": "2/26/16"
  },
  {
    "Date": "2/16/16 22:30",
    "City": "Casa Grande (near)",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "5 minutes",
    "Summary": "Bright pair of white lights south of Phoenix area.",
    "Posted": "2/26/16"
  },
  {
    "Date": "2/13/16 14:30",
    "City": "Phoenix",
    "State": "AZ",
    "Shape": "Circle",
    "Duration": "1 hour+",
    "Summary": "High altitude white disc observed.",
    "Posted": "2/19/16"
  },
  {
    "Date": "2/11/16 22:05",
    "City": "Casa Grande",
    "State": "AZ",
    "Shape": "Sphere",
    "Duration": "5 minutes",
    "Summary": "2 amber orbs seen hovering stationary, 2 more amber orbs appeared shortly after. First set disapeared followed shortly by the second se",
    "Posted": "2/19/16"
  },
  {
    "Date": "2/10/16 10:45",
    "City": "Paradise Valley",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "5 minute",
    "Summary": "Second night of two amber lights returning, flickering from exact fixed position. This time I brought a second witness.",
    "Posted": "2/11/16"
  },
  {
    "Date": "2/9/16 21:15",
    "City": "Paradise Valley",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "15 minutes",
    "Summary": "Amber light flickered into bright position over Paradise Valley, joined by second amber light, faded and returned many times",
    "Posted": "2/11/16"
  },
  {
    "Date": "2/8/16 22:00",
    "City": "Prescott",
    "State": "AZ",
    "Shape": "Other",
    "Duration": "45 minutes",
    "Summary": "My husband and I were driving home from Phoenix arizona to Prescott arizona and on the way back home we saw this red light floating acr",
    "Posted": "2/11/16"
  },
  {
    "Date": "2/7/16 21:00",
    "City": "Dewey",
    "State": "AZ",
    "Shape": "Chevron",
    "Duration": 2,
    "Summary": "Orange light going south, circling to west and disappearing up to west. About 2 minutes. Quite bright to dissappering up.",
    "Posted": "2/11/16"
  },
  {
    "Date": "2/5/16 20:15",
    "City": "Carefree",
    "State": "AZ",
    "Shape": "Oval",
    "Duration": "10 minutes",
    "Summary": "20 amber lights- erratic movement.",
    "Posted": "2/11/16"
  },
  {
    "Date": "2/5/16 19:30",
    "City": "Goodyear",
    "State": "AZ",
    "Shape": "Light",
    "Duration": "minutes",
    "Summary": "Looked like flares.",
    "Posted": "2/11/16"
  },
  {
    "Date": "2/4/16 19:30",
    "City": "Tucson",
    "State": "AZ",
    "Shape": "Sphere",
    "Duration": "20 minutes",
    "Summary": "Eight large, slow moving, noiseless orange-red spheres traveling over Tucson evening sky.",
    "Posted": "2/19/16"
  },
  {
    "Date": "2/4/16 18:40",
    "City": "Tucson",
    "State": "AZ",
    "Shape": "Sphere",
    "Duration": "1 minutes",
    "Summary": "Orb moving across Mt. Lemmon, AZ.",
    "Posted": "2/11/16"
  },
  {
    "Date": "2/4/16 6:30",
    "City": "Goodyear",
    "State": "AZ",
    "Shape": "Cigar",
    "Duration": "still active",
    "Summary": "Cigar-shaped craft, or something, in the sky to the West.",
    "Posted": "2/4/16"
  },
  {
    "Date": "2/1/16 0:00",
    "City": "Paradise Valley",
    "State": "AZ",
    "Shape": "Disk",
    "Duration": "",
    "Summary": "Blimp sized and shaped craft pulsating light spotted low in the clouds of Paradise Valley, AZ, that hit incredible speed.",
    "Posted": "2/4/16"
  }
]
