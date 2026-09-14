import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { books } from '../output/markdown/books.mjs';
import { marked } from 'marked';

test('all six books expose complete page sequences and reading start pages', async () => {
  assert.equal(books.length, 6);
  assert.equal(new Set(books.map(book => book.id)).size, 6);
  for (const book of books) {
    assert.match(book.id, /^0[1-6]$/);
    assert(book.title && Number.isInteger(book.pages) && book.pages > 0);
    assert.equal(book.status, 'ready');
    assert(book.startPage >= 1 && book.startPage <= book.pages);
    const source = await readFile(new URL(`../output/markdown/${book.source}`, import.meta.url), 'utf8');
    const pages = [...source.matchAll(/<!-- PDF page: (\d{3}) -->/g)].map(match => Number(match[1]));
    assert.deepEqual(pages, Array.from({ length: book.pages }, (_, i) => i + 1));
    assert.equal(marked.lexer(source).filter(token => token.type === 'heading' && token.depth === 1).length, 1);
    const start = source.split(`<!-- PDF page: ${String(book.startPage).padStart(3, '0')} -->`)[1].split('<!-- PDF page:')[0];
    assert.match(start, /^## /m, 'reading starts at a chapter');
  }
});
