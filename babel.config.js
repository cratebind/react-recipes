const test = process.env.NODE_ENV === "test";
const prod = process.env.NODE_ENV === "production";

module.exports = {
  presets: [
    [
      "babel-preset-gatsby",
      {
        targets: {
          browsers: [">0.25%", "not dead"]
        }
      }
    ]
  ],
  plugins: [
    "babel-plugin-dev-expression",
    "babel-plugin-macros",
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-object-rest-spread",
    !prod && [
      "babel-plugin-module-resolver",
      {
        alias: {
          "^reakit([^/]*)(.*)$": "reakit\\1/src\\2"
        }
      }
    ]
  ].filter(Boolean)
};
