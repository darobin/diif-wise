

export default async function (nemik) {
  nemik
    .warn(`Processing…`)
    .gdoc('gdoc-rb', '1RNejJAwu0NzAGeVqR2wapLBmjd7sQWCCrkwzu8uoLxA', { save: 'diif-wise.json' })
    .gdoc2html()
    .bibliography()
    .theme('supramundane')
    .wordCount(40_000)
    .saveHTML({ to: 'diif-wise.html', pretty: true })
  ;
}
