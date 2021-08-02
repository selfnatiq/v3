---
title: 🤖 Automate Prettier, ESLint using Husky and Lint-Staged
description: Add automation to your project! Automate Prettier and ESLint as a pre-commit Git hook using Husky and Lint-Staged.
date: August 02, 2021
draft: false
slug: pehl-automation
tags:
    - Prettier
    - Husky
    - Eslint
    - Lint-Staged
    - Next.js
---

Automate projects with the following modules. So the code stays the same across multiple users, when you are working within a team. This configuration will allow to check the code and prettify it before you commit your changes.

### Install required modules 📦

```sh
yarn add -D prettier eslint husky lint-staged
```

### Configure Prettier

Create `.prettierrc` file in root directory. _You can extend my example as you like_.

```json
{
	"semi": false,
	"endOfLine": "lf",
	"printWidth": 80,
	"tabWidth": 4,
	"trailingComma": "es5"
}
```

### Configure ESLint

```sh
npx eslint --init
```

Complete the steps and configure your eslint as you like.

My `eslintrc.json` looks something like this:

```json
{
	"env": {
		"browser": true,
		"es2021": true
	},
	"extends": ["standard", "plugin:react/recommended", "prettier"],
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
		"ecmaVersion": 12,
		"sourceType": "module"
	},
	"plugins": ["react"],
	"rules": {
		"react/react-in-jsx-scope": "off",
		"react/prop-types": "off"
	},
	"settings": {
		"react": {
			"version": "latest"
		}
	}
}
```

I'd like extend it with prettier, like this `"extends": ["standard", "plugin:react/recommended", "prettier"],`. if you want? You can install this module:

```sh
yarn add -D eslint-config-prettier
```

If your terminal complains about react version? Add this to your `eslintrc.json`

```json
"settings": {
    "react": {
        "version": "latest"
    }
}
```

### Lint-staged installation

```sh
npx mrm@2 lint-staged
```

After running the following command, you will notice `.husky` folder in your root directory.
This is a **pre-commit** hook that will be executed before commiting.

In `package.json` you will see something like this:

```json
"lint-staged": {
    "*.js": [
      "eslint .",
      "prettier --check .",
      "prettier --write ."
    ]
}
```

Lint-staged will run on following files with on following extensions at the end.
You also add more extensions as you wish. For example:

```json
"lint-staged": {
    "*.{js,jsx}": "eslint --fix",
    "*.{js,css,json}": "prettier --write"
}
```

**And now this pre-commit hook will run before you commit your code. You will see logs in terminal.**

### Ignore files

This article is using example project with `next.js`, that's why I have `.next` folders. You should include yours.

#### .prettierignore

Create `.prettierignore` file in your project directory.

```txt
.next
next-env.d.ts
node_modules
yarn.lock
package-lock.json
public
```

#### .eslintignore

Create `.eslintignore` file in your project directory.

```txt
.next
next-env.d.ts
node_modules
yarn.lock
package-lock.json
public
```

### Additional options

#### Prettify script

I'd like to include prettify script in `package.json`. This script will prettify all the files in the project. Something like this:

```json
{
	"prettify": "prettier --write ."
}
```

#### VsCode settings

Create `vscode/settings.json` this file in your project directory. Of course you can extend my example

These settings will apply to your VSCode, so the code stays the same. When there multiple users are working on same project, this will help.

```json
{
	"editor.formatOnPaste": true,
	"editor.formatOnSave": true,
	"editor.defaultFormatter": "esbenp.prettier-vscode",
	"editor.codeActionsOnSave": {
		"source.fixAll.eslint": true,
		"source.fixAll.format": true
	}
}
```

**I like automating my projects with these configurations 🤗**
