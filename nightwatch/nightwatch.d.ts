import { NightwatchCustomAssertions, NightwatchCustomCommands } from 'nightwatch'

declare module 'nightwatch' {
  interface NightwatchCustomAssertions {
    // Add your custom assertions' types here
    placeholderAssertion: (selector: string, count: number) => NightwatchBrowser
    // elementHasCount: (selector: string, count: number) => NightwatchBrowser
  }

  interface NightwatchCustomCommands {
    // Add your custom commands' types here
    // strictClick: (selector: string) => NightwatchBrowser
    placeholderCommand: (selector: string) => NightwatchBrowser
  }
}
