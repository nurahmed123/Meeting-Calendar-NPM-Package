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
console.log('\x1b[36m%s\x1b[0m', '>>> Opening Meeting Management Portal in your browser...');

// Open the URL automatically after a brief pause to ensure the log is seen
setTimeout(() => {
    openUrl('https://calendar.arionys.com/sign-in');
    process.exit(0);
}, 2000);
