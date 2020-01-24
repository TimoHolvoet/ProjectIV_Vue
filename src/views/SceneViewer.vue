<template>
  <div class="c-sceneviewer__container">
    <div>
      <a href="/">
        <img src="/img/icons/arrow_back.png" alt="icon om terug naar de vorige pagina te gaan." />
      </a>
    </div>
    <div class="c-modelviewer__container">
      <model-viewer
        class="c-modelviewer"
        ar
        alt="A 3D model of a beautiful plant."
        src="https://raw.githubusercontent.com/TimoHolvoet/ProjectIV_Vue/master/src/assets/gltf/kamerplant_1.glb"
        ios-src="http://student.howest.be/timo.holvoet/usdz/kamerplant_1.usdz"
      ></model-viewer>
    </div>
    <div class="c-info__container">
      <div class="c-info__title-container">
        <h1 class="c-info__title">Yucca</h1>
        <p class="c-info__price">€ 42.00</p>
      </div>
      <p
        class="c-info__description"
      >De Yucca is een prachtige kamerplant, enkel geschikt voor binnen en gemakkelijk in onderhoud.</p>
    </div>
    <div class="c-info__rating-container">
      <p class="c-info__rating-title">Rating</p>
      <div>
        <img src="/img/icons/star_full.png" alt />
        <img src="/img/icons/star_full.png" alt />
        <img src="/img/icons/star_full.png" alt />
        <img src="/img/icons/star_half.png" alt />
        <img src="/img/icons/star_empty.png" alt />
      </div>
    </div>

    <div class="c-sceneviewer__btn-container">
      <button class="c-btn_primary">Toevoegen aan mandje</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.c-sceneviewer__container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin: var(--gutter-3);
  flex-grow: 1;
  text-align: left;
}
.c-modelviewer__container {
  // width: calc(100vw - 40px);
  margin: 0 auto;
}

.c-modelviewer {
  min-height: 250px;
  max-height: 450px;
}

.c-test {
  height: 100vh;
  width: 100vw;
  background-color: green;
}

.c-sceneviewer__btn-container {
  width: 100%;
}

.c-info__description {
  color: #b9b9b9;
  margin-top: var(--gutter-2);
}

.c-info__title-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.c-info__title {
  margin: 0;
}

.c-info__rating-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

</style>

<script>
export default {
  name: "sceneViewer"
};
</script>