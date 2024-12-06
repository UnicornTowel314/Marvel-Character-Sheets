// Pull Occupations, Traits, Tags, and Powers data from JSON
  // Traits and Tags need "name" and "description"
  // Powers need "name", "set", "cost", "pg number", "duration", "action", "summary"
// Localstorage functionality

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

// JSON PREPARATION
const jsonUrl = "https://raw.githubusercontent.com/UnicornTowel314/Marvel-RPG-Data/refs/heads/main/properties.json?token=GHSAT0AAAAAAC3AU256ZDBDF7GHI3NUO47CZ2SPZ2A";

// OBJECTS FOR TESTING
let traitsList = [{
  id: "t0",
  name: "Test",
  description: "This is a description. It can get quite long, so I'm going to test that out here."
},
{
  id: "t1",
  name: "Test1",
  description: "This is a description. It can get quite long, so I'm going to test that out here."
}
];
let tagsList = [{
  id: "ta0",
  name: "Test",
  description: "This is a description. It can get quite long, so I'm going to test that out here."
}];
let powersList = [{
  id: "p0",
  name: "Test",
  set: "Test",
  cost: 5,
  page: 123,
  duration: "Concentration",
  action: "Standard or Reaction",
  description: "This is a description. It can get quite long, so I'm going to test that out here."
}];

// FETCH PROPERTIES
const fetchData = async () => {
  try {
    const response = await fetch(jsonUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

fetchData();

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
    originSugOccu.innerHTML = `<strong>Suggested Occupation: </strong> ${originResult["suggested occupation"]}`;
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
