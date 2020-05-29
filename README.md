# Vaadin 14+ Splash Screen demo

This app shows a splash screen until the first application view is loaded.
The splash screen has a simple CSS spinner, taken from https://tobiasahlin.com/spinkit/. 
The HTML / CSS for it is inlined into the `frontend/index.html` file.
Inlining is important for splash screens because you would want to show it ASAP, and loading separate CSS files adds time.
The code to hide the splash screen is in the end of the `frontend/index.ts` file.


See the [`v14`](https://github.com/vlukashov/vaadin-splash-screen-demo/tree/v14) branch for a Vaadin 14 (LTS) version.
The `master` branch is Vaadin 16.

## Running the Application

Import the project to the IDE of your choosing as a Maven project.

Run the application using `mvn spring-boot:run` or by running the `Application` class directly from your IDE.

Open http://localhost:8080/ in your browser.

If you want to run the application locally in the production mode, run `mvn spring-boot:run -Pproduction`.

To run Integration Tests, execute `mvn verify -Pit`.

### Live Reload (optional)

With live reload, you can see the results of your code changes immediately. 
When you edit your Java code and recompile it, the application changes will be automatically reloaded and the browser is refreshed.
This is done by leveraging [Spring Boot Developer Tools](https://docs.spring.io/spring-boot/docs/2.1.5.RELEASE/reference/html/using-boot-devtools.html). 
To be able to see the changes in the browser tab, the page still needs to be reloaded. 
That can also  be automated via a LiveReload browser extension. 
One such extension for Google Chrome is [LiveReload](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei). 
In Firefox, [LiveReload - Web extension](https://addons.mozilla.org/en-US/firefox/addon/livereload-web-extension/) can be used.
You can find such similar extensions for other major browsers too.
These extensions add an icon to your browser next to the address bar.
To enable the extension, you should click that icon after you opened your application. 

You can find more information at [Live Reload in Spring Boot Applications](https://vaadin.com/docs/flow/workflow/tutorial-spring-boot-live-reload.html) document.

## Structure

Vaadin web applications are full-stack and include both client-side and server-side code in the same project.

| Directory | Description |
| :--- | :--- |
| `frontend/` | Client-side source directory |
| &nbsp;&nbsp;&nbsp;&nbsp;`index.html` | HTML template |
| &nbsp;&nbsp;&nbsp;&nbsp;`index.ts` | Frontend entrypoint |
| &nbsp;&nbsp;&nbsp;&nbsp;`main-layout.ts` | Main layout Web Component (optional) |
| &nbsp;&nbsp;&nbsp;&nbsp;`views/` | UI views Web Components (TypeScript / HTML) |
| &nbsp;&nbsp;&nbsp;&nbsp;`styles/` | Styles directory (CSS) |
| `src/main/java/<groupId>/` | Server-side source directory |
| &nbsp;&nbsp;&nbsp;&nbsp;`Application.java` | Server entrypoint |
| &nbsp;&nbsp;&nbsp;&nbsp;`AppShell.java` | application-shell configuration |

## More Information

- [Vaadin Documentation](https://vaadin.com/docs) 
- [Using Vaadin and Spring](https://vaadin.com/docs/v14/flow/spring/tutorial-spring-basic.html) article
- [Quick Start Guide](https://vaadin.com/docs/v15/flow/typescript/quick-start-guide.html for Vaadin applications.

