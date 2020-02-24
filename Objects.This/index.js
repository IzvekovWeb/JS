'use strict'

let userName = "Pete";           // Глобальная переменная

let user = {                     // Объект user
  userName: 'Alex',              // Свойство: userName
  show: function() {             // Метод объекта user - show
    console.log(this.userName);  // this в данном контексте является объектом user
  },
  go() {                         // Еще методы можно объявлять так
    console.log(this.userName);
  },
  start: () =>  {                 // или так
    let userName = 'Fedor'          
    console.log(this.userName);   // this в данном контексте НЕ является объектом user, поэтому вывод Undefind 
    console.log(userName);        // В данном случае выведется Fedor, так как эта переменная принадлежит данной функции
  },
  end() {
    let run = () => {             // Вызываме стрелочную ф-ю внитри обычной. Стрелочная не имеет this. 
      console.log(this.userName); // В данном контексте this у функции run будет такая же, как и у метода end = user 
    }
    run()
  }
} 
user.show()                      // вызов функии show
user.go()                        // вызов функии go
user.start()                     // вызов функии start
user.end()                       // вызов функии end

// Вывод : 
// Alex
// Alex
// undefined
// Fedor
// Alex