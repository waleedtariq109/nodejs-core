module.exports = class EventEmitter {
  listeners = {};

  addListeners(eventName, fn) {
    this.listeners[eventName] = this.listeners[eventName] || [];
    this.listeners[eventName].push(fn);
    return this;
  }

  on(eventName, fn) {
    this.addListeners(eventName, fn);
  }

  off(eventName, fn) {
    return this.removeListener(eventName, fn);
  }

  emit(eventName, ...args) {
    const fns = this.listeners[eventName];
    if (!fns) return false;
    fns.forEach((fn) => {
      fn(...args);
    });
    return true;
  }

  once(eventName, fn) {
    this.listeners[eventName] = this.listeners[eventName] || [];
    const onceWrapper = () => {
      fn();
      this.off(eventName, onceWrapper);
    };
    this.listeners[eventName].push(onceWrapper);
    return this;
  }

  removeListener(eventName, fn) {
    const lis = this.listeners[eventName];
    if (!lis) return this;
    for (let i = lis.length; i >= 0; i--) {
      if (lis[i] === fn) {
        lis.splice(i, 1);
        break;
      }
    }
    return this;
  }

  listenersCount(eventName) {
    let fns = this.listeners[eventName] || [];
    return fns.length;
  }

  rawListener(eventName) {
    return this.listeners[eventName];
  }
};
