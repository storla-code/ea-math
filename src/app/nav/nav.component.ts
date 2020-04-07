import {Component} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {TestComponent} from '../test/test.component';
import {FlatTreeControl, NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener, MatTreeNestedDataSource} from '@angular/material';

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
            name: '1.1 Intro to the Order of Operations',
            children: [
              {name: 'Beginning with the basic four'},
              {name: 'Simplifying  explicit grouping'},
              {name: 'Simplifying mplicit grouping'},
              {name: ' vocabulary for the basic four'},
              {name: 'The Distributive Property - Part 1'},
              {name: 'The Distributive Property - Part 2'}
            ]
          },
          {name: '1.2 Multiplying/Dividing Integers'},
          {name: '1.3 Adding Integers'},
          {name: '1.4 Subtracting Integers'},
          {name: '1.5 Reducing Fractions'},
          {name: '1.6 Multiplying/Dividing Fractions'},
          {name: '1.7 Adding/Subtracting Fractions'},
          {name: '1.8 Applying the Order of Operations'},
          {name: '1.9  Linear Equations pt. 1'},
          {name: '1.10 Linear Equations pt. 2'}
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
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}
