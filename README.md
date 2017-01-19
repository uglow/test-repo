<!--[RM_HEADING]-->
# eslint-config-auspost

<!--[]-->
> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for linting AusPost javascript code


<!--[RM_BADGES]-->
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)


<!--[]-->

## Install

```
npm install eslint-config-auspost --save-dev
```


## Usage

Add some ESLint config to your `package.json`:

```json
{
	"eslintConfig": {
		"extends": "auspost"
	}
}
```

### Run the linter

Add a run script to your `package.json`:

```json
{
    "scripts": {
		"lint": "eslint ."
	},
}
```

Then lint with `$ npm run lint`.


<!--[RM_CONTRIBUTING]-->
## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).


<!--[]-->

<!--[RM_LICENSE]-->
## License

This software does not have a license.


<!--[]-->

