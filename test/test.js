import path from 'path'
import test from 'ava'
import sao from 'sao'

const template = path.join(__dirname, '..')

test('main', async t => {
  const { fileList } = await sao.mockPrompt(template)
  t.snapshot(fileList)
})
