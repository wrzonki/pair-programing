/**
 * kolejka do zadań powolnych (bez priorytetu)
 */

//kolejka
let Q = [];

//rekurencja pobierająca i wykonująca 1 element z kolejki Q
const execQ = () => {
    try {
        if (Q.length === 0) {
            console.log('\x1b[37m%s\x1b[0m','bezrobocie')
        } else {
            Q[0]();
        }
    } catch (error) {
        console.log('\x1b[31m%s\x1b[0m','funkcja sypiąca błędem => obsługa');
    } finally {
        Q.shift();
        setTimeout(() => {
            execQ();
        }, 500)
    }
}

for (var i = 0; i < 6; i++) {
    Q.push(() => console.log('\x1b[32m%s\x1b[0m','Robię taska'));
}

(async () => {
     execQ()
    setTimeout(()=>{
        console.log('\x1b[33m%s\x1b[0m','Wpadł jakiś task')
        Q.push(() => console.log('\x1b[32m%s\x1b[0m','Robię taska'));
    },8000)

    setTimeout(()=>{
        console.log('\x1b[33m%s\x1b[0m','Wpadł jakiś task')
        Q.push(()=> {
            throw new Error('aaa')
        });
    },11000)
})();

