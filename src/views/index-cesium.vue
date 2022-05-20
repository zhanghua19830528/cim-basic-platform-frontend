<template>
  <div id="cesiumContainer"></div>
</template>

<script>
//暂时没有看出应用源码的路径还是编译过的路径的区别

import "cesium/Source/Widgets/widgets.css";
import * as Cesium from "cesium/Source/Cesium";

export default {
  name: "Map",
  mounted() {
    this.init();
  },
  methods: {
    init() {
       Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJjMzU2ZTQyYy1iOTU5LTQ5MDQtOGNkNC0yYzcxMTI1ZDJiZGQiLCJpZCI6NzY1OTcsImlhdCI6MTYzOTU2MDcwOH0.kbWigipGD6l2OPBGpnkkN6dzp8NuNjoHNNM1NF4gaIo';

    // Initialize the Cesium Viewer in the HTML element with the `cesiumContainer` ID.
    const viewer = new Cesium.Viewer('cesiumContainer', {
      terrainProvider: Cesium.createWorldTerrain()
    });    
    // Add Cesium OSM Buildings, a global 3D buildings layer.
    const buildingTileset = viewer.scene.primitives.add(Cesium.createOsmBuildings());   
    // Fly the camera to San Francisco at the given longitude, latitude, and height.
    viewer.camera.flyTo({
      destination : Cesium.Cartesian3.fromDegrees(-122.4175, 37.655, 400),
      orientation : {
        heading : Cesium.Math.toRadians(0.0),
        pitch : Cesium.Math.toRadians(-15.0),
      }
    });

    }
  }
};
</script>

<style lang="scss" scoped>
#cesiumContainer {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
</style>