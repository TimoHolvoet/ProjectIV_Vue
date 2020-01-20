<template>
  <!-- <a-scene arjs>
    <a-marker preset="hiro">
      <a-box position="0 0 0" rotation="0 0 0" color="#4CC3D9"></a-box>

    </a-marker>
  </a-scene> -->

      <a-scene stats embedded arjs='trackingMethod: best; debugUIEnabled: false'>
  	<a-marker preset="hiro">
      <a-entity>
      <a-box position='0 0 0' material='color: red;'>
        <!-- <a-animation attribute="rotation"
          dur="2000"
          fill="forwards"
          from="0 0 0"
          to="360 360 360"
          repeat="indefinite"></a-animation> -->
      </a-box>
      </a-entity>

  	</a-marker>
    </a-scene>
</template>

<style lang="scss" scoped>
.test {
  height: 100%;
  width: 100%;
}
</style>

<script>
export default {
  name: "sceneViewer"
};
</script>