// Localstorage functionality
// OBJECTS FOR DISPLAYING
const origins = [
  {
    id: "o1",
    name: "Alien",
    description: "The character is not human and probably not from Earth. This origin applies if the character is not one of the three most common alien races.",
    tags: "Alien Heritage, Extreme Appearance (common)",
    traits: "",
    sugOccu: "Outsider",
    powers: ""
  },
  {
    id: "o2",
    name: "Alien: Kree",
    description: "The character is a member of the Kree. They resemble a human but are stronger and tougher. They may have blue skin, but pink is also common. If they were raised in a high-nitrogen environment, they have a hard time breathing the air on Earth.",
    tags: "Alien Heritage, Extreme Appearance (if blue-skinned)",
    traits: "Breathe Different, Enhanced Physique",
    sugOccu: "Outsider",
    powers: ""
  },
  {
    id: "o3",
    name: "Alien: Shi'ar",
    description: "The character is a member of the Shi'ar, an avian humanoid race. They resemble a human but are much stronger and have feathers instead of hair on their heads.",
    tags: "Alien Heritage, Extreme Appearance",
    traits: "Enhanced Physique",
    sugOccu: "Outsider",
    powers: ""
  },
  {
    id: "o4",
    name: "Alien: Skrull",
    description: "The character is a member of the Skrull, a reptilian humanoid race of shape-shifters. In their natural form, they have green skin, red or green eyes, pointed ears, and furrowed chins.",
    tags: "Alien Heritage, Extreme Appearance (in their natural form)",
    traits: "",
    sugOccu: "Outsider",
    powers: "Disguise, Extended Reach, Flexible Bones, Shape-shift, Slip Free"
  },
  {
    id: "o5",
    name: "Atlantean",
    description: "The character is a member of Homo mermanus, a variant race of humanity. They breathe water through gills on both sides of their neck, and they cannot breathe air for longer than ten minutes. If they live in the Atlantic Ocean, they likely have blue skin and hail from Atlantis. If they come from the Pacific Ocean, they likely have green skin and live in Lemuria.",
    tags: "Amphibious, Extreme Appearance",
    traits: "Breathe Different, Enhanced Physique",
    sugOccu: "Outsider",
    powers: "Heightened Senses, Speed Swim"
  },
  {
    id: "o6",
    name: "Deviant",
    description: "The character is a member of Homo descendus, a variant race of humanity created by Celestials. They vary a great deal, physically, coming in all sizes, shapes, colors, and textures. Each is born with a unique physical mutation, and they have the latent genetic ability to develop powers, much like mutants.Eternals are compelled to kill them.",
    tags: "Extreme Appearance, Hunted",
    traits: "",
    sugOccu: "Outsider",
    powers: ""
  },
  {
    id: "o7",
    name: "Eternal",
    description: "The character is a member of Homo immortalis, a variant race of humanity. They live by three principles: protect Celestials, protect the Machin, correct excess deviation. The character is either one of the lesser-known of the original one hundred or a new Eternal created through extraordinary means.",
    tags: "Eternally Immortal, Mahd Wy'ry",
    traits: "",
    sugOccu: "Outsider",
    powers: ""
  },
  {
    id: "o8",
    name: "High Tech",
    description: "The character's powers arise from high-tech devices that are well beyond the limits of modern-day engineering.",
    tags: "",
    traits: "Tech Reliance",
    sugOccu: "",
    powers: ""
  },
  {
    id: "o9",
    name: "High Tech: Android",
    description: "The character is an artificial person. Their body (when they have one) is made of plastic, metal, and circuitry rather than flesh and blood. Their powers come from technology embedded in their artificial body.",
    tags: "A.I., Extreme Appearance (common)",
    traits: "Tech Reliance",
    sugOccu: "Outsider",
    powers: ""
  },
  {
    id: "o10",
    name: "High Tech: Battle Suit",
    description: "The character wears a high-tech suit that grants them powers. When the battle suit is removed, the character no longer has access to the powers it grants.",
    tags: "Extreme Appearance (common when in Battle Suit)",
    traits: "Tech Reliance",
    sugOccu: "",
    powers: ""
  },
  {
    id: "o11",
    name: "High Tech: Cybernetics",
    description: "The character has high-tech, surgically embedded implants that grant them powers. These cannot be removed without great care or pain.",
    tags: "Extreme Appearance (common)",
    traits: "Tech Reliance",
    sugOccu: "",
    powers: ""
  },
  {
    id: "o12",
    name: "High Tech: Pym Particles",
    description: "The character uses Pym Particles to dramatically grow or shrink in size. After being explosed to these particles for long enough, many are able to generate them on their own.",
    tags: "",
    traits: "Tech Reliance (at first)",
    sugOccu: "",
    powers: "Grow 1 and/or Shrink 1 (at least)"
  },
  {
    id: "o13",
    name: "Inhuman",
    description: "The character is a member of Homo sapiens inhumanus, a variant race of humanity. All inhumans carry a latent gene that can be activated by Terrigen Mist. The character is one of the rare Inhumans who survived after the forced culling.",
    tags: "Inhuman Genes",
    traits: "",
    sugOccu: "",
    powers: ""
  },
  {
    id: "o14",
    name: "Magic",
    description: "The character's powers arise from supernatural means.",
    tags: "Supernatural",
    traits: "",
    sugOccu: "",
    powers: ""
  },
  {
    id: "o15",
    name: "Magic: Chaos Magic",
    description: "The character is able to use chaos magic, which allows them to bend reality to their will.",
    tags: "Chaotic, Supernatural",
    traits: "",
    sugOccu: "",
    powers: ""
  },
  {
    id: "o16",
    name: "Magic: Demonic",
    description: "The character taps into (or is cursed by) the powers of Hell. They may be a native of one of the Nine Circles of Hell or their powers might simply come from a Hellish source.",
    tags: "Cursed, Supernatural",
    traits: "",
    sugOccu: "",
    powers: ""
  },
  {
    id: "o17",
    name: "Magic: Sorcery",
    description: "The character's powers arise from the study and practice of sorcery.",
    tags: "Sorcerous, Supernatural",
    traits: "",
    sugOccu: "",
    powers: ""
  },
  {
    id: "o18",
    name: "Monstrous",
    description: "The character is some kind of monster. They may have a human form or may have once been human, but they get their powers from their unnatural monstrousness.",
    tags: "",
    traits: "Monster",
    sugOccu: "",
    powers: ""
  },
  {
    id: "o19",
    name: "Monstrous: Vampire",
    description: "This character was once alive but was embraced by a vampire and has risen from death as a vampire, too. The can transmit this magical disease to victims of their choosing. When a character becomes a vampire, they go up one rank and gain the listed tags, traits, and powers. They do not gain additional powers or traits from the increase in rank, but they gain 5 ability points and add 1 to their damage multiplier. If they have the heroic tag, they gain 1 Karma. LIMITATION: unless the character has another origin, they cannot choose other powers.",
    tags: "Alternate Forms: Bat/Mist/Wolf, Deceased, Imageless",
    traits: "Anathema: Garlic/Holy Symbols (including Holy Water)/Sunshine, Bloodthirsty, Monster, Weaknesses: Silver/Wood",
    sugOccu: "",
    powers: "Animal Communication: Bats/Rodents, Command, Healing Factor, Leech Life, Mighty 1, Sturdy 2, Telepathic Link"
  },
  {
    id: "o20",
    name: "Monstrous: Werewolf",
    description: "The character is afflicted with lycanthropy, a magical disease that causes them to take on the shape of a werewolf during the three nights of the full moon. They can transmit this disease to victims of their choosing who survive their attacks. When a character becomes a werewolf, they gain the Lunar Transformation and Alternate Form tags. In their werewolf form, they go up a Rank and gain the rest of the listed tags, traits, and powers. They don't gain any additional powers or traits from this bump in rank, but they gain 5 ability points, and +1 to their damage multiplier. If they have the Heroic tag, they add 1 to their Karma. When they return to their human form, they lose the benefits of their werewolf form. The character can switch forms voluntarily at any point except during the three nights of the full moon. On those nights, while the moon is above the horizon, the character must transfrom and is ruled by their animal nature. They can't help but hunt and attack any people or creatures they come across. LIMITATIONS: unless the character has another origin, they can't choose other powers.",
    tags: "Alternate Form: Werewolf/Wolf, Extreme Appearance (in werewolf form), Lunar Transformation",
    traits: "Berserker, Monster, Weakness: Silver",
    sugOccu: "",
    powers: "Evasion, Healing Factor, Heightened Senses, Mighty 1, Sturdy 2"
  },
  {
    id: "o21",
    name: "Mutant",
    description: "The character's powers come from them being a member of the subspecies Homo superior. They have a latent X-Gene that grants them powers, often triggered at adolescence.",
    tags: "Hounded, Krakoan, X-gene",
    traits: "",
    sugOccu: "",
    powers: ""
  },
  {
    id: "o22",
    name: "Mythic",
    description: "The character is a creature or person of myth and legend. While they may appear human, they are something else.",
    tags: "Supernatural",
    traits: "",
    sugOccu: "Outsider",
    powers: ""
  },
  {
    id: "o23",
    name: "Mythic: Asgardian",
    description: "The character is a member of the Asgardian people, resembling the Norse gods. The character can be one of the many gods who have been named throughout history, or they can be one of the lesser-known gods of Asgard. They should choose something that they are the god of.",
    tags: "Supernatural, Worshipped",
    traits: "God Heritage, Enhanced Physique",
    sugOccu: "",
    powers: ""
  },
  {
    id: "o24",
    name: "Mythic: Olympian",
    description: "The character is a member of the Olympian people, resembling the gods of Ancient Greece and Rome. The character can be one of the many gods who have been named throughout history, or they can be one of the lesser-known gods of Olympus. They should choose something that they are the god of.",
    tags: "Supernatural, Worshipped",
    traits: "God Heritage, Enhanced Physique",
    sugOccu: "",
    powers: ""
  },
  {
    id: "o25",
    name: "Special Training",
    description: "The character's powers come from long hours of practice. Their intense focus grants them abilities that would astonish most people. LIMITATION: unless the character has another origin, they can't choose powers that grant them superhuman abilities. ALLOWED POWER SETS: Martial Arts, Melee Weapons, Ranged Weapons, Shield Bearer, and Tactics. They can also choose basic powers a regular human could reasonbly have.",
    tags: "",
    traits: "Determination",
    sugOccu: "",
    powers: ""
  },
  {
    id: "o26",
    name: "Spirit of Vengeance",
    description: "The character has been possessed by a Spirit of Vengeance. Their purpose is to find sinners and impose penance. When a character becomes possessed by a Spirit of Vengeance, they gain the Alternate Form tag, which they can use voluntarily at any point. When the character takes on their Ghost Rider form, they gain access to the listed tags, traits, and powers. When they return to human form, they lose the benefits of their Ghost Rider form. They should choose the rest of their powers from the Magic: Demonic and Elemental Control: Hellfire sets. LIMITATION: The character should be at least Rank 4. Unless the character has another origin, they cannot choose other powers.",
    tags: "Alternate Form: Ghost Rider, Cursed, Supernatural",
    traits: "",
    sugOccu: "",
    powers: "Elemental Protection 2, Environmental Protection, Healing Factor, Hellfire Chains, Mighty 2, Penance Stare, Possess Vehicle, and Sense Sins"
  },
  {
    id: "o27",
    name: "Symbiote",
    description: "The character has bonded with one of the Klyntar, a race of alien symbiotes. Most of these creatures on Earth display spiderlike powers. When a character bonds with a symbiote, they gain one Rank and the listed tags, traits, and powers. Any remaining powers are often selected from the Spider-Powers set. Many symbiotes have the Disguise power. If the symbiote is Venom or one of its progeny, Spider Man can't gain any benefits from his Spider-Sense power against the bonded character.",
    tags: "",
    traits: "Anathema: Extreme Heat/Extreme Sonics",
    sugOccu: "",
    powers: "Environmental Protection, Mighty 1"
  },
  {
    id: "o28",
    name: "Unknown",
    description: "The character has developed powers but is not entirely sure how. It could be that the player or Narrator knows, but the character does not, or maybe nobody else does, either. The source of these powers may be explained in time.",
    tags: "Mysterious",
    traits: "",
    sugOccu: "",
    powers: ""
  },
  {
    id: "o29",
    name: "Weird Science",
    description: "The character's powers arose from a scientific experiment or accident that's hard, if not impossible, to reproduce. Often, they had the latent genetic potential to develop powers and were somehow exposed to the right triggers, which would have likely killed most people. These kinds of characters are sometimes called mutates.",
    tags: "",
    traits: "Weird",
    sugOccu: "",
    powers: ""
  },
  {
    id: "o30",
    name: "Weird Science: Gamma Mutate",
    description: "The character has a genetic mutation that gave them powers once they were exposed to enough gamma radiation, transforming them physically. This often gives them a monstrous appearance and changes their coloration drastically, usually to green, although some become red or even blue. They can often transform back into their original form, as well.",
    tags: "Extreme Appearance (common in gamma mutate form), Green Door, Immunity: Gamma Radiation, Radioactive",
    traits: "Weird",
    powers: ""
  }
];
const occupations = [
  {
    id: "oc1",
    name: "Adventurer",
    description: "This character focuses on having adventures. Perhaps they're independently wealthy or maybe they hire out their services.",
    tags: "Black Market Access",
    traits: "Fearless, Connections: Super Heroes or Villains"
  },
  {
    id: "oc2",
    name: "Assassin",
    description: "This character is a hired killer. They might make justifications or be picky about their targets, but the core of their occupation is ending lives.",
    tags: "Streetwise, Villainous (common)",
    traits: "Connections: Criminal, Signiture Attack"
  },
  {
    id: "oc3",
    name: "Criminal",
    description: "The character did something that put them on the wrong side of the law. They may have served time or gotten away with it. The fact they break the law doesn't necessarily make them a bad person, but law enforcement usually doesn't care about such distinctions.",
    tags: "Black Market Access, Streetwise",
    traits: "Connections: Criminal"
  },
  {
    id: "oc4",
    name: "Educator",
    description: "The character educates others. They do their best to bring the knowledge they have to other people.",
    tags: "",
    traits: "Connections: Community, Font of Information, Presence"
  },
  {
    id: "oc5",
    name: "Engineer",
    description: "The character designs and builds things to solve problems. They sometimes invent brand-new things, but mostly they take scientific research and apply it to real-world problems.",
    tags: "Lab Access",
    traits: "Gearhead, Inventor"
  },
  {
    id: "oc6",
    name: "Entertainer",
    description: "The character entertains others for a living. They aren't shy, at least when on the job, and they work hard to both gain an audience and keep them engaged.",
    tags: "",
    traits: "Famous, Presence, Public Speaking"
  },
  {
    id: "oc7",
    name: "Health Care Worker",
    description: "The character is a doctor, nurse, therapist, or other person dedicated to helping heal others. They likely have access to an office where they practice their craft.",
    tags: "",
    traits: "Clinician, First Aid"
  },
  {
    id: "oc8",
    name: "Investigator",
    description: "The character is trained to solve mysteries.",
    tags: "",
    traits: "Connections: Police, Interrogation, Investigation"
  },
  {
    id: "oc9",
    name: "Journalist",
    description: "The character works as a reporter or editor for a news organization. This includes any sort of reporting, whether TV, radio, newspaper, or online.",
    tags: "",
    traits: "Audience, Connections: Sources, Pundit"
  },
  {
    id: "oc10",
    name: "Law Enforcer",
    description: "The character works as a law enforcement officer. They have a great deal of authority inside their jurisdiction and often command respect outside of it, as well.",
    tags: "Authority, Backup",
    traits: "Interrogation, Investigation"
  },
  {
    id: "oc11",
    name: "Lawyer",
    description: "The character has a law degree and knows how to use it. They might work for a gigantic and powerful law firm, or they might have set up their own practice.",
    tags: "",
    traits: "Dealmaker, Legal Eagle, Public Speaking"
  },
  {
    id: "oc12",
    name: "Leader",
    description: "The character is the leader of a city, region, state, or nation. This includes things like being elected mayor or the hereditary king.",
    tags: "Authority, Powerful",
    traits: "Presence"
  },
  {
    id: "oc13",
    name: "Military",
    description: "The characters serves (or once served) in a military organization and relies on that training. They can sometimes call on their fellow soldiers for help. If they are on active duty, their time is often not their own, and they should take the tag Obligation: Duty.",
    tags: "",
    traits: "Battle Ready, Connections: Military, Situational Awareness"
  },
  {
    id: "oc14",
    name: "Outsider",
    description: "The character comes from another planet, dimension, or time and is not familiar with how things work on this Earth. They may have had another occupation back where they came from, but it's not generally applicable here.",
    tags: "",
    traits: "Connections: Outsiders, Fresh Eyes, Stranger"
  },
  {
    id: "oc15",
    name: "Scientist",
    description: "The character solves problems by means of scientific research. They are often among the smartest people in the world, and other heroes turn to them for their expertise.",
    tags: "Lab Access",
    traits: "Inventor, Scientific Expertise"
  },
  {
    id: "oc16",
    name: "Spy",
    description: "The character is an expert in espionage. They served as a spy for a nation or corporation and know how to find things out about people and organizations.",
    tags: "Black Market Access",
    traits: "Connections: Espionage, Leverage"
  },
  {
    id: "oc17",
    name: "Student",
    description: "The character attends school or college on a full-time basis. What they study or focus on is up to them and their school. Most people start out with this occupation, but they move onto something new when they graduate. If this happens, select a new occupation to replace this one.",
    tags: "Mentor, Obligation: School",
    traits: "Quick Learner"
  },
  {
    id: "oc18",
    name: "Tycoon",
    description: "The character is wildly wealthy and well-known. They want for nothing, and they make a splash wherever they go. They get invited to the best parties and let into all the VIP sections.",
    tags: "Rich",
    traits: "Connections: Celebrities, Famous"
  }
];
const traitsList = [];
const tagsList = [];
const powersList = [];

