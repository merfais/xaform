import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import pluginVue from 'eslint-plugin-vue';

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,mjs,jsx,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },
  ...pluginVue.configs['flat/recommended'],
  {
    name: 'js/recommended',
    ...js.configs.recommended,
  },
  {
    name: 'stylistic/recommended',
    ...stylistic.configs['recommended-flat'],
  },
  {
    name: 'custom/vue',
    rules: {
    },
  },
  {
    name: 'custom/stylistic',
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      // 要求或禁止在函数标识符和其调用之间有空格
      '@stylistic/func-call-spacing': ['error', 'never'],
      // 强制在函数括号内使用一致的换行
      '@stylistic/function-paren-newline': ['warn', 'multiline'],
      // 强制 generator 函数中 * 号周围使用一致的空格
      '@stylistic/generator-star-spacing': ['warn', {
        before: false,
        after: true,
      }],
      // 强制隐式返回的箭头函数体的位置
      '@stylistic/implicit-arrow-linebreak': ['warn', 'beside'],
      // 只允许使用 unix 的 LF 作为换行符，Windows 的 CRLF 不可以使用
      '@stylistic/linebreak-style': ['warn', 'unix'],
      // 强制一行的最大长度，限制单行不能超过100个字符，字符串和正则表达式除外。
      '@stylistic/max-len': ['off', {
        code: 120,
        ignoreStrings: true,
        ignoreUrls: true,
        ignoreRegExpLiterals: true,
        ignoreTemplateLiterals: true,
      }],
      // 在编写多个方法链式调用(超过两个方法链式调用)时。 使用前导点，强调这行是一个方法调用，而不是一个语句。
      '@stylistic/newline-per-chained-call': ['warn', {
        ignoreChainWithDepth: 2,
      }],
      // 避免搞混箭头函数符号 (=>) 和比较运算符 (<=, >=)。
      '@stylistic/no-confusing-arrow': 'warn',
      // 强制单个语句的位置
      '@stylistic/nonblock-statement-body-position': ['error', 'beside'],
      // 要求对象字面量属性名称用引号括起来
      '@stylistic/quote-props': ['error', 'as-needed', {
        keywords: false,
      }],
      // 要加分号
      '@stylistic/semi': ['error', 'always'],
    },
  },
  {
    name: 'custom/js',
    rules: {
      // 使用驼峰命名法（camelCase）命名对象、函数和实例。
      camelcase: ['error', {
        ignoreDestructuring: true,
        properties: 'never',
      }],
      // 只有在命名构造器或者类的时候，才用帕斯卡拼命名法（PascalCase），即首字母大写。
      'new-cap': ['error', {
        newIsCap: true,
        newIsCapExceptions: [],
        capIsNew: false,
        capIsNewExceptions: [
          'Immutable.Map',
          'Immutable.Set',
          'Immutable.List',
        ],
        properties: false,
      }],
      // 使用字面量语法创建数组。
      'no-array-constructor': 'error',
      // 禁止使用 eval
      'no-eval': 'error',
      // 禁止在循环内的函数内部出现循环体条件语句中定义的变量
      'no-loop-func': 'error',
      // 禁止连续赋值，比如 foo = bar = 1
      'no-multi-assign': 'error',
      // 禁止使用 new Function
      // @reason 这和 eval 是等价的
      'no-new-func': 'error',
      // 禁止直接 new Object
      'no-object-constructor': 'error',
      // 禁止使用 ++ 或 --
      'no-plusplus': ['error', {
        allowForLoopAfterthoughts: true,
      }],
      // 已定义的变量必须使用
      // 但不检查最后一个使用的参数之前的参数
      // 也不检查 rest 属性的兄弟属性
      'no-unused-vars': ['error', {
        args: 'after-used',
        ignoreRestSiblings: true,
        argsIgnorePattern: '^_.+',
        varsIgnorePattern: '^_.+',
      }],
      // 禁止使用 var
      'no-var': 'error',
      // 申明后不再被修改的变量必须使用 const 来申明
      'prefer-const': ['error', {
        destructuring: 'any',
        ignoreReadBeforeAssign: false,
      }],
      // 必须使用模版字符串而不是字符串连接
      'prefer-template': 'error',
      // 数组的方法除了 forEach 之外，回调函数必须有返回值
      'array-callback-return': 'warn',
      // 要求箭头函数体使用大括号
      'arrow-body-style': ['warn', 'as-needed'],
      // 禁止使用 foo['bar']，必须写成 foo.bar
      'dot-notation': 'warn',
      // 必须使用 === 或 !==，禁止使用 == 或 !=
      eqeqeq: ['warn', 'always'],
      // 禁止在 else 内使用 return，必须改为提前结束
      'no-else-return': ['warn', {
        allowElseIf: false,
      }],
      // 不要使用迭代器。
      // @reason 推荐使用 JavaScript 的高阶函数代替 for-in。
      'no-iterator': 'warn',
      // 禁止使用嵌套的三元表达式，比如 a ? b : c ? d : e
      'no-nested-ternary': 'warn',
      // 禁止使用 new 来生成 String, Number 或 Boolean
      'no-new-wrappers': 'warn',
      // 禁止对函数的参数重新赋值
      'no-param-reassign': ['warn', {
        props: true,
        ignorePropertyModificationsFor: [
          'acc',
          'accumulator',
          'e',
          'ctx',
          'req',
          'request',
          'res',
          'response',
          '$scope',
          'staticContext',
          'state',
        ],
      }],
      // 计算指数时，可以使用 ** 运算符。
      'no-restricted-properties': ['warn', {
        object: 'Math',
        property: 'pow',
        message: 'Please use ** instand',
      }],
      // 推荐使用 JavaScript 的高阶函数代替 for-in
      'no-restricted-syntax': ['warn',
        {
          selector: 'ForInStatement',
          message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
        },
        {
          selector: 'LabeledStatement',
          message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
        },
        {
          selector: 'WithStatement',
          message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
        },
      ],
      // 禁止变量名出现下划线
      'no-underscore-dangle': 'warn',
      // 必须使用 !a 替代 a ? false : true
      'no-unneeded-ternary': 'warn',
      // 禁止出现没必要的 constructor
      'no-useless-constructor': 'warn',
      // 将对象方法、属性简写，且间歇属性放在前面。
      'object-shorthand': 'warn',
      // 禁止变量申明时用逗号一次申明多个
      'one-var': ['warn', 'never'],
      // 要求回调函数使用箭头函数
      'prefer-arrow-callback': 'warn',
      // 优先使用解构赋值
      'prefer-destructuring': ['warn',
        {
          VariableDeclarator: {
            array: false,
            object: true,
          },
          AssignmentExpression: {
            array: true,
            object: false,
          },
        },
        {
          enforceForRenamedProperties: false,
        },
      ],
      // 必须使用 ...args 而不是 arguments
      'prefer-rest-params': 'warn',
      // 必须使用 ... 而不是 apply，比如 foo(...args)
      'prefer-spread': 'warn',
      // parseInt 必须传入第二个参数
      radix: 'warn',
      // 必须只使用函数声明或只使用函数表达式
      'func-style': [
        'off',
        'expression',
      ],
      // 限制变量名长度
      'id-length': 'off',
    },
  },
];
