module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": ["eslint-config-standard-with-typescript", "eslint-config-prettier"],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
    }
}
