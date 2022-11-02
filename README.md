# Тестовое задание

[Подробное описание](https://fundraiseup.notion.site/Fullstack-test-d63f18de664645cd8529eccc735c22fa)

Напишем сервис трекинга активности посетителя сайта в браузере. 
Что-то отдаленно напоминающее Google Analytics. 
Посетитель ходит по сайту и тыкает по кнопкам, а на сервере остаются логи его активности.

## Запуск
1. Билдим трекер `tsc --out dist/Tracker.js frontend/Tracker/Tracker.ts`
2. Настраиваем `.env`, 
   1. если для БД используется докер, то достаточно переименовать `.env.example` в `.env`
3. Запускаем БД `docker compose up`
4. Запускаем бэкенд `yarn start:dev`
5. Запускаем фронтенд `yarn serve frontend --single --listen 8000`
