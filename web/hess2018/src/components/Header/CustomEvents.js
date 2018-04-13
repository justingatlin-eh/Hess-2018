export const toggleMenu = e => {
  const el = document.querySelector('.sub-header')
  const current = el.getAttribute('data-hide')
  const toggled = String(/true/i.test(current) ? false : true)
  el.setAttribute('data-hide', toggled)
}
