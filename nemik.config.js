

export default async function (nemik) {
  nemik
    .warn(`Processing…`)
    .gdoc('gdoc-rb', '1RNejJAwu0NzAGeVqR2wapLBmjd7sQWCCrkwzu8uoLxA', { save: 'diif-wise.json' })
    .gdoc2html()
    .bibliography()
    .theme('supramundane', {
      cover: 'ernst-haeckel.png',
      date: true,
      author: 'Robin Berjon',
    })
    .wordCount(40_000)
    .pdf('diif-wise.pdf')
    .saveHTML({ to: 'diif-wise.html', pretty: true })
  ;
}
