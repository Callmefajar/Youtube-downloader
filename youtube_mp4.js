const fs = require('fs');
const ytdl = require('ytdl-core');

ytdl('MASUKKAN URL NYA DISINI') 
  .pipe(fs.createWriteStream('UBAH NAMA FILENYA DISINI.mp4')) 
  .on('finish', () => {
    console.log('Video telah berhasil diunduh.');
  })
  .on('error', (err) => {
    console.error('Terjadi kesalahan saat mengunduh video:', err);
  }); 