import { Component, Inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Routes } from '@angular/router';

import { TutorialsListComponent } from "./components/tutorials-list/tutorials-list.component";
import { TutorialsDetailsComponent } from "./components/tutorials-details/tutorials-details.component";
import { AddTutorialComponent } from "./components/add-tutorial/add-tutorial.component";


export const routes: Routes = [

    { path: '', redirectTo: 'tutorials', pathMatch: 'full' },
  { path: 'tutorials', component: TutorialsListComponent },
  { path: 'tutorials/:id', component: TutorialsDetailsComponent },
  { path: 'add', component: AddTutorialComponent }
];
