const HouseInfoView = require('./views/house_info_view.js');
const Ajax = require('./services/ajax.js');

const app = function () {
  const container = document.querySelector('#root');
  const houseInfoView = new HouseInfoView(container);

  const url = `https://www.anapioficeandfire.com/api/houses?page=1&pageSize=50`;
  const ajax = new Ajax();

  ajax.get(url, function (data) {
    houseInfoView.render(data);
  });
}

document.addEventListener('DOMContentLoaded', app);
