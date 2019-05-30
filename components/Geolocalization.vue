<template>
    <view class="container">
        <text>Location:</text>
        <text>{{location.latitude}}</text>
        <touchable-opacity :on-press="getLocation" >
            <text>click to get location</text>
        </touchable-opacity>
    </view>
</template>

    <script>
import { Constants, Location, Permissions } from "expo";

export default {
    data: function() {
        return {
            location: {},
            errorMessage: "",
            msgSuccess: ""
        };
    },
    methods: {
        getLocation: function() {
            console.log('llegas aca?')
            Permissions.askAsync(Permissions.LOCATION).then(statusObj => {
            if (statusObj.status !== "granted") {
                console.log('status: ', statusObj.status);
                console.log('entras al if granted?')
                errorMessage = "Permission to access location was denied";
            }
            Location.getCurrentPositionAsync({}).then(location1 => {
                    console.log('falla aca?')
                    msgSuccess = "Nice sadsda"
                    location = location1;
                    console.log(`Location: ${location}`)
            })
            .catch( ( err ) => {
                console.log('hello my error is: ', err)
            } )
            }).catch((err)=>{
            console.log(err);
            });
        }
    }
};
</script>
<style>
.container {
    background-color: white;
    align-items: center;
    justify-content: center;
    flex: 1;
}
.text-color-primary {
    color: blue;
}
</style>