<template>
  <div>
    <div class="pagetitle">
      <h1>Home</h1>
      <img src="../assets/img/img_share.png" alt />
      <span>SONATA</span>
    </div>
    <div class="optionpanel">
      <img src="../assets/img/icon_refresh.png" alt="refresh" />
      <img src="../assets/img/icon_bell.png" alt="bell" />
    </div>
    <div class="vehicleimg">
      <img src="../assets/img/sonata.png" alt />
    </div>
    <div class="startstop">
      <span>시동/잠금 상태</span>
      <img src="../assets/img/icon_power.png" alt />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.pagetitle {
  margin-left: 20px;
  margin-top: 20px;
  text-align: left;
  font-family: "Russo One", sans-serif;
  font-size: 1.5rem;
}

.pagetitle h1 {
  margin-bottom: -6px;
}

.pagetitle img {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}

.optionpanel {
  position: absolute;
  right: 20px;
  top: 16px;
}

.optionpanel img {
  width: 24px;
  height: 24px;
  margin-left: 20px;
}

.vehicleimg {
  width: 100vw;
  margin-top: 40px;
}

.vehicleimg img {
  width: 80vw;
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