import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

class LetContext<Type> {
    imtLet: Type | undefined;
}

@Directive({
    selector: '[imtLet]'
})
export class LetDirective<Type> {

    readonly context: LetContext<Type> = new LetContext<Type>();

    @Input()
    set imtLet(value: Type) {
        this.context.imtLet = value;
    }

    constructor(private readonly vc: ViewContainerRef,
                private readonly templateRef: TemplateRef<LetContext<Type>>) {
        this.vc.createEmbeddedView(this.templateRef, this.context);
    }
}
