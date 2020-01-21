<template>
  <div>
    <div class="c-test">
      <model-viewer
        class="c-modelviewer-container"
        ar
        alt="A 3D model of a beautiful plant."
        src="https://raw.githubusercontent.com/TimoHolvoet/ProjectIV_Vue/master/src/assets/gltf/untitled_02.glb"
        ios-src="http://student.howest.be/timo.holvoet/usdz/kamerplant_1.usdz"
      ></model-viewer>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.c-modelviewer-container {
  // height: 500px;
  // width: calc(100vw - 40px);
  // margin: 0 auto;
}
.c-test {
  height: 100vh;
  width: 100vw;
  background-color: green;
}
</style>

<script>
export default {
  name: "sceneViewer"
};
</script>