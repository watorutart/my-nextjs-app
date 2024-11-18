module.exports = function (
  /** @type {import('plop').NodePlopAPI} */
  plop,
) {
  plop.setGenerator('component', {
    description: 'Create a new component',
    prompts: [
      {
        type: 'input',
        name: 'path',
        message: 'どのディレクトリに作成しますか？ （ex: src/components/)',
      },
    ],
    actions: [],
  });
}
