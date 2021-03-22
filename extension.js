// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	console.log('Congratulations, your extension "lordran-ipsum" is now active!');

	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('lordran-ipsum.lordran-ipsum', function () {
		vscode.window.showInformationMessage('Bonfire Lit');
	});
  let sentence = vscode.commands.registerCommand('lordran-ipsum.lordran-sentence', function () {
    vscode.window.showInformationMessage('Lordran Ipsum Sentence')
  })
  let paragraph = vscode.commands.registerCommand('lordran-ipsum.lordran-paragraph', function() {
    vscode.window.showInformationMessage('Lordran Ipsum Paragraph');
  })
	context.subscriptions.push(disposable);
	context.subscriptions.push(paragraph);
  context.subscriptions.push(sentence);
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
