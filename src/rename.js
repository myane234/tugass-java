const fs = require('fs');
const path = require('path');

// Folder target (ganti dengan path folder Anda)
const folderPath = './'; // Contoh: 'C:/Users/ACER/Music/java-tugas'

// Baca semua file di folder
fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error('Error membaca folder:', err);
    return;
  }

  files.forEach((file) => {
    // Hanya proses file .java
    if (file.endsWith('.java')) {
      const oldName = file;
      const newName = oldName.replace(/-/g, '_'); // Ganti semua '-' dengan '_'

      // Skip jika nama file tidak berubah
      if (oldName === newName) {
        console.log(`Skip: ${oldName} (tidak perlu diubah)`);
        return;
      }

      // Rename file
      fs.rename(
        path.join(folderPath, oldName),
        path.join(folderPath, newName),
        (err) => {
          if (err) {
            console.error(`Gagal rename ${oldName} -> ${newName}:`, err);
          } else {
            console.log(`Sukses: ${oldName} -> ${newName}`);
          }
        }
      );
    }
  });
});