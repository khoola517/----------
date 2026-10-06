const fs = require('fs');

const screens = [
  {
    filename: 'index.html',
    title: 'نظام نسيج لإدارة الخياطة الراقية - Naseej Atelier System',
    url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1ZDAzMTUxZTlkNzEwMjNiZjg1ZmE5MTE2MmUyEgsSBxCVzeSikQ0YAZIBIwoKcHJvamVjdF9pZBIVQhM5ODQxMjQ0MTYxMDYyNDUyNDEy&filename=&opi=89354086'
  },
  {
    filename: 'measurements.html',
    title: 'خزينة المقاسات الإلكترونية - مشغل نسيج',
    url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1ZDAzMjI3NGZmYTIwMjNiZjg1ZmE5MTE2MmUyEgsSBxCVzeSikQ0YAZIBIwoKcHJvamVjdF9pZBIVQhM5ODQxMjQ0MTYxMDYyNDUyNDEy&filename=&opi=89354086'
  },
  {
    filename: 'inventory.html',
    title: 'مخزون الأقمشة والخيوط - مشغل نسيج',
    url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1ZDAzMjJjMmMxZDkwNGU3NDEzMTNhMDE4NDg2EgsSBxCVzeSikQ0YAZIBIwoKcHJvamVjdF9pZBIVQhM5ODQxMjQ0MTYxMDYyNDUyNDEy&filename=&opi=89354086'
  },
  {
    filename: 'appointments.html',
    title: 'كادر الخياطات والمواعيد والبروفات - مشغل نسيج',
    url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1ZDAzMjM4ZDZlMzYwNGU3NDEzMTNhMDE4NDg2EgsSBxCVzeSikQ0YAZIBIwoKcHJvamVjdF9pZBIVQhM5ODQxMjQ0MTYxMDYyNDUyNDEy&filename=&opi=89354086'
  },
  {
    filename: 'client-portal.html',
    title: 'بوابة تتبع العميلات الفاخرة - مشغل نسيج',
    url: 'https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sXzAwMDY1ZDAzMjI2M2I2MTgwNDRmNzAxZDdhMWY4YWI1EgsSBxCVzeSikQ0YAZIBIwoKcHJvamVjdF9pZBIVQhM5ODQxMjQ0MTYxMDYyNDUyNDEy&filename=&opi=89354086'
  }
];

async function downloadAll() {
  for (const s of screens) {
    console.log(`Downloading ${s.filename}...`);
    try {
      const res = await fetch(s.url);
      if (!res.ok) {
        throw new Error(`Failed with status ${res.status}`);
      }
      const html = await res.text();
      fs.writeFileSync(s.filename, html, 'utf-8');
      console.log(`Saved ${s.filename} (${html.length} chars)`);
    } catch (err) {
      console.error(`Error downloading ${s.filename}:`, err);
    }
  }
  console.log('All screens downloaded successfully!');
}

downloadAll();