// IDENTITY VARIABLES
const originInput = document.getElementById("origin");
const originDesc = document.getElementById("origin-description");
const originTags = document.getElementById("origin-tags");
const originTraits = document.getElementById("origin-traits");
const originPowers = document.getElementById("origin-powers");
const originSugOccu = document.getElementById("origin-suggest-occupation");
const occupInput = document.getElementById("occupation");
const occuDesc = document.getElementById("occupation-description");
const occuTags = document.getElementById("occupation-tags");
const occuTraits = document.getElementById("occupation-traits");

// PHYSICAL TRAITS VARIABLES
const initMod = document.getElementById("init-mod");
const currHealth = document.getElementById("curr-health");
const maxHealth = document.getElementById("max-health");
const currFocus = document.getElementById("curr-focus");
const maxFocus = document.getElementById("max-focus");
const speed = document.getElementById("speed");
const run = document.getElementById("run");
const climb = document.getElementById("climb");
const swim = document.getElementById("swim");

// TRAITS
const traitInput = document.getElementById("trait-select");
const traitDelInput = document.getElementById("traits-delete");
const traitDisplay = document.getElementById("traits-display");

// TAGS
const tagInput = document.getElementById("tag-select");
const tagDelInput = document.getElementById("tags-delete");
const tagDisplay = document.getElementById("tags-display");

