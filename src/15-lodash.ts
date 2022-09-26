import _ from 'lodash';

const data = [
  {
  id: 1,
  name: 'Luke Skywalker',
  role: 'admin'
},
  {
  id: 2,
  name: 'Luke ',
  role: 'seller'
},
  {
  id: 3,
  name: ' Skywalker',
  role: 'customer'
},
  {
  id: 3,
  name: ' Skywalker',
  role: 'customer'
}
];

const rta = _.groupBy(data, (item) => item.role);
console.log(rta);
