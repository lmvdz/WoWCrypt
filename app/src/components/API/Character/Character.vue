<template>
  <container class="characterHolder">
    <div>
      <div class="character">
          <h2>
            <span :style="{color: characterData.classColor}">{{characterData.name}}</span>
          </h2>
          <h3>
            Realm: <span id="characterRealm">{{characterData.realm}}</span><br>
            Level: <span :style="{color: characterData.levelColor}">{{characterData.level}}</span><br>
            Class: <span :style="{color: characterData.classColor}" id="characterClass">{{characterData.classAsName}}</span><br>
            Gender: <span :style="{color: characterData.genderColor}"></span>{{characterData.genderName}}<br>
            Race: <span :style="{color: characterData.raceColor}">{{characterData.raceName}}</span>
            <div :useButton="useButton" v-if="useButton">
              <eButtonPrimary title="Specifics" id="" @clicked="show = !show"></eButtonPrimary>
            </div>
          </h3>
      </div>
      <container v-if="show" class="specifics">
        <div>
          <ul>
            <li>
              <eButtonPrimary disabled=true title="Achievements" id="achievements" @clicked="getCharacterAchievements(characterData.realm, characterData.name)"></eButtonPrimary>
                <characterAchievements :achievementData="achievementData"></characterAchievements>
            </li>
            <li>
              <eButtonPrimary disabled=true title="Appearance" id="appearance" @clicked="getCharacterAppearance(characterData.realm, characterData.name)"></eButtonPrimary>
                <characterAppearance :appearanceData="appearanceData"></characterAppearance>
            </li>
            <li>
              <eButtonPrimary disabled=true title="Feed" id="feed" @clicked="getCharacterFeed(characterData.realm, characterData.name)"></eButtonPrimary>
                <characterFeed :feedData="feedData"></characterFeed>
            </li>
            <li>
              <eButtonPrimary disabled=true title="Guild" id="guild" @clicked="getCharacterGuild(characterData.realm, characterData.name)"></eButtonPrimary>
                <characterGuild :guildData="guildData"></characterGuild>
            </li>
            <li>
              <eButtonPrimary disabled=true v-if="characterData.class === 3"title="Hunter Pets" id="hunterpets" @clicked="getCharacterHunterPets(characterData.realm, characterData.name)"></eButtonPrimary>
                <characterHunterPets :hunterPetsData="hunterPetsData"></characterHunterPets>
            </li>
            <li>
              <eButtonPrimary disabled=true title="Items" id="items" @clicked="getCharacterItems(characterData.realm, characterData.name)"></eButtonPrimary>
                <characterItems :itemsData="itemsData"></characterItems>
            </li>
            <li>
              <eButtonPrimary disabled=true title="Guild" id="guild" @clicked="getCharacterGuild(characterData.realm, characterData.name)"></eButtonPrimary>
                <characterGuild :guildData="guildData"></characterGuild>
            </li>

            <li>
              <eButtonPrimary disabled=true title="Pets" id="pets" @clicked="getCharacterPets(characterData.realm, characterData.name)"></eButtonPrimary>
                <characterPets :petsData="petsData"></characterPets>
            </li>
            <li>
              <eButtonPrimary disabled=true title="Pet Slots" id="petslots" @clicked="getCharacterPetSlots(characterData.realm, characterData.name)"></eButtonPrimary>
                <characterPetSlots :petslotsData="petslotsData"></characterPetSlots>
            </li>
            <li>
              <eButtonPrimary disabled=true title="Professions" id="prefessions" @clicked="getCharacterProfessions(characterData.realm, characterData.name)"></eButtonPrimary>
                <characterProfessions :prefessionsData="prefessionsData"></characterProfessions>
            </li>

            <li>
              <eButtonPrimary disabled=true title="PVP" id="pvp" @clicked="getCharacterPvp(characterData.realm, characterData.name)"></eButtonPrimary>
                <characterPVP :pvpData="pvpData"></characterPVP>
            </li>
            <li>
              <eButtonPrimary disabled=true title="Quests" id="quests" @clicked="getCharacterQuests(characterData.realm, characterData.name)"></eButtonPrimary>
                <characterQuests :questsData="questsData"></characterQuests>
            </li>
            <li>
              <eButtonPrimary disabled=true title="Reputation" id="reputation" @clicked="getCharacterReputation(characterData.realm, characterData.name)"></eButtonPrimary>
                <characterReputation :reputationData="reputationData"></characterReputation>
            </li>

            <li>
              <eButtonPrimary disabled=true title="Statistics" id="statistics" @clicked="getCharacterStatistics(characterData.realm, characterData.name)"></eButtonPrimary>
              <characterStatistics :statisticsData="statisticsData"></characterStatistics>
            </li>
            <li>
              <eButtonPrimary disabled=true title="Stats" id="stats" @clicked="getCharacterStats(characterData.realm, characterData.name)"></eButtonPrimary>
                <characterStats :statsData="statsData"></characterStats>
            </li>
            <li>
              <eButtonPrimary disabled=true title="Talents" id="talents" @clicked="getCharacterTalents(characterData.realm, characterData.name)"></eButtonPrimary>
                <characterTalents :talentsData="talentsData"></characterTalents>
            </li>
            <li><eButtonPrimary disabled=true title="Titles" id="titles" @clicked="getCharacterTitles(characterData.realm, characterData.name)"></eButtonPrimary>
              <characterTitles :titlesData="titlesData"></characterTitles>
            </li>
            <li><eButtonPrimary disabled=true title="Audit" id="audit" @clicked="getCharacterAudit(characterData.realm, characterData.name)"></eButtonPrimary>
              <characterAudit :auditData="auditData"></characterAudit>
            </li>
          </ul>
        </div>
      </container>
    </div>
  </container>
