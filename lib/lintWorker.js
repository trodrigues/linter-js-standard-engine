var lintPath = process.argv.slice(2).pop()

var linter = require(lintPath)

process.on('message', function (data) {
  linter.lintText(data.source, function (err, result) {
    process.send({
      id: data.id,
      source: data.source,
      result: result || null,
      err: err
    })
  })
})
