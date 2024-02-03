module.exports = {
	plugins: ['import'],
	extends: [
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:prettier/recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
		'plugin:import/typescript',
		'prettier',
	],
	globals: {
		beforeAll: true,
		beforeEach: true,
		describe: true,
		expect: true,
		it: true,
		jest: true,
		localStorage: true,
		chrome: 'readonly',
	},
	env: {
		browser: true,
		es6: true,
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
		sourceType: 'module', // Allows for the use of imports
	},
	overrides: [
		// override 'simple-import-sort' config
		{
			files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
			rules: {
				'import/order': [
					'error',
					{
						groups: [
							'builtin',
							'external',
							'internal',
							'parent',
							'sibling',
							'index',
						],

						'newlines-between': 'always',
						alphabetize: {
							order: 'asc',
							caseInsensitive: false,
						},
						pathGroupsExcludedImportTypes: ['react'],

						pathGroups: [
							{
								pattern: 'react',
								group: 'external',
								position: 'before',
							},
							{ pattern: '@/styles/', group: 'internal', position: 'after' },
							{ pattern: '@/types/', group: 'internal', position: 'after' },
							{ pattern: '@/routes/', group: 'internal', position: 'after' },
							{ pattern: '@/pages/', group: 'internal', position: 'after' },
							{
								pattern: '@/components/',
								group: 'internal',
								position: 'after',
							},
							{ pattern: '@/store/', group: 'internal', position: 'after' },
							{ pattern: '@/enum/', group: 'internal', position: 'after' },
							{
								pattern: '@/services/',
								group: 'internal',
								position: 'after',
							},
							{ pattern: '@/context/', group: 'internal', position: 'after' },
							{ pattern: '@/hooks/', group: 'internal', position: 'after' },
							{ pattern: '@/utils/**', group: 'internal', position: 'after' },
						],
					},
				],
			},
		},
	],
	settings: {
		react: {
			version: 'detect',
		},
		'import/extensions': ['.ts', '.js', '.tsx', '.json', '.json5'],
		'import/resolver': {
			node: {
				extensions: ['.ts', '.js', '.tsx', '.json', '.json5'],
			},
			alias: {
				map: [['@', './src']],
				extensions: ['.ts', '.js', '.tsx', '.json', '.json5'],
			},
		},
	},
	rules: {
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'no-unused-vars': 'off',
		'import/no-named-as-default': 'off',
		'@typescript-eslint/ban-types': 'off',
		'@typescript-eslint/no-non-null-assertion': 'off',
		'import/no-named-as-default-member': 'off',
		camelcase: 0,
		'prettier/prettier': 0,
		'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
		'jsx-quotes': ['error', 'prefer-double'],
		'no-console': ['warn', { allow: ['warn', 'error'] }],
		'consistent-return': 0,
		quotes: [2, 'single', { avoidEscape: true }],
		'comma-dangle': ['error', 'only-multiline'],
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				js: 'never',
				ts: 'never',
				tsx: 'never',
				json: 'never',
				json5: 'never',
			},
		],
		'@typescript-eslint/no-var-requires': 0,
		'@typescript-eslint/no-explicit-any': 0,
		'@typescript-eslint/explicit-function-return-type': 0,
		'@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
		'import/prefer-default-export': 'off',
		'no-nested-ternary': 'off',
		'import/first': 'error',
		'import/newline-after-import': 'error',
		'import/no-duplicates': 'error',
		'react/jsx-props-no-spreading': [0],
		'react/jsx-sort-props': 1,
		'react/prop-types': 0,
		'react/no-array-index-key': 'off',
		'react/require-default-props': 'off',
		'react/jsx-filename-extension': [
			2,
			{
				extensions: ['.jsx', '.tsx'],
			},
		],
	},
};
