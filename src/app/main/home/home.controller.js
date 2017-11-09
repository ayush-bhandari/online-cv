export default function HomeController(api,$scope)
    {
        var vm = this;

        // Data
        $scope.$parent.seo = { 
		    pageTitle : 'Home', 
		    pageDescripton: 'Welcome to home page of Ayush Bhandari portfolio website based on angularjs.' 
		};
        // vm.title;
        // vm.smiley;
        // vm.image_url;
        vm.details;
        // vm.mixed;

        // Methods
        vm.init = init;

        init();
        
        function init(){
        	
   //      	// TextScramble
			
			// class TextScramble {
			//   constructor(el) {
			//     this.el = el
			//     this.chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_+=~`;,.?/<>{}[]'
			//     this.update = this.update.bind(this)
			//   }
			//   setText(newText) {
			//     const oldText = this.el.innerText
			//     const length = Math.max(oldText.length, newText.length)
			//     const promise = new Promise((resolve) => this.resolve = resolve)
			//     this.queue = []
			//     for (let i = 0; i < length; i++) {
			//       const from = oldText[i] || ''
			//       const to = newText[i] || ''
			//       const start = Math.floor(Math.random() * 100)
			//       const end = start + Math.floor(Math.random() * 100)
			//       this.queue.push({ from, to, start, end })
			//     }
			//     cancelAnimationFrame(this.frameRequest)
			//     this.frame = 0
			//     this.update()
			//     return promise
			//   }
			//   update() {
			//     let output = ''
			//     let complete = 0
			//     for (let i = 0, n = this.queue.length; i < n; i++) {
			//       let { from, to, start, end, char } = this.queue[i]
			//       if (this.frame >= end) {
			//         complete++
			//         output += to
			//       } else if (this.frame >= start) {
			//         if (!char || Math.random() < 0.28) {
			//           char = this.randomChar()
			//           this.queue[i].char = char
			//         }
			//         output += `<span class="dud">${char}</span>`
			//       } else {
			//         output += from
			//       }
			//     }
			//     this.el.innerHTML = output
			//     if (complete === this.queue.length) {
			//       this.resolve()
			//     } else {
			//       this.frameRequest = requestAnimationFrame(this.update)
			//       this.frame++
			//     }
			//   }
			//   randomChar() {
			//     return this.chars[Math.floor(Math.random() * this.chars.length)]
			//   }
			// }

   //      	const el = document.querySelector('.scramble')
			// const fx = new TextScramble(el)
					
        	api.home.query({}, (response) => {
                    // vm.title = response.title[Math.floor(Math.random()*response.title.length)];
                    // vm.smiley = response.smiley[Math.floor(Math.random()*response.smiley.length)];
                    // vm.image_url = response.image_url;
                    vm.details = response.details;
					// let full_title = "Hey, you're " + vm.title;
					// fx.setText(full_title)

                },(err) => {   

                }
            );

        }

    }