module.exports = {
  log: () => {
    console.log('Hello');
    return 'hello';
  },
  log2: () => {
    console.log('hello 2');
    return 'hello 2';
  },
  getLog3: () => 'logger3',
  getLog4: () => 'logger4',
  getLog5: () => 'logger5',
  beta: () => console.log('beta'),
};