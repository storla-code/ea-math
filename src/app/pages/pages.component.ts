import {Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer, SafeHtml, SafeResourceUrl, SafeScript, SafeStyle, SafeUrl} from '@angular/platform-browser';

export interface Video {
  title: string;
  video: string;
}


@Component({
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class TheOrderofOperations implements OnInit {

  ngOnInit(): void {}

  constructor(public sanitizer: DomSanitizer) {}
  title = 'TheOrderofOperations';
  data = [
    {
      title: 'Beginning with the basic four',
      video: '/assets/video.mp4'
    },
    {
      title: 'Simplifying explicit grouping',
      video: '/assets/video.mp4'
    },
    {
      title:  'Simplifying implicit grouping',
      video: '/assets/video.mp4'
    },
    {
      title: 'Vocabulary practice - basic four',
      video: '/assets/video.mp4'
    },
    {
      title: 'The Distributive PropertyPart 1',
      video: '/assets/video.mp4'
    },
    {
      title: 'The Distributive Property Part 2',
      video: '/assets/video.mp4'
    },
  ];

  myListObject: Video[] = JSON.parse(JSON.stringify(this.data));
}

@Component({
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class MultiplyingandDividingIntegers implements OnInit {
  ngOnInit(): void {}
  constructor(public sanitizer: DomSanitizer) {}
  title = 'MultiplyingandDividingIntegers';
  data = [
    {
      title: 'MultiplyingandDividingIntegers - 1',
      video: '/assets/video.mp4'
    },
    {
      title: 'MultiplyingandDividingIntegers - 2',
      video: '/assets/video.mp4'
    }
  ];
  myListObject: Video[] = JSON.parse(JSON.stringify(this.data));
}

@Component({
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class AddingIntegers implements OnInit {
  ngOnInit(): void {}
  constructor(public sanitizer: DomSanitizer) {}
  title = 'AddingIntegers';
  data = [
    {
      title: 'AddingIntegers - 1',
      video: '/assets/video.mp4'
    },
    {
      title: 'AddingIntegers - 2',
      video: '/assets/video.mp4'
    }
  ];
  myListObject: Video[] = JSON.parse(JSON.stringify(this.data));
}

@Component({
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
  selector: 'subtracting-integers'
})
export class SubtractingIntegers implements OnInit {
  ngOnInit(): void {}
  constructor(public sanitizer: DomSanitizer) {}
  title = 'SubtractingIntegers';
  data = [
    {
      title: 'SubtractingIntegers - 1',
      video: '/assets/video.mp4'
    },
    {
      title: 'SubtractingIntegers - 2',
      video: '/assets/video.mp4'
    }
  ];
  myListObject: Video[] = JSON.parse(JSON.stringify(this.data));
}

@Component({
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class ReducingFractions implements OnInit {
  ngOnInit(): void {}
  constructor(public sanitizer: DomSanitizer) {}
  title = 'ReducingFractions';
  data = [
    {
      title: 'ReducingFractions - 1',
      video: '/assets/video.mp4'
    },
    {
      title: 'ReducingFractions - 2',
      video: '/assets/video.mp4'
    }
  ];
  myListObject: Video[] = JSON.parse(JSON.stringify(this.data));
}

@Component({
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class MultiplyingandDividingFractions implements OnInit {
  ngOnInit(): void {}
  constructor(public sanitizer: DomSanitizer) {}
  title = 'MultiplyingandDividingFractions';
  data = [
    {
      title: 'MultiplyingandDividingFractions - 1',
      video: '/assets/video.mp4'
    },
    {
      title: 'MultiplyingandDividingFractions - 2',
      video: '/assets/video.mp4'
    }
  ];
  myListObject: Video[] = JSON.parse(JSON.stringify(this.data));
}

@Component({
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class AddingandSubtractingFractions implements OnInit {
  ngOnInit(): void {}
  constructor(public sanitizer: DomSanitizer) {}
  title = 'AddingandSubtractingFractions';
  data = [
    {
      title: 'AddingandSubtractingFractions - 1',
      video: '/assets/video.mp4'
    },
    {
      title: 'AddingandSubtractingFractions - 2',
      video: '/assets/video.mp4'
    }
  ];
  myListObject: Video[] = JSON.parse(JSON.stringify(this.data));
}

@Component({
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class ApplyingtheOrderofOperations implements OnInit {
  ngOnInit(): void {}
  constructor(public sanitizer: DomSanitizer) {}
  title = 'ApplyingtheOrderofOperations';
  data = [
    {
      title: 'ApplyingtheOrderofOperations - 1',
      video: '/assets/video.mp4'
    },
    {
      title: 'ApplyingtheOrderofOperations - 2',
      video: '/assets/video.mp4'
    }
  ];
  myListObject: Video[] = JSON.parse(JSON.stringify(this.data));
}

@Component({
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PreparingforLinearEquationsPart1 implements OnInit {
  ngOnInit(): void {}
  constructor(public sanitizer: DomSanitizer) {}
  title = 'PreparingforLinearEquationsPart1';
  data = [
    {
      title: 'PreparingforLinearEquationsPart1 - 1',
      video: '/assets/video.mp4'
    },
    {
      title: 'PreparingforLinearEquationsPart1 - 2',
      video: '/assets/video.mp4'
    }
  ];
  myListObject: Video[] = JSON.parse(JSON.stringify(this.data));
}

@Component({
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PreparingforLinearEquationsPart2 implements OnInit {
  ngOnInit(): void {}
  constructor(public sanitizer: DomSanitizer) {}
  title = 'PreparingforLinearEquationsPart2';
  data = [
    {
      title: 'PreparingforLinearEquationsPart2 - 1',
      video: '/assets/video.mp4'
    },
    {
      title: 'PreparingforLinearEquationsPart2 - 2',
      video: '/assets/video.mp4'
    }
  ];
  myListObject: Video[] = JSON.parse(JSON.stringify(this.data));
}

@Component({
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class AnIntroductiontoLinearEquations implements OnInit {
  ngOnInit(): void {}
  constructor(public sanitizer: DomSanitizer) {}
  title = 'AnIntroductiontoLinearEquations';
  data = [
    {
      title: 'AnIntroductiontoLinearEquations - 1',
      video: '/assets/video.mp4'
    },
    {
      title: 'AnIntroductiontoLinearEquations - 2',
      video: '/assets/video.mp4'
    }
  ];
  myListObject: Video[] = JSON.parse(JSON.stringify(this.data));
}

@Component({
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class ContinuingwithLinearEquations implements OnInit {
  ngOnInit(): void {}
  constructor(public sanitizer: DomSanitizer) {}
  title = 'ContinuingwithLinearEquations';
  data = [
    {
      title: 'ContinuingwithLinearEquations - 1',
      video: '/assets/video.mp4'
    },
    {
      title: 'ContinuingwithLinearEquations - 2',
      video: '/assets/video.mp4'
    }
  ];
  myListObject: Video[] = JSON.parse(JSON.stringify(this.data));
}

@Component({
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class ConcludingLinearEquations implements OnInit {
  ngOnInit(): void {}
  constructor(public sanitizer: DomSanitizer) {}
  title = 'ConcludingLinearEquations';
  data = [
    {
      title: 'ConcludingLinearEquations - 1',
      video: '/assets/video.mp4'
    },
    {
      title: 'ConcludingLinearEquations - 2',
      video: '/assets/video.mp4'
    }
  ];
  myListObject: Video[] = JSON.parse(JSON.stringify(this.data));
}

@Component({
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class AnIntroductiontoWordProblems implements OnInit {
  ngOnInit(): void {}
  constructor(public sanitizer: DomSanitizer) {}
  title = 'AnIntroductiontoWordProblems';
  data = [
    {
      title: 'AnIntroductiontoWordProblems - 1',
      video: '/assets/video.mp4'
    },
    {
      title: 'AnIntroductiontoWordProblems - 2',
      video: '/assets/video.mp4'
    }
  ];
  myListObject: Video[] = JSON.parse(JSON.stringify(this.data));
}

@Component({
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class ContinuingwithWordProblems implements OnInit {
  ngOnInit(): void {}
  constructor(public sanitizer: DomSanitizer) {}
  title = 'ContinuingwithWordProblems';
  data = [
    {
      title: 'ContinuingwithWordProblems - 1',
      video: '/assets/video.mp4'
    },
    {
      title: 'ContinuingwithWordProblems - 2',
      video: '/assets/video.mp4'
    }
  ];
  myListObject: Video[] = JSON.parse(JSON.stringify(this.data));
}

@Component({
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class TheSolutionSetforaLinearInequality implements OnInit {
  ngOnInit(): void {}
  constructor(public sanitizer: DomSanitizer) {}
  title = 'TheSolutionSetforaLinearInequality';
  data = [
    {
      title: 'TheSolutionSetforaLinearInequality - 1',
      video: '/assets/video.mp4'
    },
    {
      title: 'TheSolutionSetforaLinearInequality - 2',
      video: '/assets/video.mp4'
    }
  ];
  myListObject: Video[] = JSON.parse(JSON.stringify(this.data));
}

@Component({
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class SolvingLinearInequalities implements OnInit {
  ngOnInit(): void {}
  constructor(public sanitizer: DomSanitizer) {}
  title = 'SolvingLinearInequalities';
  data = [
    {
      title: 'SolvingLinearInequalities - 1',
      video: '/assets/video.mp4'
    },
    {
      title: 'SolvingLinearInequalities - 2',
      video: '/assets/video.mp4'
    }
  ];
  myListObject: Video[] = JSON.parse(JSON.stringify(this.data));
}

@Component({
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class AnIntroductiontoFunctions implements OnInit {
  ngOnInit(): void {}
  constructor(public sanitizer: DomSanitizer) {}
  title = 'AnIntroductiontoFunctions';
  data = [
    {
      title: 'AnIntroductiontoFunctions - 1',
      video: '/assets/video.mp4'
    },
    {
      title: 'AnIntroductiontoFunctions - 2',
      video: '/assets/video.mp4'
    }
  ];
  myListObject: Video[] = JSON.parse(JSON.stringify(this.data));
}

@Component({
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class Intercepts implements OnInit {
  ngOnInit(): void {}
  constructor(public sanitizer: DomSanitizer) {}
  title = 'Intercepts';
  data = [
    {
      title: 'Intercepts - 1',
      video: '/assets/video.mp4'
    },
    {
      title: 'Intercepts - 2',
      video: '/assets/video.mp4'
    }
  ];
  myListObject: Video[] = JSON.parse(JSON.stringify(this.data));
}

@Component({
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class TheSlopeofaLinearFunction implements OnInit {
  ngOnInit(): void {}
  constructor(public sanitizer: DomSanitizer) {}
  title = 'TheSlopeofaLinearFunction';
  data = [
    {
      title: 'TheSlopeofaLinearFunction - 1',
      video: '/assets/video.mp4'
    },
    {
      title: 'TheSlopeofaLinearFunction - 2',
      video: '/assets/video.mp4'
    }
  ];
  myListObject: Video[] = JSON.parse(JSON.stringify(this.data));
}

@Component({
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class LinearFunctionsinSlopeInterceptForm implements OnInit {
  ngOnInit(): void {}
  constructor(public sanitizer: DomSanitizer) {}
  title = 'LinearFunctionsinSlope';
  data = [
    {
      title: 'LinearFunctionsinSlope - 1',
      video: '/assets/video.mp4'
    },
    {
      title: 'LinearFunctionsinSlope - 2',
      video: '/assets/video.mp4'
    }
  ];
  myListObject: Video[] = JSON.parse(JSON.stringify(this.data));
}

@Component({
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class RewritingLinearFunctionsIntoSlopeInterceptForm implements OnInit {
  ngOnInit(): void {}
  constructor(public sanitizer: DomSanitizer) {}
  title = 'RewritingLinearFunctionsIntoSlope';
  data = [
    {
      title: 'RewritingLinearFunctionsIntoSlope - 1',
      video: '/assets/video.mp4'
    },
    {
      title: 'RewritingLinearFunctionsIntoSlope - 2',
      video: '/assets/video.mp4'
    }
  ];
  myListObject: Video[] = JSON.parse(JSON.stringify(this.data));
}

@Component({
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class OtherLinearFunctionTopics implements OnInit {
  ngOnInit(): void {}
  constructor(public sanitizer: DomSanitizer) {}
  title = 'OtherLinearFunctionTopics';
  data = [
    {
      title: 'OtherLinearFunctionTopics - 1',
      video: '/assets/video.mp4'
    },
    {
      title: 'OtherLinearFunctionTopics - 2',
      video: '/assets/video.mp4'
    }
  ];
  myListObject: Video[] = JSON.parse(JSON.stringify(this.data));
}

@Component({
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class AnIntroductiontoExponentiation implements OnInit {
  ngOnInit(): void {}
  constructor(public sanitizer: DomSanitizer) {}
  title = 'AnIntroductiontoExponentiation';
  data = [
    {
      title: 'AnIntroductiontoExponentiation - 1',
      video: '/assets/video.mp4'
    },
    {
      title: 'AnIntroductiontoExponentiation - 2',
      video: '/assets/video.mp4'
    }
  ];
  myListObject: Video[] = JSON.parse(JSON.stringify(this.data));
}

@Component({
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class ApplyingPowers implements OnInit {
  ngOnInit(): void {}
  constructor(public sanitizer: DomSanitizer) {}
  title = 'ApplyingPowers';
  data = [
    {
      title: 'ApplyingPowers - 1',
      video: '/assets/video.mp4'
    },
    {
      title: 'ApplyingPowers - 2',
      video: '/assets/video.mp4'
    }
  ];
  myListObject: Video[] = JSON.parse(JSON.stringify(this.data));
}

@Component({
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class AnIntroductiontoExponentRules implements OnInit {
  ngOnInit(): void {}
  constructor(public sanitizer: DomSanitizer) {}
  title = 'AnIntroductiontoExponentRules';
  data = [
    {
      title: 'AnIntroductiontoExponentRules - 1',
      video: '/assets/video.mp4'
    },
    {
      title: 'AnIntroductiontoExponentRules - 2',
      video: '/assets/video.mp4'
    }
  ];
  myListObject: Video[] = JSON.parse(JSON.stringify(this.data));
}

@Component({
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class ContinuingwithExponentRules implements OnInit {
  ngOnInit(): void {}
  constructor(public sanitizer: DomSanitizer) {}
  title = 'ContinuingwithExponentRules';
  data = [
    {
      title: 'ContinuingwithExponentRules - 1',
      video: '/assets/video.mp4'
    },
    {
      title: 'ContinuingwithExponentRules - 2',
      video: '/assets/video.mp4'
    }
  ];
  myListObject: Video[] = JSON.parse(JSON.stringify(this.data));
}

@Component({
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class ScientificNotation implements OnInit {
  ngOnInit(): void {}
  constructor(public sanitizer: DomSanitizer) {}
  title = 'ScientificNotation';
  data = [
    {
      title: 'ScientificNotation - 1',
      video: '/assets/video.mp4'
    },
    {
      title: 'ScientificNotation - 2',
      video: '/assets/video.mp4'
    }
  ];
  myListObject: Video[] = JSON.parse(JSON.stringify(this.data));
}

@Component({
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class AnintroductiontoPolynomails implements OnInit {
  ngOnInit(): void {}
  constructor(public sanitizer: DomSanitizer) {}
  title = 'AnintroductiontoPolynomails';
  data = [
    {
      title: 'AnintroductiontoPolynomails - 1',
      video: '/assets/video.mp4'
    },
    {
      title: 'AnintroductiontoPolynomails - 2',
      video: '/assets/video.mp4'
    }
  ];
  myListObject: Video[] = JSON.parse(JSON.stringify(this.data));
}

@Component({
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class BeginningPolynomialMultiplication implements OnInit {
  ngOnInit(): void {}
  constructor(public sanitizer: DomSanitizer) {}
  title = 'BeginningPolynomialMultiplication';
  data = [
    {
      title: 'BeginningPolynomialMultiplication - 1',
      video: '/assets/video.mp4'
    },
    {
      title: 'BeginningPolynomialMultiplication - 2',
      video: '/assets/video.mp4'
    }
  ];
  myListObject: Video[] = JSON.parse(JSON.stringify(this.data));
}

@Component({
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class OperationswithMultivariatePolynomials implements OnInit {
  ngOnInit(): void {}
  constructor(public sanitizer: DomSanitizer) {}
  title = 'OperationswithMultivariatePolynomials';
  data = [
    {
      title: 'OperationswithMultivariatePolynomials - 1',
      video: '/assets/video.mp4'
    },
    {
      title: 'OperationswithMultivariatePolynomials - 2',
      video: '/assets/video.mp4'
    }
  ];
  myListObject: Video[] = JSON.parse(JSON.stringify(this.data));
}

@Component({
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class ContinuingwithPolynomialMultiplication implements OnInit {
  ngOnInit(): void {}
  constructor(public sanitizer: DomSanitizer) {}
  title = 'ContinuingwithPolynomialMultiplication';
  data = [
    {
      title: 'ContinuingwithPolynomialMultiplication - 1',
      video: '/assets/video.mp4'
    },
    {
      title: 'ContinuingwithPolynomialMultiplication - 2',
      video: '/assets/video.mp4'
    }
  ];
  myListObject: Video[] = JSON.parse(JSON.stringify(this.data));
}

@Component({
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class BeginningPolynomialFactoring implements OnInit {
  ngOnInit(): void {}
  constructor(public sanitizer: DomSanitizer) {}
  title = 'BeginningPolynomialFactoring';
  data = [
    {
      title: 'BeginningPolynomialFactoring - 1',
      video: '/assets/video.mp4'
    },
    {
      title: 'BeginningPolynomialFactoring - 2',
      video: '/assets/video.mp4'
    }
  ];
  myListObject: Video[] = JSON.parse(JSON.stringify(this.data));
}

@Component({
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class ContinuingPolynomialFactoring implements OnInit {
  ngOnInit(): void {}
  constructor(public sanitizer: DomSanitizer) {}
  title = 'ContinuingPolynomialFactoring';
  data = [
    {
      title: 'ContinuingPolynomialFactoring - 1',
      video: '/assets/video.mp4'
    },
    {
      title: 'ContinuingPolynomialFactoring - 2',
      video: '/assets/video.mp4'
    }
  ];
  myListObject: Video[] = JSON.parse(JSON.stringify(this.data));
}

@Component({
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class FactoringMultivariatePolynomials implements OnInit {
  ngOnInit(): void {}
  constructor(public sanitizer: DomSanitizer) {}
  title = 'FactoringMultivariatePolynomials';
  data = [
    {
      title: 'FactoringMultivariatePolynomials - 1',
      video: '/assets/video.mp4'
    },
    {
      title: 'FactoringMultivariatePolynomials - 2',
      video: '/assets/video.mp4'
    }
  ];
  myListObject: Video[] = JSON.parse(JSON.stringify(this.data));
}

@Component({
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PolynomialPrimeFactorization implements OnInit {
  ngOnInit(): void {}
  constructor(public sanitizer: DomSanitizer) {}
  title = 'PolynomialPrimeFactorization';
  data = [
    {
      title: 'PolynomialPrimeFactorization - 1',
      video: '/assets/video.mp4'
    },
    {
      title: 'PolynomialPrimeFactorization - 2',
      video: '/assets/video.mp4'
    }
  ];
  myListObject: Video[] = JSON.parse(JSON.stringify(this.data));
}

@Component({
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class TheZeroProductMethod implements OnInit {
  ngOnInit(): void {}
  constructor(public sanitizer: DomSanitizer) {}
  title = 'TheZero';
  data = [
    {
      title: 'TheZero - 1',
      video: '/assets/video.mp4'
    },
    {
      title: 'TheZero - 2',
      video: '/assets/video.mp4'
    }
  ];
  myListObject: Video[] = JSON.parse(JSON.stringify(this.data));
}

@Component({
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class AnIntroductiontoRoots implements OnInit {
  ngOnInit(): void {}
  constructor(public sanitizer: DomSanitizer) {}
  title = 'AnIntroductiontoRoots';
  data = [
    {
      title: 'AnIntroductiontoRoots - 1',
      video: '/assets/video.mp4'
    },
    {
      title: 'AnIntroductiontoRoots - 2',
      video: '/assets/video.mp4'
    }
  ];
  myListObject: Video[] = JSON.parse(JSON.stringify(this.data));
}

@Component({
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class AProductPropertyforSquareRoots implements OnInit {
  ngOnInit(): void {}
  constructor(public sanitizer: DomSanitizer) {}
  title = 'AProductPropertyforSquareRoots';
  data = [
    {
      title: 'AProductPropertyforSquareRoots - 1',
      video: '/assets/video.mp4'
    },
    {
      title: 'AProductPropertyforSquareRoots - 2',
      video: '/assets/video.mp4'
    }
  ];
  myListObject: Video[] = JSON.parse(JSON.stringify(this.data));
}

@Component({
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class AddingandSubtractingSquareRoots implements OnInit {
  ngOnInit(): void {}
  constructor(public sanitizer: DomSanitizer) {}
  title = 'AddingandSubtractingSquareRoots';
  data = [
    {
      title: 'AddingandSubtractingSquareRoots - 1',
      video: '/assets/video.mp4'
    },
    {
      title: 'AddingandSubtractingSquareRoots - 2',
      video: '/assets/video.mp4'
    }
  ];
  myListObject: Video[] = JSON.parse(JSON.stringify(this.data));
}

@Component({
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class QuotientsandSquareRoots implements OnInit {
  ngOnInit(): void {}
  constructor(public sanitizer: DomSanitizer) {}
  title = 'QuotientsandSquareRoots';
  data = [
    {
      title: 'QuotientsandSquareRoots - 1',
      video: '/assets/video.mp4'
    },
    {
      title: 'QuotientsandSquareRoots - 2',
      video: '/assets/video.mp4'
    }
  ];
  myListObject: Video[] = JSON.parse(JSON.stringify(this.data));
}

@Component({
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PreparingfortheQuadraticFormula implements OnInit {
  ngOnInit(): void {}
  constructor(public sanitizer: DomSanitizer) {}
  title = 'PreparingfortheQuadraticFormula';
  data = [
    {
      title: 'PreparingfortheQuadraticFormula - 1',
      video: '/assets/video.mp4'
    },
    {
      title: 'PreparingfortheQuadraticFormula - 2',
      video: '/assets/video.mp4'
    }
  ];
  myListObject: Video[] = JSON.parse(JSON.stringify(this.data));
}

@Component({
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class ApplyingRoots implements OnInit {
  ngOnInit(): void {}
  constructor(public sanitizer: DomSanitizer) {}
  title = 'ApplyingRoots';
  data = [
    {
      title: 'ApplyingRoots - 1',
      video: '/assets/video.mp4'
    },
    {
      title: 'ApplyingRoots - 2',
      video: '/assets/video.mp4'
    }
  ];
  myListObject: Video[] = JSON.parse(JSON.stringify(this.data));
}

@Component({
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class TheSquareRootMethod implements OnInit {
  ngOnInit(): void {}
  constructor(public sanitizer: DomSanitizer) {}
  title = 'TheSquareRootMethod';
  data = [
    {
      title: 'TheSquareRootMethod - 1',
      video: '/assets/video.mp4'
    },
    {
      title: 'TheSquareRootMethod - 2',
      video: '/assets/video.mp4'
    }
  ];
  myListObject: Video[] = JSON.parse(JSON.stringify(this.data));
}

@Component({
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class TheQuadraticFormula implements OnInit {
  ngOnInit(): void {}
  constructor(public sanitizer: DomSanitizer) {}
  title = 'TheQuadraticFormula';
  data = [
    {
      title: 'TheQuadraticFormula - 1',
      video: '/assets/video.mp4'
    },
    {
      title: 'TheQuadraticFormula - 2',
      video: '/assets/video.mp4'
    }
  ];
  myListObject: Video[] = JSON.parse(JSON.stringify(this.data));
}

@Component({
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class ApplyingQuadraticFunctions implements OnInit {
  ngOnInit(): void {}
  constructor(public sanitizer: DomSanitizer) {}
  title = 'ApplyingQuadraticFunctions';
  data = [
    {
      title: 'ApplyingQuadraticFunctions - 1',
      video: '/assets/video.mp4'
    },
    {
      title: 'ApplyingQuadraticFunctions - 2',
      video: '/assets/video.mp4'
    }
  ];
  myListObject: Video[] = JSON.parse(JSON.stringify(this.data));
}

@Component({
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class QuadraticFunctionsinStandardForm implements OnInit {
  ngOnInit(): void {}
  constructor(public sanitizer: DomSanitizer) {}
  title = 'QuadraticFunctionsinStandardForm';
  data = [
    {
      title: 'QuadraticFunctionsinStandardForm - 1',
      video: '/assets/video.mp4'
    },
    {
      title: 'QuadraticFunctionsinStandardForm - 2',
      video: '/assets/video.mp4'
    }
  ];
  myListObject: Video[] = JSON.parse(JSON.stringify(this.data));
}

