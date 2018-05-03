function handlePage() {
  this.setState(prevState => ({ isSplash: true }))
  const pathname = this.pathname
  const pathRE = new RegExp(pathname, 'i')
  const arr = [
    '/board-and-officers',
    '/404',
    '/financial-highlights',
    '/global-operations',
    '/letter-to-shareholders',
    '/sustainability',
    '/our-company',
  ]

  arr.forEach(path => {
    if (pathRE.test(path)) {
      //console.log('path', pathname, path)
      this.setState(prevState => ({ isSplash: false }))
    }
  })
}

export default handlePage
