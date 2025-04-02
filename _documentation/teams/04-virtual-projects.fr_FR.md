---
title: Projets Virtuels
slug: projets-virtuels
---

Les Projets Virtuels sont un outil flexible permettant d’organiser différents challenge dans un groupe sans avoir besoin de séparer les challenges de leur projet. Bien qu'un challenge ne puisse dépendre que d'un seul projet standard, il peut être membre de plusieurs projets virtuels. N'importe qui peut créer des projets virtuels et y ajouter n'importe quel challenge publique ou dont il a un accès en lecture (depuis les permissions du projet standard du challenge). Les administrateurs d'un projet virtuel peuvent ajouter d'autres membres à leur projet virtuel, et leur donner des accès de Lecture,  Écriture ou d'Administration.

> Note: bien que vous puissiez ajouter des challenge existant aux projets virtuels, il n'est pas possible de créer de nouveaux challenges dans un projet virtuel. Les challenges ne peuvent être créer uniquement dans des projets standard (mais peuvent ensuite être ajoutés à des projets virtuels)

Vous pouvez créer un Projet Virtuel comme vous le feriez pour un Projet Standard. Il suffit d'indiquer que le projet que vous créez est un projet virtuel :

![create project screenshot](/media/70949151-ff40cd00-2054-11ea-981f-fd8fcb52c95d.png)

Une fois que votre Projet Virtuel est créé, vous verrez une liste (vide) de challenge dans l'écran de gestion du projet :

![project manage screenshot](/media/70949413-9efe5b00-2055-11ea-866b-c8efaff441e5.png)

Utiliser le bouton "Gérer la liste des Challenge" dans le widget de la liste des challenges pour ajouter / supprimer des Challenges de ce Projet Virtuel.

![challenge list manager screenshot](/media/70949537-f00e4f00-2055-11ea-82ac-f5346e562a85.png)

## Rôles dans les projets virtuels

Il est important de préciser que les rôles Lecture / Écriture / Administrateur dans les projets virtuels ne régissent que le projet virtuel lui-même et **ne donnent pas** de permissions sur les challenges du projet virtuel. Par exemple, un utilisateur qui n'a pas d'accès en écriture à un challenge n'obtiendra pas d'accès en écriture à ce challenge s'il est ajouté à un projet virtuel dans lequel l'utilisateur a un accès en écriture. Les permissions des challenges sont uniquement définies par le projet standard parent du défi.

Cependant, tout membre d'un projet virtuel aura un accès limité en lecture aux challenges de ce projet virtuel, même si certains de ces challenges ne lui sont normalement pas visibles. Par exemple, ils verront les noms de ces challenges, pourront visiter la page de détails du challenge (pas celles des permissions), et pourront voir certaines données agrégées des challenges telles que les commentaires et les statistiques. Cependant, un challenge ne peut être _ajouté_ à un projet virtuel que par quelqu'un qui a la visibilité du challenge, soit parce qu'il est public, soit parce qu'il lui a été explicitement accordé un accès en lecture ou un accès supérieur. **Sachez qu'en ajoutant un challenge à un projet virtuel, vous accordez à tous les membres de ce projet virtuel un accès limité en lecture au challenge.

Plus précisément, les rôles des projets virtuels accordent les autorisations suivantes :

**Lecture** : l'utilisateur peut voir le projet virtuel ; il peut voir les challenges dans le projet virtuel, visiter les descriptions pour ces challenges afin de commencer à travailler dessus, et voir diverses données agrégées des challenges telles que les commentaires et les statistiques ; il peut voir les noms d'utilisateur et les rôles des autres membres du projet virtuel.

**Écriture** : toutes les autorisations de lecture ; l'utilisateur peut ajouter/supprimer des challenges au projet virtuel ; il peut modifier le nom et la description du projet virtuel lui-même.

**Administrateur** : toutes les permissions d'écriture ; l'utilisateur peut ajouter/supprimer des utilisateurs au projet virtuel et modifier leurs permissions.

