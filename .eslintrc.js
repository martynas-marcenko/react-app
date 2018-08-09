module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "rules": {
        "react/jsx-filename-extension": [1, {
            "extensions": [".js", ".jsx"]
        }],
        "react/prefer-stateless-function": 0,
        "no-undef": 0
    }
};