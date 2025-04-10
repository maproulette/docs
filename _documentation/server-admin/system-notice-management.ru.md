---
title: System-Notice Management
---

MapRoulette поддерживает отображение системных уведомлений, например, уведомлений о предстоящем техобслуживании, через простой внешний файл JSON, который можно разместить где угодно (включая репозиторий GitHub). Вам просто нужно указать URL-адрес файла в переменной конфигурации `REACT_APP_SYSTEM_NOTICES_URL` .env.

Файл JSON должен представлять собой один объект с массивом `notices` объектов верхнего уровня. Любые другие поля верхнего уровня игнорируются.

Каждый объект уведомления должен содержать поле `message`, поле `expirationTimestamp` в формате [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) в формате UTC и поле `uuid`, которое создаёт уникальный идентификатор для уведомления.

Пример JSON:

```json
{
  "notices": [
    {
      "message": "A first notice. Maintenance is planned.",
      "expirationTimestamp": "2019-08-01T17:00:00Z",
      "uuid": "b98da355-a5e9-44b4-8a20-a5034d704de5"
    },
    {
      "message": "A second notice. Important things are happening",
      "expirationTimestamp": "2019-08-04T15:00:00Z",
      "uuid": "94aef98e-bf9f-46a6-a860-85e62498ae3d"
    }
  ]
}
```

Пользователям отображаются только предстоящие уведомления в зависимости от `expirationTimestamp` каждого уведомления. Вошедшим в систему пользователям предоставляется возможность подтвердить/отклонить каждое уведомление, и после подтверждения уведомление больше не будет отображаться.

Сообщение может содержать маркдаун.

Если вы создаете уведомление вручную, вы можете воспользоваться онлайн-генератором UUID, например, https://www.guidgenerator.com/online-guid-generator.aspx.

