// https://juejin.cn/post/6844903832485363720

module.exports = {
	"trailingComma": "es5",
	"singleQuote": true,
	"semi": false,
	"jsxSingleQuote": true,
	"endOfLine": "lf",
	"printWidth": 80,
	"tabWidth": 2,
	"bracketSpacing": false,
	"bracketSameLine": false,
	"arrowParens": "avoid",
	"singleAttributePerLine": true,
	"overrides": [{
			"files": ".prettierrc",
			"options": {
				"parser": "json"
			}
		},
		{
			"files": "*.config.js",
			"options": {
				"parser": "babel"
			}
		}
	]
}
