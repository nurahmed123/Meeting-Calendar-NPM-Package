#!/usr/bin/env node

const { exec } = require('child_process');

function openUrl(url) {
    let command;
    if (process.platform === 'win32') {
        command = `start "${url}"`;
    } else if (process.platform === 'darwin') {
        command = `open "${url}"`;
    } else {
        command = `xdg-open "${url}"`;
    }
    exec(command, (error) => {
        if (error) {
            console.error('Failed to open URL:', error);
        }
    });
}

console.log('\n\x1b[36m%s\x1b[0m', '>>> Thank you for installing Meeting Calendar!');
console.log('\x1b[36m%s\x1b[0m', '>>> Press ENTER to finish the download and login at Meeting Management Portal...');

// Set a timeout to exit if no input is received (prevent hanging in CI/non-interactive)
const timeout = setTimeout(() => {
    console.log('\n(Proceeding without input...)');
    process.exit(0);
}, 15000);

process.stdin.setEncoding('utf8');
process.stdin.on('data', () => {
    clearTimeout(timeout);
    openUrl('https://calendar.arionys.com/sign-in');
    console.log('Opening browser...');
    process.exit(0);
});
