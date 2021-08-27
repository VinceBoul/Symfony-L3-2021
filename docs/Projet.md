# Projet de TP

## Contexte 
Un artisan souhaite exposer son activité sur Internet. Il vous contacte pour cela afin que vous réalisiez son site.
Le but de ce site est de présenter l’activité de l’artisan, et de faciliter les relations entre lui et ses clients.

### Objectifs 
De base, le site présente l’activité et le métier de l’artisan. Il permet d’avoir ses coordonnées, et offre un plan in-
teractif (openStreet ou Google) pour localiser l’entreprise. 

### Présentation du site internet

Ce site propose aussi des services, à la fois pour l'artisan lui-même, et pour les internautes.

#### Fonctionnalités globales 
* Artisan 
  * Administration d'un page d'accueil
  * Administration d'articles (blog)
  * Publication d'offres d'emploi ou de stage
* Postulants 
  * Répondre à une offre d'emploi
* Clients
  * Déposer une demande de projet

#### Détail des fonctionnalités 

##### Artisan (Administrateur)

* présenter son activité et ses réalisations, **au moyen de textes et d’images** : sous la forme **d’articles**, un peu à l’image d’un blog.
  * L’article offrira les mécanismes nécessaires pour être partagé sur facebook, et les images pourront être partagées sur instagram.

* définir une **image d’accueil**, une **description** du chantier et une **galerie d’images** qui pourra être affichée sous la forme d’un diaporama. 
  * Chaque image de la galerie pourra être légendée. 

* de publier ses offres d’emploi **ou** de stage.

* Demandes clients
  * Visualiser les demandes des clients
    * La visualisation de fait en deux temps : 
      * l’interface affiche un résumé (un peu comme dans un webmail, on voit au départ un tableau avec toutes les demandes)
      * Lorsqu’on clique sur le résumé, on accède à tous les détails. 
      * Lors du premier affichage de cette vue détaillée, si le client a laissé un mail, une
        notification lui est envoyée, lui permettant de savoir que l’artisan a vu sa demande.
  * Marquer si le client a été recontacté ou pas
  * Archiver la demande. 
  

##### Clients (utilisateurs connectés)

* Déposer une demande de projet
  * Nom, adresse, description rapide de la demande, coordonnées pour être rappelé ou joint par mail. 
  * Lorsque la demande est validée, l’artisan reçoit une notification par mail qui reprend toutes ces informations. 
  * Le dépôt doit se faire uniquement après confirmation par le client afin d’éviter qu’un bot n’ailler saturer le service.

##### Postulants ( utilisateur anonymes/déconnectés) 

* Répondre à ces offres en déposant, via l’annonce en ligne, les informations habituelles (cv, lettre). 
* L’envoi des pièces est contrôlé, afin d’éviter les posts automatiques par un bot ou la publications de documents **autres que PDF**

#### Bonus 
* Exporter vers son mobile, les coordonnées des personnes ayant déposé une demande de
projet (le site émet un fichier au format vCard).
