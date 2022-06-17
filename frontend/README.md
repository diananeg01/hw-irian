# Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.1.

# Specifications:
##Aplicatie management cabinet veterinar

###O _programare_ este formata din:
* Numele Animalului pt care se face programarea
* Data + ora programarii
* Numele doctorului
* Lista de servicii cerute
* Diagnostic
* Status (creata, confirmata, incheiata)

###In aplicatie se va putea:
* _Vizualiza lista programarilor_:
  * Lista paginata cu 5 intrari/pagina
  * Nume animal, Nume doctor, Data + ora, status, diagnostic, total cost
  * Sortata in ordine invers cronologica
  * Cu filtrare dupa numele doctorului
* _Adauga o programare noua_:
  * Se completeaza numele animalului, numele doctorului, data + ora programarii
  * Se selecteaza servicii (mai multe) dintr-o lista de servicii existente sau se pot adauga servicii noi (nume + pret)
    * Pretul unui serviciu trebuie sa fie acelasi pt orice programare
  * Statusul programarii va fi “creata”
* _Edita o programare_:
  * Modifica oricare camp
  * Adauga diagnostic
  * !! O programare poate fi trecuta in statusul “incheiata” doar daca a fost completat campul de diagnostic
