import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { books } from '../output/markdown/books.mjs';

test('library has six unique books and only complete sources are readable', async () => {
  assert.equal(books.length, 6);
  assert.equal(new Set(books.map(book => book.id)).size, 6);
  for (const book of books) {
    assert.match(book.id, /^0[1-6]$/);
    assert(book.title && Number.isInteger(book.pages) && book.pages > 0);
    assert(['ready', 'preparing'].includes(book.status));
    if (book.status !== 'ready') continue;
    assert(book.startPage >= 1 && book.startPage <= book.pages);
    const source = await readFile(new URL(`../output/markdown/${book.source}`, import.meta.url), 'utf8');
    const pages = [...source.matchAll(/<!-- PDF page: (\d{3}) -->/g)].map(match => Number(match[1]));
    assert.deepEqual(pages, Array.from({ length: book.pages }, (_, i) => i + 1));
  }
});
