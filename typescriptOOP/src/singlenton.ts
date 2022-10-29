class MySingleton {
  private static instance: MySingleton;
  private constructor(private name: string) {}

  getName() {
    return this.name;
  }

  static getInstance(name: string): MySingleton {
    if (!MySingleton.instance) {
      MySingleton.instance = new MySingleton(name);
    }
    return MySingleton.instance;
  }
}

const instance1 = MySingleton.getInstance('instance1');
console.log(instance1.getName());

const instance2 = MySingleton.getInstance('instance2');
console.log(instance2.getName());
