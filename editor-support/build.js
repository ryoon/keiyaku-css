import fs from 'fs'
import { join } from 'path'

const dir = __dirname
const original = fs.readFileSync('teikan.css', 'utf8')
const themes = {
  caret: original.replace(/\.teikan/g, '.content'),
  marked2: original.replace(/\.teikan/g, '#wrapper')
}

for (name in themes) {
  const tmpl = fs.readFileSync(join(dir, 'tmpl', `${ name }.css`), 'utf8')
  const css = tmpl.replace('{{ content }}', themes[name])
  fs.writeFileSync(join(dir, `teikan-${ name }.css`), css)
}
