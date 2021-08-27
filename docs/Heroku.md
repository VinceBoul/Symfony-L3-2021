## Déploiement du projet en ligne

Heroku est une plate-forme en ligne qui permet aux développeurs de créer, d'exécuter et de déployer des applications entièrement dans le cloud.

### Versioning du projet

Pour déployer votre site sur Heroku, vous devez d'abord créer votre projet sur GitHub.

Pour cela, suivre les étapes suivantes :

### Création du repo  
* Créer un compte Github
* Créer un repo pour ce projet

#### Configuration de la clé SSH

[Voir documentation](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
 
![A test image](imgs/ssh_key.png)

Créer un fichier `config` dans le dossier `C:\Users\<votre utilisateur>\.ssh` et copiez les lignes suivantes :
```
Host github
    Hostname github.com
    IdentityFile ~/.ssh/<nom de la clef ssh privée>
```

Exemple : 

```
Host github
    Hostname github.com
    IdentityFile ~/.ssh/id_ed25519
``` 

* Dans le répertoire du projet que vous avez cloné (`C:\wamp64\www\symfony-l3-2021`) :
    * Supprimer le dossier `.git`
* Suivre ensuite les lignes de commandes que vous retrouverez dans le repo créé : 

```
git init
git add *
git commit -m "first commit"
git branch -M main
git remote add origin <url SSH du repo>
# Exemple : git remote add origin git@github:VinceBoul/Symfony-L3-2021.git
git push -u origin main
```    
* Ajouter les autres collaborateurs du groupe au projet :
 
![A test image](imgs/manage_access.png)

### Déploiement des TP notés

Pour faciliter le test et la présentation de chaque projet, tous les groupes de TP doivent suivre la procédure suivante pour déployer leur projet en ligne.

> Si vous déployez projet sur votre propre serveur, vous n'aurez pas besoin de le faire sur Heroku 

* Suivre le tutoriel : 
  * Introduction
      * Créer un compte Heroku (1 par groupe)
      * Avoir installé PHP et Composer localement
    * Set up
      * Installer l'executeur de commande Heroku (Windows / MacOS / Ubuntu)
    * Prepare the app : **Le projet a déjà été cloné - Se placer juste dans le dossier via le terminal**
    * Deploy the app
    * View logs
    * Define a Procfile : **Passer cette étape, le fichier `Procfile` existe déjà**
    * Scale the app : **Passer cette étape**
    * Declare app dependencies : **Passer cette étape**
    Push local changes
    Provision add-ons
    Start an interactive shell
    Define config vars
    Provision a database
    Next steps
    * https://devcenter.heroku.com/articles/getting-started-with-php

    * https://devcenter.heroku.com/articles/getting-started-with-php#set-up
        
    


# Installation

Pré requis : 
* Wamp / XAMP / Lamp
* PHP 7.3 ou plus
* PostgreSQL
* Node JS 
* Composer 
* Git 
* Commande Symfony via le site officiel Symfony https://symfony.com/download


## PHP en ligne de commande

* Windows
    * Menu Démarrer 
    * Rechercher "variables"
    * Cliquer sur "Modifier les variables d'environnement"
    * Cliquer sur "Variables d'environnement"
    * Dans le cadre du bas, rechercher "Path" et le modifier
    * Copier le chemin où PHP est installé (Traditionnellement `C:\wamp64\bin\php\php7.3.12`)
    * Coller le chemin dans les variables "Path"
    * Valider
    * Ouvrir une invit de commande et lancer `php -v`

## Récupérer le projet

* Cloner ou télécharger le projet
* Copier coller le projet dans le répertoire `www` de Wamp ( dossier `htdocs`pour Xamp)
* En ligne de commande se placer dans le dossier du projet, exemple : `cd C:\wamp64\www\Symfony-L3-master`

##Installation Packages PHP

* Dans le répertoire du projet, lancer la commande `composer i`
> Si vous n'avez que le `composer.phar`, lancer `php composer.phar i`

## Démarrage projet Symfony

### Création de la base de données

Modifier le fichier .`env.local` avec les informations de votre BDD, exemple : 

Avec mot de passe : `DATABASE_URL="mysql://root:root@localhost:3306/l3_symfony"`

Sans mot de passe : `DATABASE_URL="mysql://root@localhost:3306/l3_symfony"`

Si le serveur MySQL n'est pas trouvé, tenter avec :
`DATABASE_URL="mysql://root@127.0.0.1:3306/l3_symfony"`

Utilisateurs MacOS : `DATABASE_URL="mysql://root@127.0.0.1:8889/l3_symfony"`

Créer la base de données avec la commande ` php bin/console doctrine:database:create
`

# Mettre à jour la base de  données

* Créer les fichiers de migration : ` php bin/console make:migration`
* Lancer la mise à jour de la BDD : ` php bin/console doctrine:migrations:migrate` 

## Intégrer la couche graphique
> Pré requis : Node JS

* Installer les dépendances JavaScript et CSS : `npm i`
* Compiler le CSS et JS : `npm run dev`

# Lancer le serveur Symfony 
> Pré requis : Installer la commande Symfony via le site officiel Symfony (bouton Download)
>https://symfony.com/download

Lancer la commande `symfony server:start`
