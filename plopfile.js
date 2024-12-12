module.exports = function (
  /** @type {import('plop').NodePlopAPI} */
  plop,
) {
  plop.setGenerator('component', {
    description: 'Create a new component',
    prompts: [
      // npx plop実行時のプロンプト設定
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
      // 実行する操作の設定
      {
        type: 'add',
        path: './{{path}}/{{pascalCase name}}/index.tsx',
        templateFile: 'plop-templates/componentIndex.tsx.hbs',
      },
      {
        type: 'add',
        path: './{{path}}/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'plop-templates/component.tsx.hbs',
      },
      {
        type: 'add',
        path: './{{path}}/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'plop-templates/component.stories.tsx.hbs',
      },
    ],
  });
};
