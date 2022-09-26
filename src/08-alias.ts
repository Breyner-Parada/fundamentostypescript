(() => {
  type UserID = string | number | boolean

  function greeting (userId: UserID) {
    if(typeof userId === 'string') {
      console.log(`string: ${userId.toLowerCase()}`);
    }
  }

  // lITERAL TYPES

  type Sizes = 'M' | 'S' | 'L';
  let shirtSize: Sizes;
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'S';
})()
