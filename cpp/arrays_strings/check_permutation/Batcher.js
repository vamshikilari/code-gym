// const arr = promises.all()

/**
 * batch your calls 'n' at a time.
 */

// if it is full?
// schedule it, store in a queue
// checking if is having the space,
// pop from the list of calls waiting in-order,
// push it to process.
// no stall, if there is space we will process.

class BatchMiddleware {
  constructor({ maxJobs = 5 }) {
    this.waitList = [];
    this.maxJobs = maxJobs;
    this.initNetworkMap();
  }

  initNetworkMap() {
    this.pointNodes = Array.from(Array(this.maxJobs).keys());
    this.networkMap = this.pointNodes.reduce((acc, cur) => {
      acc = { ...acc, [cur]: false };
      return acc;
    }, {});
  }

  checkAndProcess() {
    if (this.waitList.length === 0) {
      return;
    }
    const isFree = this.checkNetwork();
    if (isFree) {
      const calleFunc = this.waitList.unshift();
      this.fetchMe(calleFunc);
    }
  }

  async fetchMe(calleFunc) {
    const freePoint = this.checkNetwork();
    if (freePoint) {
      this.updateNetwork(freePoint);
      await calleFunc();
      this.freeNetwork(freePoint);
    } else {
      this.addToWaitList(calleFunc);
    }
  }

  freeNetwork(point) {
    this.networkMap[point] = false;
    this.checkAndProcess();
  }

  updateNetwork(point) {
    this.networkMap[point] = true;
  }

  addToWaitList(calleFunc) {
    this.waitList = this.waitList.concat(calle);
  }

  checkNetwork() {
    return this.pointNodes.some((point) => this.networkMap[point]);
  }
}
