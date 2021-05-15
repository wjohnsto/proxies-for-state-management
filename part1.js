const proxyHandler = {
    get(target, property, receiver) {
      console.log(`getting property ${property}!`);

      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      console.log(`setting property ${property}!`);

      return Reflect.set(target, property, value, receiver);
    },
  };

  const state = new Proxy(
    {
      person: {
        firstName: "Will",
        lastName: "",
      },
    },
    proxyHandler
  );

  console.log(state.person.firstName);
  state.person = {
    firstName: "Will",
    lastName: "Johnston",
  };
  console.log(state);
