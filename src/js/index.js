const log = console.log.bind(console)

const scroll = function() {
        let section = document.querySelector('.section-about')
        let text = document.querySelector('.section-about .title__list')
        window.addEventListener('scroll', (event) => {
            // console.log('section.offsetHeight', section.offsetHeight, window.scrollY, section.offsetTop)
            if(window.scrollY + 200 >= section.offsetTop && window.scrollY <= section.offsetTop ) {
                text.classList.add('title--show')

            } else {
                text.classList.remove('title--show')
            }

        })

    }

    const scrolltoShowroadMap = function({offset=350}) {
            let boxes = document.querySelectorAll('.roadmap__timeline')
            boxes.forEach((box) => {
                window.addEventListener('scroll', (event) => {
                    if(window.scrollY + offset >= box.offsetTop) {
                        box.classList.add('map--active')
                    }
                })
            })
        }


class TextEffect {
    constructor({
                    className,
                    words,
                    interval,
                    delay,
                    positive = true,
                }) {
        this.className = className
        this.words = words
        this.interval = interval || 100
        this.delay = delay || 500
        this.positive = positive
        this.init()
    }

    init() {
        if(!Array.isArray(this.words)) {
            alert('pls use array & more then one item')
            return
        }
        this.box = document.querySelector(`.${this.className}`)
        this.box.innerHTML = ''
        this.start()
    }

    start() {
        let count = 0
        let text = this.words[count]
        let positive = this.positive
        let i = this.positive ? 0 : text.length
        this.animation = setInterval(() => {
            // 正向
            if(positive) {
                if(i < text.length) {
                    text = this.words[count]
                    let word = text[i]
                    this.box.insertAdjacentHTML('beforeend', word)
                    i++
                }
                if(i === text.length) {
                    positive = !positive
                }
            } else {
                if(i >= 0 && i <= text.length) {
                    let word = text.slice(0, i)
                    this.box.innerText = ''
                    this.box.insertAdjacentHTML('beforeend', word)
                    i--
                }
                if(i < 0) {
                    // reset i
                    i = 0
                    // reset count
                    if(count < this.words.length - 1) {
                        count += 1
                    } else {
                        count = 0
                    }
                    positive = true
                    // setTimeout(() => {
                    //     positive = true
                    //     this.animation
                    //
                    // }, this.delay)
                }
            }
        }, this.interval)

    }
}


const __main = () => {
    let config = {
        className: 'show',
        words: ['passion', 'inspiration', 'creative'],
        interval: 150,
        delay: 800,
        positive: true,
    }
    new TextEffect(config)
    // title back and front
    scroll()
    // road map scroll to show
    scrolltoShowroadMap({
        offset: 400,
    })
}


__main()
