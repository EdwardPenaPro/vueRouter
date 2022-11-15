<template>
  <div id="masterContainer">
    <h1 class="title">RICARDO Y MAURICO</h1>
    <div class="masterContainer">
      <div class="rectangle">
        <div
          class="character">
          <div class="characterName">
            <img
              class="characterImg"
              :src="character.image"
              alt="character.name"
            />
            <div class="data">
              <h2 ref="#">
                <a href="#"> {{ character.name }}</a>
              </h2>
              <h3 ref="#">{{ character.species }}</h3>
              <h4 ref="#">{{ character.gender }}</h4>
              <h5 ref="#">{{ character.location.name }}</h5>
              <div class="row">
                <span
                  id="status"
                  class="green"
                  v-if="character.status == 'Alive'"
                ></span>
                <span
                  id="status"
                  class="red"
                  v-else-if="character.status == 'Dead'"
                ></span>
                <span> {{ character.status }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>
<script>
export default {
  name: "character",
  data() {
    return { character: {}};
  },
  methods: {
    callingAPI(url) {
      fetch(url).then((res) =>
        res.json().then((data) => {
          this.character = data;
        })
      );
    },
  },
  mounted() {
    this.callingAPI("https://rickandmortyapi.com/api/character/1");
  },
};
</script>

<style scoped>
.title {
  margin-left: 5px;
  display: flex;
  text-align: center;
  align-content: center;
}


#row {
  display: inline-flex;
}
a {
  text-decoration: none;
  color: white;
}
a:hover {
  color: green;
}
h1 {
  font-weight: bold;
  color: #eee;
  font-size: 24px;
}
#masterContainer {
  font-family: "Get Schwifty";
  letter-spacing: 2px;
  display: flex;
  justify-content: center;
  align-content: center;
  background-color: rgb(0, 0, 0);
  text-align: center;
}
.masterContainer {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
}

.rectangle {
  display: flex;
  border-radius: 35%;
  background-color: greenyellow;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: inherit;
  animation: glow 1s infinite alternate;
}
@keyframes glow {
  from {
    box-shadow: 0 0 10px -10px green;
  }
  to {
    box-shadow: 0 0 10px 10px greenyellow;
  }
}

.character {
  width: 500px;
  border-radius: 5%;
  display: flex;
  flex-direction: row;
  padding: 1%;
}
.character:hover {
  box-shadow: 0px 3px 14px 0px rgba(44, 198, 36, 0.75);
  -webkit-box-shadow: 0px 3px 14px 0px rgba(61, 210, 27, 0.75);
  -moz-box-shadow: 0px 3px 14px 0px rgba(85, 255, 0, 0.819);
}

.data {
  padding-left: 10px;
}
.characterImg {
  border-radius: 5%;
}
.characterName {
  display: flex;
  text-align: center;
  color: aliceblue;
  text-shadow: 2px 2px 5px rgb(13, 225, 87);
}
h2:hover {
  color: green;
}

#status {
  display: inline-flex;
  height: 10px;
  width: 10px;
  border-radius: 50%;
  margin-top: 5px;
}
.green {
  background-color: rgb(5, 255, 5);
}
.red {
  background-color: red;
}
.row {
  display: inline-flex;
}
@font-face {
  font-family: "Get Schwifty";
  src: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/3089507/get-schwifty.woff")
    format("woff");
}
</style>
