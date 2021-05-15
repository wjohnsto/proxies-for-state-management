const pathCache = new WeakMap();
const proxyCache = new WeakMap();
const proxyHandler = {
  get(target, property, receiver) {
    console.log(`getting prop ${property} on state!`);

    const value = Reflect.get(target, property, receiver);

    if (typeof value === "string") {
      return value;
    }

    let path = pathCache.get(target);

    if (path !== "") {
      path += ".";
    }

    return buildProxy(value, `${path}${property}`);
  },
};

function buildProxy(value, property) {
  pathCache.set(value, property);

  let proxy = proxyCache.get(value);

  if (proxy === undefined) {
    try {
      proxy = new Proxy(value, proxyHandler);
    } catch (e) {}

    proxyCache.set(value, proxy);
  }

  return proxy;
}

const state = buildProxy({}, "");

state.person = {
  firstName: "Will",
  lastName: "",
};

console.log(state.person.firstName);
state.person = {
  firstName: "Will",
  lastName: "Johnston",
};
console.log(state);
