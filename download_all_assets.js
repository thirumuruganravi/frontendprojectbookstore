// Script to download all project asset images locally into assets/images/
const fs = require('fs');
const path = require('path');

const ASSETS_DIR = path.join(__dirname, 'assets', 'images');

const CATEGORIES = {
  "fiction": [
    "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=600&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&h=600&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400&h=600&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1476275466078-4cad320e7cbe?w=400&h=600&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&h=600&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=600&fit=crop&crop=center"
  ],
  "technology": [
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=600&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=600&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=600&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&h=600&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=600&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=600&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=600&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=600&fit=crop&crop=center"
  ],
  "self-development": [
    "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=600&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=400&h=600&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?w=400&h=600&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1508672019048-805b876b67e2?w=400&h=600&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1447452001602-7090c7ab2db3?w=400&h=600&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=400&h=600&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?w=400&h=600&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1544717305-2782549b5136?w=400&h=600&fit=crop&crop=center"
  ],
  "business": [
    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=600&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=600&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=600&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=600&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=600&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=600&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=600&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1520607164069-c25526143aef?w=400&h=600&fit=crop&crop=center"
  ],
  "science": [
    "https://images.unsplash.com/photo-1465101162946-4377e57745c3?w=400&h=600&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=600&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=400&h=600&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=600&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&h=600&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=400&h=600&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1507668077129-56e32842fceb?w=400&h=600&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1564325724739-bae0bd08762c?w=400&h=600&fit=crop&crop=center"
  ],
  "biography": [
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=600&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=600&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=600&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=600&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=600&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&h=600&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=600&fit=crop&crop=center"
  ],
  "romance": [
    "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=400&h=600&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=600&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=600&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=400&h=600&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?w=400&h=600&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=400&h=600&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1501901609772-df0848060b33?w=400&h=600&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=600&fit=crop&crop=center"
  ],
  "mystery": [
    "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400&h=600&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1514537092201-99527ec3cfcb?w=400&h=600&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=400&h=600&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&h=600&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1447069387593-a5de0862481e?w=400&h=600&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&h=600&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1516541196182-6bdb0516ed27?w=400&h=600&fit=crop&crop=center"
  ],
  "hero": [
    "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=450&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=450&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300&h=450&fit=crop&crop=center"
  ],
  "about": [
    "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=750&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=480&fit=crop&crop=center"
  ]
};

async function downloadImage(url, destPath) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buffer = await res.arrayBuffer();
    fs.writeFileSync(destPath, Buffer.from(buffer));
    return true;
  } catch (err) {
    console.error(`Failed to download ${url}: ${err.message}`);
    return false;
  }
}

async function main() {
  console.log('Starting asset download into assets/images/ ...');
  let downloadedCount = 0;

  for (const [folder, urls] of Object.entries(CATEGORIES)) {
    const folderPath = path.join(ASSETS_DIR, folder);
    fs.mkdirSync(folderPath, { recursive: true });

    for (let i = 0; i < urls.length; i++) {
      const url = urls[i];
      const filename = `${folder}-${i + 1}.jpg`;
      const destPath = path.join(folderPath, filename);

      const ok = await downloadImage(url, destPath);
      if (ok) {
        downloadedCount++;
        process.stdout.write(`Downloaded: assets/images/${folder}/${filename}\n`);
      }
    }
  }

  console.log(`\nCompleted! Successfully downloaded ${downloadedCount} asset images.`);
}

main();
