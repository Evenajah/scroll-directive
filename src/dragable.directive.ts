import { Directive, ElementRef, NgZone } from '@angular/core';
import { AsyncSubject, fromEvent, merge } from 'rxjs';
import { switchMap, takeUntil, debounceTime, tap } from 'rxjs/operators';

@Directive({ selector: '[appDragable]', standalone: true })
export class DragableDirective {
  private destroy$ = new AsyncSubject<void>();
  constructor(private el: ElementRef, private zone: NgZone) {
    const onMouseDown$ = merge(
      fromEvent<MouseEvent>(el.nativeElement, 'mousedown'),
      fromEvent<MouseEvent>(el.nativeElement, 'touchstart')
    ).pipe(debounceTime(0));
    const onMouseMove$ = merge(
      fromEvent<MouseEvent>(document, 'mousemove'),
      fromEvent<MouseEvent>(el.nativeElement, 'touchmove')
    ).pipe(debounceTime(0));
    const onMouseUp$ = merge(
      fromEvent<MouseEvent>(document, 'mouseup'),
      fromEvent<MouseEvent>(el.nativeElement, 'touchend')
    ).pipe(debounceTime(0));

    this.zone.runOutsideAngular(() => {
      onMouseDown$
        .pipe(
          switchMap((event) => {
            const startX = event.pageX - this.el.nativeElement.offsetLeft;
            const scrollLeft = this.el.nativeElement.scrollLeft;
            console.log({ startX });

            return onMouseMove$.pipe(
              tap((moveEvent) => {
                console.log(moveEvent);

                moveEvent.preventDefault();
                const x = moveEvent.pageX - this.el.nativeElement.offsetLeft;
                const walk = (x - startX) * 3;
                console.log(walk);

                this.el.nativeElement.scrollLeft = scrollLeft - walk;
              }),
              takeUntil(onMouseUp$)
            );
          }),
          takeUntil(this.destroy$)
        )
        .subscribe();
    });
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
