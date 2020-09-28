<template>
    <div class="home">
        <div class="wrapper">
            <div
                class="album-item"
                v-for="(item, index) in albumList"
                :key="index"
            >
                <img :src="item.cover">
                <div class="info">
                    <h2>{{ item.album + ' - ' + item.singer }}</h2>
                    <p>¥{{ item.price }} x {{ item.number }}</p>
                </div>
            </div>
        </div>
        <div class="wrapper">
            <div class="total-item">
                <div class="label">商品总数</div>
                <div class="number">{{ total.number }}</div>
            </div>
            <div class="total-item">
                <div class="label">商品总价</div>
                <div class="number">¥{{ total.price }}</div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
      return {
          albumList:[
            {
              "album": "模特",
              "singer": "李荣浩",
              "cover": "http://jxsjs.com/img/album1.jpg",
              "price": 100,
              "number": 9
            },
            {
              "album": "生命因你而火热",
              "singer": "新裤子",
              "cover": "http://jxsjs.com/img/album2.jpg",
              "price": 200,
              "number": 6
            },
            {
              "album": "故事会",
              "singer": "五条人",
              "cover": "http://jxsjs.com/img/album3.jpg",
              "price": 300,
              "number": 3
            }
          ]
      }
    },
    computed: {
        total() {
            let number = 0;
            let price = 0;
            this.albumList.forEach(album => {
                number += album.number;
                price += album.number * album.price;
            });
            return {
                number,
                price
            };
        }
    }
};
</script>

<style>
    * {
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
        font-size: 18px;
    }
    body {
        height: 100vh;
        background: #f9f9f9;
    }
    #app {
        padding: 20px;
    }
    .wrapper {
        margin-bottom: 20px;
        padding: 0 10px;
        background: #fff;
        border-radius: 3px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, .1);
    }
    .album-item, .total-item {
        display: flex;
        align-items: center;
        padding: 15px 0;
    }
    .album-item + .album-item,
    .total-item + .total-item {
        border-top: 1px solid #f0f0f0;
    }
    .album-item img {
        flex: 0 0 60px;
        width: 60px;
        height: auto;
        border-radius: 50%;
    }
    .album-item .info {
        flex-grow: 1;
        padding-left: 15px;
    }
    .album-item h2 {
        font-weight: normal;
        font-size: 18px;
    }
    .album-item p {
        padding-top: 3px;
        color: #ccc;
    }
    .total-item {
        justify-content: space-between;
    }
    .total-item:last-child {
        font-weight: bold;
    }
</style>
