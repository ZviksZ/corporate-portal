Чтобы развернуть проект локально необходимо:
- выкачать проект
- установить все зависимости в консоли командой npm install (для этого на пк должен быть
установлен node js)
- запускаем проект командой npm start
- для переключения на мокапы - в файле «/src/services/api/api.ts» поменять DEV_MODE = false
на true(без переключения будут ошибки из-за запросов)

Для сборки проекта:
- запускаем в консоли команду npm run build - в папке build будут скомпилированные файлы
