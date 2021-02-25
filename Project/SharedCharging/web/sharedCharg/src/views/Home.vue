<template>
    <div class="home">
        <div id="container"></div>
        <div id="data"></div>
    </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance } from "vue";

export default defineComponent({
    setup() {
        const { ...obj } = getCurrentInstance();
        // console.log(obj);
    },
   
    methods: {
        init() {
            var map = new globalThis.AMap.Map("container", {
                zoom: 5,
                resizeEnable: true,
            });
            globalThis.map = map;

            globalThis.AMap.plugin(
                [
                    "AMap.ToolBar",
                    "AMap.Scale",
                    "AMap.OverView",
                    "AMap.MapType",
                    "AMap.Geolocation",
                    "AMap.Driving",
                ],
                function () {
                    // 在图面添加工具条控件，工具条控件集成了缩放、平移、定位等功能按钮在内的组合控件
                    map.addControl(new globalThis.AMap.ToolBar());

                    // 在图面添加比例尺控件，展示地图在当前层级和纬度下的比例尺
                    map.addControl(new globalThis.AMap.Scale());

                    // 在图面添加鹰眼控件，在地图右下角显示地图的缩略图
                    map.addControl(new globalThis.AMap.OverView({ isOpen: true }));

                    // 在图面添加类别切换控件，实现默认图层与卫星图、实施交通图层之间切换的控制
                    map.addControl(new globalThis.AMap.MapType());

                    // 在图面添加定位控件，用来获取和展示用户主机所在的经纬度位置
                    map.addControl(new globalThis.AMap.Geolocation());
                }
            );

            // 创建 AMap.Icon 实例：
            var icon = new globalThis.AMap.Icon({
                size: new globalThis.AMap.Size(25, 25), // 图标尺寸
                image:
                    "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F18%2F01%2F20%2F4a61dd4d64b0bc622fc23005430b2557.jpg&refer=http%3A%2F%2Fbpic.588ku.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1616748994&t=80d27af7658d741b62ec3fd31f185e6e", // Icon的图像
                imageSize: new globalThis.AMap.Size(25, 25), // 根据所设置的大小拉伸或压缩图片
            });

            // 创建一个 Marker 实例：
            var marker = new globalThis.AMap.Marker({
                position: new globalThis.AMap.LngLat(116.39, 39.9), // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
                icon: icon,
                title: "北京",
            });
            var marker2 = new globalThis.AMap.Marker({
                position: new globalThis.AMap.LngLat(116.69, 39.0), // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
                icon: icon,
            });
            var marker3 = new globalThis.AMap.Marker({
                position: new globalThis.AMap.LngLat(116.09, 39.1), // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
                icon: icon,
            });

            // 将创建的点标记添加到已有的地图实例：
            map.add([marker, marker2, marker3]);

            let geolocation = new globalThis.AMap.Geolocation({
                enableHighAccuracy: true, //是否使用高精度定位，默认:true
                timeout: 10000, //超过10秒后停止定位，默认：无穷大
                maximumAge: 0, //定位结果缓存0毫秒，默认：0
                convert: true, //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
                showButton: true, //显示定位按钮，默认：true
                buttonPosition: "LB", //定位按钮停靠位置，默认：'LB'，左下角
                buttonOffset: new globalThis.AMap.Pixel(10, 20), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
                showMarker: true, //定位成功后在定位到的位置显示点标记，默认：true
                showCircle: true, //定位成功后用圆圈表示定位精度范围，默认：true
                panToLocation: false, //定位成功后将定位到的位置作为地图中心点，默认：true
                zoomToAccuracy: true, //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
            });
            map.addControl(geolocation);
            geolocation.getCurrentPosition();
            globalThis.AMap.event.addListener(geolocation, "complete", onComplete); //返回定位信息
            globalThis.AMap.event.addListener(geolocation, "error", onError); //返回定位出错信息

            function onComplete(success) {
               

                console.log(success.formattedAddress);
            }
            function onError(error) {
                console.log(error);
            }

            globalThis.AMap.event.addListener(marker, "click", function (e) {
                //创建信息窗口
                let infoWindow = new globalThis.AMap.InfoWindow({
                    // isCustom: true, //使用自定义窗体
                    content: `<p>信息</p>`,
                    // offset: new globalThis.AMap.Pixel(-15, -25),
                });
                //打开信息窗口

                infoWindow.open(map, [e.lnglat.R, e.lnglat.Q]); //后面的参数指的是经纬度，在此显示窗口

                console.log(e);

                var driving = new globalThis.AMap.Driving({
                    // 驾车路线规划策略，AMap.DrivingPolicy.LEAST_TIME是最快捷模式
                    policy: globalThis.AMap.DrivingPolicy.LEAST_TIME,
                    // map 指定将路线规划方案绘制到对应的AMap.Map对象上
                    map: map,
                    // panel 指定将结构化的路线详情数据显示的对应的DOM上，传入值需是DOM的ID
                    panel: "data",
                });

                var points = [
                    { keyword: "北京市地震局（公交站）", city: "北京" },
                    { keyword: "亦庄文化园（地铁站）", city: "北京" },
                ];

                // 搜索完成后，将自动绘制路线到地图上
                driving.search(points);
            });
        },
    },
    mounted() {
        this.init();
    },
    beforeRouteEnter(to, from, next) {
        console.log(to, from);

        if (to.query.isLog) {
            next();
        } else {
            next("/login");
        }
    },
});
</script>

<style lang="scss">
#container {
    width: 100%;
    height: 100vh;
}
</style>
