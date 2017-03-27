exports.seed = function(knex, Promise) {
  const wheels = {
    common : [
      "Alchemist",
      "Almas",
      "Bender",
      "Dieci",
      "Falco",
      "Foreman",
      "Invader",
      "Lowrider",
      "Lucci",
      "Mountaineer",
      "Neptune",
      "Octavian",
      "OEM",
      "Rat Rod",
      "Spyder",
      "Stallion",
      "Stern",
      "Sunburst",
      "Tempest",
      "Tomahawk",
      "Trahere",
      "Tunica",
      "Veloce",
      "Vortex",
      "Sweet Tooth",
      "Servergate"
    ],

    exotic : [
      "Photon",
      "Looper",
      "Lobo",
      "Voltaic",
      "Discotheque",
      "Pulsus",
      "Zomba",
      "ARA-51",
      "Kalos",
      "Roulette"
    ],

    import : [
      "FSL"
    ],

    limited : [
      "Goldstone",
      "Carriage"
    ],

    premium : [
      "Cristiano",
      "Spinner",
      "Zippy",
      "Scarab",
      "Grog",
      "Ripper",
      "Batmobile",
      "Delorean Time Machine",
      "Aftershock",
      "Marauder",
      "Masamune",
      "Esper",
      "Triton",
      "Proteus",
      "Vulcan",
      "WW5SP",
      "OH5"
    ],

    rare : [
      "Asterias",
      "Zeta"
    ],

    uncommon : [
      "Rhino 2"
    ],

    very_rare : [
      "Chakram",
      "Troika",
      "Spiralis",
      "Septem"
    ]
  };
  let wheelPromises = []; 
};

// return knex('items').del()
//     .then(function () {
//       return knex('items').insert({
//         type : "Wheel",
//         name: "Alchemist",
//         rarity: "Common"
//       });
//     })
//     .then(function () {
//       return knex('items').insert({
//         type : "Wheel",
//         name: "Almas",
//         rarity: "Common"
//       });
//     })
//     .then(function () {
//       return knex('items').insert({
//         type : "Wheel",
//         name: "Almas",
//         rarity: "Common"
//       });
//     })