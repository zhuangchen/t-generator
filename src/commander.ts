import commander from 'commander';
const program = new commander.Command();
program.version('0.0.1', '-v, --version', 'output version info');
program.on('--help', () => {
  console.log('');
  console.log('Examples:');
  console.log('  $ create-template --help');
  console.log('  $ create-template -h');
});
program
  .option('-p, --page <name>', 'set the name of the page')
  .option('-s, --page-suffix <suffix>', 'set the suffix of the page', '.tsx')
  .option('--out-page-dir <path>', 'set the output path of the page', 'pages')
  .option('--page-template-function <path>', 'set template function path of page')
  .option('--config-path <path>', 'set profile path')
  .parse(process.argv);
export default program.opts();
