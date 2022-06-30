const input = document.querySelector('#input');
const submit = document.querySelector('#submit');
const root = document.querySelector('#root');

const app = {
    cars:[

    ],
    add(car) {
        this.cars.push(car);
    },
    delete(index) {
        this.cars.splice(index, 1);
    },
    render: function() {
    const html = this.cars.map((car,index) => 
       `<li>${car}
       <button class="delete" data-index="${index}">Delete</button>
       </li> `)
        root.innerHTML = html.join('');
    },

    handelDelete: function(e) {
        const deleteBtn = e.target.closest('.delete');
        if (deleteBtn){
            index = deleteBtn.dataset.index;
            console.log(index);
            this.delete(index);
            this.render();
        }   
     },

    init() {
        submit.addEventListener('click', () => {
            const car = input.value;
            if(!car) {
                console.log('lỗi')
            }
            else {
            this.add(car)
            this.render();
            input.value = '';
            input.focus()
            }
        })

        root.onclick = this.handelDelete.bind(this);
        this.render();
    }

}
app.init();
