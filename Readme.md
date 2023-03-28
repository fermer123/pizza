# Задание

## Требования:

Необходимо разработать одностраничное приложение для возможности просмотра и редактирования данных сотрудников компании. Внешний вид приложения зависит от вас. Верстка должна быть адаптивной и корректно отображаться на разных устройствах. Стартовый набор данных для приложения находится в файле employees.json.

## Логика работы:

1. При открытии приложения мы должны увидеть список сотрудников и форму для их фильтрации. У каждого из сотрудников в списке должны отображаться его имя, должность и номер телефона. Должна существовать возможность сортировки списка сотрудников по имени и дате рождения. Фильтровать сотрудников нужно по их должности и их статусу. Должность - выпадающий список, содержащий (Повар, Официант, Водитель). Статус - чекбокс с лейблом "в архиве".
2. При нажатии в списке на одного из сотрудников должна появиться страница с формой редактирования данных сотрудника. Форма редактирования должна иметь поля: имя сотрудника - текстовое поле, телефон - текстовое поле с маской, дата рождения - текстовое поле с маской, должность - выпадающий список, содержащий (Повар, Официант, Водитель), статус - чекбокс с лейблом "в архиве".
3. Приложение должно предусматривать добавление новых сотрудников в систему.
4. Приложение так же должно поддерживать роутинг.

# Использование

## Установите зависимости

```
npm install
# or
yarn
```

## Для сборки скрипта и его запуска введите

```
npm run build
# or
yarn build
```

# Для разработки или оценки результата [живой странице](http://localhost:3000/) введите

```
npm start
# or
yarn start
```
