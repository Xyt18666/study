<template lang="pug">
    .wrapper(
        ref="wrapper" 
        )
      
        ul.content
            li(
                v-for="(item,index) in list"
                :key="index"
            )
                p {{item.letter}}
                .mulist(
                    v-for="(itema,indexa) in item.items"
                    :key="indexa"
                )
                    p {{ itema.name }}
        

</template>

<script>
import BScroll from "better-scroll";

export default {
    data() {
        return {
            list: [
                {
                    letter: "A",
                    items: [
                        {
                            firstLetter: "A",
                            name: "Alan Walker (艾伦·沃克)",
                            id: "0020PeOh4ZaCw1",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M0000020PeOh4ZaCw1.jpg?max_age=2592000",
                        },
                        {
                            firstLetter: "A",
                            name: "A-Lin",
                            id: "003ArN8Z0WpjTz",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M000003ArN8Z0WpjTz.jpg?max_age=2592000",
                        },
                        {
                            firstLetter: "A",
                            name: "Adele (阿黛尔)",
                            id: "003CoxJh1zFPpx",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M000003CoxJh1zFPpx.jpg?max_age=2592000",
                            copyright: true,
                        },
                    ],
                },
                {
                    letter: "B",
                    items: [
                        {
                            firstLetter: "B",
                            name: "BIGBANG (빅뱅)",
                            id: "004AlfUb0cVkN1",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M000004AlfUb0cVkN1.jpg?max_age=2592000",
                        },
                        {
                            firstLetter: "B",
                            name: "BEYOND",
                            id: "002pUZT93gF4Cu",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M000002pUZT93gF4Cu.jpg?max_age=2592000",
                            copyright: true,
                        },
                        {
                            firstLetter: "B",
                            name: "本兮",
                            id: "003LaMHm42u7qS",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M000003LaMHm42u7qS.jpg?max_age=2592000",
                        },
                        {
                            firstLetter: "B",
                            name: "BLACKPINK",
                            id: "003DBAjk2MMfhR",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M000003DBAjk2MMfhR.jpg?max_age=2592000",
                        },
                    ],
                },
                {
                    letter: "C",
                    items: [
                        {
                            firstLetter: "C",
                            name: "陈奕迅",
                            id: "003Nz2So3XXYek",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M000003Nz2So3XXYek.jpg?max_age=2592000",
                        },
                        {
                            firstLetter: "C",
                            name: "陈小春",
                            id: "004DFS271osAwp",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M000004DFS271osAwp.jpg?max_age=2592000",
                        },
                        {
                            firstLetter: "C",
                            name: "Charlie Puth (查理·普斯)",
                            id: "000jnR7q3pCzYG",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M000000jnR7q3pCzYG.jpg?max_age=2592000",
                        },
                        {
                            firstLetter: "C",
                            name: "陈翔",
                            id: "004EyqQS2hMS6V",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M000004EyqQS2hMS6V.jpg?max_age=2592000",
                        },
                        {
                            firstLetter: "C",
                            name: "蔡健雅",
                            id: "000hNnWC3kko2c",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M000000hNnWC3kko2c.jpg?max_age=2592000",
                        },
                    ],
                },
                {
                    letter: "E",
                    items: [
                        {
                            firstLetter: "E",
                            name: "Eminem (艾米纳姆)",
                            id: "000yDAjj2TE9j8",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M000000yDAjj2TE9j8.jpg?max_age=2592000",
                        },
                    ],
                },
                {
                    letter: "F",
                    items: [
                        {
                            firstLetter: "F",
                            name: "Fall Out Boy (打倒男孩)",
                            id: "003CKb192ggBqi",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M000003CKb192ggBqi.jpg?max_age=2592000",
                        },
                        {
                            firstLetter: "F",
                            name: "范玮琪",
                            id: "003vyG9q2klWs4",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M000003vyG9q2klWs4.jpg?max_age=2592000",
                        },
                    ],
                },
                {
                    letter: "G",
                    items: [
                        {
                            firstLetter: "G",
                            name: "G.E.M. 邓紫棋",
                            id: "001fNHEf1SFEFN",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M000001fNHEf1SFEFN.jpg?max_age=2592000",
                        },
                        {
                            firstLetter: "G",
                            name: "G-DRAGON (权志龙)",
                            id: "000t2qd13dLpae",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M000000t2qd13dLpae.jpg?max_age=2592000",
                        },
                        {
                            firstLetter: "G",
                            name: "葛林",
                            id: "002OfR3n1vx75j",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M000002OfR3n1vx75j.jpg?max_age=2592000",
                        },
                        {
                            firstLetter: "G",
                            name: "郭静",
                            id: "0043Zxw10txf5O",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M0000043Zxw10txf5O.jpg?max_age=2592000",
                        },
                    ],
                },
                {
                    letter: "H",
                    items: [
                        {
                            firstLetter: "H",
                            name: "华晨宇",
                            id: "002Vcz8F2hpBQj",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M000002Vcz8F2hpBQj.jpg?max_age=2592000",
                        },
                        {
                            firstLetter: "H",
                            name: "胡夏",
                            id: "002mze3U0NYXOM",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M000002mze3U0NYXOM.jpg?max_age=2592000",
                        },
                        {
                            firstLetter: "H",
                            name: "韩安旭",
                            id: "004QoDUs3jfOC6",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M000004QoDUs3jfOC6.jpg?max_age=2592000",
                        },
                    ],
                },
                {
                    letter: "J",
                    items: [
                        {
                            firstLetter: "J",
                            name: "Justin Bieber (贾斯汀·比伯)",
                            id: "002DYpxl3hW3EP",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M000002DYpxl3hW3EP.jpg?max_age=2592000",
                        },
                        {
                            firstLetter: "J",
                            name: "金志文",
                            id: "004YXxql1sSr2o",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M000004YXxql1sSr2o.jpg?max_age=2592000",
                        },
                        {
                            firstLetter: "J",
                            name: "Jam",
                            id: "0023ni2j3F9CpN",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M0000023ni2j3F9CpN.jpg?max_age=2592000",
                        },
                        {
                            firstLetter: "J",
                            name: "金南玲",
                            id: "001m7JoC1IVL44",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M000001m7JoC1IVL44.jpg?max_age=2592000",
                        },
                    ],
                },
                {
                    letter: "K",
                    items: [
                        {
                            firstLetter: "K",
                            name: "筷子兄弟",
                            id: "002Sm9iK4RIsCr",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M000002Sm9iK4RIsCr.jpg?max_age=2592000",
                        },
                    ],
                },
                {
                    letter: "L",
                    items: [
                        {
                            firstLetter: "L",
                            name: "林俊杰",
                            id: "001BLpXF2DyJe2",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M000001BLpXF2DyJe2.jpg?max_age=2592000",
                        },
                        {
                            firstLetter: "L",
                            name: "李荣浩",
                            id: "000aHmbL2aPXWH",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M000000aHmbL2aPXWH.jpg?max_age=2592000",
                        },
                        {
                            firstLetter: "L",
                            name: "鹿晗",
                            id: "001SqkF53OEhdO",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M000001SqkF53OEhdO.jpg?max_age=2592000",
                        },
                        {
                            firstLetter: "L",
                            name: "林宥嘉",
                            id: "001f0VyZ1hmWZ1",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M000001f0VyZ1hmWZ1.jpg?max_age=2592000",
                        },
                        {
                            firstLetter: "L",
                            name: "李易峰",
                            id: "002xpOdd4Dh6pu",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M000002xpOdd4Dh6pu.jpg?max_age=2592000",
                        },
                        {
                            firstLetter: "L",
                            name: "李宇春",
                            id: "002ZOuVm3Qn20Y",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M000002ZOuVm3Qn20Y.jpg?max_age=2592000",
                        },
                        {
                            firstLetter: "L",
                            name: "李圣杰",
                            id: "002seUhN1Akj7J",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M000002seUhN1Akj7J.jpg?max_age=2592000",
                        },
                        {
                            firstLetter: "L",
                            name: "刘瑞琦",
                            id: "003bQEFA3KrvLI",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M000003bQEFA3KrvLI.jpg?max_age=2592000",
                        },
                        {
                            firstLetter: "L",
                            name: "刘德华",
                            id: "003aQYLo2x8izP",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M000003aQYLo2x8izP.jpg?max_age=2592000",
                        },
                        {
                            firstLetter: "L",
                            name: "李克勤",
                            id: "003nS2v740Lxcw",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M000003nS2v740Lxcw.jpg?max_age=2592000",
                        },
                    ],
                },
                {
                    letter: "M",
                    items: [
                        {
                            firstLetter: "M",
                            name: "Maroon 5 (魔力红乐团)",
                            id: "001JuGrt372YIQ",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M000001JuGrt372YIQ.jpg?max_age=2592000",
                        },
                        {
                            firstLetter: "M",
                            name: "MC天佑",
                            id: "0035kILA0ydw3j",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M0000035kILA0ydw3j.jpg?max_age=2592000",
                        },
                        {
                            firstLetter: "M",
                            name: "MC魏小然",
                            id: "000WbpKa3WokLD",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M000000WbpKa3WokLD.jpg?max_age=2592000",
                        },
                        {
                            firstLetter: "M",
                            name: "莫文蔚",
                            id: "000cISVf2QqLc6",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M000000cISVf2QqLc6.jpg?max_age=2592000",
                        },
                        {
                            firstLetter: "M",
                            name: "马旭东",
                            id: "003wWQBU0fHBcj",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M000003wWQBU0fHBcj.jpg?max_age=2592000",
                        },
                        {
                            firstLetter: "M",
                            name: "萌萌哒天团",
                            id: "003rJfMG3PPqWd",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M000003rJfMG3PPqWd.jpg?max_age=2592000",
                        },
                    ],
                },
                {
                    letter: "N",
                    items: [
                        {
                            firstLetter: "N",
                            name: "那英",
                            id: "003LCFXH0eodXv",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M000003LCFXH0eodXv.jpg?max_age=2592000",
                        },
                        {
                            firstLetter: "N",
                            name: "南征北战",
                            id: "003ZQQb64D5317",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M000003ZQQb64D5317.jpg?max_age=2592000",
                        },
                        {
                            firstLetter: "N",
                            name: "牛奶咖啡",
                            id: "0012bj8d36Xkw1",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M0000012bj8d36Xkw1.jpg?max_age=2592000",
                        },
                    ],
                },
                {
                    letter: "O",
                    items: [
                        {
                            firstLetter: "O",
                            name: "Owl City (猫头鹰之城)",
                            id: "002a1DuK4evNsR",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M000002a1DuK4evNsR.jpg?max_age=2592000",
                        },
                        {
                            firstLetter: "O",
                            name: "One Direction (单向组合)",
                            id: "001FXn5P0kkWfV",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M000001FXn5P0kkWfV.jpg?max_age=2592000",
                        },
                    ],
                },
                {
                    letter: "P",
                    items: [
                        {
                            firstLetter: "P",
                            name: "朴树",
                            id: "000mLAT42CFWNa",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M000000mLAT42CFWNa.jpg?max_age=2592000",
                        },
                        {
                            firstLetter: "P",
                            name: "鹏泊",
                            id: "003vSrlp0ujV6o",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M000003vSrlp0ujV6o.jpg?max_age=2592000",
                        },
                    ],
                },
                {
                    letter: "Q",
                    items: [
                        {
                            firstLetter: "Q",
                            name: "曲婉婷",
                            id: "0030RkE50nmpWC",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M0000030RkE50nmpWC.jpg?max_age=2592000",
                        },
                        {
                            firstLetter: "Q",
                            name: "齐一",
                            id: "0020IaUo4Vgsjk",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M0000020IaUo4Vgsjk.jpg?max_age=2592000",
                        },
                        {
                            firstLetter: "Q",
                            name: "齐晨",
                            id: "000H4xDG3heHtr",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M000000H4xDG3heHtr.jpg?max_age=2592000",
                        },
                    ],
                },
                {
                    letter: "R",
                    items: [
                        {
                            firstLetter: "R",
                            name: "RADWIMPS (ラッドウィンプス)",
                            id: "000f1b6W1wzyRN",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M000000f1b6W1wzyRN.jpg?max_age=2592000",
                        },
                        {
                            firstLetter: "R",
                            name: "Rihanna (蕾哈娜)",
                            id: "002MiBdR19HQWx",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M000002MiBdR19HQWx.jpg?max_age=2592000",
                        },
                    ],
                },
                {
                    letter: "S",
                    items: [
                        {
                            firstLetter: "S",
                            name: "苏打绿",
                            id: "000Q4W691sMvLG",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M000000Q4W691sMvLG.jpg?max_age=2592000",
                        },
                        {
                            firstLetter: "S",
                            name: "孙子涵",
                            id: "001oXbjs29oPul",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M000001oXbjs29oPul.jpg?max_age=2592000",
                        },
                        {
                            firstLetter: "S",
                            name: "宋冬野",
                            id: "004KKLWZ4320g1",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M000004KKLWZ4320g1.jpg?max_age=2592000",
                        },
                        {
                            firstLetter: "S",
                            name: "孙燕姿",
                            id: "001pWERg3vFgg8",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M000001pWERg3vFgg8.jpg?max_age=2592000",
                        },
                        {
                            firstLetter: "S",
                            name: "双笙",
                            id: "001t94rh4OpQn0",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M000001t94rh4OpQn0.jpg?max_age=2592000",
                        },
                    ],
                },
                {
                    letter: "T",
                    items: [
                        {
                            firstLetter: "T",
                            name: "TFBOYS",
                            id: "000zmpju02bEBm",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M000000zmpju02bEBm.jpg?max_age=2592000",
                        },
                        {
                            firstLetter: "T",
                            name: "田馥甄",
                            id: "001ByAsv3XCdgm",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M000001ByAsv3XCdgm.jpg?max_age=2592000",
                        },
                        {
                            firstLetter: "T",
                            name: "The Chainsmokers (烟民二人组)",
                            id: "004ABIFV1EZUAj",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M000004ABIFV1EZUAj.jpg?max_age=2592000",
                        },
                        {
                            firstLetter: "T",
                            name: "Tez Cadey",
                            id: "000ndQx82fsq8Z",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M000000ndQx82fsq8Z.jpg?max_age=2592000",
                        },
                        {
                            firstLetter: "T",
                            name: "逃跑计划",
                            id: "001Yxpxc0OaUUX",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M000001Yxpxc0OaUUX.jpg?max_age=2592000",
                        },
                        {
                            firstLetter: "T",
                            name: "谭晶",
                            id: "000QG95i2rHlOf",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M000000QG95i2rHlOf.jpg?max_age=2592000",
                        },
                    ],
                },
                {
                    letter: "W",
                    items: [
                        {
                            firstLetter: "W",
                            name: "王力宏",
                            id: "001JDzPT3JdvqK",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M000001JDzPT3JdvqK.jpg?max_age=2592000",
                        },
                        {
                            firstLetter: "W",
                            name: "吴亦凡",
                            id: "002yeznU3VAVEV",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M000002yeznU3VAVEV.jpg?max_age=2592000",
                        },
                        {
                            firstLetter: "W",
                            name: "汪苏泷",
                            id: "001z2JmX09LLgL",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M000001z2JmX09LLgL.jpg?max_age=2592000",
                        },
                        {
                            firstLetter: "W",
                            name: "王菲",
                            id: "000GDDuQ3sGQiT",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M000000GDDuQ3sGQiT.jpg?max_age=2592000",
                        },
                        {
                            firstLetter: "W",
                            name: "Wiz Khalifa (维兹·卡利法)",
                            id: "000CQ06r24Naco",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M000000CQ06r24Naco.jpg?max_age=2592000",
                        },
                        {
                            firstLetter: "W",
                            name: "汪峰",
                            id: "001adLDR1SS40P",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M000001adLDR1SS40P.jpg?max_age=2592000",
                        },
                        {
                            firstLetter: "W",
                            name: "威仔",
                            id: "001WcO2V0TLCv3",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M000001WcO2V0TLCv3.jpg?max_age=2592000",
                        },
                    ],
                },
                {
                    letter: "X",
                    items: [
                        {
                            firstLetter: "X",
                            name: "薛之谦",
                            id: "002J4UUk29y8BY",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M000002J4UUk29y8BY.jpg?max_age=2592000",
                        },
                        {
                            firstLetter: "X",
                            name: "许嵩",
                            id: "000CK5xN3yZDJt",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M000000CK5xN3yZDJt.jpg?max_age=2592000",
                        },
                        {
                            firstLetter: "X",
                            name: "萧敬腾",
                            id: "004bsIDK0awMOv",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M000004bsIDK0awMOv.jpg?max_age=2592000",
                        },
                        {
                            firstLetter: "X",
                            name: "许巍",
                            id: "00235pCx2tYjlq",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M00000235pCx2tYjlq.jpg?max_age=2592000",
                        },
                        {
                            firstLetter: "X",
                            name: "徐良",
                            id: "004aRKga0CXIPm",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M000004aRKga0CXIPm.jpg?max_age=2592000",
                        },
                        {
                            firstLetter: "X",
                            name: "夏婉安",
                            id: "001oNMzI3WznzG",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M000001oNMzI3WznzG.jpg?max_age=2592000",
                        },
                        {
                            firstLetter: "X",
                            name: "徐佳莹",
                            id: "002LZVMH0zc8F4",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M000002LZVMH0zc8F4.jpg?max_age=2592000",
                        },
                    ],
                },
                {
                    letter: "Y",
                    items: [
                        {
                            firstLetter: "Y",
                            name: "杨宗纬",
                            id: "003tMm0y0TuewY",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M000003tMm0y0TuewY.jpg?max_age=2592000",
                        },
                        {
                            firstLetter: "Y",
                            name: "杨洋",
                            id: "004coWV04C5FCV",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M000004coWV04C5FCV.jpg?max_age=2592000",
                        },
                        {
                            firstLetter: "Y",
                            name: "雨宗林",
                            id: "004FtTNW2b0tJi",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M000004FtTNW2b0tJi.jpg?max_age=2592000",
                        },
                        {
                            firstLetter: "Y",
                            name: "易烊千玺",
                            id: "001IoTZp19YMDG",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M000001IoTZp19YMDG.jpg?max_age=2592000",
                        },
                    ],
                },
                {
                    letter: "Z",
                    items: [
                        {
                            firstLetter: "Z",
                            name: "周杰伦",
                            id: "0025NhlN2yWrP4",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M0000025NhlN2yWrP4.jpg?max_age=2592000",
                        },
                        {
                            firstLetter: "Z",
                            name: "张杰",
                            id: "002azErJ0UcDN6",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M000002azErJ0UcDN6.jpg?max_age=2592000",
                        },
                        {
                            firstLetter: "Z",
                            name: "庄心妍",
                            id: "003Cn3Yh16q1MO",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M000003Cn3Yh16q1MO.jpg?max_age=2592000",
                        },
                        {
                            firstLetter: "Z",
                            name: "张碧晨",
                            id: "0003ZpE43ypssl",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M0000003ZpE43ypssl.jpg?max_age=2592000",
                        },
                        {
                            firstLetter: "Z",
                            name: "张学友",
                            id: "004Be55m1SJaLk",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M000004Be55m1SJaLk.jpg?max_age=2592000",
                        },
                        {
                            firstLetter: "Z",
                            name: "张靓颖",
                            id: "000aw4WC2EQYTv",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M000000aw4WC2EQYTv.jpg?max_age=2592000",
                        },
                        {
                            firstLetter: "Z",
                            name: "张惠妹",
                            id: "003JGrNQ3RjelA",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M000003JGrNQ3RjelA.jpg?max_age=2592000",
                        },
                        {
                            firstLetter: "Z",
                            name: "周传雄",
                            id: "004NMZuf2BLjg8",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M000004NMZuf2BLjg8.jpg?max_age=2592000",
                        },
                        {
                            firstLetter: "Z",
                            name: "张信哲",
                            id: "0000mFvh1jtLcz",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M0000000mFvh1jtLcz.jpg?max_age=2592000",
                        },
                        {
                            firstLetter: "Z",
                            name: "张宇",
                            id: "0044wQXL0ElWF1",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M0000044wQXL0ElWF1.jpg?max_age=2592000",
                        },
                        {
                            firstLetter: "Z",
                            name: "张磊",
                            id: "004eaDNU1nfRO0",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M000004eaDNU1nfRO0.jpg?max_age=2592000",
                        },
                        {
                            firstLetter: "Z",
                            name: "张韶涵",
                            id: "002raUWw3PXdkT",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M000002raUWw3PXdkT.jpg?max_age=2592000",
                        },
                        {
                            firstLetter: "Z",
                            name: "周二珂",
                            id: "0042kZuh1dgLre",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M0000042kZuh1dgLre.jpg?max_age=2592000",
                        },
                        {
                            firstLetter: "Z",
                            name: "张敬轩",
                            id: "003AfDK34H82GU",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M000003AfDK34H82GU.jpg?max_age=2592000",
                        },
                        {
                            firstLetter: "Z",
                            name: "张赫宣",
                            id: "000SJp6n49rDgl",
                            avatar:
                                "https://y.gtimg.cn/music/photo_new/T001R300x300M000000SJp6n49rDgl.jpg?max_age=2592000",
                        },
                    ],
                },
            ],
        };
    },
    methods: {},
    components: {},
    mounted() {
        // 在dom元素渲染完成之后初始化better-scroll的实例
        new BScroll(this.$refs.wrapper, {
            scrollY: true,
            click: true,
            momentum: true,
            bounce: true,
        });
    },
};
</script>

<style lang="sass">
.wrapper
    position: fixed
    top: 20vh
    left: 0
    width: 100vw
    height: 80vh
    overflow: hidden
</style>
