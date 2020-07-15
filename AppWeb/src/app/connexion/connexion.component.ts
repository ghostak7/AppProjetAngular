import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service'
import { ConnexionService } from '../services/connexion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

    // Déclaration
    crud: CrudService
    connexion: ConnexionService
    compte: number
    mail: string = ''
    mdp: string = ''

  constructor(private crudService: CrudService, private connexionService: ConnexionService,
    private router: Router) { }

  ngOnInit(): void {
    this.connexion = this.connexionService
    this.crud = this.crudService
  }

    // Test la possibilité de connexion au clique de connexion
    onConnetion() {
      let comptes = this.crud.select('Compte', {mail: this.mail, mdp: this.mdp})
      if(comptes.length > 0) {
        this.compte = comptes[0].id
        this.connexion.Connection(this.compte)
        this.router.navigate(['/dashboard'])
      }

    }

}