// ABILITIES
const meleeAb = document.getElementById("melee");
const meleeDef = document.getElementById("melee-def");
const meleeNC = document.getElementById("melee-non-com");
const agilityAb = document.getElementById("agility");
const agilityDef = document.getElementById("agility-def");
const agilityNC = document.getElementById("agility-non-com");
const resilienceAb = document.getElementById("resilience");
const resilienceDef = document.getElementById("resilience-def");
const resilienceNC = document.getElementById("resilience-non-com");
const vigilanceAb = document.getElementById("vigilance");
const vigilanceDef = document.getElementById("vigilance-def");
const vigilanceNC = document.getElementById("vigilance-non-com");
const egoAb = document.getElementById("ego");
const egoDef = document.getElementById("ego-def");
const egoNC = document.getElementById("ego-non-com");
const logicAb = document.getElementById("logic");
const logicDef = document.getElementById("logic-def");
const logicNC = document.getElementById("logic-non-com");

// DAMAGE
const meleeDmg = document.getElementById("melee-dmg");
const meleeMod = document.getElementById("melee-modifier");
const agilityDmg = document.getElementById("agility-dmg");
const agilityMod = document.getElementById("agility-modifier");
const egoDmg = document.getElementById("ego-dmg");
const egoMod = document.getElementById("ego-modifier");
const logicDmg = document.getElementById("logic-dmg");
const logicMod = document.getElementById("logic-modifier");

