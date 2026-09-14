"""Join the 213 page files in PDF page order without rewriting their contents."""
from pathlib import Path

root = Path(__file__).resolve().parent
paths = [root / 'pages' / f'page-{n:03}.md' for n in range(1, 214)]
missing = [path.name for path in paths if not path.is_file()]
if missing:
    raise SystemExit('Missing pages: ' + ', '.join(missing))
output = root / 'IT비즈니스와윤리.md'
output.write_text('\n\n'.join(path.read_text(encoding='utf-8-sig').strip() for path in paths) + '\n', encoding='utf-8')
print(output)
