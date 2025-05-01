const fs = require('fs');
const path = require('path');

const folderPath = './';

fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error('Error membaca folder:', err);
    return;
  }

  files.forEach((file) => {
    if (file.endsWith('.java')) {
      const filePath = path.join(folderPath, file);
      const className = file.replace('.java', '');

      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          console.error(`Gagal baca file ${file}:`, err);
          return;
        }

        // 1. Hapus package com.komputerkit jika ada
        let newData = data.replace(/package\s+com\.komputerkit\s*;\s*\n?/g, '');
        
        // 2. Perbaiki nama class jika tidak sesuai
        const regex = /public\s+class\s+(\w+)/;
        const match = newData.match(regex);

        if (match) {
          const currentClass = match[1];
          if (currentClass !== className) {
            newData = newData.replace(
              regex,
              `public class ${className}`
            );
          }
        }

        // Tulis perubahan hanya jika ada modifikasi
        if (newData !== data) {
          fs.writeFile(filePath, newData, 'utf8', (err) => {
            if (err) {
              console.error(`Gagal update file ${file}:`, err);
            } else {
              const changes = [];
              if (data !== newData) {
                if (!data.match(/package\s+com\.komputerkit\s*;\s*\n?/g) && newData.match(/package\s+com\.komputerkit\s*;\s*\n?/g)) {
                  changes.push('menghapus package com.komputerkit');
                }
                if (match && match[1] !== className) {
                  changes.push(`mengubah class ${match[1]} → ${className}`);
                }
              }
              console.log(`Sukses: ${file} -> ${changes.join(' + ')}`);
            }
          });
        } else {
          console.log(`Skip: ${file} (tidak perlu perubahan)`);
        }
      });
    }
  });
});