// POWERS
const powersInput = document.getElementById("powers-select");
const powersDelInput = document.getElementById("powers-delete");
const powerDisplay = document.getElementById("powers-display");

// BUTTONS
const idSubmit = document.getElementById("id-submit");
const phTraitsSubmit = document.getElementById("physical-traits-submit");
const abilitySubmit = document.getElementById("ability-submit");
const dmgSubmit = document.getElementById("dmg-submit");
const notesSubmit = document.getElementById("notes-submit");
const healthInc = document.getElementById("health-inc");
const healthDec = document.getElementById("health-dec");
const focusInc = document.getElementById("focus-inc");
const focusDec = document.getElementById("focus-dec");
const addTrait = document.getElementById("add-trait");
const delTrait = document.getElementById("delete-trait");
const addTag = document.getElementById("add-tag");
const delTag = document.getElementById("delete-tag");
const addPower = document.getElementById("add-power");
const delPower = document.getElementById("delete-power");

// ARRAYS FOR RENDERING
let traits = [];
let tags = [];
let powers = [];
let traitsDelList = [];
let tagsDelList = [];
let powersDelList = [];

// FUNCTIONS FOR UPDATING OUTPUT ELEMENTS
const oneToOneValues = (input, output) => {
  output.innerText = input.value;
}

