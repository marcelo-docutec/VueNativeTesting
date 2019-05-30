<template>
  <view class="container">
    <camera class="container" :type="this.type"/>
  </view>
</template>

<script>
import { Camera, Permissions } from "expo";
export default {
 data: function() {
   return {
     hasCameraPermission: false,
     type: Camera.Constants.Type.back
   };
 },
 mounted: function() {
   Permissions.askAsync(Permissions.CAMERA)
     .then(statusObj => {
       hasCameraPermission = statusObj.status == "granted" ? true : false;
     }).catch((err)=>{
        console.log(err);
     });
 },
 components: { Camera },
};
</script>

<style>
.container {
  flex: 1;
  width: 100%;
  align-self: flex-end;
  align-items: center;
}
.text-color-primary {
  color: blue;
}
</style>