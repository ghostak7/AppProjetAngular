import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';
import { ConnexionService } from '../services/connexion.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title: string
  type: string
  entities: any[]
  crud: CrudService
  compte: number
  typeCompte: string

  
  constructor( private crudService: CrudService, private connexionService: ConnexionService) {}

  ngOnInit(): void {
    this.compte = this.connexionService.getAccount()
    this.crud = this.crudService
    this.typeCompte = this.crud.getTypeAccount(this.compte)

    if(this.typeCompte === 'etudiant') {
      this.entities = this.crud.select('Etudiant', {compte: this.compte})
      this.entities = this.crud.select('Note', {etudiant: this.entities[0].id})
      this.entities.reverse()
    }
  }

  async onClick(title: string, type: string, param: any) {
    this.title = title
    this.type = type
    this.entities = await this.crud.select(type, param)
  }

}