const modifyValues = (input, output) => {
  let modVal = parseInt(input.value) + 10;
  output.innerText = modVal;
}

// FUNCTIONS FOR DISPLAYING ORIGIN, OCCUPATION, TAGS, TRAITS, AND POWERS
const displayOrigin = () => {
  const originResult = origins.find(obj => obj.id == originInput.value);
  if (originResult) {
    originDesc.innerText = originResult.description;
    originTags.innerHTML = `<strong>Tags: </strong> ${originResult.tags}`;
    originTraits.innerHTML = `<strong>Traits: </strong> ${originResult.traits}`;
    originPowers.innerHTML = `<strong>Powers: </strong> ${originResult.powers}`;
    originSugOccu.innerHTML = `<strong>Suggested Occupation: </strong> ${originResult.sugOccu}`;
  }
}

const displayOccu = () => {
  const occuResults = occupations.find(obj => obj.id == occupInput.value);
  if (occuResults) {
    occuDesc.innerText = occuResults.description;
    occuTags.innerHTML = `<strong>Tags: </strong> ${occuResults.tags}`;
    occuTraits.innerHTML = `<strong>Traits: </strong> ${occuResults.traits}`;
  }
}

const addTraits = () => {
  const traitResults = traitsList.find(obj => obj.id == traitInput.value);
  let traitsDis = "";
  let traitsDel = "";

  if (traitResults) {
    traits.push(traitResults);
    traitsDelList.push(traitResults);

    for (let i = 0; i < traits.length; i++) {
      traitsDis += `
      <li>
        <aside>
          <details>
            <summary>${traits[i].name}</summary>
            <p>${traits[i].description}</p>
          </details>
        </aside>
      </li>
      `;
    }

    for (let i = 0; i < traitsDelList.length; i++) {
      traitsDel += `
        <option value="${traitsDelList[i].id}">${traitsDelList[i].name}</option>
      `;
    }

    traitDisplay.innerHTML = traitsDis;
    traitDelInput.innerHTML += traitsDel;
  }
}

