import {Flow} from '@vaadin/flow-frontend/Flow';
import {Router} from '@vaadin/router';

const {serverSideRoutes} = new Flow({
  imports: () => import('../target/frontend/generated-flow-imports')
});

const routes = [
  // fallback to server-side Flow routes if no client-side routes match
  ...serverSideRoutes
];

const router = new Router(document.querySelector('#outlet'));
router.setRoutes(routes);

// If the app has client-side views, the splash screen should be hidden already
// at this point with
// document.querySelector('#splash-screen')!.classList.add('loaded');
//
// However, since this app has no client-side views, it would be too early to
// hide the splash screen until also loading a server-side view. Unfortunately,
// there is no public API to do that in Vaadin 16.0.0
// (see https://github.com/vaadin/flow/issues/8486)

// WARNING: accessing internal Flow APIs
// This may break on any Flow version upgrade without any prior notice
const original = (window as any).Vaadin.Flow.loading;
(window as any).Vaadin.Flow.loading = (action: boolean) => {
  // When this is called first time (action = true), do nothing.
  // That's when Flow starts loading and the splash screen is still visible.
  // There is no need to show the Flow loading indicator at that time.

  // When this is called second time (action = false), hide the splash screen
  // and restore the default behavior.
  // Next time Flow starts loading something the default loading indicator will
  // be visible.
  if (!action) {
    document.querySelector('#splash-screen')!.classList.add('loaded');
    (window as any).Vaadin.Flow.loading = original;
  }
};
