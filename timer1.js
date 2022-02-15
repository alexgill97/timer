const args = process.argv.slice(2).map(arg => Number(arg) > 0 ? Number(arg) : null)
const alarm = (num) => {
  setTimeout(() => {
    process.stdout.write('.\n')
  }, num * 1000)
}
args.forEach(arg => {
  if (Number.isInteger(arg)) {
    alarm(arg)
  }
})