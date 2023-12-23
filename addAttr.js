const gap = document.querySelectorAll('[data-gap]')
for (let i = 0; i < gap.length; i++) {
    const attr = gap[i].getAttribute('data-gap')
    gap[i].style.gap = `${attr}px`
}
