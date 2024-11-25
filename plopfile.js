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
      {
        type: 'input',
        name: 'name',
        message: 'コンポーネント名を入力してください。 （ex: Button)',
      },
    ],
    actions: [
      {
        type: 'add',
        path: './{{path}}/{{pascalCase name}}/index.tsx',
        templateFile: 'plop-templates/componentIndex.tsx.hbs'
      },
      {
        type: 'add',
        path: './{{path}}/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'plop-templates/component.tsx.hbs'
      }
    ],
  });
}
