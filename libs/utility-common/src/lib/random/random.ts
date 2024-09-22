export const Random = {
  getBetween(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
  },
  getRandomInArray(objs: any[]) {
    return objs[this.getBetween(0, objs.length - 1)];
  },
};
