import {Component} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';

import {FlatTreeControl, NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener, MatTreeNestedDataSource} from '@angular/material/tree';
import {Router} from '@angular/router';


const TREE_DATA: FoodNode[] = [
  {
    name: 'Introductory Algebra',
    children: [
      {name: 'Textbook Corrections', children: [{name: 'Textbook corrections', urlName: 'TextbookCorrections'}]},
      {
        name: 'Ch. 1 Expressions',
        children: [
          {name: 'The Order of Operations', urlName: 'TheOrderofOperations'},
          {name: 'Multiplying/Dividing Integers', urlName: 'MultiplyingandDividingIntegers'},
          {name: 'Adding Integers', urlName: 'AddingIntegers'},
          {name: 'Subtracting Integers', urlName: 'SubtractingIntegers'},
          {name: 'Reducing Fractions', urlName: 'Reducing Fractions'},
          {name: 'Multiplying/Dividing Fractions', urlName: 'MultiplyingandDividingFractions'},
          {name: 'Adding/Subtracting Fractions', urlName: 'AddingandSubtractingFractions'},
          {name: 'Applied Order of Operations', urlName: 'ApplyingtheOrderofOperations'},
          {name: 'Linear Equations Part 1', urlName: 'PreparingforLinearEquationsPart1'},
          {name: 'Linear Equations Part 2', urlName: 'PreparingforLinearEquationsPart2'},
        ]
      },
      {
        name: 'Ch.2 Equations/Inequalities',
        children: [
          {name: 'Linear Equations - 1', urlName: 'IntroductiontoLinearEquations'},
          {name: 'Linear Equations - 2', urlName: 'ContinuingwithLinearEquations'},
          {name: 'Intro to Word Problems', urlName: 'AnIntroductiontoWordProblems'},
          {name: 'Word Problems', urlName: 'ContinuingwithWordProblems'},
          {name: 'Linear Inequalities', urlName: 'SolutionSetforLinearInequalitys'},
          {name: 'Solving Linear Inequalities', urlName: 'SolvingLinearInequalities'}
        ],
      },
      {
        name: 'Ch.3 Functions',
        children: [
          {name: 'An Introduction to Functions', urlName: 'AnIntroductiontoFunctions'},
          {name: 'Intercepts', urlName: 'Intercepts'},
          {name: 'The Slope of a Linear Function', urlName: 'TheSlopeofaLinearFunction'},
          {name: 'Slope-Intercept Form', urlName: 'LinearFunctionsinSlope-InterceptForm'},
          {name: 'Other Linear Function Topics', urlName: 'OtherLinearFunctionTopics'},
        ]
      },
      {
        name: 'Ch.4 Exponentiation',
        children: [
          {name: 'Intro to Exponentiation', urlName: 'AnIntroductiontoExponentiation'},
          {name: 'Applying Powers', urlName: 'Applying Powers'},
          {name: 'Intro to Exponent Rules', urlName: 'AnIntroductiontoExponent Rules'},
          {name: 'Exponent Rules - 2', urlName: 'ContinuingwithExponentRules'},
          {name: 'Scientific Notation', urlName: 'ScientificNotation'}
        ]
      },

      {
        name: 'Ch.5 Polynomials',
        children: [
          {name: 'Intro to Polynomails', urlName: 'AnintroductiontoPolynomails'},
          {name: 'Polynomial Multiplication', urlName: 'BeginningPolynomialMultiplicatio'},
          {name: 'Multivariate Polynomials - 1', urlName: 'OperationswithMultivariatePolynomials'},
          {name: 'Multivariate Polynomials - 2', urlName: 'ContinuingwithPolynomialMultiplication'},
          {name: 'Polynomial Factoring - 1', urlName: 'BeginningPolynomialFactoring'},
          {name: 'Polynomial Factoring - 2', urlName: 'ContinuingPolynomialFactoring'},
          {name: 'Multivariate Polynomials', urlName: 'FactoringMultivariatePolynomials'},
          {name: 'Prime Factorization', urlName: 'PolynomialPrimeFactorization'},
          {name: 'The Zero-Product Method', urlName: 'TheZeroProductMethod'}
        ]
      },
      {
        name: 'Ch.6 Roots',
        children: [
          {name: 'An Introduction to Roots', urlName: 'An Introduction to Roots'},
          {name: 'Product Property', urlName: 'AProductPropertyforSquareRoots'},
          {name: 'Adding and Subtracting', urlName: 'AddingandSubtractingSquareRoots'},
          {name: 'Quotients and Square Roots', urlName: 'QuotientsandSquareRoots'},
          {name: 'The Quadratic Formula - intro', urlName: 'PreparingfortheQuadratic Formula'},
          {name: 'Applying Roots', urlName: 'ApplyingRoots'}
        ]
      },

      {
        name: 'Ch.7 Quadratic Functions',
        children: [
          {name: 'The Square Root Method', urlName: 'TheSquareRootMethod'},
          {name: 'The Quadratic Formula', urlName: 'TheQuadraticFormula'},
          {name: 'Applying Quadratic Functions', urlName: 'ApplyingQuadraticFunctions'},
          {name: 'Standard Form', urlName: 'QuadraticFunctionsinStandardForm'}
        ]
      }
    ]
  }];


interface FoodNode {
  name: string;
  children?: FoodNode[];
  urlName?: string
}

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
      urlName: node.urlName
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
    this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor(private router: Router) {
    this.dataSource.data = TREE_DATA;
    this.sideNavOpen = true;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;


  changeNav() {
    this.sideNavOpen = !this.sideNavOpen;
  }

  redirectHome() {
    this.router.navigate(['/']);
  }
}
