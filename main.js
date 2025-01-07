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
const traitsList = [
  {
    id: "t1",
    name: "Abrasive",
    description: "The character rubs people the wrong way. They have trouble on Ego checks to persuade someone to help them. They have edge when trying to make Ego checks to intimidate someone."
  },
  {
    id: "t2",
    name: "Anathema",
    description: "The character suffers direct home when exposed to a particular substance. They can't voluntarily enter the same space with it. If touched by it, they instantly suffer the damage of a Rank 3 attack roll that automatically succeeds. This continues each turn until they are separated from the substance or are killed or destroyed. This damage ignores all damage reduction and can't be healed by their healing factor."
  },
  {
    id: "t3",
    name: "Audience",
    description: "Many people follow the character's work and treat them with the respect they deserve. The character can make an Ego check to persuade their audience to provide help in the form of information or resources."
  },
  {
    id: "t4",
    name: "Battle Ready",
    description: "The character is always mentally prepared for any sort of trouble to start. Add +30 Focus."
  },
  {
    id: "t5",
    name: "Beguiling",
    description: "The character has an edge when making an Ego check to persuade someone who could be attracted to them."
  },
  {
    id: "t6",
    name: "Berserker",
    description: "The character often loses control of their temper. Any time they take physical damage, they must make an Ego check with a TN equal to the amount of damage done. On a fail, they go berserk and must charge full speed into combat with the enemy who hurt them. In this state, he have an edge on all close attacks and add +2 to their Melee, Resilience, and Ego defenses and -2 from their Agility defense. They also can't use ranged weapons. If the character defeats the enemy who hurt them, they must then charge to attack the next closest foe. At the end of their turn, they lose 5 Focus. When their Focus is reduced to the point they couldn't voluntarily spend Focus, or if there are no enemies in sight, the berserk state automatically ends."
  },
  {
    id: "t7",
    name: "Big",
    description: "The character's size is big, which applies -1 to their Melee and Agility defenses, adds +1 to their Run Speed, and increases their reach to 2. They still occupy a single space."
  },
  {
    id: "t8",
    name: "Bloodthirsty",
    description: "The character likes hurting people-even killing them. After they knock someone unconscious, they must make a Challenging Ego check to keep from continuing to attack them until they're dead. A character with this trait can't take the Heroic tag."
  },
  {
    id: "t9",
    name: "Breathe Different",
    description: "The character cannot breathe Earth's air for long. They lose 1 point of Health for every minute they do not have some sort of assistance to allow them to breathe properly."
  },
  {
    id: "t10",
    name: "Clinician",
    description: "The character has an edge on Logic checks to determine what is medically wrong with someone they examine."
  },
  {
    id: "t11",
    name: "Clueless",
    description: "The character tends to shut out things they're not entirely focused on. They have trouble on any Vigilance checks to spot hidden or invisible things. Enemies have an edge on Agility checks to sneak near or past them."
  },
  {
    id: "t12",
    name: "Combat Expert",
    description: "The character knows how to handle themselves better than most. They have an edge on Melee attacks against enemies of Rank 1."
  },
  {
    id: "t13",
    name: "Combat Reflexes",
    description: "The character can react quickly in combat. This grants them one additional reaction each turn."
  },
  {
    id: "t14",
    name: "Connections",
    description: "The character knows someone with access to and knowledge of a particular field. By making an Ego check, the character can call on their contact to provide help in the form of clues, information or resources. This trait can b e selected multiple times, using many different types. These include Celebrities, Community, Criminal, Espionage, Military, Outsiders, Police, Professional, Sources, Super Heroes and so on."
  },
  {
    id: "t15",
    name: "Dealmaker",
    description: "The character is skilled at the art of negotiation. They have an edge on action checks that have to do with making deals."
  },
  {
    id: "t16",
    name: "Determination",
    description: "The character never gives up, even when they feel like they're at their worst. While demoralized, they do not gain trouble on all actions, though they still cannot maintain concentration or spend further Focus."
  },
  {
    id: "t17",
    name: "Eidetic Memory",
    description: "The character rarely forgets anything. If their player forgets something, they can ask the Narrator to remind them."
  },
  {
    id: "t18",
    name: "Enduring Constitution",
    description: "The character can function for up to 48 hours without sleep and has an edge on Resilience checks to overcome fatigue or weariness."
  },
  {
    id: "t19",
    name: "Enhanced Physique",
    description: "The character is stronger than regular humans. Treat them as one size bigger for lifting, carrying, swinging and throwing things. This does not stack with other factors."
  },
  {
    id: "t20",
    name: "Extra Occupation",
    description: "The character has a busy life and has done all sorts of things. They can choose another occupation."
  },
  {
    id: "t21",
    name: "Extraordinary Origin",
    description: "The character has an additional origin. This trait can be selected multiple times, but each time must be cleared with the Narrator. Take care to make sure that the origins make some kind of sense when combined together."
  },
  {
    id: "t22",
    name: "Famous",
    description: "The character is widely known-at least among a certain group of people or a population. They have an edge when making an Ego check to persuade someone who thinks favorably of them. They have trouble when making an Ego check to persuade someone who dislikes them. If the character has a secret identity, this trait works for only one of their identities. However, it can be taken multiple times for multiple identities."
  },
  {
    id: "t23",
    name: "Fearless",
    description: "The character is extremely brave. They have an edge on any action checks required to deal with fear."
  },
  {
    id: "t24",
    name: "First Aid",
    description: "The character knows how to administer first aid. They have an edge on Logic checks to stop bleeding."
  },
  {
    id: "t25",
    name: "Font of Information",
    description: "The character has an edge on Logic checks having to do with knowledge."
  },
  {
    id: "t26",
    name: "Free Running",
    description: "The character has an edge on Agility checks made to perform acrobatics during a movement action."
  },
  {
    id: "t27",
    name: "Fresh Eyes",
    description: "The character has their own way of doing things. This often makes them seem strange to those around them, but it means they can bring new perspectives to existing issues. They have an edge on Logic checks when faced with something for the first time."
  },
  {
    id: "t28",
    name: "Gearhead",
    description: "The character knows their way around machines. They have an edge on Logic checks to figure out how any machine works."
  },
  {
    id: "t29",
    name: "Glibness",
    description: "The character can strike up a conversation with anyone at any time and can often convince them to lend a hand. They have an edge on Ego checks to persuade characters they are speaking to for the first time."
  },
  {
    id: "t30",
    name: "God Heritage",
    description: "The character, or at least one of their ancestors, is a god. Pick something that they are the god of. They cannot generally be the god of something that's already been claimed by someone else in their pantheon. The character has an edge when dealing with something that they are the god of. RESTRICTION: This trait can be selected only by characters with a mythic origin and an attachment to a particular pantheon, like Asgardian or Olympian."
  },
  {
    id: "t31",
    name: "Gullible",
    description: "The character is easy to fool. People lying to them have an edge on their Ego checks to persuade the character of something."
  },
  {
    id: "t32",
    name: "Honest",
    description: "The character is a terrible liar. They have trouble any time they make an Ego check that involves telling a lie. However, they have an edge on any friendly  ego (persuasion) checks in which they're truthful."
  },
  {
    id: "t33",
    name: "Interrogation",
    description: "The character knows how to ask the right questions in the right way. They have an edge on Ego or Logic checks made when asking questions."
  },
  {
    id: "t34",
    name: "Inventor",
    description: "The character is good at coming up with solutions on the fly. They have an edge on Logic checks when creating or repairing things."
  },
  {
    id: "t35",
    name: "Investigation",
    description: "The character is an expert investigator. They have an edge on Vigilance checks to spot clues and on Logic checks related to interpreting clues. If they have access to a forensics lab at the time, they gain a second edge on such checks."
  },
  {
    id: "t36",
    name: "Iron Will",
    description: "Enemies have trouble on Ego attacks to control the character's mind or influence their behavior. Also, the character gains an edge on Ego checks to break free of mind control or other compulsions."
  },
  {
    id: "t37",
    name: "Legal Eagle",
    description: "The character knows the laws of their homeland and can help others navigate them. They have an edge on Logic checks when dealing with legalities."
  },
  {
    id: "t38",
    name: "Leverage",
    description: "The character is good at figuring out what people want and using it against them. They have an edge on Logic checks to investigate people and on Ego checks to persuade people they've investigated."
  },
  {
    id: "t39",
    name: "Loner",
    description: "The character does not play well with others. They cannot be given an edge via assistance by someone who is not a teammate."
  },
  {
    id: "t40",
    name: "Monster",
    description: "The character is some kind of monster, often of a type spoken of in legend. They have an edge whenever they attempt to intimidate someone."
  },
  {
    id: "t41",
    name: "Out of Shape",
    description: "The character is in poor physical condition. They are considered one size smaller for the purposes of lifting, carrying, swinging and throwing things."
  },
  {
    id: "t42",
    name: "Piloting",
    description: "The character knows how to operate vehicles of all kinds. They have an edge on Agility checks triggered when piloting or driving a vehitcle during a movement action. This applies to cars, boats, aircraft and so on."
  },
  {
    id: "t43",
    name: "Presence",
    description: "The character knows how to command attention on demand. They have an edge on Ego checks that involve getting people to pay attention to them or to voluntarily do things for them."
  },
  {
    id: "t44",
    name: "Public Speaking",
    description: "The character knows how to get the attention of a crowd. They have an edge on Ego checks when attempting to persuade groups."
  },
  {
    id: "t45",
    name: "Pundit",
    description: "The character knows how to break news items and put them into context to craft a story around them. They have an edge on Ego or Logic rolls made when giving their opinion via media."
  },
  {
    id: "t46",
    name: "Quick Learner",
    description: "If the character fails an action check, they gain an edge on the check if they try the same action again on their next turn."
  },
  {
    id: "t47",
    name: "Scientific Expertise",
    description: "The character has extensive scientific training. They have an edge on Logic checks made when dealing with scientific research. If they have access to an appropriate lab at the time, they gain a second edge on such checks."
  },
  {
    id: "t48",
    name: "Signature Attack",
    description: "The character is known for favoring a particular kind of weapon or attack power. They have an edge when making attacks that way. This trait can be taken more than once, but each time must be with a different kind of weapon or attack power."
  },
  {
    id: "t49",
    name: "Situational Awareness",
    description: "The character is trained to always keep an eye out for trouble. They have an edge on initiative checks."
  },
  {
    id: "t50",
    name: "Skeptical",
    description: "The character is hard to fool. People lying to them have trouble on their Ego checks to persuade the character of something."
  },
  {
    id: "t51",
    name: "Small",
    description: "The character's size is small, which adds+ 1 to their Me lee and Agility defenses and takes -1 from their Run Speed."
  },
  {
    id: "t52",
    name: "Sneaky",
    description: "The character has an edge on Agility checks when sneaking around. Enemies have trouble on Vigilance checks to detect the character when the character is invisible or hiding."
  },
  {
    id: "t53",
    name: "Stranger",
    description: "The character doesn't understand local customs. They have trouble on checks made when trying to decipher such things or when trying to pass themselves off as a local."
  },
  {
    id: "t54",
    name: "Surprising Power",
    description: "The character can choose a power they normally wouldn't be able to use. The character will still need to have any prerequisite powers, but they can ignore rank and origin requirements. This trait can be selected multiple times."
  },
  {
    id: "t55",
    name: "Tech Reliance",
    description: "The character relies on technology for powers. When they take damage that would render them unconscious, they can instead choose to lose all of their technology-related powers and remain conscious with 1 point of Health remaining. Assuming the character has access to parts and tools, lost powers can be repaired after a battle."
  },
  {
    id: "t56",
    name: "Weakness",
    description: "The character suffers an unusual amount of harm from certain substances. Any attack made with that substance ignores all inherent damage reduction the character has and cannot be healed by their Healing Factor."
  },
  {
    id: "t57",
    name: "Weird",
    description: "The character has something weird (or even wonderful) about them. This causes people to have strong reactions to them, both good and bad. They have an edge on all Ego checks to persuade people inclined to like them and trouble on all Ego checks against people inclined to dislike them."
  }
];
const tagsList = [
  {
    id: "ta1",
    name: "A.I.",
    description: "The character possesses an artificial intelligence in a computerized mind. Their digital nature means that copies or backups can be made of their mind and can even be transferred into other compatible forms."
  },
  {
    id: "ta2",
    name: "Alien Heritage",
    description: "The character-or at least one of their ancestors-is not from Earth. Pick an alien race that they belong to. If they were not raised on Earth, they should consider taking the Outsider occupation."
  },
  {
    id: "ta3",
    name: "Alternate Form",
    description: "The character can change from their regular human form into another form and back. When in either form, the character can only access powers assigned to that form. In most cases, this means that the character can use powers only when in their alternate form. This tag applies to characters that switch from one humanoid form to another. It also applies to characters that have inhuman forms."
  },
  {
    id: "ta4",
    name: "Amphibious",
    description: "The character can breathe just fine underwater and can see and hear well in it too."
  },
  {
    id: "ta5",
    name: "Auditory Issues",
    description: "The character has trouble hearing that can range from partial to full deafness."
  },
  {
    id: "ta6",
    name: "Authority",
    description: "The character has a legal authority of some kind. This tag can be selected multiple times if appropriate."
  },
  {
    id: "ta7",
    name: "Backup",
    description: "The character is part of an organization that they can call for immediate backup at any time."
  },
  {
    id: "ta8",
    name: "Black Market Access",
    description: "The character knows how and where they can buy and sell hard-to-find and potentially illegal things."
  },
  {
    id: "ta9",
    name: "Chaotic",
    description: "The character has been affected by the chaos lord Chthon."
  },
  {
    id: "ta10",
    name: "Convict",
    description: "The character has been convicted of a crime, which is reflected on their record."
  },
  {
    id: "ta11",
    name: "Cursed",
    description: "Willingly or not, the character is affiliated with Hell. This can open them up to all sorts of nefarious plots and plans."
  },
  {
    id: "ta12",
    name: "Deceased",
    description: "The character is technically dead-although presumably still able to interact with the rest of the world in some way."
  },
  {
    id: "ta13",
    name: "Dependents",
    description: "The character has young children, elderly relatives or others who rely on them. They can't just abandon these people and must check on them and help care for them on a regular basis."
  },
  {
    id: "ta14",
    name: "Enemy",
    description: "There's someone out there who has sworn to defeat the character. The enemy is of at least the same rank as the character and is obsessed with bringing them down. This tag can be taken multiple times, but it should be reserved for truly obsessed foes."
  },
  {
    id: "ta15",
    name: "Eternally Immortal",
    description: "The character does not age and could theoretically live forever. If the character is killed, they can be brought back to life in the Activation Chamber found in the Exclusion, an Eternal base located beneath the South Pole. To make this happen, the Activation Chamber sacrifices the life of a random human anywhere on Earth. RESTRICITON: for Eternals only."
  },
  {
    id: "ta16",
    name: "Extreme Appearance",
    description: "The character looks very different than the average person (wherever they happen to be) and cannot easily hide their identity. When this tag appears in origins in this chapter, it may give other useful information, like whether an extreme appearance is common."
  },
  {
    id: "ta17",
    name: "Green Door",
    description: "After being killed, the character can come back to life by passing through the Green Door, a portal that connects a part of the afterlife to Earth. This makes them effectively immortal. RESTRICTION: for gamma mutates only."
  },
  {
    id: "ta18",
    name: "Headquarters",
    description: "The character has a base, cave or lair they can use to recover from wounds, repair or store equipment, work on inventions and so on. The location can be public or secret, and it can be as humble as a toolshed or as elaborate as an underground complex or a Manhattan skyscraper."
  },
  {
    id: "ta19",
    name: "Heroic",
    description: "The character acts heroically. They help people in need, and they do their best not to kill-even with people who might deserve it. RESTRICTION: the character cannot also be Villainous."
  },
  {
    id: "ta20",
    name: "Hounded",
    description: "The character is a member of a group of people who are persecuted for simply being themselves."
  },
  {
    id: "ta21",
    name: "Hunted",
    description: "The character is hunted by the law for crimes they have supposedly (or actually) committed. If captured by the police, they may be arrested, tried for their crimes and potentially sent to jail."
  },
  {
    id: "ta22",
    name: "Imageless",
    description: "The character casts no reflection, and their image cannot be captured by cameras."
  },
  {
    id: "ta23",
    name: "Immunity",
    description: "The character is immune to the usual effects of something. This can be selected multiple times."
  },
  {
    id: "ta24",
    name: "Inhuman Genes",
    description: "The character has latent Inhuman genes that cause them to develop super-powers when exposed to the Terrigen Mist. RESTRICTION: for Inhumans only."
  },
  {
    id: "ta25",
    name: "Krakoan",
    description: "As a mutant, the character is automatically a citizen of the island-nation of Krakoa and can travel to and from there freely. Also, if they are killed and the Five-a group of powerful mutants-are able to work together, the character can be resurrected into an identical new body with most of their memories intact. If killed in Otherworld, the character can still be resurrected, but they will be changed in unpredictable ways. Just how this might affect the character is up to the Narrator. RESTRICTION: for mutants only."
  },
  {
    id: "ta26",
    name: "Lab Access",
    description: "The character either owns or has access to a laboratory filled with the technical equipment, supplies and tools they need for their work. This can be anything from a well-stocked high-school classroom to a forensics lab to an industrial site."
  },
  {
    id: "ta27",
    name: "Linguist",
    description: "The character is fluent in a language other than their native tongue. This tag can be selected multiple times, once for each language."
  },
  {
    id: "ta28",
    name: "Lunar Transformation",
    description: "On the three nights that the moon is at its fullest and while the moon is above the horizon, the character must transform into a werewolf and is ruled by their animal nature. They cannot help but hunt and attack any people or creatures they come across, no matter if they are friend or foe. RESTRICTION: for werewolves only."
  },
  {
    id: "ta29",
    name: "Mahd Wy'ry",
    description: "The character lives for so long that their accumulated memories have the potential to drive them insane. The only cure for this condition is to die and then be reborn with a restoration of their mind from a clean backup. This happens rarely, but the disease can progress quickly once it starts. RESTRICTION: for Eternals only."
  },
  {
    id: "ta30",
    name: "Mentor",
    description: "The character knows an older person they can ask for advice, even when it comes to having super-powers. This tag can be selected multiple times."
  },
  {
    id: "ta31",
    name: "Mute",
    description: "The character cannot speak. Unless otherwise specified, they can use other means to communicate."
  },
  {
    id: "ta32",
    name: "Mysterious",
    description: "The character does not entirely understand how or why they have powers. This can prove unsettling and perhaps even dangerous, or they can just take it in stride."
  },
  {
    id: "ta33",
    name: "Obligation",
    description: "The character is responsible to certain people, places or organizations who rely on them. This tag can be selected multiple times, using many different categories. These include family, school, society, sports, work and so on."
  },
  {
    id: "ta34",
    name: "Poor",
    description: "The character has little access to money and struggles to make ends meet. This can cause them all sorts of problems."
  },
  {
    id: "ta35",
    name: "Powerful",
    description: "The character has access to the resources of their entire community. In most cases, they must be careful about how they use such resources so that they don't lose that access."
  },
  {
    id: "ta36",
    name: "Public Identity",
    description: "The character's real identity is known to the public. This can make it easier for them to ask their friends and family-and even strangers-for help. Unfortunately, it also makes it easier for their enemies to find them and even to threaten those same friends and family."
  },
  {
    id: "ta37",
    name: "Radioactive",
    description: "The character constantly emits low levels of some sort of radiation. This can be picked up by a Geiger counter."
  },
  {
    id: "ta38",
    name: "Rich",
    description: "The character has access to plenty of money. If they want something normally and legally available to people, they can simply buy it."
  },
  {
    id: "ta39",
    name: "Secret Identity",
    description: "The character's real identity is a secret to the public, and they must take precautions to maintain this status. This might help keep the people they care about safe from their enemies, but it can also cause strain in those same relationships."
  },
  {
    id: "ta40",
    name: "Signature Weapon",
    description: "The character is known for owning and using a specific typeof weapon, like Hawkeye's bow or Elektra's sai. This tag can be taken more than once, but each time must be with a different weapon."
  },
  {
    id: "ta41",
    name: "Sorcerous",
    description: "The character has dedicated themself to the study of traditional magic, also known as sorcery."
  },
  {
    id: "ta42",
    name: "Streetwise",
    description: "The character knows how things are handled on the street, who's in charge of various criminal enterprises and how to avoid issues with them."
  },
  {
    id: "ta43",
    name: "Supernatural",
    description: "The character has powers that are magical or based on something magical."
  },
  {
    id: "ta44",
    name: "Villainous",
    description: "The character is a villain, someone who cares little for the rights of others, up to and including their right to live. RESTRICTION: the character cannot also be Heroic."
  },
  {
    id: "ta45",
    name: "Vision Issues",
    description: "The character has trouble seeing that can range from partial to full blindness. This can also include color blindness, astigmatisms, and being nearsighted or farsighted."
  },
  {
    id: "ta46",
    name: "Worshipped",
    description: "The character is worshipped by others as a god."
  },
  {
    id: "ta47",
    name: "X-Gene",
    description: "The character has mutant genes that cause them to develop super-powers. RESTRICTION: for mutants only."
  },
  {
    id: "ta48",
    name: "Young",
    description: "The character is a minor, under 18 years old. If possible, they must report in to their parents or guardians on a regular basis."
  }
];
const powersList = [
  {
    id: "p1",
    name: "Accuracy 1",
    set: "",
    cost: "",
    page: 81,
    duration: "Permanent",
    action: "",
    description: "The character adds + 1 to their Agility damage multiplier, and they gain a +l bonus to Agility checks other than attacks."
  },
  {
    id: "p2",
    name: "Accuracy 2",
    set: "",
    cost: "",
    page: 81,
    duration: "Permanent",
    action: "",
    description: "The character adds +2 to their Agility damage multiplier, and they gain a +2 bonus to Agility checks other than attacks."
  },
  {
    id: "p3",
    name: "Accuracy 3",
    set: "",
    cost: "",
    page: 82,
    duration: "Permanent",
    action: "",
    description: "The character adds +3 to their Agility damage multiplier, and they gain a +3 bonus to Agility checks other than attacks."
  },
  {
    id: "p4",
    name: "Accuracy 4",
    set: "",
    cost: "",
    page: 82,
    duration: "Permanent",
    action: "",
    description: "The character adds +4 to their Agility damage multiplier, and they gain a +4 bonus to Agility checks other than attacks."
  },
  {
    id: "p5",
    name: "Additional Limbs",
    set: "",
    cost: "",
    page: 82,
    duration: "Permanent",
    action: "",
    description: "The character has an additional prehensile appendage (like a tail) or a symmetrical pair of them (like arms) that can be used to lift objects, use tools or otherwise take actions that normally require the use of a hand. This grants them an edge in Melee and Agility checks. A character can have as many additional limbs as they like-within reason-but they get no additional advantages for them."
  },
  {
    id: "p6",
    name: "Advance",
    set: "Tactics",
    cost: "15 Focus",
    page: 82,
    duration: "1 Round",
    action: "Reaction",
    description: "Any allies in earshot can be affected, up to a number equal to the character's Ego defense. Each affected ally can immediately use a free movement action to move toward the enemy that triggered the reaction."
  },
  {
    id: "p7",
    name: "Always Ready",
    set: "Martial Arts",
    cost: "",
    page: 82,
    duration: "Permanent",
    action: "",
    description: "The character gains one additional reaction per round, which can be used only to activate a Martial Arts power."
  },
  {
    id: "p8",
    name: "Anger",
    set: "",
    cost: "10+ Focus",
    page: 82,
    duration: "Concentration",
    action: "Standard or Reaction",
    description: "The character becomes angry and uses that anger to increase their strength. For every 10 points of Focus they spend, they add +15 to their Melee damage bonus and lose -2 from their Logic-and subsequently their Logic defense. While using this power, they cannot use any other powers that require concentration."
  },
  {
    id: "p9",
    name: "Animal Bond",
    set: "Telepathy",
    cost: "",
    page: 82,
    duration: "Concentration",
    action: "Standard",
    description: "The character can communicate telepathically with one animal of their choice, and they must have befriended the animal before. They cannot switch to another animal unless the animal dies, but they can select this power multiple times if desired. The communication can be verbal, visual or even more complex, such as imparting location information. There is no limit to the distance of the communication, as long as the character and the animal are in the same dimension. Animals with a telepathic bond are generally willing to communicate, even if they aren't friendly. Bonded animals often do whatever the character asks, even if it might put them in danger."
  },
  {
    id: "p10",
    name: "Animal Communication",
    set: "Telepathy",
    cost: "",
    page: 82,
    duration: "Concentration",
    action: "Standard",
    description: "The character can communicate telepathically with one taxonomic order of animals, such as birds, mammals, fish, amphibians and so on. They can call out to them as a group up to 500 spaces per rank away, and they can communicate specifically with ones they have met or at least seen. They cannot switch to another taxonomic order, but they can select this power multiple times if desired. The communication with the animals can be verbal, visual or even more complex, such as imparting location information. There is no limit to the distance of the communication, as long as the character and the animals are in the same dimension. Friendly animals often do whatever the character asks, as long as it doesn't put them in danger-and they may be willing to risk even that for one they consider a friend. Hostile animals simply ignore all such requests-which make them a poor choice for communication."
  },
  {
    id: "p11",
    name: "Animated Illusion",
    set: "Illusion",
    cost: "5 Focus",
    page: 83,
    duration: "Concentration",
    action: "Standard",
    description: "The character creates a visual-only illusion anywhere in line of sight, within 50 spaces. The illusion can be anything up to four sizes larger than the character, and it can move freely within its limits. The character breaks concentration if they move beyond 50 spaces from the illusion or lose line of sight to it."
  },
  {
    id: "p12",
    name: "Astral Form",
    set: "Magic, Telepathy",
    cost: "5 Focus",
    page: 83,
    duration: "Concentration",
    action: "Standard",
    description: "The character can project an avatar into the Astral Plane, leaving their physical body in a deep trance in the real world, where it is vulnerable to attack. While in the Astral Plane, they can interact with other characters in the Astral Plane, but they are intangible, invisible and generally undetectable in the real world. However, they can sense things in the real world. If the character is Rank 4 or higher, they can also take on a transparent form that can be seen in the real world. While in the Astral Plane, the character can fly, and in combat, their Flight Speed is equal to their rank times their Run Speed. Outside of combat, they can move 10 times as fast."
  },
  {
    id: "p13",
    name: "Attack Stance",
    set: "Martial Arts",
    cost: "",
    page: 83,
    duration: "Concentration",
    action: "Standard",
    description: "The character doubles their Melee ability bonus to damage."
  },
  {
    id: "p14",
    name: "Banging Heads",
    set: "Martial Arts, Super-Strength",
    cost: "",
    page: 83,
    duration: "Instant",
    action: "Standard",
    description: "The character makes one Melee check against the Me lee defense scores of two enemies within reach. If the attack fails against either foe, it fails entirely. If the attack is a success against both foes, each enemy takes full damage. On a Fantastic success, each enemy is also knocked prone."
  },
  {
    id: "p15",
    name: "Battle Plan",
    set: "Tactics",
    cost: "10 Focus",
    page: 84,
    duration: "1 Round",
    action: "Standard",
    description: "The character inspires one or more allies of their choice in earshot, up to the character's Vigilance. Inspired allies gain an edge on all action checks until the start of the character's next turn."
  },
  {
    id: "p16",
    name: "Blazing-Fast Fists",
    set: "Super-Speed",
    cost: "",
    page: 84,
    duration: "Permanent",
    action: "",
    description: "The character has an edge on all Melee attacks."
  },
  {
    id: "p17",
    name: "Blink",
    set: "Teleportation",
    cost: "",
    page: 84,
    duration: "Instant",
    action: "Standard, movement, or reaction",
    description: "TRIGGER: character is attacked. The character teleports into a clear space they can see or have been to, up to their rank in spaces away. If someone was about to attack them and they are now out of reach or line of sight, the attack automatically fails. If they are still within reach or line of sight, the attack has trouble instead."
  },
  {
    id: "p18",
    name: "Blink Barrage",
    set: "Teleportation",
    cost: "5 Focus",
    page: 84,
    duration: "Instant",
    action: "Standard or Movement",
    description: "The character teleports several times in quick succession and winds up in a clear space they can see or have been to, up to their rank in spaces away. Any attacks have trouble against them for one round."
  },
  {
    id: "p19",
    name: "Blink Defense",
    set: "Teleportation",
    cost: "10 Focus",
    page: 84,
    duration: "Instant",
    action: "Reaction",
    description: "TRIGGER: The character or an ally within reach is the subject of a ranged attack. The character pops away just as the attack reaches them and then pops back into the same space, leaving the projectile behind. The character makes an Ego check with an edge against the attacker's Agility check result. On a success, the projectile from the attack is teleported away, someplace safe. On a Fantastic success, the attack is turned against the attacker, using the Ego check the character just made as the attack check."
  },
  {
    id: "p20",
    name: "Blur",
    set: "Super-Speed",
    cost: "5 Focus",
    page: 84,
    durtion: "1 Round",
    action: "Standard or Reaction",
    description: "Any attacks against the character have trouble."
  },
  {
    id: "p21",
    name: "Body Sheet",
    set: "Plasticity",
    cost: "15 Focus",
    page: 84,
    duration: "Concentration",
    action: "Standard or Reaction",
    description: "TRIGGER: the character falls or is the target of an attack. The character gains Health Damage Reduction 3, but they cannot make attacks. They gain a Glide Speed equal to double their Run Speed."
  },
  {
    id: "p22",
    name: "Body Sphere",
    set: "Plasticity",
    cost: "15 Focus",
    page: 85,
    duration: "Concentration",
    action: "Standard or Reaction",
    description: "TRIGGER: The character or an ally is the target of an attack. The character forms their body into a sphere, protecting up to one ally per rank, squeezed into the same space. Those inside the sphere gain Health Damage Reduction 3 against outside attacks, but they cannot move on their own until the character releases them. Alternatively, if the attacker is within the character's reach, the character can make an Agility check against the target's Agility defense. On a success, the character envelops the attacker, grabbing them. On a Fantastic success, the character closes the sphere enough to pin the attacker too."
  },
  {
    id: "p23",
    name: "Bolts of Balthakk",
    set: "Magic",
    cost: "5+ Focus",
    page: 85,
    duration: "Instant",
    action: "Standard",
    description: "The character makes an Ego check with an edge against the Agility defense of a target in their line of sight. For this attack, add +1 to the character's Agility damage bonus for every 2 points of Focus they spend. On a success, an affected target takes that total damage. On a Fantastic success, an affected target takes double that total damage and is stunned for one round."
  },
  {
    id: "p24",
    name: "Boost Powers",
    set: "Power Control",
    cost: "15+ Focus",
    page: 85,
    duration: "Concentration",
    action: "Standard",
    description: "The character picks one character within 5 spaces and boosts all of their powers. I f the powers have ranges or effective areas or durations, these are doubled. If the powers affect a damage multiplier, add 1 to the effects. Any effects that normally happen with a Fantastic successes automatically happen on any success, not just a Fantastic one. If the target's powers have costs, the character must pay the highest of them or a minimum of 15 Focus."
  },
  {
    id: "p25",
    name: "Borrow Senses",
    set: "Telepathy",
    cost: "5 Focus",
    page: 85,
    duration: "Concentration",
    action: "Standard",
    description: "The character can use the full senses of someone or something with whom they have established a telepathic link or bond. While they do, they retain the use of their own senses too."
  },
  {
    id: "p26",
    name: "Bounce Back",
    set: "Plasticity",
    cost: "5 Focus",
    page: 85,
    duration: "Instant",
    action: "Reaction",
    description: "TRIGGER: The character takes damage from a fall or is knocked prone. The fall doesn't damage the character. If they are prone, they stand up. If they'd like, they can also jump a number of spaces, up to their Run Speed."
  },
  {
    id: "p27",
    name: "Brace for Impact",
    set: "Martial Arts, Shield Bearer",
    cost: "5+ Focus",
    page: 85,
    duration: "Instant",
    action: "Reaction",
    description: "TRIGGER: An enemy deals physical damage to the character. For every point of Focus spent, the character can ignore 1 point of Health damage dealt by the attack."
  },
  {
    id: "p28",
    name: "Brain Drain",
    set: "Magic",
    cost: "5 Focus",
    page: 85,
    duration: "Instant",
    action: "Reaction",
    description: "TRIGGER: the target is grabbed. The character makes an Ego attack against the target's Vigilance. If it succeeds, the target takes regular Focus damage, and the character heals half that much Focus for themselves. On a Fantastic success, the character heals their full Focus damage instead."
  },
  {
    id: "p29",
    name: "Brawling",
    set: "",
    cost: "",
    page: 85,
    duration: "Permanent",
    action: "",
    description: "The character can use their Melee defense score against Agility attacks too."
  },
  {
    id: "p30",
    name: "Brilliance 1",
    set: "",
    cost: "",
    page: 86,
    duration: "Permanent",
    action: "",
    description: "The character adds +l to their Logic damage multiplier, and they gain a +l bonus to Logic checks other than attacks."
  },
  {
    id: "p31",
    name: "Brilliance 2",
    set: "",
    cost: "",
    page: 86,
    duration: "Permanent",
    action: "",
    description: "The character adds +2 to their Logic damage multiplier, and they gain a +2 bonus to Logic checks other than attacks."
  },
  {
    id: "p32",
    name: "Brilliance 3",
    set: "",
    cost: "",
    page: 86,
    duration: "Permanent",
    action: "",
    description: "The character adds +3 to their Logic damage multiplier, and they gain a +3 bonus to Logic checks other than attacks."
  },
  {
    id: "p33",
    name: "Brilliance 4",
    set: "",
    cost: "",
    page: 86,
    duration: "Permanent",
    action: "",
    description: "The character adds +4 to their Logic damage multiplier, and they gain a +4 bonus to Logic checks other than attacks."
  },
  {
    id: "p34",
    name: "Bump Power",
    set: "Power Control",
    cost: "5+ Focus",
    page: 86,
    duration: "Concentration",
    action: "Standard",
    description: "The character picks one power from another character within 5 spaces and boosts it. If the power has ranges or effective areas or durations, these are doubled. If the power affects a damage multiplier, add 1 to the effect. Any effects that normally happen with a Fantastic success automatically happen on any success, not just a Fantastic one. If the power has a cost, the character must pay it as well, with a minimum of 5 Focus."
  },
  {
    id: "p35",
    name: "Catch Bullets",
    set: "Super-Speed",
    cost: "10 Focus",
    page: 87,
    duration: "Instant",
    action: "Reaction",
    description: "TRIGGER: ranged attack using physical projectiles (arrows, bullets and so on) is made against the characteror a character within their character's reach. The character makes an Agility check, using the attacker's attack result as the target number. If the character's check succeeds, the attack is nullified. On a Fantastic success, the character gets their reaction back."
  },
  {
    id: "p36",
    name: "Chain Strikes",
    set: "Martial Arts",
    cost: "5 Focus",
    page: 87,
    duration: "Instant",
    action: "Standard",
    description: "The character makes a close attack with an edge. If the attack is a success, the enemy takes regular damage. On a Fantastic success, the character can also make an additional Chain Strike."
  },
  {
    id: "p37",
    name: "Change of Plans",
    set: "Tactics",
    cost: "5 Focus",
    page: 87,
    duration: "1 Round",
    action: "Reaction",
    description: "TRIGGER: An ally has trouble on an action check. The ally gains an edge on that action check."
  },
  {
    id: "p38",
    name: "Cloak",
    set: "Telepathy",
    cost: "5 Focus",
    page: 87,
    duration: "Concentration",
    action: "Standard",
    description: "The character uses a mirage to block their presence from the minds of people within 20 spaces per rank. Cameras (for instance) can still record them, but when people look in the character's direction, they see nothing there. The target number for anyone trying to detect the character is the character's Logic defense."
  },
  {
    id: "p39",
    name: "Cloack Group",
    set: "Telepathy",
    cost: "10 Focus",
    page: 87,
    duration: "Concentration",
    action: "Standard",
    duration: "Using a mirage, the character blocks their presence-and the presence of up to one other person per rank, within 10 spaces-from the minds of people within 20 spaces per rank. Cameras (for instance) can still record them, but when people look in the characters' direction, they see nothing there. The target number for anyone trying to detect the character or the others protected is the character's Logic defense."
  },
  {
    id: "p40",
    name: "Clobber",
    set: "Super-Strength",
    cost: "",
    page: 87,
    duration: "Instant",
    action: "Standard",
    duration: "The character makes a close attack against an enemy. If the attack is a success, the enemy takes regular damage. On a Fantastic success, the enemy takes double damage and is knocked prone."
  },
  {
    id: "p41",
    name: "Clone Moves",
    set: "Power Control",
    cost: "5+ Focus",
    page: 87,
    duration: "Concentration",
    action: "Standard",
    duration: "The character picks another character within 10 spaces and in their line of sight and duplicates all their powers that could be selected with the Special Training origin. They can now use those powers as if they were always theirs. If the copied powers have costs, the character must pay the highest of them, or a minimum of 5 Focus. When the character uses a copied power, they must pay any cost normally as well."
  },
  {
    id: "p42",
    name: "Clone Powers",
    set: "Power Control",
    cost: "15+ Focus",
    page: 87,
    duration: "Concentration",
    action: "Standard",
    description: "The character picks another character within 10 spaces and duplicates all of their powers. They can now use those powers as if they were always theirs. If the target's powers have costs, the character must pay the highest of them, or a minimum of 15 Focus. When the character uses a copied power, they must pay any cost normally as well."
  },
  {
    id: "p43",
    name: "Coiling Crush",
    set: "Plasticity",
    cost: "10 Focus",
    page: 87,
    duration: "Concentration",
    action: "Reaction",
    description: "TRIGGER: the character grabs and enemy. The character makes a Melee attack. On a success, the enemy is paralyzed. On a Fantastic success, the enemy also takes regular damage. During the character's subsequent turns, they can spend their movement action to make a Melee check against the enemy's Resilience. If this succeeds, they inflict regular Health damage. On a Fantastic success, they do double damage instead. During the paralyzed enemy's turn, they can make a Melee check against the character's Melee defense to break free."
  },
  {
    id: "p44",
    name: "Combat Support",
    set: "Tactics",
    cost: "10 Focus",
    page: 89,
    duration: "1 Round",
    action: "Standard",
    description: "Once per battle, the character chooses an ally in earshot. If the ally makes an action check before the start of the character's next turn, the ally automatically rolls a 1 on their Marvel die, and that die cannot be affected by trouble."
  },
  {
    id: "p45",
    name: "Combat Trickery",
    set: "",
    cost: "5 Focus",
    page: 89,
    duration: "Instant",
    action: "Reaction",
    description: "TRIGGER: the character makes an attack. Once per battle, when the character is attacking targets of equal or higher rank, the character automatically rolls a 1 on their Marvel die, and that die cannot be affected by trouble. If the character is attacking multiple targets, all the targets must be of equal or higher rank."
  },
  {
    id: "p46",
    name: "Command",
    set: "Telepathy",
    cost: "5 Focus",
    page: 89,
    duration: "1 Round",
    action: "Standard",
    description: "The character gives an order to a target with whom they've established a Telepathic Link. The character makes a Logic check against the target's Logic defense. On a success, the target complies with the order. On a Fantastic success, the character gains an edge the next time they use this power against this same target. The command must be something that can be completed in a single action. If it involves harming someone, the character has trouble on the check. If it would cause the target to harm themselves, the character has double trouble on the check."
  },
  {
    id: "p47",
    name: "Control Fog",
    set: "Weather Control",
    cost: "",
    page: 89,
    duration: "Concentration",
    action: "Standard",
    description: "The character creates a thick fog for up to 50 spaces per rank around them that blocks all line of sight beyond 10 spaces. They can also dispel any fog in a similar area."
  },
  {
    id: "p48",
    name: "Control Weather 1",
    set: "Weather Control",
    cost: "",
    page: 89,
    duration: "Concentration",
    action: "Standard",
    description: "It starts to rain in an area up to 5 miles across times the character's rank, centered on the character. All ranges are cut in half. Movement is not affected."
  },
  {
    id: "p49",
    name: "Control Weather 2",
    set: "Weather Control",
    cost: "10 Focus",
    page: 89,
    duration: "Concentration",
    action: "Standard",
    description: "It starts to storm in an area up to 5 miles across times the character's rank, centered on the character. All ranges and all speeds are cut in half."
  },
  {
    id: "p50",
    name: "Control Weather 3",
    set: "Weather Control",
    cost: "15 Focus",
    page: 89,
    duration: "Concentration",
    action: "Standard",
    description: "It starts to storm in an area up to 5 miles across times the character's rank, centered on the character. All ranges and all speeds are cut in half. If the character also has the Elemental Blast (Electricity) power, they can use it as a reaction when attacked while this power is active."
  },
  {
    id: "p51",
    name: "Control Weather 4",
    set: "Weather Control",
    cost: "20 Focus",
    page: 89,
    duration: "Concentration",
    action: "Standard",
    description: "It starts to storm in an area up to 5 miles across times the character's rank, centered on the character. All ranges and all speeds are cut to one quarter normal, and flying is impossible. If the character also has the Elemental Barrage (Electricity) power, they can use it as a reaction when attacked while this power is active."
  },
  {
    id: "p52",
    name: "Copy Ability",
    set: "Power Control",
    cost: "",
    page: 90,
    duration: "Concentration",
    action: "Standard",
    description: "The character picks one ability score of another character within 10 spaces and duplicates it. They now use that ability score in place of their own."
  },
  {
    id: "p53",
    name: "Copy Power",
    set: "Power Control",
    cost: "5 Focus",
    page: 90,
    duration: "Concentration",
    action: "Standard",
    description: "The character picks one power a target within 10 spaces has and duplicates it. They can now use it as if it was always theirs. When the character uses such a power, they must pay any cost normally as well."
  },
  {
    id: "p54",
    name: "Copy Trait",
    set: "Power Control",
    cost: "",
    page: 90,
    duration: "Concentration",
    action: "Standard",
    description: "The character picks one trait another character within 10 spaces has and duplicates it. They can now use it as i f it was always theirs."
  },
  {
    id: "p55",
    name: "Counterstrike Technique",
    set: "Martial Arts",
    cost: "5 Focus",
    page: 90,
    duration: "Instant",
    action: "Reaction",
    description: "TRIGGER: While Attack Stance is active, a close attack against the character does damage. The character deals half the attacker's regular damage to the attacker."
  },
  {
    id: "p56",
    name: "Covering Fire",
    set: "Ranged Weapons",
    cost: "10 Focus",
    page: 90,
    duration: "Instant",
    action: "Reaction",
    description: "TRIGGER: an ally within the character's line of sight begins its turn. The character makes an Agility attack against a target's Vigilance defense. If the attack is a success, apply Health Damage Reduction normally. The target takes any damage to their Focus. If it's a Fantastic success, the damage is doubled, and if the target takes any Focus damage, they are stunned for one round."
  },
  {
    id: "p57",
    name: "Crimson Bands of Cyttorak",
    set: "Magic",
    cost: "10 Focus",
    page: 90,
    duration: "Concentration",
    action: "Standard",
    description: "The character makes an Ego check with an edge against the Melee defense of a target in their line of sight. If the attack is a success, the crimson bands paralyze the target. On a Fantastic success, the target can be pinned too. Breaking out of the crimson bands requires a Me lee check with target number 20."
  },
  {
    id: "p58",
    name: "Crushing Grip",
    set: "Martial Arts and Super-Strength",
    cost: "5 Focus",
    page: 90,
    duration: "Instant",
    action: "Reaction",
    description: "TRIGGER: the target is grabbed. The character makes a Melee attack against the grabbed target's Resilience defense. If it's a success, the target takes regular damage. On a Fantastic success, the target takes double damage instead and is pinned."
  },
  {
    id: "p59",
    name: "Dampen Power",
    set: "Power Control",
    cost: "Varies",
    page: 90,
    duration: "Concentration",
    action: "Standard",
    description: "The character picks one power from another character within 20 spaces and makes an Ego attack against them. On a success, they tamp the power down. If the power has ranges or effective areas or durations, these are halved. If the power affects a damage multiplier, subtract 1 from the effect. The power can no longer enjoy Fantastic successes. If the power has a Focus cost, the character must also pay that cost to dampen it."
  },
  {
    id: "p60",
    name: "Dance of Death",
    set: "Ranged Weapons",
    cost: "10 Focus",
    page: 90,
    duration: "Instant",
    action: "Standard",
    description: "The character makes an Agility check and compares that against the Agility defense of every enemy within 10 spaces and in their line of sight. Each success does half the regular damage. On a Fantastic success, each enemy takes full damage instead and is bleeding."
  },
  {
    id: "p61",
    name: "Darkness",
    set: "Illusion",
    cost: "5 Focus",
    page: 91,
    duration: "Concentration",
    action: "Standard",
    description: "An area up to 5 spaces wide per the character's rank-centered on anything the character wishes, within 50 spaces-is filled with inky darkness. Those inside it cannot see anything, and no lights work within it except those generated by powers. The character must remain within 50 spaces of the affected area to avoid breaking concentration."
  },
  {
    id: "p62",
    name: "Dazzle",
    set: "Illusion",
    cost: "5 Focus",
    page: 91,
    duration: "Instant",
    action: "Standard",
    description: "RANGE: 20 spaces. The character makes an Ego check against an enemy in their line of sight and compares that against the target's Vigilance defense. If the attack is a success, the enemy is blinded for 1 turn. On a Fantastic success, it also inflicts regular damage. Alternatively, the character can blind the victim with darkness."
  },
  {
    id: "p63",
    name: "Deafen",
    set: "Illusion",
    cost: "5 Focus",
    page: 91,
    duration: "Instant",
    action: "Standard",
    description: "RANGE: 20 spaces. The character makes an Ego check against an enemy in their line of sight and compares that against the target's Vigilance defense. If the attack is a success, the enemy is deafened for one turn. On a Fantastic success, it also inflicts regular damage."
  },
  {
    id: "p64",
    name: "Defense Stance",
    set: "Martial Arts",
    cost: "",
    page: 91,
    duration: "Concentration",
    action: "Standard",
    description: "Any close attacks made against the character have trouble until they are successfully attacked in this combat."
  },
  {
    id: "p65",
    name: "Dimensional Portal",
    set: "Omniversal Travel",
    cost: "15 Focus",
    page: 92,
    duration: "Concentration",
    action: "Standard",
    description: "The character opens a glowing portal in a space next to them that moves anything that enters it between that space and its destination, which forms a matched glowing portal in the other place. The other end of the portal must be in a clear space in another dimension that the character has been to. Anything can move through the portal in either direction until it is closed, which the character can do at will."
  },
  {
    id: "p66",
    name: "Dimensional Travel",
    set: "Omniversal Travel",
    cost: "10 Focus",
    page: 92,
    duration: "Instant",
    Action: "Standard or Movement",
    description: "The character instantly moves from their current dimension to another dimension within the same universe. For instance: from Earth to Asgard, Limbo or K'un-Lun. When they move to the other dimension, they can arrive in any place they've been to before. Otherwise, they arrive at the most common entrance to that dimension."
  },
  {
    id: "p67",
    name: "Dimensional Travel Other",
    set: "Omniversal Travel",
    cost: "15 Focus",
    page: 92,
    duration: "Instant",
    action: "Standard, Movement, or Reaction",
    description: "The character makes an Ego check against the Vigilance defense of a target they have grabbed. If the check is successful, the character can send the target to another dimension. The target can be sent to any location in that dimension that the character has been to before. Otherwise, the target arrives at the most common entrance to that dimension."
  },
  {
    id: "p68",
    name: "Dimensional Travel Together",
    set: "Omniversal Travel",
    cost: "10 Focus",
    page: 92,
    duration: "Instant",
    action: "Standard, Movement, or Reaction",
    description: "TRIGGER: the target is grabbed. The character moves to a different dimension, taking any person they are touching with them. If the target does not wish to come along, the character must grab them first. When they move to the other dimension, they can arrive in any place they've been to before. Otherwise, they arrive at the most common entrance to that dimension."
  },
  {
    id: "p69",
    name: "Discipline 1",
    set: "",
    cost: "",
    page: 92,
    duration: "Permanent",
    action: "",
    description: "The character adds +1 to their Ego damage multiplier, and they gain a +1 bonus to Ego checks other than attacks."
  },
  {
    id: "p70",
    name: "Discipline 2",
    set: "",
    cost: "",
    page: 92,
    duration: "Permanent",
    action: "",
    description: "The character adds +2 to their Ego damage multiplier, and they gain a +2 bonus to Ego checks other than attacks."
  },
  {
    id: "p71",
    name: "Discipline 3",
    set: "",
    cost: "",
    page: 92,
    duration: "Permanent",
    action: "",
    description: "The character adds +3 to their Ego damage multiplier, and they gain a +3 bonus to Ego checks other than attacks."
  },
  {
    id: "p72",
    name: "Discipline 4",
    set: "",
    cost: "",
    page: 92,
    duration: "Permanent",
    action: "",
    description: "The character adds +4 to their Ego damage multiplier, and they gain a +4 bonus to Ego checks other than attacks."
  },
  {
    id: "p73",
    name: "Disguise",
    set: "",
    cost: "",
    page: 92,
    duration: "Permanent",
    action: "",
    description: "The character instantly alters their appearance so that they appear to be someone else. The target number for anyone trying to see through the disguise is the character's Ego defense. If the character is impersonating someone known to the other person, that person has an edge."
  },
  {
    id: "p74",
    name: "Dispel Spell",
    set: "Magic",
    cost: "15 Focus",
    page: 92,
    duration: "Instant",
    action: "Standard",
    description: "The character makes an Ego check against the Ego defense of a target using a magic power that requires concentration. On a success, the target's concentration on that power is broken. On a Fantastic success, the target's concentration is broken entirely."
  },
  {
    id: "p75",
    name: "Disrupt Electronics",
    set: "Phasing",
    cost: "5 Focus",
    page: 94,
    duration: "Instant",
    action: "Standard",
    description: "When phasing through electronics, the character can scramble them, causing them to either shut down or crash. In the case of powers that are Tech Reliant (and feature electronics), they are unusable for one turn while they reboot."
  },
  {
    id: "p76",
    name: "Disrupt Nerves",
    set: "Phasing",
    cost: "5 Focus",
    page: 94,
    duration: "Instant",
    action: "Standard",
    description: "When phasing through a person, the character can attempt to scramble their nervous system. The character makes an Ego check against the target's Resilience defense. On a success, the target is stunned for one round. On a Fantastic success, the target also falls prone."
  },
  {
    id: "p77",
    name: "Disrupt Person",
    set: "Phasing",
    cost: "10 Focus",
    page: 94,
    duration: "Instant",
    action: "Standard",
    description: "The character becomes the slightest bit solid while phasing themselves or a phased weapon through someone. They make a close attack. On a success, the attack does normal damage, ignoring any Health Damage Reduction. On a Fantastic success, the attack does double damage instead, ignoring any Health Damage Reduction, and the target is stunned for one round."
  },
  {
    id: "p78",
    name: "Do This All Day",
    set: "Martial Arts, Shield Bearer",
    cost: "5+ Focus",
    page: 94,
    duration: "Instant",
    action: "Standard",
    description: "The character heals 2 points of Health for every point of Focus they spend."
  },
  {
    id: "p79",
    name: "Domination",
    set: "Telepathy",
    cost: "20 Focus",
    page: 94,
    duration: "Permanent",
    action: "Standard",
    description: "The character dominates a target with whom they've established a Telepathic Link and who has no Focus left. The character makes a Logic check with trouble against the target's Logic defense. On a success, the target is completely dominated and will follow the character's orders. On a Fantastic success, the character gains an edge the next time they use this power against this same target. The result of the character's check is the target number for any attempts by the target to end the domination. If any order involves harming someone, the target gets to make a Logic check to end the domination. If the target has the Heroic tag, they get an edge on the check. If the order would cause the target to harm themselves, the target gets an edge on the check. If they have the Heroic tag, they get a double edge."
  },
  {
    id: "p80",
    name: "Double Tap",
    set: "Ranged Weapons",
    cost: "",
    page: 95,
    duration: "Instant",
    action: "Standard",
    description: "The character makes a ranged attack against an enemy within 2 spaces. If the attack is a success, the enemy takes regular damage. On a Fantastic success, the enemy takes double damage and is bleeding."
  },
  {
    id: "p81",
    name: "Edit Memory",
    set: "Telepathy",
    cost: "15 Focus",
    page: 95,
    duration: "Permanent",
    action: "Standard",
    description: "The character alters the memory of a target with whom they've established a Telepathic Link. This can be as simple as erasing a chunk of the target's memory or as complicated as implanting entirely new memories. The Narrator sets the target number based on how complex the new memory is and how hard it would be to integrate such memories into the character's other memories. The character makes a Logic check against the target's Logic defense. On a success, the memories are altered. On a Fantastic success, the target has trouble on checks to refute such memories in the future. Any time the target is given good reason to doubt the edited memory, they can make a Logic check to refute the new version of their memories and recover their original memories. If they succeed, they remember both the original memory and the edited one. On a Fantastic success, they know for sure who did this to them."
  },
  {
    id: "p82",
    name: "Elemental Barrage",
    set: "Elemental Control",
    cost: "15 Focus",
    page: 95,
    duration: "Instant",
    action: "Standard",
    description: "The character designates a space within their line of sight. The attack can affect every enemy within 10 spaces of that. The character makes a single Ego check and compares it to each target's Resilience defense. Affected enemies take half regular damage. On a Fantastic success, they take full regular damage and the elemental type's special effect."
  },
  {
    id: "p83",
    name: "Elemental Barrier",
    set: "Elemental Control",
    cost: "5 Focus",
    page: 95,
    duration: "Concentration",
    action: "Standard",
    description: "The character forms a wall of their element within their line of sight and up to 10 spaces away per rank. This covers up to 2 spaces across (vertically/horizontally) per their rank. The character makes an Agility check and compares the results against the Agility defense of any target in the affected spaces. On a success, the character chooses which side of the barrier the target winds up on. On a failure, the target chooses. On a Fantastic success, the target suffers the element's special effect too. Attacks against the barrier are against the character's Ego defense. Any attacks against it that do 10 points of damage or less are instantly absorbed, and the barrier continues. If an attack does more than 10 points of damage, it destroys the barrier. Either way, the attack leaves those behind the barrier unharmed."
  },
  {
    id: "p84",
    name: "Elemental Blast",
    set: "Elemental Control",
    cost: "5+ Focus",
    page: 95,
    duration: "Instant",
    action: "Standard",
    description: "RANGE: 10 spaces. The character makes a ranged attack with an edge at an enemy in line of sight. For this attack, add +l to the character's Agility damage bonus for every 2 points of Focus they spend. On a success, an affected target takes that total damage. On a Fantastic success, an affected target takes double that total damage and suffers the elemental type's special effect."
  },
  {
    id: "p85",
    name: "Elemental Burst",
    set: "Elemental Control",
    cost: "",
    page: 95,
    duration: "Instant",
    action: "Standard",
    description: "The character makes a ranged attack against an enemy in line of sight. If the attack is a success, it inflicts regular damage. On a Fantastic success, the enemy takes double damage instead and the elemental type's special effect."
  },
  {
    id: "p86",
    name: "Elemental Form",
    set: "Elemental Control",
    cost: "",
    page: 95,
    duration: "Permanent",
    action: "",
    description: "The character's body is made entirely of their element, which gives them a steady supply of their element to use and makes them essentially unkillable. When they lose all their Health, their form loses its cohesion and falls apart. When they have at least 1 Health-which they can gain back over time, normally they can re-form. If the character wishes to use their elemental body in unusual ways, they should pick Plasticity powers. If they wish to be able to be fully human at times, they should take the Shape-Shift power."
  },
  {
    id: "p87",
    name: "Elemental Grab",
    set: "Elemental Control",
    cost: "5 Focus",
    page: 96,
    duration: "Concentration",
    action: "Standard",
    description: "RANGE: varies. The character makes an Ego attack against a target's Melee defense within 5 spaces times the character's rank. If the attack is a success, the character grabs the target with their element. On a Fantastic success, the target can also be pinned and suffers the element's special effect. Breaking free requires a successful Melee check against target number 20."
  },
  {
    id: "p88",
    name: "Elemental Infusion",
    set: "Elemental Control",
    cost: "5 Focus",
    page: 96,
    duration: "Concentration",
    action: "Standard",
    description: "The character infuses their energy into a handheld weapon in their grasp. When the character gets a Fantastic success attacking with the weapon, add the energy's special effect."
  },
  {
    id: "p89",
    name: "Elemental Prison",
    set: "Elemental Control",
    cost: "Same as character's Elemental Protection power",
    page: 96,
    duration: "Concentration",
    action: "Standard",
    description: "The character picks a point within their line of sight and traps any chosen targets within up to 5 spaces times their rank-in a prison comprised of their element. When the Elemental Prison is formed, the character makes an Ego check and compares the results against the Agility defense of targets inside the enclosed spaces. On each success, the character traps the target within the prison's perimeter. On a Fantastic success, such imprisoned people suffer full damage and the element's special effect too. Attacks against the prison are against the character's Ego defense. Any attacks against the prison are absorbed as if made against the character's Elemental Protection power, and the prison continues. If an attack does more damage than the character's Elemental Protection power can sustain, it destroys the prison, but no one inside is harmed."
  },
  {
    id: "p90",
    name: "Elemental Protection 1",
    set: "Elemental Control",
    cost: "5 Focus",
    page: 96,
    duration: "Concentration",
    action: "Standard or Reaction",
    description: "TRIGGER: the character is attacked or otherwise in danger. The character protects themselves with their element. Any attacks against them that do 10 points of damage or less are instantly absorbed, and the protection continues. If an attack does more than 10 points of damage, it destroys the protection. Either way, the character remains unharmed."
  },
  {
    id: "p91",
    name: "Elemental Protection 2",
    set: "Elemental Control",
    cost: "10 Focus",
    page: 96,
    duration: "Concentration",
    action: "Standard or Reaction",
    description: "TRIGGER: the character is attacked or otherwise in danger. The character protects themselves with their element. Any attacks against them that do 20 points of damage or less are instantly absorbed, and the protection continues. If an attack does more than 20 points of damage, it destroys the protection. Either way, the character remains unharmed."
  },
  {
    id: "p92",
    name: "Elemental Protection 3",
    set: "Elemental Control",
    cost: "15 Focus",
    page: 96,
    duration: "Concentration",
    action: "Standard or Reaction",
    description: "TRIGGER: the character is attacked or otherwise in danger. The character protects themselves with their element. Any attacks against them that do 30 points of damage or less are instantly absorbed, and the protection continues. If an attack does more than 30 points of damage, it destroys the protection. Either way, the character remains unharmed."
  },
  {
    id: "p93",
    name: "Elemental Protection 3",
    set: "Elemental Control",
    cost: "20 Focus",
    page: 96,
    duration: "Concentration",
    action: "Standard or Reaction",
    description: "TRIGGER: the character is attacked or otherwise in danger. The character protects themselves with their element. Any attacks against them that do 40 points of damage or less are instantly absorbed, and the protection continues. If an attack does more than 40 points of damage, it destroys the protection. Either way, the character remains unharmed."
  },
  {
    id: "p94",
    name: "Elemental Push",
    set: "Elemental Control",
    cost: "10 Focus",
    page: 96,
    duration: "Instant",
    action: "Standard",
    description: "The character makes an Ego attack against the target's Agility defense. If the attack succeeds, the character can move the target in any direction, up to 1 space times the character's rank. On a Fantastic success, the target also takes regular damage, is knocked prone and suffers the element's special effect."
  },
  {
    id: "p95",
    name: "Elemental Reinforcement",
    set: "Elemental Control",
    cost: "Varies",
    page: 97,
    duration: "Instant",
    action: "Reaction",
    description: "TRIGGER: damage gets through an elemental power. The character can transfer any Health damage that gets through an elemental power that grants damage protection to their Focus instead, leaving the protection intact."
  },
  {
    id: "p96",
    name: "Elemental Ricochet",
    set: "Elemental Control",
    cost: "10 Focus",
    page: 97,
    duration: "Instant",
    action: "Standard",
    description: "RANGE: 10x character's rank. The character makes a ranged attack against a target in line of sight. I f the attack is a success, it inflicts regular damage. On a Fantastic success, energy also bounces off the first target to another in line of sight, and the character can make a new attack against that target, adding the new range to the previous attack's range. This can be repeated until an attack is not fantastic."
  },
  {
    id: "p97",
    name: "Elemental Sphere",
    set: "Elemental Control",
    cost: "Same as character's Elemental Protection power",
    page: 97,
    duration: "Concentration",
    action: "Standard or Reaction",
    description: "The character envelops themselves-and any chosen people within up to 5 spaces times their rank- in a protective sphere comprised of their element. When the sphere is formed, the character makes an Ego check and compares the results against the Agility defense of unwanted characters in the enclosed spaces. On a success, the character can move any unwanted people within the sphere's perimeter to spaces outside of the sphere. On a Fantastic success, such moved people suffer full damage and the element's special effect. Attacks against the sphere are against the character's Ego defense. Any attacks against the sphere are absorbed as if made against the character's Elemental Protection power, and the sphere continues. If an attack does more damage than the character's Elemental Protection power can sustain, it destroys the sphere, but no one inside is harmed."
  },
  {
    id: "p98",
    name: "Elemental Suffocation",
    set: "Elemental Control",
    cost: "15 Focus",
    page: 97,
    duration: "Instant",
    action: "Standard or Reaction",
    description: "RANGE: varies. TRIGGER: the target is grabbed with Elemental Grab. The character makes an Ego attack against the grabbed target's Resilience defense. If the attack is a success, the target takes regular damage. On a Fantastic success, the target can also be pinned and suffers the element's special effect. With elements that aren't suited to suffocation, this power chokes the target instead."
  },
  {
    id: "p99",
    name: "Energy Absorption",
    set: "",
    cost: "15 Focus",
    page: 97,
    duration: "Instant",
    action: "Reaction",
    description: "TRIGGER: the character takes Health damage. The character can take any Health damage done to them (after applying any damage reduction), ignore it and add that number to their Focus instead. In this way, they can increase their Focus up to double their regular maximum Focus. Once the combat is over, any extra Focus over the character's regular maximum Focus score fades away."
  },
  {
    id: "p100",
    name: "Environmental Protection",
    set: "",
    cost: "",
    page: 98,
    duration: "Permanent",
    action: "",
    description: "The character is not harmed by intense cold or heat, the pressure of the deep seas or the intense radiation and vacuum of space. The player can choose any or all of these protections, as best fits with the character concept."
  },
  {
    id: "p101",
    name: "ESP",
    set: "Telepathy",
    cost: "",
    page: 98,
    duration: "Concentration",
    action: "Standard",
    description: "The character can reach out with their mind to sense the presence of others within 100 spaces per rank. This tells them the person's location and general status. It can also identify if they have super-powers or not. If a target or targets wish to remain undetected, the character must make a Logic check and compare it against each target's Vigilance defense. If they succeed, they sense the target. On a Fantastic success, they can also identify the source of any powers the target has."
  },
  {
    id: "p102",
    name: "Evasion",
    set: "",
    cost: "",
    page: 98,
    duration: "Permanent",
    action: "",
    description: "The character can use their Agility defense score against Melee attacks too."
  },
  {
    id: "p103",
    name: "Exorcism",
    set: "Magic",
    cost: "15 Focus",
    page: 98,
    duration: "Instant",
    action: "Standard",
    description: "The character attempts to remove the possessor from a possessed target. The character makes an Ego check against the possessor's Ego defense. On a success, the possessor's concentration is broken, ending the possession. On a Fantastic success, all of the possessor's concentrations are broken, and the possessor is stunned for one round too."
  },
  {
    id: "p104",
    name: "Exploit",
    set: "Melee Weapons",
    cost: "5 Focus",
    page: 98,
    duration: "Instant",
    action: "Reaction",
    description: "TRIGGER: A Fantastic success on an attack using the character's weapon that deals at least 1 point of damage. The character makes a Melee attack against the target's Resilience defense score. If the attack is a success, the damage it does ignores Health Damage Reduction. On a Fantastic success, the target suffers double damage and the weapon's special effect."
  },
  {
    id: "p105",
    name: "Extend Invisibility",
    set: "Illusion",
    cost: "10 Focus",
    page: 99,
    duration: "Concentration",
    action: "Standard",
    description: "The character makes something-a single person or object-within reach invisible. This can be one size bigger than them for every rank they have."
  },
  {
    id: "p106",
    name: "Extended Reach 1",
    set: "Plasticity",
    cost: "",
    page: 99,
    duration: "Permanent",
    action: "",
    description: "The character's reach quadruples."
  },
  {
    id: "p107",
    name: "Extended Reach 2",
    set: "Plasticity",
    cost: "",
    page: 99,
    duration: "Permanent",
    action: "",
    description: "The character's reach is 10x normal."
  },
  {
    id: "p108",
    name: "Fast Attacks",
    set: "Melee Weapons",
    cost: "",
    page: 99,
    duration: "Instant",
    action: "Standard",
    description: "The character splits their attack to make two close attacks against separate targets within reach (or they can focus a single attack on a single target). Make a single Melee check and compare it to the targets' Melee defenses. On a success, the affected target takes half regular damage. On a Fantastic success, the affected target takes full damage, and the character can make a bonus attack with this power against any target within reach, with the same effect."
  },
  {
    id: "p109",
    name: "Fast Hands",
    set: "Ranged Weapons",
    cost: "",
    page: 99,
    duration: "Permanent",
    action: "",
    description: "The character gains one additional reaction per round. This reaction can be used only to trigger a Ranged Weapons power."
  },
  {
    id: "p110",
    name: "Fast Strikes",
    set: "Martial Arts",
    cost: "",
    page: 99,
    duration: "Instant",
    action: "Standard",
    description: "The character splits their attack to make two close attacks against separate targets within reach (or they can focus a single attack on a single target). Make a single Melee check and compare it to the targets' Melee defenses. On a success, the affected target takes half regular damage. On a Fantastic success, the affected target takes full damage."
  },
  {
    id: "p111",
    name: "Flames of the Faltine",
    set: "Magic",
    cost: "5 Focus",
    page: 99,
    duration: "Instant",
    action: "Standard",
    description: "RANGE: 10 spaces. The character makes an Ego check against the Agility defense of a target in their line of sight. If the attack is a success, it inflicts regular damage. On a Fantastic success, the target takes double damage and then suffers 5 points of damage at the end of every round until someone uses an action to put out the flames."
  },
  {
    id: "p112",
    name: "Flare",
    set: "Illusion",
    cost: "10 Focus",
    page: 99,
    duration: "Instant",
    action: "Standard",
    description: "The character makes an Ego check and compares that against the Vigilance defense of every enemy within 5 spaces. Each beaten enemy is blinded for one turn. On a Fantastic success, the flare inflicts regular damage too."
  },
  {
    id: "p113",
    name: "Flexible Bones 1",
    set: "Plasticity",
    cost: "",
    page: 99,
    duration: "Permanent",
    action: "",
    description: "The character gains Health Damage Reduction 1. They also have an edge on Agility checks for contortion and escape."
  },
  {
    id: "p114",
    name: "Flexible Bones 2",
    set: "Plasticity",
    cost: "",
    page: 99,
    duration: "Permanent",
    action: "",
    description: "The character gains Health Damage Reduction 2. They also have double edge on Agility checks for contortion and escape."
  },
  {
    id: "p115",
    name: "Flexible Fingers",
    set: "Plasticity",
    cost: "",
    page: 99,
    duration: "Permanent",
    action: "Standard",
    description: "With a standard action, the character can automatically pick any lock that requires a physical key. They can also shape their hands to form almost any other kind of simple tool."
  },
  {
    id: "p116",
    name: "Flight 1",
    set: "",
    cost: "",
    page: 100,
    duration: "Permanent",
    action: "",
    description: "The character can fly. Their combat Flight Speed is equal to their rank times their Run Speed. Outside of combat, they can move three times their Flight Speed."
  },
  {
    id: "p117",
    name: "Flight 2",
    set: "",
    cost: "",
    page: 100,
    duration: "Permanent",
    action: "",
    description: "The character can fly up to 50 times their Flight Speed."
  },
  {
    id: "p118",
    name: "Flying Double Kick",
    set: "Martial Arts",
    cost: "10 Focus",
    page: 100,
    duration: "Instant",
    action: "Standard",
    description: "The character makes a close attack against two enemies within reach. If an attack is a success, the enemy takes regular damage. If an attack is a Fantastic success, the enemy takes double damage and is knocked prone."
  },
  {
    id: "p119",
    name: "Focus Fire",
    set: "Tactics",
    cost: "10 Focus",
    page: 100,
    duration: "Concentration",
    action: "Standard",
    description: "The character calls out an enemy in line of sight and inspires one or more allies of their choice in earshot, up to the character's Vigilance. They gain an edge on all action checks against that enemy."
  },
  {
    id: "p120",
    name: "Focused Fury",
    set: "Melee Weapons",
    cost: "5+ Focus",
    page: 100,
    duration: "Instant",
    action: "Standard",
    description: "The character makes a close attack with an edge. For this attack, add +l to the character's Melee damage bonus for every 2 points of Focus they spend. On a success, an affected target takes that total damage. On a Fantastic success, an affected target takes double that total damage and suffers the weapon's special effect."
  },
  {
    id: "p121",
    name: "Focused Strike",
    set: "Martial Arts",
    cost: "10+ Focus",
    page: 100,
    duration: "Instant",
    action: "Standard",
    description: "The character makes a close attack. Add +1 to the character's Melee damage bonus for every 2 points of Focus they spend. On a success, an affected target takes that total damage. On a Fantastic success, an affected target takes double that total damage and is stunned for one round."
  },
  {
    id: "p122",
    name: "Fool",
    set: "Telepathy",
    cost: "5 Focus",
    page: 101,
    duration: "Concentration",
    action: "Standard",
    description: "The character uses a mirage to alter their appearance in the minds of anyone within 20 spaces per rank. Cameras (for instance) can still record them normally, but when people look in the character's direction, they see someone else. The target number for anyone trying to see through the mirage is the character's Logic defense. If the character is impersonating someone known to the other person, that person has an edge."
  },
  {
    id: "p123",
    name: "Furious Attacks",
    set: "Melee Weapons",
    cost: "10+ Focus",
    page: 101,
    duration: "Instant",
    action: "Standard",
    description: "The character splits their attack to make two close attacks against separate targets within reach (or they can focus a single attack on a single target). Make a single Melee check and compare it to the targets' Melee defenses. For these attacks, add +1 to the character's Melee damage bonus for every 2 points of Focus they spend. On a success, an affected target takes half that total damage. On a Fantastic success, an affected target takes full damage and suffers the weapon's special effect."
  },
  {
    id: "p124",
    name: "Grand Mirage",
    set: "Telepathy",
    cost: "10 Focus",
    page: 101,
    duration: "Concentration",
    action: "Standard",
    description: "The character creates a full-sensory mirage that affects everyone in a Telepathic Network they set up who is also in the same locale. The mirage can be of anything the character desires, and it can move freely."
  },
  {
    id: "p125",
    name: "Grand Fool",
    set: "Telepathy",
    cost: "10 Focus",
    page: 101,
    duration: "Concentration",
    action: "Standard",
    description: "The character uses a mirage to alter their appearance-and the appearance of up to one other person per rank, within 10 spaces-in the minds of people within 20 spaces per rank. Cameras (for instance) can still record them, but when people look in the characters' direction, they see other people. The target number for anyone trying to see through the mirage is the character's Logic defense. If the affected characters are impersonating people known to the other person, that person has an edge."
  },
  {
    id: "p126",
    name: "Grand Illusion",
    set: "Illusion",
    cost: "10 Focus",
    page: 101,
    duration: "Concentration",
    action: "Standard",
    description: "The character creates a sound and sight illusion anywhere in line of sight, within 50 spaces. The illusion can be of anything up to five sizes larger than the character, and it can move freely within its limits. The character breaks concentration if they move beyond 50 spaces from the illusion or lose line of sight of it."
  },
  {
    id: "p127",
    name: "Grappling Technique",
    set: "Martial Arts",
    cost: "5 Focus",
    page: 101,
    duration: "Instant",
    action: "Standard",
    description: "The character makes a close attack. If the attack is a success, the enemy takes regular damage and is grabbed. On a Fantastic success, the target takes double damage instead and is pinned too."
  },
  {
    id: "p128",
    name: "Ground-Shaking Stomp",
    set: "Super-Strength",
    cost: "10 Focus",
    page: 101,
    duration: "Instant",
    action: "Standard",
    description: "The character makes a Melee check and compares that against the Agility defense of every target within the character's reach plus their rank in spaces. Any targets the attack succeeds against take half regular damage. On a Fantastic success, the targets take full damage and are knocked prone."
  },
  {
    id: "p129",
    name: "Group Flight",
    set: "",
    cost: "5 Focus",
    page: 101,
    duration: "Concentration",
    action: "Standard",
    description: "For every point of Ego the character has, they can hoist one ally into the air with them. The Flight Speed of the group is half the character's, and all affected allies must remain within 5 spaces times the character's rank. The character controls each ally's speed and position during the character's turn, but they can release any or all allies at any time."
  },
  {
    id: "p130",
    name: "Group Invisibiilty",
    set: "Illusion",
    cost: "15 Focus",
    page: 102,
    duration: "Concentration",
    action: "Standard",
    description: "For every point of Ego defense the character has, they can make one person or thing invisible, including themselves. Each of these can be one size bigger than them for every rank they have."
  },
  {
    id: "p131",
    name: "Group Levitation",
    set: "Telekinesis",
    cost: "5 Focus",
    page: 102,
    duration: "Concentration",
    action: "Standard",
    description: "The character can move up to one person per rank through the air in any direction at the character's Run Speed. The levitated target(s) must remain within 5 spaces times the character's rank. If any target does not wish to be moved like this, they must be telekinetically grabbed first."
  },
  {
    id: "p132",
    name: "Grow 1",
    set: "Resize",
    cost: "",
    page: 102,
    duration: "Permanent",
    action: "Standard or Reaction",
    description: "TRIGGER: the character is attacked. The character can grow up to huge size. They can return to their normal size at will."
  },
  {
    id: "p133",
    name: "Grow 2",
    set: "Resize",
    cost: "",
    page: 102,
    duration: "Permanent",
    action: "Standard or Reaction",
    description: "TRIGGER: the character is attacked. The character can grow up to gigantic size. They can return to their normal size at will."
  },
  {
    id: "p134",
    name: "Grow 3",
    set: "Resize",
    cost: "",
    page: 102,
    duration: "Permanent",
    action: "Standard or Reaction",
    description: "TRIGGER: the character is attacked. The character can grow up to titanic size. They can return to their normal size at will."
  },
  {
    id: "p135",
    name: "Grow 4",
    set: "Resize",
    cost: "",
    page: 102,
    duration: "Permanent",
    action: "Standard or Reaction",
    description: "TRIGGER: the character is attacked. The character can grow up to gargantuan size. They can return to their normal size at will."
  },
  {
    id: "p136",
    name: "Growing Attack",
    set: "Resize",
    cost: "5 Focus",
    page: 102,
    duration: "Instant",
    action: "Reaction",
    description: "TRIGGER: the character grows. The character makes a close attack with an edge. If the attack succeeds, they do regular damage for the size they are growing to. On a Fantastic success, they do double damage and stun the target."
  },
  {
    id: "p137",
    name: "Headshot",
    set: "Ranged Weapons",
    cost: "15 Focus",
    page: 102,
    duration: "Instant",
    action: "Standard",
    description: "The character makes a ranged attack with trouble on an enemy within the weapon's range. If the attack is a success, the enemy takes double normal damage. On a Fantastic success, the enemy takes triple damage. Either way, i f the enemy suffers any actual damage, they are also stunned for one round."
  },
  {
    id: "p138",
    name: "Healing Factor",
    set: "",
    cost: "",
    page: 102,
    duration: "Permanent",
    action: "",
    description: "At the end of the character's turn, they regain Health equal to their Resilience. (This works outside of combat too, quickly bringing them back to full Health.)"
  },
  {
    id: "p139",
    name: "Heightened Senses 1",
    set: "",
    cost: "",
    page: 102,
    duration: "Permanent",
    action: "",
    description: "The character can sense things roughly twice as far away as normal. They also have an edge on Vigilance checks to perceive things, and enemies have trouble on checks they make to sneak past the character."
  },
  {
    id: "p140",
    name: "Heightened Senses 2",
    set: "",
    cost: "",
    page: 103,
    duration: "Permanent",
    action: "",
    description: "The character can sense things roughly four times as far away as normal. Their senses are so sharp that they can use some of them to compensate for the loss of others (say, if blinded or deafened). They can even listen to the heartbeat of a person in the same room to see if they are lying-although this is as reliable as a traditional lie detector: far from 100% and not admissible in court. They also have a double edge on Vigilance checks to perceive things, and enemies have double trouble on checks they make to sneak past the character."
  },
  {
    id: "141",
    name: "Hellfire Chains",
    set: "Magic",
    cost: "5 Focus",
    page: 103,
    duration: "Concentration",
    action: "Standard",
    description: "The character summons chains covered in hellfire and can use them to bind or smash targets. They can attack anyone within 10 spaces per rank and line of sight. Make an Ego attack. On a success, the target takes regular Health damage. On a Fantastic success, the target is grabbed and paralyzed too. If a target is grabbed by the hellfire chains, on each subsequent round, the character can make an Ego check against the ta.rget's Resilience Resilience defense to inflict regular Health damage and regular Focus damage. Breaking free from the hellfire chains requires a Melee check with a target number of 20."
  },
  {
    id: "p142",
    name: "Hex Bolt",
    set: "Magic",
    cost: "5 Focus",
    page: 103,
    duration: "Concentration",
    action: "Standard",
    description: "The character fires a hex bolt at a foe. Make an Ego check against the target's Agility defense. On a success, the attack does regular damage. On a Fantastic success, it does double damage and causes the target trouble for one round."
  },
  {
    id: "p143",
    name: "Hit and Run",
    set: "Melee Weapons",
    cost: "",
    page: 103,
    duration: "Instant",
    action: "Standard",
    description: "The character makes a close attack with an edge on an enemy. If the attack is a success, the enemy takes regular damage, and the character can make an additional movement up to half their Run Speed for free. On a Fantastic success, the enemy takes double damage and suffers the weapon's special effect."
  },
  {
    id: "p144",
    name: "Hit the Dirt",
    set: "Tactics",
    cost: "5 Focus",
    page: 103,
    duration: "Instant",
    action: "Reaction",
    description: "TRIGGER: an enemy in line of sight makes an attack on an ally within earshot. All allies within earshot can fall prone if they wish and are able to. If falling prone makes the ally an ineligible target for the initial attack, the attack automatically fails."
  },
  {
    id: "p145",
    name: "Hurled Shield Bash",
    set: "Shield Bearer",
    cost: "5 Focus",
    page: 104,
    duration: "Instant",
    action: "Standard",
    description: "RANGE: 10 spaces times character's rank. The character makes a ranged attack on an enemy. If the attack is a success, the enemy takes regular damage. On a Fantastic success, the enemy takes double damage and is knocked prone. The shield then bounces back to the character."
  },
  {
    id: "p146",
    name: "Hurled Shield Block",
    set: "Shield Bearer",
    cost: "5 Focus",
    page: 104,
    duration: "Instant",
    action: "Reaction",
    description: "TRIGGER: an enemy makes an attack against an Ally's Agility. RANGE: 5 spaces times the character's rank. The ally gains Health Damage Reduction equal to the character's Shield power against that attack. The shield then bounces back to the character."
  },
  {
    id: "p147",
    name: "Hurled Shield Deflection",
    set: "Shield Bearer",
    cost: "5 Focus",
    page: 104,
    duration: "Instant",
    action: "Reaction",
    description: "TRIGGER: an enemy makes an attack against an Ally's Agility. RANGE: 5 spaces times the character's rank. The enemy has trouble on the attack. The shield then bounces back to the character."
  },
  {
    id: "p148",
    name: "Iconic Weapon",
    set: "",
    cost: "",
    page: 104,
    duration: "Permanent",
    action: "",
    description: "The character is known for owning and using a unique and powerful weapon, like Mjolnir (Thor's hammer) or Captain America's shield. The Narrator must approve the details of this weapon. This power can be taken more than once, but each time must be with a different weapon."
  },
  {
    id: "p149",
    name: "Icy Tendrils of Ikthalon",
    set: "Magic",
    cost: "5 Focus",
    page: 104,
    duration: "Instant",
    action: "Standard",
    description: "RANGE: 10 spaces. The character makes an Ego check against the Agility defense of a target in their line of sight. If the attack is a success, it inflicts regular damage. On a Fantastic success, the enemy takes double that total damage and is paralyzed by the ice."
  },
  {
    id: "p150",
    name: "Illumination",
    set: "Illusion",
    cost: "",
    page: 105,
    duration: "Concentration",
    action: "Standard",
    description: "The character illuminates one object or point in line of sight, within 50 spaces, with bright light. The character can maintain concentration on the effect even if they move out of range or line of sight."
  },
  {
    id: "p151",
    name: "Images of Ikonn",
    set: "Magic",
    cost: "5 Focus",
    page: 105,
    duration: "Concentration",
    action: "Standard",
    description: "The character creates one sound and sight illusory duplicate per rank of one person they've met (including themselves). The duplicates look and sound exactly like the original and are under the character's complete control. They start in the same space as the character and instantly move into any open space around them, up to 2 spaces away, during which time the character can swap places with any of the duplicates. If the character is duplicating themselves, the character's player should secretly record which one is the actual character. The duplicates can move up to 10 spaces away from the character, and they can pretend to attack (and miss) opponents. Any attack that hits a duplicate instantly removes it. If the character successfully attacks someone or does something else to make the truth evident, the illusion ends. This spell can also be used to see through someone else's illusion. When used in this way, it gives the character a double edge on their Ego check."
  },
  {
    id: "p152",
    name: "Immovable",
    set: "Shield Bearer and Super-Strength",
    cost: "",
    page: 105,
    duration: "Instant",
    action: "Reaction",
    description: "TRIGGER: the character is knocked back or knocked prone. For every point of Melee defense the character has, they can reduce knockback by 1 space."
  },
  {
    id: "p153",
    name: "Information Upload",
    set: "Telepathy",
    cost: "5 Focus",
    page: 105,
    duration: "Concentration",
    action: "Standard",
    description: "The character transmits a knowledge-based label (a trait or tag) of their own to a target with whom they have established a telepathic link- willing or not. The label lasts until the target sleeps. The character can also impart any other kind of knowledge they have to a target this way. The process is almost instantaneous."
  },
  {
    id: "p154",
    name: "Inspiration",
    set: "",
    cost: "",
    page: 105,
    duration: "1 Round",
    action: "Standard",
    description: "The character inspires an ally in earshot. The ally gains an edge on all action checks until the start of the character's next turn."
  },
  {
    id: "p155",
    name: "Instant Replay",
    set: "Omniversal Travel",
    cost: "10 Focus",
    page: 105,
    duration: "Instant",
    action: "Reaction",
    description: "TRIGGER: the character fails a check. Once per battle, the character can make a second attempt at a check that they just failed, erasing and replacing the first attempt entirely."
  },
  {
    id: "p156",
    name: "Integrity",
    set: "",
    cost: "",
    page: 105,
    duration: "Permanent",
    action: "",
    description: "The character can use their Logic defense score against Ego attacks too."
  },
  {
    id: "p157",
    name: "Invisibility",
    set: "Illusion",
    cost: "5 Focus",
    page: 105,
    duration: "Concentration",
    action: "Standard",
    description: "The character becomes invisible. They have an edge on Agility checks to sneak past people, and enemies have trouble on Vigilance checks to perceive them. It's even harder to spot things that are invisible but aren't moving. Characters must be actively trying to do so to be able to make a Vigilance check."
  },
  {
    id: "p158",
    name: "Jinx",
    set: "Magic",
    cost: "5 Focus",
    page: 105,
    duration: "Concentration",
    action: "Standard",
    description: "The character makes an Ego check against the target's Ego defense. If it succeeds, the target has trouble on all actions. On a Fantastic success, the target loses their next standard action."
  },
  {
    id: "p159",
    name: "Jump 1",
    set: "Spider-Powers and Super-Strength",
    cost: "",
    page: 106,
    duration: "Permanent",
    action: "",
    description: "The character gains the Jump movement mode with a Jump Speed equal to their Run Speed. They can jump this distance in any direction, vertically as well as horizontally."
  },
  {
    id: "p160",
    name: "Jump 2",
    set: "Spider-Powers and Super-Strength",
    cost: "",
    page: 106,
    duration: "Permanent",
    action: "",
    description: "The character's Jump Speed is equal to their rank times their Run Speed. Outside of combat, they can move three times as fast."
  },
  {
    id: "p161",
    name: "Jump 3",
    set: "Spider-Powers and Super-Strength",
    cost: "",
    page: 106,
    duration: "Permanent",
    action: "",
    description: "Outside of combat, the character can jump up to 50 times their Jump Speed."
  },
  {
    id: "p162",
    name: "Keep Moving",
    set: "Tactics",
    cost: "",
    page: 106,
    duration: "Instant",
    action: "Reaction",
    description: "TRIGGER: an ally in line of sight and earshot is demoralized or stunned. The demoralized or stunned condition ends."
  },
  {
    id: "p163",
    name: "Kill Zone",
    set: "Ranged Weapons",
    cost: "15 Focus",
    page: 106,
    duration: "Instant",
    action: "Reaction",
    description: "TRIGGER: an enemy in the character's line of sight starts to move. The character makes a ranged attack on the enemy. If the attack is a success, the enemy takes normal damage. On a Fantastic success, the enemy takes double damage. Either way, the character regains their reaction. Each target can be affected by this attack by this character only once per round."
  },
  {
    id: "p164",
    name: "Leaping Leglock",
    set: "Martial Arts",
    cost: "15 Focus",
    page: 106,
    duration: "Instant",
    action: "Standard",
    description: "The character makes a close attack against an enemy. If the attack is a success, the enemy is grabbed and dealt regular damage. On a Fantastic success, the enemy takes double damage and is grabbed and stunned for one round. Either way, both the character and the enemy are knocked prone."
  },
  {
    id: "p165",
    name: "Leech Life",
    set: "Magic",
    cost: "5 Focus",
    page: 106,
    duration: "Instant",
    action: "Reaction",
    description: "The character makes an Ego attack against the target's Resilience defense. If it succeeds, the target takes regular Health damage, and the character heals half that much Health for themselves. On a Fantastic success, the character heals the full Health damage instead."
  },
  {
    id: "p166",
    name: "Leg Sweep",
    set: "Martial Arts",
    cost: "5 Focus",
    page: 106,
    duration: "Instant",
    action: "Standard",
    description: "The character makes a close attack. If it succeeds, the enemy takes regular damage and is knocked prone. If it's a Fantastic success, the enemy is stunned for one round too."
  },
  {
    id: "p167",
    name: "Levitation",
    set: "Telekinesis",
    cost: "",
    page: 106,
    duration: "Permanent",
    action: "",
    description: "The character can move through the air in any direction at their Run Speed."
  },
  {
    id: "p168",
    name: "Lightning Actions",
    set: "Super-Speed",
    cost: "",
    page: 106,
    duration: "Permanent",
    action: "",
    description: "The character has one extra standard action and one extra reaction each turn. Additionally, they can turn their Marvel die to a Fantastic success when making an initiative check."
  },
  {
    id: "p169",
    name: "Machine Telepathy",
    set: "Telepathy",
    cost: "",
    page: 107,
    duration: "Concentration",
    action: "Standard",
    description: "The character can communicate telepathically with one machine at a time, and they must have met or seen the machine before. The communication can be verbal, visual or even more complex, such as imparting location information. There is no limit to the distance of the communication, as long as the character and the machine are in the same dimension. Simple machines do not have much to offer in the way of conversation, but they are also generally compliant with requests. Complex machines-like computers, smartphones and other electronics-are also often compliant, but if they are secured in any way, they usually refuse to communicate with strangers. A Logic check can get the character past such security, and the Narrator should set the target number according to the strength of the security."
  },
  {
    id: "P170",
    name: "Macrodimensional Travel",
    set: "Resize",
    cost: "15 Focus",
    page: 107,
    duration: "Instant",
    action: "Standard",
    description: "The character can grow enough to travel into the Macroverse, the Overspace or other dimensions of enlarged space. They can return to their normal size at will. Note that this is something that most characters would rarely want to do, as it removes them entirely from their regular universe and places them in a dimension in which the rules of time and space work differently. An hour in the Macroverse, for example, is roughly equivalent to a month in a regular universe. A trip to the Overspace is too overwhelming for most minds to handle."
  },
  {
    id: "p171",
    name: "Memory Blip",
    set: "Telepathy",
    cost: "5 Focus",
    page: 107,
    duration: "Permanent",
    action: "Standard",
    description: "The character causes a target with whom they've established a Telepathic Link to forget something that's happened in the past hour. This gap can be up to an hour in length. The character makes a Logic check against the target's Logic defense. On a success, the memories are forgotten. On a Fantastic success, the target has trouble on checks to recover such memories in the future. Any time the target is given good reason to question the blank in their memory, they can make a Logic check to recover their memory. If they succeed, the original memory floods back. On a Fantastic success, they know for sure who did this to them."
  },
  {
    id: "p172",
    name: "Mental Punch",
    set: "Telepathy",
    cost: "",
    page: 108,
    duration: "Instant",
    action: "Standard",
    description: "The character makes a Melee attack against a target. If the attack is a success, it inflicts regular Focus damage (instead of Health damage). On a Fantastic success, the target takes double damage instead and is stunned for one round."
  },
  {
    id: "p173",
    name: "Mental Shelter",
    set: "Telepathy",
    cost: "10 Focus",
    page: 108,
    duration: "Concentration",
    action: "Standard",
    description: "The character extends their mental defenses to protect any chosen people within up to 5 spaces times their rank. The protected targets are granted Focus Damage Reduction equal to the character's Uncanny power."
  },
  {
    id: "p174",
    name: "Microdimensional Travel",
    set: "Resize",
    cost: "15 Focus",
    page: 108,
    duration: "Instant",
    action: "Standard",
    description: "The character can shrink enough to travel into subatomic realms. They can return to their normal size at will. Note that this is something that most characters would rarely want to do, as it removes them entirely from their regular universe and places them in a dimension in which the rules of time and space work differently. The Underspace, for example, might make a fine place to hide, but there's little else of interest there."
  },
  {
    id: "p175",
    name: "Mighty 1",
    set: "",
    cost: "",
    page: 108,
    duration: "Permanent",
    action: "",
    description: "Treat the character as one size bigger for lifting, carrying, swinging and throwing things. They also add +1 to their Melee damage multiplier, and they gain a +1 bonus to Melee checks other than attacks."
  },
  {
    id: "p176",
    name: "Mighty 2",
    set: "",
    cost: "",
    page: 109,
    duration: "Permanent",
    action: "",
    description: "Treat the character as two sizes bigger for lifting, carrying, swinging and throwing things. They also add +2 to their Melee damage multiplier, and they gain a +2 bonus to Melee checks other than attacks."
  },
  {
    id: "p177",
    name: "Mighty 3",
    set: "",
    cost: "",
    page: 109,
    duration: "Permanent",
    action: "",
    description: "Treat the character as three sizes bigger for lifting, carrying, swinging and throwing things. They also add +3 to their Melee damage multiplier, and they gain a +3 bonus to Melee checks other than attacks."
  },
  {
    id: "p178",
    name: "Mighty 4",
    set: "",
    cost: "",
    page: 109,
    duration: "Permanent",
    action: "",
    description: "Treat the character as four sizes bigger for lifting, carrying, swinging and throwing things. They also add +4 to their Melee damage multiplier, and they gain a +4 bonus to Melee checks other than attacks."
  },
  {
    id: "p179",
    name: "Mind Interrogation",
    set: "Telepathy",
    cost: "5 Focus",
    page: 109,
    duration: "1 Round",
    action: "Standard",
    description: "The character can delve into the mind of a single person with whom they have established a telepathic link. This requires a Logic check against the target's Logic defense. On a success, the character can ask a single simple question and get the answer from the target's mind. On a Fantastic success, the character can get more complex information."
  },
  {
    id: "p180",
    name: "Mind Reading",
    set: "Telepathy",
    cost: "",
    page: 109,
    duration: "1 Round",
    action: "Standard",
    description: "The character can read the thoughts of a single person with whom they have established a Telepathic Link. This requires a Logic check against the target's Logic defense. On a success, the character can read the target's surface thoughts. On a Fantastic success, the character can ask a single simple question and get the answer from the target's mind."
  },
  {
    id: "p181",
    name: "Mirage",
    set: "Telepathy",
    cost: "10 Focus",
    page: 109,
    duration: "Concentration",
    action: "Standard",
    description: "The character creates a full-sensory mirage that affects any target with whom they have established a link. The mirage can be of anything the character desires, and it can move freely."
  },
  {
    id: "p182",
    name: "Mirror Images",
    set: "Illusion",
    cost: "10 Focus",
    page: 109,
    duration: "Concentration",
    action: "Standard",
    description: "The character creates one sound and sight illusory duplicate of themselves per rank. The duplicates look and sound exactly like them and are under their complete control. They start in the same space as the character and instantly move into any open space around them, up to 2 spaces away, during which time the character can swap places with any of the duplicates. The character's player should secretly record which one is the actual character. The duplicates can move up to 10 spaces away from the character, and they can pretend to attack (and miss) opponents. Any attack that hits a duplicate instantly removes it. If the character successfully attacks someone or does something else to make the truth evident, the illusion ends."
  },
  {
    id: "p183",
    name: "Mists of Morpheus",
    set: "Magic",
    cost: "10 Focus",
    page: 109,
    duration: "Concentration",
    action: "Standard",
    description: "The character makes an Ego check against the target's Vigilance defense. On a success, the target is stunned and remains that way while the character concentrates. On a Fantastic success, the target falls asleep instead."
  },
  {
    id: "p184",
    name: "Mists of Munnopor",
    set: "Magic",
    cost: "5 Focus",
    page: 109,
    duration: "Concentration",
    action: "Standard",
    description: "The character creates a thick fog for up to 100 spaces per rank around them that blocks all line of sight bey ond 10 spaces and keeps people or creatures inside it from flying, gliding or webslinging."
  },
  {
    id: "p185",
    name: "Molecular Destabilization",
    set: "Super-Speed",
    cost: "15 Focus",
    page: 110,
    duration: "Instant",
    action: "Standard",
    description: "The character makes a close attack against an object their size or smaller. If the attack is a success, the object explodes. All targets within 2 spaces of the objectother than the character-take regular damage. On a Fantastic success, double the damage and ignore any Health Damage Reduction."
  },
  {
    id: "p186",
    name: "Multiversal Portal",
    set: "Omniversal Travel",
    cost: "15 Focus",
    page: 110,
    duration: "Concentration",
    action: "Standard",
    description: "The character opens a glowing portal in a space next to them that moves anything that enters it between that space and its destination, which forms a matched glowing portal in the other place. The other end of the portal must be in a clear space in another universe that the character has been to. Anything can move through the portal in either direction until it is closed, which the character can do at will."
  },
  {
    id: "p187",
    name: "Multiversal Travel",
    set: "Omniversal Travel",
    cost: "10 Focus",
    page: 110,
    duration: "Instant",
    action: "Standard or Movement",
    description: "The character instantly moves from their current universe to another universe. For instance: from Earth-616 to Earth-65. When they move to the other universe, they can arrive in any place they've been to before. Otherwise, they arrive at the closest available corresponding space in the other universe."
  },
  {
    id: "p188",
    name: "Multiversal Travel Other",
    set: "Omniversal Travel",
    cost: "15 Focus",
    page: 110,
    duration: "Instant",
    action: "Standard, Movement, or Reaction",
    description: "TRIGGER: the target is grabbed. The character makes an Ego check against the Vigilance of a target they have grabbed. If the check is successful, the character can send the target to another universe. The target can be sent to any location in that universe that the character has been to before. Otherwise, the target arrives at the closest available corresponding space in the other universe."
  },
  {
    id: "p189",
    name: "Multiversal Travel Together",
    set: "Omniversal Travel",
    cost: "10 Focus",
    page: 110,
    duration: "Instant",
    action: "Standard, Movement, or Reaction",
    description: "TRIGGER: the target is grabbed. The character moves to a different universe, taking any person they are touching with them. If the target does not wish to come along, the character must grab them first. When they move to the other universe, they can arrive in any place they've been to before. Otherwise, they arrive at the closest available corresponding space in the other universe."
  },
  {
    id: "p190",
    name: "On Your Feet",
    set: "Tactics",
    cost: "5 Focus",
    page: 111,
    duration: "Instant",
    action: "Reaction",
    description: "TRIGGER: an ally in line of sight and earshot is knocked prone. All prone allies within earshot, who are able to, can immediately stand up for free. Allies currently unable to stand up for any reason are not affected."
  },
  {
    id: "p191",
    name: "Operations Center",
    set: "Tactics",
    cost: "15 Focus",
    page: 111,
    duration: "Concentration",
    action: "Standard",
    description: "The character inspires one or more allies of their choice in earshot, up to the character's Vigilance defense. Affected allies gain an edge on all action checks until the start of the character's next turn. The character breaks concentration on this power if they use a movement action."
  },
  {
    id: "p192",
    name: "Orchestra of Overkill",
    set: "Ranged Weapon",
    cost: "15 Focus",
    page: 111,
    duration: "Instant",
    action: "Standard",
    description: "The character makes an Agility check and compares that against the Agility defense of every enemy within 10 spaces and in their line of sight. Each success does half regular damage. On a Fantastic success, each enemy takes full damage instead and is bleeding."
  },
  {
    id: "p193",
    name: "Orders",
    set: "Telepathy",
    cost: "15 Focus",
    page: 111,
    duration: "Permanent",
    action: "Standard",
    description: "The character gives an order to a target with whom they've established a Telepathic Link and who has no Focus left. The character makes a Logic check against the target's Logic defense. On a success, the target complies with the orders. On a Fantastic success, the character gains an edge the next time they use this power against this same target. The command must be to do something that can be completed in a n hour or less. If it involves harming someone, the character has trouble on the check. If it would cause the target to harm themselves, the character has double trouble on the check."
  }
];

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
