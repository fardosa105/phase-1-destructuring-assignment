// Declare animal sounds using destructuring
const animalSounds = {
  moo: "cow",
  neigh: "horse",
  baa: "sheep",
  cluck: "chicken",
  oink: "pig"
};
const { moo, neigh, baa, cluck, oink } = animalSounds;

// Declare animal names using destructuring
const animalNames = {
  bessie: "cow",
  dolly: "sheep",
  babe: "pig",
  little: "chicken"
};
const { bessie, dolly, babe, little } = animalNames;

// Declare animal colors using destructuring
const animalColors = {
  blackAndWhite: "cow",
  black: "sheep",
  pink: "pig"
};
const { blackAndWhite, black, pink } = animalColors;

// Declare rainbow colors using destructuring
const rainbowColors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
const [red, orange, yellow, green, blue, indigo, violet] = rainbowColors;

// Declare rainbow color initials using destructuring
const [r, o, y, g, b, i, v] = rainbowColors;

// Declare indigo using destructuring
const { 5: indg } = rainbowColors;

// Declare muppet variables using destructuring
const muppet = {
  muppetName: "Miss Piggy",
  color: "pink",
  song: "Never Before, Never Again",
  song2: "Moving Right Along",
  song3: "The Muppet Show Theme",
  song4: "I Hope That Something Better Comes Along",
  job: "Cast member of The Muppet Show",
  partner: "Kermit"
};

const { muppetName, color, song, song2, song3, song4, job, partner } = muppet;
const { song2: songTwo, song4: songFour } = muppet;

// Declare characters for nested destructuring
const characters = {
  kermit: {
    job: "Host of The Muppet Show",
    partner: "Miss Piggy"
  }
};

const { kermit: { job: nestedJob, partner: nestedPartner } } = characters;