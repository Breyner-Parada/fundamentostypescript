(() => {
  let mydinamycVar: any;

  mydinamycVar = 100;
  mydinamycVar = 'asdf';
  mydinamycVar = {};
  mydinamycVar = [];

  mydinamycVar = 'Hola';
  const rta = (mydinamycVar as string).toLowerCase();
  console.log(rta);

  mydinamycVar = 416354;
  const rta2 = (<number>mydinamycVar).toFixed(2);
  console.log(rta2);


})()