</template>

<script>
import CharacterAchievements from './CharacterAchievements'
import CharacterAppearance from './CharacterAppearance'
import CharacterFeed from './CharacterFeed'
import CharacterGuild from './CharacterGuild'
import CharacterHunterPets from './CharacterHunterPets'
import CharacterItems from './CharacterItems'
import CharacterMounts from './CharacterMounts'
import CharacterPets from './CharacterPets'
import CharacterPetSlots from './CharacterPetSlots'
import CharacterProfessions from './CharacterProfessions'
import CharacterPVP from './CharacterPVP'
import CharacterQuests from './CharacterQuests'
import CharacterReputation from './CharacterReputation'
import CharacterStatistics from './CharacterStatistics'
import CharacterStats from './CharacterStats'
import CharacterTalents from './CharacterTalents'
import CharacterTitles from './CharacterTitles'
import CharacterAudit from './CharacterAudit'
import Container from '../../Container/Container'
import EButtonPrimary from '../../EButton/EButtonPrimary'

export default {
  components: {
    Container,
    EButtonPrimary,
    CharacterAchievements,
    CharacterAppearance,
    CharacterFeed,
    CharacterGuild,
    CharacterHunterPets,
    CharacterItems,
    CharacterMounts,
    CharacterPets,
    CharacterPetSlots,
    CharacterProfessions,
    CharacterPVP,
    CharacterQuests,
    CharacterReputation,
    CharacterStatistics,
    CharacterStats,
    CharacterTalents,
    CharacterTitles,
    CharacterAudit
  },
  name: 'character',
  props: ['characterData', 'useButton'],
  data () {
    return {
      show: false,
      achievementData: {},
      appearanceData: {},
      feedData: {},
      guildData: {},
      hunterPetsData: {},
      itemsData: {},
      mountsData: {},
      petsData: {},
      petslotsData: {},
      prefessionsData: {},
      pvpData: {},
      questsData: {},
      reputationData: {},
      statisticsData: {},
      statsData: {},
      talentsData: {},
      titlesData: {},
      auditData: {}
    }
  }
}
</script>

<style scoped>
ul{
  height: 15vh;
  overflow: hidden;
  overflow-x: hidden;
  overflow-y: scroll;
  margin: 0;
  padding: 0;
}
li{
  display: inline;
  list-style-type: none;
  float: left;
  padding-left: 10px;
  margin-left: 0;
}
#characterRealm{
  text-align: left;
  color: #1cc775;
}
#characterLevel{
  text-align: left;
  color: #0e94ac;
}
#characterClass{
  text-align: left;
}
#characterGender{
  text-align: left;
  color: #c71c59;
}
#characterRace{
  text-align: left;
  color: #6bac0e;
}
</style>
