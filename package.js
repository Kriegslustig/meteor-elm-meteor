Package.describe({
  name: 'elm:meteor'
, summary: 'Meteor core bindings'
, version: '0.1.1'
, git: 'https://github.com/Kriegslustig/meteor-elm-meteor.git'
})

Package.onUse(function (api) {
  api.use(['ecmascript@0.1.6', 'meteor@1.1.10', 'elm:make@0.2.2', 'elm:mongo@0.0.1'])
  api.addFiles([
    '.elm-dependencies.json'
  , 'Server.elm.js'
  , 'Server.elm'
  , 'Meteor.elm.js'
  , 'Meteor.elm'
  ])
})

Package.onTest(function (api) {
  api.use(['ecmascript@0.1.6'])
  api.addFiles([
    '.elm-dependencies.json'
  , 'Meteor.elm.js'
  , 'Meteor.elm'
  ])
  api.addFiles('test/Common._.elm')
  api.addFiles('test/Client._.elm', 'client')
  api.addFiles('test/Server._.elm', 'server')
  api.addFiles('test/tests.js')
})

