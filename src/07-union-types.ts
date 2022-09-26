(() => {
  let userId: string | number;
  userId = 45789;
  userId = 'asd2f4asd1';

  function greeting (message: string | number) {
    if(typeof message === 'string') {
      console.log(`string: ${message.toLowerCase()}`);
    } else {
      console.log(message.toFixed(2));

    }
  }

  greeting('HELO');
  greeting(32132);
})()
