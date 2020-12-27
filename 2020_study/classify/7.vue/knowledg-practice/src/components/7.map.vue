<template>
    <div class="map">
        <div>map</div>
        <baidu-map
            class="bm-view"
            :center="center"
            :zoom="zoom"
            @ready="handler"
            :scroll-wheel-zoom="true"
            :mapStyle="mapStyle"
            @moving="syncCenterAndZoom"
            @moveend="syncCenterAndZoom"
            @zoomend="syncCenterAndZoom"
        >
            <p style="padding: 0 10px;">以下是使用 `bm-view` 组件渲染的百度地图实例</p>
            <bm-view style="width: 100%; height:200px; flex: 1"></bm-view>
            <bm-geolocation
                anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
                :showAddressBar="true"
                :autoLocation="true"
            ></bm-geolocation>
            <bm-control>
                <button @click="openDistanceTool">开启测距</button>
            </bm-control>
        </baidu-map>
        <input v-model.number="center.lng" />
        <input v-model.number="center.lat" />
        <input v-model.number="zoom" />
    </div>
</template>

<script>
import DistanceTool from "bmaplib.distancetool";
export default {
    unmount() {
        this.distanceTool && this.distanceTool.close();
    },
    data() {
        return {
            center: { lng: 0, lat: 0 },
            zoom: 15,
            mapStyle: {
                styleJson: [
                    {
                        featureType: "land",
                        elementType: "geometry",
                        stylers: {
                            color: "#e7f7fc",
                        },
                    },
                    {
                        featureType: "water",
                        elementType: "all",
                        stylers: {
                            color: "#96b5d6",
                        },
                    },
                    {
                        featureType: "green",
                        elementType: "all",
                        stylers: {
                            color: "#b0d3dd",
                        },
                    },
                    {
                        featureType: "highway",
                        elementType: "geometry.fill",
                        stylers: {
                            color: "#a6cfcf",
                        },
                    },
                    {
                        featureType: "highway",
                        elementType: "geometry.stroke",
                        stylers: {
                            color: "#7dabb3",
                        },
                    },
                    {
                        featureType: "arterial",
                        elementType: "geometry.fill",
                        stylers: {
                            color: "#e7f7fc",
                        },
                    },
                    {
                        featureType: "arterial",
                        elementType: "geometry.stroke",
                        stylers: {
                            color: "#b0d5d4",
                        },
                    },
                    {
                        featureType: "local",
                        elementType: "labels.text.fill",
                        stylers: {
                            color: "#7a959a",
                        },
                    },
                    {
                        featureType: "local",
                        elementType: "labels.text.stroke",
                        stylers: {
                            color: "#d6e4e5",
                        },
                    },
                    {
                        featureType: "arterial",
                        elementType: "labels.text.fill",
                        stylers: {
                            color: "#374a46",
                        },
                    },
                    {
                        featureType: "highway",
                        elementType: "labels.text.fill",
                        stylers: {
                            color: "#374a46",
                        },
                    },
                    {
                        featureType: "highway",
                        elementType: "labels.text.stroke",
                        stylers: {
                            color: "#e9eeed",
                        },
                    },
                ],
            },
            distanceTool: "",
        };
    },
    methods: {
        handler({ BMap, map }) {
            console.log(BMap, map);
            this.center.lng = 116.404;
            this.center.lat = 39.915;
            this.zoom = 15;

            this.setDistanceToolInstance(map);
        },
        syncCenterAndZoom(e) {
            console.log(e.target);

            const { lng, lat } = e.target.getCenter();
            this.center.lng = lng;
            this.center.lat = lat;
            this.zoom = e.target.getZoom();
        },

        // 以下是测距插件的函数
        setDistanceToolInstance(map) {
            this.distanceTool = new DistanceTool(map, { lineStroke: 2 });
        },
        openDistanceTool(e) {
            console.log(e);

            this.distanceTool && this.distanceTool.open();
        },
    },
};
</script>

<style>
.bm-view {
    width: 100%;
    height: 300px;
}
</style>
