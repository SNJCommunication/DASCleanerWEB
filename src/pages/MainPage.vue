<template>
  <div>
    <div class="pagetitle">
      <h2>회전형 살균 제어기</h2>
      <img src="../assets/img/daslogo.png" alt />
    </div>
    <div id="optionpanel" class="optionpanel" @click="goodgood">
      <img src="../assets/img/icon_connect.png" alt="refresh" />
      <div>통신설정</div>
    </div>
    <div class="vehicleimg">
      <img src="../assets/img/sonata.png" alt />
    </div>
    <div class="menupanel">
      <div class="row">
        <div class="card">
          <div class="d-flex justify-content-around">
            <div @click="doorlock">
              <div class="menubtn">
                <img src="../assets/img/icon_lock.png" class="align-self-center" alt />
              </div>
              <div>문 잠금</div>
            </div>
            <div @click="start">
              <div class="menubtn">
                <img src="../assets/img/icon_power.png" class="align-self-center" alt />
              </div>
              <div>시동 켜기</div>
            </div>
            <div @click="doorunlock">
              <div class="menubtn">
                <img src="../assets/img/icon_unlock.png" class="align-self-center" alt />
              </div>
              <div>문 열기</div>
            </div>
          </div>
          <div class="d-flex justify-content-around">
            <div @click="stop">
              <div class="menubtn">
                <img src="../assets/img/icon_poweroff.png" class="align-self-center" alt />
              </div>
              <div>시동 끄기</div>
            </div>
            <div @click="driving">
              <div class="menubtn">
                <img src="../assets/img/icon_car.png" class="align-self-center" alt />
              </div>
              <div>주행중</div>
            </div>
            <div>
              <a href="./#/Temperature">
                <div class="menubtn">
                  <img src="../assets/img/icon_temp.png" class="align-self-center" alt />
                </div>
                <div>온도설정</div>
              </a>
            </div>
          </div>
          <div class="d-flex justify-content-around">
            <div>
              <a href="./#/Humidity">
                <div class="menubtn">
                  <img src="../assets/img/icon_hum.png" class="align-self-center" alt />
                </div>
                <div>습도설정</div>
              </a>
            </div>
            <div>
              <a href="./#/SetLEDTime">
                <div class="menubtn">
                  <img src="../assets/img/icon_ledtime.png" class="align-self-center" alt />
                </div>
                <div>LED 설정</div>
              </a>
            </div>
            <div>
              <a href="./#/SetLEDControl">
                <div class="menubtn">
                  <img src="../assets/img/icon_led.png" class="align-self-center" alt />
                </div>
                <div>LED 제어</div>
              </a>
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
    goodgood: function () {
      window.DasApp.BLESetting("asdf");
    },
    doorlock: function () {
      window.DasApp.DoorLock();
    },
    start: function () {
      window.DasApp.Start();
    },
    doorunlock: function () {
      window.DasApp.DoorUnLock();
    },
    stop: function () {
      window.DasApp.Stop();
    },
    driving: function () {
      window.DasApp.Driving();
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
  margin-top: 20px;
}

.vehicleimg img {
  width: 60vw;
}

.menupanel {
  margin-top: 40px;
  margin-bottom: 10px;
}

.menubtn {
  border-radius: 100%;
  width: 60px;
  height: 60px;
  box-shadow: 0px 0px 5px 2px #dddddd;
}

.menubtn:active {
  box-shadow: 0px 0px 5px 2px #88e2f2;
}

.menubtn img {
  width: 26px;
  height: 26px;
  margin-top: 15px;
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
</style>