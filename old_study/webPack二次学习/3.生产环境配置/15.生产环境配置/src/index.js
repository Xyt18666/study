

function nesfn() {
  // 下一行忽略所有的检查
  // eslint-disable-next-line
  console.log('new fn');
}

nesfn();

const adds = () => {
  console.log('sss');
};

adds()


const promise = new Promise(resolve =>{
  setTimeout(()=>{
    console.log("ok")
    resolve()
  },1000)
})