const addTags = () => {
  const tagResults = tagsList.find(obj => obj.id == tagInput.value);
  let tagsDis = "";
  let tagsDel = "";

  if (tagResults) {
    tags.push(tagResults);
    tagsDelList.push(tagResults);

    for (let i = 0; i < tags.length; i++) {
      tagsDis += `
        <li>
          <aside>
            <details>
              <summary><strong>${tags[i].name}</strong></summary>
              <p>${tags[i].description}</p>
            </details>
          </aside>
        </li>
      `;
    }

    for (let i = 0; i < tagsDelList.length; i++) {
      tagsDel += `
        <option value="${tagsDelList[i].id}">${tagsDelList[i].name}</option>
      `;
    }

    tagDisplay.innerHTML = tagsDis;
    tagDelInput.innerHTML += tagsDel;
  }
}

const addPowers = () => {
  const powerResults = powersList.find(obj => obj.id == powersInput.value);
  let powersDis = "";
  let powersDel = "";

  if (powerResults) {
    powers.push(powerResults);
    powersDelList.push(powerResults);

    for (let i = 0; i < powers.length; i++) {
      powersDis += `
        <li>
          <p><strong>Power: </strong>${powers[i].name}</p>
          <p><strong>Set: </strong>${powers[i].set}</p>
          <p><strong>Cost: </strong>${powers[i].cost}</p>
          <p><strong>Page #: </strong>${powers[i].page}</p>
          <p><strong>Duration: </strong>${powers[i].duration}</p>
          <p><strong>Action: </strong>${powers[i].action}</p>
          <aside>
            <details>
              <summary><strong>Summary</strong></summary>
              <p>${powers[i].description}</p>
            </details>
          </aside>
        </li>
      `;
    }

    for (let i = 0; i < powersDelList.length; i++) {
      powersDel += `
        <option value="${powers[i].id}">${powers[i].name}</option>
      `;
    }

    powerDisplay.innerHTML = powersDis;
    powersDelInput.innerHTML += powersDel;
  }
}

