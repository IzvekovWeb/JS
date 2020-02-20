# JS. Файлы

## Чтение и запись в файлы
    const fs = require("fs");
'fs' - Библиотека Node.js для работы с файлами

Имеет слудующие функции:

- Чтение файла синхронно

        fs.readFileSync('hello.txt', 'utf8');

- Чтение файла асинхронно
    
        fs.readFile('hello.txt', 'utf8', (error,data) => {})

- Запись в файл синхронно

        fs.writeFileSync('hello.txt', text);

- Запись в файл асинхронно

        fs.writeFile('hello.txt', texеt, calback);


