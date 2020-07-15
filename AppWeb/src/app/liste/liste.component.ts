import { Component, OnInit, Input } from '@angular/core';
import { CrudService } from '../services/crud.service';
import { Router } from '@angular/router';
import { ConnexionService } from '../services/connexion.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent implements OnInit {

  @Input() title: string
  @Input() type: string
  @Input() entities: any[]

  crud: CrudService

  constructor(private crudService: CrudService, private route: Router, private connexionService: ConnexionService) {}

  ngOnInit(): void {
    this.crud = this.crudService
    this.entities = this.crud.affiche(this.type, this.entities)
    
    if(this.type === 'Compte') {
      this.connexionService.getAccount()
      this.entities.forEach((elt, i) => {
        if(elt.id === this.connexionService.getAccount()) this.entities.splice(i, 1)
      })
    }
  }

  onAjouter() {
    this.route.navigate(['/form', this.type, 0])
  }

  onModifier(id: number) {
    this.route.navigate(['/form', this.type, id])
  }

  onSupprimer(id: number) {
      this.crud.delete(this.type, id)
  }
}
