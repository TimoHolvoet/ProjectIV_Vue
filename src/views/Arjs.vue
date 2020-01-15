<template>
  <main>
    <h1>Ar.js tryout</h1>

    <a-scene embedded arjs="’sourceType:" webcam;’>
      <a-marker preset="’hiro’">
          <a-entity gltf-model=”url(@/assets/gltf/scene.gltf)”></a-entity>
      </a-marker>
      <a-entity camera>

      </a-entity>
    </a-scene>

  </main>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  mounted() {
    let aframeScript = document.createElement("script");
    let arjsScript = document.createElement("script");

    aframeScript.setAttribute(
      "src",
      "https://aframe.io/releases/0.6.1/aframe.min.js"
    );
    arjsScript.setAttribute(
      "src",
      "https://jeromeetienne.github.io/AR.js/aframe/build/aframe-ar.js"
    );

    document.head.appendChild(aframeScript);
    document.head.appendChild(arjsScript);
  }
};
</script>
