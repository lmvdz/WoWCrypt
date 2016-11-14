const raceName = (characterRace) => {
  switch (characterRace) {
    case 1:
      return 'Human'
    case 2:
      return 'Orc'
    case 3:
      return 'Dwarf'
    case 4:
      return 'Undead'
    case 5:
      return 'Night Elf'
    case 6:
      return 'Tauren'
    case 7:
      return 'Gnome'
    case 8:
      return 'Troll'
    case 9:
      return 'Goblin'
    case 10:
      return 'Blood Elf'
    case 11:
      return 'Draenei'
    case 22:
      return 'Worgen'
    case 24:
    case 25:
    case 26:
      return 'Pandaren'
  }
}
const raceColor = (characterRace) => {
  switch (characterRace) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 11:
    case 22:
    case 25:
      return '#0066ff'
    case 2:
    case 4:
    case 6:
    case 8:
    case 9:
    case 10:
    case 26:
      return '#ff0000'
    case 24:
      return '#ffff00'
  }
}
const genderName = (characterGender) => {
  switch (characterGender) {
    case 0:
      return 'Unknown'
    case 1:
      return 'Male'
    case 2:
      return 'Female'
  }
}
const genderColor = (characterGender) => {
  switch (characterGender) {
    case 1:
      return '#bbbbbb'
    case 2:
      return '#000aff'
    case 3:
      return '#ff00bf'
  }
}
const classColor = (characterClass) => {
  switch (characterClass) {
    case 1:
      return '#C79C6E'
    case 2:
      return '#F58CBA'
    case 3:
      return '#ABD473'
    case 4:
      return '#FFF569'
    case 5:
      return '#FFFFFF'
    case 6:
      return '#C41F3B'
    case 7:
      return '#0070DE'
    case 8:
      return '#69CCF0'
    case 9:
      return '#9482C9'
    case 10:
      return '#00FF96'
    case 11:
      return '#FF7D0A'
    case 12:
      return '#A330C9'
    default:
      return '#EEEEEE'
  }
}
const className = (characterClass) => {
  switch (characterClass) {
    case 1:
      return 'Warrior'
    case 2:
      return 'Paladin'
    case 3:
      return 'Hunter'
    case 4:
      return 'Rogue'
    case 5:
      return 'Priest'
    case 6:
      return 'Death Knight'
    case 7:
      return 'Shaman'
    case 8:
      return 'Mage'
    case 9:
      return 'Warlock'
    case 10:
      return 'Monk'
    case 11:
      return 'Druid'
    case 12:
      return 'Demon Hunter'
    default:
      return 'Unknown'
  }
}
let resource = {
  raceName,
  raceColor,
  genderName,
  genderColor,
  classColor,
  className
}
export default resource
