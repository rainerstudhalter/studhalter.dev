#!/usr/bin/env node

import QRCode from "qrcode";
import operator from './src/lib/operator.json' assert { type: 'json' };

const vCardUrl = operator.url + operator.vCardPath

async function main() {
    QRCode.toFile('./static/Rainer_Studhalter_vCardUrl.png', vCardUrl, { errorCorrectionLevel: 'H', scale: 10, margin: 0 });
}

main();