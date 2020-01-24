<template>
  <a-scene stats embedded arjs="trackingMethod: best; debugUIEnabled: false" class="setSize">
    <a-marker preset="hiro">
      <a-gltf-model position="0 0 0" scale="5 5 5" src="https://raw.githubusercontent.com/TimoHolvoet/ProjectIV_Vue/master/src/assets/gltf/kamerplant_1.glb"></a-gltf-model>
    </a-marker>
    <a-entity camera></a-entity>
  </a-scene>
</template>

<script>
export default {
  name: "arjs"
};
</script>
