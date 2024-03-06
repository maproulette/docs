---
layout: base
title: System-Notice Management
tags: documentation
eleventyNavigation:
  key: System-Notice Management
  parent: Server Administration
  order: 1
---

{% translate "SystemNoticeManagement.content1", page.url | getUrlLang %}

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

{% translate "SystemNoticeManagement.content2", page.url | getUrlLang %}
