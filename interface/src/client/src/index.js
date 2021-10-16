import {dialog, require} from '@electron/remote';
const {spawn} = require('child_process');

import {renderItems} from './utils/renderItems';
import './styles.css';

const selectBtn = document.getElementsByClassName('select-btn')[0];
const tableBody = document.getElementsByTagName('tbody')[0];

const getImagesInfo = async (directory) => {
    const laba = spawn('python3', ['/Users/wgwergwegwer/cher_labs/first/faces.py', '-d', directory]);
    
    const res = await new Promise((res, rej) => {
        laba.stdout.addListener('data', data => res(String(data).replace(/\'/gi, "\"")));
        laba.addListener('error', rej);
        laba.addListener('exit', rej)
    });

    return JSON.parse(res);
};

selectBtn.addEventListener('click', async () => {
    const items = await getImagesInfo(dialog.showOpenDialogSync({properties: ['openDirectory']}));

    tableBody.innerHTML = renderItems(items);
});


