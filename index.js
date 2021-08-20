const windows = document.querySelectorAll('.window')

windows.forEach((window) => {
    window.addEventListener('mouseover', () => {
        window.classList.add('active')
    })
})
