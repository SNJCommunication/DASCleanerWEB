<template>
  <div>
    <div class="pagetitle">
      <h2>LED제어</h2>
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
          <div class="modetitle">살균모드</div>
          <div class="d-flex justify-content-around">
            <div @click="setUltraOn">
              <div class="menubtn">
                <img src="../assets/img/icon_power.png" alt />
              </div>
              <div>ON</div>
            </div>
            <div @click="setUltraOff">
              <div class="menubtn">
                <img src="../assets/img/icon_poweroff.png" alt />
              </div>
              <div>OFF</div>
            </div>
          </div>
          <div class="modetitle">자연광모드</div>
          <div class="d-flex justify-content-around">
            <div @click="setLightOn">
              <div class="menubtn">
                <img src="../assets/img/icon_power.png" alt />
              </div>
              <div>ON</div>
            </div>
            <div @click="setLightOff">
              <div class="menubtn">
                <img src="../assets/img/icon_poweroff.png" alt />
              </div>
              <div>OFF</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    setUltraOn: function () {
      window.DasApp.setUltra("O");
    },
    setUltraOff: function () {
      window.DasApp.setUltra("F");
    },
    setLightOn: function () {
      window.DasApp.setLight("O");
    },
    setLightOff: function () {
      window.DasApp.setLight("F");
    },
  },
};
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
}

.menubtn:active {
  box-shadow: 0px 0px 5px 2px #88e2f2;
}

.menubtn img {
  width: 30px;
  height: 30px;
  margin-top: 20px;
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
  font-size: 1.2rem;
}

.modetitle {
  margin-top: 30px;
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