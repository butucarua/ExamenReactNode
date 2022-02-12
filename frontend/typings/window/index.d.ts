import { History } from 'history';

declare global {
  interface Window {
    renderEpam(containerId: string): void;

    unmountEpam(containerId: string): void;

    isRenderedByContainer: boolean;
  }
}
