#!/usr/bin/env node

import fs from "fs";
import QRCode from "qrcode";

async function main() {
    const file = fs.readFileSync('./static/Rainer_Studhalter.vcf');
    const fileData = file.toString();

    QRCode.toFile('./static/Rainer_Studhalter_vCard.png', fileData, { errorCorrectionLevel: 'H', scale: 5, margin: 0 });
}

main();