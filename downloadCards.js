import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.join(__dirname, 'public', 'cards');
if (!fs.existsSync(PUBLIC_DIR)) {
    fs.mkdirSync(PUBLIC_DIR, { recursive: true });
}

// Ensure clean directory
// fs.readdirSync(PUBLIC_DIR).forEach(f => fs.unlinkSync(path.join(PUBLIC_DIR, f)));

const CDN_BASE = "https://raw.githubusercontent.com/searge/tarot/master/assets/img/big/";

const MAJOR_ARCANA = [];
for (let i = 0; i <= 21; i++) {
    MAJOR_ARCANA.push(`maj${i.toString().padStart(2, '0')}.jpg`);
}

const SUITS = ["wands", "cups", "swords", "pents"];

const getMinorImageStr = (index) => {
    const num = index + 1;
    return num < 10 ? `0${num}` : `${num}`;
};

const MINORS = [];
SUITS.forEach(suit => {
    for (let i = 0; i < 14; i++) {
        MINORS.push(`${suit}${getMinorImageStr(i)}.jpg`);
    }
});

const ALL_FILES = [...MAJOR_ARCANA, ...MINORS];

const downloadFile = (file) => {
    return new Promise((resolve, reject) => {
        const destPath = path.join(PUBLIC_DIR, file);
        if (fs.existsSync(destPath) && fs.statSync(destPath).size > 1000) {
            console.log(`Skipping ${file}, already exists.`);
            return resolve();
        }

        const fileStream = fs.createWriteStream(destPath);
        const request = https.get(`${CDN_BASE}${file}`, (response) => {
            if (response.statusCode === 301 || response.statusCode === 302) {
                // follow redirect
                https.get(response.headers.location, (res) => {
                    res.pipe(fileStream);
                    fileStream.on('finish', () => { fileStream.close(); resolve(); });
                });
                return;
            }
            if (response.statusCode !== 200) {
                fs.unlinkSync(destPath);
                return reject(new Error(`Failed to download ${file}, status: ${response.statusCode}`));
            }
            response.pipe(fileStream);
            fileStream.on('finish', () => {
                fileStream.close();
                console.log(`Downloaded ${file}`);
                resolve();
            });
        }).on('error', (err) => {
            if (fs.existsSync(destPath)) fs.unlinkSync(destPath);
            reject(err);
        });
    });
};

async function downloadAll() {
    console.log(`Starting download of ${ALL_FILES.length} images...`);

    const BATCH_SIZE = 10;
    for (let i = 0; i < ALL_FILES.length; i += BATCH_SIZE) {
        const batch = ALL_FILES.slice(i, i + BATCH_SIZE);
        await Promise.all(batch.map(f => downloadFile(f).catch(e => console.error(e.message))));
    }

    console.log("All downloads complete!");
}

downloadAll().catch(console.error);
