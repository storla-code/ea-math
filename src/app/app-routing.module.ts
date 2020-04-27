import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {
  AddingandSubtractingFractions,
  AddingandSubtractingSquareRoots,
  AddingIntegers,
  AnIntroductiontoExponentiation,
  AnIntroductiontoExponentRules,
  AnIntroductiontoFunctions,
  AnIntroductiontoLinearEquations,
  AnintroductiontoPolynomails,
  AnIntroductiontoRoots,
  AnIntroductiontoWordProblems,
  ApplyingPowers,
  ApplyingQuadraticFunctions,
  ApplyingRoots,
  ApplyingtheOrderofOperations,
  AProductPropertyforSquareRoots,
  BeginningPolynomialFactoring,
  BeginningPolynomialMultiplication,
  ConcludingLinearEquations,
  ContinuingPolynomialFactoring,
  ContinuingwithExponentRules,
  ContinuingwithLinearEquations,
  ContinuingwithPolynomialMultiplication,
  ContinuingwithWordProblems,
  FactoringMultivariatePolynomials,
  Intercepts, LinearFunctionsinSlopeInterceptForm,
  MultiplyingandDividingFractions,
  MultiplyingandDividingIntegers,
  OperationswithMultivariatePolynomials,
  OtherLinearFunctionTopics,
  PolynomialPrimeFactorization,
  PreparingforLinearEquationsPart1,
  PreparingforLinearEquationsPart2,
  PreparingfortheQuadraticFormula,
  QuadraticFunctionsinStandardForm,
  QuotientsandSquareRoots,
  ReducingFractions, RewritingLinearFunctionsIntoSlopeInterceptForm,
  ScientificNotation,
  SolvingLinearInequalities,
  SubtractingIntegers,
  TheOrderofOperations,
  TheQuadraticFormula,
  TheSlopeofaLinearFunction,
  TheSolutionSetforaLinearInequality,
  TheSquareRootMethod,
  TheZeroProductMethod
} from './pages/pages.component';
import {HomeComponent} from './home/home.component';

let spreadElements = [{path: 'TheOrderofOperations', component: TheOrderofOperations},
  {path: 'MultiplyingandDividingIntegers', component: MultiplyingandDividingIntegers},
  {path: 'AddingIntegers', component: AddingIntegers},
  {path: 'SubtractingIntegers', component: SubtractingIntegers},
  {path: 'ReducingFractions', component: ReducingFractions},
  {path: 'MultiplyingandDividingFractions', component: MultiplyingandDividingFractions},
  {path: 'AddingandSubtractingFractions', component: AddingandSubtractingFractions},
  {path: 'ApplyingtheOrderofOperations', component: ApplyingtheOrderofOperations},
  {path: 'PreparingforLinearEquationsPart1', component: PreparingforLinearEquationsPart1},
  {path: 'PreparingforLinearEquationsPart2', component: PreparingforLinearEquationsPart2},
  {path: 'AnIntroductiontoLinearEquations', component: AnIntroductiontoLinearEquations},
  {path: 'ContinuingwithLinearEquations', component: ContinuingwithLinearEquations},
  {path: 'ConcludingLinearEquations', component: ConcludingLinearEquations},
  {path: 'AnIntroductiontoWordProblems', component: AnIntroductiontoWordProblems},
  {path: 'ContinuingwithWordProblems', component: ContinuingwithWordProblems},
  {path: 'TheSolutionSetforaLinearInequality', component: TheSolutionSetforaLinearInequality},
  {path: 'SolvingLinearInequalities', component: SolvingLinearInequalities},
  {path: 'AnIntroductiontoFunctions', component: AnIntroductiontoFunctions},
  {path: 'Intercepts', component: Intercepts},
  {path: 'TheSlopeofaLinearFunction', component: TheSlopeofaLinearFunction},
  {path: 'LinearFunctionsinSlope-InterceptForm', component: LinearFunctionsinSlopeInterceptForm},
  {path: 'RewritingLinearFunctionsIntoSlope-InterceptForm', component: RewritingLinearFunctionsIntoSlopeInterceptForm},
  {path: 'OtherLinearFunctionTopics', component: OtherLinearFunctionTopics},
  {path: 'AnIntroductiontoExponentiation', component: AnIntroductiontoExponentiation},
  {path: 'ApplyingPowers', component: ApplyingPowers},
  {path: 'AnIntroductiontoExponentRules', component: AnIntroductiontoExponentRules},
  {path: 'ContinuingwithExponentRules', component: ContinuingwithExponentRules},
  {path: 'ScientificNotation', component: ScientificNotation},
  {path: 'AnintroductiontoPolynomails', component: AnintroductiontoPolynomails},
  {path: 'BeginningPolynomialMultiplication', component: BeginningPolynomialMultiplication},
  {path: 'OperationswithMultivariatePolynomials', component: OperationswithMultivariatePolynomials},
  {path: 'ContinuingwithPolynomialMultiplication', component: ContinuingwithPolynomialMultiplication},
  {path: 'BeginningPolynomialFactoring', component: BeginningPolynomialFactoring},
  {path: 'ContinuingPolynomialFactoring', component: ContinuingPolynomialFactoring},
  {path: 'FactoringMultivariatePolynomials', component: FactoringMultivariatePolynomials},
  {path: 'PolynomialPrimeFactorization', component: PolynomialPrimeFactorization},
  {path: 'TheZero-ProductMethod', component: TheZeroProductMethod},
  {path: 'AnIntroductiontoRoots', component: AnIntroductiontoRoots},
  {path: 'AProductPropertyforSquareRoots', component: AProductPropertyforSquareRoots},
  {path: 'AddingandSubtractingSquareRoots', component: AddingandSubtractingSquareRoots},
  {path: 'QuotientsandSquareRoots', component: QuotientsandSquareRoots},
  {path: 'PreparingfortheQuadraticFormula', component: PreparingfortheQuadraticFormula},
  {path: 'ApplyingRoots', component: ApplyingRoots},
  {path: 'TheSquareRootMethod', component: TheSquareRootMethod},
  {path: 'TheQuadraticFormula', component: TheQuadraticFormula},
  {path: 'ApplyingQuadraticFunctions', component: ApplyingQuadraticFunctions},
  {path: 'QuadraticFunctionsinStandardForm', component: QuadraticFunctionsinStandardForm}
];


const routes: Routes = [
  ...spreadElements,
  { path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
