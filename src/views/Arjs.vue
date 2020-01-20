<template>
  <!-- <a-scene stats embedded arjs='trackingMethod: best; debugUIEnabled: true'>
  	<a-marker preset="hiro">
      
      <a-entity>
      <a-box position='0 0.5 0' material='color: red;'>

      </a-box>
      </a-entity>
  	</a-marker>
  	<a-entity camera></a-entity>
  </a-scene>-->

  <a-scene stats embedded arjs="trackingMethod: best; debugUIEnabled: true">
    <!-- <a-assets>
      <a-asset-item
        id="animated-asset"
        src="https://raw.githubusercontent.com/nicolocarpignoli/nicolocarpignoli.github.io/master/ar-playground/models/CesiumMan.gltf"
      ></a-asset-item>
    </a-assets>-->

    <a-marker preset="hiro">

      <a-gltf-model scale="1 1 1" src="https://raw.githubusercontent.com/TimoHolvoet/ProjectIV_Vue/master/src/assets/gltf/indoor_plant_02.gltf"></a-gltf-model>
    </a-marker>
    <a-entity camera></a-entity>
  </a-scene>

  <!-- TODO: a-scene ziet vue als een custom component? Maar het komt niet van Vue? Dit kan potentieel problemen geven. -->
  <!-- Ik zie wel iets AR-achtigs tevoorschijn komen op mobile, maar geen idee of dat al voldoende is voor nu. -->

  <!-- <a-scene embedded arjs="sourceType: webcam">
      <a-marker preset="hiro">
        <a-box position="0 0.5 0" material="opacity: 0.5;"></a-box>
       <a-entity gltf-model=”url(@/assets/gltf/scene.gltf)”></a-entity>
      </a-marker>
      <a-entity camera></a-entity>
  </a-scene>-->

  <!-- <a-scene embedded arjs>
      <a-box position="0 0.5 0" material="opacity: 0.5;"></a-box>
      <a-marker-camera preset="hiro"></a-marker-camera>
  </a-scene>-->

  <!-- <a-scene
      embedded
      arjs
      inspector
      keyboard-shortcuts
      screenshot
      vr-mode-ui
      device-orientation-permission-ui
    >
      <a-marker preset="hiro" material arjs-anchor arjs-hit-testing>
        <a-box position="0 0.5 0" material="color: yellow;" geometry></a-box>
      </a-marker>
      <a-entity camera></a-entity>
      <a-entity light data-aframe-default-light aframe-injected></a-entity>
      <a-entity light position data-aframe-default-light aframe-injected></a-entity>
  </a-scene>-->
  <!-- <a-scene embedded artoolkit="trackingMethod:best;">
        <a-entity camera></a-entity>

        <a-marker preset="hiro">
          <a-box position="0 0.5 0" material="color: yellow;"></a-box>
        </a-marker>
  </a-scene>-->

  <!-- <a-scene embedded artoolkit>
          <a-box position="0 0.5 0" material="color: yellow;"></a-box>
          <a-marker-camera preset="hiro"></a-marker-camera>
  </a-scene>-->

  <!-- <a-scene embedded arjs>
        <a-marker preset="hiro">
          <a-box position="0 0.5 0" material="color: yellow;"></a-box>
        </a-marker>
        <a-entity camera></a-entity>
  </a-scene>-->
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "arjs",
  components: {
    HelloWorld
  },

  mounted() {
    // Never do this shit 💩😄. Als het echt, echt, echt moet, kan je een script tag dynamisch aanmaken, maar het is niet zo heel handig (browser rendering moet opnieuw deels gebeuren, DOM parsen, etc...)
    // let aframeScript = document.createElement('script');
    // let arjsScript = document.createElement('script');
    // aframeScript.setAttribute('src', 'https://aframe.io/releases/0.6.1/aframe.min.js');
    // arjsScript.setAttribute('src', 'https://jeromeetienne.github.io/AR.js/aframe/build/aframe-ar.js');
    // document.head.appendChild(aframeScript);
    // document.head.appendChild(arjsScript);
  }
};
</script>
