import "./jq.js"; //引入jq

export default class VdLiItem {
  constructor(img, title, plot, lable, information, faz) {
    this.img = img;
    this.title = title;
    this.plot = plot;
    this.lable = lable;
    this.information = information;
    this.faz = faz;
  }
  init() {
    this.creatItemW();
  }
  creatItemW() {
    $(`<li>
    <div class="imgBox">
      <img src=${this.img} alt="">
      <div class="lable">${this.lable}</div>
      <div class="information">${this.information}</div>
    </div>
    <div class="title">${this.title}</div>
    <div class="plot">${this.plot}</div>
  </li>`).appendTo(this.faz);
  }
}
