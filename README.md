# Using the JS Proxy API For State Management
The Proxy object enables you to create a proxy for another object, which can intercept and redefine fundamental operations for that object. It lets you setup traps, which are functions that intercept calls to native functions.

Proxy is what became of the original `Object.observe` concept. Proxies are like a more feature-rich version of property descriptors (i.e. `Object.defineProperty`)

## About Me
I'm Will Johnston. I have been writing code since I was about 10 years old. I got my first job writing Python in High School and developed a true passion for software development from that job. From then I've spent many years working mostly on web and backend software development. I got interested in Proxies because I have done a fair amount of .NET programming and always loved the concept of data binding and being able to stealthily observe changes to objects.

## Proxy Methods
When using Proxy you can use the following methods to setup traps:

- apply()
- construct()
- defineProperty()
- deleteProperty()
- **get**()
- getOwnPropertyDescriptor()
- getPrototypeOf()
- has()
- isExtensible()
- ownKeys()
- preventExtensions()
- **set**()
- setPrototypeOf()

## Reflect
The Reflect object is used to forward an operation to the original object. It has the same API as Proxy. It is useful to avoid issues with `this` when dealing with inherited objects.

## Demo
### Part 1 (get, set)
Let's setup a state object and use Proxy to observe changes to that object.

### Part 2 (Recursive Observation)
Let's use WeakMaps in order to build a Proxy that watches for nested changes on our state object.

### Part 3 (tates)
tates is a JS library (`npm i tates`) that wraps the Proxy API and allows you to subscribe to objects on a state object. Let's see how that works! Let's look at how we can use tates and Apollo to make calls to a Headless WordPress site, retreive posts, set them on state, and notify subscribers. All using Proxy!

## Performance Concerns
Proxy performance is meh, but not much worse than Promises versus callbacks. If you are trying to optimize your site and you find yourself poking into a promise library to make things perform better then maybe proxies aren't for you. Otherwise, proxies are probably not going to be a burden.
