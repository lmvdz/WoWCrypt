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
              <a title="Specifics" id="" @clicked="show = !show"></a>
            </div>
          </h3>
      </div>
      <container v-if="show" class="specifics">
        <div>
          <ul>
            <li>
              <a  class="link" @click="getCharacterAchievements(characterData.realm, characterData.name)">Achievements</a>
                <characterAchievements :achievementData="achievementData"></characterAchievements>
            </li>
            <li>
              <a  class="link" @click="getCharacterAppearance(characterData.realm, characterData.name)">Appearance</a>
                <characterAppearance :appearanceData="appearanceData"></characterAppearance>
            </li>
            <li>
              <a  class="link" @click="getCharacterFeed(characterData.realm, characterData.name)">Feed</a>
                <characterFeed :feedData="feedData"></characterFeed>
            </li>
            <li>
              <a  class="link" @click="getCharacterGuild(characterData.realm, characterData.name)">Guild</a>
                <characterGuild :guildData="guildData"></characterGuild>
            </li>
            <li>
              <a  v-if="characterData.class === 3"class="link" @click="getCharacterHunterPets(characterData.realm, characterData.name)">Hunter Pets</a>
                <characterHunterPets :hunterPetsData="hunterPetsData"></characterHunterPets>
            </li>
            <li>
              <a  class="link" @click="getCharacterItems(characterData.realm, characterData.name)">Items</a>
                <characterItems :itemsData="itemsData"></characterItems>
            </li>
            <li>
              <a  class="link" @click="getCharacterGuild(characterData.realm, characterData.name)">Guild</a>
                <characterGuild :guildData="guildData"></characterGuild>
            </li>

            <li>
              <a  class="link" @click="getCharacterPets(characterData.realm, characterData.name)">Pets</a>
                <characterPets :petsData="petsData"></characterPets>
            </li>
            <li>
              <a  class="link" @click="getCharacterPetSlots(characterData.realm, characterData.name)">Pet Slots</a>
                <characterPetSlots :petslotsData="petslotsData"></characterPetSlots>
            </li>
            <li>
              <a  class="link" @click="getCharacterProfessions(characterData.realm, characterData.name)">Professions</a>
                <characterProfessions :prefessionsData="prefessionsData"></characterProfessions>
            </li>

            <li>
              <a  class="link" @click="getCharacterPvp(characterData.realm, characterData.name)">PVP</a>
                <characterPVP :pvpData="pvpData"></characterPVP>
            </li>
            <li>
              <a  class="link" @click="getCharacterQuests(characterData.realm, characterData.name)">Quests</a>
                <characterQuests :questsData="questsData"></characterQuests>
            </li>
            <li>
              <a  class="link" @click="getCharacterReputation(characterData.realm, characterData.name)">Reputation</a>
                <characterReputation :reputationData="reputationData"></characterReputation>
            </li>

            <li>
              <a  class="link" @click="getCharacterStatistics(characterData.realm, characterData.name)">Statistics</a>
              <characterStatistics :statisticsData="statisticsData"></characterStatistics>
            </li>
            <li>
              <a  class="link" @click="getCharacterStats(characterData.realm, characterData.name)">Stats</a>
                <characterStats :statsData="statsData"></characterStats>
            </li>
            <li>
              <a  class="link" @click="getCharacterTalents(characterData.realm, characterData.name)">Talents</a>
                <characterTalents :talentsData="talentsData"></characterTalents>
            </li>
            <li><a  class="link" @click="getCharacterTitles(characterData.realm, characterData.name)">Titles</a>
              <characterTitles :titlesData="titlesData"></characterTitles>
            </li>
            <li><a  class="link" @click="getCharacterAudit(characterData.realm, characterData.name)">Audit</a>
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

export default {
  components: {
    Container,
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
