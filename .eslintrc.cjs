// https://blog.51cto.com/u_15477976/4912371

module.exports = {
	"env": {
		"browser": true,
		"es2021": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended",
		"airbnb-typescript",
		'plugin:react-hooks/recommended'
	],
	"overrides": [],
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	"plugins": [
		"react",
		"@typescript-eslint"
	],
	"project": "./tsconfig.json",
	rules: {
		'no-console': import.meta.env.PROD ? 'warn' : 'off', // allow console during development
    'no-debugger': import.meta.env.PROD ? 'warn' : 'off', // allow debugger during development
		// suppress errors for missing 'import React' in files
		"react/react-in-jsx-scope": "off",
		// allow jsx syntax in js files (for next.js project)
		"react/jsx-filename-extension": [1, {
			"extensions": [".ts", ".tsx"]
		}], //should add ".ts" if typescript project
		"no-irregular-whitespace": 2, // 不能有不规则的空格
		"no-multi-spaces": 1, // 不能用多余的空格
		"no-trailing-spaces": 1, // 一行结束后面不要有空格
	}
}
