process.stdout.write('voçe gosta de pizza?')
process.stdin.on('data',function (data) {
  process.stdout.write(`sua resposta foi ${data.toString()}Obrigado!\n`)
  process.exit()
})
