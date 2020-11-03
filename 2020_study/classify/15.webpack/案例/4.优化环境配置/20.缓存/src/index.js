
import './a.css';

function nesfn() {
  // 下一行忽略所有的检查
  // eslint-disable-next-line
  console.log('new fn');
}

nesfn();

const adds = () => {
  // eslint-disable-next-line
  console.log('sss');
};

adds();
