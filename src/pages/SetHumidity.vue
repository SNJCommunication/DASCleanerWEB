<template>
  <div>
    <div class="pagetitle">
      <h2>습도설정</h2>
      <img src="../assets/img/daslogo.png" alt />
    </div>
    <div class="optionpanel">
      <a href="./#/">
        <img src="../assets/img/icon_home.png" alt="refresh" />
        <div>홈</div>
      </a>
    </div>
    <div class="vehicleimg">
      <img src="../assets/img/sonata.png" alt />
    </div>
    <div class="menupanel">
      <div class="row">
        <div class="card">
          <div class="d-flex justify-content-around">
            <div>
              <div class="menubtn">
                <input type="number" v-model="humidity" />
                <span>%</span>
              </div>
              <div>설정습도</div>
            </div>
            <div>
              <div class="menubtn">
                <span id="currentHumidity">80</span>
                <span>%</span>
              </div>
              <div>현재습도</div>
            </div>
          </div>
          <button class="btn_ok" @click="setHumidity">확인</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      humidity: this.$store.state.humidity,
    };
  },
  methods: {
    setHumidity: function () {
      this.$store.state.humidity = this.humidity;
      window.DasApp.setHumidity(this.humidity);
    },
  },
};

function getHumidity(h) {
  var btn = document.getElementById("currentHumidity");
  btn.innerHTML = h;
}
</script>

<style scoped >
.pagetitle {
  margin-left: 20px;
  margin-top: 20px;
  text-align: left;
  font-family: "Do Hyeon", sans-serif;
  font-size: 1.5rem;
}

.pagetitle h2 {
  margin-bottom: -6px;
}

.pagetitle img {
  width: 77px;
  height: 24px;
  margin-right: 10px;
}

.optionpanel {
  position: absolute;
  right: 20px;
  top: 16px;
  font-family: "Do Hyeon", sans-serif;
  font-size: 0.9rem;
  text-align: center;
}

.optionpanel img {
  width: 24px;
  height: 24px;
}

.vehicleimg {
  width: 100vw;
  margin-top: 40px;
}

.vehicleimg img {
  width: 80vw;
}

.menupanel {
  margin-top: 40px;
  margin-bottom: 10px;
}

.menubtn {
  border-radius: 100%;
  width: 70px;
  height: 70px;
  box-shadow: 0px 0px 5px 2px #dddddd;
  padding-top: 19px;
}

.menubtn:active {
  box-shadow: 0px 0px 5px 2px #88e2f2;
}

.menubtn span:nth-child(1) {
  width: 26px;
  height: 26px;
  margin-top: 15px;
  font-size: 1.4rem;
}

.menubtn span:nth-child(2) {
  font-size: 0.7rem;
}

.menubtn input {
  font-size: 1.4rem;
  width: 50px;
  border: 1px solid #dddddd;
}

.card {
  width: 94vw;
  box-shadow: 0px 0px 5px 1px #dddddd;
  margin-left: 7vw;
  padding-top: 10px;
  padding-bottom: 20px;
  font-family: "Do Hyeon", sans-serif;
  font-size: 0.9rem;
}

.card div {
  margin-top: 10px;
}

.startstop {
  width: 100vw;
  height: 80px;
  position: absolute;
  bottom: 60px;
  text-align: left;
  padding-left: 20px;
}

.startstop img {
  width: 60px;
  height: 60px;
  float: right;
  margin-right: 10px;
}

.startstop span {
  margin-top: 30px;
  float: left;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 500;
}

.btn_ok {
  margin-top: 20px;
  border: 1px solid #222;
  border-radius: 5px;
  background-color: #fff;
  height: 30px;
  width: 100px;
  margin-left: 50%;
  transform: translateX(-50%);
}
</style>