// FUNCTIONS FOR REMOVING TRAITS, TAGS, AND POWERS
const deleteTrait = () => {
  const traitDelResults = traits.find(obj => obj.id == traitDelInput.value);
  let traitsDis = "";
  let traitsDel = "";

  if (traitDelResults) {
    const indexToRemove = traits.findIndex(item => item.id == traitDelResults.id);
    traits.splice(indexToRemove, 1);
    traitsDelList.splice(indexToRemove, 1);
    
    for (let i = 0; i < traits.length; i++) {
      traitsDis += `
      <li>
        <aside>
          <details>
            <summary>${traits[i].name}</summary>
            <p>${traits[i].description}</p>
          </details>
        </aside>
      </li>
      `;
    }

    traitDelInput.innerHTML = `
      <option value="" disabled selected>Choose trait to delete</option>
    `;

    for (let i = 0; i < traitsDelList.length; i++) {
      traitsDel += `
        <option value="${traitsDelList[i].id}">${traitsDelList[i].name}</option>
      `;
    }

    traitDisplay.innerHTML = traitsDis;
    traitDelInput.innerHTML += traitsDel;
  }
}

const deleteTag = () => {
  const tagDelResults = tags.find(obj => obj.id == tagDelInput.value);
  let tagsDis = "";
  let tagsDel = "";

  if (tagDelResults) {
    const indexToRemove = tags.findIndex(item => item.id == tagDelResults.id);
    tags.splice(indexToRemove, 1);
    tagsDelList.splice(indexToRemove, 1);
    
    for (let i = 0; i < tags.length; i++) {
      tagsDis += `
      <li>
        <aside>
          <details>
            <summary>${tags[i].name}</summary>
            <p>${tags[i].description}</p>
          </details>
        </aside>
      </li>
      `;
    }

    tagDelInput.innerHTML = `
      <option value="" disabled selected>Choose tag to delete</option>
    `;

    for (let i = 0; i < tagsDelList.length; i++) {
      tagsDel += `
        <option value="${tagsDelList[i].id}">${tagsDelList[i].name}</option>
      `;
    }

    tagDisplay.innerHTML = tagsDis;
    tagDelInput.innerHTML += tagsDel;
  }
}

