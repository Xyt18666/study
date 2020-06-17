import React from 'react'
import $ from "jQuery"
import IFooterCss from "../css/i_footer.less" // 引入模块化css
import  "../iconfont/youjian、ysjt/font_3s8qd6km3el/iconfont.css"//引入邮件、右上箭头图标



// 顶部通栏模块
export default class Parent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
        }
    }
    render(){
        return <div className={IFooterCss.footerBox}>
            <section className="FTop">
                <div className="FTTop">
                    <div className="FTTLlet">
                        <ul className="footer-menu">
                            <li><h3>关于玩哪儿</h3>
                                <ul>
                                    <li><a href="https://www.wannar.com/aboutus.php" target="_blank">公司介绍</a></li>
                                    <li><a href="https://www.wannar.com/join.php" target="_blank">加入我们</a></li>
                                    <li><a href="https://www.wannar.com/contact.php" target="_blank">联系方式</a></li>
                                    <li><a href="https://www.wannar.com/sitemap.php" target="_blank">网站地图</a></li>
                                    <li><a href="https://www.wannar.com/aboutus.php#press" target="_blank">新闻报道</a></li>
                                </ul>
                            </li>
                            <li><h3>预订须知</h3>
                                <ul>
                                    <li><a href="https://www.wannar.com/booking-policy.php" target="_blank">订购流程</a></li>
                                    <li><a href="https://www.wannar.com/booking-policy.php#a1" target="_blank">更改取消</a></li>                        
                                    <li><a href="https://www.wannar.com/how-to-make-extra-payments.php" target="_blank">如何补款</a></li>
                                    <li><a href="https://www.wannar.com/how-to-make-extra-payments.php#multi-pay" target="_blank">分笔支付</a></li>
                                </ul>
                            </li>
                            <li><h3>服务条款</h3>
                                <ul>
                                    <li><a href="https://www.wannar.com/agreement.php" target="_blank">客户协议</a></li>
                                    <li><a href="https://www.wannar.com/term.php" target="_blank">免责声明</a></li>
                                    <li><a href="https://www.wannar.com/privacy.php" target="_blank">隐私保护</a></li>                        
                                    <li><a href="https://www.wannar.com/reward.php" target="_blank">积分奖励</a></li>
                                    <li><a href="https://www.wannar.com/membership.php" target="_blank">会员中心</a></li>
                                </ul>
                            </li>
                            <li><h3>出游指南</h3>
                                <ul>
                                    <li><a href="https://www.wannar.com/knowledge.php" target="_blank">安全提示</a></li>
                                    <li><a href="https://www.wannar.com/prepare.php" target="_blank">关于签证</a></li>
                                    <li><a href="https://www.wannar.com/travel-together" target="_blank">结伴同游</a></li>
                                </ul>
                            </li>
                            <li className="other-sites"><h3>Other Languages</h3>
                                <ul>
                                    <li><a href="https://en.wannar.com">English</a></li>
                                    <li><a href="https://www.wannar.com">Chinese</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="FTTRight">
                        <div className="FTTRT">
                            <h3>客户服务 (7*24)</h3>
                            <ul>
                                <li>888-928-2988 (北美)</li>
                                <li>400-803-8618 (中国大陆)</li>
                                <li>3008-5867 (香港)</li>                    
                                <li>02-5592-4871 (台北)</li>
                                <li>1-650-388-9282 (国际直拨)</li>
                                <li className="last"><i className="iconfont icon-email-s2"></i> service@mail.wannar.com</li>
                            </ul>

                        </div>
                        <div className="FTTRTB">
                            <h3>包团定制</h3>
                            <ul>
                                <li><i className="iconfont icon-email-s1"></i> vip@mail.wannar.com</li>
                                <li><i className="iconfont icon-youshangjiao-"></i> <a href="/private">在线提交需求</a></li>             
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="fgx"></div>
                <div className="FTButton">
                    <ul>
                        <li>
                            <h5>- 支付网关 -</h5>
                            <div className="FTBImgBox">
                                <img src="https://us-website.wannar.com/images/logo/footer-logo-01.png" alt=""/>
                                <img src="https://us-website.wannar.com/images/logo/footer-logo-02.png" alt=""/>
                                <img src="https://us-website.wannar.com/images/logo/footer-logo-03.png" alt=""/>
                            </div> 
                        </li>
                        <li>
                            <h5> - 网站资质 -</h5>
                            <div className="FTBImgBox">
                                <div className="item1">
                                    <img src="https://us-website.wannar.com/images/logo/footer-logo-04.png" alt=""/>
                                    <div className="BHove">
                                        <img src="https://us-website.wannar.com/images/gui/CST2020.jpg" alt=""/>
                                        <div className="sanj"></div>
                                    </div>      
                                    
                                </div>
                                <div className="item2">
                                    <img src="https://us-website.wannar.com/images/logo/footer-logo-06.png" alt=""/>
                                    <div className="BHove">
                                        <img src="https://us-website.wannar.com/images/footer/nta_2019_800x600.jpg" alt=""/>
                                        <div className="sanj"></div>
                                    </div>    
                                    
                                </div>
                            </div> 
                        </li>
                        <li>
                            <h5> - 战略合作伙伴 -</h5>
                            <div className="FTBImgBox">
                                <img src="https://us-website.wannar.com/images/logo/travel-sina.png" alt=""/>
                            </div> 
                        </li>
                    </ul>
                </div>
            </section>
            
            <section className="FButton">
                <div className="FBTop">
                    
                    <div className="footer-section  ">
                        <span>一日游</span>
                        <section className="BCon">
                            <ul>
                                <li className="usa"><a href="https://www.wannar.com/usa/new-york-tour/day-1-1" target="_blank">纽约一日游</a>
                                </li>
                                <li className="usa"><a href="https://www.wannar.com/usa/boston-tour/day-1-1" target="_blank">波士顿一日游</a>
                                </li>
                                <li className="usa"><a href="https://www.wannar.com/usa/washington-dc-tour/day-1-1" target="_blank">华盛顿一日游</a>
                                </li>
                                <li className="usa"><a href="https://www.wannar.com/usa/philadelphia-tour/day-1-1"
                                                    target="_blank">费城一日游</a></li>
                                <li className="usa"><a href="https://www.wannar.com/usa/atlanta-tour/day-1-1"
                                                    target="_blank">亚特兰大一日游</a></li>

                                <li className="usa"><a href="https://www.wannar.com/usa/los-angeles-tour/day-1-1"
                                                    target="_blank">洛杉矶一日游</a></li>
                                <li className="usa"><a href="https://www.wannar.com/usa/san-francisco-tour/day-1-1" target="_blank">旧金山一日游</a>
                                </li>
                                <li className="usa"><a href="https://www.wannar.com/usa/las-vegas-tour/day-1-1"
                                                    target="_blank">拉斯维加斯一日游</a></li>
                                <li className="usa"><a href="https://www.wannar.com/usa/seattle-tour/day-1-1" target="_blank">西雅图一日游</a>
                                </li>
                                <li className="usa"><a href="https://www.wannar.com/usa/san-diego-tour/day-1-1" target="_blank">圣地亚哥一日游</a></li>
                                <li className="usa"><a href="https://www.wannar.com/usa/tag-grand-canyon/day-1-1" target="_blank">大峡谷一日游</a></li>
                                <li className="usa"><a href="https://www.wannar.com/usa/tag-antelope-canyon/day-1-1" target="_blank">羚羊谷一日游</a></li>
                                <li className="usa"><a href="https://www.wannar.com/usa/tag-yosemite/day-1-1" target="_blank">优胜美地一日游</a></li>
                                <li className="usa"><a href="https://www.wannar.com/usa/chicago-tour/day-1-1" target="_blank">芝加哥一日游</a>
                                </li>
                                <li className="usa"><a href="https://www.wannar.com/usa/phoenix-tour/day-1-1" target="_blank">凤凰城一日游</a>
                                </li>
                                <li className="usa"><a href="https://www.wannar.com/usa/denver-tour/day-1-1" target="_blank">丹佛一日游</a>
                                </li>
                                <li className="usa"><a href="https://www.wannar.com/usa/salt-lake-city-tour/day-1-1" target="_blank">盐湖城一日游</a>
                                </li>
                                <li className="usa"><a href="https://www.wannar.com/usa/new-orleans-tour/day-1-1" target="_blank">新奥尔良一日游</a>
                                </li>

                                <li className="usa"><a href="https://www.wannar.com/usa/miami-tour/day-1-1" target="_blank">迈阿密一日游</a>
                                </li>
                                <li className="usa"><a href="https://www.wannar.com/usa/orlando-tour/day-1-1" target="_blank">奥兰多一日游</a>
                                </li>

                                <li className="usa"><a href="https://www.wannar.com/usa/honolulu-tour/day-1-1"
                                                    target="_blank">夏威夷檀香山一日游</a></li>
                                <li className="usa"><a href="https://www.wannar.com/usa/maui-island-tour/day-1-1"
                                                    target="_blank">茂宜岛一日游</a></li>
                                <li className="usa"><a href="https://www.wannar.com/usa/kauai-island-tour/day-1-1" target="_blank">可爱岛一日游</a>
                                </li>
                                <li className="usa"><a href="https://www.wannar.com/usa/big-island-tour/day-1-1" target="_blank">夏威夷大岛一日游</a>
                                </li>

                                <li className="usa"><a href="https://www.wannar.com/usa/anchorage-tour/day-1-1"
                                                    target="_blank">安克雷奇一日游</a></li>
                                <li className="usa"><a href="https://www.wannar.com/usa/fairbanks-tour/day-1-1"
                                                    target="_blank">费尔班克斯一日游</a></li>
                                <li className="usa"><a href="https://www.wannar.com/usa/skagway-tour/day-1-1" target="_blank">史凯威一日游</a>
                                </li>
                                <li className="usa"><a href="https://www.wannar.com/usa/seward-tour/day-1-1" target="_blank">苏厄德一日游</a>
                                </li>
                                <li className="usa"><a href="https://www.wannar.com/usa/talkeetna-tour/day-1-1"
                                                    target="_blank">塔尔基特纳一日游</a></li>
                                <li className="usa"><a href="https://www.wannar.com/usa/juneau-tour/day-1-1" target="_blank">朱诺一日游</a>
                                </li>

                                <li className="canada"><a href="https://www.wannar.com/canada/vancouver-tour/day-1-1" target="_blank">温哥华一日游</a>
                                </li>
                                <li className="canada"><a href="https://www.wannar.com/canada/victoria-tour/day-1-1" target="_blank">维多利亚一日游</a>
                                </li>
                                <li className="canada"><a href="https://www.wannar.com/canada/toronto-tour/day-1-1" target="_blank">多伦多一日游</a>
                                </li>
                                <li className="canada"><a href="https://www.wannar.com/canada/calgary-tour/day-1-1" target="_blank">卡尔加里一日游</a>
                                </li>
                                <li className="canada"><a href="https://www.wannar.com/canada/montreal-tour/day-1-1" target="_blank">蒙特利尔一日游</a>
                                </li>

                                <li className="europe"><a href="https://www.wannar.com/europe/london-tour/day-1-1"
                                                        target="_blank">伦敦一日游</a></li>
                                <li className="europe"><a href="https://www.wannar.com/europe/paris-tour/day-1-1"
                                                        target="_blank">巴黎一日游</a></li>
                                <li className="europe"><a href="https://www.wannar.com/europe/avignon-tour/day-1-1" target="_blank">阿维尼翁一日游</a>
                                </li>
                                <li className="europe"><a href="https://www.wannar.com/europe/edinburgh-tour/day-1-1" target="_blank">爱丁堡一日游</a>
                                </li>
                                <li className="europe"><a href="https://www.wannar.com/europe/manchester-tour/day-1-1" target="_blank">曼彻斯特一日游</a>
                                </li>
                                <li className="europe"><a href="https://www.wannar.com/europe/glasgow-tour/day-1-1" target="_blank">格拉斯哥一日游</a>
                                </li>
                                <li className="europe"><a href="https://www.wannar.com/europe/luxembourg-city-tour/day-1-1"
                                                        target="_blank">卢森堡一日游</a></li>
                                <li className="europe"><a href="https://www.wannar.com/europe/brussels-tour/day-1-1" target="_blank">布鲁塞尔一日游</a>
                                </li>
                                <li className="europe"><a href="https://www.wannar.com/europe/amsterdam-tour/day-1-1" target="_blank">阿姆斯特丹一日游</a>
                                </li>

                                <li className="europe"><a href="https://www.wannar.com/europe/roma-tour/day-1-1"
                                                        target="_blank">罗马一日游</a></li>
                                <li className="europe"><a href="https://www.wannar.com/europe/milano-tour/day-1-1"
                                                        target="_blank">米兰一日游</a></li>
                                <li className="europe"><a href="https://www.wannar.com/europe/valencia-tour/day-1-1" target="_blank">瓦伦西亚一日游</a>
                                </li>
                                <li className="europe"><a href="https://www.wannar.com/europe/madrid-tour/day-1-1" target="_blank">马德里一日游</a>
                                </li>
                                <li className="europe"><a href="https://www.wannar.com/europe/barcelona-tour/day-1-1" target="_blank">巴塞罗那一日游</a>
                                </li>
                                <li className="europe"><a href="https://www.wannar.com/europe/seville-tour/day-1-1" target="_blank">塞维利亚一日游</a>
                                </li>
                                <li className="europe"><a href="https://www.wannar.com/europe/lisbon-tour/day-1-1" target="_blank">里斯本一日游</a>
                                </li>

                                <li className="europe"><a href="https://www.wannar.com/europe/vienna-tour/day-1-1" target="_blank">维也纳一日游</a>
                                </li>
                                <li className="europe"><a href="https://www.wannar.com/europe/budapest-tour/day-1-1" target="_blank">布达佩斯一日游</a>
                                </li>
                                <li className="europe"><a href="https://www.wannar.com/europe/zurich-tour/day-1-1" target="_blank">苏黎世一日游</a>
                                </li>
                                <li className="europe"><a href="https://www.wannar.com/europe/luzern-tour/day-1-1"
                                                        target="_blank">琉森一日游</a></li>
                                <li className="europe"><a href="https://www.wannar.com/europe/frankfurt-tour/day-1-1" target="_blank">法兰克福一日游</a>
                                </li>
                                <li className="europe"><a href="https://www.wannar.com/europe/cologne-tour/day-1-1" target="_blank">科隆一日游</a>
                                </li>
                                <li className="europe"><a href="https://www.wannar.com/europe/prague-tour/day-1-1" target="_blank">布拉格一日游</a>
                                </li>

                                <li className="europe"><a href="https://www.wannar.com/europe/munich-tour/day-1-1" target="_blank">慕尼黑一日游</a>
                                </li>
                                <li className="europe"><a href="https://www.wannar.com/europe/berlin-tour/day-1-1"
                                                        target="_blank">柏林一日游</a></li>
                                <li className="europe"><a href="https://www.wannar.com/europe/dusseldorf-tour/day-1-1" target="_blank">杜塞尔多夫一日游</a>
                                </li>
                                <li className="europe"><a href="https://www.wannar.com/europe/braunschweig-tour/day-1-1"
                                                        target="_blank">布伦瑞克一日游</a></li>
                                <li className="europe"><a href="https://www.wannar.com/europe/copenhagen-tour/day-1-1" target="_blank">哥本哈根一日游</a>
                                </li>
                                <li className="europe"><a href="https://www.wannar.com/europe/stockholm-tour/day-1-1" target="_blank">斯德哥尔摩一日游</a>
                                </li>
                                <li className="europe"><a href="https://www.wannar.com/europe/oslo-tour/day-1-1"
                                                        target="_blank">奥斯陆一日游</a></li>
                                <li className="europe"><a href="https://www.wannar.com/europe/helsinki-tour/day-1-1" target="_blank">赫尔辛基一日游</a>
                                </li>
                                <li className="europe last"><a href="https://www.wannar.com/europe/reykjavik-tour/day-1-1"
                                                            target="_blank">雷克雅未克一日游</a></li>
                            </ul>         
                            <span className="more btn">更多...</span>
                        </section>               
                    </div>

                    <div className="footer-section  ">
                        <span>自由行</span>
                        <section className="BCon">
                            <ul>
                            <li className="usa"><a href="https://www.wannar.com/activity/new-york" target="_blank">纽约自由行</a></li>
                            <li className="usa"><a href="https://www.wannar.com/activity/boston" target="_blank">波士顿自由行</a></li>
                            <li className="usa"><a href="https://www.wannar.com/activity/washington-dc" target="_blank">华盛顿自由行</a>
                            </li>
                            <li className="usa"><a href="https://www.wannar.com/activity/philadelphia" target="_blank">费城自由行</a>
                            </li>
                            <li className="usa"><a href="https://www.wannar.com/activity/atlanta" target="_blank">亚特兰大自由行</a></li>

                            <li className="usa"><a href="https://www.wannar.com/activity/los-angeles" target="_blank">洛杉矶自由行</a>
                            </li>
                            <li className="usa"><a href="https://www.wannar.com/activity/san-francisco" target="_blank">旧金山自由行</a>
                            </li>
                            <li className="usa"><a href="https://www.wannar.com/activity/las-vegas" target="_blank">拉斯维加斯自由行</a>
                            </li>
                            <li className="usa"><a href="https://www.wannar.com/activity/seattle" target="_blank">西雅图自由行</a></li>
                            <li className="usa"><a href="https://www.wannar.com/activity/san-diego" target="_blank">圣地亚哥自由行</a></li>

                            <li className="usa"><a href="https://www.wannar.com/activity/chicago" target="_blank">芝加哥自由行</a></li>
                            <li className="usa"><a href="https://www.wannar.com/activity/phoenix" target="_blank">凤凰城自由行</a></li>
                            <li className="usa"><a href="https://www.wannar.com/activity/denver" target="_blank">丹佛自由行</a></li>
                            <li className="usa"><a href="https://www.wannar.com/activity/salt-lake-city" target="_blank">盐湖城自由行</a>
                            </li>
                            <li className="usa"><a href="https://www.wannar.com/activity/new-orleans" target="_blank">新奥尔良自由行</a>
                            </li>

                            <li className="usa"><a href="https://www.wannar.com/activity/miami" target="_blank">迈阿密自由行</a></li>
                            <li className="usa"><a href="https://www.wannar.com/activity/orlando" target="_blank">奥兰多自由行</a></li>

                            <li className="usa"><a href="https://www.wannar.com/activity/honolulu" target="_blank">夏威夷檀香山自由行</a>
                            </li>
                            <li className="usa"><a href="https://www.wannar.com/activity/maui-island" target="_blank">茂宜岛自由行</a>
                            </li>
                            <li className="usa"><a href="https://www.wannar.com/activity/kauai-island" target="_blank">可爱岛自由行</a></li>
                            <li className="usa"><a href="https://www.wannar.com/activity/big-island" target="_blank">夏威夷大岛自由行</a>
                            </li>

                            <li className="usa"><a href="https://www.wannar.com/activity/anchorage" target="_blank">安克雷奇自由行</a></li>
                            <li className="usa"><a href="https://www.wannar.com/activity/fairbanks" target="_blank">费尔班克斯自由行</a>
                            </li>
                            <li className="usa"><a href="https://www.wannar.com/activity/skagway" target="_blank">史凯威自由行</a></li>
                            <li className="usa"><a href="https://www.wannar.com/activity/seward" target="_blank">苏厄德自由行</a></li>
                            <li className="usa"><a href="https://www.wannar.com/activity/talkeetna" target="_blank">塔尔基特纳自由行</a>
                            </li>
                            <li className="usa"><a href="https://www.wannar.com/activity/juneau" target="_blank">朱诺自由行</a></li>

                            <li className="canada"><a href="https://www.wannar.com/activity/vancouver" target="_blank">温哥华自由行</a>
                            </li>
                            <li className="canada"><a href="https://www.wannar.com/activity/victoria" target="_blank">维多利亚自由行</a>
                            </li>
                            <li className="canada"><a href="https://www.wannar.com/activity/toronto" target="_blank">多伦多自由行</a></li>
                            <li className="canada"><a href="https://www.wannar.com/activity/calgary" target="_blank">卡尔加里自由行</a>
                            </li>
                            <li className="canada"><a href="https://www.wannar.com/activity/montreal" target="_blank">蒙特利尔自由行</a>
                            </li>

                            <li className="europe"><a href="https://www.wannar.com/activity/london" target="_blank">伦敦自由行</a></li>
                            <li className="europe"><a href="https://www.wannar.com/activity/paris" target="_blank">巴黎自由行</a></li>
                            <li className="europe"><a href="https://www.wannar.com/activity/avignon" target="_blank">阿维尼翁自由行</a>
                            </li>
                            <li className="europe"><a href="https://www.wannar.com/activity/edinburgh" target="_blank">爱丁堡自由行</a>
                            </li>
                            <li className="europe"><a href="https://www.wannar.com/activity/manchester" target="_blank">曼彻斯特自由行</a>
                            </li>
                            <li className="europe"><a href="https://www.wannar.com/activity/glasgow" target="_blank">格拉斯哥自由行</a>
                            </li>
                            <li className="europe"><a href="https://www.wannar.com/activity/luxembourg-city"
                                                    target="_blank">卢森堡自由行</a></li>
                            <li className="europe"><a href="https://www.wannar.com/activity/brussels" target="_blank">布鲁塞尔自由行</a>
                            </li>
                            <li className="europe"><a href="https://www.wannar.com/activity/amsterdam" target="_blank">阿姆斯特丹自由行</a>
                            </li>

                            <li className="europe"><a href="https://www.wannar.com/activity/roma" target="_blank">罗马自由行</a></li>
                            <li className="europe"><a href="https://www.wannar.com/activity/milano" target="_blank">米兰自由行</a></li>
                            <li className="europe"><a href="https://www.wannar.com/activity/valencia" target="_blank">瓦伦西亚自由行</a>
                            </li>
                            <li className="europe"><a href="https://www.wannar.com/activity/madrid" target="_blank">马德里自由行</a></li>
                            <li className="europe"><a href="https://www.wannar.com/activity/barcelona" target="_blank">巴塞罗那自由行</a>
                            </li>
                            <li className="europe"><a href="https://www.wannar.com/activity/seville" target="_blank">塞维利亚自由行</a>
                            </li>
                            <li className="europe"><a href="https://www.wannar.com/activity/lisbon" target="_blank">里斯本自由行</a></li>

                            <li className="europe"><a href="https://www.wannar.com/activity/vienna" target="_blank">维也纳自由行</a></li>
                            <li className="europe"><a href="https://www.wannar.com/activity/budapest" target="_blank">布达佩斯自由行</a>
                            </li>
                            <li className="europe"><a href="https://www.wannar.com/activity/zurich" target="_blank">苏黎世自由行</a></li>
                            <li className="europe"><a href="https://www.wannar.com/activity/luzern" target="_blank">琉森自由行</a></li>
                            <li className="europe"><a href="https://www.wannar.com/activity/frankfurt" target="_blank">法兰克福自由行</a>
                            </li>
                            <li className="europe"><a href="https://www.wannar.com/activity/cologne" target="_blank">科隆自由行</a></li>
                            <li className="europe"><a href="https://www.wannar.com/activity/prague" target="_blank">布拉格自由行</a></li>

                            <li className="europe"><a href="https://www.wannar.com/activity/munich" target="_blank">慕尼黑自由行</a></li>
                            <li className="europe"><a href="https://www.wannar.com/activity/berlin" target="_blank">柏林自由行</a></li>
                            <li className="europe"><a href="https://www.wannar.com/activity/dusseldorf" target="_blank">杜塞尔多夫自由行</a>
                            </li>
                            <li className="europe"><a href="https://www.wannar.com/activity/braunschweig"
                                                    target="_blank">布伦瑞克自由行</a></li>
                            <li className="europe"><a href="https://www.wannar.com/activity/copenhagen" target="_blank">哥本哈根自由行</a>
                            </li>
                            <li className="europe"><a href="https://www.wannar.com/activity/stockholm" target="_blank">斯德哥尔摩自由行</a>
                            </li>
                            <li className="europe"><a href="https://www.wannar.com/activity/oslo" target="_blank">奥斯陆自由行</a></li>
                            <li className="europe"><a href="https://www.wannar.com/activity/helsinki" target="_blank">赫尔辛基自由行</a>
                            </li>
                            <li className="europe last"><a href="https://www.wannar.com/activity/reykjavik"
                                                        target="_blank">雷克雅未克自由行</a></li>
                        </ul>
                            <span className="more btn">更多...</span>
                        </section>
                    </div>

                    <div className="footer-section ">
                            <span>出发地到目的地</span>
                            <section className="BCon">
                                <ul>
                                    <li className="usa"><a href="https://www.wannar.com/usa/new-york-tour/tag-niagara_falls"
                                                        target="_blank">纽约到大瀑布</a></li>
                                    <li className="usa"><a href="https://www.wannar.com/usa/new-york-tour/leave-washington-dc"
                                                        target="_blank">纽约到华盛顿</a></li>
                                    <li className="usa"><a href="https://www.wannar.com/usa/new-york-tour/leave-boston" target="_blank">纽约到波士顿</a>
                                    </li>
                                    <li className="usa"><a href="https://www.wannar.com/usa/new-york-tour/leave-buffalo"
                                                        target="_blank">纽约到布法罗</a></li>
                                    <li className="usa"><a href="https://www.wannar.com/usa/new-york-tour/leave-miami" target="_blank">纽约到迈阿密</a>
                                    </li>
                                    <li className="usa"><a href="https://www.wannar.com/usa/tag-zongheng" target="_blank">纵横旅游</a></li>
                                    <li className="usa"><a href="https://www.wannar.com/usa/tag-haiou" target="_blank">海鸥假期</a></li>
                                    <li className="usa"><a href="https://www.wannar.com/usa/tag-tianma" target="_blank">天马旅游</a></li>
                                    <li className="usa"><a href="https://www.wannar.com/usa/tag-meiya" target="_blank">美国亚洲旅行社</a></li>

                                    <li className="usa"><a href="https://www.wannar.com/usa/boston-tour/tag-niagara_falls"
                                                        target="_blank">波士顿到大瀑布</a></li>
                                    <li className="usa"><a href="https://www.wannar.com/usa/boston-tour/leave-new-york" target="_blank">波士顿到纽约</a>
                                    </li>

                                    <li className="usa"><a href="https://www.wannar.com/usa/washington-dc-tour/tag-niagara_falls"
                                                        target="_blank">华盛顿到大瀑布</a></li>
                                    <li className="usa"><a href="https://www.wannar.com/usa/washington-dc-tour/leave-new-york"
                                                        target="_blank">华盛顿到纽约</a></li>

                                    <li className="usa"><a href="https://www.wannar.com/usa/los-angeles-tour/tag-yellowstone"
                                                        target="_blank">洛杉矶到黄石公园</a></li>
                                    <li className="usa"><a href="https://www.wannar.com/usa/los-angeles-tour/leave-san-francisco"
                                                        target="_blank">洛杉矶到旧金山</a></li>
                                    <li className="usa"><a href="https://www.wannar.com/usa/los-angeles-tour/leave-las-vegas"
                                                        target="_blank">洛杉矶到拉斯维加斯</a></li>

                                    <li className="usa"><a href="https://www.wannar.com/usa/san-francisco-tour/tag-yellowstone"
                                                        target="_blank">旧金山到黄石公园</a></li>
                                    <li className="usa"><a href="https://www.wannar.com/usa/san-francisco-tour/tag-yosemite"
                                                        target="_blank">旧金山到优胜美地</a></li>
                                    <li className="usa"><a href="https://www.wannar.com/usa/san-francisco-tour/leave-los-angeles"
                                                        target="_blank">旧金山到洛杉矶</a></li>
                                    <li className="usa"><a href="https://www.wannar.com/usa/san-francisco-tour/leave-las-vegas"
                                                        target="_blank">旧金山到拉斯维加斯</a></li>

                                    <li className="usa"><a href="https://www.wannar.com/usa/las-vegas-tour/tag-yellowstone"
                                                        target="_blank">拉斯维加斯到黄石公园</a></li>
                                    <li className="usa"><a href="https://www.wannar.com/usa/las-vegas-tour/tag-grand-canyon"
                                                        target="_blank">拉斯维加斯到大峡谷</a></li>
                                    <li className="usa"><a href="https://www.wannar.com/usa/las-vegas-tour/leave-los-angeles"
                                                        target="_blank">拉斯维加斯到洛杉矶</a></li>
                                    <li className="usa"><a href="https://www.wannar.com/usa/las-vegas-tour/leave-san-francisco"
                                                        target="_blank">拉斯维加斯到旧金山</a></li>
                                    <li className="usa"><a href="https://www.wannar.com/usa/las-vegas-tour/tag-antelope-canyon"
                                                        target="_blank">拉斯维加斯到羚羊谷</a></li>

                                    <li className="usa"><a href="https://www.wannar.com/usa/seattle-tour/tag-yellowstone"
                                                        target="_blank">西雅图到黄石公园</a></li>
                                    <li className="usa"><a href="https://www.wannar.com/canada/seattle-tour/leave-vancouver"
                                                        target="_blank">西雅图到温哥华</a></li>

                                    <li className="usa"><a href="https://www.wannar.com/usa/denver-tour/tag-yellowstone"
                                                        target="_blank">丹佛到黄石公园</a></li>

                                    <li className="usa"><a href="https://www.wannar.com/usa/salt-lake-city-tour/tag-yellowstone"
                                                        target="_blank">盐湖城到黄石公园</a></li>

                                    <li className="canada"><a href="https://www.wannar.com/canada/toronto-tour/tag-niagara_falls"
                                                            target="_blank">多伦多到大瀑布</a></li>
                                    <li className="canada"><a href="https://www.wannar.com/canada/montreal-tour/tag-niagara_falls"
                                                            target="_blank">蒙特利尔到大瀑布</a></li>

                                    <li className="canada"><a href="https://www.wannar.com/canada/vancouver-tour/tag-banff"
                                                            target="_blank">温哥华到班夫公园</a></li>

                                    <li className="canada"><a href="https://www.wannar.com/canada/calgary-tour/tag-banff"
                                                                target="_blank">卡尔加里到班夫公园</a></li>
                                    
                                    <li className="misc"><a href="https://www.upperantelope.com" target="_blank">Antelope Canyon Tours</a></li>
                                    <li className="misc"><a href="https://www.upperantelope.com/antelope-canyon-ticket-tour-6782.html" target="_blank">Upper Antelope Canyon Ticket</a></li>
                                    <li className="misc"><a href="https://www.upperantelope.com/las-vegas-lower-antelope-ticket-gtnt-1-day-tour-10429.html" target="_blank">Lower Antelope Canyon Ticket</a></li>
                                    <li className="misc"><a href="https://www.upperantelope.com/things-to-do" target="_blank">Antelope Canyon Tickets</a></li>
                                    <li className="misc"><a href="https://www.lowercanyon.com/" target="_blank">Lower Antelope Canyon Tours</a></li>
                                    <li className="misc"><a href="https://www.monument-valley.com" target="_blank">Monument Valley Tours</a></li>
                                    <li className="misc"><a href="https://niagarafalls.tours" target="_blank">Niagara Falls Tours</a></li>
                                    <li className="misc last">
                                        <a href="https://en.wannar.com/all/grand-canyon" target="_blank">Grand Canyon Tours</a>
                                    </li>

                                </ul>
                                <span className="more btn">更多...</span>
                            </section>
                    </div>
                 
                    <div className="footer-section ">
                        <span>包车自由行</span>
                        <section className="BCon">
                            <ul>
                            <li><a href="https://www.wannar.com/tag-private/new-york-tour" target="_blank">纽约包车</a></li>
                            <li><a href="https://www.wannar.com/tag-private/san-francisco-tour" target="_blank">旧金山包车</a></li>
                            <li><a href="https://www.wannar.com/tag-private/las-vegas-tour" target="_blank">拉斯维加斯包车</a></li>
                            <li><a href="https://www.wannar.com/tag-private/los-angeles-tour" target="_blank">洛杉矶包车</a></li>
                            <li><a href="https://www.wannar.com/tag-private/miami-tour" target="_blank">迈阿密包车</a></li>
                            <li><a href="https://www.wannar.com/tag-private/seattle-tour" target="_blank">西雅图包车</a></li>
                            <li><a href="https://www.wannar.com/tag-private/boston-tour" target="_blank">波士顿包车</a></li>
                            <li><a href="https://www.wannar.com/tag-private/buffalo-tour" target="_blank">布法罗包车</a></li>
                            <li><a href="https://www.wannar.com/tag-private/chicago-tour" target="_blank">芝加哥包车</a></li>
                            <li><a href="https://www.wannar.com/tag-private/honolulu-tour" target="_blank">夏威夷包车</a></li>
                            <li><a href="https://www.wannar.com/tag-private/washington-dc-tour" target="_blank">华盛顿包车</a></li>
                            <li><a href="https://www.wannar.com/tag-private/calgary-tour" target="_blank">卡尔加里包车</a></li>
                            <li><a href="https://www.wannar.com/tag-private/montreal-tour" target="_blank">蒙特利尔包车</a></li>
                            <li><a href="https://www.wannar.com/tag-private/toronto-tour" target="_blank">多伦多包车</a></li>
                            <li><a href="https://www.wannar.com/tag-private/vancouver-tour" target="_blank">温哥华包车</a></li>
                            <li><a href="http://travel.sina.com/california-state-route-1-info-990.html" target="_blank">加州一号公路</a></li>
                        </ul>
                        </section>
                    </div>

                    <div className="footer-section ">
                        <span>热门景点</span>
                        <section className="BCon">
                            <ul>
                            <li><a href="https://www.wannar.com/usa/tag-yellowstone" target="_blank">黄石公园旅游</a></li>
                            <li><a href="https://www.wannar.com/usa/tag-niagara_falls" target="_blank">大瀑布旅游</a></li>
                            <li><a href="https://www.wannar.com/usa/tag-grand-canyon" target="_blank">大峡谷旅游</a></li>
                            <li><a href="https://www.wannar.com/usa/tag-yosemite" target="_blank">优胜美地旅游</a></li>
                            <li><a href="https://www.wannar.com/usa/tag-antelope-canyon" target="_blank">羚羊谷旅游</a></li>
                            <li><a href="https://www.wannar.com/antelope-canyon-ticket-tour-6782.html" target="_blank">羚羊谷门票</a></li>
                            <li><a href="https://www.wannar.com/usa/tag-alaska" target="_blank">阿拉斯加极光</a></li>
                            <li><a href="https://www.wannar.com/canada/leave-yellow-knife" target="_blank">黄刀镇极光</a></li>
                            <li><a href="https://www.wannar.com/canada/tag-banff" target="_blank">加拿大班夫公园旅游</a></li>
                            <li className="last"><a href="https://www.wannar.com/scenic" target="_blank">全部景点</a></li>
                                                </ul>
                        </section>
                    </div>

                    <div className="footer-section ">
                        <span>友情链接</span>
                        <section className="BCon">
                            <ul>
                            <li><a href="https://m.wannar.com" target="_blank">玩哪儿网手机站</a></li>
                            <li><a href="https://www.wannar.com/reviews" target="_blank">玩哪儿评价</a></li>
                            <li><a href="https://www.wannar.com/usa/boston-tour" target="_blank">波士顿旅游</a></li>
                            <li><a href="https://www.wannar.com/usa/los-angeles-tour" target="_blank">洛杉矶旅行社</a></li>
                            <li><a href="https://en.wannar.com/all/grand-canyon" target="_blank">Grand Canyon Tours</a></li>
                            <li><a href="https://en.wannar.com/all/antelope-canyon" target="_blank">Antelope Canyon</a></li>
                            <li><a href="http://z.qyer.com/" target="_blank">穷游折扣</a></li>
                            <li><a href="http://abroad.cncn.com/" target="_blank">欣欣出国旅游</a></li>
                            <li><a href="http://www.beimeigoufang.com/" target="_blank">美国买房</a></li>        
                            <li><a href="https://www.wannar.com/tag-joyholiday" target="_blank">喜悦假期</a></li>                    
                        </ul>
                        </section>
                    </div>
                             

                </div>
                <div className="Bfgx"></div>  
                <div className="FBButton">
                    <h5>Copyright © 2017 WANNAR TRAVEL INC. All Rights Reserved. 京ICP备14057548号</h5>
                    <h5>玩哪儿网怎么样？专注于欧美目的地旅行的服务商，美国旅游专家</h5>
                </div>
            </section>
            
        </div>
                
    }

    componentDidMount(){
        let Bonoff = "true";
        let BhCArr = ['160px','160px','120px']

        $(".BCon .more").each((index,item)=>{
            $(".BCon .more").eq(index).click(()=>{
                if(Bonoff == "true"){
                     $(".BCon").eq(index).children("ul").css({
                        height: BhCArr[index]
                    })
                    $(".BCon").eq(index).children(".BCon .more").text("收起")
                    Bonoff = "flase"
                }else{
                    $(".BCon").eq(index).children("ul").css({
                        height:"40px"
                    })
                    $(".BCon").eq(index).children(".BCon .more").text("更多...")
                    Bonoff = "true"
                }
               
            })
        })
        


    }
}


