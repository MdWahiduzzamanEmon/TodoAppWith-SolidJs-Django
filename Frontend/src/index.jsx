/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';
const App = lazy(() => import('./App'));

import { Router } from '@solidjs/router';
import { lazy, Suspense } from 'solid-js';
import { Spinner } from 'solid-bootstrap';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?',
  );
}

render(() => (
  <Suspense fallback={
    <div class="d-flex justify-content-center align-items-center" style="height: 100vh;">
      <Spinner animation="grow" />
    </div>
  }>
    <Router >
      <App />
    </ Router >
  </ Suspense>
)
  , root);
