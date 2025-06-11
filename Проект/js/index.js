document.addEventListener('mousemove', function(e) {
    const el = document.querySelector('#max')
    const rect = el.getBoundingClientRect()

    // Центр элемента
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    // Разница между мышью и центром элемента
    const dx = e.clientX - centerX
    const dy = e.clientY - centerY

    // Пропорциональные углы (чем ближе курсор, тем меньше вращение)
    const angleX = 25 * dx / window.innerWidth
    const angleY = -25 * dy / window.innerHeight

    el.style.transform = `rotateX(${angleY}deg) rotateY(${angleX}deg)`
})
