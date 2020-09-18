<template>
  <div class="bottommenu d-flex">
    <div class="flex-fill">
      <img src="../assets/img/icon_home.png" alt="home" class="icon" />
      <div class="mtext">홈</div>
    </div>
    <div class="flex-fill">
      <img src="../assets/img/icon_control.png" alt="home" class="icon" />
      <div class="mtext">제어</div>
    </div>
    <div class="flex-fill">
      <img src="../assets/img/icon_car.png" alt="home" class="icon" />
      <div class="mtext">상태</div>
    </div>
    <div class="flex-fill">
      <img src="../assets/img/icon_navigation.png" alt="home" class="icon" />
      <div class="mtext">지도</div>
    </div>
    <div class="flex-fill">
      <div id="morebtn">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="mtext">더보기</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.bottommenu {
  position: fixed;
  width: 100vw;
  height: 60px;
  border-top: 1px solid #ddd;
  bottom: 0px;
  font-size: 0.8rem;
  padding-top: 5px;
  background-color: #fff;
}

.icon {
  width: 20px;
  height: 20px;
}

.mtext {
  position: relative;
  padding-top: 10px;
  width: 100%;
}

#morebtn {
  width: 20px;
  height: 20px;
}

#morebtn span {
  width: 5px;
  height: 5px;
  border-radius: 100%;
  background-color: #222;
  /* position: absolute; */
}

#morebtn span:nth-child(1) {
  top: 50%;
  left: 50%;
  transform: translateX(-200%);
}
</style>