const deletePower = () => {
  const powerDelResults = powersList.find(obj => obj.id == powersDelInput.value);
  let powersDis = "";
  let powersDel = "";

  if (powerDelResults) {
    const indexToRemove = powers.findIndex(item => item.id == powerDelResults.id);
    powers.splice(indexToRemove, 1);
    powersDelList.splice(indexToRemove, 1);

    for (let i = 0; i < powers.length; i++) {
      powersDis += `
        <li>
          <p><strong>Power: </strong>${powers[i].name}</p>
          <p><strong>Set: </strong>${powers[i].set}</p>
          <p><strong>Cost: </strong>${powers[i].cost}</p>
          <p><strong>Page #: </strong>${powers[i].page}</p>
          <p><strong>Duration: </strong>${powers[i].duration}</p>
          <p><strong>Action: </strong>${powers[i].action}</p>
          <aside>
            <details>
              <summary><strong>Summary</strong></summary>
              <p>${powers[i].description}</p>
            </details>
          </aside>
        </li>
      `;
    }

    powersDelInput.innerHTML = `
      <option value="" disabled selected>Choose power to delete</option>
    `;

    for (let i = 0; i < powersDelList.length; i++) {
      powersDel += `
        <option value="${powers[i].id}">${powers[i].name}</option>
      `;
    }
    
    powerDisplay.innerHTML = powersDis;
    powersDelInput.innerHTML += powersDel;
  }
}

// EVENT LISTENERS
phTraitsSubmit.addEventListener("click", (e) => {
  e.preventDefault;
  oneToOneValues(maxHealth, currHealth);
  oneToOneValues(maxFocus, currFocus);

  // Add values of form to localStorage
});

abilitySubmit.addEventListener("click", (e) => {
  // Melee
  oneToOneValues(meleeAb, meleeNC);
  oneToOneValues(meleeAb, meleeMod);
  modifyValues(meleeAb, meleeDef);
  // Agility
  oneToOneValues(agilityAb, agilityNC);
  oneToOneValues(agilityAb, agilityMod);
  oneToOneValues(agilityAb, initMod);
  modifyValues(agilityAb, agilityDef);
  // Resilience
  oneToOneValues(resilienceAb, resilienceNC);
  modifyValues(resilienceAb, resilienceDef);
  // Vigilance
  oneToOneValues(vigilanceAb, vigilanceNC);
  modifyValues(vigilanceAb, vigilanceDef);
  // Ego
  oneToOneValues(egoAb, egoNC);
  oneToOneValues(egoAb, egoMod);
  modifyValues(egoAb, egoDef);
  // Logic
  oneToOneValues(logicAb, logicNC);
  oneToOneValues(logicAb, logicMod);
  modifyValues(logicAb, logicDef);

  // Add values from form to localStorage
});

idSubmit.addEventListener("click", (e) => {
  e.preventDefault;
  displayOrigin();
  displayOccu();

  // Add values of form to localStorage
});

addTrait.addEventListener("click", (e) => {
  e.preventDefault;
  traitDelInput.innerHTML = `
    <option value="" disabled selected>Choose trait to delete</option>
  `;
  addTraits();
});

addTag.addEventListener("click", (e) => {
  e.preventDefault;
  tagDelInput.innerHTML = `
    <option value="" disabled selected>Choose tag to delete</option>
  `;
  addTags();
});

addPower.addEventListener("click", (e) => {
  e.preventDefault;
  powersDelInput.innerHTML = `
    <option value="" disabled selected>Choose power to delete</option>
  `;

  addPowers();
});

delTrait.addEventListener("click", (e) => {
  e.preventDefault;
  deleteTrait();
})

delTag.addEventListener("click", (e) => {
  e.preventDefault;
  deleteTag();
})

delPower.addEventListener("click", (e) => {
  e.preventDefault;
  deletePower();
});

healthInc.addEventListener("click", (e) => {
  e.preventDefault;
  let health = parseInt(currHealth.textContent);
  let healthMax = parseInt(maxHealth.value);

  if (health < healthMax) {
    health++;
    currHealth.innerText = health;
  }
});

focusInc.addEventListener("click", (e) => {
  e.preventDefault;

  let focus = parseInt(currFocus.textContent);
  let focusMax = parseInt(maxFocus.value);

  if (focus < focusMax) {
    focus++;
    currFocus.innerText = focus;
  }
});

healthDec.addEventListener("click", (e) => {
  e.preventDefault;
  let health = parseInt(currHealth.textContent);

  if (health > 0) {
    health--;
    currHealth.innerText = health;
  }
});

focusDec.addEventListener("click", (e) => {
  e.preventDefault;

  let focus = parseInt(currFocus.textContent);

  if (focus > 0) {
    focus--;
    currFocus.innerText = focus;
  }
});
