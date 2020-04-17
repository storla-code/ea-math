import {Component} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';

import {FlatTreeControl, NestedTreeControl} from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener, MatTreeNestedDataSource } from '@angular/material/tree';

interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Introductory Algebra',
    children: [
      {
        name: 'Introductory information'
      },
      {name: 'Textbook Corrections'},
      {
        name: 'Ch. 1 Expressions',
        children: [
          {
            name: '1.1 The Order of Operations',
          }
        ]
      },
      {name: 'Ch. 2 Equations/Inequalities'},
      {name: 'Ch. 3 Functions'},
      {name: 'Ch. 4 Exponentiation'},
      {name: 'Ch. 5 Polynomials'},
      {name: 'Ch. 6 Roots'},
      {name: 'Ch. 7 Quadratic Functions'},
      {name: 'Ch. 8 Intermediate Algebra Prep'}
    ]
  }
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  sideNavOpen: boolean;

  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
    this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
    this.sideNavOpen = true;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;


  changeNav() {
    this.sideNavOpen = !this.sideNavOpen
  }
}
